const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

code = code.replace(
  /const initialBlogs = await getCachedBlogs\(\);/,
  `const initialBlogs = await getCachedBlogs();
      console.log("getCachedBlogs returned", initialBlogs.length, "blogs for url", url);
      const postMatch = initialBlogs.find(p => p.slug === url.split('/').pop());
      console.log("Found post matching slug:", !!postMatch);`
);

code = code.replace(
  /const appHtml = renderToString\(/,
  `const appHtml = renderToString(`
);

fs.writeFileSync('server.ts', code);
console.log('patched');
