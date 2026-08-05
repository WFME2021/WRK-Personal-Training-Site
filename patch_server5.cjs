const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

code = code.replace(
  /const initialBlogs = await getCachedBlogs\(\);/,
  `const initialBlogs = await getCachedBlogs();
      // pass`
);
code = code.replace(
  /const initialData = \{ blogs: initialBlogs \};/,
  `const initialData = { blogs: initialBlogs };
      console.log("INITIAL DATA PASSED TO APP:", !!initialData.blogs, initialData.blogs.length);`
);

fs.writeFileSync('server.ts', code);
