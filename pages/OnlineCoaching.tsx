
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Smartphone, Video, MessageSquare, Check, Utensils, Globe, ArrowRight, Zap, Moon, Droplets, Star } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';
import { LeadFormModal } from '../components/LeadFormModal';

export const OnlineCoaching: React.FC = () => {
  const { pageContent } = useContent();
  const { seo } = pageContent.onlineCoaching;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const faqs = [
    {
      question: "Can you build a plan around a busy schedule or travel?",
      answer: "Yes. That’s the primary problem I solve. We build around your available days and I include travel/hotel options so you don’t lose momentum when you’re away."
    },
    {
      question: "Do I need a gym membership?",
      answer: "Not necessarily. I can program for full gym access, limited equipment, or home setups—depending on what you realistically have."
    },
    {
      question: "How do form checks work?",
      answer: "You upload short videos in the app (or follow the process we set). I’ll give you clear feedback and cues to tighten technique."
    },
    {
      question: "Is there a minimum commitment?",
      answer: "Yes—12 weeks. That’s long enough to build momentum, see meaningful progress, and make the routine stick."
    },
    {
      question: "Do you work with beginners online?",
      answer: "Yes. If you can follow instructions and film short clips occasionally, we can coach you well online."
    },
    {
      question: "Do you coach NZ-wide / worldwide?",
      answer: "Yes—NZ-wide and worldwide (English-speaking)."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Online Personal Training | WRK Coaching"
        description="World-class programming and accountability, anywhere in the world. Built for busy professionals who need a system, not a babysitter."
      />

      <div className="bg-primary text-text-primary transition-colors duration-300">
        
        {/* A) HOOK */}
        <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
          <span className="text-accent font-bold uppercase tracking-widest text-xs mb-6 block">Worldwide • App Based • High Touch</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
            World-Class Coaching. <br/><span className="text-accent">Anywhere.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
            You don't need a trainer standing over you counting reps. You need a professional strategy, intelligent programming, and ruthless accountability.
          </p>
          <Button 
            size="lg" 
            className="px-12 py-6 text-xl shadow-xl w-full md:w-auto"
            onClick={() => setIsModalOpen(true)}
          >
            Apply for Coaching
          </Button>
          <p className="mt-4 text-xs text-text-secondary uppercase tracking-wider">Application Only • 12 Week Minimum</p>
        </section>

        {/* B) AGITATE */}
        <section className="py-20 px-6 bg-secondary border-y border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold uppercase mb-10 text-center">The Problem with "Generic" Plans</h2>
            <div className="space-y-6">
              {[
                "You travel for work, so your 'Monday Chest Day' falls apart when you're in a hotel with only dumbbells.",
                "You know HOW to lift, but you don't know WHAT to do to break your plateau.",
                "You've downloaded PDF programs before, but fell off the wagon after 3 weeks because no one was watching.",
                "You're training hard but eating poorly, so your physique never actually changes.",
                "You're tired of guessing and want to outsource the thinking to an expert."
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
              You don't need a <span className="text-accent">babysitter</span>.
            </h2>
            <p className="text-2xl text-text-primary font-medium leading-relaxed mb-6">
              You need a strategist.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Most people think they need someone to motivate them in the gym. What they actually need is a plan that adapts to their life, and a coach who notices when they drift off course.
            </p>
          </div>
        </section>

        {/* D) SOLUTION */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">The Solution</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
                WRK Online.
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                This isn't a PDF download. This is a high-touch coaching relationship delivered digitally.
              </p>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                We use professional coaching software to deliver your workouts, track your weights, monitor your nutrition, and analyze your technique. It's like having a coach in your pocket, 24/7.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary p-6 rounded-2xl border border-border">
                  <Smartphone className="text-accent mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-2">The App</h3>
                  <p className="text-sm text-text-secondary">Your program, demos, and history in one place.</p>
                </div>
                <div className="bg-primary p-6 rounded-2xl border border-border">
                  <Video className="text-accent mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-2">Video Feedback</h3>
                  <p className="text-sm text-text-secondary">Upload lifts, get detailed technical analysis.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] bg-primary rounded-[3rem] border border-border overflow-hidden shadow-2xl flex items-center justify-center">
               <div className="text-center p-8">
                 <Smartphone size={64} className="text-text-secondary mx-auto mb-4 opacity-20" />
                 <p className="text-text-secondary font-display uppercase text-2xl font-bold opacity-20">App Interface Preview</p>
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
                { title: "Custom Training Program", desc: "Built for your goals, your equipment, and your schedule. Updated as you progress." },
                { title: "Video Form Analysis", desc: "Record your main lifts. I review them and send back voice-over corrections." },
                { title: "Nutrition Framework", desc: "Calorie and protein targets tailored to your goal (Fat Loss, Muscle, or Performance)." },
                { title: "Weekly Check-Ins", desc: "A formal review of your week. We look at biofeedback, stress, and progress." },
                { title: "Direct Coach Access", desc: "Message me anytime in the app. Questions answered within 24 hours." },
                { title: "Lifestyle Management", desc: "We track sleep, stress, and energy to ensure you aren't burning out." }
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
                { step: "01", title: "Onboarding", desc: "We jump on a video call to map out your goals, schedule, and equipment. We set the strategy." },
                { step: "02", title: "The Setup", desc: "I build your program in the app. You get your login, view your schedule, and see your nutrition targets." },
                { step: "03", title: "The Sprint", desc: "You execute. You track your weights. You upload videos. Every week, we review and refine." }
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
                { name: "Mark T.", role: "Sales Director", quote: "I travel 2 weeks a month. This is the first time I’ve actually stayed consistent while on the road. The hotel workouts saved me." },
                { name: "Emma S.", role: "Working Mum", quote: "The app makes it easy. I don’t have to think, I just open it and do the work. Down 8kg in 12 weeks." },
                { name: "Jason L.", role: "Software Dev", quote: "I was skeptical about online coaching, but the video feedback is better than trainers I’ve had in person. My squat has never felt better." }
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
              Start Your <span className="text-accent">Transformation.</span>
            </h2>
            <p className="text-xl text-text-secondary mb-12 max-w-xl mx-auto">
              Professional guidance, anywhere in the world. Stop guessing and start progressing.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="px-16 py-6 text-xl shadow-xl w-full md:w-auto"
                onClick={() => setIsModalOpen(true)}
              >
                Apply for Coaching
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
