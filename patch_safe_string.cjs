const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');
code = code.replace(
  /\$\{message\.replace\(\/\\\\n\/g, \'\<br\/\>\'\)\}/g,
  "${(message || '').replace(/\\n/g, '<br/>')}"
);
fs.writeFileSync('server.ts', code);
console.log("Patched safe string");
