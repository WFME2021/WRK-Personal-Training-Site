const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');
code = code.replace(/const initialBlogs = await getCachedBlogs\(\);\n\s*const initialData = \{ blogs: initialBlogs \};/, 'const initialData = { blogs: initialBlogs };');
fs.writeFileSync('server.ts', code);
