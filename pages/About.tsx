import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, ShieldPlus, Clock, Target } from 'lucide-react';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';

export const About: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="About Hayden Richards | WRK Personal Training Christchurch"
        description="Hayden Richards is a Christchurch personal trainer with 20+ years' experience. Specialising in fat loss and strength training for adults 35–60. Learn more."
        schema={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Hayden Richards",
          "jobTitle": "Personal Trainer",
          "url": "https://wrkpersonaltraining.co.nz/about"
        }}
      />

      <div className="flex flex-col w-full overflow-x-hidden bg-primary pb-24">
        
        {/* SECTION 1 — HERO */}
        <section className="relative min-h-[80svh] md:min-h-[90svh] w-full flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
             <img 
               referrerPolicy="no-referrer" 
               loading="eager" 
               src="https://i.postimg.cc/1t9HjpcR/508833357-30407543532163264-7406991278294427854-n.jpg" 
               alt="ABOUT WRK" 
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
              ABOUT WRK
            </span>
            <h1 className="font-display text-[50px] sm:text-[64px] md:text-[88px] lg:text-[96px] break-words leading-[1.1] sm:leading-[1.1] text-white mb-6 uppercase max-w-[1000px]">
              I work with people who are ready to make their health a priority.
            </h1>
          </div>
        </section>

        {/* SECTION 1.5 — PROFILE */}
        <section className="py-16 md:py-24 px-5 lg:px-12 bg-primary">
          <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-[2rem] overflow-hidden shrink-0 grayscale contrast-125 border border-border shadow-xl">
               <img referrerPolicy="no-referrer" src="https://i.postimg.cc/ZYHDT3kr/Screen-Shot-2026-06-23-at-2-27-18-PM.png" alt="Hayden Richards" className="w-full h-full object-cover object-top" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-display text-[32px] md:text-[40px] uppercase text-text-primary mb-6">
                Hayden Richards
              </h2>
              <div className="text-[18px] md:text-[20px] text-text-secondary leading-[1.6] font-medium space-y-6">
                <p>I've been a personal trainer in Christchurch for over 20 years. My clients are busy professionals — people running businesses, managing teams, raising families.</p>
                <p>They've got a lot of moving parts in their life, and they're ready for a system that actually fits around them. That's what I do.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — THE APPROACH */}
        <section className="py-16 md:py-24 px-5 lg:px-12 bg-secondary border-y border-border">
          <div className="max-w-[1000px] mx-auto text-left">
            <h2 className="font-display text-[40px] md:text-[56px] uppercase text-text-primary mb-8 md:mb-10 leading-[1.15]">
              How WRK is different
            </h2>
            <div className="text-[18px] md:text-[20px] text-text-secondary leading-[1.6] font-medium space-y-6 mb-12 max-w-[800px]">
              <p>Most personal trainers hand you a programme and tell you to push harder. WRK is different.</p>
              <p>WRK is built on three things: training that's efficient, nutrition that's practical, and accountability that doesn't let you off the hook.</p>
              <p>No fluff. No filler. No generic templates. Every client gets programming built around their goals, their schedule, and their body.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 text-lg font-medium">
               <div className="bg-primary p-8 md:p-10 rounded-[20px] md:rounded-[24px] border border-border shadow-xl hover:-translate-y-[2px] transition-transform flex flex-col items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mb-2">
                   <Award size={24} className="text-accent" />
                 </div>
                 <p className="text-[16px] md:text-lg text-text-primary leading-relaxed">20 years of coaching — not a new trainer with a weekend certification</p>
               </div>
               <div className="bg-primary p-8 md:p-10 rounded-[20px] md:rounded-[24px] border border-border shadow-xl hover:-translate-y-[2px] transition-transform flex flex-col items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mb-2">
                   <ShieldPlus size={24} className="text-accent" />
                 </div>
                 <p className="text-[16px] md:text-lg text-text-primary leading-relaxed">Injuries and physical considerations are part of the brief, not a barrier</p>
               </div>
               <div className="bg-primary p-8 md:p-10 rounded-[20px] md:rounded-[24px] border border-border shadow-xl hover:-translate-y-[2px] transition-transform flex flex-col items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mb-2">
                   <Clock size={24} className="text-accent" />
                 </div>
                 <p className="text-[16px] md:text-lg text-text-primary leading-relaxed">Sessions run 30 minutes because that's all you need if the programming is right</p>
               </div>
               <div className="bg-primary p-8 md:p-10 rounded-[20px] md:rounded-[24px] border border-border shadow-xl hover:-translate-y-[2px] transition-transform flex flex-col items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mb-2">
                   <Target size={24} className="text-accent" />
                 </div>
                 <p className="text-[16px] md:text-lg text-text-primary leading-relaxed">Accountability that actually works — not a check-in emoji</p>
               </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — WHO I WORK WITH */}
        <section className="py-16 md:py-24 px-5 lg:px-12 bg-primary">
          <div className="max-w-[1000px] mx-auto flex flex-col md:items-center md:text-center text-left">
            <h2 className="font-display text-[40px] md:text-[56px] uppercase text-text-primary mb-8 md:mb-10 leading-[1.15]">
              The clients who get the best results
            </h2>
            <div className="text-[18px] md:text-[20px] text-text-secondary leading-[1.6] font-medium space-y-6 max-w-[800px]">
              <p>Men and women aged 35–60 who are serious about getting results. They've got demanding schedules, real life to navigate, and often a physical consideration or two. What they want is a programme that works around all of it — and a coach who delivers.</p>
              <p>They've tried things before. They know what good eating looks like. What they need is a proper programme, a coach who knows what they're doing, and someone keeping them honest.</p>
              <p className="font-bold text-white">That's the WRK client.</p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — CTA */}
        <section className="bg-secondary py-20 md:py-32 px-5 lg:px-12 text-center relative overflow-hidden border-t border-border">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-[800px] mx-auto relative z-10 flex flex-col items-center">
            <h2 className="font-display text-[44px] md:text-[64px] uppercase text-text-primary mb-12 leading-[1.1]">
              Ready to do this properly?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-8 py-5 text-[15px] sm:text-[16px] flex items-center justify-center gap-3">
                  Book a Free Consult <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/14-day-fat-loss-foundations" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-5 text-[15px] sm:text-[16px]">
                  Start the 14-Day Programme
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
