import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
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
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-12">
      <SeoHead 
        title="GLP-1 Protein Calculator | WRK Personal Training"
        description="Calculate your daily protein targets to support muscle and strength during your GLP-1 weight loss journey."
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-[13px] font-medium text-[#2C3539]/60 mb-8 max-w-4xl mx-auto">
          <Link to="/" className="hover:text-[#8A9A86] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/tools" className="hover:text-[#8A9A86] transition-colors">Tools</Link>
          <span className="mx-2">/</span>
          <span className="text-[#2C3539]">Protein Calculator</span>
        </nav>

        {/* Hero */}
        <header className="text-center mb-16 max-w-4xl mx-auto">
          <div className="w-16 h-16 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mx-auto mb-6">
            <Dna size={32} />
          </div>
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            GLP-1 Protein Calculator
          </h1>
          <h2 className="font-serif text-[24px] md:text-[28px] text-[#2C3539]/80 mb-6">
            How much protein should you eat while losing weight?
          </h2>
          <div className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/80 space-y-4">
            <p>
              When you're using a GLP-1 medication, reduced appetite can make it harder to eat enough food — including enough protein.
            </p>
            <p>
              Protein is an important part of supporting muscle and strength during weight loss, particularly when combined with regular resistance training.
            </p>
            <p className="font-medium text-[#2C3539]">
              Use this calculator to get a practical starting range for your daily protein intake based on your target bodyweight and current training routine.
            </p>
          </div>
        </header>

        {/* Calculator Interface */}
        <div className="max-w-4xl mx-auto mb-24 flex flex-col md:flex-row gap-8">
          
          {/* Input Panel */}
          <div className="flex-1 bg-white p-8 md:p-10 rounded-3xl border border-neutral-200 shadow-sm flex flex-col">
            <h3 className="font-serif text-[26px] text-[#2C3539] mb-8 border-b border-neutral-100 pb-4">
              Define Your Parameters
            </h3>
            
            <div className="space-y-8 flex-grow mb-8">
              <div>
                <label className="block text-[14px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-3">
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
                    className="w-full h-14 pl-5 pr-14 bg-[#FAFAF9] border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#8A9A86] focus:border-transparent outline-none transition-all text-[#2C3539] text-[18px] font-medium"
                    placeholder="e.g. 70"
                  />
                  <span className="absolute inset-y-0 right-5 flex items-center text-[#2C3539]/50 font-medium">
                    kg
                  </span>
                </div>
                <p className="text-[13px] text-[#2C3539]/50 mt-2">Between 45 kg and 150 kg</p>
              </div>

              <div>
                <label className="block text-[14px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-3">
                  Resistance Training
                </label>
                <p className="text-[14px] text-[#2C3539]/60 mb-3">Select the option that best describes your current training:</p>
                <div className="relative">
                  <select 
                    value={activity}
                    onChange={(e) => {
                      setActivity(e.target.value);
                      setShowResults(false);
                    }}
                    className="w-full h-14 pl-5 pr-12 bg-[#FAFAF9] border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#8A9A86] focus:border-transparent outline-none transition-all text-[#2C3539] text-[16px] appearance-none"
                  >
                    <option value="minimal">Minimal resistance training</option>
                    <option value="moderate">2 × 30-minute resistance sessions per week</option>
                    <option value="high">3+ progressive strength sessions per week</option>
                  </select>
                  <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-[#2C3539]/50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setShowResults(true)}
              disabled={!targetWeight || weightNum < 45 || weightNum > 150}
              className="w-full h-14 bg-[#8A9A86] hover:bg-[#768672] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-colors text-[16px] shadow-sm flex items-center justify-center gap-2"
            >
              <Calculator size={18} />
              Calculate My Protein Target
            </button>
          </div>

          {/* Output Panel */}
          <div className={`flex-1 bg-white rounded-3xl border border-neutral-200 p-8 md:p-10 flex flex-col justify-center transition-all duration-500 relative overflow-hidden ${showResults ? 'opacity-100 shadow-md' : 'opacity-50 pointer-events-none'}`}>
            {!showResults && (
              <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm bg-white/50">
                <p className="font-medium text-[#2C3539]/70 text-[16px]">Enter parameters to view your target</p>
              </div>
            )}
            
            <h3 className="font-serif text-[26px] text-[#2C3539] mb-8 text-center border-b border-neutral-100 pb-4">
              Your Suggested Protein Target
            </h3>

            <div className="text-center mb-8">
              <div className="font-serif text-[48px] md:text-[56px] text-[#8A9A86] leading-none mb-4">
                {lowBound}–{highBound} g
              </div>
              <p className="text-[16px] text-[#2C3539]/80 leading-relaxed">
                Based on the information you've entered, this calculator provides an estimated daily protein range of:
              </p>
              <p className="font-bold text-[#2C3539] text-[18px] mt-2">
                {lowBound}–{highBound} g protein
              </p>
            </div>
            
            <div className="border-t border-neutral-100 pt-6 space-y-4 text-[13px] leading-relaxed text-[#2C3539]/60">
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
          
          <div className="bg-[#FAFAF9] border border-neutral-200 p-8 md:p-12 rounded-3xl">
            <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] mb-6 leading-tight">
              How Much Protein Should You Have at Each Meal?
            </h2>
            <div className="text-[16px] text-[#2C3539]/80 leading-relaxed space-y-4">
              <p>Getting your daily protein target doesn't mean eating one huge meal.</p>
              <p>If your appetite is reduced, spreading protein across several smaller meals and snacks can be a practical way to make your target easier to achieve.</p>
              <p>For example, a target of <strong className="text-[#2C3539] font-medium">{lowBound || 100} g per day</strong> could be spread across four eating occasions:</p>
              <div className="bg-white p-4 rounded-xl border border-neutral-200 font-medium text-center text-[#2C3539] text-[18px] my-6">
                {mealAllocation || 25} g + {mealAllocation || 25} g + {mealAllocation || 25} g + {mealAllocation || 25} g = {lowBound || 100} g
              </div>
              <p>The exact amount and number of meals isn't important for everyone.</p>
              <p>The priority is finding an approach that allows you to consistently get enough protein without making eating unnecessarily difficult.</p>
            </div>
          </div>

          <div className="bg-white border border-neutral-200 p-8 md:p-12 rounded-3xl">
            <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] mb-6 leading-tight">
              Why Does Protein Matter During GLP-1 Weight Loss?
            </h2>
            <div className="text-[16px] text-[#2C3539]/80 leading-relaxed space-y-6">
              <p>Losing weight involves more than losing body fat.</p>
              <p>When bodyweight decreases, some lean tissue can also be lost. Maintaining muscle is particularly important because muscle contributes to strength, physical function and your ability to remain active.</p>
              
              <div>
                <p className="mb-4">Two of the most useful tools in your toolkit are:</p>
                <div className="space-y-4">
                  <div className="bg-[#FAFAF9] p-5 rounded-xl border border-neutral-200">
                    <h4 className="font-serif text-[18px] text-[#2C3539] mb-2">Resistance training</h4>
                    <p className="text-[15px]">Progressive strength training provides your muscles with a reason to adapt and maintain their capacity.</p>
                  </div>
                  <div className="bg-[#FAFAF9] p-5 rounded-xl border border-neutral-200">
                    <h4 className="font-serif text-[18px] text-[#2C3539] mb-2">Adequate protein</h4>
                    <p className="text-[15px]">Protein provides the amino acids your body needs to support muscle protein synthesis and repair.</p>
                  </div>
                </div>
              </div>
              
              <p className="pt-2">Together, they form an important foundation for maintaining strength and physical function while losing weight.</p>
            </div>
          </div>

          <div className="bg-white border border-neutral-200 p-8 md:p-12 rounded-3xl">
            <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] mb-6 leading-tight">
              Protein When Your Appetite Is Low
            </h2>
            <div className="text-[16px] text-[#2C3539]/80 leading-relaxed space-y-6">
              <p>One of the practical challenges of GLP-1 treatment can be simply <strong className="text-[#2C3539] font-medium">getting enough food in</strong> when you're not very hungry.</p>
              <p>Rather than trying to force yourself to eat large meals, focus on making the food you do eat more nutritionally useful.</p>
              
              <div>
                <p className="mb-4">Practical options can include:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 pl-5 list-disc marker:text-[#8A9A86] text-[15px]">
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
              <div className="bg-[#FAFAF9] p-4 rounded-xl border border-neutral-200 text-[14px]">
                <p>If you're experiencing persistent nausea, vomiting, difficulty eating or other significant symptoms, speak with your healthcare professional.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1A1C1D] text-white p-8 md:p-12 rounded-3xl">
            <h2 className="font-serif text-[28px] md:text-[32px] mb-6 leading-tight">
              Protein Is Only One Part of the Picture
            </h2>
            <div className="text-neutral-300 text-[16px] leading-relaxed space-y-6">
              <p>Protein matters, but it isn't the entire muscle-preservation strategy.</p>
              <p>Your results are influenced by the bigger picture:</p>
              
              <div className="flex flex-wrap gap-x-6 gap-y-3 font-medium text-white text-[15px] pb-2">
                <span>Resistance training</span>
                <span className="text-[#8A9A86]">•</span>
                <span>Adequate protein</span>
                <span className="text-[#8A9A86]">•</span>
                <span>Overall nutrition</span>
                <span className="text-[#8A9A86]">•</span>
                <span>Recovery</span>
                <span className="text-[#8A9A86]">•</span>
                <span>Daily movement</span>
                <span className="text-[#8A9A86]">•</span>
                <span>Progressive training</span>
              </div>
              
              <p>That's why WRK looks beyond the number generated by a calculator.</p>
              <p>The goal isn't simply to hit a protein target.</p>
              <p className="text-white font-medium text-[18px]">It's to build a routine that helps you become stronger, fitter and more capable while your weight changes.</p>
            </div>
          </div>

          <div className="bg-[#FAFAF9] border border-neutral-200 p-8 rounded-3xl text-[14px] text-[#2C3539]/70 leading-relaxed text-center">
            <h4 className="font-bold text-[#2C3539] mb-2 uppercase tracking-wider text-[12px]">Your Calculator Result Is a Starting Point</h4>
            <p className="max-w-3xl mx-auto">
              This calculator provides a general starting range based on the information you enter. It isn't designed to diagnose, treat or prevent any medical condition, and it doesn't replace individual advice from your healthcare professional. If your healthcare professional or qualified nutrition professional has given you a specific protein target, follow their advice.
            </p>
          </div>
          
        </div>

        {/* Final CTAs */}
        <div className="mb-24 max-w-2xl mx-auto">
          <div className="bg-white border border-neutral-200 p-8 md:p-10 rounded-3xl text-center shadow-sm flex flex-col">
            <h2 className="text-[26px] font-serif text-[#2C3539] mb-4">
              Want Help Putting It Into Practice?
            </h2>
            <div className="text-[16px] text-[#2C3539]/80 leading-relaxed space-y-4 mb-8 flex-grow">
              <p>Knowing your protein target is one thing.</p>
              <p>Knowing what that looks like across a normal week is another.</p>
              <p>WRK can help you combine your protein target with personalised strength training, practical nutrition habits and a programme that fits your lifestyle.</p>
            </div>
            <div className="space-y-3">
              <Link to="/programs" className="block w-full bg-[#8A9A86] hover:bg-[#768672] text-white px-6 py-4 rounded-xl font-medium transition-colors text-[15px]">
                Explore GLP-1 Fitness Programs
              </Link>
              <Link to="/assessment" className="block w-full bg-white border border-neutral-200 hover:border-[#8A9A86] text-[#2C3539] px-6 py-4 rounded-xl font-medium transition-colors text-[15px]">
                Take the Free GLP-1 Fitness Assessment
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
