import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { ArrowLeft, CheckCircle2, Loader2 } from 'lucide-react';
import { assessmentData } from '../data/assessmentData';
import { calculateArchetype, calculateRecommendation, Answers } from '../services/assessmentLogic';
import { submitAssessment } from '../services/apiService';

export const Assessment: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(-1); // -1 is intro
  const [answers, setAnswers] = useState<Answers>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [showPreGate, setShowPreGate] = useState(false);
  const [calculatingLine, setCalculatingLine] = useState(0);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const questions = assessmentData.questions;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCalculating) {
      interval = setInterval(() => {
        setCalculatingLine(prev => (prev + 1) % assessmentData.uiCopy.interstitial.rotatingLines.length);
      }, assessmentData.uiCopy.interstitial.durationMs / assessmentData.uiCopy.interstitial.rotatingLines.length);
      
      setTimeout(() => {
        setIsCalculating(false);
        setShowPreGate(true);
      }, assessmentData.uiCopy.interstitial.durationMs);
    }
    return () => clearInterval(interval);
  }, [isCalculating]);

  const handleNext = (questionId: string, optionId: string) => {
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

  const handleBack = () => {
    if (currentStep === -1) {
      navigate(-1);
    } else {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleUnlock = async (e: React.FormEvent) => {
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
        navigate(`/assessment/result/${resToken}`, { state: { answers, email, name, composedResult } });
      } else {
        navigate('/results', { state: { answers, email, name, composedResult }, replace: true });
      }
    }
  };

  if (isCalculating) {
    return (
      <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-6 text-center">
        <Loader2 className="w-12 h-12 text-accent animate-spin mb-8" />
        <h2 className="text-3xl font-display uppercase mb-4">
          {assessmentData.uiCopy.interstitial.title}
        </h2>
        
      </div>
    );
  }

  if (showPreGate) {
    const archetype = calculateArchetype(answers);
    const doseKey = answers['q3_time'] || 'three_days';
    const goalLabel = assessmentData.derived.goalLabels[answers['q2_goal'] as keyof typeof assessmentData.derived.goalLabels] || 'your goal';
    const doseLabel = assessmentData.derived.dose[doseKey as keyof typeof assessmentData.derived.dose]?.label || '3-Day';
    
    const focusText = archetype?.focusTemplate.replace('{goalLabel}', goalLabel);
    const weeklyStructure = archetype ? archetype.weeklyStructureCopyByDose[doseKey as keyof typeof archetype.weeklyStructureCopyByDose] : undefined;

    return (
      <div className="min-h-screen bg-primary pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              {assessmentData.uiCopy.preGate.headline}
            </span>
            <h1 className="text-4xl md:text-5xl font-display uppercase mb-6">
              {archetype?.primaryBottleneck}
            </h1>
            <p className="text-xl text-text-secondary">
              {archetype?.microRevealLine}
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-2xl mb-12 border border-border">
            <h2 className="text-2xl font-bold mb-4">{archetype?.strategyName}</h2>
            <p className="text-text-secondary mb-6">{archetype?.strategyBlurb}</p>
            <p className="font-medium text-text-primary mb-8">{focusText}</p>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-3">{archetype?.stressValveTitle}</h3>
                <p className="text-text-secondary">{archetype?.stressValveCopy}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3">{archetype?.weeklyStructureTitle}</h3>
                <p className="font-medium mb-2">{weeklyStructure?.title}</p>
                <ul className="space-y-2">
                  {weeklyStructure?.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-secondary p-8 rounded-2xl shadow-xl border border-border text-center">
            <div className="mb-8 space-y-3">
              <div className="flex items-center gap-3 justify-center p-3 rounded-lg border border-border bg-primary/50 text-text-secondary opacity-75">
                <span className="text-xl">🔒</span>
                <span className="font-bold">Progression Guardrails</span>
              </div>
              <div className="flex items-center gap-3 justify-center p-3 rounded-lg border border-border bg-primary/50 text-text-secondary opacity-75">
                <span className="text-xl">🔒</span>
                <span className="font-bold">Nutrition Anchor</span>
              </div>
              <div className="flex items-center gap-3 justify-center p-3 rounded-lg border border-border bg-primary/50 text-text-secondary opacity-75">
                <span className="text-xl">🔒</span>
                <span className="font-bold">Your Next 7 Days</span>
              </div>
            </div>
            
            <h2 className="text-3xl font-display uppercase text-text-primary mb-4">
              {assessmentData.uiCopy.preGate.unlockTitleTemplate.replace('{blueprintName}', archetype?.postGate.blueprintName || 'Blueprint')}
            </h2>
            <p className="text-text-secondary mb-8">
              {assessmentData.uiCopy.preGate.unlockSubtitle}
            </p>
            <form onSubmit={handleUnlock} className="max-w-md mx-auto space-y-4 text-left">
              <div>
                <label className="block text-sm font-bold text-text-primary mb-2 uppercase tracking-wider">
                  {assessmentData.uiCopy.preGate.nameFieldLabel}
                </label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-text-primary"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-text-primary mb-2 uppercase tracking-wider">
                  {assessmentData.uiCopy.preGate.emailFieldLabel}
                </label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-text-primary"
                  placeholder="you@example.com"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full py-4 text-lg mt-4" disabled={isSubmitting}>
                {isSubmitting ? 'Unlocking...' : assessmentData.uiCopy.preGate.buttonLabel}
              </Button>
              <p className="text-sm text-center text-text-primary mt-3 font-medium">
                {assessmentData.uiCopy.preGate.deliveryLine}
              </p>
              <p className="text-xs text-center text-text-secondary mt-4">
                {assessmentData.uiCopy.preGate.reassuranceLine}
              </p>
              
            </form>
          </div>
        </div>
      </div>
    );
  }

  // INTRO STEP
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

  // QUESTION STEPS
  const question = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <>
      <SeoHead title={`Question ${currentStep + 1} | Capacity Blueprint`} />
      <div className="min-h-screen bg-primary pt-24 pb-24 px-6 flex flex-col">
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-secondary z-50">
          <div 
            className="h-full bg-accent transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="max-w-2xl mx-auto w-full">
          <button 
            onClick={handleBack}
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-wider">Back</span>
          </button>

          <div className="mb-12">
            <span className="text-accent text-sm font-bold uppercase tracking-wider mb-4 block">
              Question {currentStep + 1 > 6 ? 6 : currentStep + 1} of 6
            </span>
            <h2 className="text-3xl md:text-4xl font-display uppercase">
              {question.prompt}
            </h2>
          </div>

          <div className="space-y-4">
            {question.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleNext(question.id, option.id)}
                className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group
                  ${answers[question.id] === option.id 
                    ? 'border-accent bg-accent/5' 
                    : 'border-border bg-secondary hover:border-accent/50 hover:bg-secondary/80'
                  }
                `}
              >
                <span className="text-lg font-medium text-text-primary group-hover:text-accent transition-colors">
                  {option.label}
                </span>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                  ${answers[question.id] === option.id ? 'border-accent bg-accent' : 'border-text-secondary/30 group-hover:border-accent/50'}
                `}>
                  {answers[question.id] === option.id && <div className="w-2 h-2 bg-primary rounded-full" />}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
