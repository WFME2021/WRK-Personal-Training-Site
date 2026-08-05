import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Check, Trophy, Smartphone, Utensils, Users, Star, ArrowRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';

export const Challenge42: React.FC = () => {
  const { pageContent } = useContent();
  const purchaseUrl = "https://wrkpersonaltraining.mypthub.net/p/225904";
  
  const faqs = [
    {
      question: "Do I need a gym membership?",
      answer: "No. There are Gym and Home versions of the training programme. You can choose what works for you."
    },
    {
      question: "Is there a strict meal plan?",
      answer: "No. Meal plans teach you how to follow rules, not how to eat. We give you a nutrition framework with clear targets, recipes, and guidelines so you can eat real food and still get results."
    },
    {
      question: "What if I miss a day?",
      answer: "You don't restart. You don't quit. You just do the next day. The programme is designed for real life, not perfection."
    },
    {
      question: "Is this suitable for beginners?",
      answer: "100%. The workouts have video demonstrations for every movement, and the habits start small and build up."
    },
    {
      question: "What happens on Day 43?",
      answer: "You'll have the option to graduate into our core Coaching Membership to keep progressing, or you can take the habits you've built and continue on your own."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Fitness Challenge NZ | The 42-Day Reset | WRK Personal Training"
        description="The WRK 42-Day Reset is a structured fitness challenge for New Zealanders who want to build the habits that make training stick. 6 weeks, app-delivered, gym or home. $47."
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
                src="https://i.postimg.cc/xTbx6w9V/IMG-7278.png"
                alt="42-day fitness challenge NZ, WRK Personal Training"
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
              THE 42-DAY CHALLENGE
            </span>
            <h1 className="flex flex-col mb-6 max-w-[1000px]">
              <span className="font-display text-[44px] sm:text-[56px] md:text-[80px] lg:text-[88px] break-words leading-[1.1] sm:leading-[1.1] text-white uppercase">
                The 42-Day Reset - NZ Fitness Challenge for Real Results
              </span>
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] text-off-white font-medium max-w-[640px] mb-8 leading-[1.6]">
              The 42-Day Reset is a structured fitness challenge for New Zealanders who want to build the habits that make training automatic. Six weeks. A daily plan in the WRK app. Gym or home. No starvation, no seven-day training schedules, no guesswork. This fitness challenge in NZ is built around the inputs that actually move the needle — and long enough to see real change. $47.
            </p>
            <div className="flex flex-col md:flex-row items-start gap-4">
               <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                  <a href={purchaseUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto px-8 py-5 text-[15px] sm:text-[16px] flex items-center justify-center gap-3"
                    >
                      Start Your Reset <ArrowRight size={20} />
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

        {/* WHY 42 DAYS? */}
        <section className="py-24 md:py-32 px-6 bg-secondary border-y border-border">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl uppercase mb-8">
              Why 42 Days?
            </h2>
            <p className="text-xl text-text-primary font-medium leading-relaxed mb-16 max-w-3xl mx-auto">
              Because 21 days isn't enough to change a habit, and 90 days feels too far away when you're just starting out.
              <br /><br />
              This isn't a crash diet or a shred. It's a structured 6-week fitness challenge. It's long enough to see real physical changes, but short enough to stay focused. We strip away the noise and focus on the daily inputs that actually move the needle.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-left mt-16">
              <div className="bg-primary p-10 rounded-[2rem] border border-border group hover:border-accent transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <span className="text-accent font-black text-2xl">01</span>
                </div>
                <h3 className="font-display uppercase text-2xl mb-4 text-text-primary">No Starvation</h3>
                <p className="text-base text-text-secondary leading-relaxed">You won't be eating 1200 calories and feeling miserable. You'll learn how to fuel properly.</p>
              </div>
              
              <div className="bg-primary p-10 rounded-[2rem] border border-border group hover:border-accent transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <span className="text-accent font-black text-2xl">02</span>
                </div>
                <h3 className="font-display uppercase text-2xl mb-4 text-text-primary">No 7-Day Training</h3>
                <p className="text-base text-text-secondary leading-relaxed">More isn't better. Better is better. 3 to 4 focused sessions a week is all you need.</p>
              </div>

              <div className="bg-primary p-10 rounded-[2rem] border border-border group hover:border-accent transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <span className="text-accent font-black text-2xl">03</span>
                </div>
                <h3 className="font-display uppercase text-2xl mb-4 text-text-primary">No Guesswork</h3>
                <p className="text-base text-text-secondary leading-relaxed">Open the app, see your tasks, tick them off. We remove the decision fatigue.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section id="whats-included" className="py-24 md:py-32 px-6 bg-primary">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-display text-4xl md:text-6xl uppercase mb-6">What's Included</h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto font-medium">Everything you need to build momentum, delivered through the WRK app.</p>
            </div>
            
            <div className="space-y-24 md:space-y-32">
              {/* Feature 1 - Image Left */}
              <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className="order-2 md:order-1 flex justify-center">
                  <div className="w-[280px] md:w-[320px] h-[580px] md:h-[660px] bg-black rounded-[3.5rem] border-[12px] border-gray-900 overflow-hidden relative shadow-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                    <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-20 rounded-b-3xl w-1/2 mx-auto"></div>
                    <img loading="lazy" referrerPolicy="no-referrer" src="https://i.postimg.cc/QtxV1RzS/IMG-1927.png" alt="6-Week Training Programme" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="order-1 md:order-2 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-6 font-mono text-sm font-bold">01</div>
                  <h3 className="text-3xl md:text-5xl font-display uppercase mb-6 leading-[1.25] text-text-primary">6-Week Training Programme</h3>
                  <p className="text-text-secondary text-lg md:text-xl leading-relaxed font-medium">
                    Choose between Gym or Home workouts. Structured progression over 6 weeks with video demonstrations for every single movement.
                  </p>
                </div>
              </div>

              {/* Feature 2 - Image Right */}
              <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className="order-1 md:order-1 flex flex-col justify-center md:pl-12">
                  <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-6 font-mono text-sm font-bold">02</div>
                  <h3 className="text-3xl md:text-5xl font-display uppercase mb-6 leading-[1.25] text-text-primary">Nutrition Framework</h3>
                  <p className="text-text-secondary text-lg md:text-xl leading-relaxed font-medium">
                    Clear calorie and protein targets, plus a flexible framework that teaches you how to eat without giving up the foods you love.
                  </p>
                </div>
                <div className="order-2 md:order-2 flex justify-center">
                  <div className="w-[280px] md:w-[320px] h-[580px] md:h-[660px] bg-black rounded-[3.5rem] border-[12px] border-gray-900 overflow-hidden relative shadow-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                    <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-20 rounded-b-3xl w-1/2 mx-auto"></div>
                    <img loading="lazy" referrerPolicy="no-referrer" src="https://i.postimg.cc/3JQrbLxM/IMG-1928.png" alt="Nutrition Framework" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Feature 3 - Image Left */}
              <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className="order-2 md:order-1 flex justify-center">
                  <div className="w-[280px] md:w-[320px] h-[580px] md:h-[660px] bg-black rounded-[3.5rem] border-[12px] border-gray-900 overflow-hidden relative shadow-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                    <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-20 rounded-b-3xl w-1/2 mx-auto"></div>
                    <img loading="lazy" referrerPolicy="no-referrer" src="https://i.postimg.cc/Hs1WPSsF/IMG-1929.png" alt="Tracking & Community" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="order-1 md:order-2 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-6 font-mono text-sm font-bold">03</div>
                  <h3 className="text-3xl md:text-5xl font-display uppercase mb-6 leading-[1.25] text-text-primary">Tracking & Community</h3>
                  <p className="text-text-secondary text-lg md:text-xl leading-relaxed font-medium">
                    Simple daily targets for water, steps, and sleep. Tick them off in the app. Access the private group inside the app for questions, form checks, and accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl uppercase mb-12">
              Who is this for?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { title: "The Starter", desc: "You want to get fit but feel overwhelmed by all the conflicting information online. You just want a clear, safe plan to follow." },
                { title: "The Restarter", desc: "You used to be fit, but life got in the way. You need a structured 6-week block to get your momentum back." },
                { title: "The DIYer", desc: "You don't need a 1:1 coach checking in every week, but you do need a proven programme to follow rather than making it up yourself." }
              ].map((item, i) => (
                <div key={i} className="bg-primary p-8 rounded-2xl border border-border">
                  <h3 className="font-bold text-xl mb-4 text-accent">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
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
              The 42-Day Reset is brand new, so I'm not going to show you invented before-and-afters. Here's what people say after training with me instead. The Reset runs on the same 20 years of coaching behind it.
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
                  quote: "I came to Hayden to prepare for a corporate boxing match. He made sure my training was specific to what I needed. It paid off in the fight, and I've kept training with him since.",
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
              Ready to Reset?
            </h2>
            <p className="text-xl text-text-secondary mb-12 max-w-xl mx-auto font-medium">
              Six weeks from now you'll wish you started today.
              <br />
              Let's build momentum that lasts.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="px-16 py-6 text-xl shadow-xl w-full md:w-auto uppercase tracking-widest font-bold">
                  Start Your Reset ($47 NZD) <ArrowRight size={20} className="inline ml-2" />
                </Button>
              </a>
            </div>
            <p className="mt-8 text-sm text-text-secondary font-bold uppercase tracking-wider">
              One-time payment • Instant access • Start anytime
            </p>
            <p className="mt-6 text-sm text-text-secondary italic max-w-xl mx-auto">
              Be one of the first through the 42-Day Reset. It's brand new. Get in early, put it to work, and help shape where it goes next.
            </p>
          </div>
        </section>

        {/* POST-COMPLETION UPSELL */}
        <section className="py-24 px-6 bg-secondary text-center border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl uppercase mb-6">
              What comes after the reset?
            </h2>
            <p className="text-lg text-text-primary leading-relaxed mb-4 max-w-2xl mx-auto font-medium">
              The 42-Day Reset builds the foundation. Online coaching is what you build on top of it.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              If you finish the 42 days and want to keep progressing with a personalised programme and coaching, that's what online PT is for.
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
