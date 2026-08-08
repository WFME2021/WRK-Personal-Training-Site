import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';

export const PersonalTraining: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="In-Person Personal Training | Bariatric Exercise Program Christchurch"
        description="Premium 1:1 personal training in Addington, Christchurch. Safe, 30-minute resistance training sessions tailored for medical weight loss support."
      />
      <div className="flex flex-col w-full overflow-x-hidden bg-primary pb-24">
        
        {/* HERO */}
        <section className="relative min-h-[80svh] md:min-h-[90svh] w-full flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
             <img loading="lazy"
                referrerPolicy="no-referrer"
                src="https://i.postimg.cc/Qx9M2XvH/Google-Cover-Photo.png"
                alt="Strength training after weight loss drugs tracking markers"
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
              ADDINGTON, CHRISTCHURCH
            </span>
            <h1 className="flex flex-col mb-6">
              <span className="font-display text-[50px] sm:text-[64px] md:text-[88px] lg:text-[96px] break-words leading-[1.1] sm:leading-[1.1] text-white uppercase">
                Elite 1:1 Personal Training
              </span>
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] text-off-white font-medium max-w-[650px] mb-8 leading-[1.65]">
              Standard personal training models often push rapid weight loss clients into severe physical exhaustion, compounding systemic fatigue. Our specialized <strong>bariatric exercise program in Christchurch</strong> delivers highly intentional, focused 30-minute 1:1 resistance training sessions.
              <br/><br/>
              Located at our premium training facility in Addington, we work alongside your medical timeline to provide the exact physical stimulus your body needs to thrive.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link to="/assessment" className="w-full sm:w-auto">
                <Button size="lg" fullWidth className="w-full sm:w-auto text-[15px]">
                  Start With the Diagnostic Screening &rarr;
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CLINICAL SAFETY */}
        <section className="py-16 md:py-24 px-5 bg-navy-mid md:px-12 relative border-t border-navy-light">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-[800px] mx-auto text-center mb-16">
              <h2 className="font-display text-[32px] md:text-[48px] uppercase text-white leading-[1.1] mb-6">
                Clinical Safety Meets Sports Science
              </h2>
              <p className="font-sans text-[18px] text-off-white/90 leading-[1.6]">
                Every session is engineered around your current energetic capacity, joint mechanics, and lean mass preservation goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-navy p-8 rounded-[20px] border border-navy-light">
                <h3 className="font-display text-[24px] uppercase text-white mb-4">Focused 30-Minute Windows</h3>
                <p className="font-sans text-[16px] text-off-white/80 leading-[1.6]">
                  High-intensity, low-exhaustion training maximizes lean muscle recruitment without overwhelming your central nervous system or spiking nausea.
                </p>
              </div>

              <div className="bg-navy p-8 rounded-[20px] border border-navy-light">
                <h3 className="font-display text-[24px] uppercase text-white mb-4">Biometric & Form Tracking</h3>
                <p className="font-sans text-[16px] text-off-white/80 leading-[1.6]">
                  Exacting oversight on structural execution to protect joints that are adjusting to rapidly changing center-of-gravity dynamics.
                </p>
              </div>

              <div className="bg-navy p-8 rounded-[20px] border border-navy-light">
                <h3 className="font-display text-[24px] uppercase text-white mb-4">Coordinated Support</h3>
                <p className="font-sans text-[16px] text-off-white/80 leading-[1.6]">
                  A bridging service that respects your medical practitioner's guidelines while ensuring you execute the physical work necessary for a healthy metabolism.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="font-sans text-sm text-off-white/50 italic">
                *Premium weekly billing options available for continuous, premium accountability.
              </p>
            </div>
          </div>
        </section>
        
        {/* FINAL CTA */}
        <section className="py-20 md:py-32 px-5 bg-navy md:px-12 text-center border-t border-navy-light relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-burnt/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-[800px] mx-auto relative z-10">
            <h2 className="font-display text-[44px] sm:text-[56px] md:text-[64px] uppercase text-white mb-6 leading-[1.1]">
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
