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
        console.warn("Continuing without email module");
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
          pass: process.env.SMTP_PASS?.replace(/^"|"$/g, '').trim(),
        },
      });

      const mailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Website" <info@wrkpersonaltraining.co.nz>',
        to: process.env.CONTACT_EMAIL || "info@wrkpersonaltraining.co.nz, wfme2021@gmail.com",
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
        if (emailError.message && emailError.message.includes("SMTP Authentication Failed")) { console.warn("Skipping contact email: SMTP Authentication Failed (check Settings)"); } else { console.error("Failed to send email:", emailError); }
      }

      // --- MailerLite Integration ---
      const rawKey = process.env.MAILERLITE_API_KEY || "";
      const MAILERLITE_API_KEY = rawKey.replace(/^"|"$/g, '').trim();
      
      const MAILERLITE_GROUP_ID_DEFAULT = process.env.MAILERLITE_GROUP_ID?.replace(/^"|"$/g, '').trim() || "";
      const MAILERLITE_GROUP_CONTACT = process.env.MAILERLITE_GROUP_CONTACT?.replace(/^"|"$/g, '').trim() || MAILERLITE_GROUP_ID_DEFAULT;

      if (MAILERLITE_API_KEY) {
        try {
          const fields = {
            name: name,
            phone: phone || '',
            interest: interest || '',
            referral_source: referralSource || ''
          };
          const subscriberPayloadV3 = {
            email: email,
            fields: fields,
            groups: MAILERLITE_GROUP_CONTACT ? [MAILERLITE_GROUP_CONTACT] : []
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
            const v2Endpoint = MAILERLITE_GROUP_CONTACT 
              ? `https://api.mailerlite.com/api/v2/groups/${MAILERLITE_GROUP_CONTACT}/subscribers`
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
            console.log('Successfully added contact lead to MailerLite');
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
    const { email, answers, result } = req.body;

    if (!email || !result) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const {
      assessmentVersion,
      overallScore,
      overallLabel,
      domainScores,
      primaryFocus,
      secondaryFocus,
      thirdFocus,
      goal,
      glp1Status,
      glp1Duration,
      recommendations,
      sevenDayPlan
    } = result;

    try {
      try {
        // Lazy load nodemailer
        const nodemailer = await import("nodemailer");

        const port = Number(process.env.SMTP_PORT) || 587;
        const isSecure = port === 465;
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: port,
          secure: isSecure,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS?.replace(/^"|"$/g, '').trim(),
          },
        });

        const mailOptions = {
          from: process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Website" <info@wrkpersonaltraining.co.nz>',
          to: process.env.CONTACT_EMAIL || "info@wrkpersonaltraining.co.nz, wfme2021@gmail.com",
          subject: `New GLP-1 Fitness Assessment — ${overallScore}/100`,
          text: `=== New GLP-1 Assessment Unlocked ===
Email: ${email}
Overall Score: ${overallScore}/100 (${overallLabel})

--- Priorities ---
1. ${primaryFocus}
2. ${secondaryFocus}
3. ${thirdFocus}

--- Context ---
Goal: ${goal || 'N/A'}
GLP-1 Status: ${glp1Status || 'N/A'}
GLP-1 Duration: ${glp1Duration || 'N/A'}

--- Raw Answers ---
${JSON.stringify(answers, null, 2)}`,
        };

        const sendMailRobust = async (transporter, mailOptions, smtpUser) => {
          try {
            await transporter.sendMail(mailOptions);
            return true;
          } catch (error) {
            if (error.code === 'EAUTH' || error.responseCode === 535) {
              throw new Error("SMTP Authentication Failed");
            }
            if (
              error.responseCode === 554 || 
              error.responseCode === 550 || 
              (error.message && (error.message.includes('Sender address rejected') || error.message.includes('Access denied')))
            ) {
              if (smtpUser && mailOptions.from !== smtpUser) {
                const fallbackOptions = { ...mailOptions, from: smtpUser, replyTo: mailOptions.from };
                await transporter.sendMail(fallbackOptions);
                return true;
              }
            }
            throw error;
          }
        };

        await sendMailRobust(transporter, mailOptions, process.env.SMTP_USER);
        console.log("Assessment admin email sent successfully");

        // Send email to user
        const userMailOptions = {
          from: process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Personal Training" <info@wrkpersonaltraining.co.nz>',
          to: email,
          subject: `Your GLP-1 Fitness Assessment Results`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #2C3539;">
              <h2 style="color: #2C3539;">Your GLP-1 Fitness Assessment Results</h2>
              <p>Hi there,</p>
              <p>Thank you for completing the GLP-1 Fitness Assessment. Here are your personalized results and focus areas to help you get the most out of your journey.</p>
              
              <div style="background-color: #F6F5F2; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #2C3539;">Overall Score: ${overallScore}/100 (${overallLabel})</h3>
                <h4 style="margin-bottom: 10px;">Your Top 3 Priorities:</h4>
                <ol style="margin-top: 0;">
                  <li><strong>${primaryFocus.toUpperCase()}</strong></li>
                  <li><strong>${secondaryFocus.toUpperCase()}</strong></li>
                  <li><strong>${thirdFocus.toUpperCase()}</strong></li>
                </ol>
              </div>
              
              <p>If you're ready to start building muscle and protecting your metabolism, <a href="https://www.wrkpersonaltraining.co.nz/contact" style="color: #2C3539; font-weight: bold;">reach out to us today</a> to discuss a personalized plan.</p>
              
              <p>Best regards,<br>Hayden Richards<br><strong>WRK Personal Training</strong></p>
            </div>
          `
        };

        try {
          await sendMailRobust(transporter, userMailOptions, process.env.SMTP_USER);
          console.log("Assessment user email sent successfully");
        } catch (userEmailError) {
          console.warn("Failed to send assessment email to user, but continuing:", userEmailError.message);
        }

      } catch (emailError) {
        if (emailError.message && emailError.message.includes("SMTP Authentication Failed")) { console.warn("Skipping assessment email: SMTP Authentication Failed (check Settings)"); } else { console.error("Failed to send assessment email:", emailError); }
      }

      // --- MailerLite Integration ---
      const rawKey = process.env.MAILERLITE_API_KEY || "";
      const MAILERLITE_API_KEY = rawKey.replace(/^"|"$/g, '').trim();
      
      const MAILERLITE_PROSPECT_GROUP = "195641787200570883";

      if (MAILERLITE_API_KEY) {
        try {
          const fields = {
            glp1_fitness_score: overallScore,
            primary_focus: primaryFocus,
            secondary_focus: secondaryFocus,
            third_focus: thirdFocus,
            primary_goal: goal || '',
            glp1_status: glp1Status || '',
            assessment_version: assessmentVersion,
            assessment_date: new Date().toISOString().split('T')[0]
          };

          const subscriberPayloadV3 = {
            email: email,
            fields: fields,
            groups: [MAILERLITE_PROSPECT_GROUP]
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
              fields: fields
            };
            
            const v2Endpoint = `https://api.mailerlite.com/api/v2/groups/${MAILERLITE_PROSPECT_GROUP}/subscribers`;

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
            console.log('Successfully added GLP-1 assessment lead to MailerLite');
          }
        } catch (mlError) {
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
              type: 'glp1_assessment',
              date: new Date().toISOString(),
              email,
              score: overallScore,
              primary_focus: primaryFocus,
              answers
            })
          });
          console.log('Successfully added assessment lead to Google Sheets');
        } catch (sheetsError) {
          console.error('Google Sheets Integration Failed:', sheetsError);
        }
      }

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Assessment processing error:", error);
      res.status(500).json({ error: "Failed to process assessment" });
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
