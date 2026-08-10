import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Button } from '../components/Button';
import { ShieldAlert, AlertTriangle, CheckCircle2, Activity } from 'lucide-react';

type Step = 'questions' | 'analyzing' | 'lead_capture' | 'results';

const QUESTIONS = [
  {
    id: 'medication',
    title: '1. What GLP-1 or GIP medication are you currently prescribed?',
    options: [
      { label: 'Semaglutide (Ozempic, Wegovy)', value: 'semaglutide' },
      { label: 'Tirzepatide (Mounjaro, Zepbound)', value: 'tirzepatide' },
      { label: 'Liraglutide (Saxenda)', value: 'liraglutide' },
      { label: 'Other / Just exploring options', value: 'other' }
    ]
  },
  {
    id: 'phase',
    title: '2. What phase of the medication schedule are you in?',
    options: [
      { label: 'Just starting (0-4 weeks)', value: 'starting' },
      { label: 'Titration phase / Adjusting dosage (1-3 months)', value: 'titration' },
      { label: 'Maintenance phase (3+ months)', value: 'maintenance' }
    ]
  },
  {
    id: 'aversion',
    title: '3. How would you describe your current food aversion levels?',
    options: [
      { label: 'Manageable. I can comfortably eat solid meals and hit protein targets.', value: 'low-risk' },
      { label: 'Moderate aversion. I often skip meals or rely heavily on liquid nutrition.', value: 'med-risk' },
      { label: 'Severe aversion. Eating solid food feels almost impossible.', value: 'high-risk' }
    ]
  },
  {
    id: 'sideEffects',
    title: '4. Are you experiencing any of these active physiological side-effects?',
    options: [
      { label: 'None, or just very mild, occasional nausea.', value: 'low-risk' },
      { label: 'Ongoing fatigue, suppressed thirst, or moderate nausea.', value: 'med-risk' },
      { label: 'Frequent vomiting, or orthostatic standing dizziness.', value: 'high-risk' }
    ]
  },
  {
    id: 'exercise',
    title: '5. How would you categorize your current exercise baseline?',
    options: [
      { label: 'Active: 2-3+ structured strength training sessions per week.', value: 'low-risk' },
      { label: 'Beginner: Walking, light cardio, or very infrequent movement.', value: 'med-risk' },
      { label: 'Inactive: Minimal movement due to severe fatigue or schedule.', value: 'high-risk' }
    ]
  }
];

export const Assessment: React.FC = () => {
  const [step, setStep] = useState<Step>('questions');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  
  const [leadData, setLeadData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const [riskTag, setRiskTag] = useState<'GREEN' | 'YELLOW' | 'RED'>('GREEN');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step, currentQIndex]);

  const handleOptionSelect = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    
    // Automatically proceed to next question or analyze
    setTimeout(() => {
      if (currentQIndex < QUESTIONS.length - 1) {
        setCurrentQIndex(currentQIndex + 1);
      } else {
        processAnalysis(newAnswers);
      }
    }, 400);
  };

  const processAnalysis = (finalAnswers: Record<string, string>) => {
    setStep('analyzing');
    
    // Calculate Risk
    let calculatedRisk: 'GREEN' | 'YELLOW' | 'RED' = 'GREEN';
    const values = [finalAnswers.aversion, finalAnswers.sideEffects, finalAnswers.exercise];
    
    if (values.includes('high-risk')) {
      calculatedRisk = 'RED';
    } else if (values.includes('med-risk')) {
      calculatedRisk = 'YELLOW';
    }
    
    setRiskTag(calculatedRisk);

    setTimeout(() => {
      setStep('lead_capture');
    }, 2500);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadData.name || !leadData.email) {
      setError('Please provide both name and email.');
      return;
    }
    
    setIsSubmitting(true);
    setError('');

    try {
      // Simulate network delay then proceed to results
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStep('results');
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  const renderQuestions = () => {
    const q = QUESTIONS[currentQIndex];
    const progress = ((currentQIndex) / QUESTIONS.length) * 100;

    return (
      <div className="w-full max-w-[800px] mx-auto p-8 md:p-12 bg-neutral-950 rounded-2xl border border-neutral-800 shadow-2xl relative overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-neutral-900">
          <div 
            className="h-full bg-teal-500 transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }} 
          />
        </div>
        
        <div className="mb-8">
          <span className="font-sans font-bold text-[12px] uppercase tracking-widest text-teal-400 mb-2 block">
            Question {currentQIndex + 1} of {QUESTIONS.length}
          </span>
          <h2 className="font-serif text-[28px] md:text-[36px] text-neutral-100 leading-[1.2]">
            {q.title}
          </h2>
        </div>

        <div className="space-y-4">
          {q.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionSelect(q.id, option.value)}
              className={`w-full text-left p-6 rounded-xl border transition-all duration-300 font-sans text-[16px] md:text-[18px] group flex items-center justify-between
                ${answers[q.id] === option.value 
                  ? 'bg-teal-500/10 border-teal-500 text-teal-400' 
                  : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-teal-500/50 hover:bg-neutral-900/80'
                }
              `}
            >
              <span className="pr-4 leading-relaxed">{option.label}</span>
              <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors
                ${answers[q.id] === option.value ? 'border-teal-500 bg-teal-500' : 'border-neutral-700 group-hover:border-teal-500/50'}
              `}>
                {answers[q.id] === option.value && <div className="w-2 h-2 bg-neutral-950 rounded-full" />}
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderAnalyzing = () => (
    <div className="w-full max-w-[800px] mx-auto p-12 bg-neutral-950 rounded-2xl border border-neutral-800 shadow-2xl text-center space-y-8 py-24">
      <div className="relative w-24 h-24 mx-auto">
        <div className="absolute inset-0 border-4 border-neutral-800 rounded-full" />
        <div className="absolute inset-0 border-4 border-teal-500 rounded-full border-t-transparent animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center text-teal-400">
          <Activity size={32} />
        </div>
      </div>
      <div className="space-y-3">
        <h2 className="font-serif text-[28px] text-neutral-100">Analyzing Clinical Variables</h2>
        <p className="font-sans text-[16px] text-neutral-400">Cross-referencing your inputs against metabolic baseline data...</p>
      </div>
    </div>
  );

  const renderLeadCapture = () => (
    <div className="w-full max-w-[600px] mx-auto p-8 md:p-12 bg-neutral-950 rounded-2xl border border-neutral-800 shadow-2xl text-center space-y-8">
      <div className="space-y-4">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/10 text-teal-400 mb-2">
          <CheckCircle2 size={32} />
        </span>
        <h2 className="font-serif text-[32px] md:text-[40px] text-neutral-100 leading-[1.1]">
          Analysis Complete
        </h2>
        <p className="font-sans text-[16px] text-neutral-400 leading-relaxed max-w-[450px] mx-auto">
          Enter your email below to instantly reveal your metabolic risk score and personalized clinical blueprint.
        </p>
      </div>
      
      <form onSubmit={handleLeadSubmit} className="space-y-4 text-left">
        <input 
          type="text" 
          name="name" 
          value={leadData.name}
          onChange={(e) => setLeadData({...leadData, name: e.target.value})}
          placeholder="First Name" 
          required 
          className="w-full p-4 bg-neutral-900 rounded-xl border border-neutral-800 text-neutral-100 font-sans text-[16px] placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all" 
        />
        <input 
          type="email" 
          name="email" 
          value={leadData.email}
          onChange={(e) => setLeadData({...leadData, email: e.target.value})}
          placeholder="Email Address" 
          required 
          className="w-full p-4 bg-neutral-900 rounded-xl border border-neutral-800 text-neutral-100 font-sans text-[16px] placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all" 
        />
        {error && <p className="text-red-400 text-sm font-sans">{error}</p>}
        <Button type="submit" size="lg" className="w-full mt-4" disabled={isSubmitting}>
          {isSubmitting ? 'Finalizing Profile...' : 'Reveal My Results'}
        </Button>
        <p className="font-sans text-[12px] text-neutral-600 pt-4 text-center">
          By submitting, you agree to receive follow-up communication regarding your results. We respect your privacy.
        </p>
      </form>
    </div>
  );

  const renderResults = () => {
    return (
      <div className="w-full max-w-[800px] mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        <div className="text-center space-y-4 mb-12">
          <h1 className="font-serif text-[40px] md:text-[56px] leading-[1.1] text-neutral-100">
            Diagnostic Profile
          </h1>
          <p className="font-sans text-[18px] text-neutral-400">
            Prepared for {leadData.name || 'you'}. Based on your GLP-1 tracking metrics.
          </p>
        </div>

        {/* Dynamic Risk Card */}
        {riskTag === 'RED' && (
          <div className="bg-red-950/30 border border-red-500/50 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <ShieldAlert size={120} className="text-red-500" />
            </div>
            <div className="relative z-10 space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-red-500/20 text-red-400 font-sans font-bold text-[14px] uppercase tracking-wider">
                Risk Tag: RED (Critical Vulnerability)
              </span>
              <h2 className="font-serif text-[28px] md:text-[36px] text-neutral-100 leading-tight">
                Immediate Clinical Overlap Detected
              </h2>
              <div className="font-sans text-[16px] text-neutral-300 leading-relaxed space-y-4 max-w-[600px]">
                <p>
                  Your inputs flag severe symptoms, potentially including orthostatic standing dizziness, frequent vomiting, or total food aversion. 
                </p>
                <p className="text-red-300 font-semibold">
                  ⚠️ We strongly advise you to brief your prescribing GP immediately. Do not push through extreme nausea or dizzy spells.
                </p>
                <p>
                  In the meantime, you must introduce micro-volume spacing for hydration and nutrition to avoid rapid lean mass wasting. Attempting standard large meals or heavy workouts right now is counterproductive.
                </p>
              </div>
            </div>
          </div>
        )}

        {riskTag === 'YELLOW' && (
          <div className="bg-amber-950/30 border border-amber-500/50 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <AlertTriangle size={120} className="text-amber-500" />
            </div>
            <div className="relative z-10 space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-400 font-sans font-bold text-[14px] uppercase tracking-wider">
                Risk Tag: YELLOW (Elevated Risk)
              </span>
              <h2 className="font-serif text-[28px] md:text-[36px] text-neutral-100 leading-tight">
                Metabolic Friction & Thirst Suppression
              </h2>
              <div className="font-sans text-[16px] text-neutral-300 leading-relaxed space-y-4 max-w-[600px]">
                <p>
                  Your indicators suggest a medium risk for muscle loss and creeping dehydration. As GLP-1 medications alter gastric emptying, suppressed thirst loops are extremely common in this phase.
                </p>
                <p>
                  You must begin to hydrate by design, not by thirst. Relying on physical thirst cues will leave you under-hydrated, risking severe fatigue and headaches. Furthermore, your current solid food aversion indicates you need alternative protein delivery systems.
                </p>
              </div>
            </div>
          </div>
        )}

        {riskTag === 'GREEN' && (
          <div className="bg-teal-950/30 border border-teal-500/50 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <CheckCircle2 size={120} className="text-teal-500" />
            </div>
            <div className="relative z-10 space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-teal-500/20 text-teal-400 font-sans font-bold text-[14px] uppercase tracking-wider">
                Risk Tag: GREEN (Stable Baseline)
              </span>
              <h2 className="font-serif text-[28px] md:text-[36px] text-neutral-100 leading-tight">
                Optimal Adaptation Detected
              </h2>
              <div className="font-sans text-[16px] text-neutral-300 leading-relaxed space-y-4 max-w-[600px]">
                <p>
                  Your indicators show a stable metabolic baseline. You are successfully managing your nutritional and hydration thresholds, and avoiding severe physiological side-effects.
                </p>
                <p>
                  This is the ideal state to focus purely on structured progressive overload to secure your lean muscle mass permanently as your weight drops.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Universal CTA Based on Tag */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 shadow-xl text-center space-y-6">
          <h3 className="font-serif text-[24px] text-neutral-100">Next Recommended Action</h3>
          
          {riskTag === 'RED' && (
            <>
              <p className="font-sans text-[15px] text-neutral-400 max-w-[500px] mx-auto">
                Discover how to deploy micro-volume hydration strategies and protect your baseline without overwhelming your stomach.
              </p>
              <Link to="/services" className="inline-block">
                <Button size="lg" className="w-full sm:w-auto">
                  View Micro-Volume Blueprint
                </Button>
              </Link>
            </>
          )}

          {riskTag === 'YELLOW' && (
            <>
              <p className="font-sans text-[15px] text-neutral-400 max-w-[500px] mx-auto">
                Secure the Side-Effect Blueprint to learn exact liquid nutrition matrixes that help you hit protein targets comfortably.
              </p>
              <Link to="/services" className="inline-block">
                <Button size="lg" className="w-full sm:w-auto">
                  Get the $29 Side-Effect Blueprint
                </Button>
              </Link>
            </>
          )}

          {riskTag === 'GREEN' && (
            <>
              <p className="font-sans text-[15px] text-neutral-400 max-w-[500px] mx-auto">
                Since your side-effects are managed, explore our free educational tools and long-term 12-week coaching tracks.
              </p>
              <Link to="/programs" className="inline-block">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Coaching Programs
                </Button>
              </Link>
            </>
          )}
        </div>

      </div>
    );
  };

  return (
    <>
      <SeoHead 
        title="GLP-1 Diagnostic Screener | WRK Personal Training"
        description="Take our non-diagnostic screening tool to review potential muscle loss and hydration risks during rapid medical weight loss."
      />
      
      <div className="flex flex-col w-full min-h-screen bg-neutral-900 text-neutral-100 pt-32 pb-24 px-5 md:px-12 items-center justify-center relative">
        <div className="w-full max-w-[1000px] mx-auto">
          {step === 'questions' && renderQuestions()}
          {step === 'analyzing' && renderAnalyzing()}
          {step === 'lead_capture' && renderLeadCapture()}
          {step === 'results' && renderResults()}
        </div>
      </div>
    </>
  );
};
