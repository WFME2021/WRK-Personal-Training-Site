
import React from 'react';
import { CalorieCalculator } from '../components/CalorieCalculator';
import { SeoHead } from '../components/SeoHead';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { FAQ } from '../components/FAQ';

import { Hero } from '../components/Hero';
import { MidPageBanner } from '../components/MidPageBanner';
import { useContent } from '../context/ContentContext';

export const CalorieCalculatorPage: React.FC = () => {
  const { pageContent } = useContent();
  const { hero, banner, seo } = pageContent.calorieCalculator;

  const faqItems = [
    {
      question: "What is TDEE?",
      answer: "Total Daily Energy Expenditure — the total calories your body burns in a day. It's the number this calculator estimates, and the number you eat below to lose fat."
    },
    {
      question: "How accurate is this calorie calculator?",
      answer: "It's a strong starting estimate based on a proven equation. Real-world results over 2–3 weeks tell you whether your true number is a little higher or lower, and you adjust from there."
    },
    {
      question: "What's the Party Fund?",
      answer: "A built-in buffer that sets aside some of your weekly calories for drinks or a night out — so real life doesn't blow the whole week. Worth knowing: alcohol suppresses fat oxidation by up to ~79% while it's in your system, so the Party Fund is about planning around that reality, not pretending it doesn't exist."
    },
    {
      question: "Do I need to count calories forever?",
      answer: "No. Most people use a calculator like this to build awareness early, then move to simpler habits once they know what the right amount looks like on a plate."
    }
  ];

  return (
    <>
      <SeoHead 
        title={seo.title}
        description={seo.description}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Calorie Calculator",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web",
            "url": "https://www.wrkpersonaltraining.co.nz/calorie-calculator",
            "provider": {
              "@type": "LocalBusiness",
              "name": "WRK Personal Training"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "NZD"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          }
        ]}
      />
      
      <div className="bg-primary min-h-screen transition-colors duration-300">
        <Hero 
          image={hero.image}
          imageAlt={hero.imageAlt}
          title={hero.h1}
          subtitle={hero.subhead}
          bullets={hero.bullets}
          kicker={hero.kicker}
          eyebrow={hero.eyebrow}
          disableGrayscale={true}
          secondaryCta={{
            label: "Back to Tools",
            href: "/tools"
          }}
        />

        <div className="px-6 py-24">
           <CalorieCalculator />
           
           {/* SEO Content Sections */}
           <div className="max-w-4xl mx-auto mt-32 space-y-24">
             
             <section className="space-y-6">
               <h2 className="font-display text-4xl md:text-5xl text-text-primary uppercase mb-8">What Your Calorie Calculator Result Actually Means</h2>
               <div className="text-lg text-text-secondary leading-relaxed font-medium space-y-6">
                 <p>The number this calorie calculator gives you is an estimate of your total daily energy expenditure — everything your body burns in a day, from breathing to training to fidgeting at your desk. It's built on the Mifflin-St Jeor equation, the most reliable of the standard formulas.</p>
                 <p>But it's a starting point, not a law. Two people the same height and weight can burn meaningfully different amounts. Treat the number as your best first guess, then let real life confirm or correct it.</p>
               </div>
             </section>

             <section className="space-y-6">
               <h2 className="font-display text-3xl md:text-4xl text-text-primary uppercase mb-8">What To Do With Your Number</h2>
               <div className="text-lg text-text-secondary leading-relaxed font-medium space-y-6">
                 <p>For fat loss, you eat below the number. That's the whole game — and it's worth being honest about, because no single food, workout, or supplement causes fat loss on its own. You still have to be in a deficit. Aim for a modest one: 300–500 calories under maintenance is enough to lose fat steadily without wrecking your energy, your training, or your patience. Bigger isn't better. Aggressive deficits cost you muscle and rarely last past a fortnight.</p>
                 <p>For maintenance, you eat at the number. For muscle gain, slightly above. Simple to say, harder to hold — which is where the coaching comes in.</p>
               </div>
             </section>

             <section className="space-y-6">
               <h2 className="font-display text-3xl md:text-4xl text-text-primary uppercase mb-8">Why Protein Comes First</h2>
               <div className="text-lg text-text-secondary leading-relaxed font-medium space-y-6">
                 <p>If you're over 35 and eating in a deficit, protein is the one target that protects your muscle while you lose fat. Get it right and you lose the fat, not the strength. Aim for roughly 1.6–2.2g per kg of bodyweight — for most busy adults that lands at a solid palm of protein at every meal, no weighing required. The calculator gives you a specific target to work from.</p>
               </div>
             </section>

             <section className="space-y-6 bg-secondary p-8 md:p-12 rounded-[2rem] border border-border">
               <h2 className="font-display text-3xl md:text-4xl text-text-primary uppercase mb-8">Adjust Like an Adult</h2>
               <div className="text-lg text-text-secondary leading-relaxed font-medium space-y-6">
                 <p>Don't chase the number day to day. Bodyweight swings with sleep, salt, stress, and last night's dinner — that's noise, not fat. Give it two to three weeks. If the scale, the mirror, and how your clothes fit are all moving the right way, you've got it right. If nothing's shifted, drop 100–150 calories and reassess. That's the whole loop: start with a target, hold it long enough to read the signal, adjust, repeat.</p>
                 <p>If you'd rather not run that loop yourself, that's what coaching is for — the 16-Week <Link to="/online-coaching" className="text-accent underline hover:text-accent/80 transition-colors">Online Coaching</Link> and the $14 <Link to="/14-day-fat-loss-foundations" className="text-accent underline hover:text-accent/80 transition-colors">14-Day Fat Loss Programme</Link> both take the guesswork out.</p>
               </div>
             </section>

             <section className="pt-12 border-t border-border">
               <h2 className="font-display text-3xl md:text-4xl text-text-primary uppercase mb-12">Common Questions</h2>
               <FAQ items={faqItems} disableSchema={true} />
             </section>

           </div>
        </div>

        <MidPageBanner 
          image={banner.image}
          tagline={banner.tagline}
          support={banner.support}
          disableGrayscale={true}
        />
      </div>
    </>
  );
};
