import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { ArrowLeft, CheckCircle2, Loader2 } from 'lucide-react';
import { assessmentData } from '../data/assessmentData';
import { calculateArchetype, Answers } from '../services/assessmentLogic';

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

  const handleNext = (qId: string, optionId: string) => {
    const newAnswers = { ...answers, [qId]: optionId };
    setAnswers(newAnswers);

    if (currentStep === questions.length - 1) {
      setIsCalculating(true);
    } else {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
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

    try {
      await fetch('/api/assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, answers }),
      });
    } catch (error) {
      console.error('Failed to submit assessment:', error);
    } finally {
      setIsSubmitting(false);
      navigate('/results', { state: { answers, email, name } });
    }
  };

  if (isCalculating) {
    return (
      <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-6 text-center">
        <Loader2 className="w-12 h-12 text-accent animate-spin mb-8" />
        <h2 className="text-3xl font-display font-bold uppercase tracking-tighter mb-4">
          {assessmentData.uiCopy.interstitial.title}
        </h2>
        <p className="text-text-secondary text-lg animate-pulse">
          {assessmentData.uiCopy.interstitial.rotatingLines[calculatingLine]}
        </p>
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
            <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6">
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
            <h2 className="text-3xl font-display font-bold uppercase tracking-tighter text-text-primary mb-4">
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
          title="Capacity Blueprint Diagnostic | WRK Personal Training"
          description="Take our 2-minute diagnostic to get a personalised training plan built around your schedule, stress load, and goals."
        />
        <div className="min-h-screen bg-primary pt-32 pb-24 px-6 flex flex-col">
          <div className="max-w-2xl mx-auto w-full flex-grow flex flex-col justify-center">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-secondary text-text-secondary text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                (2 minutes)
              </span>
              <h1 className="text-5xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6">
                Capacity Blueprint Diagnostic
              </h1>
              <p className="text-xl text-text-secondary mb-8">
                Answer 6 questions and I’ll give you a personalised plan you can execute this week — built around your schedule, stress load, and goals.
              </p>
              <p className="text-sm text-text-secondary italic mb-12">
                No fluff. No guilt. Just the most beneficial approach for where you’re at.
              </p>
              <Button onClick={() => setCurrentStep(0)} variant="primary" className="px-12 py-4 text-lg">
                Start Diagnostic
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // QUESTION STEPS
  const question = questions[currentStep];
  const progress = ((currentStep) / questions.length) * 100;

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
              Question {currentStep + 1} of {questions.length}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter">
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
