const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');
code = code.replace(
  /throw new Error\("Internal Server Error: Email module missing"\);/g,
  'console.warn("Continuing without email module");'
);
fs.writeFileSync('server.ts', code);
