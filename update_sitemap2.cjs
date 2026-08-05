const fs = require('fs');
let s = fs.readFileSync('generate-sitemap.ts', 'utf8');

if (!s.includes("'/couch-to-5k'")) {
  s = s.replace("'/14-day-fat-loss-foundations',", "'/14-day-fat-loss-foundations',\n      '/couch-to-5k',");
}

fs.writeFileSync('generate-sitemap.ts', s);
