import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Check, Smartphone } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';
import { LeadFormModal } from '../components/LeadFormModal';
import { AppScreenshots } from '../components/AppScreenshots';

export const CorporateWellness: React.FC = () => {
  const { pageContent } = useContent();
  // Overriding SEO content
  const [isModalOpen, setIsModalOpen] = useState(false);

  const faqs = [
    {
      question: "Is this suitable for different fitness levels?",
      answer: "Yes. Employees choose programs based on readiness and interest. Beginners get a safe on-ramp. Experienced staff still get progression."
    },
    {
      question: "Do we need an on-site gym?",
      answer: "No. There are home and gym options. Works across NZ for remote and distributed teams."
    },
    {
      question: "Will HR have to manage this day-to-day?",
      answer: "No. HR helps roll out the program. The app handles delivery and structure, and employees have access to coaching and check-ins."
    },
    {
      question: "Is this a one-off challenge?",
      answer: "No — it’s a 12-month commitment. The goal is long-term behaviour change and consistent participation, not a short spike."
    },
    {
      question: "How do we measure success?",
      answer: "We track participation and engagement inside the app and can align targets to your goals (energy, consistency, habit adoption)."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Workplace Wellness Program NZ | App-Based Corporate Wellness (12 Months)"
        description="NZ-wide workplace wellness program delivered via the WRK Personal Training app. A PT in every employee’s pocket: training programs, habit + nutrition support, and check-ins. Flat annual rate by staff size (100 staff = $10k/year). Book a corporate consult."
      />

      <div className="bg-primary text-text-primary transition-colors duration-300 pb-24 md:pb-0">
        
        {/* A) HERO */}
        <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
          <span className="text-accent font-bold uppercase tracking-widest text-xs mb-6 block">NZ-Wide • App-Based • 12-Month Program</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
            Workplace Wellness Program NZ — A PT in Every <span className="text-accent">Employee’s Pocket</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-6 max-w-2xl mx-auto">
            Most workplace “wellness” fails because it relies on motivation and one-off initiatives.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
            <strong>This is different.</strong>
            <br />
            A 12-month corporate wellness program delivered through the WRK Personal Training App — giving every staff member access to training, habits, nutrition support, and real check-ins.
          </p>
          <Button 
            size="lg" 
            className="px-12 py-6 text-xl shadow-xl w-full md:w-auto"
            onClick={() => setIsModalOpen(true)}
          >
            Book a Corporate Consult
          </Button>
          <p className="mt-4 text-xs text-text-secondary uppercase tracking-wider">
            Flat annual rate based on staff numbers • Example: 100 employees = $10k/year • NZ-wide delivery
          </p>
        </section>

        {/* B) AGITATE */}
        <section className="py-20 px-6 bg-secondary border-y border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold uppercase mb-10 text-center">The Wellness Trap</h2>
            <div className="space-y-6">
              {[
                "You’ve tried wellbeing initiatives… engagement drops after the first couple of weeks.",
                "Your team is tired and stressed, but no one has time for complicated programs.",
                "Gym subsidies go unused by the people who need help most.",
                "You want better energy and resilience — but you’re getting burnout and presenteeism."
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
                The problem isn’t that your team doesn’t care. <span className="text-accent">It’s that most programs don’t create a system people can follow.</span>
              </p>
            </div>
          </div>
        </section>

        {/* C) REFRAME */}
        <section className="py-24 px-6 bg-primary text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
              Wellness isn't a perk. It's a <span className="text-accent">performance strategy</span>.
            </h2>
            <p className="text-2xl text-text-primary font-medium leading-relaxed mb-6">
              When employees have stable energy, better recovery, and feel physically capable, they do better work.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-10">
              So we don’t do fluff. We build a structure that runs all year — and actually gets used.
            </p>
            <Button 
              size="lg" 
              className="px-12 py-6 text-xl shadow-xl w-full md:w-auto"
              onClick={() => setIsModalOpen(true)}
            >
              Book a Corporate Consult
            </Button>
          </div>
        </section>

        {/* D) SOLUTION */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">The Solution</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
                WRK Corporate (12 Months, App-Based)
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Your business provides access. We provide the structure.
              </p>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Every employee gets the WRK Personal Training App — with:
              </p>
              <ul className="space-y-4 mb-8 text-left max-w-2xl mx-auto">
                {[
                  "A library of training programs based on interest and readiness",
                  "Habit targets that build consistency (steps, sleep, hydration, etc.)",
                  "Nutrition foundations to support energy and body composition",
                  "Regular check-ins with a personal trainer (so people don’t drift)",
                  "Progress tracking so momentum doesn’t disappear after week two"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-lg text-text-secondary">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-4 mt-2.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xl font-bold text-text-primary mt-8">
                A PT in every employee’s pocket — nationwide.
              </p>
            </div>
            
            <div className="mt-16">
               <h3 className="font-display text-2xl font-bold uppercase mb-8 text-center text-accent">Inside The Platform</h3>
               <AppScreenshots />
            </div>
          </div>
        </section>

        {/* E) WHAT'S INCLUDED */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Employees Get */}
              <div>
                <h2 className="font-display text-3xl font-bold uppercase tracking-tighter mb-8 text-accent">
                  What Employees Get
                </h2>
                <p className="text-text-secondary mb-8 italic">Designed for all levels — from “haven’t trained in years” to “already in the gym”.</p>
                <div className="space-y-6">
                  {[
                    { title: "Training Program Library", desc: "Strength, fat loss, beginner, home-based, gym-based — options by readiness and preference." },
                    { title: "Habit System", desc: "Simple, measurable targets that improve energy and resilience." },
                    { title: "Nutrition Support", desc: "Practical guidance employees can actually follow (not restrictive dieting)." },
                    { title: "Regular Check-ins", desc: "Built-in accountability to increase follow-through." },
                    { title: "Progress Tracking", desc: "Employees can see improvement — participation becomes measurable, not guesswork." }
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
              </div>

              {/* Business Gets */}
              <div>
                <h2 className="font-display text-3xl font-bold uppercase tracking-tighter mb-8 text-accent">
                  What The Business Gets
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "One Flat Annual Rate", desc: "Based on staff size. Predictable budgeting." },
                    { title: "Low Admin", desc: "Simple rollout assets and onboarding steps. We handle the heavy lifting." },
                    { title: "Scalable Program", desc: "Works for remote and multi-site teams across NZ." },
                    { title: "Repeatable Structure", desc: "Supports retention, energy, and performance all year round." }
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
                <div className="mt-12 text-center md:text-left">
                  <Button 
                    size="lg" 
                    className="px-12 py-6 text-xl shadow-xl w-full md:w-auto"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Book a Corporate Consult
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* F) HOW IT WORKS */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-16 text-center">How It Works (Simple Rollout)</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Consult", desc: "We confirm headcount, team mix (office/remote/shift work), and goals." },
                { step: "02", title: "Setup + Launch", desc: "We onboard your team into the app with clear comms and an easy start pathway." },
                { step: "03", title: "Maintain + Improve", desc: "Employees follow programs, check in, and build consistency over time — not just during a “wellness month”." }
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
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
              Pricing
            </h2>
            <p className="text-2xl text-text-primary font-medium mb-4">
              Flat annual rate based on staff numbers.
            </p>
            <div className="bg-secondary p-8 rounded-2xl border border-border inline-block mb-8">
              <p className="text-xl text-text-secondary">
                Example: <span className="font-bold text-text-primary">100 employees = $10,000/year</span>
              </p>
            </div>
            <p className="text-text-secondary mb-10">
              (We’ll quote based on headcount and how you want the program structured.)
            </p>
            <Button 
              size="lg" 
              className="px-12 py-6 text-xl shadow-xl w-full md:w-auto"
              onClick={() => setIsModalOpen(true)}
            >
              Book a Corporate Consult
            </Button>
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
              Build a healthier, <span className="text-accent">higher-performing team</span> — without the admin.
            </h2>
            <p className="text-xl text-text-secondary mb-12 max-w-xl mx-auto">
              If you want a workplace wellness program that actually gets used all year, let’s talk.
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
            <p className="mt-8 text-sm text-text-secondary">
              We’ll confirm fit, headcount, and the best rollout approach.
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
          Book a Corporate Consult
        </Button>
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
