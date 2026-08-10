import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { Shield, Activity, Dna, AlignVerticalJustifyCenter, Scale, Columns3, ShieldCheck, HeartPulse, Clock, FileWarning, Handshake } from 'lucide-react';

export const PersonalTraining: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead 
        title="In-Person Personal Training | GLP-1 Exercise Program Christchurch"
        description="Premium 1:1 personal training in Addington, Christchurch. Safe, 30-minute resistance training sessions tailored for medical weight loss support."
      />
      <div className="flex flex-col w-full overflow-x-hidden bg-neutral-900 pb-24 text-neutral-100">
        
        {/* HERO */}
        <section className="relative min-h-[80svh] md:min-h-[90svh] w-full flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
             <img loading="lazy"
                referrerPolicy="no-referrer"
                src="https://i.postimg.cc/Qx9M2XvH/Google-Cover-Photo.png"
                alt="Strength training after weight loss drugs tracking markers"
                className="w-full h-full object-cover object-top opacity-30 mix-blend-luminosity"
              />
             <div 
               className="absolute inset-0 bg-neutral-900/80" 
             />
          </div>

          <div className="relative z-10 w-full px-5 pt-32 pb-12 md:pb-24 max-w-[1200px] mx-auto md:px-12 text-center md:text-left">
            <span className="block font-sans font-medium text-xs uppercase tracking-widest text-teal-400 mb-4">
              ADDINGTON, CHRISTCHURCH
            </span>
            <h1 className="flex flex-col mb-6">
              <span className="font-serif text-[40px] sm:text-[56px] md:text-[80px] lg:text-[88px] break-words leading-tight text-neutral-100">
                Elite 1:1 Personal Training
              </span>
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] text-neutral-300 font-medium max-w-[650px] mx-auto md:mx-0 mb-8 leading-relaxed">
              Standard personal training models often push rapid weight loss clients into severe physical exhaustion, compounding systemic fatigue. Our specialized <strong>GLP-1 Exercise Program in Christchurch</strong> delivers highly intentional, focused 30-minute 1:1 resistance training sessions.
              <br/><br/>
              Located at our premium training facility in Addington, we work alongside your medical timeline to provide the exact physical stimulus your body needs to thrive.
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-6">
              <Link to="/assessment" className="w-full sm:w-auto">
                <Button size="lg" fullWidth className="w-full sm:w-auto">
                  Start With the Diagnostic Screening &rarr;
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CLINICAL SAFETY BENTO GRID */}
        <section className="py-20 md:py-32 px-5 bg-neutral-950 md:px-12 relative border-t border-neutral-800">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-[800px] mx-auto text-center mb-16">
              <h2 className="font-serif text-[32px] md:text-[48px] text-neutral-100 leading-[1.1] mb-6">
                Clinical Safety Meets Sports Science
              </h2>
              <p className="font-sans text-[18px] text-neutral-400 leading-relaxed">
                Every session is engineered around your current energetic capacity, joint mechanics, and lean mass preservation goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="col-span-1 p-8 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><Clock size={32} /></div>
                <h3 className="font-serif text-[24px] text-neutral-100 mb-4">Focused 30-Minute Windows</h3>
                <p className="font-sans text-[15px] text-neutral-400 leading-relaxed">
                  High-intensity, low-exhaustion training maximizes lean muscle recruitment without overwhelming your central nervous system or spiking nausea.
                </p>
              </div>

              <div className="col-span-1 p-8 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><FileWarning size={32} /></div>
                <h3 className="font-serif text-[24px] text-neutral-100 mb-4">Biometric & Form Tracking</h3>
                <p className="font-sans text-[15px] text-neutral-400 leading-relaxed">
                  Exacting oversight on structural execution to protect joints that are adjusting to rapidly changing center-of-gravity dynamics.
                </p>
              </div>

              <div className="col-span-1 p-8 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><Handshake size={32} /></div>
                <h3 className="font-serif text-[24px] text-neutral-100 mb-4">Coordinated Support</h3>
                <p className="font-sans text-[15px] text-neutral-400 leading-relaxed">
                  A bridging service that respects your medical practitioner's guidelines while ensuring you execute the physical work necessary for a healthy metabolism.
                </p>
              </div>

            </div>
            
            <div className="text-center mt-12">
              <p className="font-sans text-sm text-neutral-500 italic">
                *Premium weekly billing options available for continuous, premium accountability.
              </p>
            </div>
          </div>
        </section>
        
        {/* FINAL CTA */}
        <section className="py-24 md:py-32 px-5 bg-teal-950/20 md:px-12 text-center border-t border-teal-500/30 relative overflow-hidden transition-all duration-500 hover:bg-teal-950/30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-[800px] mx-auto relative z-10">
            <h2 className="font-serif text-[40px] sm:text-[48px] md:text-[56px] text-neutral-100 mb-6 leading-[1.1]">
              Secure Your Muscle Mass Today.
            </h2>
            <Link to="/assessment">
              <Button size="lg" className="w-full sm:w-auto shadow-2xl">
                Take the Free 2-Minute Screening &rarr;
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
