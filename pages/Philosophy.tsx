
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { Activity, CheckCircle2, XCircle, Clock, Target } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="Philosophy | Intention Over Intensity | WRK"
        description="The Right Work, Done Well. A training philosophy for high performers who value longevity as much as results."
      />

      <div className="bg-brand-black min-h-screen font-sans selection:bg-brand-orange selection:text-white pb-24">
        
        {/* HERO SECTION */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
              alt="Dark gym atmosphere" 
              className="w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-brand-black/70 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <span className="inline-block py-1 px-3 border border-brand-orange text-brand-orange text-xs font-bold uppercase tracking-[0.3em] mb-8">
              The Methodology
            </span>
            <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-widest text-white leading-none mb-8">
              Intention <br/> Over <span className="text-brand-orange">Intensity.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-12">
              The Right Work, Done Well. A philosophy for high performers who value longevity as much as results.
            </p>
          </div>
        </section>

        {/* PILLARS SECTION */}
        <section className="py-24 px-6 bg-brand-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Pillar 1 */}
              <div className="bg-white/5 p-10 border border-white/10 hover:border-brand-orange transition-colors duration-500 group rounded-3xl">
                <div className="bg-black/50 w-16 h-16 flex items-center justify-center mb-8 border border-white/10 group-hover:border-brand-orange transition-colors rounded-xl">
                  <Target className="text-brand-orange" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-4">
                  Minimum Effective Dose
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  We find the precise amount of work needed to trigger progress without burnout. More is not better; better is better. We focus on ROI for every rep.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white/5 p-10 border border-white/10 hover:border-brand-orange transition-colors duration-500 group rounded-3xl">
                <div className="bg-black/50 w-16 h-16 flex items-center justify-center mb-8 border border-white/10 group-hover:border-brand-orange transition-colors rounded-xl">
                  <Activity className="text-brand-orange" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-4">
                  Data Over Dogma
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  We use physiology and bio-feedback, not fitness trends. If it doesn't improve performance or health markers, we don't do it.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white/5 p-10 border border-white/10 hover:border-brand-orange transition-colors duration-500 group rounded-3xl">
                <div className="bg-black/50 w-16 h-16 flex items-center justify-center mb-8 border border-white/10 group-hover:border-brand-orange transition-colors rounded-xl">
                  <Clock className="text-brand-orange" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-4">
                  Sustainability is Sophistication
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Intensity is cheap. Consistency is expensive. We build systems that you can sustain for decades, not just a 6-week challenge.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className="py-24 px-6 bg-brand-primary">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-widest mb-4">The Difference</h2>
              <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Typical Fitness */}
              <div className="bg-white/5 p-8 md:p-12 border border-white/5 rounded-[2rem]">
                <h3 className="font-display text-2xl font-bold text-gray-500 uppercase tracking-wider mb-8 flex items-center gap-3">
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
                    <li key={i} className="flex items-start text-gray-400">
                      <span className="mr-4 text-gray-600">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* The WRK Way */}
              <div className="bg-brand-black p-8 md:p-12 border border-brand-orange/30 relative overflow-hidden rounded-[2rem]">
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-orange/10 rounded-bl-full"></div>
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-8 flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-brand-orange" /> The WRK Way
                </h3>
                <ul className="space-y-6">
                  {[
                    "Structured progressive overload",
                    "Training for capacity and capability",
                    "Intelligent modification around pain",
                    "Sustainable habits and energy management",
                    "Based on physiology and discipline"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-200">
                      <CheckCircle2 size={16} className="mr-4 mt-1 text-brand-orange shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="py-32 px-6 bg-brand-black flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-wide leading-tight">
              "We do not train for the sake of being tired. <br/>
              <span className="text-brand-orange">We train to be capable.</span>"
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-brand-black border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-white uppercase tracking-widest mb-8">
              Ready to work correctly?
            </h2>
            <Link to="/assessment">
              <Button size="lg" className="px-12 py-6">Start Diagnostic</Button>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};
