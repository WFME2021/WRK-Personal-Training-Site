import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Button } from '../components/Button';
import { Calculator, ArrowLeft, ChevronRight } from 'lucide-react';

export const TdeeCalculator: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('female');
  const [weight, setWeight] = useState<string>(''); // in kg
  const [height, setHeight] = useState<string>(''); // in cm
  const [activityLevel, setActivityLevel] = useState<string>('sedentary');
  const [isMedicalClient, setIsMedicalClient] = useState<boolean>(false);
  const [calculatedTdee, setCalculatedTdee] = useState<number | null>(null);

  const calculateTdee = (e: React.FormEvent) => {
    e.preventDefault();
    if (!age || !weight || !height) return;

    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    const ageNum = parseFloat(age);

    let bmr = 0;
    if (gender === 'male') {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
    } else {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
    }

    let multiplier = 1.2;
    switch (activityLevel) {
      case 'sedentary': multiplier = 1.2; break;
      case 'light': multiplier = 1.375; break;
      case 'moderate': multiplier = 1.55; break;
      case 'active': multiplier = 1.725; break;
      case 'very_active': multiplier = 1.9; break;
    }

    setCalculatedTdee(Math.round(bmr * multiplier));
  };

  return (
    <>
      <SeoHead 
        title="TDEE Calculator for Medical Weight Loss Support | WRK"
        description="Calculate your baseline energy expenditure while navigating GLP-1 medications or bariatric recovery. Discover specialized tracking metrics in Christchurch."
      />

      <div className="flex flex-col w-full min-h-screen bg-neutral-900 text-neutral-100 items-center overflow-x-hidden pt-[80px] md:pt-[100px] pb-24">
        <div className="max-w-[800px] w-full px-5 md:px-12 mx-auto">
          
          {/* Breadcrumb & Back Link */}
          <div className="mb-8 space-y-4">
            <nav className="flex items-center text-[13px] text-neutral-400 font-sans">
              <Link to="/" className="hover:text-teal-400 transition-colors">Home</Link>
              <ChevronRight size={14} className="mx-2 text-neutral-600" />
              <Link to="/tools" className="hover:text-teal-400 transition-colors">Tools</Link>
              <ChevronRight size={14} className="mx-2 text-neutral-600" />
              <span className="text-neutral-200">Medical TDEE Calculator</span>
            </nav>
            <Link to="/tools" className="inline-flex items-center text-[14px] text-teal-400 hover:text-teal-300 transition-colors font-medium">
              <ArrowLeft size={16} className="mr-2" />
              Back to All Tools
            </Link>
          </div>

          <div className="mb-12">
            <h1 className="font-serif text-[40px] md:text-[56px] leading-[1.1] text-neutral-100 mb-6">
              TDEE Calculator for Medical Weight Loss & Bariatric Support
            </h1>
            <div className="font-sans text-[16px] md:text-[18px] text-neutral-300 leading-relaxed space-y-4">
              <p>
                Understanding your body’s daily energy expenditure is a foundational component of managing a physical transformation. However, if you are navigating a rapid weight reduction journey via prescribed clinical pathways—such as GLP-1 receptor agonists (tirzepatide, retatrutide) or post-operative bariatric recovery—standard fitness calculations change fundamentally.
              </p>
              <p>
                This specialized <strong>TDEE calculator for medical weight loss support</strong> is designed to estimate your baseline metabolic markers while helping you shift your daily focus away from aggressive gym-style calorie counting and toward defensive, structural tissue tracking.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-[28px] md:text-[36px] text-neutral-100 mb-6">
              What is TDEE and How Does Medical Weight Loss Affect It?
            </h2>
            <div className="font-sans text-[16px] md:text-[18px] text-neutral-300 leading-relaxed space-y-4">
              <p>
                <strong>Total Daily Energy Expenditure (TDEE)</strong> represents the estimated total number of calories your body burns across a 24-hour window to maintain your current mass. This figure is comprised of your Basal Metabolic Rate (BMR), the thermic effect of food, and your daily movement patterns.
              </p>
              <p>
                When utilizing medical interventions, your physical baseline encounters specific physiological adjustments:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-neutral-400">
                <li>
                  <strong className="text-neutral-200">Profound Appetite Muting:</strong> Strong chemical satiety signals mean your actual daily intake may naturally fall significantly below your calculated TDEE.
                </li>
                <li>
                  <strong className="text-neutral-200">The Risk of Adaptive Thermogenesis:</strong> Rapid mass drops can cause your resting metabolic rate to slow down down-regulate as a protective mechanism.
                </li>
                <li>
                  <strong className="text-neutral-200">Lean Tissue Vulnerability:</strong> Without an explicit muscular stimulus, a notable portion of rapid weight reduction may draw directly from active skeletal muscle mass rather than stored adipose tissue <Link to="/resources#sarcopenia" className="text-teal-400 hover:text-teal-300 underline text-[12px] align-super">1</Link>.
                </li>
              </ul>
            </div>
          </div>

          {/* CALCULATOR COMPONENT */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 md:p-10 mb-6 shadow-2xl">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-neutral-800">
              <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0">
                <Calculator size={24} className="text-teal-400" />
              </div>
              <div>
                <h3 className="font-serif text-[24px] text-neutral-100">Metabolic Baseline Calculator</h3>
                <p className="font-sans text-sm text-neutral-400">Estimate your maintenance energy requirements.</p>
              </div>
            </div>

            <form onSubmit={calculateTdee} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-neutral-300">Gender</label>
                  <select 
                    value={gender} 
                    onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                    className="w-full p-4 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-100 font-sans focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                  >
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-neutral-300">Age (years)</label>
                  <input 
                    type="number" 
                    required 
                    min="18" 
                    max="100"
                    value={age} 
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full p-4 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-100 font-sans focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                    placeholder="e.g. 45"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-neutral-300">Weight (kg)</label>
                  <input 
                    type="number" 
                    required 
                    min="40" 
                    max="250"
                    step="0.1"
                    value={weight} 
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full p-4 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-100 font-sans focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                    placeholder="e.g. 85"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-neutral-300">Height (cm)</label>
                  <input 
                    type="number" 
                    required 
                    min="120" 
                    max="220"
                    value={height} 
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full p-4 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-100 font-sans focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                    placeholder="e.g. 165"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-medium text-neutral-300">Activity Level</label>
                  <select 
                    value={activityLevel} 
                    onChange={(e) => setActivityLevel(e.target.value)}
                    className="w-full p-4 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-100 font-sans focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                  >
                    <option value="sedentary">Sedentary (office job, little to no exercise)</option>
                    <option value="light">Light Activity (1-3 days/week of light exercise)</option>
                    <option value="moderate">Moderate Activity (3-5 days/week of moderate exercise)</option>
                    <option value="active">Active (6-7 days/week of hard exercise)</option>
                    <option value="very_active">Very Active (physical job + hard training)</option>
                  </select>
                </div>

              </div>

              <div className="pt-4 border-t border-neutral-800 mt-4">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-1">
                    <input 
                      type="checkbox" 
                      className="sr-only" 
                      checked={isMedicalClient}
                      onChange={(e) => setIsMedicalClient(e.target.checked)}
                    />
                    <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${isMedicalClient ? 'bg-teal-500 border-teal-500' : 'bg-neutral-900 border-neutral-700 group-hover:border-teal-500/50'}`}>
                      {isMedicalClient && (
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="font-sans text-[15px] md:text-[16px] text-neutral-300 leading-relaxed font-medium">
                    I am currently utilizing GLP-1 medications or recovering from bariatric/metabolic surgery.
                  </span>
                </label>
              </div>

              <Button type="submit" size="lg" fullWidth className="mt-8">
                Calculate Baseline Expenditure
              </Button>
            </form>

            {calculatedTdee !== null && (
              <div className="mt-10 pt-10 border-t border-neutral-800 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {isMedicalClient ? (
                  <div className="p-6 rounded-xl bg-neutral-950 border border-neutral-800 space-y-5">
                    <h3 className="font-serif text-xl font-semibold text-neutral-100">
                      📊 Baseline Metabolic Analysis Complete
                    </h3>
                    
                    <p className="font-sans text-[15px] text-neutral-300">
                      Based on your physical baselines, your estimated Total Daily Energy Expenditure (TDEE) indicates a potential baseline pattern of <span className="text-teal-400 font-bold text-lg">{calculatedTdee} calories</span> per day to maintain homeostasis.
                    </p>

                    {/* Specialized Medical Target Alert Callout Box */}
                    <div className="p-5 rounded-lg bg-neutral-900/80 border-l-4 border-teal-500 text-left space-y-3">
                      <h4 className="font-sans text-[15px] font-semibold text-teal-400">
                        ⚠️ Critical Tracking Adjustment for Your Pathway
                      </h4>
                      <p className="font-sans text-sm text-neutral-400 leading-relaxed">
                        Clinical research suggests that intense medication-induced appetite suppression or post-surgical volume restrictions frequently make hitting a standard calorie floor highly difficult. 
                      </p>
                      <p className="font-sans text-sm text-neutral-400 leading-relaxed">
                        When using these interventions, attempting to force huge amounts of solid food to reach a high caloric baseline can result in severe gastrointestinal discomfort or intense nausea. 
                      </p>
                      <p className="font-sans text-sm text-neutral-300 leading-relaxed font-medium">
                        Our coaching recommendation is to shift your daily focus away from aggressive calorie-cutting numbers. Instead, prioritize your <Link to="/resources#protein" className="text-teal-400 hover:text-teal-300 underline transition-colors">structural lean mass tracking metrics</Link>—ensuring your physical loading signals remain strong while body weight updates.
                      </p>
                    </div>

                    {/* Anchor Link to the next tool */}
                    <div className="text-center pt-4">
                      <p className="font-sans text-sm text-neutral-400 mb-3">Want to see how much protein your muscles require to protect against wasting?</p>
                      <Link to="/assessment" className="inline-block bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                        Advance to the Protein Targeter Tool
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 text-center space-y-4">
                    <h3 className="font-serif text-xl font-semibold text-neutral-100">
                      Baseline TDEE Estimate
                    </h3>
                    <p className="font-serif text-[48px] text-teal-400 leading-none">
                      {calculatedTdee}
                    </p>
                    <p className="font-sans text-sm text-neutral-400 uppercase tracking-widest">Calories / Day</p>
                    <p className="font-sans text-[15px] text-neutral-300 mt-4 max-w-md mx-auto">
                      This is the estimated number of calories required to maintain your current weight based on your selected activity level.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          <p className="text-[11px] text-neutral-500 max-w-md mx-auto mb-16 text-center leading-relaxed">
            Calculations provided by this tool suggest general physiological baseline estimations based on standard formulas and do not serve as a clinical medical prescription. Actual individual absorption thresholds and physiological variables can change considerably throughout your care timeline. Always verify your daily macro positions with your primary healthcare provider.
          </p>

          <div className="space-y-16 mb-20 mt-20">
            <div>
              <h2 className="font-serif text-[28px] md:text-[36px] text-neutral-100 border-b border-neutral-800 pb-4 mb-6">
                How GLP-1 medications and bariatric surgery alter metabolic expenditure
              </h2>
              <div className="font-sans text-[16px] text-neutral-300 leading-relaxed space-y-4">
                <p>
                  Total Daily Energy Expenditure (TDEE) is traditionally calculated using basal metabolic rate (BMR) and physical activity levels. However, clinical interventions disrupt this standard equation. GLP-1 medications and bariatric surgery alter gastric emptying rates, hormonal hunger signals, and systemic inflammation profiles, fundamentally changing how your body processes and stores energy.
                </p>
                <p>
                  As you undergo rapid weight loss, your BMR naturally decreases because a smaller body requires less baseline energy to function. Furthermore, the body may initiate adaptive thermogenesis—a defensive slowdown of metabolic rate in response to severe caloric restriction. Monitoring these shifts is vital to prevent long-term metabolic stalling.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-[28px] md:text-[36px] text-neutral-100 border-b border-neutral-800 pb-4 mb-6">
                The difference between standard TDEE and medical weight loss tracking
              </h2>
              <div className="font-sans text-[16px] text-neutral-300 leading-relaxed space-y-4">
                <p>
                  In the traditional fitness space, TDEE is used to establish a strict daily caloric deficit (often 500 calories below maintenance). In medical weight loss, this approach is counterproductive and potentially dangerous. The medication or surgical intervention is already enforcing a massive deficit—often far beyond what standard calculators recommend.
                </p>
                <p>
                  Medical weight loss tracking flips the paradigm. Instead of using TDEE to find a maximum caloric ceiling, we use it to understand the gap between your energy output and your drastically reduced intake. The goal shifts from "eating less" to "eating defensively"—ensuring that the small volume of food you can tolerate is hyper-optimized for protein density and micronutrient value to prevent malnutrition and muscle wasting.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-[28px] md:text-[36px] text-neutral-100 border-b border-neutral-800 pb-4 mb-6">
                Adapting your energy intake for long-term metabolic maintenance
              </h2>
              <div className="font-sans text-[16px] text-neutral-300 leading-relaxed space-y-4">
                <p>
                  As you approach your goal weight, or if you begin tapering off clinical interventions, your energy intake must be carefully reverse-engineered. Remaining in a severe caloric deficit indefinitely will degrade your skeletal muscle and compromise your bone density.
                </p>
                <p>
                  The long-term maintenance phase requires a strategic reintroduction of calories, paired with progressive resistance training. This combination sends a clear physiological signal to your body to rebuild lean tissue, thereby increasing your resting metabolic rate and securing your weight loss results for the future. Your TDEE calculation becomes the roadmap for this safe, upward adjustment.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="font-serif text-[28px] md:text-[36px] text-neutral-100 mb-6">
              Professional Coaching Verification & Support
            </h2>
            <p className="font-sans text-[16px] text-neutral-300 leading-relaxed mb-6">
              Balancing estimated metabolic math with real-world side effects, medication steps, or post-surgical recovery timelines can feel incredibly complex. 
              <br/><br/>
              At WRK, our premium 12-Week Hybrid Coaching Program (located at our private training facility in Addington, Christchurch) and our Remote Support Tracks across New Zealand provide direct, evidence-based guidance. We build position-specific resistance training tracks and adaptive lifestyle templates straight into your My PT Hub profile, ensuring your structural health matches your lighter frame.
            </p>
          </div>

          <div className="p-8 md:p-10 bg-neutral-950 border border-teal-500/20 rounded-2xl text-center shadow-lg hover:border-teal-500/40 transition-colors">
            <h3 className="font-serif text-[24px] text-white mb-4">Want to discover how much protein your muscles require to protect against wasting?</h3>
            <p className="font-sans text-[16px] text-neutral-400 max-w-lg mx-auto mb-8 leading-relaxed">
              Advance to our specialized tool to view a safe baseline estimation tailored directly to your long-term goal parameters.
            </p>
            <Link to="/assessment">
              <Button size="lg" className="w-full md:w-auto shadow-2xl">
                Take the Muscle Preservation Screener
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};
