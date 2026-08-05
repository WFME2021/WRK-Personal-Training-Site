const fs = require('fs');

const content = `import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { useContent } from '../context/ContentContext';
import { Clock, Activity, Target, ChevronDown } from 'lucide-react';

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const googleReviews = [
  {
    id: 1,
    text: "I've trained with Hayden for over 10 years. He's incredibly knowledgeable about the human body and takes the time to understand your personal concerns. He's helped me recover from multiple injuries and health issues, always adjusting my programme to keep me safe and moving forward. Highly recommend Hayden to anyone looking for a trainer who truly knows what they're doing and genuinely cares about your long-term health.",
    author: "Melanie, 10+ year client",
    url: "https://maps.app.goo.gl/uXoGv3zFjQ8fP2G38" 
  },
  {
    id: 2,
    text: "I've been training with Hayden for over 20 years. In that time he's adapted and changed the way I train to meet the changes in my body and goals. Thanks to his encouragement and expertise I've stayed committed to keeping fit, healthy, and setting new goals. His knowledge is equal to any professional, and he's been an invaluable investment in my health.",
    author: "Jeff, 20+ year client",
    url: "https://maps.app.goo.gl/uXoGv3zFjQ8fP2G38" 
  },
  {
    id: 3,
    text: "I came to Hayden to prepare for a corporate boxing match. He was very knowledgeable and made sure my training was specific to what I needed. It paid off in the fight, and I've since kept training with him for my strength goals.",
    author: "Simon, corporate boxing prep",
    url: "https://maps.app.goo.gl/uXoGv3zFjQ8fP2G38" 
  }
];

const faqs = [
  {
    question: "How much does a personal trainer cost in Christchurch?",
    answer: "WRK 1:1 sessions start at $55 for a focused 30-minute session, with a one-off $99 programme design and a free discovery consult to begin. Pairs training is $35 per person. Online coaching works out to under $15 a week. Full pricing sits on each service page."
  },
  {
    question: "Do you train people over 50?",
    answer: "Yes, it is most of what I do. WRK is built for the 35 to 60 range, and plenty of clients are well into their 50s and 60s. Training over 50 is not about backing off. It is about training smart around recovery, joints, and the time you have."
  },
  {
    question: "I have got an old injury. Can I still train?",
    answer: "Almost always, yes. Old knees, shoulders, and backs are normal here, not a dealbreaker. We build the programme around the injury from day one rather than ignoring it and hoping. If something needs a physio first, I will tell you straight."
  },
  {
    question: "Do you offer online coaching if I am not in Christchurch?",
    answer: "Yes. Online coaching delivers the same standard anywhere in NZ through the WRK app, with weekly check-ins and programme changes within 24 hours. You get real coaching, not a template."
  },
  {
    question: "What if I have failed at this before?",
    answer: "Then you are the exact person this is built for. Most people do not fail because they are lazy. They fail because the plan did not fit their life and no one held them accountable. Fix those two things and consistency gets a lot easier."
  }
];

export const Home: React.FC = () => {
  const { blogPosts } = useContent();
  const publishedPosts = blogPosts.filter(post => post.status !== 'draft');
  const recentPosts = publishedPosts.slice(0, 3);
  
  const [openFaqId, setOpenFaqId] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqId(openFaqId === index ? null : index);
  };

  return (
    <>
      <SeoHead 
        title="Christchurch Personal Trainer Specialising in Fat Loss | WRK"
        description="1:1 and online fat loss coaching for busy professionals aged 35 to 60 in Christchurch and across NZ. Train around your schedule and old injuries. 20 years experience."
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "WRK Personal Training",
            "description": "Personal training and fat loss coaching for adults 35 to 60 in Christchurch and across New Zealand",
            "image": "https://www.wrkpersonaltraining.co.nz/images/wrk-logo-black-transparent.png",
            "url": "https://www.wrkpersonaltraining.co.nz/",
            "telephone": "+64 21 393 160",
            "email": "info@wrkpersonaltraining.co.nz",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Get Me Fitter, Addington",
              "addressLocality": "Christchurch",
              "addressCountry": "New Zealand"
            },
            "areaServed": "Christchurch and New Zealand",
            "founder": {
              "@type": "Person",
              "name": "Hayden Richards"
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
      
      <div className="flex flex-col w-full overflow-x-hidden bg-navy transition-colors duration-300">
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[100svh] w-full flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
             <img loading="lazy"
                referrerPolicy="no-referrer"
                src="https://i.postimg.cc/XvwrPd0X/Google-Cover-Photo-(1).png"
                alt="Christchurch personal trainer Hayden Richards coaching a client in his 50s"
                className="w-full h-full object-cover object-top"
              />
             <div
               className="absolute inset-0"
               style={{
                 background: 'linear-gradient(to bottom, rgba(13, 17, 23, 0) 0%, rgba(13, 17, 23, 0.6) 60%, rgba(13, 17, 23, 0.88) 100%)'
               }}
             />
          </div>
          <div className="relative z-10 w-full px-5 pt-32 pb-12 md:pb-24 max-w-[1200px] mx-auto md:px-12">
            <span className="block font-sans font-medium text-[11px] uppercase tracking-[0.12em] text-orange-burnt mb-4">
              20 YEARS · CHRISTCHURCH & NZ-WIDE
            </span>
            <h1 className="flex flex-col mb-6">
              <span className="font-display text-[50px] sm:text-[64px] md:text-[88px] lg:text-[96px] break-words leading-[1.1] sm:leading-[1.1] text-white uppercase">
                You're not past it.
              </span>
              <span className="font-display text-[24px] sm:text-[28px] md:text-[32px] text-off-white/90 mt-2 uppercase">
                Christchurch personal trainer for busy professionals 35 to 60.
              </span>
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] text-off-white font-medium max-w-[560px] mb-8 leading-[1.65]">
              Fat loss and strength coaching built around your schedule and the body you've actually got. In Christchurch and across New Zealand.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link to="/assessment" className="w-full sm:w-auto">
                <Button size="lg" fullWidth className="w-full sm:w-auto text-[15px]">
                  Take the Free Custom Diagnostic &rarr;
                </Button>
              </Link>
              <Link to="/contact" className="text-orange-burnt font-sans text-[15px] font-semibold hover:underline">
                Or talk to Hayden first &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* 2. THE REAL PROBLEM */}
        <section className="py-16 md:py-24 px-5 bg-navy md:px-12 relative mt-[-1px]">
          <div className="w-full h-[1px] bg-gold-rule/40 absolute top-0 left-0 right-0"></div>
          
          <div className="max-w-[650px] mx-auto text-center space-y-6">
            <h2 className="font-display text-[32px] md:text-[48px] leading-[1.15] uppercase text-white mb-8">
              The Real Problem
            </h2>
            <p className="font-sans text-[18px] text-off-white/90 leading-[1.6] text-left">
              You're not starting from zero. You know what good eating looks like, and you've got more discipline than people give you credit for. The problem isn't knowledge. It's time, structure, and someone keeping you honest.
            </p>
            <p className="font-sans text-[18px] text-off-white/90 leading-[1.6] text-left">
              Twenty years coaching in Christchurch taught me the people who get results aren't the ones with the most time. They're the ones with the right plan. WRK is built for busy professionals aged 35 to 60, managing careers, families, and the odd dodgy knee, who want fat loss that fits real life. No bootcamp. No guilt. Just coaching that earns its place in your week.
            </p>
          </div>
        </section>

        {/* 3. THREE SITUATIONS */}
        <section className="py-16 md:py-24 px-5 bg-navy md:px-12 relative border-t border-navy-light">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-display text-[32px] md:text-[48px] leading-[1.15] uppercase text-white mb-12 text-center">
              Sound Familiar?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="flex flex-col gap-4 bg-navy-mid p-8 rounded-[20px] border border-navy-light shadow-lg">
                 <h3 className="text-white font-display text-[24px] uppercase tracking-wide">Time-Poor</h3>
                 <p className="font-sans text-[16px] text-off-white/80 leading-[1.6]">
                   You don't need more hours in the gym. You need a plan that works in the time you've got. Sessions built to fit a lunch break, not eat your evening.
                 </p>
               </div>
               
               <div className="flex flex-col gap-4 bg-navy-mid p-8 rounded-[20px] border border-navy-light shadow-lg">
                 <h3 className="text-white font-display text-[24px] uppercase tracking-wide">Old Injuries</h3>
                 <p className="font-sans text-[16px] text-off-white/80 leading-[1.6]">
                   Dodgy knee, cranky shoulder, a back that flares up. We don't treat that like a problem. We build the programme around it from day one.
                 </p>
               </div>
               
               <div className="flex flex-col gap-4 bg-navy-mid p-8 rounded-[20px] border border-navy-light shadow-lg">
                 <h3 className="text-white font-display text-[24px] uppercase tracking-wide">Done Starting Over</h3>
                 <p className="font-sans text-[16px] text-off-white/80 leading-[1.6]">
                   You've done the crash diets and the six-week challenges. They don't hold. This is built to last past winter, not blow up by it.
                 </p>
               </div>
            </div>
          </div>
        </section>

        {/* 4. AGE POSITIONING */}
        <section className="py-16 md:py-24 px-5 bg-navy-mid md:px-12 relative border-y border-navy-light">
          <div className="max-w-[800px] mx-auto text-center space-y-8">
            <h2 className="font-display text-[32px] md:text-[48px] leading-[1.15] uppercase text-white">
              Built For Your 40s And 50s. Not For Influencers Half Your Age.
            </h2>
            <p className="font-sans text-[18px] text-off-white/90 leading-[1.6]">
              Your body works differently after 35. Recovery slows. Old injuries hang around. Time disappears. What worked at 25 won't work now, and that's fine. This is built for the body you've actually got, by someone who has coached it for 20 years.
            </p>
          </div>
        </section>

        {/* 5. SERVICES */}
        <section className="py-16 md:py-24 px-5 bg-navy md:px-12 relative">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-display text-[32px] md:text-[48px] leading-[1.15] uppercase text-white mb-12 text-center">
              Three Ways To Work With Me
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
               <div className="flex flex-col gap-4 bg-navy-mid p-8 rounded-[20px] border border-navy-light shadow-lg">
                 <h3 className="text-white font-display text-[24px] uppercase tracking-wide">1:1 Personal Training</h3>
                 <p className="font-sans text-[16px] text-off-white/80 leading-[1.6] flex-1">
                   In-person in Christchurch. Your own coach, your own programme, built around your goals and your schedule. Not a team. Me.
                 </p>
                 <Link to="/personal-training" className="text-orange-burnt font-sans text-[14px] font-semibold hover:underline mt-4">
                   Learn more &rarr;
                 </Link>
               </div>
               
               <div className="flex flex-col gap-4 bg-navy-mid p-8 rounded-[20px] border border-navy-light shadow-lg">
                 <h3 className="text-white font-display text-[24px] uppercase tracking-wide">Online Coaching</h3>
                 <p className="font-sans text-[16px] text-off-white/80 leading-[1.6] flex-1">
                   The same coaching, anywhere in NZ. Delivered through the WRK app with weekly check-ins and programme changes within 24 hours.
                 </p>
                 <Link to="/online-coaching" className="text-orange-burnt font-sans text-[14px] font-semibold hover:underline mt-4">
                   Learn more &rarr;
                 </Link>
               </div>
               
               <div className="flex flex-col gap-4 bg-navy-mid p-8 rounded-[20px] border border-navy-light shadow-lg">
                 <h3 className="text-white font-display text-[24px] uppercase tracking-wide">Corporate Wellness</h3>
                 <p className="font-sans text-[16px] text-off-white/80 leading-[1.6] flex-1">
                   Structured wellbeing programmes for NZ teams. Less absenteeism, better energy, people performing at a higher level.
                 </p>
                 <Link to="/corporate-wellness" className="text-orange-burnt font-sans text-[14px] font-semibold hover:underline mt-4">
                   Learn more &rarr;
                 </Link>
               </div>
            </div>

            {/* STARTER OFFER */}
            <div className="bg-navy-mid border-l-[4px] border-orange-burnt rounded-[24px] p-8 md:p-14 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-burnt/5 rounded-full blur-[80px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="font-display text-[28px] md:text-[36px] uppercase text-white leading-[1.1] mb-4">
                    Not Ready For That Yet? Start Here.
                  </h3>
                  <p className="font-sans text-[16px] md:text-[18px] text-off-white/90 leading-[1.6] max-w-[700px]">
                    14-Day Fat Loss Foundations. Fourteen days, a daily plan in the app, and a coaching message from me every morning at 6:30am. $14. A real starting point, not a PDF you'll never open.
                  </p>
                </div>
                <a href="https://wrkpersonaltraining.mypthub.net/p/233801" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto shrink-0">
                  <Button size="lg" className="w-full md:w-auto shadow-xl">
                    Start the Programme — $14
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6. PROOF BAR */}
        <section className="py-8 px-5 bg-navy-light border-y border-navy-mid">
          <div className="max-w-[1200px] mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            <span className="font-sans font-bold text-[14px] uppercase tracking-widest text-off-white">20+ Years Coaching</span>
            <span className="hidden sm:block text-orange-burnt/50">•</span>
            <span className="font-sans font-bold text-[14px] uppercase tracking-widest text-off-white">200+ Clients</span>
            <span className="hidden sm:block text-orange-burnt/50">•</span>
            <span className="font-sans font-bold text-[14px] uppercase tracking-widest text-off-white">4.9<Star className="inline w-4 h-4 ml-1 mb-1 fill-current" /> Rating</span>
            <span className="hidden sm:block text-orange-burnt/50">•</span>
            <span className="font-sans font-bold text-[14px] uppercase tracking-widest text-off-white">NZ-Wide</span>
          </div>
        </section>

        {/* 7. TESTIMONIALS */}
        <section className="py-16 md:py-24 px-5 bg-navy md:px-12 relative">
          <div className="max-w-[1200px] mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {googleReviews.map((review) => (
                 <div key={review.id} className="bg-navy-mid p-8 rounded-[20px] border border-navy-light shadow-lg flex flex-col justify-between">
                   <p className="font-sans text-[16px] md:text-[18px] text-off-white/90 leading-[1.6] mb-8 italic">
                     "{review.text}"
                   </p>
                   <div className="flex flex-wrap items-center gap-3">
                     <span className="font-sans text-[14px] font-bold text-white">{review.author}</span>
                     <span className="text-off-white/30">|</span>
                     <div className="flex text-orange-burnt">
                       {[...Array(5)].map((_, i) => (
                         <Star key={i} className="w-4 h-4 fill-current" />
                       ))}
                     </div>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 8. THE COACH */}
        <section className="py-16 md:py-24 px-5 bg-navy md:px-12 relative">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center bg-navy-mid p-8 md:p-12 rounded-[24px] border border-navy-light shadow-xl">
               <div className="w-full md:w-[320px] lg:w-[400px] aspect-[4/5] bg-navy rounded-[16px] overflow-hidden flex items-center justify-center shrink-0 order-1 md:order-none">
                  <img loading="lazy" src="https://i.postimg.cc/ZYHDT3kr/Screen-Shot-2026-06-23-at-2-27-18-PM.png" alt="Hayden Richards" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
               <div className="flex-1 order-2 md:order-none">
                  <h2 className="font-display text-[40px] md:text-[56px] uppercase text-white mb-8 leading-[1.1]">
                    The Coach Behind WRK
                  </h2>
                  <div className="font-sans text-[16px] md:text-[18px] text-off-white/90 leading-[1.6] space-y-6">
                    <p>I'm Hayden Richards. Twenty years coaching, 200+ clients, based at Get Me Fitter in Addington.</p>
                    <p>My job is to cut through the noise of the fitness industry and find the minimum effective dose for you. Not the most punishing plan. The smallest one that actually works. Different bodies and different circumstances need different tools, and knowing which tool to reach for is what 20 years gives you.</p>
                    <p>That's the difference between me and a plan off the internet. Getting a busy 50-year-old with a rebuilt knee to train consistently, safely, and actually enjoy it is the job, and I've spent two decades learning how to do it.</p>
                    <p>You won't get handed to a team. You work with me. Every programme I write, I write.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section className="py-16 md:py-24 px-5 bg-navy border-t border-navy-light md:px-12 relative">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-display text-[32px] md:text-[48px] uppercase text-white mb-10 text-center">
              Common Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-navy-mid border border-navy-light rounded-[16px] overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                    aria-expanded={openFaqId === index}
                  >
                    <h3 className="font-display text-[20px] md:text-[22px] text-white uppercase">{faq.question}</h3>
                    <ChevronDown className={\`w-6 h-6 text-orange-burnt transition-transform duration-300 \${openFaqId === index ? 'rotate-180' : ''}\`} />
                  </button>
                  <div 
                    className={\`px-6 overflow-hidden transition-all duration-300 \${openFaqId === index ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}\`}
                  >
                    <p className="font-sans text-[16px] text-off-white/80 leading-[1.6]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. BLOG TEASER (CONDITIONAL) */}
        {recentPosts.length > 0 && (
          <section className="py-16 md:py-24 px-5 bg-navy border-t border-navy-light md:px-12 relative">
            <div className="max-w-[1200px] mx-auto">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12">
                  <div>
                    <h2 className="font-display text-[40px] md:text-[56px] uppercase text-white leading-[1.1]">
                      From the Blog
                    </h2>
                  </div>
                  <Link to="/blog" className="mt-6 md:mt-0">
                     <Button variant="outline" className="w-full sm:w-auto">
                       View all articles
                     </Button>
                  </Link>
               </div>
                            
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                 {recentPosts.map((post) => (
                   <Link key={post.id} to={\`/blog/\${post.slug}\`} className="group flex flex-col pt-2 transition-transform hover:-translate-y-[4px] duration-300">
                     <div className="bg-navy-mid rounded-[16px] aspect-[16/9] mb-4 overflow-hidden shadow-lg border border-navy-light group-hover:border-orange-burnt/50 transition-colors">
                        {post.image?.url ? (
                          <img loading="lazy" referrerPolicy="no-referrer" src={post.image.url} alt={post.image.alt || post.title} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-grey-mid text-sm font-sans flex h-full items-center justify-center">[IMAGE PLACEHOLDER]</span>
                        )}
                     </div>
                     <div className="bg-orange-burnt/10 text-orange-burnt text-[11px] font-sans font-bold uppercase tracking-widest px-3 py-1.5 rounded-[4px] inline-block self-start mb-4">
                       {post.category}
                     </div>
                     <h3 className="font-display text-[24px] uppercase text-white mb-2 line-clamp-2 group-hover:text-orange-burnt transition-colors leading-[1.2]">
                       {post.title}
                     </h3>
                     <p className="font-sans text-[15px] text-off-white/80 mb-3 line-clamp-2 leading-[1.6]">
                       {post.excerpt}
                     </p>
                   </Link>
                 ))}
               </div>
            </div>
          </section>
        )}

        {/* 11. FINAL CTA */}
        <section className="py-20 md:py-32 px-5 bg-navy-mid md:px-12 text-center border-t border-navy-light relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-burnt/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-[800px] mx-auto relative z-10">
            <h2 className="font-display text-[44px] sm:text-[56px] md:text-[64px] uppercase text-white mb-6 leading-[1.1]">
              You're Not Past It.
            </h2>
            <p className="font-sans text-[18px] md:text-[20px] text-off-white/90 mb-10 leading-[1.6]">
              Book a consult or send an enquiry. No pressure, no pitch. Just a straight conversation about what you want and whether WRK is the right fit.
            </p>
            <Link to="/assessment">
              <Button size="lg" className="w-full sm:w-auto shadow-2xl">
                Take the Free Custom Diagnostic &rarr;
              </Button>
            </Link>
          </div>
        </section>
        
      </div>
    </>
  );
};
`;

fs.writeFileSync('pages/Home.tsx', content);
console.log('Homepage updated');
