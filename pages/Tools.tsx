
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

        <div id="tools-grid" className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Nutrition Engine Card */}
            <Link to="/calorie-calculator" className="group bg-secondary border border-border rounded-[2rem] p-8 hover:border-accent transition-all duration-300 shadow-sm hover:shadow-md flex flex-col">
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

        <MidPageBanner 
          image={banner.image}
          tagline={banner.tagline}
          support={banner.support}
        />
      </div>
    </>
  );
};
