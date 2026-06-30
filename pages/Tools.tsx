
import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, ArrowRight, Activity } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

import { Hero } from '../components/Hero';
import { MidPageBanner } from '../components/MidPageBanner';
import { useContent } from '../context/ContentContext';

export const Tools: React.FC = () => {
  const { pageContent } = useContent();
  const { hero, banner, seo } = pageContent.tools;

  return (
    <>
      <SeoHead 
        title={seo.title}
        description={seo.description}
      />
      
      <div className="bg-primary min-h-screen transition-colors duration-300">
        <Hero 
          image={hero.image}
          title={hero.h1}
          subtitle={hero.subhead}
          bullets={hero.bullets}
          kicker={hero.kicker}
          secondaryCta={{
            label: "Explore Tools",
            onClick: () => document.getElementById('tools-grid')?.scrollIntoView({ behavior: 'smooth' })
          }}
        />

        <div id="tools-grid" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Nutrition Engine Card */}
            <Link to="/calorie-calculator" className="group bg-secondary border border-border rounded-[2rem] p-10 hover:border-accent transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col">
               <div className="bg-primary w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-8 border border-border group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                 <Flame className="text-accent" size={36} />
               </div>
               <h3 className="font-display text-3xl text-text-primary uppercase mb-4 group-hover:text-accent transition-colors">Nutrition Engine</h3>
               <p className="text-text-secondary mb-10 text-base leading-relaxed flex-grow">
                 Calculate your daily calories, macros, and 'Party Fund' based on your specific goal and lifestyle variables.
               </p>
               <span className="text-accent font-black text-sm uppercase tracking-widest flex items-center mt-auto">
                 OPEN TOOL <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
               </span>
            </Link>

            {/* 1RM Estimator Card */}
            <Link to="/tools/1rm-estimator" className="group bg-secondary border border-border rounded-[2rem] p-10 hover:border-accent transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col">
               <div className="bg-primary w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-8 border border-border group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                 <Activity className="text-accent" size={36} />
               </div>
               <h3 className="font-display text-3xl text-text-primary uppercase mb-4 group-hover:text-accent transition-colors">1RM Estimator</h3>
               <p className="text-text-secondary mb-10 text-base leading-relaxed flex-grow">
                 Estimate your one-rep max without testing to failure. Use this to set your training percentages.
               </p>
               <span className="text-accent font-black text-sm uppercase tracking-widest flex items-center mt-auto">
                 OPEN TOOL <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
               </span>
            </Link>

            {/* Placeholder / Future Tool */}
            <div className="bg-primary/50 border-2 border-border border-dashed rounded-[2rem] p-10 flex flex-col items-center justify-center text-center opacity-75">
               <div className="bg-secondary w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-6 border border-border">
                 <svg className="w-8 h-8 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
               </div>
               <h3 className="font-display text-2xl text-text-primary uppercase mb-3">More Coming Soon</h3>
               <p className="text-text-secondary text-sm">
                 Recovery protocols and advanced calculators are currently in development.
               </p>
            </div>
          </div>
        </div>

        <MidPageBanner 
          image={banner.image}
          tagline={banner.tagline}
          support={banner.support}
        />
      </div>
    </>
  );
};
