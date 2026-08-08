import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Button } from '../components/Button';

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
      
      <div className="flex flex-col w-full min-h-screen bg-navy text-white pt-32 pb-24 px-5 md:px-12 items-center">
        <div className="max-w-[800px] w-full mx-auto space-y-16">
          
          <header className="space-y-6">
            <h1 className="font-display text-[40px] md:text-[56px] uppercase leading-[1.1] text-white">
              Evidence-Based 12-Week Support Programs
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] leading-[1.6] text-off-white/90">
              Rapid body mass reduction via clinical interventions represents a profound step forward for your metabolic health. However, shifting your biology so quickly introduces unique physiological demands. Standard gym routines often fail to account for medication-induced fatigue, joint loading changes, or the risk of lean muscle wasting.
            </p>
            <p className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-off-white/80">
              At WRK, we do not offer generic fitness templates. We provide three distinct, position-specific <strong>12-week coaching programs</strong> delivered via a premium hybrid ecosystem (In-Person at Addington, Christchurch, or Online across New Zealand via My PT Hub).
            </p>
            <p className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-off-white/80">
              Select the pathway below that best aligns with your current medical timeline.
            </p>
          </header>

          <hr className="border-navy-light" />

          {/* Track 1 */}
          <section className="space-y-8 bg-navy-mid p-8 md:p-10 rounded-[24px] border border-navy-light shadow-2xl">
            <div className="space-y-4">
              <h2 className="font-display text-[32px] md:text-[40px] uppercase text-orange-burnt leading-[1.1]">
                Track 1: The GLP-1 Muscular Defense Framework
              </h2>
              <ul className="space-y-2 font-sans text-[16px] text-off-white/90">
                <li><strong className="text-white">Best Suited For:</strong> Individuals currently prescribed GLP-1 receptor agonists (e.g., tirzepatide, retatrutide, or variants).</li>
                <li><strong className="text-white">Primary Objective:</strong> To introduce specific resistance variables that data suggests help counteract lean tissue wasting (sarcopenia) and optimize structural health while appetite is clinically suppressed <a href="/resources#sarcopenia" className="text-orange-burnt hover:underline text-sm">[1]</a>.</li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-display text-[24px] uppercase text-white">The 12-Week Phase Breakdown:</h3>
              <div className="space-y-6 font-sans text-[16px] text-off-white/80 leading-[1.6]">
                <div className="pl-4 border-l-2 border-orange-burnt">
                  <h4 className="font-bold text-white text-[18px] mb-1">Weeks 1–4 | Baseline Stabilization & Energy Mapping:</h4>
                  <p>We focus on establishing comfortable movement patterns while monitoring your weekly medication cycle. Training volume is carefully mapped around your peak fatigue or nausea windows to protect your nervous system.</p>
                </div>
                <div className="pl-4 border-l-2 border-orange-burnt">
                  <h4 className="font-bold text-white text-[18px] mb-1">Weeks 5–8 | Progressive Lean Tissue Loading:</h4>
                  <p>As your body adapts, we introduce targeted progressive resistance variables. This phase is engineered to send a clear neurological signal to your system to retain skeletal muscle mass while burning body fat <a href="/resources#resistance" className="text-orange-burnt hover:underline text-sm">[2]</a>.</p>
                </div>
                <div className="pl-4 border-l-2 border-orange-burnt">
                  <h4 className="font-bold text-white text-[18px] mb-1">Weeks 9–12 | Metabolic Preservation & Autonomy:</h4>
                  <p>We refine your movement patterns and optimize your weekly nutrition templates inside My PT Hub, focusing on general macro positions that support your long-term metabolic health as your clinical dosages scale.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Track 2 */}
          <section className="space-y-8 bg-navy-mid p-8 md:p-10 rounded-[24px] border border-navy-light shadow-2xl">
            <div className="space-y-4">
              <h2 className="font-display text-[32px] md:text-[40px] uppercase text-orange-burnt leading-[1.1]">
                Track 2: The Post-Bariatric Structural Recovery Track
              </h2>
              <ul className="space-y-2 font-sans text-[16px] text-off-white/90">
                <li><strong className="text-white">Best Suited For:</strong> Individuals recovering from gastric bypass, sleeve gastrectomy, or metabolic weight loss surgeries.</li>
                <li><strong className="text-white">Primary Objective:</strong> To safely rebuild functional capacity, support shifting joint mechanics, and protect bone mineral density during rapid anatomical transitions <a href="/resources#bone" className="text-orange-burnt hover:underline text-sm">[3]</a>.</li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-display text-[24px] uppercase text-white">The 12-Week Phase Breakdown:</h3>
              <div className="space-y-6 font-sans text-[16px] text-off-white/80 leading-[1.6]">
                <div className="pl-4 border-l-2 border-orange-burnt">
                  <h4 className="font-bold text-white text-[18px] mb-1">Weeks 1–4 | Center-of-Gravity & Joint Realignment:</h4>
                  <p>Rapid mass reduction shifts your physical center of gravity. We utilize low-impact, 30-minute 1:1 sessions focusing heavily on core stability, pelvic floor integrity, and balance work that respects your surgical recovery timeline.</p>
                </div>
                <div className="pl-4 border-l-2 border-orange-burnt">
                  <h4 className="font-bold text-white text-[18px] mb-1">Weeks 5–8 | Functional Strength Re-Education:</h4>
                  <p>We introduce safe, compound closed-kinetic chain movements (like supported squatting and pressing patterns) to structurally load the skeletal system, which literature notes is vital for maintaining bone density <a href="/resources#preservation" className="text-orange-burnt hover:underline text-sm">[4]</a>.</p>
                </div>
                <div className="pl-4 border-l-2 border-orange-burnt">
                  <h4 className="font-bold text-white text-[18px] mb-1">Weeks 9–12 | Lean Mass Consolidation:</h4>
                  <p>We adjust physical workloads to align with your post-surgical nutritional volume. We focus on general high-utilization movement strategies that help you move dynamically and pain-free in the real world.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Track 3 */}
          <section className="space-y-8 bg-navy-mid p-8 md:p-10 rounded-[24px] border border-navy-light shadow-2xl">
            <div className="space-y-4">
              <h2 className="font-display text-[32px] md:text-[40px] uppercase text-orange-burnt leading-[1.1]">
                Track 3: The Metabolic Maintenance & Longevity Pathway
              </h2>
              <ul className="space-y-2 font-sans text-[16px] text-off-white/90">
                <li><strong className="text-white">Best Suited For:</strong> Individuals approaching their target weight goals, transitioning to maintenance dosages, or looking to lock in lifelong behavioral habits.</li>
                <li><strong className="text-white">Primary Objective:</strong> Re-establishing long-term metabolic independence, safeguarding your new body composition, and developing autonomous lifestyle behaviors.</li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-display text-[24px] uppercase text-white">The 12-Week Phase Breakdown:</h3>
              <div className="space-y-6 font-sans text-[16px] text-off-white/80 leading-[1.6]">
                <div className="pl-4 border-l-2 border-orange-burnt">
                  <h4 className="font-bold text-white text-[18px] mb-1">Weeks 1–4 | Reverse Metabolic Adaptation:</h4>
                  <p>As weight loss slows and updates, your body naturally tries to downregulate energy expenditure. We introduce specific progressive loading parameters designed to gently spark your resting metabolic rate.</p>
                </div>
                <div className="pl-4 border-l-2 border-orange-burnt">
                  <h4 className="font-bold text-white text-[18px] mb-1">Weeks 5–8 | Advanced Strength Capacity:</h4>
                  <p>Shifting the focus from weight loss to physical capability. We track progressive performance metrics inside My PT Hub, allowing you to discover what your lighter, stronger frame is capable of executing.</p>
                </div>
                <div className="pl-4 border-l-2 border-orange-burnt">
                  <h4 className="font-bold text-white text-[18px] mb-1">Weeks 9–12 | Autonomy Framework Integration:</h4>
                  <p>We transition you away from high-touch tracking into automated habit maintenance. You will leave this final phase with a clear, self-sufficient template for long-term physical sustainability.</p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-navy-light" />

          {/* Included Features */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-display text-[32px] md:text-[40px] uppercase text-white leading-[1.1]">
                What is Included in Every 12-Week Program?
              </h2>
              <p className="font-sans text-[16px] text-off-white/80">
                Every track is built on a scalable, premium hybrid framework designed to provide high-level accountability without overwhelming your schedule:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-navy-mid p-6 rounded-[16px] border border-navy-light">
                <h3 className="font-bold text-white text-[18px] mb-2">Targeted 30-Minute Sessions</h3>
                <p className="font-sans text-[15px] text-off-white/80">Intentionally designed, low-exhaustion, high-stimulus strength appointments at our Addington facility or fully programmed online.</p>
              </div>
              <div className="bg-navy-mid p-6 rounded-[16px] border border-navy-light">
                <h3 className="font-bold text-white text-[18px] mb-2">Weekly Side-Effect Screening</h3>
                <p className="font-sans text-[15px] text-off-white/80">Ongoing adjustments to your movement blocks based on your real-time physiological feedback and medication tolerance.</p>
              </div>
              <div className="bg-navy-mid p-6 rounded-[16px] border border-navy-light">
                <h3 className="font-bold text-white text-[18px] mb-2">Position-Specific Nutrition Templates</h3>
                <p className="font-sans text-[15px] text-off-white/80">Scalable tracking parameters mapped out in My PT Hub to ensure your daily protein baselines support your lean tissue.</p>
              </div>
              <div className="bg-navy-mid p-6 rounded-[16px] border border-navy-light">
                <h3 className="font-bold text-white text-[18px] mb-2">Transparent Weekly Billing</h3>
                <p className="font-sans text-[15px] text-off-white/80">Convenient weekly auto-bill cycles with a clear, mutually protective cancellation policy.</p>
              </div>
            </div>
          </section>

          <hr className="border-navy-light" />

          {/* Pricing & Offers */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-display text-[32px] md:text-[40px] uppercase text-white leading-[1.1]">
                Program Offer Tiers
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Offer A */}
              <div className="bg-navy-mid p-8 rounded-[24px] border border-navy-light shadow-2xl flex flex-col">
                <div className="mb-6 border-b border-navy-light pb-6">
                  <h3 className="font-display text-[28px] uppercase text-white mb-2">The Hybrid Specialist Tier</h3>
                  <p className="font-sans text-[32px] text-orange-burnt font-bold mb-1">$89 <span className="text-[16px] text-off-white/70 font-normal">/ week</span></p>
                  <p className="text-[14px] text-off-white/70">Billed weekly on a recurring cycle</p>
                </div>
                <div className="space-y-4 flex-grow font-sans text-[15px] text-off-white/90">
                  <p><strong className="text-white">Commitment:</strong> 12-week minimum block commitment</p>
                  <p><strong className="text-white">Delivery Mode:</strong> In-Person (1x weekly 30-minute session at Addington, Christchurch) + Full Digital Management</p>
                  <div className="pt-2">
                    <strong className="text-white block mb-2">Program Alignment:</strong>
                    <ul className="space-y-3">
                      <li className="pl-4 border-l-2 border-orange-burnt">
                        <strong>Track 1 (The GLP-1 Muscular Defense Framework):</strong> For local clients needing in-person technique verification to combat potential sarcopenia.
                      </li>
                      <li className="pl-4 border-l-2 border-orange-burnt">
                        <strong>Track 2 (The Post-Bariatric Structural Recovery Track):</strong> For local post-surgical clients needing hands-on guidance for joint alignment and bone density loading.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Offer B */}
              <div className="bg-navy-mid p-8 rounded-[24px] border border-navy-light shadow-2xl flex flex-col">
                <div className="mb-6 border-b border-navy-light pb-6">
                  <h3 className="font-display text-[28px] uppercase text-white mb-2">The Remote Defense Tier</h3>
                  <p className="font-sans text-[32px] text-orange-burnt font-bold mb-1">$49 <span className="text-[16px] text-off-white/70 font-normal">/ week</span></p>
                  <p className="text-[14px] text-off-white/70">Billed weekly on a recurring cycle</p>
                </div>
                <div className="space-y-4 flex-grow font-sans text-[15px] text-off-white/90">
                  <p><strong className="text-white">Commitment:</strong> 12-week minimum block commitment</p>
                  <p><strong className="text-white">Delivery Mode:</strong> 100% Online (Full programming and coaching delivered via My PT Hub)</p>
                  <div className="pt-2">
                    <strong className="text-white block mb-2">Program Alignment:</strong>
                    <ul className="space-y-3">
                      <li className="pl-4 border-l-2 border-orange-burnt">
                        <strong>Track 1 (GLP-1 Muscular Defense):</strong> Remote digital workout tracking and side-effect screening.
                      </li>
                      <li className="pl-4 border-l-2 border-orange-burnt">
                        <strong>Track 3 (The Metabolic Maintenance & Longevity Pathway):</strong> For independent or remote clients transitioning to medication maintenance and behavioral autonomy.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cancellation Policy */}
          <section className="bg-navy-mid border border-navy-light p-6 md:p-8 rounded-[16px]">
            <h3 className="font-display text-[24px] uppercase text-white mb-6 text-center">Mutual Agreement & Weekly Cancellation Policy Terms</h3>
            <ul className="space-y-4 font-sans text-[15px] text-off-white/80 leading-[1.6]">
              <li className="flex gap-3">
                <span className="text-orange-burnt shrink-0 mt-1">•</span>
                <span><strong className="text-white">12-Week Milestone Commitment:</strong> Terminating a program track prior to the completion of the current 12-week block requires a strict 2-week written notice period via email. Automatic weekly billings scheduled within those 14 days will process as normal.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-burnt shrink-0 mt-1">•</span>
                <span><strong className="text-white">24-Hour Rescheduling Rule (In-Person):</strong> Appointments changed or missed with less than 24 hours notice cannot be refunded or rolled over to the following billing week.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-burnt shrink-0 mt-1">•</span>
                <span><strong className="text-white">Medical Pause Clause:</strong> If a general practitioner or bariatric surgeon requests a physical pause due to acute clinical updates, the account and billing cycles will freeze instantly at zero cost, resuming exactly where it left off once formal clearance is provided.</span>
              </li>
            </ul>
          </section>

          {/* CTA */}
          <div className="text-center bg-navy-light/20 rounded-[24px] p-10 border border-orange-burnt/30 shadow-[0_0_50px_rgba(217,92,20,0.1)] mt-12">
            <h2 className="font-display text-[32px] md:text-[40px] uppercase mb-4 text-white">Ready to begin your phase?</h2>
            <p className="font-sans text-[16px] text-off-white/80 mb-8 max-w-[600px] mx-auto">
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
