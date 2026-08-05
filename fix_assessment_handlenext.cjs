const fs = require('fs');
let content = fs.readFileSync('pages/Assessment.tsx', 'utf8');

const regex = /const handleNext = \([\s\S]*?const handleBack = \(\) => \{/;

const fixedHandleNext = `const handleNext = (questionId: string, optionId: string) => {
    const newAnswers = { ...answers, [questionId]: optionId };
    setAnswers(newAnswers);
    
    setTimeout(() => {
      if (questionId === 'q6_flags') {
        if (optionId === 'manageable' || optionId === 'limits') {
          setCurrentStep(questions.length - 1); // Jump to q6_sub, assuming it's the last question in the array
          return;
        }
      }
      
      // Calculate next step
      let nextStep = currentStep + 1;
      // Skip q6_sub if we are at q6_flags and answer is 'none'
      if (questionId === 'q6_flags' && optionId === 'none') {
        setIsCalculating(true);
        return;
      }

      if (nextStep >= questions.length - 1 && questionId === 'q6_sub') {
         setIsCalculating(true);
      } else if (nextStep < questions.length) {
        setCurrentStep(nextStep);
        window.scrollTo(0, 0);
      } else {
        setIsCalculating(true);
      }
    }, 400);
  };

  const handleBack = () => {`;

content = content.replace(regex, fixedHandleNext);
content = content.replace(`import { calculateArchetype, Answers } from '../services/assessmentLogic';`, `import { calculateArchetype, calculateRecommendation, Answers } from '../services/assessmentLogic';`);

fs.writeFileSync('pages/Assessment.tsx', content);
