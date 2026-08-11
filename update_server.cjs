const fs = require('fs');

let serverContent = fs.readFileSync('server.ts', 'utf8');

// 1. Remove the misplaced Mailerlite and Assessment email from /api/contact
const contactApiRegex = /(app\.post\("\/api\/contact", async \(req, res\) => {[\s\S]*?console\.error\("Failed to send email:", emailError\);\s*})([\s\S]*?)(\/\/ --- Google Sheets Webhook Integration ---)/;

const match = contactApiRegex.exec(serverContent);
if (match) {
  serverContent = serverContent.replace(contactApiRegex, '$1\n\n      $3');
} else {
  console.log("Could not find contact API regex match");
}

// 2. Replace the Mailerlite block in /api/assessment with the robust one, and add Google Sheets Webhook
const assessmentMlRegex = /(\/\/ --- MailerLite Integration ---[\s\S]*?)(res\.json\({ success: true, message: "Processed assessment" }\);)/;

const newAssessmentMl = `// --- MailerLite Integration ---
      const rawKey = process.env.MAILERLITE_API_KEY || "";
      const MAILERLITE_API_KEY = rawKey.replace(/^"|"$/g, '').trim();
      
      const MAILERLITE_GROUPS = {
        time_crunched: "MAILERLITE_GROUP_TIME_CRUNCHED",
        stress_stacked: "MAILERLITE_GROUP_STRESS_STACKED",
        pain_limited: "MAILERLITE_GROUP_PAIN_LIMITED",
        nutrition_drifting: "MAILERLITE_GROUP_NUTRITION_DRIFTING",
        motivation_drifting: "MAILERLITE_GROUP_MOTIVATION_DRIFTING"
      };
      
      const MAILERLITE_GROUP_ID_DEFAULT = process.env.MAILERLITE_GROUP_ID?.replace(/^"|"$/g, '').trim() || "";
      
      const archId = archetype?.id || 'time_crunched';
      const groupKey = MAILERLITE_GROUPS[archId as keyof typeof MAILERLITE_GROUPS];
      const MAILERLITE_GROUP_ID = process.env[groupKey as keyof typeof process.env]?.replace(/^"|"$/g, '').trim() || MAILERLITE_GROUP_ID_DEFAULT;

      if (MAILERLITE_API_KEY) {
        try {
          const fields = {
            name: name,
            diagnosis_type: constraintLabel, // Q4
            goal: goalLabel, // Q2
            location: locationLabel, // Q1
            q6_category: flagsLabel, // Q6
            blueprint_url: resultUrl
          };

          const subscriberPayloadV3 = {
            email: email,
            fields: fields,
            groups: MAILERLITE_GROUP_ID ? [MAILERLITE_GROUP_ID] : []
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
              name: name,
              fields: fields
            };
            
            const v2Endpoint = MAILERLITE_GROUP_ID 
              ? \`https://api.mailerlite.com/api/v2/groups/\${MAILERLITE_GROUP_ID}/subscribers\`
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
              resultUrl
            })
          });
          console.log('Successfully sent to Google Sheets Webhook');
        } catch (sheetsError: any) {
          console.error('Google Sheets Webhook Failed:', sheetsError.message);
        }
      }

      $2`;

const matchAssessment = assessmentMlRegex.exec(serverContent);
if (matchAssessment) {
  serverContent = serverContent.replace(assessmentMlRegex, newAssessmentMl);
} else {
  console.log("Could not find assessment ML regex match");
}

fs.writeFileSync('server.ts', serverContent, 'utf8');
console.log("Updated server.ts successfully");
