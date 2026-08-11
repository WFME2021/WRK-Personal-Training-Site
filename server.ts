import "dotenv/config";
import express from "express";
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase.ts';
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import { assessmentData } from "./data/assessmentData.ts";
import { calculateArchetype, calculateRecommendation } from "./services/assessmentLogic.ts";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Parse JSON bodies
  app.use(express.json({ limit: '50mb' }));

  // SEO 301 Redirects for old URLs
  app.get('/42-day-reset', (req, res) => {
    res.redirect(301, '/fitness-challenge-nz');
  });
  
  
  app.get('/personal-trainer-christchurch', (req, res) => {
    res.redirect(301, '/personal-training');
  });

  app.get('/online-personal-training-nz', (req, res) => {
    res.redirect(301, '/online-coaching');
  });

  app.get('/personal-training-christchurch-philosophy', (req, res) => {
    res.redirect(301, '/about');
  });

  app.get('/services', (req, res) => {
    res.redirect(301, '/');
  });

  app.get('/corporate-wellness', (req, res) => {
    res.redirect(301, '/workplace-wellness-program-nz');
  });

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Contact Form Submission
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, message, interest, referralSource } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Lazy load nodemailer
      let nodemailer;
      try {
        nodemailer = await import("nodemailer");
      } catch (importError) {
        console.error("Failed to import nodemailer:", importError);
        throw new Error("Internal Server Error: Email module missing");
      }

      const port = Number(process.env.SMTP_PORT) || 587;
      
      // Fix for "wrong version number" error:
      // Port 587 MUST use secure: false (STARTTLS)
      // Port 465 MUST use secure: true (Implicit SSL)
      const isSecure = port === 465;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: port,
        secure: isSecure,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS?.replace(/^"|"$/g, ''),
        },
      });

      const mailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Website" <info@wrkpersonaltraining.co.nz>',
        to: process.env.CONTACT_EMAIL || "info@wrkpersonaltraining.co.nz",
        subject: `New Inquiry from ${name} - ${interest || 'General'}`,
        text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Interest: ${interest}
Referral Source: ${referralSource}

Message:
${message}
        `,
        html: `
<h3>New Inquiry from Website</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Interest:</strong> ${interest}</p>
<p><strong>Referral Source:</strong> ${referralSource}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br/>')}</p>
        `,
      };

      const sendMailRobust = async (transporter: any, mailOptions: any, smtpUser: string | undefined) => {
        try {
          await transporter.sendMail(mailOptions);
          return true;
        } catch (error: any) {
          if (error.code === 'EAUTH' || error.responseCode === 535) {
            throw new Error("SMTP Authentication Failed: Please check your SMTP_USER and SMTP_PASS in Settings.");
          }
          if (
            error.responseCode === 554 || 
            error.responseCode === 550 || 
            (error.message && (error.message.includes('Sender address rejected') || error.message.includes('Access denied')))
          ) {
            console.warn("Primary sender address rejected. Falling back to SMTP_USER...");
            if (smtpUser && mailOptions.from !== smtpUser) {
              const fallbackOptions = { ...mailOptions, from: smtpUser, replyTo: mailOptions.from };
              await transporter.sendMail(fallbackOptions);
              return true;
            }
          }
          throw error;
        }
      };

      try {
        await sendMailRobust(transporter, mailOptions, process.env.SMTP_USER);
        console.log("Email sent successfully");
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
      }

      // --- Google Sheets Webhook Integration ---
      const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
      if (sheetsWebhookUrl) {
        try {
          await fetch(sheetsWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              type: 'contact',
              date: new Date().toISOString(),
              name,
              email,
              phone,
              interest,
              referralSource,
              message
            })
          });
          console.log('Successfully sent to Google Sheets Webhook');
        } catch (sheetsError: any) {
          console.error('Google Sheets Webhook Failed:', sheetsError.message);
        }
      }

      res.json({ success: true, message: "Processed inquiry" });
    } catch (error: any) {
      console.error("General error in /api/contact:", error);
      res.status(500).json({ error: "Failed to process request" });
    }
  });

  // Assessment Form Submission
  app.post("/api/assessment", async (req, res) => {
    const { name, email, answers, token } = req.body;
    const resultUrl = token ? `https://www.wrkpersonaltraining.co.nz/assessment/result/${token}` : '';

    if (!name || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Lazy load nodemailer
      let nodemailer;
      try {
        nodemailer = await import("nodemailer");
      } catch (importError) {
        console.error("Failed to import nodemailer:", importError);
        throw new Error("Internal Server Error: Email module missing");
      }

      const port = Number(process.env.SMTP_PORT) || 587;
      const isSecure = port === 465;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: port,
        secure: isSecure,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS?.replace(/^"|"$/g, ''),
        },
      });

      const getLabel = (qId: string, optionId: string) => {
        const q = assessmentData.questions.find(q => q.id === qId);
        if (!q) return optionId;
        const opt = q.options.find(o => o.id === optionId);
        return opt ? opt.label : optionId;
      };

      const locationLabel = getLabel('q1_location', answers['q1_location']);
      const goalLabel = getLabel('q2_goal', answers['q2_goal']);
      const timeLabel = getLabel('q3_time', answers['q3_time']);
      const constraintLabel = getLabel('q4_constraint', answers['q4_constraint']);
      const flagsLabel = getLabel('q6_flags', answers['q6_flags']);

      const archetype = calculateArchetype(answers);
      const recommendation = calculateRecommendation(answers);

      const archetypeLabel = archetype?.postGate.blueprintName || "Unknown Blueprint";
      const primaryBottleneck = archetype?.primaryBottleneck || "Unknown";
      const ruleThisWeek = archetype?.postGate.keyRuleCopy || "Unknown";

      const serviceNames: Record<string, string> = {
        "1-1": "1:1 Personal Training",
        "online": "Online Coaching",
        "reset": "42-Day Reset",
        "corporate": "Corporate Wellness"
      };

      const recommendedServiceName = serviceNames[recommendation.recommend.serviceId] || recommendation.recommend.serviceId;
      const recommendedServicePath = recommendation.recommend.href;

      const alternateServiceName = serviceNames[recommendation.alternate.serviceId] || recommendation.alternate.serviceId;
      const alternateServicePath = recommendation.alternate.href;

      const replyStarters: Record<string, string> = {
        "time_crunched": `Hi ${name}, I saw you completed the assessment. It looks like time is your biggest constraint right now. The Capacity Blueprint is designed exactly for this—focusing on minimum effective dose. Let me know if you have any questions on the 4-week progression.`,
        "stress_stacked": `Hi ${name}, thanks for running through the assessment. It looks like managing your stress load is the priority right now. The Stress-Smart Blueprint will help you build momentum without adding to the noise. Let me know if you'd like to chat about how to implement this.`,
        "pain_limited": `Hi ${name}, I saw your assessment results. Since you're working around some pain or injury, the priority is finding your pain-free baseline. The Pain-Smart Blueprint gives you the guardrails to keep moving safely. Let me know if you need help adjusting any of the movements.`,
        "nutrition_drifting": `Hi ${name}, thanks for completing the assessment. It looks like your training is consistent, but nutrition is the missing link. The Nutrition Blueprint focuses on simple, high-ROI habits rather than restrictive diets. Let me know if you want to discuss how to apply this to your routine.`,
        "motivation_drifting": `Hi ${name}, I saw you completed the assessment. It sounds like you need a clearer system to stay consistent. The System Blueprint is about removing friction and building reliable habits. Let me know if you'd like to jump on a quick call to map out your next step.`,
        "reset_mode": `Hi ${name}, thanks for running through the assessment. It looks like you're ready for a clean slate. The Reset Blueprint is designed to help you rebuild momentum without burning out in the first week. Let me know if you have any questions on the initial phase.`
      };

      const replyStarter = archetype ? replyStarters[archetype.id] : `Hi ${name}, thanks for completing the assessment. Let me know if you have any questions about your blueprint.`;

      const mailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Website" <info@wrkpersonaltraining.co.nz>',
        to: process.env.CONTACT_EMAIL || "info@wrkpersonaltraining.co.nz",
        subject: `Assessment Unlocked — ${name} — ${archetypeLabel} — ${locationLabel}`,
        text: `=== New Assessment Unlocked ===

Name: ${name}
Email: ${email}
Location: ${locationLabel}

--- Quick Summary ---
Goal: ${goalLabel}
Time available: ${timeLabel}
Main constraint: ${constraintLabel}
Pain/Recovery flag: ${flagsLabel}

--- Diagnostic Result ---
Archetype / Bottleneck: ${archetypeLabel}
Bottleneck statement: ${primaryBottleneck}
Rule this week: ${ruleThisWeek}

Recommended next step: ${recommendedServiceName}
Recommended link: https://www.wrkpersonaltraining.co.nz${recommendedServicePath}
Alternate option: ${alternateServiceName}
Alternate link: https://www.wrkpersonaltraining.co.nz${alternateServicePath}

--- Reply Starter (copy/paste) ---
${replyStarter}

--- Raw Answers (for reference) ---
${JSON.stringify(answers, null, 2)}
`,
        html: `<h3>=== New Assessment Unlocked ===</h3>

<p><strong>Name:</strong> ${name}<br/>
<strong>Email:</strong> ${email}<br/>
<strong>Location:</strong> ${locationLabel}</p>

<h4>--- Quick Summary ---</h4>
<p><strong>Goal:</strong> ${goalLabel}<br/>
<strong>Time available:</strong> ${timeLabel}<br/>
<strong>Main constraint:</strong> ${constraintLabel}<br/>
<strong>Pain/Recovery flag:</strong> ${flagsLabel}</p>

<h4>--- Diagnostic Result ---</h4>
<p><strong>Archetype / Bottleneck:</strong> ${archetypeLabel}<br/>
<strong>Bottleneck statement:</strong> ${primaryBottleneck}<br/>
<strong>Rule this week:</strong> ${ruleThisWeek}</p>

<p><strong>Recommended next step:</strong> ${recommendedServiceName}<br/>
<strong>Recommended link:</strong> <a href="https://www.wrkpersonaltraining.co.nz${recommendedServicePath}">https://www.wrkpersonaltraining.co.nz${recommendedServicePath}</a><br/>
<strong>Alternate option:</strong> ${alternateServiceName}<br/>
<strong>Alternate link:</strong> <a href="https://www.wrkpersonaltraining.co.nz${alternateServicePath}">https://www.wrkpersonaltraining.co.nz${alternateServicePath}</a></p>

<h4>--- Reply Starter (copy/paste) ---</h4>
<p><em>${replyStarter}</em></p>

<h4>--- Raw Answers (for reference) ---</h4>
<pre>${JSON.stringify(answers, null, 2)}</pre>
`,
      };

      const sendMailRobust = async (transporter: any, mailOptions: any, smtpUser: string | undefined) => {
        try {
          await transporter.sendMail(mailOptions);
          return true;
        } catch (error: any) {
          if (error.code === 'EAUTH' || error.responseCode === 535) {
            throw new Error("SMTP Authentication Failed: Please check your SMTP_USER and SMTP_PASS in Settings.");
          }
          if (
            error.responseCode === 554 || 
            error.responseCode === 550 || 
            (error.message && (error.message.includes('Sender address rejected') || error.message.includes('Access denied')))
          ) {
            console.warn("Primary sender address rejected. Falling back to SMTP_USER...");
            if (smtpUser && mailOptions.from !== smtpUser) {
              const fallbackOptions = { ...mailOptions, from: smtpUser, replyTo: mailOptions.from };
              await transporter.sendMail(fallbackOptions);
              return true;
            }
          }
          throw error;
        }
      };

      try {
        await sendMailRobust(transporter, mailOptions, process.env.SMTP_USER);
        console.log("Assessment email sent successfully");
      } catch (emailError) {
        console.error("Failed to send assessment email:", emailError);
      }

      const doseKey = answers['q3_time'] || 'three_days';
      const postGate = archetype?.postGate;
      const schedule = postGate ? postGate.scheduleByDose[doseKey as keyof typeof postGate.scheduleByDose] : undefined;
      const next7Days = archetype ? archetype.next7DaysByDose[doseKey as keyof typeof archetype.next7DaysByDose] : undefined;

      const scheduleText = schedule ? `
--- ${postGate?.scheduleTitle} ---
${schedule.title}
${schedule.lines.map((line: string) => `- ${line}`).join('\n')}
` : '';

      const protocolText = postGate ? `
--- ${postGate.protocolTitle} ---
${postGate.protocolCopy}

--- ${postGate.keyRuleTitle} ---
${postGate.keyRuleCopy}
` : '';

      const next7DaysText = next7Days ? `
--- ${archetype?.next7DaysTitle} ---
${next7Days.title}
${next7Days.days.map((day: any) => `
${day.label}:
${day.items.map((item: string) => `- ${item}`).join('\n')}`).join('\n')}
` : '';

      const scheduleHtml = schedule ? `
<h4>--- ${postGate?.scheduleTitle} ---</h4>
<p><strong>${schedule.title}</strong></p>
<ul>
${schedule.lines.map((line: string) => `<li>${line}</li>`).join('\n')}
</ul>
` : '';

      const protocolHtml = postGate ? `
<h4>--- ${postGate.protocolTitle} ---</h4>
<p>${postGate.protocolCopy}</p>

<h4>--- ${postGate.keyRuleTitle} ---</h4>
<p>${postGate.keyRuleCopy}</p>
` : '';

      const next7DaysHtml = next7Days ? `
<h4>--- ${archetype?.next7DaysTitle} ---</h4>
<p><strong>${next7Days.title}</strong></p>
${next7Days.days.map((day: any) => `
<p><strong>${day.label}:</strong></p>
<ul>
${day.items.map((item: string) => `<li>${item}</li>`).join('\n')}
</ul>`).join('\n')}
` : '';

      const userMailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Personal Training" <info@wrkpersonaltraining.co.nz>',
        to: email,
        subject: `Your Capacity Blueprint Results - WRK Personal Training`,
        text: `Hi ${name},

Thanks for completing the Capacity Blueprint Diagnostic. Here is your personalised plan.

--- Your Diagnostic Result ---
Archetype / Bottleneck: ${archetypeLabel}
Bottleneck statement: ${primaryBottleneck}
${scheduleText}${protocolText}${next7DaysText}
--- Recommended Next Steps ---
Recommended option: ${recommendedServiceName}
Link: https://www.wrkpersonaltraining.co.nz${recommendedServicePath}

Alternate option: ${alternateServiceName}
Link: https://www.wrkpersonaltraining.co.nz${alternateServicePath}

If you have any questions or want to discuss how to implement this, just reply to this email.

Best regards,
WRK Personal Training
`,
        html: `<p>Hi ${name},</p>
<p>Thanks for completing the Capacity Blueprint Diagnostic. Here is your personalised plan.</p>

<h4>--- Your Diagnostic Result ---</h4>
<p><strong>Archetype / Bottleneck:</strong> ${archetypeLabel}<br/>
<strong>Bottleneck statement:</strong> ${primaryBottleneck}</p>
${scheduleHtml}${protocolHtml}${next7DaysHtml}
<h4>--- Recommended Next Steps ---</h4>
<p><strong>Recommended option:</strong> ${recommendedServiceName}<br/>
<strong>Link:</strong> <a href="https://www.wrkpersonaltraining.co.nz${recommendedServicePath}">https://www.wrkpersonaltraining.co.nz${recommendedServicePath}</a></p>

<p><strong>Alternate option:</strong> ${alternateServiceName}<br/>
<strong>Link:</strong> <a href="https://www.wrkpersonaltraining.co.nz${alternateServicePath}">https://www.wrkpersonaltraining.co.nz${alternateServicePath}</a></p>

<p>If you have any questions or want to discuss how to implement this, just reply to this email.</p>

<p>Best regards,<br/>
WRK Personal Training</p>
`
      };

      try {
        await sendMailRobust(transporter, userMailOptions, process.env.SMTP_USER);
        console.log("Assessment email sent to user successfully");
      } catch (emailError) {
        console.error("Failed to send assessment email to user:", emailError);
      }

      // --- MailerLite Integration ---
      const rawKey = process.env.MAILERLITE_API_KEY || "";
      const MAILERLITE_API_KEY = rawKey.replace(/^"|"$/g, '').trim();
      
      const MAILERLITE_GROUPS = {
        time_crunched: "MAILERLITE_GROUP_TIME_CRUNCHED",
        stress_stacked: "MAILERLITE_GROUP_STRESS_STACKED",
        pain_limited: "MAILERLITE_GROUP_PAIN_LIMITED",
        nutrition_drifting: "MAILERLITE_GROUP_NUTRITION_DRIFTING",
        motivation_drifting: "MAILERLITE_GROUP_MOTIVATION_DRIFTING"
      };
      
      const MAILERLITE_GROUP_ID_DEFAULT = process.env.MAILERLITE_GROUP_ID?.replace(/^"|"$/g, '').trim() || "";
      
      const archId = archetype?.id || 'time_crunched';
      const groupKey = MAILERLITE_GROUPS[archId as keyof typeof MAILERLITE_GROUPS];
      const MAILERLITE_GROUP_ID = process.env[groupKey as keyof typeof process.env]?.replace(/^"|"$/g, '').trim() || MAILERLITE_GROUP_ID_DEFAULT;

      if (MAILERLITE_API_KEY) {
        try {
          const fields = {
            name: name,
            diagnosis_type: constraintLabel, // Q4
            goal: goalLabel, // Q2
            location: locationLabel, // Q1
            q6_category: flagsLabel, // Q6
            blueprint_url: resultUrl
          };

          const subscriberPayloadV3 = {
            email: email,
            fields: fields,
            groups: MAILERLITE_GROUP_ID ? [MAILERLITE_GROUP_ID] : []
          };

          let mlResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
              'Accept': 'application/json'
            },
            body: JSON.stringify(subscriberPayloadV3)
          });

          if (!mlResponse.ok && mlResponse.status === 401) {
            console.log('MailerLite v3 failed with 401, trying v2 API...');
            const subscriberPayloadV2 = {
              email: email,
              name: name,
              fields: fields
            };
            
            const v2Endpoint = MAILERLITE_GROUP_ID 
              ? `https://api.mailerlite.com/api/v2/groups/${MAILERLITE_GROUP_ID}/subscribers`
              : 'https://api.mailerlite.com/api/v2/subscribers';

            mlResponse = await fetch(v2Endpoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-MailerLite-ApiKey': MAILERLITE_API_KEY,
                'Accept': 'application/json'
              },
              body: JSON.stringify(subscriberPayloadV2)
            });
          }

          if (!mlResponse.ok) {
            const errorText = await mlResponse.text();
            console.error('MailerLite API Error:', mlResponse.status, errorText);
          } else {
            console.log('Successfully added assessment lead to MailerLite');
          }
        } catch (mlError: any) {
          console.error('MailerLite Integration Failed:', mlError.message);
        }
      }

      // --- Google Sheets Webhook Integration ---
      const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
      if (sheetsWebhookUrl) {
        try {
          await fetch(sheetsWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              type: 'assessment',
              date: new Date().toISOString(),
              name,
              email,
              location: locationLabel,
              goal: goalLabel,
              time: timeLabel,
              constraint: constraintLabel,
              flags: flagsLabel,
              archetype: archetypeLabel,
              resultUrl
            })
          });
          console.log('Successfully sent to Google Sheets Webhook');
        } catch (sheetsError: any) {
          console.error('Google Sheets Webhook Failed:', sheetsError.message);
        }
      }

      res.json({ success: true, message: "Processed assessment" });
    } catch (error: any) {
      console.error("General error in /api/assessment:", error);
      res.status(500).json({ error: "Failed to process request" });
    }
  });

  // Sitemap XML route
  
  app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send('User-agent: *\nAllow: /\nSitemap: https://www.wrkpersonaltraining.co.nz/sitemap.xml');
  });

  app.get('/sitemap.xml', (req, res) => {
    const baseUrl = 'https://www.wrkpersonaltraining.co.nz';
    
    // Core routes
    const routes = [
      '/',
      '/about',
      '/assessment',
      '/results',
      '/contact',
      '/14-day-fat-loss-foundations',
      '/personal-training',
      '/online-coaching',
      '/workplace-wellness-program-nz',
      '/fitness-challenge-nz',
      '/blog',
      '/tools',
      '/calorie-calculator',
      '/tools/1rm-estimator',
      '/terms',
      '/privacy',
      '/health-disclaimer',
      '/refunds'
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  });

  // Vite middleware for development
  
  let cachedBlogs = null;
  let cachedBlogsTime = 0;
  const getCachedBlogs = async () => {
    if (cachedBlogs && Date.now() - cachedBlogsTime < 60000) return cachedBlogs;
    try {
      const snapshot = await getDocs(collection(db, 'blogs'));
      const blogs = [];
      snapshot.forEach(doc => {
        const post = doc.data();
        if (post.slug && post.slug.startsWith('/')) post.slug = post.slug.substring(1);
        blogs.push(post);
      });
      blogs.sort((a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime());
      cachedBlogs = blogs;
      cachedBlogsTime = Date.now();
      return blogs;
    } catch(e) {
      console.error('Error fetching blogs for SSR:', e);
      return [];
      cachedBlogs = [];
      return [];
    }
  };
  
  const ssrHandler = async (req, res) => {
    try {
      const url = req.originalUrl;
      let templateHtml;
      
      if (process.env.NODE_ENV !== "production") {
        templateHtml = await vite.transformIndexHtml(url, fs.readFileSync(path.resolve("index.html"), "utf-8"));
      } else {
        templateHtml = fs.readFileSync(path.resolve("dist/index.html"), "utf-8");
      }
      
      // Inject SEO tags based on route
      const initialBlogs = await getCachedBlogs();
      let title = "Christchurch Personal Trainer Specialising in Fat Loss | WRK";
      let desc = "1:1 and online fat loss coaching for busy professionals aged 35 to 60 in Christchurch and across NZ. Train around your schedule and old injuries. 20 years experience.";
      
      if (url.includes('/online-coaching')) {
        title = "Online Personal Trainer NZ | WRK";
        desc = "Expert online personal trainer NZ. Get customised training and nutrition coaching tailored to your lifestyle.";
      } else if (url.includes('/personal-training')) {
        title = "Personal Trainer Christchurch | WRK";
        desc = "Premium personal trainer Christchurch. 1:1 coaching, tailored programs, and real results with Hayden Richards.";
      } else if (url.includes('/workplace-wellness-program-nz')) {
        title = "Corporate Wellness NZ | WRK";
        desc = "Corporate wellness NZ programs that build resilient, healthy, and high-performing teams.";
      } else if (url.includes('/14-day-fat-loss-foundations')) {
        title = "14-Day Fat Loss Foundation | WRK";
        desc = "Jumpstart your fat loss journey with this free 14-day foundation programme.";
      } else if (url.includes('/couch-to-5km')) {
        title = "Couch to 5km NZ | 8-Week Beginner Running Plan | WRK";
        desc = "An 8-week couch to 5km running plan built for beginners over 35. Run plan, plus strength, stretching, and nutrition guidance in the WRK app. $27, start anytime.";
      } else if (url.includes('/fitness-challenge-nz')) {
        title = "42-Day Fitness Challenge NZ | The Reset | WRK";
        desc = "A 6-week fitness challenge you can run from your phone. Structured training, simple nutrition, and daily habits for busy NZ adults. One-off $47, start anytime.";
      } else if (url.includes('/about')) {
        title = "About | WRK Personal Training";
        desc = "Learn about Hayden Richards and the WRK Personal Training philosophy.";
      } else if (url.match(/\/blog\/([^\/]+)/)) {
        const slug = url.match(/\/blog\/([^\/]+)/)[1];
        const post = initialBlogs.find(p => p.slug === slug);
        if (post) {
          title = post.seoTitle || post.title || (slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + " | WRK");
          desc = post.seoDescription || post.excerpt || ("Read our latest insights on " + title + " from WRK Personal Training.");
        } else {
          title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + " | WRK";
          desc = "Read our latest insights on " + title + " from WRK Personal Training.";
        }
      } else if (url.includes('/blog')) {
        title = "Blog | WRK Personal Training";
        desc = "Insights on training, nutrition, and mindset from a Christchurch personal trainer.";
      } else if (url.includes('/contact')) {
        title = "Contact | WRK Personal Training";
        desc = "Get in touch with WRK Personal Training to start your fitness journey.";
      }
      
      templateHtml = templateHtml.replace(
        /<title>(.*?)<\/title>/,
        `<title>${title}</title>`
      );
      templateHtml = templateHtml.replace(
        /<meta name="description" content="(.*?)" \/>/,
        `<meta name="description" content="${desc}" />`
      );
      
      // Open graph tags
      const ogTags = `
        <link rel="canonical" href="https://www.wrkpersonaltraining.co.nz${url === '/' ? '' : url}" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${desc}" />
        <meta property="og:url" content="https://www.wrkpersonaltraining.co.nz${url}" />
        <meta property="og:image" content="https://www.wrkpersonaltraining.co.nz/images/wrk-social-preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${title}" />
        <meta name="twitter:description" content="${desc}" />
      `;
      templateHtml = templateHtml.replace('</title>', `</title>${ogTags}`);
      
      // Render App
      let renderToString, StaticRouter, App, React;
      renderToString = (await import('react-dom/server')).renderToString;
      StaticRouter = (await import('react-router')).StaticRouter;
      App = (await import('./App.tsx')).default;
      React = (await import('react')).default;
      
      // pass
      console.log("getCachedBlogs returned", initialBlogs.length, "blogs for url", url);
      const postMatch = initialBlogs.find(p => p.slug === url.split('/').pop());
      console.log("Found post matching slug:", !!postMatch);
      const initialData = { blogs: initialBlogs };
      console.log("INITIAL DATA PASSED TO APP:", !!initialData.blogs, initialData.blogs.length);
      
      const appHtml = renderToString(
        React.createElement(
          StaticRouter,
          { location: url },
          React.createElement(App, { initialData })
        )
      );
      
      console.log("appHtml length:", appHtml.length, "includes main:", appHtml.includes("<main"));
  const finalHtml = templateHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div><script>window.__INITIAL_DATA__ = ${JSON.stringify(initialData).replace(/</g, '\\u003c')};</script><!-- debug:${appHtml.length} -->`
      );
      
      res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
    } catch (e) {
      if (process.env.NODE_ENV !== "production") vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.stack || e.message);
    }
  };

  if (process.env.NODE_ENV !== "production") {
    var vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve("dist"), { index: false }));
  }
  
  app.get('*all', ssrHandler);

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
