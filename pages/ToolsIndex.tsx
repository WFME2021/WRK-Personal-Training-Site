import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Dna, Calculator, Droplet } from 'lucide-react';
import { Button } from '../components/Button';

export const ToolsIndex: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead 
        title="Medical Weight Loss Tools & Calculators | WRK"
        description="Evidence-based calculators and tools for GLP-1 therapy and prescription GLP-1 support. Calculate TDEE, protein targets, and hydration needs."
      />

      <div className="flex flex-col w-full min-h-screen bg-neutral-900 text-neutral-100 items-center overflow-x-hidden pt-[80px] md:pt-[100px] pb-24">
        <div className="max-w-[1000px] w-full px-5 md:px-12 mx-auto">
          
          <div className="mb-12 text-center md:text-left">
            <h1 className="font-serif text-[40px] md:text-[56px] leading-[1.15] text-neutral-100 mb-4">
              Medical Weight Loss Tools
            </h1>
            <p className="font-sans text-[16px] md:text-[18px] text-neutral-300 leading-relaxed max-w-2xl">
              Specialized clinical tracking and calculation tools designed to protect your physical baseline while navigating rapid mass reduction pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            
            {/* Card 1: Protein Targeter */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 flex flex-col hover:border-teal-500/50 transition-colors shadow-lg group relative overflow-hidden">
              <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-6 shrink-0 group-hover:scale-110 transition-transform duration-500">
                <Dna className="text-teal-400" size={24} />
              </div>
              <h2 className="font-serif text-[22px] text-neutral-100 mb-3">Muscle-Preservation Protein Targeter</h2>
              <p className="font-sans text-[15px] text-neutral-400 leading-relaxed mb-8 flex-grow">
                Calculate your exact daily protein threshold to protect lean muscle mass and defend bone density during rapid fat loss phase transitions.
              </p>
              <Link to="/tools/protein-targeter">
                <Button variant="outline" className="w-full justify-center group-hover:bg-teal-500/10 group-hover:text-teal-400 group-hover:border-teal-500/30">
                  Launch Tool &rarr;
                </Button>
              </Link>
            </div>

            {/* Card 2: TDEE Calculator */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 flex flex-col hover:border-teal-500/50 transition-colors shadow-lg group relative overflow-hidden">
              <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-6 shrink-0 group-hover:scale-110 transition-transform duration-500">
                <Calculator className="text-teal-400" size={24} />
              </div>
              <h2 className="font-serif text-[22px] text-neutral-100 mb-3">Medical TDEE & Metabolic Calculator</h2>
              <p className="font-sans text-[15px] text-neutral-400 leading-relaxed mb-8 flex-grow">
                Establish your adjusted Total Daily Energy Expenditure. Features clinical baseline modifiers specifically optimized for GLP-1 therapy and medical weight loss tracking.
              </p>
              <Link to="/tools/tdee-calculator">
                <Button variant="outline" className="w-full justify-center group-hover:bg-teal-500/10 group-hover:text-teal-400 group-hover:border-teal-500/30">
                  Launch Tool &rarr;
                </Button>
              </Link>
            </div>

            {/* Card 3: Hydration */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 flex flex-col hover:border-teal-500/50 transition-colors shadow-lg group relative overflow-hidden">
              <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-6 shrink-0 group-hover:scale-110 transition-transform duration-500">
                <Droplet className="text-teal-400" size={24} />
              </div>
              <h2 className="font-serif text-[22px] text-neutral-100 mb-3">Hydration & Electrolyte Optimizer</h2>
              <p className="font-sans text-[15px] text-neutral-400 leading-relaxed mb-8 flex-grow">
                Manage gastrointestinal fluid shifts and counter suppressed thirst signals by calculating your precise fluid volumes and mineral targets.
              </p>
              <Link to="/tools/hydration-calculator">
                <Button variant="outline" className="w-full justify-center group-hover:bg-teal-500/10 group-hover:text-teal-400 group-hover:border-teal-500/30">
                  Launch Tool &rarr;
                </Button>
              </Link>
            </div>

          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-[11px] text-neutral-500 text-center leading-relaxed">
              <strong>Disclaimer:</strong> These tools provide general operational metrics based on evidence-based sports science and clinical guidelines. They do not substitute for personalized medical advice or clinical prescriptions. Always consult your healthcare team.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};
