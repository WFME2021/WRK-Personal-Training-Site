
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { Activity, CheckCircle2, XCircle, Clock, Target } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const Philosophy: React.FC = () => {
  const { pageContent } = useContent();
  const { heroImage } = pageContent.philosophy;

  return (
    <>
      <SeoHead 
        title="Philosophy | Capacity Is Currency | WRK"
        description="The Right Work, Done Well. A training philosophy for high performers who value longevity as much as results."
      />

      <div className="bg-primary min-h-screen font-sans selection:bg-accent selection:text-white pb-24 transition-colors duration-300">
        
        {/* Hero Section - Full Width Banner */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            {heroImage && (
              <img 
                src={heroImage.url} 
                alt={heroImage.alt} 
                className="w-full h-full object-cover grayscale contrast-125"
              />
            )}
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-[1800px] mx-auto px-4 md:px-8 text-center flex flex-col items-center pt-20">
              <h3 className="font-display text-xl md:text-3xl font-bold uppercase tracking-widest text-accent mb-6">
                The Methodology
              </h3>
              <h1 className="font-display text-[10vw] leading-[0.9] font-bold uppercase tracking-tighter text-white max-w-6xl mb-8">
                Capacity Is <br/><span className="text-accent">Currency.</span>
              </h1>
              
              <div className="max-w-3xl mx-auto space-y-8">
                <p className="text-lg md:text-2xl text-white/90 font-medium leading-relaxed">
                  When you have capacity, you have options. When you don't, you have constraints.
                </p>
              </div>
          </div>
        </section>

        {/* PILLARS SECTION */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Pillar 1 */}
              <div className="bg-secondary p-10 border border-border hover:border-accent transition-colors duration-500 group rounded-3xl">
                <div className="bg-primary/50 w-16 h-16 flex items-center justify-center mb-8 border border-border group-hover:border-accent transition-colors rounded-xl">
                  <Target className="text-accent" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-text-primary uppercase tracking-wider mb-4">
                  Return on Investment
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  We find the precise amount of work needed to trigger progress without burnout. More is not better; better is better. We focus on ROI for every rep.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-secondary p-10 border border-border hover:border-accent transition-colors duration-500 group rounded-3xl">
                <div className="bg-primary/50 w-16 h-16 flex items-center justify-center mb-8 border border-border group-hover:border-accent transition-colors rounded-xl">
                  <Activity className="text-accent" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-text-primary uppercase tracking-wider mb-4">
                  Evidence Based
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  We use physiology and bio-feedback, not fitness trends. If it doesn't improve performance or health markers, we don't do it.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-secondary p-10 border border-border hover:border-accent transition-colors duration-500 group rounded-3xl">
                <div className="bg-primary/50 w-16 h-16 flex items-center justify-center mb-8 border border-border group-hover:border-accent transition-colors rounded-xl">
                  <Clock className="text-accent" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-text-primary uppercase tracking-wider mb-4">
                  Resilience
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Intensity is cheap. Consistency is expensive. We build systems that you can sustain for decades, creating a body that supports your life.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-widest mb-4">The Difference</h2>
              <div className="w-24 h-1 bg-accent mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Typical Fitness */}
              <div className="bg-primary/50 p-8 md:p-12 border border-border rounded-[2rem]">
                <h3 className="font-display text-2xl font-bold text-text-secondary uppercase tracking-wider mb-8 flex items-center gap-3">
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
                    <li key={i} className="flex items-start text-text-secondary">
                      <span className="mr-4 opacity-50">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* The WRK Way */}
              <div className="bg-primary p-8 md:p-12 border border-accent/30 relative overflow-hidden rounded-[2rem]">
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full"></div>
                <h3 className="font-display text-2xl font-bold text-text-primary uppercase tracking-wider mb-8 flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-accent" /> The WRK Way
                </h3>
                <ul className="space-y-6">
                  {[
                    "Structured progressive overload",
                    "Training for capacity and capability",
                    "Intelligent modification around pain",
                    "Sustainable habits and energy management",
                    "Based on physiology and discipline"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-text-primary/90">
                      <CheckCircle2 size={16} className="mr-4 mt-1 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="py-32 px-6 bg-primary flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-display text-4xl md:text-6xl font-bold text-text-primary uppercase tracking-wide leading-tight">
              "We do not train for the sake of being tired. <br/>
              <span className="text-accent">We train to be capable.</span>"
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-primary border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-text-primary uppercase tracking-widest mb-8">
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
