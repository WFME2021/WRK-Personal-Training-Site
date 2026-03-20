import fs from 'fs';
import path from 'path';

const filesToProcess = [
  'data/blogs.ts',
  'data/pageContent.ts',
  'data/pages.ts',
  'public/content.json'
];

const replacementUrl = 'https://i.postimg.cc/MKnbjvN1/dad-carrypack-hiking.jpg';
const regex = /https:\/\/images\.unsplash\.com\/[^'"\s\\]+/g;

filesToProcess.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(regex);
    if (matches) {
      console.log(`Found ${matches.length} matches in ${file}`);
      content = content.replace(regex, replacementUrl);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ${file}`);
    } else {
      console.log(`No matches found in ${file}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});

// Also fix empty URLs in content.json
const contentJsonPath = path.join(process.cwd(), 'public/content.json');
if (fs.existsSync(contentJsonPath)) {
  let contentJson = fs.readFileSync(contentJsonPath, 'utf-8');
  const emptyUrlRegex = /"url":\s*""/g;
  if (emptyUrlRegex.test(contentJson)) {
    contentJson = contentJson.replace(emptyUrlRegex, `"url": "${replacementUrl}"`);
    fs.writeFileSync(contentJsonPath, contentJson, 'utf-8');
    console.log(`Fixed empty URLs in public/content.json`);
  }
}
