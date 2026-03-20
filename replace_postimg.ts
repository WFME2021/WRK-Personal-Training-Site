import fs from 'fs';
import path from 'path';

const filesToProcess = [
  'data/blogs.ts',
  'data/pageContent.ts',
  'data/pages.ts',
  'public/content.json',
  'components/AppScreenshots.tsx',
  'components/Layout.tsx',
  'pages/Home.tsx'
];

const regex = /https:\/\/i\.postimg\.cc\/[^/]+\/([^"'\s]+)/g;

filesToProcess.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(regex);
    if (matches) {
      console.log(`Found ${matches.length} matches in ${file}`);
      content = content.replace(regex, '/images/$1');
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ${file}`);
    } else {
      console.log(`No matches found in ${file}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});
