import fs from 'fs';
import path from 'path';

const searchStr = 'wrkpt.co.nz';
const replaceStr = 'wrkpersonaltraining.co.nz';

const filesToUpdate = [
  './pages/Blog.tsx',
  './pages/BlogPost.tsx',
  './pages/Home.tsx',
  './pages/Contact.tsx',
  './components/SeoHead.tsx',
  './public/sitemap.xml',
  './public/robots.txt',
  './server.ts',
  './.env',
  './constants.ts',
  './.env.example'
];

for (const file of filesToUpdate) {
  const filePath = path.resolve(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(new RegExp(searchStr, 'g'), replaceStr);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
}
