
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '../components/Button';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';

export const Home: React.FC = () => {
  const { pageContent } = useContent();
  const { heroImage, ptImage, onlineImage, corporateImage } = pageContent.home;

  const faqs = [
    {
      question: "Do I need to be 'fit' before I start?",
      answer: "No. You just need to be ready to start. I work with people rebuilding after a decade of desk work, injury, or parenting. We start where you are."
    },
    {
      question: "How often do I need to train?",
      answer: "We focus on the minimum effective dose. For most high performers, that looks like 2–3 strength sessions per week, plus some easy movement. We aim for high ROI, not high volume."
    },
    {
      question: "Do you provide meal plans?",
      answer: "I provide nutrition operating systems, not rigid meal plans. I teach you how to fuel for sustained energy in a way that fits a social life and family dinners."
    },
    {
      question: "Can you help with injuries?",
      answer: "Yes. Many of my clients are working around old sports injuries or desk-related pain. We build capacity around the pain, not through it."
    },
    {
      question: "What if I travel frequently?",
      answer: "Then you're my ideal client. I build 'fallback' sessions and hotel workouts into your plan so you maintain momentum when your schedule goes sideways."
    },
    {
      question: "What is the 2-minute diagnostic?",
      answer: "It's a quick assessment tool I built to help you identify your biggest constraints and give you a recommended roadmap instantly. No sales call required."
    }
  ];

  return (
    <>
      <SeoHead 
        title="WRK Personal Training | Build Your Capacity"
        description="Bespoke personal training for high performers who run boardrooms or households. Build the physical capacity to support your life."
      />

      <div className="flex flex-col w-full overflow-x-hidden bg-primary transition-colors duration-300">
        
        {/* Hero Section */}
        <section className="relative px-4 pt-12 pb-12 md:px-8">
          <div className="max-w-[1800px] mx-auto">
            
            {/* Top Text - Massive Typography */}
            <div className="flex flex-col items-center justify-center pt-8 mb-16 md:mb-20">
              <h1 className="font-display text-[15vw] leading-[0.8] font-bold uppercase tracking-tighter text-center text-text-primary">
                Build Your <br/> Capacity
              </h1>
              <div className="mt-12 flex flex-col items-center">
                <p className="text-lg md:text-2xl text-text-primary font-medium max-w-3xl text-center leading-relaxed">
                  Whether you run a boardroom or run a household. <br className="hidden md:block"/>
                  Physical reliability is the foundation for high-stakes performance.
                </p>
                <div className="w-12 h-1 bg-accent mt-6"></div>
              </div>
            </div>

            {/* Main Visual Block - Rounded Corners */}
            <div className="relative w-full h-[60vh] md:h-[85vh] rounded-[3rem] md:rounded-[4rem] overflow-hidden group shadow-2xl border border-border">
              <img 
                src={heroImage} 
                alt="Personal training session Christchurch" 
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              
              {/* Overlay Text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center mix-blend-overlay">
                <span className="font-display text-[20vw] font-bold text-white opacity-20 uppercase tracking-tighter leading-none pointer-events-none">
                  Show<br/>Up
                </span>
              </div>
              
              {/* Floating CTA */}
              <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 flex flex-col md:flex-row gap-4">
                <Link to="/assessment">
                  <button className="bg-primary text-text-primary px-10 py-5 rounded-full font-display font-bold uppercase tracking-widest text-sm md:text-base hover:bg-accent hover:text-white transition-all shadow-xl flex items-center gap-2 border border-border">
                    Start Diagnostic <ArrowRight size={20} />
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="backdrop-blur-md bg-white/10 border border-white/50 text-white px-10 py-5 rounded-full font-display font-bold uppercase tracking-widest text-sm md:text-base hover:bg-white hover:text-black transition-all shadow-xl">
                    Work Together
                  </button>
                </Link>
              </div>
            </div>

            <div className="mt-8 text-center flex justify-center items-center gap-4">
               <span className="h-px w-12 bg-border"></span>
               <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-secondary">The Right Work, Done Well.</p>
               <span className="h-px w-12 bg-border"></span>
            </div>
          </div>
        </section>

        {/* Philosophy Section - Secondary BG */}
        <section className="py-24 px-4 md:px-8 bg-secondary border-t border-border">
          <div className="max-w-6xl mx-auto">
             <div className="grid md:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="font-display text-6xl md:text-8xl uppercase font-bold text-text-primary mb-8 leading-[0.9] tracking-tighter">
                    The Anchor <br/><span className="text-text-secondary">Of Your Environment.</span>
                  </h2>
                  <p className="text-xl text-text-primary leading-relaxed mb-8">
                    People rely on you. Your team, your family, and your business depend on your energy, your mood, and your decision-making. We build the physical resilience to carry that load without breaking.
                  </p>
                  <Link to="/assessment" className="text-accent font-bold uppercase tracking-widest text-sm border-b-2 border-accent pb-1 hover:text-text-primary hover:border-text-primary transition-colors">
                    Read Our Philosophy
                  </Link>
                </div>
                <div className="space-y-6">
                   {[
                     { title: "Capacity is Currency", desc: "When you have physical capacity, you have options. When you don't, you have constraints." },
                     { title: "Performance for the Long Haul", desc: "We are not interested in a 6-week shred. We are interested in the next decade of high performance." },
                     { title: "Manage Energy, Not Just Time", desc: "You can't add hours to the day. But you can double the energy you bring to the hours you have." }
                   ].map((item, i) => (
                     <div key={i} className="bg-primary p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300 border border-border hover:border-accent/50">
                       <h3 className="font-bold text-xl text-text-primary mb-2 flex items-center">
                         <span className="w-2 h-2 bg-accent rounded-full mr-4"></span> 
                         {item.title}
                       </h3>
                       <p className="text-text-secondary ml-6">{item.desc}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* Who I work best with - Inverse Scheme */}
        <section className="py-32 px-4 md:px-8 bg-text-primary text-primary">
          <div className="max-w-5xl mx-auto">
             <div className="text-center mb-20">
               <h2 className="font-display text-5xl md:text-7xl uppercase font-bold mb-8 tracking-tighter">For The Decision Makers</h2>
               <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
               <p className="text-2xl text-primary/80 leading-relaxed max-w-3xl mx-auto font-light">
                 Time is your most expensive asset. You don't need a cheerleader; you need a strategist. We provide the maximum physiological return in the most efficient window.
               </p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8 text-left">
               <div className="bg-primary/10 p-10 rounded-3xl border border-primary/20 hover:border-accent transition-colors duration-300">
                 <h3 className="font-display text-3xl text-primary mb-4 uppercase">Reliability</h3>
                 <p className="text-primary/60">You need to be harder to break. Training that builds you up, rather than beating you down.</p>
               </div>
               <div className="bg-primary/10 p-10 rounded-3xl border border-primary/20 hover:border-accent transition-colors duration-300">
                 <h3 className="font-display text-3xl text-primary mb-4 uppercase">Efficiency</h3>
                 <p className="text-primary/60">You want the minimum effective dose. High ROI, zero wasted time, maximum output.</p>
               </div>
               <div className="bg-primary/10 p-10 rounded-3xl border border-primary/20 hover:border-accent transition-colors duration-300">
                 <h3 className="font-display text-3xl text-primary mb-4 uppercase">Autonomy</h3>
                 <p className="text-primary/60">You want a system you can rely on, even when life gets chaotic and the schedule breaks.</p>
               </div>
             </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-4 md:px-8 bg-primary">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex justify-between items-end mb-16 border-b border-border pb-8">
              <h2 className="font-display text-6xl md:text-9xl uppercase font-bold tracking-tighter leading-none text-text-primary">
                Training<span className="text-accent">.</span>
              </h2>
              <div className="hidden md:block mb-4">
                 <p className="text-text-secondary font-bold uppercase tracking-widest text-right">Choose your path</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Service Card 1: Hybrid */}
              <Link to="/personal-training" className="group block">
                <div className="h-[500px] rounded-[3rem] overflow-hidden mb-6 relative border border-border">
                   <img src={ptImage} alt="Hybrid Personal Training" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-secondary text-text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Christchurch</div>
                   <div className="absolute bottom-8 left-8 bg-secondary/80 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-4xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">Hybrid Coaching</h3>
                <p className="text-text-secondary font-medium max-w-sm">In-person precision + remote flexibility. The best of both worlds.</p>
              </Link>

              {/* Service Card 2: Online */}
              <Link to="/online-coaching" className="group block lg:mt-24">
                <div className="h-[500px] rounded-[3rem] overflow-hidden mb-6 relative border border-border">
                   <img src={onlineImage} alt="Online Coaching" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-secondary text-text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">NZ Wide</div>
                   <div className="absolute bottom-8 left-8 bg-secondary/80 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-4xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">Online Coaching</h3>
                <p className="text-text-secondary font-medium max-w-sm">Structure and accountability for a chaotic schedule.</p>
              </Link>

               {/* Service Card 3: 42 Day Reset */}
              <Link to="/42-day-reset" className="group block">
                <div className="h-[500px] rounded-[3rem] overflow-hidden mb-6 relative bg-secondary flex items-center justify-center border border-border">
                   <h4 className="font-display text-[12rem] font-bold text-text-primary opacity-5 leading-none">42</h4>
                   <div className="absolute top-8 right-8 bg-accent text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Global</div>
                   <div className="absolute bottom-8 left-8 bg-primary/10 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-4xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">42-Day Reset</h3>
                <p className="text-text-secondary font-medium max-w-sm">Self-guided execution system. Rebuild momentum.</p>
              </Link>

              {/* Service Card 4: Corporate Wellness */}
              <Link to="/corporate-wellness" className="group block lg:mt-24">
                <div className="h-[500px] rounded-[3rem] overflow-hidden mb-6 relative border border-border">
                   {corporateImage ? (
                     <img src={corporateImage} alt="Corporate Wellness" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   ) : (
                     <div className="w-full h-full bg-secondary"></div>
                   )}
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-secondary text-text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Teams</div>
                   <div className="absolute bottom-8 left-8 bg-secondary/80 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-4xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">Resilient Teams</h3>
                <p className="text-text-secondary font-medium max-w-sm">High-ROI strategies for high-performance culture.</p>
              </Link>

            </div>
          </div>
        </section>

        {/* Expectation Grid */}
        <section className="py-24 px-4 md:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto">
             <h2 className="font-display text-5xl font-bold text-text-primary mb-16 text-center uppercase tracking-tighter">What To Expect</h2>
             <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-[2rem] overflow-hidden">
               {[
                 { title: "Respect for Reality", desc: "Training that works with your actual schedule, not a fantasy one." },
                 { title: "Calm Clarity", desc: "A plan that removes decision fatigue. You execute, we handle the rest." },
                 { title: "Tangible Progress", desc: "Strength numbers up. Energy stable. Recovery optimized." },
                 { title: "Feeling Better", desc: "Leaving sessions energized and capable, not wrecked." }
               ].map((item, i) => (
                 <div key={i} className="bg-primary p-12 hover:bg-secondary transition-colors">
                    <h3 className="font-display text-2xl font-bold uppercase mb-4 text-text-primary">{item.title}</h3>
                    <p className="text-text-secondary">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQ items={faqs} title="Common Questions" />

        {/* CTA */}
        <section className="bg-primary py-32 px-4 md:px-8 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full opacity-5 blur-3xl pointer-events-none"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="font-display text-6xl md:text-8xl uppercase font-bold text-text-primary mb-8 tracking-tighter">
              Start Now
            </h2>
            <p className="text-xl font-medium text-text-secondary mb-12">
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
