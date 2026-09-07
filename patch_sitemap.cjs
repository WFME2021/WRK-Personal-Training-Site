const fs = require('fs');
let content = fs.readFileSync('generate-sitemap.ts', 'utf-8');

const staticPagesArray = `    const staticPages = [
      '',
      '/about',
      '/online-coaching',
      '/personal-training',
      '/toolkit',
      '/programs',
      '/assessment',
      '/tools',
      '/tools/tdee-calculator',
      '/tools/protein-calculator',
      '/tools/hydration-calculator',
      '/contact',
      '/blog'
    ];`;

const arrayRegex = /const staticPages = \[[\s\S]*?\];/;
content = content.replace(arrayRegex, staticPagesArray);
fs.writeFileSync('generate-sitemap.ts', content);
