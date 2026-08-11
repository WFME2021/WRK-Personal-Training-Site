import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Dna, Calculator, Droplet } from 'lucide-react';

export const ToolsIndex: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-32">
      <SeoHead
        title="GLP-1 Weight Loss Tracking Tools | WRK"
        description="Access our GLP-1 hydration calculator, muscle preservation protein targeter, and peptide TDEE calculator for simple, science-backed weight loss medication nutrient tracking."
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Page Header */}
        <header className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-[12px] font-bold uppercase tracking-widest text-[#8A9A86] mb-4">
            helpful guides for your daily routine
          </p>
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            Simple, Interactive GLP-1 Weight Loss Tracking Tools
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/70">
            When your appetite shifts, your body's daily requirements change too. These simple, science-backed tools are here to take the guesswork out of your routine, helping you track the essentials so you can feel your best every day.
          </p>
        </header>

        {/* 3-Tool Card Directory (Bento Grid Interface) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          
          {/* CARD 1 */}
          <div className="bg-white border border-neutral-200 p-8 md:p-10 rounded-3xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8 shrink-0">
              <Dna size={28} />
            </div>
            <div className="mb-6 flex-grow">
              <h3 className="font-serif text-[22px] md:text-[26px] text-[#2C3539] leading-tight mb-4">
                Muscle-Preservation Protein Targeter: Gentle Nutritional Goals for Steady Strength
</h3>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/70 mb-8">
                When eating less comes naturally, prioritizing the right nutrients keeps you strong. This tool calculates a gentle daily protein target to help protect your lean muscle and keep your metabolism steady.
              </p>
            </div>
            <div className="mt-auto">
              <Link 
                to="/tools/protein-targeter"
                className="flex items-center justify-center w-full bg-[#8A9A86] hover:bg-[#768672] text-white h-12 rounded-xl font-medium transition-colors text-[15px]"
              >
                Calculate Target
              </Link>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-neutral-200 p-8 md:p-10 rounded-3xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8 shrink-0">
              <Droplet size={28} />
            </div>
            <div className="mb-6 flex-grow">
              <h3 className="font-serif text-[22px] md:text-[26px] text-[#2C3539] leading-tight mb-4">
                GLP-1 Hydration & Electrolyte Optimizer: Keeping Your Body Balanced and Nourished
              </h3>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/70 mb-8">
                GLP-1 medications can naturally quieten your body’s thirst signals. Use this quick guide to make sure you’re getting enough water and essential minerals to keep your energy up and avoid mid-day fatigue.
              </p>
            </div>
            <div className="mt-auto">
              <Link 
                to="/tools/hydration-calculator"
                className="flex items-center justify-center w-full bg-[#8A9A86] hover:bg-[#768672] text-white h-12 rounded-xl font-medium transition-colors text-[15px]"
              >
                Check Hydration Needs
              </Link>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-neutral-200 p-8 md:p-10 rounded-3xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8 shrink-0">
              <Calculator size={28} />
            </div>
            <div className="mb-6 flex-grow">
              <h3 className="font-serif text-[22px] md:text-[26px] text-[#2C3539] leading-tight mb-4">
                Medication-Adjusted TDEE Calculator: Finding Your Natural Metabolic Baseline
              </h3>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/70 mb-8">
                Understanding your body's energy baseline helps you transition smoothly between different phases of your journey. This calculator helps you map out your daily energy spend with gentle accuracy.
              </p>
            </div>
            <div className="mt-auto pt-4">
              <Link 
                to="/tools/tdee-calculator"
                className="flex items-center justify-center w-full bg-[#8A9A86] hover:bg-[#768672] text-white h-12 rounded-xl font-medium transition-colors text-[15px]"
              >
                Find Baseline
              </Link>
            </div>
          </div>

        </div>

        {/* Footer / Next Step Card */}
        <div className="bg-white border border-neutral-200 p-8 md:p-14 text-center rounded-3xl shadow-sm hover:shadow-md transition-shadow max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C3539] mb-6">
            Data-Driven Metrics to Support Your Daily Wellbeing
          </h2>
          <p className="text-[#2C3539]/70 mb-10 max-w-2xl mx-auto text-[16px] md:text-[18px] leading-relaxed">
            These tools are here to support your daily habits, but the real magic happens when you pair them with a personalized plan. If you want a tailored strategy built entirely around your lifestyle, we are here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/programs">
              <button className="bg-[#8A9A86] hover:bg-[#768672] text-white px-8 py-4 rounded-xl font-medium transition-colors text-[16px] w-full sm:w-auto">
                Explore Our 12-Week Pathways
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-white border border-neutral-200 hover:border-[#8A9A86] text-[#2C3539] px-8 py-4 rounded-xl font-medium transition-colors text-[16px] w-full sm:w-auto">
                Chat with a Trainer
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};


