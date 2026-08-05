const fs = require('fs');

let content = fs.readFileSync('data/assessmentData.ts', 'utf8');
const data = eval(content.replace('export const assessmentData =', 'module.exports ='));
const fsPromises = fs.promises;
async function main() {
  await fsPromises.writeFile('data_dump.json', JSON.stringify(data.archetypes, null, 2));
}
main();
