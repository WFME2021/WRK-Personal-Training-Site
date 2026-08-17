const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

// Add .trim() to SMTP_PASS in both places just in case
code = code.replace(/pass: process\.env\.SMTP_PASS\?\.replace\(\/\^"\|"\$\/g, ''\),/g, "pass: process.env.SMTP_PASS?.replace(/^\"|\"$/g, '').trim(),");

fs.writeFileSync('server.ts', code);
