
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
           <div className="max-w-3xl mx-auto mt-24 space-y-20">
             
             {/* What you'll get */}
             <section>
               <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary uppercase mb-8">What you’ll get</h2>
               <div className="grid gap-6 md:grid-cols-3">
                 {[
                   "A daily calorie target matched to your goal",
                   "Protein targets that support results and recovery",
                   "A simple structure you can actually stick to in real life"
                 ].map((item, i) => (
                   <div key={i} className="bg-secondary p-6 rounded-2xl border border-border">
                     <p className="text-text-secondary font-medium">{item}</p>
                   </div>
                 ))}
               </div>
             </section>

             {/* Party Fund */}
             <section className="bg-secondary rounded-3xl p-8 md:p-12 border border-border">
               <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary uppercase mb-6">Party Fund (built in)</h2>
               <p className="text-xl text-text-primary font-medium mb-6">Life happens. Drinks happen. Results can still happen.</p>
               <p className="text-text-secondary leading-relaxed">
                 Your Party Fund lets you allocate your drinks across the week, then automatically spreads those calories out and adjusts your daily target so you can still hit your deficit (or goal) without wrecking your protein target.
               </p>
             </section>

             {/* How it works */}
             <section>
               <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary uppercase mb-8">How it works</h2>
               <div className="space-y-6">
                 {[
                   "Set your total drinks for the week",
                   "The calculator estimates the calorie cost",
                   "Those calories are averaged across your week",
                   "Your daily calorie target is reduced slightly to “make room”",
                   "You stay on track — without Monday guilt and Thursday damage control"
                 ].map((step, i) => (
                   <div key={i} className="flex gap-4">
                     <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white font-bold flex items-center justify-center text-sm">
                       {i + 1}
                     </span>
                     <p className="text-text-secondary text-lg pt-1">{step}</p>
                   </div>
                 ))}
               </div>
               <p className="mt-8 text-xl font-medium text-text-primary border-l-4 border-accent pl-6 py-2">
                 The goal isn’t perfection. It’s consistency.
               </p>
             </section>

             {/* Use it, adjust it, repeat */}
             <section>
               <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary uppercase mb-6">Use it, adjust it, repeat</h2>
               <p className="text-text-secondary text-lg leading-relaxed">
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
