const fs = require('fs');

let content = fs.readFileSync('pages/Assessment.tsx', 'utf8');

// Replace Intro Step
const introRegex = /\/\/ INTRO STEP[\s\S]*?\/\/ QUESTION STEPS/;
const newIntro = `// INTRO STEP
  if (currentStep === -1) {
    return (
      <>
        <SeoHead 
          title="Free Training Plan Diagnostic | WRK Personal Training Christchurch"
          description="6 questions, 2 minutes. Get a training week built around your schedule, stress load and goals. Built by a coach with 20 years experience."
        />
        <div className="min-h-screen bg-primary pt-32 pb-24 px-5 sm:px-6 flex flex-col">
          <div className="max-w-[360px] sm:max-w-xl mx-auto w-full flex-grow flex flex-col justify-center">
            <div className="text-left sm:text-center mb-12">
              <span className="inline-block text-accent text-sm font-bold uppercase tracking-wider mb-6">
                Free. 6 questions. 2 minutes.
              </span>
              <h1 className="text-[32px] leading-tight sm:text-5xl md:text-6xl font-display uppercase mb-6 text-text-primary">
                Get a training week built around your schedule, your stress load and your body.
              </h1>
              <p className="text-base sm:text-xl text-text-secondary mb-6">
                Answer 6 questions. You'll get a specific plan you can start this week. Not generic tips. An actual week of training with the reasoning behind it.
              </p>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full bg-secondary overflow-hidden shrink-0 border border-border">
                  <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=200&auto=format&fit=crop" alt="Hayden Richards" className="w-full h-full object-cover" />
                </div>
                <p className="text-sm sm:text-base text-text-secondary font-medium">
                  Built by Hayden Richards. 20 years coaching busy people aged 35 to 60, in Christchurch and online.
                </p>
              </div>
              <Button onClick={() => setCurrentStep(0)} variant="primary" className="w-full sm:w-auto px-12 py-4 h-12 text-base font-bold">
                Start. Takes 2 minutes.
              </Button>
              <p className="text-xs text-text-secondary mt-3 text-center sm:text-center">
                No email needed to start.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  // QUESTION STEPS`;
content = content.replace(introRegex, newIntro);

// Modify handleNext to support conditional branching
const handleNextRegex = /const handleNext = \(([\s\S]*?)\};/;
const newHandleNext = `const handleNext = (questionId: string, optionId: string) => {
    const newAnswers = { ...answers, [questionId]: optionId };
    setAnswers(newAnswers);
    
    setTimeout(() => {
      if (questionId === 'q6_flags') {
        if (optionId === 'manageable' || optionId === 'limits') {
          // Go to q6_sub
          const q6SubIndex = questions.findIndex(q => q.id === 'q6_sub');
          if (q6SubIndex !== -1) {
             setCurrentStep(q6SubIndex);
             return;
          }
        } else {
          // Finish
          setCurrentStep(-2);
          return;
        }
      }
      
      if (questionId === 'q6_sub') {
        setCurrentStep(-2);
        return;
      }
      
      if (currentStep < questions.length - 1) {
        // Find next valid question. If we are just advancing normally, skip q6_sub if we are at q5.
        // Wait, q6_sub is in the questions array now.
        // So if currentStep is q5, next is q6_flags.
        const nextStep = currentStep + 1;
        if (questions[nextStep].id === 'q6_sub') {
          // This shouldn't happen naturally unless q6_sub is right after q5, but q6_flags is after q5.
          // The array is q1, q2, q3, q4, q5, q6_flags, q6_sub.
          // If we are at q5, next is q6_flags. 
        }
        setCurrentStep(currentStep + 1);
      } else {
        setCurrentStep(-2);
      }
    }, 400);
  };`;
content = content.replace(handleNextRegex, newHandleNext);

// Modify progress indicator
const progressRegex = /<span className="text-accent text-sm font-bold uppercase tracking-wider mb-4 block">[\s\S]*?<\/span>/;
const newProgress = `<span className="text-accent text-sm font-bold uppercase tracking-wider mb-4 block">
              Question {currentStep + 1 > 6 ? 6 : currentStep + 1} of 6
            </span>`;
content = content.replace(progressRegex, newProgress);


fs.writeFileSync('pages/Assessment.tsx', content);
