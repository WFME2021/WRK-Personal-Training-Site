
import React from 'react';
import { CalorieCalculator } from '../components/CalorieCalculator';
import { SeoHead } from '../components/SeoHead';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const CalorieCalculatorPage: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="Calorie Calculator | WRK"
        description="Calculate your calories and macros for maintenance, muscle gain, or body recomposition."
      />
      
      <div className="bg-primary min-h-screen transition-colors duration-300">
        <div className="pt-32 pb-16 px-6 bg-secondary border-b border-border">
           <div className="max-w-4xl mx-auto text-center">
             <Link to="/tools" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-text-secondary hover:text-accent mb-6 transition-colors">
               <ArrowLeft size={14} className="mr-2" /> Back to Tools
             </Link>
             <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6 text-text-primary">
               Calorie Calculator
             </h1>
             <p className="text-xl text-text-secondary max-w-2xl mx-auto">
               Fueling for performance, not starvation.
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
