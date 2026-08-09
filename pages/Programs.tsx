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
        title="Specialized 12-Week Medical Weight Loss Fitness Programs | WRK"
        description="Explore our specialized, evidence-based 12-week physical programs engineered to support rapid medical weight loss and post-bariatric recovery in Christchurch."
      />
      
      <div className="flex flex-col w-full min-h-screen bg-neutral-900 text-neutral-100 pt-32 pb-24 px-5 md:px-12 items-center">
        <div className="max-w-[1000px] w-full mx-auto space-y-16">
          
          <header className="space-y-6 max-w-[800px] mx-auto text-center">
            <h1 className="font-serif text-[40px] md:text-[56px] leading-[1.1] text-neutral-100">
              Evidence-Based 12-Week Support Programs
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] leading-relaxed text-neutral-300">
              Rapid body mass reduction via clinical interventions represents a profound step forward for your metabolic health. However, shifting your biology so quickly introduces unique physiological demands. Standard gym routines often fail to account for medication-induced fatigue, joint loading changes, or the risk of lean muscle wasting.
            </p>
            <p className="font-sans text-[16px] md:text-[18px] leading-relaxed text-neutral-400">
              At WRK, we do not offer generic fitness templates. We provide three distinct, position-specific <strong>12-week coaching programs</strong> delivered via a premium hybrid ecosystem (In-Person at Addington, Christchurch, or Online across New Zealand via My PT Hub).
            </p>
          </header>

          <hr className="border-neutral-800" />

          {/* Track 1 */}
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-[32px] md:text-[40px] text-teal-400 leading-[1.1]">
                Track 1: The GLP-1 Muscular Defense Framework
              </h2>
              <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 font-sans text-[16px] text-neutral-300">
                <p className="mb-2"><strong className="text-neutral-100">Best Suited For:</strong> Individuals currently prescribed GLP-1 receptor agonists (e.g., tirzepatide, retatrutide, or variants).</p>
                <p><strong className="text-neutral-100">Primary Objective:</strong> To introduce specific resistance variables that data suggests help counteract lean tissue wasting (sarcopenia) and optimize structural health while appetite is clinically suppressed <a href="/resources#sarcopenia" className="text-teal-400 hover:underline text-sm">[1]</a>.</p>
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
                <p className="font-sans text-neutral-400 text-sm leading-relaxed">As your body adapts, we introduce targeted progressive resistance variables. This phase is engineered to send a clear neurological signal to your system to retain skeletal muscle mass while burning body fat <a href="/resources#resistance" className="text-teal-400 hover:underline text-sm">[2]</a>.</p>
              </div>
              <div className="col-span-1 md:col-span-1 p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><Scale size={32} /></div>
                <h4 className="font-serif font-semibold text-neutral-100 text-[18px] mb-2">Weeks 9–12 | Metabolic Preservation & Autonomy</h4>
                <p className="font-sans text-neutral-400 text-sm leading-relaxed">We refine your movement patterns and optimize your weekly nutrition templates inside My PT Hub, focusing on general macro positions that support your long-term metabolic health as your clinical dosages scale.</p>
              </div>
            </div>
          </section>

          {/* Track 2 */}
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-[32px] md:text-[40px] text-teal-400 leading-[1.1]">
                Track 2: The Post-Bariatric Structural Recovery Track
              </h2>
              <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 font-sans text-[16px] text-neutral-300">
                <p className="mb-2"><strong className="text-neutral-100">Best Suited For:</strong> Individuals recovering from gastric bypass, sleeve gastrectomy, or metabolic weight loss surgeries.</p>
                <p><strong className="text-neutral-100">Primary Objective:</strong> To safely rebuild functional capacity, support shifting joint mechanics, and protect bone mineral density during rapid anatomical transitions <a href="/resources#bone" className="text-teal-400 hover:underline text-sm">[3]</a>.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-1 p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><AlignVerticalJustifyCenter size={32} /></div>
                <h4 className="font-serif font-semibold text-neutral-100 text-[18px] mb-2">Weeks 1–4 | Center-of-Gravity & Joint Realignment</h4>
                <p className="font-sans text-neutral-400 text-sm leading-relaxed">Rapid mass reduction shifts your physical center of gravity. We utilize low-impact, 30-minute 1:1 sessions focusing heavily on core stability, pelvic floor integrity, and balance work that respects your surgical recovery timeline.</p>
              </div>
              <div className="col-span-1 md:col-span-1 p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><Columns3 size={32} /></div>
                <h4 className="font-serif font-semibold text-neutral-100 text-[18px] mb-2">Weeks 5–8 | Functional Strength Re-Education</h4>
                <p className="font-sans text-neutral-400 text-sm leading-relaxed">We introduce safe, compound closed-kinetic chain movements to structurally load the skeletal system, which literature notes is vital for maintaining bone density <a href="/resources#preservation" className="text-teal-400 hover:underline text-sm">[4]</a>.</p>
              </div>
              <div className="col-span-1 md:col-span-1 p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><ShieldCheck size={32} /></div>
                <h4 className="font-serif font-semibold text-neutral-100 text-[18px] mb-2">Weeks 9–12 | Lean Mass Consolidation</h4>
                <p className="font-sans text-neutral-400 text-sm leading-relaxed">We adjust physical workloads to align with your post-surgical nutritional volume. We focus on general high-utilization movement strategies that help you move dynamically and pain-free in the real world.</p>
              </div>
            </div>
          </section>

          {/* Track 3 */}
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-[32px] md:text-[40px] text-teal-400 leading-[1.1]">
                Track 3: The Metabolic Maintenance & Longevity Pathway
              </h2>
              <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 font-sans text-[16px] text-neutral-300">
                <p className="mb-2"><strong className="text-neutral-100">Best Suited For:</strong> Individuals approaching their target weight goals, transitioning to maintenance dosages, or looking to lock in lifelong behavioral habits.</p>
                <p><strong className="text-neutral-100">Primary Objective:</strong> Re-establishing long-term metabolic independence, safeguarding your new body composition, and developing autonomous lifestyle behaviors.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-1 p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><HeartPulse size={32} /></div>
                <h4 className="font-serif font-semibold text-neutral-100 text-[18px] mb-2">Weeks 1–4 | Reverse Metabolic Adaptation</h4>
                <p className="font-sans text-neutral-400 text-sm leading-relaxed">As weight loss slows and updates, your body naturally tries to downregulate energy expenditure. We introduce specific progressive loading parameters designed to gently spark your resting metabolic rate.</p>
              </div>
              <div className="col-span-1 md:col-span-1 p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><Shield size={32} /></div>
                <h4 className="font-serif font-semibold text-neutral-100 text-[18px] mb-2">Weeks 5–8 | Advanced Strength Capacity</h4>
                <p className="font-sans text-neutral-400 text-sm leading-relaxed">Shifting the focus from weight loss to physical capability. We track progressive performance metrics inside My PT Hub, allowing you to discover what your lighter, stronger frame is capable of executing.</p>
              </div>
              <div className="col-span-1 md:col-span-1 p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><Activity size={32} /></div>
                <h4 className="font-serif font-semibold text-neutral-100 text-[18px] mb-2">Weeks 9–12 | Autonomy Framework Integration</h4>
                <p className="font-sans text-neutral-400 text-sm leading-relaxed">We transition you away from high-touch tracking into automated habit maintenance. You will leave this final phase with a clear, self-sufficient template for long-term physical sustainability.</p>
              </div>
            </div>
          </section>

          <hr className="border-neutral-800" />

          {/* Pricing & Offers Bento Grid */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-[32px] md:text-[40px] text-neutral-100 leading-[1.1]">
                Program Offer Tiers
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Offer A */}
              <div className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 hover:border-teal-500/50 transition-all duration-300 shadow-lg flex flex-col group">
                <div className="mb-6 border-b border-neutral-800 pb-6">
                  <h3 className="font-serif text-[28px] text-neutral-100 mb-2">The Hybrid Specialist Tier</h3>
                  <p className="font-sans text-[32px] text-teal-400 font-bold mb-1">$89 <span className="text-[16px] text-neutral-400 font-normal">/ week</span></p>
                  <p className="text-[14px] text-neutral-500">Billed weekly on a recurring cycle</p>
                </div>
                <div className="space-y-4 flex-grow font-sans text-[15px] text-neutral-300">
                  <p><strong className="text-neutral-100">Commitment:</strong> 12-week minimum block commitment</p>
                  <p><strong className="text-neutral-100">Delivery Mode:</strong> In-Person (1x weekly 30-minute session at Addington) + Digital</p>
                  <div className="pt-2">
                    <strong className="text-neutral-100 block mb-2">Program Alignment:</strong>
                    <ul className="space-y-3">
                      <li className="pl-4 border-l-2 border-teal-500">
                        <strong className="text-teal-400">Track 1:</strong> For local clients needing in-person technique verification.
                      </li>
                      <li className="pl-4 border-l-2 border-teal-500">
                        <strong className="text-teal-400">Track 2:</strong> For local post-surgical clients needing hands-on guidance.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Offer B */}
              <div className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 hover:border-teal-500/50 transition-all duration-300 shadow-lg flex flex-col group">
                <div className="mb-6 border-b border-neutral-800 pb-6">
                  <h3 className="font-serif text-[28px] text-neutral-100 mb-2">The Remote Defense Tier</h3>
                  <p className="font-sans text-[32px] text-teal-400 font-bold mb-1">$49 <span className="text-[16px] text-neutral-400 font-normal">/ week</span></p>
                  <p className="text-[14px] text-neutral-500">Billed weekly on a recurring cycle</p>
                </div>
                <div className="space-y-4 flex-grow font-sans text-[15px] text-neutral-300">
                  <p><strong className="text-neutral-100">Commitment:</strong> 12-week minimum block commitment</p>
                  <p><strong className="text-neutral-100">Delivery Mode:</strong> 100% Online (Full programming delivered via My PT Hub)</p>
                  <div className="pt-2">
                    <strong className="text-neutral-100 block mb-2">Program Alignment:</strong>
                    <ul className="space-y-3">
                      <li className="pl-4 border-l-2 border-teal-500">
                        <strong className="text-teal-400">Track 1:</strong> Remote digital workout tracking and side-effect screening.
                      </li>
                      <li className="pl-4 border-l-2 border-teal-500">
                        <strong className="text-teal-400">Track 3:</strong> For clients transitioning to medication maintenance autonomy.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Low-Ticket Digital Offer Bento Grid Card */}
          <section className="mt-16 pt-8 border-t border-neutral-800">
            <div className="bg-neutral-950 border border-neutral-800 hover:border-teal-500/50 transition-all duration-300 rounded-2xl shadow-lg overflow-hidden group">
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-teal-400 mb-4">
                    Self-Guided Medical Weight Loss Support
                  </span>
                  <h2 className="font-serif text-[28px] md:text-[36px] text-neutral-100 mb-4 leading-tight">
                    The GLP-1 Side-Effect Mitigation &amp; Muscle Defense Blueprint
                  </h2>
                  <h3 className="font-sans text-[18px] md:text-[20px] font-medium text-neutral-300 leading-relaxed mb-6">
                    A practical, data-driven digital toolkit to counter suppressed thirst loops, manage food aversion, and prevent GLP-1 muscle loss during rapid fat loss.
                  </h3>
                  <p className="font-sans text-[32px] text-teal-400 font-bold mb-8">$29 <span className="text-[16px] text-neutral-400 font-normal">NZD (One-Off Access)</span></p>
                  
                  <div className="font-sans text-[16px] text-neutral-400 leading-relaxed space-y-6">
                    <p>
                      Starting a prescription GLP-1 receptor agonist or recovering from bariatric surgery completely changes your relationship with nutrition and exercise. Traditional fitness plans tell you to push harder. But conventional training doesn't understand constant nausea, deep medication fatigue, or the total food aversion that makes eating protein feel impossible.
                    </p>
                    <p>
                      When voluntary food intake drops too low, up to 40% of the weight you lose can come from lean muscle tissue rather than fat. This triggers adaptive thermogenesis, which slows down your baseline metabolism and leads to severe weight loss plateaus. Furthermore, because these advanced clinical therapies suppress your brain's natural thirst signals, chronic bariatric dehydration and fluid shifts frequently cause persistent headaches, muscle cramps, and orthostatic dizziness upon standing.
                    </p>
                    <p>
                      You don't need a grueling, exhausting gym workout plan. You need an automated, practical framework to help manage GLP-1 side effects, maintain your structural safety, stay comfortable, and defend your hard-earned lean muscle mass.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {/* Item 1 */}
                  <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                    <h4 className="font-serif text-[18px] text-neutral-100 mb-3 flex items-center gap-2">
                      <span className="text-teal-400"><FileText size={20} /></span>
                      The GLP-1 Liquid Nutrition Matrix (PDF)
                    </h4>
                    <p className="font-sans text-[14px] text-neutral-400 leading-relaxed">
                      Learn how to comfortably build nutrient-dense, high-protein liquid meals when solid food feels completely unappealing. Protect your nitrogen balance and avoid sarcopenic muscle wasting without bloating a slow-emptying stomach.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                    <h4 className="font-serif text-[18px] text-neutral-100 mb-3 flex items-center gap-2">
                      <span className="text-teal-400"><Activity size={20} /></span>
                      The 30-Minute Fatigue Shield Exercise Guide (PDF)
                    </h4>
                    <p className="font-sans text-[14px] text-neutral-400 leading-relaxed">
                      A low-intensity, self-guided home movement blueprint using body weight and basic bands. Engineered to stimulate muscle tissue and protect bone mineral density without draining your energy reserves.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                    <h4 className="font-serif text-[18px] text-neutral-100 mb-3 flex items-center gap-2">
                      <span className="text-teal-400"><Droplets size={20} /></span>
                      The Micro-Volume Fluid &amp; Electrolyte Grid (PDF)
                    </h4>
                    <p className="font-sans text-[14px] text-neutral-400 leading-relaxed">
                      A precise daily spacing layout to hit critical sodium, potassium, and magnesium targets. Hydrate by design rather than by thirst to eliminate dehydration headaches and standing dizziness.
                    </p>
                  </div>

                  {/* Item 4 */}
                  <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                    <h4 className="font-serif text-[18px] text-neutral-100 mb-3 flex items-center gap-2">
                      <span className="text-teal-400"><Gift size={20} /></span>
                      Bonus: High-Protein Gastro-Shield Smoothie Guide (PDF)
                    </h4>
                    <p className="font-sans text-[14px] text-neutral-400 leading-relaxed">
                      Easy-to-digest blender recipes utilizing clinical ingredients like fresh ginger and mint to soothe the stomach lining while delivering essential amino acids.
                    </p>
                  </div>
                </div>

                <div className="bg-neutral-900/80 p-8 rounded-xl border border-neutral-800 text-center">
                  <a href="#" className="inline-block w-full sm:w-auto px-8 py-4 bg-teal-500 hover:bg-teal-400 text-neutral-950 font-sans font-semibold text-[16px] rounded-md transition-colors shadow-lg hover:shadow-teal-500/20 mb-4">
                    Get The Blueprint Toolkit &mdash; $29
                  </a>
                  <p className="font-sans text-[13px] text-neutral-400 max-w-[500px] mx-auto">
                    ⚡ Instant Access. Closes checkout page and automatically delivers your digital asset suite via the My PT Hub dashboard mobile app framework.
                  </p>
                </div>
              </div>
              
              <div className="bg-neutral-900 px-8 py-6 border-t border-neutral-800">
                <p className="font-sans text-[12px] text-neutral-500 leading-relaxed text-center">
                  Disclaimer: This digital toolkit provides generalized operational support parameters based on sports science and clinical nutrition guidelines. It is not medical advice, diagnosis, or treatment. Individual requirements vary based on medical history and prescription parameters. Always consult your prescribing physician before changing your dietary or hydration targets.
                </p>
              </div>
            </div>
          </section>

          {/* Cancellation Policy */}
          <section className="bg-gradient-to-br from-neutral-950 to-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-lg">
            <h3 className="font-serif text-[24px] text-neutral-100 mb-6 text-center">Mutual Agreement & Cancellation Policy</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-[14px] text-neutral-300 leading-relaxed">
              <div className="space-y-2">
                <strong className="text-teal-400 block text-[16px]">12-Week Milestone Commitment:</strong>
                <p>Terminating a program track prior to the completion of the current 12-week block requires a strict 2-week written notice period via email. Automatic weekly billings scheduled within those 14 days will process as normal.</p>
              </div>
              <div className="space-y-2">
                <strong className="text-teal-400 block text-[16px]">24-Hour Rescheduling Rule:</strong>
                <p>Appointments changed or missed with less than 24 hours notice cannot be refunded or rolled over to the following billing week.</p>
              </div>
              <div className="space-y-2">
                <strong className="text-teal-400 block text-[16px]">Medical Pause Clause:</strong>
                <p>If a practitioner or surgeon requests a physical pause due to clinical updates, the account freezes instantly at zero cost, resuming exactly where it left off once formal clearance is provided.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-teal-950/20 rounded-2xl p-10 border border-teal-500/30 shadow-[0_0_50px_rgba(45,212,191,0.05)] mt-12 transition-all duration-300 hover:shadow-[0_0_50px_rgba(45,212,191,0.1)]">
            <h2 className="font-serif text-[32px] md:text-[40px] mb-4 text-neutral-100">Ready to begin your phase?</h2>
            <p className="font-sans text-[16px] text-neutral-400 mb-8 max-w-[600px] mx-auto leading-relaxed">
              Whether you need in-person support in Christchurch or online coaching, we have a framework designed to protect your metabolic health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/online-coaching">
                <Button size="lg" className="w-full sm:w-auto">Explore Online Coaching</Button>
              </Link>
              <Link to="/personal-training">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">Explore In-Person Training</Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
