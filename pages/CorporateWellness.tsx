import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Users, TrendingUp, Zap, Check, Brain, Shield, Target, Coffee, Presentation, Calendar } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';
import { LeadFormModal } from '../components/LeadFormModal';

export const CorporateWellness: React.FC = () => {
  const { pageContent } = useContent();
  const { seo } = pageContent.corporateWellness;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const faqs = [
    {
      question: "Will HR have to manage this day-to-day?",
      answer: "No. HR supports the rollout, but I handle the delivery, the questions, and the coaching. Your team gets the benefit without you getting the admin."
    },
    {
      question: "Do you do one-off workshops or only long-term programs?",
      answer: "Both. We can start with a 'Lunch & Learn' to gauge interest, or deploy a full 6-week challenge to drive engagement."
    },
    {
      question: "How do you handle different fitness levels?",
      answer: "Everything is scalable. Our challenges and workshops are designed so the marathon runner and the complete beginner can both participate meaningfully."
    },
    {
      question: "Do we need a gym on-site?",
      answer: "No. We can deliver seminars in a meeting room, or run challenges that employees complete on their own time (using our app)."
    },
    {
      question: "What is the cost structure?",
      answer: "It varies by company size and scope. We can do a flat fee for workshops or a per-head model for challenges. Book a consult to get a quote."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Corporate Wellness Christchurch | WRK Coaching"
        description="High-performance health for high-performance teams. Workshops, challenges, and seminars that actually change behaviour."
      />

      <div className="bg-primary text-text-primary transition-colors duration-300">
        
        {/* A) HOOK */}
        <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
          <span className="text-accent font-bold uppercase tracking-widest text-xs mb-6 block">Christchurch • Workshops • Challenges</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
            High-Performance Teams Need <br/><span className="text-accent">High-Performance Health.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-10 max-w-3xl mx-auto">
            Burnout, low energy, and "presenteeism" are costing your business. A fruit bowl in the break room isn't going to fix it.
          </p>
          <Button 
            size="lg" 
            className="px-12 py-6 text-xl shadow-xl w-full md:w-auto"
            onClick={() => setIsModalOpen(true)}
          >
            Book a Corporate Consult
          </Button>
        </section>

        {/* B) AGITATE */}
        <section className="py-20 px-6 bg-secondary border-y border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold uppercase mb-10 text-center">The "Wellness" Trap</h2>
            <div className="space-y-6">
              {[
                "You've tried 'wellness initiatives' before, but engagement drops off after two weeks.",
                "Your team is stressed and tired, but they don't have time for complex programs.",
                "You're seeing more sick days and lower productivity, but don't know how to address it without overstepping.",
                "Gym subsidies go unused by the people who actually need them.",
                "You want a resilient, energetic culture, but you're getting burnout."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
                    <span className="font-bold">✕</span>
                  </div>
                  <p className="text-lg text-text-primary font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* C) REFRAME */}
        <section className="py-24 px-6 bg-primary text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
              Wellness isn't a <span className="text-accent">perk</span>.
            </h2>
            <p className="text-2xl text-text-primary font-medium leading-relaxed mb-6">
              It's a performance strategy.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              When your team has stable energy, manages stress well, and feels physically capable, they do better work. It's that simple. We don't do "fluff". We teach biological systems for better output.
            </p>
          </div>
        </section>

        {/* D) SOLUTION */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">The Solution</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
                WRK Corporate.
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                We deliver practical, science-backed interventions that fit into a corporate schedule. No chanting, no pseudoscience—just physiology and psychology applied to the workplace.
              </p>
              <div className="grid gap-6">
                <div className="bg-primary p-6 rounded-2xl border border-border flex gap-4">
                  <Presentation className="text-accent shrink-0" size={32} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Workshops & Seminars</h3>
                    <p className="text-sm text-text-secondary">Interactive sessions on Stress, Sleep, Nutrition, and Energy Management.</p>
                  </div>
                </div>
                <div className="bg-primary p-6 rounded-2xl border border-border flex gap-4">
                  <Target className="text-accent shrink-0" size={32} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Team Challenges</h3>
                    <p className="text-sm text-text-secondary">6-week structured programs to drive engagement and habit change.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] bg-primary rounded-[3rem] border border-border overflow-hidden shadow-2xl flex items-center justify-center">
               <div className="text-center p-8">
                 <Users size={64} className="text-text-secondary mx-auto mb-4 opacity-20" />
                 <p className="text-text-secondary font-display uppercase text-2xl font-bold opacity-20">Team Workshop Session</p>
               </div>
            </div>
          </div>
        </section>

        {/* E) OFFER (What you get) */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-12 text-center">
              Popular Options
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Lunch & Learn Series", desc: "45-min high-impact sessions on specific topics (e.g., 'Beating the 3pm Slump', 'Stress Physiology')." },
                { title: "The 6-Week Reset", desc: "A company-wide challenge with app access, leaderboards, and weekly coaching content." },
                { title: "Executive Coaching", desc: "1:1 performance coaching for key leadership staff who need to lead by example." },
                { title: "On-Site Assessments", desc: "Movement screens and body composition analysis days at your office." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-secondary rounded-2xl border border-border">
                  <CheckCircleIcon />
                  <div>
                    <h3 className="font-bold text-lg text-text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Button 
                size="lg" 
                className="px-12 py-6 text-xl shadow-xl w-full md:w-auto"
                onClick={() => setIsModalOpen(true)}
              >
                Request a Proposal
              </Button>
            </div>
          </div>
        </section>

        {/* F) HOW IT WORKS */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-16 text-center">Engagement Process</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Consult", desc: "We meet to discuss your team size, culture, and current pain points." },
                { step: "02", title: "Proposal", desc: "I design a package that fits your budget and goals (Workshop vs Challenge vs Retainer)." },
                { step: "03", title: "Delivery", desc: "We roll out the program with clear communication assets to ensure high participation." }
              ].map((item, i) => (
                <div key={i} className="relative p-8 bg-primary rounded-[2rem] border border-border">
                  <span className="absolute -top-6 left-8 text-6xl font-display font-bold text-accent/20">{item.step}</span>
                  <h3 className="font-display text-2xl font-bold uppercase mb-4 mt-6">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* H) FAQ */}
        <section className="py-24 px-6 bg-primary border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold uppercase tracking-tighter mb-12 text-center">Frequently Asked Questions</h2>
            <FAQ items={faqs} />
          </div>
        </section>

        {/* I) CTA */}
        <section className="py-32 px-6 bg-secondary text-center border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
              Invest in your <span className="text-accent">Team.</span>
            </h2>
            <p className="text-xl text-text-secondary mb-12 max-w-xl mx-auto">
              Better energy. Better focus. Better retention. It starts with a conversation.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="px-16 py-6 text-xl shadow-xl w-full md:w-auto"
                onClick={() => setIsModalOpen(true)}
              >
                Book a Corporate Consult
              </Button>
            </div>
          </div>
        </section>

      </div>

      <LeadFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        service="Corporate Wellness" 
      />
    </>
  );
};

const CheckCircleIcon = () => (
  <div className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-1">
    <Check size={14} strokeWidth={3} />
  </div>
);
