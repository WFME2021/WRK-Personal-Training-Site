const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

code = code.replace(
  /console.error\('Error fetching blogs for SSR', e\);/,
  `console.error('Error fetching blogs for SSR:', e);
      cachedBlogs = [];`
);

fs.writeFileSync('server.ts', code);
