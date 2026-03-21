const fs = require('fs');
const path = require('path');

// Update content.json
const contentPath = path.join(__dirname, 'public', 'content.json');
if (fs.existsSync(contentPath)) {
    let content = fs.readFileSync(contentPath, 'utf8');
    let newContent = content.replace(/\/images\//g, '/images-v2/');
    fs.writeFileSync(contentPath, newContent, 'utf8');
    console.log('Updated content.json');
}

// Update data/*.ts
const dataDir = path.join(__dirname, 'data');
if (fs.existsSync(dataDir)) {
    const files = fs.readdirSync(dataDir);
    for (const file of files) {
        if (file.endsWith('.ts')) {
            const filepath = path.join(dataDir, file);
            let content = fs.readFileSync(filepath, 'utf8');
            let newContent = content.replace(/\/images\//g, '/images-v2/');
            if (content !== newContent) {
                fs.writeFileSync(filepath, newContent, 'utf8');
                console.log(`Updated ${file}`);
            }
        }
    }
}
