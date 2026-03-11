
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { Activity, CheckCircle2, XCircle, Clock, Target, ShieldCheck, Brain } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const Philosophy: React.FC = () => {
  const { pageContent } = useContent();

  return (
    <>
      <SeoHead 
        title="Personal Training Christchurch Philosophy | The WRK Way"
        description="Our training philosophy: build capacity for real life—fat loss, less pain, and consistency without gym dominance or restrictive dieting. Christchurch + online."
      />

      <div className="bg-primary min-h-screen font-sans selection:bg-accent selection:text-white pb-24 transition-colors duration-300">
        
        {/* A) HERO: CAPACITY IS THE GOAL */}
        <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
            Capacity is the <span className="text-accent">goal.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-6 max-w-2xl mx-auto">
            When you’ve got capacity, you’ve got options.
            <br />
            When you don’t, everything feels harder than it should.
          </p>
          
          <div className="max-w-2xl mx-auto bg-secondary p-8 rounded-2xl border border-border text-left mb-10">
            <p className="font-bold text-text-primary uppercase tracking-wider mb-4 text-sm">Capacity looks like:</p>
            <ul className="space-y-3">
              {[
                "Energy that doesn’t crash mid-week",
                "Strength that carries into real life",
                "A plan that still works when stress is high and time is tight",
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
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-tighter mb-4">The WRK Method</h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">Do the right amount. Do it consistently.</p>
              <p className="text-text-secondary max-w-2xl mx-auto mt-4">
                I’m not here to bury you for the sake of it.<br/>
                We train with purpose — because every rep should have a job.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Principle 1: Return on effort */}
              <div className="bg-primary p-10 border border-border hover:border-accent transition-colors duration-500 group rounded-3xl">
                <div className="bg-secondary w-16 h-16 flex items-center justify-center mb-8 border border-border group-hover:border-accent transition-colors rounded-xl">
                  <Target className="text-accent" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-text-primary uppercase tracking-wider mb-4">
                  Return on effort
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  We find the minimum effective dose that drives progress without cooking your recovery.
                  <br/><br/>
                  More isn’t better. Better is better.
                </p>
              </div>

              {/* Principle 2: Evidence-led, not trend-led */}
              <div className="bg-primary p-10 border border-border hover:border-accent transition-colors duration-500 group rounded-3xl">
                <div className="bg-secondary w-16 h-16 flex items-center justify-center mb-8 border border-border group-hover:border-accent transition-colors rounded-xl">
                  <Brain className="text-accent" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-text-primary uppercase tracking-wider mb-4">
                  Evidence-led, not trend-led
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  We use physiology and feedback from your real life — sleep, stress, recovery, performance.
                  <br/><br/>
                  If it doesn’t improve your results or your consistency, we don’t do it.
                </p>
              </div>

              {/* Principle 3: Resilience over hype */}
              <div className="bg-primary p-10 border border-border hover:border-accent transition-colors duration-500 group rounded-3xl">
                <div className="bg-secondary w-16 h-16 flex items-center justify-center mb-8 border border-border group-hover:border-accent transition-colors rounded-xl">
                  <ShieldCheck className="text-accent" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-text-primary uppercase tracking-wider mb-4">
                  Resilience over hype
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Intensity is easy to do once. Consistency is harder — and it’s what actually changes you.
                  <br/><br/>
                  We build routines you can repeat for years, and a body that supports your life outside the gym.
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
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">Typical fitness vs the WRK way</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Typical Fitness */}
              <div className="bg-secondary/50 p-8 md:p-12 border border-border rounded-[2rem]">
                <h3 className="font-display text-2xl font-bold text-text-secondary uppercase tracking-wider mb-8 flex items-center gap-3">
                  <XCircle size={24} /> Typical Fitness
                </h3>
                <ul className="space-y-6">
                  {[
                    "Random workouts and “muscle confusion”",
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
                  “We train for the sake of being tired.”
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
                    "Structured progression that makes sense",
                    "Training for capacity and capability",
                    "Smart modifications around pain and niggles",
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
                  “We train to be capable.”
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
              No guessing. Just a plan that works.
            </h2>
            <div className="prose prose-lg mx-auto text-text-secondary leading-relaxed">
              <p className="mb-6">
                I coach people who are sick of guessing — and want training that actually pays off in real life.
              </p>
              <p className="mb-6">
                I’ve got 20+ years coaching clients in Christchurch (Addington) and NZ-wide online. The focus is simple: fat loss, strength, and consistency — without your plan falling apart when life gets busy.
              </p>
              <p className="mb-10">
                A big chunk of my clients deal with aches, pains, and niggles. So we train smart, build resilience, and keep momentum… without doing dumb stuff to prove a point.
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

        {/* E) WHAT YOU CAN EXPECT */}
        <section className="py-24 px-6 bg-primary border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-tighter mb-12">
              What you can expect from me
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                "I’ll meet you where you’re at — and still hold the standard",
                "No need for balls-to-the-wall intensity",
                "No benefit in stressing an already jacked-up system",
                "No pain no gain? More accurately: no appropriate discomfort, no progress"
              ].map((item, i) => (
                <div key={i} className="bg-secondary p-6 rounded-2xl border border-border flex items-start gap-4">
                  <CheckCircle2 size={24} className="text-accent shrink-0 mt-1" />
                  <p className="text-text-secondary text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
