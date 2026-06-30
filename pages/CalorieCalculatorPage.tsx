
import React from 'react';
import { CalorieCalculator } from '../components/CalorieCalculator';
import { SeoHead } from '../components/SeoHead';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { Hero } from '../components/Hero';
import { MidPageBanner } from '../components/MidPageBanner';
import { useContent } from '../context/ContentContext';

export const CalorieCalculatorPage: React.FC = () => {
  const { pageContent } = useContent();
  const { hero, banner, seo } = pageContent.calorieCalculator;

  return (
    <>
      <SeoHead 
        title={seo.title}
        description={seo.description}
      />
      
      <div className="bg-primary min-h-screen transition-colors duration-300">
        <Hero 
          image={hero.image}
          title={hero.h1}
          subtitle={hero.subhead}
          bullets={hero.bullets}
          kicker={hero.kicker}
          eyebrow={hero.eyebrow}
          secondaryCta={{
            label: "Back to Tools",
            href: "/tools"
          }}
        />

        <div className="px-6 py-24">
           <CalorieCalculator />
           
           {/* SEO Content Sections */}
           <div className="max-w-4xl mx-auto mt-32 space-y-32">
             
             {/* What you'll get */}
             <section>
               <h2 className="font-display text-4xl md:text-5xl text-text-primary uppercase mb-12">What you’ll get</h2>
               <div className="grid gap-6 md:grid-cols-3">
                 {[
                   "A daily calorie target matched to your goal",
                   "Protein targets that support results and recovery",
                   "A simple structure you can actually stick to in real life"
                 ].map((item, i) => (
                   <div key={i} className="bg-secondary p-8 rounded-[2rem] border border-border flex flex-col justify-between group hover:border-accent transition-colors">
                     <span className="text-accent font-black text-4xl opacity-50 mb-4 block group-hover:opacity-100 transition-opacity">0{i+1}</span>
                     <p className="text-text-primary font-medium text-lg leading-snug">{item}</p>
                   </div>
                 ))}
               </div>
             </section>

             {/* Party Fund */}
             <section className="bg-text-primary text-primary rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
               <div className="relative z-10">
                 <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">Party Fund <span className="opacity-50">(built in)</span></h2>
                 <p className="text-2xl font-bold mb-6 text-accent">Life happens. Drinks happen. Results can still happen.</p>
                 <p className="text-lg leading-relaxed opacity-90 max-w-2xl">
                   Your Party Fund lets you allocate your drinks across the week, then automatically spreads those calories out and adjusts your daily target so you can still hit your deficit (or goal) without wrecking your protein target.
                 </p>
               </div>
             </section>

             {/* How it works */}
             <section>
               <h2 className="font-display text-4xl md:text-5xl text-text-primary uppercase mb-12">How it works</h2>
               <div className="space-y-6">
                 {[
                   "Set your total drinks for the week",
                   "The calculator estimates the calorie cost",
                   "Those calories are averaged across your week",
                   "Your daily calorie target is reduced slightly to “make room”",
                   "You stay on track — without Monday guilt and Thursday damage control"
                 ].map((step, i) => (
                   <div key={i} className="flex gap-6 items-start bg-secondary p-6 rounded-2xl border border-border hover:border-accent transition-colors">
                     <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary border border-border text-accent font-black flex items-center justify-center text-xl">
                       {i + 1}
                     </span>
                     <p className="text-text-primary font-medium text-lg pt-2">{step}</p>
                   </div>
                 ))}
               </div>
               
               <div className="mt-12 bg-accent/10 border border-accent/20 rounded-[2rem] p-8 md:p-10 text-center">
                 <p className="text-2xl md:text-3xl font-black text-text-primary uppercase">
                   The goal isn’t perfection. <span className="text-accent flex block mt-2">It’s consistency.</span>
                 </p>
               </div>
             </section>

             {/* Use it, adjust it, repeat */}
             <section className="text-center pb-12">
               <h2 className="font-display text-3xl md:text-4xl text-text-primary uppercase mb-6">Use it, adjust it, repeat</h2>
               <p className="text-text-secondary text-xl leading-relaxed max-w-2xl mx-auto">
                 This is a starting point — not a life sentence. Run it for 7–14 days, track progress, then adjust based on real-world results.
               </p>
             </section>

           </div>
        </div>

        <MidPageBanner 
          image={banner.image}
          tagline={banner.tagline}
          support={banner.support}
        />
      </div>
    </>
  );
};
