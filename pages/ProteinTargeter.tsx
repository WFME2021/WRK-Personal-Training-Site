import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { PageHeroBanner } from '../components/PageHeroBanner';
import { FatLossFoundationsLeadMagnet } from '../components/FatLossFoundationsLeadMagnet';
import { Dna, Calculator } from 'lucide-react';

export const ProteinTargeter: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [targetWeight, setTargetWeight] = useState<string>('70');
  const [activity, setActivity] = useState('moderate');
  const [showResults, setShowResults] = useState(false);

  const weightNum = parseFloat(targetWeight) || 0;
  
  // Calculate based on 1.2 to 1.6 g/kg of target weight as a general rule
  const lowBound = Math.round(weightNum * 1.2);
  const highBound = Math.round(weightNum * 1.6);
  const mealAllocation = Math.round(lowBound / 4);

  return (
    <div className="bg-cream text-forest min-h-screen font-sans selection:bg-forest selection:text-cream pb-12">
      <SeoHead 
        title="GLP-1 Protein Calculator | WRK Personal Training"
        description="Use our GLP-1 Protein Calculator to find your precise daily protein targets to support muscle retention and strength during your medical weight loss journey."
      />
      
      <PageHeroBanner
        imageSrc="/images/banner-tools.jpg"
        imageAlt="Kettlebells and training notebook in a calm sunlit studio"
        align="center"
        compact
        eyebrow={
          <nav className="inline-flex items-center justify-center text-[12px] font-medium text-cream/85">
            <Link to="/" className="hover:text-citron transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/tools" className="hover:text-citron transition-colors">Tools</Link>
            <span className="mx-2">/</span>
            <span className="text-citron">Protein Calculator</span>
          </nav>
        }
        title={
          <>
            GLP-1 <span className="wrk-highlight-dark">Protein</span> Calculator
          </>
        }
        subtitle="How much protein should you eat while losing weight? Get a practical starting range based on your target bodyweight and training routine."
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10">
        <div className="max-w-3xl mx-auto text-center text-[15px] md:text-[17px] leading-relaxed text-forest/80 space-y-3 mb-12">
          <p>
            When you're using a GLP-1 medication, reduced appetite can make it harder to eat enough food—including enough protein to support muscle and strength during weight loss.
          </p>
        </div>

        {/* Calculator Interface */}
        <div className="max-w-4xl mx-auto mb-24 flex flex-col md:flex-row gap-8">
          
          {/* Input Panel */}
          <div className="flex-1 bg-quiet p-8 md:p-10 rounded-3xl border border-forest/15 shadow-sm flex flex-col">
            <h3 className="font-serif text-[26px] text-forest mb-8 border-b border-forest/10 pb-4">
              Define Your Parameters
            </h3>
            
            <div className="space-y-8 flex-grow mb-8">
              <div>
                <label className="block text-[14px] font-bold uppercase tracking-wider text-forest/75 mb-3">
                  Target Body Weight (kg)
                </label>
                <div className="relative">
                  <input 
                    type="number"
                    min="45"
                    max="150"
                    value={targetWeight}
                    onChange={(e) => {
                      setTargetWeight(e.target.value);
                      setShowResults(false);
                    }}
                    className="w-full h-14 pl-5 pr-14 bg-cream border border-forest/15 rounded-xl focus:ring-2 focus:ring-forest focus:border-transparent outline-none transition-all text-forest text-[18px] font-medium"
                    placeholder="e.g. 70"
                  />
                  <span className="absolute inset-y-0 right-5 flex items-center text-forest/55 font-medium">
                    kg
                  </span>
                </div>
                <p className="text-[13px] text-forest/60 mt-2">Between 45 kg and 150 kg</p>
              </div>

              <div>
                <label className="block text-[14px] font-bold uppercase tracking-wider text-forest/75 mb-3">
                  Resistance Training
                </label>
                <p className="text-[14px] text-forest/70 mb-3">Select the option that best describes your current training:</p>
                <div className="relative">
                  <select 
                    value={activity}
                    onChange={(e) => {
                      setActivity(e.target.value);
                      setShowResults(false);
                    }}
                    className="w-full h-14 pl-5 pr-12 bg-cream border border-forest/15 rounded-xl focus:ring-2 focus:ring-forest focus:border-transparent outline-none transition-all text-forest text-[16px] appearance-none"
                  >
                    <option value="minimal">Minimal resistance training</option>
                    <option value="moderate">1–2 consistent resistance sessions per week</option>
                    <option value="high">3+ progressive strength sessions per week</option>
                  </select>
                  <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-forest/55">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setShowResults(true)}
              disabled={!targetWeight || weightNum < 45 || weightNum > 150}
              className="w-full h-14 bg-citron hover:brightness-95 disabled:opacity-50 disabled:cursor-not-allowed text-forest border border-forest/20 rounded-xl font-semibold transition-all text-[16px] shadow-sm flex items-center justify-center gap-2"
            >
              <Calculator size={18} />
              Calculate My Protein Target
            </button>
          </div>

          {/* Output Panel */}
          <div className={`flex-1 bg-quiet rounded-3xl border border-forest/15 p-8 md:p-10 flex flex-col justify-center transition-all duration-500 relative overflow-hidden ${showResults ? 'opacity-100 shadow-md' : 'opacity-70 pointer-events-none'}`}>
            {!showResults && (
              <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm bg-quiet/80">
                <p className="font-medium text-forest/80 text-[16px]">Enter parameters to view your target</p>
              </div>
            )}
            
            <h3 className="font-serif text-[26px] text-forest mb-8 text-center border-b border-forest/10 pb-4">
              Your Suggested Protein Target
            </h3>

            <div className="text-center mb-8">
              <div className="font-serif text-[48px] md:text-[56px] text-forest leading-none mb-4">
                {lowBound}–{highBound} g
              </div>
              <p className="text-[16px] text-forest/80 leading-relaxed">
                Based on the information you've entered, this calculator provides an estimated daily protein range of:
              </p>
              <p className="font-bold text-forest text-[18px] mt-2">
                {lowBound}–{highBound} g protein
              </p>
            </div>
            
            <div className="border-t border-forest/10 pt-6 space-y-4 text-[13px] leading-relaxed text-forest/70">
              <p>
                This is a general educational estimate, not a personalised medical or nutritional prescription.
              </p>
              <p>
                Your actual protein requirements may differ depending on factors such as your body composition, age, activity level, training volume, health status and overall diet.
              </p>
              <p>
                If you have a medical condition or specific dietary requirements, discuss your protein intake with your healthcare professional or a qualified nutrition professional.
              </p>
            </div>
          </div>
        </div>

        {/* Educational Content Blocks */}
        <div className="max-w-4xl mx-auto space-y-12 mb-24">
          
          <div className="bg-quiet border border-forest/15 p-8 md:p-12 rounded-3xl">
            <h2 className="font-serif text-[28px] md:text-[32px] text-forest mb-6 leading-tight">
              How Much Protein Should You Have at Each Meal?
            </h2>
            <div className="text-[16px] text-forest/80 leading-relaxed space-y-4">
              <p>Getting your daily protein target doesn't mean eating one huge meal.</p>
              <p>If your appetite is reduced, spreading protein across several smaller meals and snacks can be a practical way to make your target easier to achieve.</p>
              <p>For example, a target of <strong className="text-forest font-medium">{lowBound || 100} g per day</strong> could be spread across four eating occasions:</p>
              <div className="bg-cream p-4 rounded-xl border border-forest/15 font-medium text-center text-forest text-[18px] my-6">
                {mealAllocation || 25} g + {mealAllocation || 25} g + {mealAllocation || 25} g + {mealAllocation || 25} g = {lowBound || 100} g
              </div>
              <p>The exact amount and number of meals isn't important for everyone.</p>
              <p>The priority is finding an approach that allows you to consistently get enough protein without making eating unnecessarily difficult.</p>
            </div>
          </div>

          <div className="bg-quiet border border-forest/15 p-8 md:p-12 rounded-3xl">
            <h2 className="font-serif text-[28px] md:text-[32px] text-forest mb-6 leading-tight">
              Why Does Protein Matter During GLP-1 Weight Loss?
            </h2>
            <div className="text-[16px] text-forest/80 leading-relaxed space-y-6">
              <p>Losing weight involves more than losing body fat.</p>
              <p>When bodyweight decreases, some lean tissue can also be lost. Maintaining muscle is particularly important because muscle contributes to strength, physical function and your ability to remain active.</p>
              
              <div>
                <p className="mb-4">Two of the most useful tools in your toolkit are:</p>
                <div className="space-y-4">
                  <div className="bg-cream p-5 rounded-xl border border-forest/15">
                    <h4 className="font-serif text-[18px] text-forest mb-2">Lifting weights</h4>
                    <p className="text-[15px]">Gives your body a reason to hold onto muscle.</p>
                  </div>
                  <div className="bg-cream p-5 rounded-xl border border-forest/15">
                    <h4 className="font-serif text-[18px] text-forest mb-2">Adequate protein</h4>
                    <p className="text-[15px]">Gives your body the building blocks to repair and keep that muscle.</p>
                  </div>
                </div>
              </div>
              
              <p className="pt-2">Together, they form an important foundation for maintaining strength and physical function while losing weight.</p>
            </div>
          </div>

          <div className="bg-quiet border border-forest/15 p-8 md:p-12 rounded-3xl">
            <h2 className="font-serif text-[28px] md:text-[32px] text-forest mb-6 leading-tight">
              Protein When Your Appetite Is Low
            </h2>
            <div className="text-[16px] text-forest/80 leading-relaxed space-y-6">
              <p>One of the practical challenges of GLP-1 treatment can be simply <strong className="text-forest font-medium">getting enough food in</strong> when you're not very hungry.</p>
              <p>Rather than trying to force yourself to eat large meals, focus on making the food you do eat more nutritionally useful.</p>
              
              <div>
                <p className="mb-4">Practical options can include:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 pl-5 list-disc marker:text-forest text-[15px]">
                  <li>Greek yoghurt</li>
                  <li>Eggs</li>
                  <li>Chicken or lean meat</li>
                  <li>Fish and seafood</li>
                  <li>Cottage cheese</li>
                  <li>Tofu and other soy foods</li>
                  <li>Milk or high-protein dairy products</li>
                  <li>Protein shakes when appropriate</li>
                </ul>
              </div>

              <p>Choose foods that work for your preferences, dietary requirements and tolerance.</p>
              <div className="bg-cream p-4 rounded-xl border border-forest/15 text-[14px]">
                <p>If you're experiencing persistent nausea, vomiting, difficulty eating or other significant symptoms, speak with your healthcare professional.</p>
              </div>
            </div>
          </div>

          <div className="bg-forest text-cream p-8 md:p-12 rounded-3xl">
            <h2 className="font-serif text-[28px] md:text-[32px] mb-6 leading-tight text-cream">
              Protein Is Only One Part of the Picture
            </h2>
            <div className="text-cream/85 text-[16px] leading-relaxed space-y-6">
              <p>Protein matters, but it isn't the entire muscle-preservation strategy.</p>
              <p>Your results are influenced by the bigger picture:</p>
              
              <div className="flex flex-wrap gap-x-6 gap-y-3 font-medium text-cream text-[15px] pb-2">
                <span>Resistance training</span>
                <span className="text-citron">•</span>
                <span>Adequate protein</span>
                <span className="text-citron">•</span>
                <span>Overall nutrition</span>
                <span className="text-citron">•</span>
                <span>Recovery</span>
                <span className="text-citron">•</span>
                <span>Daily movement</span>
                <span className="text-citron">•</span>
                <span>Progressive training</span>
              </div>
              
              <p>That's why WRK looks beyond the number generated by a calculator.</p>
              <p>The goal isn't simply to hit a protein target.</p>
              <p className="text-cream font-medium text-[18px]">It's to build a routine that helps you become stronger, fitter and more capable while your weight changes.</p>
            </div>
          </div>

          <div className="bg-quiet border border-forest/15 p-8 rounded-3xl text-[14px] text-forest/75 leading-relaxed text-center">
            <h4 className="font-bold text-forest mb-2 uppercase tracking-wider text-[12px]">Your Calculator Result Is a Starting Point</h4>
            <p className="max-w-3xl mx-auto">
              This calculator provides a general starting range based on the information you enter. It isn't designed to diagnose, treat or prevent any medical condition, and it doesn't replace individual advice from your healthcare professional. If your healthcare professional or qualified nutrition professional has given you a specific protein target, follow their advice.
            </p>
          </div>
          
        </div>

        {/* 14-Day Fat Loss Foundations Lead Magnet */}
        <div className="max-w-4xl mx-auto mb-12">
          <FatLossFoundationsLeadMagnet />
        </div>

        {/* Final CTAs */}
        <div className="mb-24 max-w-3xl mx-auto">
          <div className="bg-quiet p-8 md:p-10 rounded-3xl border border-forest/15 shadow-sm mb-12 text-left">
            <h3 className="font-serif text-[24px] md:text-[28px] text-forest mb-4">
              Hitting your protein target when appetite is zero feels impossible.
            </h3>
            <p className="text-[16px] text-forest/80 leading-relaxed mb-8">
              In our coaching programmes, we use small, dense protein anchors that digest easily without leaving you feeling uncomfortably full or sick.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link 
                to="/assessment" 
                className="inline-flex items-center justify-center bg-citron hover:brightness-95 border border-forest/20 text-forest px-6 py-3 rounded-xl font-semibold text-[14px] transition-all w-full sm:w-auto"
              >
                Take the Free GLP-1 Assessment
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-forest hover:bg-forest-deep text-cream px-6 py-3 rounded-xl font-medium text-[14px] transition-colors w-full sm:w-auto"
              >
                Apply for 1-on-1 Nutrition Pacing Support →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
