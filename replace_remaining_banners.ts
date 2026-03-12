import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'pageContent.ts');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/https:\/\/i\.postimg\.cc\/fyFscJdc\/pexels-allan-mas-5383718\.jpg/g, 'https://i.postimg.cc/mkq4Yt9C/pexels-pripicart-591216.jpg');

fs.writeFileSync(filePath, content);
console.log('Replaced remaining banner URLs in data/pageContent.ts');
