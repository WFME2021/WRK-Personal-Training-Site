import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Dna, ChevronRight } from 'lucide-react';

export const ProteinTargeter: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [targetWeight, setTargetWeight] = useState(70);
  const [activity, setActivity] = useState('moderate');
  const [showResults, setShowResults] = useState(false);

  const lowBound = Math.round(targetWeight * 1.2);
  const highBound = Math.round(targetWeight * 1.6);
  const mealAllocation = Math.round(lowBound / 4);

  return (
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-32">
      <SeoHead 
        title="GLP-1 Muscle Loss Calculator | WRK"
        description="Calculate your exact daily protein thresholds required to prevent lean muscle mass wasting during rapid fat loss with GLP-1 medications."
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-[13px] font-medium text-[#2C3539]/60 mb-8 max-w-4xl mx-auto">
          <Link to="/" className="hover:text-[#8A9A86] transition-colors">Home</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to="/tools" className="hover:text-[#8A9A86] transition-colors">Tools</Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-[#2C3539]">Muscle Loss Calculator</span>
        </nav>

        {/* Page Header */}
        <header className="mb-16 max-w-4xl mx-auto">
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            GLP-1 Muscle Loss Calculator
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/70 max-w-3xl">
            When navigating rapid body mass adjustment via prescribed clinical pathways, monitoring your nutritional density becomes a critical priority. Use this evidence-based calculator to establish a position-specific, daily macro threshold to protect active skeletal muscle while total body weight scales down.
          </p>
        </header>

        {/* Interactive Calculator Container (Bento Card) */}
        <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md border border-neutral-200 rounded-3xl p-8 md:p-12 shadow-sm mb-20 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row gap-12">
            
            <div className="flex-1 space-y-10">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center shrink-0">
                  <Dna size={24} />
                </div>
                <h2 className="font-serif text-[26px] text-[#2C3539]">Define Your Parameters</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-[15px] font-medium text-[#2C3539]/80">Target / Goal Body Weight</label>
                    <span className="text-[#8A9A86] font-bold text-[22px]">{targetWeight} kg</span>
                  </div>
                  <input 
                    type="range" 
                    min="45" 
                    max="150" 
                    value={targetWeight} 
                    onChange={(e) => { setTargetWeight(Number(e.target.value)); setShowResults(false); }} 
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#8A9A86]" 
                  />
                  <div className="flex justify-between text-[11px] text-[#2C3539]/50 font-bold uppercase tracking-wider mt-2">
                    <span>45 kg</span>
                    <span>150 kg</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[15px] font-medium text-[#2C3539]/80 mb-3">Intended Weekly Resistance Loading</label>
                  <div className="relative">
                    <select 
                      value={activity} 
                      onChange={(e) => { setActivity(e.target.value); setShowResults(false); }} 
                      className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 py-4 rounded-xl appearance-none focus:outline-none focus:border-[#8A9A86] transition-colors cursor-pointer text-[15px]"
                    >
                      <option value="low">Minimal resistance training / Transition phase</option>
                      <option value="moderate">Committing to 2x 30-minute structured resistance blocks weekly</option>
                      <option value="high">Committing to 3x or more progressive overloaded strength tracks weekly</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-neutral-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setShowResults(true)}
                className="w-full h-14 bg-[#8A9A86] hover:bg-[#768672] text-white rounded-xl font-medium transition-colors text-[16px] shadow-sm"
              >
                Calculate Muscle Defense Target
              </button>
            </div>

            {/* Output Panel */}
            <div className={`flex-1 bg-[#FAFAF9] rounded-2xl border border-neutral-200 p-8 flex flex-col justify-center transition-all duration-500 ${showResults ? 'opacity-100 translate-y-0' : 'opacity-50 blur-sm pointer-events-none'}`}>
              <div className="text-center mb-8">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#2C3539]/50 mb-4">Suggested Daily Retention Range</span>
                <div className="font-serif text-[48px] md:text-[56px] text-[#8A9A86] leading-none mb-2">
                  {lowBound}g &ndash; {highBound}g
                </div>
                <span className="text-[15px] font-medium text-[#2C3539]/60">Total Daily Protein</span>
              </div>
              
              <div className="border-t border-neutral-200 pt-8 space-y-6 text-[14px] leading-relaxed text-[#2C3539]/80">
                <p>
                  <strong className="text-[#2C3539] font-medium">The Position Matrix:</strong> Your inputs suggest an estimated daily baseline target of <span className="font-bold text-[#8A9A86]">{lowBound}g</span> to support basic lean tissue repair.
                </p>
                <p>
                  <strong className="text-[#2C3539] font-medium">Meal Allocation:</strong> To optimize synthesis while navigating severe appetite muting, dividing this total into smaller, frequent exposures is beneficial. Aim for roughly <span className="font-bold text-[#8A9A86]">{mealAllocation}g of protein</span> across 4 small intakes.
                </p>
              </div>
            </div>

          </div>
          
          <div className="text-center mt-12 border-t border-neutral-200 pt-6">
            <p className="text-[12px] text-[#2C3539]/50 max-w-2xl mx-auto leading-relaxed">
              Calculations suggest universal sports-science baseline benchmarks and are not clinical medical prescriptions. Always verify your daily macro structures with your consulting medical practitioner.
            </p>
          </div>
        </div>

        {/* Mobile-Responsive Accordion Sections */}
        <div className="max-w-4xl mx-auto space-y-4 mb-20">
          <details className="group bg-white border border-neutral-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-serif text-[20px] md:text-[22px] text-[#2C3539]">
              Why protein tracking matters during rapid fat loss
              <span className="ml-6 flex-shrink-0 transition duration-300 group-open:-rotate-180">
                <svg className="w-6 h-6 text-[#8A9A86]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-6 pt-0 text-[15px] leading-relaxed text-[#2C3539]/70 space-y-4 border-t border-neutral-100 mt-2">
              <p>
                When you undergo rapid weight reduction—whether through GLP-1 receptor agonists or lifestyle intervention—your body enters a profound caloric deficit. In this state, the body does not exclusively burn adipose tissue (fat). Without a sufficient stimulus and adequate building blocks, it will readily break down active skeletal muscle and bone matrix to meet its energy and amino acid demands.
              </p>
              <p>
                Tracking your protein intake is not about body-building; it is about preservation. Protecting your lean mass ensures that your resting metabolic rate remains stable, your physical strength is maintained, and your structural integrity is defended against the fatigue that often accompanies severe caloric restriction.
              </p>
            </div>
          </details>

          <details className="group bg-white border border-neutral-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-serif text-[20px] md:text-[22px] text-[#2C3539]">
              How clinical weight loss interventions alter nitrogen balance
              <span className="ml-6 flex-shrink-0 transition duration-300 group-open:-rotate-180">
                <svg className="w-6 h-6 text-[#8A9A86]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-6 pt-0 text-[15px] leading-relaxed text-[#2C3539]/70 space-y-4 border-t border-neutral-100 mt-2">
              <p>
                Clinical interventions inherently suppress appetite and slow gastric emptying, severely reducing the total volume of food you can consume. This shift immediately puts your body into a negative nitrogen balance, a state where protein breakdown exceeds protein synthesis.
              </p>
              <p>
                To counteract this, nutrition must pivot from volume-based eating to density-based eating. You must introduce high-quality, bioavailable protein sources in smaller, more frequent doses to force the body back into a positive balance. This prevents the systemic fatigue and muscle wasting commonly associated with untreated rapid weight loss, ensuring the weight you lose is fat, not functional tissue.
              </p>
            </div>
          </details>

          <details className="group bg-white border border-neutral-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-serif text-[20px] md:text-[22px] text-[#2C3539]">
              Evidence-based protein guidelines for lean mass defense
              <span className="ml-6 flex-shrink-0 transition duration-300 group-open:-rotate-180">
                <svg className="w-6 h-6 text-[#8A9A86]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-6 pt-0 text-[15px] leading-relaxed text-[#2C3539]/70 space-y-4 border-t border-neutral-100 mt-2">
              <p>
                Current sports science and clinical nutrition guidelines recommend establishing a protein target based on your <em>goal</em> body weight, rather than your current weight, to avoid prescribing an unachievable volume of food. The standard therapeutic threshold ranges from 1.2g to 1.6g of protein per kilogram of your target weight.
              </p>
              <p>
                Achieving this requires strategic structuring. Given the early satiety experienced during treatment, breaking your daily target into four distinct intakes utilizing clear whey isolates, collagen peptides, and lean animal proteins is the most effective way to protect your physical baseline without triggering gastrointestinal distress.
              </p>
            </div>
          </details>
        </div>

      </div>
    </div>
  );
};
