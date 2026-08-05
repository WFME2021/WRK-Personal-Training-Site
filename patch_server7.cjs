const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

code = code.replace(
  /console.error\('Error fetching blogs for SSR:', e\);/,
  `console.error('Error fetching blogs for SSR:', e);
      return [{ slug: 'error', title: e.message }];` // return fake blog to see the error
);

fs.writeFileSync('server.ts', code);
