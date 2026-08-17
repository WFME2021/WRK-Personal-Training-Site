import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Droplet, Calculator } from 'lucide-react';

export const HydrationCalculator: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [unit, setUnit] = useState<'kg' | 'lb'>('kg');
  const [weightInput, setWeightInput] = useState<string>('70');
  const [activity, setActivity] = useState<'low' | 'moderate' | 'high'>('moderate');
  const [sweat, setSweat] = useState<'low' | 'moderate' | 'high'>('low');
  const [environment, setEnvironment] = useState<'no' | 'occasionally' | 'yes'>('no');
  const [giSymptoms, setGiSymptoms] = useState<string[]>(['none']);

  const [showResults, setShowResults] = useState(false);

  // Sweat rate optional calculator states
  const [showSweatCalc, setShowSweatCalc] = useState(false);
  const [preWeight, setPreWeight] = useState('');
  const [postWeight, setPostWeight] = useState('');
  const [fluidConsumed, setFluidConsumed] = useState('');
  const [urineProduced, setUrineProduced] = useState('');
  const [exerciseDuration, setExerciseDuration] = useState('');

  const handleGiChange = (symptom: string) => {
    setShowResults(false);
    if (symptom === 'none') {
      setGiSymptoms(['none']);
    } else {
      const newSymptoms = giSymptoms.filter(s => s !== 'none');
      if (newSymptoms.includes(symptom)) {
        const removed = newSymptoms.filter(s => s !== symptom);
        setGiSymptoms(removed.length ? removed : ['none']);
      } else {
        setGiSymptoms([...newSymptoms, symptom]);
      }
    }
  };

  // Base Calculation
  const weightNum = parseFloat(weightInput) || 0;
  const weightInKg = unit === 'lb' ? weightNum / 2.20462 : weightNum;
  
  let baseLiters = (weightInKg * 35) / 1000;
  
  let adjustmentLiters = 0;
  if (activity === 'moderate') {
    adjustmentLiters += 0.25;
  }
  if (activity === 'high' || sweat === 'high') {
    adjustmentLiters += 0.375; // Using midpoint of 250-500mL
  }
  if (environment === 'occasionally' || environment === 'yes') {
    adjustmentLiters += 0.375;
  }
  
  // Cap routine adjustment
  adjustmentLiters = Math.min(adjustmentLiters, 0.75);

  const targetLiters = baseLiters + adjustmentLiters;
  
  const lowRange = Math.max(1, targetLiters * 0.95);
  const highRange = targetLiters * 1.05;

  // GI Warnings
  const hasVomiting = giSymptoms.includes('vomiting');
  const hasDiarrhoea = giSymptoms.includes('diarrhoea');
  const hasNausea = giSymptoms.includes('nausea');
  const hasSeriousGi = hasVomiting || hasDiarrhoea;

  // Sweat Rate Calculation
  let sweatRate: number | null = null;
  if (preWeight && postWeight && exerciseDuration) {
    const pre = parseFloat(preWeight);
    const post = parseFloat(postWeight);
    const fluidLiters = parseFloat(fluidConsumed) / 1000 || 0;
    const urineLiters = parseFloat(urineProduced) / 1000 || 0;
    const durationHours = parseFloat(exerciseDuration) / 60;
    
    if (pre && post && durationHours > 0) {
      const sweatLossKg = (pre - post) + fluidLiters - urineLiters;
      sweatRate = sweatLossKg / durationHours;
      sweatRate = Math.max(0, sweatRate);
    }
  }

  return (
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-12">
      <SeoHead 
        title="GLP-1 Hydration Calculator: Estimate Your Daily Fluid Needs | WRK"
        description="Use the WRK GLP-1 Hydration Calculator to estimate your daily fluid needs. Enhance your GLP-1 Fitness Coaching results with proper hydration."
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-[13px] font-medium text-[#2C3539]/60 mb-8 max-w-4xl mx-auto">
          <Link to="/" className="hover:text-[#8A9A86] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/tools" className="hover:text-[#8A9A86] transition-colors">Tools</Link>
          <span className="mx-2">/</span>
          <span className="text-[#2C3539]">Hydration Calculator</span>
        </nav>

        {/* Hero */}
        <header className="text-center mb-16 max-w-4xl mx-auto">
          <div className="w-16 h-16 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mx-auto mb-6">
            <Droplet size={32} />
          </div>
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            GLP-1 <span className="wrk-highlight">Hydration</span> Calculator
          </h1>
          <h2 className="font-serif text-[24px] md:text-[28px] text-[#2C3539]/80 mb-6">
            Estimate your daily fluid needs and understand when you may need to pay more attention to hydration.
          </h2>
          <div className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/80 space-y-4">
            <p>
              Reduced appetite, changes in eating and drinking habits, exercise, heat, nausea, vomiting and diarrhoea can all affect hydration.
            </p>
            <p>
              This calculator gives you a <strong className="font-medium text-[#2C3539]">practical starting estimate</strong> for your daily fluid intake and helps you understand when additional hydration or electrolyte support may be relevant.
            </p>
            <p className="italic text-[15px]">It is not a medical prescription.</p>
          </div>
        </header>

        {/* Calculator Interface */}
        <div className="max-w-4xl mx-auto mb-24 flex flex-col md:flex-row gap-8">
          
          {/* Input Panel */}
          <div className="flex-1 bg-white p-8 md:p-10 rounded-3xl border border-neutral-200 shadow-sm flex flex-col">
            <h3 className="font-serif text-[26px] text-[#2C3539] mb-8 border-b border-neutral-100 pb-4">
              Your Details
            </h3>
            
            <div className="space-y-8 flex-grow mb-8">
              
              {/* Step 1 */}
              <div>
                <label className="block text-[14px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-3">
                  Step 1: Bodyweight
                </label>
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <input 
                      type="number"
                      min="30"
                      value={weightInput}
                      onChange={(e) => {
                        setWeightInput(e.target.value);
                        setShowResults(false);
                      }}
                      className="w-full h-14 pl-5 pr-5 bg-[#FAFAF9] border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#8A9A86] focus:border-transparent outline-none transition-all text-[#2C3539] text-[18px] font-medium"
                      placeholder="e.g. 70"
                    />
                  </div>
                  <div className="flex bg-[#FAFAF9] border border-neutral-200 rounded-xl overflow-hidden p-1">
                    <button 
                      onClick={() => { setUnit('kg'); setShowResults(false); }}
                      className={`px-4 font-medium text-[14px] rounded-lg transition-colors ${unit === 'kg' ? 'bg-[#2C3539] text-white' : 'text-[#2C3539]/60 hover:bg-neutral-100'}`}
                    >
                      kg
                    </button>
                    <button 
                      onClick={() => { setUnit('lb'); setShowResults(false); }}
                      className={`px-4 font-medium text-[14px] rounded-lg transition-colors ${unit === 'lb' ? 'bg-[#2C3539] text-white' : 'text-[#2C3539]/60 hover:bg-neutral-100'}`}
                    >
                      lb
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <label className="block text-[14px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-3">
                  Step 2: Normal Daily Activity
                </label>
                <div className="relative">
                  <select 
                    value={activity}
                    onChange={(e) => {
                      setActivity(e.target.value as any);
                      setShowResults(false);
                    }}
                    className="w-full h-14 pl-5 pr-12 bg-[#FAFAF9] border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#8A9A86] focus:border-transparent outline-none transition-all text-[#2C3539] text-[15px] appearance-none"
                  >
                    <option value="low">Low — Mostly sedentary with little structured exercise</option>
                    <option value="moderate">Moderate — Regular walking / ~30-60 min exercise most days</option>
                    <option value="high">High — Longer sessions, physically demanding work, frequent training</option>
                  </select>
                  <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-[#2C3539]/50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <label className="block text-[14px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-3">
                  Step 3: Exercise / Sweat Exposure
                </label>
                <p className="text-[13px] text-[#2C3539]/60 mb-3">How much do you typically sweat during exercise?</p>
                <div className="relative">
                  <select 
                    value={sweat}
                    onChange={(e) => {
                      setSweat(e.target.value as any);
                      setShowResults(false);
                    }}
                    className="w-full h-14 pl-5 pr-12 bg-[#FAFAF9] border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#8A9A86] focus:border-transparent outline-none transition-all text-[#2C3539] text-[15px] appearance-none"
                  >
                    <option value="low">Low — I rarely sweat heavily</option>
                    <option value="moderate">Moderate — I sweat noticeably</option>
                    <option value="high">High — I sweat heavily / my clothing is often soaked</option>
                  </select>
                  <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-[#2C3539]/50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div>
                <label className="block text-[14px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-3">
                  Step 4: Environment
                </label>
                <p className="text-[13px] text-[#2C3539]/60 mb-3">Are you regularly exercising or spending significant time in hot conditions?</p>
                <div className="relative">
                  <select 
                    value={environment}
                    onChange={(e) => {
                      setEnvironment(e.target.value as any);
                      setShowResults(false);
                    }}
                    className="w-full h-14 pl-5 pr-12 bg-[#FAFAF9] border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#8A9A86] focus:border-transparent outline-none transition-all text-[#2C3539] text-[15px] appearance-none"
                  >
                    <option value="no">No</option>
                    <option value="occasionally">Occasionally</option>
                    <option value="yes">Yes — regularly</option>
                  </select>
                  <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-[#2C3539]/50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div>
                <label className="block text-[14px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-3">
                  Step 5: Gastrointestinal Symptoms
                </label>
                <p className="text-[13px] text-[#2C3539]/60 mb-3">Are you currently experiencing any of the following?</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['none', 'nausea', 'vomiting', 'diarrhoea'].map(symptom => {
                    const isSelected = giSymptoms.includes(symptom);
                    return (
                      <button
                        key={symptom}
                        onClick={() => handleGiChange(symptom)}
                        className={`flex items-center p-4 border rounded-xl transition-all ${
                          isSelected 
                          ? 'border-[#8A9A86] bg-[#8A9A86]/5 text-[#2C3539] font-medium' 
                          : 'border-neutral-200 bg-[#FAFAF9] text-[#2C3539]/70 hover:border-neutral-300'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded border mr-3 flex items-center justify-center ${
                          isSelected ? 'bg-[#8A9A86] border-[#8A9A86]' : 'border-neutral-300 bg-white'
                        }`}>
                          {isSelected && <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>}
                        </div>
                        <span className="capitalize">{symptom === 'diarrhoea' ? 'Diarrhoea / loose stools' : symptom === 'nausea' ? 'Mild nausea' : symptom}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

            </div>

            <button 
              onClick={() => setShowResults(true)}
              disabled={!weightNum || weightInKg < 30}
              className="w-full h-14 bg-[#8A9A86] hover:bg-[#768672] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-colors text-[16px] shadow-sm flex items-center justify-center gap-2"
            >
              <Calculator size={18} />
              Calculate Estimated Need
            </button>
          </div>

          {/* Output Panel */}
          <div className={`flex-1 bg-white rounded-3xl border border-neutral-200 p-8 md:p-10 flex flex-col transition-all duration-500 relative overflow-hidden ${showResults ? 'opacity-100 shadow-md' : 'opacity-50 pointer-events-none'}`}>
            {!showResults && (
              <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm bg-white/50">
                <p className="font-medium text-[#2C3539]/70 text-[16px]">Enter parameters to view your estimate</p>
              </div>
            )}
            
            <h3 className="font-serif text-[26px] text-[#2C3539] mb-8 text-center border-b border-neutral-100 pb-4">
              YOUR RESULT
            </h3>

            {hasSeriousGi ? (
               <div className="mb-8">
                 <h4 className="font-serif text-[20px] text-[#2C3539] mb-3">Your normal hydration estimate</h4>
                 <div className="font-bold text-[24px] text-[#2C3539] mb-6">
                   Approximately {lowRange.toFixed(1)}–{highRange.toFixed(1)} L/day
                 </div>
                 <div className="bg-[#1A1C1D] text-white p-6 rounded-2xl">
                   <h5 className="font-bold text-[18px] mb-3">Your current symptoms need more attention than the calculator result.</h5>
                   <div className="space-y-3 text-[14px] text-neutral-300">
                     <p>Vomiting and diarrhoea can cause fluid and electrolyte losses.</p>
                     <p>If symptoms are persistent, severe or you cannot keep fluids down, contact your healthcare professional.</p>
                     <p>For significant fluid loss, an oral rehydration solution may be more appropriate than simply increasing plain water.</p>
                   </div>
                 </div>
               </div>
            ) : (
              <div className="text-center mb-8">
                <h4 className="font-serif text-[20px] text-[#2C3539] mb-4">Estimated Daily Fluid Starting Point</h4>
                <div className="font-serif text-[48px] md:text-[56px] text-[#8A9A86] leading-none mb-4">
                  {lowRange.toFixed(1)}–{highRange.toFixed(1)} L/day
                </div>
                
                <p className="text-[15px] text-[#2C3539]/70 leading-relaxed mb-4">
                  Your starting estimate is based on your bodyweight and current activity. This includes your overall fluid intake from drinks and other fluid-containing foods.
                </p>

                {(activity === 'high' || sweat === 'high' || environment === 'yes') && (
                  <div className="bg-[#FAFAF9] p-4 rounded-xl border border-neutral-200 mt-4 text-left">
                    <p className="text-[14px] text-[#2C3539]/80 leading-relaxed">
                      Your activity and sweat exposure suggest you may need more fluid than your normal baseline. Use this as a starting point rather than a target you must hit exactly. Your fluid needs may be higher on hot or high-sweat days.
                    </p>
                  </div>
                )}
              </div>
            )}
            
            <div className="border-t border-neutral-100 pt-6 space-y-6 text-[14px] leading-relaxed text-[#2C3539]/80 flex-grow">
              <div>
                <h4 className="font-bold text-[#2C3539] mb-2 uppercase tracking-wider text-[12px]">Do you need electrolytes?</h4>
                {(sweat === 'high' || environment === 'yes' || activity === 'high') ? (
                  <p>
                    Because you selected high sweat exposure or prolonged activity, sodium replacement may become relevant during prolonged or high-sweat exercise. Your electrolyte needs are individual and depend on sweat rate, exercise duration, environmental conditions and dietary intake.
                  </p>
                ) : (
                  <p>
                    <strong className="font-medium text-[#2C3539]">You probably don't need a dedicated electrolyte supplement for ordinary daily activity.</strong> If you regularly train for longer periods, exercise in hot conditions or sweat heavily, sodium-containing fluids may become more relevant.
                  </p>
                )}
              </div>

              {!hasSeriousGi && (
                <div>
                  <h4 className="font-bold text-[#2C3539] mb-2 uppercase tracking-wider text-[12px]">What to do on training days</h4>
                  <p>If you exercise for longer periods or sweat heavily, you may need additional fluid. Your exact requirements will depend on your exercise duration, environment and sweat rate.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Optional Sweat Rate Calculator */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="bg-white border border-neutral-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowSweatCalc(!showSweatCalc)}>
              <div>
                <h2 className="font-serif text-[24px] md:text-[28px] text-[#2C3539] mb-2">Want a more personalised exercise hydration estimate?</h2>
                <p className="text-[15px] text-[#2C3539]/70">Calculate your estimated sweat rate for specific exercise sessions.</p>
              </div>
              <div className={`p-2 rounded-full bg-[#FAFAF9] transition-transform duration-300 ${showSweatCalc ? 'rotate-180' : ''}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>

            {showSweatCalc && (
              <div className="pt-8 mt-8 border-t border-neutral-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-[13px] font-bold text-[#2C3539]/70 mb-2">Bodyweight before exercise (kg)</label>
                    <input type="number" value={preWeight} onChange={(e) => setPreWeight(e.target.value)} className="w-full h-12 px-4 bg-[#FAFAF9] border border-neutral-200 rounded-xl" placeholder="e.g. 80.0" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#2C3539]/70 mb-2">Bodyweight after exercise (kg)</label>
                    <input type="number" value={postWeight} onChange={(e) => setPostWeight(e.target.value)} className="w-full h-12 px-4 bg-[#FAFAF9] border border-neutral-200 rounded-xl" placeholder="e.g. 79.4" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#2C3539]/70 mb-2">Fluid consumed during exercise (mL)</label>
                    <input type="number" value={fluidConsumed} onChange={(e) => setFluidConsumed(e.target.value)} className="w-full h-12 px-4 bg-[#FAFAF9] border border-neutral-200 rounded-xl" placeholder="e.g. 500" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#2C3539]/70 mb-2">Urine produced during exercise (mL)</label>
                    <input type="number" value={urineProduced} onChange={(e) => setUrineProduced(e.target.value)} className="w-full h-12 px-4 bg-[#FAFAF9] border border-neutral-200 rounded-xl" placeholder="e.g. 0" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[13px] font-bold text-[#2C3539]/70 mb-2">Exercise duration (minutes)</label>
                    <input type="number" value={exerciseDuration} onChange={(e) => setExerciseDuration(e.target.value)} className="w-full h-12 px-4 bg-[#FAFAF9] border border-neutral-200 rounded-xl" placeholder="e.g. 60" />
                  </div>
                </div>

                {sweatRate !== null && sweatRate >= 0 && (
                  <div className="bg-[#8A9A86]/10 p-6 rounded-2xl border border-[#8A9A86]/20 text-center">
                    <p className="text-[14px] text-[#2C3539]/70 mb-2 uppercase tracking-wider font-bold">Estimated Sweat Rate</p>
                    <div className="font-serif text-[36px] text-[#2C3539] mb-2">{sweatRate.toFixed(1)} L/hour</div>
                    <p className="text-[14px] text-[#2C3539]/70">This is an estimate of how much fluid you lose per hour in these specific conditions.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Educational Content Blocks */}
        <div className="max-w-4xl mx-auto space-y-12 mb-24">
          
          <div className="bg-white border border-neutral-200 p-8 md:p-12 rounded-3xl">
            <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] mb-6 leading-tight">
              Hydration During GLP-1 Weight Loss
            </h2>
            <div className="text-[16px] text-[#2C3539]/80 leading-relaxed space-y-4">
              <p>GLP-1 medications can be associated with gastrointestinal side effects such as nausea, vomiting and diarrhoea. These symptoms can make it harder to maintain normal fluid intake and can increase the risk of dehydration.</p>
              <p>That doesn't mean everyone taking a GLP-1 needs to drink a fixed amount of extra water or use electrolyte supplements.</p>
              <p>Your hydration needs depend on the bigger picture — including your body size, activity, environment, food and fluid intake, and whether you're experiencing significant fluid losses.</p>
              <p className="font-medium text-[#2C3539] text-[18px] pt-4">The goal is to build a hydration routine that works for your actual life.</p>
            </div>
          </div>

          <div className="bg-[#FAFAF9] border border-neutral-200 p-8 md:p-12 rounded-3xl">
            <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] mb-8 leading-tight">
              Simple Ways to Stay Hydrated
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[15px] text-[#2C3539]/80 leading-relaxed">
              <div>
                <h4 className="font-bold text-[#2C3539] mb-2">Keep fluids accessible</h4>
                <p>Carry a bottle and make drinking part of your normal routine.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#2C3539] mb-2">Sip regularly</h4>
                <p>If large amounts of fluid feel uncomfortable, especially when you're nauseous, try smaller amounts more frequently.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#2C3539] mb-2">Drink around your training</h4>
                <p>Increase attention to hydration before, during and after longer or higher-sweat sessions.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#2C3539] mb-2">Use food as part of the picture</h4>
                <p>Fluid also comes from foods such as fruit, vegetables, yoghurt, milk and soups.</p>
              </div>
              <div className="sm:col-span-2 bg-white p-5 rounded-xl border border-neutral-200">
                <h4 className="font-bold text-[#2C3539] mb-2">Don't automatically reach for electrolytes</h4>
                <p>Electrolyte products are tools, not requirements for everyone.</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-neutral-200 p-8 md:p-12 rounded-3xl">
            <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] mb-6 leading-tight">
              What Should I Look For in an Electrolyte Product?
            </h2>
            <div className="text-[16px] text-[#2C3539]/80 leading-relaxed space-y-4">
              <p>For normal daily use, you don't necessarily need one.</p>
              <p>For prolonged or high-sweat exercise, look for a product that clearly states its <strong className="font-medium text-[#2C3539]">sodium content per serving</strong>.</p>
              <p>Sodium is the electrolyte most directly relevant to replacing substantial sweat losses. Most people can obtain the potassium and magnesium they need through food. This calculator does not prescribe potassium or magnesium supplementation.</p>
              <div className="bg-[#FAFAF9] p-5 rounded-xl border border-neutral-200 text-[14px] mt-6">
                <p>For vomiting or diarrhoea, consider an appropriately formulated <strong className="font-medium text-[#2C3539]">oral rehydration solution</strong> rather than treating an ordinary sports/electrolyte drink as equivalent.</p>
              </div>
            </div>
          </div>

          {hasNausea && !hasSeriousGi && (
             <div className="bg-[#FAFAF9] border border-neutral-200 p-8 md:p-12 rounded-3xl">
               <h2 className="font-serif text-[24px] md:text-[28px] text-[#2C3539] mb-4 leading-tight">Hydration when you're feeling nauseous</h2>
               <div className="text-[15px] text-[#2C3539]/80 leading-relaxed space-y-4">
                 <p>Large amounts of fluid at once can be uncomfortable when you're feeling sick.</p>
                 <ul className="list-disc pl-5 space-y-2 marker:text-[#8A9A86]">
                   <li>Try small, frequent sips</li>
                   <li>Keep fluids cool if that feels better</li>
                   <li>Drink between meals if large drinks with meals feel uncomfortable</li>
                   <li>Choose fluids that you tolerate well</li>
                 </ul>
               </div>
             </div>
          )}

          <div className="bg-white border border-neutral-200 p-8 md:p-12 rounded-3xl">
            <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] mb-6 leading-tight">
              Signs You May Need More Fluid
            </h2>
            <div className="text-[16px] text-[#2C3539]/80 leading-relaxed space-y-6">
              <p>Encourage yourself to pay attention to practical signs such as:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 pl-5 list-disc marker:text-[#8A9A86] text-[15px]">
                <li>Dark yellow urine</li>
                <li>Urinating less often than usual</li>
                <li>Unusual thirst</li>
                <li>Dry mouth</li>
                <li>Headache</li>
                <li>Tiredness</li>
                <li>Dizziness or light-headedness</li>
              </ul>
              
              <div className="bg-[#1A1C1D] text-white p-6 rounded-2xl mt-8">
                <h4 className="font-serif text-[22px] mb-3">More water isn't always better.</h4>
                <p className="text-[15px] text-neutral-300">
                  Avoid encouraging yourself to force excessive amounts of fluid simply to reach a target. Very large amounts of water consumed quickly can be dangerous. The goal is to maintain appropriate hydration — not to drink as much water as possible.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50/50 border border-red-100 p-8 md:p-12 rounded-3xl">
            <h2 className="font-serif text-[24px] md:text-[28px] text-[#2C3539] mb-6 leading-tight">
              When to Get Medical Advice
            </h2>
            <div className="text-[15px] text-[#2C3539]/80 leading-relaxed space-y-6">
              <p>Seek medical advice if you report:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 pl-5 list-disc marker:text-red-400">
                <li>Persistent vomiting</li>
                <li>Inability to keep fluids down</li>
                <li>Significant or persistent diarrhoea</li>
                <li>Fainting</li>
                <li>Severe or persistent dizziness</li>
                <li>Confusion</li>
                <li>Very little urination</li>
                <li>Significant worsening of symptoms</li>
              </ul>
              <p className="pt-4 border-t border-red-100">Also recommend medical advice before deliberately increasing fluid or electrolyte intake if you have kidney disease, heart failure, significant hypertension, conditions affecting sodium or potassium balance, or take medications that materially affect fluid/electrolyte balance.</p>
            </div>
          </div>

          <div className="bg-[#FAFAF9] border border-neutral-200 p-8 rounded-3xl text-[13px] text-[#2C3539]/60 leading-relaxed text-center">
            <h4 className="font-bold text-[#2C3539] mb-3 uppercase tracking-wider text-[12px]">Disclaimer</h4>
            <p className="max-w-3xl mx-auto space-y-3">
              <span className="block">This calculator provides general educational information and an estimated starting point for daily fluid intake. It is not a medical diagnosis, prescription or personalised medical recommendation.</span>
              <span className="block">Individual fluid and electrolyte requirements vary according to body size, activity, exercise duration, environment, diet, gastrointestinal fluid losses, medical conditions and medications.</span>
              <span className="block">If you are experiencing significant vomiting, diarrhoea, dizziness, fainting, confusion or difficulty keeping fluids down, seek medical advice rather than relying on this calculator.</span>
            </p>
          </div>
          
        </div>

        {/* Resources & Sources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 border-t border-neutral-200 pt-16">
          <div className="md:col-span-2">
            <h3 className="font-serif text-[22px] text-[#2C3539] mb-6">Related WRK Resources</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link to="/tools/protein-calculator" className="block p-5 rounded-2xl bg-white border border-neutral-200 hover:border-[#8A9A86] transition-colors">
                <span className="block font-bold text-[14px] text-[#2C3539] mb-1">GLP-1 Protein Calculator</span>
                <span className="text-[13px] text-[#2C3539]/60">Understand your estimated daily protein target.</span>
              </Link>
              <Link to="/blog/strength-training" className="block p-5 rounded-2xl bg-white border border-neutral-200 hover:border-[#8A9A86] transition-colors">
                <span className="block font-bold text-[14px] text-[#2C3539] mb-1">GLP-1 Strength Training</span>
                <span className="text-[13px] text-[#2C3539]/60">Learn why resistance training matters during weight loss.</span>
              </Link>
              <Link to="/blog/low-appetite-nutrition" className="block p-5 rounded-2xl bg-white border border-neutral-200 hover:border-[#8A9A86] transition-colors">
                <span className="block font-bold text-[14px] text-[#2C3539] mb-1">GLP-1 Nutrition Guide</span>
                <span className="text-[13px] text-[#2C3539]/60">Practical strategies for eating well when appetite changes.</span>
              </Link>
              <Link to="/programs" className="block p-5 rounded-2xl bg-white border border-neutral-200 hover:border-[#8A9A86] transition-colors">
                <span className="block font-bold text-[14px] text-[#2C3539] mb-1">GLP-1 Fitness Programmes</span>
                <span className="text-[13px] text-[#2C3539]/60">Explore WRK's 12-week coaching pathways.</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-[22px] text-[#2C3539] mb-6">Sources & Further Reading</h3>
            <ul className="space-y-4 text-[13px] text-[#2C3539]/70">
              <li>Health New Zealand — Drinking enough fluids</li>
              <li>Health New Zealand — Dehydration</li>
              <li>American College of Sports Medicine — Hydration & Electrolytes</li>
              <li>Relevant official GLP-1 prescribing information</li>
              <li>WHO information on oral rehydration solutions</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};
