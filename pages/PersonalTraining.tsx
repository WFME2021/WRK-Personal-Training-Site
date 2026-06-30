import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldPlus, Target, Clock, Search, Map, CheckSquare } from 'lucide-react';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';

export const PersonalTraining: React.FC = () => {
  const faqItems = [
    {
      question: "What happens in the discovery session?",
      answer: "It's a 20–30 minute conversation - no training required. We cover your goals, your history, any injuries or physical considerations, and do a basic movement screen. Everything gets captured in a written report that forms the foundation of your programme. It's complimentary and there's no obligation to continue."
    },
    {
      question: "Why is the programme design a separate cost?",
      answer: "Because a properly built programme takes time. Your $99 gets you a fully customised training and nutrition plan built specifically from your discovery session findings — not a template with your name on it. It's delivered through the WRK app before your first session so we can get straight to work."
    },
    {
      question: "Why only 30 minutes?",
      answer: "Because that's all you need when the programming is right. You handle the warm-up and finisher independently -  I use our time together for the technical work that actually requires a coach. Thirty focused minutes beats an hour of mixed-quality training every time."
    },
    {
      question: "I have an injury. Can I still train?",
      answer: "Yes. Injuries and physical considerations are part of the brief - not a reason to wait. The discovery session is specifically designed to identify anything that needs to be worked around. Most clients come in with something. We build your programme with that in mind from day one."
    },
    {
      question: "How often should I train?",
      answer: "That depends on your goals, schedule, and recovery capacity - and it's something we'll establish in your discovery session. Most clients train two to three times per week. Sessions run on a school-term schedule."
    },
    {
      question: "Do I need to be fit before I start?",
      answer: "No. The programme is built around where you are right now - not where you think you should be. The baseline session establishes your starting point so everything that follows is calibrated correctly."
    },
    {
      question: "What if I can't make a session?",
      answer: "Sessions are booked through the WRK app on a school-term schedule. Cancellation and rescheduling terms will be confirmed at your discovery session."
    },
    {
      question: "Are spaces really limited?",
      answer: "Yes. Hayden works with a small number of clients at any one time to maintain the standard of coaching. When a term is full, it's full. If you're interested, book a discovery session to secure your place."
    }
  ];

  return (
    <>
      <SeoHead 
        title="1 on 1 Personal Trainer Christchurch | Fat Loss & Strength | WRK"
        description="Expert 1 on 1 personal training in Christchurch for adults 35–60. Bespoke programme design, thirty-minute sessions, and a coach who actually keeps you accountable. 20 years experience."
      />

      <div className="flex flex-col w-full overflow-x-hidden bg-primary pb-24">
        
        {/* SECTION 1 — HERO */}
        <section className="relative min-h-[80svh] md:min-h-[90svh] w-full flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
             <img 
               referrerPolicy="no-referrer" 
               loading="eager" 
               src="https://i.postimg.cc/kMshn8rN/Screen-Shot-2026-06-23-at-2-10-37-PM.png" 
               alt="1:1 PERSONAL TRAINING" 
               className="w-full h-full object-cover object-top" 
             />
             <div 
               className="absolute inset-0"
               style={{
                 background: 'linear-gradient(to bottom, rgba(13, 17, 23, 0) 0%, rgba(13, 17, 23, 0.6) 60%, rgba(13, 17, 23, 0.88) 100%)'
               }}
             />
          </div>
          <div className="relative z-10 w-full px-5 pt-32 pb-12 md:pb-24 max-w-[1200px] mx-auto md:px-12 text-left">
            <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-orange-burnt mb-4">
              1 ON 1 PERSONAL TRAINING — CHRISTCHURCH
            </span>
            <h1 className="font-display text-[44px] sm:text-[56px] md:text-[80px] lg:text-[88px] break-words leading-[1.1] sm:leading-[1.1] text-white mb-6 uppercase max-w-[1000px]">
              Your Own Coach. Thirty Minute Focus. Results That Stick.
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] text-off-white font-medium max-w-[640px] mb-8 leading-[1.6]">
              Hayden Richards has been delivering 1 on 1 personal training in Christchurch for over 20 years — working with busy professionals aged 35–60 who want fat loss, strength, and a programme built around their real life.
            </p>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto px-8 py-5 text-[15px] sm:text-[16px] flex items-center justify-center gap-3">
                  Book a Free Consult <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2 — THE CONSULT */}
        <section className="py-24 px-6 lg:px-12 bg-secondary border-y border-border">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-accent mb-4">
                COMPLIMENTARY DISCOVERY SESSION
              </span>
              <h2 className="font-display text-4xl md:text-5xl uppercase text-text-primary leading-[1.25]">
                We Start With Assess. Address. Customise.
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-primary p-10 rounded-[2rem] border border-border shadow-sm flex flex-col items-start gap-6">
                 <div className="w-12 h-12 rounded-full bg-text-primary text-primary flex items-center justify-center shrink-0">
                   <Search size={24} />
                 </div>
                 <h3 className="font-display text-2xl uppercase text-text-primary">Assess</h3>
                 <p className="text-text-secondary leading-relaxed font-medium">Current capabilities, injury and medical history, movement screen.</p>
               </div>
               <div className="bg-primary p-10 rounded-[2rem] border border-border shadow-sm flex flex-col items-start gap-6">
                 <div className="w-12 h-12 rounded-full bg-text-primary text-primary flex items-center justify-center shrink-0">
                   <Map size={24} />
                 </div>
                 <h3 className="font-display text-2xl uppercase text-text-primary">Address</h3>
                 <p className="text-text-secondary leading-relaxed font-medium">Identify barriers, physical considerations, and anything that needs to be built into your programme.</p>
               </div>
               <div className="bg-primary p-10 rounded-[2rem] border border-border shadow-sm flex flex-col items-start gap-6">
                 <div className="w-12 h-12 rounded-full bg-text-primary text-primary flex items-center justify-center shrink-0">
                   <CheckSquare size={24} />
                 </div>
                 <h3 className="font-display text-2xl uppercase text-text-primary">Customise</h3>
                 <p className="text-text-secondary leading-relaxed font-medium">Your training and nutrition approach designed around everything we've learned. Delivered in a detailed written report.</p>
               </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-text-secondary font-medium">Complimentary. No obligation. A clear picture of where you are and where you're headed.</p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — HOW IT WORKS */}
        <section className="py-24 px-6 lg:px-12 bg-primary">
          <div className="max-w-[1000px] mx-auto flex flex-col items-center">
            <div className="text-center mb-16">
              <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-accent mb-4">
                YOUR WRK PROGRAMME
              </span>
              <h2 className="font-display text-4xl md:text-5xl uppercase text-text-primary leading-[1.25]">
                Three Steps. Then We Get to Work.
              </h2>
            </div>
            
            <div className="w-full space-y-6">
               <div className="bg-secondary p-8 md:p-12 rounded-[2rem] border border-border shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="flex-1">
                     <h3 className="font-bold text-lg text-text-primary uppercase tracking-widest mb-2">Discovery Session</h3>
                     <p className="text-accent font-medium mb-4">Complimentary</p>
                     <p className="text-text-secondary font-medium leading-relaxed">A 20–30 minute consult covering your goals, history, and physical considerations. Everything captured in a detailed report that forms the foundation of your programme.</p>
                  </div>
               </div>
               
               <div className="bg-secondary p-8 md:p-12 rounded-[2rem] border border-border shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="flex-1">
                     <h3 className="font-bold text-lg text-text-primary uppercase tracking-widest mb-2">Programme Design</h3>
                     <p className="text-accent font-medium mb-4">$99</p>
                     <p className="text-text-secondary font-medium leading-relaxed">A fully customised training and nutrition programme built from your discovery session findings. Delivered through the WRK app — ready to go before your first session.</p>
                  </div>
               </div>
               
               <div className="bg-secondary p-8 md:p-12 rounded-[2rem] border border-border shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="flex-1">
                     <h3 className="font-bold text-lg text-text-primary uppercase tracking-widest mb-2">Ongoing 1:1 Training</h3>
                     <p className="text-accent font-medium mb-4">$55 per 30-minute session</p>
                     <p className="text-text-secondary font-medium leading-relaxed">Thirty-minute sessions focused entirely on technical work. Every movement coached. Every session planned. School-term schedule, booked through the WRK app.</p>
                  </div>
               </div>
            </div>
            
            <div className="text-center mt-12 space-y-2">
               <p className="text-lg text-text-secondary font-medium">Pairs training available at $35 per person per session.</p>
               <p className="text-sm uppercase tracking-widest font-bold text-text-primary/50 mt-4 block">Limited spaces available this term.</p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHO IT'S FOR */}
        <section className="py-24 px-6 lg:px-12 bg-secondary border-t border-border">
          <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
            <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-accent mb-4">
              PERSONAL TRAINING FOR PROFESSIONALS 35–60
            </span>
            <h2 className="font-display text-4xl md:text-5xl uppercase text-text-primary mb-8 leading-[1.25]">
              Built for People Who Need It to Work Around Real Life.
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed font-medium">
              You're 35–60, time-poor, and done wasting sessions on programmes that don't fit. You might have a bad knee, a dodgy shoulder, or a back that's been off for a while — that's not a problem, it's just part of the brief. Every session is planned, every movement earns its place, and the programme moves with you as you progress.
            </p>
          </div>
        </section>

        {/* SECTION 5 — FAQ */}
        <FAQ items={faqItems} title="Frequently Asked Questions" eyebrow="COMMON QUESTIONS" />

        {/* SECTION 6 — CTA */}
        <section className="bg-primary py-20 md:py-32 px-5 lg:px-12 text-center relative overflow-hidden border-t border-border">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-[800px] mx-auto relative z-10 flex flex-col items-center">
            <h2 className="font-display text-[44px] sm:text-[56px] md:text-[64px] uppercase text-text-primary mb-6 leading-[1.1]">
              Ready to Get Started?
            </h2>
            <p className="text-[18px] md:text-[20px] font-medium text-text-secondary mb-10 leading-[1.6]">
              Book a complimentary 20-minute discovery session. We'll assess where you are, address what needs consideration, and show you exactly what your programme looks like — before you commit to a thing.
            </p>
            <div className="flex flex-col gap-6 w-full max-w-sm mx-auto items-center">
              <Link to="/contact" className="w-full">
                <Button size="lg" className="w-full px-8 py-5 text-[15px] sm:text-[16px] flex items-center justify-center gap-3">
                  Book a Free Consult <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/online-coaching" className="text-[13px] uppercase tracking-[0.1em] font-bold text-text-secondary hover:text-white transition-colors flex items-center justify-center mt-2">
                Not in Christchurch? Check out Online Coaching <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

