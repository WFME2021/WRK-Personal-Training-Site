
import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, ArrowRight, Activity } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export const Tools: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="Tools & Resources | WRK Personal Training"
        description="Free tools to help you execute better. Calorie calculators, checklists, and more."
      />
      
      <div className="bg-primary min-h-screen transition-colors duration-300">
        <div className="pt-32 pb-16 px-6 bg-secondary border-b border-border">
           <div className="max-w-4xl mx-auto text-center">
             <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6 text-text-primary">
               Tools
             </h1>
             <p className="text-xl text-text-secondary max-w-2xl mx-auto">
               Free resources to help you execute better.
             </p>
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Nutrition Engine Card */}
            <Link to="/tools/calorie-calculator" className="group bg-secondary border border-border rounded-[2rem] p-8 hover:border-accent transition-all duration-300 shadow-sm hover:shadow-md flex flex-col">
               <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-border group-hover:border-accent/50 transition-colors">
                 <Flame className="text-accent" size={32} />
               </div>
               <h3 className="font-display text-2xl font-bold text-text-primary uppercase mb-4 group-hover:text-accent transition-colors">Nutrition Engine</h3>
               <p className="text-text-secondary mb-8 text-sm leading-relaxed flex-grow">
                 Calculate your daily calories, macros, and 'Party Fund' based on your specific goal and lifestyle variables.
               </p>
               <span className="text-accent font-bold text-xs uppercase tracking-widest flex items-center mt-auto">
                 Open Tool <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
               </span>
            </Link>

            {/* 1RM Estimator Card */}
            <Link to="/tools/1rm-estimator" className="group bg-secondary border border-border rounded-[2rem] p-8 hover:border-accent transition-all duration-300 shadow-sm hover:shadow-md flex flex-col">
               <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-border group-hover:border-accent/50 transition-colors">
                 <Activity className="text-accent" size={32} />
               </div>
               <h3 className="font-display text-2xl font-bold text-text-primary uppercase mb-4 group-hover:text-accent transition-colors">1RM Estimator</h3>
               <p className="text-text-secondary mb-8 text-sm leading-relaxed flex-grow">
                 Estimate your one-rep max without testing to failure. Use this to set your training percentages.
               </p>
               <span className="text-accent font-bold text-xs uppercase tracking-widest flex items-center mt-auto">
                 Open Tool <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
               </span>
            </Link>

            {/* Placeholder / Future Tool */}
            <div className="bg-primary/50 border border-border border-dashed rounded-[2rem] p-8 flex flex-col items-center justify-center text-center opacity-75">
               <div className="bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-border">
                 <Activity className="text-text-secondary" size={32} />
               </div>
               <h3 className="font-display text-xl font-bold text-text-primary uppercase mb-2">More Coming Soon</h3>
               <p className="text-text-secondary text-xs">
                 Recovery protocols and sleep trackers are in development.
               </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
