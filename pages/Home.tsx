
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, Star } from 'lucide-react';
import { Button } from '../components/Button';
import { Hero } from '../components/Hero';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';
import { MidPageBanner } from '../components/MidPageBanner';

export const Home: React.FC = () => {
  const { pageContent } = useContent();
  const { hero, ptImage, onlineImage, corporateImage } = pageContent.home;
  const { banner } = pageContent.home;

  const faqs = [
    {
      question: "Do I need to be fit already?",
      answer: "No. We meet you where you’re at and build from there — capability first, intensity later."
    },
    {
      question: "What if I’ve got injuries or recurring niggles?",
      answer: "Common. We train around them, strengthen what needs strengthening, and progress intelligently."
    },
    {
      question: "Do I have to track calories or follow a strict meal plan?",
      answer: "No restrictive plans. Nutrition is protein-forward with flexible structure — built to suit the individual."
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
        title="Strength & Conditioning Christchurch | Train Smarter, Play Harder"
        description="Christchurch-based strength & conditioning + NZ-wide online coaching. Lose fat, get stronger, and train around niggles—without living in the gym."
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

      <div className="flex flex-col w-full overflow-x-hidden bg-primary transition-colors duration-300 pb-24">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={hero.image} 
              alt="Strength and Conditioning Christchurch" 
              className="w-full h-full object-cover grayscale contrast-125"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-[1800px] mx-auto px-4 md:px-8 text-center flex flex-col items-center pt-20 pb-24">
            {hero.eyebrow && (
              <span className="text-accent font-bold uppercase tracking-widest text-xs md:text-sm mb-6 block">
                {hero.eyebrow}
              </span>
            )}
            <h1 
              className="font-display text-[12vw] md:text-[10vw] leading-[0.9] font-bold uppercase tracking-tighter text-white max-w-6xl mb-8"
              dangerouslySetInnerHTML={{ __html: hero.h1 }}
            />
            
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-lg md:text-2xl text-white/90 font-medium leading-relaxed">
                {hero.subhead}
              </p>
              
              {hero.kicker && (
                <div 
                  className="text-base md:text-lg text-white/80 font-light leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: hero.kicker }}
                />
              )}
              
              <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
                <Link to="/assessment">
                  <Button size="lg" className="px-10 py-5 text-lg shadow-xl hover:scale-105 transition-transform w-full md:w-auto">
                    Take the Assessment
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="backdrop-blur-md bg-white/10 border-white/50 text-white hover:bg-white hover:text-black px-10 py-5 text-lg w-full md:w-auto">
                    Book a Consult
                  </Button>
                </Link>
              </div>

              {/* Quick Wins */}
              {hero.bullets && hero.bullets.length > 0 && (
                <div className="pt-16 border-t border-white/10 mt-16">
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-8">Quick wins we focus on</p>
                  <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-white/90 text-sm font-medium">
                    {hero.bullets.map((item, i) => (
                      <span key={i} className="flex items-center bg-white/5 px-4 py-2 rounded-full border border-white/10">
                        <CheckCircle2 size={14} className="text-accent mr-2" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* RELATABILITY (If this is you) */}
        <section className="py-24 px-4 md:px-8 bg-secondary border-t border-border">
          <div className="max-w-[1000px] mx-auto text-center">
             <h2 className="font-display text-4xl md:text-6xl uppercase font-bold text-text-primary mb-8 tracking-tighter">
               If this is you, you’re in the <span className="text-accent">right place</span>
             </h2>
             <ul className="space-y-4 mb-12 text-left max-w-2xl mx-auto">
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
             <p className="text-xl md:text-2xl text-text-primary leading-relaxed mb-10 font-medium">
               You don’t need more motivation. You need a plan that survives real life.
             </p>
             <div className="flex flex-col md:flex-row gap-6 justify-center">
               <Link to="/assessment">
                 <Button size="lg" className="px-8 py-4 text-lg shadow-xl">Take the Assessment</Button>
               </Link>
               <Link to="/contact">
                 <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-accent text-accent hover:bg-accent hover:text-white">Book a Consult</Button>
               </Link>
             </div>
          </div>
        </section>

        {/* VALUE (What you get) */}
        <section className="py-24 px-4 md:px-8 bg-primary border-t border-border">
          <div className="max-w-6xl mx-auto">
             <div className="grid md:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="font-display text-5xl md:text-7xl uppercase font-bold text-text-primary mb-8 leading-[0.9] tracking-tighter">
                    What <br/><span className="text-text-secondary">You Get.</span>
                  </h2>
                  <p className="text-xl text-text-primary leading-relaxed mb-8">
                    Coaching built around your constraints — so the plan is doable, repeatable, and works long-term.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Training that fits your schedule (not a fantasy routine)",
                      "Smart progress around stress, sleep, and niggles",
                      "Strength + fitness that carries over to life outside the gym",
                      "Protein-forward nutrition guidance with flexible structure",
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
                
                {/* Results You Can Keep */}
                <div className="bg-secondary p-10 rounded-[2.5rem] border border-border">
                   <h3 className="font-display text-3xl font-bold uppercase text-text-primary mb-6">Results you can keep</h3>
                   <p className="text-text-secondary mb-8">Most people come for <strong>fat loss</strong> — but stay for the bigger wins:</p>
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
                     <p className="text-text-secondary text-sm italic">
                       "No benefit in stressing an already jacked-up system. We’ll build you up properly."
                     </p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* WAYS TO WORK TOGETHER */}
        <section id="services" className="py-24 px-4 md:px-8 bg-secondary border-t border-border">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-border pb-8">
              <div>
                <h2 className="font-display text-6xl md:text-8xl uppercase font-bold tracking-tighter leading-none text-text-primary mb-4">
                  Ways to <br/><span className="text-accent">Work Together.</span>
                </h2>
                <p className="text-xl text-text-secondary max-w-2xl">
                  Same goal — more capacity. Choose the option that fits your life right now.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Card 1: 1:1 In-Person Training */}
              <Link to="/personal-trainer-christchurch" className="group block">
                <div className="h-[400px] rounded-[3rem] overflow-hidden mb-6 relative border border-border">
                   <img src={ptImage.url} alt={ptImage.alt} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-secondary text-text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Christchurch</div>
                   <div className="absolute bottom-8 left-8 bg-secondary/80 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-3xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">1:1 In-Person Training</h3>
                <p className="text-text-secondary font-medium max-w-lg mb-4">Ongoing coaching at Get Me Fitter Gym. Sessions, “homework,” and nutrition guidance — built around your body and your week.</p>
                <span className="inline-block mt-4 text-accent font-bold uppercase text-sm border-b border-accent">View 1:1 Training</span>
              </Link>

              {/* Card 2: Online Personal Training */}
              <Link to="/online-personal-training-nz" className="group block lg:mt-24">
                <div className="h-[400px] rounded-[3rem] overflow-hidden mb-6 relative border border-border">
                   <img src={onlineImage.url} alt={onlineImage.alt} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-secondary text-text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">12-Week Min</div>
                   <div className="absolute bottom-8 left-8 bg-secondary/80 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-3xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">Online Personal Training</h3>
                <p className="text-text-secondary font-medium max-w-lg mb-4">App-based training, check-ins, and nutrition guidance — anywhere. Structure that holds when life gets chaotic.</p>
                <span className="inline-block mt-4 text-accent font-bold uppercase text-sm border-b border-accent">View Online Coaching</span>
              </Link>

               {/* Card 3: Corporate Wellness */}
              <Link to="/workplace-wellness-program-nz" className="group block">
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
                <p className="text-text-secondary font-medium max-w-lg mb-4">A personal trainer in every employee’s pocket. App-led programs that support energy, posture, and sustainable routines.</p>
                <span className="inline-block mt-4 text-accent font-bold uppercase text-sm border-b border-accent">View Corporate Wellness</span>
              </Link>

              {/* Card 4: 42-Day Reset */}
              <Link to="/fitness-challenge-nz" className="group block lg:mt-24">
                <div className="h-[400px] rounded-[3rem] overflow-hidden mb-6 relative border border-border">
                   {pageContent.home.challengeImage?.url ? (
                     <img src={pageContent.home.challengeImage.url} alt={pageContent.home.challengeImage.alt} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   ) : (
                     <div className="w-full h-full bg-primary flex items-center justify-center">
                        <h4 className="font-display text-[12rem] font-bold text-text-primary opacity-5 leading-none">42</h4>
                     </div>
                   )}
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-accent text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Self-Led</div>
                   <div className="absolute bottom-8 left-8 bg-secondary/10 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-3xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">42-Day Reset</h3>
                <p className="text-text-secondary font-medium max-w-lg mb-4">A self-led reset to rebuild routine and momentum. Training + nutrition guidance + automated support — simple, practical, doable.</p>
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
                 Because we don’t just pile more stress onto an already jacked-up system. We build fitness you can recover from — so you can repeat it, progress it, and keep it.
               </p>
               <h3 className="font-display text-3xl font-bold uppercase mt-12 text-accent">Assess. Address. Customise.</h3>
             </div>

             <div className="grid lg:grid-cols-3 gap-8">
               {[
                 { 
                   step: "Assess", 
                   desc: "Time, stress, goals, aches/pains/niggles." 
                 },
                 { 
                   step: "Address", 
                   desc: "Weak links (posture patterns, movement limits, recovery gaps)." 
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

        {/* TESTIMONIALS */}
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
                  quote: "The training supports my life, it doesn’t compete with it.",
                  author: "Mark R.",
                  role: "Entrepreneur"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-secondary p-10 rounded-[2rem] border border-border hover:border-accent transition-colors duration-300">
                  <div className="text-accent mb-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" className="text-accent" />
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

        {/* FINAL CTA */}
        <section className="bg-secondary py-32 px-4 md:px-8 text-center relative overflow-hidden border-t border-border">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full opacity-5 blur-3xl pointer-events-none"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="font-display text-6xl md:text-8xl uppercase font-bold text-text-primary mb-8 tracking-tighter">
              Ready to train <br/>for real life?
            </h2>
            <p className="text-xl font-medium text-text-secondary mb-12">
              Take the assessment for a clear next step — or book a consult and we’ll map the simplest plan that works.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link to="/assessment">
                <Button size="lg" className="px-12 py-6 text-xl shadow-2xl">Take the Assessment</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="px-12 py-6 text-xl border-accent text-accent hover:bg-accent hover:text-white">Book a Consult</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
          <Link to="/assessment">
            <Button size="lg" className="w-full shadow-2xl py-4 text-lg font-bold uppercase tracking-widest border-2 border-white/20">
              Take the Assessment
            </Button>
          </Link>
        </div>

      </div>
    </>
  );
};
