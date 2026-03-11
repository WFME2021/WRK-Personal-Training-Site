import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'pageContent.ts');
const content = fs.readFileSync(filePath, 'utf8');

const urls = content.match(/https:\/\/images\.unsplash\.com\/[^"']+/g) || [];
const uniqueUrls = [...new Set(urls)];

async function check() {
  for (const url of uniqueUrls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.startsWith('image/')) {
        console.log(url, 'Not an image:', contentType);
      }
    } catch (e) {
      console.log(url, 'Error');
    }
  }
}
check();
