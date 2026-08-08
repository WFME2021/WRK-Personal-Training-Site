import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';

export const Home: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="Strength Training After Weight Loss Drugs | WRK Christchurch"
        description="Specialized medical weight loss fitness coaching in Christchurch. Protect your muscle mass, bone density, and metabolic health during rapid weight loss."
      />
      
      <div className="flex flex-col w-full overflow-x-hidden bg-navy transition-colors duration-300">
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[100svh] w-full flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
             <img loading="lazy"
                referrerPolicy="no-referrer"
                src="https://i.postimg.cc/XvwrPd0X/Google-Cover-Photo-(1).png"
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
              MEDICAL WEIGHT LOSS FITNESS COACHING
            </span>
            <h1 className="flex flex-col mb-6">
              <span className="font-display text-[50px] sm:text-[64px] md:text-[88px] lg:text-[96px] break-words leading-[1.1] sm:leading-[1.1] text-white uppercase">
                Strength Training & Muscle Preservation
              </span>
              <span className="font-display text-[24px] sm:text-[28px] md:text-[32px] text-off-white/90 mt-2 uppercase">
                After Medical Weight Loss
              </span>
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] text-off-white font-medium max-w-[700px] mb-8 leading-[1.65]">
              If you are navigating rapid weight loss via GLP-1 medications or bariatric surgery, standard fitness routines simply won't cut it. At WRK, we bridge the gap between clinical intervention and real-world long-term health. 
              <br /><br />
              We specialize in <strong>strength training after weight loss drugs</strong> to stop lean muscle wasting, protect bone density, and build lasting, supportive movement and nutrition behaviors.
              <br /><br />
              Based in Addington, Christchurch, and coaching online across New Zealand.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link to="/assessment" className="w-full sm:w-auto">
                <Button size="lg" fullWidth className="w-full sm:w-auto text-[15px]">
                  Take the Free 2-Minute Screening &rarr;
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. THE MISSING HALF */}
        <section className="py-16 md:py-24 px-5 bg-navy md:px-12 relative mt-[-1px]">
          <div className="w-full h-[1px] bg-gold-rule/40 absolute top-0 left-0 right-0"></div>
          
          <div className="max-w-[800px] mx-auto text-center space-y-6">
            <h2 className="font-display text-[32px] md:text-[48px] leading-[1.15] uppercase text-white mb-8">
              The Missing Half of Medical Weight Loss
            </h2>
            <div className="font-sans text-[18px] text-off-white/90 leading-[1.6] text-left space-y-4">
              <p>
                Losing weight quickly is a powerful medical win—but losing lean muscle mass is a metabolic danger. Without targeted resistance training, up to 40% of rapid weight loss can come directly from your muscles and skeletal strength.
              </p>
              <p>
                Our evidence-based approach ensures you lose fat, not the strength and vitality your body relies on.
              </p>
            </div>
          </div>
        </section>

        {/* 3. APPROACH DETAILS */}
        <section className="py-16 md:py-24 px-5 bg-navy md:px-12 relative border-t border-navy-light">
          <div className="max-w-[1200px] mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="flex flex-col gap-4 bg-navy-mid p-8 rounded-[20px] border border-navy-light shadow-lg">
                 <h3 className="text-white font-display text-[24px] uppercase tracking-wide">Muscle Retention</h3>
                 <p className="font-sans text-[16px] text-off-white/80 leading-[1.6]">
                   Intentional, progressive overload to safeguard your metabolic rate.
                 </p>
               </div>
               
               <div className="flex flex-col gap-4 bg-navy-mid p-8 rounded-[20px] border border-navy-light shadow-lg">
                 <h3 className="text-white font-display text-[24px] uppercase tracking-wide">Bone Density Protection</h3>
                 <p className="font-sans text-[16px] text-off-white/80 leading-[1.6]">
                   Skeletal loading strategies to combat the risks of rapid tissue drop.
                 </p>
               </div>
               
               <div className="flex flex-col gap-4 bg-navy-mid p-8 rounded-[20px] border border-navy-light shadow-lg">
                 <h3 className="text-white font-display text-[24px] uppercase tracking-wide">Side-Effect Management</h3>
                 <p className="font-sans text-[16px] text-off-white/80 leading-[1.6]">
                   Exercise adjustments tailored around your clinical journey, fatigue levels, and medication cycles.
                 </p>
               </div>
            </div>
          </div>
        </section>

        {/* 4. SERVICES */}
        <section className="py-16 md:py-24 px-5 bg-navy md:px-12 relative border-t border-navy-light">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-display text-[32px] md:text-[48px] leading-[1.15] uppercase text-white mb-12 text-center">
              How We Work Together
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
               <div className="flex flex-col gap-4 bg-navy-mid p-8 rounded-[20px] border border-navy-light shadow-lg">
                 <h3 className="text-white font-display text-[24px] uppercase tracking-wide">In-Person Training</h3>
                 <p className="font-sans text-[16px] text-off-white/80 leading-[1.6] flex-1">
                   Elite 1:1 Personal Training in Addington, Christchurch. Safe, 30-minute resistance training sessions tailored for medical weight loss support.
                 </p>
                 <Link to="/personal-training" className="text-orange-burnt font-sans text-[14px] font-semibold hover:underline mt-4">
                   Learn more &rarr;
                 </Link>
               </div>
               
               <div className="flex flex-col gap-4 bg-navy-mid p-8 rounded-[20px] border border-navy-light shadow-lg">
                 <h3 className="text-white font-display text-[24px] uppercase tracking-wide">Online Coaching</h3>
                 <p className="font-sans text-[16px] text-off-white/80 leading-[1.6] flex-1">
                   Premium online coaching tailored for GLP-1 patients and bariatric recovery. Protect your muscle mass from anywhere in New Zealand.
                 </p>
                 <Link to="/online-coaching" className="text-orange-burnt font-sans text-[14px] font-semibold hover:underline mt-4">
                   Learn more &rarr;
                 </Link>
               </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 md:py-32 px-5 bg-navy-mid md:px-12 text-center border-t border-navy-light relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-burnt/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-[800px] mx-auto relative z-10">
            <h2 className="font-display text-[44px] sm:text-[56px] md:text-[64px] uppercase text-white mb-6 leading-[1.1]">
              Start Your Defense.
            </h2>
            <p className="font-sans text-[18px] md:text-[20px] text-off-white/90 mb-10 leading-[1.6]">
              Take our 2-minute diagnostic screening tool to find out if your current physical setup leaves you exposed to hidden lean mass wasting.
            </p>
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
