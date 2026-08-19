const fs = require('fs');
let serverCode = fs.readFileSync('server.ts', 'utf8');

serverCode = serverCode.replace(
  `          if (!mlResponse.ok && mlResponse.status === 422) {
             console.log("MailerLite v3 rejected custom fields. Retrying without fields...");`,
  `          if (!mlResponse.ok && mlResponse.status !== 401) {
             console.log(\`MailerLite v3 failed with status \${mlResponse.status}. Retrying without fields...\`);`
);

serverCode = serverCode.replace(
  `            if (!mlResponse.ok && mlResponse.status === 422) {
               console.log("MailerLite v3 rejected assessment fields. Retrying without fields...");`,
  `            if (!mlResponse.ok && mlResponse.status !== 401) {
               console.log(\`MailerLite v3 failed with status \${mlResponse.status}. Retrying without fields...\`);`
);

fs.writeFileSync('server.ts', serverCode);
console.log("Patched super robust retry");
