import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Button } from '../components/Button';
import { Shield, Activity, Dna, AlignVerticalJustifyCenter, Scale, Columns3, ShieldCheck, HeartPulse, FileText, Droplets, Gift } from 'lucide-react';

export const Programs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead 
        title="GLP-1 12-Week Medical Weight Loss Programs | WRK"
        description="Explore our specialized 12-week physical programs engineered to support rapid medical weight loss and GLP-1 therapy."
      />
      
      <div className="flex flex-col w-full min-h-screen bg-neutral-900 text-neutral-100 pt-32 pb-24 px-5 md:px-12 items-center">
        <div className="max-w-[1000px] w-full mx-auto space-y-16">
          
          <header className="space-y-6 max-w-[800px] mx-auto text-center">
            <h1 className="font-serif text-[40px] md:text-[56px] leading-[1.1] text-neutral-100">
              Evidence-Based 12-Week Support Programs
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] text-neutral-400 leading-relaxed">
              We operate exclusively in 12-week minimum blocks. This is the physiological timeframe required to safely manage adaptive thermogenesis and verify that your skeletal muscle mass is being protected.
            </p>
          </header>

          {/* Track 1 */}
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-[32px] md:text-[40px] text-teal-400 leading-[1.1]">
                Track 1: The Foundations Track
              </h2>
              <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 font-sans text-[16px] text-neutral-300">
                <p className="mb-2"><strong className="text-neutral-100">Best Suited For:</strong> Individuals starting GLP-1 receptor agonists looking for beginner-friendly lifestyle integration to combat fatigue and food aversion.</p>
                <p><strong className="text-neutral-100">Primary Objective:</strong> To defend skeletal muscle mass against rapid caloric deficits and mitigate physical exhaustion through specialized low-intensity resistance frameworks.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-1 p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><Activity size={32} /></div>
                <h4 className="font-serif font-semibold text-neutral-100 text-[18px] mb-2">Weeks 1–4 | Baseline Stabilization</h4>
                <p className="font-sans text-neutral-400 text-sm leading-relaxed">We focus on establishing comfortable movement patterns while monitoring your weekly medication cycle. Training volume is carefully mapped around your peak fatigue or nausea windows to protect your nervous system.</p>
              </div>
              <div className="col-span-1 md:col-span-1 p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><Dna size={32} /></div>
                <h4 className="font-serif font-semibold text-neutral-100 text-[18px] mb-2">Weeks 5–8 | Progressive Lean Tissue Loading</h4>
                <p className="font-sans text-neutral-400 text-sm leading-relaxed">As your body adapts, we introduce targeted progressive resistance variables. This phase is engineered to send a clear neurological signal to your system to retain skeletal muscle mass while burning body fat.</p>
              </div>
              <div className="col-span-1 md:col-span-1 p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><Scale size={32} /></div>
                <h4 className="font-serif font-semibold text-neutral-100 text-[18px] mb-2">Weeks 9–12 | Metabolic Preservation &amp; Autonomy</h4>
                <p className="font-sans text-neutral-400 text-sm leading-relaxed">We refine your movement patterns and optimize your weekly nutrition templates, focusing on general macro positions that support your long-term metabolic health as your clinical dosages scale.</p>
              </div>
            </div>

            {/* CARD MODULE 1: Foundations Track Sign-Up */}
            <div className="max-w-3xl mx-auto bg-neutral-100 rounded-2xl p-8 md:p-12 shadow-xl border border-neutral-200 mt-12 text-center">
              <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-teal-600 mb-4">
                Your Path to Lifestyle Stability
              </span>
              <h2 className="font-serif text-[28px] md:text-[36px] text-slate-900 mb-6 leading-tight">
                Ready to Begin Your Foundations Track?
              </h2>
              <p className="font-sans text-[16px] text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                Secure your premium, personalized 12-week lifestyle framework today. Let’s stabilize your medication side effects, protect your hard-earned metabolic engine, and build safe, sustainable movement habits together. We are here to bridge the gap between your prescription and your daily reality.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/assessment" className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-sans font-semibold text-[16px] rounded-lg transition-colors shadow-lg">
                  Take the Free 2-Min Safety Assessment
                </Link>
                <a href="/contact#on-page-enquiry-form" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-slate-900 hover:bg-slate-100 text-slate-900 font-sans font-semibold text-[16px] rounded-lg transition-colors">
                  Submit a Direct Track Enquiry
                </a>
              </div>
            </div>
          </section>

          {/* Track 2 */}
          <section className="space-y-8 pt-12 border-t border-neutral-800">
            <div className="space-y-4">
              <h2 className="font-serif text-[32px] md:text-[40px] text-teal-400 leading-[1.1]">
                Track 2: The Kinetic Defense Track
              </h2>
              <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 font-sans text-[16px] text-neutral-300">
                <p className="mb-2"><strong className="text-neutral-100">Best Suited For:</strong> Active individuals, runners, HIIT goers, and Pilates attendees using GLP-1s who need advanced muscle protection.</p>
                <p><strong className="text-neutral-100">Primary Objective:</strong> A 12-week full-body resistance blueprint engineered to stimulate muscle tissue safely and retain lean tone without inducing clinical exhaustion.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-1 p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><ShieldCheck size={32} /></div>
                <h4 className="font-serif font-semibold text-neutral-100 text-[18px] mb-2">Weeks 1–4 | Structural Loading</h4>
                <p className="font-sans text-neutral-400 text-sm leading-relaxed">We introduce specific, compound closed-kinetic chain movements to structurally load the skeletal system safely, providing a robust defense for maintaining bone density.</p>
              </div>
              <div className="col-span-1 md:col-span-1 p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><HeartPulse size={32} /></div>
                <h4 className="font-serif font-semibold text-neutral-100 text-[18px] mb-2">Weeks 5–8 | Metabolic Integration</h4>
                <p className="font-sans text-neutral-400 text-sm leading-relaxed">Balancing existing active lifestyles with our specialized muscle defense tracking. We track progressive performance metrics, securing your daily protein target block alongside cardiovascular activities.</p>
              </div>
              <div className="col-span-1 md:col-span-1 p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><AlignVerticalJustifyCenter size={32} /></div>
                <h4 className="font-serif font-semibold text-neutral-100 text-[18px] mb-2">Weeks 9–12 | Lean Mass Consolidation</h4>
                <p className="font-sans text-neutral-400 text-sm leading-relaxed">Adjusting physical workloads to align with your prescription GLP-1 nutritional volume. Integrating high-utilization movement strategies that help you move dynamically and pain-free.</p>
              </div>
            </div>

            {/* CARD MODULE 2: Kinetic Defense Track Sign-Up */}
            <div className="max-w-3xl mx-auto bg-neutral-100 rounded-2xl p-8 md:p-12 shadow-xl border border-neutral-200 mt-12 text-center">
              <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-teal-600 mb-4">
                Performance Preservation Under Deficits
              </span>
              <h2 className="font-serif text-[28px] md:text-[36px] text-slate-900 mb-6 leading-tight">
                Secure Your Kinetic Defense Shield
              </h2>
              <p className="font-sans text-[16px] text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                Don't let a clinical calorie deficit strip away your muscle tone, flatten your strength, or drain your active lifestyle energy. Lock in your advanced 12-week weight-bearing framework to force muscle retention, activate fast-twitch fibers safely, and protect your metabolic rate. Keep the results you've worked so hard to build.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/assessment" className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-sans font-semibold text-[16px] rounded-lg transition-colors shadow-lg">
                  Take the Free 2-Min Safety Assessment
                </Link>
                <a href="/contact#on-page-enquiry-form" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-slate-900 hover:bg-slate-100 text-slate-900 font-sans font-semibold text-[16px] rounded-lg transition-colors">
                  Submit a Direct Track Enquiry
                </a>
              </div>
            </div>
          </section>

          {/* Product 3 */}
          <section className="pt-12 border-t border-neutral-800">
            <div className="bg-neutral-950 border border-neutral-800 hover:border-teal-500/50 transition-all duration-300 rounded-2xl shadow-lg overflow-hidden group">
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-teal-400 mb-4">
                    Product 3: Self-Guided Digital Toolkit
                  </span>
                  <h2 className="font-serif text-[28px] md:text-[36px] text-neutral-100 mb-4 leading-tight">
                    The 4-Week Side-Effect Blueprint
                  </h2>
                  <h3 className="font-sans text-[18px] md:text-[20px] font-medium text-neutral-300 leading-relaxed mb-6">
                    A practical, data-driven digital toolkit to counter suppressed thirst loops, manage food aversion, and prevent GLP-1 muscle loss during rapid fat loss.
                  </h3>
                  
                  <div className="font-sans text-[16px] text-neutral-400 leading-relaxed space-y-6">
                    <p>
                      Starting a prescription GLP-1 receptor agonist completely changes your relationship with nutrition and exercise. Traditional fitness plans tell you to push harder. But conventional training doesn't understand constant nausea, deep medication fatigue, or the total food aversion that makes eating protein feel impossible.
                    </p>
                    <p>
                      You don't need a grueling, exhausting gym workout plan. You need an automated, practical framework to help manage GLP-1 side effects, maintain your structural safety, stay comfortable, and defend your hard-earned lean muscle mass.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                    <h4 className="font-serif text-[18px] text-neutral-100 mb-3 flex items-center gap-2">
                      <span className="text-teal-400"><FileText size={20} /></span>
                      The GLP-1 Liquid Nutrition Matrix
                    </h4>
                    <p className="font-sans text-[14px] text-neutral-400 leading-relaxed">
                      Learn how to comfortably build nutrient-dense, high-protein liquid meals when solid food feels completely unappealing. Protect your metabolic engine without bloating a slow-emptying stomach.
                    </p>
                  </div>
                  <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                    <h4 className="font-serif text-[18px] text-neutral-100 mb-3 flex items-center gap-2">
                      <span className="text-teal-400"><Activity size={20} /></span>
                      The 30-Minute Fatigue Shield Guide
                    </h4>
                    <p className="font-sans text-[14px] text-neutral-400 leading-relaxed">
                      A low-intensity, self-guided home movement blueprint using body weight and basic bands. Engineered to stimulate muscle tissue safely and protect bone mineral density without draining your energy reserves.
                    </p>
                  </div>
                  <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                    <h4 className="font-serif text-[18px] text-neutral-100 mb-3 flex items-center gap-2">
                      <span className="text-teal-400"><Droplets size={20} /></span>
                      The Micro-Volume Fluid Grid
                    </h4>
                    <p className="font-sans text-[14px] text-neutral-400 leading-relaxed">
                      A precise daily spacing layout to hit critical sodium, potassium, and magnesium targets. Hydrate by design rather than by thirst to eliminate dehydration headaches and standing dizziness.
                    </p>
                  </div>
                  <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                    <h4 className="font-serif text-[18px] text-neutral-100 mb-3 flex items-center gap-2">
                      <span className="text-teal-400"><Gift size={20} /></span>
                      Bonus: 4-Week Tracking Timeline
                    </h4>
                    <p className="font-sans text-[14px] text-neutral-400 leading-relaxed">
                      Automated instant access via the secure files tab inside the WRK Training App.
                    </p>
                  </div>
                </div>

                <div className="bg-neutral-900/80 p-8 rounded-xl border border-neutral-800 text-center">
                  <a href="#" className="inline-block w-full sm:w-auto px-8 py-4 bg-teal-500 hover:bg-teal-400 text-neutral-950 font-sans font-semibold text-[16px] rounded-md transition-colors shadow-lg hover:shadow-teal-500/20 mb-4">
                    Get The Blueprint Toolkit &mdash; $29
                  </a>
                  <p className="font-sans text-[13px] text-neutral-400 max-w-[500px] mx-auto mb-6">
                    ⚡ Instant Access. Closes checkout page and automatically delivers your digital asset suite via the custom WRK Training App dashboard.
                  </p>
                  <div className="pt-6 border-t border-neutral-800 max-w-lg mx-auto">
                    <Link to="/contact" className="font-sans text-[14px] text-teal-400 hover:text-teal-300 transition-colors underline-offset-4 hover:underline">
                      Not sure if the self-guided toolkit or 1-on-1 coaching is right for your medication phase? Click here to message our specialist support team directly.
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-900 px-8 py-6 border-t border-neutral-800">
                <p className="font-sans text-[12px] text-neutral-500 leading-relaxed text-center">
                  Disclaimer: This digital toolkit provides generalized operational support parameters based on sports science and clinical nutrition guidelines. It is not medical advice, diagnosis, or treatment. Individual requirements vary based on medical history and prescription parameters. Always consult your prescribing physician before changing your dietary or hydration targets.
                </p>
              </div>
            </div>
          </section>
          
          <div className="text-center mt-12">
             <Link to="/services">
                <Button size="lg" className="w-full sm:w-auto">View Coaching Tiers</Button>
             </Link>
          </div>

        </div>
      </div>
    </>
  );
};
