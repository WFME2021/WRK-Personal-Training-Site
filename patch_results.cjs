const fs = require('fs');
let code = fs.readFileSync('pages/Assessment.tsx', 'utf8');

code = code.replace(/result\.domainScores\.map/g, '(result.domainScores || []).map');
code = code.replace(/result\.recommendations\.map/g, '(result.recommendations || []).map');
code = code.replace(/result\.sevenDayPlan\.map/g, '(result.sevenDayPlan || []).map');

fs.writeFileSync('pages/Assessment.tsx', code);
