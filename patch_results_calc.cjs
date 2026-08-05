const fs = require('fs');
let content = fs.readFileSync('pages/Results.tsx', 'utf8');

// Current calculation
const calcRegex = /const archetype = calculateArchetype\(answers\);\n\s*const recommendation = calculateRecommendation\(answers\);/;

const newCalc = `const archetype = composedResult?.archetype || calculateArchetype(answers);
  const recommendation = composedResult?.recommendation || calculateRecommendation(answers);
  const doseKey = composedResult?.doseKey || answers['q3_time'] || 'three_days';
  const goalLabel = composedResult?.goalLabel || assessmentData.derived.goalLabels[answers['q2_goal'] as keyof typeof assessmentData.derived.goalLabels] || 'your goal';`;

content = content.replace(calcRegex, newCalc);
content = content.replace(/const doseKey = answers\['q3_time'\] \|\| 'three_days';/, '');
content = content.replace(/const goalLabel = assessmentData.derived.goalLabels\[answers\['q2_goal'\] as keyof typeof assessmentData.derived.goalLabels\] \|\| 'your goal';/, '');

fs.writeFileSync('pages/Results.tsx', content);
