
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Smartphone, Video, MessageSquare, Check, Utensils, Globe, ArrowRight, Zap, Moon, Droplets } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';

export const OnlineCoaching: React.FC = () => {
  const { pageContent } = useContent();
  const { heroImage, workoutLogImage, habitsImage } = pageContent.onlineCoaching;

  const faqs = [
    {
      question: "Can you build a plan around a busy schedule or travel?",
      answer: "Yes. That’s the primary problem I solve. I build plans that fit your available days, and I include dedicated hotel/travel sessions so you don’t lose momentum when you’re away."
    },
    {
      question: "Do I need a gym membership?",
      answer: "No. A gym gives you more options, but home and minimal-equipment plans work when the structure is right. The plan is built around what you actually have."
    },
    {
      question: "How do form checks work?",
      answer: "You send short videos (as needed). I’ll give you clear cues and corrections so your training stays efficient and safe."
    },
    {
      question: "Is there a minimum commitment?",
      answer: "Yes — 12 weeks. That’s the time required to build a consistent rhythm and create real change, not just a short burst."
    },
    {
      question: "What’s the difference between Hybrid and Online?",
      answer: "Hybrid includes in-person sessions in Christchurch plus app programming. Online is NZ-wide coaching delivered through the app with fortnightly check-ins and adjustments — no appointment time required."
    },
    {
      question: "Do you work with beginners online?",
      answer: "Yes. Beginners often do extremely well online when the plan is structured and the feedback loop is consistent. We start simple, build confidence, and progress gradually."
    },
    {
      question: "Do you coach NZ-wide?",
      answer: "Yes — this is online personal training across New Zealand. Your plan adapts to your location, equipment, and schedule."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Online Personal Training NZ | Online Coaching (NZ-Wide) | WRK"
        description="Online personal training NZ-wide for busy professionals and parents. App-based training, fortnightly check-ins, form support, nutrition guidance, and travel-proof plans that adapt to real life. Apply or take the diagnostic."
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Online Personal Training",
            "provider": {
              "@type": "LocalBusiness",
              "name": "WRK Personal Training",
              "image": heroImage?.url
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
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            {heroImage && (
              <img 
                src={heroImage.url} 
                alt={heroImage.alt} 
                className="w-full h-full object-cover grayscale contrast-125"
              />
            )}
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-[1800px] mx-auto px-4 md:px-8 text-center flex flex-col items-center pt-20">
              <h3 className="font-display text-xl md:text-3xl font-bold uppercase tracking-widest text-accent mb-6">
                Freedom. Everywhere.
              </h3>
              <h1 className="font-display text-[8vw] leading-[0.9] font-bold uppercase tracking-tighter text-white max-w-6xl mb-8">
                Online coaching that fits <br/>your schedule—anywhere.
              </h1>
              
              <div className="max-w-3xl mx-auto space-y-8">
                <p className="text-lg md:text-2xl text-white/90 font-medium leading-relaxed">
                  Training + check-ins + nutrition guidance delivered via app, built for busy professionals who want <strong>fat loss, less pain, and consistency.</strong>
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
                  <Link to="/contact">
                    <Button variant="primary" className="px-10 py-5 text-lg shadow-xl hover:scale-105 transition-transform flex items-center">
                      Apply for online coaching <ArrowRight size={20} className="ml-2" />
                    </Button>
                  </Link>
                </div>

                <p className="text-xs md:text-sm text-white/60 mt-8 font-medium">
                  12-week minimum because quick fixes are how people end up starting over.
                </p>
              </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className="order-2 lg:order-1 flex justify-center relative">
                <div className="relative z-10 w-[300px] md:w-[350px] bg-secondary rounded-[3rem] p-4 shadow-2xl transform -rotate-2 border border-border">
                   <div className="overflow-hidden rounded-[2.5rem] border-4 border-primary">
                      <img src={workoutLogImage.url} alt={workoutLogImage.alt} className="w-full h-full object-cover" />
                   </div>
                </div>
             </div>

             <div className="order-1 lg:order-2">
                <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-10 text-text-primary">
                  Who It's For
                </h2>
                <div className="space-y-6">
                  {[
                    "You want structure and accountability without being tied to a gym location",
                    "You’ve got time constraints, stress, or injury history",
                    "You want fat loss and consistency without diet restriction",
                    "You want to be fit enough to say yes to more life"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                       <Check className="text-accent mr-4 mt-1 shrink-0" size={24} />
                       <span className="text-text-secondary text-lg">{item}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </section>

        {/* How we work */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
             <h2 className="text-5xl font-display font-bold mb-16 text-center text-text-primary uppercase tracking-tighter">How We Work</h2>
             <div className="grid md:grid-cols-3 gap-8">
               {[
                 { step: "Assess", title: "Assess", desc: "Assess your starting point and constraints." },
                 { step: "Address", title: "Address", desc: "Address what’s limiting progress (movement, posture, recovery, pacing)." },
                 { step: "Customise", title: "Customise", desc: "Customise your program + nutrition structure to your lifestyle." }
               ].map((item, i) => (
                 <div key={i} className="bg-primary p-10 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-shadow border border-border">
                   <h3 className="font-display text-3xl font-bold mb-4 text-accent uppercase">{item.title}</h3>
                   <p className="text-text-secondary leading-relaxed text-lg">{item.desc}</p>
                 </div>
               ))}
             </div>
             <div className="mt-12 text-center">
               <p className="text-lg text-text-secondary font-medium">
                 No pain no gain? More accurately: no appropriate discomfort, no progress.
               </p>
             </div>
          </div>
        </section>

        {/* NEW SECTION: Habits & Lifestyle */}
        <section className="py-24 px-6 bg-primary overflow-hidden">
           <div className="max-w-[1400px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">Beyond The Gym</span>
                    <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-8 text-text-primary">
                      Habits & <br/>Lifestyle
                    </h2>
                    <p className="text-xl text-text-secondary mb-10 leading-relaxed font-light">
                       Training is one hour of your day. The other 23 decide the result. We track the “big rocks” that actually improve performance and body composition — without obsession.
                    </p>
                    
                    <div className="space-y-8">
                       {[
                         { icon: Moon, title: "Sleep Hygiene", desc: "Simple metrics to improve recovery." },
                         { icon: Droplets, title: "Hydration", desc: "Daily targets to keep energy stable." },
                         { icon: Zap, title: "Energy Management", desc: "Quick scoring to prevent burnout and overreach." }
                       ].map((item, i) => (
                         <div key={i} className="flex gap-6 items-start">
                            <div className="bg-secondary p-3 rounded-full shrink-0 border border-border">
                               <item.icon className="text-text-primary" size={24} />
                            </div>
                            <div>
                               <h3 className="font-display text-xl font-bold uppercase mb-1 text-text-primary">{item.title}</h3>
                               <p className="text-text-secondary text-sm">{item.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 
                 <div className="relative mt-12 lg:mt-0">
                    <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-border">
                      <img 
                        src={habitsImage.url} 
                        alt={habitsImage.alt} 
                        className="w-full h-auto object-cover" 
                      />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                 </div>
              </div>
           </div>
        </section>

        {/* What You Get */}
        <section className="py-24 px-6 bg-secondary border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-display font-bold mb-12 text-text-primary uppercase tracking-tighter">What You Get</h2>
            <div className="grid md:grid-cols-2 gap-10 text-left max-w-4xl mx-auto mb-16">
               {[
                 { icon: Smartphone, title: "App-Based Plan", text: "Tailored to your goals + constraints." },
                 { icon: MessageSquare, title: "Regular Check-Ins", text: "Accountability without hand-holding." },
                 { icon: Utensils, title: "Nutrition Support", text: "Protein-forward, flexible nutrition guidance." },
                 { icon: Globe, title: "Adaptability", text: "A plan that works when you travel, when work blows up, and when kids get sick." },
                 { icon: Video, title: "Adjustments", text: "Based on progress, stress, sleep, and niggles." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 p-6 bg-primary border border-border rounded-2xl hover:border-text-primary transition-colors shadow-sm">
                   <item.icon className="text-accent shrink-0" size={32} />
                   <div>
                     <h3 className="font-display text-xl font-bold uppercase mb-1 text-text-primary">{item.title}</h3>
                     <p className="text-text-secondary text-sm">{item.text}</p>
                   </div>
                 </div>
               ))}
            </div>

            <div className="bg-primary p-8 rounded-2xl border border-border inline-block max-w-2xl mx-auto">
              <p className="text-text-secondary font-medium">No benefit in stressing an already jacked-up system. We train smart.</p>
            </div>
          </div>
        </section>

        {/* Online Client Results */}
        <section className="py-24 px-6 bg-primary border-t border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-display font-bold mb-16 text-center text-text-primary uppercase tracking-tighter">Online Client Results</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { quote: "I travel 2 weeks a month. This is the first time I've actually stayed consistent while on the road.", author: "Mark T.", role: "Sales Director (Online Client)" },
                { quote: "The app makes it easy. I don't have to think, I just open it and do the work. Down 8kg in 12 weeks.", author: "Emma S.", role: "Working Mum (Online Client)" },
                { quote: "I was skeptical about online coaching, but the form feedback is better than trainers I've had in person.", author: "Jason L.", role: "Software Dev (Online Client)" }
              ].map((testimonial, i) => (
                <div key={i} className="bg-secondary p-8 rounded-[2rem] border border-border">
                  <p className="text-lg text-text-primary mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-text-primary uppercase tracking-wider text-sm">{testimonial.author}</p>
                    <p className="text-text-secondary text-xs uppercase tracking-widest mt-1">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link to="/results">
                <Button variant="outline">See More Results</Button>
              </Link>
            </div>
          </div>
        </section>

        <FAQ items={faqs} title="Online Coaching FAQs" />

        {/* Final CTA */}
        <section className="py-24 px-6 bg-secondary border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-display font-bold mb-8 text-text-primary uppercase tracking-tighter">Start Here</h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto">
              Apply now and we’ll confirm fit, goals, and the best starting plan.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
              <Link to="/contact">
                <Button size="lg" className="px-12">Apply for online coaching</Button>
              </Link>
            </div>
            <p className="mt-8 text-sm text-text-secondary">
              Not ready for coaching? <Link to="/42-day-reset" className="underline hover:text-accent">Start with the 42-Day Reset</Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
