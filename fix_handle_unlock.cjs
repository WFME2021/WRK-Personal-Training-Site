const fs = require('fs');
let content = fs.readFileSync('pages/Assessment.tsx', 'utf8');

const regex = /const handleUnlock = async \(e: React\.FormEvent\) => \{[\s\S]*?if \(isCalculating\) \{/;
const newHandleUnlock = `const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name || isSubmitting) return;
    
    setIsSubmitting(true);

    const composedResult = {
      archetype: calculateArchetype(answers),
      recommendation: calculateRecommendation(answers),
      doseKey: answers['q3_time'] || 'three_days',
      goalLabel: assessmentData.derived.goalLabels[answers['q2_goal'] as keyof typeof assessmentData.derived.goalLabels] || 'your goal'
    };
    
    let resToken = null;

    try {
      const response = await submitAssessment({ name, email, answers, composedResult });
      if (response && response.token) {
        resToken = response.token;
      }
    } catch (error) {
      console.error('Failed to submit assessment:', error);
      localStorage.setItem('pendingAssessmentSync', JSON.stringify({ name, email, answers, timestamp: Date.now() }));
    } finally {
      setIsSubmitting(false);
      if (resToken) {
        navigate(\`/assessment/result/\${resToken}\`, { state: { answers, email, name, composedResult } });
      } else {
        navigate('/results', { state: { answers, email, name, composedResult } });
      }
    }
  };

  if (isCalculating) {`;

content = content.replace(regex, newHandleUnlock);
fs.writeFileSync('pages/Assessment.tsx', content);
