import fs from 'fs';
import assessmentData from './temp_data.ts';

const archetypes = assessmentData.archetypes;

archetypes.forEach((arch: any) => {
  let weeks = [
    { week: "Week 1", title: "Set the base", description: "Focus on consistency and technique." },
    { week: "Week 2", title: "Add reps", description: "Add 1–2 reps per set on main lifts." },
    { week: "Week 3", title: "Add load OR sets", description: "Choose one; do not do both." },
    { week: "Week 4", title: "Consolidate / deload-lite", description: "Reduce sets 20–30%, keep quality." }
  ];
  
  let guardrails = [
    "RIR: stop sets with 1–2 reps in reserve",
    "Sleep rule: poor sleep 2 nights → reduce volume, keep technique",
    "Niggle rule: regress/swap movement, keep training"
  ];

  if (arch.id === 'stress_stacked') {
    weeks[2].description = "Only if recovery/sleep is good; otherwise repeat Week 2.";
  } else if (arch.id === 'pain_limited') {
    weeks[1].description = "Slower progression; progress only in pain-free ranges.";
    weeks[2].description = "Choose one; do not do both. Stay pain-free.";
  } else if (arch.id === 'motivation_drifting') {
    weeks[0].description = "Focus on consistency and technique. Keep same templates for 4 weeks.";
    weeks[1].description = "Add 1–2 reps per set on main lifts. Keep same templates.";
    weeks[2].description = "Choose one; do not do both. Keep same templates.";
  } else if (arch.id === 'reset_mode') {
    weeks[0].description = "Prioritise rhythm. Focus on consistency and technique.";
    weeks[1].description = "Prioritise rhythm. Add 1–2 reps per set on main lifts.";
  }

  arch.postGate.progressionModel4Weeks = {
    title: "Your 4-Week Progression Model",
    weeks: weeks,
    guardrailsTitle: "Progression Guardrails",
    guardrails: guardrails
  };
});

const newCode = `export const assessmentData = ${JSON.stringify(assessmentData, null, 2)};\n`;
fs.writeFileSync('./data/assessmentData.ts', newCode);
console.log("Updated assessmentData.ts");
