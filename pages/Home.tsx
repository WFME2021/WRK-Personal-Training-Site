
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '../components/Button';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';

import { Hero } from '../components/Hero';
import { MidPageBanner } from '../components/MidPageBanner';

export const Home: React.FC = () => {
  const { pageContent } = useContent();
  const { heroImage, ptImage, onlineImage, corporateImage } = pageContent.home;
  const { hero, banner, seo } = pageContent.home;

  const faqs = [
    {
      question: "Do I need to be fit already?",
      answer: "No. We meet you where you’re at and build from there—capability first, intensity later."
    },
    {
      question: "What if I’ve got injuries or recurring niggles?",
      answer: "Common. We train around them, strengthen what needs strengthening, and progress intelligently."
    },
    {
      question: "Do I have to track calories or follow a strict meal plan?",
      answer: "No restrictive plans. Nutrition is protein-forward with flexible structure—built to suit the individual."
    },
    {
      question: "How many days a week do I need?",
      answer: "Enough to be effective, not enough to dominate your diary. We aim for the minimum effective dose that fits your life."
    },
    {
      question: "I’m not sure which option I need.",
      answer: "Take the assessment and you’ll get a clear recommendation based on your answers."
    }
  ];

  return (
    <>
      <SeoHead 
        title={seo.title}
        description={seo.description}
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "WRK Personal Training",
          "image": hero.image,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Show Place",
            "addressLocality": "Addington",
            "addressRegion": "Christchurch",
            "postalCode": "8024",
            "addressCountry": "NZ"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -43.543,
            "longitude": 172.605
          },
          "url": "https://wrkpersonaltraining.co.nz",
          "telephone": "+64210000000",
          "priceRange": "$$"
        }}
      />

      <div className="flex flex-col w-full overflow-x-hidden bg-primary transition-colors duration-300">
        
        {/* Hero Section - Full Width Banner */}
        <Hero 
          image={hero.image}
          title={hero.h1}
          subtitle={hero.subhead}
          bullets={hero.bullets}
          kicker={hero.kicker}
        />

        {/* RELATABILITY (Relate) */}
        <section className="py-24 px-4 md:px-8 bg-secondary border-t border-border">
          <div className="max-w-[1000px] mx-auto text-center">
             <h2 className="font-display text-4xl md:text-6xl uppercase font-bold text-text-primary mb-8 tracking-tighter">
               If this is you, you’re in the <span className="text-accent">right place</span>
             </h2>
             <ul className="space-y-4 mb-8 text-left max-w-2xl mx-auto">
                {[
                  "Your weeks aren’t predictable and time is tight",
                  "Stress is high and recovery isn’t what it used to be",
                  "You’ve got aches, pains, or niggles (or you’re trying to avoid them)",
                  "You want fat loss without living in the gym",
                  "You want nutrition structure that doesn’t alienate you from real life"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-lg text-text-secondary">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-4 mt-2.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
             </ul>
             <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-8 font-medium">
               You don’t need more motivation. You need a plan that survives real life.
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

        {/* VALUE (What they get) */}
        <section className="py-24 px-4 md:px-8 bg-primary border-t border-border">
          <div className="max-w-6xl mx-auto">
             <div className="grid md:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="font-display text-5xl md:text-7xl uppercase font-bold text-text-primary mb-8 leading-[0.9] tracking-tighter">
                    What <br/><span className="text-text-secondary">You Get.</span>
                  </h2>
                  <p className="text-xl text-text-primary leading-relaxed mb-8">
                    Coaching built around your constraints—so the plan is doable, repeatable, and actually works long-term.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Training that fits your schedule (not a fantasy routine)",
                      "Smart progress around stress and niggles",
                      "Strength + fitness that carries over to life outside the gym",
                      "Nutrition guidance that’s protein-forward and flexible",
                      "Clear weekly structure so you’re not guessing",
                      "A simple approach you can stick to when life gets busy"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-lg text-text-secondary">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-4 mt-2.5 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Results You Can Keep - Using existing structure but adapting content slightly if needed, keeping visual style */}
                <div className="bg-secondary p-10 rounded-[2.5rem] border border-border">
                   <h3 className="font-display text-3xl font-bold uppercase text-text-primary mb-6">Results you can keep</h3>
                   <p className="text-text-secondary mb-8">Most clients come to me for <strong>fat loss</strong>, but stay for the bigger wins:</p>
                   <div className="space-y-6">
                     {[
                       "Less pain, fewer flare-ups",
                       "Consistency without burnout",
                       "More energy and confidence",
                       "Strength and fitness that carries over to real life"
                     ].map((item, i) => (
                       <div key={i} className="flex items-center">
                         <div className="w-8 h-8 rounded-full bg-primary border border-border flex items-center justify-center mr-4 shrink-0 text-accent font-bold">
                           {i + 1}
                         </div>
                         <span className="text-text-primary font-medium">{item}</span>
                       </div>
                     ))}
                   </div>
                   <div className="mt-10 pt-8 border-t border-border">
                     <p className="text-text-secondary text-sm">
                       No benefit in stressing an already jacked-up system. We’ll build you up properly.
                     </p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        <MidPageBanner 
          image={banner.image}
          tagline={banner.tagline}
          support={banner.support}
        />

        {/* OPTIONS (Pathways / “Choose your path”) */}
        <section id="services" className="py-24 px-4 md:px-8 bg-primary">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-border pb-8">
              <div>
                <h2 className="font-display text-6xl md:text-8xl uppercase font-bold tracking-tighter leading-none text-text-primary mb-4">
                  Ways to <br/><span className="text-accent">Work Together.</span>
                </h2>
                <p className="text-xl text-text-secondary max-w-2xl">
                  Same goal—more capacity. Choose the coaching that fits your life right now.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Card 1: 1:1 In-Person Training (Christchurch) */}
              <Link to="/personal-training" className="group block">
                <div className="h-[400px] rounded-[3rem] overflow-hidden mb-6 relative border border-border">
                   <img src={ptImage.url} alt={ptImage.alt} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-secondary text-text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Christchurch</div>
                   <div className="absolute bottom-8 left-8 bg-secondary/80 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-3xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">1:1 In-Person Training</h3>
                <p className="text-text-secondary font-medium max-w-lg mb-4">Ongoing coaching at Get Me Fitter Gym. Sessions, homework, and nutrition guidance—built around your body and your week.</p>
                <span className="inline-block mt-4 text-accent font-bold uppercase text-sm border-b border-accent">View 1:1 Training</span>
              </Link>

              {/* Card 2: Online Personal Training (12-week minimum) */}
              <Link to="/online-coaching" className="group block lg:mt-24">
                <div className="h-[400px] rounded-[3rem] overflow-hidden mb-6 relative border border-border">
                   <img src={onlineImage.url} alt={onlineImage.alt} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-secondary text-text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">12-Week Min</div>
                   <div className="absolute bottom-8 left-8 bg-secondary/80 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-3xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">Online Personal Training</h3>
                <p className="text-text-secondary font-medium max-w-lg mb-4">App-based training, check-ins, and nutrition guidance—anywhere. Structure that holds when life gets chaotic.</p>
                <span className="inline-block mt-4 text-accent font-bold uppercase text-sm border-b border-accent">View Online Coaching</span>
              </Link>

               {/* Card 3: Corporate Wellness (12 months) */}
              <Link to="/corporate-wellness" className="group block">
                <div className="h-[400px] rounded-[3rem] overflow-hidden mb-6 relative border border-border">
                   {corporateImage.url ? (
                     <img src={corporateImage.url} alt={corporateImage.alt} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   ) : (
                     <div className="w-full h-full bg-secondary"></div>
                   )}
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-secondary text-text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">12 Months</div>
                   <div className="absolute bottom-8 left-8 bg-secondary/80 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-3xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">Corporate Wellness</h3>
                <p className="text-text-secondary font-medium max-w-lg mb-4">A personal trainer in every employee’s pocket. App-led programs that support posture, energy, and sustainable routine.</p>
                <span className="inline-block mt-4 text-accent font-bold uppercase text-sm border-b border-accent">View Corporate Wellness</span>
              </Link>

              {/* Card 4: 42-Day Reset */}
              <Link to="/42-day-reset" className="group block lg:mt-24">
                <div className="h-[400px] rounded-[3rem] overflow-hidden mb-6 relative bg-secondary flex items-center justify-center border border-border">
                   <h4 className="font-display text-[12rem] font-bold text-text-primary opacity-5 leading-none">42</h4>
                   <div className="absolute top-8 right-8 bg-accent text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Self-Led</div>
                   <div className="absolute bottom-8 left-8 bg-primary/10 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-3xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">42-Day Reset</h3>
                <p className="text-text-secondary font-medium max-w-lg mb-4">A self-led reset to rebuild routine and momentum. Training + nutrition guidance + automated support—simple, practical, doable.</p>
                <span className="inline-block mt-4 text-accent font-bold uppercase text-sm border-b border-accent">View 42-Day Reset</span>
              </Link>

            </div>
          </div>
        </section>

        {/* PROOF (Why this works) */}
        <section className="py-24 px-4 md:px-8 bg-text-primary text-primary overflow-hidden">
          <div className="max-w-[1600px] mx-auto">
             <div className="text-center mb-16">
               <h2 className="font-display text-5xl md:text-7xl uppercase font-bold mb-6 tracking-tighter text-primary">Why This Works</h2>
               <p className="text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed">
                 Because we don’t just pile more stress onto an already jacked-up system. We build fitness you can recover from—so you can repeat it, progress it, and keep it.
               </p>
               <h3 className="font-display text-3xl font-bold uppercase mt-8 text-accent">Assess. Address. Customise.</h3>
             </div>

             <div className="grid lg:grid-cols-3 gap-8">
               {[
                 { 
                   step: "Assess", 
                   desc: "Time, stress, goals, and any aches, pains, or niggles." 
                 },
                 { 
                   step: "Address", 
                   desc: "The weak links (posture patterns, movement limits, recovery gaps)." 
                 },
                 { 
                   step: "Customise", 
                   desc: "A plan that fits your week and progresses without breaking you." 
                 }
               ].map((item, i) => (
                 <div key={i} className="bg-primary/5 p-10 rounded-[2rem] border border-primary/10 hover:bg-primary/10 transition-colors">
                   <h3 className="font-display text-3xl font-bold uppercase mb-4 text-accent">{item.step}</h3>
                   <p className="text-lg text-primary/80 leading-relaxed">{item.desc}</p>
                 </div>
               ))}
             </div>

             <div className="mt-16 text-center max-w-3xl mx-auto">
               <p className="text-sm text-primary/60 font-medium mb-8">
                 No pain no gain? More accurately: <strong>no appropriate level of discomfort, no progress.</strong>
               </p>
             </div>
          </div>
        </section>

        {/* Testimonials Section - Keeping existing as per instructions */}
        <section className="py-24 px-4 md:px-8 bg-primary border-t border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-5xl font-bold text-text-primary mb-16 text-center uppercase tracking-tighter">
              Client Feedback
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Finally a program that fits my 60-hour work week. Efficient, effective, and no fluff.",
                  author: "James T.",
                  role: "CEO"
                },
                {
                  quote: "I lost 10kg without giving up family dinners. Sustainable results that actually stick.",
                  author: "Sarah L.",
                  role: "Director"
                },
                {
                  quote: "Hayden understands the demands of a high-pressure job. The training supports my life, it doesn't compete with it.",
                  author: "Mark R.",
                  role: "Entrepreneur"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-secondary p-10 rounded-[2rem] border border-border hover:border-accent transition-colors duration-300">
                  <div className="text-accent mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="inline-block text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-lg text-text-primary mb-8 font-medium leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-text-primary uppercase tracking-wider text-sm">{testimonial.author}</p>
                    <p className="text-text-secondary text-xs uppercase tracking-widest mt-1">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQ items={faqs} title="Common Questions" />

        {/* Final CTA */}
        <section className="bg-primary py-32 px-4 md:px-8 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full opacity-5 blur-3xl pointer-events-none"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="font-display text-6xl md:text-8xl uppercase font-bold text-text-primary mb-8 tracking-tighter">
              Ready to train <br/>for real life?
            </h2>
            <p className="text-xl font-medium text-text-secondary mb-12">
              Take the assessment for a clear next step—or book a consult and we’ll map the simplest plan that works.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="px-12 py-6 text-xl shadow-2xl">Book a consult</Button>
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
