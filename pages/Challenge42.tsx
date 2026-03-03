
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Calendar, Check, Trophy, AlertTriangle, ArrowRight, Timer, Utensils, Smartphone, Users, Star } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';

export const Challenge42: React.FC = () => {
  const { pageContent } = useContent();
  const { seo } = pageContent.challenge42;

  const faqs = [
    {
      question: "Do I need a gym membership?",
      answer: "No. We have Gym and Home versions of the program. You can switch between them if needed."
    },
    {
      question: "Is there a meal plan?",
      answer: "We provide a nutrition framework and recipe packs, not a rigid 'chicken and broccoli' plan. You learn how to eat for your goals."
    },
    {
      question: "What if I miss a day?",
      answer: "You get back on track the next day. The goal is consistency, not perfection. The app helps you adjust."
    },
    {
      question: "Is this suitable for beginners?",
      answer: "Yes. The training has regression options. If you can move, you can do this challenge."
    },
    {
      question: "What happens after 42 days?",
      answer: "Most people graduate into our ongoing Online Coaching or Personal Training. You'll have a consult at the end to decide your next step."
    }
  ];

  return (
    <>
      <SeoHead 
        title="42 Day Reset Challenge | WRK Coaching"
        description="42 Days to Reset Your Habits, Health, and Headspace. A structured kickstart for busy professionals."
      />

      <div className="bg-primary text-text-primary transition-colors duration-300">
        
        {/* A) HOOK */}
        <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
          <span className="text-accent font-bold uppercase tracking-widest text-xs mb-6 block">Habits • Training • Nutrition</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
            42 Days to Reset Your <br/><span className="text-accent">Habits, Health, & Headspace.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
            You don't need another "crash diet". You need a hard reset. A structured, 6-week kickstart to build momentum that actually lasts.
          </p>
          <a href="https://wrkpersonaltraining.mypthub.net/p/225904" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="px-12 py-6 text-xl shadow-xl w-full md:w-auto">Start Your Reset ($47)</Button>
          </a>
          <p className="mt-4 text-xs text-text-secondary uppercase tracking-wider">Instant Access • One-time Payment</p>
        </section>

        {/* B) AGITATE */}
        <section className="py-20 px-6 bg-secondary border-y border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold uppercase mb-10 text-center">Feeling Stuck?</h2>
            <div className="space-y-6">
              {[
                "You feel sluggish, tired, and unmotivated.",
                "Your clothes are feeling tighter than they used to.",
                "You've tried 'starting Monday' for the last 6 months.",
                "You're training without a plan and seeing zero results.",
                "You want to get back on track but don't know where to start."
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
              Motivation is <span className="text-accent">fleeting</span>.
            </h2>
            <p className="text-2xl text-text-primary font-medium leading-relaxed mb-6">
              Systems are forever.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              The 42 Day Reset isn't about starving yourself or training 7 days a week. It's about installing the daily habits that make fitness automatic. We give you the plan, the tools, and the accountability to execute.
            </p>
          </div>
        </section>

        {/* D) SOLUTION */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">The Solution</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
                The 42 Day Reset.
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                A complete 6-week training and nutrition protocol delivered via our app.
              </p>
              <div className="grid gap-6">
                <div className="bg-primary p-6 rounded-2xl border border-border flex gap-4">
                  <Smartphone className="text-accent shrink-0" size={32} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">The App</h3>
                    <p className="text-sm text-text-secondary">Workouts, progress tracking, and nutrition targets in your pocket.</p>
                  </div>
                </div>
                <div className="bg-primary p-6 rounded-2xl border border-border flex gap-4">
                  <Utensils className="text-accent shrink-0" size={32} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Nutrition Guide</h3>
                    <p className="text-sm text-text-secondary">Recipe packs, shopping lists, and calorie targets tailored to you.</p>
                  </div>
                </div>
                <div className="bg-primary p-6 rounded-2xl border border-border flex gap-4">
                  <Users className="text-accent shrink-0" size={32} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Community</h3>
                    <p className="text-sm text-text-secondary">Join a group of like-minded people pushing for the same goal.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] bg-primary rounded-[3rem] border border-border overflow-hidden shadow-2xl flex items-center justify-center">
               <div className="text-center p-8">
                 <Trophy size={64} className="text-text-secondary mx-auto mb-4 opacity-20" />
                 <p className="text-text-secondary font-display uppercase text-2xl font-bold opacity-20">Challenge Dashboard</p>
               </div>
            </div>
          </div>
        </section>

        {/* E) OFFER (What you get) */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-12 text-center">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "6-Week Training Program", desc: "Gym or Home options available. 3-4 sessions per week." },
                { title: "Nutrition Framework", desc: "Learn how to fuel your body without giving up everything you love." },
                { title: "Habit Tracking", desc: "Daily targets for water, sleep, and steps to build a resilient lifestyle." },
                { title: "Video Demonstrations", desc: "Every exercise has a video so you know exactly what to do." },
                { title: "Progress Tracking", desc: "Log your weights and body stats to see your improvement over time." },
                { title: "Support Group", desc: "Access to the private challenge community for questions and motivation." }
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
              <a href="https://wrkpersonaltraining.mypthub.net/p/225904" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="px-12 py-6 text-xl shadow-xl w-full md:w-auto">Join the Reset ($47)</Button>
              </a>
            </div>
          </div>
        </section>

        {/* F) HOW IT WORKS */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-16 text-center">The Timeline</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Sign Up", desc: "Create your account, download the app, and get instant access to your plan." },
                { step: "02", title: "Prep Week", desc: "Shop for food, schedule your workouts, and get familiar with the movements." },
                { step: "03", title: "The Grind", desc: "6 weeks of focused work. We track progress weekly and adjust as we go." }
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
            <h2 className="font-display text-4xl font-bold uppercase tracking-tighter mb-12">Real Results</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { name: "Sarah J.", result: "Lost 5kg", quote: "I finally understand how to eat. I'm not starving, and the weight is coming off." },
                { name: "Mike D.", result: "Stronger than ever", quote: "The structure is what I needed. No more guessing in the gym." },
                { name: "Kelly R.", result: "Habits stuck", quote: "The 42 days are over but I'm still going. It changed my mindset." }
              ].map((item, i) => (
                <div key={i} className="bg-secondary p-8 rounded-2xl border border-border">
                  <div className="flex gap-1 text-accent mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-text-secondary text-sm italic mb-6">"{item.quote}"</p>
                  <div>
                    <strong className="block text-text-primary font-bold">{item.name}</strong>
                    <span className="text-xs text-accent uppercase tracking-wider font-bold">{item.result}</span>
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
        <section className="py-32 px-6 bg-primary text-center border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
              Ready to <span className="text-accent">Reset?</span>
            </h2>
            <p className="text-xl text-text-secondary mb-12 max-w-xl mx-auto">
              6 weeks from now, you'll wish you started today. Let's get to work.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="https://wrkpersonaltraining.mypthub.net/p/225904" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="px-16 py-6 text-xl shadow-xl w-full md:w-auto">Start Your Reset ($47)</Button>
              </a>
            </div>
            <p className="mt-8 text-sm text-text-secondary">
              One-time payment. Instant access.
            </p>
          </div>
        </section>

      </div>
    </>
  );
};

const CheckCircleIcon = () => (
  <div className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-1">
    <Check size={14} strokeWidth={3} />
  </div>
);
