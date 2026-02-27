
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Check, Target, UserCheck, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';

export const PersonalTraining: React.FC = () => {
  const { pageContent } = useContent();
  const { heroImage, mainImage } = pageContent.personalTraining;

  const scrollToEnquiry = () => {
    const element = document.getElementById('enquiry-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "How often do I need to see you?",
      answer: "Most hybrid clients train with me once a week or once a fortnight to refine technique, then execute the rest of their sessions on their own via the app."
    },
    {
      question: "Do I need a gym membership?",
      answer: "Yes. You'll need access to a gym for your solo sessions. Our 1:1 sessions happen at Get Me Fitter in Addington (no membership required there)."
    },
    {
      question: "Is this suitable for beginners?",
      answer: "Absolutely. We start with the basics. The goal is to build your confidence and competence so you feel like you own the gym floor."
    },
    {
      question: "What if I have an injury?",
      answer: "We work around it. If needed, I can coordinate with your physio to ensure we're loading you safely and aiding recovery."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Personal Fitness Instructor | In-Person Coaching (Christchurch) | WRK"
        description="Your personal fitness instructor in Christchurch. Premium 1-on-1 coaching at Get Me Fitter, Addington. Hybrid training for busy professionals. Apply now."
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Personal Training",
            "provider": {
              "@type": "LocalBusiness",
              "name": "WRK Personal Training",
              "image": heroImage?.url || mainImage.url
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
                In-Person Precision
              </h3>
              <h1 className="font-display text-[10vw] leading-[0.9] font-bold uppercase tracking-tighter text-white max-w-6xl mb-8">
                Personal Training
              </h1>
              
              <div className="max-w-3xl mx-auto space-y-8">
                <p className="text-lg md:text-2xl text-white/90 font-medium leading-relaxed">
                  For the high-performer who needs a body that works as hard as they do. We build the strength to dominate the boardroom and the capacity to own the weekend.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
                  <Link to="/contact">
                    <Button variant="primary" className="px-10 py-5 text-lg shadow-xl hover:scale-105 transition-transform flex items-center">
                      Apply for Hybrid <ArrowRight size={20} className="ml-2" />
                    </Button>
                  </Link>
                  <Link to="/assessment">
                    <Button variant="outline" className="backdrop-blur-md bg-white/10 border-white/50 text-white hover:bg-white hover:text-black px-10 py-5 text-lg">
                      Take Diagnostic
                    </Button>
                  </Link>
                </div>

                <p className="text-xs md:text-sm text-white/60 mt-8 font-medium">
                  Based at Get Me Fitter, 12 Show Place, Addington, Christchurch.
                </p>
              </div>
          </div>
        </section>

        {/* Local SEO Block */}
        <section className="py-12 px-6 border-b border-border">
          <div className="max-w-3xl mx-auto text-center bg-primary p-8 rounded-[2rem] border border-border shadow-sm flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base text-text-secondary">
            <div className="bg-secondary p-3 rounded-full border border-border"><MapPin className="text-accent shrink-0" /></div>
            <p>
              Based in <strong>Addington</strong> at Get Me Fitter. Private facility, free parking, no crowds.
            </p>
          </div>
        </section>

        {/* Who this is for */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-display font-bold mb-8 text-text-primary uppercase tracking-tighter">Who This Is For</h2>
              
              <ul className="space-y-6">
                {[
                  "You are the 'Anchor'—people rely on you to be consistent.",
                  "You make decisions all day. Here, you want to outsource the strategy.",
                  "You want the physical capacity to say 'yes' to the ski trip, the hike, or the surf.",
                  "You want training that builds your energy, rather than stealing it."
                ].map((item, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="w-8 h-8 rounded-full border border-accent flex items-center justify-center mr-4 shrink-0 group-hover:bg-accent transition-colors">
                      <Check className="text-accent w-4 h-4 group-hover:text-white" />
                    </div>
                    <span className="text-text-secondary text-lg pt-1">{item}</span>
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
        </section>

        {/* How It Works */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
             <h2 className="text-5xl font-display font-bold mb-16 text-center text-text-primary uppercase tracking-tighter">How Hybrid Works</h2>
             <div className="grid md:grid-cols-3 gap-8">
               {[
                 { step: "01", title: "Precision", desc: "In-person sessions focus on technique, safety, and intensity. We ensure every rep contributes to the mission." },
                 { step: "02", title: "Execution", desc: "You complete the rest of your weekly sessions via the app. On your time, at your gym or home. No excuses." },
                 { step: "03", title: "Performance", desc: "We manage the load so you can perform at work and play hard on the weekend." }
               ].map((item, i) => (
                 <div key={i} className="bg-primary p-10 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-shadow border border-border">
                   <span className="text-6xl font-display font-bold text-accent mb-6 block text-shadow-sm" style={{textShadow: '0 0 1px var(--border)'}}>{item.step}</span>
                   <h3 className="font-display text-3xl font-bold mb-4 text-text-primary uppercase">{item.title}</h3>
                   <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* Results (Christchurch clients) */}
        <section className="py-24 px-6 bg-primary border-b border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-display font-bold mb-16 text-center text-text-primary uppercase tracking-tighter">Results (Christchurch Clients)</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { quote: "I've added 20kg to my squat while running a business. The structure is exactly what I needed.", author: "David M.", role: "Business Owner" },
                { quote: "Finally a trainer who understands that I can't live in the gym. Efficient, effective, and sustainable.", author: "Sarah K.", role: "Lawyer" },
                { quote: "The hybrid model is a game changer. I get the coaching I need without being tied to a trainer's schedule 3x a week.", author: "James P.", role: "Engineer" }
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

        {/* My Approach */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-display font-bold mb-8 uppercase tracking-tighter text-text-primary">My Approach</h2>
            <p className="text-2xl text-text-secondary mb-16 font-light max-w-2xl">
              We don't train for Instagram. We train for reality. I’m here to help you build a body that is capable of handling whatever life throws at it.
            </p>
            <div className="space-y-8">
               {[
                 { icon: Target, title: "Minimum Effective Dose", text: "We find the most efficient path to the result. No wasted time." },
                 { icon: UserCheck, title: "Planned Progress", text: "You never have to guess. You walk in, open the plan, and execute." },
                 { icon: ShieldCheck, title: "Recovery Guardrails", text: "We respect your stress load. Training supports your life, not competes with it." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 items-start border-b border-border pb-8 last:border-0">
                   <div className="bg-secondary p-4 rounded-full border border-border"><item.icon className="text-accent" size={24} /></div>
                   <div>
                     <h3 className="font-display text-2xl font-bold mb-2 uppercase text-text-primary">{item.title}</h3>
                     <p className="text-text-secondary">{item.text}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Investment Signal */}
        <section className="py-24 px-6 bg-secondary border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-display font-bold mb-8 text-text-primary uppercase tracking-tighter">Investment</h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Hybrid coaching is designed for people who value time, structure, and long-term reliability. Packages depend on weekly frequency and support level.
            </p>
            <p className="text-lg font-medium text-text-primary mb-12">
              Start with the diagnostic and I’ll point you to the right option.
            </p>
          </div>
        </section>

        {/* What You Get */}
        <section className="bg-secondary py-24 px-6 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-display font-bold mb-6 text-text-primary uppercase tracking-tighter">Included</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl mx-auto text-lg text-left mb-16">
               <li className="flex items-center text-text-secondary"><Check size={24} className="mr-4 text-accent" /> 1:1 In-Person Sessions</li>
               <li className="flex items-center text-text-secondary"><Check size={24} className="mr-4 text-accent" /> Full App Programming</li>
               <li className="flex items-center text-text-secondary"><Check size={24} className="mr-4 text-accent" /> Technique Video Library</li>
               <li className="flex items-center text-text-secondary"><Check size={24} className="mr-4 text-accent" /> Support Between Sessions</li>
            </div>

            <div className="bg-primary p-10 rounded-[2.5rem] inline-block w-full max-w-2xl border border-border">
               <p className="text-xl font-bold mb-8 text-text-primary">If you want coaching that’s honest, thoughtful, and tailored to you.</p>
               <div className="flex flex-col md:flex-row justify-center gap-4">
                 <Link to="/contact">
                   <Button size="lg" fullWidth>Apply for Hybrid</Button>
                 </Link>
                 <Link to="/assessment">
                   <Button variant="outline" size="lg" fullWidth>Take Diagnostic</Button>
                 </Link>
               </div>
            </div>
          </div>
        </section>

        <FAQ items={faqs} title="Hybrid Coaching FAQs" />

        {/* Christchurch Relevance Block */}
        <section className="py-24 px-6 bg-primary border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6 text-text-primary uppercase tracking-tighter">Personal Training in Christchurch (Addington)</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              WRK Personal Training operates from Get Me Fitter — 12 Show Place, Addington, Christchurch. If you’re looking for a personal trainer in Christchurch and want coaching that’s calm, precise, and sustainable, start with the diagnostic or apply.
            </p>
            <Link to="/contact">
              <Button variant="outline">Enquire Now</Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
