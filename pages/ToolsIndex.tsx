import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Dna, Droplet, Calculator, ArrowRight, Sparkles } from 'lucide-react';

export const ToolsIndex: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const comingSoonTools = [
    "Strength Benchmarks",
    "Injection-Day Fatigue Pacing",
    "Satiety Index Frameworks",
    "Lean Mass Retention Scoring",
    "Weaning Habit Blueprints"
  ];

  return (
    <>
      <SeoHead
        title="GLP-1 Tools & Calculators | Protein, Hydration & TDEE | WRK"
        description="Free, evidence-based GLP-1 Tools & Calculators: calculate your daily protein targets, estimate hydration and electrolyte needs, and determine your baseline TDEE."
      />
      <div className="bg-canvas text-charcoal min-h-screen font-sans selection:bg-spruce-800 selection:text-sand-50">
        
        {/* 1. Hero Header */}
        <section className="bg-canvas pt-14 pb-16 px-6 max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-sans text-spruce-800 font-semibold mb-4">
            PRACTICAL RESOURCES · EVIDENCE-BASED UTILITY
          </p>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight max-w-3xl mx-auto mb-6 leading-tight">
            GLP-1 Tools & <span className="italic text-spruce-800">Calculators.</span>
          </h1>
          
          <p className="text-charcoal/80 max-w-2xl mx-auto text-base sm:text-lg mb-6 leading-relaxed">
            Simple, objective starting points to help you safeguard lean muscle, resting metabolic rate, and physical capability alongside medical weight management while your appetite and routine change.
          </p>

          <div className="inline-block bg-sand-100/80 border border-charcoal/10 rounded-full px-4 py-1.5 text-xs text-charcoal/70 font-medium">
            Note: These tools provide evidence-based starting estimates, not medical prescriptions.
          </div>
        </section>

        {/* 2. The 3 Core Calculators */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Protein Target Calculator */}
            <div className="bg-white rounded-2xl p-8 border border-charcoal/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] uppercase tracking-wider text-spruce-800 font-semibold bg-sand-100 px-2.5 py-1 rounded">
                    NUTRITION & MUSCLE
                  </span>
                  <div className="w-8 h-8 rounded-full bg-sand-100 text-spruce-800 flex items-center justify-center">
                    <Dna size={16} />
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-charcoal mb-1">
                  Protein Target Calculator
                </h3>
                <span className="text-xs text-charcoal/60 italic mb-4 block">
                  How much protein do you actually need?
                </span>

                <p className="text-sm text-charcoal/70 leading-relaxed mb-6">
                  Calculate your daily baseline to safeguard lean tissue and metabolic health while eating in an energy deficit.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["Protein Intake", "Muscle Retention", "Low-Appetite Targets"].map((tag, i) => (
                    <span
                      key={i}
                      className="bg-sand-50 text-charcoal/70 border border-charcoal/5 px-2.5 py-1 rounded-full text-[11px] font-medium inline-block"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/tools/protein-calculator"
                className="bg-spruce-800 text-sand-50 hover:bg-spruce-900 w-full py-3 rounded-md text-xs uppercase tracking-wider font-semibold text-center block transition-colors shadow-sm"
              >
                Calculate Your Protein →
              </Link>
            </div>

            {/* Card 2: Hydration & Electrolytes */}
            <div className="bg-white rounded-2xl p-8 border border-charcoal/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] uppercase tracking-wider text-spruce-800 font-semibold bg-sand-100 px-2.5 py-1 rounded">
                    DIGESTION & FLUIDS
                  </span>
                  <div className="w-8 h-8 rounded-full bg-sand-100 text-spruce-800 flex items-center justify-center">
                    <Droplet size={16} />
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-charcoal mb-1">
                  Hydration & Electrolyte Guide
                </h3>
                <span className="text-xs text-charcoal/60 italic mb-4 block">
                  Are you drinking enough for delayed digestion?
                </span>

                <p className="text-sm text-charcoal/70 leading-relaxed mb-6">
                  Estimate fluid benchmarks and explore when sodium/electrolyte support is beneficial based on activity and medication.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["Daily Fluid Needs", "Electrolyte Timing", "GI Support"].map((tag, i) => (
                    <span
                      key={i}
                      className="bg-sand-50 text-charcoal/70 border border-charcoal/5 px-2.5 py-1 rounded-full text-[11px] font-medium inline-block"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/tools/hydration-calculator"
                className="bg-spruce-800 text-sand-50 hover:bg-spruce-900 w-full py-3 rounded-md text-xs uppercase tracking-wider font-semibold text-center block transition-colors shadow-sm"
              >
                Check Hydration Needs →
              </Link>
            </div>

            {/* Card 3: Energy & TDEE */}
            <div className="bg-white rounded-2xl p-8 border border-charcoal/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] uppercase tracking-wider text-spruce-800 font-semibold bg-sand-100 px-2.5 py-1 rounded">
                    METABOLIC BASELINE
                  </span>
                  <div className="w-8 h-8 rounded-full bg-sand-100 text-spruce-800 flex items-center justify-center">
                    <Calculator size={16} />
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-charcoal mb-1">
                  GLP-1 Calorie & Macro Calculator
                </h3>
                <span className="text-xs text-charcoal/60 italic mb-4 block">
                  What are your estimated daily energy needs?
                </span>

                <p className="text-sm text-charcoal/70 leading-relaxed mb-6">
                  Determine your Total Daily Energy Expenditure (TDEE) and establish sustainable nutrition parameters as your weight drops.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["TDEE Estimation", "Macro Ratios", "Energy Deficit"].map((tag, i) => (
                    <span
                      key={i}
                      className="bg-sand-50 text-charcoal/70 border border-charcoal/5 px-2.5 py-1 rounded-full text-[11px] font-medium inline-block"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/tools/tdee-calculator"
                className="bg-spruce-800 text-sand-50 hover:bg-spruce-900 w-full py-3 rounded-md text-xs uppercase tracking-wider font-semibold text-center block transition-colors shadow-sm"
              >
                Calculate Your TDEE →
              </Link>
            </div>

          </div>
        </section>

        {/* 3. Library Growth Band / Coming Soon */}
        <section className="bg-sand-100/60 py-12 px-6 border-y border-charcoal/5 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">
              CONTINUOUS DEVELOPMENT
            </span>
            <h3 className="font-serif text-2xl text-charcoal mb-3">
              More Tools & Protocols Coming Soon
            </h3>
            <p className="text-xs text-charcoal/70 mb-5">
              We are regularly expanding our interactive resource suite across:
            </p>

            <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
              {comingSoonTools.map((tool, idx) => (
                <span
                  key={idx}
                  className="bg-white border border-charcoal/10 px-3.5 py-1.5 rounded-full text-xs text-charcoal font-medium shadow-xs"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 4. The Bridge Band: Tools vs. Coaching */}
        <section className="bg-canvas py-20 px-6 max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-spruce-800 font-semibold mb-3 block">
            FROM NUMBERS TO REAL LIFE
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mb-4 tracking-tight">
            Tools Are a Starting Point. Coaching Makes Them Personal.
          </h2>
          
          <p className="text-charcoal/80 max-w-2xl mx-auto text-base mb-8 leading-relaxed">
            A calculator gives you a number. It cannot show you how that number integrates into your family dinners, your busy schedule, or your low-energy injection days. WRK combines personalized programming, nutrition strategy, and ongoing accountability to safeguard lean muscle, resting metabolic rate, and physical capability alongside medical weight management.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Link
              to="/programs"
              className="bg-spruce-800 text-sand-50 hover:bg-spruce-900 px-6 py-3.5 rounded-md font-semibold text-xs uppercase tracking-wider text-center transition-colors shadow-sm"
            >
              Explore the 12-Week Programmes
            </Link>
            <Link
              to="/assessment"
              className="border border-charcoal/20 text-charcoal hover:bg-sand-100 px-6 py-3.5 rounded-md font-semibold text-xs uppercase tracking-wider text-center transition-colors"
            >
              Take the Free GLP-1 Assessment
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};
