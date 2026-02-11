import React, { useState, useEffect } from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { AssessmentData, OfferType, FrequencyType, EnvironmentType, InjuryType } from '../types';
import { Button } from '../components/Button';
import { CheckCircle2, Lock, Unlock, Calendar, ShieldCheck, BarChart3, Activity, ArrowRight } from 'lucide-react';

export const Results: React.FC = () => {
  const location = useLocation();
  const assessment = location.state?.assessment as AssessmentData;
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          link: "/contact"
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
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsUnlocked(true);
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* Header */}
      <header className="bg-brand-black text-white pt-32 pb-16 px-6 rounded-b-[3rem]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-orange font-bold uppercase tracking-[0.2em] text-xs mb-6">Diagnostic Complete</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tighter">Executive Summary</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Based on your goal of <span className="text-white font-bold">{assessment.goal}</span> and your constraint of <span className="text-white font-bold">{assessment.constraint}</span>.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16 -mt-12 relative z-10 space-y-12">
        
        {/* 1. Executive Summary Card */}
        <div className="bg-white shadow-2xl rounded-[2rem] p-10 border border-gray-100">
           <h2 className="font-display text-3xl font-bold mb-8 text-brand-black border-b border-gray-100 pb-6 uppercase tracking-tight">
             {offer.headline}
           </h2>
           <div className="space-y-6 mb-10">
             <p className="text-brand-gray font-medium">Based on your answers, the fastest path forward is a simple execution system:</p>
             <ul className="space-y-4">
               {offer.summary.map((item, i) => (
                 <li key={i} className="flex items-start">
                   <CheckCircle2 size={24} className="text-brand-orange mr-4 shrink-0" />
                   <span className="text-brand-black text-lg">{item}</span>
                 </li>
               ))}
             </ul>
           </div>
           <div className="bg-brand-light p-6 rounded-2xl border-l-4 border-brand-orange">
             <p className="text-sm font-bold text-brand-black uppercase tracking-wide">Translation</p>
             <p className="text-brand-gray mt-1">{offer.translation}</p>
           </div>
        </div>

        {/* 2. Weekly Strategy */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-brand-light p-8 rounded-[2rem]">
            <div className="flex items-center gap-3 mb-6 text-brand-black">
               <Calendar size={24} />
               <h3 className="font-display text-2xl font-bold uppercase">Weekly Strategy</h3>
            </div>
            <h4 className="font-bold text-lg mb-4">{strategy.title}</h4>
            <ul className="space-y-3 mb-6">
               {strategy.points.map((pt, i) => (
                 <li key={i} className="text-brand-gray text-sm flex items-start">
                   <span className="mr-3 text-brand-orange">•</span> {pt}
                 </li>
               ))}
            </ul>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Recommended for: {assessment.frequency}</p>
          </div>

          <div className="bg-brand-light p-8 rounded-[2rem]">
            <div className="flex items-center gap-3 mb-6 text-brand-black">
               <ShieldCheck size={24} />
               <h3 className="font-display text-2xl font-bold uppercase">Guardrails</h3>
            </div>
            <ul className="space-y-4">
               <li className="text-sm text-brand-gray">
                 <strong className="block text-brand-black mb-1 font-bold uppercase text-xs tracking-wider">Stress/Sleep Rule</strong>
                 If sleep is poor 2 nights in a row → reduce volume (fewer sets), keep technique.
               </li>
               <li className="text-sm text-brand-gray">
                 <strong className="block text-brand-black mb-1 font-bold uppercase text-xs tracking-wider">Intensity Rule</strong>
                 Stop sets with 1–2 reps in reserve. No grinding reps this block.
               </li>
               {assessment.injury !== InjuryType.NONE && (
                 <li className="text-sm text-brand-gray bg-white p-3 rounded-xl border border-red-100">
                    <strong className="block text-red-600 mb-1 font-bold uppercase text-xs tracking-wider">Injury Logic</strong>
                    Pain scale 0-3/10 is acceptable. 4+ means modify immediately.
                 </li>
               )}
            </ul>
          </div>
        </div>

        {/* 3. 7 Day Plan Template */}
        <div className="bg-brand-black text-white p-10 rounded-[2rem]">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
             <h3 className="font-display text-3xl font-bold uppercase tracking-tight">Your Next 7 Days</h3>
             <span className="text-[10px] font-bold bg-white text-brand-black px-3 py-1 rounded-full uppercase tracking-widest">{templates.title}</span>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
             {/* Day 1 */}
             <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
               <span className="text-xs font-bold text-brand-orange uppercase mb-4 block tracking-widest">Day 1</span>
               <ul className="space-y-3">
                 {templates.day1.length > 0 ? templates.day1.map((ex, i) => (
                   <li key={i} className="text-sm text-gray-300 border-b border-white/10 pb-2 last:border-0">{ex}</li>
                 )) : <li className="text-sm text-gray-500">Rest or Active Recovery</li>}
               </ul>
             </div>
             {/* Day 2 */}
             <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
               <span className="text-xs font-bold text-brand-orange uppercase mb-4 block tracking-widest">Day 2</span>
               <ul className="space-y-3">
                 {templates.day2.length > 0 ? templates.day2.map((ex, i) => (
                   <li key={i} className="text-sm text-gray-300 border-b border-white/10 pb-2 last:border-0">{ex}</li>
                 )) : <li className="text-sm text-gray-500">Rest or Active Recovery</li>}
               </ul>
             </div>
             {/* Day 3 */}
             <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
               <span className="text-xs font-bold text-brand-orange uppercase mb-4 block tracking-widest">Day 3</span>
               <ul className="space-y-3">
                 {templates.day3.length > 0 ? templates.day3.map((ex, i) => (
                   <li key={i} className="text-sm text-gray-300 border-b border-white/10 pb-2 last:border-0">{ex}</li>
                 )) : <li className="text-sm text-gray-500">Rest or Active Recovery</li>}
               </ul>
             </div>
           </div>
        </div>

        {/* 4. Scoreboard & Nutrition */}
        <div className="grid md:grid-cols-2 gap-8">
           {/* Scoreboard */}
           <div className="bg-white border border-gray-200 p-8 rounded-[2rem]">
              <div className="flex items-center gap-3 mb-6 text-brand-black">
                 <BarChart3 size={24} />
                 <h3 className="font-display text-2xl font-bold uppercase">Scoreboard</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-sm font-medium text-brand-gray">Sessions Completed</span>
                  <span className="text-brand-black font-bold">Target: {assessment.frequency}</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-sm font-medium text-brand-gray">Sleep Average</span>
                  <span className="text-brand-black font-bold">Aim upward</span>
                </li>
                 <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-sm font-medium text-brand-gray">Consistency Score</span>
                  <span className="text-brand-black font-bold">Did I execute?</span>
                </li>
              </ul>
           </div>

           {/* Nutrition */}
           <div className="bg-white border border-gray-200 p-8 rounded-[2rem]">
             <div className="flex items-center gap-3 mb-6 text-brand-black">
                 <Activity size={24} />
                 <h3 className="font-display text-2xl font-bold uppercase">Nutrition</h3>
              </div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-brand-orange mb-4">Level 1: Simple (Start Here)</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm"><CheckCircle2 size={16} className="mr-3 text-brand-black"/> Protein with 2 meals/day</li>
                <li className="flex items-center text-sm"><CheckCircle2 size={16} className="mr-3 text-brand-black"/> 2L+ water (more if training)</li>
                <li className="flex items-center text-sm"><CheckCircle2 size={16} className="mr-3 text-brand-black"/> 1 fruit + 1 veg daily</li>
              </ul>
           </div>
        </div>

        {/* 5. GATED CONTENT SECTION */}
        <div className="my-16">
          {!isUnlocked ? (
            <div className="bg-gray-50 p-10 md:p-16 rounded-[3rem] text-center border border-gray-100">
               <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm text-brand-black">
                 <Lock size={32} />
               </div>
               <h2 className="font-display text-4xl font-bold mb-6 text-brand-black uppercase tracking-tight">Unlock the Deeper Roadmap</h2>
               <p className="text-brand-gray max-w-xl mx-auto mb-10 text-lg">
                 Enter your name and email to instantly unlock the <strong>4-Week Progression Model</strong>, <strong>Warm-up Protocols</strong>, <strong>Exercise Swap Bank</strong>, and <strong>Level 3 Nutrition Guide</strong>.
               </p>
               
               <form onSubmit={handleUnlock} className="max-w-md mx-auto space-y-4">
                 <input 
                   type="text" 
                   required
                   placeholder="First Name"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   className="w-full p-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-black"
                 />
                 <input 
                   type="email" 
                   required
                   placeholder="Email Address"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   className="w-full p-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-black"
                 />
                 <Button fullWidth size="lg" disabled={isSubmitting} className="w-full">
                   {isSubmitting ? 'Unlocking...' : 'Unlock My Roadmap'}
                 </Button>
               </form>
            </div>
          ) : (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="text-center mb-12">
                 <div className="inline-flex items-center gap-2 bg-brand-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                   <Unlock size={14} /> Roadmap Unlocked
                 </div>
                 <h2 className="font-display text-5xl font-bold uppercase tracking-tighter">The Deeper Protocols</h2>
              </div>

              {/* 1. Progression Model */}
              <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="font-display text-3xl font-bold mb-8 text-brand-black uppercase">4-Week Progression</h3>
                <div className="grid md:grid-cols-4 gap-6">
                   {[
                     { week: "Week 1", title: "Baseline", desc: "Clean reps, 2 RIR." },
                     { week: "Week 2", title: "Volume", desc: "Add a set or load." },
                     { week: "Week 3", title: "Intensity", desc: "Heavier, fewer reps." },
                     { week: "Week 4", title: "Beat KPI", desc: "Repeat best week." }
                   ].map((item, i) => (
                     <div key={i} className="bg-brand-light p-6 rounded-2xl">
                        <span className="block text-xs font-bold uppercase text-brand-orange mb-2">{item.week}</span>
                        <strong className="block text-brand-black text-lg mb-2">{item.title}</strong>
                        <p className="text-sm text-brand-gray">{item.desc}</p>
                     </div>
                   ))}
                </div>
              </div>

              {/* 2. Warm Ups & Swaps */}
              <div className="grid md:grid-cols-2 gap-8">
                 <div className="bg-brand-light p-10 rounded-[2rem]">
                    <h3 className="font-display text-2xl font-bold mb-6 text-brand-black uppercase">Warm-up Protocols</h3>
                    <div className="space-y-8">
                       <div>
                         <h4 className="font-bold text-sm uppercase tracking-wider mb-3">5-Minute Option</h4>
                         <ul className="text-sm text-brand-gray space-y-2">
                           <li>• 2 mins raise temp (walk/bike)</li>
                           <li>• 1 mobility drill</li>
                           <li>• 2 ramp sets</li>
                         </ul>
                       </div>
                       <div>
                         <h4 className="font-bold text-sm uppercase tracking-wider mb-3">10-Minute Option</h4>
                         <ul className="text-sm text-brand-gray space-y-2">
                           <li>• 3 mins raise temp</li>
                           <li>• 2 mobility drills</li>
                           <li>• Activation</li>
                           <li>• Ramp sets</li>
                         </ul>
                       </div>
                    </div>
                 </div>
                 
                 <div className="bg-brand-light p-10 rounded-[2rem]">
                    <h3 className="font-display text-2xl font-bold mb-6 text-brand-black uppercase">Swap Bank</h3>
                    <div className="space-y-4">
                       <div className="text-sm pb-2 border-b border-gray-200">
                         <strong>Squat</strong> <span className="text-brand-gray">→ Box Squat → Goblet Squat</span>
                       </div>
                       <div className="text-sm pb-2 border-b border-gray-200">
                         <strong>Deadlift</strong> <span className="text-brand-gray">→ RDL → Hip Thrust</span>
                       </div>
                       <div className="text-sm pb-2 border-b border-gray-200">
                         <strong>Bench</strong> <span className="text-brand-gray">→ DB Press → Push-up</span>
                       </div>
                       <div className="text-sm pt-2">
                         <strong>Press</strong> <span className="text-brand-gray">→ Landmine → Incline</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* 3. Nutrition Level 3 */}
              <div className="bg-brand-black text-white p-10 rounded-[2rem]">
                 <h3 className="font-display text-3xl font-bold mb-8 text-brand-orange uppercase">Level 3 Nutrition</h3>
                 <div className="grid md:grid-cols-2 gap-12">
                    <div>
                       <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Portion Guide</h4>
                       <ul className="space-y-3 text-sm text-gray-400">
                         <li>• Protein: 1–2 palms per meal</li>
                         <li>• Veg: 1–2 fists</li>
                         <li>• Carbs: 1 cupped hand (more on training days)</li>
                         <li>• Fats: 1 thumb</li>
                       </ul>
                    </div>
                    <div>
                       <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Eating Out</h4>
                       <ul className="space-y-3 text-sm text-gray-400">
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

        {/* 6. PRIMARY OFFER CTA */}
        <div className="bg-brand-orange text-white p-12 md:p-20 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
           <div className="relative z-10">
              <span className="text-brand-black font-bold uppercase tracking-widest text-sm mb-6 block">Recommended Next Step</span>
              <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tighter leading-none">{offer.headline}</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                 {assessment.recommendedOffer === OfferType.RESET 
                   ? "A self-guided execution system if you want to run it solo." 
                   : assessment.recommendedOffer === OfferType.ONLINE 
                   ? "Accountability + weekly adjustments around your week." 
                   : "Fastest results + technique + risk management."
                 }
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                 <Link to={offer.link} state={{ goal: assessment.goal, offer: assessment.recommendedOffer }}>
                   <Button size="lg" className="bg-white text-brand-orange hover:bg-brand-black hover:text-white px-12 py-6 text-xl shadow-xl border-none w-full md:w-auto">
                     {offer.cta} <ArrowRight size={24} className="ml-2" />
                   </Button>
                 </Link>
                 
                 {assessment.recommendedOffer !== OfferType.RESET && (
                   <Link to="/42-day-reset" className="text-sm font-bold border-b border-white/40 hover:border-white transition-colors text-white">
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