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
        title="Free GLP-1 Calculators: Muscle Loss, Metabolism, & Hydration | WRK"
        description="Calculate your exact daily protein thresholds, adjusted metabolic expenditure, and micro-volume fluid targets with our free, standalone GLP-1 web tools."
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Page Header */}
        <header className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            GLP-1 Daily Calibration Tools
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/70">
            Do not guess your metrics. Use our evidence-based, problem-first web tools to calculate your precise operational targets as your medication dosage changes.
          </p>
        </header>

        {/* 3-Tool Card Directory (Bento Grid Interface) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          
          {/* CARD 1 */}
          <div className="bg-white border border-neutral-200 p-10 rounded-2xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8">
              <Dna size={28} />
            </div>
            <div className="mb-6">
              <h2 className="font-serif text-[26px] text-[#2C3539] mt-3 leading-tight">GLP-1 Muscle Loss Calculator</h2>
            </div>
            <p className="text-[15px] leading-relaxed text-[#2C3539]/70 mb-10 flex-grow">
              Calculate your exact daily protein threshold to protect lean muscle mass, defend body tone, and prevent a severe metabolic slowdown during rapid fat loss.
            </p>
            <Link 
              to="/tools/protein-targeter"
              className="inline-flex items-center justify-center w-full bg-[#8A9A86] hover:bg-[#768672] text-white px-6 py-4 rounded-xl font-medium transition-colors text-[15px]"
            >
              Launch Muscle Calculator &rarr;
            </Link>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-neutral-200 p-10 rounded-2xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8">
              <Calculator size={28} />
            </div>
            <div className="mb-6">
              <h2 className="font-serif text-[26px] text-[#2C3539] mt-3 leading-tight">GLP-1 Metabolism & Calorie Calculator</h2>
            </div>
            <p className="text-[15px] leading-relaxed text-[#2C3539]/70 mb-10 flex-grow">
              Establish your clinically adjusted Total Daily Energy Expenditure. Features baseline modifiers specifically calibrated to track and manage adaptive thermogenesis on weight loss medications.
            </p>
            <Link 
              to="/tools/tdee-calculator"
              className="inline-flex items-center justify-center w-full bg-[#8A9A86] hover:bg-[#768672] text-white px-6 py-4 rounded-xl font-medium transition-colors text-[15px]"
            >
              Launch Metabolism Calculator &rarr;
            </Link>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-neutral-200 p-10 rounded-2xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8">
              <Droplet size={28} />
            </div>
            <div className="mb-6">
              <h2 className="font-serif text-[26px] text-[#2C3539] mt-3 leading-tight">GLP-1 Dehydration & Nausea Calculator</h2>
            </div>
            <p className="text-[15px] leading-relaxed text-[#2C3539]/70 mb-10 flex-grow">
              Counter suppressed brain thirst signals and manage sudden fluid volume shifts by calculating your precise micro-volume fluid spacing layouts and daily mineral targets.
            </p>
            <Link 
              to="/tools/hydration-calculator"
              className="inline-flex items-center justify-center w-full bg-[#8A9A86] hover:bg-[#768672] text-white px-6 py-4 rounded-xl font-medium transition-colors text-[15px]"
            >
              Launch Hydration Calculator &rarr;
            </Link>
          </div>

        </div>

        {/* Global Hub Disclaimer */}
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-[13px] leading-relaxed text-[#2C3539]/60">
            <strong>Disclaimer:</strong> These utility tools provide generalized operational metrics based on sports science and clinical nutrition datasets. They do not substitute for personalized medical advice or clinical prescriptions. Always coordinate your health targets with your prescribing physician.
          </p>
        </div>

      </div>
    </div>
  );
};

