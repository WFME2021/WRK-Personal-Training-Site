import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Droplet, Activity, AlertTriangle, ShieldCheck, Info, ChevronRight } from 'lucide-react';

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
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-32">
      <SeoHead 
        title="GLP-1 Dehydration & Nausea Calculator | WRK"
        description="Calculate precise micro-volume fluid spacing configurations to counter suppressed brain thirst signals and manage medication-induced dehydration."
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-[13px] font-medium text-[#2C3539]/60 mb-8 max-w-5xl mx-auto">
          <Link to="/" className="hover:text-[#8A9A86] transition-colors">Home</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to="/tools" className="hover:text-[#8A9A86] transition-colors">Tools</Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-[#2C3539]">Dehydration & Nausea Calculator</span>
        </nav>

        {/* Page Header */}
        <header className="mb-16 max-w-5xl mx-auto">
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            GLP-1 Dehydration & Nausea Calculator
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/70 max-w-3xl">
            Counter suppressed brain thirst signals and manage fluid shifts by calculating your precise micro-volume fluid spacing layouts and daily mineral targets.
          </p>
        </header>

        {/* Re-Engineered Bento Calculator Box */}
        <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md border border-neutral-200 rounded-3xl p-8 md:p-12 shadow-sm mb-20 overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Input Column */}
            <div className="lg:col-span-6 space-y-10">
              
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center shrink-0">
                  <Droplet size={24} />
                </div>
                <h2 className="font-serif text-[26px] text-[#2C3539]">Your Parameters</h2>
              </div>

              <div className="space-y-8">
                {/* Weight Input */}
                <div className="space-y-3">
                  <label className="block text-[15px] font-medium text-[#2C3539]/80">Current Body Weight</label>
                  <div className="flex bg-[#FAFAF9] border border-neutral-200 rounded-xl overflow-hidden focus-within:border-[#8A9A86] transition-colors h-14">
                    <input 
                      type="number"
                      min="30"
                      max="300"
                      step="0.1"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full px-5 bg-transparent text-[#2C3539] font-sans focus:outline-none text-[15px]"
                      placeholder="e.g. 80"
                    />
                    <div className="flex border-l border-neutral-200">
                      <button 
                        type="button"
                        onClick={() => setUnit('kg')}
                        className={`px-5 font-medium text-[14px] transition-colors ${unit === 'kg' ? 'bg-[#8A9A86]/10 text-[#8A9A86]' : 'bg-transparent text-[#2C3539]/50 hover:text-[#2C3539]/80'}`}
                      >
                        kg
                      </button>
                      <button 
                        type="button"
                        onClick={() => setUnit('lbs')}
                        className={`px-5 font-medium text-[14px] transition-colors border-l border-neutral-200 ${unit === 'lbs' ? 'bg-[#8A9A86]/10 text-[#8A9A86]' : 'bg-transparent text-[#2C3539]/50 hover:text-[#2C3539]/80'}`}
                      >
                        lbs
                      </button>
                    </div>
                  </div>
                </div>

                {/* Side Effects */}
                <div className="space-y-4 pt-4 border-t border-neutral-100">
                  <label className="block text-[15px] font-medium text-[#2C3539]/80 mb-4">
                    Medication Side Effects Experience
                    <span className="block text-[13px] text-[#2C3539]/50 font-normal mt-1">Select all that currently apply</span>
                  </label>
                  
                  <div className="space-y-4">
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                        <input type="checkbox" className="sr-only" checked={hasNausea} onChange={(e) => setHasNausea(e.target.checked)} />
                        <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${hasNausea ? 'bg-[#8A9A86] border-[#8A9A86]' : 'bg-[#FAFAF9] border-neutral-300 group-hover:border-[#8A9A86]'}`}>
                          {hasNausea && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                        </div>
                      </div>
                      <span className="text-[15px] text-[#2C3539]/80 leading-snug font-medium select-none">
                        Nausea or active vomiting <span className="text-[#8A9A86] text-[13px] ml-1 font-normal">(+500ml shift)</span>
                      </span>
                    </label>

                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                        <input type="checkbox" className="sr-only" checked={hasDiarrhoea} onChange={(e) => setHasDiarrhoea(e.target.checked)} />
                        <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${hasDiarrhoea ? 'bg-[#8A9A86] border-[#8A9A86]' : 'bg-[#FAFAF9] border-neutral-300 group-hover:border-[#8A9A86]'}`}>
                          {hasDiarrhoea && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                        </div>
                      </div>
                      <span className="text-[15px] text-[#2C3539]/80 leading-snug font-medium select-none">
                        Diarrhoea or loose stools <span className="text-[#8A9A86] text-[13px] ml-1 font-normal">(+750ml shift)</span>
                      </span>
                    </label>

                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                        <input type="checkbox" className="sr-only" checked={hasDizziness} onChange={(e) => setHasDizziness(e.target.checked)} />
                        <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${hasDizziness ? 'bg-[#8A9A86] border-[#8A9A86]' : 'bg-[#FAFAF9] border-neutral-300 group-hover:border-[#8A9A86]'}`}>
                          {hasDizziness && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                        </div>
                      </div>
                      <span className="text-[15px] text-[#2C3539]/80 leading-snug font-medium select-none">
                        Low blood pressure / dizziness <span className="text-[#8A9A86] text-[13px] ml-1 font-normal">(Orthostatic alert)</span>
                      </span>
                    </label>
                  </div>
                </div>

                {/* Activity Level */}
                <div className="space-y-3 pt-4 border-t border-neutral-100">
                  <label className="block text-[15px] font-medium text-[#2C3539]/80">Daily Activity Level</label>
                  <div className="relative">
                    <select 
                      value={isActivityHigh ? 'high' : 'low'} 
                      onChange={(e) => setIsActivityHigh(e.target.value === 'high')}
                      className="w-full h-14 bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 rounded-xl appearance-none focus:outline-none focus:border-[#8A9A86] transition-colors cursor-pointer text-[15px]"
                    >
                      <option value="low">Sedentary / Light Activity</option>
                      <option value="high">Active (Intense exercise / high-sweat; +500ml shift)</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-[#2C3539]/40">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Output Column */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Card 1: Total Fluid Target */}
              <div className="bg-[#FAFAF9] border border-neutral-200 rounded-2xl p-8 relative overflow-hidden group">
                <div className="absolute -right-6 -bottom-6 text-neutral-100 group-hover:text-[#8A9A86]/5 transition-colors duration-500 z-0">
                  <Droplet size={140} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#2C3539]/50 mb-4">Total Daily Fluid Target</h3>
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="font-serif text-[56px] md:text-[72px] text-[#8A9A86] leading-none font-medium">{totalLitres}</span>
                    <span className="text-[18px] text-[#2C3539]/60 font-medium">Litres / day</span>
                  </div>
                  <div className="p-5 bg-white rounded-xl border border-neutral-100">
                    <p className="text-[14px] text-[#2C3539]/70 leading-relaxed">
                      <strong className="text-[#2C3539] font-medium">Clinical Context:</strong> GLP-1 medications significantly suppress the brain's thirst signals. Drinking by design helps protect kidney function and reduces nausea.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Minerals */}
              <div className="bg-[#FAFAF9] border border-neutral-200 rounded-2xl p-8">
                <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#2C3539]/50 mb-6 flex items-center gap-2">
                  <Activity size={16} />
                  Daily Mineral Indicators
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white border border-neutral-100 rounded-xl p-5 text-center shadow-sm">
                    <div className="text-[11px] uppercase tracking-widest text-[#2C3539]/50 mb-2 font-semibold">Sodium</div>
                    <div className="text-[20px] text-[#2C3539] font-serif font-medium mb-1">2,000 - 3,000</div>
                    <div className="text-[12px] text-[#2C3539]/40 font-medium">mg / day</div>
                  </div>
                  <div className="bg-white border border-neutral-100 rounded-xl p-5 text-center shadow-sm">
                    <div className="text-[11px] uppercase tracking-widest text-[#2C3539]/50 mb-2 font-semibold">Potassium</div>
                    <div className="text-[20px] text-[#2C3539] font-serif font-medium mb-1">3,500 - 4,700</div>
                    <div className="text-[12px] text-[#2C3539]/40 font-medium">mg / day</div>
                  </div>
                  <div className="bg-white border border-neutral-100 rounded-xl p-5 text-center shadow-sm">
                    <div className="text-[11px] uppercase tracking-widest text-[#2C3539]/50 mb-2 font-semibold">Magnesium</div>
                    <div className="text-[20px] text-[#2C3539] font-serif font-medium mb-1">310 - 420</div>
                    <div className="text-[12px] text-[#2C3539]/40 font-medium">mg / day</div>
                  </div>
                </div>

                <div className="flex gap-4 text-[14px] text-[#2C3539]/70 bg-white p-5 rounded-xl border border-neutral-100 shadow-sm">
                  <Info className="text-[#8A9A86] shrink-0 mt-0.5" size={18} />
                  <p className="leading-relaxed">
                    Gastrointestinal side effects deplete minerals. Adequate electrolytes support hydration and prevent cramping. <em className="block mt-2 text-[#2C3539]/50">Consult your doctor regarding sodium targets if you have hypertension.</em>
                  </p>
                </div>
              </div>

              {/* Card 3: Dynamic Strategy */}
              {(hasNausea || hasDiarrhoea || hasDizziness) && (
                <div className="bg-white border border-[#8A9A86]/30 rounded-2xl p-8 shadow-sm">
                  <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#2C3539]/50 mb-6 flex items-center gap-2">
                    <ShieldCheck className="text-[#8A9A86]" size={16} />
                    Personalised Strategy
                  </h3>
                  <div className="space-y-4">
                    {hasNausea && (
                      <div className="flex gap-4 items-start border-l-2 border-[#8A9A86] pl-5 py-1">
                        <AlertTriangle className="text-[#8A9A86] shrink-0 mt-0.5" size={16} />
                        <p className="text-[14px] text-[#2C3539]/80 leading-relaxed">
                          <strong className="text-[#2C3539] font-medium block mb-1">Nausea Protocol</strong> Sip fluids slowly between meals rather than gulping large amounts during meals to minimize stomach stretching.
                        </p>
                      </div>
                    )}
                    {hasDiarrhoea && (
                      <div className="flex gap-4 items-start border-l-2 border-[#8A9A86] pl-5 py-1">
                        <AlertTriangle className="text-[#8A9A86] shrink-0 mt-0.5" size={16} />
                        <p className="text-[14px] text-[#2C3539]/80 leading-relaxed">
                          <strong className="text-[#2C3539] font-medium block mb-1">Depletion Protocol</strong> Prioritise oral rehydration solutions (ORS) over plain water to prevent hyponatremia (low blood sodium).
                        </p>
                      </div>
                    )}
                    {hasDizziness && (
                      <div className="flex gap-4 items-start border-l-2 border-[#8A9A86] pl-5 py-1">
                        <AlertTriangle className="text-[#8A9A86] shrink-0 mt-0.5" size={16} />
                        <p className="text-[14px] text-[#2C3539]/80 leading-relaxed">
                          <strong className="text-[#2C3539] font-medium block mb-1">Orthostatic Alert</strong> Dizziness when standing may indicate rapid fluid volume loss. Ensure you are meeting fluid and sodium baselines, and alert your clinical team.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>
          
          <div className="text-center mt-12 border-t border-neutral-100 pt-8">
            <p className="text-[12px] text-[#2C3539]/50 max-w-3xl mx-auto leading-relaxed">
              <strong>Disclaimer:</strong> This tool provides general operational targets based on common clinical guidelines. It does not constitute medical advice. Individual fluid requirements vary based on medical history, renal function, and specific prescription protocols. Always consult your prescribing physician.
            </p>
          </div>
        </div>

        {/* Mobile Interactive Accordions */}
        <div className="max-w-4xl mx-auto space-y-4 mb-20">
          <details className="group bg-white border border-neutral-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-serif text-[20px] md:text-[22px] text-[#2C3539]">
              Addressing fluid shifts and suppressed thirst on GLP-1 receptor agonists
              <span className="ml-6 flex-shrink-0 transition duration-300 group-open:-rotate-180">
                <svg className="w-6 h-6 text-[#8A9A86]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-6 pt-0 text-[15px] leading-relaxed text-[#2C3539]/70 space-y-4 border-t border-neutral-100 mt-2">
              <p>
                One of the most common, yet under-discussed, side effects of GLP-1 medications (like semaglutide or tirzepatide) is the profound suppression of natural thirst signals. Because these medications delay gastric emptying and signal the brain's satiety centers, your body often fails to notify you when it requires water.
              </p>
              <p>
                Simultaneously, rapid fat loss causes a natural diuretic effect. As your body breaks down stored glycogen (which binds water), you excrete significantly more fluid than normal. This combination—increased fluid loss paired with suppressed thirst—makes intentional, metric-based hydration essential for your safety and comfort.
              </p>
            </div>
          </details>

          <details className="group bg-white border border-neutral-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-serif text-[20px] md:text-[22px] text-[#2C3539]">
              How to prevent dehydration headaches and nausea through designed hydration
              <span className="ml-6 flex-shrink-0 transition duration-300 group-open:-rotate-180">
                <svg className="w-6 h-6 text-[#8A9A86]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-6 pt-0 text-[15px] leading-relaxed text-[#2C3539]/70 space-y-4 border-t border-neutral-100 mt-2">
              <p>
                A significant percentage of the nausea, fatigue, and headaches reported by individuals starting clinical weight loss interventions is actually a direct result of acute dehydration and electrolyte imbalance, rather than the medication itself. 
              </p>
              <p>
                To mitigate this, you must transition from "drinking when thirsty" to "drinking by design." We recommend establishing a daily target (using the calculator above) and front-loading your water intake early in the day. Sipping fluids consistently between meals—rather than gulping large volumes during meals—also helps prevent uncomfortable stomach distention and medication-induced nausea.
              </p>
            </div>
          </details>

          <details className="group bg-white border border-neutral-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-serif text-[20px] md:text-[22px] text-[#2C3539]">
              Daily baseline indicators for sodium, potassium, and magnesium
              <span className="ml-6 flex-shrink-0 transition duration-300 group-open:-rotate-180">
                <svg className="w-6 h-6 text-[#8A9A86]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-6 pt-0 text-[15px] leading-relaxed text-[#2C3539]/70 space-y-4 border-t border-neutral-100 mt-2">
              <p>
                Water alone is not enough to maintain cellular hydration, especially if you are experiencing medication-induced gastrointestinal side effects like diarrhea or vomiting. These events rapidly strip your system of vital minerals.
              </p>
              <p>
                A balanced electrolyte protocol is required to support muscular contraction, nerve signaling, and blood pressure regulation. Maintaining adequate sodium helps your body hold onto the water you drink; potassium supports cardiovascular function and prevents cramping; and magnesium is critical for central nervous system relaxation and sleep quality. If you are training while losing weight, these mineral baselines become even more critical to protect your performance.
              </p>
            </div>
          </details>

          <details className="group bg-white border border-neutral-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-serif text-[20px] md:text-[22px] text-[#2C3539]">
              Approved Clinical Hydration Beverage Matrix
              <span className="ml-6 flex-shrink-0 transition duration-300 group-open:-rotate-180">
                <svg className="w-6 h-6 text-[#8A9A86]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-6 pt-0 text-[15px] leading-relaxed text-[#2C3539]/70 space-y-4 border-t border-neutral-100 mt-2">
              <p>
                When meeting your fluid targets, not all beverages are created equal. Focus on high-quality, bioavailable hydration sources that will not aggravate gastric distress.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#2C3539]/80">
                <li><strong className="text-[#2C3539] font-medium">Low-Sugar Electrolyte Tablets:</strong> Excellent for rapid mineral replenishment without unnecessary sugar spikes. Dissolve in large volumes of water and sip slowly.</li>
                <li><strong className="text-[#2C3539] font-medium">Coconut Water:</strong> A natural source of potassium and magnesium. Opt for unsweetened, 100% pure variants.</li>
                <li><strong className="text-[#2C3539] font-medium">Bone Broth:</strong> Rich in sodium and trace minerals. Warm liquids can also be soothing for an upset stomach.</li>
                <li><strong className="text-[#2C3539] font-medium">Items to Avoid:</strong> Strongly avoid carbonated fizzy drinks, as the gas can cause painful bloating and exacerbate nausea on GLP-1s. Steer clear of high-sugar sports drinks and excessive caffeine, which can act as a diuretic.</li>
              </ul>
            </div>
          </details>
        </div>

      </div>
    </div>
  );
};

