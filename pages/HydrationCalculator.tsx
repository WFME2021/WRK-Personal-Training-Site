import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Button } from '../components/Button';
import { Droplet, Activity, AlertTriangle, ShieldCheck, Info, ArrowLeft, ChevronRight } from 'lucide-react';

export const HydrationCalculator: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [weight, setWeight] = useState<string>('80');
  const [unit, setUnit] = useState<'kg' | 'lbs'>('kg');
  
  const [hasNausea, setHasNausea] = useState<boolean>(false);
  const [hasDiarrhoea, setHasDiarrhoea] = useState<boolean>(false);
  const [hasDizziness, setHasDizziness] = useState<boolean>(false);
  
  const [isActivityHigh, setIsActivityHigh] = useState<boolean>(false);

  // Calculations
  const weightInKg = unit === 'kg' ? parseFloat(weight) || 0 : (parseFloat(weight) || 0) / 2.20462;
  
  // Baseline: 35ml per kg
  let baselineMl = weightInKg * 35;
  
  // GLP-1 adjustment
  baselineMl += 500;
  
  if (hasNausea) baselineMl += 500;
  if (hasDiarrhoea) baselineMl += 750;
  if (isActivityHigh) baselineMl += 500;

  const totalLitres = (baselineMl / 1000).toFixed(1);

  return (
    <>
      <SeoHead 
        title="GLP-1 Hydration & Electrolyte Optimizer | WRK New Zealand"
        description="Calculate your daily fluid and mineral targets to manage medication-induced fluid shifts and protect gastrointestinal comfort."
      />

      <div className="flex flex-col w-full min-h-screen bg-neutral-900 text-neutral-100 items-center overflow-x-hidden pt-[80px] md:pt-[100px] pb-24">
        <div className="max-w-[1000px] w-full px-5 md:px-12 mx-auto">
          
          {/* Breadcrumb & Back Link */}
          <div className="mb-8 space-y-4">
            <nav className="flex items-center text-[13px] text-neutral-400 font-sans">
              <Link to="/" className="hover:text-teal-400 transition-colors">Home</Link>
              <ChevronRight size={14} className="mx-2 text-neutral-600" />
              <Link to="/tools" className="hover:text-teal-400 transition-colors">Tools</Link>
              <ChevronRight size={14} className="mx-2 text-neutral-600" />
              <span className="text-neutral-200">Hydration & Electrolytes</span>
            </nav>
            <Link to="/tools" className="inline-flex items-center text-[14px] text-teal-400 hover:text-teal-300 transition-colors font-medium">
              <ArrowLeft size={16} className="mr-2" />
              Back to All Tools
            </Link>
          </div>

          <div className="mb-12 text-center md:text-left">
            <h1 className="font-serif text-[36px] md:text-[48px] leading-[1.15] text-neutral-100 mb-4">
              GLP-1 Hydration & Electrolyte Optimizer
            </h1>
            <p className="font-sans text-[16px] md:text-[18px] text-neutral-300 leading-relaxed max-w-2xl">
              Calculate your daily fluid and mineral targets to manage medication-induced fluid shifts and protect gastrointestinal comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            
            {/* Input Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-xl">
                <h3 className="font-serif text-[24px] text-neutral-100 mb-6 flex items-center gap-2">
                  <Droplet className="text-teal-400" size={24} />
                  Your Parameters
                </h3>

                <div className="space-y-6">
                  {/* Weight Input */}
                  <div className="space-y-3">
                    <label className="block text-[15px] font-medium text-neutral-300">Current Body Weight</label>
                    <div className="flex bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-teal-500/50 transition-shadow">
                      <input 
                        type="number"
                        min="30"
                        max="300"
                        step="0.1"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full p-3.5 bg-transparent text-neutral-100 font-sans focus:outline-none"
                        placeholder="e.g. 80"
                      />
                      <div className="flex border-l border-neutral-800">
                        <button 
                          type="button"
                          onClick={() => setUnit('kg')}
                          className={`px-4 font-medium text-sm transition-colors ${unit === 'kg' ? 'bg-neutral-800 text-teal-400' : 'bg-transparent text-neutral-500 hover:text-neutral-300'}`}
                        >
                          kg
                        </button>
                        <button 
                          type="button"
                          onClick={() => setUnit('lbs')}
                          className={`px-4 font-medium text-sm transition-colors border-l border-neutral-800 ${unit === 'lbs' ? 'bg-neutral-800 text-teal-400' : 'bg-transparent text-neutral-500 hover:text-neutral-300'}`}
                        >
                          lbs
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Side Effects */}
                  <div className="space-y-4">
                    <label className="block text-[15px] font-medium text-neutral-300 border-b border-neutral-800 pb-2">
                      Medication Side Effects Experience
                      <span className="block text-xs text-neutral-500 font-normal mt-1">Select all that currently apply</span>
                    </label>
                    
                    <div className="space-y-3">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                          <input type="checkbox" className="sr-only" checked={hasNausea} onChange={(e) => setHasNausea(e.target.checked)} />
                          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${hasNausea ? 'bg-teal-500 border-teal-500' : 'bg-neutral-900 border-neutral-700 group-hover:border-teal-500/50'}`}>
                            {hasNausea && <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                          </div>
                        </div>
                        <span className="font-sans text-[14px] text-neutral-300 leading-snug">Nausea or active vomiting <span className="text-teal-500/70 text-xs ml-1">(+500ml fluid shift)</span></span>
                      </label>

                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                          <input type="checkbox" className="sr-only" checked={hasDiarrhoea} onChange={(e) => setHasDiarrhoea(e.target.checked)} />
                          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${hasDiarrhoea ? 'bg-teal-500 border-teal-500' : 'bg-neutral-900 border-neutral-700 group-hover:border-teal-500/50'}`}>
                            {hasDiarrhoea && <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                          </div>
                        </div>
                        <span className="font-sans text-[14px] text-neutral-300 leading-snug">Diarrhoea or loose stools <span className="text-teal-500/70 text-xs ml-1">(+750ml fluid shift)</span></span>
                      </label>

                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                          <input type="checkbox" className="sr-only" checked={hasDizziness} onChange={(e) => setHasDizziness(e.target.checked)} />
                          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${hasDizziness ? 'bg-teal-500 border-teal-500' : 'bg-neutral-900 border-neutral-700 group-hover:border-teal-500/50'}`}>
                            {hasDizziness && <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                          </div>
                        </div>
                        <span className="font-sans text-[14px] text-neutral-300 leading-snug">Low blood pressure or dizziness when standing <span className="text-teal-500/70 text-xs ml-1">(Orthostatic alert)</span></span>
                      </label>
                    </div>
                  </div>

                  {/* Activity Level */}
                  <div className="space-y-3 pt-2 border-t border-neutral-800">
                    <label className="block text-[15px] font-medium text-neutral-300">Daily Activity Level</label>
                    <select 
                      value={isActivityHigh ? 'high' : 'low'} 
                      onChange={(e) => setIsActivityHigh(e.target.value === 'high')}
                      className="w-full p-3.5 bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-colors"
                    >
                      <option value="low">Sedentary / Light Activity</option>
                      <option value="high">Active (Intense exercise or high-sweat environments; +500ml shift)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Output Column (Bento Grid) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Card 1: Total Fluid Target */}
              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 text-neutral-800/20 group-hover:text-teal-500/5 transition-colors duration-500">
                  <Droplet size={180} />
                </div>
                <div className="relative z-10">
                  <h3 className="font-serif text-[20px] text-neutral-400 mb-2">Total Daily Fluid Target</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-serif text-[48px] md:text-[64px] text-teal-400 leading-none font-bold">{totalLitres}</span>
                    <span className="text-[20px] text-neutral-400">Litres / day</span>
                  </div>
                  <div className="p-4 bg-teal-500/10 rounded-xl border border-teal-500/20">
                    <p className="text-[13px] text-teal-100 leading-relaxed">
                      <strong>Clinical Context:</strong> GLP-1 medications can significantly suppress your brain's natural thirst signals. Drinking by design, rather than by thirst, helps protect kidney function and reduces nausea.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Minerals */}
              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-xl">
                <h3 className="font-serif text-[20px] text-neutral-400 mb-6 flex items-center gap-2">
                  <Activity className="text-teal-400" size={20} />
                  Daily Mineral Baseline Indicators
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-center hover:border-teal-500/30 transition-colors">
                    <div className="text-[11px] uppercase tracking-widest text-neutral-500 mb-1 font-semibold">Sodium</div>
                    <div className="text-[18px] text-neutral-100 font-bold mb-1">2,000 - 3,000</div>
                    <div className="text-[12px] text-neutral-500">mg / day</div>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-center hover:border-teal-500/30 transition-colors">
                    <div className="text-[11px] uppercase tracking-widest text-neutral-500 mb-1 font-semibold">Potassium</div>
                    <div className="text-[18px] text-neutral-100 font-bold mb-1">3,500 - 4,700</div>
                    <div className="text-[12px] text-neutral-500">mg / day</div>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-center hover:border-teal-500/30 transition-colors">
                    <div className="text-[11px] uppercase tracking-widest text-neutral-500 mb-1 font-semibold">Magnesium</div>
                    <div className="text-[18px] text-neutral-100 font-bold mb-1">310 - 420</div>
                    <div className="text-[12px] text-neutral-500">mg / day</div>
                  </div>
                </div>

                <div className="flex gap-3 text-[13px] text-neutral-400 bg-neutral-900 p-4 rounded-xl border border-neutral-800">
                  <Info className="text-neutral-500 shrink-0" size={18} />
                  <p className="leading-relaxed">
                    Gastrointestinal side effects rapidly deplete critical minerals. Ensuring adequate electrolyte intake supports cellular hydration and prevents muscle cramping. <em className="block mt-1 text-teal-400/80">Note: Please consult your doctor regarding sodium targets if you have a history of hypertension.</em>
                  </p>
                </div>
              </div>

              {/* Card 3: Dynamic Strategy */}
              {(hasNausea || hasDiarrhoea || hasDizziness) && (
                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-xl">
                  <h3 className="font-serif text-[20px] text-neutral-400 mb-5 flex items-center gap-2">
                    <ShieldCheck className="text-teal-400" size={20} />
                    Personalised Hydration Strategy
                  </h3>
                  <div className="space-y-4">
                    {hasNausea && (
                      <div className="flex gap-3 items-start border-l-2 border-teal-500 pl-4 py-1">
                        <AlertTriangle className="text-teal-400 shrink-0 mt-0.5" size={16} />
                        <p className="text-[14px] text-neutral-300 leading-relaxed">
                          <strong className="text-white">Nausea Protocol:</strong> Sip fluids slowly between meals rather than gulping large amounts during meals to minimize stomach stretching.
                        </p>
                      </div>
                    )}
                    {hasDiarrhoea && (
                      <div className="flex gap-3 items-start border-l-2 border-teal-500 pl-4 py-1">
                        <AlertTriangle className="text-teal-400 shrink-0 mt-0.5" size={16} />
                        <p className="text-[14px] text-neutral-300 leading-relaxed">
                          <strong className="text-white">Depletion Protocol:</strong> Prioritise oral rehydration solutions (ORS) over plain water to prevent hyponatremia (low blood sodium).
                        </p>
                      </div>
                    )}
                    {hasDizziness && (
                      <div className="flex gap-3 items-start border-l-2 border-orange-400 pl-4 py-1">
                        <AlertTriangle className="text-orange-400 shrink-0 mt-0.5" size={16} />
                        <p className="text-[14px] text-neutral-300 leading-relaxed">
                          <strong className="text-white">Orthostatic Alert:</strong> Dizziness when standing may indicate rapid fluid volume loss. Ensure you are meeting both fluid and sodium baselines, and alert your clinical care team.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>

          <div className="space-y-16 mb-20 mt-20 max-w-[1000px] mx-auto">
            <div>
              <h2 className="font-serif text-[28px] md:text-[36px] text-neutral-100 border-b border-neutral-800 pb-4 mb-6">
                Addressing fluid shifts and suppressed thirst on GLP-1 receptor agonists
              </h2>
              <div className="font-sans text-[16px] text-neutral-300 leading-relaxed space-y-4">
                <p>
                  One of the most common, yet under-discussed, side effects of GLP-1 medications (like semaglutide or tirzepatide) is the profound suppression of natural thirst signals. Because these medications delay gastric emptying and signal the brain's satiety centers, your body often fails to notify you when it requires water.
                </p>
                <p>
                  Simultaneously, rapid fat loss causes a natural diuretic effect. As your body breaks down stored glycogen (which binds water), you excrete significantly more fluid than normal. This combination—increased fluid loss paired with suppressed thirst—makes intentional, metric-based hydration essential for your safety and comfort.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-[28px] md:text-[36px] text-neutral-100 border-b border-neutral-800 pb-4 mb-6">
                How to prevent dehydration headaches and nausea through designed hydration
              </h2>
              <div className="font-sans text-[16px] text-neutral-300 leading-relaxed space-y-4">
                <p>
                  A significant percentage of the nausea, fatigue, and headaches reported by individuals starting clinical weight loss interventions is actually a direct result of acute dehydration and electrolyte imbalance, rather than the medication itself. 
                </p>
                <p>
                  To mitigate this, you must transition from "drinking when thirsty" to "drinking by design." We recommend establishing a daily target (using the calculator above) and front-loading your water intake early in the day. Sipping fluids consistently between meals—rather than gulping large volumes during meals—also helps prevent uncomfortable stomach distention and medication-induced nausea.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-[28px] md:text-[36px] text-neutral-100 border-b border-neutral-800 pb-4 mb-6">
                Daily baseline indicators for sodium, potassium, and magnesium
              </h2>
              <div className="font-sans text-[16px] text-neutral-300 leading-relaxed space-y-4">
                <p>
                  Water alone is not enough to maintain cellular hydration, especially if you are experiencing medication-induced gastrointestinal side effects like diarrhea or vomiting. These events rapidly strip your system of vital minerals.
                </p>
                <p>
                  A balanced electrolyte protocol is required to support muscular contraction, nerve signaling, and blood pressure regulation. Maintaining adequate sodium helps your body hold onto the water you drink; potassium supports cardiovascular function and prevents cramping; and magnesium is critical for central nervous system relaxation and sleep quality. If you are training while losing weight, these mineral baselines become even more critical to protect your performance.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-[11px] text-neutral-500 text-center leading-relaxed">
              <strong>Disclaimer:</strong> This tool provides general operational targets based on common clinical guidelines for medical weight loss. It does not constitute medical advice, diagnosis, or treatment. Individual fluid requirements vary based on medical history, renal function, and specific prescription protocols. Always consult your prescribing physician or a registered dietitian before altering your mineral or fluid intake.
            </p>

            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 text-sm text-neutral-400 space-y-3">
              <h4 className="font-serif text-white text-base">Clinical References & Insights</h4>
              <p className="leading-relaxed mb-2">Rapid weight loss and GLP-1 receptor agonists alter fluid dynamics and electrolyte excretion.</p>
              <ul className="space-y-2">
                <li><Link to="/resources#gi-events" className="text-teal-500 hover:text-teal-400 underline">Gastrointestinal Adverse Events with GLP-1 Receptor Agonists</Link></li>
                <li><Link to="/resources#fluid-management" className="text-teal-500 hover:text-teal-400 underline">Fluid and Electrolyte Management in Medical Weight Loss and Metabolic Medicine</Link></li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 md:p-10 bg-neutral-950 border border-teal-500/20 rounded-2xl text-center shadow-lg hover:border-teal-500/40 transition-colors max-w-4xl mx-auto">
            <h3 className="font-serif text-[24px] text-white mb-4">Need help managing your physical baseline?</h3>
            <p className="font-sans text-[16px] text-neutral-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Managing fluid, electrolytes, and lean muscle retention while navigating your medical timeline can feel incredibly complex. Step into a structured program designed specifically for medical weight loss recovery.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/programs">
                <Button size="lg" className="w-full md:w-auto shadow-2xl">
                  Explore Our 12-Week Programs
                </Button>
              </Link>
              <Link to="/assessment">
                <Button size="lg" variant="outline" className="w-full md:w-auto">
                  Take the Diagnostic Screening
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
