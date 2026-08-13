const fs = require('fs');
let content = fs.readFileSync('pages/ToolsIndex.tsx', 'utf8');

const targetContent = content.substring(
  content.indexOf('{/* Tools Grid */}'),
  content.indexOf('{/* Coming Soon Section */}')
);

const replacement = `        {/* Tools Grid (GLASSMORPHISM) */}
        <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] py-24 px-4 md:px-8 bg-[#2C3539] overflow-hidden my-16">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2720&auto=format&fit=crop" 
              alt="Active lifestyle"
              className="w-full h-full object-cover object-center opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#2C3539]/90 via-[#2C3539]/60 to-[#2C3539]/90"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Tool 1: Protein Targeter */}
              <div className="backdrop-blur-md bg-white/5 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] p-8 md:p-10 rounded-3xl flex flex-col transition-transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center mb-8 shrink-0 border border-white/10">
                  <Dna size={28} />
                </div>
                
                <div className="mb-8 flex-grow">
                  <h3 className="font-serif text-[26px] md:text-[30px] text-white leading-tight mb-2">
                    Protein Target Calculator
                  </h3>
                  <p className="font-serif text-[18px] text-white/80 mb-6">How much protein do you need?</p>
                  
                  <p className="text-[15px] md:text-[16px] leading-relaxed text-white/70 mb-6">
                    Protein becomes an important consideration when you're eating less and working to maintain strength during weight loss.
                  </p>
                  <p className="text-[15px] md:text-[16px] leading-relaxed text-white/70">
                    Use the calculator to estimate a daily protein target based on your individual details and goals.
                  </p>
                </div>
                
                <div className="mt-auto">
                  <div className="bg-white/10 rounded-2xl p-6 border border-white/10 mb-6">
                    <p className="text-[13px] font-bold uppercase tracking-widest text-white/60 mb-2">Useful for:</p>
                    <div className="flex flex-wrap gap-2 text-[14px] text-white/80">
                      <span>Protein intake</span>
                      <span className="text-white/30">•</span>
                      <span>Strength training</span>
                      <span className="text-white/30">•</span>
                      <span>Muscle preservation</span>
                      <span className="text-white/30">•</span>
                      <span>Weight loss</span>
                    </div>
                  </div>
                  <Link 
                    to="/tools/protein-calculator"
                    className="flex items-center justify-center w-full bg-white text-[#2C3539] hover:bg-neutral-100 h-14 rounded-xl font-medium transition-colors text-[16px]"
                  >
                    Calculate Your Protein Target <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>

              {/* Tool 2: Hydration Calculator */}
              <div className="backdrop-blur-md bg-white/5 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] p-8 md:p-10 rounded-3xl flex flex-col transition-transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center mb-8 shrink-0 border border-white/10">
                  <Droplet size={28} />
                </div>
                
                <div className="mb-8 flex-grow">
                  <h3 className="font-serif text-[26px] md:text-[30px] text-white leading-tight mb-2">
                    Hydration & Electrolyte Guide
                  </h3>
                  <p className="font-serif text-[18px] text-white/80 mb-6">Are you drinking enough?</p>
                  
                  <p className="text-[15px] md:text-[16px] leading-relaxed text-white/70 mb-6">
                    Hydration is easy to overlook when your appetite and daily routine change.
                  </p>
                  <p className="text-[15px] md:text-[16px] leading-relaxed text-white/70">
                    Use our hydration tool to estimate your daily fluid needs and explore when electrolytes may be relevant based on your activity and circumstances.
                  </p>
                </div>
                
                <div className="mt-auto">
                  <div className="bg-white/10 rounded-2xl p-6 border border-white/10 mb-6">
                    <p className="text-[13px] font-bold uppercase tracking-widest text-white/60 mb-2">Useful for:</p>
                    <div className="flex flex-wrap gap-2 text-[14px] text-white/80">
                      <span>Daily hydration</span>
                      <span className="text-white/30">•</span>
                      <span>Exercise</span>
                      <span className="text-white/30">•</span>
                      <span>Training</span>
                      <span className="text-white/30">•</span>
                      <span>Recovery</span>
                    </div>
                  </div>
                  <Link 
                    to="/tools/hydration-calculator"
                    className="flex items-center justify-center w-full bg-white text-[#2C3539] hover:bg-neutral-100 h-14 rounded-xl font-medium transition-colors text-[16px]"
                  >
                    Check Your Hydration Needs <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>

              {/* Tool 3: GLP-1 Calorie & Macro Calculator */}
              <div className="backdrop-blur-md bg-white/5 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] p-8 md:p-10 rounded-3xl flex flex-col transition-transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center mb-8 shrink-0 border border-white/10">
                  <Calculator size={28} />
                </div>
                
                <div className="mb-8 flex-grow">
                  <h3 className="font-serif text-[26px] md:text-[30px] text-white leading-tight mb-2">
                    GLP-1 Calorie & Macro Calculator
                  </h3>
                  <p className="font-serif text-[18px] text-white/80 mb-6">What are your estimated daily energy needs?</p>
                  
                  <p className="text-[15px] md:text-[16px] leading-relaxed text-white/70 mb-6">
                    Your total daily energy expenditure (TDEE) is an estimate of how much energy your body uses each day based on factors such as your body size, activity and lifestyle.
                  </p>
                  <p className="text-[15px] md:text-[16px] leading-relaxed text-white/70">
                    Use the calculator to establish a starting estimate and better understand the numbers behind your nutrition and weight-loss goals.
                  </p>
                </div>
                
                <div className="mt-auto">
                  <div className="bg-white/10 rounded-2xl p-6 border border-white/10 mb-6">
                    <p className="text-[13px] font-bold uppercase tracking-widest text-white/60 mb-2">Useful for:</p>
                    <div className="flex flex-wrap gap-2 text-[14px] text-white/80">
                      <span>Energy needs</span>
                      <span className="text-white/30">•</span>
                      <span>Weight management</span>
                      <span className="text-white/30">•</span>
                      <span>Nutrition planning</span>
                      <span className="text-white/30">•</span>
                      <span>Activity</span>
                    </div>
                  </div>
                  <Link 
                    to="/tools/tdee-calculator"
                    className="flex items-center justify-center w-full bg-white text-[#2C3539] hover:bg-neutral-100 h-14 rounded-xl font-medium transition-colors text-[16px]"
                  >
                    Calculate Your TDEE <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        `;

content = content.replace(targetContent, replacement);
fs.writeFileSync('pages/ToolsIndex.tsx', content);
