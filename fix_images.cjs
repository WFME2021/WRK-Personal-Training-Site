const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = [...walk('./pages'), ...walk('./components')];
let changed = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    // Add referrerPolicy="no-referrer" to any <img tag that doesn't already have it
    const newContent = content.replace(/<img(?![^>]*referrerPolicy)/gi, '<img referrerPolicy="no-referrer"');
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        changed++;
        console.log('Updated', file);
    }
});
console.log('Total files updated:', changed);
