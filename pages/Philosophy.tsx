
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { Activity, CheckCircle2, XCircle, Clock, Target, ShieldCheck, Brain } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const Philosophy: React.FC = () => {
  const { pageContent } = useContent();
  // Overriding SEO content

  return (
    <>
      <SeoHead 
        title="Personal Training Christchurch | WRK Philosophy (Capacity Is Currency)"
        description="WRK personal training philosophy in Christchurch (Addington): ROI-based training, evidence-led coaching, and pain-smart resilience. Take the assessment or book a consult."
      />

      <div className="bg-primary min-h-screen font-sans selection:bg-accent selection:text-white pb-24 transition-colors duration-300">
        
        {/* A) HERO: CAPACITY IS CURRENCY */}
        <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
          <span className="text-accent font-bold uppercase tracking-widest text-xs mb-6 block">Personal Training Christchurch • Built for ROI</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
            Capacity Is <span className="text-accent">Currency.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-6 max-w-2xl mx-auto">
            When you have capacity, you have options.
            <br />
            When you don’t, everything feels harder than it should.
          </p>
          
          <div className="max-w-2xl mx-auto bg-secondary p-8 rounded-2xl border border-border text-left mb-10">
            <p className="font-bold text-text-primary uppercase tracking-wider mb-4 text-sm">Capacity means:</p>
            <ul className="space-y-3">
              {[
                "Energy that doesn’t crash mid-week",
                "Strength that carries into real life",
                "Training that survives stress, travel, and messy schedules",
                "A body that’s resilient — not constantly “managing niggles”"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-text-secondary">
                  <CheckCircle2 size={18} className="text-accent mr-3 mt-1 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/assessment">
              <Button size="lg" className="px-12 py-6 text-xl shadow-xl w-full md:w-auto">Take the assessment</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="px-12 py-6 text-xl border-accent text-accent hover:bg-accent hover:text-white w-full md:w-auto">Book a consult</Button>
            </Link>
          </div>
        </section>

        {/* B) THE WRK METHOD (3 Principles) */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-tighter mb-16 text-center">The WRK Method</h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Principle 1: ROI */}
              <div className="bg-primary p-10 border border-border hover:border-accent transition-colors duration-500 group rounded-3xl">
                <div className="bg-secondary w-16 h-16 flex items-center justify-center mb-8 border border-border group-hover:border-accent transition-colors rounded-xl">
                  <Target className="text-accent" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-text-primary uppercase tracking-wider mb-4">
                  Return on Investment
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  We find the precise amount of work needed to trigger progress without burnout.
                  <br/><br/>
                  More isn’t better. Better is better. Every rep has a job.
                </p>
              </div>

              {/* Principle 2: Evidence Based */}
              <div className="bg-primary p-10 border border-border hover:border-accent transition-colors duration-500 group rounded-3xl">
                <div className="bg-secondary w-16 h-16 flex items-center justify-center mb-8 border border-border group-hover:border-accent transition-colors rounded-xl">
                  <Brain className="text-accent" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-text-primary uppercase tracking-wider mb-4">
                  Evidence Based
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  We use physiology and biofeedback — not trends.
                  <br/><br/>
                  If it doesn’t improve performance, health markers, or long-term consistency, we don’t do it.
                </p>
              </div>

              {/* Principle 3: Resilience */}
              <div className="bg-primary p-10 border border-border hover:border-accent transition-colors duration-500 group rounded-3xl">
                <div className="bg-secondary w-16 h-16 flex items-center justify-center mb-8 border border-border group-hover:border-accent transition-colors rounded-xl">
                  <ShieldCheck className="text-accent" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-text-primary uppercase tracking-wider mb-4">
                  Resilience
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Intensity is cheap. Consistency is expensive.
                  <br/><br/>
                  We build systems you can repeat for decades — and a body that supports your life.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* C) THE DIFFERENCE (Comparison) */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-tighter mb-4">The Difference</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Typical Fitness */}
              <div className="bg-secondary/50 p-8 md:p-12 border border-border rounded-[2rem]">
                <h3 className="font-display text-2xl font-bold text-text-secondary uppercase tracking-wider mb-8 flex items-center gap-3">
                  <XCircle size={24} /> Typical Fitness
                </h3>
                <ul className="space-y-6">
                  {[
                    "Random workouts (“muscle confusion”)",
                    "Training to exhaustion every session",
                    "Ignoring pain signals to “push through”",
                    "Short-term fixes and restrictive dieting",
                    "Built on hype and motivation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-text-secondary">
                      <span className="mr-4 opacity-50">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-border/50 text-center text-text-secondary italic">
                  "We train for the sake of being tired."
                </div>
              </div>

              {/* The WRK Way */}
              <div className="bg-secondary p-8 md:p-12 border border-accent/30 relative overflow-hidden rounded-[2rem]">
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full"></div>
                <h3 className="font-display text-2xl font-bold text-text-primary uppercase tracking-wider mb-8 flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-accent" /> The WRK Way
                </h3>
                <ul className="space-y-6">
                  {[
                    "Structured progressive overload",
                    "Training for capacity and capability",
                    "Intelligent modification around pain",
                    "Sustainable habits + energy management",
                    "Built on physiology and discipline"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-text-primary/90">
                      <CheckCircle2 size={16} className="mr-4 mt-1 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-border/50 text-center text-text-primary font-bold">
                  "We train to be capable."
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* D) ABOUT WRK COACHING */}
        <section className="py-24 px-6 bg-secondary border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-6 block">About WRK Coaching</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-tighter mb-8">
              No Guesswork. Just Results.
            </h2>
            <div className="prose prose-lg mx-auto text-text-secondary leading-relaxed">
              <p className="mb-6">
                I coach people who are sick of guessing — and want training that actually pays off.
              </p>
              <p className="mb-6">
                I’ve got 20+ years experience coaching clients in Christchurch (Addington) and NZ-wide online. The focus is simple: fat loss, strength, and consistency — without your plan falling apart when life gets busy.
              </p>
              <p className="mb-10">
                A big part of my client base deals with aches, pains, and niggles. We train smart, build resilience, and keep momentum without doing dumb stuff to prove a point.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
              <Link to="/assessment">
                <Button size="lg" className="px-12 py-6 text-xl shadow-xl w-full md:w-auto">Take the assessment</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="px-12 py-6 text-xl border-accent text-accent hover:bg-accent hover:text-white w-full md:w-auto">Book a consult</Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
