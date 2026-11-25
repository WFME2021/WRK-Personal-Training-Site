import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { Testimonials } from '../components/Testimonials';
import { ENABLE_SUMMER_MOMENTUM } from '../constants';
import { FindYourFit } from '../src/components/FindYourFit';

interface AccordionItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-forest/10 last:border-0">
      <button
        type="button"
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg md:text-xl text-forest group-hover:opacity-80 transition-opacity pr-6">
          {question}
        </span>
        <ChevronDown 
          className={`shrink-0 text-forest transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
          size={20} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-forest/80 text-sm md:text-base leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const Home: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prev => prev === index ? null : index);
  };

  const faqData = [
    {
      question: "Can I build muscle while taking a GLP-1?",
      answer: "Yes. Resistance training, appropriate nutrition, and adequate protein support muscle preservation and strength development during active weight loss. Training provides the mechanical tension necessary to tell your body to retain lean tissue."
    },
    {
      question: "How should I exercise while taking a GLP-1?",
      answer: "A combination of progressive resistance training (2–3 times per week), low-stress daily movement, and purposeful recovery forms the foundation. High-volume cardio should be balanced to prevent excess systemic fatigue."
    },
    {
      question: "Why is strength training important during GLP-1 weight loss?",
      answer: "Rapid calorie restriction triggers the loss of both fat and muscle tissue. Progressive strength training signals your body to spare skeletal muscle, protecting your resting metabolic rate and physical independence."
    },
    {
      question: "How much protein do I need on a GLP-1?",
      answer: "Most adults benefit from targeting 1.2 to 1.6 grams of protein per kilogram of target body weight daily. WRK helps clients implement simple, easily digestible protein anchors when medication suppresses appetite."
    },
    {
      question: "What does a GLP-1 Fitness Coach do?",
      answer: "A GLP-1 Fitness Coach provides structured resistance programming, nutrition habit coaching, and accountability tailored specifically to the physiological changes of medical weight loss."
    },
    {
      question: "Is WRK a medical or GLP-1 prescribing service?",
      answer: "No. WRK provides fitness, strength, and lifestyle coaching. Medication decisions, prescribing, and dosage changes are managed strictly by your qualified healthcare professional."
    }
  ];

  return (
    <div className="bg-cream text-forest min-h-screen font-sans selection:bg-forest selection:text-cream">
      <SeoHead
        title="GLP-1 Fitness Coach | Strength & Fitness Coaching | WRK Personal Training"
        description="Hire a dedicated GLP-1 Fitness Coach in Christchurch. We provide specialist strength & fitness coaching to preserve muscle and build sustainable habits during medical weight loss."
      />

      {/* 1. Full-Bleed Hero Section */}
      <section className="relative bg-forest min-h-[78vh] md:min-h-[92vh] flex items-center overflow-hidden -mt-14 md:-mt-20 pt-14 md:pt-20">
        <img 
          src="https://i.postimg.cc/XvwrPd0X/Google-Cover-Photo-(1).png" 
          alt="GLP-1 Fitness Coaching and Personal Training in Christchurch studio"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest/80 to-forest/45 z-10" />

        <div className="relative z-20 max-w-2xl px-4 sm:px-6 md:px-12 py-10 md:py-24 text-left">
          <div className="mb-3">
            <span className="inline-block bg-forest-deep/75 backdrop-blur-sm text-cream border border-cream/25 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase leading-snug">
              GLP-1 FITNESS COACHING · CHRISTCHURCH &amp; ONLINE
            </span>
          </div>

          <h1 className="text-cream font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase mb-3 md:mb-6 leading-tight">
            Lose the weight. <span className="text-cream/95 block sm:inline">Keep your strength.</span>
          </h1>

          <p className="text-cream/90 text-base sm:text-lg mt-2 mb-5 md:mb-8 max-w-xl leading-relaxed">
            Specialist strength coaching to keep your muscle, protect your metabolism, and stay strong while on weight loss medication.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-3">
            <Link
              to="/assessment"
              className="w-full sm:w-auto bg-citron text-forest hover:brightness-95 border border-forest/20 px-5 py-3.5 text-sm sm:text-xs font-semibold sm:uppercase sm:tracking-widest rounded-md text-center transition-all shadow-lg"
            >
              Get Your Free GLP-1 Muscle &amp; Protein Score (3-Min Assessment) →
            </Link>
            <Link
              to="/programs"
              className="w-full sm:w-auto bg-forest-deep/55 hover:bg-forest-deep/80 text-cream border border-cream/35 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest rounded-md text-center transition-colors backdrop-blur-sm"
            >
              View Coaching &amp; Programmes
            </Link>
          </div>
          <p className="text-xs text-cream/80 mt-3">In-person training in Christchurch · Online coaching worldwide.</p>
        </div>
      </section>

      {/* Current Summer Intake Callout Card (Controlled via ENABLE_SUMMER_MOMENTUM) */}
      {ENABLE_SUMMER_MOMENTUM && (
        <section aria-label="Current Summer Intake" className="bg-cream py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-quiet border border-forest/15 rounded-2xl p-7 sm:p-9 shadow-sm flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-2xl space-y-2.5">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-forest block">
                  STARTS MONDAY 30 NOVEMBER · 6-WEEK INTAKE
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-forest tracking-tight">
                  Summer Momentum (30 Nov – 8 Jan)
                </h2>
                <p className="text-sm sm:text-base text-forest/85 leading-relaxed">
                  Anxious about Christmas lunches, summer BBQs, and six weeks off routine while on a GLP-1? This isn't about chasing gains—it's a sustainable movement plan and practical coping guide so you enjoy the holidays without feeling like you're going backwards.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-4 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-forest/10">
                <div className="lg:text-right">
                  <span className="text-xs uppercase tracking-widest font-semibold text-forest/70 block">
                    6-WEEK COHORT
                  </span>
                  <span className="font-serif text-2xl font-bold text-forest">
                    $149 NZD (One-Off)
                  </span>
                </div>
                <Link
                  to="/summer-momentum"
                  className="inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/20 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest rounded-md transition-all shadow-sm whitespace-nowrap"
                >
                  Explore Summer Momentum →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Find Your Fit Interactive Qualifier (Below Hero & Summer Momentum Card) */}
      <section aria-label="Find Your Fit Interactive Qualifier" className="bg-cream pt-4 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto mb-6 text-center">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-forest/75 block mb-2">
            NOT SURE WHICH PATHWAY FITS?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-forest tracking-tight text-balance">
            Find Your WRK Starting Point in 30 Seconds
          </h2>
          <p className="text-sm sm:text-base text-forest/80 mt-2 max-w-2xl mx-auto">
            Whether you are on a GLP-1 medication, rebuilding after 40, or getting back into training—answer four quick questions for an immediate blueprint.
          </p>
        </div>
        <FindYourFit context="home" />
      </section>

      {/* 2. Philosophy Pull-Quote Band */}
      <section className="bg-quiet py-14 px-6 text-center border-y border-forest/10">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="font-serif text-2xl md:text-3xl italic text-forest leading-snug">
            “Medicine can change your weight. We're here to change what your body can do.”
          </p>
          <p className="text-xs uppercase tracking-widest font-semibold text-forest/65 mt-3">
            — The Right Work, Done Well · WRK Personal Training
          </p>
        </div>
      </section>

      {/* 3. The 3 Pillars (2-Column Editorial Split) */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Warm portrait / training lifestyle image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-forest/15 shadow-sm aspect-[4/5] relative bg-quiet">
              <img 
                src="https://i.postimg.cc/kMshn8rN/Screen-Shot-2026-06-23-at-2-10-37-PM.png" 
                alt="Personal trainer coaching client with progressive resistance training for muscle preservation in Christchurch"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Column 2: The 3 Steps */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-forest block mb-2">OUR METHODOLOGY</span>
              <h2 className="font-serif text-3xl md:text-4xl text-forest tracking-tight">The 3 Pillars of GLP-1 Fitness</h2>
              <p className="text-forest/75 text-base mt-2">A calm, structured protocol to preserve lean mass and build lasting capability.</p>
            </div>

            <div className="space-y-6">
              <div className="bg-quiet rounded-xl border border-forest/15 p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xs font-bold uppercase tracking-wider text-forest block mb-1">
                  01 · PROTECT SKELETAL MUSCLE
                </span>
                <p className="text-sm md:text-base text-forest/85 leading-relaxed">
                  Progressive resistance training to signal muscle retention and safeguard your metabolic rate.
                </p>
              </div>

              <div className="bg-quiet rounded-xl border border-forest/15 p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xs font-bold uppercase tracking-wider text-forest block mb-1">
                  02 · REAL-WORLD CAPABILITY
                </span>
                <p className="text-sm md:text-base text-forest/85 leading-relaxed">
                  The goal isn’t just a smaller number on the scale. It’s making sure you don't lose your strength, wreck your metabolism, or feel completely drained doing normal daily tasks.
                </p>
              </div>

              <div className="bg-quiet rounded-xl border border-forest/15 p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xs font-bold uppercase tracking-wider text-forest block mb-1">
                  03 · SUSTAINABLE AUTONOMY
                </span>
                <p className="text-sm md:text-base text-forest/85 leading-relaxed">
                  Simple nutritional anchors and recovery habits built to outlast medication weaning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What Coaching Delivers (Clean 4-Card Grid) */}
      <section className="py-20 bg-quiet px-4 md:px-8 border-y border-forest/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold text-forest block mb-2">TARGETED SUPPORT</span>
            <h2 className="font-serif text-3xl md:text-4xl text-forest tracking-tight">What Coaching Delivers</h2>
            <p className="text-forest/75 text-base mt-2">Targeted coaching solutions built specifically for medical weight loss.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-cream rounded-xl border border-forest/15 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-md bg-quiet border border-forest/10 text-forest flex items-center justify-center font-serif font-bold text-sm mb-4">01</div>
                <h3 className="font-serif text-lg font-semibold text-forest mb-2">Muscle Defence</h3>
                <p className="text-sm text-forest/75 leading-relaxed">
                  Targeted lifting protocols designed to stop lean tissue loss in its tracks.
                </p>
              </div>
            </div>

            <div className="bg-cream rounded-xl border border-forest/15 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-md bg-quiet border border-forest/10 text-forest flex items-center justify-center font-serif font-bold text-sm mb-4">02</div>
                <h3 className="font-serif text-lg font-semibold text-forest mb-2">Low-Appetite Fuelling</h3>
                <p className="text-sm text-forest/75 leading-relaxed">
                  Practical protein and meal strategies you can hit even when hunger is zero.
                </p>
              </div>
            </div>

            <div className="bg-cream rounded-xl border border-forest/15 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-md bg-quiet border border-forest/10 text-forest flex items-center justify-center font-serif font-bold text-sm mb-4">03</div>
                <h3 className="font-serif text-lg font-semibold text-forest mb-2">Hydration & GI Support</h3>
                <p className="text-sm text-forest/75 leading-relaxed">
                  Hydration and mineral routines designed for slower stomach digestion and nausea.
                </p>
              </div>
            </div>

            <div className="bg-cream rounded-xl border border-forest/15 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-md bg-quiet border border-forest/10 text-forest flex items-center justify-center font-serif font-bold text-sm mb-4">04</div>
                <h3 className="font-serif text-lg font-semibold text-forest mb-2">The WRK App Platform</h3>
                <p className="text-sm text-forest/75 leading-relaxed">
                  Video guidance, custom metrics, and direct coach feedback in your pocket.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Coach Section (2-Column Editorial Story) */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Portrait photo slot of Hayden Richards */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden border border-forest/15 shadow-sm relative bg-quiet">
              <img 
                src="https://i.postimg.cc/ZYHDT3kr/Screen-Shot-2026-06-23-at-2-27-18-PM.png"
                alt="Hayden Richards, Personal Trainer in Christchurch specialising in GLP-1 fitness coaching"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Coach Story */}
          <div className="md:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-forest block">YOUR COACH</span>
            <h2 className="font-serif text-3xl md:text-4xl text-forest tracking-tight">Meet Hayden Richards</h2>
            <p className="text-forest/85 text-base md:text-lg leading-relaxed">
              Structured strength without the exhaustion. We replace extreme diets and high-volume gym routines with targeted, 30-minute sessions that protect your joints, your energy, and your metabolic health. With over 20 years of coaching experience, we handle physical capability while your clinician manages your prescription.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center text-sm font-semibold text-forest hover:opacity-75 transition-opacity group"
              >
                Read Hayden's full story <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <section className="py-20 bg-quiet px-4 md:px-8 border-t border-forest/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-forest block mb-2">COMMON QUESTIONS</span>
            <h2 className="font-serif text-3xl md:text-4xl text-forest tracking-tight">GLP-1 Fitness FAQs</h2>
          </div>
          
          <div className="bg-cream rounded-xl border border-forest/15 p-6 md:p-8 shadow-sm">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === index}
                onToggle={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials contextBridge="Before medical weight loss protocols emerged, Hayden spent 20 years managing complex rehabilitation, metabolic shifts, and joint health. Here is what long-term care looks like in practice:" />

      {/* 7. Final Banner */}
      <section className="bg-forest text-cream py-16 px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl text-cream tracking-tight">
            Ready to Protect What You're Building?
          </h2>
          <p className="text-cream/85 text-base md:text-lg max-w-xl mx-auto">
            Take 3 minutes to assess your current training, protein habits, and recovery.
          </p>
          <div className="pt-4">
            <Link
              to="/assessment"
              className="inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/20 font-semibold text-xs uppercase tracking-wider rounded-md px-8 py-4 transition-all shadow-sm"
            >
              Take the Free GLP-1 Fitness Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
