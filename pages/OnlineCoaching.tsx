
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Smartphone, Video, MessageSquare, Check, Utensils, Globe, ArrowRight, Zap, Moon, Droplets } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';

import { Hero } from '../components/Hero';
import { MidPageBanner } from '../components/MidPageBanner';

export const OnlineCoaching: React.FC = () => {
  const { pageContent } = useContent();
  const { workoutLogImage, habitsImage } = pageContent.onlineCoaching;
  const { hero, banner, seo } = pageContent.onlineCoaching;

  const faqs = [
    {
      question: "Can you build a plan around a busy schedule or travel?",
      answer: "Yes. That’s the primary problem I solve. We build around your available days and I include travel/hotel options so you don’t lose momentum when you’re away."
    },
    {
      question: "Do I need a gym membership?",
      answer: "Not necessarily. I can program for full gym access, limited equipment, or home setups—depending on what you realistically have."
    },
    {
      question: "How do form checks work?",
      answer: "You upload short videos in the app (or follow the process we set). I’ll give you clear feedback and cues to tighten technique."
    },
    {
      question: "Is there a minimum commitment?",
      answer: "Yes—12 weeks. That’s long enough to build momentum, see meaningful progress, and make the routine stick."
    },
    {
      question: "Do you work with beginners online?",
      answer: "Yes. If you can follow instructions and film short clips occasionally, we can coach you well online."
    },
    {
      question: "Do you coach NZ-wide / worldwide?",
      answer: "Yes—NZ-wide and worldwide (English-speaking)."
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
            "serviceType": "Online Personal Training",
            "provider": {
              "@type": "LocalBusiness",
              "name": "WRK Personal Training",
              "image": hero.image
            },
            "areaServed": {
              "@type": "Country",
              "name": "New Zealand"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Online Coaching Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Online Coaching"
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
               If this is you, <span className="text-accent">online coaching is a good fit</span>
             </h2>
             <ul className="space-y-4 mb-8 text-left max-w-2xl mx-auto">
                {[
                  "You want structure and accountability without being tied to a gym location",
                  "You’ve got time constraints, stress, or injury history",
                  "You want fat loss and consistency without diet restriction",
                  "You travel, work gets messy, or your weeks aren’t predictable",
                  "You want to be fit enough to say yes to more life"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-lg text-text-secondary">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-4 mt-2.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
             </ul>
             <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-8 font-medium italic">
               A plan that survives travel, stress, and chaos.
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
                    Everything you need to stay consistent—without overthinking.
                  </p>
                  <ul className="space-y-6">
                    {[
                      "App-based plan tailored to your goals and constraints",
                      "Regular check-ins (accountability without hand-holding)",
                      "Nutrition support that’s protein-forward and flexible",
                      "Adaptability for travel, busy weeks, and changing schedules",
                      "Adjustments based on progress, stress, sleep, and niggles",
                      "Form checks / video feedback so technique stays solid"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start group">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-4 mt-2.5 shrink-0"></div>
                        <span className="text-text-secondary text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-lg font-medium italic text-text-primary border-l-4 border-accent pl-6 py-2">
                    No benefit in stressing an already jacked-up system. We train smart.
                  </p>
                </div>
                <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-border">
                   <img 
                    src={workoutLogImage.url} 
                    alt={workoutLogImage.alt} 
                    className="absolute inset-0 w-full h-full object-cover"
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
               Training is one hour of your day. The other 23 decide the result.
             </p>
             <p className="text-xl text-text-secondary leading-relaxed mb-12">
               So we track the “big rocks” that actually drive body composition and performance—without obsession:
             </p>
             
             <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
               {[
                 { title: "Sleep hygiene", desc: "Simple recovery metrics" },
                 { title: "Hydration", desc: "Daily targets to keep energy stable" },
                 { title: "Energy management", desc: "Quick scoring to prevent burnout and overreach" },
                 { title: "Weekly structure", desc: "You can repeat even when life is messy" }
               ].map((item, i) => (
                 <div key={i} className="bg-primary p-6 rounded-2xl border border-border">
                   <h3 className="font-bold text-lg text-text-primary mb-2">{item.title}</h3>
                   <p className="text-text-secondary">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* PATH (How we work) */}
        <section className="py-24 px-6 bg-primary border-b border-border">
          <div className="max-w-6xl mx-auto">
             <h2 className="text-5xl font-display font-bold mb-16 text-center text-text-primary uppercase tracking-tighter">How We Work</h2>
             <div className="grid md:grid-cols-3 gap-8">
               {[
                 { step: "Step 1", title: "Assess", desc: "Assess your starting point, schedule, stress, training history, and constraints." },
                 { step: "Step 2", title: "Address", desc: "Address what limits progress—movement patterns, posture, recovery, pacing." },
                 { step: "Step 3", title: "Customise", desc: "Customise your training and nutrition structure so it fits your lifestyle and keeps progressing." }
               ].map((item, i) => (
                 <div key={i} className="bg-secondary p-10 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-shadow border border-border">
                   <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">{item.step}</span>
                   <h3 className="font-display text-3xl font-bold mb-4 text-text-primary uppercase">{item.title}</h3>
                   <p className="text-text-secondary leading-relaxed text-lg">{item.desc}</p>
                 </div>
               ))}
             </div>
             <div className="mt-12 text-center">
               <p className="text-lg text-text-secondary font-medium italic">
                 No pain no gain? More accurately: no appropriate discomfort, no progress.
               </p>
             </div>
          </div>
        </section>

        {/* RESULTS / TESTIMONIALS */}
        <section className="py-24 px-6 bg-secondary border-t border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-display font-bold mb-16 text-center text-text-primary uppercase tracking-tighter">Online Client Results</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { quote: "I travel 2 weeks a month. This is the first time I’ve actually stayed consistent while on the road.", author: "Mark T.", role: "Sales Director" },
                { quote: "The app makes it easy. I don’t have to think, I just open it and do the work. Down 8kg in 12 weeks.", author: "Emma S.", role: "Working Mum" },
                { quote: "I was skeptical about online coaching, but the form feedback is better than trainers I’ve had in person.", author: "Jason L.", role: "Software Dev" }
              ].map((testimonial, i) => (
                <div key={i} className="bg-primary p-8 rounded-[2rem] border border-border">
                  <p className="text-lg text-text-primary mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-text-primary uppercase tracking-wider text-sm">{testimonial.author}</p>
                    <p className="text-text-secondary text-xs uppercase tracking-widest mt-1">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
               <p className="text-lg text-text-secondary font-medium">Results vary—but consistency always wins.</p>
            </div>
          </div>
        </section>

        <FAQ items={faqs} title="Online Coaching FAQs" />

        {/* Final CTA */}
        <section className="py-24 px-6 bg-primary border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-display font-bold mb-8 text-text-primary uppercase tracking-tighter">Start Here</h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto">
              Book a consult and we’ll confirm fit, your constraints, and the best starting plan. If you’re not ready yet, take the assessment and you’ll get a clear next step.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
              <Link to="/contact">
                <Button size="lg" className="px-12 py-6 text-xl shadow-xl">Book a consult</Button>
              </Link>
              <Link to="/assessment">
                <Button variant="outline" size="lg" className="px-12 py-6 text-xl border-accent text-accent hover:bg-accent hover:text-white">Take the assessment</Button>
              </Link>
            </div>
            <p className="mt-8 text-sm text-text-secondary">
              Not ready for coaching? <Link to="/42-day-reset" className="underline hover:text-accent">Start with the 42-Day Reset</Link>.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
