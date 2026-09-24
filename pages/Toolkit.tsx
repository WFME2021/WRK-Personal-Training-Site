import React, { useEffect, useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { Smartphone, Check, ChevronDown, CheckCircle2, XCircle, ShieldCheck, Quote } from 'lucide-react';

export const Toolkit: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const checkoutUrl = "https://wrkpersonaltraining.mypthub.net/p/236048";

  const faqs = [
    {
      q: "How do I access the toolkit after buying?",
      a: "After completing your purchase, you will receive an immediate welcome email with instructions to download the WRK Training App on iOS or Android and set up your login. Your workouts and nutrition resources will be pre-loaded into your account."
    },
    {
      q: "Is there an ongoing monthly subscription for the app?",
      a: "No. The $29 NZD payment is a one-time charge. You get ongoing access to the toolkit, workout logs, video demonstrations, and habit tools without recurring monthly fees."
    },
    {
      q: "What if I don't have gym equipment?",
      a: "The app contains dedicated tracks for both commercial gyms and home setups using basic dumbbells and resistance bands. You can toggle between them depending on where you train."
    },
    {
      q: "Can I upgrade to 1-on-1 coaching later?",
      a: "Yes. Every Toolkit member receives a 100% credit: apply your full $29 purchase toward your first month of WRK 1-on-1 coaching at any time right from the app or by contacting Hayden."
    }
  ];

  const comparisonItems = [
    {
      feature: "Delivery Platform",
      pdf: "Clunky email downloads & static PDF files",
      app: "Dedicated WRK Training App (iOS & Android)"
    },
    {
      feature: "Exercise Demonstrations",
      pdf: "Still photos or confusing text descriptions",
      app: "On-demand HD video demos inside every workout"
    },
    {
      feature: "Workout & Metric Tracking",
      pdf: "Manual pen, paper, or complex spreadsheets",
      app: "Interactive logging for weights, reps, and habits"
    },
    {
      feature: "Ongoing Consistency Support",
      pdf: "Zero follow-up or support once downloaded",
      app: "Automated check-ins and coach momentum prompts"
    },
    {
      feature: "Investment Value",
      pdf: "Typically $30–$50 for static documents",
      app: "$29 NZD one-time complete digital access"
    }
  ];

  const valueStackItems = [
    {
      name: "The 30-Minute Sarcopenia Shield (Home & Gym tracks with HD video demos)",
      value: "$97"
    },
    {
      name: "The Zero-Hunger 100g Protein Protocol & Grocery System",
      value: "$47"
    },
    {
      name: "The Dose-Day Adjustment Matrix & GI Hydration Blueprint",
      value: "$37"
    },
    {
      name: "Ongoing WRK Interactive Mobile App Access (iOS & Android)",
      value: "$120/year"
    }
  ];

  return (
    <>
      <SeoHead 
        title="GLP-1 Muscle Defence Tool Kit ($29) | WRK Personal Training"
        description="Stop muscle loss while the weight drops. Get instant access to the Sarcopenia Shield routines and the Zero-Hunger 100g Protein Protocol in the WRK Training App."
      />
      <div className="bg-canvas text-charcoal min-h-screen font-sans selection:bg-spruce-800 selection:text-sand-50">
        
        {/* 1. Product Hero Header */}
        <section className="bg-canvas pt-14 pb-16 px-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Visual App Mockup */}
            <div className="bg-sand-100 rounded-2xl p-6 sm:p-8 border border-charcoal/5 shadow-sm flex items-center justify-center aspect-[4/3] md:aspect-[4/5] relative overflow-hidden">
              <div className="w-full max-w-[280px] bg-white rounded-3xl border-4 border-charcoal/10 shadow-2xl p-4 flex flex-col justify-between h-[92%]">
                <div>
                  <div className="flex items-center justify-between border-b border-charcoal/5 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-spruce-800 text-sand-50 flex items-center justify-center text-[10px] font-bold">
                        W
                      </div>
                      <span className="font-serif text-xs font-bold tracking-tight text-charcoal">WRK Training App</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>

                  {/* Active Routine Card */}
                  <div className="bg-sand-50 rounded-xl p-3 border border-charcoal/5 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-spruce-800 block mb-0.5">
                      Today's Programme
                    </span>
                    <p className="font-serif text-sm font-semibold text-charcoal">
                      The Sarcopenia Shield · Day 1
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-[10px] text-charcoal/60">
                      <span>⏱ 30 mins</span>
                      <span>•</span>
                      <span>3 Sets Compound</span>
                    </div>
                  </div>

                  {/* Exercises with Video Demo Pill */}
                  <div className="space-y-2">
                    <div className="p-2 rounded-lg bg-sand-100/50 border border-charcoal/5 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-charcoal">Goblet Squat</p>
                        <p className="text-[10px] text-charcoal/60">3 x 8-10 reps · Tempo 3-0-1-0</p>
                      </div>
                      <span className="text-[9px] bg-spruce-800 text-sand-50 px-2 py-0.5 rounded font-semibold">
                        ▶ Video
                      </span>
                    </div>

                    <div className="p-2 rounded-lg bg-sand-100/50 border border-charcoal/5 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-charcoal">Dumbbell Romanian Deadlift</p>
                        <p className="text-[10px] text-charcoal/60">3 x 10-12 reps</p>
                      </div>
                      <span className="text-[9px] bg-spruce-800 text-sand-50 px-2 py-0.5 rounded font-semibold">
                        ▶ Video
                      </span>
                    </div>
                  </div>

                  {/* Nutrition Target Widget */}
                  <div className="mt-3 p-2.5 rounded-xl bg-sand-100 border border-charcoal/5">
                    <div className="flex justify-between text-[10px] font-semibold text-charcoal mb-1">
                      <span>Zero-Hunger Protein Target</span>
                      <span className="text-spruce-800 font-bold">105g / 110g</span>
                    </div>
                    <div className="w-full h-1.5 bg-sand-200 rounded-full overflow-hidden">
                      <div className="h-full bg-spruce-800 rounded-full w-[95%]"></div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-charcoal/5 flex items-center justify-center gap-2 text-[10px] text-charcoal/70 font-medium">
                  <Smartphone size={12} className="text-spruce-800" />
                  <span>iOS & Android App</span>
                </div>
              </div>
            </div>

            {/* Right Column: Offer & CTA */}
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.2em] font-sans text-spruce-800 font-semibold mb-3">
                DELIVERED VIA THE WRK TRAINING APP · COMPLETE ACCESS
              </p>
              
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight leading-tight mb-4">
                Stop Muscle Loss While the Weight Drops.
              </h1>
              
              <p className="text-charcoal/80 text-sm sm:text-base mb-6 leading-relaxed">
                The step-by-step workout routines and low-appetite meal templates built specifically for GLP-1 therapy. Delivered inside the WRK Training App so you know exactly what to lift, how to fuel, and how to protect your metabolism.
              </p>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif text-3xl font-bold text-spruce-800">$29 NZD</span>
                <span className="text-xs text-charcoal/60">(One-Time Access · Approx. $18 USD / £14 GBP)</span>
              </div>

              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-spruce-800 text-sand-50 hover:bg-spruce-900 w-full py-4 text-center rounded-md font-semibold text-xs uppercase tracking-widest block transition-colors mt-5 mb-3 shadow-sm"
              >
                Get Instant App Access — $29 NZD
              </a>

              <p className="text-xs text-charcoal/60 mb-6 text-center sm:text-left">
                One-off payment · Instant iOS & Android login · No subscriptions
              </p>

              <div className="space-y-2 text-xs text-charcoal/70 pt-2 border-t border-charcoal/5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-spruce-800 shrink-0" />
                  <span>Full access in the WRK App (iOS & Android)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-spruce-800 shrink-0" />
                  <span>Interactive workout logging & HD video demos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-spruce-800 shrink-0" />
                  <span>Zero monthly subscriptions or hidden fees</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. Physical Problem Callout & Agitation */}
        <section className="bg-sand-100/70 py-16 px-6 border-y border-charcoal/5">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">
              THE MEDICAL WEIGHT LOSS BLINDSPOT
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4 tracking-tight">
              Losing Weight is Easy. Keeping Muscle is the Real Battle.
            </h2>
            <p className="text-charcoal/80 text-base leading-relaxed">
              Clinical trials show that without progressive strength training, up to 40% of the weight you lose on a GLP-1 can come directly from lean skeletal muscle and bone density. Exhausting 60-minute gym sessions and complex calorie tracking lead straight to burnout, nausea, and fatigue. You don't need endless exercise; you need the minimum effective dose.
            </p>
          </div>
        </section>

        {/* 3. The 3 Core App Pillars (Proprietary Asset Naming) */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">
              APP CAPABILITIES
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight">
              Everything Inside the App
            </h2>
            <p className="text-sm text-charcoal/70 mt-2">
              Complete guidance calibrated for low appetite and medication schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 border border-charcoal/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 bg-sand-100 px-2 py-0.5 rounded inline-block mb-3">
                  01 · RESISTANCE PROTOCOL
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  The 30-Minute Sarcopenia Shield Routine
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Targeted 3-day and 4-day strength tracks designed to signal muscle preservation without draining your central nervous system. Clean, joint-safe compound templates with on-demand HD video form guides.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                Includes Home (dumbbells) & Commercial Gym tracks
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 border border-charcoal/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 bg-sand-100 px-2 py-0.5 rounded inline-block mb-3">
                  02 · APPETITE PACING
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  The Zero-Hunger 100g Protein Protocol
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Practical strategies to hit 100g+ daily protein using nutrient-dense, low-volume foods you can actually stomach when your appetite is completely flat.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                Includes printable GI-comfort grocery lists & meal anchors
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 border border-charcoal/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 bg-sand-100 px-2 py-0.5 rounded inline-block mb-3">
                  03 · BIOFEEDBACK ARCHITECTURE
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  The Dose-Day Adjustment Matrix & Hydration Blueprint
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Fluid, electrolyte, and training volume adjustments calibrated around injection-day fatigue, nausea patterns, and delayed stomach digestion.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                Automated habit prompts & recovery tracking inside the app
              </div>
            </div>
          </div>
        </section>

        {/* 4. Comparison Feature Table */}
        <section className="bg-sand-50 py-16 px-6 border-y border-charcoal/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">
                THE DIFFERENCE
              </span>
              <h2 className="font-serif text-3xl text-charcoal tracking-tight">
                Why the App Beats Static PDFs
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {comparisonItems.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 border border-charcoal/5 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-spruce-800">
                      {item.feature}
                    </span>
                  </div>

                  <div className="md:col-span-4 flex items-center gap-2 text-xs text-charcoal/60">
                    <XCircle size={15} className="text-charcoal/40 shrink-0" />
                    <span>{item.pdf}</span>
                  </div>

                  <div className="md:col-span-5 flex items-center gap-2 text-xs font-medium text-spruce-900 bg-sand-100/70 p-2.5 rounded-lg border border-charcoal/5">
                    <CheckCircle2 size={15} className="text-spruce-800 shrink-0" />
                    <span>{item.app}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Social Proof Trust Section */}
        <section className="py-20 px-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-charcoal/10 shadow-sm relative">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-spruce-800 block mb-2">
                PROVEN METHODOLOGY
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal tracking-tight font-bold">
                Backed by 20+ Years of Hands-On Coaching
              </h2>
            </div>

            <div className="max-w-2xl mx-auto text-center">
              <Quote size={28} className="text-spruce-800/20 mx-auto mb-4" />
              <blockquote className="text-charcoal/85 text-base sm:text-lg leading-relaxed italic mb-4">
                "Hayden has adapted and changed the way I train to meet the changes in my body and health. His personal care, commitment, and expertise is equal to any health professional and has been an invaluable investment in my wellbeing."
              </blockquote>
              <p className="font-serif font-bold text-charcoal text-sm">
                — Jeff Kerkhofs, Long-Term Client (20+ Year Partnership)
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-8 mt-8 border-t border-charcoal/5 text-center">
              <div className="bg-sand-50/80 rounded-xl py-3 px-4 border border-charcoal/5 text-xs font-semibold text-spruce-900">
                ✓ Condition-Aware Programming
              </div>
              <div className="bg-sand-50/80 rounded-xl py-3 px-4 border border-charcoal/5 text-xs font-semibold text-spruce-900">
                ✓ Semi-Private Studio Tested
              </div>
              <div className="bg-sand-50/80 rounded-xl py-3 px-4 border border-charcoal/5 text-xs font-semibold text-spruce-900">
                ✓ Zero Commercial Gym Hype
              </div>
            </div>
          </div>
        </section>

        {/* 6. Checkout, Value Stack & Upgrade Bridge Card */}
        <section id="checkout" className="pb-20 px-6 max-w-2xl mx-auto text-center">
          <div className="bg-spruce-800 text-sand-50 rounded-2xl p-8 sm:p-10 shadow-lg text-left relative overflow-hidden">
            <span className="text-xs uppercase tracking-widest text-sand-200 mb-2 block font-semibold">
              COMPLETE DIGITAL ACCESS · ONE-TIME PAYMENT
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-sand-50 mb-2">
              The GLP-1 Muscle Defence Tool Kit
            </h3>
            <p className="text-xs sm:text-sm text-sand-100/80 mb-6">
              Instant mobile app activation for iOS & Android with lifetime digital access.
            </p>

            {/* Value Stack Breakdown */}
            <div className="bg-spruce-900/60 rounded-xl p-5 border border-white/10 space-y-3 mb-6">
              <span className="text-[11px] uppercase tracking-wider text-sand-200/90 font-bold block mb-1">
                Everything Included In Your Access:
              </span>
              {valueStackItems.map((item, idx) => (
                <div key={idx} className="flex items-start justify-between gap-3 text-xs sm:text-sm text-sand-100">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-sand-200 shrink-0 mt-0.5" />
                    <span>{item.name}</span>
                  </div>
                  <span className="text-sand-200 font-semibold shrink-0 text-xs">{item.value}</span>
                </div>
              ))}
              <div className="border-t border-white/10 pt-3 mt-3 flex items-center justify-between text-xs text-sand-200">
                <span className="font-semibold uppercase tracking-wider">Total Value:</span>
                <span className="font-bold line-through text-sand-300">$301 NZD</span>
              </div>
            </div>

            {/* Price Display */}
            <div className="bg-white/10 rounded-xl p-4 border border-white/15 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <span className="text-xs text-sand-200 uppercase tracking-wider font-semibold block">Today's Investment:</span>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-sand-50">$29 NZD</span>
              </div>
              <span className="text-xs text-sand-200/90 bg-spruce-950/40 py-1.5 px-3 rounded-lg border border-white/10 self-start sm:self-center">
                One-off payment · No ongoing fees
              </span>
            </div>

            {/* Upgrade Bridge */}
            <div className="bg-sand-50/10 border border-sand-200/20 rounded-xl p-4 mb-6 text-xs text-sand-100 leading-relaxed">
              <div className="flex items-center gap-1.5 font-semibold text-sand-200 mb-1">
                <ShieldCheck size={15} />
                <span>1-on-1 Coaching Upgrade Credit:</span>
              </div>
              <p>
                Need hands-on eyes on your form later? Every Toolkit member receives a 100% credit: apply your full $29 purchase toward your first month of WRK 1-on-1 coaching at any time.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sand-100 text-spruce-900 hover:bg-white w-full py-4 text-center rounded-md font-semibold text-xs uppercase tracking-widest block transition-colors shadow-sm"
              >
                Get Instant App Access — $29 NZD
              </a>
              <span className="text-xs text-sand-200/70 text-center mt-4 block">
                🔒 Secure SSL Checkout · Instant app login instructions delivered via email.
              </span>
            </div>
          </div>
        </section>

        {/* 7. FAQ Accordion */}
        <section className="py-20 px-6 max-w-3xl mx-auto border-t border-charcoal/5">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-3xl text-charcoal tracking-tight">
              Frequently Asked Questions
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

      </div>
    </>
  );
};
