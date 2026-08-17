import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Dna, Calculator, Droplet, ArrowRight, LayoutGrid } from 'lucide-react';

export const ToolsIndex: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-12">
      <SeoHead
        title="GLP-1 Tools & Calculators | WRK Personal Training"
        description="Free tools including our GLP-1 Macro Calculator and GLP-1 Protein Calculator to help you navigate your GLP-1 fitness journey."
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Page Header */}
        <header className="text-center mb-20 max-w-4xl mx-auto">
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            GLP-1 <span className="wrk-highlight">Tools</span> & Calculators
          </h1>
          <h2 className="font-serif text-[24px] md:text-[28px] text-[#2C3539]/80 mb-6">
            Simple tools to help you make better decisions around your GLP-1 journey.
          </h2>
          <div className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/80 space-y-6">
            <p>
              When your appetite, activity and routine change, knowing where to start can be difficult.
            </p>
            <p>
              WRK's free GLP-1 tools are designed to give you useful starting points for some of the practical questions that come with weight loss — from protein and hydration to energy needs.
            </p>
            <p className="font-medium text-[#2C3539]">
              Use them as a guide, not a prescription.
            </p>
          </div>
        </header>

        <div className="mb-16 max-w-5xl mx-auto rounded-3xl shadow-sm border border-neutral-200 wrk-photo-container">
          <div className="wrk-photo-overlay"></div>
          <img 
            src="https://i.postimg.cc/J4Wmf5y2/pexels-truckrun-19373190.jpg" 
            alt="Tracking progress with the GLP-1 Macro Calculator and GLP-1 Protein Calculator" 
            className="w-full h-auto aspect-[16/9] md:aspect-[2.5/1] wrk-photo"
          />
        </div>

                        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          
          {/* Tool 1: Protein Targeter */}
          <div className="bg-white border border-neutral-200 p-8 md:p-10 rounded-3xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8 shrink-0">
              <Dna size={28} />
            </div>
            
            <div className="mb-8 flex-grow">
              <h3 className="font-serif text-[26px] md:text-[30px] text-[#2C3539] leading-tight mb-2">
                Protein Target Calculator
              </h3>
              <p className="font-serif text-[18px] text-[#2C3539]/80 mb-6">How much protein do you need?</p>
              
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/80 mb-6">
                Protein becomes an important consideration when you're eating less and working to maintain strength during weight loss.
              </p>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/80">
                Use the calculator to estimate a daily protein target based on your individual details and goals.
              </p>
            </div>
            
            <div className="mt-auto">
              <div className="bg-[#FAFAF9] rounded-2xl p-6 border border-neutral-200 mb-6">
                <p className="text-[13px] font-bold uppercase tracking-widest text-[#8A9A86] mb-2">Useful for:</p>
                <div className="flex flex-wrap gap-2 text-[14px] text-[#2C3539]/80">
                  <span>Protein intake</span>
                  <span className="text-neutral-300">•</span>
                  <span>Strength training</span>
                  <span className="text-neutral-300">•</span>
                  <span>Muscle preservation</span>
                  <span className="text-neutral-300">•</span>
                  <span>Weight loss</span>
                </div>
              </div>
              <Link 
                to="/tools/protein-calculator"
                className="flex items-center justify-center w-full bg-[#8A9A86] hover:bg-[#768672] text-white h-14 rounded-xl font-medium transition-colors text-[16px]"
              >
                Calculate Your Protein Target <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Tool 2: Hydration Calculator */}
          <div className="bg-white border border-neutral-200 p-8 md:p-10 rounded-3xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8 shrink-0">
              <Droplet size={28} />
            </div>
            
            <div className="mb-8 flex-grow">
              <h3 className="font-serif text-[26px] md:text-[30px] text-[#2C3539] leading-tight mb-2">
                Hydration & Electrolyte Guide
              </h3>
              <p className="font-serif text-[18px] text-[#2C3539]/80 mb-6">Are you drinking enough?</p>
              
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/80 mb-6">
                Hydration is easy to overlook when your appetite and daily routine change.
              </p>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/80">
                Use our hydration tool to estimate your daily fluid needs and explore when electrolytes may be relevant based on your activity and circumstances.
              </p>
            </div>
            
            <div className="mt-auto">
              <div className="bg-[#FAFAF9] rounded-2xl p-6 border border-neutral-200 mb-6">
                <p className="text-[13px] font-bold uppercase tracking-widest text-[#8A9A86] mb-2">Useful for:</p>
                <div className="flex flex-wrap gap-2 text-[14px] text-[#2C3539]/80">
                  <span>Daily hydration</span>
                  <span className="text-neutral-300">•</span>
                  <span>Exercise</span>
                  <span className="text-neutral-300">•</span>
                  <span>Training</span>
                  <span className="text-neutral-300">•</span>
                  <span>Recovery</span>
                </div>
              </div>
              <Link 
                to="/tools/hydration-calculator"
                className="flex items-center justify-center w-full bg-[#8A9A86] hover:bg-[#768672] text-white h-14 rounded-xl font-medium transition-colors text-[16px]"
              >
                Check Your Hydration Needs <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Tool 3: GLP-1 Calorie & Macro Calculator */}
          <div className="bg-white border border-neutral-200 p-8 md:p-10 rounded-3xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8 shrink-0">
              <Calculator size={28} />
            </div>
            
            <div className="mb-8 flex-grow">
              <h3 className="font-serif text-[26px] md:text-[30px] text-[#2C3539] leading-tight mb-2">
                GLP-1 Calorie & Macro Calculator
              </h3>
              <p className="font-serif text-[18px] text-[#2C3539]/80 mb-6">What are your estimated daily energy needs?</p>
              
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/80 mb-6">
                Your total daily energy expenditure (TDEE) is an estimate of how much energy your body uses each day based on factors such as your body size, activity and lifestyle.
              </p>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/80">
                Use the calculator to establish a starting estimate and better understand the numbers behind your nutrition and weight-loss goals.
              </p>
            </div>
            
            <div className="mt-auto">
              <div className="bg-[#FAFAF9] rounded-2xl p-6 border border-neutral-200 mb-6">
                <p className="text-[13px] font-bold uppercase tracking-widest text-[#8A9A86] mb-2">Useful for:</p>
                <div className="flex flex-wrap gap-2 text-[14px] text-[#2C3539]/80">
                  <span>Energy needs</span>
                  <span className="text-neutral-300">•</span>
                  <span>Weight management</span>
                  <span className="text-neutral-300">•</span>
                  <span>Nutrition planning</span>
                  <span className="text-neutral-300">•</span>
                  <span>Activity</span>
                </div>
              </div>
              <Link 
                to="/tools/tdee-calculator"
                className="flex items-center justify-center w-full bg-[#8A9A86] hover:bg-[#768672] text-white h-14 rounded-xl font-medium transition-colors text-[16px]"
              >
                Calculate Your TDEE <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-white border border-neutral-200 p-10 md:p-14 rounded-3xl shadow-sm mb-24 flex flex-col md:flex-row items-center gap-10">
          <div className="w-16 h-16 bg-[#FAFAF9] text-[#2C3539]/40 border border-neutral-200 rounded-full flex items-center justify-center shrink-0">
            <LayoutGrid size={32} />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-serif text-[#2C3539] mb-4 leading-tight">
              More Tools Coming Soon
            </h2>
            <p className="text-[#2C3539]/80 text-[16px] md:text-[18px] leading-relaxed mb-6">
              We're building a growing library of practical tools and resources to help you navigate the fitness side of your GLP-1 journey.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-medium text-[#2C3539]">
              <span>Training</span>
              <span className="text-[#8A9A86]">•</span>
              <span>Nutrition</span>
              <span className="text-[#8A9A86]">•</span>
              <span>Recovery</span>
              <span className="text-[#8A9A86]">•</span>
              <span>Progress Tracking</span>
              <span className="text-[#8A9A86]">•</span>
              <span>Strength</span>
              <span className="text-[#8A9A86]">•</span>
              <span>Lifestyle</span>
            </div>
          </div>
        </div>

        {/* Bottom Call-to-Action */}
        <div className="bg-[#1A1C1D] text-center rounded-3xl shadow-sm p-10 md:p-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Tools Are a Starting Point.<br className="hidden md:block"/> Coaching Makes Them Personal.
          </h2>
          <div className="text-neutral-400 mb-10 max-w-2xl mx-auto text-[16px] md:text-[18px] leading-relaxed space-y-4">
            <p>A calculator can give you a number.</p>
            <p>It can't tell you how that number fits into your life.</p>
            <p>
              WRK coaching combines personalised training, practical nutrition support and ongoing accountability to help you turn information into action.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/services">
              <button className="bg-[#8A9A86] hover:bg-[#768672] text-white px-8 py-4 rounded-xl font-medium transition-colors text-[16px] w-full sm:w-auto">
                Explore the 12-Week Programmes
              </button>
            </Link>
            <Link to="/assessment">
              <button className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-4 rounded-xl font-medium transition-colors text-[16px] w-full sm:w-auto">
                Take the Free GLP-1 Assessment
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
