const fs = require('fs');

const originalContent = `        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          
          {/* Tool 1: Protein Targeter */}
          <div className="bg-white border border-neutral-200 p-8 md:p-10 rounded-3xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8 shrink-0">
              <Dna size={28} />
            </div>
            
            <div className="mb-8 flex-grow">
              <h3 className="font-serif text-[26px] md:text-[30px] text-[#2C3539] leading-tight mb-2">
                Protein Target Calculator
              </h3>
              <p className="font-serif text-[18px] text-[#2C3539]/80 mb-6">How much protein do you need?</p>
              
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/80 mb-6">
                Protein becomes an important consideration when you're eating less and working to maintain strength during weight loss.
              </p>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/80">
                Use the calculator to estimate a daily protein target based on your individual details and goals.
              </p>
            </div>
            
            <div className="mt-auto">
              <div className="bg-[#FAFAF9] rounded-2xl p-6 border border-neutral-200 mb-6">
                <p className="text-[13px] font-bold uppercase tracking-widest text-[#8A9A86] mb-2">Useful for:</p>
                <div className="flex flex-wrap gap-2 text-[14px] text-[#2C3539]/80">
                  <span>Protein intake</span>
                  <span className="text-neutral-300">•</span>
                  <span>Strength training</span>
                  <span className="text-neutral-300">•</span>
                  <span>Muscle preservation</span>
                  <span className="text-neutral-300">•</span>
                  <span>Weight loss</span>
                </div>
              </div>
              <Link 
                to="/tools/protein-calculator"
                className="flex items-center justify-center w-full bg-[#8A9A86] hover:bg-[#768672] text-white h-14 rounded-xl font-medium transition-colors text-[16px]"
              >
                Calculate Your Protein Target <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Tool 2: Hydration Calculator */}
          <div className="bg-white border border-neutral-200 p-8 md:p-10 rounded-3xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8 shrink-0">
              <Droplet size={28} />
            </div>
            
            <div className="mb-8 flex-grow">
              <h3 className="font-serif text-[26px] md:text-[30px] text-[#2C3539] leading-tight mb-2">
                Hydration & Electrolyte Guide
              </h3>
              <p className="font-serif text-[18px] text-[#2C3539]/80 mb-6">Are you drinking enough?</p>
              
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/80 mb-6">
                Hydration is easy to overlook when your appetite and daily routine change.
              </p>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/80">
                Use our hydration tool to estimate your daily fluid needs and explore when electrolytes may be relevant based on your activity and circumstances.
              </p>
            </div>
            
            <div className="mt-auto">
              <div className="bg-[#FAFAF9] rounded-2xl p-6 border border-neutral-200 mb-6">
                <p className="text-[13px] font-bold uppercase tracking-widest text-[#8A9A86] mb-2">Useful for:</p>
                <div className="flex flex-wrap gap-2 text-[14px] text-[#2C3539]/80">
                  <span>Daily hydration</span>
                  <span className="text-neutral-300">•</span>
                  <span>Exercise</span>
                  <span className="text-neutral-300">•</span>
                  <span>Training</span>
                  <span className="text-neutral-300">•</span>
                  <span>Recovery</span>
                </div>
              </div>
              <Link 
                to="/tools/hydration-calculator"
                className="flex items-center justify-center w-full bg-[#8A9A86] hover:bg-[#768672] text-white h-14 rounded-xl font-medium transition-colors text-[16px]"
              >
                Check Your Hydration Needs <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Tool 3: GLP-1 Calorie & Macro Calculator */}
          <div className="bg-white border border-neutral-200 p-8 md:p-10 rounded-3xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8 shrink-0">
              <Calculator size={28} />
            </div>
            
            <div className="mb-8 flex-grow">
              <h3 className="font-serif text-[26px] md:text-[30px] text-[#2C3539] leading-tight mb-2">
                GLP-1 Calorie & Macro Calculator
              </h3>
              <p className="font-serif text-[18px] text-[#2C3539]/80 mb-6">What are your estimated daily energy needs?</p>
              
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/80 mb-6">
                Your total daily energy expenditure (TDEE) is an estimate of how much energy your body uses each day based on factors such as your body size, activity and lifestyle.
              </p>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/80">
                Use the calculator to establish a starting estimate and better understand the numbers behind your nutrition and weight-loss goals.
              </p>
            </div>
            
            <div className="mt-auto">
              <div className="bg-[#FAFAF9] rounded-2xl p-6 border border-neutral-200 mb-6">
                <p className="text-[13px] font-bold uppercase tracking-widest text-[#8A9A86] mb-2">Useful for:</p>
                <div className="flex flex-wrap gap-2 text-[14px] text-[#2C3539]/80">
                  <span>Energy needs</span>
                  <span className="text-neutral-300">•</span>
                  <span>Weight management</span>
                  <span className="text-neutral-300">•</span>
                  <span>Nutrition planning</span>
                  <span className="text-neutral-300">•</span>
                  <span>Activity</span>
                </div>
              </div>
              <Link 
                to="/tools/tdee-calculator"
                className="flex items-center justify-center w-full bg-[#8A9A86] hover:bg-[#768672] text-white h-14 rounded-xl font-medium transition-colors text-[16px]"
              >
                Calculate Your TDEE <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>`;

let content = fs.readFileSync('pages/ToolsIndex.tsx', 'utf8');
const targetContent = content.substring(
  content.indexOf('{/* Tools Grid (GLASSMORPHISM) */}'),
  content.indexOf('{/* Coming Soon Section */}')
);
content = content.replace(targetContent, originalContent + '\n\n        ');
fs.writeFileSync('pages/ToolsIndex.tsx', content);
