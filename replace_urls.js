const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'pageContent.ts');
let content = fs.readFileSync(filePath, 'utf8');

const brokenUrls = [
  "https://images.unsplash.com/photo-1517836357463-c25dfe94c0de?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1476480868291-40c4370371f3?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1501554697317-40c68b949325?auto=format&fit=crop&w=1920&q=80"
];

const newUrl = "https://i.postimg.cc/mkq4Yt9C/pexels-pripicart-591216.jpg";

for (const url of brokenUrls) {
  content = content.split(url).join(newUrl);
}

fs.writeFileSync(filePath, content);
console.log('Replaced broken URLs in data/pageContent.ts');
