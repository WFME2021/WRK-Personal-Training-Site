import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Calculator, ArrowRight, ArrowLeft, RotateCcw, AlertCircle } from 'lucide-react';

const ACTIVITY_MULTIPLIERS = {
  sedentary: 1.20,
  lightlyActive: 1.375,
  moderatelyActive: 1.55,
  veryActive: 1.725,
  extremelyActive: 1.90,
};

const GOAL_MULTIPLIERS = {
  maintain: 0,
  gentleFatLoss: 0.10,
  moderateFatLoss: 0.15,
};

const PROTEIN_MULTIPLIERS = {
  none: 1.25,
  oneTwo: 1.40,
  threePlus: 1.60,
};

const MIN_FAT_G = 30;
const LOW_CALORIE_THRESHOLD = 1200;
const CURRENT_INTAKE_WARNING_THRESHOLD = 0.85; // warns if current intake is < 85% of maintenance
const COACHING_URL = '/programs';

type Sex = 'male' | 'female' | '';
type Activity = 'sedentary' | 'lightlyActive' | 'moderatelyActive' | 'veryActive' | 'extremelyActive' | '';
type Resistance = 'none' | 'oneTwo' | 'threePlus' | '';
type Goal = 'maintain' | 'gentleFatLoss' | 'moderateFatLoss' | '';
type Preference = 'balanced' | 'higherProtein' | 'lowerCarb' | '';
type CurrentIntakeChoice = 'yes' | 'no' | '';

export const TdeeCalculator: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const topRef = useRef<HTMLDivElement>(null);

  const [step, setStep] = useState<number>(1);
  const [sex, setSex] = useState<Sex>('');
  const [age, setAge] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [targetWeight, setTargetWeight] = useState<string>('');
  
  const [activity, setActivity] = useState<Activity>('');
  const [resistance, setResistance] = useState<Resistance>('');
  const [goal, setGoal] = useState<Goal>('');
  const [preference, setPreference] = useState<Preference>('');
  
  const [currentIntakeChoice, setCurrentIntakeChoice] = useState<CurrentIntakeChoice>('');
  const [meals, setMeals] = useState<string>('');
  const [currentIntake, setCurrentIntake] = useState<string>('');

  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState<string>('');

  // Results State
  const [results, setResults] = useState<any>(null);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    setError('');
    if (step === 1) {
      if (!sex) return setError('Please select your sex.');
      if (!age || isNaN(Number(age)) || Number(age) < 18 || Number(age) > 120) return setError('Please enter a valid age (18-120).');
      if (!height || isNaN(Number(height)) || Number(height) < 100 || Number(height) > 250) return setError('Please enter a valid height in cm (100-250).');
      if (!weight || isNaN(Number(weight)) || Number(weight) < 30 || Number(weight) > 300) return setError('Please enter a valid current weight in kg (30-300).');
      if (!targetWeight || isNaN(Number(targetWeight)) || Number(targetWeight) < 30 || Number(targetWeight) > 300) return setError('Please enter a valid target weight in kg.');
      
      if (Number(targetWeight) > Number(weight)) {
        setGoal('maintain');
      }
    }
    if (step === 2 && !activity) return setError('Please select your activity level.');
    if (step === 3 && !resistance) return setError('Please select your resistance training frequency.');
    if (step === 4 && !goal) return setError('Please select your goal.');
    if (step === 5 && !preference) return setError('Please select your nutrition preference.');
    if (step === 6 && (!meals || isNaN(Number(meals)) || Number(meals) < 1 || Number(meals) > 8)) return setError('Please enter a valid number of meals (1-8).');
    if (step === 7) {
      if (!currentIntakeChoice) return setError('Please select an option.');
      if (currentIntakeChoice === 'yes' && (!currentIntake || isNaN(Number(currentIntake)) || Number(currentIntake) < 500)) {
        return setError('Please enter a valid daily calorie intake.');
      }
      calculateResults();
      return;
    }
    
    setStep(s => s + 1);
    scrollToTop();
  };

  const calculateResults = () => {
    const w = Number(weight);
    const h = Number(height);
    const a = Number(age);
    const tw = Number(targetWeight);

    let bmr = 0;
    if (sex === 'male') {
      bmr = (10 * w) + (6.25 * h) - (5 * a) + 5;
    } else {
      bmr = (10 * w) + (6.25 * h) - (5 * a) - 161;
    }

    const tdee = bmr * ACTIVITY_MULTIPLIERS[activity as keyof typeof ACTIVITY_MULTIPLIERS];
    
    const deficitPercentage = GOAL_MULTIPLIERS[goal as keyof typeof GOAL_MULTIPLIERS];
    const targetCaloriesUnrounded = tdee * (1 - deficitPercentage);
    const targetCaloriesRounded = Math.round(targetCaloriesUnrounded / 10) * 10;

    // Protein from TARGET weight
    let proteinGrams = Math.round(PROTEIN_MULTIPLIERS[resistance as keyof typeof PROTEIN_MULTIPLIERS] * tw);
    const eatingOccasions = Number(meals);
    
    // Per-meal floor check
    if (proteinGrams / eatingOccasions < 25) {
      proteinGrams = 25 * eatingOccasions;
    }
    const proteinCals = proteinGrams * 4;

    const minProteinGrams = Math.round(1.2 * tw);
    const maxProteinGrams = Math.round(1.6 * tw);

    let fatCals = 0;
    if (preference === 'balanced') {
      fatCals = targetCaloriesRounded * 0.30;
    } else if (preference === 'higherProtein') {
      fatCals = targetCaloriesRounded * 0.25;
    } else if (preference === 'lowerCarb') {
      fatCals = targetCaloriesRounded - proteinCals - (targetCaloriesRounded * 0.20);
    }

    // Fat minimum enforcement
    const minFatCals = MIN_FAT_G * 9;
    if (fatCals < minFatCals) {
      fatCals = minFatCals;
    }

    // Carbs are flexible remainder
    let carbCals = targetCaloriesRounded - proteinCals - fatCals;

    // Mathematical impossibility check
    if (carbCals < 0) {
      setError('Your calorie target is too low to support the required protein and minimum fat targets. Please consider a smaller calorie deficit or fewer eating occasions.');
      setShowResults(false);
      return;
    }

    const fatGrams = Math.round(fatCals / 9);
    const carbGrams = Math.round(carbCals / 4);

    // Exact reconciliation
    const finalTargetCals = (proteinGrams * 4) + (carbGrams * 4) + (fatGrams * 9);

    setResults({
      tdee: Math.round(tdee / 10) * 10,
      targetCalories: finalTargetCals,
      protein: proteinGrams,
      minProtein: minProteinGrams,
      maxProtein: maxProteinGrams,
      fat: fatGrams,
      carbs: carbGrams,
      deficitPercentage,
      meals: eatingOccasions,
    });
    
    setShowResults(true);
    scrollToTop();
  };

  const resetCalculator = () => {
    setStep(1);
    setSex('');
    setAge('');
    setHeight('');
    setWeight('');
    setTargetWeight('');
    setActivity('');
    setResistance('');
    setGoal('');
    setPreference('');
    setCurrentIntakeChoice('');
    setCurrentIntake('');
    setMeals('');
    setShowResults(false);
    setResults(null);
    scrollToTop();
  };

  if (showResults && results) {
    return (
      <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-12" ref={topRef}>
        <SeoHead 
          title="GLP-1 Calorie & Macro Calculator | WRK Personal Training"
          description="Use our GLP-1 Calorie & Macro Calculator to estimate your daily energy needs and personalize your protein, carbohydrate, and fat targets during weight loss."
        />
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          
          <div className="text-center mb-16">
            <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-4 uppercase tracking-wide">
              YOUR RESULTS
            </h1>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-neutral-200 mb-12 text-center">
            <h2 className="text-[14px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-4">ESTIMATED MAINTENANCE</h2>
            <div className="font-serif text-[48px] md:text-[64px] leading-none text-[#2C3539] mb-4">
              {results.tdee.toLocaleString()} <span className="text-[24px] text-[#2C3539]/60 font-sans">kcal/day</span>
            </div>
            <p className="text-[16px] text-[#2C3539]/80 leading-relaxed max-w-xl mx-auto">
              This is your estimated daily energy requirement based on your current body size, age and activity level.
            </p>
          </div>

          <div className="bg-[#1A1C1D] text-white rounded-3xl p-8 md:p-12 shadow-sm mb-12 text-center border border-neutral-800">
            <h2 className="text-[14px] font-bold uppercase tracking-wider text-neutral-400 mb-4">YOUR SUGGESTED STARTING INTAKE</h2>
            <div className="font-serif text-[48px] md:text-[64px] leading-none text-[#8A9A86] mb-4">
              {results.targetCalories.toLocaleString()} <span className="text-[24px] text-neutral-400 font-sans">kcal/day</span>
            </div>
            <p className="text-[16px] text-neutral-300 leading-relaxed max-w-xl mx-auto mb-10">
              {goal === 'maintain' && "Based on a maintenance approach, this matches your estimated energy requirement."}
              {goal === 'gentleFatLoss' && "Based on a gentle fat-loss approach, this is approximately 10% below your estimated maintenance."}
              {goal === 'moderateFatLoss' && "Based on a moderate fat-loss approach, this is approximately 15% below your estimated maintenance."}
            </p>

            <h3 className="text-[14px] font-bold uppercase tracking-wider text-neutral-400 mb-6">YOUR DAILY TARGETS</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="text-[12px] uppercase tracking-wider text-neutral-400 mb-2 font-bold">Calories</div>
                <div className="text-[24px] font-serif">{results.targetCalories}</div>
              </div>
              <div className="bg-[#8A9A86]/20 border border-[#8A9A86]/30 rounded-2xl p-4 text-[#8A9A86]">
                <div className="text-[12px] uppercase tracking-wider text-[#8A9A86]/80 mb-2 font-bold">Protein</div>
                <div className="text-[24px] font-serif">{results.protein} g</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="text-[12px] uppercase tracking-wider text-neutral-400 mb-2 font-bold">Carbs</div>
                <div className="text-[24px] font-serif">{results.carbs} g</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="text-[12px] uppercase tracking-wider text-neutral-400 mb-2 font-bold">Fat</div>
                <div className="text-[24px] font-serif">{results.fat} g</div>
              </div>
            </div>
          </div>

          {/* GLP-1 Important Message */}
          <div className="bg-[#FAFAF9] border border-neutral-200 p-8 md:p-10 rounded-3xl mb-12">
            <h2 className="font-serif text-[26px] md:text-[30px] text-[#2C3539] mb-4">
              Your numbers are a starting point — not a prescription.
            </h2>
            <div className="text-[15px] md:text-[16px] text-[#2C3539]/80 leading-relaxed space-y-4">
              <p>GLP-1 medications can change appetite, food intake and tolerance for different foods.</p>
              <p>Your calculated calorie requirement does not mean you need to force yourself to eat a particular number every day.</p>
              <p>Pay attention to your:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#8A9A86]">
                <li>energy</li>
                <li>training performance</li>
                <li>recovery</li>
                <li>appetite</li>
                <li>protein intake</li>
                <li>bodyweight trend</li>
                <li>rate of weight change</li>
              </ul>
              <p className="pt-2 font-medium">If you're struggling to eat enough, experiencing significant gastrointestinal symptoms or losing weight very rapidly, speak with your healthcare professional.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Protein Priority */}
            <div className="bg-white border border-neutral-200 p-8 md:p-10 rounded-3xl shadow-sm">
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-3">Your protein priority</h3>
              <div className="font-serif text-[36px] text-[#2C3539] mb-4">{results.protein} g/day</div>
              <p className="text-[15px] text-[#2C3539]/80 leading-relaxed mb-6">
                Your daily protein target is prioritised to support muscle retention during weight loss. We've also set a practical minimum of 25 g protein per eating occasion so your protein is distributed meaningfully across the day. The remaining calories are allocated between fat and carbohydrates.
              </p>
              <div className="bg-[#FAFAF9] rounded-2xl p-5 border border-neutral-200">
                <p className="text-[13px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-3">PER-MEAL PROTEIN GUIDE:</p>
                <div className="text-[24px] font-serif text-[#2C3539] mb-1">
                  {Math.round(results.protein / results.meals)} g target
                </div>
                {Math.round(results.protein / results.meals) > 25 ? (
                  <p className="text-[14px] text-[#2C3539]/70 mb-4">per eating occasion (25 g minimum floor)</p>
                ) : (
                  <p className="text-[14px] text-[#2C3539]/70 mb-4">per eating occasion (minimum floor)</p>
                )}
                
                <ul className="space-y-2 text-[14px] text-[#2C3539] pt-4 border-t border-neutral-200">
                  {Array.from({ length: results.meals }).map((_, idx) => {
                    const isLast = idx === results.meals - 1;
                    const baseAmount = Math.floor(results.protein / results.meals);
                    const amount = isLast ? results.protein - (baseAmount * (results.meals - 1)) : baseAmount;
                    return (
                      <li key={idx} className="flex justify-between">
                        <span>Meal {idx + 1}</span>
                        <span className="font-medium">{amount} g</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Nutrition Approach */}
            <div className="bg-white border border-neutral-200 p-8 md:p-10 rounded-3xl shadow-sm flex flex-col">
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-3">Your nutrition approach</h3>
              
              <div className="text-[16px] text-[#2C3539]/80 leading-relaxed space-y-4 flex-grow mt-2">
                {preference === 'balanced' && (
                  <p>You've selected <strong className="font-medium text-[#2C3539]">Balanced</strong>. Your protein target has been prioritised, with carbohydrate and fat distributed around your calorie target.</p>
                )}
                {preference === 'higherProtein' && (
                  <p>You've selected <strong className="font-medium text-[#2C3539]">Higher Protein</strong>. Your protein target has been prioritised towards the higher end of the WRK educational range, with carbohydrate and fat adjusted around your calorie target.</p>
                )}
                {preference === 'lowerCarb' && (
                  <p>You've selected <strong className="font-medium text-[#2C3539]">Lower Carb</strong>. Your protein target remains prioritised while carbohydrate is moderately reduced and the remaining calories are allocated primarily to fat.</p>
                )}
                <div className="bg-[#FAFAF9] rounded-2xl p-5 border border-neutral-200 mt-6">
                  <p className="text-[13px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-2">WRK Protein Range:</p>
                  <p className="text-[14px] text-[#2C3539]">Your target sits within the suggested educational range of <strong className="font-medium">{results.minProtein}g – {results.maxProtein}g</strong> for your target bodyweight.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Warnings */}
          {results.targetCalories < LOW_CALORIE_THRESHOLD && (
            <div className="bg-red-50/50 border border-red-100 p-8 md:p-10 rounded-3xl mb-12 flex items-start gap-4">
              <AlertCircle className="text-red-400 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-serif text-[22px] text-[#2C3539] mb-2">Your calculated intake is quite low.</h3>
                <div className="text-[15px] text-[#2C3539]/80 leading-relaxed space-y-3">
                  <p>Because GLP-1 medications can substantially reduce appetite and food intake, eating less isn't necessarily better.</p>
                  <p>Adequate protein, fibre, micronutrients and overall nutrition remain important during weight loss.</p>
                  <p>If you're struggling to eat enough, experiencing significant gastrointestinal symptoms or losing weight very rapidly, speak with your healthcare professional.</p>
                </div>
              </div>
            </div>
          )}

          {currentIntakeChoice === 'yes' && currentIntake && Number(currentIntake) < (results.tdee * CURRENT_INTAKE_WARNING_THRESHOLD) && (
            <div className="bg-blue-50/50 border border-blue-100 p-8 md:p-10 rounded-3xl mb-12">
              <h3 className="font-serif text-[22px] text-[#2C3539] mb-4">Your current intake is already considerably below your estimated maintenance.</h3>
              <div className="text-[15px] text-[#2C3539]/80 leading-relaxed space-y-3">
                <p>Because GLP-1 medications can substantially reduce appetite and food intake, creating an even larger calorie deficit may not be the priority.</p>
                <p className="font-medium text-[#2C3539]">Focus first on adequate protein, nutrient-dense foods, hydration, recovery and maintaining your strength training.</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-[14px]">
                <div className="bg-white px-4 py-2 border border-blue-200 rounded-lg">Estimated maintenance: <strong className="ml-1">{results.tdee} kcal</strong></div>
                <div className="bg-white px-4 py-2 border border-blue-200 rounded-lg">Current intake: <strong className="ml-1">{currentIntake} kcal</strong></div>
              </div>
            </div>
          )}

          {/* Final CTA */}
          <div className="text-center bg-white border border-neutral-200 p-10 md:p-16 rounded-3xl shadow-sm mb-12">
            <h2 className="text-[14px] font-bold uppercase tracking-widest text-[#8A9A86] mb-4">
              THE CALCULATOR GIVES YOU THE NUMBERS. WRK HELPS YOU TURN THEM INTO A ROUTINE.
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#2C3539]/80 leading-relaxed max-w-2xl mx-auto mb-10">
              Learn how to build meals around your protein target, train to protect your strength and adapt your routine as your GLP-1 journey changes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to={COACHING_URL} className="w-full sm:w-auto bg-[#8A9A86] hover:bg-[#768672] text-white px-8 py-4 rounded-xl font-medium transition-colors text-[16px]">
                Explore GLP-1 Coaching
              </Link>
              <button onClick={resetCalculator} className="w-full sm:w-auto bg-white border border-neutral-200 hover:border-[#8A9A86] text-[#2C3539] px-8 py-4 rounded-xl font-medium transition-colors text-[16px] flex items-center justify-center">
                <RotateCcw size={18} className="mr-2"/> Recalculate
              </button>
            </div>
          </div>

          <div className="text-center text-[12px] md:text-[13px] text-neutral-400 leading-relaxed mb-12 max-w-4xl mx-auto border-t border-neutral-200 pt-10">
            <h4 className="font-bold uppercase tracking-wider mb-2">Disclaimer</h4>
            <p className="mb-2">This calculator provides general educational estimates only. It is not medical or nutritional advice and does not replace advice from your healthcare professional or a qualified nutrition professional.</p>
            <p className="mb-2">Energy requirements vary between individuals and the calculator provides an estimate rather than an exact requirement.</p>
            <p className="mb-2">If you have a medical condition, are pregnant or breastfeeding, have a history of an eating disorder, have kidney disease or have been advised to follow an individualised diet, seek appropriate professional advice before using these targets.</p>
            <p>If you're using a GLP-1 medication and are experiencing significant nausea, vomiting, difficulty eating or drinking, or unusually rapid weight loss, speak with your healthcare professional.</p>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-12" ref={topRef}>
      <SeoHead 
        title="GLP-1 Calorie & Macro Calculator | WRK Personal Training"
        description="Use our GLP-1 Calorie & Macro Calculator to estimate your daily energy needs and personalize your protein, carbohydrate, and fat targets during weight loss."
      />

      <div className="max-w-3xl mx-auto px-4 md:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-[13px] font-medium text-[#2C3539]/60 mb-8 max-w-3xl mx-auto">
          <Link to="/" className="hover:text-[#8A9A86] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/tools" className="hover:text-[#8A9A86] transition-colors">Tools</Link>
          <span className="mx-2">/</span>
          <span className="text-[#2C3539]">Macro Calculator</span>
        </nav>

        {step === 1 && (
          <header className="text-center mb-16">
            <div className="w-16 h-16 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mx-auto mb-6">
              <Calculator size={32} />
            </div>
            <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
              GLP-1 <span className="wrk-highlight">Calorie</span> & Macro Calculator
            </h1>
            <h2 className="font-serif text-[24px] md:text-[28px] text-[#2C3539]/80 mb-6 max-w-2xl mx-auto">
              Estimate your energy needs, set a sensible calorie target and build your macros around protein, strength and sustainable fat loss.
            </h2>
            <div className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/80 space-y-4 max-w-2xl mx-auto">
              <p>Your calorie needs don't suddenly become irrelevant when you start a GLP-1. But appetite, food intake and your ability to maintain adequate nutrition can change significantly.</p>
            </div>
          </header>
        )}

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-neutral-200 mb-24 relative overflow-hidden">
          
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-neutral-100">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#8A9A86]">Step {step} of 7</span>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5, 6, 7].map(i => (
                <div key={i} className={`h-2 rounded-full transition-all duration-300 ${step >= i ? 'w-8 bg-[#8A9A86]' : 'w-4 bg-neutral-100'}`} />
              ))}
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl mb-6 text-[14px] flex items-center">
              <AlertCircle size={16} className="mr-2 shrink-0"/> {error}
            </div>
          )}

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] mb-2">About You</h2>
              <p className="text-[15px] text-[#2C3539]/70 mb-8">Used to calculate your basal metabolic rate.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-[14px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-3">Sex</label>
                  <div className="grid grid-cols-2 gap-4">
                    {['male', 'female'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setSex(opt as Sex)}
                        className={`h-14 border rounded-xl font-medium transition-all capitalize text-[15px] ${sex === opt ? 'border-[#8A9A86] bg-[#8A9A86]/5 text-[#2C3539]' : 'border-neutral-200 text-[#2C3539]/70 hover:border-neutral-300'}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-3">Age (years)</label>
                  <input type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="e.g. 40" className="w-full h-14 px-5 bg-[#FAFAF9] border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#8A9A86] outline-none text-[16px] font-medium text-[#2C3539] transition-all" />
                </div>
                <div>
                  <label className="block text-[14px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-3">Height (cm)</label>
                  <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="e.g. 175" className="w-full h-14 px-5 bg-[#FAFAF9] border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#8A9A86] outline-none text-[16px] font-medium text-[#2C3539] transition-all" />
                </div>
                <div>
                  <label className="block text-[14px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-3">Current Bodyweight (kg)</label>
                  <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="e.g. 90" className="w-full h-14 px-5 bg-[#FAFAF9] border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#8A9A86] outline-none text-[16px] font-medium text-[#2C3539] transition-all" />
                </div>
                <div>
                  <label className="block text-[14px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-3">Target Bodyweight (kg)</label>
                  <input type="number" value={targetWeight} onChange={e => setTargetWeight(e.target.value)} placeholder="e.g. 75" className="w-full h-14 px-5 bg-[#FAFAF9] border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#8A9A86] outline-none text-[16px] font-medium text-[#2C3539] transition-all" />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] mb-8">How active are you on an average week?</h2>
              
              <div className="space-y-4">
                {[
                  { id: 'sedentary', title: 'Sedentary', desc: 'Little structured exercise and mostly sitting during the day.' },
                  { id: 'lightlyActive', title: 'Lightly Active', desc: 'Light exercise or an active lifestyle around 1–3 days per week.' },
                  { id: 'moderatelyActive', title: 'Moderately Active', desc: 'Moderate exercise around 3–5 days per week.' },
                  { id: 'veryActive', title: 'Very Active', desc: 'Hard exercise most days of the week.' },
                  { id: 'extremelyActive', title: 'Extremely Active', desc: 'Very high training volume and/or a physically demanding occupation.' },
                ].map(opt => (
                  <button 
                    key={opt.id} 
                    onClick={() => setActivity(opt.id as Activity)}
                    className={`w-full text-left p-6 border rounded-2xl transition-all ${activity === opt.id ? 'border-[#8A9A86] bg-[#8A9A86]/5' : 'border-neutral-200 hover:border-neutral-300 bg-[#FAFAF9]'}`}
                  >
                    <div className="flex items-start">
                      <div className={`w-5 h-5 rounded-full border-2 mt-0.5 mr-4 flex items-center justify-center shrink-0 ${activity === opt.id ? 'border-[#8A9A86]' : 'border-neutral-300'}`}>
                        {activity === opt.id && <div className="w-2.5 h-2.5 bg-[#8A9A86] rounded-full" />}
                      </div>
                      <div>
                        <div className={`font-bold uppercase tracking-wider text-[13px] mb-1 ${activity === opt.id ? 'text-[#8A9A86]' : 'text-[#2C3539]/70'}`}>{opt.title}</div>
                        <div className="text-[15px] text-[#2C3539]">{opt.desc}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] mb-2">How often are you currently doing resistance training?</h2>
              <p className="text-[15px] text-[#2C3539]/70 mb-8">This helps calculate an appropriate protein target for your goals.</p>
              
              <div className="space-y-4">
                {[
                  { id: 'none', title: 'None / Minimal', desc: 'Little or no resistance training.' },
                  { id: 'oneTwo', title: '1–2 Sessions', desc: 'Resistance training 1–2 times per week.' },
                  { id: 'threePlus', title: '3+ Sessions', desc: 'Progressive resistance training 3 or more times per week.' },
                ].map(opt => (
                  <button 
                    key={opt.id} 
                    onClick={() => setResistance(opt.id as Resistance)}
                    className={`w-full text-left p-6 border rounded-2xl transition-all ${resistance === opt.id ? 'border-[#8A9A86] bg-[#8A9A86]/5' : 'border-neutral-200 hover:border-neutral-300 bg-[#FAFAF9]'}`}
                  >
                    <div className="flex items-start">
                      <div className={`w-5 h-5 rounded-full border-2 mt-0.5 mr-4 flex items-center justify-center shrink-0 ${resistance === opt.id ? 'border-[#8A9A86]' : 'border-neutral-300'}`}>
                        {resistance === opt.id && <div className="w-2.5 h-2.5 bg-[#8A9A86] rounded-full" />}
                      </div>
                      <div>
                        <div className={`font-bold uppercase tracking-wider text-[13px] mb-1 ${resistance === opt.id ? 'text-[#8A9A86]' : 'text-[#2C3539]/70'}`}>{opt.title}</div>
                        <div className="text-[15px] text-[#2C3539]">{opt.desc}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] mb-8">What is your current goal?</h2>
              
              {Number(targetWeight) > Number(weight) && (
                <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl mb-6 text-[14px] text-amber-800">
                  Because your target weight is higher than your current weight, the fat-loss options have been disabled. A maintenance approach is recommended as a starting point.
                </div>
              )}

              <div className="space-y-4">
                {[
                  { id: 'maintain', title: 'Maintain', desc: 'Maintain your current bodyweight.' },
                  { id: 'gentleFatLoss', title: 'Gentle Fat Loss', desc: 'A smaller calorie reduction for a slower, sustainable approach.', disabled: Number(targetWeight) > Number(weight) },
                  { id: 'moderateFatLoss', title: 'Moderate Fat Loss', desc: 'A moderate calorie reduction as a starting point for fat loss.', disabled: Number(targetWeight) > Number(weight) },
                ].map(opt => (
                  <button 
                    key={opt.id} 
                    onClick={() => !opt.disabled && setGoal(opt.id as Goal)}
                    disabled={opt.disabled}
                    className={`w-full text-left p-6 border rounded-2xl transition-all ${opt.disabled ? 'opacity-50 cursor-not-allowed bg-neutral-50 border-neutral-100' : goal === opt.id ? 'border-[#8A9A86] bg-[#8A9A86]/5' : 'border-neutral-200 hover:border-neutral-300 bg-[#FAFAF9]'}`}
                  >
                    <div className="flex items-start">
                      <div className={`w-5 h-5 rounded-full border-2 mt-0.5 mr-4 flex items-center justify-center shrink-0 ${goal === opt.id ? 'border-[#8A9A86]' : 'border-neutral-300'}`}>
                        {goal === opt.id && <div className="w-2.5 h-2.5 bg-[#8A9A86] rounded-full" />}
                      </div>
                      <div>
                        <div className={`font-bold uppercase tracking-wider text-[13px] mb-1 ${goal === opt.id ? 'text-[#8A9A86]' : 'text-[#2C3539]/70'}`}>{opt.title}</div>
                        <div className="text-[15px] text-[#2C3539]">{opt.desc}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] mb-8">How would you prefer to structure your macros?</h2>
              
              <div className="space-y-4">
                {[
                  { id: 'balanced', title: 'Balanced', desc: 'Protein is prioritised, with a relatively balanced intake of carbohydrate and fat.' },
                  { id: 'higherProtein', title: 'Higher Protein', desc: 'Protein is prioritised towards the higher end of the recommended range, particularly useful for people focused on strength training.' },
                  { id: 'lowerCarb', title: 'Lower Carb', desc: 'Carbohydrate is moderately reduced, with calories redistributed primarily towards protein and fat.' },
                ].map(opt => (
                  <button 
                    key={opt.id} 
                    onClick={() => setPreference(opt.id as Preference)}
                    className={`w-full text-left p-6 border rounded-2xl transition-all ${preference === opt.id ? 'border-[#8A9A86] bg-[#8A9A86]/5' : 'border-neutral-200 hover:border-neutral-300 bg-[#FAFAF9]'}`}
                  >
                    <div className="flex items-start">
                      <div className={`w-5 h-5 rounded-full border-2 mt-0.5 mr-4 flex items-center justify-center shrink-0 ${preference === opt.id ? 'border-[#8A9A86]' : 'border-neutral-300'}`}>
                        {preference === opt.id && <div className="w-2.5 h-2.5 bg-[#8A9A86] rounded-full" />}
                      </div>
                      <div>
                        <div className={`font-bold uppercase tracking-wider text-[13px] mb-1 ${preference === opt.id ? 'text-[#8A9A86]' : 'text-[#2C3539]/70'}`}>{opt.title}</div>
                        <div className="text-[15px] text-[#2C3539]">{opt.desc}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 6 */}
          {step === 6 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] mb-8">How many eating occasions (meals or snacks) do you typically have per day?</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-[14px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-3">Number of meals/snacks</label>
                  <input type="number" value={meals} onChange={e => setMeals(e.target.value)} placeholder="e.g. 3" className="w-full h-14 px-5 bg-[#FAFAF9] border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#8A9A86] outline-none text-[16px] font-medium text-[#2C3539] transition-all" />
                </div>
              </div>
            </div>
          )}

          {/* STEP 7 */}
          {step === 7 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] mb-8">Do you know roughly how many calories you're currently eating each day?</h2>
              
              <div className="space-y-4">
                <button 
                  onClick={() => setCurrentIntakeChoice('yes')}
                  className={`w-full text-left p-6 border rounded-2xl transition-all ${currentIntakeChoice === 'yes' ? 'border-[#8A9A86] bg-[#8A9A86]/5' : 'border-neutral-200 hover:border-neutral-300 bg-[#FAFAF9]'}`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center shrink-0 ${currentIntakeChoice === 'yes' ? 'border-[#8A9A86]' : 'border-neutral-300'}`}>
                      {currentIntakeChoice === 'yes' && <div className="w-2.5 h-2.5 bg-[#8A9A86] rounded-full" />}
                    </div>
                    <div className="font-bold uppercase tracking-wider text-[13px] text-[#2C3539]">Yes — I know my average intake</div>
                  </div>
                </button>
                
                {currentIntakeChoice === 'yes' && (
                  <div className="pl-14 pr-6 pb-6 animate-in fade-in duration-300">
                    <label className="block text-[14px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-3">Average calories per day</label>
                    <input type="number" value={currentIntake} onChange={e => setCurrentIntake(e.target.value)} placeholder="e.g. 1800" className="w-full h-14 px-5 bg-white border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#8A9A86] outline-none text-[16px] font-medium text-[#2C3539] transition-all" />
                  </div>
                )}

                <button 
                  onClick={() => {
                    setCurrentIntakeChoice('no');
                    setCurrentIntake('');
                  }}
                  className={`w-full text-left p-6 border rounded-2xl transition-all ${currentIntakeChoice === 'no' ? 'border-[#8A9A86] bg-[#8A9A86]/5' : 'border-neutral-200 hover:border-neutral-300 bg-[#FAFAF9]'}`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center shrink-0 ${currentIntakeChoice === 'no' ? 'border-[#8A9A86]' : 'border-neutral-300'}`}>
                      {currentIntakeChoice === 'no' && <div className="w-2.5 h-2.5 bg-[#8A9A86] rounded-full" />}
                    </div>
                    <div className="font-bold uppercase tracking-wider text-[13px] text-[#2C3539]">No — skip this step</div>
                  </div>
                </button>
              </div>
            </div>
          )}

          <div className="mt-10 pt-8 border-t border-neutral-100 flex items-center justify-between">
            {step > 1 ? (
              <button 
                onClick={() => setStep(s => s - 1)}
                className="h-12 px-6 rounded-xl border border-neutral-200 text-[#2C3539] font-medium transition-colors hover:bg-neutral-50 flex items-center"
              >
                <ArrowLeft size={18} className="mr-2" /> Back
              </button>
            ) : <div />}
            
            <button 
              onClick={handleNext}
              className="h-12 px-8 rounded-xl bg-[#8A9A86] text-white font-medium transition-colors hover:bg-[#768672] flex items-center"
            >
              {step === 7 ? 'Calculate Results' : 'Continue'} <ArrowRight size={18} className="ml-2" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
