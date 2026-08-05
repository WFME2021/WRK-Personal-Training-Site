const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

code = code.replace(
  /const finalHtml = templateHtml.replace\('<div id="root"><\/div>', '<div id="root">' \+ appHtml \+ '<\/div><!-- debug:' \+ appHtml.length \+ ' -->'\)\.replace\(/s,
  `const finalHtml = templateHtml.replace(
        '<div id="root"></div>',
        \`<div id="root">\${appHtml}</div><script>window.__INITIAL_DATA__ = \${JSON.stringify(initialData).replace(/</g, '\\\\u003c')};</script><!-- debug:\${appHtml.length} -->\`
      );`
);

fs.writeFileSync('server.ts', code);
console.log('patched');
