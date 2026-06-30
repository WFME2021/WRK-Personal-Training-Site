import React from 'react';
import { ArrowRight, Smartphone, BookOpen, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';

export const Free14Day: React.FC = () => {
  const trialLink = "https://wrkpersonaltraining.mypthub.net/p/228105";

  const faqItems = [
    {
      question: "Is this suitable for complete beginners?",
      answer: "Yes. The programme is built around fundamentals — not intensity. You don't need any prior training experience. The workouts include gym and home options and the coaching guides are written in plain language, not fitness jargon."
    },
    {
      question: "How much time does it take each day?",
      answer: "The training sessions run 30–45 minutes. The daily coaching message takes about two minutes to read. That's it. This is built for people with full schedules — not people with spare hours."
    },
    {
      question: "Do I need a gym membership?",
      answer: "No. All you need is a foam roller, a mat, and a pair of dumbbells. The programme works equally well at home or in the gym — your choice each day."
    },
    {
      question: "Will I need to track calories or follow a strict meal plan?",
      answer: "No. The nutrition guide focuses on practical principles — protein, portion awareness, and consistency — not calorie counting or elimination diets. You'll learn how to make better choices without obsessing over numbers."
    },
    {
      question: "I've tried programmes before and not finished them. How is this different?",
      answer: "Most programmes fail because they're too complicated or too demanding to fit around real life. This one is 14 days, structured day by day, with a coaching message each morning to keep you on track. The goal isn't perfection — it's building enough momentum to make the next right choice."
    },
    {
      question: "What exactly do I get for $14?",
      answer: "A 14-day day-by-day training plan delivered through the WRK app, three practical coaching guides (Nutrition Basics, Meal Builder, Training + Recovery), and a daily coaching message from Hayden every morning throughout the programme."
    },
    {
      question: "What happens after the 14 days?",
      answer: "You'll have a clear foundation — a baseline, better habits, and a practical understanding of what actually works for fat loss. If you want to keep going with structured coaching, the 16-week WRK Online Coaching programme is the natural next step."
    }
  ];

  return (
    <>
      <SeoHead 
        title="14-Day Fat Loss Foundations | WRK Personal Training"
        description="A structured starter programme for busy adults who want to lose fat, build better habits, and finally have a system that fits real life."
      />

      <div className="flex flex-col w-full overflow-x-hidden bg-primary pb-24">
        
        {/* SECTION 1 — HERO */}
        <section className="relative min-h-[80svh] md:min-h-[90svh] w-full flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
             <img 
               referrerPolicy="no-referrer" 
               loading="eager" 
               src="https://i.postimg.cc/WzYJSZSH/510454462-10227054382375367-4268206283149160141-n.jpg" 
               alt="14-DAY FAT LOSS FOUNDATIONS" 
               className="w-full h-full object-cover object-top" 
             />
             <div 
               className="absolute inset-0"
               style={{
                 background: 'linear-gradient(to bottom, rgba(2, 48, 71, 0) 0%, rgba(2, 48, 71, 0.6) 60%, rgba(2, 48, 71, 0.95) 100%)'
               }}
             />
          </div>
          <div className="relative z-10 w-full px-5 pt-32 pb-12 md:pb-24 max-w-[1200px] mx-auto md:px-12 text-left">
            <span className="block font-sans font-medium text-[11px] md:text-[13px] uppercase tracking-[0.15em] text-accent mb-4">
              14 DAYS · APP-DELIVERED · GYM OR HOME · $14
            </span>
            <h1 className="font-display text-[11vw] sm:text-[50px] md:text-[72px] lg:text-[84px] break-words leading-[1.1] text-white mb-6 uppercase max-w-[1000px]">
              14-Day Fat Loss Foundations
            </h1>
            <div className="font-sans text-[18px] md:text-[20px] text-off-white font-medium max-w-[640px] mb-8 leading-[1.6]">
              <p>A structured starter programme for busy adults who want to lose fat, build better habits, and finally have a system that fits real life.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <a href={trialLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-10 py-6 text-[15px] sm:text-[16px] rounded-full uppercase tracking-widest font-black flex items-center justify-center gap-3 shadow-2xl hover:-translate-y-1 transition-transform bg-accent hover:bg-white text-primary border-none">
                  Start the Programme — $14 <ArrowRight size={20} />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 1.5 — VIDEO */}
        <section className="py-24 px-6 lg:px-12 bg-primary">
          <div className="max-w-[800px] mx-auto w-full">
            <div className="relative w-full overflow-hidden rounded-[1rem] md:rounded-[2rem] border border-border shadow-sm bg-black aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/XcUaVvwFKp8?autoplay=0&controls=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* SECTION 2 — WHAT'S INCLUDED */}
        <section className="py-24 px-6 lg:px-12 bg-secondary border-y border-border">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-display text-4xl md:text-5xl uppercase text-text-primary mb-16 leading-[1.25] text-center">
              What's Included
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12 text-lg font-medium">
               <div className="bg-primary p-10 rounded-[2rem] border border-border shadow-sm flex flex-col items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mb-2">
                   <Smartphone className="text-accent" size={24} />
                 </div>
                 <h3 className="font-display text-2xl uppercase text-text-primary">A Day-by-Day Training Plan</h3>
                 <div className="text-text-secondary leading-relaxed space-y-3 font-normal">
                   <p>Strength sessions, recovery days, and mobility work — laid out in the WRK app so you always know exactly what to do. Gym or home options throughout.</p>
                 </div>
               </div>

               <div className="bg-primary p-10 rounded-[2rem] border border-border shadow-sm flex flex-col items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mb-2">
                   <BookOpen className="text-accent" size={24} />
                 </div>
                 <h3 className="font-display text-2xl uppercase text-text-primary">Three Practical Coaching Guides</h3>
                 <div className="text-text-secondary leading-relaxed space-y-3 font-normal">
                   <p>Downloaded directly through the app as you progress through the programme:</p>
                   <ul className="space-y-2 mt-4">
                     <li className="flex items-start gap-3"><span className="text-accent">•</span> Fat Loss Nutrition Basics</li>
                     <li className="flex items-start gap-3"><span className="text-accent">•</span> Meal Builder</li>
                     <li className="flex items-start gap-3"><span className="text-accent">•</span> Training + Recovery Guide</li>
                   </ul>
                 </div>
               </div>

               <div className="bg-primary p-10 rounded-[2rem] border border-border shadow-sm flex flex-col items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mb-2">
                   <MessageSquare className="text-accent" size={24} />
                 </div>
                 <h3 className="font-display text-2xl uppercase text-text-primary">Daily Coaching Messages</h3>
                 <div className="text-text-secondary leading-relaxed space-y-3 font-normal">
                   <p>A short message from Hayden every morning — delivered through the app at 6:30am. The right focus, at the right time, every day.</p>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — WHO IT'S FOR */}
        <section className="py-24 px-6 lg:px-12 bg-primary">
          <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
            <h2 className="font-display text-4xl md:text-5xl uppercase text-text-primary mb-8 leading-[1.25]">
              Who It's For
            </h2>
            <div className="text-[18px] md:text-[20px] text-text-secondary leading-[1.6] font-medium space-y-6">
              <p>Busy adults 35+ who want to lose fat without extreme diets, complicated meal plans, or hours of cardio.</p>
              <p>People who want a clear starting point and a simple system they can actually stick to.</p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — APP SCREENSHOTS */}
        <section className="py-24 px-6 lg:px-12 bg-secondary border-y border-border overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 md:gap-8 pb-8 md:pb-0 md:grid md:grid-cols-3">
              
              {/* Screenshot 1 */}
              <div className="snap-center shrink-0 w-[280px] md:w-auto flex flex-col gap-4">
                <div className="aspect-[9/19] bg-primary rounded-[2rem] border-4 border-border shadow-xl overflow-hidden relative flex items-center justify-center bg-gradient-to-b from-primary to-secondary">
                  <img referrerPolicy="no-referrer" src="https://i.postimg.cc/QdYrjgxT/IMG-2178.png" alt="Day 1/2 Plan View" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Screenshot 2 */}
              <div className="snap-center shrink-0 w-[280px] md:w-auto flex flex-col gap-4 mt-0 md:mt-12">
                <div className="aspect-[9/19] bg-primary rounded-[2rem] border-4 border-border shadow-xl overflow-hidden relative flex items-center justify-center bg-gradient-to-b from-primary to-secondary">
                  <img referrerPolicy="no-referrer" src="https://i.postimg.cc/sgHR3PDG/IMG-2177.png" alt="Workout Detail View" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Screenshot 3 */}
              <div className="snap-center shrink-0 w-[280px] md:w-auto flex flex-col gap-4">
                <div className="aspect-[9/19] bg-primary rounded-[2rem] border-4 border-border shadow-xl overflow-hidden relative flex items-center justify-center bg-gradient-to-b from-primary to-secondary">
                  <img referrerPolicy="no-referrer" src="https://i.postimg.cc/8zXVTdPr/IMG-2179.jpg" alt="PDF Resource View" className="w-full h-full object-cover" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 5 — ABOUT THE PROGRAMME */}
        <section className="py-24 px-6 lg:px-12 bg-primary">
          <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
            <h2 className="font-display text-4xl md:text-5xl uppercase text-text-primary mb-10 leading-[1.25]">
              About The Programme
            </h2>
            <div className="text-lg md:text-[20px] text-text-secondary leading-relaxed font-medium space-y-6 text-left md:text-center">
              <p>Fourteen days. Three PDFs. A structured daily plan. Daily coaching messages.</p>
              <p>Not a crash diet. Not a transformation challenge. A foundation — built around the habits and fundamentals that actually drive fat loss over time.</p>
              <p>By the end you'll know how to structure your training, make better nutrition choices without tracking everything, and build the consistency that makes results stick.</p>
            </div>
          </div>
        </section>

        {/* SECTION 6 — ABOUT HAYDEN */}
        <section className="py-24 px-6 lg:px-12 bg-secondary border-t border-border">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-[2rem] overflow-hidden shrink-0 grayscale contrast-125 border border-border shadow-xl">
               <img referrerPolicy="no-referrer" src="https://i.postimg.cc/ZYHDT3kr/Screen-Shot-2026-06-23-at-2-27-18-PM.png" alt="Hayden Richards" className="w-full h-full object-cover object-top" />
            </div>
            <div className="text-center md:text-left flex-1">
               <h3 className="font-display text-3xl md:text-4xl uppercase text-text-primary mb-2">Hayden Richards — WRK Personal Training</h3>
               <div className="text-lg text-text-secondary leading-relaxed font-medium space-y-4 mt-6">
                 <p>20 years. 200+ clients.</p>
                 <p>The people who succeed aren't the ones with the perfect plan. They're the ones who follow a simple one, consistently.</p>
                 <p className="text-text-primary font-bold">That's what this programme is built around.</p>
               </div>
            </div>
          </div>
        </section>

        {/* SECTION 6.5 — FAQ */}
        <FAQ items={faqItems} title="Frequently Asked Questions" />

        {/* SECTION 7 — FINAL CTA */}
        <section className="py-32 px-6 lg:px-12 bg-primary text-center relative overflow-hidden border-t border-border">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center">
             <div className="text-xl md:text-2xl text-text-primary font-medium space-y-2 mb-10">
               <p>$14. Fourteen days. A clear starting point.</p>
             </div>
             <a href={trialLink} target="_blank" rel="noopener noreferrer">
               <Button size="lg" className="px-10 py-6 text-[15px] sm:text-[16px] rounded-full uppercase tracking-widest font-black flex items-center justify-center gap-3 bg-accent text-primary hover:bg-white transition-colors border-none shadow-2xl hover:-translate-y-1">
                 Start the Programme — $14 <ArrowRight size={20} />
               </Button>
             </a>
          </div>
        </section>

      </div>
    </>
  );
};
