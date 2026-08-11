import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Activity, Target } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export const Home: React.FC = () => {
  return (
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white">
      <SeoHead
        title="WRK | GLP-1 Muscle Preservation & Medical Weight Loss Coaching"
        description="Bridge the gap between your weight loss medication and real-world fitness. Protect your metabolism, manage side effects, and defend muscle mass in Christchurch."
      />

      {/* Micro-trust banner */}
      <div className="w-full bg-[#FAFAF9] border-b border-neutral-200 py-3 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center space-x-6 md:space-x-12 text-[11px] uppercase tracking-[0.15em] text-[#2C3539]/60 font-semibold">
          <span>GLP-1 Specialized</span>
          <span className="hidden md:inline text-[#8A9A86]">&bull;</span>
          <span>Muscle Preservation Focus</span>
          <span className="hidden md:inline text-[#8A9A86]">&bull;</span>
          <span>Data-Driven Tracking</span>
          <span className="hidden md:inline text-[#8A9A86]">&bull;</span>
          <span>GP Referral Network</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-28 md:pt-36 md:pb-40 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="font-serif text-[42px] md:text-[64px] leading-[1.1] text-[#2C3539] mb-6 max-w-4xl tracking-tight">
          Medicine managed your weight.<br className="hidden md:block" /> Let's reclaim your movement.
        </h1>
        <p className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/70 max-w-2xl mb-12">
          A data-driven, supportive approach to protecting your metabolism and muscle tone, so you can run after the kids, enjoy the outdoors, and live completely unlimited by your physical fitness.
        </p>
        <Link
          to="/assessment"
          className="inline-flex items-center justify-center bg-[#2C3539] hover:bg-[#1A1F22] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg min-h-[48px] text-[15px]"
        >
          Take the Free 2-Minute Weight Loss Safety Assessment
        </Link>
      </section>

      {/* The "Why" System Grid */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur-md border border-neutral-200/60 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8">
              <ShieldCheck size={28} />
            </div>
            <h3 className="font-serif text-[24px] text-[#2C3539] mb-4">Reclaiming Your Natural Energy</h3>
            <p className="text-[16px] md:text-[17px] leading-relaxed text-[#2C3539]/80">
              Combat medication fatigue and restore your daily vitality. We focus on fueling your body effectively so you have the sustained, all-day energy to enjoy the outdoors and live actively without constantly feeling drained.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur-md border border-neutral-200/60 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8">
              <Activity size={28} />
            </div>
            <h3 className="font-serif text-[24px] text-[#2C3539] mb-4">Limitless Real-World Movement</h3>
            <p className="text-[16px] md:text-[17px] leading-relaxed text-[#2C3539]/80">
              Build the strength and mobility that translates into real life. Whether it's playing on the floor with your grandkids, working in the backyard, or protecting your joints, we train your body for effortless daily agility.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/80 backdrop-blur-md border border-neutral-200/60 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8">
              <Target size={28} />
            </div>
            <h3 className="font-serif text-[24px] text-[#2C3539] mb-4">Independence Beyond the Scale</h3>
            <p className="text-[16px] md:text-[17px] leading-relaxed text-[#2C3539]/80">
              True freedom isn't just a number—it’s the lifestyle autonomy and metabolic confidence to live on your own terms. We bridge the gap between medical weight loss and long-term physical independence.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};


