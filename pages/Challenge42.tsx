
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Calendar, CheckCircle2, Trophy, AlertTriangle, ArrowRight, Timer } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';

export const Challenge42: React.FC = () => {
  const { pageContent } = useContent();
  const { heroImage } = pageContent.challenge42;

  const faqs = [
    {
      question: "Is this a recurring subscription?",
      answer: "No. It’s a one-time payment of $47 NZD for 42 days of access. No hidden fees, no auto-renewal."
    },
    {
      question: "Do I need gym equipment?",
      answer: "No. You can do this with home equipment or a gym. If you have limited gear, you’ll use the home-friendly options. If you train in a gym, you’ll use the gym-based tracks."
    },
    {
      question: "Is this suitable for beginners?",
      answer: "Yes. It’s designed to be beginner-friendly and structured. You follow the plan, build consistency, and progress without guessing."
    },
    {
      question: "How long are the workouts?",
      answer: "Most sessions are designed to be time-efficient. Expect roughly 30–60 minutes depending on the session and the option you choose."
    },
    {
      question: "What happens after the 42 days?",
      answer: "You’ll have momentum, structure, and a clear next step. At that point you can either repeat a similar structure, move into a more specific goal phase, or upgrade to Online Coaching (NZ-wide) or Hybrid Personal Training (Christchurch) if you want ongoing support."
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
        title="Fitness Challenge NZ | 42 Day Reset | WRK"
        description="A 42 day fitness challenge NZ-wide: self-guided training + simple nutrition support inside the WRK app. Built-in progression, fallback sessions for busy weeks, and beginner-friendly structure. One-time $47 NZD."
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
        {/* Hero - Explicitly Dark Mode always for style */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-white bg-black overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 z-0">
             <img 
              src={heroImage.url} 
              alt={heroImage.alt} 
              className="w-full h-full object-cover grayscale contrast-125"
             />
             <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-9xl font-display font-bold mb-6 uppercase tracking-tighter relative leading-none">The Circuit <br/>Breaker</h1>
            <h2 className="text-xl md:text-3xl font-bold uppercase tracking-widest text-accent mb-8">42 Day Reset</h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-xl mx-auto font-light leading-relaxed relative">
              The system reboot you've been waiting for. Clear the fog, rebuild your momentum, and get back to operating at full capacity.
              <br/><span className="block mt-4 text-white font-medium">NZ-wide access. Start today.</span>
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 relative mb-8">
              <a href="https://wrkpersonaltraining.mypthub.net/p/225904" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" className="px-12">Start Now ($47 NZD)</Button>
              </a>
              <Link to="/assessment">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">Take Diagnostic</Button>
              </Link>
            </div>
            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">One-time payment • 42 days access • No subscription</p>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-5xl font-display font-bold mb-16 text-text-primary text-center uppercase tracking-tighter">Who This Is For</h2>
             
             <div className="grid md:grid-cols-2 gap-6 text-left">
                {[
                  "You’ve drifted and need a hard reset to get back on track.",
                  "You want a plan you can open and execute without overthinking.",
                  "You want to feel capable again—in the gym and on the weekend.",
                  "You want to rebuild consistency before committing to a bigger goal.",
                  "You’ve done “all or nothing” and want a system that actually sticks."
                ].map((item, i) => (
                  <div key={i} className="flex items-start p-8 bg-secondary border border-border rounded-[2rem] hover:border-accent transition-colors duration-300 group">
                    <CheckCircle2 className="text-accent mr-6 shrink-0 mt-1" size={24} />
                    <p className="font-medium text-lg text-text-primary">{item}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* What's Inside */}
        <section className="py-24 px-6 bg-secondary text-text-primary border-y border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-display font-bold mb-16 text-center text-text-primary uppercase tracking-tighter">What's Inside</h2>
            
            <div className="space-y-8">
              {[
                { icon: Calendar, title: "Step-by-step training plan (in the app)", desc: "Professional coaching app delivery: video demos, set/rep tracking, and a clear weekly structure." },
                { icon: Trophy, title: "Progression built in", desc: "You’re not guessing. Volume and intensity ramp up intelligently so you build fitness without getting cooked." },
                { icon: Timer, title: "Options for busy weeks", desc: "Travel? Work crisis? Kids’ chaos? Use the fallback sessions to stay on track instead of falling off." },
                { icon: CheckCircle2, title: "Simple nutrition support", desc: "Guidelines you can stick to. No restrictive diets. No perfection required." }
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

        {/* Why it works */}
        <section className="py-24 px-6 text-center bg-primary">
           <div className="max-w-3xl mx-auto">
             <h2 className="text-5xl font-display font-bold mb-8 text-text-primary uppercase tracking-tighter">Why It Works</h2>
             <p className="text-3xl font-bold text-accent mb-8 uppercase tracking-widest">Because it respects your reality.</p>
             <p className="text-xl text-text-secondary mb-16 leading-relaxed">
               You don’t need to do everything. You just need to do the right things, often enough. <br/>
               This reset gives you a system — not a motivation speech.
             </p>

             {/* What You'll Notice */}
             <div className="mb-20 text-left max-w-2xl mx-auto">
                <h3 className="text-3xl font-display font-bold mb-8 text-text-primary uppercase tracking-tighter text-center">What You'll Notice In 42 Days</h3>
                <ul className="space-y-4">
                  {[
                    "More consistency (the main win)",
                    "Strength trending up",
                    "Better energy and mood stability",
                    "Less “I’ll start Monday” thinking",
                    "Momentum you can build on"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-lg text-text-secondary">
                      <CheckCircle2 className="text-accent mr-4 shrink-0" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
             </div>
             
             <div className="bg-secondary p-16 rounded-[3rem] border border-border shadow-xl">
               <h3 className="text-3xl font-display font-bold mb-6 uppercase text-text-primary">Ready to start?</h3>
               <p className="text-text-secondary mb-10 text-lg">If you’re ready to start — start.</p>
               <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                 <a href="https://wrkpersonaltraining.mypthub.net/p/225904" target="_blank" rel="noopener noreferrer">
                   <Button variant="primary" size="lg" className="px-16 py-6 text-xl">Start ($47 NZD)</Button>
                 </a>
                 <Link to="/assessment">
                   <Button variant="outline" size="lg">Take Diagnostic</Button>
                 </Link>
               </div>
               <p className="mt-8 text-sm text-text-secondary">
                 Want high-touch coaching instead? <Link to="/personal-training" className="underline hover:text-accent">Hybrid (Christchurch)</Link> or <Link to="/online-coaching" className="underline hover:text-accent">Online (NZ-wide)</Link>.
               </p>
             </div>
           </div>
        </section>

        <FAQ items={faqs} title="Reset FAQs" />
      </div>
    </>
  );
};
