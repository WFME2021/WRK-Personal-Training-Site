import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

interface AccordionItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-charcoal/10 last:border-0">
      <button
        type="button"
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg md:text-xl text-charcoal group-hover:text-spruce-800 transition-colors pr-6">
          {question}
        </span>
        <ChevronDown 
          className={`shrink-0 text-spruce-800 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
          size={20} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-charcoal/80 text-sm md:text-base leading-relaxed">
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
    <div className="bg-canvas text-charcoal min-h-screen font-sans selection:bg-spruce-800 selection:text-sand-50">
      <SeoHead
        title="GLP-1 Fitness Coach | Strength & Fitness Coaching | WRK Personal Training"
        description="Hire a dedicated GLP-1 Fitness Coach in Christchurch. We provide specialist strength & fitness coaching to preserve muscle and build sustainable habits during medical weight loss."
      />

      {/* 1. Full-Bleed Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[92vh] flex items-center overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
        <img 
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2000&auto=format&fit=crop" 
          alt="GLP-1 Fitness Coaching and Personal Training in Christchurch studio"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/50 to-transparent z-10" />

        <div className="relative z-20 max-w-2xl px-6 md:px-12 py-24 text-left">
          <div className="mb-4">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-sand-100 border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase">
              GLP-1 FITNESS COACHING · CHRISTCHURCH & ONLINE
            </span>
          </div>

          <h1 className="text-white font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase mb-6 leading-tight">
            Lose the weight. <span className="text-sand-100 block sm:inline">Keep your strength.</span>
          </h1>

          <p className="text-sand-50/90 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
            Specialist coaching to protect your muscle, energy, and physical capability on GLP-1 medications.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
            <Link
              to="/assessment"
              className="bg-spruce-800 text-sand-50 hover:bg-spruce-900 border border-sand-200/20 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest rounded-md text-center transition-colors shadow-lg"
            >
              Take the Free GLP-1 Fitness Assessment
            </Link>
            <Link
              to="/programs"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest rounded-md text-center transition-colors backdrop-blur-sm"
            >
              View Coaching & Programs
            </Link>
          </div>
          <p className="text-xs text-sand-200/70 mt-4">In-person training in Christchurch · Online coaching worldwide.</p>
        </div>
      </section>

      {/* 2. Philosophy Pull-Quote Band */}
      <section className="bg-sand-100 py-14 px-6 text-center border-y border-charcoal/5">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="font-serif text-2xl md:text-3xl italic text-spruce-900 leading-snug">
            “Medicine can change your weight. We're here to change what your body can do.”
          </p>
          <p className="text-xs uppercase tracking-widest font-semibold text-charcoal/60 mt-3">
            — The Right Work, Done Well · WRK Personal Training
          </p>
        </div>
      </section>

      {/* 3. The 3 Pillars (2-Column Editorial Split) */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Warm portrait / training lifestyle image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-charcoal/10 shadow-sm aspect-[4/5] relative">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2000&auto=format&fit=crop" 
                alt="Personal trainer coaching client with progressive resistance training for muscle preservation in Christchurch"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Column 2: The 3 Steps */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">OUR METHODOLOGY</span>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight">The 3 Pillars of GLP-1 Fitness</h2>
              <p className="text-charcoal/70 text-base mt-2">A calm, structured protocol to preserve lean mass and build lasting capability.</p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-charcoal/5 p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 block mb-1">
                  01 · PROTECT SKELETAL MUSCLE
                </span>
                <p className="text-sm md:text-base text-charcoal/80 leading-relaxed">
                  Progressive resistance training to signal muscle retention and safeguard your metabolic rate.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-charcoal/5 p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 block mb-1">
                  02 · REAL-WORLD CAPABILITY
                </span>
                <p className="text-sm md:text-base text-charcoal/80 leading-relaxed">
                  Functional stamina and joint resilience that directly powers your daily life.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-charcoal/5 p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 block mb-1">
                  03 · SUSTAINABLE AUTONOMY
                </span>
                <p className="text-sm md:text-base text-charcoal/80 leading-relaxed">
                  Simple nutritional anchors and recovery habits built to outlast medication weaning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What Coaching Delivers (Clean 4-Card Grid) */}
      <section className="py-20 bg-sand-50 px-4 md:px-8 border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">TARGETED SUPPORT</span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight">What Coaching Delivers</h2>
            <p className="text-charcoal/70 text-base mt-2">Targeted coaching solutions built specifically for medical weight loss.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl border border-charcoal/5 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-md bg-sand-100 text-spruce-800 flex items-center justify-center font-serif font-bold text-sm mb-4">01</div>
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">Muscle Defense</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Targeted lifting protocols designed to stop lean tissue loss in its tracks.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-charcoal/5 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-md bg-sand-100 text-spruce-800 flex items-center justify-center font-serif font-bold text-sm mb-4">02</div>
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">Low-Appetite Fueling</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Practical protein and meal strategies you can hit even when hunger is zero.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-charcoal/5 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-md bg-sand-100 text-spruce-800 flex items-center justify-center font-serif font-bold text-sm mb-4">03</div>
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">Hydration & GI Support</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Fluid and electrolyte routines built for delayed gastric digestion.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-charcoal/5 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-md bg-sand-100 text-spruce-800 flex items-center justify-center font-serif font-bold text-sm mb-4">04</div>
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">The WRK App Platform</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
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
            <div className="w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden border border-charcoal/10 shadow-sm relative">
              <img 
                src="https://i.postimg.cc/ZYHDT3kr/Screen-Shot-2026-06-23-at-2-27-18-PM.png"
                alt="Hayden Richards, REPs-registered Personal Trainer in Christchurch specializing in GLP-1 fitness coaching"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Coach Story */}
          <div className="md:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block">YOUR COACH</span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight">Meet Hayden Richards</h2>
            <p className="text-charcoal/80 text-base md:text-lg leading-relaxed">
              With over 20 years of coaching experience and REPs-registration, I help adults build resilient, capable bodies without turning fitness into another punishing full-time job. We handle the physical capability while your clinician manages your prescription.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center text-sm font-semibold text-spruce-800 hover:text-spruce-900 transition-colors group"
              >
                Read Hayden's full story <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <section className="py-20 bg-sand-50 px-4 md:px-8 border-t border-charcoal/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">COMMON QUESTIONS</span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight">GLP-1 Fitness FAQs</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-charcoal/5 p-6 md:p-8 shadow-sm">
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

      {/* 7. Final Banner */}
      <section className="bg-spruce-800 text-sand-50 py-16 px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl text-sand-50 tracking-tight">
            Ready to Protect What You're Building?
          </h2>
          <p className="text-sand-200/80 text-base md:text-lg max-w-xl mx-auto">
            Take 3 minutes to assess your current training, protein habits, and recovery.
          </p>
          <div className="pt-4">
            <Link
              to="/assessment"
              className="inline-flex items-center justify-center bg-sand-100 text-spruce-900 hover:bg-white font-medium text-xs uppercase tracking-wider rounded-md px-8 py-4 transition-colors shadow-sm"
            >
              Take the Free GLP-1 Fitness Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
