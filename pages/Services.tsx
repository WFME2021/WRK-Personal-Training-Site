import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { FileText, Activity, Droplets, Gift } from 'lucide-react';
import { Button } from '../components/Button';

export const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead 
        title="GLP-1 Coaching & Medical Weight Loss Services | WRK"
        description="Specialized GLP-1 coaching and medical weight loss fitness services. Protect your metabolic engine with our strategic remote and in-person tiers."
      />
      
      <div className="flex flex-col w-full min-h-screen bg-neutral-900 text-neutral-100 pt-32 pb-24 px-5 md:px-12 items-center">
        <div className="max-w-[1000px] w-full mx-auto space-y-16">
          
          <header className="space-y-6 max-w-[800px] mx-auto text-center">
            <h1 className="font-serif text-[40px] md:text-[56px] leading-[1.1] text-neutral-100">
              Coaching Tiers &amp; Clinical Blueprints
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] text-neutral-400 leading-relaxed">
              Bridging the gap between medical weight loss prescriptions and real-world fitness habits. 
            </p>
          </header>

          {/* Product 3: The 4-Week Side-Effect Blueprint */}
          <section className="mt-16 pt-8">
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
                  <p className="font-sans text-[32px] text-teal-400 font-bold mb-8">$29 <span className="text-[16px] text-neutral-400 font-normal">NZD (One-Off Access)</span></p>
                  
                  <div className="font-sans text-[16px] text-neutral-400 leading-relaxed space-y-6">
                    <p>
                      Starting a prescription GLP-1 receptor agonist completely changes your relationship with nutrition and exercise. Traditional fitness plans tell you to push harder. But conventional training doesn't understand constant nausea, deep medication fatigue, or the total food aversion that makes eating protein feel impossible.
                    </p>
                    <p>
                      When voluntary food intake drops too low, up to 40% of the weight you lose can come from lean muscle tissue rather than fat. This triggers adaptive thermogenesis, which slows down your baseline metabolism and leads to severe weight loss plateaus. Furthermore, because these advanced clinical therapies suppress your brain's natural thirst signals, medication-induced fluid shifts frequently cause persistent headaches, muscle cramps, and orthostatic dizziness upon standing.
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
                      The GLP-1 Liquid Nutrition Matrix (PDF)
                    </h4>
                    <p className="font-sans text-[14px] text-neutral-400 leading-relaxed">
                      Learn how to comfortably build nutrient-dense, high-protein liquid meals when solid food feels completely unappealing. Protect your metabolic engine and avoid losing lean muscle mass without bloating a slow-emptying stomach.
                    </p>
                  </div>
                  <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                    <h4 className="font-serif text-[18px] text-neutral-100 mb-3 flex items-center gap-2">
                      <span className="text-teal-400"><Activity size={20} /></span>
                      The 30-Minute Fatigue Shield Exercise Guide (PDF)
                    </h4>
                    <p className="font-sans text-[14px] text-neutral-400 leading-relaxed">
                      A low-intensity, self-guided home movement blueprint using body weight and basic bands. Engineered to stimulate muscle tissue safely and protect bone mineral density without draining your energy reserves. 3 video workout templates included.
                    </p>
                  </div>
                  <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                    <h4 className="font-serif text-[18px] text-neutral-100 mb-3 flex items-center gap-2">
                      <span className="text-teal-400"><Droplets size={20} /></span>
                      The Micro-Volume Fluid &amp; Electrolyte Grid (PDF)
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

          {/* Coaching Tiers */}
          <section className="space-y-8 mt-16 pt-8 border-t border-neutral-800">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-[32px] md:text-[40px] text-neutral-100 leading-[1.1]">
                Recurring Coaching Tracks
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Offer 2 */}
              <div className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 hover:border-teal-500/50 transition-all duration-300 shadow-lg flex flex-col group">
                <div className="mb-6 border-b border-neutral-800 pb-6">
                  <h3 className="font-serif text-[28px] text-neutral-100 mb-2">Remote Defense Coaching</h3>
                  <p className="font-sans text-[32px] text-teal-400 font-bold mb-1">$49 <span className="text-[16px] text-neutral-400 font-normal">/ week</span></p>
                  <p className="text-[14px] text-neutral-500">Billed weekly on a recurring cycle</p>
                </div>
                <div className="space-y-4 flex-grow font-sans text-[15px] text-neutral-300">
                  <p><strong className="text-neutral-100">Delivery Mode:</strong> Fully remote 12-week programming tracks managed via the WRK Training App.</p>
                  <p><strong className="text-neutral-100">Inclusions:</strong> Weekly digital check-ins and precise calorie recalibrations adapted to your GLP-1 responses.</p>
                  <p><strong className="text-neutral-100">Alignment:</strong> Fits perfectly with Track 1 (The Foundations Track) or Track 2 (The Kinetic Defense Track).</p>
                </div>
                <div className="mt-8 pt-6 border-t border-neutral-800 space-y-3">
                  <Link to="/assessment" className="block w-full text-center px-6 py-3 bg-teal-500 hover:bg-teal-400 text-neutral-950 font-sans font-bold text-[15px] rounded-lg transition-colors">
                    Take the Free 2-Min Safety Assessment
                  </Link>
                  <a href="/contact#on-page-enquiry-form" className="block w-full text-center px-6 py-3 bg-transparent hover:bg-neutral-900 border border-neutral-700 text-teal-400 font-sans font-semibold text-[14px] rounded-lg transition-colors">
                    Have questions? Submit a Direct Coaching Enquiry
                  </a>
                </div>
              </div>

              {/* Offer 3 */}
              <div className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 hover:border-teal-500/50 transition-all duration-300 shadow-lg flex flex-col group">
                <div className="mb-6 border-b border-neutral-800 pb-6">
                  <h3 className="font-serif text-[28px] text-neutral-100 mb-2">Hybrid Specialist Coaching</h3>
                  <p className="font-sans text-[32px] text-teal-400 font-bold mb-1">$89 <span className="text-[16px] text-neutral-400 font-normal">/ week</span></p>
                  <p className="text-[14px] text-neutral-500">Billed weekly on a recurring cycle</p>
                </div>
                <div className="space-y-4 flex-grow font-sans text-[15px] text-neutral-300">
                  <p><strong className="text-neutral-100">Delivery Mode:</strong> Full remote tracking infrastructure + In-Person Training.</p>
                  <p><strong className="text-neutral-100">Inclusions:</strong> 1x weekly 30-minute in-person muscle defense tracking session at our Addington, Christchurch facility, plus all digital programming.</p>
                  <p><strong className="text-neutral-100">Alignment:</strong> Ideal for securing your daily protein target block and executing either The Foundations Track or The Kinetic Defense Track with hands-on guidance.</p>
                </div>
                <div className="mt-8 pt-6 border-t border-neutral-800 space-y-3">
                  <Link to="/assessment" className="block w-full text-center px-6 py-3 bg-teal-500 hover:bg-teal-400 text-neutral-950 font-sans font-bold text-[15px] rounded-lg transition-colors">
                    Take the Free 2-Min Safety Assessment
                  </Link>
                  <a href="/contact#on-page-enquiry-form" className="block w-full text-center px-6 py-3 bg-transparent hover:bg-neutral-900 border border-neutral-700 text-teal-400 font-sans font-semibold text-[14px] rounded-lg transition-colors">
                    Have questions? Submit a Direct Coaching Enquiry
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};
