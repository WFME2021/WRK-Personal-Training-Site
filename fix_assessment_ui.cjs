const fs = require('fs');
let code = fs.readFileSync('pages/Assessment.tsx', 'utf8');

const regex = /<p className="text-text-secondary text-lg animate-pulse">[\s\S]*?<\/p>/;
code = code.replace(regex, '');
fs.writeFileSync('pages/Assessment.tsx', code);
