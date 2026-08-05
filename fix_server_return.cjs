const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

code = code.replace(
  /return \[\{ slug: 'error', title: e\.message \}\];/,
  `return [];`
);

fs.writeFileSync('server.ts', code);
