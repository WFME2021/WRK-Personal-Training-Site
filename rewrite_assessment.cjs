const fs = require('fs');

let code = fs.readFileSync('server.ts', 'utf8');

const assessmentStartStr = '  // Assessment Form Submission';
const assessmentEndStr = '  // Sitemap XML route';

const startIndex = code.indexOf(assessmentStartStr);
const endIndex = code.indexOf(assessmentEndStr);

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find boundaries");
  process.exit(1);
}

const newAssessmentRoute = `  // Assessment Form Submission
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

          const userMailOptions = {
            from: process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Personal Training" <info@wrkpersonaltraining.co.nz>',
            to: email,
            subject: \`Your GLP-1 Fitness Assessment Results\`,
            html: \`
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #2C3539;">
                <h2 style="color: #2C3539;">Your GLP-1 Fitness Assessment Results</h2>
                <p>Hi there,</p>
                <p>Thank you for completing the GLP-1 Fitness Assessment. Here are your personalized results and focus areas to help you get the most out of your journey.</p>
                
                <div style="background-color: #F6F5F2; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="margin-top: 0; color: #2C3539;">Overall Score: \${overallScore}/100 (\${overallLabel})</h3>
                  <h4 style="margin-bottom: 10px;">Your Top 3 Priorities:</h4>
                  <ol style="margin-top: 0;">
                    <li><strong>\${(primaryFocus || '').toUpperCase()}</strong></li>
                    <li><strong>\${(secondaryFocus || '').toUpperCase()}</strong></li>
                    <li><strong>\${(thirdFocus || '').toUpperCase()}</strong></li>
                  </ol>
                </div>
                
                <p>If you're ready to start building muscle and protecting your metabolism, <a href="https://www.wrkpersonaltraining.co.nz/contact" style="color: #2C3539; font-weight: bold;">reach out to us today</a> to discuss a personalized plan.</p>
                
                <p>Best regards,<br>Hayden Richards<br><strong>WRK Personal Training</strong></p>
              </div>
            \`
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
                'Authorization': \`Bearer \${MAILERLITE_API_KEY}\`,
                'Accept': 'application/json'
              },
              body: JSON.stringify(subscriberPayloadV3)
            });

            if (!mlResponse.ok && mlResponse.status === 401) {
              const v2Endpoint = \`https://api.mailerlite.com/api/v2/groups/\${MAILERLITE_PROSPECT_GROUP}/subscribers\`;
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

`;

const newCode = code.substring(0, startIndex) + newAssessmentRoute + code.substring(endIndex);
fs.writeFileSync('server.ts', newCode);
console.log("Updated server.ts successfully");
