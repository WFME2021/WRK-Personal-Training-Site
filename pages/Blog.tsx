
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';

export const Blog: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-32">
      <SeoHead
        title="The Medical Weight Loss Support Blog | WRK Personal Training"
        description="Read research-backed insights on muscle preservation, metabolic adaptation, and side-effect mitigation strategies for prescription GLP-1 weight loss pathways."
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Page Header */}
        <header className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            The Clinical Lifestyle Blog
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/70">
            Evidence-based articles, research-backed nutrition matrices, and practical sports science insights designed to support your daily medical weight loss journey.
          </p>
        </header>

        {/* 3-Article Card Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* CARD 1 */}
          <div className="bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="aspect-[4/3] bg-neutral-100 flex items-center justify-center relative">
               <div className="absolute inset-0 bg-[#8A9A86]/10"></div>
               {/* Thumbnail Placeholder */}
               <svg className="w-12 h-12 text-[#8A9A86]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
               </svg>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#8A9A86] mb-3">
                4 Min Read &bull; Clinical Sports Nutrition
              </div>
              <h2 className="font-serif text-[22px] text-[#2C3539] mb-4 leading-snug">
                The Science of Proximity-to-Failure During Deficits
              </h2>
              <p className="text-[15px] leading-relaxed text-[#2C3539]/70 mb-8 flex-grow">
                Why lifting close to your mechanical limit is the ultimate signal required to protect your lean muscle tissue from wasting under deep medication-induced calorie restriction.
              </p>
              <Link to="/blog/proximity-to-failure" className="text-[14px] font-medium text-[#8A9A86] hover:text-[#768672] transition-colors flex items-center">
                Read Article <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="aspect-[4/3] bg-neutral-100 flex items-center justify-center relative">
               <div className="absolute inset-0 bg-[#8A9A86]/10"></div>
               {/* Thumbnail Placeholder */}
               <svg className="w-12 h-12 text-[#8A9A86]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
               </svg>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#8A9A86] mb-3">
                5 Min Read &bull; Side-Effect Mitigation
              </div>
              <h2 className="font-serif text-[22px] text-[#2C3539] mb-4 leading-snug">
                Navigating Suppressed Thirst Loops on GLP-1s
              </h2>
              <p className="text-[15px] leading-relaxed text-[#2C3539]/70 mb-8 flex-grow">
                Deep dive into the neurological pathways where weight loss medications suppress your brain's natural urge to drink fluids, and how chronic low-grade dehydration triggers headaches and nausea.
              </p>
              <Link to="/blog/suppressed-thirst-loops" className="text-[14px] font-medium text-[#8A9A86] hover:text-[#768672] transition-colors flex items-center">
                Read Article <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="aspect-[4/3] bg-neutral-100 flex items-center justify-center relative">
               <div className="absolute inset-0 bg-[#8A9A86]/10"></div>
               {/* Thumbnail Placeholder */}
               <svg className="w-12 h-12 text-[#8A9A86]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
               </svg>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#8A9A86] mb-3">
                6 Min Read &bull; Metabolic Protection
              </div>
              <h2 className="font-serif text-[22px] text-[#2C3539] mb-4 leading-snug">
                Adaptive Thermogenesis: Why Your Calorie Calculator is Wrong
              </h2>
              <p className="text-[15px] leading-relaxed text-[#2C3539]/70 mb-8 flex-grow">
                Unveiling the metabolic slowdown survival mechanisms that trigger sudden weight loss plateaus, and how to use the medical TDEE equation to safely realign your energy targets.
              </p>
              <Link to="/blog/adaptive-thermogenesis" className="text-[14px] font-medium text-[#8A9A86] hover:text-[#768672] transition-colors flex items-center">
                Read Article <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Contextual Lead Bridge */}
        <div className="bg-white/50 border border-neutral-200 rounded-3xl p-10 md:p-14 text-center max-w-4xl mx-auto shadow-sm">
          <p className="font-serif text-[22px] md:text-[26px] text-[#2C3539] leading-snug mb-8">
            Experiencing these metabolic shifts or side effects yourself? Take our Free 2-Minute Weight Loss Safety Assessment to check your current baseline safety parameters today.
          </p>
          <Link 
            to="/assessment"
            className="inline-flex items-center justify-center bg-[#2C3539] hover:bg-[#1A1F22] text-white px-8 py-4 rounded-xl font-medium transition-colors text-[15px]"
          >
            Launch Free Assessment
          </Link>
        </div>

      </div>
    </div>
  );
};
