import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Activity, Droplets, ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-32">
      <SeoHead
        title="About WRK | Medical Weight Loss & Muscle Preservation Fitness Coaching"
        description="Discover the philosophy behind WRK. We bridge the gap between medical weight loss interventions and real-world exercise, protecting muscle mass and metabolic health."
      />

      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Page Header */}
        <header className="text-center mb-20">
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            Beyond the <span className="wrk-highlight">Prescription</span>
          </h1>
          <h2 className="font-serif text-[24px] md:text-[28px] text-[#2C3539]/80 mb-6">
            Medicine opens the door. WRK maps the way forward.
          </h2>
        </header>

        {/* Content Body */}
        <div className="space-y-16 md:space-y-24">
          
          <section className="space-y-6 text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/80">
            <p>
              GLP-1 medications have changed what is possible for people struggling with weight management.
            </p>
            <p>
              But losing weight is only part of the journey.
            </p>
            <p>
              When bodyweight changes, your strength, muscle mass, fitness, nutrition and daily habits matter too. That is where WRK comes in.
            </p>
            <p>
              I founded WRK Personal Training to help people using GLP-1 medications navigate the fitness side of weight loss - with intelligent training, practical nutrition support and coaching built around where you are now.
            </p>
            <div className="pt-2 pb-2 space-y-1 font-medium text-[#2C3539]">
              <p>Not punishment.</p>
              <p>Not extreme diets.</p>
              <p>Not hours in the gym.</p>
            </div>
            <p className="font-serif text-[22px] md:text-[24px] text-[#2C3539] mt-8">
              Just a smarter way to build a stronger, fitter body while you lose weight.
            </p>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-neutral-200" />

          <section className="flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start">
            <div className="w-full max-w-[320px] md:max-w-md md:w-5/12 flex-shrink-0 mx-auto md:mx-0">
              <div className="aspect-[4/5] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-neutral-100 wrk-photo-container">
                <div className="wrk-photo-overlay"></div>
                <img 
                  src="https://i.postimg.cc/ZYHDT3kr/Screen-Shot-2026-06-23-at-2-27-18-PM.png"
                  alt="Hayden, Founder and Coach of WRK Personal Training"
                  className="w-full h-full wrk-photo"
                />
              </div>
            </div>

            <div className="w-full md:w-7/12 space-y-6">
              <h3 className="font-serif text-[32px] md:text-[40px] leading-tight text-[#2C3539] text-center md:text-left mb-2 md:mb-8">
                Meet Your Coach
              </h3>
              <div className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/80 space-y-6">
                <p>
                  I'm Hayden.
                </p>
                <p>
                  I've spent 20 years coaching people who want to lose weight, get stronger and improve their health - without turning fitness into another full-time job.
                </p>
                <p>
                  As GLP-1 medications became increasingly common, I saw a gap in the conversation.
                </p>
                <p>
                  People were getting medical support for weight loss, but often had little guidance around what to do alongside it.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#2C3539]/90">
                  <li>How should you train?</li>
                  <li>How do you prioritise muscle?</li>
                  <li>What happens when your appetite changes?</li>
                  <li>How do you adapt when energy and recovery fluctuate?</li>
                </ul>
                <div className="pt-2 space-y-2">
                  <p>
                    And perhaps most importantly:
                  </p>
                  <p className="font-medium text-[#2C3539]">
                    How do you build the habits and physical capacity to support your results long term?
                  </p>
                </div>
                <p>
                  That's the problem WRK is built to solve.
                </p>
                <p>
                  You don't need another generic fat-loss programme.
                </p>
                <p className="font-serif text-[22px] md:text-[24px] text-[#2C3539] mt-8 text-center md:text-left">
                  You need coaching that understands the unique challenges of training while using a GLP-1.
                </p>
              </div>
            </div>
          </section>

          <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] py-24 px-4 md:px-8 bg-[#2C3539] overflow-hidden my-16">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://i.postimg.cc/br2bFDYH/pexels-rachel-claire-7276646.jpg" 
                alt="Forest adventure background"
                className="w-full h-full object-cover object-center opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#2C3539]/90 via-[#2C3539]/60 to-[#2C3539]/90"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <h3 className="font-serif text-[32px] md:text-[40px] leading-tight text-white mb-8">
                The WRK Philosophy
              </h3>
              <p className="text-[16px] md:text-[18px] leading-relaxed text-white/80 mb-10">
                Every program, app interaction, and personal training session I design is anchored in three core principles:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="backdrop-blur-md bg-white/5 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] p-8 rounded-3xl flex flex-col transition-transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center mb-6 shrink-0 border border-white/10">
                    <Shield size={24} />
                  </div>
                  <h4 className="font-serif text-[20px] text-white mb-4">Muscular Defence First</h4>
                  <p className="text-[15px] leading-relaxed text-white/70">
                    Rapid weight loss without targeted resistance training can compromise your strength and long-term metabolic health. We focus heavily on protective, efficient movement patterns to ensure that the weight you lose is fat, while the muscle that keeps you strong and vibrant is preserved.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] p-8 rounded-3xl flex flex-col transition-transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center mb-6 shrink-0 border border-white/10">
                    <Activity size={24} />
                  </div>
                  <h4 className="font-serif text-[20px] text-white mb-4">Compassionate Calibration</h4>
                  <p className="text-[15px] leading-relaxed text-white/70">
                    Your body is changing rapidly, and your energy levels or nutritional needs might vary from week to week. My coaching adapts to where you are today, shifting away from rigid perfectionism toward intuitive, specialised guidance.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] p-8 rounded-3xl flex flex-col transition-transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center mb-6 shrink-0 border border-white/10">
                    <Droplets size={24} />
                  </div>
                  <h4 className="font-serif text-[20px] text-white mb-4">Real-World Integration</h4>
                  <p className="text-[15px] leading-relaxed text-white/70">
                    The goal isn’t to make fitness your entire life; it’s to make your fitness support the life you want to live. We work together on foundational habits - like protein tracking, hydration protocols, and simple 30-minute routines - that stick with you long after your initial 12-week track.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-neutral-200" />

          <section className="space-y-8">
            <h3 className="font-serif text-[32px] md:text-[40px] leading-tight text-[#2C3539]">
              You Don't Have to Do This Alone
            </h3>
            <div className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/80 space-y-6">
              <p>
                You don't need to figure out training, nutrition and lifestyle changes on your own.
              </p>
              <p>
                Whether we work together in person or through the WRK Training App, you'll have a coach helping you make sense of the fitness side of your GLP-1 journey.
              </p>
              <p>
                The goal isn't simply to weigh less.
              </p>
              <p>
                It's to become stronger, fitter and more capable - and build habits that support the life you want to live.
              </p>
              <p className="font-serif text-[22px] md:text-[24px] text-[#2C3539] mt-8">
                Your medication is one part of the journey. What you do alongside it matters too.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link 
                to="/programs"
                className="flex items-center justify-center gap-2 bg-[#8A9A86] hover:bg-[#768672] text-white px-8 py-4 rounded-xl font-medium transition-colors text-[16px]"
              >
                Explore the 12-Week Coaching Tracks
                <ArrowRight size={18} />
              </Link>
              <Link 
                to="/contact"
                className="flex items-center justify-center bg-white border border-neutral-200 hover:border-[#8A9A86] text-[#2C3539] px-8 py-4 rounded-xl font-medium transition-colors text-[16px]"
              >
                Book a Private Consultation
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
