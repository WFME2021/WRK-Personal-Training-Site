const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

const targetString = `        await sendMailRobust(transporter, mailOptions, process.env.SMTP_USER);\n        console.log("Assessment email sent successfully");`;

const replacementString = `        await sendMailRobust(transporter, mailOptions, process.env.SMTP_USER);
        console.log("Assessment admin email sent successfully");

        // Send email to user
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
                  <li><strong>\${primaryFocus.toUpperCase()}</strong></li>
                  <li><strong>\${secondaryFocus.toUpperCase()}</strong></li>
                  <li><strong>\${thirdFocus.toUpperCase()}</strong></li>
                </ol>
              </div>
              
              <p>If you're ready to start building muscle and protecting your metabolism, <a href="https://www.wrkpersonaltraining.co.nz/contact" style="color: #2C3539; font-weight: bold;">reach out to us today</a> to discuss a personalized plan.</p>
              
              <p>Best regards,<br>Hayden Richards<br><strong>WRK Personal Training</strong></p>
            </div>
          \`
        };

        try {
          await sendMailRobust(transporter, userMailOptions, process.env.SMTP_USER);
          console.log("Assessment user email sent successfully");
        } catch (userEmailError) {
          console.warn("Failed to send assessment email to user, but continuing:", userEmailError.message);
        }
`;

if (code.includes('await sendMailRobust(transporter, mailOptions, process.env.SMTP_USER);\\n        console.log("Assessment admin email sent successfully");')) {
  console.log('Already added');
} else {
  code = code.replace(targetString, replacementString);
  fs.writeFileSync('server.ts', code);
  console.log('Updated server.ts with user email');
}

