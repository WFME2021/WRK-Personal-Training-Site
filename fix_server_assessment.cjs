const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

const startIdx = code.indexOf('app.post("/api/assessment"');
let braceCount = 0;
let started = false;
let endIdx = -1;

for (let i = startIdx; i < code.length; i++) {
  if (code[i] === '{') {
    braceCount++;
    started = true;
  } else if (code[i] === '}') {
    braceCount--;
    if (started && braceCount === 0) {
      endIdx = i + 2; // to include '});' ideally, but let's just find the exact string `});` after
      break;
    }
  }
}

// Ensure we get the `});`
const closeStr = '  });';
const nextClose = code.indexOf(closeStr, endIdx - 5);
if (nextClose !== -1 && nextClose < endIdx + 5) {
  endIdx = nextClose + closeStr.length;
}

const oldEndpoint = code.substring(startIdx, endIdx);
console.log('Replacing from', startIdx, 'to', endIdx);
console.log('Starts with:', oldEndpoint.substring(0, 50));
console.log('Ends with:', oldEndpoint.substring(oldEndpoint.length - 50));

const newEndpoint = `app.post("/api/assessment", async (req, res) => {
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

      const mailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Website" <info@wrkpersonaltraining.co.nz>',
        to: process.env.CONTACT_EMAIL || "info@wrkpersonaltraining.co.nz, wfme2021@gmail.com",
        subject: \`New GLP-1 Fitness Assessment — \${overallScore}/100\`,
        text: \`=== New GLP-1 Assessment Unlocked ===
Email: \${email}
Overall Score: \${overallScore}/100 (\${overallLabel})

--- Priorities ---
1. \${primaryFocus}
2. \${secondaryFocus}
3. \${thirdFocus}

--- Context ---
Goal: \${goal || 'N/A'}
GLP-1 Status: \${glp1Status || 'N/A'}
GLP-1 Duration: \${glp1Duration || 'N/A'}

--- Raw Answers ---
\${JSON.stringify(answers, null, 2)}\`,
      };

      const sendMailRobust = async (transporter, mailOptions, smtpUser) => {
        try {
          await transporter.sendMail(mailOptions);
          return true;
        } catch (error) {
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
              'Authorization': \`Bearer \${MAILERLITE_API_KEY}\`,
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
            
            const v2Endpoint = \`https://api.mailerlite.com/api/v2/groups/\${MAILERLITE_PROSPECT_GROUP}/subscribers\`;

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
  });`;

code = code.substring(0, startIdx) + newEndpoint + code.substring(endIdx);
fs.writeFileSync('server.ts', code);
console.log('server.ts updated');
