
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { 
  GoalType, ConstraintType, FrequencyType, EnvironmentType, InjuryType, SupportType, OfferType, AssessmentData 
} from '../types';
import { ArrowLeft } from 'lucide-react';

export const Assessment: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  
  const [formData, setFormData] = useState<AssessmentData>({
    goal: null,
    constraint: null,
    frequency: null,
    environment: null,
    injury: null,
    support: null
  });

  // Questions Configuration
  const steps = [
    { 
      id: 'intro', 
      title: "ROI Training Diagnostic",
      subtitle: "(2 minutes)",
      description: "Answer 6 questions and I’ll give you a personalised plan you can execute this week — built around your schedule, stress load, and goals.",
      micro: "No fluff. No guilt. Just the most beneficial approach for where you’re at.",
      isIntro: true
    },
    { 
      id: 'goal', 
      title: "What are we optimising right now?", 
      options: Object.values(GoalType),
      key: 'goal',
      micro: "Pick the one that matters most over the next 8–12 weeks."
    },
    { 
      id: 'constraint', 
      title: "What’s the REAL constraint?", 
      options: Object.values(ConstraintType),
      key: 'constraint'
    },
    { 
      id: 'frequency', 
      title: "What’s realistic most weeks?", 
      options: Object.values(FrequencyType),
      key: 'frequency',
      micro: "“Realistic” beats “perfect” every time."
    },
    { 
      id: 'environment', 
      title: "Where are you training?", 
      options: Object.values(EnvironmentType),
      key: 'environment'
    },
    { 
      id: 'injury', 
      title: "Any pain or injuries affecting training right now?", 
      options: Object.values(InjuryType),
      key: 'injury',
      micro: "Not diagnosing — just helping me recommend safer options and smarter progressions."
    },
    { 
      id: 'support', 
      title: "What support model fits you best?", 
      options: Object.values(SupportType),
      key: 'support'
    }
  ];

  const handleNext = (key?: keyof AssessmentData, value?: any) => {
    // Update state if a selection was made
    if (key && value) {
      setFormData(prev => ({ ...prev, [key]: value }));
    }

    // Logic to calculate offer and navigate on final step
    if (currentStep === steps.length - 1) {
      const finalData = { ...formData, [key!]: value };
      const offer = calculateOffer(finalData);
      
      // Navigate immediately to results with the calculated state
      navigate('/results', { state: { assessment: { ...finalData, recommendedOffer: offer } } });
    } else {
      // Normal step progression
      setCurrentStep(curr => curr + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(curr => curr - 1);
    }
  };

  // --- ROUTING LOGIC ENGINE ---
  const calculateOffer = (data: AssessmentData): OfferType => {
    // 1. HARD TRIGGER: Pain/Injury
    if (data.injury && data.injury !== InjuryType.NONE) {
      return OfferType.HYBRID;
    }

    // 2. Map by Support Model
    if (data.support === SupportType.COACHED) {
      return OfferType.HYBRID;
    }
    
    if (data.support === SupportType.ACCOUNTABLE) {
      return OfferType.ONLINE;
    }

    // 3. Tie-Breakers (Optional bias logic)
    
    // If travel or variable schedule -> Bias Online Coaching
    if (data.constraint === ConstraintType.TRAVEL || data.frequency === FrequencyType.VARIES) {
      // Even if they said "Give me a plan", online is better for travel
      return OfferType.ONLINE;
    }

    // If "Too many options" + training 3-4x -> Bias Online Coaching
    if (data.constraint === ConstraintType.OVERWHELM && (data.frequency === FrequencyType.THREE || data.frequency === FrequencyType.FOUR)) {
      return OfferType.ONLINE;
    }

    // Default Fallback: "Give me a plan" -> Reset
    return OfferType.RESET;
  };

  const currentStepData = steps[currentStep];

  // Render Intro Screen
  if (currentStepData.isIntro) {
    return (
      <div className="min-h-[85vh] flex flex-col items-center justify-center py-12 px-6 bg-primary transition-colors duration-300">
        <div className="max-w-xl w-full text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-accent mb-4 block">
             Diagnostic Tool
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-2 text-text-primary">
            {currentStepData.title}
          </h1>
          <p className="text-xl font-bold text-text-primary mb-6">{currentStepData.subtitle}</p>
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            {currentStepData.description}
          </p>
          <div className="bg-secondary p-4 rounded-xl border border-border mb-10 inline-block shadow-sm">
             <p className="text-sm font-medium text-text-secondary italic">
               "{currentStepData.micro}"
             </p>
          </div>
          <Button size="lg" onClick={() => handleNext()} className="w-full md:w-auto px-12 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-transform">
            Start Assessment
          </Button>
        </div>
      </div>
    );
  }

  // Render Question Screens
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center py-12 px-6 bg-secondary transition-colors duration-300">
      <div className="w-full max-w-xl">
        {/* Progress */}
        <div className="mb-8 flex items-center justify-between">
          <button 
            onClick={handleBack} 
            className="text-sm font-bold text-text-secondary hover:text-text-primary flex items-center transition-colors"
          >
            <ArrowLeft size={14} className="mr-1" /> Back
          </button>
          <span className="text-xs font-bold tracking-widest uppercase text-text-secondary/50">
            Question {currentStep} of {steps.length - 1}
          </span>
        </div>

        {/* Question Header */}
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-text-primary leading-tight">
          {currentStepData.title}
        </h2>

        {/* Options Grid */}
        <div className="grid gap-3 mb-8">
          {currentStepData.options?.map((option) => (
            <button
              key={option}
              onClick={() => handleNext(currentStepData.key as keyof AssessmentData, option)}
              className="group p-5 text-left border-2 border-border rounded-xl transition-all duration-200 hover:border-accent hover:bg-primary active:scale-[0.99] flex items-center justify-between"
            >
              <span className="font-bold text-lg text-text-primary group-hover:text-accent transition-colors">
                {option}
              </span>
              <div className="w-5 h-5 rounded-full border-2 border-border group-hover:border-accent group-hover:bg-accent/20"></div>
            </button>
          ))}
        </div>

        {/* Microcopy */}
        {currentStepData.micro && (
           <p className="text-sm text-text-secondary italic border-l-2 border-accent pl-4">
             {currentStepData.micro}
           </p>
        )}
      </div>
    </div>
  );
};
