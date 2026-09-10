import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { ArrowRight, Check, Smartphone, Activity, Utensils, MessageSquare, Video, ShieldCheck, Plus, Minus, Lock } from 'lucide-react';

export const Toolkit: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "How do I access the toolkit after buying?",
      a: "After completing your purchase, you will receive an immediate welcome email with instructions to download the WRK Training App on iOS or Android and set up your login. Your workouts and nutrition resources will be pre-loaded into your account."
    },
    {
      q: "Is there an ongoing monthly subscription for the app?",
      a: "No. The $29 NZD payment is a one-time charge. You get ongoing access to the toolkit, workout logs, video demonstrations, and habit tools without recurring monthly fees."
    },
    {
      q: "What if I don't have gym equipment?",
      a: "The app contains dedicated tracks for both commercial gyms and home setups using basic dumbbells and resistance bands. You can toggle between them depending on where you train."
    },
    {
      q: "Can I upgrade to 1-on-1 coaching later?",
      a: "Yes. If you decide you'd like custom workout programming, weekly form checks, and direct 1-on-1 coach messaging, you can easily upgrade to our Online Coaching service right from the app."
    }
  ];

  return (
    <>
      <SeoHead 
        title="GLP-1 Workout & Nutrition App Toolkit | WRK Personal Training"
        description="Get instant access to the WRK Training App: interactive GLP-1 workouts with video demos, automated coach check-in prompts, and high-protein nutrition guides for $29."
      />
      <div className="flex flex-col w-full overflow-x-hidden bg-neutral-900 pb-24 text-neutral-100 selection:bg-teal-500/30">
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[85svh] w-full flex flex-col justify-center items-center py-32 px-5 text-center">
          <div className="absolute inset-0 z-0 bg-neutral-950">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/10 via-neutral-950 to-neutral-950"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-[900px] mx-auto mt-16 md:mt-24">
            <span className="inline-flex items-center font-sans font-semibold text-xs uppercase tracking-widest text-teal-400 bg-teal-400/10 border border-teal-400/20 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
              <Smartphone className="w-3.5 h-3.5 mr-2" /> Delivered via the WRK Training App • Complete Digital Access
            </span>
            
            <h1 className="font-serif text-[42px] sm:text-[56px] md:text-[72px] lg:text-[84px] leading-[1.05] tracking-tight mb-8">
              The Complete GLP-1 <br className="hidden md:block"/>
              <span className="text-teal-400 italic font-light">Workout & Nutrition Toolkit.</span>
            </h1>
            
            <p className="font-sans text-[18px] md:text-[22px] text-neutral-300 font-medium mx-auto mb-8 leading-relaxed max-w-[700px]">
              Interactive strength training and nutrition frameworks designed specifically for weight loss medication. Log workouts, watch exercise video demos, track habits, and receive regular automated check-ins—all inside the WRK Training App.
            </p>

            <div className="text-white font-serif text-2xl md:text-3xl mb-12">
              One-Time Access: <span className="text-teal-400">$29 NZD</span> <span className="text-sm text-neutral-400 font-sans tracking-wide">(Approx. $18 USD / £14 GBP)</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a href="https://wrkpersonaltraining.mypthub.net/p/236048" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" fullWidth className="group bg-teal-600 hover:bg-teal-500 text-white border-none py-6 px-10 text-lg">
                  Get Instant App Access — $29 NZD <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-neutral-400 font-medium border-t border-neutral-800/50 pt-10">
              <div className="flex items-center"><Check className="w-4 h-4 text-teal-500 mr-2 shrink-0" /> Full Access in the WRK App (iOS & Android)</div>
              <div className="flex items-center"><Check className="w-4 h-4 text-teal-500 mr-2 shrink-0" /> Interactive Workout Logging & HD Video Demos</div>
              <div className="flex items-center"><Check className="w-4 h-4 text-teal-500 mr-2 shrink-0" /> Zero Monthly Subscriptions or Hidden Fees</div>
            </div>
          </div>
        </section>

        {/* 2. WHO THIS IS FOR */}
        <section className="py-24 px-5 md:px-12 bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="md:col-span-5 relative">
               <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative border border-neutral-800">
                 <img 
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2000&auto=format&fit=crop" 
                    alt="Strength training app interface"
                    className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 hover:mix-blend-normal transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-teal-900/20 mix-blend-multiply"></div>
                 <div className="absolute bottom-6 left-6 right-6 bg-neutral-950/90 backdrop-blur-md border border-neutral-800 p-4 rounded-xl flex items-center justify-center gap-3">
                   <Smartphone className="w-6 h-6 text-teal-400" />
                   <span className="text-white font-semibold text-sm">Available on iOS & Android</span>
                 </div>
               </div>
            </div>
            
            <div className="md:col-span-7">
              <span className="block text-sm text-teal-400 font-semibold tracking-widest uppercase mb-4">Built for Independence</span>
              <h2 className="font-serif text-[32px] md:text-[40px] text-white leading-[1.1] mb-6">
                Want Structure Without the Cost of 1-on-1 Coaching?
              </h2>
              <div className="prose prose-invert prose-lg max-w-none text-neutral-300 font-sans leading-relaxed">
                <p>
                  Not everyone needs weekly personal training calls. If you are self-motivated and want a clear, reliable system to follow, you don’t have to piece together random advice or flip through static PDFs at the gym.
                </p>
                <p>
                  When you are taking a GLP-1 medication, generic fitness routines leave you drained. You need:
                </p>
                <ul className="space-y-4 my-8 list-none pl-0">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-teal-500 mt-2.5 mr-4 shrink-0"></span> 
                    <span><strong>Interactive tracking</strong> so you know which weights to lift each week.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-teal-500 mt-2.5 mr-4 shrink-0"></span> 
                    <span><strong>Short, efficient 30-minute sessions</strong> that don't exhaust your central nervous system.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-teal-500 mt-2.5 mr-4 shrink-0"></span> 
                    <span><strong>Clear exercise video demonstrations</strong> so you never wonder if your form is correct.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-teal-500 mt-2.5 mr-4 shrink-0"></span> 
                    <span><strong>Structured habits and reminders</strong> that keep you consistent when medication side effects kick in.</span>
                  </li>
                </ul>
                <p className="font-medium text-white text-xl">
                  The WRK GLP-1 Toolkit delivers our complete coaching framework straight to your phone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHAT'S INSIDE (THE EXPERIENCE) */}
        <section className="py-24 px-5 md:px-12 bg-neutral-950">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <span className="block text-sm text-teal-400 font-semibold tracking-widest uppercase mb-4">The Experience</span>
              <h2 className="font-serif text-[36px] md:text-[48px] text-white max-w-[800px] mx-auto leading-tight">
                Everything You Need to Protect Muscle, Inside the App
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl hover:border-teal-900/50 transition-colors">
                <div className="w-14 h-14 bg-teal-950 rounded-2xl flex items-center justify-center mb-6">
                  <Video className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-4">Interactive Home & Gym Workout Programs</h3>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  Built-in 3-day and 4-day workout tracks optimized for lean muscle retention during calorie deficits.
                </p>
                <ul className="space-y-2 mt-auto w-full border-t border-neutral-800 pt-4">
                  <li className="flex text-sm text-neutral-300"><Check className="w-4 h-4 text-teal-400 mr-2 shrink-0" /> Clean 30-minute session templates</li>
                  <li className="flex text-sm text-neutral-300"><Check className="w-4 h-4 text-teal-400 mr-2 shrink-0" /> On-demand exercise video demos</li>
                </ul>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl hover:border-teal-900/50 transition-colors md:translate-y-8">
                <div className="w-14 h-14 bg-teal-950 rounded-2xl flex items-center justify-center mb-6">
                  <Utensils className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-4">Low-Appetite Nutrition & Protein Blueprints</h3>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  Practical strategies to hit 100g+ of daily protein without forcing down giant, heavy meals.
                </p>
                <ul className="space-y-2 mt-auto w-full border-t border-neutral-800 pt-4">
                  <li className="flex text-sm text-neutral-300"><Check className="w-4 h-4 text-teal-400 mr-2 shrink-0" /> High-nutrient grocery cheat sheets</li>
                  <li className="flex text-sm text-neutral-300"><Check className="w-4 h-4 text-teal-400 mr-2 shrink-0" /> Digestion & hydration protocols</li>
                </ul>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl hover:border-teal-900/50 transition-colors">
                <div className="w-14 h-14 bg-teal-950 rounded-2xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-4">Automated Coach Accountability & Habits</h3>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  Scheduled automated prompts and check-in reminders sent directly through the app to keep you focused.
                </p>
                <ul className="space-y-2 mt-auto w-full border-t border-neutral-800 pt-4">
                  <li className="flex text-sm text-neutral-300"><Check className="w-4 h-4 text-teal-400 mr-2 shrink-0" /> Daily habit trackers</li>
                  <li className="flex text-sm text-neutral-300"><Check className="w-4 h-4 text-teal-400 mr-2 shrink-0" /> Side-effect navigation guidelines</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. COMPARISON TABLE */}
        <section className="py-24 px-5 md:px-12 bg-neutral-900 border-y border-neutral-800">
           <div className="max-w-[900px] mx-auto">
             <div className="text-center mb-16">
               <h2 className="font-serif text-[32px] md:text-[40px] text-white">Why the App Beats Static PDFs</h2>
             </div>
             
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr>
                     <th className="p-4 border-b border-neutral-800 text-neutral-400 font-semibold w-1/3">Feature</th>
                     <th className="p-4 border-b border-neutral-800 text-neutral-500 font-semibold w-1/3">Static Downloadable PDFs</th>
                     <th className="p-4 border-b border-neutral-800 text-teal-400 font-semibold w-1/3 bg-teal-950/20 rounded-t-xl">The WRK App Toolkit ($29)</th>
                   </tr>
                 </thead>
                 <tbody className="text-neutral-300">
                   <tr>
                     <td className="p-4 border-b border-neutral-800 font-medium">Delivery Method</td>
                     <td className="p-4 border-b border-neutral-800 text-neutral-500">Clunky email attachments & PDFs</td>
                     <td className="p-4 border-b border-neutral-800 bg-teal-950/20 text-white font-medium">Dedicated WRK Training App (iOS & Android)</td>
                   </tr>
                   <tr>
                     <td className="p-4 border-b border-neutral-800 font-medium">Exercise Demos</td>
                     <td className="p-4 border-b border-neutral-800 text-neutral-500">Static pictures or text descriptions</td>
                     <td className="p-4 border-b border-neutral-800 bg-teal-950/20 text-white font-medium">On-demand exercise video demos inside each workout</td>
                   </tr>
                   <tr>
                     <td className="p-4 border-b border-neutral-800 font-medium">Progress Tracking</td>
                     <td className="p-4 border-b border-neutral-800 text-neutral-500">Pen and paper or manual spreadsheets</td>
                     <td className="p-4 border-b border-neutral-800 bg-teal-950/20 text-white font-medium">Interactive weight, rep, and habit logging</td>
                   </tr>
                   <tr>
                     <td className="p-4 border-b border-neutral-800 font-medium">Consistency Support</td>
                     <td className="p-4 border-b border-neutral-800 text-neutral-500">Zero follow-up once downloaded</td>
                     <td className="p-4 border-b border-neutral-800 bg-teal-950/20 text-white font-medium">Automated app prompts and reminders from your coach</td>
                   </tr>
                   <tr>
                     <td className="p-4 font-medium">Investment</td>
                     <td className="p-4 text-neutral-500">Typically $30–$50 for static files</td>
                     <td className="p-4 bg-teal-950/20 text-white font-medium rounded-b-xl border-b-2 border-teal-500/50">$29 NZD one-time access</td>
                   </tr>
                 </tbody>
               </table>
             </div>
           </div>
        </section>

        {/* 5. PURCHASE & CHECKOUT CARD */}
        <section id="checkout" className="py-24 px-5 md:px-12 bg-neutral-950">
          <div className="max-w-[600px] mx-auto">
            <div className="bg-neutral-900 border border-neutral-800 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 rounded-bl-full -mr-16 -mt-16"></div>
               <div className="relative z-10">
                 <span className="inline-flex items-center text-xs font-semibold text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full mb-6 border border-teal-400/20 tracking-widest uppercase">
                   <ShieldCheck className="w-3.5 h-3.5 mr-1" /> One-Time Purchase • No Recurring Fees
                 </span>
                 <h3 className="font-serif text-[28px] md:text-[32px] text-white mb-4">The WRK GLP-1 App Toolkit</h3>
                 
                 <div className="flex items-end gap-2 mb-8 border-b border-neutral-800 pb-8">
                   <span className="font-serif text-5xl md:text-6xl text-white">$29</span>
                   <span className="text-neutral-400 text-lg mb-1">NZD (One-Off Access)</span>
                 </div>

                 <p className="text-white font-medium mb-4">What's Included:</p>
                 <ul className="space-y-4 mb-10">
                   {[
                     "Instant account activation in the WRK Training App",
                     "Complete 3-day and 4-day resistance tracks (Home & Commercial Gym)",
                     "Exercise video library with lifting demonstrations",
                     "Interactive workout and habit logging",
                     "High-protein nutrition guide, grocery list & hydration protocol",
                     "Automated app check-in reminders and momentum prompts"
                   ].map((item, i) => (
                     <li key={i} className="flex items-start">
                       <Check className="w-5 h-5 text-teal-400 mr-3 shrink-0 mt-0.5" />
                       <span className="text-neutral-300">{item}</span>
                     </li>
                   ))}
                 </ul>

                 <div className="space-y-4">
                   <a href="https://wrkpersonaltraining.mypthub.net/p/236048" target="_blank" rel="noopener noreferrer" className="block w-full">
                     <Button size="lg" fullWidth className="bg-teal-600 hover:bg-teal-500 text-white py-6 text-[17px] border-none">
                       Get Instant App Access — $29 NZD
                     </Button>
                   </a>
                   <div className="flex items-center justify-center text-xs text-neutral-500 mt-4 font-medium">
                     <Lock className="w-3 h-3 mr-1" /> Secure SSL Checkout
                   </div>
                 </div>
                 
                 <div className="mt-8 bg-neutral-950 rounded-xl p-4 border border-neutral-800 text-sm text-neutral-400">
                   <strong className="text-neutral-300">Delivery Note:</strong> Instant account setup instructions sent via email immediately after purchase.
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* 6. FAQ */}
        <section className="py-24 px-5 md:px-12 bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-serif text-[32px] md:text-[40px] text-center text-white mb-16">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-900 transition-colors"
                  >
                    <span className="font-sans font-medium text-lg text-white pr-4">{faq.q}</span>
                    <span className="text-teal-400 shrink-0">
                      {openFaq === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-neutral-400 leading-relaxed border-t border-neutral-800 pt-4">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
