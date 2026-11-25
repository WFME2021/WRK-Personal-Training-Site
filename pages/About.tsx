import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Activity, Droplets, CheckCircle2, Award, Clock, MapPin, ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Hayden Richards",
    "jobTitle": "Founder & Head Coach",
    "worksFor": {
      "@type": "HealthAndFitnessBusiness",
      "name": "WRK Personal Training",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12 Show Place",
        "addressLocality": "Addington",
        "addressRegion": "Canterbury",
        "postalCode": "8024",
        "addressCountry": "NZ"
      }
    },
    "description": "Hayden Richards is a Christchurch personal trainer with over 20 years on the gym floor, coaching adults in Addington and online across New Zealand."
  };

  return (
    <>
      <SeoHead
        title="About Hayden Richards | WRK Personal Training Christchurch"
        description="Meet Hayden Richards—20+ years on the gym floor in Christchurch, helping adults build strength, energy, and confidence without burnout or gym-bro hype."
        schema={schema}
      />
      <div className="bg-cream text-forest min-h-screen font-sans selection:bg-forest selection:text-cream">
        
        {/* 1. Hero Header */}
        <section className="bg-cream pt-10 md:pt-14 pb-12 px-6 max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-sans text-forest/75 font-semibold mb-4">
            THE RIGHT WORK, DONE WELL
          </p>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest tracking-tight max-w-3xl mx-auto mb-6 leading-tight text-balance">
            Coaching built for real people, <span className="block sm:inline italic text-forest">not 22-year-old athletes.</span>
          </h1>
          
          <p className="text-forest/85 max-w-2xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
            Whether you are building strength in your 40s or 50s, getting back into a rhythm after a long break, or protecting your muscle while using a GLP-1 medication—my job is to make getting stronger feel calm, understandable, and genuinely doable.
          </p>

          {/* Clean Unboxed Trust Line */}
          <div className="flex flex-row justify-center flex-wrap gap-4 sm:gap-6 text-xs text-forest/80">
            <span>✓ Joint-friendly strength training</span>
            <span className="hidden sm:inline text-forest/30">·</span>
            <span>✓ Plain-English food habits</span>
            <span className="hidden sm:inline text-forest/30">·</span>
            <span className="font-semibold text-forest">✓ 20+ years on the gym floor</span>
          </div>
        </section>

        {/* 2. Founder & Coach Story (2-Column Editorial Split) */}
        <section className="py-14 md:py-16 px-6 max-w-5xl mx-auto items-center grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-forest/10">
          {/* Left Column: Portrait */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden object-cover border border-forest/15 shadow-sm relative bg-quiet">
              <img 
                src="https://i.postimg.cc/ZYHDT3kr/Screen-Shot-2026-06-23-at-2-27-18-PM.png"
                alt="Hayden Richards, Founder & Head Coach at WRK Personal Training in Addington, Christchurch"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-cream text-xs">
                <span className="font-semibold block text-sm">Hayden Richards</span>
                <span className="text-cream/85 text-[11px]">Personal Trainer · Addington, Christchurch</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="space-y-5 text-left">
            <span className="text-xs uppercase tracking-widest text-forest/75 font-semibold block">
              MEET YOUR COACH
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest tracking-tight">
              Hi, I'm Hayden.
            </h2>
            
            <p className="text-forest/85 text-base leading-relaxed">
              I've spent more than 20 years coaching everyday adults in Christchurch, and if there's one thing I know for sure, it's that most people don't quit exercise because they lack willpower. They quit because someone handed them an extreme, exhausting routine that didn't respect their joints, their sleep, or their real-life week.
            </p>
            
            <p className="text-forest/85 text-base leading-relaxed">
              I coach in our quiet Addington space Monday to Friday from 6:00 AM to 2:00 PM so I'm wrapped up in time for the 3:00 PM school pickup. On weekends, you'll usually find me walking the hills, down at the beach, or kicking a ball in the park with my kids. That same common-sense balance is exactly how I coach: 3 to 4 focused sessions a week that build strength without wrecking the rest of your day.
            </p>

            <div className="p-4 rounded-xl bg-quiet border border-forest/15 font-serif text-base italic text-forest leading-snug">
              “Good coaching takes the physiology of getting stronger and turns it into something normal people actually enjoy turning up for.”
            </div>
          </div>
        </section>

        {/* 3. The WRK Philosophy */}
        <section className="bg-quiet py-16 md:py-20 px-6 border-y border-forest/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest font-semibold text-forest/75 block mb-2">
                HOW I COACH
              </span>
              <h2 className="font-serif text-3xl text-forest tracking-tight">
                Three Things We Never Compromise On
              </h2>
              <p className="text-sm text-forest/80 mt-2">
                Plain English, sensible pacing, and zero ego.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-cream rounded-xl p-8 border border-forest/15 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-forest/70 block mb-3">
                    01 · KEEP YOUR STRENGTH
                  </span>
                  <h3 className="font-serif text-xl font-bold text-forest mb-3">
                    Protect Muscle, Not Just Numbers
                  </h3>
                  <p className="text-sm text-forest/85 leading-relaxed">
                    Whether you're getting stronger past 40 or losing weight on a GLP-1 medication, resistance training tells your body to keep hold of lean muscle so you stay capable, upright, and full of energy.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-forest/70">
                  Plain-English resistance work
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-cream rounded-xl p-8 border border-forest/15 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-forest/70 block mb-3">
                    02 · MATCH YOUR WEEK
                  </span>
                  <h3 className="font-serif text-xl font-bold text-forest mb-3">
                    Work Around Real Energy
                  </h3>
                  <p className="text-sm text-forest/85 leading-relaxed">
                    Bad night's sleep? Busy week at work? Low energy after a GLP-1 dose day? We dial sessions up or down to match how you actually feel, so you never fall into the all-or-nothing trap.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-forest/70">
                  Flexible, joint-friendly pacing
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-cream rounded-xl p-8 border border-forest/15 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-forest/70 block mb-3">
                    03 · STAY IN OUR LANE
                  </span>
                  <h3 className="font-serif text-xl font-bold text-forest mb-3">
                    Practical Habits, Clear Boundaries
                  </h3>
                  <p className="text-sm text-forest/85 leading-relaxed">
                    I help with strength programmes and everyday food habits—protein anchors, fibre, and water. Anything medical or clinical always stays strictly with your doctor or qualified clinician.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-forest/70">
                  Honest, scope-safe support
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Trust & Credentials Band */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="border-t md:border-t-0 md:border-l first:border-l-0 border-forest/15 p-4">
              <div className="font-serif text-2xl font-bold text-forest mb-1">
                20+ Years Coaching
              </div>
              <p className="text-xs sm:text-sm text-forest/80 leading-relaxed">
                Two decades helping Christchurch adults feel stronger, steadier, and more confident.
              </p>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-forest/15 p-4">
              <div className="font-serif text-2xl font-bold text-forest mb-1">
                Mon–Fri, 6 AM – 2 PM
              </div>
              <p className="text-xs sm:text-sm text-forest/80 leading-relaxed">
                Consistent morning and midday studio hours in Addington—home in time for the 3 PM school run.
              </p>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-forest/15 p-4">
              <div className="font-serif text-2xl font-bold text-forest mb-1">
                Quiet Addington Space
              </div>
              <p className="text-xs sm:text-sm text-forest/80 leading-relaxed">
                Located at 1/12 Show Place inside Get Me Fitter—free parking right outside and zero gym ego.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Bottom Dual-Path CTA Banner */}
        <section className="bg-forest text-cream py-16 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-citron mb-3 block font-semibold">
              WANT TO SEE IF WE CLICK?
            </span>
            
            <h2 className="font-serif text-3xl text-cream mb-4 tracking-tight text-balance">
              Let's have a relaxed 15-minute chat.
            </h2>
            
            <p className="text-cream/85 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
              Tell me what you're working around and what you'd love to feel capable of doing—whether that leads to training together in Addington, coaching online, or trying a self-guided plan in the WRK app.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Link
                to="/book"
                className="bg-citron text-forest hover:brightness-95 border border-forest/20 px-6 py-3.5 rounded-md font-semibold text-xs uppercase tracking-wider text-center transition-all shadow-sm"
              >
                Grab a Free 15-Min Chat →
              </Link>
              <Link
                to="/programs"
                className="border border-cream/35 text-cream hover:bg-forest-deep px-6 py-3.5 rounded-md font-semibold text-xs uppercase tracking-wider text-center transition-colors"
              >
                How We Work Together
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
