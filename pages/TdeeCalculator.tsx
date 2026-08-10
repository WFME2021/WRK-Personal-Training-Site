import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Calculator, ChevronRight } from 'lucide-react';

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
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-32">
      <SeoHead 
        title="GLP-1 Metabolism & Calorie Calculator | WRK"
        description="Establish your adjusted Total Daily Energy Expenditure tracking during metabolic adaptation phases."
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-[13px] font-medium text-[#2C3539]/60 mb-8 max-w-4xl mx-auto">
          <Link to="/" className="hover:text-[#8A9A86] transition-colors">Home</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to="/tools" className="hover:text-[#8A9A86] transition-colors">Tools</Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-[#2C3539]">Metabolism Calculator</span>
        </nav>

        {/* Page Header */}
        <header className="mb-16 max-w-4xl mx-auto">
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            GLP-1 Metabolism & Calorie Calculator
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/70 max-w-3xl">
            Understanding your body’s daily energy expenditure is foundational. However, if you are navigating a rapid weight reduction journey via prescribed clinical pathways—such as GLP-1 receptor agonists—standard fitness calculations change fundamentally. This specialized tool estimates your baseline metabolic markers while shifting focus toward defensive, structural tissue tracking.
          </p>
        </header>

        {/* Interactive Calculator Container (Bento Card) */}
        <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md border border-neutral-200 rounded-3xl p-8 md:p-12 shadow-sm mb-20">
          
          <div className="flex items-center gap-4 mb-10 pb-8 border-b border-neutral-200">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center shrink-0">
              <Calculator size={28} />
            </div>
            <div>
              <h2 className="font-serif text-[26px] text-[#2C3539]">Metabolic Baseline Calculator</h2>
              <p className="text-[15px] text-[#2C3539]/60 font-medium">Estimate your adjusted maintenance energy requirements.</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Form Section */}
            <form onSubmit={calculateTdee} className="flex-1 space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <label className="block text-[15px] font-medium text-[#2C3539]/80">Gender</label>
                  <div className="relative">
                    <select 
                      value={gender} 
                      onChange={(e) => { setGender(e.target.value as 'male' | 'female'); setCalculatedTdee(null); }}
                      className="w-full h-14 bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 rounded-xl appearance-none focus:outline-none focus:border-[#8A9A86] transition-colors cursor-pointer text-[15px]"
                    >
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-[#2C3539]/40">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[15px] font-medium text-[#2C3539]/80">Age (years)</label>
                  <input 
                    type="number" 
                    required 
                    min="18" 
                    max="100"
                    value={age} 
                    onChange={(e) => { setAge(e.target.value); setCalculatedTdee(null); }}
                    className="w-full h-14 bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 rounded-xl focus:outline-none focus:border-[#8A9A86] transition-colors text-[15px] placeholder:text-[#2C3539]/30"
                    placeholder="e.g. 45"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[15px] font-medium text-[#2C3539]/80">Weight (kg)</label>
                  <input 
                    type="number" 
                    required 
                    min="40" 
                    max="250"
                    step="0.1"
                    value={weight} 
                    onChange={(e) => { setWeight(e.target.value); setCalculatedTdee(null); }}
                    className="w-full h-14 bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 rounded-xl focus:outline-none focus:border-[#8A9A86] transition-colors text-[15px] placeholder:text-[#2C3539]/30"
                    placeholder="e.g. 85"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[15px] font-medium text-[#2C3539]/80">Height (cm)</label>
                  <input 
                    type="number" 
                    required 
                    min="120" 
                    max="220"
                    value={height} 
                    onChange={(e) => { setHeight(e.target.value); setCalculatedTdee(null); }}
                    className="w-full h-14 bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 rounded-xl focus:outline-none focus:border-[#8A9A86] transition-colors text-[15px] placeholder:text-[#2C3539]/30"
                    placeholder="e.g. 165"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="block text-[15px] font-medium text-[#2C3539]/80">Activity Level</label>
                  <div className="relative">
                    <select 
                      value={activityLevel} 
                      onChange={(e) => { setActivityLevel(e.target.value); setCalculatedTdee(null); }}
                      className="w-full h-14 bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 rounded-xl appearance-none focus:outline-none focus:border-[#8A9A86] transition-colors cursor-pointer text-[15px]"
                    >
                      <option value="sedentary">Sedentary (office job, little to no exercise)</option>
                      <option value="light">Light Activity (1-3 days/week of light exercise)</option>
                      <option value="moderate">Moderate Activity (3-5 days/week of moderate exercise)</option>
                      <option value="active">Active (6-7 days/week of hard exercise)</option>
                      <option value="very_active">Very Active (physical job + hard training)</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-[#2C3539]/40">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-200">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                    <input 
                      type="checkbox" 
                      className="sr-only" 
                      checked={isMedicalClient}
                      onChange={(e) => setIsMedicalClient(e.target.checked)}
                    />
                    <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${isMedicalClient ? 'bg-[#8A9A86] border-[#8A9A86]' : 'bg-[#FAFAF9] border-neutral-300 group-hover:border-[#8A9A86]'}`}>
                      {isMedicalClient && (
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-[15px] md:text-[16px] text-[#2C3539]/80 leading-relaxed font-medium select-none">
                    I am currently utilizing GLP-1 medications and experiencing rapid adaptive thermogenesis.
                  </span>
                </label>
              </div>

              <button 
                type="submit"
                className="w-full h-14 bg-[#8A9A86] hover:bg-[#768672] text-white rounded-xl font-medium transition-colors text-[16px] shadow-sm mt-8"
              >
                Calculate Baseline Expenditure
              </button>
            </form>

            {/* Output Section */}
            <div className={`lg:w-[320px] shrink-0 bg-[#FAFAF9] rounded-2xl border border-neutral-200 p-8 flex flex-col justify-center transition-all duration-500 ${calculatedTdee !== null ? 'opacity-100 translate-y-0' : 'opacity-40 blur-[2px] pointer-events-none'}`}>
              <div className="text-center">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#2C3539]/50 mb-4">
                  {isMedicalClient ? 'Adjusted Medical TDEE' : 'Estimated Standard TDEE'}
                </span>
                
                {calculatedTdee !== null ? (
                  <div className="font-serif text-[42px] text-[#2C3539] leading-none mb-3 font-medium">
                    {calculatedTdee.toLocaleString()}
                  </div>
                ) : (
                  <div className="font-serif text-[42px] text-[#2C3539]/20 leading-none mb-3 font-medium">
                    ----
                  </div>
                )}
                
                <span className="text-[15px] font-medium text-[#2C3539]/60">kcal / day</span>
              </div>

              {calculatedTdee !== null && isMedicalClient && (
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <div className="text-[13px] leading-relaxed text-[#2C3539]/80 space-y-4">
                    <p>
                      <strong className="text-[#8A9A86] font-semibold block mb-1">Critical Tracking Note</strong>
                      Appetite muting may make hitting a standard calorie floor difficult. Instead of aggressive tracking, prioritize reaching your protein targets to protect your skeletal lean mass.
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>

          <div className="text-center mt-12 border-t border-neutral-200 pt-6">
            <p className="text-[12px] text-[#2C3539]/50 max-w-2xl mx-auto leading-relaxed">
              Calculations suggest general physiological baseline estimations and do not serve as a clinical medical prescription. Actual individual absorption thresholds vary. Verify your daily macro positions with your healthcare provider.
            </p>
          </div>
        </div>

        {/* Mobile-Responsive Accordion Sections */}
        <div className="max-w-4xl mx-auto space-y-4 mb-20">
          <details className="group bg-white border border-neutral-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-serif text-[20px] md:text-[22px] text-[#2C3539]">
              How GLP-1 medications alter metabolic expenditure
              <span className="ml-6 flex-shrink-0 transition duration-300 group-open:-rotate-180">
                <svg className="w-6 h-6 text-[#8A9A86]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-6 pt-0 text-[15px] leading-relaxed text-[#2C3539]/70 space-y-4 border-t border-neutral-100 mt-2">
              <p>
                Total Daily Energy Expenditure (TDEE) is traditionally calculated using basal metabolic rate (BMR) and physical activity levels. However, clinical interventions disrupt this standard equation. GLP-1 medications alter gastric emptying rates, hormonal hunger signals, and systemic inflammation profiles, fundamentally changing how your body processes and stores energy.
              </p>
              <p>
                As you undergo rapid weight loss, your BMR naturally decreases because a smaller body requires less baseline energy to function. Furthermore, the body may initiate adaptive thermogenesis—a defensive slowdown of metabolic rate in response to severe caloric restriction. Monitoring these shifts is vital to prevent long-term metabolic stalling.
              </p>
            </div>
          </details>

          <details className="group bg-white border border-neutral-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-serif text-[20px] md:text-[22px] text-[#2C3539]">
              The difference between standard TDEE and medical weight loss tracking
              <span className="ml-6 flex-shrink-0 transition duration-300 group-open:-rotate-180">
                <svg className="w-6 h-6 text-[#8A9A86]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-6 pt-0 text-[15px] leading-relaxed text-[#2C3539]/70 space-y-4 border-t border-neutral-100 mt-2">
              <p>
                In the traditional fitness space, TDEE is used to establish a strict daily caloric deficit (often 500 calories below maintenance). In medical weight loss, this approach is counterproductive and potentially dangerous. The medication is already enforcing a massive deficit—often far beyond what standard calculators recommend.
              </p>
              <p>
                Medical weight loss tracking flips the paradigm. Instead of using TDEE to find a maximum caloric ceiling, we use it to understand the gap between your energy output and your drastically reduced intake. The goal shifts from "eating less" to "eating defensively"—ensuring that the small volume of food you can tolerate is hyper-optimized for protein density and micronutrient value to prevent malnutrition and muscle wasting.
              </p>
            </div>
          </details>

          <details className="group bg-white border border-neutral-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-serif text-[20px] md:text-[22px] text-[#2C3539]">
              Adapting your energy intake for long-term metabolic maintenance
              <span className="ml-6 flex-shrink-0 transition duration-300 group-open:-rotate-180">
                <svg className="w-6 h-6 text-[#8A9A86]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-6 pt-0 text-[15px] leading-relaxed text-[#2C3539]/70 space-y-4 border-t border-neutral-100 mt-2">
              <p>
                As you approach your goal weight, or if you begin tapering off clinical interventions, your energy intake must be carefully reverse-engineered. Remaining in a severe caloric deficit indefinitely will degrade your skeletal muscle and compromise your bone density.
              </p>
              <p>
                The long-term maintenance phase requires a strategic reintroduction of calories, paired with progressive resistance training. This combination sends a clear physiological signal to your body to rebuild lean tissue, thereby increasing your resting metabolic rate and securing your weight loss results for the future. Your TDEE calculation becomes the roadmap for this safe, upward adjustment.
              </p>
            </div>
          </details>
        </div>

      </div>
    </div>
  );
};
