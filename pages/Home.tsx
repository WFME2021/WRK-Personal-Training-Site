import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Button } from '../components/Button';
import { Shield, Activity, Dna, AlignVerticalJustifyCenter, Scale, Columns3, ShieldCheck, HeartPulse } from 'lucide-react';

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead 
        title="Strength Training After Weight Loss Drugs | WRK Christchurch"
        description="Specialized medical weight loss fitness coaching in Christchurch. Protect your muscle mass, bone density, and metabolic health during rapid weight loss."
      />
      
      <div className="flex flex-col w-full min-h-screen bg-neutral-900 text-neutral-100 items-center overflow-hidden">
        
        {/* 1. HERO SECTION */}
        <section className="relative w-full min-h-[90vh] flex flex-col justify-center">
          <div className="absolute inset-0 z-0">
             <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mD3YF6G23BpxoJgC7rNl3rZ1mX0R4O.png" 
                alt="Specialist trainer adjusting resistance mechanics for joint safety" 
                className="w-full h-full object-cover object-top opacity-30 mix-blend-luminosity" 
              />
             <div 
               className="absolute inset-0 bg-neutral-900/80" 
             />
          </div>

          <div className="relative z-10 w-full px-5 pt-32 pb-12 md:pb-24 max-w-[1200px] mx-auto md:px-12 text-center md:text-left">
            <span className="block font-sans font-medium text-xs uppercase tracking-widest text-teal-400 mb-4">
              MEDICAL WEIGHT LOSS FITNESS COACHING
            </span>
            <h1 className="flex flex-col mb-6">
              <span className="font-serif text-[40px] sm:text-[56px] md:text-[80px] lg:text-[88px] break-words leading-tight text-neutral-100">
                Strength Training & Muscle Preservation
              </span>
              <span className="font-serif text-[20px] sm:text-[24px] md:text-[28px] text-teal-400 mt-2">
                After Medical Weight Loss
              </span>
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] text-neutral-300 font-medium max-w-[700px] mx-auto md:mx-0 mb-8 leading-relaxed">
              If you are navigating rapid weight loss via GLP-1 medications or GLP-1 therapy, standard fitness routines simply won't cut it. At WRK, we bridge the gap between clinical intervention and real-world long-term health. 
              <br /><br />
              We specialize in <strong>strength training after weight loss drugs</strong> to stop lean muscle wasting, protect bone density, and build lasting, supportive movement and nutrition behaviors.
              <br /><br />
              Based in Addington, Christchurch, and coaching online across New Zealand.
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-6">
              <Link to="/assessment" className="w-full sm:w-auto">
                <Button size="lg" fullWidth className="w-full sm:w-auto">
                  Take the Free 2-Minute Screening &rarr;
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. THE MISSING HALF */}
        <section className="py-20 md:py-32 px-5 bg-neutral-950 w-full border-t border-neutral-800">
          <div className="max-w-[800px] mx-auto text-center space-y-6">
            <h2 className="font-serif text-[32px] md:text-[48px] leading-[1.15] text-neutral-100 mb-8">
              The Missing Half of Medical Weight Loss
            </h2>
            <div className="font-sans text-[18px] text-neutral-400 leading-relaxed text-left space-y-4">
              <p>
                Losing weight quickly is a powerful medical win—but losing lean muscle mass is a metabolic danger. Without targeted resistance training, up to 40% of rapid weight loss can come directly from your muscles and skeletal strength.
              </p>
              <p>
                Our evidence-based approach ensures you lose fat, not the strength and vitality your body relies on.
              </p>
            </div>
          </div>
        </section>

        {/* 3. APPROACH DETAILS (BENTO GRID) */}
        <section className="py-20 md:py-32 px-5 bg-neutral-900 w-full relative border-t border-neutral-800">
          <div className="max-w-[1200px] mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
               
               {/* Box 1 */}
               <div className="col-span-1 p-8 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                 <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><Dna size={32} /></div>
                 <h3 className="text-neutral-100 font-serif text-[24px] tracking-tight mb-3">Muscle Retention</h3>
                 <p className="font-sans text-[15px] text-neutral-400 leading-relaxed">
                   Intentional, progressive overload to safeguard your metabolic rate and combat lean tissue wasting during rapid weight reduction.
                 </p>
               </div>
               
               {/* Box 2 */}
               <div className="col-span-1 p-8 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                 <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><AlignVerticalJustifyCenter size={32} /></div>
                 <h3 className="text-neutral-100 font-serif text-[24px] tracking-tight mb-3">Bone Density Protection</h3>
                 <p className="font-sans text-[15px] text-neutral-400 leading-relaxed">
                   Skeletal loading strategies to combat the risks of rapid tissue drop and support shifting joint mechanics.
                 </p>
               </div>
               
               {/* Box 3 */}
               <div className="col-span-1 p-8 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                 <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><Activity size={32} /></div>
                 <h3 className="text-neutral-100 font-serif text-[24px] tracking-tight mb-3">Side-Effect Management</h3>
                 <p className="font-sans text-[15px] text-neutral-400 leading-relaxed">
                   Exercise adjustments tailored around your clinical journey, fatigue levels, and medication cycles to protect your nervous system.
                 </p>
               </div>

            </div>
          </div>
        </section>

        {/* 4. SERVICES BENTO GRID */}
        <section className="py-20 md:py-32 px-5 bg-neutral-950 w-full relative border-t border-neutral-800">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-serif text-[32px] md:text-[48px] leading-[1.15] text-neutral-100 mb-12 text-center">
              How We Work Together
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
               
               <div className="flex flex-col gap-4 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 rounded-2xl border border-neutral-800 hover:border-teal-500/50 transition-all duration-300 shadow-lg group">
                 <h3 className="text-neutral-100 font-serif text-[28px] tracking-tight">In-Person Training</h3>
                 <p className="font-sans text-[16px] text-neutral-400 leading-relaxed flex-1">
                   Elite 1:1 Personal Training in Addington, Christchurch. Safe, 30-minute resistance training sessions tailored for medical weight loss support.
                 </p>
                 <Link to="/personal-training" className="text-teal-400 font-sans text-[14px] font-semibold hover:text-teal-300 transition-colors mt-4 inline-flex items-center group-hover:translate-x-1">
                   Learn more <span className="ml-1">&rarr;</span>
                 </Link>
               </div>
               
               <div className="flex flex-col gap-4 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 rounded-2xl border border-neutral-800 hover:border-teal-500/50 transition-all duration-300 shadow-lg group">
                 <h3 className="text-neutral-100 font-serif text-[28px] tracking-tight">Online Coaching</h3>
                 <p className="font-sans text-[16px] text-neutral-400 leading-relaxed flex-1">
                   Premium online coaching tailored for GLP-1 patients and prescription GLP-1 support. Protect your muscle mass from anywhere in New Zealand.
                 </p>
                 <Link to="/online-coaching" className="text-teal-400 font-sans text-[14px] font-semibold hover:text-teal-300 transition-colors mt-4 inline-flex items-center group-hover:translate-x-1">
                   Learn more <span className="ml-1">&rarr;</span>
                 </Link>
               </div>

            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 md:py-32 px-5 bg-teal-950/20 w-full text-center border-t border-teal-500/30 relative overflow-hidden transition-all duration-500 hover:bg-teal-950/30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-[800px] mx-auto relative z-10">
            <h2 className="font-serif text-[40px] sm:text-[48px] md:text-[56px] text-neutral-100 mb-6 leading-[1.1]">
              Start Your Defense
            </h2>
            <p className="font-sans text-[18px] md:text-[20px] text-neutral-300 mb-10 leading-relaxed">
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
