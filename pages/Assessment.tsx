import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronRight, Sparkles, Loader2, Dumbbell, ShieldCheck, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { ASSESSMENT_QUESTIONS } from '../assessment/questions';
import { calculateAssessmentResult } from '../assessment/scoring';
import { AssessmentResult } from '../assessment/types';

export const Assessment: React.FC = () => {
  const [step, setStep] = useState(0); // 0 = intro, 1..N = questions, N+1 = email gate, N+2 = results
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const handleSingleOption = (questionId: string, optionId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
    
    // Smooth auto-advance
    setTimeout(() => {
      handleNext();
    }, 280);
  };

  const handleMultipleOption = (questionId: string, optionId: string) => {
    setAnswers(prev => {
      const current = (prev[questionId] as string[]) || [];
      if (current.includes(optionId)) {
        return { ...prev, [questionId]: current.filter(id => id !== optionId) };
      } else {
        return { ...prev, [questionId]: [...current, optionId] };
      }
    });
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => Math.max(0, prev - 1));
  };

  const submitAssessment = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);

    const calculatedResult = calculateAssessmentResult(answers);

    try {
      const response = await fetch('/api/assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          answers,
          result: calculatedResult
        }),
      });

      if (!response.ok) {
        console.warn('Backend API indicated an error, but proceeding to show results anyway.');
      }
    } catch (err) {
      console.error('Failed to submit assessment to backend, proceeding anyway:', err);
    } finally {
      // Artificial grace delay for editorial loading transition
      setTimeout(() => {
        setIsSubmitting(false);
        setResult(calculatedResult);
        setStep(ASSESSMENT_QUESTIONS.length + 2);
      }, 700);
    }
  };

  // 1. INTRO SCREEN (Step 0)
  if (step === 0) {
    return (
      <div className="bg-canvas min-h-[90vh] py-14 px-4 sm:px-6 flex flex-col justify-center items-center font-sans selection:bg-spruce-800 selection:text-sand-50">
        <SeoHead 
          title="GLP-1 Fitness Assessment | WRK Personal Training"
          description="Take our free GLP-1 Fitness Assessment to evaluate your current routine, identify muscle loss risks, and receive a customized 12-week training recommendation."
        />
        <div className="w-full max-w-2xl bg-white rounded-3xl p-8 sm:p-12 border border-charcoal/5 shadow-sm relative text-center">
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-spruce-800 block mb-4">
            OBJECTIVE EVALUATION · 2-MINUTE DIAGNOSTIC
          </span>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight max-w-xl mx-auto mb-4 font-bold leading-tight">
            The GLP-1 Fitness Assessment.
          </h1>
          
          <p className="text-charcoal/80 text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-8">
            Are you getting the most from your medication? Evaluate your training frequency, protein baseline, and recovery capacity to identify your highest-leverage opportunities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-charcoal/60 mb-8 font-medium">
            <span className="flex items-center gap-1.5">⏱ Takes ~2 minutes</span>
            <span>•</span>
            <span className="flex items-center gap-1.5">🎯 100% Free & Personalized</span>
            <span>•</span>
            <span className="flex items-center gap-1.5">🔒 No spam guarantee</span>
          </div>

          <button
            onClick={() => setStep(1)}
            className="bg-spruce-800 text-sand-50 hover:bg-spruce-900 w-full sm:w-auto px-8 py-4 rounded-md text-xs uppercase tracking-widest font-semibold transition-all shadow-sm inline-flex items-center justify-center group"
          >
            Start Assessment
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-[11px] text-charcoal/50 text-center max-w-md mx-auto leading-relaxed mt-8 pt-6 border-t border-charcoal/5">
            This assessment provides evidence-informed fitness education. It is not medical advice, diagnosis, or prescription and works alongside guidance from your prescribing clinician.
          </p>
        </div>
      </div>
    );
  }

  // 2. ANALYZING / LOADING SCREEN
  if (isSubmitting) {
    return (
      <div className="bg-canvas min-h-[90vh] py-14 px-4 sm:px-6 flex flex-col justify-center items-center font-sans selection:bg-spruce-800 selection:text-sand-50">
        <div className="w-full max-w-md bg-white rounded-3xl p-10 sm:p-12 border border-charcoal/5 shadow-sm text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-sand-100 flex items-center justify-center text-spruce-800 mb-6 animate-pulse">
            <Activity className="w-7 h-7" />
          </div>
          <h2 className="font-serif text-2xl text-charcoal mb-2 font-bold tracking-tight">
            Calibrating your baseline...
          </h2>
          <p className="text-xs text-charcoal/70 leading-relaxed">
            Evaluating training consistency, low-appetite fueling, and protein preservation markers.
          </p>
        </div>
      </div>
    );
  }

  // 3. EMAIL GATE SCREEN (Step = Questions.length + 1)
  if (step === ASSESSMENT_QUESTIONS.length + 1) {
    const teaseResult = calculateAssessmentResult(answers);
    return (
      <div className="bg-canvas min-h-[90vh] py-14 px-4 sm:px-6 flex flex-col justify-center items-center font-sans selection:bg-spruce-800 selection:text-sand-50">
        <div className="w-full max-w-xl bg-white rounded-3xl p-8 sm:p-12 border border-charcoal/5 shadow-sm relative">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-spruce-800 block mb-3">
              ASSESSMENT COMPLETE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mb-2 font-bold tracking-tight">
              Score: {teaseResult.overallScore} <span className="text-xl text-charcoal/50 font-normal">/ 100</span>
            </h2>
            <p className="text-sm text-charcoal/70 max-w-md mx-auto leading-relaxed">
              Based on your answers, your two highest-priority leverage areas are <span className="font-semibold text-spruce-900 capitalize">{teaseResult.primaryFocus}</span> and <span className="font-semibold text-spruce-900 capitalize">{teaseResult.secondaryFocus}</span>.
            </p>
          </div>

          <div className="bg-sand-50/70 p-6 rounded-2xl border border-charcoal/5 mb-6 text-center">
            <h3 className="font-serif text-lg font-bold text-charcoal mb-1">
              Unlock Your Custom Action Plan
            </h3>
            <p className="text-xs text-charcoal/70">
              Where should we send your pillar breakdown and personalized 7-day strategy?
            </p>
          </div>

          <form onSubmit={submitAssessment} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal/70 mb-1.5">
                First Name
              </label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Sarah"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-charcoal/15 bg-white focus:outline-none focus:ring-1 focus:ring-spruce-800 text-sm text-charcoal"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal/70 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-charcoal/15 bg-white focus:outline-none focus:ring-1 focus:ring-spruce-800 text-sm text-charcoal"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-spruce-800 hover:bg-spruce-900 disabled:opacity-50 text-sand-50 py-4 rounded-md text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center shadow-sm mt-4"
            >
              View Full Action Plan
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <p className="text-[11px] text-charcoal/50 text-center leading-relaxed pt-2">
              🔒 No spam. Just practical guidance for your physical journey. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    );
  }

  // 4. RESULTS / DIAGNOSIS REPORT SCREEN (Step = Questions.length + 2)
  if (step === ASSESSMENT_QUESTIONS.length + 2 && result) {
    const isStrong = result.overallScore >= 75;
    const isModerate = result.overallScore >= 50 && result.overallScore < 75;

    return (
      <div className="bg-canvas min-h-screen py-14 px-4 sm:px-6 font-sans selection:bg-spruce-800 selection:text-sand-50">
        <SeoHead 
          title="Your GLP-1 Fitness Action Plan | WRK Personal Training"
          description="Your personalized GLP-1 Fitness Assessment results: review your score, pillar breakdowns, and next-step coaching pathway."
        />

        <div className="max-w-3xl mx-auto space-y-12">
          
          {/* Editorial Report Header */}
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-spruce-800 block mb-3">
              YOUR GLP-1 ASSESSMENT SUMMARY
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4 font-bold tracking-tight">
              Your Personalized Action Plan.
            </h1>
            <p className="text-charcoal/80 text-base max-w-xl mx-auto leading-relaxed">
              Based on your responses, here is an objective appraisal of your current routine and actionable steps to safeguard your strength.
            </p>
          </div>

          {/* Score & Readiness Band Card */}
          <div className="bg-sand-100/80 rounded-2xl p-8 border border-charcoal/5 shadow-sm text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal/60 block mb-2">
              Overall Fitness & Habit Score
            </span>
            <div className="font-serif text-5xl font-bold text-spruce-900 mb-2">
              {result.overallScore} <span className="text-2xl text-charcoal/50 font-normal">/ 100</span>
            </div>
            <div className="inline-block bg-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-spruce-800 mb-4 border border-charcoal/5">
              Status: {result.overallLabel}
            </div>
            <p className="text-charcoal/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              {result.overallScore >= 80 
                ? "You've built a solid foundation. The focus now is progressive resistance, recovery pacing, and making your approach sustainable long after medication."
                : result.overallScore >= 60
                ? "You're already doing several key things well. Your biggest leverage points are optimizing protein distribution and stabilizing training frequency through energy dips."
                : "You have several high-value areas where targeted adjustments in protein intake and joint-friendly resistance training will protect your metabolic health."}
            </p>
          </div>

          {/* 3 Diagnostic Breakdown Cards */}
          <div>
            <div className="flex items-center justify-between border-b border-charcoal/10 pb-3 mb-6">
              <h2 className="font-serif text-2xl text-charcoal font-bold tracking-tight">
                Pillar Breakdown
              </h2>
              <span className="text-xs text-charcoal/50 font-medium">Domain Scores</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {(result.domainScores || []).map(ds => (
                <div key={ds.domain} className="bg-white p-5 rounded-2xl border border-charcoal/5 shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold tracking-wider text-charcoal/50 uppercase block mb-1">
                      {ds.domain}
                    </span>
                    <div className="font-serif text-2xl font-bold text-charcoal mb-1">
                      {ds.score} <span className="text-xs text-charcoal/40 font-normal">/ 100</span>
                    </div>
                  </div>
                  <div className={`text-xs font-semibold uppercase tracking-wider mt-3 pt-3 border-t border-charcoal/5 ${
                    ds.score < 60 ? 'text-terracotta' : 'text-spruce-800'
                  }`}>
                    {ds.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highest Leverage Opportunities */}
          <div>
            <div className="border-b border-charcoal/10 pb-3 mb-6">
              <h2 className="font-serif text-2xl text-charcoal font-bold tracking-tight">
                Your Biggest Opportunities
              </h2>
            </div>

            <div className="space-y-4">
              {(result.recommendations || []).map((rec, index) => (
                <div key={rec.domain} className="bg-white p-6 sm:p-8 rounded-2xl border border-charcoal/5 shadow-xs">
                  <div className="text-[11px] font-bold tracking-widest text-spruce-800 uppercase mb-1">
                    0{index + 1} · {rec.domain} FOCUS
                  </div>
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                    {rec.headline}
                  </h3>
                  <p className="text-sm text-charcoal/80 leading-relaxed mb-4">
                    {rec.explanation}
                  </p>
                  <div className="bg-sand-50 p-4 rounded-xl border border-charcoal/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal/50 block">Immediate Action</span>
                      <p className="text-xs font-semibold text-spruce-900">{rec.firstStep}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7-Day Action Plan */}
          <div>
            <div className="border-b border-charcoal/10 pb-3 mb-6">
              <h2 className="font-serif text-2xl text-charcoal font-bold tracking-tight">
                Your Next 7 Days
              </h2>
            </div>

            <div className="bg-charcoal text-sand-50 p-8 rounded-2xl space-y-4">
              {(result.sevenDayPlan || []).map((item) => (
                <div key={item.domain} className="flex flex-col sm:flex-row sm:items-baseline border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <div className="text-xs font-bold tracking-widest text-sand-200 uppercase sm:w-36 shrink-0 mb-1 sm:mb-0">
                    {item.label}
                  </div>
                  <div className="text-sm text-sand-100 leading-relaxed">
                    {item.action}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Recommendation Offer Box */}
          <div className="bg-spruce-800 text-sand-50 rounded-2xl p-8 sm:p-10 shadow-lg text-center">
            <span className="text-xs uppercase tracking-widest text-sand-200 mb-2 block font-semibold">
              RECOMMENDED NEXT STEP
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-sand-50 mb-3 font-bold tracking-tight">
              {isStrong ? "12-Week Lean Mass & Progression Program" : "12-Week GLP-1 Recomposition & Muscle Defense"}
            </h2>
            <p className="text-sand-100/80 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
              Your assessment confirms that structured resistance training and digestible protein pacing will deliver the greatest return on your effort. Work with Hayden directly or train semi-privately in Christchurch.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                to="/contact"
                className="bg-sand-100 text-spruce-900 hover:bg-white px-8 py-3.5 rounded-md text-xs uppercase tracking-widest font-semibold transition-colors shadow-sm block text-center"
              >
                Book Consultation (Christchurch)
              </Link>
              <Link
                to="/toolkit"
                className="border border-sand-200/30 text-sand-50 hover:bg-spruce-900 px-8 py-3.5 rounded-md text-xs uppercase tracking-widest font-semibold transition-colors block text-center"
              >
                Explore the $29 App Toolkit
              </Link>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // 5. ACTIVE QUESTION SCREEN (Step 1..Questions.length)
  const qIndex = step - 1;
  const question = ASSESSMENT_QUESTIONS[qIndex];
  
  if (!question) return null;

  const currentAnswer = answers[question.id];
  const canProceed = question.type === 'single' ? !!currentAnswer : (currentAnswer as string[])?.length > 0;
  const percentComplete = Math.round((step / ASSESSMENT_QUESTIONS.length) * 100);

  return (
    <div className="bg-canvas min-h-[90vh] py-14 px-4 sm:px-6 flex flex-col justify-center items-center font-sans selection:bg-spruce-800 selection:text-sand-50">
      <SeoHead 
        title={`GLP-1 Fitness Assessment · Step ${step} | WRK`}
        description="Take the free WRK GLP-1 Fitness Assessment to evaluate your resistance training, protein intake, and recovery habits."
      />

      {/* Main Card Container */}
      <div className="w-full max-w-2xl bg-white rounded-3xl p-8 sm:p-12 border border-charcoal/5 shadow-sm relative">
        
        {/* Top Header Bar & Progress Track */}
        <div>
          <div className="flex items-center justify-between text-xs">
            <span className="uppercase tracking-[0.2em] font-sans font-semibold text-spruce-800">
              Question {step} of {ASSESSMENT_QUESTIONS.length}
            </span>
            <span className="text-charcoal/50 font-medium">
              ~2 min assessment
            </span>
          </div>

          <div className="w-full bg-sand-100 h-1.5 rounded-full overflow-hidden my-6">
            <div 
              className="bg-spruce-800 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${percentComplete}%` }}
            />
          </div>
        </div>

        {/* Question Header & Context */}
        <div className="mb-6">
          <span className="text-xs uppercase tracking-wider text-spruce-800 font-semibold mb-2 block">
            {question.domain ? `${question.domain} Assessment` : 'Diagnostic Question'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal tracking-tight mb-2 font-bold leading-snug">
            {question.question}
          </h2>
          {question.description && (
            <p className="text-sm text-charcoal/70 leading-relaxed mb-4">
              {question.description}
            </p>
          )}
          {question.type === 'multiple' && (
            <span className="inline-block text-[11px] font-semibold text-spruce-800 uppercase tracking-wider bg-sand-100 px-2 py-0.5 rounded">
              Select all that apply
            </span>
          )}
        </div>

        {/* Interactive Option Pills */}
        <div className="space-y-3">
          {question.options.map(opt => {
            const isSelected = question.type === 'single' 
              ? currentAnswer === opt.id
              : ((currentAnswer as string[]) || []).includes(opt.id);

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => question.type === 'single' 
                  ? handleSingleOption(question.id, opt.id)
                  : handleMultipleOption(question.id, opt.id)
                }
                className={`group w-full text-left p-5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  isSelected 
                    ? 'bg-sand-100 border-spruce-800 text-spruce-900 shadow-xs ring-1 ring-spruce-800' 
                    : 'bg-sand-50/50 border-charcoal/10 hover:border-spruce-800/40 hover:bg-sand-100/60 text-charcoal'
                }`}
              >
                <span className="text-sm sm:text-base font-medium font-sans flex-1 pr-4">
                  {opt.label}
                </span>

                <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                  isSelected 
                    ? 'border-spruce-800 bg-white' 
                    : 'border-charcoal/30 group-hover:border-spruce-800'
                }`}>
                  {isSelected && (
                    <div className="w-2.5 h-2.5 rounded-full bg-spruce-800" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center justify-between pt-8 mt-8 border-t border-charcoal/10">
          <button
            type="button"
            onClick={handleBack}
            className="text-xs uppercase tracking-wider text-charcoal/60 hover:text-charcoal font-semibold flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          
          {question.type === 'multiple' && (
            <button
              type="button"
              onClick={handleNext}
              disabled={!canProceed}
              className="bg-spruce-800 text-sand-50 hover:bg-spruce-900 px-8 py-3.5 rounded-md text-xs uppercase tracking-widest font-semibold transition-all shadow-xs disabled:opacity-40 disabled:cursor-not-allowed flex items-center"
            >
              Continue
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
