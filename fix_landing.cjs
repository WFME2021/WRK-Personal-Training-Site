const fs = require('fs');

let content = fs.readFileSync('pages/Assessment.tsx', 'utf8');

const regex = /\/\/ INTRO STEP[\s\S]*?\/\/ QUESTION STEPS/;

const newIntro = `// INTRO STEP
  if (currentStep === -1) {
    return (
      <>
        <SeoHead 
          title="Free Training Plan Diagnostic | WRK Personal Training"
          description="Find out what's really holding your progress back. Take the 6-question diagnostic."
        />
        <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-xl mx-auto w-full">
            <h1 className="text-[32px] leading-tight sm:text-5xl md:text-6xl font-display uppercase mb-6 text-text-primary">
              Find out what's really holding your progress back.
            </h1>
            <p className="text-base sm:text-xl text-text-secondary mb-10">
              Take the 6-question diagnostic. Takes 2 minutes. Get a custom training blueprint based on your exact constraint.
            </p>
            <Button onClick={() => setCurrentStep(0)} variant="primary" className="w-full sm:w-auto px-12 py-4 h-12 text-base font-bold">
              Start the Assessment
            </Button>
            <p className="text-sm text-text-secondary mt-4">
              Join 400+ professionals who've found their blueprint.
            </p>
          </div>
        </div>
      </>
    );
  }

  // QUESTION STEPS`;

content = content.replace(regex, newIntro);
fs.writeFileSync('pages/Assessment.tsx', content);
