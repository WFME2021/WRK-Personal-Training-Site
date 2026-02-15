
import React from 'react';
import { CalorieCalculator } from '../components/CalorieCalculator';
import { SeoHead } from '../components/SeoHead';

export const Tools: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="Nutrition Engine | Calorie & Macro Calculator | WRK"
        description="Calculate your calories and macros for maintenance, muscle gain, or body recomposition. Includes the 'Party Fund' alcohol calculator."
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

        <div className="px-6 pb-24 -mt-8">
           <CalorieCalculator />
        </div>
      </div>
    </>
  );
};
