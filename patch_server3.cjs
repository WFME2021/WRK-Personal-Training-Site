const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

const oldNodemailerContact = `      // Lazy load nodemailer
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
          pass: process.env.SMTP_PASS?.replace(/^"|"$/g, ''),
        },
      });

      const mailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Website" <info@wrkpersonaltraining.co.nz>',
        to: process.env.CONTACT_EMAIL || "info@wrkpersonaltraining.co.nz, wfme2021@gmail.com",
        subject: \`New Inquiry from \${name} - \${interest || 'General'}\`,
        text: \`
Name: \${name}
Email: \${email}
Phone: \${phone}
Interest: \${interest}
Referral Source: \${referralSource}

Message:
\${message}
        \`,
        html: \`
          <h3>New Inquiry from WRK Website</h3>
          <p><strong>Name:</strong> \${name}</p>
          <p><strong>Email:</strong> \${email}</p>
          <p><strong>Phone:</strong> \${phone}</p>
          <p><strong>Interest:</strong> \${interest}</p>
          <p><strong>Referral Source:</strong> \${referralSource}</p>
          <hr/>
          <p><strong>Message:</strong></p>
          <p>\${message.replace(/\\n/g, '<br/>')}</p>
        \`,
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
        console.log("Contact email sent successfully");
      } catch (emailError) {
        console.error("Failed to send contact email:", emailError);
      }`;

const newNodemailerContact = `      try {
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
          subject: \`New Inquiry from \${name} - \${interest || 'General'}\`,
          text: \`
Name: \${name}
Email: \${email}
Phone: \${phone}
Interest: \${interest}
Referral Source: \${referralSource}

Message:
\${message}
          \`,
          html: \`
            <h3>New Inquiry from WRK Website</h3>
            <p><strong>Name:</strong> \${name}</p>
            <p><strong>Email:</strong> \${email}</p>
            <p><strong>Phone:</strong> \${phone}</p>
            <p><strong>Interest:</strong> \${interest}</p>
            <p><strong>Referral Source:</strong> \${referralSource}</p>
            <hr/>
            <p><strong>Message:</strong></p>
            <p>\${message.replace(/\\n/g, '<br/>')}</p>
          \`,
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
        console.log("Contact email sent successfully");
      } catch (emailError) {
        console.error("Failed to send contact email:", emailError);
      }`;

code = code.replace(oldNodemailerContact, newNodemailerContact);
fs.writeFileSync('server.ts', code);
