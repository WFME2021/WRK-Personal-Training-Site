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
    "description": "Hayden Richards is a REPs-registered personal trainer with over 20 years experience specializing in GLP-1 fitness coaching and muscle preservation in Christchurch, NZ."
  };

  return (
    <>
      <SeoHead
        title="About Hayden Richards | GLP-1 Fitness Coach Christchurch | WRK"
        description="Meet Hayden Richards, REPs-registered GLP-1 fitness coach with 20+ years experience in Christchurch. Learn how WRK combines intelligent strength and muscle preservation."
        schema={schema}
      />
      <div className="bg-canvas text-charcoal min-h-screen font-sans selection:bg-spruce-800 selection:text-sand-50">
        
        {/* 1. Hero Header */}
        <section className="bg-canvas pt-14 pb-16 px-6 max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-sans text-spruce-800 font-semibold mb-4">
            BEYOND THE PRESCRIPTION
          </p>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight max-w-3xl mx-auto mb-6 leading-tight">
            Medicine opens the door. <span className="block sm:inline italic text-spruce-800">WRK maps the way forward.</span>
          </h1>
          
          <p className="text-charcoal/80 max-w-2xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
            GLP-1 medications have changed what is possible in weight management. We provide the intelligent movement, muscle preservation, and habit frameworks to support your physical body alongside it.
          </p>

          {/* Anti-Burnout Pledge Pills */}
          <div className="flex flex-row justify-center flex-wrap gap-4 sm:gap-6 text-xs text-charcoal/70">
            <span className="flex items-center text-charcoal/80">✓ Joint-friendly resistance loading</span>
            <span className="hidden sm:inline text-charcoal/30">•</span>
            <span className="flex items-center text-charcoal/80">✓ High-density, manageable protein pacing</span>
            <span className="hidden sm:inline text-charcoal/30">•</span>
            <span className="flex items-center text-spruce-800 font-semibold">✓ Sustainable strength & real-world capability</span>
          </div>
        </section>

        {/* 2. Founder & Coach Story (2-Column Editorial Split) */}
        <section className="py-16 px-6 max-w-5xl mx-auto items-center grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-charcoal/5">
          {/* Left Column: Portrait */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden object-cover border border-charcoal/5 shadow-sm relative bg-sand-100">
              <img 
                src="https://i.postimg.cc/ZYHDT3kr/Screen-Shot-2026-06-23-at-2-27-18-PM.png"
                alt="Hayden Richards, Founder & Head Coach at WRK Personal Training in Christchurch"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  // Fallback to high quality coach editorial if third party hosting throttles
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-sand-50 text-xs">
                <span className="font-semibold block text-sm">Hayden Richards</span>
                <span className="text-sand-200/80 text-[11px]">Founder & Head Coach · REPs Registered</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="space-y-5 text-left">
            <span className="text-xs uppercase tracking-widest text-spruce-800 font-semibold block">
              MEET YOUR COACH
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight">
              I’m Hayden.
            </h2>
            
            <p className="text-charcoal/80 text-base leading-relaxed">
              Structured strength without the exhaustion. We replace extreme diets and high-volume gym routines with targeted, 30-minute sessions that protect your joints, your energy, and your metabolic health.
            </p>
            
            <p className="text-charcoal/80 text-base leading-relaxed">
              I founded WRK Personal Training to bridge the gap between medical weight management and physical capability—providing the supervised strength training, muscle preservation, and habit structure your body needs alongside medication.
            </p>

            <div className="p-4 rounded-xl bg-sand-100/70 border border-charcoal/5 font-serif text-base italic text-spruce-900 leading-snug">
              “WRK is built to answer those questions with calm, evidence-based strength coaching.”
            </div>
          </div>
        </section>

        {/* 3. The WRK Philosophy */}
        <section className="bg-sand-100/60 py-20 px-6 border-y border-charcoal/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">
                COACHING PRINCIPLES
              </span>
              <h2 className="font-serif text-3xl text-charcoal tracking-tight">
                The Three Core Principles
              </h2>
              <p className="text-sm text-charcoal/70 mt-2">
                Every session, app track, and habit cue is built on these foundations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-xl p-8 border border-charcoal/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 bg-sand-100 px-2 py-0.5 rounded inline-block mb-3">
                    01 · PROTECTION
                  </span>
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                    Muscular Defence First
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    Rapid weight loss without targeted resistance training can sacrifice lean muscle and resting metabolism. We prioritize joint-friendly lifting patterns so the weight lost is fat, while your physical strength stays protected.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                  Focus: Lean mass preservation
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-8 border border-charcoal/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 bg-sand-100 px-2 py-0.5 rounded inline-block mb-3">
                    02 · ADAPTATION
                  </span>
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                    Compassionate Calibration
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    Your body is changing rapidly. Dose adjustments, low appetite, and fluctuating recovery mean training must adapt to where you are each week—swapping rigid perfectionism for smart, sustainable progress.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                  Focus: Titration & energy syncing
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl p-8 border border-charcoal/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 bg-sand-100 px-2 py-0.5 rounded inline-block mb-3">
                    03 · SUSTAINABILITY
                  </span>
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                    Real-World Integration
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    Fitness should support your life, not consume it. We focus on foundational routines—digestible protein anchoring, hydration, and 30-minute sessions—that stick with you for decades to come.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                  Focus: Autonomy & long-term habits
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Trust & Credentials Band */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="border-t md:border-t-0 md:border-l first:border-l-0 border-charcoal/10 p-4">
              <div className="font-serif text-2xl font-bold text-spruce-800 mb-1">
                20+ Years Coaching
              </div>
              <p className="text-xs text-charcoal/70 leading-relaxed">
                Two decades of hands-on client results across strength and body recomposition.
              </p>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-charcoal/10 p-4">
              <div className="font-serif text-2xl font-bold text-spruce-800 mb-1">
                REPs Registered
              </div>
              <p className="text-xs text-charcoal/70 leading-relaxed">
                Committed to the highest standards of evidence-based, professional exercise delivery.
              </p>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-charcoal/10 p-4">
              <div className="font-serif text-2xl font-bold text-spruce-800 mb-1">
                Private Studio
              </div>
              <p className="text-xs text-charcoal/70 leading-relaxed">
                A dedicated, semi-private Christchurch space built for focused, crowd-free training.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Bottom Dual-Path CTA Banner */}
        <section className="bg-spruce-800 text-sand-50 py-16 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-sand-200 mb-3 block font-semibold">
              YOU DON’T HAVE TO NAVIGATE THIS ALONE
            </span>
            
            <h2 className="font-serif text-3xl text-sand-50 mb-4 tracking-tight">
              Ready to Build Strength Alongside Your Medication?
            </h2>
            
            <p className="text-sand-100/80 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
              Whether you train with us in person in Christchurch or through the WRK App anywhere in the world, we're here to safeguard lean muscle, resting metabolic rate, and physical capability alongside medical weight management.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Link
                to="/contact"
                className="bg-sand-100 text-spruce-900 hover:bg-white px-6 py-3.5 rounded-md font-semibold text-xs uppercase tracking-wider text-center transition-colors shadow-sm"
              >
                Book Studio Consult (Christchurch)
              </Link>
              <Link
                to="/online-coaching"
                className="border border-sand-200/30 text-sand-50 hover:bg-spruce-900 px-6 py-3.5 rounded-md font-semibold text-xs uppercase tracking-wider text-center transition-colors"
              >
                Explore Online Coaching (Worldwide)
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
