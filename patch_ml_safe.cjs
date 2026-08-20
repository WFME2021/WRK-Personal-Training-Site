const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

// Ensure we don't send null groups or anything weird
code = code.replace(
  `groups: MAILERLITE_GROUP_CONTACT ? [MAILERLITE_GROUP_CONTACT] : []`,
  `groups: ["195641787200570883"]`
);

code = code.replace(
  `const fallbackPayload = { email: email, groups: MAILERLITE_GROUP_CONTACT ? [MAILERLITE_GROUP_CONTACT] : [] };`,
  `const fallbackPayload = { email: email, groups: ["195641787200570883"] };`
);

fs.writeFileSync('server.ts', code);
console.log("Patched ML groups to be explicitly array of strings");
