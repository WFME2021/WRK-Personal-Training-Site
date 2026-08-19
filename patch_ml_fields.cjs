const fs = require('fs');

let serverCode = fs.readFileSync('server.ts', 'utf8');

// Patch ML fields
serverCode = serverCode.replace(
  `            referral_source: referralSource || ''`,
  `            referral_source: referralSource || '',
            notes: message || '',
            message: message || ''`
);

fs.writeFileSync('server.ts', serverCode);
console.log("Patched MailerLite fields");
