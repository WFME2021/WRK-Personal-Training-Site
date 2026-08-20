const fs = require('fs');

let serverCode = fs.readFileSync('server.ts', 'utf8');

serverCode = serverCode.replace(
  `const MAILERLITE_GROUP_CONTACT = process.env.MAILERLITE_GROUP_CONTACT?.replace(/^"|"$/g, '').trim() || MAILERLITE_GROUP_ID_DEFAULT || "195641787200570883";`,
  `const MAILERLITE_GROUP_CONTACT = "195641787200570883";`
);

fs.writeFileSync('server.ts', serverCode);
console.log("Hardcoded Group ID to 195641787200570883 for contact form");
