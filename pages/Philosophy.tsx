import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { Scale, Activity, Brain, CheckCircle2, XCircle, ArrowRight, Zap, Target, Clock } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="Philosophy | Intention Over Intensity | WRK"
        description="The Right Work, Done Well. A training philosophy for high performers who value longevity as much as results."
      />

      <div className="bg-slate-900 min-h-screen font-sans selection:bg-amber-600 selection:text-white pb-24">
        
        {/* HERO SECTION */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
              alt="Dark gym atmosphere" 
              className="w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <span className="inline-block py-1 px-3 border border-amber-600 text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-8">
              The Methodology
            </span>
            <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-widest text-white leading-none mb-8">
              Intention <br/> Over <span className="text-amber-600">Intensity.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-12">
              The Right Work, Done Well. A philosophy for high performers who value longevity as much as results.
            </p>
          </div>
        </section>

        {/* PILLARS SECTION */}
        <section className="py-24 px-6 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Pillar 1 */}
              <div className="bg-slate-800/50 p-10 border border-slate-700/50 hover:border-amber-600/50 transition-colors duration-500 group">
                <div className="bg-slate-900 w-16 h-16 flex items-center justify-center mb-8 border border-slate-700 group-hover:border-amber-600/30 transition-colors">
                  <Target className="text-amber-600" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-4">
                  Minimum Effective Dose
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  We find the precise amount of work needed to trigger progress without burnout. More is not better; better is better. We focus on ROI for every rep.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-slate-800/50 p-10 border border-slate-700/50 hover:border-amber-600/50 transition-colors duration-500 group">
                <div className="bg-slate-900 w-16 h-16 flex items-center justify-center mb-8 border border-slate-700 group-hover:border-amber-600/30 transition-colors">
                  <Activity className="text-amber-600" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-4">
                  Data Over Dogma
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  We use physiology and bio-feedback, not fitness trends. If it doesn't improve performance or health markers, we don't do it.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-slate-800/50 p-10 border border-slate-700/50 hover:border-amber-600/50 transition-colors duration-500 group">
                <div className="bg-slate-900 w-16 h-16 flex items-center justify-center mb-8 border border-slate-700 group-hover:border-amber-600/30 transition-colors">
                  <Clock className="text-amber-600" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-4">
                  Sustainability is Sophistication
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Intensity is cheap. Consistency is expensive. We build systems that you can sustain for decades, not just a 6-week challenge.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className="py-24 px-6 bg-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-widest mb-4">The Difference</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Typical Fitness */}
              <div className="bg-slate-900/50 p-8 md:p-12 border border-slate-700/30">
                <h3 className="font-display text-2xl font-bold text-slate-500 uppercase tracking-wider mb-8 flex items-center gap-3">
                  <XCircle size={24} /> Typical Fitness
                </h3>
                <ul className="space-y-6">
                  {[
                    "Random workouts ('Muscle Confusion')",
                    "Training to exhaustion every session",
                    "Ignoring pain signals to 'push through'",
                    "Short-term fixes and restrictive diets",
                    "Based on hype and motivation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-slate-400">
                      <span className="mr-4 text-slate-600">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* The WRK Way */}
              <div className="bg-slate-900 p-8 md:p-12 border border-amber-600/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-600/10 rounded-bl-full"></div>
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-8 flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-amber-600" /> The WRK Way
                </h3>
                <ul className="space-y-6">
                  {[
                    "Structured progressive overload",
                    "Training for capacity and capability",
                    "Intelligent modification around pain",
                    "Sustainable habits and energy management",
                    "Based on physiology and discipline"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-slate-200">
                      <CheckCircle2 size={16} className="mr-4 mt-1 text-amber-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="py-32 px-6 bg-slate-900 flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-wide leading-tight">
              "We do not train for the sake of being tired. <br/>
              <span className="text-amber-600">We train to be capable.</span>"
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-slate-900 border-t border-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-white uppercase tracking-widest mb-8">
              Ready to work correctly?
            </h2>
            <Link to="/assessment">
              <button className="bg-amber-600 text-white px-10 py-5 rounded-full font-display font-bold uppercase tracking-widest text-sm hover:bg-amber-700 transition-all shadow-lg hover:shadow-amber-900/20 transform hover:-translate-y-1">
                Start Diagnostic
              </button>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};