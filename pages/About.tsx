import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Activity, Droplets } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead 
        title="About WRK | Medical Weight Loss & Muscle Preservation Fitness Coaching"
        description="Discover the philosophy behind WRK. We bridge the gap between medical weight loss interventions and real-world exercise, protecting muscle mass and metabolic health."
      />
      {/* We are manually appending canonical tag into the head if SeoHead doesn't already, but SeoHead uses window.location. This is requested by user. */}
      
      <div className="flex flex-col w-full min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24 px-5 md:px-12 items-center">
        <div className="max-w-[1200px] w-full mx-auto space-y-12 md:space-y-16">
          
          {/* PAGE HEADER */}
          <header className="space-y-6 max-w-[800px] mx-auto text-center">
            <h1 className="font-serif text-[40px] md:text-[56px] leading-[1.1] text-slate-900">
              Bridging the Gap in Medical Weight Loss
            </h1>
          </header>

          {/* BENTO GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            
            {/* CARD 1 (Our Core Mission - Large Spanning Card) */}
            <div className="lg:col-span-12 bg-[#F8F9FA] rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-slate-200 p-8 md:p-12 transition-all duration-300 hover:shadow-[0_4px_32px_rgba(0,0,0,0.05)]">
              <h2 className="font-serif text-[28px] md:text-[36px] text-slate-900 mb-6 leading-tight">
                Why Traditional Fitness Models Fail Clinical Patients
              </h2>
              <div className="font-sans text-[16px] md:text-[18px] text-slate-700 leading-relaxed space-y-5">
                <p>When prescription GLP-1 receptor agonists and bariatric surgeries scale down appetite, weight drops rapidly. However, the fitness industry largely ignores a critical medical reality: without targeted, protective programming, a massive portion of that lost weight comes from functional skeletal muscle tissue rather than fat. This triggers adaptive thermogenesis, driving down your metabolic rate and leaving you weak.</p>
                <p>Traditional personal training pushes clients to exhaustion. At WRK, we do the exact opposite. We coach by design, focusing on structural defense, metabolic preservation, and keeping your body strong throughout your transition phases.</p>
              </div>
            </div>

            {/* CARD 2 (The Personal Operator Statement) */}
            <div className="lg:col-span-5 bg-[#F8F9FA] rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-slate-200 p-8 md:p-10 flex flex-col transition-all duration-300 hover:shadow-[0_4px_32px_rgba(0,0,0,0.05)]">
              <h2 className="font-serif text-[24px] md:text-[28px] text-slate-900 mb-6 leading-tight">
                The Ally Between Clinical Care and Real Life
              </h2>
              <p className="font-sans text-[16px] text-slate-700 leading-relaxed mt-auto">
                I founded WRK to solve a real-world integration problem. Prescribing doctors and clinical care teams excel at managing your medication dosages and surgical recovery, but they don't have the hours to sit down and teach you how to hit elevated protein targets when you have total food aversion. They aren't there to help you space out micro-volumes of fluid to prevent dehydration headaches, or structure a low-intensity, 30-minute workout that builds strength without causing exhaustion. WRK is your clinical lifestyle partner, operating in full support of your medical directives.
              </p>
            </div>

            {/* CARD 3 (Our Three Non-Negotiable Operational Pillars) */}
            <div className="lg:col-span-7 bg-[#F8F9FA] rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-slate-200 p-8 md:p-10 transition-all duration-300 hover:shadow-[0_4px_32px_rgba(0,0,0,0.05)]">
              <h2 className="font-serif text-[24px] md:text-[28px] text-slate-900 mb-8 leading-tight">
                Our Strategic Focus Areas
              </h2>
              <div className="space-y-8">
                {/* Pillar 1 */}
                <div className="flex gap-5">
                  <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center">
                    <Shield size={22} className="text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-[17px] text-slate-900 mb-2">Pillar 1: Skeletal Muscle Defense</h3>
                    <p className="font-sans text-[15px] text-slate-700 leading-relaxed">Elevating amino acid delivery and using smart, low-intensity resistance targets to protect lean mass and preserve long-term bone mineral density.</p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="flex gap-5">
                  <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center">
                    <Activity size={22} className="text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-[17px] text-slate-900 mb-2">Pillar 2: Active Metabolic Tracking</h3>
                    <p className="font-sans text-[15px] text-slate-700 leading-relaxed">Adjusting baseline energy expenditure parameters over time to ensure fat-loss plateaus are managed safely and sustainably.</p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="flex gap-5">
                  <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center">
                    <Droplets size={22} className="text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-[17px] text-slate-900 mb-2">Pillar 3: Gastrointestinal Fluid Strategy</h3>
                    <p className="font-sans text-[15px] text-slate-700 leading-relaxed">Designing structured fluid and mineral intake routines to address suppressed thirst loops and keep your system energized.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CALL TO ACTION CONTAINER */}
          <div className="text-center mt-8 bg-[#F8F9FA] rounded-2xl p-10 md:p-16 border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col items-center">
            <Link to="/assessment" className="inline-block w-full sm:w-auto px-10 py-5 bg-teal-600 hover:bg-teal-700 text-white font-sans font-bold text-[16px] rounded-lg transition-colors shadow-lg hover:shadow-teal-600/20 mb-5">
              Take the Weight Loss Safety Assessment
            </Link>
            <p className="font-sans text-[15px] text-slate-600 max-w-[500px] mx-auto leading-relaxed">
              Analyze your current baseline parameters and secure your tailored 12-week layout map.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};
