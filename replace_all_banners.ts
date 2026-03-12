import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'pageContent.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace all banner images with the new URL
content = content.replace(/image:\s*"https:\/\/images\.unsplash\.com\/[^"]+"/g, 'image: "https://i.postimg.cc/mkq4Yt9C/pexels-pripicart-591216.jpg"');

fs.writeFileSync(filePath, content);
console.log('Replaced all banner URLs in data/pageContent.ts');
