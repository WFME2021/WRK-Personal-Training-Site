const fs = require('fs');

let content = fs.readFileSync('server.ts', 'utf8');

// replace the declaration inside
content = content.replace(/const resultUrl = `https:\/\/www\.wrkpersonaltraining\.co\.nz\/assessment\/result\/\$\{req\.body\.token\}`;/, '');
// declare it globally in the route handler
content = content.replace(/const { name, email, answers } = req\.body;/, `const { name, email, answers, token } = req.body;\n    const resultUrl = token ? \`https://www.wrkpersonaltraining.co.nz/assessment/result/\${token}\` : '';`);

fs.writeFileSync('server.ts', content);
