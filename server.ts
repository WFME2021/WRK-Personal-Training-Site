import "dotenv/config";
import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import { assessmentData } from "./data/assessmentData.js";
import { calculateArchetype, calculateRecommendation } from "./services/assessmentLogic.js";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Parse JSON bodies
  app.use(express.json({ limit: '50mb' }));

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

      try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
      }

      // --- MailerLite Integration ---
      const rawKey = process.env.MAILERLITE_API_KEY || "";
      const MAILERLITE_API_KEY = rawKey.replace(/^"|"$/g, '').trim();
      const rawGroupId = process.env.MAILERLITE_GROUP_ID || "";
      const MAILERLITE_GROUP_ID = rawGroupId.replace(/^"|"$/g, '').trim();

      if (MAILERLITE_API_KEY) {
        try {
          const fields: any = {
            name: name,
            phone: phone,
          };

          // Try v3 API first
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
            // Fallback to v2 API if v3 returns Unauthorized
            console.log('MailerLite v3 failed with 401, trying v2 API...');
            const subscriberPayloadV2 = {
              email: email,
              name: name,
              fields: fields
            };
            
            // If group ID is provided, the v2 endpoint is different
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
            console.log('Successfully added to MailerLite');
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
    const { name, email, answers } = req.body;

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

      try {
        await transporter.sendMail(mailOptions);
        console.log("Assessment email sent successfully");
      } catch (emailError) {
        console.error("Failed to send assessment email:", emailError);
      }

      const userMailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Personal Training" <info@wrkpersonaltraining.co.nz>',
        to: email,
        subject: `Your Capacity Blueprint Results - WRK Personal Training`,
        text: `Hi ${name},

Thanks for completing the Capacity Blueprint Diagnostic.

--- Your Diagnostic Result ---
Archetype / Bottleneck: ${archetypeLabel}
Bottleneck statement: ${primaryBottleneck}
Rule this week: ${ruleThisWeek}

Recommended next step: ${recommendedServiceName}
Link: https://www.wrkpersonaltraining.co.nz${recommendedServicePath}

Alternate option: ${alternateServiceName}
Link: https://www.wrkpersonaltraining.co.nz${alternateServicePath}

If you have any questions or want to discuss how to implement this, just reply to this email.

Best regards,
WRK Personal Training
`,
        html: `<p>Hi ${name},</p>
<p>Thanks for completing the Capacity Blueprint Diagnostic.</p>

<h4>--- Your Diagnostic Result ---</h4>
<p><strong>Archetype / Bottleneck:</strong> ${archetypeLabel}<br/>
<strong>Bottleneck statement:</strong> ${primaryBottleneck}<br/>
<strong>Rule this week:</strong> ${ruleThisWeek}</p>

<p><strong>Recommended next step:</strong> ${recommendedServiceName}<br/>
<strong>Link:</strong> <a href="https://www.wrkpersonaltraining.co.nz${recommendedServicePath}">https://www.wrkpersonaltraining.co.nz${recommendedServicePath}</a></p>

<p><strong>Alternate option:</strong> ${alternateServiceName}<br/>
<strong>Link:</strong> <a href="https://www.wrkpersonaltraining.co.nz${alternateServicePath}">https://www.wrkpersonaltraining.co.nz${alternateServicePath}</a></p>

<p>If you have any questions or want to discuss how to implement this, just reply to this email.</p>

<p>Best regards,<br/>
WRK Personal Training</p>
`
      };

      try {
        await transporter.sendMail(userMailOptions);
        console.log("Assessment email sent to user successfully");
      } catch (emailError) {
        console.error("Failed to send assessment email to user:", emailError);
      }

      // --- MailerLite Integration ---
      const rawKey = process.env.MAILERLITE_API_KEY || "";
      const MAILERLITE_API_KEY = rawKey.replace(/^"|"$/g, '').trim();
      const rawGroupId = process.env.MAILERLITE_GROUP_ID || "";
      const MAILERLITE_GROUP_ID = rawGroupId.replace(/^"|"$/g, '').trim();

      if (MAILERLITE_API_KEY) {
        try {
          const subscriberPayloadV3 = {
            email: email,
            fields: {
              name: name,
            },
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
              fields: {
                name: name
              }
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
              bottleneck: primaryBottleneck,
              recommendedService: recommendedServiceName,
              rawAnswers: answers
            })
          });
          console.log('Successfully sent assessment to Google Sheets Webhook');
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

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production: Serve static files from dist
    const distPath = path.resolve("dist");
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      // SPA Fallback
      app.get('*all', (req, res) => {
        res.sendFile(path.join(distPath, "index.html"));
      });
    } else {
      console.error("dist folder not found. Run 'npm run build' first.");
    }
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
