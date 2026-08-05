const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

const target = `      } else if (url.match(/\\/blog\\/([^\\/]+)/)) {
        const slug = url.match(/\\/blog\\/([^\\/]+)/)[1];
        title = slug.replace(/-/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase()) + " | WRK";
        desc = "Read our latest insights on " + title + " from WRK Personal Training.";
      }`;

const replacement = `      } else if (url.match(/\\/blog\\/([^\\/]+)/)) {
        const slug = url.match(/\\/blog\\/([^\\/]+)/)[1];
        const post = initialBlogs.find(p => p.slug === slug);
        if (post) {
          title = post.seoTitle || post.title || (slug.replace(/-/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase()) + " | WRK");
          desc = post.seoDescription || post.excerpt || ("Read our latest insights on " + title + " from WRK Personal Training.");
        } else {
          title = slug.replace(/-/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase()) + " | WRK";
          desc = "Read our latest insights on " + title + " from WRK Personal Training.";
        }
      }`;

if (code.includes(target)) {
  code = code.replace(target, replacement);
  fs.writeFileSync('server.ts', code);
  console.log("Patched!");
} else {
  console.log("Target not found!");
}
