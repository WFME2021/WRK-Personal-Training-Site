import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Activity, Target, CheckCircle, ChevronDown } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

const FaqItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-neutral-200 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-[16px] md:text-[18px] text-[#2C3539] pr-8">{question}</span>
        <ChevronDown 
          className={`shrink-0 text-[#8A9A86] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
          size={20} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-[#2C3539]/80 text-[15px] md:text-[16px] leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white md:pt-20">
      <SeoHead
        title="GLP-1 Fitness Coach | Strength & Fitness Coaching | WRK Personal Training"
        description="Specialist GLP-1 fitness coaching to help you preserve muscle, build strength, improve fitness and develop sustainable habits while losing weight."
      />

      {/* Hero Section */}
      <section className="relative pt-4 pb-16 md:pt-28 md:pb-32 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="mb-4 md:mb-6 flex justify-center">
          <h1 className="bg-[#8A9A86]/10 text-[#8A9A86] px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-widest">
            GLP-1 Fitness Coaching
          </h1>
        </div>
        <p className="font-serif text-[42px] md:text-[64px] leading-[1.1] text-[#2C3539] mb-5 md:mb-8 max-w-4xl tracking-tight">
          Lose the weight. Keep your strength. Build the fitness to keep it off.
        </p>
        <div className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/70 max-w-2xl mb-6 md:mb-10 space-y-4">
          <p>GLP-1 medication can help you lose weight. WRK helps you make the most of that journey.</p>
          <p>Specialist fitness coaching for people using GLP-1 medications, focused on <strong className="text-[#2C3539]">strength, muscle preservation, nutrition, fitness and sustainable habits</strong> — so you can become stronger and fitter while the weight comes off.</p>
        </div>
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <Link
            to="/assessment"
            className="inline-flex items-center justify-center bg-[#8A9A86] hover:bg-[#768672] text-white px-8 py-4 rounded-xl font-medium transition-colors text-[16px] shadow-sm"
          >
            Take the Free GLP-1 Fitness Assessment
          </Link>
          <p className="text-[13px] text-[#2C3539]/60">Online coaching available worldwide.</p>
        </div>

        <div className="mt-12 md:mt-20 w-full max-w-6xl mx-auto rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 wrk-photo-container">
          <div className="wrk-photo-overlay"></div>
          <img 
            src="https://i.postimg.cc/vBXwJPvy/family-activity.jpg" 
            alt="Active couple hiking outdoors, representing a capable and fulfilling life"
            className="w-full h-auto aspect-[21/9] md:aspect-[2.5/1] wrk-photo"
          />
        </div>
      </section>

      {/* SECTION 2 — WHAT IS GLP-1 FITNESS COACHING? */}
      <section className="py-24 bg-white px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-[32px] md:text-[40px] leading-tight text-[#2C3539]">What Is a GLP-1 Fitness Coach?</h2>
          <div className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/80 space-y-6">
            <p>A GLP-1 Fitness Coach helps people using GLP-1 medications build strength, preserve muscle, improve fitness and develop sustainable habits alongside their medical treatment.</p>
            <p>At WRK, coaching focuses on the <strong className="text-[#2C3539]">fitness side of your GLP-1 journey</strong> — including resistance training, nutrition, hydration, recovery, daily movement and accountability.</p>
            <p>Your medication is managed by your healthcare professional.</p>
            <p className="font-serif text-[22px] md:text-[24px] text-[#2C3539] pt-4">
              <strong>Your fitness is where WRK comes in.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY FITNESS MATTERS */}
      <section className="py-24 bg-[#FAFAF9] px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="font-serif text-[32px] md:text-[40px] leading-tight text-[#2C3539]">Losing Weight Is Only Part of the Journey.</h2>
            <div className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/80 space-y-6">
              <p>GLP-1 medications have changed the weight-loss landscape.</p>
              <p>But losing weight doesn't automatically mean becoming stronger, fitter or healthier.</p>
              <p>As your bodyweight changes, you still need to think about resistance training, protein, recovery, hydration, cardiovascular fitness and the habits that will support you long term.</p>
              <p>That's the gap WRK is here to fill.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white p-8 md:p-12 rounded-3xl border border-neutral-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#8A9A86]"></div>
            <p className="font-serif text-[24px] md:text-[28px] text-[#2C3539] leading-snug">
              Medicine can help change your weight. We're here to help you change what your body can do.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THREE CORE BENEFITS */}
      <section className="py-24 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-serif text-[32px] md:text-[40px] text-[#2C3539]">What We Focus On</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#FAFAF9] p-8 md:p-10 rounded-3xl border border-neutral-100 flex flex-col">
            <div className="w-12 h-12 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-6 shrink-0">
              <Shield size={24} />
            </div>
            <h3 className="font-serif text-[22px] text-[#2C3539] mb-4">Protect Your Muscle</h3>
            <p className="text-[15px] md:text-[16px] text-[#2C3539]/70 flex-grow leading-relaxed">
              Weight loss isn't the only thing that matters. When you're losing weight, maintaining muscle and strength should be a priority. We use progressive resistance training and practical nutrition strategies to help you preserve the muscle that keeps you strong, capable and independent.
            </p>
          </div>
          <div className="bg-[#FAFAF9] p-8 md:p-10 rounded-3xl border border-neutral-100 flex flex-col">
            <div className="w-12 h-12 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-6 shrink-0">
              <Activity size={24} />
            </div>
            <h3 className="font-serif text-[22px] text-[#2C3539] mb-4">Build Real-World Fitness</h3>
            <p className="text-[15px] md:text-[16px] text-[#2C3539]/70 flex-grow leading-relaxed">
              The goal isn't to become someone who is good at going to the gym. It's to build a body that works better in everyday life — whether that's playing with your kids, getting outdoors, working in the garden or simply moving through your day with more confidence. Your training should make life easier, not become your entire life.
            </p>
          </div>
          <div className="bg-[#FAFAF9] p-8 md:p-10 rounded-3xl border border-neutral-100 flex flex-col">
            <div className="w-12 h-12 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-6 shrink-0">
              <Target size={24} />
            </div>
            <h3 className="font-serif text-[22px] text-[#2C3539] mb-4">Build Beyond the Scale</h3>
            <p className="text-[15px] md:text-[16px] text-[#2C3539]/70 flex-grow leading-relaxed">
              The scale tells you what you weigh. It doesn't tell you how strong you are, how fit you are or how capable you feel. WRK helps you build the physical capacity and habits that support your health beyond weight loss — so you have something to take forward long after you've reached your goal.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHAT'S INCLUDED */}
      <section className="py-24 bg-[#FAFAF9] px-4 md:px-8 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-[32px] md:text-[40px] text-[#2C3539]">What Does GLP-1 Fitness Coaching Include?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col gap-4 transition-shadow hover:shadow-md">
              <CheckCircle className="text-[#8A9A86] shrink-0" size={24} />
              <div>
                <h3 className="font-medium text-[#2C3539] text-[17px] mb-2">Personalised Training</h3>
                <p className="text-[15px] text-[#2C3539]/70 leading-relaxed">A progressive strength and fitness programme built around your current ability, goals and lifestyle.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col gap-4 transition-shadow hover:shadow-md">
              <CheckCircle className="text-[#8A9A86] shrink-0" size={24} />
              <div>
                <h3 className="font-medium text-[#2C3539] text-[17px] mb-2">Nutrition Support</h3>
                <p className="text-[15px] text-[#2C3539]/70 leading-relaxed">Practical strategies to help you prioritise protein and quality nutrition when appetite may be reduced.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col gap-4 transition-shadow hover:shadow-md">
              <CheckCircle className="text-[#8A9A86] shrink-0" size={24} />
              <div>
                <h3 className="font-medium text-[#2C3539] text-[17px] mb-2">Recovery & Hydration</h3>
                <p className="text-[15px] text-[#2C3539]/70 leading-relaxed">Simple strategies to support training, recovery and day-to-day wellbeing.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col gap-4 transition-shadow hover:shadow-md">
              <CheckCircle className="text-[#8A9A86] shrink-0" size={24} />
              <div>
                <h3 className="font-medium text-[#2C3539] text-[17px] mb-2">WRK Training App</h3>
                <p className="text-[15px] text-[#2C3539]/70 leading-relaxed">Your programme, progress tracking, resources and communication with your coach in one place.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col gap-4 transition-shadow hover:shadow-md">
              <CheckCircle className="text-[#8A9A86] shrink-0" size={24} />
              <div>
                <h3 className="font-medium text-[#2C3539] text-[17px] mb-2">Coaching & Accountability</h3>
                <p className="text-[15px] text-[#2C3539]/70 leading-relaxed">Regular check-ins and adjustments so your programme evolves as you do.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center bg-white border border-neutral-200 hover:border-[#8A9A86] text-[#2C3539] px-8 py-4 rounded-xl font-medium transition-colors text-[16px]"
            >
              Explore GLP-1 Coaching
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — THE WRK DIFFERENCE */}
      <section className="py-24 bg-white px-4 md:px-8 border-t border-neutral-200">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-[32px] md:text-[40px] text-[#2C3539]">Why WRK?</h2>
          <div className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/80 space-y-6">
            <p>WRK isn't another generic fat-loss programme.</p>
            <p>It's specialist fitness coaching built around the unique challenges of training while using a GLP-1.</p>
            <div className="py-4 font-medium text-[#2C3539] space-y-3">
              <p>You don't need punishment workouts.</p>
              <p>You don't need to live in the gym.</p>
              <p>You don't need another extreme diet.</p>
            </div>
            <p>You need a training and lifestyle strategy that fits your current reality — and evolves as your body changes.</p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — COACH INTRODUCTION */}
      <section className="py-24 bg-[#FAFAF9] px-4 md:px-8 border-t border-b border-neutral-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full md:w-5/12 flex justify-center">
            <div className="w-[280px] md:w-full max-w-[380px] aspect-[4/5] rounded-3xl shadow-sm border border-neutral-100 wrk-photo-container">
              <div className="wrk-photo-overlay"></div>
              <img 
                src="https://i.postimg.cc/ZYHDT3kr/Screen-Shot-2026-06-23-at-2-27-18-PM.png"
                alt="Hayden, Founder and Coach of WRK Personal Training"
                className="w-full h-full wrk-photo"
              />
            </div>
          </div>
          <div className="w-full md:w-7/12 space-y-8">
            <h2 className="font-serif text-[32px] md:text-[40px] text-[#2C3539]">Meet Hayden</h2>
            <div className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/80 space-y-6">
              <p>I help people lose weight, build strength and improve their health without turning fitness into another full-time job.</p>
              <p>As a GLP-1 Fitness Coach, I help you make the most of your weight-loss journey by combining nutrition, strength training and sustainable habits that support the life you want to live.</p>
            </div>
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center bg-white border border-neutral-200 hover:border-[#8A9A86] text-[#2C3539] px-8 py-4 rounded-xl font-medium transition-colors text-[16px]"
              >
                Meet Hayden <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — CORE PHILOSOPHY */}
      <section className="py-24 bg-white px-4 md:px-8 border-b border-neutral-200">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-[32px] md:text-[40px] text-[#2C3539]">Medicine Is One Part of the Journey.</h2>
          <div className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/80 space-y-6">
            <p>Your GLP-1 can help you lose the weight.</p>
            <p>But the strength you build, the fitness you develop and the habits you create are yours.</p>
            <p className="font-serif text-[22px] md:text-[24px] text-[#2C3539] pt-4">
              <strong>That's the part we work on.</strong>
            </p>
            <p className="pt-4">WRK Personal Training provides specialist GLP-1 fitness coaching designed to help you lose weight without losing sight of what makes you strong, capable and independent.</p>
          </div>
          <div className="pt-8">
            <Link
              to="/assessment"
              className="inline-flex items-center justify-center bg-[#8A9A86] hover:bg-[#768672] text-white px-8 py-4 rounded-xl font-medium transition-colors text-[16px]"
            >
              Take the Free GLP-1 Fitness Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FAQ */}
      <section className="py-24 bg-[#FAFAF9] px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-[32px] md:text-[40px] text-[#2C3539]">GLP-1 Fitness Coaching FAQs</h2>
          </div>
          <div className="bg-white p-6 md:p-10 rounded-3xl border border-neutral-200 shadow-sm">
            <FaqItem 
              question="Can I build muscle while taking a GLP-1?" 
              answer={<>Yes. Resistance training, appropriate nutrition and adequate protein can support muscle preservation and strength development during weight loss. Individual results vary.</>} 
            />
            <FaqItem 
              question="How should I exercise while taking a GLP-1?" 
              answer={<>A combination of resistance training, cardiovascular activity and regular daily movement can form the foundation of a well-rounded programme. Training should be appropriate to your current fitness, recovery and individual circumstances.</>} 
            />
            <FaqItem 
              question="Why is strength training important during GLP-1 weight loss?" 
              answer={<>Strength training can help support muscle and strength while you lose weight. It also helps build the physical capacity needed for everyday life.</>} 
            />
            <FaqItem 
              question="How much protein do I need on a GLP-1?" 
              answer={<>Protein needs vary depending on factors such as body size, activity level, goals and overall diet. WRK helps clients develop practical strategies to prioritise adequate protein during weight loss.</>} 
            />
            <FaqItem 
              question="What does a GLP-1 Fitness Coach do?" 
              answer={<>A GLP-1 Fitness Coach provides fitness, training, nutrition-habit and lifestyle support alongside medical treatment. At WRK, the focus is strength, muscle preservation, fitness, recovery, daily movement and sustainable habits.</>} 
            />
            <FaqItem 
              question="Is WRK a medical or GLP-1 prescribing service?" 
              answer={<>No. WRK provides fitness and lifestyle coaching. Medication decisions, prescribing and dosage changes should always be managed by the client's qualified healthcare professional.</>} 
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-white border-t border-neutral-200 px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-[32px] md:text-[40px] text-[#2C3539]">Ready to Build What's Next?</h2>
          <div className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/80 space-y-6">
            <p>Your medication is one part of the journey.</p>
            <p>The strength you build, the fitness you develop and the habits you create are what help you move forward.</p>
            <p className="font-medium text-[#2C3539] pt-4">Start with the free GLP-1 Fitness Assessment.</p>
          </div>
          <div className="pt-8">
            <Link
              to="/assessment"
              className="inline-flex items-center justify-center bg-[#8A9A86] hover:bg-[#768672] text-white px-8 py-4 rounded-xl font-medium transition-colors text-[16px] shadow-sm"
            >
              Take the Free GLP-1 Fitness Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
