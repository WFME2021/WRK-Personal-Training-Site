import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ArrowUpRight, BarChart3, Brain, HeartPulse } from 'lucide-react';
import { Button } from '../components/Button';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';

export const Home: React.FC = () => {
  const { pageContent } = useContent();
  const { heroImage, ptImage, onlineImage } = pageContent.home;

  const faqs = [
    {
      question: "Do I need to be 'fit' before I start?",
      answer: "No. That’s like cleaning the house before the cleaner comes. I meet you exactly where you are—whether you're an athlete or rebuilding after a decade of desk work."
    },
    {
      question: "How often do I need to train?",
      answer: "We focus on the minimum effective dose. For most busy professionals, that looks like 2–3 strength sessions per week, plus some easy movement on other days."
    },
    {
      question: "Do you provide meal plans?",
      answer: "I provide nutrition operating systems, not rigid meal plans. I teach you how to structure meals for performance and energy in a way that fits your actual life (and social schedule)."
    },
    {
      question: "Can you help with injuries?",
      answer: "Yes. Many of my clients are working around old sports injuries or desk-related pain. We don't ignore pain; we train intelligently around it to build capacity without flare-ups."
    },
    {
      question: "What if I travel frequently?",
      answer: "Then you're my ideal client. I build 'fallback' sessions and hotel workouts into your plan so you can maintain momentum even when life gets chaotic."
    },
    {
      question: "What is the 2-minute diagnostic?",
      answer: "It's a quick assessment tool I built to help you identify your biggest constraints and give you a recommended roadmap instantly. No sales call required to see the results."
    }
  ];

  return (
    <>
      <SeoHead 
        title="WRK Personal Training | Personal Trainer Christchurch + Online Coaching"
        description="Personal training in Christchurch + online coaching NZ-wide. Smart, sustainable training for people who show up. Take the 2-minute diagnostic."
      />

      <div className="flex flex-col w-full overflow-x-hidden">
        
        {/* Hero Section */}
        <section className="relative px-4 pt-4 pb-12 md:px-8">
          <div className="max-w-[1600px] mx-auto">
            
            {/* Top Text */}
            <div className="flex flex-col items-center justify-center pt-8 mb-8 md:mb-12">
              <h1 className="font-display text-[11vw] md:text-[9vw] leading-[0.9] font-bold uppercase tracking-tighter text-center text-brand-primary">
                Personal Training <br className="hidden md:block" /> For People Who <br className="hidden md:block" /> Show Up
              </h1>
              <p className="mt-8 text-lg md:text-xl text-brand-gray font-medium max-w-3xl text-center leading-relaxed">
                CEOs, athletes, retirees, parents, cancer survivors, people managing autoimmune stuff — different lives, same mindset: you’re a good human, and you want to feel strong in your body.
              </p>
              <p className="mt-4 text-brand-gray font-medium text-center">
                My job is simple: help you train in a way that’s genuinely beneficial, fits your real schedule, and leaves you feeling better than when you walked in.
              </p>
            </div>

            {/* Main Visual Block */}
            <div className="relative w-full h-[60vh] md:h-[75vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden group">
              <img 
                src={heroImage} 
                alt="Personal training session Christchurch" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-brand-primary/10 transition-colors duration-500"></div>
              
              {/* Floating CTA */}
              <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 flex flex-col md:flex-row gap-4">
                <Link to="/assessment">
                  <button className="bg-brand-orange text-brand-black px-8 py-4 rounded-full font-display font-bold uppercase tracking-widest text-sm md:text-base hover:bg-white transition-all shadow-lg flex items-center gap-2">
                    Take the 2-Minute Diagnostic <ArrowRight size={20} />
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="bg-white text-brand-black px-8 py-4 rounded-full font-display font-bold uppercase tracking-widest text-sm md:text-base hover:bg-brand-black hover:text-white transition-all shadow-lg">
                    Apply to Work Together
                  </button>
                </Link>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-gray opacity-70">No hype. No guilt. Just smart training and honest coaching.</p>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 px-4 md:px-8 bg-brand-light">
          <div className="max-w-5xl mx-auto">
             <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-brand-orange font-bold tracking-widest uppercase mb-4 block">My Philosophy</span>
                  <h2 className="font-display text-5xl md:text-6xl uppercase font-bold text-brand-primary mb-6">
                    Human First. <br/>Athlete Second.
                  </h2>
                  <p className="text-lg text-brand-gray leading-relaxed mb-6">
                    The way I coach is pretty consistent. That's how you get results without burning yourself into the ground.
                  </p>
                </div>
                <div className="space-y-6">
                   <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                     <h3 className="font-bold text-lg text-brand-primary mb-2 flex items-center"><Check size={20} className="text-brand-orange mr-3" /> Do the minimum that works</h3>
                     <p className="text-sm text-brand-gray ml-8">Because life is busy and stress is real. We don't live in the gym.</p>
                   </div>
                   <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                     <h3 className="font-bold text-lg text-brand-primary mb-2 flex items-center"><Check size={20} className="text-brand-orange mr-3" /> Progress is planned</h3>
                     <p className="text-sm text-brand-gray ml-8">So we’re not guessing week to week. You always know what to do.</p>
                   </div>
                   <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                     <h3 className="font-bold text-lg text-brand-primary mb-2 flex items-center"><Check size={20} className="text-brand-orange mr-3" /> Recovery matters</h3>
                     <p className="text-sm text-brand-gray ml-8">Because your body keeps the score. If you can't recover from it, you shouldn't do it.</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Who I work best with */}
        <section className="py-24 px-4 md:px-8 bg-brand-black text-white rounded-[3rem] -mt-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="font-display text-4xl md:text-6xl uppercase font-bold mb-8">Who I Work Best With</h2>
             <p className="text-xl text-gray-300 leading-relaxed mb-12">
               Most of my clients are “high performers,” just in different uniforms. Some run companies. Some run households. Some are rebuilding after illness or injury. Some just want their body back.
             </p>
             <div className="grid md:grid-cols-3 gap-8 text-left">
               <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
                 <h3 className="font-bold text-lg text-brand-orange mb-4">Trust & Clarity</h3>
                 <p className="text-sm text-gray-300">You want a clear plan you can trust, not random workouts.</p>
               </div>
               <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
                 <h3 className="font-bold text-lg text-brand-orange mb-4">Honesty</h3>
                 <p className="text-sm text-gray-300">You prefer honest feedback over motivational speeches.</p>
               </div>
               <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
                 <h3 className="font-bold text-lg text-brand-orange mb-4">Standards</h3>
                 <p className="text-sm text-gray-300">You care about doing this properly. You’ll fit right in.</p>
               </div>
             </div>
          </div>
        </section>

        {/* Ways to Work Together */}
        <section id="services" className="py-24 px-4 md:px-8 bg-white">
          <div className="max-w-[1600px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-5xl md:text-7xl uppercase font-bold tracking-tighter leading-none text-brand-primary">
                Ways to Work Together
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Hybrid */}
              <Link to="/personal-training" className="group bg-gray-50 rounded-[2.5rem] p-8 md:p-12 hover:bg-brand-primary hover:text-white transition-all duration-500 border border-gray-100">
                <div className="h-64 rounded-3xl overflow-hidden mb-8 relative">
                   <img src={ptImage} alt="Hybrid Personal Training" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute top-4 right-4 bg-white text-brand-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Christchurch</div>
                </div>
                <h3 className="font-display text-3xl uppercase font-bold mb-4">Hybrid 1:1 Coaching</h3>
                <p className="text-brand-gray group-hover:text-gray-300 mb-8 font-medium">
                  In-person sessions + app homework. Best if you want coaching eyes on you + a plan tailored to your body and history.
                </p>
                <div className="flex items-center text-sm font-bold uppercase tracking-wider border-b border-brand-black group-hover:border-white self-start pb-1">
                  Explore Hybrid <ArrowRight size={16} className="ml-2" />
                </div>
              </Link>

              {/* Online */}
              <Link to="/online-coaching" className="group bg-gray-50 rounded-[2.5rem] p-8 md:p-12 hover:bg-brand-primary hover:text-white transition-all duration-500 border border-gray-100">
                <div className="h-64 rounded-3xl overflow-hidden mb-8 relative">
                   <img src={onlineImage} alt="Online Coaching App" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute top-4 right-4 bg-white text-brand-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">NZ Wide</div>
                </div>
                <h3 className="font-display text-3xl uppercase font-bold mb-4">Online Coaching</h3>
                <p className="text-brand-gray group-hover:text-gray-300 mb-8 font-medium">
                  Accountability + check-ins. Best if you want structure, consistency, and guidance—without in-person sessions.
                </p>
                <div className="flex items-center text-sm font-bold uppercase tracking-wider border-b border-brand-black group-hover:border-white self-start pb-1">
                  Explore Online <ArrowRight size={16} className="ml-2" />
                </div>
              </Link>

              {/* Reset */}
              <Link to="/42-day-reset" className="group bg-gray-50 rounded-[2.5rem] p-8 md:p-12 hover:bg-brand-primary hover:text-white transition-all duration-500 border border-gray-100">
                 <div className="h-64 rounded-3xl overflow-hidden mb-8 relative bg-brand-orange flex items-center justify-center">
                   <h4 className="font-display text-9xl font-bold text-white opacity-20">42</h4>
                   <div className="absolute top-4 right-4 bg-white text-brand-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Global</div>
                </div>
                <h3 className="font-display text-3xl uppercase font-bold mb-4">42-Day Reset</h3>
                <p className="text-brand-gray group-hover:text-gray-300 mb-8 font-medium">
                  $47, self-guided in the app. Best if you want a solid plan to follow and build momentum on your own.
                </p>
                <div className="flex items-center text-sm font-bold uppercase tracking-wider border-b border-brand-black group-hover:border-white self-start pb-1">
                  Start The Reset <ArrowRight size={16} className="ml-2" />
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* What You Can Expect */}
        <section className="py-24 px-4 md:px-8 bg-brand-light">
          <div className="max-w-4xl mx-auto">
             <h2 className="font-display text-4xl font-bold text-brand-primary mb-12 text-center">What You Can Expect</h2>
             <div className="grid md:grid-cols-2 gap-8">
               <div className="flex gap-4 items-start">
                  <div className="bg-brand-orange p-2 rounded-full mt-1 shrink-0">
                    <HeartPulse size={20} className="text-brand-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Respect for your reality</h3>
                    <p className="text-sm text-brand-gray">Training that respects your stress, sleep, and schedule. We work with your life, not against it.</p>
                  </div>
               </div>
               <div className="flex gap-4 items-start">
                  <div className="bg-brand-orange p-2 rounded-full mt-1 shrink-0">
                    <Brain size={20} className="text-brand-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Calm Clarity</h3>
                    <p className="text-sm text-brand-gray">A calm plan that’s actually doable. No chaos, no guesswork.</p>
                  </div>
               </div>
               <div className="flex gap-4 items-start">
                  <div className="bg-brand-orange p-2 rounded-full mt-1 shrink-0">
                    <BarChart3 size={20} className="text-brand-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Tangible Progress</h3>
                    <p className="text-sm text-brand-gray">Progress you can feel (and measure). Strength numbers going up, energy stabilizing.</p>
                  </div>
               </div>
               <div className="flex gap-4 items-start">
                  <div className="bg-brand-orange p-2 rounded-full mt-1 shrink-0">
                    <ArrowUpRight size={20} className="text-brand-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Feeling Better</h3>
                    <p className="text-sm text-brand-gray">Leaving sessions feeling better, not wrecked. You should have energy for the rest of your day.</p>
                  </div>
               </div>
             </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQ items={faqs} title="Common Questions" />

        {/* CTA Footer-ish area */}
        <section className="bg-white py-32 px-4 md:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl uppercase font-bold text-brand-primary mb-6">
              Not sure where to start?
            </h2>
            <p className="text-xl font-medium text-brand-gray mb-10">
              Take the diagnostic and I’ll point you to the best next step.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/assessment">
                <Button size="lg" className="px-10 py-5 text-lg shadow-xl hover:shadow-2xl">Take Training Diagnostic</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="px-10 py-5 text-lg">Apply to Work Together</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};