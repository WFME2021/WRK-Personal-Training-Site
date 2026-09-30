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
          // Only include fields that actually exist in MailerLite to prevent 422 errors
          const fields: Record<string, string> = {
            name: name,
          };
          if (phone) fields.phone = phone;
          if (interest) fields.interest = interest;
          if (referralSource) fields.referral_source = referralSource;
          if (message) fields.message = message;
          // Map the new fields
          if (goal) fields.interest = goal; // The UI uses goal for the interest/service dropdown
          if (phase) fields.not_sure_yet = phase; // Let's use a safe field for phase, or just leave it in the notes

          // To be perfectly mapped to MailerLite custom fields you created:
          const finalFields: Record<string, string> = {
            name: name
          };
          
          if (phone) finalFields.phone = phone;
          if (message) finalFields.message = message;
          
          // In Contact.tsx, we pass:
          // interest: formData.goal (which is the service they chose: '1:1 Coaching', 'Online Coaching', etc)
          // referralSource: `Phase: ${formData.phase}`
          
          if (interest) {
            // Map the dropdown selection directly to the interest field
            finalFields.interest = interest;
            
            // Also map to specific boolean/text fields if they match
            if (interest.includes("1:1")) finalFields["11_coaching_christchurch"] = "Yes";
            if (interest.includes("Online")) finalFields.online_coaching = "Yes";
            if (interest.includes("Corporate")) finalFields.corporate_wellness = "Yes";
          }
          
          if (referralSource) {
            finalFields.referral_source = referralSource;
          }
          const subscriberPayloadV3 = {
            email: email,
            fields: finalFields,
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
              fields: finalFields
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

  // Studio Consultation Request Submission
  app.post("/api/consultation", async (req, res) => {
    const { name, email, phone, coachingInterest, notes } = req.body || {};

    if (!name || !email || !phone) {
      return res.status(400).json({ error: "Name, email, and phone number are required." });
    }

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim().toLowerCase();
    const cleanPhone = String(phone).trim();
    const cleanInterest = coachingInterest ? String(coachingInterest).trim() : 'General Inquiry';
    const cleanNotes = notes ? String(notes).trim() : '';

    try {
      let nodemailer: any;
      try {
        nodemailer = await import("nodemailer");
      } catch (importError) {
        console.error("Failed to import nodemailer:", importError);
      }

      const port = Number(process.env.SMTP_PORT) || 587;
      const isSecure = port === 465;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'mail.privateemail.com',
        port: port,
        secure: isSecure,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS?.replace(/^"|"$/g, '').trim(),
        },
      });

      const primaryFrom = process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Personal Training" <info@wrkpersonaltraining.co.nz>';
      const recipient = process.env.CONTACT_EMAIL || 'info@wrkpersonaltraining.co.nz';

      const mailOptions = {
        from: primaryFrom,
        to: recipient,
        replyTo: cleanEmail,
        subject: `🚨 New Studio Consultation Request: ${cleanName}`,
        text: `
New Studio Consultation Request

Name: ${cleanName}
Email: ${cleanEmail}
Phone Number to Call: ${cleanPhone}
Focus Area: ${cleanInterest}
Notes / Goals: ${cleanNotes || 'None provided'}

Submitted from /personal-training via WRK Consultation Engine
        `.trim(),
        html: `
<h2>New Studio Consultation Request</h2>
<p><strong>Name:</strong> ${cleanName}</p>
<p><strong>Email:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
<p><strong>Phone Number to Call:</strong> <a href="tel:${cleanPhone}">${cleanPhone}</a></p>
<p><strong>Focus Area:</strong> ${cleanInterest}</p>
<p><strong>Notes / Goals:</strong> ${cleanNotes ? cleanNotes.replace(/\n/g, '<br/>') : 'None provided'}</p>
<p style="color: #64748b; font-size: 12px; margin-top: 20px;">Submitted from /personal-training via WRK Consultation Engine</p>
        `.trim(),
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log('Studio consultation notification email dispatched successfully');
      } catch (emailError: any) {
        console.error('Failed to send consultation email on primary envelope:', emailError?.message);
        if (process.env.SMTP_USER && primaryFrom !== process.env.SMTP_USER) {
          try {
            await transporter.sendMail({
              ...mailOptions,
              from: process.env.SMTP_USER,
            });
            console.log('Studio consultation notification sent via fallback SMTP_USER envelope');
          } catch (fallbackError: any) {
            console.error('Fallback consultation email dispatch also failed:', fallbackError?.message);
          }
        }
      }

      // MailerLite Sync
      const rawKey = process.env.MAILERLITE_API_KEY || '';
      const MAILERLITE_API_KEY = rawKey.replace(/^"|"$/g, '').trim();
      const MAILERLITE_PROSPECT_GROUP = '195641787200570883';

      if (MAILERLITE_API_KEY) {
        try {
          const fields: Record<string, any> = {
            name: cleanName,
            phone: cleanPhone,
            interest: cleanInterest,
            lead_source: 'studio_consultation',
          };

          const subscriberPayload = {
            email: cleanEmail,
            fields: fields,
            groups: [MAILERLITE_PROSPECT_GROUP],
          };

          const mlRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
              'Accept': 'application/json',
            },
            body: JSON.stringify(subscriberPayload),
          });

          if (!mlRes.ok && mlRes.status !== 401) {
            await fetch('https://connect.mailerlite.com/api/subscribers', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
                'Accept': 'application/json',
              },
              body: JSON.stringify({ email: cleanEmail, groups: [MAILERLITE_PROSPECT_GROUP] }),
            });
          }
          console.log('MailerLite subscriber synced for consultation lead:', cleanEmail);
        } catch (mlErr: any) {
          console.error('MailerLite sync error:', mlErr?.message || mlErr);
        }
      }

      // Google Sheets Webhook
      const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
      if (sheetsWebhookUrl) {
        try {
          await fetch(sheetsWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              timestamp: new Date().toISOString(),
              type: 'Studio Consultation',
              name: cleanName,
              email: cleanEmail,
              phone: cleanPhone,
              coachingInterest: cleanInterest,
              notes: cleanNotes,
              source: '/personal-training',
            }),
          });
          console.log('Google Sheets synced for consultation request');
        } catch (sheetErr: any) {
          console.error('Google Sheets sync error:', sheetErr?.message || sheetErr);
        }
      }

      return res.status(200).json({
        success: true,
        message: 'Consultation request received successfully.',
      });
    } catch (err: any) {
      console.error('General error handling studio consultation:', err);
      return res.status(500).json({ error: 'Failed to process consultation request.' });
    }
  });

  // Online Coaching Application Submission
  app.post("/api/online-coaching-inquiry", async (req, res) => {
    const { name, email, phone, coachingFocus, trainingLocation, notes } = req.body || {};

    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Name, email, and phone are required.' });
    }

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim().toLowerCase();
    const cleanPhone = String(phone).trim();
    const cleanFocus = coachingFocus ? String(coachingFocus).trim() : 'glp1';
    const cleanLocation = trainingLocation ? String(trainingLocation).trim() : 'gym';
    const cleanNotes = notes ? String(notes).trim() : '';

    const focusLabels: Record<string, string> = {
      glp1: 'GLP-1 Medication Muscle Defense',
      'fat-loss': 'Fat Loss & Joint-Safe Strength',
      menopause: 'Midlife & Menopause Resistance',
      hypertrophy: 'Muscle Hypertrophy / Recomposition',
    };

    const locationLabels: Record<string, string> = {
      gym: 'Commercial Gym Membership',
      'home-dumbbells': 'Home (Dumbbells / Bands)',
      'home-barbell': 'Home (Full Rack / Barbell)',
      bodyweight: 'Bodyweight Only / Starting Out',
    };

    const displayFocus = focusLabels[cleanFocus] || cleanFocus;
    const displayLocation = locationLabels[cleanLocation] || cleanLocation;

    try {
      let nodemailer: any;
      try {
        nodemailer = await import('nodemailer');
      } catch (importError) {
        console.error('Failed to import nodemailer:', importError);
      }

      const port = Number(process.env.SMTP_PORT) || 587;
      const isSecure = port === 465;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'mail.privateemail.com',
        port: port,
        secure: isSecure,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS?.replace(/^"|"$/g, '').trim(),
        },
      });

      const primaryFrom = process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Online Coaching" <info@wrkpersonaltraining.co.nz>';
      const recipient = process.env.CONTACT_EMAIL || 'info@wrkpersonaltraining.co.nz';

      const mailOptions = {
        from: primaryFrom,
        to: recipient,
        replyTo: cleanEmail,
        subject: `🚨 New Online Coaching Application: ${cleanName}`,
        text: `
New Online Coaching Application

Name: ${cleanName}
Email: ${cleanEmail}
Phone Number to Call: ${cleanPhone}
Primary Focus: ${displayFocus}
Training Setup: ${displayLocation}
Current Situation & Goals:
${cleanNotes || 'None provided'}

Submitted from /online-coaching via WRK Coaching Engine
        `.trim(),
        html: `
<h2>New Online Coaching Application</h2>
<p><strong>Name:</strong> ${cleanName}</p>
<p><strong>Email:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
<p><strong>Phone Number to Call:</strong> <a href="tel:${cleanPhone}">${cleanPhone}</a></p>
<p><strong>Primary Focus:</strong> ${displayFocus}</p>
<p><strong>Training Setup:</strong> ${displayLocation}</p>
<p><strong>Current Situation & Goals:</strong></p>
<p>${cleanNotes ? cleanNotes.replace(/\n/g, '<br/>') : 'None provided'}</p>
<p style="color: #64748b; font-size: 12px; margin-top: 20px;">Submitted from /online-coaching via WRK Coaching Engine</p>
        `.trim(),
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log('Online coaching application email dispatched successfully');
      } catch (emailError: any) {
        console.error('Failed to send application email on primary envelope:', emailError?.message);
        if (process.env.SMTP_USER && primaryFrom !== process.env.SMTP_USER) {
          try {
            await transporter.sendMail({
              ...mailOptions,
              from: process.env.SMTP_USER,
            });
            console.log('Online coaching application sent via fallback SMTP_USER envelope');
          } catch (fallbackError: any) {
            console.error('Fallback email dispatch also failed:', fallbackError?.message);
          }
        }
      }

      // --- MailerLite Integration ---
      const rawKey = process.env.MAILERLITE_API_KEY || '';
      const MAILERLITE_API_KEY = rawKey.replace(/^"|"$/g, '').trim();
      const MAILERLITE_PROSPECT_GROUP = '195641787200570883';

      if (MAILERLITE_API_KEY) {
        try {
          const fields: Record<string, any> = {
            name: cleanName,
            phone: cleanPhone,
            interest: displayFocus,
            lead_source: 'online_coaching_application',
          };

          const subscriberPayload = {
            email: cleanEmail,
            fields: fields,
            groups: [MAILERLITE_PROSPECT_GROUP],
          };

          const mlRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
              'Accept': 'application/json',
            },
            body: JSON.stringify(subscriberPayload),
          });

          if (!mlRes.ok && mlRes.status !== 401) {
            await fetch('https://connect.mailerlite.com/api/subscribers', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
                'Accept': 'application/json',
              },
              body: JSON.stringify({ email: cleanEmail, groups: [MAILERLITE_PROSPECT_GROUP] }),
            });
          }
          console.log('MailerLite subscriber synced for online coaching applicant:', cleanEmail);
        } catch (mlErr: any) {
          console.error('MailerLite sync error:', mlErr?.message || mlErr);
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
              timestamp: new Date().toISOString(),
              type: 'Online Coaching Application',
              name: cleanName,
              email: cleanEmail,
              phone: cleanPhone,
              focus: displayFocus,
              trainingLocation: displayLocation,
              notes: cleanNotes,
              source: '/online-coaching',
            }),
          });
          console.log('Google Sheets synced for online coaching application');
        } catch (sheetErr: any) {
          console.error('Google Sheets sync error:', sheetErr?.message || sheetErr);
        }
      }

      return res.status(200).json({
        success: true,
        message: 'Online coaching application received successfully.',
      });
    } catch (err: any) {
      console.error('General error handling online coaching application:', err);
      return res.status(500).json({ error: 'Failed to process application.' });
    }
  });

  // Assessment Form Submission
  app.post("/api/assessment", async (req, res) => {
    const { name, email, phone, answers, result } = req.body;

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
            subject: `New GLP-1 Fitness Assessment — ${name ? `${name} (` : ''}${overallScore}/100${name ? ')' : ''}`,
            text: `=== New GLP-1 Assessment Unlocked ===
Name: ${name || 'N/A'}
Email: ${email}
Phone: ${phone || 'N/A'}
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
            subject: `Your GLP-1 Game Plan`,
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #2C3539;">
                <h2 style="color: #2C3539; margin-bottom: 24px;">Your GLP-1 Game Plan</h2>
                <p>Hi there,</p>
                <p>Thank you for completing the GLP-1 Fitness Assessment. We've analysed your current routine across Strength, Nutrition, Movement, Hydration, and Recovery.</p>
                
                <div style="background-color: #F6F5F2; padding: 24px; border-radius: 12px; margin: 24px 0;">
                  <h3 style="margin-top: 0; font-size: 24px; color: #2C3539;">Score: ${overallScore}/100</h3>
                  <p style="margin-bottom: 0; font-weight: 500; color: #8A9A86;">${overallLabel}</p>
                </div>

                <p>Based on your answers, here are your biggest opportunities for improvement and your customised next steps.</p>
                
                <div style="margin: 32px 0;">
                  ${(recommendations || []).map((rec, i) => `
                    <div style="background-color: #ffffff; border: 1px solid #e5e5e5; padding: 24px; border-radius: 12px; margin-bottom: 20px;">
                      <p style="font-size: 12px; font-weight: bold; letter-spacing: 1px; color: #8A9A86; margin-top: 0; text-transform: uppercase;">
                        0${i + 1} &mdash; ${rec.domain}
                      </p>
                      <h3 style="margin-top: 0; margin-bottom: 12px; font-size: 20px; color: #2C3539; text-transform: uppercase;">
                        ${rec.headline}
                      </h3>
                      <p style="color: #555555; line-height: 1.5; margin-bottom: 16px;">
                        ${rec.explanation}
                      </p>
                      <div style="border-top: 1px solid #eeeeee; padding-top: 16px;">
                        <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #2C3539;">YOUR NEXT STEP</h4>
                        <p style="margin: 0; color: #8A9A86; font-weight: bold;">
                          ${rec.firstStep}
                        </p>
                      </div>
                    </div>
                  `).join('')}
                </div>

                <div style="background-color: #2C3539; color: #ffffff; padding: 32px 24px; border-radius: 12px; margin-bottom: 32px;">
                  <h3 style="margin-top: 0; margin-bottom: 24px; font-size: 20px; text-transform: uppercase;">Your Next 7 Days</h3>
                  ${(sevenDayPlan || []).map(item => `
                    <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 16px; margin-bottom: 16px;">
                      <strong style="display: block; font-size: 12px; letter-spacing: 1px; color: rgba(255,255,255,0.5); text-transform: uppercase; margin-bottom: 4px;">${item.label}</strong>
                      <span style="font-size: 15px; font-weight: 500;">${item.action}</span>
                    </div>
                  `).join('')}
                  <div style="border-bottom: none; padding-bottom: 0; margin-bottom: 0;"></div>
                </div>
                
                <h3 style="color: #2C3539; margin-top: 32px;">Want help putting this into practice?</h3>
                <p>This assessment gives you the starting point, but bespoke coaching helps you turn it into a plan that actually fits your life.</p>
                <p>If you're ready to start building muscle and protecting your metabolism while on a GLP-1, <a href="https://www.wrkpersonaltraining.co.nz/contact" style="color: #8A9A86; font-weight: bold; text-decoration: underline;">reach out to us today</a> to discuss a personalised coaching plan.</p>
                
                <p style="margin-top: 32px; color: #555;">
                  Best regards,<br>
                  Hayden Richards<br>
                  <strong>WRK Personal Training</strong>
                </p>
              </div>`
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

  // 1-Click Priority Coaching Triage Application Submission
  app.post("/api/assessment/triage", async (req, res) => {
    const { name, email, phone, preferred_format, score, answers, result } = req.body;
    res.status(200).json({ success: true, message: "Triage application received" });

    (async () => {
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

        const formatLabel = preferred_format === 'online' ? 'Remote / Online Coaching' : 'In-Person (Show Place, Addington)';

        const adminMail = {
          from: process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Website" <info@wrkpersonaltraining.co.nz>',
          to: `${process.env.CONTACT_EMAIL || 'wfme2021@gmail.com'}, info@wrkpersonaltraining.co.nz`,
          replyTo: email,
          subject: `🚨 PRIORITY TRIAGE: 1-Click Assessment Application - ${name || email}`,
          text: `=== PRIORITY 1-CLICK CLINICAL TRIAGE APPLICATION ===
Name: ${name || 'N/A'}
Email: ${email || 'N/A'}
Phone: ${phone || 'N/A'}
Preferred Format: ${formatLabel}
Diagnostic Score: ${score || 'N/A'}/100

Answers & Context:
${JSON.stringify(answers, null, 2)}
`,
          html: `
            <h3>🚨 Priority 1-Click Clinical Triage Application</h3>
            <p><strong>Name:</strong> ${name || 'N/A'}</p>
            <p><strong>Email:</strong> ${email || 'N/A'}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Preferred Format:</strong> ${formatLabel}</p>
            <p><strong>Diagnostic Score:</strong> ${score || 'N/A'}/100</p>
            <br/>
            <h4>Diagnostic Responses:</h4>
            <pre style="background:#f4f4f4;padding:12px;border-radius:6px;font-family:monospace;font-size:12px;">${JSON.stringify(answers, null, 2)}</pre>
          `
        };

        await transporter.sendMail(adminMail);
        console.log("Assessment triage priority email sent successfully");
      } catch (err) {
        console.error("Failed to send assessment triage email:", err);
      }
    })();
  });

  // 14-Day Fat Loss Foundations Lead Magnet Submission
  const handleFatLossGuideSubmission = async (req: express.Request, res: express.Response) => {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: "A valid email address is required" });
    }

    // Immediate response to client
    res.status(200).json({ success: true, message: "14-Day Fat Loss Foundations Guide requested successfully" });

    // Background processing of integrations
    (async () => {
      // 1. Email owner & deliver guide to user
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

        // Admin notification
        const adminMail = {
          from: process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Website" <info@wrkpersonaltraining.co.nz>',
          to: `${process.env.CONTACT_EMAIL || 'wfme2021@gmail.com'}, info@wrkpersonaltraining.co.nz`,
          replyTo: email,
          subject: `📘 New Lead: 14-Day Fat Loss Foundations Guide - ${email}`,
          text: `A new user requested the 14-Day Fat Loss Foundations: Nutrition Basics Guide (PDF):

Email: ${email}
Timestamp: ${new Date().toISOString()}
Resource: 14-Day Fat Loss Foundations Guide (PDF Lead Magnet)`,
          html: `
            <h3>📘 New Lead: 14-Day Fat Loss Foundations Guide</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Resource:</strong> 14-Day Fat Loss Foundations: Nutrition Basics Guide (PDF)</p>
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString('en-NZ', { timeZone: 'Pacific/Auckland' })}</p>
          `
        };

        // User guide email
        const pdfFilename = '14-day-fat-loss-foundations.pdf';
        const pdfFilePath = path.resolve('public/docs', pdfFilename);
        const pdfDownloadUrl = `https://wrkpersonaltraining.co.nz/docs/14-day-fat-loss-foundations.pdf`;

        const userMail: any = {
          from: process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Personal Training" <info@wrkpersonaltraining.co.nz>',
          to: email,
          subject: `Your 14-Day Fat Loss Foundations Guide [PDF Download]`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #2C3539; line-height: 1.6; padding: 20px;">
              <h2 style="color: #2C3539; margin-bottom: 16px;">14-Day Fat Loss Foundations: Nutrition Basics</h2>
              <p>Hi there,</p>
              <p>Thank you for downloading our <strong>14-Day Fat Loss Foundations: Nutrition Basics Guide</strong> from WRK Personal Training.</p>
              <p>Sustainable fat loss doesn't require extreme restriction or an immaculate diet. It requires a repeatable, calm structure that protects your metabolic rate and lean muscle tissue.</p>
              
              <!-- Direct PDF Download Banner -->
              <div style="background-color: #ffffff; border: 2px solid #8A9A86; border-radius: 12px; padding: 24px; margin: 24px 0; text-align: center;">
                <h3 style="margin-top: 0; font-size: 20px; color: #2C3539;">📥 Download Your Official Guide</h3>
                <p style="margin-bottom: 16px; font-size: 15px; color: #64748b;">Click below to access your complete copy of the 14-Day Fat Loss Foundations (PDF):</p>
                <a href="${pdfDownloadUrl}" style="display: inline-block; background: #8A9A86; color: #ffffff; padding: 14px 28px; border-radius: 8px; font-weight: 700; text-decoration: none; font-size: 16px;">
                  Download 14-Day Guide (PDF) &darr;
                </a>
              </div>

              <div style="background-color: #F6F5F2; padding: 24px; border-radius: 12px; margin: 24px 0; border-left: 4px solid #8A9A86;">
                <h3 style="margin-top: 0; font-size: 18px; color: #2C3539;">The 6 Non-Negotiable Nutrition Fundamentals</h3>
                <ol style="margin: 0; padding-left: 20px; font-size: 15px; line-height: 1.8;">
                  <li><strong>3 Solid Meals Per Day:</strong> Build regular eating intervals that eliminate perpetual snacking and provide stable blood glucose.</li>
                  <li><strong>Protein at Every Meal (30/40/30 Balance):</strong> Aim for a balanced plate of roughly 30% high-quality protein, 40% unrefined carbohydrates, and 30% healthy fats to maintain muscle protein synthesis.</li>
                  <li><strong>High-Fibre Fruits & Vegetables:</strong> Prioritise whole vegetables and fruits to optimize gut motility, micronutrient intake, and fullness.</li>
                  <li><strong>Planned Snacks Over Grazing:</strong> If snacking, choose intentional protein anchors (cottage cheese, Greek yoghurt, boiled eggs) rather than impulsive grazing.</li>
                  <li><strong>Eliminating Liquid Calories:</strong> Replace sweetened drinks, commercial fruit juices, and syrup-laden coffees with water, black coffee, or unsweetened tea.</li>
                  <li><strong>Whole-Food Swaps Over Ultra-Processed Foods:</strong> Prioritise single-ingredient, minimally processed pantry and fridge staples over hyper-palatable packaged items.</li>
                </ol>
              </div>

              <h4 style="color: #2C3539; margin-top: 24px; margin-bottom: 8px;">The 30/40/30 Plate-Building Template</h4>
              <p style="font-size: 15px;">When plating lunch or dinner, use this quick visual reference:</p>
              <ul style="font-size: 15px; line-height: 1.6; margin-bottom: 20px;">
                <li><strong>Palm of Protein (30%):</strong> Lean Canterbury beef, chicken breast, salmon, eggs, or tofu.</li>
                <li><strong>Fist of Complex Carbs (40%):</strong> Kumara, potatoes, brown rice, quinoa, or whole oats.</li>
                <li><strong>Thumb of Healthy Fats (30%):</strong> Extra virgin olive oil, avocado, or raw nuts.</li>
                <li><strong>2 Cupped Hands of Greens:</strong> Leafy spinach, broccoli, beans, or seasonal salad.</li>
              </ul>

              <div style="background: #0f172a; color: #ffffff; padding: 20px; border-radius: 10px; margin: 28px 0; text-align: center;">
                <p style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Need coach-led support and a progressive strength routine?</p>
                <a href="https://wrkpersonaltraining.co.nz/personal-training" style="display: inline-block; background: #ffffff; color: #0f172a; padding: 10px 20px; border-radius: 6px; font-weight: bold; text-decoration: none; font-size: 14px;">Explore In-Person Coaching in Addington &rarr;</a>
              </div>

              <p style="margin-top: 24px; font-size: 14px; color: #64748b;">
                The Coaching Team at WRK Personal Training<br/>
                12 Show Place, Addington, Christchurch<br/>
                <a href="https://wrkpersonaltraining.co.nz" style="color: #2C3539;">wrkpersonaltraining.co.nz</a>
              </p>
            </div>
          `
        };

        const sendMailRobust = async (opts: any) => {
          try {
            await transporter.sendMail(opts);
          } catch (err: any) {
            if (err.responseCode === 554 || err.responseCode === 550 || err.responseCode === 553 || (err.message && err.message.includes('rejected'))) {
              const fallback = { ...opts, from: process.env.SMTP_USER, replyTo: opts.from };
              await transporter.sendMail(fallback);
              return;
            }
            throw err;
          }
        };

        await sendMailRobust(adminMail);
        await sendMailRobust(userMail);
        console.log("14-Day Fat Loss Foundations emails sent successfully");
      } catch (emailErr: any) {
        console.error('Lead magnet email dispatch failed:', emailErr);
      }

      // 2. MailerLite Integration
      const rawKey = process.env.MAILERLITE_API_KEY || "";
      const MAILERLITE_API_KEY = rawKey.replace(/^"|"$/g, '').trim();
      const MAILERLITE_TDEE_LEAD_MAGNET_GROUP = process.env.MAILERLITE_GROUP_TDEE_LEAD_MAGNET?.replace(/^"|"$/g, '').trim() || "199990436523148879";

      if (MAILERLITE_API_KEY) {
        try {
          const subscriberPayloadV3 = {
            email: email,
            fields: {
              interest: "14-Day Fat Loss Foundations PDF",
              lead_source: "tdee_calculator_lead_magnet"
            },
            groups: [MAILERLITE_TDEE_LEAD_MAGNET_GROUP]
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
            const fallbackPayload = { email: email, groups: [MAILERLITE_TDEE_LEAD_MAGNET_GROUP] };
            mlResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${MAILERLITE_API_KEY}`, 'Accept': 'application/json' },
              body: JSON.stringify(fallbackPayload)
            });
          }

          if (mlResponse.ok) {
            console.log("Successfully subscribed fat loss foundations lead to MailerLite (TDEE group)");
          } else {
            console.error("MailerLite response error for fat loss foundations lead:", mlResponse.status, await mlResponse.text());
          }
        } catch (mlErr: any) {
          console.error("MailerLite integration error for fat loss foundations lead:", mlErr.message);
        }
      }

      // 3. Google Sheets Webhook Integration
      const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
      if (sheetsWebhookUrl) {
        try {
          await fetch(sheetsWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              type: 'fat_loss_foundations_lead_magnet',
              date: new Date().toISOString(),
              email: email
            })
          });
          console.log("Successfully logged fat loss foundations lead to Google Sheets");
        } catch (sheetsErr: any) {
          console.error("Google Sheets integration error for fat loss foundations lead:", sheetsErr.message);
        }
      }
    })();
  };

  app.post("/api/fat-loss-guide", handleFatLossGuideSubmission);
  app.post("/api/send-guide", handleFatLossGuideSubmission);
  app.post("/api/recipe-guide", handleFatLossGuideSubmission);

  // Sitemap XML route
  
  app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send('User-agent: *\nAllow: /\nSitemap: https://www.wrkpersonaltraining.co.nz/sitemap.xml');
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
        title = "Personal Trainer Christchurch | Semi-Private Coaching | WRK";
        desc = "Skip crowded Christchurch gyms. Train in our quiet Addington studio with joint-safe, coach-led strength training. Free on-site parking. Book a consult.";
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
        if (slug === 'glp-1-strength-training') {
          title = "GLP-1 Strength Training: Stop Sarcopenia & Fatigue | WRK";
          desc = "Up to 40% of GLP-1 weight loss comes from muscle. Protect your metabolic rate with our 30-minute compound lifting protocol. Start lifting smarter today.";
        } else if (post) {
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
      let ogTags = `
        <link rel="canonical" href="https://www.wrkpersonaltraining.co.nz${url === '/' ? '' : url}" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${desc}" />
        <meta property="og:url" content="https://www.wrkpersonaltraining.co.nz${url}" />
        <meta property="og:image" content="https://www.wrkpersonaltraining.co.nz/images/wrk-social-preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${title}" />
        <meta name="twitter:description" content="${desc}" />
      `;
      if (pathOnly === '/personal-training') {
        const localGymSchema = {
          "@context": "https://schema.org",
          "@type": "ExerciseGym",
          "name": "WRK Personal Training",
          "image": "https://wrkpersonaltraining.co.nz/logo.png",
          "url": "https://wrkpersonaltraining.co.nz/personal-training",
          "telephone": "+64-21-393-160",
          "email": "info@wrkpersonaltraining.co.nz",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1/12 Show Place, Addington (located inside Get Me Fitter)",
            "addressLocality": "Christchurch",
            "addressRegion": "Canterbury",
            "postalCode": "8024",
            "addressCountry": "NZ"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -43.5434,
            "longitude": 172.6053
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "06:00",
              "closes": "20:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Saturday"],
              "opens": "07:00",
              "closes": "13:00"
            }
          ],
          "areaServed": [
            {
              "@type": "City",
              "name": "Christchurch"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Addington"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Riccarton"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Spreydon"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Halswell"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Cashmere"
            }
          ]
        };
        const faqSchema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Where is WRK Personal Training located?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our private personal training studio is located in Addington, Christchurch. We offer one-on-one and semi-private coaching away from crowded commercial gyms."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer nutrition coaching alongside training?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Every personal training membership includes comprehensive nutrition guidance, macronutrient targets, and habit tracking tailored to your specific body composition goals."
              }
            },
            {
              "@type": "Question",
              "name": "Do you support clients on GLP-1 medications or navigating menopause?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We specialize in evidence-based resistance training and high-protein nutrition strategies designed to preserve lean muscle tissue, enhance metabolic rate, and improve strength for clients on GLP-1s or managing midlife hormonal shifts."
              }
            },
            {
              "@type": "Question",
              "name": "I'm completely new to lifting weights. Is this suitable for beginners?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Most of our clients are not gym veterans. Because our facility is semi-private, you learn the foundations of movement and lifting mechanics in a calm, zero-judgment space at your own pace."
              }
            },
            {
              "@type": "Question",
              "name": "What happens during the initial consultation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We meet at the Addington facility for a relaxed, 20-minute chat. We discuss your background, health goals, take a quick look at movement mechanics, and decide together if the setup is the right fit for you."
              }
            }
          ]
        };
        ogTags += `\n        <script type="application/ld+json">${JSON.stringify(localGymSchema)}</script>`;
        ogTags += `\n        <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`;
      }
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
      
      res.status(200).set({ 
        'Content-Type': 'text/html',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate'
      }).end(finalHtml);
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
    app.use((req, res, next) => {
      // If there is no extension, check if [path].html exists to serve it directly without trailing slash redirect
      if (!path.extname(req.path) && req.path !== '/') {
        const htmlPath = path.resolve("dist", req.path.slice(1) + ".html");
        if (require('fs').existsSync(htmlPath)) {
          req.url = req.url + '.html';
        }
      }
      next();
    });
    
    app.use(express.static(path.resolve("dist"), { 
      index: ['index.html'],
      redirect: false 
    }));
  }
  
  app.get('*all', ssrHandler);

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
