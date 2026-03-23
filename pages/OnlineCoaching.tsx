
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Smartphone, Video, Check, Star } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';
import { LeadFormModal } from '../components/LeadFormModal';
import { AppScreenshots } from '../components/AppScreenshots';

export const OnlineCoaching: React.FC = () => {
  const { pageContent } = useContent();
  // We are overriding the default SEO content with the specific pack provided
  const [isModalOpen, setIsModalOpen] = useState(false);

  const faqs = [
    {
      question: "Can you build a plan around a busy schedule or travel?",
      answer: "Yes — that’s the primary problem I solve. We build around available days and include travel/hotel options so you don’t lose momentum."
    },
    {
      question: "Do I need a gym membership?",
      answer: "No. Gym, home, or hybrid — we build around what you actually have access to."
    },
    {
      question: "How do form checks work?",
      answer: "You upload short videos in-app. I send feedback so you know what to change and what to keep."
    },
    {
      question: "Is there a minimum commitment?",
      answer: "Yes — 12 weeks. That’s the timeframe needed to build momentum, create real change, and stop restarting."
    },
    {
      question: "Do you work with beginners online?",
      answer: "Yes. Beginners often do extremely well because we build the basics properly and keep things simple."
    },
    {
      question: "Do you coach NZ-wide?",
      answer: "Yes — anywhere in NZ (and worldwide if needed)."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Online Personal Training NZ | High-Touch App Coaching (12 Weeks)"
        description="Online personal training across NZ with app-based programming, weekly check-ins, nutrition targets and video form feedback. $99 onboarding + $27.50/week (12-week minimum). Apply now."
      />

      <div className="bg-primary text-text-primary transition-colors duration-300 pb-24 md:pb-0">
        
        {/* A) HERO */}
        <section className="relative pt-40 pb-32 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={pageContent.onlineCoaching?.hero?.image || "https://i.postimg.cc/mkq4Yt9C/pexels-pripicart-591216.jpg"} 
              alt="Online Personal Training" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-6 block">NZ-Wide • App Based • High Touch</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-[0.9] text-white">
              Online Personal Training NZ — World-Class Coaching, <span className="text-accent">Anywhere.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6 max-w-2xl mx-auto">
              You don’t need a trainer standing over you counting reps.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              You need a professional strategy, intelligent programming, and accountability that doesn’t let you drift.
            </p>
            <Button 
              size="lg" 
              className="px-12 py-6 text-xl shadow-xl w-full md:w-auto"
              onClick={() => setIsModalOpen(true)}
            >
              Apply for Coaching
            </Button>
            <p className="mt-4 text-xs text-gray-300 uppercase tracking-wider">Application only • 12-week minimum • $99 onboarding + $27.50/week</p>
          </div>
        </section>

        {/* B) AGITATE */}
        <section className="py-20 px-6 bg-secondary border-y border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold uppercase mb-10 text-center">The problem with “generic” plans</h2>
            <div className="space-y-6">
              {[
                "You travel for work… and “Monday chest day” dies in a hotel gym with dumbbells.",
                "You know how to lift, but not what to do to break your plateau.",
                "You’ve downloaded PDFs before… and stopped after 3 weeks because no one was watching.",
                "You’re training hard but eating poorly, so your physique never changes.",
                "You’re sick of guessing and want to outsource the thinking to an expert."
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
                The issue isn’t effort. <span className="text-accent">It’s direction + consistency.</span>
              </p>
            </div>
          </div>
        </section>

        {/* C) REFRAME */}
        <section className="py-24 px-6 bg-primary text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
              You don't need a <span className="text-accent">babysitter</span>.
            </h2>
            <p className="text-2xl text-text-primary font-medium leading-relaxed mb-6">
              You need a strategist.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Most people think they need “motivation.”
              <br />
              What they actually need is a plan that adapts to real life — and a coach who notices when they drift off course.
            </p>
            <p className="text-xl font-bold text-text-primary mb-10">
              That’s what this is.
            </p>
            <Button 
              size="lg" 
              className="px-12 py-6 text-xl shadow-xl w-full md:w-auto"
              onClick={() => setIsModalOpen(true)}
            >
              Apply for Coaching
            </Button>
          </div>
        </section>

        {/* D) SOLUTION */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">The Solution</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
                WRK Online.
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                This isn’t a PDF download. It’s a high-touch coaching relationship delivered digitally.
              </p>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                You get a program built around your goals, schedule, and equipment. Weekly coaching that adjusts based on results + recovery. Video feedback so technique doesn’t become your bottleneck.
              </p>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed font-bold">
                It’s like having a coach in your pocket — without needing to train at a specific location.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
              <div className="bg-primary p-6 rounded-2xl border border-border">
                <Smartphone className="text-accent mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">The App</h3>
                <p className="text-sm text-text-secondary">Your program, demos, tracking, and history in one place.</p>
              </div>
              <div className="bg-primary p-6 rounded-2xl border border-border">
                <Video className="text-accent mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">Video Feedback</h3>
                <p className="text-sm text-text-secondary">Upload lifts → get corrections → progress safely and faster.</p>
              </div>
            </div>

            <div className="mt-16">
               <h3 className="font-display text-2xl font-bold uppercase mb-8 text-center text-accent">Inside The Platform</h3>
               <AppScreenshots />
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
              Everything you need to keep progressing — without overthinking.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Custom training program", desc: "Built for your goals, equipment, and schedule. Progresses as you progress." },
                { title: "Video form analysis", desc: "Record key lifts. I review and send clear corrections (voice notes / cues)." },
                { title: "Nutrition framework", desc: "Protein + calorie targets aligned to your goal (fat loss, muscle, performance). No rigid meal plans." },
                { title: "Weekly check-ins", desc: "We review adherence, biofeedback, stress, sleep, and progress — then adjust." },
                { title: "Direct coach access", desc: "Message me inside the app. Questions answered within 24 hours." },
                { title: "Lifestyle management", desc: "We track sleep, stress, and energy so you don’t burn out while “trying to be consistent.”" }
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
                Apply for Coaching
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
                { step: "01", title: "Onboarding", desc: "We jump on a call to map goals, schedule, equipment, injury history, and constraints. We set your strategy." },
                { step: "02", title: "Setup", desc: "I build your program in the app. You get your login, weekly structure, and nutrition targets." },
                { step: "03", title: "Execution (12-week block)", desc: "You train. You track. You upload videos. Every week we refine and progress." }
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

        {/* G) PRICING */}
        <section className="py-24 px-6 bg-primary text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">Pricing</h2>
            <div className="bg-secondary p-10 rounded-[2.5rem] border border-border inline-block w-full max-w-2xl">
              <h3 className="font-display text-3xl font-bold uppercase mb-4">Online Coaching</h3>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">$99 onboarding + $27.50/week</div>
              <p className="text-text-secondary mb-8">12-week minimum commitment<br/><span className="text-xs opacity-70">(because quick fixes are how people end up starting over)</span></p>
              
              <div className="text-left max-w-md mx-auto space-y-4 mb-10">
                <p className="font-bold text-text-primary">If you’re a fit, you’ll leave this 12-week block with:</p>
                {[
                  "A repeatable weekly structure",
                  "Stronger lifts + better movement quality",
                  "Clearer nutrition targets you can actually maintain",
                  "Momentum that doesn’t disappear when life gets busy"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-accent mt-1 shrink-0" />
                    <span className="text-text-secondary text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="px-12 py-6 text-xl shadow-xl w-full"
                onClick={() => setIsModalOpen(true)}
              >
                Apply for Coaching
              </Button>
            </div>
          </div>
        </section>

        {/* H) PROOF */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold uppercase tracking-tighter mb-12">Client Results</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { name: "Mark T.", role: "Sales Director", quote: "I travel 2 weeks a month. This is the first time I’ve stayed consistent while on the road. The hotel workouts saved me." },
                { name: "Emma S.", role: "Working Mum", quote: "The app makes it easy. I don’t have to think — I just open it and do the work. Down 8kg in 12 weeks." },
                { name: "Jason L.", role: "Software Dev", quote: "I was skeptical about online coaching, but the video feedback is better than trainers I’ve had in person. My squat has never felt better." }
              ].map((item, i) => (
                <div key={i} className="bg-primary p-8 rounded-2xl border border-border">
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
            <p className="mt-10 text-text-secondary font-medium">Results vary — but consistency always wins.</p>
          </div>
        </section>

        {/* I) FAQ */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold uppercase tracking-tighter mb-12 text-center">FAQs</h2>
            <FAQ items={faqs} />
          </div>
        </section>

        {/* J) FINAL CLOSE (CTA) */}
        <section className="py-32 px-6 bg-secondary text-center border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
              Start progressing — <span className="text-accent">without guessing.</span>
            </h2>
            <p className="text-xl text-text-secondary mb-6 max-w-xl mx-auto">
              Professional strategy, delivered through your phone.
              <br />
              If you’re accepted, we’ll build your 12-week block and get to work.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
              <Button 
                size="lg" 
                className="px-16 py-6 text-xl shadow-xl w-full md:w-auto"
                onClick={() => setIsModalOpen(true)}
              >
                Apply for Coaching
              </Button>
            </div>
            <p className="text-sm text-text-secondary">
              100% no-pressure. We’ll just confirm fit and the best next step.
            </p>
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
          Apply for Coaching
        </Button>
      </div>

      <LeadFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        service="Online Coaching" 
      />
    </>
  );
};

const CheckCircleIcon = () => (
  <div className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-1">
    <Check size={14} strokeWidth={3} />
  </div>
);
