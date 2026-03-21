const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const files = fs.readdirSync(dataDir);

for (const file of files) {
    if (file.endsWith('.ts')) {
        const filepath = path.join(dataDir, file);
        let content = fs.readFileSync(filepath, 'utf8');
        let newContent = content.replace(/(\/images\/[^"'\s\?]+(?:\.jpg|\.png))(?!\?v=2)/g, '$1?v=2');
        if (content !== newContent) {
            fs.writeFileSync(filepath, newContent, 'utf8');
            console.log(`Appended ?v=2 to images in ${file}`);
        }
    }
}
