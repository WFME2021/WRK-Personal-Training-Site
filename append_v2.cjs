const fs = require('fs');
const path = require('path');

const contentPath = path.join(__dirname, 'public', 'content.json');
let content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));

function walk(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            walk(obj[key]);
        } else if (typeof obj[key] === 'string' && obj[key].startsWith('/images/')) {
            // Remove any existing query string
            let url = obj[key].split('?')[0];
            obj[key] = url + '?v=2';
        }
    }
}

walk(content);
fs.writeFileSync(contentPath, JSON.stringify(content, null, 2), 'utf8');
console.log('Appended ?v=2 to all image URLs in public/content.json');
