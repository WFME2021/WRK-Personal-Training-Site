import fs from 'fs';

const content = fs.readFileSync('./data/assessmentData.ts', 'utf-8');
// Extract the JSON part
const jsonStr = content.substring(content.indexOf('{'), content.lastIndexOf('}') + 1);
const data = JSON.parse(jsonStr);

data.archetypes.forEach(arch => {
  const doses = arch.next7DaysByDose;
  
  Object.keys(doses).forEach(doseKey => {
    doses[doseKey].days.forEach(day => {
      // Fix "Day X: Day Y: "
      day.label = day.label.replace(/Day \d+: Day \d+: /, 'Day ' + day.label.charAt(4) + ': ');
    });
  });
});

const newContent = `export const assessmentData = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync('./data/assessmentData.ts', newContent);
console.log("Fixed labels in assessmentData.ts");
