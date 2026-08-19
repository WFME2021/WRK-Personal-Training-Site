const fs = require('fs');

let serverCode = fs.readFileSync('server.ts', 'utf8');

// Replace the v3 try block in the contact form to retry without fields if 422
serverCode = serverCode.replace(
  `          let mlResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': \`Bearer \${MAILERLITE_API_KEY}\`,
              'Accept': 'application/json'
            },
            body: JSON.stringify(subscriberPayloadV3)
          });`,
  `          let mlResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': \`Bearer \${MAILERLITE_API_KEY}\`,
              'Accept': 'application/json'
            },
            body: JSON.stringify(subscriberPayloadV3)
          });
          
          if (!mlResponse.ok && mlResponse.status === 422) {
             console.log("MailerLite v3 rejected custom fields. Retrying without fields...");
             const fallbackPayload = { email: email, groups: MAILERLITE_GROUP_CONTACT ? [MAILERLITE_GROUP_CONTACT] : [] };
             mlResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json', 'Authorization': \`Bearer \${MAILERLITE_API_KEY}\`, 'Accept': 'application/json' },
               body: JSON.stringify(fallbackPayload)
             });
          }`
);

// Replace the v3 try block in the assessment form to retry without fields if 422
serverCode = serverCode.replace(
  `            let mlResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': \`Bearer \${MAILERLITE_API_KEY}\`,
                'Accept': 'application/json'
              },
              body: JSON.stringify(subscriberPayloadV3)
            });`,
  `            let mlResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': \`Bearer \${MAILERLITE_API_KEY}\`,
                'Accept': 'application/json'
              },
              body: JSON.stringify(subscriberPayloadV3)
            });
            
            if (!mlResponse.ok && mlResponse.status === 422) {
               console.log("MailerLite v3 rejected assessment fields. Retrying without fields...");
               const fallbackPayload = { email: email, groups: [MAILERLITE_PROSPECT_GROUP] };
               mlResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json', 'Authorization': \`Bearer \${MAILERLITE_API_KEY}\`, 'Accept': 'application/json' },
                 body: JSON.stringify(fallbackPayload)
               });
            }`
);

fs.writeFileSync('server.ts', serverCode);
console.log("Patched MailerLite retry logic");
