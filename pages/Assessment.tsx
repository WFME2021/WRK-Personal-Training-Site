import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { ShieldCheck, AlertTriangle, AlertOctagon, CheckCircle2 } from 'lucide-react';

type Step = 1 | 2 | 3 | 4 | 5;

type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH';

export const Assessment: React.FC = () => {
  const [step, setStep] = useState<Step>(1);
  const [name, setName] = useState('');
  const [medication, setMedication] = useState('');
  
  const [phase, setPhase] = useState('');
  const [exercise, setExercise] = useState('');
  
  const [symptoms, setSymptoms] = useState<string[]>([]);
  
  const [email, setEmail] = useState('');
  
  const [risk, setRisk] = useState<RiskLevel>('LOW');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const handleSymptomToggle = (val: string) => {
    if (symptoms.includes(val)) {
      setSymptoms(symptoms.filter(s => s !== val));
    } else {
      setSymptoms([...symptoms, val]);
    }
  };

  const calculateRisk = () => {
    if (symptoms.includes('dizziness') || symptoms.length >= 3) {
      setRisk('HIGH');
    } else if (symptoms.length > 0) {
      setRisk('MEDIUM');
    } else {
      setRisk('LOW');
    }
  };

  const submitAssessment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    calculateRisk();
    setStep(5);
  };

  return (
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-32">
      <SeoHead
        title="Free Weight Loss Safety Assessment | WRK Personal Training"
        description="Take our evidence-based weight loss safety assessment. Screen for GLP-1 side effects, monitor muscle-retention thresholds, and secure your risk profile report."
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Page Header */}
        <header className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            Weight Loss Safety <span className="wrk-highlight">Assessment</span>
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/70">
            A fast, conversational 2-minute screening tool to help you identify suppressed thirst loops, assess muscle-wasting risks, and lock in your safety thresholds.
          </p>
        </header>

        {/* Form Wrapper Container */}
        <div className="max-w-2xl mx-auto bg-white border border-neutral-200 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          
          {/* Progress Indicator */}
          {step < 5 && (
            <div className="flex justify-center space-x-2 mb-10">
              {[1, 2, 3, 4].map(s => (
                <div 
                  key={s} 
                  className={`h-2 rounded-full transition-all duration-500 ${step >= s ? 'bg-[#8A9A86] w-8' : 'bg-neutral-100 w-4'}`}
                />
              ))}
            </div>
          )}

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <h2 className="font-serif text-[28px] text-[#2C3539] text-center">Let's start with the basics</h2>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-[14px] font-medium text-[#2C3539]/70 mb-2">Your First Name</label>
                  <input 
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 py-4 rounded-xl focus:outline-none focus:border-[#8A9A86] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-[#2C3539]/70 mb-2">Current Prescribed Medication Track</label>
                  <div className="relative">
                    <select 
                      value={medication}
                      onChange={e => setMedication(e.target.value)}
                      className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 py-4 rounded-xl appearance-none focus:outline-none focus:border-[#8A9A86] transition-colors cursor-pointer"
                    >
                      <option value="" disabled>Select your medication...</option>
                      <option value="Semaglutide">Semaglutide (Ozempic, Wegovy)</option>
                      <option value="Tirzepatide">Tirzepatide (Mounjaro, Zepbound)</option>
                      <option value="Liraglutide">Liraglutide (Saxenda)</option>
                      <option value="Exploring Options">Exploring Options / Not currently prescribed</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-neutral-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setStep(2)}
                disabled={!name || !medication}
                className="w-full bg-[#8A9A86] disabled:bg-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed hover:bg-[#768672] text-white px-6 py-4 rounded-xl font-medium transition-colors text-[15px] mt-8"
              >
                Continue Assessment
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <h2 className="font-serif text-[28px] text-[#2C3539] text-center">Timeline & Context</h2>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-[14px] font-medium text-[#2C3539]/70 mb-2">Dosing Schedule Phase</label>
                  <div className="grid grid-cols-1 gap-3">
                    {['Onboarding (Just started)', 'Escalation (Increasing dose)', 'Maintenance (Stable dose)'].map(opt => (
                      <button
                        key={opt}
                        onClick={() => setPhase(opt)}
                        className={`text-left px-5 py-4 rounded-xl border transition-colors ${phase === opt ? 'border-[#8A9A86] bg-[#8A9A86]/5 text-[#2C3539]' : 'border-neutral-200 bg-[#FAFAF9] text-[#2C3539]/70 hover:border-neutral-300'}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="pt-4">
                  <label className="block text-[14px] font-medium text-[#2C3539]/70 mb-2">Current Exercise Baseline</label>
                  <div className="grid grid-cols-1 gap-3">
                    {['Beginner (Minimal movement/walking)', 'Already Active (Consistent workouts)'].map(opt => (
                      <button
                        key={opt}
                        onClick={() => setExercise(opt)}
                        className={`text-left px-5 py-4 rounded-xl border transition-colors ${exercise === opt ? 'border-[#8A9A86] bg-[#8A9A86]/5 text-[#2C3539]' : 'border-neutral-200 bg-[#FAFAF9] text-[#2C3539]/70 hover:border-neutral-300'}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <button 
                  onClick={() => setStep(1)}
                  className="w-1/3 bg-[#FAFAF9] hover:bg-[#F0F0EE] border border-neutral-200 text-[#2C3539] px-6 py-4 rounded-xl font-medium transition-colors text-[15px]"
                >
                  Back
                </button>
                <button 
                  onClick={() => setStep(3)}
                  disabled={!phase || !exercise}
                  className="w-2/3 bg-[#8A9A86] disabled:bg-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed hover:bg-[#768672] text-white px-6 py-4 rounded-xl font-medium transition-colors text-[15px]"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <h2 className="font-serif text-[28px] text-[#2C3539] text-center">Symptom Screen</h2>
              <p className="text-center text-[15px] text-[#2C3539]/70">Please select any active physiological side-effects you are currently experiencing (Select all that apply).</p>
              
              <div className="space-y-3">
                {[
                  { id: 'nausea', label: 'Persistent Nausea / Food Aversion' },
                  { id: 'fatigue', label: 'Severe Fatigue' },
                  { id: 'thirst', label: 'Headaches / Suppressed Thirst' },
                  { id: 'dizziness', label: 'Standing Dizziness / Lightheadedness' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => handleSymptomToggle(opt.id)}
                    className={`w-full flex items-center text-left px-5 py-4 rounded-xl border transition-colors ${symptoms.includes(opt.id) ? 'border-[#8A9A86] bg-[#8A9A86]/5 text-[#2C3539]' : 'border-neutral-200 bg-[#FAFAF9] text-[#2C3539]/70 hover:border-neutral-300'}`}
                  >
                    <div className={`w-5 h-5 rounded flex items-center justify-center mr-4 border ${symptoms.includes(opt.id) ? 'bg-[#8A9A86] border-[#8A9A86] text-white' : 'border-neutral-300 bg-white'}`}>
                      {symptoms.includes(opt.id) && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg>}
                    </div>
                    {opt.label}
                  </button>
                ))}
              </div>

              <div className="flex space-x-4 mt-8">
                <button 
                  onClick={() => setStep(2)}
                  className="w-1/3 bg-[#FAFAF9] hover:bg-[#F0F0EE] border border-neutral-200 text-[#2C3539] px-6 py-4 rounded-xl font-medium transition-colors text-[15px]"
                >
                  Back
                </button>
                <button 
                  onClick={() => setStep(4)}
                  className="w-2/3 bg-[#8A9A86] hover:bg-[#768672] text-white px-6 py-4 rounded-xl font-medium transition-colors text-[15px]"
                >
                  Analyze Results
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="space-y-8 animate-in fade-in duration-500 text-center">
              <div className="w-16 h-16 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 size={32} />
              </div>
              <h2 className="font-serif text-[28px] text-[#2C3539]">Analysis Complete</h2>
              <p className="text-[15px] text-[#2C3539]/80 leading-relaxed bg-[#FAFAF9] p-4 rounded-xl border border-neutral-200 font-medium">
                🔒 SECURE YOUR SAFETY SCORECARD: Enter your primary email address below to calculate your risk profile score. We will instantly email your position-specific report alongside your daily target parameters via MailerLite.
              </p>
              
              <form onSubmit={submitAssessment} className="space-y-5 text-left mt-8">
                <div>
                  <label className="block text-[14px] font-medium text-[#2C3539]/70 mb-2">Email Address</label>
                  <input 
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 py-4 rounded-xl focus:outline-none focus:border-[#8A9A86] transition-colors"
                  />
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <button 
                    type="button"
                    onClick={() => setStep(3)}
                    className="w-1/3 bg-[#FAFAF9] hover:bg-[#F0F0EE] border border-neutral-200 text-[#2C3539] px-6 py-4 rounded-xl font-medium transition-colors text-[15px]"
                  >
                    Back
                  </button>
                  <button 
                    type="submit"
                    disabled={!email}
                    className="w-2/3 bg-[#2C3539] disabled:bg-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed hover:bg-[#1A1F22] text-white px-6 py-4 rounded-xl font-medium transition-colors text-[15px]"
                  >
                    Reveal My Results
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 5 (RESULTS) */}
          {step === 5 && (
            <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-700">
              
              {risk === 'LOW' && (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mx-auto">
                    <ShieldCheck size={40} />
                  </div>
                  <h2 className="font-serif text-[32px] text-[#2C3539] leading-tight">Status: Stable Baseline</h2>
                  <p className="text-[16px] leading-relaxed text-[#2C3539]/80">
                    Your metrics suggest your lifestyle thresholds are aligning well. Protect your metabolism by tracking your daily protein targets using our free tools.
                  </p>
                  <div className="pt-6">
                    <Link 
                      to="/tools/protein-targeter"
                      className="inline-flex items-center justify-center w-full bg-[#8A9A86] hover:bg-[#768672] text-white px-6 py-4 rounded-xl font-medium transition-colors text-[15px]"
                    >
                      Calculate Protein Target
                    </Link>
                  </div>
                </div>
              )}

              {risk === 'MEDIUM' && (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-amber-500/10 text-amber-600 rounded-full flex items-center justify-center mx-auto">
                    <AlertTriangle size={40} />
                  </div>
                  <h2 className="font-serif text-[32px] text-[#2C3539] leading-tight">Status: Mitigation Indicated</h2>
                  <p className="text-[16px] leading-relaxed text-[#2C3539]/80">
                    Your answers suggest moderate side effects or suppressed thirst loops common with advanced interventions. Prioritize structured tracking using our Hydration Calculator.
                  </p>
                  <div className="pt-6">
                    <Link 
                      to="/tools/hydration-calculator"
                      className="inline-flex items-center justify-center w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-4 rounded-xl font-medium transition-colors text-[15px]"
                    >
                      Access Hydration Calculator
                    </Link>
                  </div>
                </div>
              )}

              {risk === 'HIGH' && (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-red-500/10 text-red-600 rounded-full flex items-center justify-center mx-auto">
                    <AlertOctagon size={40} />
                  </div>
                  <h2 className="font-serif text-[32px] text-[#2C3539] leading-tight">Status: High-Priority Adjustment Suggested</h2>
                  <p className="text-[16px] leading-relaxed text-[#2C3539]/80">
                    Your reported symptoms indicate significant fluid volume shifts or rapid mineral depletion. We highly suggest alerting your prescribing clinical care team to review these parameters. Access our Micro-Volume Fluid Grid immediately to protect your comfort.
                  </p>
                  <div className="pt-6">
                    <Link 
                      to="/tools/hydration-calculator"
                      className="inline-flex items-center justify-center w-full bg-[#2C3539] hover:bg-[#1A1F22] text-white px-6 py-4 rounded-xl font-medium transition-colors text-[15px]"
                    >
                      View Micro-Volume Grid
                    </Link>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
