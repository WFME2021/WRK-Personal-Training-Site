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

  const scrollToFindYourFit = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('find-your-fit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const faqData = [
    {
      question: "Do I need to get fit first before starting?",
      answer: "No—that is literally what coaching is for. Most people who walk into our Addington space haven't touched a dumbbell in years, or are coming back after an injury or busy season of life. We start right where you are today and build consistently from there."
    },
    {
      question: "How many sessions a week do I actually need?",
      answer: "For almost everyone with a job and a life, 3 to 4 sensible sessions a week plus regular walking is the sweet spot. Turning up consistently for six months beats going flat out for two weeks and burning out by Friday."
    },
    {
      question: "What is the difference between 1:1 Studio, 1:1 Online, and Self-Guided plans?",
      answer: "In 1:1 Studio Coaching, you train face-to-face with me in our quiet Addington space (Mon–Fri, 6:00 AM – 2:00 PM). 1:1 Online Coaching gives you a plan built for your gym or living room with regular check-ins via the WRK app. Self-Guided Plans let you follow structured 3- to 4-day/week programmes at your own pace in the app."
    },
    {
      question: "How does strength training help if I'm on a GLP-1 medication?",
      answer: "When weight drops quickly, your body doesn't automatically know to only burn fat—it can also break down muscle you want to keep for energy, joints, and posture. Lifting weights 2 to 4 times a week alongside simple protein habits tells your body to hang onto that muscle while working calmly alongside your doctor's care."
    },
    {
      question: "How much protein should I aim for when my appetite is low?",
      answer: "As a rough rule of thumb, aiming for around 1.2 to 1.6 grams of protein per kilogram of target body weight across the day works well for most adults. On low-appetite days, we keep it simple—small, easy-to-digest protein anchors at each meal rather than forcing huge plates of food."
    },
    {
      question: "Is WRK a medical clinic or dietitian service?",
      answer: "Not at all. I'm a personal trainer with 20+ years on the gym floor—I help with strength training, everyday movement, and practical eating habits. All medical care, prescribing, and clinical nutrition decisions always stay with your doctor or qualified healthcare provider."
    }
  ];

  return (
    <div className="bg-cream text-forest min-h-screen font-sans selection:bg-forest selection:text-cream">
      <SeoHead
        title="WRK Personal Training | Addington Studio & Online Coaching"
        description="Warm, practical personal training in Addington, Christchurch and online across New Zealand. Build strength, energy, and confidence for real life—no fitness-bro ego."
      />

      {/* 1. Full-Bleed Hero Section */}
      <section className="relative bg-forest min-h-[78vh] md:min-h-[88vh] flex items-center overflow-hidden -mt-14 md:-mt-20 pt-14 md:pt-20">
        <img 
          src="https://i.postimg.cc/XvwrPd0X/Google-Cover-Photo-(1).png" 
          alt="WRK Personal Training coaching space in Addington, Christchurch"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest/85 to-forest/50 z-10" />

        <div className="relative z-20 max-w-3xl px-4 sm:px-6 md:px-12 py-8 md:py-20 text-left">
          <p className="text-cream/85 text-[11px] sm:text-xs font-semibold tracking-wider sm:tracking-[0.18em] uppercase leading-snug mb-3">
            WRK PERSONAL TRAINING · ADDINGTON, CHRISTCHURCH &amp; ONLINE
          </p>

          <h1 className="text-cream font-serif text-3xl sm:text-5xl md:text-[3.35rem] tracking-tight mb-4 md:mb-6 leading-[1.12] text-balance">
            Strength, energy, and confidence for real life—explained simply and built to last.
          </h1>

          <p className="text-cream/90 text-sm sm:text-lg mb-6 md:mb-8 max-w-2xl leading-relaxed">
            No fitness-bro ego, no punishing workouts, and no confusing jargon. Just 20+ years of practical coaching to help you feel strong, capable, and at home in your body—whether we train 1:1 in Addington, online, or through the WRK app.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-3">
            <a
              href="#find-your-fit"
              onClick={scrollToFindYourFit}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/20 px-6 py-3.5 text-sm font-semibold tracking-tight rounded-md text-center transition-all shadow-lg whitespace-nowrap"
            >
              Find Your Best Fit ↓
            </a>
            <Link
              to="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-forest-deep/65 hover:bg-forest-deep/85 text-cream border border-cream/35 px-6 py-3.5 text-sm font-semibold tracking-tight rounded-md text-center transition-colors backdrop-blur-sm whitespace-nowrap"
            >
              Grab a Free 15-Min Chat →
            </Link>
          </div>
          <p className="text-xs text-cream/80 mt-3">
            Coaching Mon–Fri (6:00 AM – 2:00 PM) in Addington · Online support across New Zealand.
          </p>
        </div>
      </section>

      {/* Current Summer Intake Callout Card (Controlled via ENABLE_SUMMER_MOMENTUM) */}
      {ENABLE_SUMMER_MOMENTUM && (
        <section aria-label="Current Summer Intake" className="bg-cream py-10 md:py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-quiet border border-forest/15 rounded-2xl p-6 sm:p-9 shadow-sm flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
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
            Answer four quick questions and I'll point you straight to a sensible weekly rhythm—whether that's training together in Addington, working online, or trying the WRK app.
          </p>
        </div>
        <FindYourFit context="home" />
      </section>

      {/* 2. "Sound Familiar?" Relatable Mirrors Section */}
      <section aria-label="Who WRK Is Built For" className="bg-quiet py-16 md:py-20 px-4 md:px-8 border-y border-forest/10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-10 md:mb-12">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-forest/75 block mb-2">
              SOUND FAMILIAR?
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-forest tracking-tight text-balance">
              If you've ever felt out of place in a gym, you're in the right spot.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-cream rounded-2xl border border-forest/15 p-6 sm:p-7 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-forest/65 block mb-3 tabular-nums">
                  01 · KEEPING WHAT MATTERS
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-forest font-semibold tracking-tight mb-3 leading-snug">
                  “I want to protect my muscle and energy while on a GLP-1.”
                </h3>
                <p className="text-sm sm:text-base text-forest/85 leading-relaxed">
                  When weight comes off quickly, your body doesn't just lose fat—it can dip into your muscle too. Together, we use sensible resistance training and simple protein habits to send a clear signal to your body: keep the muscle, lose the rest—working calmly alongside your doctor's care.
                </p>
              </div>
              <div className="pt-5 mt-6 border-t border-forest/10">
                <Link
                  to="/assessment"
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-forest hover:opacity-75 transition-opacity"
                >
                  Take the 2-min GLP-1 assessment <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </article>

            <article className="bg-cream rounded-2xl border border-forest/15 p-6 sm:p-7 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-forest/65 block mb-3 tabular-nums">
                  02 · STRENGTH AFTER 40
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-forest font-semibold tracking-tight mb-3 leading-snug">
                  “I'm in my 40s or 50s and tired of workouts that leave me aching.”
                </h3>
                <p className="text-sm sm:text-base text-forest/85 leading-relaxed">
                  Training hard shouldn't mean limping out to your car or needing three days on the couch before you can carry the groceries. We build joint-friendly strength that leaves you feeling better when you walk out than when you walked in.
                </p>
              </div>
              <div className="pt-5 mt-6 border-t border-forest/10">
                <Link
                  to="/coaching"
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-forest hover:opacity-75 transition-opacity"
                >
                  See how coaching works <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </article>

            <article className="bg-cream rounded-2xl border border-forest/15 p-6 sm:p-7 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-forest/65 block mb-3 tabular-nums">
                  03 · A CALM RESTART
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-forest font-semibold tracking-tight mb-3 leading-snug">
                  “I've been out of routine for a while and don't know where to start.”
                </h3>
                <p className="text-sm sm:text-base text-forest/85 leading-relaxed">
                  You don't need to “get fit first” before talking to a trainer. Whether you start with 3 manageable sessions a week in our private Addington space or a self-guided plan at home, we meet you exactly where you're at today.
                </p>
              </div>
              <div className="pt-5 mt-6 border-t border-forest/10">
                <Link
                  to="/book"
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-forest hover:opacity-75 transition-opacity"
                >
                  Grab a free 15-min chat <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3. "Why WRK" Authority Strip */}
      <section aria-label="Why WRK" className="bg-forest text-cream py-14 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-10 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-cream/75 block mb-2">
              WHY WRK PERSONAL TRAINING
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream tracking-tight text-balance">
              20+ years on the gym floor. Zero hype.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-6 border-t border-cream/15">
            <div>
              <h3 className="font-serif text-xl text-cream font-semibold mb-2">
                Built for Real Schedules
              </h3>
              <p className="text-sm sm:text-base text-cream/85 leading-relaxed">
                Sensible 3- to 4-session/week rhythms designed to fit around work, school runs, and actual energy levels—not take over your life.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl text-cream font-semibold mb-2">
                Plain English, No Medical Claims
              </h3>
              <p className="text-sm sm:text-base text-cream/85 leading-relaxed">
                Practical personal training and everyday food habits explained clearly—no crash diets, fake countdowns, or stepping outside our lane.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl text-cream font-semibold mb-2">
                Addington Studio &amp; Online
              </h3>
              <p className="text-sm sm:text-base text-cream/85 leading-relaxed">
                Quiet 1:1 sessions inside Get Me Fitter (Addington) with easy parking right outside, or structured online support anywhere in New Zealand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Plain-English Training Approach (2-Column Editorial Split) */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Column 1: Warm portrait / training lifestyle image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-forest/15 shadow-sm aspect-[4/5] relative bg-quiet">
              <img 
                src="https://i.postimg.cc/kMshn8rN/Screen-Shot-2026-06-23-at-2-10-37-PM.png" 
                alt="Hayden coaching a client through joint-friendly resistance training in Addington, Christchurch"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Column 2: The 3 Plain-English Foundations */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-forest block mb-2">HOW WE TRAIN</span>
              <h2 className="font-serif text-3xl md:text-4xl text-forest tracking-tight text-balance">
                The right work, done well.
              </h2>
              <p className="text-forest/80 text-base mt-2 max-w-xl leading-relaxed">
                You don't need a sports science degree to get stronger. Here is what actually moves the needle—and why it feels so much better than starting a 6-week punishment boot camp.
              </p>
            </div>

            <div className="space-y-5">
              <div className="bg-quiet rounded-xl border border-forest/15 p-6 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-forest block mb-1.5">
                  01 · STRENGTH THAT STICKS AROUND
                </span>
                <p className="text-sm md:text-base text-forest/85 leading-relaxed">
                  Think of strength training like telling your body what it still needs. Challenging your muscles sensibly a few times a week keeps your strength, posture, and daily engine humming—especially as we get older or when weight is dropping.
                </p>
              </div>

              <div className="bg-quiet rounded-xl border border-forest/15 p-6 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-forest block mb-1.5">
                  02 · RECOVERY IS PART OF THE PLAN
                </span>
                <p className="text-sm md:text-base text-forest/85 leading-relaxed">
                  You don't get stronger during the workout—you get stronger when you recover from it. We pace sessions around how you're actually sleeping and feeling that week so your knees, hips, and lower back feel supported, not worn down.
                </p>
              </div>

              <div className="bg-quiet rounded-xl border border-forest/15 p-6 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-forest block mb-1.5">
                  03 · SIMPLE FOOD ANCHORS YOU CAN LIVE WITH
                </span>
                <p className="text-sm md:text-base text-forest/85 leading-relaxed">
                  Forget complicated spreadsheets. We build meals around a palm-sized bit of protein, decent fibre, and water—practical habits you can stick to on a busy Tuesday or at a weekend BBQ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Meet Hayden ("Coffee Shop" Intro Block) */}
      <section className="py-16 md:py-20 bg-quiet px-4 md:px-8 border-y border-forest/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Portrait photo slot of Hayden Richards */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden border border-forest/15 shadow-sm relative bg-cream">
              <img 
                src="https://i.postimg.cc/ZYHDT3kr/Screen-Shot-2026-06-23-at-2-27-18-PM.png"
                alt="Hayden Richards, Personal Trainer at WRK Personal Training in Addington, Christchurch"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Coffee-Shop Coach Story */}
          <div className="md:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-forest block">MEET YOUR COACH</span>
            <h2 className="font-serif text-3xl md:text-4xl text-forest tracking-tight text-balance">
              Hi, I'm Hayden. Let's keep this simple.
            </h2>
            <p className="text-forest/85 text-base md:text-lg leading-relaxed">
              I've spent more than 20 years on the gym floor, and if there's one thing I've learned, it's that people rarely struggle because they lack effort—they struggle when someone hands them a generic plan designed for a full-time competitive athlete rather than a real person juggling work, family, and recovery. Between coaching in Addington (6 AM to 2 PM so I make the 3 PM school pickup) and weekends out in the Christchurch hills or kicking a ball in the park with my kids, I know what real schedules look like. My job is to take the science of getting stronger and translate it into something practical you can actually stick with three or four times a week.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-6">
              <Link
                to="/about"
                className="inline-flex items-center text-sm font-semibold text-forest hover:opacity-75 transition-opacity group"
              >
                More about Hayden &amp; WRK <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/coaching"
                className="inline-flex items-center text-sm font-semibold text-forest/80 hover:text-forest transition-colors"
              >
                Explore 1:1 Coaching →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials contextBridge="Over 20 years in Christchurch, the best feedback has never been about scale obsession—it's hearing someone say they carried the shopping upstairs easily, walked the Port Hills without sore knees, or finally stopped dreading exercise." />

      {/* 6. FAQ Accordion */}
      <section className="py-16 md:py-20 bg-quiet px-4 md:px-8 border-t border-forest/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-forest block mb-2">COMMON QUESTIONS</span>
            <h2 className="font-serif text-3xl md:text-4xl text-forest tracking-tight">Things People Often Ask Over Coffee</h2>
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

      {/* 7. Final Banner */}
      <section className="bg-forest text-cream py-16 px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl text-cream tracking-tight text-balance">
            Want to talk it through with zero pressure?
          </h2>
          <p className="text-cream/85 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Grab a relaxed 15-minute chat with me, or if you're currently on a GLP-1 medication, try our quick 2-minute check-in to see how your protein and strength habits are tracking.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/20 font-semibold text-sm rounded-md px-7 py-3.5 transition-all shadow-sm"
            >
              Grab a Free 15-Min Chat →
            </Link>
            <Link
              to="/assessment"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-forest-deep/60 hover:bg-forest-deep text-cream border border-cream/30 font-semibold text-sm rounded-md px-6 py-3.5 transition-colors"
            >
              Take the 2-Min GLP-1 Score
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
