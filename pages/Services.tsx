import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Smartphone, Activity, MapPin } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-32">
      <SeoHead
        title="GLP-1 Muscle Preservation Programs & Services | WRK"
        description="Explore our specialized GLP-1 fitness coaching tracks. Discover our 4-week side-effect digital blueprint and our premium 12-week personalized muscle defense coaching."
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <header className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            Our Specialized Coaching Tracks
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/70">
            Evidence-based, supportive fitness frameworks built exclusively to help you defend muscle mass, navigate medication side effects, and optimize your metabolic health.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          
          {/* CARD 1 */}
          <div className="bg-white border border-neutral-200 p-10 rounded-2xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#FAFAF9] text-[#2C3539]/50 rounded-full flex items-center justify-center mb-8">
              <Smartphone size={28} />
            </div>
            <div className="mb-6">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#2C3539]/40">The 4-Week Blueprint</span>
              <h2 className="font-serif text-[26px] text-[#2C3539] mt-3">The Self-Guided Digital Toolkit</h2>
            </div>
            <p className="text-[15px] leading-relaxed text-[#2C3539]/70 mb-10 flex-grow">
              A practical, data-driven digital manual designed to counter suppressed thirst loops, manage intense food aversion, and protect your baseline metabolic rate. Includes instant access to our Fatigue Shield home video workouts and nutrition spacing grids inside the custom WRK Training App dashboard.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center justify-center w-full bg-[#FAFAF9] hover:bg-[#F0F0EE] text-[#2C3539] border border-neutral-200 px-6 py-4 rounded-xl font-medium transition-colors text-[15px]"
            >
              Get The Blueprint Toolkit — $29
            </a>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border-2 border-[#8A9A86]/40 p-10 rounded-2xl flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#8A9A86] text-white text-[10px] font-bold uppercase tracking-wider py-1.5 px-4 rounded-bl-xl">
              Most Popular
            </div>
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8">
              <Activity size={28} />
            </div>
            <div className="mb-6">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#8A9A86]">Remote Defense Coaching</span>
              <h2 className="font-serif text-[26px] text-[#2C3539] mt-3">12-Week Premium Personalized Remote Coaching</h2>
            </div>
            <p className="text-[15px] leading-relaxed text-[#2C3539]/70 mb-10 flex-grow">
              Fully remote, high-accountability lifestyle and resistance programming managed entirely within the WRK Training App. Includes weekly digital check-ins, calorie and fluid recalibrations, and custom full-body compound blueprints designed to shield your lean muscle mass from rapid wasting.
            </p>
            <Link 
              to="/assessment"
              className="inline-flex items-center justify-center w-full bg-[#8A9A86] hover:bg-[#768672] text-white px-6 py-4 rounded-xl font-medium transition-colors text-[15px]"
            >
              Apply for Remote Coaching
            </Link>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-neutral-200 p-10 rounded-2xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#FAFAF9] text-[#2C3539]/50 rounded-full flex items-center justify-center mb-8">
              <MapPin size={28} />
            </div>
            <div className="mb-6">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#2C3539]/40">Hybrid Specialist Coaching</span>
              <h2 className="font-serif text-[26px] text-[#2C3539] mt-3">12-Week Elite In-Person & Digital Hybrid Coaching</h2>
            </div>
            <p className="text-[15px] leading-relaxed text-[#2C3539]/70 mb-10 flex-grow">
              Our highest-tier support structure. Combines our full digital app tracking and communication infrastructure with one weekly 30-minute in-person muscle preservation training session at our Addington, Christchurch facility. Complete, hands-on physical accountability.
            </p>
            <Link 
              to="/assessment"
              className="inline-flex items-center justify-center w-full bg-[#2C3539] hover:bg-[#1A1F22] text-white px-6 py-4 rounded-xl font-medium transition-colors text-[15px]"
            >
              Apply for Hybrid Coaching
            </Link>
          </div>

        </div>

        {/* Contextual Sign-Up & Help Text Row */}
        <div className="bg-white/50 border border-neutral-200 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <p className="text-[15px] text-[#2C3539]/80 leading-relaxed">
            Not sure if the self-guided toolkit or 1-on-1 personalized coaching aligns with your current medication phase?{' '}
            <Link to="/contact" className="text-[#8A9A86] font-medium hover:underline underline-offset-4">
              Click here to message our specialist support team directly
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
};


