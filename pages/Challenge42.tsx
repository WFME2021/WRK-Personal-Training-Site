
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Calendar, CheckCircle2, Trophy, AlertTriangle, ArrowRight, Timer } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';

import { Hero } from '../components/Hero';
import { MidPageBanner } from '../components/MidPageBanner';

export const Challenge42: React.FC = () => {
  const { pageContent } = useContent();
  const { hero, banner, seo } = pageContent.challenge42;

  const faqs = [
    {
      question: "Is this a recurring subscription?",
      answer: "No. It’s a one-time payment of $47 NZD for 42 days of access. No hidden fees, no auto-renewal."
    },
    {
      question: "Do I need gym equipment?",
      answer: "A gym helps, but it’s not mandatory. If you’ve got limited equipment, you can still make progress—consistency matters more than perfect setups."
    },
    {
      question: "Is this suitable for beginners?",
      answer: "Yes. The plan is structured and guided. Start where you’re at and follow the progression."
    },
    {
      question: "How long are the workouts?",
      answer: "Designed to be realistic. Most sessions are time-efficient and built to fit busy schedules."
    },
    {
      question: "What happens after the 42 days?",
      answer: "You’ll have momentum and clarity. From there, you can repeat with better consistency, step into Online Coaching, or go 1:1 if you want higher-touch support."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SeoHead 
        title={seo.title}
        description={seo.description}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Fitness Challenge",
            "provider": {
              "@type": "LocalBusiness",
              "name": "WRK Personal Training"
            },
            "areaServed": {
              "@type": "Country",
              "name": "New Zealand"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Fitness Challenges",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "42 Day Reset Challenge"
                  },
                  "price": "47.00",
                  "priceCurrency": "NZD"
                }
              ]
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          }
        ]}
      />

      <div className="bg-primary text-text-primary transition-colors duration-300">
        {/* Hero Section - Full Width Banner */}
        <Hero 
          image={hero.image}
          title={hero.h1}
          subtitle={hero.subhead}
          bullets={hero.bullets}
          kicker={hero.kicker}
        />

        {/* RELATABILITY (Relate) */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-5xl font-display font-bold mb-8 text-text-primary uppercase tracking-tighter">If this is you, <span className="text-accent">the reset will land</span></h2>
             
             <div className="grid md:grid-cols-1 gap-6 text-left max-w-2xl mx-auto mb-12">
                {[
                  "You’ve drifted and need a hard reset to get back on track",
                  "You want a plan you can open and execute without overthinking",
                  "You want to feel capable again—in the gym and on the weekend",
                  "You want to rebuild consistency before committing to a bigger goal",
                  "You’ve done “all or nothing” and want a system that actually sticks"
                ].map((item, i) => (
                  <div key={i} className="flex items-start p-6 bg-secondary border border-border rounded-2xl hover:border-accent transition-colors duration-300 group">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-4 mt-2.5 shrink-0"></div>
                    <p className="font-medium text-lg text-text-primary">{item}</p>
                  </div>
                ))}
             </div>

             <p className="text-2xl text-text-secondary font-medium italic mb-12">
               You don’t need to do everything. You just need to do the right things, often enough.
             </p>

             <div className="flex flex-col md:flex-row gap-6 justify-center">
               <Link to="/contact">
                 <Button size="lg" className="px-8 py-4 text-lg shadow-xl">Book a consult</Button>
               </Link>
               <Link to="/assessment">
                 <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-accent text-accent hover:bg-accent hover:text-white">Take the assessment</Button>
               </Link>
             </div>
          </div>
        </section>

        <MidPageBanner 
          image={banner.image}
          tagline={banner.tagline}
          support={banner.support}
        />

        {/* VALUE (What's Inside) */}
        <section className="py-24 px-6 bg-secondary text-text-primary border-y border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-display font-bold mb-16 text-center text-text-primary uppercase tracking-tighter">What's Inside</h2>
            
            <div className="space-y-8">
              {[
                { icon: Calendar, title: "Step-by-step training plan in the app", desc: "Video demos, set/rep tracking, clear weekly structure." },
                { icon: Trophy, title: "Progression built in", desc: "Volume and intensity ramp up intelligently so you build fitness without getting cooked." },
                { icon: Timer, title: "Options for busy weeks", desc: "Travel, work crisis, kids’ chaos? Use fallback sessions to stay on track instead of falling off." },
                { icon: CheckCircle2, title: "Simple nutrition support", desc: "Guidelines you can stick to; no restrictive diets, no perfection required." },
                { icon: ArrowRight, title: "A system, not a motivation speech", desc: "Structure that makes consistency easier." }
              ].map((item, i) => (
                <div key={i} className="bg-primary border border-border p-10 rounded-[2.5rem] flex flex-col md:flex-row items-start gap-8 hover:border-accent transition-colors">
                   <div className="bg-accent p-4 rounded-full text-white shrink-0"><item.icon size={24} /></div>
                   <div>
                     <h3 className="font-display text-2xl font-bold uppercase mb-2 text-text-primary">{item.title}</h3>
                     <p className="text-text-secondary text-lg">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROOF (Why it works) */}
        <section className="py-24 px-6 text-center bg-primary">
           <div className="max-w-3xl mx-auto">
             <h2 className="text-5xl font-display font-bold mb-8 text-text-primary uppercase tracking-tighter">Why It Works</h2>
             <p className="text-3xl font-bold text-accent mb-8 uppercase tracking-widest">Because it respects your reality.</p>
             <p className="text-xl text-text-secondary mb-16 leading-relaxed">
               Most people don’t fail because they don’t care. They fail because their plan requires perfect weeks and endless motivation. This reset is built for real schedules: enough structure to create momentum, enough flexibility to keep going.
             </p>
           </div>
        </section>

        {/* PATH (How it works) */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
             <h2 className="text-5xl font-display font-bold mb-16 text-center text-text-primary uppercase tracking-tighter">How It Works</h2>
             <div className="grid md:grid-cols-3 gap-8">
               {[
                 { step: "Step 1", title: "Start where you are", desc: "Pick the plan and follow the week-by-week structure inside the app." },
                 { step: "Step 2", title: "Execute the basics", desc: "Train, hit the simple nutrition guidelines, and keep the routine moving." },
                 { step: "Step 3", title: "Use the fallback options", desc: "When life gets messy, you don’t stop—you switch to the “busy week” sessions and stay consistent." }
               ].map((item, i) => (
                 <div key={i} className="bg-primary p-10 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-shadow border border-border">
                   <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">{item.step}</span>
                   <h3 className="font-display text-3xl font-bold mb-4 text-text-primary uppercase">{item.title}</h3>
                   <p className="text-text-secondary leading-relaxed text-lg">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* RESULTS (What you'll notice) */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-3xl mx-auto text-center">
             <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-text-primary uppercase tracking-tighter">What You'll Notice In 42 Days</h2>
             <ul className="space-y-6 text-left max-w-xl mx-auto">
               {[
                 "More consistency (the main win)",
                 "Strength trending up",
                 "Better energy and mood stability",
                 "Less “I’ll start Monday” thinking",
                 "Momentum you can build on"
               ].map((item, i) => (
                 <li key={i} className="flex items-center text-xl text-text-secondary">
                   <CheckCircle2 className="text-accent mr-4 shrink-0" size={24} />
                   {item}
                 </li>
               ))}
             </ul>
          </div>
        </section>

        {/* PRICING / START (Purchase CTA exception lives here) */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
           <div className="max-w-4xl mx-auto text-center">
             <div className="bg-primary p-12 md:p-16 rounded-[3rem] border border-border shadow-xl">
               <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase text-text-primary">Ready to start?</h2>
               <p className="text-text-secondary mb-10 text-xl">If you’re ready to start—start. One payment, 42 days, no subscription.</p>
               
               <div className="flex flex-col md:flex-row justify-center gap-6 items-center mb-8">
                 <a href="https://wrkpersonaltraining.mypthub.net/p/225904" target="_blank" rel="noopener noreferrer">
                   <Button variant="primary" size="lg" className="px-12 py-6 text-xl shadow-lg hover:scale-105 transition-transform">Start the 42-Day Reset</Button>
                 </a>
                 <Link to="/assessment">
                   <Button variant="outline" size="lg" className="px-8 py-6 text-lg">Take the assessment</Button>
                 </Link>
               </div>
               
               <p className="text-base text-text-secondary">
                 Want higher-touch coaching instead? View <Link to="/personal-training" className="underline hover:text-accent">1:1</Link> or <Link to="/online-coaching" className="underline hover:text-accent">Online coaching</Link>.
               </p>
             </div>
           </div>
        </section>

        <FAQ items={faqs} title="Reset FAQs" />

        {/* FINAL CTA (Close) */}
        <section className="py-24 px-6 bg-primary border-t border-border">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-widest mb-6">Want guidance choosing your next step?</h2>
                <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
                    If you’re unsure, take the assessment for a clear recommendation—or book a consult and we’ll map the simplest plan that works.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="px-8 py-4 text-lg shadow-xl">Book a consult</Button>
                  </Link>
                  <Link to="/assessment">
                    <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-accent text-accent hover:bg-accent hover:text-white">Take the assessment</Button>
                  </Link>
                </div>
            </div>
        </section>
      </div>
    </>
  );
};
