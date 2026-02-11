import React, { useState, useEffect } from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { AssessmentData, OfferType, FrequencyType, EnvironmentType, InjuryType } from '../types';
import { Button } from '../components/Button';
import { CheckCircle2, Lock, Unlock, ChevronDown, ChevronRight, Activity, Calendar, ShieldCheck, BarChart3, ArrowRight } from 'lucide-react';

export const Results: React.FC = () => {
  const location = useLocation();
  const assessment = location.state?.assessment as AssessmentData;
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Protect route
  if (!assessment) {
    return <Navigate to="/assessment" replace />;
  }

  // --- CONTENT GENERATION LOGIC ---

  const getWeeklyStrategy = () => {
    if (assessment.frequency === FrequencyType.TWO) {
      return {
        title: "2-Day Full Body + Light Movement",
        points: ["2 strength sessions (essential)", "2–4 low-intensity movement sessions (walk, zone 2, mobility)"]
      };
    } else if (assessment.frequency === FrequencyType.THREE) {
      return {
        title: "3-Day Full Body (High ROI)",
        points: ["3 strength sessions (most bang-for-buck)", "1–3 low-intensity movement days"]
      };
    } else if (assessment.frequency === FrequencyType.FOUR || assessment.frequency === FrequencyType.FIVE_PLUS) {
      return {
        title: "4-Day Upper/Lower Split",
        points: ["4 training sessions (requires stable sleep)", "1–2 low-intensity days", "Rule: If sleep/stress is messy → drop to the 3-day full body template."]
      };
    } else {
      // Varies
      return {
        title: "Flexible Full Body + Fallback",
        points: ["Aim for 3 days", "If chaos hits, use the 30-min 'Fallback Session'", "Focus on weekly volume, not perfect days"]
      };
    }
  };

  const getTemplates = () => {
    if (assessment.environment === EnvironmentType.GYM || assessment.environment === EnvironmentType.MIXED) {
      return {
        title: "Full Gym — 3-Day Template",
        day1: ["Squat pattern (goblet/back squat)", "Horizontal press (DB bench)", "Horizontal pull (row)", "Carry or finisher"],
        day2: ["Hinge pattern (RDL/trap bar)", "Vertical press (landmine/DB overhead)", "Vertical pull (lat pulldown)", "Core (dead bug)"],
        day3: ["Single leg (split squat)", "Incline press", "Row variation", "Conditioning (10 min)"]
      };
    } else if (assessment.environment === EnvironmentType.HOME) {
      return {
        title: "Home / Minimal — 3-Day Template",
        day1: ["Goblet squat / split squat", "Push-up / floor press", "1-arm DB row", "Carry or walk finisher"],
        day2: ["DB RDL / swing", "Landmine press / incline push-up", "Band pulldown", "Core circuit"],
        day3: ["Step-up / reverse lunge", "DB incline press", "Row variation", "10-min low impact conditioning"]
      };
    } else {
      return {
        title: "Hotel / Travel Fallback (30 min)",
        day1: ["Split squat x 8–12/side", "Push-up x 8–15", "Row (band/suitcase) x 10–15", "RDL (suitcase/DB) x 10–12", "5 min brisk walk"],
        day2: [],
        day3: []
      };
    }
  };

  const getOfferContent = () => {
    switch (assessment.recommendedOffer) {
      case OfferType.RESET:
        return {
          headline: "Your Highest-ROI Next Step: The 42-Day Reset",
          summary: [
            "Minimum effective dose (so it fits real life)",
            "Planned progression (so results are predictable)",
            "Recovery guardrails (so you don't burn out)"
          ],
          translation: "You’ll know exactly what to do each day, without overthinking.",
          cta: "Start 42-Day Reset ($47)",
          link: "/contact" // In real app, maybe a checkout
        };
      case OfferType.ONLINE:
        return {
          headline: "Your Highest-ROI Next Step: Online Coaching",
          summary: [
            "Minimum effective dose (built around your schedule)",
            "Planned progression (so it's measurable)",
            "Weekly check-ins to keep you moving forward when life gets chaotic"
          ],
          translation: "Online coaching is the 'stability layer': the plan adjusts when your week changes.",
          cta: "Apply for Online Coaching",
          link: "/contact"
        };
      case OfferType.HYBRID:
        return {
          headline: "Your Highest-ROI Next Step: Hybrid 1:1 Coaching",
          summary: [
            "Minimum effective dose (so you progress without flare-ups)",
            "In-person coaching to nail technique + intelligent modifications",
            "Recovery guardrails (so you don’t regress)"
          ],
          translation: "If pain or confidence is in the mix, precision is the highest ROI move.",
          cta: "Apply for Hybrid Coaching",
          link: "/contact"
        };
      default:
        return { headline: "", summary: [], translation: "", cta: "", link: "" };
    }
  };

  const strategy = getWeeklyStrategy();
  const templates = getTemplates();
  const offer = getOfferContent();

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsUnlocked(true);
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* Header */}
      <header className="bg-brand-black text-white pt-32 pb-12 px-6 rounded-b-[3rem]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4">Diagnostic Complete</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">Your Executive Summary</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Based on your goal of <span className="text-white font-bold">{assessment.goal}</span> and your constraint of <span className="text-white font-bold">{assessment.constraint}</span>.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12 -mt-12 relative z-10 space-y-12">
        
        {/* 1. Executive Summary Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 border border-gray-100">
           <h2 className="font-display text-2xl font-bold mb-6 text-brand-primary border-b border-gray-100 pb-4">
             {offer.headline}
           </h2>
           <div className="space-y-4 mb-8">
             <p className="text-brand-gray font-medium">Based on your answers, the fastest path forward is a simple execution system:</p>
             <ul className="space-y-3">
               {offer.summary.map((item, i) => (
                 <li key={i} className="flex items-start">
                   <CheckCircle2 size={20} className="text-brand-orange mr-3 shrink-0 mt-0.5" />
                   <span className="text-brand-black">{item}</span>
                 </li>
               ))}
             </ul>
           </div>
           <div className="bg-brand-light p-4 rounded-xl border-l-4 border-brand-primary">
             <p className="text-sm font-bold text-brand-primary">Translation: {offer.translation}</p>
           </div>
        </div>

        {/* 2. Weekly Strategy */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <div className="flex items-center gap-3 mb-4 text-brand-primary">
               <Calendar size={24} />
               <h3 className="font-bold text-xl">Weekly Strategy</h3>
            </div>
            <h4 className="font-bold text-lg mb-3">{strategy.title}</h4>
            <ul className="space-y-2 mb-4">
               {strategy.points.map((pt, i) => (
                 <li key={i} className="text-brand-gray text-sm flex items-start">
                   <span className="mr-2 text-brand-orange">•</span> {pt}
                 </li>
               ))}
            </ul>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Recommended for: {assessment.frequency}</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <div className="flex items-center gap-3 mb-4 text-brand-primary">
               <ShieldCheck size={24} />
               <h3 className="font-bold text-xl">Guardrails</h3>
            </div>
            <ul className="space-y-4">
               <li className="text-sm text-brand-gray">
                 <strong className="block text-brand-black mb-1">Stress/Sleep Rule</strong>
                 If sleep is poor 2 nights in a row → reduce volume (fewer sets), keep technique.
               </li>
               <li className="text-sm text-brand-gray">
                 <strong className="block text-brand-black mb-1">Intensity Rule</strong>
                 Stop sets with 1–2 reps in reserve. No grinding reps this block.
               </li>
               {assessment.injury !== InjuryType.NONE && (
                 <li className="text-sm text-brand-gray bg-red-50 p-2 rounded-lg border border-red-100">
                    <strong className="block text-red-800 mb-1">Injury Logic</strong>
                    Pain scale 0-3/10 is acceptable. 4+ means modify immediately.
                 </li>
               )}
            </ul>
          </div>
        </div>

        {/* 3. 7 Day Plan Template */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200">
           <div className="flex justify-between items-center mb-6">
             <h3 className="font-display text-2xl font-bold text-brand-black">Your Next 7 Days Plan</h3>
             <span className="text-xs font-bold bg-brand-light text-brand-primary px-3 py-1 rounded-full uppercase">{templates.title}</span>
           </div>
           
           <div className="grid md:grid-cols-3 gap-6">
             {/* Day 1 */}
             <div className="bg-gray-50 p-5 rounded-xl">
               <span className="text-xs font-bold text-brand-orange uppercase mb-2 block">Day 1</span>
               <ul className="space-y-2">
                 {templates.day1.length > 0 ? templates.day1.map((ex, i) => (
                   <li key={i} className="text-sm text-brand-black border-b border-gray-200 pb-1 last:border-0">{ex}</li>
                 )) : <li className="text-sm text-gray-400">Rest or Active Recovery</li>}
               </ul>
             </div>
             {/* Day 2 */}
             <div className="bg-gray-50 p-5 rounded-xl">
               <span className="text-xs font-bold text-brand-orange uppercase mb-2 block">Day 2</span>
               <ul className="space-y-2">
                 {templates.day2.length > 0 ? templates.day2.map((ex, i) => (
                   <li key={i} className="text-sm text-brand-black border-b border-gray-200 pb-1 last:border-0">{ex}</li>
                 )) : <li className="text-sm text-gray-400">Rest or Active Recovery</li>}
               </ul>
             </div>
             {/* Day 3 */}
             <div className="bg-gray-50 p-5 rounded-xl">
               <span className="text-xs font-bold text-brand-orange uppercase mb-2 block">Day 3</span>
               <ul className="space-y-2">
                 {templates.day3.length > 0 ? templates.day3.map((ex, i) => (
                   <li key={i} className="text-sm text-brand-black border-b border-gray-200 pb-1 last:border-0">{ex}</li>
                 )) : <li className="text-sm text-gray-400">Rest or Active Recovery</li>}
               </ul>
             </div>
           </div>
        </div>

        {/* 4. Scoreboard & Nutrition */}
        <div className="grid md:grid-cols-2 gap-8">
           {/* Scoreboard */}
           <div className="bg-brand-black text-white p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6 text-brand-orange">
                 <BarChart3 size={24} />
                 <h3 className="font-bold text-xl">KPI Scoreboard</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-sm font-medium">Sessions Completed</span>
                  <span className="text-brand-orange font-bold">Target: {assessment.frequency}</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-sm font-medium">Sleep Average</span>
                  <span className="text-brand-orange font-bold">Aim upward</span>
                </li>
                 <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-sm font-medium">Consistency Score</span>
                  <span className="text-brand-orange font-bold">Did I execute?</span>
                </li>
              </ul>
           </div>

           {/* Nutrition */}
           <div className="bg-white p-8 rounded-2xl border border-gray-200">
             <div className="flex items-center gap-3 mb-6 text-brand-primary">
                 <Activity size={24} />
                 <h3 className="font-bold text-xl">Nutrition Principles</h3>
              </div>
              <h4 className="font-bold text-sm uppercase text-brand-gray mb-3">Level 1: Simple (Start Here)</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm"><CheckCircle2 size={16} className="mr-2 text-brand-green"/> Protein with 2 meals/day</li>
                <li className="flex items-center text-sm"><CheckCircle2 size={16} className="mr-2 text-brand-green"/> 2L+ water (more if training)</li>
                <li className="flex items-center text-sm"><CheckCircle2 size={16} className="mr-2 text-brand-green"/> 1 fruit + 1 veg daily</li>
              </ul>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-brand-gray italic">
                  Level 2 & 3 (Portion guides + eating out frameworks) unlock in the deeper roadmap below.
                </p>
              </div>
           </div>
        </div>

        {/* 5. GATED CONTENT SECTION */}
        <div className="my-16">
          {!isUnlocked ? (
            <div className="bg-brand-light p-8 md:p-12 rounded-[2rem] text-center border border-gray-200 shadow-inner">
               <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-primary">
                 <Lock size={32} />
               </div>
               <h2 className="font-display text-3xl font-bold mb-4 text-brand-black">Unlock the Deeper Roadmap</h2>
               <p className="text-brand-gray max-w-xl mx-auto mb-8">
                 Enter your name and email to instantly unlock the <strong>4-Week Progression Model</strong>, <strong>Warm-up Protocols</strong>, <strong>Exercise Swap Bank</strong>, and <strong>Level 3 Nutrition Guide</strong> right here on this page.
               </p>
               
               <form onSubmit={handleUnlock} className="max-w-md mx-auto space-y-4">
                 <input 
                   type="text" 
                   required
                   placeholder="First Name"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                 />
                 <input 
                   type="email" 
                   required
                   placeholder="Email Address"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                 />
                 <Button fullWidth size="lg" disabled={isSubmitting}>
                   {isSubmitting ? 'Unlocking...' : 'Unlock My Roadmap'}
                 </Button>
                 <p className="text-[10px] text-gray-400 mt-2">
                   No spam. I’ll also send a copy to your inbox so you don't lose it.
                 </p>
               </form>
            </div>
          ) : (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
              {/* Expanded Content Header */}
              <div className="text-center mb-12">
                 <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                   <Unlock size={14} /> Roadmap Unlocked
                 </div>
                 <h2 className="font-display text-4xl font-bold">The Deeper Protocols</h2>
              </div>

              {/* 1. Progression Model */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-xl mb-6 text-brand-primary">4-Week Progression Model (Plug-and-play)</h3>
                <div className="grid md:grid-cols-4 gap-4">
                   <div className="bg-brand-light p-4 rounded-xl">
                      <span className="block text-xs font-bold uppercase text-brand-gray mb-1">Week 1</span>
                      <strong className="block text-brand-black">Establish Baseline</strong>
                      <p className="text-xs text-gray-500 mt-2">Clean reps, leave 2 reps in reserve.</p>
                   </div>
                   <div className="bg-brand-light p-4 rounded-xl">
                      <span className="block text-xs font-bold uppercase text-brand-gray mb-1">Week 2</span>
                      <strong className="block text-brand-black">Add Volume</strong>
                      <p className="text-xs text-gray-500 mt-2">Add a set OR small load on 1–2 lifts.</p>
                   </div>
                   <div className="bg-brand-light p-4 rounded-xl">
                      <span className="block text-xs font-bold uppercase text-brand-gray mb-1">Week 3</span>
                      <strong className="block text-brand-black">Add Intensity</strong>
                      <p className="text-xs text-gray-500 mt-2">Slightly heavier, fewer reps OR add a set.</p>
                   </div>
                   <div className="bg-brand-light p-4 rounded-xl">
                      <span className="block text-xs font-bold uppercase text-brand-gray mb-1">Week 4</span>
                      <strong className="block text-brand-black">Beat One KPI</strong>
                      <p className="text-xs text-gray-500 mt-2">Repeat best week + tighten form.</p>
                   </div>
                </div>
              </div>

              {/* 2. Warm Ups & Swaps */}
              <div className="grid md:grid-cols-2 gap-8">
                 <div className="bg-white p-8 rounded-2xl border border-gray-200">
                    <h3 className="font-bold text-xl mb-4 text-brand-primary">Warm-up Protocols</h3>
                    <div className="space-y-6">
                       <div>
                         <h4 className="font-bold text-sm mb-2">5-Minute Option (Busy Day)</h4>
                         <ul className="text-sm text-brand-gray list-disc ml-4 space-y-1">
                           <li>2 mins raise temp (walk/bike)</li>
                           <li>1 mobility drill (e.g. world's greatest stretch)</li>
                           <li>2 ramp sets for first lift</li>
                         </ul>
                       </div>
                       <div>
                         <h4 className="font-bold text-sm mb-2">10-Minute Option (Best Practice)</h4>
                         <ul className="text-sm text-brand-gray list-disc ml-4 space-y-1">
                           <li>3 mins raise temp</li>
                           <li>2 mobility drills (hips + t-spine)</li>
                           <li>2 activation drills (glutes/core)</li>
                           <li>Ramp sets</li>
                         </ul>
                       </div>
                    </div>
                 </div>
                 
                 <div className="bg-white p-8 rounded-2xl border border-gray-200">
                    <h3 className="font-bold text-xl mb-4 text-brand-primary">Exercise Swap Bank</h3>
                    <p className="text-xs text-gray-400 mb-4">If you can't do X, do Y. No excuses.</p>
                    <div className="space-y-3">
                       <div className="flex justify-between text-sm border-b border-gray-100 pb-2">
                         <span>Squat</span>
                         <span className="text-brand-gray">→ Box Squat → Goblet Squat</span>
                       </div>
                       <div className="flex justify-between text-sm border-b border-gray-100 pb-2">
                         <span>Deadlift</span>
                         <span className="text-brand-gray">→ RDL → Hip Thrust</span>
                       </div>
                       <div className="flex justify-between text-sm border-b border-gray-100 pb-2">
                         <span>Bench Press</span>
                         <span className="text-brand-gray">→ DB Press → Push-up Incline</span>
                       </div>
                       <div className="flex justify-between text-sm border-b border-gray-100 pb-2">
                         <span>Pull-up</span>
                         <span className="text-brand-gray">→ Pulldown → Band Row</span>
                       </div>
                       <div className="flex justify-between text-sm pt-1">
                         <span>Overhead Press</span>
                         <span className="text-brand-gray">→ Landmine Press → Incline Press</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* 3. Nutrition Level 3 */}
              <div className="bg-brand-black text-white p-8 rounded-2xl">
                 <h3 className="font-bold text-xl mb-6 text-brand-orange">Nutrition Level 3 (Unlocked)</h3>
                 <div className="grid md:grid-cols-2 gap-8">
                    <div>
                       <h4 className="font-bold text-sm mb-3">The Portion Guide</h4>
                       <ul className="space-y-2 text-sm text-gray-300">
                         <li>• Protein: 1–2 palms per meal</li>
                         <li>• Veg: 1–2 fists</li>
                         <li>• Carbs: 1 cupped hand (more on training days)</li>
                         <li>• Fats: 1 thumb</li>
                       </ul>
                    </div>
                    <div>
                       <h4 className="font-bold text-sm mb-3">Eating Out Framework</h4>
                       <ul className="space-y-2 text-sm text-gray-300">
                         <li>1. Start with protein + veg as base</li>
                         <li>2. Choose ONE add-on: carbs OR dessert OR alcohol</li>
                         <li>3. Stop at “satisfied,” not “stuffed”</li>
                       </ul>
                    </div>
                 </div>
              </div>
            </div>
          )}
        </div>

        {/* 6. PRIMARY OFFER CTA (Sticky/Prominent) */}
        <div className="bg-brand-primary text-white p-10 md:p-14 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
           {/* Texture */}
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
           
           <div className="relative z-10">
              <span className="text-brand-lime font-bold uppercase tracking-widest text-xs mb-4 block">Recommended Next Step</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">{offer.headline}</h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
                 {assessment.recommendedOffer === OfferType.RESET 
                   ? "A self-guided execution system if you want to run it solo." 
                   : assessment.recommendedOffer === OfferType.ONLINE 
                   ? "Accountability + weekly adjustments around your week." 
                   : "Fastest results + technique + risk management."
                 }
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                 <Link to={offer.link} state={{ goal: assessment.goal, offer: assessment.recommendedOffer }}>
                   <Button size="lg" className="bg-brand-lime text-brand-primary hover:bg-white px-10 py-5 text-lg w-full md:w-auto">
                     {offer.cta} <ArrowRight size={20} className="ml-2" />
                   </Button>
                 </Link>
                 
                 {/* Secondary Links based on Offer */}
                 {assessment.recommendedOffer !== OfferType.RESET && (
                   <Link to="/42-day-reset" className="text-sm font-bold border-b border-transparent hover:border-white transition-colors text-white opacity-80 hover:opacity-100">
                      Or start with the 42-Day Reset ($47)
                   </Link>
                 )}
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};