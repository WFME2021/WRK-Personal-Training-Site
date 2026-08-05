const fs = require('fs');

let code = fs.readFileSync('data/assessmentData.ts', 'utf8');
const dataStr = code.replace('export const assessmentData = ', 'module.exports = ');
fs.writeFileSync('temp.cjs', dataStr);
const data = require('./temp.cjs');

data.archetypes.forEach(arch => {
  arch.weeklyStructureCopyByDose.two_days = {
    title: "2-Day Full Body",
    bullets: [
      "2 full-body strength sessions (45-60 min)",
      "At least 2 days recovery between sessions",
      "Daily steps anchor carries the other days"
    ]
  };
  arch.weeklyStructureCopyByDose.four_plus = {
    title: "3 Strength + 1 Conditioning",
    bullets: [
      "3 full-body or upper/lower strength sessions",
      "1 low-impact conditioning / zone-2 session",
      "Daily steps anchor"
    ]
  };
  arch.weeklyStructureCopyByDose.chaos = {
    title: "Chaos Mode (Floating 2-Day)",
    bullets: [
      "2 anchor strength sessions that land wherever they can",
      "No fixed days—if you have 45 mins, you hit it",
      "Steps are the non-negotiable on non-training days"
    ]
  };

  arch.postGate.scheduleByDose.two_days = {
    title: "2-Day Full Body",
    lines: [
      "Day A: Full Body Strength (45-60 min)",
      "Day B: Full Body Strength (45-60 min)",
      "Space these with at least two rest days between."
    ]
  };
  arch.postGate.scheduleByDose.four_plus = {
    title: "3 Strength + 1 Conditioning",
    lines: [
      "3x Strength Sessions",
      "1x Zone-2 / Conditioning Session",
      "Never 4 heavy sessions in a row"
    ]
  };
  arch.postGate.scheduleByDose.chaos = {
    title: "Floating 2-Day",
    lines: [
      "2x Anchor Sessions per week",
      "No set days. Fit them where the schedule allows.",
      "Steps cover the rest."
    ]
  };

  arch.next7DaysByDose.two_days = {
    title: "2-Day Full Body",
    days: [
      { label: "Day 1: Full Body A", items: ["Strength session (45-60 min)"] },
      { label: "Day 2: Active Recovery", items: ["Daily steps baseline", "Light movement"] },
      { label: "Day 3: Active Recovery", items: ["Daily steps baseline", "Mobility if needed"] },
      { label: "Day 4: Full Body B", items: ["Strength session (45-60 min)"] },
      { label: "Day 5: Active Recovery", items: ["Daily steps baseline"] },
      { label: "Day 6: Active Recovery", items: ["Daily steps baseline", "Stay active"] },
      { label: "Day 7: Rest & Prep", items: ["Review upcoming week"] }
    ]
  };
  
  arch.next7DaysByDose.four_plus = {
    title: "3 + 1 Structure",
    days: [
      { label: "Day 1: Strength", items: ["Session A"] },
      { label: "Day 2: Active Recovery", items: ["Daily steps baseline"] },
      { label: "Day 3: Strength", items: ["Session B"] },
      { label: "Day 4: Conditioning", items: ["Zone-2 or low impact"] },
      { label: "Day 5: Strength", items: ["Session C"] },
      { label: "Day 6: Active Recovery", items: ["Daily steps baseline"] },
      { label: "Day 7: Rest & Prep", items: ["Review upcoming week"] }
    ]
  };

  arch.next7DaysByDose.chaos = {
    title: "Floating 2-Day Structure",
    days: [
      { label: "Floating Session 1", items: ["Full Body Anchor 1", "Deploy when you have a 45-minute window"] },
      { label: "Floating Session 2", items: ["Full Body Anchor 2", "Deploy when you have a 45-minute window"] },
      { label: "All Other Days", items: ["Hit your daily step minimum", "No guilt if you can't train"] }
    ]
  };
});

fs.writeFileSync('data/assessmentData.ts', 'export const assessmentData = ' + JSON.stringify(data, null, 2) + ';');
console.log('Modified assessmentData.ts');
