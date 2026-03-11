import fs from 'fs';

let dataStr = fs.readFileSync('./data/assessmentData.ts', 'utf8');
dataStr = dataStr.replace('export const assessmentData = ', 'const assessmentData = ');
dataStr += '\nexport default assessmentData;\n';
fs.writeFileSync('./temp_data.ts', dataStr);
