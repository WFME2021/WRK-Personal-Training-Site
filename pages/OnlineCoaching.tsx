import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';

export const OnlineCoaching: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="Online Fitness Coaching & Support | Personal Trainers for GLP-1 Patients"
        description="Premium online 12-week fitness coaching tailored for GLP-1 patients and bariatric recovery. Protect your muscle mass from anywhere in New Zealand."
      />
      <div className="flex flex-col w-full overflow-x-hidden bg-primary pb-24">
        
        {/* HERO */}
        <section className="relative min-h-[80svh] md:min-h-[90svh] w-full flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
             <img loading="lazy"
                referrerPolicy="no-referrer"
                src="https://i.postimg.cc/1t9HjpcR/508833357-30407543532163264-7406991278294427854-n.jpg"
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
              GLP-1 & BARIATRIC RECOVERY SUPPORT
            </span>
            <h1 className="flex flex-col mb-6">
              <span className="font-display text-[50px] sm:text-[64px] md:text-[88px] lg:text-[96px] break-words leading-[1.1] sm:leading-[1.1] text-white uppercase">
                Premium Online Coaching
              </span>
              <span className="font-display text-[24px] sm:text-[28px] md:text-[32px] text-off-white/90 mt-2 uppercase">
                Specialized Support Wherever You Are
              </span>
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] text-off-white font-medium max-w-[650px] mb-8 leading-[1.65]">
              Rapid physical transformation requires distinct, scientific oversight. As specialist <strong>personal trainers for GLP-1 patients</strong> and post-surgical bariatric individuals, WRK delivers a highly scalable, premium online infrastructure built directly into My PT Hub.
              <br/><br/>
              We don't offer generic templates. We program around your specific clinical intervention, monitoring your physiological feedback every single week.
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

        {/* ROADMAP */}
        <section className="py-16 md:py-24 px-5 md:px-12 relative bg-navy-mid border-t border-navy-light">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-[800px] mx-auto text-center mb-16">
              <h2 className="font-display text-[32px] md:text-[48px] uppercase text-white leading-[1.1] mb-6">
                The 12-Week Muscle & Longevity Roadmap
              </h2>
              <p className="font-sans text-[18px] text-off-white/90 leading-[1.6]">
                Our program is structured into intentional 12-week training phases designed to align perfectly with your medication or recovery timeline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-navy p-8 rounded-[20px] border border-navy-light">
                <div className="text-orange-burnt font-sans font-bold uppercase tracking-widest text-sm mb-4">Phase 1: Weeks 1–4</div>
                <h3 className="font-display text-[24px] uppercase text-white mb-4">Baseline & Side Effect Management</h3>
                <p className="font-sans text-[16px] text-off-white/80 leading-[1.6]">
                  Establish your strength baseline while proactively managing common side effects like severe appetite suppression, low energy, or nausea. We track your protein thresholds and introduce safe progressive overload variables to halt rapid muscle wasting early.
                </p>
              </div>

              <div className="bg-navy p-8 rounded-[20px] border border-navy-light">
                <div className="text-orange-burnt font-sans font-bold uppercase tracking-widest text-sm mb-4">Phase 2: Weeks 5–8</div>
                <h3 className="font-display text-[24px] uppercase text-white mb-4">Progressive Strength & Lean Mass Focus</h3>
                <p className="font-sans text-[16px] text-off-white/80 leading-[1.6]">
                  As your body adapts, we ramp up lean tissue stimulation. This phase focuses entirely on compound tracking, joint integrity, and bone density preservation, ensuring your strength matches your lighter frame.
                </p>
              </div>

              <div className="bg-navy p-8 rounded-[20px] border border-navy-light">
                <div className="text-orange-burnt font-sans font-bold uppercase tracking-widest text-sm mb-4">Phase 3: Weeks 9–12</div>
                <h3 className="font-display text-[24px] uppercase text-white mb-4">Metabolic Independence & Habit Lock</h3>
                <p className="font-sans text-[16px] text-off-white/80 leading-[1.6]">
                  Transition into long-term behavioral autonomy. We optimize your weekly nutrition templates to secure lean muscle tissue permanently, setting up the exact movement patterns required to sustain your health when your medical dosages shift.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="font-sans text-sm text-off-white/50 italic">
                *Weekly billing intervals with a transparent, mutually fair cancellation policy apply.
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
