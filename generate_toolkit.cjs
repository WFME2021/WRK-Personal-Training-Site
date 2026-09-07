const fs = require('fs');
const content = `import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { Download, FileText, Activity, Apple, Lock, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export const Toolkit: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead 
        title="GLP-1 Workout & Nutrition Toolkit | WRK Personal Training"
        description="Download the comprehensive GLP-1 toolkit: gym and home workout templates, high-protein meal guides, and medication side-effect navigation for $29."
      />
      <div className="flex flex-col w-full overflow-x-hidden bg-neutral-900 pb-24 text-neutral-100">
        
        {/* HERO */}
        <section className="relative min-h-[70svh] w-full flex flex-col justify-center items-center py-24">
          <div className="absolute inset-0 z-0 bg-neutral-950">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-neutral-950 to-neutral-950"></div>
          </div>
          <div className="relative z-10 w-full px-5 max-w-[800px] mx-auto text-center mt-12">
            <span className="inline-block font-sans font-semibold text-xs uppercase tracking-widest text-teal-400 bg-teal-400/10 px-4 py-1.5 rounded-full mb-6">
              DIGITAL DOWNLOAD
            </span>
            <h1 className="flex flex-col mb-6">
              <span className="font-serif text-[40px] sm:text-[48px] md:text-[64px] break-words leading-tight text-neutral-100">
                The Complete GLP-1 <br/><span className="text-teal-400 italic">Workout & Nutrition</span> Toolkit
              </span>
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] text-neutral-300 font-medium mx-auto mb-10 leading-relaxed max-w-[600px]">
              Everything you need to preserve muscle mass, navigate side effects, and optimize your nutrition while on weight loss medication.
            </p>
            
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 max-w-[400px] mx-auto shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-bl-full -mr-16 -mt-16"></div>
               <div className="relative z-10">
                 <div className="flex justify-between items-end border-b border-neutral-800 pb-4 mb-6">
                   <div className="text-left">
                     <span className="block text-sm text-neutral-400 uppercase tracking-wider font-semibold mb-1">One-Time Access</span>
                     <span className="font-serif text-[32px] text-white">$29</span><span className="text-neutral-400"> NZD</span>
                   </div>
                   <div className="text-teal-400 bg-teal-400/10 p-3 rounded-xl">
                     <Download className="w-6 h-6" />
                   </div>
                 </div>
                 
                 <a href="#checkout" className="block w-full">
                    <Button size="lg" fullWidth className="group">
                      Get Instant Access <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                 </a>
                 <div className="flex items-center justify-center text-xs text-neutral-500 mt-4 font-medium">
                   <Lock className="w-3 h-3 mr-1" /> Secure SSL Checkout
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24 px-5 md:px-12 bg-neutral-900">
           <div className="max-w-[1000px] mx-auto">
             <div className="text-center mb-16">
               <h2 className="font-serif text-[32px] md:text-[40px] text-neutral-100 mb-4">What's Inside The Toolkit?</h2>
               <p className="text-neutral-400 font-sans text-lg max-w-[600px] mx-auto">Skip the guesswork. We've compiled our clinical coaching frameworks into actionable templates you can use immediately.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-3xl flex flex-col items-start hover:border-teal-900/50 transition-colors">
                  <div className="bg-teal-900/30 p-4 rounded-2xl mb-6">
                    <Activity className="w-8 h-8 text-teal-400" />
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-3">Workout Templates</h3>
                  <p className="text-neutral-400 mb-4">Done-for-you resistance training programs designed specifically to combat GLP-1 induced muscle loss. Includes both Home (dumbbell/band) and Gym variations.</p>
                  <ul className="space-y-2 mt-auto w-full border-t border-neutral-800 pt-4">
                    <li className="flex text-sm text-neutral-300"><Check className="w-4 h-4 text-teal-400 mr-2 shrink-0" /> 3-Day & 4-Day Splits</li>
                    <li className="flex text-sm text-neutral-300"><Check className="w-4 h-4 text-teal-400 mr-2 shrink-0" /> Exercise substitution guides</li>
                  </ul>
                </div>
                
                <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-3xl flex flex-col items-start hover:border-teal-900/50 transition-colors">
                  <div className="bg-teal-900/30 p-4 rounded-2xl mb-6">
                    <Apple className="w-8 h-8 text-teal-400" />
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-3">High-Protein Meal Guides</h3>
                  <p className="text-neutral-400 mb-4">When appetite vanishes, hitting protein targets is incredibly difficult. We provide structured guides to getting 100g+ of protein daily without forcing large meals.</p>
                  <ul className="space-y-2 mt-auto w-full border-t border-neutral-800 pt-4">
                    <li className="flex text-sm text-neutral-300"><Check className="w-4 h-4 text-teal-400 mr-2 shrink-0" /> Macro tracking cheat sheet</li>
                    <li className="flex text-sm text-neutral-300"><Check className="w-4 h-4 text-teal-400 mr-2 shrink-0" /> Grocery list templates</li>
                  </ul>
                </div>
                
                <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-3xl flex flex-col items-start hover:border-teal-900/50 transition-colors md:col-span-2">
                  <div className="bg-teal-900/30 p-4 rounded-2xl mb-6">
                    <ShieldCheck className="w-8 h-8 text-teal-400" />
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-3">Side Effect Navigation Protocol</h3>
                  <p className="text-neutral-400 mb-4 max-w-[700px]">Expert strategies to manage fatigue, nausea, and training adaptations when adjusting to medication dosages. Know exactly when to push and when to rest.</p>
                </div>
             </div>
           </div>
        </section>

        {/* BOTTOM CTA / CHECKOUT ANCHOR */}
        <section id="checkout" className="py-24 px-5 bg-teal-950/20 text-center border-t border-teal-500/30">
          <div className="max-w-[600px] mx-auto">
            <h2 className="font-serif text-[32px] md:text-[40px] text-neutral-100 mb-6">
              Start Preserving Your Muscle Today.
            </h2>
            <p className="text-neutral-300 mb-10">Click below to purchase the digital toolkit. You will receive an email with instant download links to all PDFs and templates immediately after checkout.</p>
            
            <a href="mailto:info@wrkpersonaltraining.co.nz?subject=Toolkit%20Purchase%20Inquiry" className="inline-block w-full sm:w-auto">
               <Button size="lg" className="w-full sm:w-auto text-lg px-12 py-6">
                 Purchase Toolkit - $29
               </Button>
            </a>
            <p className="text-xs text-neutral-500 mt-6">*Currently redirecting to manual inquiry while Stripe is being configured.</p>
          </div>
        </section>

      </div>
    </>
  );
};
`
fs.writeFileSync('pages/Toolkit.tsx', content);
