import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { ChevronDown, Dumbbell, Utensils, Activity, Smartphone, Video, MessageSquare, Check, ArrowRight, ShieldCheck } from 'lucide-react';

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
      a: "We operate in 12-week training blocks. We believe coaching should prove its value while giving you enough structured time to see tangible body composition and strength benefits."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Online GLP-1 Fitness Coaching",
    "provider": {
      "@type": "HealthAndFitnessBusiness",
      "name": "WRK Personal Training"
    },
    "description": "Specialist online fitness and nutrition coaching for GLP-1 patients in New Zealand and worldwide. Preserve lean muscle, simplify protein intake, and build lasting strength habits."
  };

  return (
    <>
      <SeoHead 
        title="Online GLP-1 Fitness Coach | Protect Muscle & Build Strength | WRK"
        description="Specialist online fitness and nutrition coaching for GLP-1 patients in New Zealand and worldwide. Preserve lean muscle, simplify protein intake, and build lasting strength habits."
        schema={schema}
      />
      <div className="bg-canvas text-charcoal min-h-screen font-sans selection:bg-spruce-800 selection:text-sand-50">
        
        {/* 1. Hero Section */}
        <section className="bg-canvas pt-14 pb-16 px-6 max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-sans text-spruce-800 font-semibold mb-4">
            ONLINE COACHING · NEW ZEALAND & WORLDWIDE
          </p>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight max-w-3xl mx-auto mb-6">
            The Weight Is Dropping. <span className="block sm:inline italic text-spruce-800">Let's Protect Your Strength.</span>
          </h1>
          
          <p className="text-charcoal/80 max-w-xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
            Personalized online fitness and nutrition coaching built specifically for individuals taking GLP-1 medications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-spruce-800 text-sand-50 hover:bg-spruce-900 px-6 py-3.5 rounded-md text-xs uppercase tracking-widest font-semibold transition-colors shadow-sm w-full sm:w-auto text-center"
            >
              Apply for Coaching
            </Link>
            <Link
              to="/assessment"
              className="border border-charcoal/20 text-charcoal hover:bg-sand-100 px-6 py-3.5 rounded-md text-xs uppercase tracking-widest font-semibold transition-colors w-full sm:w-auto text-center"
            >
              Take the Free Assessment
            </Link>
          </div>
          
          {/* Trust Pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 text-xs text-charcoal/70">
            <span className="flex items-center">✓ Tailored to your equipment</span>
            <span className="hidden sm:inline text-charcoal/30">•</span>
            <span className="flex items-center">✓ No burnout workouts</span>
            <span className="hidden sm:inline text-charcoal/30">•</span>
            <span className="flex items-center">✓ Evidence-based muscle defense</span>
          </div>
        </section>

        {/* 2. The Reality Callout Band */}
        <section className="bg-sand-100/70 py-16 px-6 border-y border-charcoal/5">
          <div className="max-w-5xl mx-auto items-center grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column (Stat Box) */}
            <div className="bg-white rounded-2xl p-8 border border-charcoal/5 shadow-sm text-center md:text-left">
              <div className="font-serif text-5xl md:text-6xl text-spruce-800 font-bold mb-2">
                Up to 40%
              </div>
              <div className="font-serif text-lg text-charcoal leading-snug">
                of rapid weight loss can come from lean muscle tissue.
              </div>
              <p className="text-xs text-charcoal/60 mt-3 pt-3 border-t border-charcoal/5">
                Clinical trials show progressive resistance training is vital to preserve metabolic rate during medical weight loss.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">
                EVIDENCE-BASED PERSPECTIVE
              </span>
              <h2 className="font-serif text-3xl text-charcoal mb-4 tracking-tight">
                A Different Approach to Training
              </h2>
              <p className="text-charcoal/80 text-base leading-relaxed">
                Traditional fitness assumes high energy and endless gym hours. We design around your reality: lower appetite, fluctuating injection days, and the absolute priority of keeping muscle while the scale drops.
              </p>
            </div>
          </div>
        </section>

        {/* 3. The 3-Step Framework */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">
              OUR METHODOLOGY
            </span>
            <h2 className="font-serif text-3xl text-charcoal tracking-tight">
              How We Protect Your Body
            </h2>
            <p className="text-sm text-charcoal/70 mt-2">A structured protocol calibrated to your weekly medication cycle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 border border-charcoal/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 bg-sand-100 px-2 py-0.5 rounded inline-block mb-3">
                  01 · RESISTANCE TRAINING
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  Muscle-Preserving Strength
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Targeted 2–3 day programs signaling your body to hold onto lean muscle while bodyweight drops. Tailored for gym or home.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                Focus: Progressive overload & mechanical tension
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 border border-charcoal/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 bg-sand-100 px-2 py-0.5 rounded inline-block mb-3">
                  02 · NUTRITION STRATEGY
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  Low-Friction Fueling
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Digestible protein anchoring and hydration protocols designed to meet your targets without triggering nausea.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                Focus: Simple protein anchors & GI tolerance
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 border border-charcoal/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 bg-sand-100 px-2 py-0.5 rounded inline-block mb-3">
                  03 · ADAPTIVE PACING
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  Biofeedback & Dose Syncing
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Weekly adjustments based on your dose titration, fatigue, and recovery so consistency never leads to burnout.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                Focus: Dose-matched volume & recovery
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Coaching Experience */}
        <section className="bg-sand-50 py-16 px-6 border-y border-charcoal/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">
                COACHING DELIVERABLES
              </span>
              <h2 className="font-serif text-3xl text-charcoal tracking-tight">
                High-Touch Guidance, Anywhere
              </h2>
              <p className="text-sm text-charcoal/70 mt-2">
                All the accountability of in-person training with the flexibility of mobile access.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl p-6 border border-charcoal/5 shadow-sm flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-sand-100 text-spruce-800 flex items-center justify-center shrink-0">
                  <Smartphone size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-charcoal mb-1">WRK Training App</h4>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    Personalized workouts, exercise video demos, and automated progress logging on your phone.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-xl p-6 border border-charcoal/5 shadow-sm flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-sand-100 text-spruce-800 flex items-center justify-center shrink-0">
                  <Video size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-charcoal mb-1">Video Form Feedback</h4>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    Upload lifting clips directly in-app for ongoing coaching on posture and mechanics.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-xl p-6 border border-charcoal/5 shadow-sm flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-sand-100 text-spruce-800 flex items-center justify-center shrink-0">
                  <Activity size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-charcoal mb-1">Weekly Analysis</h4>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    Comprehensive check-ins to review biofeedback, habit compliance, and adjust your routine.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-xl p-6 border border-charcoal/5 shadow-sm flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-sand-100 text-spruce-800 flex items-center justify-center shrink-0">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-charcoal mb-1">Direct Coach Access</h4>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    In-app messaging for grocery questions, low-energy days, and dose-day modifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Clean Pricing Tier */}
        <section className="py-20 px-6 max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">
            INVESTMENT
          </span>
          <h2 className="font-serif text-3xl text-charcoal mb-8 tracking-tight">
            Transparent Coaching Investment
          </h2>

          <div className="bg-spruce-800 text-sand-50 rounded-2xl p-8 sm:p-10 shadow-lg text-left relative overflow-hidden">
            <div className="text-xs uppercase tracking-widest text-sand-200 mb-2 font-semibold">
              12-WEEK GUIDED PROGRAM
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-sand-50 mb-4">
              Full 1-on-1 Online Coaching
            </h3>
            
            <div className="flex flex-wrap items-baseline gap-2 mb-2">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-sand-50">$49 NZD</span>
              <span className="text-sand-200/80 text-sm">/ week</span>
            </div>
            <p className="text-xs text-sand-200/70 border-b border-sand-200/10 pb-6 mb-6">
              (Billed weekly · Approx. $29 USD / £24 GBP / $45 AUD)
            </p>

            <ul className="space-y-3.5 my-8 text-sand-100 text-sm">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-sand-200 shrink-0" />
                <span>Bespoke home or gym resistance program</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-sand-200 shrink-0" />
                <span>Low-appetite protein and nutrition strategies</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-sand-200 shrink-0" />
                <span>Weekly video analysis & check-in adjustments</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-sand-200 shrink-0" />
                <span>Direct in-app messaging and technique analysis</span>
              </li>
            </ul>

            <div className="space-y-3 pt-2">
              <Link
                to="/contact"
                className="bg-sand-100 text-spruce-900 hover:bg-white w-full py-4 text-center rounded-md font-semibold text-xs uppercase tracking-widest block transition-colors shadow-sm"
              >
                Apply for Online Coaching
              </Link>
              <Link
                to="/assessment"
                className="border border-sand-200/20 text-sand-100 hover:bg-sand-200/10 w-full py-3.5 text-center rounded-md font-semibold text-xs uppercase tracking-widest block transition-colors"
              >
                Take the Free Assessment First
              </Link>
            </div>
          </div>
        </section>

        {/* 6. FAQ Accordion */}
        <section className="py-20 px-6 max-w-3xl mx-auto border-t border-charcoal/5">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-3xl text-charcoal tracking-tight">
              Common Questions
            </h2>
          </div>

          <div className="bg-white rounded-xl border border-charcoal/5 p-6 md:p-8 shadow-sm">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border-b border-charcoal/10 last:border-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg text-charcoal group-hover:text-spruce-800 transition-colors pr-6">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`shrink-0 text-spruce-800 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      size={20}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-charcoal/80 text-sm md:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 7. Final Banner */}
        <section className="bg-sand-100 py-16 px-6 text-center border-t border-charcoal/5">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl text-charcoal tracking-tight">
              Build the Body You Want to Live In
            </h2>
            <p className="text-charcoal/80 text-base leading-relaxed">
              The medication regulates appetite. We build the physical capability that keeps you healthy for decades.
            </p>
            <div className="pt-2">
              <Link
                to="/assessment"
                className="inline-flex items-center justify-center bg-spruce-800 text-sand-50 hover:bg-spruce-900 rounded-md px-8 py-3.5 text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
              >
                Take the Free Assessment
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
