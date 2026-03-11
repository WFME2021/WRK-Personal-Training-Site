import fs from 'fs';

const content = fs.readFileSync('./data/assessmentData.ts', 'utf-8');
// Extract the JSON part
const jsonStr = content.substring(content.indexOf('{'), content.lastIndexOf('}') + 1);
const data = JSON.parse(jsonStr);

data.archetypes.forEach(arch => {
  const doses = arch.next7DaysByDose;
  
  // two_days
  if (doses.two_days) {
    const origDays = doses.two_days.days;
    doses.two_days.days = [
      { label: "Day 1: " + (origDays[0]?.label || "Strength"), items: origDays[0]?.items || ["Strength Session"] },
      { label: "Day 2: Active Recovery", items: ["Daily steps baseline", "Light movement (walk/bike)"] },
      { label: "Day 3: Rest", items: ["Focus on protein anchors", "Hydration"] },
      { label: "Day 4: " + (origDays[1]?.label || "Strength"), items: origDays[1]?.items || ["Strength Session"] },
      { label: "Day 5: Active Recovery", items: ["Daily steps baseline", "Light movement (walk/bike)"] },
      { label: "Day 6: Weekend Flexibility", items: ["1 planned social meal", "Stay active"] },
      { label: "Day 7: Rest & Prep", items: ["Grocery shop / meal prep", "Review upcoming week"] }
    ];
  }
  
  // three_days
  if (doses.three_days) {
    const origDays = doses.three_days.days;
    doses.three_days.days = [
      { label: "Day 1: " + (origDays[0]?.label || "Strength"), items: origDays[0]?.items || ["Strength Session"] },
      { label: "Day 2: Active Recovery", items: ["Daily steps baseline", "Light movement (walk/bike)"] },
      { label: "Day 3: " + (origDays[1]?.label || "Strength"), items: origDays[1]?.items || ["Strength Session"] },
      { label: "Day 4: Rest", items: ["Focus on protein anchors", "Hydration"] },
      { label: "Day 5: " + (origDays[2]?.label || "Strength"), items: origDays[2]?.items || ["Strength Session"] },
      { label: "Day 6: Weekend Flexibility", items: ["1 planned social meal", "Stay active"] },
      { label: "Day 7: Rest & Prep", items: ["Grocery shop / meal prep", "Review upcoming week"] }
    ];
  }
  
  // four_plus
  if (doses.four_plus) {
    const origDays = doses.four_plus.days;
    doses.four_plus.days = [
      { label: "Day 1: " + (origDays[0]?.label || "Strength"), items: origDays[0]?.items || ["Strength Session"] },
      { label: "Day 2: " + (origDays[1]?.label || "Strength"), items: origDays[1]?.items || ["Strength Session"] },
      { label: "Day 3: Active Recovery", items: ["Daily steps baseline", "Light movement (walk/bike)"] },
      { label: "Day 4: " + (origDays[2]?.label || "Strength"), items: origDays[2]?.items || ["Strength Session"] },
      { label: "Day 5: " + (origDays[3]?.label || "Low Intensity"), items: origDays[3]?.items || ["Low Intensity / Conditioning"] },
      { label: "Day 6: Weekend Flexibility", items: ["1 planned social meal", "Stay active"] },
      { label: "Day 7: Rest & Prep", items: ["Grocery shop / meal prep", "Review upcoming week"] }
    ];
  }
  
  // chaos
  if (doses.chaos) {
    const origDays = doses.chaos.days;
    doses.chaos.days = [
      { label: "Day 1: " + (origDays[0]?.label || "Minimum Session"), items: origDays[0]?.items || ["Minimum Session"] },
      { label: "Day 2: Steps & Protein", items: ["Hit protein targets", "Daily steps minimum"] },
      { label: "Day 3: Steps & Protein", items: ["Hit protein targets", "Daily steps minimum"] },
      { label: "Day 4: " + (origDays[1]?.label || "Minimum Session"), items: origDays[1]?.items || ["Minimum Session"] },
      { label: "Day 5: Steps & Protein", items: ["Hit protein targets", "Daily steps minimum"] },
      { label: "Day 6: Weekend Flexibility", items: ["1 planned social meal", "Stay active"] },
      { label: "Day 7: Rest & Prep", items: ["Grocery shop / meal prep", "Review upcoming week"] }
    ];
  }
});

const newContent = `export const assessmentData = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync('./data/assessmentData.ts', newContent);
console.log("Updated assessmentData.ts");
