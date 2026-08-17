const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

const oldNodemailer = `      // Lazy load nodemailer
      let nodemailer;
      try {
        nodemailer = await import("nodemailer");
      } catch (importError) {
        console.error("Failed to import nodemailer:", importError);
        console.warn("Continuing without email module");
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
      }`;

const newNodemailer = `      try {
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
        console.log("Assessment email sent successfully");
      } catch (emailError) {
        console.error("Failed to send assessment email:", emailError);
      }`;

code = code.replace(oldNodemailer, newNodemailer);
fs.writeFileSync('server.ts', code);
