
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Check, Target, UserCheck, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';

import { Hero } from '../components/Hero';
import { MidPageBanner } from '../components/MidPageBanner';

export const PersonalTraining: React.FC = () => {
  const { pageContent } = useContent();
  const { mainImage } = pageContent.personalTraining;
  const { hero, banner, seo } = pageContent.personalTraining;

  const scrollToEnquiry = () => {
    const element = document.getElementById('enquiry-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "Do I need to be fit before starting?",
      answer: "No. We meet you where you’re at and build from there."
    },
    {
      question: "What if I’ve got injuries or recurring niggles?",
      answer: "Common. We train around them, strengthen weak links, and progress intelligently."
    },
    {
      question: "Will I have to follow a strict meal plan?",
      answer: "No. Protein-forward and flexible—built to suit your life and preferences."
    },
    {
      question: "How many sessions per week do I need?",
      answer: "Enough to be effective, not enough to dominate your diary. We’ll pick the minimum effective dose that fits."
    },
    {
      question: "Is this just for “gym people”?",
      answer: "No. This is for people who want to feel better, move better, and show up better outside the gym."
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
            "@type": "Service",
            "serviceType": "Personal Training",
            "provider": {
              "@type": "LocalBusiness",
              "name": "WRK Personal Training",
              "image": hero.image || mainImage.url
            },
            "areaServed": {
              "@type": "City",
              "name": "Christchurch"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Personal Training Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hybrid Personal Training"
                  }
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
        <section className="py-24 px-6 bg-secondary border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="font-display text-4xl md:text-6xl uppercase font-bold text-text-primary mb-8 tracking-tighter">
               If this is you, <span className="text-accent">1:1 is a good fit</span>
             </h2>
             <ul className="space-y-4 mb-8 text-left max-w-2xl mx-auto">
                {[
                  "You want accountability that actually works",
                  "You’ve tried “do more” plans and they’ve wrecked your schedule",
                  "You’ve got aches, pains, niggles, posture issues—or a body that needs smart programming",
                  "You want fat loss and strength without becoming “the person who can’t eat anything”",
                  "You want a plan that survives real life, not perfect weeks"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-lg text-text-secondary">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-4 mt-2.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
             </ul>
             <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-8 font-medium italic">
               Not here to shag spiders—this is real coaching, for real life.
             </p>
             <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
               <Link to="/contact">
                 <Button size="lg" className="px-8 py-4 text-lg shadow-xl">Book a consult</Button>
               </Link>
               <Link to="/assessment">
                 <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-accent text-accent hover:bg-accent hover:text-white">Take the assessment</Button>
               </Link>
             </div>
          </div>
        </section>

        {/* VALUE (What you get) */}
        <section className="py-24 px-6 bg-primary border-b border-border">
          <div className="max-w-6xl mx-auto">
             <div className="grid md:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="font-display text-5xl md:text-7xl uppercase font-bold text-text-primary mb-8 leading-[0.9] tracking-tighter">
                    What <br/><span className="text-text-secondary">You Get.</span>
                  </h2>
                  <p className="text-xl text-text-primary leading-relaxed mb-8">
                    Hands-on coaching plus a structured plan outside the gym—so progress continues between sessions.
                  </p>
                  <ul className="space-y-6">
                    {[
                      { title: "1:1 in-person sessions", desc: "Technique, safety, and intensity managed by an expert" },
                      { title: "Structured plan outside the gym", desc: "“Homework” that fits your week, delivered via app" },
                      { title: "Pain-aware training that still gets results", desc: "Posture, postpartum return-to-training, menopause changes" },
                      { title: "Protein-forward nutrition", desc: "Flexible guidance, not restrictive meal plans" },
                      { title: "Smart progression", desc: "Respects stress, recovery, and injury history" },
                      { title: "Accountability + clarity", desc: "You’ll always know what to do next" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start group">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-4 mt-2.5 shrink-0"></div>
                        <div>
                          <strong className="text-text-primary block text-lg">{item.title}</strong>
                          <span className="text-text-secondary">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-border">
                   <img 
                    src={mainImage.url} 
                    alt={mainImage.alt} 
                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
                  />
                </div>
             </div>
          </div>
        </section>

        <MidPageBanner 
          image={banner.image}
          tagline={banner.tagline}
          support={banner.support}
        />

        {/* PROOF (Why this works) */}
        <section className="py-24 px-6 bg-secondary border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="font-display text-4xl md:text-6xl uppercase font-bold text-text-primary mb-8 tracking-tighter">
               Why this works
             </h2>
             <p className="text-xl text-text-secondary leading-relaxed mb-8">
               Most people don’t need more intensity. They need better structure and better decision-making—especially when stress is high and recovery is limited.
             </p>
             <p className="text-xl text-text-secondary leading-relaxed mb-8">
               There’s no benefit in stressing an already jacked-up system. We train hard enough to progress, not so hard you can’t recover, repeat it, or stay consistent.
             </p>
             <p className="text-lg text-text-secondary font-medium italic">
               No need for balls-to-the-wall intensity. We want progress you can keep.
             </p>
          </div>
        </section>

        {/* PATH (The method) */}
        <section className="py-24 px-6 bg-primary border-b border-border">
          <div className="max-w-6xl mx-auto">
             <h2 className="text-5xl font-display font-bold mb-16 text-center text-text-primary uppercase tracking-tighter">The Method</h2>
             <div className="grid md:grid-cols-3 gap-8">
               {[
                 { step: "Assess", title: "Assess", desc: "We assess where you are now—time, stress, body history, goals. (Any aches, pains, or niggles?)" },
                 { step: "Address", title: "Address", desc: "We address the limitations holding you back—movement patterns, weak links, recovery gaps." },
                 { step: "Customise", title: "Customise", desc: "We customise training + nutrition so it’s doable, repeatable, and progressed over time." }
               ].map((item, i) => (
                 <div key={i} className="bg-secondary p-10 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-shadow border border-border">
                   <h3 className="font-display text-3xl font-bold mb-4 text-accent uppercase">{item.title}</h3>
                   <p className="text-text-secondary leading-relaxed text-lg">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* RESULTS (what to expect) */}
        <section className="py-24 px-6 bg-secondary border-b border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-display font-bold mb-16 text-center text-text-primary uppercase tracking-tighter">Results to expect</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
               {[
                 "Fat loss without burnout",
                 "Reduced pain + better movement confidence",
                 "Strength gains and better fitness",
                 "Consistency that doesn’t collapse when work gets busy"
               ].map((item, i) => (
                 <div key={i} className="bg-primary p-8 rounded-[2rem] border border-border flex items-center">
                   <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold mr-6 shrink-0">
                     {i + 1}
                   </div>
                   <p className="text-xl text-text-primary font-medium">{item}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* LOCATION (quick clarity) */}
        <section className="py-24 px-6 bg-primary border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6 text-text-primary uppercase tracking-tighter">Where you’ll train</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Based in Addington at Get Me Fitter — private facility, free parking, no crowds.
              <br/>
              <strong>Address:</strong> 12 Show Place, Addington, Christchurch.
            </p>
          </div>
        </section>

        <FAQ items={faqs} title="FAQs" />

        {/* Final CTA */}
        <section className="py-24 px-6 bg-secondary border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-display font-bold mb-8 text-text-primary uppercase tracking-tighter">Ready to get started?</h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Book a consult and we’ll map the simplest plan that works—based on your goals, your schedule, and your body.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="px-12 py-6 text-xl shadow-xl">Book a consult</Button>
              </Link>
              <Link to="/assessment">
                <Button variant="outline" size="lg" className="px-12 py-6 text-xl border-accent text-accent hover:bg-accent hover:text-white">Take the assessment</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
