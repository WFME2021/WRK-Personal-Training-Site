const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

const regex = /const finalHtml = templateHtml\.replace\(\s*'<div id="root"><\/div>',\s*`<div id="root">\$\{appHtml\}<\/div><script>window\.__INITIAL_DATA__ = \$\{JSON\.stringify\(initialData\)\.replace\(\/<\/[gG], '\\\\u003c'\)\};<\/script><!-- debug:\$\{appHtml\.length\} -->`\s*\);\s*'<div id="root"><\/div>',\s*`<div id="root">\$\{appHtml\}<\/div><script>window\.__INITIAL_DATA__ = \$\{JSON\.stringify\(initialData\)\.replace\(\/<\/[gG], '\\\\u003c'\)\};<\/script>`\s*\);/s;

code = code.replace(regex, `const finalHtml = templateHtml.replace(
        '<div id="root"></div>',
        \`<div id="root">\${appHtml}</div><script>window.__INITIAL_DATA__ = \${JSON.stringify(initialData).replace(/</g, '\\\\u003c')};</script><!-- debug:\${appHtml.length} -->\`
      );`);
      
fs.writeFileSync('server.ts', code);
