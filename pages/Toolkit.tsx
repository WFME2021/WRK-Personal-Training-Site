import React, { useEffect, useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { Smartphone, Video, Utensils, Activity, Check, ChevronDown, Lock, CheckCircle2, XCircle, ArrowRight, ShieldCheck, Dumbbell, Sparkles } from 'lucide-react';

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
      a: "Yes. If you decide you'd like custom workout programming, weekly form checks, and direct 1-on-1 coach messaging, you can easily upgrade to our Online Coaching service right from the app."
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

  return (
    <>
      <SeoHead 
        title="GLP-1 Workout & Nutrition App Toolkit | WRK Personal Training"
        description="Get instant access to the WRK Training App: interactive GLP-1 workouts with video demos, automated coach check-in prompts, and high-protein nutrition guides for $29 NZD."
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
                      Today's Program
                    </span>
                    <p className="font-serif text-sm font-semibold text-charcoal">
                      GLP-1 Muscle Defense · Day 1
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
                      <span>Protein Anchor</span>
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
                The Complete GLP-1 Workout & Nutrition Toolkit.
              </h1>
              
              <p className="text-charcoal/80 text-sm sm:text-base mb-6 leading-relaxed">
                Interactive strength training and nutrition frameworks designed specifically for weight loss medication. Log lifts, watch video demos, and track habits right on your phone.
              </p>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-serif text-3xl font-bold text-spruce-800">$29 NZD</span>
                <span className="text-xs text-charcoal/60">(One-Time Access · Approx. $18 USD / £14 GBP)</span>
              </div>

              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-spruce-800 text-sand-50 hover:bg-spruce-900 w-full py-4 text-center rounded-md font-semibold text-xs uppercase tracking-widest block transition-colors my-6 shadow-sm"
              >
                Get Instant App Access — $29 NZD
              </a>

              <div className="space-y-2 text-xs text-charcoal/70">
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

        {/* 2. Philosophy Callout Band */}
        <section className="bg-sand-100/70 py-16 px-6 border-y border-charcoal/5">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">
              BUILT FOR INDEPENDENCE
            </span>
            <h2 className="font-serif text-3xl text-charcoal mb-4 tracking-tight">
              Structure Without the Cost of 1-on-1 Coaching
            </h2>
            <p className="text-charcoal/80 text-base leading-relaxed">
              If you are self-motivated, you don't need expensive weekly calls or confusing static PDFs. You need an intuitive app that tells you exactly which weights to lift, provides clear exercise form videos, and tracks your protein without burnout.
            </p>
          </div>
        </section>

        {/* 3. The 3 Core App Pillars */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">
              APP CAPABILITIES
            </span>
            <h2 className="font-serif text-3xl text-charcoal tracking-tight">
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
                  01 · WORKOUT TRACKS
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  Interactive Gym & Home Programs
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  3-day and 4-day resistance routines built for lean muscle retention during calorie deficits. Clean 30-minute templates with on-demand video demos.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                Home (dumbbells) & commercial gym modes
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 border border-charcoal/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 bg-sand-100 px-2 py-0.5 rounded inline-block mb-3">
                  02 · NUTRITION BLUEPRINTS
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  Low-Appetite Fueling Strategies
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Practical protocols to hit 100g+ daily protein without forcing down giant meals. Includes grocery lists, hydration guides, and nausea mitigation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                Zero food logging fatigue or macro burnout
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 border border-charcoal/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 bg-sand-100 px-2 py-0.5 rounded inline-block mb-3">
                  03 · ACCOUNTABILITY
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  Automated Habit Architecture
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Scheduled check-in reminders and momentum prompts sent through the app to keep you consistent through titration and low-energy days.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                Structured habit prompts & recovery reminders
              </div>
            </div>
          </div>
        </section>

        {/* 4. Redesigned Comparison Feature Table */}
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

        {/* 5. Checkout & Investment Summary Card */}
        <section id="checkout" className="py-16 px-6 max-w-2xl mx-auto text-center">
          <div className="bg-spruce-800 text-sand-50 rounded-2xl p-8 sm:p-10 shadow-lg text-left relative overflow-hidden">
            <span className="text-xs uppercase tracking-widest text-sand-200 mb-2 block font-semibold">
              ONE-TIME PURCHASE · NO RECURRING FEES
            </span>
            <h3 className="font-serif text-3xl text-sand-50 mb-2">
              The WRK GLP-1 App Toolkit
            </h3>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-serif text-4xl font-bold text-sand-50">$29 NZD</span>
              <span className="text-xs text-sand-200/80">(One-off payment · No subscriptions)</span>
            </div>

            <ul className="space-y-3.5 my-8 text-sand-100 text-sm border-t border-sand-200/10 pt-6">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-sand-200 shrink-0" />
                <span>Instant account activation in the WRK Training App</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-sand-200 shrink-0" />
                <span>3-day and 4-day resistance tracks (Home & Gym)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-sand-200 shrink-0" />
                <span>HD video library with exercise demonstrations</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-sand-200 shrink-0" />
                <span>Interactive weight, rep, and habit tracking</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-sand-200 shrink-0" />
                <span>High-protein nutrition guide, grocery list & hydration protocol</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-sand-200 shrink-0" />
                <span>Automated check-in reminders and habit prompts</span>
              </li>
            </ul>

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

        {/* 6. FAQ Accordion */}
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
