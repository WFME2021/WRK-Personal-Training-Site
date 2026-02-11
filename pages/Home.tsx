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

      <div className="flex flex-col w-full overflow-x-hidden bg-white">
        
        {/* Hero Section */}
        <section className="relative px-4 pt-12 pb-12 md:px-8">
          <div className="max-w-[1800px] mx-auto">
            
            {/* Top Text - Massive Typography */}
            <div className="flex flex-col items-center justify-center pt-8 mb-16 md:mb-20">
              <h1 className="font-display text-[15vw] leading-[0.8] font-bold uppercase tracking-tighter text-center text-brand-black">
                Find Your <br/> Strength
              </h1>
              <div className="mt-12 flex flex-col items-center">
                <p className="text-lg md:text-2xl text-brand-black font-medium max-w-3xl text-center leading-relaxed">
                  Personal Training for People Who Show Up.
                </p>
                <div className="w-12 h-1 bg-brand-orange mt-6"></div>
              </div>
            </div>

            {/* Main Visual Block - Rounded Corners */}
            <div className="relative w-full h-[60vh] md:h-[85vh] rounded-[3rem] md:rounded-[4rem] overflow-hidden group shadow-2xl">
              <img 
                src={heroImage} 
                alt="Personal training session Christchurch" 
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent"></div>
              
              {/* Overlay Text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center mix-blend-overlay">
                <span className="font-display text-[20vw] font-bold text-white opacity-20 uppercase tracking-tighter leading-none pointer-events-none">
                  Inside<br/>& Out
                </span>
              </div>
              
              {/* Floating CTA */}
              <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 flex flex-col md:flex-row gap-4">
                <Link to="/assessment">
                  <button className="bg-white text-brand-black px-10 py-5 rounded-full font-display font-bold uppercase tracking-widest text-sm md:text-base hover:bg-brand-orange hover:text-white transition-all shadow-xl flex items-center gap-2">
                    Take 2-Min Diagnostic <ArrowRight size={20} />
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="backdrop-blur-md bg-white/20 border border-white/50 text-white px-10 py-5 rounded-full font-display font-bold uppercase tracking-widest text-sm md:text-base hover:bg-white hover:text-brand-black transition-all shadow-xl">
                    Work Together
                  </button>
                </Link>
              </div>
            </div>

            <div className="mt-8 text-center flex justify-center items-center gap-4">
               <span className="h-px w-12 bg-gray-300"></span>
               <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gray">No hype. No guilt. Just work.</p>
               <span className="h-px w-12 bg-gray-300"></span>
            </div>
          </div>
        </section>

        {/* Philosophy Section - High Contrast */}
        <section className="py-24 px-4 md:px-8 bg-brand-light">
          <div className="max-w-6xl mx-auto">
             <div className="grid md:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="font-display text-6xl md:text-8xl uppercase font-bold text-brand-black mb-8 leading-[0.9] tracking-tighter">
                    Human First. <br/><span className="text-brand-gray">Athlete Second.</span>
                  </h2>
                  <p className="text-xl text-brand-black leading-relaxed mb-8">
                    My job is simple: help you train in a way that’s genuinely beneficial, fits your real schedule, and leaves you feeling better than when you walked in.
                  </p>
                  <Link to="/assessment" className="text-brand-orange font-bold uppercase tracking-widest text-sm border-b-2 border-brand-orange pb-1 hover:text-brand-black hover:border-brand-black transition-colors">
                    Read Our Philosophy
                  </Link>
                </div>
                <div className="space-y-6">
                   {[
                     { title: "Minimum Effective Dose", desc: "Because life is busy and stress is real. We don't live in the gym." },
                     { title: "Progress is Planned", desc: "So we’re not guessing week to week. You always know what to do." },
                     { title: "Recovery Matters", desc: "Because your body keeps the score. If you can't recover from it, you shouldn't do it." }
                   ].map((item, i) => (
                     <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow duration-300">
                       <h3 className="font-bold text-xl text-brand-black mb-2 flex items-center">
                         <span className="w-2 h-2 bg-brand-orange rounded-full mr-4"></span> 
                         {item.title}
                       </h3>
                       <p className="text-brand-gray ml-6">{item.desc}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* Who I work best with - Dark Mode */}
        <section className="py-32 px-4 md:px-8 bg-brand-black text-white">
          <div className="max-w-5xl mx-auto">
             <div className="text-center mb-20">
               <h2 className="font-display text-5xl md:text-7xl uppercase font-bold mb-8 tracking-tighter">Who I Work Best With</h2>
               <div className="w-24 h-1 bg-brand-orange mx-auto mb-8"></div>
               <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
                 Most of my clients are “high performers” just in different uniforms. Some run companies. Some run households. Some just want their body back.
               </p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8 text-left">
               <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-brand-orange transition-colors duration-300">
                 <h3 className="font-display text-3xl text-white mb-4 uppercase">Trust & Clarity</h3>
                 <p className="text-gray-400">You want a clear plan you can trust, not random workouts or entertainment.</p>
               </div>
               <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-brand-orange transition-colors duration-300">
                 <h3 className="font-display text-3xl text-white mb-4 uppercase">Honesty</h3>
                 <p className="text-gray-400">You prefer honest feedback over motivational speeches and hype.</p>
               </div>
               <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-brand-orange transition-colors duration-300">
                 <h3 className="font-display text-3xl text-white mb-4 uppercase">Standards</h3>
                 <p className="text-gray-400">You care about doing this properly. You’re ready to show up.</p>
               </div>
             </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-4 md:px-8 bg-white">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex justify-between items-end mb-16 border-b border-black pb-8">
              <h2 className="font-display text-6xl md:text-9xl uppercase font-bold tracking-tighter leading-none text-brand-black">
                Training<span className="text-brand-orange">.</span>
              </h2>
              <div className="hidden md:block mb-4">
                 <p className="text-brand-gray font-bold uppercase tracking-widest text-right">Choose your path</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Service Card 1 */}
              <Link to="/personal-training" className="group block">
                <div className="h-[500px] rounded-[3rem] overflow-hidden mb-6 relative">
                   <img src={ptImage} alt="Hybrid Personal Training" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-white text-brand-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Christchurch</div>
                   <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 group-hover:bg-brand-orange group-hover:border-brand-orange transition-colors">
                     <ArrowUpRight className="text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-4xl uppercase font-bold mb-2 group-hover:text-brand-orange transition-colors">Hybrid Coaching</h3>
                <p className="text-brand-gray font-medium max-w-sm">In-person sessions + app homework. Precision coaching.</p>
              </Link>

              {/* Service Card 2 */}
              <Link to="/online-coaching" className="group block lg:mt-24">
                <div className="h-[500px] rounded-[3rem] overflow-hidden mb-6 relative">
                   <img src={onlineImage} alt="Online Coaching" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-white text-brand-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">NZ Wide</div>
                   <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 group-hover:bg-brand-orange group-hover:border-brand-orange transition-colors">
                     <ArrowUpRight className="text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-4xl uppercase font-bold mb-2 group-hover:text-brand-orange transition-colors">Online Coaching</h3>
                <p className="text-brand-gray font-medium max-w-sm">Structure, consistency, and guidance anywhere.</p>
              </Link>

               {/* Service Card 3 */}
              <Link to="/42-day-reset" className="group block">
                <div className="h-[500px] rounded-[3rem] overflow-hidden mb-6 relative bg-brand-black flex items-center justify-center">
                   <h4 className="font-display text-[12rem] font-bold text-white opacity-10 leading-none">42</h4>
                   <div className="absolute top-8 right-8 bg-brand-orange text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Global</div>
                   <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 group-hover:bg-brand-orange group-hover:border-brand-orange transition-colors">
                     <ArrowUpRight className="text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-4xl uppercase font-bold mb-2 group-hover:text-brand-orange transition-colors">42-Day Reset</h3>
                <p className="text-brand-gray font-medium max-w-sm">Self-guided app plan. Rebuild momentum.</p>
              </Link>

            </div>
          </div>
        </section>

        {/* Expectation Grid */}
        <section className="py-24 px-4 md:px-8 bg-brand-light">
          <div className="max-w-4xl mx-auto">
             <h2 className="font-display text-5xl font-bold text-brand-black mb-16 text-center uppercase tracking-tighter">What To Expect</h2>
             <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-[2rem] overflow-hidden">
               {[
                 { title: "Respect for Reality", desc: "Training that works with your life, not against it." },
                 { title: "Calm Clarity", desc: "A calm plan that’s actually doable. No chaos." },
                 { title: "Tangible Progress", desc: "Strength numbers going up, energy stabilizing." },
                 { title: "Feeling Better", desc: "Leaving sessions energized, not wrecked." }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-12 hover:bg-gray-50 transition-colors">
                    <h3 className="font-display text-2xl font-bold uppercase mb-4 text-brand-black">{item.title}</h3>
                    <p className="text-brand-gray">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQ items={faqs} title="Common Questions" />

        {/* CTA */}
        <section className="bg-white py-32 px-4 md:px-8 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange rounded-full opacity-5 blur-3xl pointer-events-none"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="font-display text-6xl md:text-8xl uppercase font-bold text-brand-black mb-8 tracking-tighter">
              Start Now
            </h2>
            <p className="text-xl font-medium text-brand-gray mb-12">
              Take the diagnostic and I’ll point you to the best next step.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link to="/assessment">
                <Button size="lg" className="px-12 py-6 text-xl shadow-2xl">Take Diagnostic</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="px-12 py-6 text-xl">Apply to Work Together</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};