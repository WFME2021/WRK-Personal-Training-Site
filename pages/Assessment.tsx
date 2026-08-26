import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
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

  const handleSingleOption = (questionId: string, optionId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
    
    // Automatically advance to next step after a short delay
    setTimeout(() => {
      handleNext();
    }, 250);
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
      setIsSubmitting(false);
      setResult(calculatedResult);
      setStep(ASSESSMENT_QUESTIONS.length + 2); // Always go to results
    }
  };

  // Render Intro
  if (step === 0) {
    return (
      <div className="bg-[#F6F5F2] min-h-screen py-16 px-6">
        <SeoHead 
          title="GLP-1 Fitness Assessment | WRK Personal Training"
          description="Take our free GLP-1 Fitness Assessment to evaluate your current routine, identify muscle loss risks, and receive a customized 12-week training recommendation."
        />
        <div className="max-w-2xl mx-auto space-y-10 animate-in fade-in duration-700 pt-10">
          <div className="space-y-6 text-center">
            <h1 className="font-serif text-[40px] leading-[1.1] text-[#2C3539] tracking-tight">
              GLP-1 FITNESS ASSESSMENT
            </h1>
            <h3 className="text-[22px] font-medium text-[#2C3539]/90">
              Are you getting the most from your GLP-1 journey?
            </h3>
            <p className="text-[16px] text-[#2C3539]/80 leading-relaxed max-w-xl mx-auto">
              Answer a few simple questions about your training, nutrition, movement, hydration and recovery.
              We'll identify your biggest opportunities and give you practical priorities to focus on.
            </p>
            <h3 className="text-[18px] font-medium text-[#2C3539] pt-4">
              Takes about 60 seconds.
            </h3>
          </div>
          
          <div className="pt-4 flex justify-center">
            <button
              onClick={() => setStep(1)}
              className="bg-[#2C3539] hover:bg-[#1A1F22] text-white px-8 py-4 rounded-full font-medium transition-colors text-[16px] flex items-center group"
            >
              START MY ASSESSMENT
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="text-[12px] text-[#2C3539]/60 text-center max-w-xl mx-auto leading-relaxed pt-12">
            This assessment provides general fitness and nutrition education. It is not medical advice, diagnosis or treatment and does not replace advice from your prescribing clinician or other qualified healthcare professional.
          </p>
        </div>
      </div>
    );
  }

    // Render Email Gate
  if (step === ASSESSMENT_QUESTIONS.length + 1) {
    const teaseResult = calculateAssessmentResult(answers);
    return (
      <div className="bg-[#F6F5F2] min-h-screen py-16 px-6">
        <div className="max-w-xl mx-auto space-y-8 animate-in fade-in duration-500 pt-10">
          <div className="text-center space-y-6">
            <h4 className="text-[14px] font-bold tracking-widest text-[#2C3539]/60 uppercase">
              Assessment Complete
            </h4>
            <h1 className="font-serif text-[40px] leading-[1.1] text-[#2C3539] tracking-tight">
              YOUR SCORE: {teaseResult.overallScore} <span className="text-[24px] text-[#2C3539]/50">/ 100</span>
            </h1>
            <p className="text-[18px] text-[#2C3539]/80 leading-relaxed max-w-md mx-auto">
              Based on your answers, your biggest opportunities for improvement are <span className="font-bold capitalize">{teaseResult.primaryFocus}</span> and <span className="font-bold capitalize">{teaseResult.secondaryFocus}</span>.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="font-serif text-[24px] text-[#2C3539] mb-3">
                Unlock Your Custom Action Plan
              </h3>
              <p className="text-[15px] text-[#2C3539]/70">
                Where should we send your detailed pillar breakdown and personalised 7-day strategy?
              </p>
            </div>
            
            <form onSubmit={submitAssessment} className="space-y-6">
              <div className="space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="First Name"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#8A9A86]/50 focus:border-[#8A9A86] transition-all text-[16px]"
                />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#8A9A86]/50 focus:border-[#8A9A86] transition-all text-[16px]"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#8A9A86] hover:bg-[#768672] disabled:bg-[#8A9A86]/70 text-white px-8 py-4 rounded-xl font-medium transition-colors flex items-center justify-center text-[16px]"
              >
                {isSubmitting ? 'PROCESSING...' : 'VIEW FULL RESULTS'}
                {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
              </button>
              <p className="text-[13px] text-[#2C3539]/60 text-center leading-relaxed">
                No spam. Just practical information to help you get more from your GLP-1 journey. You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
  // Render Results
  if (step === ASSESSMENT_QUESTIONS.length + 2 && result) {
    return (
      <div className="bg-[#F6F5F2] min-h-screen py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-16 animate-in slide-in-from-bottom-8 duration-700 pt-4">
          
          <div className="text-center space-y-6">
            <h4 className="text-[14px] font-bold tracking-widest text-[#2C3539]/60 uppercase">
              Your Result
            </h4>
            <h1 className="font-serif text-[44px] leading-[1.1] text-[#2C3539]">
              YOUR GLP-1 FITNESS SCORE
            </h1>
            <div className="inline-block px-8 py-4 bg-white border border-neutral-200 rounded-3xl">
              <div className="text-[48px] font-medium text-[#2C3539] leading-none">
                {result.overallScore} <span className="text-[24px] text-[#2C3539]/50">/ 100</span>
              </div>
              <div className="text-[14px] font-bold tracking-wider text-[#8A9A86] uppercase pt-2">
                {result.overallLabel}
              </div>
            </div>
            <p className="text-[18px] text-[#2C3539]/80 leading-relaxed max-w-2xl mx-auto pt-4">
              {result.overallScore >= 80 
                ? "You've built a solid foundation. The focus now is consistency, progression and making your approach sustainable."
                : result.overallScore >= 60
                ? "You're already doing many of the important things well. Your biggest opportunity now is tightening up a few areas so your training and nutrition better support your goals."
                : result.overallScore >= 40
                ? "You're doing some things well, but there are a few areas worth prioritising to get more from your journey."
                : "You have several areas where some simple changes could make a meaningful difference."}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-[28px] text-[#2C3539] border-b border-neutral-200 pb-4">
              YOUR PROFILE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(result.domainScores || []).map(ds => (
                <div key={ds.domain} className="bg-white p-6 rounded-2xl border border-neutral-200 flex flex-col">
                  <div className="text-[14px] font-bold tracking-wider text-[#2C3539]/60 uppercase mb-2">
                    {ds.domain}
                  </div>
                  <div className="text-[28px] font-medium text-[#2C3539] mb-1">
                    {ds.score} <span className="text-[16px] text-[#2C3539]/50">/ 100</span>
                  </div>
                  <div className={`text-[14px] font-medium ${ds.score < 60 ? 'text-amber-600' : 'text-[#8A9A86]'}`}>
                    {ds.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-serif text-[28px] text-[#2C3539] border-b border-neutral-200 pb-4">
              YOUR BIGGEST OPPORTUNITIES
            </h2>
            <div className="space-y-6">
              {(result.recommendations || []).map((rec, index) => (
                <div key={rec.domain} className="bg-white p-8 rounded-2xl border border-neutral-200 space-y-4">
                  <div className="text-[13px] font-bold tracking-widest text-[#2C3539]/50 uppercase mb-2">
                    0{index + 1} — {rec.domain}
                  </div>
                  <h3 className="font-serif text-[22px] text-[#2C3539] uppercase">
                    {rec.headline}
                  </h3>
                  <p className="text-[16px] text-[#2C3539]/80 leading-relaxed">
                    {rec.explanation}
                  </p>
                  <div className="pt-4 border-t border-neutral-100">
                    <h4 className="text-[14px] font-bold text-[#2C3539] mb-2">YOUR NEXT STEP</h4>
                    <p className="text-[16px] text-[#8A9A86] font-medium">
                      {rec.firstStep}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-[28px] text-[#2C3539] border-b border-neutral-200 pb-4">
              YOUR NEXT 7 DAYS
            </h2>
            <div className="bg-[#2C3539] text-white p-8 rounded-2xl space-y-6">
              {(result.sevenDayPlan || []).map(item => (
                <div key={item.domain} className="flex flex-col sm:flex-row sm:items-baseline border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <div className="text-[14px] font-bold tracking-widest text-white/50 uppercase sm:w-32 mb-1 sm:mb-0">
                    {item.label}
                  </div>
                  <div className="text-[16px] font-medium">
                    {item.action}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-neutral-200 text-center space-y-6">
            <h2 className="font-serif text-[28px] text-[#2C3539]">
              WANT HELP PUTTING THIS INTO PRACTICE?
            </h2>
            <p className="text-[16px] text-[#2C3539]/80 leading-relaxed max-w-lg mx-auto">
              Your assessment gives you the starting point. Coaching helps you turn it into a plan that fits your life.
            </p>
            <div className="pt-4">
              <Link 
                to="/services"
                className="inline-flex items-center justify-center bg-[#8A9A86] hover:bg-[#768672] text-white px-8 py-4 rounded-xl font-medium transition-colors text-[16px]"
              >
                EXPLORE COACHING SERVICES
              </Link>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // Render Question
  const qIndex = step - 1;
  const question = ASSESSMENT_QUESTIONS[qIndex];
  
  if (!question) return null;

  const currentAnswer = answers[question.id];
  const canProceed = question.type === 'single' ? !!currentAnswer : (currentAnswer as string[])?.length > 0;

  return (
    <div className="bg-[#F6F5F2] min-h-screen flex flex-col">
        <SeoHead 
          title="GLP-1 Fitness Assessment | WRK Personal Training"
          description="Review your GLP-1 Fitness Assessment results. Access your personalized 12-week strength training recommendation to protect muscle during medical weight loss."
        />
      {/* Progress */}
      <div className="w-full h-1 bg-neutral-200 fixed top-0 left-0 z-50">
        <div 
          className="h-full bg-[#8A9A86] transition-all duration-300 ease-out"
          style={{ width: `${(step / ASSESSMENT_QUESTIONS.length) * 100}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col justify-center py-12 px-6">
        <div className="max-w-2xl mx-auto w-full space-y-8 animate-in fade-in duration-300 slide-in-from-right-4">
          <div className="text-[13px] font-bold tracking-widest text-[#2C3539]/50 uppercase mb-4">
            Question {step} of {ASSESSMENT_QUESTIONS.length}
          </div>
          
          <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] leading-tight">
            {question.question}
          </h2>

          <div className="space-y-3 pt-6">
            {question.options.map(opt => {
              const isSelected = question.type === 'single' 
                ? currentAnswer === opt.id
                : ((currentAnswer as string[]) || []).includes(opt.id);

              return (
                <button
                  key={opt.id}
                  onClick={() => question.type === 'single' 
                    ? handleSingleOption(question.id, opt.id)
                    : handleMultipleOption(question.id, opt.id)
                  }
                  className={`w-full flex items-center text-left px-6 py-5 rounded-2xl border-2 transition-all ${
                    isSelected 
                      ? 'border-[#2C3539] bg-[#2C3539]/5 text-[#2C3539]' 
                      : 'border-neutral-200 bg-white text-[#2C3539]/80 hover:border-neutral-300 hover:bg-neutral-50'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-4 flex-shrink-0 ${
                    isSelected ? 'border-[#2C3539] bg-[#2C3539]' : 'border-neutral-300'
                  }`}>
                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <span className="text-[16px] font-medium">{opt.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-neutral-200/50">
            <button
              onClick={handleBack}
              className="flex items-center text-[15px] font-medium text-[#2C3539]/60 hover:text-[#2C3539] transition-colors p-2 -ml-2"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              BACK
            </button>
            
            {question.type === 'multiple' && (
              <button
                onClick={handleNext}
                disabled={!canProceed}
                className="flex items-center bg-[#2C3539] hover:bg-[#1A1F22] disabled:bg-neutral-300 disabled:text-neutral-500 text-white px-6 py-3 rounded-full font-medium transition-colors text-[14px]"
              >
                NEXT
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
