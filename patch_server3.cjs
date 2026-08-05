const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

code = code.replace(
  /const finalHtml = templateHtml.replace\(/,
  `console.log("appHtml length:", appHtml.length, "includes main:", appHtml.includes("<main"));
  const finalHtml = templateHtml.replace(`
);

fs.writeFileSync('server.ts', code);
console.log('patched');
