const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

// 1. Add imports to the top of server.ts
code = code.replace(
  /import express from 'express';/,
  `import express from 'express';\nimport { collection, getDocs } from 'firebase/firestore';\nimport { db } from './firebase.ts';`
);

// 2. Add caching logic above ssrHandler
code = code.replace(
  /const ssrHandler = async \(req, res\) => {/,
  `let cachedBlogs = null;
  let cachedBlogsTime = 0;
  const getCachedBlogs = async () => {
    if (cachedBlogs && Date.now() - cachedBlogsTime < 60000) return cachedBlogs;
    try {
      const snapshot = await getDocs(collection(db, 'blogs'));
      const blogs = [];
      snapshot.forEach(doc => {
        const post = doc.data();
        if (post.slug && post.slug.startsWith('/')) post.slug = post.slug.substring(1);
        blogs.push(post);
      });
      blogs.sort((a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime());
      cachedBlogs = blogs;
      cachedBlogsTime = Date.now();
      return blogs;
    } catch(e) {
      console.error('Error fetching blogs for SSR', e);
      return [];
    }
  };
  
  const ssrHandler = async (req, res) => {`
);

// 3. Inject initialData into React tree
const renderRegex = /const appHtml = renderToString\(\s*React\.createElement\(\s*StaticRouter,\s*\{\s*location:\s*url\s*\},/s;
if (!renderRegex.test(code)) {
    console.log("Could not find renderToString call");
} else {
    code = code.replace(
      renderRegex,
      `const initialBlogs = await getCachedBlogs();
      const initialData = { blogs: initialBlogs };
      
      const appHtml = renderToString(
        React.createElement(
          StaticRouter,
          { location: url },`
    );
}

// 4. Pass initialData to App
const appRegex = /React\.createElement\(App\)/g;
code = code.replace(appRegex, `React.createElement(App, { initialData })`);

// 5. Inject __INITIAL_DATA__ script into HTML
const finalHtmlRegex = /const finalHtml = templateHtml\.replace\(\s*'<div id="root"><\/div>',\s*`<div id="root">\$\{appHtml\}<\/div>`\s*\);/s;
code = code.replace(
  finalHtmlRegex,
  `const finalHtml = templateHtml.replace(
        '<div id="root"></div>',
        \`<div id="root">\${appHtml}</div><script>window.__INITIAL_DATA__ = \${JSON.stringify(initialData).replace(/</g, '\\\\u003c')};</script>\`
      );`
);

fs.writeFileSync('server.ts', code);
console.log('server.ts patched.');
