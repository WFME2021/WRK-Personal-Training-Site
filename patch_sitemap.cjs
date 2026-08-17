const fs = require('fs');

let serverCode = fs.readFileSync('server.ts', 'utf8');
serverCode = serverCode.replace("'/online-coaching',", "'/services',");
serverCode = serverCode.replace("'/personal-training',", "");
fs.writeFileSync('server.ts', serverCode);

try {
  let sitemapCode = fs.readFileSync('generate-sitemap.ts', 'utf8');
  sitemapCode = sitemapCode.replace("'/online-coaching',", "'/services',");
  sitemapCode = sitemapCode.replace("'/personal-training',", "");
  fs.writeFileSync('generate-sitemap.ts', sitemapCode);
} catch (e) {}

console.log("Patched prerender routes");
