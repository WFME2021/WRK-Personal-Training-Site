import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Button } from '../components/Button';
import { Dna } from 'lucide-react';

export const ProteinTargeter: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [targetWeight, setTargetWeight] = useState(70); // Default 70kg target
  const [activity, setActivity] = useState('moderate');
  const [showResults, setShowResults] = useState(false);

  // Clinical positioning parameters: 1.2g (low-bound) to 1.6g (high-bound) per target kg
  const lowBound = Math.round(targetWeight * 1.2);
  const highBound = Math.round(targetWeight * 1.6);
  
  // Estimate optimal per-meal protein division across 4 mini-intakes
  const mealAllocation = Math.round(lowBound / 4);

  return (
    <>
      <SeoHead 
        title="Protein Targeter for Muscle Preservation | WRK New Zealand"
        description="Calculate your daily baseline protein thresholds during rapid medical weight loss. Protect lean tissue and combat fatigue with evidence-based targets."
      />

      <div className="flex flex-col w-full min-h-screen bg-neutral-900 text-neutral-100 items-center overflow-x-hidden pt-[80px] md:pt-[100px] pb-24">
        <div className="max-w-[800px] w-full px-5 md:px-12 mx-auto">
          
          <div className="mb-12">
            <h1 className="font-serif text-[40px] md:text-[56px] leading-[1.1] text-neutral-100 mb-6">
              Muscle-Preservation Protein Targeter
            </h1>
            <div className="font-sans text-[16px] md:text-[18px] text-neutral-300 leading-relaxed space-y-4">
              <p>
                When navigating rapid body mass adjustment via prescribed clinical pathways—such as GLP-1 medications or bariatric recovery—monitoring your nutritional density becomes a critical priority. 
              </p>
              <p>
                Because medication-induced appetite suppression or post-surgical volume limits heavily restrict how much food you can physically consume, tracking random calorie counts becomes less useful than protecting your lean tissue structure.
              </p>
              <p>
                This evidence-based <strong>Protein Targeter for muscle preservation</strong> calculates a position-specific, general daily macro threshold to help keep your active skeletal muscle and bone matrix protected while your total body weight scales down.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-[28px] md:text-[36px] text-neutral-100 mb-6">
              Interactive Protein Baseline Targeter
            </h2>
            <div className="font-sans text-[16px] md:text-[18px] text-neutral-300 leading-relaxed space-y-4 mb-8">
              <p>
                <em>Utilize this educational tool to map out a safe, estimated baseline matching your long-term wellness targets. Input your realistic <strong>Target Goal Body Weight</strong> rather than your current weight to establish an accurate preservation benchmark.</em>
              </p>
            </div>

            {/* CALCULATOR COMPONENT */}
            <div className="max-w-xl mx-auto p-6 md:p-8 bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl font-sans">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0">
                  <Dna size={20} className="text-teal-400" />
                </div>
                <h3 className="font-serif text-[24px] text-neutral-100 font-semibold text-center">
                  Define Your Muscular Defense Target
                </h3>
              </div>
              
              <div className="space-y-8">
                {/* Slider Input for Target Weight */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm text-neutral-300">
                    <label className="font-medium text-[15px]">What is your Target / Goal Body Weight?</label>
                    <span className="text-teal-400 font-bold text-lg">{targetWeight} kg</span>
                  </div>
                  <input 
                    type="range" 
                    min="45" 
                    max="150" 
                    value={targetWeight} 
                    onChange={(e) => { setTargetWeight(Number(e.target.value)); setShowResults(true); }} 
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-teal-500" 
                  />
                  <div className="flex justify-between text-[11px] text-neutral-500 font-medium uppercase tracking-wider">
                    <span>45 kg</span>
                    <span>150 kg</span>
                  </div>
                </div>

                {/* Activity Modifier */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-neutral-300 text-[15px]">Intended Weekly Resistance Loading</label>
                  <select 
                    value={activity} 
                    onChange={(e) => { setActivity(e.target.value); setShowResults(true); }} 
                    className="w-full p-3.5 bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-xl text-[15px] focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-colors"
                  >
                    <option value="low">Minimal resistance training / Transition phase</option>
                    <option value="moderate">Committing to 2x 30-minute structured resistance blocks weekly</option>
                    <option value="high">Committing to 3x or more progressive overloaded strength tracks weekly</option>
                  </select>
                </div>

                {/* Dynamic Result Panel */}
                <div className="mt-8 p-6 bg-neutral-900 rounded-xl border border-neutral-800 space-y-6">
                  <div className="text-center">
                    <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2">Suggested Daily Retention Range</h4>
                    <p className="text-[36px] font-serif text-teal-400 font-bold leading-none">
                      {lowBound}g – {highBound}g <span className="text-sm font-sans text-neutral-400 font-normal">/ day</span>
                    </p>
                  </div>

                  <div className="border-t border-neutral-800 pt-5 space-y-4 text-[13px] text-neutral-400 leading-relaxed">
                    <p>
                      <span className="text-teal-400 font-bold text-[16px] mr-2">📌</span> <strong className="text-neutral-200">The Position Matrix:</strong> Your inputs suggest an estimated daily baseline target of <span className="text-teal-400 font-semibold">{lowBound}g</span> to support basic nitrogen balance and lean tissue repair <Link to="/resources#protein" className="text-teal-500 hover:text-teal-400 underline text-[10px] align-super">1</Link>.
                    </p>
                    <p>
                      <span className="text-teal-400 font-bold text-[16px] mr-2">📌</span> <strong className="text-neutral-200">The Meal Allocation position:</strong> To optimize synthesis while navigating severe appetite muting or surgical volume reductions, clinical data implies dividing this total into smaller, frequent exposures is beneficial. Aiming for approximately <span className="text-teal-400 font-semibold">{mealAllocation}g of protein per intake</span> across 4 small mini-meals or liquid isolates is a recommended starting blueprint.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-[11px] text-neutral-500 text-center mt-6 max-w-sm mx-auto leading-relaxed">
                Calculations suggest universal sports-science baseline benchmarks and are not clinical medical prescriptions. Always verify your daily macro structures with your consulting medical practitioner.
              </p>
            </div>
          </div>

          <div className="space-y-12 mb-16">
            <h2 className="font-serif text-[28px] md:text-[36px] text-neutral-100 border-b border-neutral-800 pb-4">
              Frequently Asked Questions: Optimizing Protein Targets
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-[22px] text-teal-400 mb-3">Why do I use target weight instead of my current weight for this tool?</h3>
                <p className="font-sans text-[16px] text-neutral-300 leading-relaxed">
                  Calculating protein targets based on a high starting weight while undergoing rapid medical intervention can lead to an unsustainably high food volume requirement. By anchoring your calculation to your realistic <strong>target goal weight</strong>, the tool maps out a safe, structurally sufficient amino acid threshold that supports your lean mass without over-burdening your digestive capacity or causing medication-induced nausea <Link to="/resources#deficit" className="text-teal-400 hover:text-teal-300 underline text-[12px] align-super transition-colors">2</Link>.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-[22px] text-teal-400 mb-3">What happens if my protein drops below these estimated baselines?</h3>
                <p className="font-sans text-[16px] text-neutral-300 leading-relaxed">
                  When your system is in a deep, clinically induced calorie deficit, it will seek out alternative energy paths to sustain basic biological functions. If dietary protein drops below recommended thresholds, literature suggests the body may begin to break down its own skeletal muscle tissue and structural bone matrix to source necessary amino acids. This process can significantly contribute to systemic fatigue, poor recovery, and premature weight-loss plateaus.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-[22px] text-teal-400 mb-3">How do I reach my target if solid food causes nausea?</h3>
                <p className="font-sans text-[16px] text-neutral-300 leading-relaxed">
                  Appetite suppression from treatments can make eating dense meats or large portions incredibly difficult. In these specific environments, evidence indicates it is highly beneficial to prioritize clean, liquid-based nutrition. Shifting to cold, low-viscosity clear whey protein isolates or mixing unflavored collagen into liquids allows you to protect your muscular integrity without triggering gastrointestinal distress during peak medication cycles <Link to="/resources#protein" className="text-teal-400 hover:text-teal-300 underline text-[12px] align-super transition-colors">3</Link>.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="font-serif text-[28px] md:text-[36px] text-neutral-100 mb-6">
              Step Into a Managed 12-Week Track
            </h2>
            <p className="font-sans text-[16px] text-neutral-300 leading-relaxed mb-6">
              Managing protein thresholds, meal allocations, and progressive training blocks while navigating your medical timeline can feel incredibly complex. 
              <br/><br/>
              At WRK, our specialized <strong>12-Week Medical Weight Loss Support Programs</strong> take the guessing out of your daily routine. We deliver custom position-specific nutrition templates and short, 30-minute progressive resistance workouts straight to your <strong>My PT Hub</strong> dashboard—giving you professional accountability from our private training facility in Addington, Christchurch, or completely online anywhere across New Zealand.
            </p>
          </div>

          <div className="p-8 md:p-10 bg-neutral-950 border border-teal-500/20 rounded-2xl text-center shadow-lg hover:border-teal-500/40 transition-colors">
            <h3 className="font-serif text-[24px] text-white mb-6">Explore Our 12-Week Specialized Programs</h3>
            <Link to="/programs">
              <Button size="lg" className="w-full md:w-auto shadow-2xl">
                View 12-Week Programs &rarr;
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};
