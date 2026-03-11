
import React from 'react';
import { Button } from '../components/Button';
import { Check, Trophy, Smartphone, Utensils, Users, Star } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';
import { AppScreenshots } from '../components/AppScreenshots';

export const Challenge42: React.FC = () => {
  const { pageContent } = useContent();
  // Overriding SEO content

  const faqs = [
    {
      question: "Do I need a gym membership?",
      answer: "No. There are Gym and Home versions, and you can switch if needed."
    },
    {
      question: "Is there a meal plan?",
      answer: "It’s a nutrition framework (not a restrictive diet). You’ll get targets, guidance, and resources to make it easy."
    },
    {
      question: "What if I miss a day?",
      answer: "You don’t restart. You continue. The plan is designed for real life."
    },
    {
      question: "Is this suitable for beginners?",
      answer: "Yes. It’s beginner-friendly and built to help you build confidence and consistency."
    },
    {
      question: "What happens after 42 days?",
      answer: "You’ll finish with a repeatable structure and momentum. If you want the next step, you’ll have the option to move into ongoing coaching."
    }
  ];

  const purchaseUrl = "https://wrkpersonaltraining.mypthub.net/p/225904";

  return (
    <>
      <SeoHead 
        title="Fitness Challenge NZ | 42 Day Reset (6-Week Kickstart) – $47"
        description="A beginner-friendly fitness challenge you can start anytime. 42 Day Reset includes training (gym or home), nutrition framework, habit tracking, and progress tracking. Instant access. $47 NZD."
      />

      <div className="bg-primary text-text-primary transition-colors duration-300 pb-24 md:pb-0">
        
        {/* A) HERO */}
        <section className="relative pt-40 pb-32 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://i.postimg.cc/cJpTZjWZ/pexels-uriel-mont-6271691.jpg" 
              alt="42 Day Reset Training" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-6 block">Habits • Training • Nutrition</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-[0.9] text-white">
              42 Day Fitness Challenge NZ — Reset Your <span className="text-accent">Habits, Health & Headspace</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-10 max-w-2xl mx-auto">
              You don’t need another crash diet. You need a reset.
              <br className="hidden md:block" />
              A structured 6-week kickstart that builds momentum you can actually keep.
            </p>
            <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-12 py-6 text-xl shadow-xl w-full md:w-auto">Start Your Reset ($47 NZD)</Button>
            </a>
            <p className="mt-4 text-xs text-gray-300 uppercase tracking-wider">Instant access • One-time payment • Start anytime</p>
          </div>
        </section>

        {/* B) AGITATE */}
        <section className="py-20 px-6 bg-secondary border-y border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold uppercase mb-10 text-center">Feeling Stuck?</h2>
            <div className="space-y-6">
              {[
                "You feel sluggish, tired, and flat.",
                "Your clothes are tighter than they used to be.",
                "You’ve been “starting Monday” for 6 months.",
                "You’re training without a plan and seeing zero results.",
                "You want to get back on track… but don’t know where to start."
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
                This isn’t a motivation problem. <span className="text-accent">It’s a structure problem.</span>
              </p>
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
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              The 42 Day Reset isn’t about starving yourself or training 7 days a week. It’s about installing the daily habits that make fitness automatic.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-10">
              You get the plan, the tools, and a simple structure to follow — so you stop guessing and start progressing.
            </p>
            <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-12 py-6 text-xl shadow-xl w-full md:w-auto">Start Your Reset ($47 NZD)</Button>
            </a>
          </div>
        </section>

        {/* D) SOLUTION */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">The Solution</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
                The 42 Day Reset.
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                A complete 6-week training + nutrition protocol delivered through the app.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
              <div className="bg-primary p-6 rounded-2xl border border-border flex flex-col items-center text-center">
                <Smartphone className="text-accent mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">The App</h3>
                <p className="text-sm text-text-secondary">Workouts, tracking, and targets in your pocket.</p>
              </div>
              <div className="bg-primary p-6 rounded-2xl border border-border flex flex-col items-center text-center">
                <Utensils className="text-accent mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">Nutrition Guide</h3>
                <p className="text-sm text-text-secondary">Simple framework, recipes, shopping lists, and clear targets.</p>
              </div>
              <div className="bg-primary p-6 rounded-2xl border border-border flex flex-col items-center text-center">
                <Users className="text-accent mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">Support</h3>
                <p className="text-sm text-text-secondary">A private group to keep you moving when motivation drops.</p>
              </div>
            </div>
            
            <p className="text-center text-sm text-text-secondary italic mb-16">
              (You can start anytime. No waiting for a “challenge start date.”)
            </p>

            <div className="mt-16">
               <h3 className="font-display text-2xl font-bold uppercase mb-8 text-center text-accent">Inside The Platform</h3>
               <AppScreenshots />
            </div>
          </div>
        </section>

        {/* E) OFFER (What you get) */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-12 text-center">
              What's Included
            </h2>
            <p className="text-xl text-center text-text-secondary mb-12">
              Everything you need to build momentum in 42 days:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "6-Week Training Program", desc: "Gym or Home options. 3–4 sessions per week." },
                { title: "Nutrition Framework", desc: "Learn how to fuel your body without giving up everything you love." },
                { title: "Habit Tracking", desc: "Simple daily targets for water, sleep, steps, and consistency." },
                { title: "Video Demonstrations", desc: "Every exercise has a demo so you know exactly what to do." },
                { title: "Progress Tracking", desc: "Track workouts and key stats so you can see the changes happening." },
                { title: "Support Group", desc: "Community support for questions, encouragement, and accountability." }
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
              <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="px-12 py-6 text-xl shadow-xl w-full md:w-auto">Start Your Reset ($47 NZD)</Button>
              </a>
              <p className="mt-4 text-xs text-text-secondary uppercase tracking-wider">One-time payment. Instant access.</p>
            </div>
          </div>
        </section>

        {/* F) HOW IT WORKS */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-16 text-center">The Timeline</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Sign Up", desc: "Create your account, download the app, and get instant access." },
                { step: "02", title: "Set Up (Day 1)", desc: "Pick Gym or Home, schedule your sessions, and lock in your targets." },
                { step: "03", title: "The 42 Days", desc: "You train, track, and build momentum — one week at a time." }
              ].map((item, i) => (
                <div key={i} className="relative p-8 bg-primary rounded-[2rem] border border-border">
                  <span className="absolute -top-6 left-8 text-6xl font-display font-bold text-accent/20">{item.step}</span>
                  <h3 className="font-display text-2xl font-bold uppercase mb-4 mt-6">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-text-secondary italic">
              (Miss a day? You don’t “fail.” You just continue the plan. Consistency beats perfection.)
            </p>
          </div>
        </section>

        {/* G) PROOF */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold uppercase tracking-tighter mb-12">Real Results</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { name: "Sarah J.", result: "Lost 5kg", quote: "I finally understand how to eat. I’m not starving, and the weight is coming off." },
                { name: "Mike D.", result: "Stronger than ever", quote: "The structure is what I needed. No more guessing in the gym." },
                { name: "Kelly R.", result: "Habits stuck", quote: "The 42 days are over but I’m still going. It changed my mindset." }
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
            <p className="mt-12 text-lg font-bold text-text-primary">
              Results vary — but structure always wins.
            </p>
          </div>
        </section>

        {/* H) FAQ */}
        <section className="py-24 px-6 bg-secondary border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold uppercase tracking-tighter mb-12 text-center">FAQs</h2>
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
              Six weeks from now you’ll wish you started today.
              <br />
              Let’s build momentum that lasts.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="px-16 py-6 text-xl shadow-xl w-full md:w-auto">Start Your Reset ($47 NZD)</Button>
              </a>
            </div>
            <p className="mt-8 text-sm text-text-secondary">
              One-time payment • Instant access • Start anytime
            </p>
          </div>
        </section>

      </div>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-primary border-t border-border md:hidden z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="w-full shadow-xl">Start Your Reset ($47 NZD)</Button>
        </a>
      </div>
    </>
  );
};

const CheckCircleIcon = () => (
  <div className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-1">
    <Check size={14} strokeWidth={3} />
  </div>
);
