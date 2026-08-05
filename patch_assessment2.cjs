const fs = require('fs');

let content = fs.readFileSync('pages/Assessment.tsx', 'utf8');

const unlockRegex = /await submitAssessment\(\{ name, email, answers \}\);/;
const newUnlock = `
      // Compose Result
      const composedResult = {
        archetype: calculateArchetype(answers),
        recommendation: calculateRecommendation(answers),
        doseKey: answers['q3_time'] || 'three_days',
        goalLabel: assessmentData.derived.goalLabels[answers['q2_goal'] as keyof typeof assessmentData.derived.goalLabels] || 'your goal'
      };
      const response = await submitAssessment({ name, email, answers, composedResult });
`;
content = content.replace(unlockRegex, newUnlock);

const redirectRegex = /navigate\('\/results', \{ state: \{ answers, email, name \} \}\);/;
const newRedirect = `if (response && response.token) {
        navigate(\`/assessment/result/\${response.token}\`, { state: { answers, email, name, composedResult } });
      } else {
        navigate('/results', { state: { answers, email, name, composedResult } });
      }`;
content = content.replace(redirectRegex, newRedirect);

// Wait, the new /results page logic expects `composedResult` in the state or the firestore. 
// We should update Results.tsx to use `composedResult`. Let's check how Results.tsx does it.
fs.writeFileSync('pages/Assessment.tsx', content);
