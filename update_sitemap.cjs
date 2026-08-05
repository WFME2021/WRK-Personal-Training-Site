const fs = require('fs');
let s = fs.readFileSync('generate-sitemap.ts', 'utf8');

s = s.replace("'/personal-trainer-christchurch',", "'/personal-training',");
s = s.replace("'/online-personal-training-nz',", "'/online-coaching',");

if (!s.includes("'/14-day-fat-loss-foundations'")) {
  s = s.replace("'/workplace-wellness-program-nz',", "'/workplace-wellness-program-nz',\n      '/14-day-fat-loss-foundations',");
}

fs.writeFileSync('generate-sitemap.ts', s);
