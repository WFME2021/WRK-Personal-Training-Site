const fs = require('fs');

let serverCode = fs.readFileSync('server.ts', 'utf8');

// The Prospect group ID is 195641787200570883
// Let's modify the contact form to use that if MAILERLITE_GROUP_CONTACT is empty, OR just hardcode it to ensure it works.
serverCode = serverCode.replace(
  `const MAILERLITE_GROUP_CONTACT = process.env.MAILERLITE_GROUP_CONTACT?.replace(/^"|"$/g, '').trim() || MAILERLITE_GROUP_ID_DEFAULT;`,
  `const MAILERLITE_GROUP_CONTACT = process.env.MAILERLITE_GROUP_CONTACT?.replace(/^"|"$/g, '').trim() || MAILERLITE_GROUP_ID_DEFAULT || "195641787200570883";`
);

fs.writeFileSync('server.ts', serverCode);
console.log("Patched Group ID for contact form");
