const fs = require('fs');
let code = fs.readFileSync('pages/Assessment.tsx', 'utf8');

const regex = /<p className="text-sm text-center text-text-secondary mt-4">\s*Join 400\+ professionals who've found their blueprint\.\s*<\/p>/;
code = code.replace(regex, '');
fs.writeFileSync('pages/Assessment.tsx', code);
