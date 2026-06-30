import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { useContent } from '../context/ContentContext';
import { Clock, Activity, Target } from 'lucide-react';
import card1Img from '../src/assets/images/regenerated_image_1781667503239.png';

export const Home: React.FC = () => {
  const { blogPosts } = useContent();
  const publishedPosts = blogPosts.filter(post => post.status !== 'draft');
  const recentPosts = publishedPosts.slice(0, 3);

  return (
    <>
      <SeoHead 
        title="Christchurch Personal Trainer Specialising in Fat Loss | WRK"
        description="Hayden Richards - WRK Personal Training. Expert 1:1 coaching and online programmes for busy professionals aged 35–60, across Christchurch and New Zealand."
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "WRK Personal Training",
          "image": "https://i.postimg.cc/BQWgW9Cp/518402879-10161166442630876-306901937321647854-n.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Addington",
            "addressLocality": "Christchurch",
            "addressRegion": "Christchurch",
            "addressCountry": "NZ"
          },
          "url": "https://wrkpersonaltraining.co.nz",
          "telephone": "+6421393160",
          "email": "info@wrkpersonaltraining.co.nz",
          "priceRange": "$$"
        }}
      />

      <div className="flex flex-col w-full overflow-x-hidden bg-navy transition-colors duration-300">
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[100svh] w-full flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
             <img 
               referrerPolicy="no-referrer" 
               loading="eager" 
               src="https://i.postimg.cc/BQWgW9Cp/518402879-10161166442630876-306901937321647854-n.jpg" 
               alt="Personal training session" 
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
              20 YEARS EXPERIENCE
            </span>
            <h1 className="font-display text-[50px] sm:text-[64px] md:text-[88px] lg:text-[96px] break-words leading-[1.1] sm:leading-[1.1] text-white mb-6 uppercase">
              Christchurch Personal Trainer Specialising in Fat Loss
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] text-off-white font-medium max-w-[560px] mb-8 leading-[1.65]">
              Hayden Richards - WRK Personal Training. Expert 1:1 coaching and online programmes for busy professionals aged 35–60, across Christchurch and New Zealand.
            </p>
            <div className="flex flex-col items-start gap-4">
              <Link to="/assessment" className="w-full md:w-auto">
                <Button size="lg" fullWidth className="md:w-auto text-[15px]">
                  Take the Free Custom Diagnostic
                </Button>
              </Link>
              <Link to="/contact" className="text-orange-burnt font-sans text-[15px] font-semibold hover:underline">
                Or contact Hayden directly →
              </Link>
            </div>
          </div>
        </section>

        {/* 2. WHO IS THIS FOR */}
        <section className="py-16 md:py-24 px-5 bg-navy md:px-12 relative mt-[-1px]">
          {/* Gold Rule Above */}
          <div className="w-full h-[1px] bg-gold-rule/40 absolute top-0 left-0 right-0"></div>
          
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-[40px] md:mb-[56px]">
              <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-orange-burnt mb-[16px]">
                THE PROBLEM
              </span>
              <h2 className="font-display text-[40px] md:text-[56px] leading-[1.15] uppercase text-white mb-6">
                Built for people who are ready to do this properly.
              </h2>
              <p className="font-sans text-[18px] text-off-white font-medium max-w-[640px] leading-[1.6]">
                You're not starting from zero. You know what good eating looks like. You've got more discipline than most people give you credit for. The problem isn't knowledge — it's time, structure, and someone keeping you honest.
              </p>
            </div>
            
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <li className="flex flex-col gap-3 bg-navy-mid p-8 rounded-[20px] border border-navy-light shadow-lg">
                 <div className="w-10 h-10 rounded-full bg-orange-burnt/10 flex items-center justify-center mb-2">
                   <Clock className="w-5 h-5 text-orange-burnt" />
                 </div>
                 <h3 className="text-white font-display text-[22px] uppercase tracking-wide">Time-poor professionals</h3>
                 <p className="font-sans text-[16px] text-off-white/80 leading-[1.6]">
                   You need efficient training that fits around a busy schedule.
                 </p>
               </li>
               <li className="flex flex-col gap-3 bg-navy-mid p-8 rounded-[20px] border border-navy-light shadow-lg">
                 <div className="w-10 h-10 rounded-full bg-orange-burnt/10 flex items-center justify-center mb-2">
                   <Activity className="w-5 h-5 text-orange-burnt" />
                 </div>
                 <h3 className="text-white font-display text-[22px] uppercase tracking-wide">Past injuries</h3>
                 <p className="font-sans text-[16px] text-off-white/80 leading-[1.6]">
                   You need a coach who can work around structural limitations.
                 </p>
               </li>
               <li className="flex flex-col gap-3 bg-navy-mid p-8 rounded-[20px] border border-navy-light shadow-lg">
                 <div className="w-10 h-10 rounded-full bg-orange-burnt/10 flex items-center justify-center mb-2">
                   <Target className="w-5 h-5 text-orange-burnt" />
                 </div>
                 <h3 className="text-white font-display text-[22px] uppercase tracking-wide">Done with all-or-nothing</h3>
                 <p className="font-sans text-[16px] text-off-white/80 leading-[1.6]">
                   You want a practical approach you can actually sustain.
                 </p>
               </li>
            </ul>
          </div>
        </section>

        {/* 3. SERVICE CARDS */}
        <section className="py-16 md:py-24 px-5 bg-navy md:px-12 relative">
          <div className="w-full h-[1px] bg-gold-rule/40 absolute top-0 left-0 right-0"></div>
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
              
              {/* Card 1 */}
              <div className="bg-navy-mid border border-navy-light rounded-[24px] flex flex-col shadow-xl hover:translate-y-[-4px] transition-transform duration-300">
                 <img referrerPolicy="no-referrer" loading="lazy" src={card1Img} alt="1:1 Personal Training" className="w-full h-[220px] object-cover rounded-t-[24px]" />
                 <div className="p-8 flex flex-col flex-grow">
                   <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-orange-burnt mb-3">
                     IN-PERSON
                   </span>
                   <h3 className="font-display text-[32px] md:text-[36px] uppercase text-white leading-[1.1] mb-4">
                     1:1 Personal Training
                   </h3>
                   <p className="font-sans text-[16px] text-off-white/90 leading-[1.6] mb-8 flex-grow">
                     Fully bespoke sessions around your goals, schedule, and physical considerations. Every minute earns its place.
                   </p>
                   <Link to="/personal-training">
                      <Button variant="text" className="font-bold text-[14px]">
                        Learn More →
                      </Button>
                   </Link>
                 </div>
              </div>

              {/* Card 2 */}
              <div className="bg-navy-mid border border-navy-light rounded-[24px] flex flex-col shadow-xl hover:translate-y-[-4px] transition-transform duration-300">
                 <img referrerPolicy="no-referrer" loading="lazy" src="https://i.postimg.cc/59gkxvcS/Screen-Shot-2026-06-23-at-2-11-19-PM.png" alt="Online Coaching" className="w-full h-[220px] object-cover rounded-t-[24px]" />
                 <div className="p-8 flex flex-col flex-grow">
                   <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-orange-burnt mb-3">
                     REMOTE
                   </span>
                   <h3 className="font-display text-[32px] md:text-[36px] uppercase text-white leading-[1.1] mb-4">
                     Online Coaching
                   </h3>
                   <p className="font-sans text-[16px] text-off-white/90 leading-[1.6] mb-8 flex-grow">
                     Structured 16-week coaching for clients who can't train in person. Programming, nutrition, and accountability.
                   </p>
                   <Link to="/online-coaching">
                      <Button variant="text" className="font-bold text-[14px]">
                        Learn More →
                      </Button>
                   </Link>
                 </div>
              </div>

              {/* Card 3 */}
              <div className="bg-navy-mid border border-navy-light rounded-[24px] flex flex-col shadow-xl hover:translate-y-[-4px] transition-transform duration-300">
                 <img referrerPolicy="no-referrer" loading="lazy" src="https://i.postimg.cc/WzYJSZSH/510454462-10227054382375367-4268206283149160141-n.jpg" alt="Corporate Wellness" className="w-full h-[220px] object-cover rounded-t-[24px]" />
                 <div className="p-8 flex flex-col flex-grow">
                   <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-orange-burnt mb-3">
                     FOR BUSINESSES
                   </span>
                   <h3 className="font-display text-[32px] md:text-[36px] uppercase text-white leading-[1.1] mb-4">
                     Corporate Wellness
                   </h3>
                   <p className="font-sans text-[16px] text-off-white/90 leading-[1.6] mb-8 flex-grow">
                     Structured wellness programmes for New Zealand businesses. Built to actually work - not tick a box.
                   </p>
                   <Link to="/corporate-wellness">
                      <Button variant="text" className="font-bold text-[14px]">
                        Learn More →
                      </Button>
                   </Link>
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. CREDIBILITY STRIP */}
        <section className="bg-orange-burnt py-10 px-5 md:px-12">
          <div className="max-w-[1200px] mx-auto">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center">
                <div className="flex flex-col items-center">
                  <span className="font-display text-[48px] uppercase text-white leading-[1.25] mb-2">20+</span>
                  <span className="font-sans font-medium text-[13px] uppercase text-white/80">Years Coaching</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-display text-[48px] uppercase text-white leading-[1.25] mb-2">200+</span>
                  <span className="font-sans font-medium text-[13px] uppercase text-white/80">Clients Coached</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-display text-[48px] uppercase text-white leading-[1.25] mb-2">4.9★</span>
                  <span className="font-sans font-medium text-[13px] uppercase text-white/80">Client Rated</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-display text-[48px] uppercase text-white leading-[1.25] mb-2">NZ-Wide</span>
                  <span className="font-sans font-medium text-[13px] uppercase text-white/80">Online Coaching</span>
                </div>
             </div>
          </div>
        </section>

        {/* 5. LEAD MAGNET BANNER */}
        <section className="py-16 md:py-24 px-5 bg-navy md:px-12 relative">
           <div className="w-full h-[1px] bg-gold-rule/40 absolute top-0 left-0 right-0"></div>
           <div className="max-w-[1200px] mx-auto">
              <div className="bg-navy-mid border-l-[4px] border-orange-burnt rounded-[24px] p-8 md:p-14 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-burnt/5 rounded-full blur-[80px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="relative z-10">
                  <div className="bg-orange-burnt text-white text-[11px] font-sans font-bold uppercase tracking-widest px-3 py-1.5 rounded-[4px] inline-flex items-center gap-2 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    PROGRAMME
                  </div>
                  <h2 className="font-display text-[36px] md:text-[48px] uppercase text-white leading-[1.1] mb-4">
                    14 Day Fat Loss Foundations
                  </h2>
                  <p className="font-sans text-[18px] text-off-white/90 leading-[1.6] mb-10 max-w-[640px]">
                    A 14-day programme designed to give you a practical foundation for fat loss — training, nutrition principles, and habits that actually stick. Delivered through the WRK app.
                  </p>
                  <Link to="/14-day-fat-loss-foundations">
                     <Button size="lg" className="w-full sm:w-auto shadow-xl">
                       Get the Programme
                     </Button>
                  </Link>
                </div>
              </div>
           </div>
        </section>

        {/* 6. ABOUT HAYDEN */}
        <section className="py-16 md:py-24 px-5 bg-navy md:px-12 relative">
          <div className="w-full h-[1px] bg-gold-rule/40 absolute top-0 left-0 right-0"></div>
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center bg-navy-mid p-8 md:p-12 rounded-[24px] border border-navy-light shadow-xl">
               <div className="w-full md:w-[320px] lg:w-[400px] aspect-[4/5] bg-navy rounded-[16px] overflow-hidden flex items-center justify-center shrink-0">
                  <img src="https://i.postimg.cc/ZYHDT3kr/Screen-Shot-2026-06-23-at-2-27-18-PM.png" alt="Hayden Richards" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
               </div>
               <div className="flex-1">
                  <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-orange-burnt mb-4">
                    THE COACH
                  </span>
                  <h2 className="font-display text-[40px] md:text-[56px] uppercase text-white mb-6 leading-[1.1]">
                    The coach behind WRK.
                  </h2>
                  <div className="font-sans text-[16px] md:text-[18px] text-off-white/90 leading-[1.6] mb-8 space-y-6">
                    <p>Hayden Richards. Christchurch personal trainer. Twenty years of working with busy professionals — people running businesses, raising families, managing teams.</p>
                    <p>They're busy, capable, and done putting their own health last. They need a system that fits their life — not one that asks them to rearrange it.</p>
                  </div>
                  <Link to="/about">
                    <Button variant="secondary" size="md" className="w-full sm:w-auto">
                      About Hayden
                    </Button>
                  </Link>
               </div>
            </div>
          </div>
        </section>

        {/* 7. BLOG PREVIEW */}
        <section className="py-16 md:py-24 px-5 bg-navy md:px-12 relative">
          <div className="w-full h-[1px] bg-gold-rule/40 absolute top-0 left-0 right-0"></div>
          <div className="max-w-[1200px] mx-auto">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12">
                <div>
                  <span className="block font-sans font-bold text-[12px] uppercase tracking-[0.12em] text-orange-burnt mb-[12px]">
                    LATEST INSIGHTS
                  </span>
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
                 <Link key={post.id} to={`/blog/${post.slug}`} className="group flex flex-col pt-2 transition-transform hover:-translate-y-[4px] duration-300">
                   <div className="bg-navy-mid rounded-[16px] aspect-[16/9] mb-4 overflow-hidden shadow-lg border border-navy-light group-hover:border-orange-burnt/50 transition-colors">
                      {post.image?.url ? (
                        <img referrerPolicy="no-referrer" src={post.image.url} alt={post.image.alt || post.title} className="w-full h-full object-cover" />
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
                   <span className="font-sans text-[13px] text-grey-mid font-medium uppercase tracking-wide">5 min read • {post.date}</span>
                 </Link>
               ))}
             </div>
          </div>
        </section>

        {/* 8. FOOTER CTA */}
        <section className="py-20 md:py-32 px-5 bg-navy-mid md:px-12 text-center border-t border-navy-light relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-burnt/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-[800px] mx-auto relative z-10">
            <h2 className="font-display text-[44px] sm:text-[56px] md:text-[64px] uppercase text-white mb-6 leading-[1.1]">
              Ready to do this properly?
            </h2>
            <p className="font-sans text-[18px] md:text-[20px] text-off-white/90 mb-10 leading-[1.6]">
              Book a consult or send an inquiry. No pressure, no pitch — just a straight conversation about what you want and whether WRK is the right fit.
            </p>
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto shadow-2xl">
                Get Started
              </Button>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};
