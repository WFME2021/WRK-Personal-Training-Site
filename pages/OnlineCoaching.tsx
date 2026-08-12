import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { Shield, Activity, Dna, AlignVerticalJustifyCenter, Scale, Columns3, ShieldCheck, HeartPulse } from 'lucide-react';

export const OnlineCoaching: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead 
        title="Online Fitness Coaching & Support | Personal Trainers for GLP-1 Patients"
        description="Premium online 12-week fitness coaching tailored for GLP-1 patients and prescription GLP-1 support. Protect your muscle mass from anywhere in New Zealand."
      />
      <div className="flex flex-col w-full overflow-x-hidden bg-neutral-900 pb-24 text-neutral-100">
        
        {/* HERO */}
        <section className="relative min-h-[80svh] md:min-h-[90svh] w-full flex flex-col justify-end">
          <div className="absolute inset-0 z-0 bg-neutral-900">
             <div className="absolute inset-0 wrk-photo-container">
               <div className="wrk-photo-overlay"></div>
               <img loading="lazy"
                  referrerPolicy="no-referrer"
                  src="https://i.postimg.cc/cJpTZjWZ/pexels-uriel-mont-6271691.jpg"
                  alt="Online fitness coaching and training outdoors"
                  className="w-full h-full object-cover object-top opacity-50 wrk-photo"
                />
             </div>
          </div>

          <div className="relative z-10 w-full px-5 pt-32 pb-12 md:pb-24 max-w-[1200px] mx-auto md:px-12 text-center md:text-left">
            <span className="block font-sans font-medium text-xs uppercase tracking-widest text-teal-400 mb-4">
              GLP-1 THERAPY SUPPORT
            </span>
            <h1 className="flex flex-col mb-6">
              <span className="font-serif text-[40px] sm:text-[56px] md:text-[80px] lg:text-[88px] break-words leading-tight text-neutral-100">
                Premium Online <span className="wrk-highlight-dark">Coaching</span>
              </span>
              <span className="font-serif text-[20px] sm:text-[24px] md:text-[28px] text-teal-400 mt-2">
                Specialized Support Wherever You Are
              </span>
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] text-neutral-300 font-medium max-w-[650px] mx-auto md:mx-0 mb-8 leading-relaxed">
              Rapid physical transformation requires distinct, scientific oversight. As specialist <strong>personal trainers for GLP-1 patients</strong> and GLP-1 patients, WRK delivers a highly scalable, premium online infrastructure built directly into the WRK Training App.
              <br/><br/>
              We don't offer generic templates. We program around your specific clinical intervention, monitoring your physiological feedback every single week.
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

        {/* ROADMAP BENTO GRID */}
        <section className="py-20 md:py-32 px-5 md:px-12 relative bg-neutral-950 border-t border-neutral-800">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-[800px] mx-auto text-center mb-16">
              <h2 className="font-serif text-[32px] md:text-[48px] text-neutral-100 leading-[1.1] mb-6">
                The 12-Week Muscle & Longevity Roadmap
              </h2>
              <p className="font-sans text-[18px] text-neutral-400 leading-relaxed">
                Our program is structured into intentional 12-week training phases designed to align perfectly with your medication or recovery timeline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="col-span-1 p-8 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                <div className="text-teal-400 font-sans font-bold tracking-widest text-sm mb-4">Phase 1: Weeks 1–4</div>
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><Activity size={32} /></div>
                <h3 className="font-serif text-[24px] text-neutral-100 mb-4">Baseline & Side Effect Management</h3>
                <p className="font-sans text-[15px] text-neutral-400 leading-relaxed">
                  Establish your strength baseline while proactively managing common side effects like severe appetite suppression, low energy, or nausea. We track your protein thresholds and introduce safe progressive overload variables to halt rapid muscle wasting early.
                </p>
              </div>

              <div className="col-span-1 p-8 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                <div className="text-teal-400 font-sans font-bold tracking-widest text-sm mb-4">Phase 2: Weeks 5–8</div>
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><AlignVerticalJustifyCenter size={32} /></div>
                <h3 className="font-serif text-[24px] text-neutral-100 mb-4">Progressive Strength & Lean Mass Focus</h3>
                <p className="font-sans text-[15px] text-neutral-400 leading-relaxed">
                  As your body adapts, we ramp up lean tissue stimulation. This phase focuses entirely on compound tracking, joint integrity, and bone density preservation, ensuring your strength matches your lighter frame.
                </p>
              </div>

              <div className="col-span-1 p-8 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-teal-500/30 transition-all duration-300 shadow-lg group">
                <div className="text-teal-400 font-sans font-bold tracking-widest text-sm mb-4">Phase 3: Weeks 9–12</div>
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform"><ShieldCheck size={32} /></div>
                <h3 className="font-serif text-[24px] text-neutral-100 mb-4">Metabolic Independence & Habit Lock</h3>
                <p className="font-sans text-[15px] text-neutral-400 leading-relaxed">
                  Transition into long-term behavioral autonomy. We optimize your weekly nutrition templates to secure lean muscle tissue permanently, setting up the exact movement patterns required to sustain your health when your medical dosages shift.
                </p>
              </div>

            </div>
            
            <div className="text-center mt-12">
              <p className="font-sans text-sm text-neutral-500 italic">
                *Weekly billing intervals with a transparent, mutually fair cancellation policy apply.
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
