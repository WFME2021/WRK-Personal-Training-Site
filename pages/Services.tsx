import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Activity, Smartphone, ShieldCheck, MapPin } from 'lucide-react';

export const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-32">
      <SeoHead
        title="GLP-1 Online Fitness Coach Pricing | WRK"
        description="Transparent pricing for our medical weight loss personal trainer packages and self-paced GLP-1 workout plans."
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Intro Section */}
        <header className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-[12px] font-bold uppercase tracking-widest text-[#8A9A86] mb-4">
            clear options to suit your lifestyle
          </p>
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            GLP-1 Fitness Coaching & Support Options
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/70 max-w-2xl mx-auto">
            Finding the right support shouldn't be complicated. Whether you are looking for close, step-by-step guidance or a simple structure to follow on your own, we offer transparent options designed to respect your pace, your lifestyle, and your budget.
          </p>
        </header>

        {/* 12-Week Coaching Intro */}
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-[32px] md:text-[40px] text-[#2C3539] mb-4">
            Guided 12-Week Coaching Partnerships
          </h2>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/70">
            Our core 1-on-1 coaching partnerships are built completely around your chosen 1-on-1 pathway. Whether your goal is active phase muscle protection or a long-term transition program, we design and deliver your customized routine with complete support, daily messaging, and supportive weekly check-ins to monitor your energy and physical well-being.
          </p>
        </div>

        {/* Services & Investment Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Online Guided Coaching */}
          <div className="bg-white border border-[#8A9A86]/30 p-8 md:p-12 rounded-3xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8 shrink-0">
              <Activity size={28} />
            </div>
            <div className="mb-6 flex-grow">
              <h3 className="font-serif text-[24px] md:text-[30px] text-[#2C3539] leading-tight mb-4">
                Online Guided Coaching
              </h3>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/70 mb-8">
                <strong className="font-medium text-[#2C3539]">The Experience:</strong> Perfect for clients who want full professional accountability, custom movement mapping via app tracking, and consistent daily guidance from the comfort of home.
              </p>
              <div className="bg-[#FAFAF9] rounded-xl p-6 border border-neutral-200 mb-8">
                <p className="text-[14px] font-bold uppercase tracking-widest text-[#8A9A86] mb-2">Pricing Highlight</p>
                <p className="text-[16px] text-[#2C3539] font-medium">$49 NZD per week</p>
              </div>
            </div>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center w-full bg-[#8A9A86] hover:bg-[#768672] text-white px-6 py-4 rounded-xl font-medium transition-colors text-[16px]"
            >
              Click here to enquire about online coaching
            </Link>
          </div>

          {/* Card 2: In-Person Guided Coaching */}
          <div className="bg-white border border-[#8A9A86]/30 p-8 md:p-12 rounded-3xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8 shrink-0">
              <MapPin size={28} />
            </div>
            <div className="mb-6 flex-grow">
              <h3 className="font-serif text-[24px] md:text-[30px] text-[#2C3539] leading-tight mb-4">
                In-Person Guided Coaching
              </h3>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/70 mb-8">
                <strong className="font-medium text-[#2C3539]">The Experience:</strong> Built for those who value hands-on instruction. This option combines all of our mobile app tracking and routine design with face-to-face coaching sessions to ensure every movement is safe, low-stress, and completely comfortable.
              </p>
              <div className="bg-[#FAFAF9] rounded-xl p-6 border border-neutral-200 mb-8">
                <p className="text-[14px] font-bold uppercase tracking-widest text-[#8A9A86] mb-2">Pricing Highlight</p>
                <p className="text-[16px] text-[#2C3539] font-medium">$89 NZD per week</p>
              </div>
            </div>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center w-full bg-[#8A9A86] hover:bg-[#768672] text-white px-6 py-4 rounded-xl font-medium transition-colors text-[16px]"
            >
              Click here to enquire about in-person coaching
            </Link>
          </div>

        </div>

        {/* Card 3: Self-Paced Digital Guide (Full width) */}
        <div className="bg-white border border-neutral-200 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow duration-300 mb-16 gap-10">
          <div className="flex-1">
            <div className="w-14 h-14 bg-[#FAFAF9] text-[#2C3539]/50 rounded-full flex items-center justify-center mb-8 shrink-0 border border-neutral-200">
              <Smartphone size={28} />
            </div>
            <h3 className="font-serif text-[24px] md:text-[30px] text-[#2C3539] leading-tight mb-4">
              The $29 Introductory GLP-1 Workout Plan & Nutrition Support Guide
            </h3>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/70 mb-0">
              Perfect for self-starters who want a clear, reliable structure to get educated and started without the ongoing commitment of weekly coaching. This digital toolkit maps out gentle, 30-minute home or gym strength routines, simple protein tracking guides, and essential hydration protocols to keep you feeling energized and balanced.
            </p>
          </div>
          <div className="md:w-[320px] flex flex-col justify-center shrink-0">
            <div className="bg-[#FAFAF9] rounded-xl p-6 border border-neutral-200 mb-8">
              <p className="text-[14px] font-bold uppercase tracking-widest text-[#8A9A86] mb-2">Pricing Highlight</p>
              <p className="text-[16px] text-[#2C3539] font-medium">$29 NZD <span className="text-[#2C3539]/60 font-normal block md:inline mt-1 md:mt-0 text-[14px]">(One-off digital download)</span></p>
            </div>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center w-full bg-white hover:bg-[#FAFAF9] text-[#2C3539] border border-neutral-200 hover:border-[#8A9A86] px-6 py-4 rounded-xl font-medium transition-colors text-[15px] text-center"
            >
              Click here to download the digital toolkit and get started
            </Link>
          </div>
        </div>

        {/* The Value Framework Card (Bento Item) */}
        <div className="bg-white border border-neutral-200 p-8 md:p-14 rounded-3xl shadow-sm mb-16 flex flex-col md:flex-row items-center gap-10">
          <div className="w-16 h-16 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center shrink-0">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-[#2C3539] mb-4 leading-tight">
              Investing in a Healthy Future
            </h2>
            <p className="text-[#2C3539]/70 text-[16px] md:text-[18px] leading-relaxed">
              Your physical well-being is the foundation for everything else in life. We focus heavily on muscle preservation and steady metabolic strength so that every dollar you invest today rewards you with a capable, vibrant body you can enjoy for decades to come.
            </p>
          </div>
        </div>

        {/* Bottom Call-to-Action Layout */}
        <div className="bg-white border border-[#8A9A86]/30 p-8 md:p-14 text-center rounded-3xl shadow-sm hover:shadow-md transition-shadow max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C3539] mb-6">
            Not Sure Which Option Feels Right for You?
          </h2>
          <p className="text-[#2C3539]/70 mb-10 max-w-2xl mx-auto text-[16px] md:text-[18px] leading-relaxed">
            Let's keep it simple. Reach out for a casual, no-pressure chat, and we can discuss your current routine and see which option matches where you are today.
          </p>
          <div className="flex justify-center">
            <Link to="/contact">
              <button className="bg-[#8A9A86] hover:bg-[#768672] text-white px-8 py-4 rounded-xl font-medium transition-colors text-[16px] w-full sm:w-auto">
                Start a Friendly Conversation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


