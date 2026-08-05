const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data/assessmentData.ts', 'utf8').replace('export const assessmentData = ', '').replace(/;$/, ''));

let output = "";

data.archetypes.forEach(arch => {
  output += `\n=== ARCHETYPE: ${arch.label} ===\n`;
  for (const [dose, doseData] of Object.entries(arch.next7DaysByDose)) {
    output += `\n  -- DOSE: ${dose} --\n`;
    doseData.days.forEach(day => {
      output += `    ${day.label}:\n`;
      day.items.forEach(item => {
        output += `      - ${item}\n`;
      });
    });
  }
});

fs.writeFileSync('variants.txt', output);
