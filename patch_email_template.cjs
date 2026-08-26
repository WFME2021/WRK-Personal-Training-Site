const fs = require('fs');

let content = fs.readFileSync('server.ts', 'utf-8');

const regex = /const userMailOptions = \{[\s\S]*?html: \`([\s\S]*?)\`\s*\};/;

const match = content.match(regex);
if (!match) {
  console.log("Could not find userMailOptions template");
  process.exit(1);
}

const newHtml = `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #2C3539;">
                <h2 style="color: #2C3539; margin-bottom: 24px;">Your GLP-1 Game Plan</h2>
                <p>Hi there,</p>
                <p>Thank you for completing the GLP-1 Fitness Assessment. We've analysed your current routine across Strength, Nutrition, Movement, Hydration, and Recovery.</p>
                
                <div style="background-color: #F6F5F2; padding: 24px; border-radius: 12px; margin: 24px 0;">
                  <h3 style="margin-top: 0; font-size: 24px; color: #2C3539;">Score: \${overallScore}/100</h3>
                  <p style="margin-bottom: 0; font-weight: 500; color: #8A9A86;">\${overallLabel}</p>
                </div>

                <p>Based on your answers, here are your biggest opportunities for improvement and your customised next steps.</p>
                
                <div style="margin: 32px 0;">
                  \${(recommendations || []).map((rec, i) => \`
                    <div style="background-color: #ffffff; border: 1px solid #e5e5e5; padding: 24px; border-radius: 12px; margin-bottom: 20px;">
                      <p style="font-size: 12px; font-weight: bold; letter-spacing: 1px; color: #8A9A86; margin-top: 0; text-transform: uppercase;">
                        0\${i + 1} &mdash; \${rec.domain}
                      </p>
                      <h3 style="margin-top: 0; margin-bottom: 12px; font-size: 20px; color: #2C3539; text-transform: uppercase;">
                        \${rec.headline}
                      </h3>
                      <p style="color: #555555; line-height: 1.5; margin-bottom: 16px;">
                        \${rec.explanation}
                      </p>
                      <div style="border-top: 1px solid #eeeeee; padding-top: 16px;">
                        <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #2C3539;">YOUR NEXT STEP</h4>
                        <p style="margin: 0; color: #8A9A86; font-weight: bold;">
                          \${rec.firstStep}
                        </p>
                      </div>
                    </div>
                  \`).join('')}
                </div>

                <div style="background-color: #2C3539; color: #ffffff; padding: 32px 24px; border-radius: 12px; margin-bottom: 32px;">
                  <h3 style="margin-top: 0; margin-bottom: 24px; font-size: 20px; text-transform: uppercase;">Your Next 7 Days</h3>
                  \${(sevenDayPlan || []).map(item => \`
                    <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 16px; margin-bottom: 16px;">
                      <strong style="display: block; font-size: 12px; letter-spacing: 1px; color: rgba(255,255,255,0.5); text-transform: uppercase; margin-bottom: 4px;">\${item.label}</strong>
                      <span style="font-size: 15px; font-weight: 500;">\${item.action}</span>
                    </div>
                  \`).join('')}
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
              </div>`;

const newCode = `const userMailOptions = {
            from: process.env.SMTP_FROM || process.env.SMTP_USER || '"WRK Personal Training" <info@wrkpersonaltraining.co.nz>',
            to: email,
            subject: \`Your GLP-1 Game Plan\`,
            html: \`${newHtml}\`
          };`;

content = content.replace(regex, newCode);
fs.writeFileSync('server.ts', content);
console.log("Email template successfully updated.");
