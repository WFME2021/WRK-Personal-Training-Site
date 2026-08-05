const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

// Move initialBlogs fetch up
code = code.replace(
  /const initialBlogs = await getCachedBlogs\(\);\s*console\.log\("getCachedBlogs returned", initialBlogs\.length, "blogs for url", url\);\s*const postMatch = initialBlogs\.find\(p => p\.slug === url\.split\('\/'\)\.pop\(\)\);\s*console\.log\("Found post matching slug:", !!postMatch\);\s*const initialData = \{ blogs: initialBlogs \};\s*console\.log\("INITIAL DATA PASSED TO APP:", !!initialData\.blogs, initialData\.blogs\.length\);/,
  `const initialData = { blogs: initialBlogs };`
);

code = code.replace(
  /let title = "Christchurch Personal Trainer Specialising in Fat Loss \| WRK";/,
  `const initialBlogs = await getCachedBlogs();
      let title = "Christchurch Personal Trainer Specialising in Fat Loss | WRK";`
);

// Replace the blog match logic
code = code.replace(
  /\} else if \(url\.match\(\/\\\/blog\\\/\[\^\\\/\]\+\/\)\) \{[\s\S]*?\} else if \(url\.includes\('\/blog'\)\) \{/,
  `} else if (url.match(/\\/blog\\/([^\\/]+)/)) {
        const slug = url.match(/\\/blog\\/([^\\/]+)/)[1];
        const post = initialBlogs.find(p => p.slug === slug);
        if (post) {
          title = post.title || (slug.replace(/-/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase()) + " | WRK");
          desc = post.metaDescription || post.excerpt || ("Read our latest insights on " + title + " from WRK Personal Training.");
        } else {
          title = slug.replace(/-/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase()) + " | WRK";
          desc = "Read our latest insights on " + title + " from WRK Personal Training.";
        }
      } else if (url.includes('/blog') && !url.includes('/blog/')) {`
);

fs.writeFileSync('server.ts', code);
console.log('patched');
