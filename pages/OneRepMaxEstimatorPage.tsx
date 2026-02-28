import React from 'react';
import { OneRepMaxEstimator } from '../components/OneRepMaxEstimator';
import { SeoHead } from '../components/SeoHead';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const OneRepMaxEstimatorPage: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="1RM Estimator | One Rep Max Calculator | WRK"
        description="Calculate your estimated 1 Rep Max (1RM) for strength training. Use this tool to set your training percentages."
      />
      
      <div className="bg-primary min-h-screen transition-colors duration-300">
        <div className="pt-32 pb-16 px-6 bg-secondary border-b border-border">
           <div className="max-w-4xl mx-auto text-center">
             <Link to="/tools" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-text-secondary hover:text-accent mb-6 transition-colors">
               <ArrowLeft size={14} className="mr-2" /> Back to Tools
             </Link>
             <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6 text-text-primary">
               1RM Estimator
             </h1>
             <p className="text-xl text-text-secondary max-w-2xl mx-auto">
               Calculate your strength ceiling without testing to failure.
             </p>
           </div>
        </div>

        <div className="px-6 pb-24 -mt-8">
           <OneRepMaxEstimator />
        </div>
      </div>
    </>
  );
};
