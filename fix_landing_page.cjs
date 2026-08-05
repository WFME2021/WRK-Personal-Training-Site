const fs = require('fs');
let content = fs.readFileSync('pages/Assessment.tsx', 'utf8');

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
              
              <div className="flex items-center gap-4 mb-10 sm:justify-center">
                <div className="w-12 h-12 rounded-full bg-secondary overflow-hidden shrink-0 border border-border">
                  <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=200&auto=format&fit=crop" alt="Hayden Richards" className="w-full h-full object-cover" />
                </div>
                <p className="text-sm sm:text-base text-text-secondary font-medium text-left">
                  Built by Hayden Richards. 20 years coaching busy people aged 35 to 60, in Christchurch and online.
                </p>
              </div>

              <Button onClick={() => setCurrentStep(0)} variant="primary" className="w-full sm:w-auto px-12 py-4 h-12 text-base font-bold">
                Start. Takes 2 minutes.
              </Button>
              <p className="text-xs text-text-secondary mt-3 text-center">
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
fs.writeFileSync('pages/Assessment.tsx', content);
