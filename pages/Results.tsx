
import React, { useState, useEffect } from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { AssessmentData, OfferType, FrequencyType, EnvironmentType, InjuryType, GoalType, ConstraintType } from '../types';
import { Button } from '../components/Button';
import { CheckCircle2, Lock, Unlock, Calendar, ShieldCheck, BarChart3, Activity, ArrowRight, Zap, Brain, HeartPulse, Dumbbell } from 'lucide-react';
import { submitApplication } from '../services/apiService';

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

  // --- 1. ARCHETYPE LOGIC ---
  const getArchetype = () => {
    // Priority 1: Pain/Injury -> Structural Rebuilder
    if (assessment.injury && assessment.injury !== InjuryType.NONE) {
      return {
        title: "The Structural Rebuilder",
        icon: HeartPulse,
        desc: "Your body has the engine, but the chassis needs alignment. We prioritize joint integrity and movement quality first, so you can train hard without paying for it later.",
        focus: "Pain-Free Volume & Stability"
      };
    }

    // Priority 2: Time/Stress -> Executive Minimum
    if (assessment.constraint === ConstraintType.TIME || assessment.constraint === ConstraintType.STRESS) {
      return {
        title: "The Executive Minimum",
        icon: Zap,
        desc: "You don't have 90 minutes. You need high-yield inputs. We use density training and supersets to get maximum stimulus in minimum time.",
        focus: "Density & Efficiency"
      };
    }

    // Priority 3: Overwhelm/Restarting -> Momentum Method
    if (assessment.constraint === ConstraintType.OVERWHELM || assessment.goal === GoalType.RESTARTING) {
      return {
        title: "The Momentum Method",
        icon: Brain,
        desc: "Motivation is unreliable. Systems are forever. We remove decision fatigue with a simple, repeatable structure that builds a winning streak.",
        focus: "Consistency & Simplicity"
      };
    }

    // Default: Performance/Physique -> Metabolic Shift
    return {
      title: "The Metabolic Shift",
      icon: Dumbbell,
      desc: "You're ready to work. We use compound movements and progressive overload to drive body composition changes and performance.",
      focus: "Strength & Output"
    };
  };

  // --- 2. CONSTRAINT BUSTER LOGIC ---
  const getConstraintBuster = () => {
    switch (assessment.constraint) {
      case ConstraintType.TIME:
        return {
          title: "The Time Hack: Density Training",
          desc: "We don't rest for 3 minutes scrolling Instagram. We use antagonistic supersets (push/pull) to double your volume in the same timeframe."
        };
      case ConstraintType.STRESS:
        return {
          title: "The Stress Valve: Autoregulation",
          desc: "High stress days = lower volume, higher focus. We adjust the session to match your recovery, so training gives energy rather than taking it."
        };
      case ConstraintType.TRAVEL:
        return {
          title: "The Travel Protocol: Bands & Bodyweight",
          desc: "A hotel room workout that actually works. We use tempo and tension to make light weights feel heavy, so you don't lose progress on the road."
        };
      case ConstraintType.PAIN:
        return {
          title: "The Pain-Free Ratio: 2:1 Pulling",
          desc: "For every pushing movement, we do two pulling movements. This fixes posture, opens the shoulders, and reduces joint stress."
        };
      case ConstraintType.OVERWHELM:
        return {
          title: "The Floor Rule: 15 Minutes",
          desc: "On your worst days, you don't quit. You hit the 'Floor'—a 15-minute minimum viable session. This keeps the habit alive without the mental load."
        };
      default:
        return {
          title: "The Consistency Code",
          desc: "We track weekly volume, not perfect days. Miss a session? No problem. We adjust the rest of the week to stay on target."
        };
    }
  };

  // --- 3. GOAL-SPECIFIC UNLOCK CONTENT ---
  const getUnlockContent = () => {
    if (assessment.goal === GoalType.FAT_LOSS) {
      return {
        title: "The Fat Loss Protocol",
        items: [
          { title: "Protein Anchors", desc: "30g protein at breakfast & lunch to kill cravings." },
          { title: "Step Flux", desc: "Walking 8k steps > 1 hour of cardio for cortisol management." },
          { title: "The 80/20 Rule", desc: "Eat whole foods 80% of the time, enjoy life 20%." }
        ]
      };
    } else if (assessment.goal === GoalType.STRENGTH || assessment.goal === GoalType.PHYSIQUE) {
      return {
        title: "The Strength Blueprint",
        items: [
          { title: "Progressive Overload", desc: "Add weight, reps, or better form every single week." },
          { title: "Rest Intervals", desc: "Rest 2-3 mins on compounds to maximize output." },
          { title: "Sleep Hygiene", desc: "Growth happens when you sleep, not when you train." }
        ]
      };
    } else {
      // Pain Free / Restarting
      return {
        title: "The Longevity Framework",
        items: [
          { title: "Daily Mobility", desc: "5 mins of hips/t-spine work every morning." },
          { title: "Tempo Control", desc: "3-second eccentric (lowering) phase to bulletproof joints." },
          { title: "Zone 2 Cardio", desc: "Build the engine without taxing the nervous system." }
        ]
      };
    }
  };

  const archetype = getArchetype();
  const constraintBuster = getConstraintBuster();
  const unlockContent = getUnlockContent();
  const offer = getOfferContent(assessment.recommendedOffer); // Helper below
  const strategy = getWeeklyStrategy(assessment.frequency); // Helper below
  const templates = getTemplates(assessment.environment); // Helper below

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send lead to backend
    try {
      await submitApplication({
        name,
        email,
        phone: 'N/A (Unlock)',
        message: `[ASSESSMENT UNLOCK]
Archetype: ${archetype.title}
Goal: ${assessment.goal}
Constraint: ${assessment.constraint}
Frequency: ${assessment.frequency}
Environment: ${assessment.environment}
Injury: ${assessment.injury}
Support: ${assessment.support}
Recommended: ${assessment.recommendedOffer}`,
        interest: 'Assessment Unlock',
        referralSource: 'Assessment'
      });
    } catch (error) {
      console.error("Failed to capture lead", error);
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsUnlocked(true);
    setIsSubmitting(false);
  };

  return (
    <div className="bg-primary min-h-screen text-text-primary transition-colors duration-300">
      
      {/* Header - Inverse Scheme */}
      <header className="bg-text-primary text-primary pt-32 pb-24 px-6 rounded-b-[3rem] shadow-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-6">Diagnostic Complete</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tighter text-primary">
            Your Strategy: <br/><span className="text-accent">{archetype.title}</span>
          </h1>
          <p className="text-primary/80 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            {archetype.desc}
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-16 -mt-20 relative z-10 space-y-12">
        
        {/* 1. The Strategy Card */}
        <div className="bg-secondary shadow-2xl rounded-[2.5rem] p-8 md:p-12 border border-border">
           <div className="flex flex-col md:flex-row gap-8 items-start">
             <div className="bg-primary p-6 rounded-2xl border border-border shrink-0">
                <archetype.icon size={48} className="text-accent" />
             </div>
             <div>
               <h2 className="font-display text-3xl font-bold mb-4 text-text-primary uppercase tracking-tight">
                 The Game Plan
               </h2>
               <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                 Based on your goal of <strong>{assessment.goal}</strong> and your constraint of <strong>{assessment.constraint}</strong>, we need to optimize for <strong>{archetype.focus}</strong>.
               </p>
               
               <div className="bg-primary/50 p-6 rounded-2xl border-l-4 border-accent">
                 <h3 className="font-bold text-text-primary uppercase text-sm tracking-wider mb-2">{constraintBuster.title}</h3>
                 <p className="text-text-secondary">{constraintBuster.desc}</p>
               </div>
             </div>
           </div>
        </div>

        {/* 2. Weekly Strategy & Guardrails */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-secondary border border-border p-8 rounded-[2rem]">
            <div className="flex items-center gap-3 mb-6 text-text-primary">
               <Calendar size={24} className="text-accent" />
               <h3 className="font-display text-2xl font-bold uppercase">Weekly Structure</h3>
            </div>
            <h4 className="font-bold text-lg mb-4 text-text-primary">{strategy.title}</h4>
            <ul className="space-y-3 mb-6">
               {strategy.points.map((pt, i) => (
                 <li key={i} className="text-text-secondary text-sm flex items-start">
                   <span className="mr-3 text-accent">•</span> {pt}
                 </li>
               ))}
            </ul>
          </div>

          <div className="bg-secondary border border-border p-8 rounded-[2rem]">
            <div className="flex items-center gap-3 mb-6 text-text-primary">
               <ShieldCheck size={24} className="text-accent" />
               <h3 className="font-display text-2xl font-bold uppercase">Guardrails</h3>
            </div>
            <ul className="space-y-4">
               <li className="text-sm text-text-secondary">
                 <strong className="block text-text-primary mb-1 font-bold uppercase text-xs tracking-wider">Stress/Sleep Rule</strong>
                 If sleep is poor 2 nights in a row → reduce volume (fewer sets), keep technique.
               </li>
               <li className="text-sm text-text-secondary">
                 <strong className="block text-text-primary mb-1 font-bold uppercase text-xs tracking-wider">Intensity Rule</strong>
                 Stop sets with 1–2 reps in reserve. No grinding reps this block.
               </li>
               {assessment.injury !== InjuryType.NONE && (
                 <li className="text-sm text-text-secondary bg-primary p-3 rounded-xl border border-red-500/20">
                    <strong className="block text-red-500 mb-1 font-bold uppercase text-xs tracking-wider">Injury Logic</strong>
                    Pain scale 0-3/10 is acceptable. 4+ means modify immediately.
                 </li>
               )}
            </ul>
          </div>
        </div>

        {/* 3. 7 Day Plan Template - Inverse Scheme */}
        <div className="bg-text-primary text-primary p-10 rounded-[2rem]">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
             <h3 className="font-display text-3xl font-bold uppercase tracking-tight text-primary">Your Next 7 Days</h3>
             <span className="text-[10px] font-bold bg-primary text-text-primary px-3 py-1 rounded-full uppercase tracking-widest">{templates.title}</span>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
             {/* Day 1 */}
             <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
               <span className="text-xs font-bold text-accent uppercase mb-4 block tracking-widest">Day 1</span>
               <ul className="space-y-3">
                 {templates.day1.length > 0 ? templates.day1.map((ex, i) => (
                   <li key={i} className="text-sm text-primary/80 border-b border-primary/10 pb-2 last:border-0">{ex}</li>
                 )) : <li className="text-sm text-primary/60">Rest or Active Recovery</li>}
               </ul>
             </div>
             {/* Day 2 */}
             <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
               <span className="text-xs font-bold text-accent uppercase mb-4 block tracking-widest">Day 2</span>
               <ul className="space-y-3">
                 {templates.day2.length > 0 ? templates.day2.map((ex, i) => (
                   <li key={i} className="text-sm text-primary/80 border-b border-primary/10 pb-2 last:border-0">{ex}</li>
                 )) : <li className="text-sm text-primary/60">Rest or Active Recovery</li>}
               </ul>
             </div>
             {/* Day 3 */}
             <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
               <span className="text-xs font-bold text-accent uppercase mb-4 block tracking-widest">Day 3</span>
               <ul className="space-y-3">
                 {templates.day3.length > 0 ? templates.day3.map((ex, i) => (
                   <li key={i} className="text-sm text-primary/80 border-b border-primary/10 pb-2 last:border-0">{ex}</li>
                 )) : <li className="text-sm text-primary/60">Rest or Active Recovery</li>}
               </ul>
             </div>
           </div>
        </div>

        {/* 4. GATED CONTENT SECTION */}
        <div className="my-16">
          {!isUnlocked ? (
            <div className="bg-primary p-10 md:p-16 rounded-[3rem] text-center border border-border">
               <div className="bg-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm text-text-primary border border-border">
                 <Lock size={32} />
               </div>
               <h2 className="font-display text-4xl font-bold mb-6 text-text-primary uppercase tracking-tight">Unlock Your {unlockContent.title}</h2>
               <p className="text-text-secondary max-w-xl mx-auto mb-10 text-lg">
                 Enter your name and email to instantly unlock the <strong>4-Week Progression Model</strong>, <strong>Warm-up Protocols</strong>, and your specific <strong>{unlockContent.title}</strong>.
               </p>
               
               <form onSubmit={handleUnlock} className="max-w-md mx-auto space-y-4">
                 <input 
                   type="text" 
                   required
                   placeholder="First Name"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   className="w-full p-4 rounded-full border border-border bg-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-accent placeholder-text-secondary"
                 />
                 <input 
                   type="email" 
                   required
                   placeholder="Email Address"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   className="w-full p-4 rounded-full border border-border bg-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-accent placeholder-text-secondary"
                 />
                 <Button fullWidth size="lg" disabled={isSubmitting} className="w-full">
                   {isSubmitting ? 'Unlocking...' : 'Unlock My Roadmap'}
                 </Button>
               </form>
            </div>
          ) : (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="text-center mb-12">
                 <div className="inline-flex items-center gap-2 bg-text-primary text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                   <Unlock size={14} /> Roadmap Unlocked
                 </div>
                 <h2 className="font-display text-5xl font-bold uppercase tracking-tighter text-text-primary">The Deeper Protocols</h2>
              </div>

              {/* 1. Progression Model */}
              <div className="bg-secondary p-10 rounded-[2rem] border border-border shadow-sm">
                <h3 className="font-display text-3xl font-bold mb-8 text-text-primary uppercase">4-Week Progression</h3>
                <div className="grid md:grid-cols-4 gap-6">
                   {[
                     { week: "Week 1", title: "Baseline", desc: "Clean reps, 2 RIR." },
                     { week: "Week 2", title: "Volume", desc: "Add a set or load." },
                     { week: "Week 3", title: "Intensity", desc: "Heavier, fewer reps." },
                     { week: "Week 4", title: "Beat KPI", desc: "Repeat best week." }
                   ].map((item, i) => (
                     <div key={i} className="bg-primary p-6 rounded-2xl border border-border">
                        <span className="block text-xs font-bold uppercase text-accent mb-2">{item.week}</span>
                        <strong className="block text-text-primary text-lg mb-2">{item.title}</strong>
                        <p className="text-sm text-text-secondary">{item.desc}</p>
                     </div>
                   ))}
                </div>
              </div>

              {/* 2. Warm Ups & Swaps */}
              <div className="grid md:grid-cols-2 gap-8">
                 <div className="bg-secondary border border-border p-10 rounded-[2rem]">
                    <h3 className="font-display text-2xl font-bold mb-6 text-text-primary uppercase">Warm-up Protocols</h3>
                    <div className="space-y-8">
                       <div>
                         <h4 className="font-bold text-sm uppercase tracking-wider mb-3 text-text-primary">5-Minute Option</h4>
                         <ul className="text-sm text-text-secondary space-y-2">
                           <li>• 2 mins raise temp (walk/bike)</li>
                           <li>• 1 mobility drill</li>
                           <li>• 2 ramp sets</li>
                         </ul>
                       </div>
                       <div>
                         <h4 className="font-bold text-sm uppercase tracking-wider mb-3 text-text-primary">10-Minute Option</h4>
                         <ul className="text-sm text-text-secondary space-y-2">
                           <li>• 3 mins raise temp</li>
                           <li>• 2 mobility drills</li>
                           <li>• Activation</li>
                           <li>• Ramp sets</li>
                         </ul>
                       </div>
                    </div>
                 </div>
                 
                 <div className="bg-secondary border border-border p-10 rounded-[2rem]">
                    <h3 className="font-display text-2xl font-bold mb-6 text-text-primary uppercase">{unlockContent.title}</h3>
                    <div className="space-y-6">
                       {unlockContent.items.map((item, i) => (
                         <div key={i} className="text-sm pb-4 border-b border-border last:border-0 text-text-primary">
                           <strong className="block mb-1 text-accent uppercase text-xs tracking-wider">{item.title}</strong>
                           <span className="text-text-secondary">{item.desc}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          )}
        </div>

        {/* 5. PRIMARY OFFER CTA */}
        <div className="bg-accent text-white p-12 md:p-20 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
           <div className="relative z-10">
              <span className="text-black/50 font-bold uppercase tracking-widest text-sm mb-6 block">Recommended Next Step</span>
              <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tighter leading-none">{offer.headline}</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                 {offer.translation}
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                 <Link to={offer.link} state={{ goal: assessment.goal, offer: assessment.recommendedOffer }}>
                   <Button size="lg" className="bg-white text-accent hover:bg-black hover:text-white px-12 py-6 text-xl shadow-xl border-none w-full md:w-auto">
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

// --- HELPER FUNCTIONS ---

const getWeeklyStrategy = (frequency: FrequencyType | null) => {
  if (frequency === FrequencyType.TWO) {
    return {
      title: "2-Day Full Body + Light Movement",
      points: ["2 strength sessions (essential)", "2–4 low-intensity movement sessions (walk, zone 2, mobility)"]
    };
  } else if (frequency === FrequencyType.THREE) {
    return {
      title: "3-Day Full Body (High ROI)",
      points: ["3 strength sessions (most bang-for-buck)", "1–3 low-intensity movement days"]
    };
  } else if (frequency === FrequencyType.FOUR || frequency === FrequencyType.FIVE_PLUS) {
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

const getTemplates = (environment: EnvironmentType | null) => {
  if (environment === EnvironmentType.GYM || environment === EnvironmentType.MIXED) {
    return {
      title: "Full Gym — 3-Day Template",
      day1: ["Squat pattern (goblet/back squat)", "Horizontal press (DB bench)", "Horizontal pull (row)", "Carry or finisher"],
      day2: ["Hinge pattern (RDL/trap bar)", "Vertical press (landmine/DB overhead)", "Vertical pull (lat pulldown)", "Core (dead bug)"],
      day3: ["Single leg (split squat)", "Incline press", "Row variation", "Conditioning (10 min)"]
    };
  } else if (environment === EnvironmentType.HOME) {
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

const getOfferContent = (recommendedOffer?: OfferType) => {
  switch (recommendedOffer) {
    case OfferType.RESET:
      return {
        headline: "Your Highest-ROI Next Step: The 42-Day Reset",
        translation: "You’ll know exactly what to do each day, without overthinking.",
        cta: "Book a consult",
        link: "/contact"
      };
    case OfferType.ONLINE:
      return {
        headline: "Your Highest-ROI Next Step: Online Coaching",
        translation: "Online coaching is the 'stability layer': the plan adjusts when your week changes.",
        cta: "Book a consult",
        link: "/contact"
      };
    case OfferType.HYBRID:
      return {
        headline: "Your Highest-ROI Next Step: Hybrid 1:1 Coaching",
        translation: "If pain or confidence is in the mix, precision is the highest ROI move.",
        cta: "Book a consult",
        link: "/contact"
      };
    default:
      return { headline: "", translation: "", cta: "", link: "" };
  }
};
