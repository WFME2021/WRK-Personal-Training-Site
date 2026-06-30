const fs = require('fs');

const homeContent = `import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Target, Activity } from 'lucide-react';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';

export const Home: React.FC = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (scrollPosition / (documentHeight - windowHeight) > 0.6) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SeoHead 
        title="Personal Trainer Christchurch | Fat Loss for Busy Professionals | WRK"
        description="Christchurch personal trainer specialising in fat loss for busy professionals 35+. 1:1 PT, online coaching, and corporate wellness. No fluff. Real results."
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "WRK Personal Training",
          "image": "https://i.postimg.cc/kXGL3fbx/pexels-ardit-mbrati-216809103-16966339.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Christchurch",
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

      <div className="flex flex-col w-full overflow-x-hidden bg-primary transition-colors duration-300 pb-24">
        
        {/* HERO SECTION */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 text-center flex flex-col items-center min-h-[90vh] justify-center bg-black">
          <div className="absolute inset-0 z-0">
             <img referrerPolicy="no-referrer" loading="eager" src="https://i.postimg.cc/tCGRmr4y/IMG-1925.png" alt="WRK Personal Training" className="w-full h-full object-cover opacity-30 grayscale" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
            <h1 className="font-display text-5xl md:text-8xl leading-[0.9] font-black uppercase tracking-tighter text-white mb-8">
              Keep Fit.<br/>Stay Healthy.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-3xl mb-12 leading-relaxed">
              Personal training and online coaching for busy professionals 35+ who want real results without wasting time.
            </p>
            <Link to="/contact">
              <Button size="lg" className="px-10 py-6 text-lg rounded-full uppercase tracking-widest font-black flex items-center gap-3">
                Work With Hayden <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </section>

        {/* WHO IS THIS FOR */}
        <section className="py-24 md:py-32 px-6 lg:px-12 bg-primary">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <h2 className="font-display text-4xl md:text-6xl uppercase font-black text-text-primary mb-8 tracking-tighter leading-[0.9]">
              Built for people who know better but can't stay consistent.
            </h2>
            <div className="text-xl text-text-secondary leading-relaxed mb-16 font-medium space-y-6">
              <p>You're not a beginner. You know what good eating looks like. You've done programmes before.</p>
              <p>The problem isn't knowledge — it's time, structure, and someone keeping you honest.</p>
              <p>WRK works with high performers aged 35–60 who want efficient training, a practical nutrition approach, and a coach who'll hold them accountable without the hand-holding.</p>
            </div>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
             <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
                  <Clock className="text-text-primary" size={28} />
                </div>
                <h3 className="font-bold text-lg text-text-primary">Time-poor professionals</h3>
             </div>
             <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
                  <Activity className="text-text-primary" size={28} />
                </div>
                <h3 className="font-bold text-lg text-text-primary">Carrying past injuries or physical considerations</h3>
             </div>
             <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
                  <Target className="text-text-primary" size={28} />
                </div>
                <h3 className="font-bold text-lg text-text-primary">Done with all-or-nothing programmes that don't fit real life</h3>
             </div>
          </div>
        </section>

        {/* THE 3 OFFERINGS */}
        <section className="py-24 px-6 lg:px-12 bg-secondary">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-primary p-10 md:p-12 rounded-[2rem] flex flex-col h-full border border-border shadow-sm">
                 <h3 className="font-display text-4xl uppercase font-bold text-text-primary tracking-tighter mb-6 leading-tight">
                   1:1 Personal Training
                 </h3>
                 <p className="text-lg text-text-secondary mb-10 leading-relaxed font-medium flex-grow">
                   Bespoke in-person sessions in Christchurch. Fully built around your goals, schedule, and physical considerations. Every minute earns its place.
                 </p>
                 <Link to="/personal-training">
                   <Button variant="outline" className="w-full justify-between group py-6 text-sm uppercase tracking-widest font-black border-text-primary text-text-primary hover:bg-text-primary hover:text-primary">
                     Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </Button>
                 </Link>
              </div>

              {/* Card 2 */}
              <div className="bg-primary p-10 md:p-12 rounded-[2rem] flex flex-col h-full border border-border shadow-sm">
                 <h3 className="font-display text-4xl uppercase font-bold text-text-primary tracking-tighter mb-6 leading-tight">
                   Online Coaching
                 </h3>
                 <p className="text-lg text-text-secondary mb-10 leading-relaxed font-medium flex-grow">
                   Same standard — different location. Structured 16-week coaching for clients who can't train in person. Programming, nutrition guidance, and regular check-ins delivered through the WRK app.
                 </p>
                 <Link to="/online-coaching">
                   <Button variant="outline" className="w-full justify-between group py-6 text-sm uppercase tracking-widest font-black border-text-primary text-text-primary hover:bg-text-primary hover:text-primary">
                     Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </Button>
                 </Link>
              </div>

              {/* Card 3 */}
              <div className="bg-primary p-10 md:p-12 rounded-[2rem] flex flex-col h-full border border-border shadow-sm">
                 <h3 className="font-display text-4xl uppercase font-bold text-text-primary tracking-tighter mb-6 leading-tight">
                   Corporate Wellness
                 </h3>
                 <p className="text-lg text-text-secondary mb-10 leading-relaxed font-medium flex-grow">
                   Healthy teams perform better. Structured wellness programmes for Christchurch businesses. Built to actually work — not tick a box.
                 </p>
                 <Link to="/corporate-wellness">
                   <Button variant="outline" className="w-full justify-between group py-6 text-sm uppercase tracking-widest font-black border-text-primary text-text-primary hover:bg-text-primary hover:text-primary">
                     Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </Button>
                 </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CREDIBILITY STRIP */}
        <section className="py-20 px-6 bg-text-primary text-primary">
          <div className="max-w-[1400px] mx-auto">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left divide-x-0 md:divide-x divide-primary/20">
                <div className="flex flex-col items-center md:items-start md:px-8">
                  <span className="font-display text-5xl md:text-6xl font-black tracking-tighter mb-2">20+</span>
                  <span className="text-lg font-bold uppercase tracking-wider opacity-80">Years coaching</span>
                </div>
                <div className="flex flex-col items-center md:items-start md:px-8">
                  <span className="font-display text-5xl md:text-6xl font-black tracking-tighter mb-2">200+</span>
                  <span className="text-lg font-bold uppercase tracking-wider opacity-80">Clients trained</span>
                </div>
                <div className="flex flex-col items-center md:items-start md:px-8">
                  <span className="font-display text-5xl md:text-6xl font-black tracking-tighter mb-2">3</span>
                  <span className="text-lg font-bold uppercase tracking-wider opacity-80">Service options</span>
                </div>
                <div className="flex flex-col items-center md:items-start md:px-8">
                  <span className="font-display text-5xl md:text-6xl font-black tracking-tighter mb-2">CHC</span>
                  <span className="text-lg font-bold uppercase tracking-wider opacity-80">Christchurch Based</span>
                </div>
             </div>
          </div>
        </section>

        {/* FREE LEAD MAGNET */}
        <section className="py-32 px-6 lg:px-12 bg-accent text-white text-center">
           <div className="max-w-4xl mx-auto flex flex-col items-center">
              <h2 className="font-display text-5xl md:text-7xl uppercase font-black tracking-tighter mb-6 leading-none">
                 Start with 14 days. Free.
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-8">The 14 Day Fat Loss Foundations Programme</h3>
              <p className="text-xl leading-relaxed mb-12 font-medium max-w-3xl opacity-90">
                A free 14-day programme designed to give you a practical foundation for fat loss — training, nutrition principles, and habits that actually stick.
                <br/><br/>
                Delivered through the WRK app. No credit card. No catch.
              </p>
              <Link to="/14-day-fat-loss-foundations">
                 <Button size="lg" className="bg-white text-accent hover:bg-gray-100 px-10 py-6 text-lg rounded-full uppercase tracking-widest font-black flex items-center gap-3 shadow-xl">
                   Get the Free Programme <ArrowRight size={20} />
                 </Button>
              </Link>
           </div>
        </section>

        {/* ABOUT HAYDEN (SHORT) */}
        <section className="py-24 md:py-32 px-6 lg:px-12 bg-primary">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="h-[500px] md:h-[700px] rounded-[2rem] overflow-hidden">
                 <img referrerPolicy="no-referrer" loading="lazy" src="https://i.postimg.cc/8PgknyPK/IMG-1931.png" alt="Hayden Richards" className="w-full h-full object-cover grayscale" />
               </div>
               <div>
                  <h2 className="font-display text-5xl md:text-7xl uppercase font-black text-text-primary mb-10 tracking-tighter leading-[0.9]">
                     20 years.<br/>One focus.
                  </h2>
                  <div className="text-xl text-text-secondary leading-relaxed mb-12 font-medium space-y-6">
                    <p>I'm Hayden Richards — a Christchurch-based personal trainer with two decades of experience working with adults who want to get leaner, stronger, and more capable.</p>
                    <p>My clients aren't beginners. They're high performers who've let their own fitness slide. They need a coach who can work around real life — busy schedules, past injuries, and the physiology of a body that's 40, 50, or 55.</p>
                    <p>That's what WRK is built for.</p>
                  </div>
                  <Link to="/about" className="inline-flex items-center text-lg font-bold uppercase tracking-widest text-text-primary hover:text-accent group border-b-2 border-text-primary hover:border-accent pb-1 transition-all">
                    About Hayden <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>
            </div>
          </div>
        </section>

        {/* BLOG PREVIEW */}
        <section className="py-24 px-6 lg:px-12 bg-secondary">
          <div className="max-w-[1400px] mx-auto text-center">
             <h2 className="font-display text-4xl md:text-6xl uppercase font-black text-text-primary mb-12 tracking-tighter">
               From the blog
             </h2>
             <Link to="/blog" className="inline-flex items-center text-lg font-bold uppercase tracking-widest text-text-primary hover:text-accent group border-b-2 border-text-primary hover:border-accent pb-1 transition-all">
               View all articles <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="bg-primary py-32 md:py-48 px-6 lg:px-12 text-center relative overflow-hidden border-t border-border">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full opacity-5 blur-3xl pointer-events-none"></div>
          <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            <h2 className="font-display text-5xl md:text-7xl uppercase font-black text-text-primary mb-8 tracking-tighter leading-none">
              Ready to do this properly?
            </h2>
            <p className="text-xl font-medium text-text-secondary mb-12 leading-relaxed max-w-2xl">
              Book a free 20-minute consult. No pressure, no pitch — just a straight conversation about what you want and whether WRK is the right fit.
            </p>
            <Link to="/contact">
              <Button size="lg" className="px-12 py-6 text-xl rounded-full uppercase tracking-widest font-black shadow-2xl flex items-center gap-3">
                Book a Free Consult <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};
`;

fs.writeFileSync('pages/Home.tsx', homeContent);
console.log('Done writing Home.tsx');
