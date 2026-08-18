const fs = require('fs');

let serverCode = fs.readFileSync('server.ts', 'utf8');

// Patch contact email
serverCode = serverCode.replace(
  `        to: process.env.CONTACT_EMAIL || "info@wrkpersonaltraining.co.nz, wfme2021@gmail.com",`,
  `        to: \`\${process.env.CONTACT_EMAIL || 'wfme2021@gmail.com'}, info@wrkpersonaltraining.co.nz\`,
        replyTo: email,`
);

// Patch assessment email
serverCode = serverCode.replace(
  `            to: process.env.CONTACT_EMAIL || "info@wrkpersonaltraining.co.nz, wfme2021@gmail.com",`,
  `            to: \`\${process.env.CONTACT_EMAIL || 'wfme2021@gmail.com'}, info@wrkpersonaltraining.co.nz\`,
            replyTo: email,`
);

fs.writeFileSync('server.ts', serverCode);
console.log("Patched email to fields");
