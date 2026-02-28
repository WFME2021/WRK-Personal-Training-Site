
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
                1:1 In-Person Training (Christchurch)
              </h3>
              <h1 className="font-display text-[8vw] leading-[0.9] font-bold uppercase tracking-tighter text-white max-w-6xl mb-8">
                Ongoing 1:1 coaching <br/>built around your life.
              </h1>
              
              <div className="max-w-3xl mx-auto space-y-8">
                <p className="text-lg md:text-2xl text-white/90 font-medium leading-relaxed">
                  Train at Get Me Fitter Gym (Christchurch) with a plan that supports <strong>fat loss, reduces pain, and builds consistency</strong>—without living in the gym.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
                  <Link to="/contact">
                    <Button variant="primary" className="px-10 py-5 text-lg shadow-xl hover:scale-105 transition-transform flex items-center">
                      Book a consult <ArrowRight size={20} className="ml-2" />
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
                  "You want accountability that actually works",
                  "You’ve tried “do more” plans and they’ve wrecked your schedule",
                  "You’ve got aches, pains, niggles, posture issues—or a body that needs smart programming",
                  "You want fat loss and strength without becoming “the person who can’t eat anything”"
                ].map((item, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="w-8 h-8 rounded-full border border-accent flex items-center justify-center mr-4 shrink-0 group-hover:bg-accent transition-colors">
                      <Check className="text-accent w-4 h-4 group-hover:text-white" />
                    </div>
                    <span className="text-text-secondary text-lg pt-1">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-lg font-medium italic text-text-primary border-l-4 border-accent pl-6 py-2">
                Not here to shag spiders—this is real coaching, for real life.
              </p>
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

        {/* The Method */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
             <h2 className="text-5xl font-display font-bold mb-16 text-center text-text-primary uppercase tracking-tighter">The Method</h2>
             <div className="grid md:grid-cols-3 gap-8">
               {[
                 { step: "Assess", title: "Assess", desc: "We assess where you are now (time, stress, body history, goals)." },
                 { step: "Address", title: "Address", desc: "We address the limitations holding you back." },
                 { step: "Customise", title: "Customise", desc: "We customise training + nutrition so it’s doable and repeatable." }
               ].map((item, i) => (
                 <div key={i} className="bg-primary p-10 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-shadow border border-border">
                   <h3 className="font-display text-3xl font-bold mb-4 text-accent uppercase">{item.title}</h3>
                   <p className="text-text-secondary leading-relaxed text-lg">{item.desc}</p>
                 </div>
               ))}
             </div>
             <div className="mt-12 text-center">
               <p className="text-lg text-text-secondary font-medium">
                 No need for balls-to-the-wall intensity. We want progress you can keep.
               </p>
             </div>
          </div>
        </section>

        {/* What results to expect */}
        <section className="py-24 px-6 bg-primary border-b border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-display font-bold mb-16 text-center text-text-primary uppercase tracking-tighter">What results to expect</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
               {[
                 "Fat loss without burnout",
                 "Reduced pain / better movement confidence",
                 "Strength gains and better fitness",
                 "Consistency that doesn’t collapse the moment work gets busy"
               ].map((item, i) => (
                 <div key={i} className="bg-secondary p-8 rounded-[2rem] border border-border flex items-center">
                   <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold mr-6 shrink-0">
                     {i + 1}
                   </div>
                   <p className="text-xl text-text-primary font-medium">{item}</p>
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

        {/* Pain-aware training */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-display font-bold mb-8 uppercase tracking-tighter text-text-primary">Pain-aware training that still gets results.</h2>
            <p className="text-2xl text-text-secondary mb-16 font-light max-w-2xl">
              Posture patterns, postpartum return-to-training, menopause changes—we train intelligently and build capacity steadily.
            </p>
            <div className="space-y-8">
               {[
                 { icon: Target, title: "1:1 In-Person Sessions", text: "Technique, safety, and intensity managed by an expert." },
                 { icon: UserCheck, title: "Structured Plan Outside The Gym", text: "Homework that fits your week, delivered via app." },
                 { icon: ShieldCheck, title: "Protein-Forward Nutrition", text: "Flexible guidance, not restrictive meal plans." },
                 { icon: ShieldCheck, title: "Smart Progression", text: "Respects stress, recovery, and injury history." }
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

        <FAQ items={faqs} title="Hybrid Coaching FAQs" />

        {/* Christchurch Relevance Block */}
        <section className="py-24 px-6 bg-primary border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6 text-text-primary uppercase tracking-tighter">Personal Training in Christchurch (Addington)</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              WRK Personal Training operates from Get Me Fitter — 12 Show Place, Addington, Christchurch. If you’re looking for a personal trainer in Christchurch and want coaching that’s calm, precise, and sustainable, start with the diagnostic or apply.
            </p>
            <Link to="/contact">
              <Button variant="outline">Book a consult</Button>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 bg-secondary border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-display font-bold mb-8 text-text-primary uppercase tracking-tighter">Ready to start?</h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Book a consult and we’ll map out your starting point, your constraints, and the next 12 weeks.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="px-12 py-6 text-xl">Book a consult</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
