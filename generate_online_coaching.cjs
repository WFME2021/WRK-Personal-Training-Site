const fs = require('fs');

const content = `import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { ArrowRight, Check, CheckCircle2, Dumbbell, Utensils, Activity, Smartphone, Video, MessageSquare, ArrowUpRight, Plus, Minus } from 'lucide-react';

export const OnlineCoaching: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "Do I need a commercial gym membership?",
      a: "No. Your program is built around your real life. Whether you train in a fully equipped gym, a garage gym, or your living room with a pair of dumbbells and bands, we customize every exercise to match your equipment."
    },
    {
      q: "What if I feel exhausted or nauseous on injection days?",
      a: "That is completely expected. We structure your weekly training schedule around your titration cycle, scheduling active recovery or rest on lower-energy days and prioritizing strength sessions when you feel your best."
    },
    {
      q: "How does online coaching work internationally?",
      a: "Everything is delivered seamlessly through our dedicated coaching app. You receive your workouts, upload technique videos, and message your coach regardless of your time zone, with weekly asynchronous check-ins that fit around your schedule."
    },
    {
      q: "Is there a long-term contract?",
      a: "We operate in 12 week training blocks. We believe coaching should prove its value but also needs time so you can see the benefits."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Online GLP-1 Fitness Coach | Protect Muscle & Build Strength | WRK"
        description="Specialist online fitness and nutrition coaching for GLP-1 patients worldwide. Preserve lean muscle, simplify protein intake, and build lasting strength habits."
      />
      <div className="flex flex-col w-full overflow-x-hidden bg-neutral-900 pb-24 text-neutral-100 selection:bg-teal-500/30">
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[85svh] w-full flex flex-col justify-center items-center py-32 px-5 text-center">
          <div className="absolute inset-0 z-0 bg-neutral-950">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/10 via-neutral-950 to-neutral-950"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-[900px] mx-auto mt-16 md:mt-24">
            <span className="inline-block font-sans font-semibold text-xs uppercase tracking-widest text-teal-400 bg-teal-400/10 border border-teal-400/20 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
              Online Coaching • New Zealand & Worldwide
            </span>
            
            <h1 className="font-serif text-[42px] sm:text-[56px] md:text-[72px] lg:text-[84px] leading-[1.05] tracking-tight mb-8">
              The Weight Is Dropping.<br className="hidden md:block"/>
              <span className="text-teal-400 italic font-light">Now Let’s Protect Your Strength.</span>
            </h1>
            
            <p className="font-sans text-[18px] md:text-[22px] text-neutral-300 font-medium mx-auto mb-12 leading-relaxed max-w-[700px]">
              Evidence-based online fitness and nutrition coaching designed specifically for individuals taking GLP-1 medications. Preserve lean muscle, beat fatigue, and build lasting habits that stick for life.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" fullWidth className="group bg-teal-600 hover:bg-teal-500 text-white border-none py-6 px-10 text-lg">
                  Apply for Coaching <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/assessment" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" fullWidth className="py-6 px-10 text-lg border-neutral-700 text-neutral-300 hover:bg-neutral-800">
                  Take the Free GLP-1 Fitness Assessment
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-neutral-400 font-medium border-t border-neutral-800/50 pt-10">
              <div className="flex items-center"><Check className="w-4 h-4 text-teal-500 mr-2" /> 100% Tailored to Your Equipment</div>
              <div className="flex items-center"><Check className="w-4 h-4 text-teal-500 mr-2" /> No Rigid Diets or Burnout Workouts</div>
              <div className="flex items-center"><Check className="w-4 h-4 text-teal-500 mr-2" /> Evidence-Based Muscle Preservation</div>
            </div>
          </div>
        </section>

        {/* 2. THE EMPATHY SECTION */}
        <section className="py-24 px-5 md:px-12 bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="md:col-span-5 relative">
               <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                 <img 
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2000&auto=format&fit=crop" 
                    alt="Strength training assessment"
                    className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 hover:mix-blend-normal transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-teal-900/20 mix-blend-multiply"></div>
               </div>
            </div>
            
            <div className="md:col-span-7">
              <span className="block text-sm text-teal-400 font-semibold tracking-widest uppercase mb-4">The Reality of Weight Loss Medications</span>
              <h2 className="font-serif text-[32px] md:text-[40px] text-white leading-[1.1] mb-6">
                You’re Losing Weight Quickly, But Are You Keeping Your Muscle?
              </h2>
              <div className="prose prose-invert prose-lg max-w-none text-neutral-300 font-sans leading-relaxed">
                <p>
                  GLP-1 medications like Ozempic, Wegovy, and Mounjaro are powerful tools for appetite regulation and metabolic health. But rapid weight loss comes with a hidden catch: up to 40% of the weight lost can be lean muscle tissue.
                </p>
                <p>
                  When you lose muscle alongside fat, your metabolic rate slows down, energy levels plummet, and everyday physical strength takes a hit. Most traditional fitness programs fail GLP-1 patients because they don’t account for how your body actually feels right now:
                </p>
                <ul className="space-y-3 my-8 list-none pl-0">
                  <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-teal-500 mt-2 mr-3 shrink-0"></span> Appetite suppression makes eating enough protein feel overwhelming.</li>
                  <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-teal-500 mt-2 mr-3 shrink-0"></span> Titration days and nausea can sap your workout energy.</li>
                  <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-teal-500 mt-2 mr-3 shrink-0"></span> Generic gym routines assume an energy surplus you simply do not have.</li>
                </ul>
                <p className="font-medium text-white text-xl">
                  You do not need an exhausting 6-day gym grind. You need a targeted, habit-focused routine designed around your energy, your schedule, and your recovery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE 3-PILLAR FRAMEWORK */}
        <section className="py-24 px-5 md:px-12 bg-neutral-950">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <span className="block text-sm text-teal-400 font-semibold tracking-widest uppercase mb-4">The Framework</span>
              <h2 className="font-serif text-[36px] md:text-[48px] text-white max-w-[800px] mx-auto leading-tight">
                How We Protect Your Body and Build Long-Term Momentum
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl hover:border-teal-900/50 transition-colors">
                <div className="w-14 h-14 bg-teal-950 rounded-2xl flex items-center justify-center mb-6">
                  <Dumbbell className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-4">Muscle-Preserving Strength Training</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Targeted 2 to 3-day resistance programs calibrated to signal your body to hold onto lean muscle while fat burns. Completely customized to what you have access to: commercial gym equipment, a home dumbbell set, or bodyweight and resistance bands.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl hover:border-teal-900/50 transition-colors md:translate-y-8">
                <div className="w-14 h-14 bg-teal-950 rounded-2xl flex items-center justify-center mb-6">
                  <Utensils className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-4">Practical, Low-Friction Nutrition</h3>
                <p className="text-neutral-400 leading-relaxed">
                  No macro tracking burnout or force-feeding massive meals. We focus on easily digestible protein strategies, nutrient-dense daily staples, and hydration habits that support your digestion without triggering nausea.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl hover:border-teal-900/50 transition-colors">
                <div className="w-14 h-14 bg-teal-950 rounded-2xl flex items-center justify-center mb-6">
                  <Activity className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-4">Adaptive Biofeedback & Habit Support</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Medication doses change, and so will your energy levels. We track your recovery, sleep, and digestion every week to adjust training volume and intensity so you stay consistent without burning out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. MID-PAGE LEAD CAPTURE */}
        <section className="py-24 px-5">
          <div className="max-w-[900px] mx-auto bg-teal-950/20 border border-teal-900/30 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h3 className="font-serif text-[28px] md:text-[36px] text-white mb-4">Not Sure Where Your Training Currently Stands?</h3>
              <p className="text-lg text-neutral-300 max-w-[600px] mx-auto mb-10 leading-relaxed">
                Take our quick, 2-minute GLP-1 Fitness Assessment. Get instant clarity on your protein targets, resistance training baseline, and immediate next steps.
              </p>
              <Link to="/assessment">
                <Button size="lg" className="bg-white text-neutral-950 hover:bg-neutral-200 px-8 py-4 text-lg group">
                  Take the Free Assessment <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 5. WHAT'S INCLUDED */}
        <section className="py-24 px-5 md:px-12 bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-16 md:mb-20">
              <span className="block text-sm text-teal-400 font-semibold tracking-widest uppercase mb-4">The Experience</span>
              <h2 className="font-serif text-[36px] md:text-[48px] text-white leading-tight">
                High-Touch Guidance,<br/>Anywhere in the World
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <div className="flex gap-6">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700">
                    <Smartphone className="w-5 h-5 text-teal-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-serif text-white mb-3">Dedicated Mobile App Access</h4>
                  <p className="text-neutral-400 leading-relaxed">Your personalized workout routine, complete with step-by-step video exercise demonstrations and automated tracking.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700">
                    <Video className="w-5 h-5 text-teal-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-serif text-white mb-3">Form & Technique Feedback</h4>
                  <p className="text-neutral-400 leading-relaxed">Upload video clips of your lifts anytime for personalized coaching on posture, safety, and lifting mechanics.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700">
                    <Activity className="w-5 h-5 text-teal-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-serif text-white mb-3">Weekly Check-Ins & Adjustments</h4>
                  <p className="text-neutral-400 leading-relaxed">Direct accountability. We review your biofeedback, habit adherence, and progress every week to tweak your plan.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700">
                    <MessageSquare className="w-5 h-5 text-teal-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-serif text-white mb-3">Direct In-App Messaging</h4>
                  <p className="text-neutral-400 leading-relaxed">Got a question at the grocery store or feeling low energy on injection day? Message your coach directly for guidance.</p>
                </div>
              </div>
              
              <div className="flex gap-6 md:col-span-2 max-w-[800px]">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700">
                    <ArrowUpRight className="w-5 h-5 text-teal-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-serif text-white mb-3">Post-Medication Readiness</h4>
                  <p className="text-neutral-400 leading-relaxed">Building sustainable movement and eating habits from day one, ensuring you maintain your results if you ever choose to reduce or step off medication.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. TRANSPARENT PRICING */}
        <section className="py-24 px-5 md:px-12 bg-neutral-950">
          <div className="max-w-[600px] mx-auto">
            <div className="text-center mb-16">
              <span className="block text-sm text-teal-400 font-semibold tracking-widest uppercase mb-4">Investment</span>
              <h2 className="font-serif text-[32px] md:text-[40px] text-white">Clear, Transparent Coaching</h2>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 rounded-bl-full -mr-16 -mt-16"></div>
               <div className="relative z-10">
                 <h3 className="font-serif text-2xl text-white mb-4">Full 1-on-1 Online Coaching</h3>
                 <div className="flex items-end gap-2 mb-2">
                   <span className="font-serif text-5xl md:text-6xl text-white">$49</span>
                   <span className="text-neutral-400 text-lg mb-1">NZD / week</span>
                 </div>
                 <p className="text-sm text-neutral-500 mb-8 border-b border-neutral-800 pb-8">
                   (Billed weekly • Approx. $29 USD / £24 GBP / $45 AUD)
                 </p>

                 <div className="space-y-4 mb-10">
                   <div className="flex items-center text-sm font-semibold text-white bg-neutral-800/50 w-fit px-3 py-1 rounded-md mb-6">
                     12 week Program
                   </div>
                   
                   <ul className="space-y-4">
                     {[
                       "Bespoke home or gym resistance program",
                       "Nutritional Support",
                       "Progressive habit and protein intake guidance",
                       "Weekly check-in analysis & video feedback",
                       "Ongoing exercise technique analysis",
                       "Direct in-app coach messaging support"
                     ].map((item, i) => (
                       <li key={i} className="flex items-start">
                         <Check className="w-5 h-5 text-teal-400 mr-3 shrink-0" />
                         <span className="text-neutral-300">{item}</span>
                       </li>
                     ))}
                   </ul>
                 </div>

                 <div className="space-y-4">
                   <Link to="/contact" className="block w-full">
                     <Button size="lg" fullWidth className="bg-teal-600 hover:bg-teal-500 text-white py-6 text-lg border-none">
                       Apply for Online Coaching
                     </Button>
                   </Link>
                   <Link to="/assessment" className="block w-full">
                     <Button variant="outline" size="lg" fullWidth className="py-6 border-neutral-700 text-neutral-300 hover:bg-neutral-800">
                       Start with the Free Assessment
                     </Button>
                   </Link>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* 7. OVERCOMING OBJECTIONS (FAQ) */}
        <section className="py-24 px-5 md:px-12 bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-serif text-[32px] md:text-[40px] text-center text-white mb-16">
              Common Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-900 transition-colors"
                  >
                    <span className="font-sans font-medium text-lg text-white pr-4">{faq.q}</span>
                    <span className="text-teal-400 shrink-0">
                      {openFaq === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  <div 
                    className={\`px-6 overflow-hidden transition-all duration-300 ease-in-out \${openFaq === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}\`}
                  >
                    <p className="text-neutral-400 leading-relaxed border-t border-neutral-800 pt-4">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FINAL CALL TO ACTION */}
        <section className="py-32 px-5 bg-neutral-950 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-teal-900/20 to-transparent blur-3xl rounded-full"></div>
          </div>
          <div className="max-w-[700px] mx-auto relative z-10">
            <h2 className="font-serif text-[40px] md:text-[56px] text-white leading-tight mb-6">
              Build the Body You Want to Live In
            </h2>
            <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
              The medication handles appetite suppression. Let’s build the strength, muscle, and confidence that keeps you healthy for decades to come.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" fullWidth className="bg-teal-600 hover:bg-teal-500 text-white border-none py-6 px-10 text-lg">
                  Apply for 1-on-1 Coaching
                </Button>
              </Link>
              <Link to="/assessment" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" fullWidth className="py-6 px-10 text-lg border-neutral-700 text-neutral-300 hover:bg-neutral-800">
                  Take the Free Assessment
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
`
fs.writeFileSync('pages/OnlineCoaching.tsx', content);
