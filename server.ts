import "dotenv/config";
import express from "express";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase-applet-config.json' with { type: 'json' };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId || '(default)');
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
  app.get("/42-day-reset", (req, res) => res.redirect(301, "/programs"));
  app.get("/fitness-challenge-nz", (req, res) => res.redirect(301, "/programs"));
  app.get("/personal-trainer-christchurch", (req, res) => res.redirect(301, "/personal-training"));
  app.get("/online-personal-training-nz", (req, res) => res.redirect(301, "/online-coaching"));
  app.get("/personal-training-christchurch-philosophy", (req, res) => res.redirect(301, "/about"));
  app.get("/corporate-wellness", (req, res) => res.redirect(301, "/"));
  app.get("/workplace-wellness-program-nz", (req, res) => res.redirect(301, "/"));
  app.get("/14-day-fat-loss-foundations", (req, res) => res.redirect(301, "/programs"));
  app.get("/couch-to-5km", (req, res) => res.redirect(301, "/programs"));
  app.get("/calorie-calculator", (req, res) => res.redirect(301, "/tools/tdee-calculator"));
  app.get("/tools/1rm-estimator", (req, res) => res.redirect(301, "/tools"));

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Contact Form Submission
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, message, interest, referralSource, phase, goal } = req.body;

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
        to: `${process.env.CONTACT_EMAIL || 'wfme2021@gmail.com'}, info@wrkpersonaltraining.co.nz`,
        // // replyTo: email, // Temporarily disabled // Temporarily disabled to prevent Namecheap Jellyfish spoofing flags
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
      const MAILERLITE_GROUP_CONTACT = "195641787200570883";

      if (MAILERLITE_API_KEY) {
        try {
          const fields = {
            name: name,
            phone: phone || '',
            interest: interest || '',
            referral_source: referralSource || '',
            notes: message || '',
            message: message || '',
            phase: phase || '',
            goal: goal || ''
          };
          const subscriberPayloadV3 = {
            email: email,
            fields: fields,
            groups: ["195641787200570883"]
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
          
          if (!mlResponse.ok && mlResponse.status !== 401) {
             console.log(`MailerLite v3 failed with status ${mlResponse.status}. Retrying without fields...`);
             const fallbackPayload = { email: email, groups: ["195641787200570883"] };
             mlResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${MAILERLITE_API_KEY}`, 'Accept': 'application/json' },
               body: JSON.stringify(fallbackPayload)
             });
          }
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

    // Send immediate response so frontend doesn't wait for third-party APIs
    res.status(200).json({ success: true, message: "Assessment received" });

    // Process integrations in background
    (async () => {
      // 1. Send Emails
      const emailPromise = (async () => {
        try {
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
            connectionTimeout: 10000,
            greetingTimeout: 5000,
            socketTimeout: 10000
          });

          const adminMailOptions = {
            from: process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Website" <info@wrkpersonaltraining.co.nz>',
            to: `${process.env.CONTACT_EMAIL || 'wfme2021@gmail.com'}, info@wrkpersonaltraining.co.nz`,
            replyTo: email,
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
                    <li><strong>${(primaryFocus || '').toUpperCase()}</strong></li>
                    <li><strong>${(secondaryFocus || '').toUpperCase()}</strong></li>
                    <li><strong>${(thirdFocus || '').toUpperCase()}</strong></li>
                  </ol>
                </div>
                
                <p>If you're ready to start building muscle and protecting your metabolism, <a href="https://www.wrkpersonaltraining.co.nz/contact" style="color: #2C3539; font-weight: bold;">reach out to us today</a> to discuss a personalized plan.</p>
                
                <p>Best regards,<br>Hayden Richards<br><strong>WRK Personal Training</strong></p>
              </div>
            `
          };

          const sendMailRobust = async (opts) => {
            try {
              await transporter.sendMail(opts);
            } catch (err) {
              if (err.responseCode === 554 || err.responseCode === 550 || (err.message && err.message.includes('rejected'))) {
                 const fallback = { ...opts, from: process.env.SMTP_USER, replyTo: opts.from };
                 await transporter.sendMail(fallback);
                 return;
              }
              throw err;
            }
          };

          await sendMailRobust(adminMailOptions);
          console.log("Assessment admin email sent successfully");
          
          await sendMailRobust(userMailOptions);
          console.log("Assessment user email sent successfully");

        } catch (error) {
          if (error.message && error.message.includes("Authentication Failed") || error.code === 'EAUTH' || error.responseCode === 535) { 
            console.warn("Skipping assessment email: SMTP Authentication Failed"); 
          } else { 
            console.error("Failed to send assessment email:", error); 
          }
        }
      })();

      // 2. MailerLite Integration
      const mailerlitePromise = (async () => {
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
            
            if (!mlResponse.ok && mlResponse.status !== 401) {
               console.log(`MailerLite v3 failed with status ${mlResponse.status}. Retrying without fields...`);
               const fallbackPayload = { email: email, groups: [MAILERLITE_PROSPECT_GROUP] };
               mlResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${MAILERLITE_API_KEY}`, 'Accept': 'application/json' },
                 body: JSON.stringify(fallbackPayload)
               });
            }

            if (!mlResponse.ok && mlResponse.status === 401) {
              const v2Endpoint = `https://api.mailerlite.com/api/v2/groups/${MAILERLITE_PROSPECT_GROUP}/subscribers`;
              mlResponse = await fetch(v2Endpoint, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'X-MailerLite-ApiKey': MAILERLITE_API_KEY,
                  'Accept': 'application/json'
                },
                body: JSON.stringify({ email, fields })
              });
            }

            if (!mlResponse.ok) {
              console.error('MailerLite API Error:', mlResponse.status, await mlResponse.text());
            } else {
              console.log('Successfully added GLP-1 assessment lead to MailerLite');
            }
          } catch (mlError) {
            console.error('MailerLite Integration Failed:', mlError.message);
          }
        }
      })();

      // 3. Google Sheets Webhook Integration
      const sheetsPromise = (async () => {
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
      })();

      // Wait for all to finish so they run in parallel
      await Promise.allSettled([emailPromise, mailerlitePromise, sheetsPromise]);

    })(); // end background async
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
      
      '/services',
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
      let title = "GLP-1 Fitness Coach | Strength & Fitness Coaching | WRK Personal Training";
      let desc = "Hire a dedicated GLP-1 Fitness Coach in Christchurch. We provide specialist strength & fitness coaching to preserve muscle and build sustainable habits during medical weight loss.";
      
      const pathOnly = url.split('?')[0];

      if (pathOnly === '/programs') {
        title = "GLP-1 Fitness Programs | WRK Personal Training";
        desc = "Explore our 12-week GLP-1 Fitness Programs. Structured training pathways built around your active weight loss, maintenance, or long-term habit building phases.";
      } else if (pathOnly === '/services') {
        title = "GLP-1 Fitness Coaching Programs | WRK Personal Training";
        desc = "Compare our GLP-1 Fitness Coaching Programs. Choose between our in-person training in Christchurch or our comprehensive 12-week online coaching pathways.";
      } else if (pathOnly === '/online-coaching') {
        title = "Online Fitness Coaching & Support | Personal Trainers for GLP-1 Patients";
        desc = "Expert Online Fitness Coaching tailored for GLP-1 patients. Work with specialist personal trainers to protect your muscle mass from anywhere in New Zealand.";
      } else if (pathOnly === '/personal-training') {
        title = "In-Person Personal Training | GLP-1 Exercise Program Christchurch";
        desc = "Join our specialist GLP-1 Exercise Program in Christchurch. Safe, effective 30-minute in-person personal training sessions tailored for medical weight loss support.";
      } else if (pathOnly === '/assessment') {
        title = "GLP-1 Fitness Assessment | WRK Personal Training";
        desc = "Take our free GLP-1 Fitness Assessment to evaluate your current routine, identify muscle loss risks, and receive a customized 12-week training recommendation.";
      } else if (pathOnly === '/contact') {
        title = "Contact GLP-1 Fitness Coach | WRK Personal Training";
        desc = "Contact a GLP-1 Fitness Coach today to discuss your medical weight loss journey, ask questions about our 12-week pathways, or book an initial consultation.";
      } else if (pathOnly === '/about') {
        title = "About WRK | Medical Weight Loss & Muscle Preservation Fitness Coaching";
        desc = "Discover our approach to Medical Weight Loss & Muscle Preservation Fitness Coaching. Learn how WRK bridges the gap between clinical treatments and real-world strength.";
      } else if (pathOnly === '/resources') {
        title = "Clinical Evidence & Resources | WRK Personal Training";
        desc = "Review the Clinical Evidence & Resources backing our GLP-1 training methodologies. Explore medical studies on muscle preservation and metabolic support.";
      } else if (pathOnly === '/tools') {
        title = "GLP-1 Tools & Calculators | WRK Personal Training";
        desc = "Access our free GLP-1 Tools & Calculators, including hydration, protein, and macro estimators designed specifically for patients on weight loss medication.";
      } else if (pathOnly.includes('/tdee-calculator')) {
        title = "GLP-1 Calorie & Macro Calculator | WRK Personal Training";
        desc = "Use our GLP-1 Calorie & Macro Calculator to estimate your daily energy needs and personalize your protein, carbohydrate, and fat targets during weight loss.";
      } else if (pathOnly.includes('/protein-calculator')) {
        title = "GLP-1 Protein Calculator | WRK Personal Training";
        desc = "Use our GLP-1 Protein Calculator to find your precise daily protein targets to support muscle retention and strength during your medical weight loss journey.";
      } else if (pathOnly.includes('/hydration-calculator')) {
        title = "GLP-1 Hydration Calculator: Estimate Your Daily Fluid Needs | WRK";
        desc = "Use the WRK GLP-1 Hydration Calculator to estimate your daily fluid needs and enhance your medical weight loss results with proper water intake.";
      } else if (pathOnly.includes('/results') || pathOnly.includes('/assessment/result')) {
        title = "Your Muscular Preservation Report | WRK";
        desc = "Review your GLP-1 Fitness Assessment results. Access your personalized 12-week strength training recommendation to protect muscle during medical weight loss.";
      } else if (pathOnly.match(/\/blog\/([^\/]+)/)) {
        const slug = pathOnly.match(/\/blog\/([^\/]+)/)[1];
        const post = initialBlogs.find(p => p.slug === slug);
        if (post) {
          title = post.seoTitle || post.title || (slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + " | WRK");
          desc = post.seoDescription || post.excerpt || ("Read our latest insights on " + title + " from WRK Personal Training.");
        } else {
          title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + " | WRK";
          desc = "Read our latest insights on " + title + " from WRK Personal Training.";
        }
      } else if (pathOnly === '/blog') {
        title = "GLP-1 Fitness Blog | Training, Nutrition & Weight Loss | WRK";
        desc = "Read the WRK GLP-1 Fitness Blog for evidence-informed guidance on strength training, muscle preservation, nutrition, and sustainable habits after weight loss.";
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
