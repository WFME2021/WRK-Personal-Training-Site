
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Check, Target, UserCheck, ShieldCheck, MapPin, ArrowRight, Star, Clock, Zap } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';
import { LeadFormModal } from '../components/LeadFormModal';

export const PersonalTraining: React.FC = () => {
  const { pageContent } = useContent();
  const { seo } = pageContent.personalTraining;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const faqs = [
    {
      question: "Do I need to be fit before starting?",
      answer: "No. We meet you where you’re at. Whether you're returning from injury or haven't trained in years, we build the floor before we raise the ceiling."
    },
    {
      question: "What if I travel for work?",
      answer: "That's why we use the Hybrid model. You get a specific 'Travel Protocol' in your app so you don't lose momentum when you're away."
    },
    {
      question: "Do I need a gym membership?",
      answer: "For your solo sessions, yes—access to basic equipment helps. For our 1:1 sessions, you come to my private facility in Addington (no membership required)."
    },
    {
      question: "How often do we meet?",
      answer: "Most clients train 1:1 once per week for technique and intensity, then execute 2-3 solo sessions via the app. This is the most time-efficient model."
    },
    {
      question: "What if I have an injury?",
      answer: "We specialize in working around pain. We don't just 'rest it'; we find the regression that allows you to train pain-free while you heal."
    },
    {
      question: "Is there a minimum commitment?",
      answer: "Yes, 12 weeks. Real physiological adaptation takes time. We aren't interested in selling quick fixes that don't stick."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Personal Training Christchurch | WRK Hybrid Coaching"
        description="Stop guessing in the gym. Get a structured, pain-free training system that fits your busy schedule. Based in Addington, Christchurch."
      />

      <div className="bg-primary text-text-primary transition-colors duration-300">
        
        {/* A) HOOK */}
        <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
          <span className="text-accent font-bold uppercase tracking-widest text-xs mb-6 block">Christchurch Based • Hybrid Model</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
            Stop "Exercising". <br/>Start Training for <span className="text-accent">ROI.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
            You don't need to live in the gym to look like you lift. You need a system that respects your time, your injuries, and your schedule.
          </p>
          <Button 
            size="lg" 
            className="px-12 py-6 text-xl shadow-xl w-full md:w-auto"
            onClick={() => setIsModalOpen(true)}
          >
            Book a Free Consult
          </Button>
          <p className="mt-4 text-xs text-text-secondary uppercase tracking-wider">Limited spots available • Addington Facility</p>
        </section>

        {/* B) AGITATE */}
        <section className="py-20 px-6 bg-secondary border-y border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold uppercase mb-10 text-center">Sound familiar?</h2>
            <div className="space-y-6">
              {[
                "You go to the gym 3x a week but look exactly the same as you did last year.",
                "You have 'niggles' (shoulder, lower back, knee) that stop you from pushing hard.",
                "You follow random Instagram workouts with no structure or progression.",
                "You’re busy, so when work gets crazy, your training is the first thing to drop.",
                "You’re guessing with your nutrition—either starving yourself or eating whatever."
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
              You don't need more <span className="text-accent">motivation</span>.
            </h2>
            <p className="text-2xl text-text-primary font-medium leading-relaxed mb-6">
              You need a system.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Motivation is a feeling; it comes and goes. A system is a set of rules that works even when you're tired, stressed, or busy. We build the system so you just have to execute.
            </p>
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
                Traditional Personal Training is broken. You pay $100/hour to have someone count your reps, then you're on your own for the other 167 hours of the week.
              </p>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                <strong>We do it differently.</strong> We combine high-precision in-person coaching with digital programming. You see me to fix your technique and push your limits. You use the app to stay consistent the rest of the week.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary p-6 rounded-2xl border border-border">
                  <UserCheck className="text-accent mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-2">In-Person Precision</h3>
                  <p className="text-sm text-text-secondary">Technique, safety, and intensity management.</p>
                </div>
                <div className="bg-primary p-6 rounded-2xl border border-border">
                  <Zap className="text-accent mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-2">Digital Freedom</h3>
                  <p className="text-sm text-text-secondary">Train whenever, wherever, with full guidance.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] bg-primary rounded-[3rem] border border-border overflow-hidden shadow-2xl">
               {/* Placeholder for image - using a div to represent the app interface or training shot */}
               <div className="absolute inset-0 flex items-center justify-center bg-primary">
                 <p className="text-text-secondary font-display uppercase text-4xl font-bold opacity-10 rotate-12">WRK System</p>
               </div>
            </div>
          </div>
        </section>

        {/* E) OFFER (What you get) */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-12 text-center">
              What you get
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "1:1 Coaching Sessions", desc: "Weekly or fortnightly sessions at our private Addington facility to refine technique." },
                { title: "Custom Training App", desc: "Your entire program in your pocket. Video demos, rep tracking, and progress history." },
                { title: "Nutrition Systems", desc: "No rigid meal plans. We build a nutrition framework that fits your lifestyle and goals." },
                { title: "Daily Accountability", desc: "Direct access to your coach via chat. Questions answered within 24 hours." },
                { title: "Form Reviews", desc: "Upload videos of your solo sessions for feedback. Never guess if you're doing it right." },
                { title: "Travel Protocols", desc: "Custom workouts for hotel rooms or limited equipment when you're on the road." }
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
            <div className="mt-16 text-center">
              <Button 
                size="lg" 
                className="px-12 py-6 text-xl shadow-xl w-full md:w-auto"
                onClick={() => setIsModalOpen(true)}
              >
                Book a Consult
              </Button>
            </div>
          </div>
        </section>

        {/* F) HOW IT WORKS */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-16 text-center">How it works</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "The Audit", desc: "We meet for a consult to assess your movement, injury history, stress levels, and goals. We find the gaps." },
                { step: "02", title: "The Build", desc: "I build your custom training block and nutrition protocol. We set the schedule that fits your life." },
                { step: "03", title: "The Execution", desc: "We train. You track. We review. Every week we adjust the variables to ensure you keep progressing." }
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
                { name: "Sarah J.", role: "Corporate Lawyer", quote: "I used to burn out every 3 months. The structure of this program meant I could train through my busiest trial period without crashing." },
                { name: "Mike T.", role: "Business Owner", quote: "I've had back pain for 5 years. 12 weeks of this program and I'm deadlifting pain-free for the first time. The technique focus is legit." },
                { name: "James H.", role: "Dad of 2", quote: "Simple, effective, and fits around the kids. I'm stronger at 40 than I was at 30. Best investment I've made." }
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
            <h2 className="font-display text-4xl font-bold uppercase tracking-tighter mb-12 text-center">Frequently Asked Questions</h2>
            <FAQ items={faqs} />
          </div>
        </section>

        {/* I) CTA */}
        <section className="py-32 px-6 bg-primary text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
              Start Your <span className="text-accent">Progression.</span>
            </h2>
            <p className="text-xl text-text-secondary mb-12 max-w-xl mx-auto">
              No more guessing. No more wasted sessions. Just a clear plan and the support to execute it.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="px-16 py-6 text-xl shadow-xl w-full md:w-auto"
                onClick={() => setIsModalOpen(true)}
              >
                Book a Consult
              </Button>
            </div>
            <p className="mt-8 text-sm text-text-secondary">
              100% No-Pressure Chat. We'll just see if we're a good fit.
            </p>
          </div>
        </section>

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
