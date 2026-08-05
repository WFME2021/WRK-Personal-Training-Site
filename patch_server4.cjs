const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

code = code.replace(
  /const finalHtml = templateHtml.replace\(/,
  `const finalHtml = templateHtml.replace('<div id="root"></div>', '<div id="root">' + appHtml + '</div><!-- debug:' + appHtml.length + ' -->').replace(`
);

fs.writeFileSync('server.ts', code);
