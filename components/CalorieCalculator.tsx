import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Lock, Unlock, Info, ChevronDown, ChevronUp, Beer, Flame, Dumbbell, Clock, GlassWater, LineChart, ArrowRight } from 'lucide-react';

export const CalorieCalculator: React.FC = () => {
  // --- STATE ---
  const [stats, setStats] = useState({
    gender: 'male',
    age: 30,
    height: 175, // cm
    weight: 80, // kg
    targetWeight: 80, // kg
    activity: 1.375,
    goal: 'maintenance', // maintenance, gain, recomp
    proteinTier: 1.5, // 1.0, 1.5, 2.0
    alcoholDrinks: 0 // weekly drinks
  });

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- CALCULATIONS ---
  const calculateMacros = () => {
    // 1. BMR (Mifflin-St Jeor)
    let bmr = (10 * stats.weight) + (6.25 * stats.height) - (5 * stats.age);
    bmr += stats.gender === 'male' ? 5 : -161;

    // 2. TDEE
    let tdee = bmr * stats.activity;

    // 3. Goal Adjustment
    let targetCals = tdee;
    if (stats.goal === 'gain') targetCals += 300;
    // Recomp stays at TDEE (maintenance) per instructions, utilizing high protein

    // 4. Macro Logic
    // Protein: Based on TARGET weight
    const proteinGrams = stats.targetWeight * stats.proteinTier;
    const proteinCals = proteinGrams * 4;

    // Fats: Fixed at 20% of TOTAL calories
    let fatCals = targetCals * 0.20;
    
    // Alcohol Deduction (Party Fund)
    // 130 cals per drink average
    const weeklyAlcoholCals = stats.alcoholDrinks * 130;
    const dailyAlcoholCals = weeklyAlcoholCals / 7;

    // Carbs: Remainder
    let carbCals = targetCals - proteinCals - fatCals - dailyAlcoholCals;

    // Safety check: if carbs < 0, eat into fats
    if (carbCals < 0) {
      fatCals += carbCals; // reduce fats (carbCals is negative)
      carbCals = 0;
    }

    const fatGrams = fatCals / 9;
    const carbGrams = carbCals / 4;

    return {
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      totalCals: Math.round(targetCals),
      protein: { grams: Math.round(proteinGrams), cals: Math.round(proteinCals) },
      fats: { grams: Math.round(fatGrams), cals: Math.round(fatCals) },
      carbs: { grams: Math.round(carbGrams), cals: Math.round(carbCals) },
      alcohol: { dailyCals: Math.round(dailyAlcoholCals) }
    };
  };

  const results = calculateMacros();

  // --- HANDLERS ---
  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsUnlocked(true);
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: any) => {
    setStats(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-brand-black text-white rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
      
      {/* Header */}
      <div className="p-8 md:p-12 border-b border-white/10 bg-brand-black">
        <div className="flex items-center gap-3 mb-4">
          <Flame className="text-brand-orange" size={28} />
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter">Nutrition Engine</h2>
        </div>
        <p className="text-gray-400 max-w-2xl">
          Fueling for performance, not starvation. Adjust your inputs to see how your daily targets change based on your goal and lifestyle.
        </p>
      </div>

      <div className="grid lg:grid-cols-2">
        
        {/* LEFT COLUMN: INPUTS */}
        <div className="p-8 md:p-12 bg-white/5 border-r border-white/10 space-y-8">
          
          {/* Section 1: Biometrics */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-widest text-brand-orange mb-4">1. Biometrics</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Gender</label>
                <div className="flex bg-brand-black rounded-lg p-1 border border-white/10">
                  <button 
                    onClick={() => handleChange('gender', 'male')}
                    className={`flex-1 py-2 text-xs font-bold uppercase rounded-md transition-colors ${stats.gender === 'male' ? 'bg-white text-brand-black' : 'text-gray-500 hover:text-white'}`}
                  >
                    Male
                  </button>
                  <button 
                    onClick={() => handleChange('gender', 'female')}
                    className={`flex-1 py-2 text-xs font-bold uppercase rounded-md transition-colors ${stats.gender === 'female' ? 'bg-white text-brand-black' : 'text-gray-500 hover:text-white'}`}
                  >
                    Female
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Age</label>
                <input 
                  type="number" 
                  value={stats.age} 
                  onChange={(e) => handleChange('age', Number(e.target.value))}
                  className="w-full bg-brand-black border border-white/10 rounded-lg p-3 text-white focus:border-brand-orange outline-none transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Height (cm)</label>
                <input 
                  type="number" 
                  value={stats.height} 
                  onChange={(e) => handleChange('height', Number(e.target.value))}
                  className="w-full bg-brand-black border border-white/10 rounded-lg p-3 text-white focus:border-brand-orange outline-none transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Weight (kg)</label>
                <input 
                  type="number" 
                  value={stats.weight} 
                  onChange={(e) => handleChange('weight', Number(e.target.value))}
                  className="w-full bg-brand-black border border-white/10 rounded-lg p-3 text-white focus:border-brand-orange outline-none transition-colors font-mono"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Goals & Activity */}
          <div className="space-y-4">
             <h3 className="font-bold text-sm uppercase tracking-widest text-brand-orange mb-4">2. Variables</h3>
             
             <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Activity Level</label>
                <select 
                  value={stats.activity}
                  onChange={(e) => handleChange('activity', Number(e.target.value))}
                  className="w-full bg-brand-black border border-white/10 rounded-lg p-3 text-white focus:border-brand-orange outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value={1.2}>Sedentary (Office job, little exercise)</option>
                  <option value={1.375}>Lightly Active (1-3 days/week)</option>
                  <option value={1.55}>Moderately Active (3-5 days/week)</option>
                  <option value={1.725}>Very Active (6-7 days/week)</option>
                  <option value={1.9}>Extra Active (Physical job + training)</option>
                </select>
             </div>

             <div className="grid grid-cols-2 gap-4">
               <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Goal</label>
                  <select 
                    value={stats.goal}
                    onChange={(e) => handleChange('goal', e.target.value)}
                    className="w-full bg-brand-black border border-white/10 rounded-lg p-3 text-white focus:border-brand-orange outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="maintenance">Maintenance</option>
                    <option value="recomp">Body Recomposition</option>
                    <option value="gain">Muscle Gain (+300)</option>
                  </select>
               </div>
               <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Protein Tier</label>
                  <select 
                    value={stats.proteinTier}
                    onChange={(e) => handleChange('proteinTier', Number(e.target.value))}
                    className="w-full bg-brand-black border border-white/10 rounded-lg p-3 text-white focus:border-brand-orange outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value={1.0}>1.0g/kg (Standard)</option>
                    <option value={1.5}>1.5g/kg (Active)</option>
                    <option value={2.0}>2.0g/kg (Athlete)</option>
                  </select>
               </div>
             </div>
             
             <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Target Weight (kg)</label>
                <input 
                  type="number" 
                  value={stats.targetWeight} 
                  onChange={(e) => handleChange('targetWeight', Number(e.target.value))}
                  className="w-full bg-brand-black border border-white/10 rounded-lg p-3 text-white focus:border-brand-orange outline-none transition-colors font-mono"
                  placeholder="For protein calc"
                />
                <p className="text-[10px] text-gray-500 mt-1">Protein is calculated based on this weight.</p>
             </div>
          </div>

          {/* Section 3: The Party Fund */}
          <div className="bg-brand-black p-6 rounded-xl border border-white/10">
             <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 text-brand-orange">
                  <Beer size={18} />
                  <h3 className="font-bold text-xs uppercase tracking-widest">Party Fund</h3>
                </div>
                <span className="text-xl font-bold font-mono">{stats.alcoholDrinks} <span className="text-xs text-gray-500 font-sans font-normal uppercase">Drinks/Wk</span></span>
             </div>
             
             <input 
               type="range" 
               min="0" 
               max="15" 
               step="1"
               value={stats.alcoholDrinks}
               onChange={(e) => handleChange('alcoholDrinks', Number(e.target.value))}
               className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-orange"
             />
             <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase mt-2">
               <span>Monk Mode</span>
               <span>Social</span>
               <span>Party Animal</span>
             </div>
             <p className="text-[10px] text-gray-400 mt-4 leading-relaxed">
               Each drink (~130kcal) is automatically deducted from your Carb/Fat budget. Protein is protected.
             </p>
          </div>

        </div>

        {/* RIGHT COLUMN: RESULTS */}
        <div className="bg-brand-black p-8 md:p-12 flex flex-col h-full">
          
          <div className="mb-12">
            <h3 className="font-bold text-sm uppercase tracking-widest text-brand-orange mb-6">Daily Targets</h3>
            
            <div className="flex items-baseline gap-2 mb-2">
               <span className="text-7xl font-display font-bold text-white">{results.totalCals}</span>
               <span className="text-xl text-gray-400 font-medium">kcal</span>
            </div>
            <div className="h-px w-full bg-white/10 mb-8"></div>

            <div className="space-y-6">
              {/* Protein Bar */}
              <div>
                <div className="flex justify-between text-sm font-bold uppercase mb-2">
                   <span className="text-white">Protein</span>
                   <span className="text-brand-orange">{results.protein.grams}g</span>
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-orange rounded-full" style={{ width: `${(results.protein.cals / results.totalCals) * 100}%` }}></div>
                </div>
                <p className="text-[10px] text-gray-500 mt-1">Fixed based on target weight.</p>
              </div>

              {/* Fats Bar */}
              <div>
                <div className="flex justify-between text-sm font-bold uppercase mb-2">
                   <span className="text-white">Fats</span>
                   <span className="text-blue-400">{results.fats.grams}g</span>
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(results.fats.cals / results.totalCals) * 100}%` }}></div>
                </div>
                <p className="text-[10px] text-gray-500 mt-1">20% of Total Calories (Essential for hormones).</p>
              </div>

              {/* Carbs Bar */}
              <div>
                <div className="flex justify-between text-sm font-bold uppercase mb-2">
                   <span className="text-white">Carbs</span>
                   <span className="text-green-400">{results.carbs.grams}g</span>
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: `${(results.carbs.cals / results.totalCals) * 100}%` }}></div>
                </div>
                <p className="text-[10px] text-gray-500 mt-1">Fuel for training.</p>
              </div>

              {/* Alcohol Impact */}
              {stats.alcoholDrinks > 0 && (
                <div className="bg-red-900/20 border border-red-500/20 p-4 rounded-xl mt-4">
                   <div className="flex items-center gap-2 text-red-400 mb-1">
                     <Beer size={14} />
                     <span className="text-xs font-bold uppercase">Party Tax</span>
                   </div>
                   <p className="text-xs text-red-200">
                     <strong className="text-white">-{results.alcohol.dailyCals} kcal/day</strong> removed from Carbs/Fats to account for alcohol.
                   </p>
                </div>
              )}
            </div>
          </div>

          {/* Gated Section - Fixed Relative Positioning */}
          <div className="relative mt-auto">
            {!isUnlocked ? (
              <div className="bg-white/5 flex flex-col items-center justify-center text-center p-8 border border-white/10 rounded-2xl backdrop-blur-sm">
                 <Lock className="text-brand-orange mb-4" size={32} />
                 <h3 className="font-display text-2xl font-bold uppercase mb-2 text-white">Unlock Performance Roadmap</h3>
                 <p className="text-sm text-gray-400 mb-6 max-w-xs">
                   Get meal timing protocols, supplement recommendations, and training day vs. rest day adjustments.
                 </p>
                 <form onSubmit={handleUnlock} className="w-full max-w-xs space-y-3">
                    <input 
                      type="text" 
                      placeholder="Name" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white text-brand-black p-3 rounded-lg text-sm font-bold focus:outline-none"
                    />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white text-brand-black p-3 rounded-lg text-sm font-bold focus:outline-none"
                    />
                    <Button fullWidth size="sm" disabled={isSubmitting} className="border-none">
                       {isSubmitting ? 'Unlocking...' : 'Unlock Full Roadmap'}
                    </Button>
                 </form>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in duration-700">
                 <div className="flex items-center gap-2 text-brand-orange mb-4 pt-4 border-t border-white/10">
                   <Unlock size={18} />
                   <h3 className="font-bold text-sm uppercase tracking-widest">Roadmap Unlocked</h3>
                 </div>

                 {/* 1. Protein Timing */}
                 <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-amber-600">
                    <div className="flex items-center gap-3 mb-3 text-amber-500">
                        <Clock size={24} />
                        <h4 className="font-display text-xl font-bold uppercase">The Protein Timing Blueprint</h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        To optimize muscle protein synthesis, aim for <strong className="text-white">4 servings of {Math.round(results.protein.grams / 4)}g</strong>, spaced every 3-4 hours. This ensures a consistent 'Anabolic Trigger' throughout the workday.
                    </p>
                 </div>

                 {/* 2. Training vs Rest */}
                 <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-amber-600">
                    <div className="flex items-center gap-3 mb-4 text-amber-500">
                        <Dumbbell size={24} />
                        <h4 className="font-display text-xl font-bold uppercase">Training vs. Rest Day Strategy</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 text-center">
                             <span className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Performance Day</span>
                             <span className="block text-2xl font-display font-bold text-white">{Math.round(results.totalCals * 1.1)}</span>
                             <span className="text-[10px] text-amber-500 font-bold">+10% (Carbs)</span>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 text-center">
                             <span className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Recovery Day</span>
                             <span className="block text-2xl font-display font-bold text-white">{Math.round(results.totalCals * 0.9)}</span>
                             <span className="text-[10px] text-emerald-400 font-bold">-10% (Fats/Fiber)</span>
                        </div>
                    </div>
                 </div>

                 {/* 3. Party Fund Protocol */}
                 {stats.alcoholDrinks > 0 && (
                    <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-amber-600">
                        <div className="flex items-center gap-3 mb-3 text-amber-500">
                            <GlassWater size={24} />
                            <h4 className="font-display text-xl font-bold uppercase">The Party Fund Protocol</h4>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            On days you use your budget of <strong className="text-white">{stats.alcoholDrinks} drinks</strong>, follow the WRK Social Protocol: Consume protein and high-fiber veggies early in the day. <strong className="text-white">Strictly avoid high-fat meals</strong> in the 3 hours before and after drinking to prevent excess fat storage while your body prioritizes alcohol metabolism.
                        </p>
                    </div>
                 )}

                 {/* 4. Rate of Progress */}
                 <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-amber-600">
                    <div className="flex items-center gap-3 mb-3 text-amber-500">
                        <LineChart size={24} />
                        <h4 className="font-display text-xl font-bold uppercase">Rate of Progress Reality Check</h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        {stats.goal === 'gain' 
                            ? "At your 300kcal surplus, expect a weight gain of ~0.25kg per week. This ensures the weight is high-quality muscle, not just body fat." 
                            : "Your weight will likely stay stable (+/- 1kg), but focus on 'The Mirror and The Belt.' You should see waist measurements decrease and muscle definition increase over the next 12 weeks."}
                    </p>
                 </div>

                 {/* 5. CTA */}
                 <div className="pt-2">
                     <Link to="/assessment">
                        <Button fullWidth size="lg" className="bg-brand-orange hover:bg-white hover:text-brand-orange text-white border-none text-sm md:text-base">
                           Want the full WRK Performance Blueprint? <ArrowRight size={18} className="ml-2" />
                        </Button>
                     </Link>
                 </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};