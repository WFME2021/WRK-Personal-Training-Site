
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Check, Star, UserCheck, Zap } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';
import { LeadFormModal } from '../components/LeadFormModal';

export const PersonalTraining: React.FC = () => {
  const { pageContent } = useContent();
  // We are overriding the default SEO content with the specific pack provided
  const [isModalOpen, setIsModalOpen] = useState(false);

  const faqs = [
    {
      question: "Do I need to be fit before starting?",
      answer: "No. We meet you where you’re at. Whether you’re returning from injury or haven’t trained in years, we build the floor before we raise the ceiling."
    },
    {
      question: "What if I travel for work?",
      answer: "You’ll have travel sessions built in (hotel / minimal equipment). The goal is momentum, not perfection."
    },
    {
      question: "Do I need a gym membership?",
      answer: "No — sessions are at the Addington facility and we’ll build your “solo” options around what you actually have access to."
    },
    {
      question: "How often do we meet?",
      answer: "Most clients choose weekly or fortnightly. We’ll recommend the best rhythm based on your goals and schedule."
    },
    {
      question: "What if I have an injury or niggles?",
      answer: "That’s common. We work around limitations, build resilience, and progress you safely."
    },
    {
      question: "Is there a minimum commitment?",
      answer: "12 weeks recommended. Real physiological adaptation takes time. We aren't interested in selling quick fixes that don't stick."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Personal Trainer Christchurch (Addington) | Hybrid PT at Get Me Fitter"
        description="Personal training in Addington, Christchurch at Get Me Fitter. Hybrid coaching: in-person sessions + app programming so you stay consistent all week. Book a free consult."
      />

      <div className="bg-primary text-text-primary transition-colors duration-300 pb-24 md:pb-0">
        
        {/* A) HERO */}
        <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
          <span className="text-accent font-bold uppercase tracking-widest text-xs mb-6 block">Christchurch Based • Addington (Get Me Fitter)</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
            Personal Training in Christchurch That Actually Delivers <span className="text-accent">ROI.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-6 max-w-2xl mx-auto">
            Stop “exercising.” Start training with a system that respects your time, your injuries, and your schedule.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
            You don’t need to live in the gym to look like you lift.
            <br />
            You need structure that works even when life gets busy.
          </p>
          <Button 
            size="lg" 
            className="px-12 py-6 text-xl shadow-xl w-full md:w-auto"
            onClick={() => setIsModalOpen(true)}
          >
            Book a Free Consult
          </Button>
          <p className="mt-4 text-xs text-text-secondary uppercase tracking-wider">Limited spots • Private Addington facility (Get Me Fitter – 12 Show Place)</p>
        </section>

        {/* B) PROBLEM (Agitate) */}
        <section className="py-20 px-6 bg-secondary border-y border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold uppercase mb-10 text-center">Sound familiar?</h2>
            <div className="space-y-6">
              {[
                "You train 3x a week… but look the same as you did last year.",
                "You’ve got niggles (shoulder / back / knee) that stop you pushing hard.",
                "You follow random workouts with no structure or progression.",
                "Work gets hectic… and training is the first thing to drop.",
                "Nutrition is guesswork — either too strict or too loose."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
                    <span className="font-bold">✕</span>
                  </div>
                  <p className="text-lg text-text-primary font-medium">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-xl font-bold text-text-primary">
                The issue isn’t your effort. <span className="text-accent">It’s your system.</span>
              </p>
            </div>
          </div>
        </section>

        {/* C) REFRAME */}
        <section className="py-24 px-6 bg-primary text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
              You don't need more <span className="text-accent">motivation</span>.
            </h2>
            <p className="text-2xl text-text-primary font-medium leading-relaxed mb-6">
              You need a system.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Motivation is a feeling — it comes and goes.
              <br />
              A system is a set of rules that works when you’re tired, stressed, travelling, or flat out.
            </p>
            <p className="text-xl font-bold text-text-primary mb-10">
              We build the system. You execute it.
            </p>
            <Button 
              size="lg" 
              className="px-12 py-6 text-xl shadow-xl w-full md:w-auto"
              onClick={() => setIsModalOpen(true)}
            >
              Book a Free Consult
            </Button>
          </div>
        </section>

        {/* D) SOLUTION */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">The Solution</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
                The Hybrid Model.
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Traditional PT is broken. You pay for someone to count reps… then you’re on your own for the other 167 hours of the week.
              </p>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                <strong>This is different.</strong> You get high-precision in-person coaching to lock in technique and intensity — plus app-based programming so you stay consistent the rest of the week.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-primary p-6 rounded-2xl border border-border">
                  <UserCheck className="text-accent mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-2">In-Person Precision</h3>
                  <p className="text-sm text-text-secondary">Technique, safety, smart progression, and intensity management.</p>
                </div>
                <div className="bg-primary p-6 rounded-2xl border border-border">
                  <Zap className="text-accent mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-2">Digital Freedom</h3>
                  <p className="text-sm text-text-secondary">Train when it suits you, with full guidance inside the app.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] bg-primary rounded-[3rem] border border-border overflow-hidden shadow-2xl flex items-center justify-center">
               <div className="text-center p-8">
                 <p className="text-text-secondary font-display uppercase text-4xl font-bold opacity-10 rotate-12">WRK System</p>
               </div>
            </div>
          </div>
        </section>

        {/* E) WHAT YOU GET (Offer) */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-12 text-center">
              What you get
            </h2>
            <p className="text-xl text-center text-text-secondary mb-12">
              Everything you need to progress — without guessing.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "1:1 Coaching Sessions", desc: "Weekly or fortnightly sessions at our Addington facility." },
                { title: "Your Program in an App", desc: "Video demos, tracking, and progression history." },
                { title: "Nutrition Framework", desc: "No rigid meal plans — just rules that work." },
                { title: "Accountability via Chat", desc: "Questions answered within 24 hours." },
                { title: "Form Reviews", desc: "Upload videos from solo sessions for feedback." },
                { title: "Travel Protocols", desc: "Hotel / minimal equipment options so you never miss a beat." },
                { title: "Plan Adjustments", desc: "Based on results, recovery, sleep, stress, and niggles." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircleIcon />
                  <div>
                    <h3 className="font-bold text-lg text-text-primary">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-secondary rounded-xl border border-border text-center">
              <p className="text-lg font-medium text-text-primary">
                No benefit in stressing an already jacked-up system. We train smart.
              </p>
            </div>
            <div className="mt-16 text-center">
              <Button 
                size="lg" 
                className="px-12 py-6 text-xl shadow-xl w-full md:w-auto"
                onClick={() => setIsModalOpen(true)}
              >
                Book a Free Consult
              </Button>
            </div>
          </div>
        </section>

        {/* F) HOW IT WORKS (Mechanism) */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-16 text-center">How it works</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "The Audit", desc: "We assess your movement, injury history, stress levels, schedule, and goals. We find the gaps." },
                { step: "02", title: "The Build", desc: "I build your training block + nutrition protocol and we set a schedule that fits your real life." },
                { step: "03", title: "The Execution", desc: "We train. You track. We review. Each week we adjust the variables so you keep progressing." }
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

        {/* G) PROOF */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold uppercase tracking-tighter mb-12">Client Results</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { name: "Sarah J.", role: "Corporate Lawyer", quote: "I used to burn out every 3 months. The structure meant I trained through my busiest trial period without crashing." },
                { name: "Mike T.", role: "Business Owner", quote: "I’ve had back pain for 5 years. After 12 weeks I’m deadlifting pain-free for the first time. The technique focus is legit." },
                { name: "James H.", role: "Dad of 2", quote: "Simple, effective, and fits around the kids. I’m stronger at 40 than I was at 30." }
              ].map((item, i) => (
                <div key={i} className="bg-secondary p-8 rounded-2xl border border-border">
                  <div className="flex gap-1 text-accent mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-text-secondary text-sm italic mb-6">"{item.quote}"</p>
                  <div>
                    <strong className="block text-text-primary font-bold">{item.name}</strong>
                    <span className="text-xs text-text-secondary uppercase tracking-wider">{item.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* H) FAQ */}
        <section className="py-24 px-6 bg-secondary border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold uppercase tracking-tighter mb-12 text-center">FAQs</h2>
            <FAQ items={faqs} />
          </div>
        </section>

        {/* I) FINAL CLOSE (CTA) */}
        <section className="py-32 px-6 bg-primary text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
              Start your <span className="text-accent">progression.</span>
            </h2>
            <p className="text-xl text-text-secondary mb-6 max-w-xl mx-auto">
              No more guessing. No more wasted sessions.
              <br />
              Just a clear plan — and the support to execute it.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
              <Button 
                size="lg" 
                className="px-16 py-6 text-xl shadow-xl w-full md:w-auto"
                onClick={() => setIsModalOpen(true)}
              >
                Book a Free Consult
              </Button>
            </div>
            <p className="text-sm text-text-secondary">
              100% no-pressure chat. We’ll just confirm fit and the best next step.
            </p>
            
            {/* NAP Footer Line */}
            <div className="mt-16 pt-8 border-t border-border/50">
              <p className="text-xs text-text-secondary uppercase tracking-widest">
                Get Me Fitter, Level 1, 12 Show Place, Addington, Christchurch
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-primary border-t border-border md:hidden z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <Button 
          size="lg" 
          className="w-full shadow-xl"
          onClick={() => setIsModalOpen(true)}
        >
          Book a Free Consult
        </Button>
      </div>

      <LeadFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        service="1:1 Coaching (Christchurch)" 
      />
    </>
  );
};

const CheckCircleIcon = () => (
  <div className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-1">
    <Check size={14} strokeWidth={3} />
  </div>
);
