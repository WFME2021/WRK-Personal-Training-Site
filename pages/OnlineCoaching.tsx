import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Smartphone, Video, MessageSquare, Check, ScanBarcode, LineChart, Utensils, Globe } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const OnlineCoaching: React.FC = () => {
  const { pageContent } = useContent();
  const { workoutLogImage, videoImage, macroImage, nutritionLogImage } = pageContent.onlineCoaching;

  return (
    <div className="bg-white">
      {/* Hero - Dark Green Background */}
      <section className="bg-brand-primary text-white py-24 px-6 rounded-b-[3rem]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-6">Online <br/><span className="text-brand-lime">Coaching</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Custom programming. Expert coaching. Remote accountability. For people who need flexibility without sacrificing results.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <Button className="bg-brand-lime text-brand-primary hover:bg-white">Book Free Strategy Call</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Block 1: Training */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
           <div className="order-2 lg:order-1 flex justify-center gap-8 relative">
              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-light rounded-full z-0 blur-3xl opacity-50"></div>
              
              {/* Phone 1: Workout Log */}
              <div className="relative z-10 w-[280px] md:w-[320px] aspect-[9/19.5] bg-black rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden transform -rotate-6 mt-12">
                 <img 
                  src={workoutLogImage} 
                  alt="Workout Session Log with Personal Best" 
                  className="w-full h-full object-cover" 
                 />
                 {/* Mock Status Bar */}
                 <div className="absolute top-0 w-full h-6 bg-black z-20"></div>
              </div>

              {/* Phone 2: Video */}
              <div className="relative z-10 w-[280px] md:w-[320px] aspect-[9/19.5] bg-black rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden transform rotate-3 -mt-12">
                 <img 
                  src={videoImage} 
                  alt="Exercise Video Description" 
                  className="w-full h-full object-cover" 
                 />
              </div>
           </div>

           <div className="order-1 lg:order-2">
              <div className="inline-block bg-brand-lime px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 text-brand-primary">Training</div>
              <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-6 leading-none text-brand-primary">
                Expert Coaching <br/> No Commute.
              </h2>
              <p className="text-brand-gray text-lg mb-8 leading-relaxed">
                This isn't "buy a generic program and hope for the best." It's custom programming designed specifically for your equipment and schedule, with regular check-ins and form reviews.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-primary text-white p-3 rounded-full mr-4 shrink-0">
                     <Video size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Video Form Reviews</h3>
                    <p className="text-sm text-brand-gray">Film your lifts, send them to me. I'll review and give feedback so you know your depth is good and you're safe.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-primary text-white p-3 rounded-full mr-4 shrink-0">
                     <Globe size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Training Anywhere</h3>
                    <p className="text-sm text-brand-gray">Travel frequently? We build hotel workouts. Home gym? We adapt to what you have.</p>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Feature Block 2: Nutrition - Dark Green Background */}
      <section className="py-24 px-6 bg-brand-primary text-white rounded-[3rem] mx-4">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
           <div>
              <div className="inline-block bg-white text-brand-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Nutrition</div>
              <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-6 leading-none">
                Fuel Your <br/> Performance.
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Strategies for busy schedules, eating out, and staying on track. Not rigid meal plans—flexible strategies you can actually sustain.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-lime text-brand-primary p-3 rounded-full mr-4 shrink-0">
                     <ScanBarcode size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Barcode Scanner</h3>
                    <p className="text-sm text-gray-300">Log food instantly from our massive verified database.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-lime text-brand-primary p-3 rounded-full mr-4 shrink-0">
                     <Utensils size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Macro Breakdown</h3>
                    <p className="text-sm text-gray-300">Visualise your Protein, Fats, and Carbs with the daily dashboard.</p>
                  </div>
                </div>
              </div>
           </div>

           <div className="flex justify-center gap-8 relative">
              {/* Phone 3: Nutrition Dashboard */}
              <div className="relative z-10 w-[280px] md:w-[320px] aspect-[9/19.5] bg-white rounded-[3rem] border-[8px] border-brand-primary shadow-2xl overflow-hidden transform rotate-3 mt-8">
                 <img 
                  src={macroImage} 
                  alt="Nutrition Macros Pie Chart" 
                  className="w-full h-full object-cover" 
                 />
              </div>

              {/* Phone 4: Scanner / Log */}
              <div className="relative z-10 w-[280px] md:w-[320px] aspect-[9/19.5] bg-white rounded-[3rem] border-[8px] border-brand-primary shadow-2xl overflow-hidden transform -rotate-3 -mt-8 hidden md:block">
                 <img 
                  src={nutritionLogImage} 
                  alt="Daily Nutrition Log" 
                  className="w-full h-full object-cover" 
                 />
              </div>
           </div>
        </div>
      </section>

      {/* Pricing Table */}
       <section className="py-24 px-6 bg-brand-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl uppercase font-bold mb-4 text-brand-primary">Choose Your Level</h2>
            <p className="text-brand-gray">Three tiers based on the level of support you need.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Starter */}
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 flex flex-col">
               <h3 className="font-display text-3xl font-bold mb-4 text-brand-primary">Starter</h3>
               <p className="text-sm text-brand-gray mb-6">For people who know how to train, just need expert programming.</p>
               <div className="flex-grow space-y-4 mb-8">
                 <li className="flex items-center text-sm"><Check size={16} className="mr-2 text-brand-green"/> Custom Training Program</li>
                 <li className="flex items-center text-sm"><Check size={16} className="mr-2 text-brand-green"/> Monthly Check-in</li>
                 <li className="flex items-center text-sm"><Check size={16} className="mr-2 text-brand-green"/> Basic Nutrition Guidance</li>
                 <li className="flex items-center text-sm"><Check size={16} className="mr-2 text-brand-green"/> App Access</li>
               </div>
               <Link to="/contact">
                 <Button variant="outline" fullWidth>Apply for Starter</Button>
               </Link>
            </div>

            {/* Premium */}
            <div className="bg-brand-primary text-white rounded-[2rem] p-8 border border-brand-primary flex flex-col relative transform lg:-translate-y-4 shadow-xl">
               <div className="absolute top-0 right-0 bg-brand-lime text-brand-primary px-4 py-1 rounded-bl-xl font-bold text-xs uppercase tracking-wider">Most Popular</div>
               <h3 className="font-display text-3xl font-bold mb-4">Premium</h3>
               <p className="text-sm text-gray-300 mb-6">Regular accountability and full nutrition coaching.</p>
               <div className="flex-grow space-y-4 mb-8">
                 <li className="flex items-center text-sm"><Check size={16} className="mr-2 text-brand-lime"/> Everything in Starter</li>
                 <li className="flex items-center text-sm"><Check size={16} className="mr-2 text-brand-lime"/> Weekly Check-ins</li>
                 <li className="flex items-center text-sm"><Check size={16} className="mr-2 text-brand-lime"/> Full Nutrition Coaching</li>
                 <li className="flex items-center text-sm"><Check size={16} className="mr-2 text-brand-lime"/> Unlimited Video Form Reviews</li>
                 <li className="flex items-center text-sm"><Check size={16} className="mr-2 text-brand-lime"/> Priority Messaging</li>
               </div>
               <Link to="/contact">
                 <Button variant="primary" className="bg-brand-lime text-brand-primary hover:bg-white" fullWidth>Apply for Premium</Button>
               </Link>
            </div>

            {/* Elite */}
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 flex flex-col">
               <h3 className="font-display text-3xl font-bold mb-4 text-brand-primary">Elite</h3>
               <p className="text-sm text-brand-gray mb-6">Premium coaching with bi-weekly video calls.</p>
               <div className="flex-grow space-y-4 mb-8">
                 <li className="flex items-center text-sm"><Check size={16} className="mr-2 text-brand-green"/> Everything in Premium</li>
                 <li className="flex items-center text-sm"><Check size={16} className="mr-2 text-brand-green"/> Bi-weekly Video Calls (30m)</li>
                 <li className="flex items-center text-sm"><Check size={16} className="mr-2 text-brand-green"/> Advanced Periodization</li>
                 <li className="flex items-center text-sm"><Check size={16} className="mr-2 text-brand-green"/> Same-day Messaging</li>
               </div>
               <Link to="/contact">
                 <Button variant="outline" fullWidth>Apply for Elite</Button>
               </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};