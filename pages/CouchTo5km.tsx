import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Star, ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';

export const CouchTo5km: React.FC = () => {
  const purchaseUrl = "https://wrkpersonaltraining.mypthub.net/p/234397";
  
  const faqs = [
    {
      question: "Do I need to be able to run already?",
      answer: "No. That's the whole point. The plan starts with run-walk intervals and builds gradually, so you can begin from a complete standing start."
    },
    {
      question: "Do I need a gym?",
      answer: "No. The running is done outdoors or on a treadmill, and the strength and stretching guides are home-based. No equipment required."
    },
    {
      question: "I'm over 40 and haven't run in years. Is this right for me?",
      answer: "Yes. That's exactly who it's built for. The whole plan is paced around how a body over 35 adapts to running load, so you build up safely instead of getting hurt in week two."
    },
    {
      question: "How much time does it take?",
      answer: "Around 20 minutes, three times a week for the running, plus the short strength and stretching work. It's built to fit a busy week."
    },
    {
      question: "What if I miss a session?",
      answer: "You don't restart. You pick up the next session. The plan is built for real life, not perfection."
    },
    {
      question: "What happens after I reach 5km?",
      answer: "You'll have a solid running base and the habit to keep going. If you want to push on to 10km or build broader strength and fitness, that's what online coaching is for."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Couch to 5km NZ | 8-Week Beginner Running Plan | WRK"
        description="An 8-week couch to 5km running plan built for beginners over 35. Run plan, plus strength, stretching, and nutrition guidance in the WRK app. $27, start anytime."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
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
      }) }} />
      <div className="bg-primary text-text-primary transition-colors duration-300 pb-24 md:pb-0">
        
        {/* HERO */}
        {/* SECTION 1 — HERO */}
        <section className="relative min-h-[80svh] md:min-h-[90svh] w-full flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
             <img loading="lazy"
                referrerPolicy="no-referrer"
                src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=2940&auto=format&fit=crop"
                alt="Couch to 5km beginner running plan NZ, WRK Personal Training"
                className="w-full h-full object-cover object-top"
              />
             <div
               className="absolute inset-0"
               style={{
                 background: 'linear-gradient(to bottom, rgba(13, 17, 23, 0) 0%, rgba(13, 17, 23, 0.6) 60%, rgba(13, 17, 23, 0.88) 100%)'
               }}
             />
          </div>
          <div className="relative z-10 w-full px-5 pt-32 pb-12 md:pb-24 max-w-[1200px] mx-auto md:px-12 text-left">
            <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-orange-burnt mb-4">
              COUCH TO 5KM · 8 WEEKS · $27
            </span>
            <h1 className="flex flex-col mb-6 max-w-[1000px]">
              <span className="font-display text-[44px] sm:text-[56px] md:text-[80px] lg:text-[88px] break-words leading-[1.1] sm:leading-[1.1] text-white uppercase">
                Couch to 5km
              </span>
              <span className="font-display text-[24px] sm:text-[28px] md:text-[32px] text-off-white/90 mt-2 uppercase">
                Your first continuous 5km in 8 weeks. Built for bodies over 35.
              </span>
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] text-off-white font-medium max-w-[640px] mb-8 leading-[1.6]">
              A structured 8-week running plan for real bodies new to running. Run plan, strength and stretching support, and nutrition guidance, all delivered through the WRK app.
            </p>
            <div className="flex flex-col md:flex-row items-start gap-4">
               <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                  <a href={purchaseUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto px-8 py-5 text-[15px] sm:text-[16px] flex items-center justify-center gap-3"
                    >
                      Start the Programme ($27) <ArrowRight size={20} />
                    </Button>
                  </a>
                  <a href="#whats-included" className="w-full sm:w-auto flex items-center justify-center gap-3 text-white hover:text-accent font-bold uppercase tracking-[0.1em] text-[13px] transition-colors mt-4 sm:mt-0">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                      <ArrowRight size={18} />
                    </div>
                    What's Included
                  </a>
                </div>
              </div>
          </div>
        </section>

        {/* BUILT DIFFERENT */}
        <section className="py-24 md:py-32 px-6 bg-secondary border-y border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl uppercase mb-8">
              Not Built For A 22-Year-Old
            </h2>
            <div className="text-lg md:text-xl text-text-secondary leading-relaxed space-y-6 text-left">
              <p>
                Most beginner running plans are generic. Copied from an app built for a 22-year-old, with no allowance for the way a body over 35 actually adapts to new training load. This one is different.
              </p>
              <p>
                The WRK Couch to 5km programme is a structured 8-week system that takes you from a standing start to your first continuous 5km. Safely, and without the injury rate that comes from doing too much, too soon. Every session is mapped out for you. What to do, how long, when to push.
              </p>
              <p>
                No gym required. No experience needed. Just 20-ish minutes, three times a week, and a plan that knows what it's doing.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section id="whats-included" className="py-24 md:py-32 px-6 bg-primary">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-display text-4xl md:text-6xl uppercase mb-6">What's Included</h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto font-medium">Everything you need to get from the couch to 5km, delivered through the WRK app.</p>
            </div>
            
            <div className="space-y-12">
              {[
                {
                  num: "01",
                  title: "Your Full 8-Week Run Plan",
                  desc: "Session by session, start to finish. What to do, how long, and when to push. You never have to guess what today's run is."
                },
                {
                  num: "02",
                  title: "Home Strength Guide",
                  desc: "A home strength guide for glute activation and core control, the two things most beginner running niggles trace back to. No gym needed."
                },
                {
                  num: "03",
                  title: "Stretching Guide",
                  desc: "A simple, supportive stretching guide to keep you loose and moving well as the distance builds."
                },
                {
                  num: "04",
                  title: "Nutrition Guide For New Runners",
                  desc: "Practical nutrition guidance built for people taking up running, not a diet plan. How to fuel the work."
                },
                {
                  num: "05",
                  title: "Built-In Motivation",
                  desc: "Encouragement woven through the programme, week to week, to keep you showing up when the early enthusiasm wears off."
                }
              ].map((item, i) => (
                <div key={i} className="bg-secondary p-8 md:p-10 rounded-[2rem] border border-border flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-black text-2xl">{item.num}</span>
                  </div>
                  <div>
                    <h3 className="font-display uppercase text-2xl md:text-3xl mb-4 text-text-primary">{item.title}</h3>
                    <p className="text-lg text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl uppercase mb-12">
              Who is this for?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { title: "The First-Timer", desc: "You've never really run before, or not since school. You want to get to 5km without hurting yourself or hating every minute." },
                { title: "The Over-35 Starter", desc: "You're past the age where you can just throw yourself into it. You want a plan that respects how your body actually adapts now." },
                { title: "The Restarter", desc: "You used to run, then life or an injury got in the way. You want a safe, structured way back to it." }
              ].map((item, i) => (
                <div key={i} className="bg-primary p-8 md:p-10 rounded-2xl border border-border">
                  <h3 className="font-bold text-xl md:text-2xl mb-4 text-accent">{item.title}</h3>
                  <p className="text-text-secondary text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW PROGRAMME NOT A NEW COACH */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl uppercase mb-6 text-center">
              New Programme. Not A New Coach.
            </h2>
            <p className="text-lg md:text-xl text-text-secondary text-center max-w-3xl mx-auto mb-16 font-medium">
              This running plan is new, so I'm not going to invent runner testimonials. Here's what people say after training with me instead. The plan is built on the same 20 years of coaching.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  quote: "Hayden is incredibly knowledgeable about the human body and takes the time to understand your personal concerns. He's helped me recover from multiple injuries and health issues, always adjusting my programme to keep me safe and moving forward.",
                  author: "Melanie, training with Hayden 10+ years"
                },
                {
                  quote: "Over 20 years, Hayden has adapted the way I train to meet the changes in my body and goals. His knowledge is equal to any professional, and he's been an invaluable investment in my health.",
                  author: "Jeff, training with Hayden 20+ years"
                },
                {
                  quote: "I came to Hayden to prepare for a corporate boxing match. He made sure my training was specific to what I needed. It paid off, and I've kept training with him since.",
                  author: "Simon"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-secondary p-10 rounded-[2rem] border border-border hover:border-accent transition-colors duration-300">
                  <div className="text-accent mb-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" className="text-accent" />
                    ))}
                  </div>
                  <p className="text-lg text-text-primary mb-8 font-medium leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-text-primary uppercase tracking-wider text-sm">{testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="max-w-3xl mx-auto bg-secondary p-6 rounded-2xl border border-border flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
               <span className="font-sans font-bold text-[14px] uppercase tracking-widest text-text-primary">20+ Years Coaching</span>
               <span className="hidden sm:block text-accent">•</span>
               <span className="font-sans font-bold text-[14px] uppercase tracking-widest text-text-primary">200+ Clients</span>
               <span className="hidden sm:block text-accent">•</span>
               <span className="font-sans font-bold text-[14px] uppercase tracking-widest text-text-primary flex items-center gap-1">5<Star className="inline w-4 h-4 fill-current text-accent" /> Google Rating</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl uppercase mb-12 text-center">Frequently Asked Questions</h2>
            <FAQ items={faqs} />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 px-6 bg-primary text-center border-t border-border relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full opacity-5 blur-3xl pointer-events-none"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="font-display text-5xl md:text-6xl uppercase mb-8">
              Ready To Start Running?
            </h2>
            <p className="text-xl text-text-secondary mb-12 max-w-xl mx-auto font-medium">
              Eight weeks from now you could be running a continuous 5km. The first session is a run-walk anyone can do. Let's get you moving.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="px-16 py-6 text-xl shadow-xl w-full md:w-auto uppercase tracking-widest font-bold">
                  Start the Programme ($27) <ArrowRight size={20} className="inline ml-2" />
                </Button>
              </a>
            </div>
            <p className="mt-8 text-sm text-text-secondary font-bold uppercase tracking-wider">
              One-time payment • Instant access • Start anytime
            </p>
          </div>
        </section>

        {/* POST-COMPLETION UPSELL */}
        <section className="py-24 px-6 bg-secondary text-center border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl uppercase mb-6">
              What comes after 5km?
            </h2>
            <p className="text-lg text-text-primary leading-relaxed mb-4 max-w-2xl mx-auto font-medium">
              Couch to 5km gets you running. Online coaching is how you keep progressing.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Once you've got your 5km and the habit that comes with it, online coaching can take you further, whether that's 10km, strength, or general fitness, with a personalised programme and real support.
            </p>
            <Link to="/online-coaching">
              <span className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-sm border-b-2 border-accent hover:border-white hover:text-white transition-colors pb-1">
                Learn about Online Coaching <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
