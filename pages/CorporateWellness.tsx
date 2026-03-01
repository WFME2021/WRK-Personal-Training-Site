import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import { Button } from '../components/Button';
import { 
  TrendingUp, Users, DollarSign, Activity, 
  ArrowRight, CheckCircle2, 
  Plus, Minus, Building2, Mail, BarChart3, 
  Zap, Shield, AlertTriangle, Briefcase, Brain,
  Smartphone, Utensils, MessageSquare, Lock, XCircle
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

import { Hero } from '../components/Hero';
import { MidPageBanner } from '../components/MidPageBanner';

export const CorporateWellness: React.FC = () => {
  const { pageContent } = useContent();
  const { hero, banner, seo } = pageContent.corporateWellness;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToEnquiry = () => {
    document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { 
      value: "$46B", 
      label: "Lost Annually", 
      desc: "NZ employers lose billions to presenteeism—employees working while unwell.",
      icon: DollarSign
    },
    { 
      value: "ROI", 
      label: "Positive Return", 
      desc: "Early-intervention workplace wellbeing has been estimated to return multiple dollars for every dollar invested.",
      icon: BarChart3
    }
  ];

  const faqs = [
    {
      question: "Will HR have to manage this day-to-day?",
      answer: "No. HR supports the rollout. The app-led system and structure drives the execution."
    },
    {
      question: "How do you handle different fitness levels?",
      answer: "Employees choose plans with clear beginner → intermediate on-ramps and different focuses. Everyone can start where they are."
    },
    {
      question: "What if employees don’t like gyms?",
      answer: "No problem—there are home-based options and time-efficient sessions."
    },
    {
      question: "Is employee data private?",
      answer: "Yes. Any reporting should be aggregated/anonymous unless an employee opts in to share more."
    },
    {
      question: "Is this just a gym membership subsidy?",
      answer: "No. Subsidies are access. This is a system employees can actually follow: plan, progression, and support."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SeoHead 
        title={seo.title}
        description={seo.description}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Corporate Wellness Program",
            "provider": {
              "@type": "LocalBusiness",
              "name": "WRK Personal Training",
              "image": hero.image
            },
            "areaServed": {
              "@type": "Country",
              "name": "New Zealand"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Corporate Wellness Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Annual Corporate Wellness Package"
                  }
                }
              ]
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          }
        ]}
      />

      <div className="bg-primary min-h-screen text-text-primary font-sans transition-colors duration-300">
        
        {/* Hero Section - Full Width Banner */}
        <Hero 
          image={hero.image}
          title={hero.h1}
          subtitle={hero.subhead}
          bullets={hero.bullets}
          kicker={hero.kicker}
        />

        {/* RELATABILITY (Relate) */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="font-display text-4xl md:text-6xl uppercase font-bold text-text-primary mb-8 tracking-tighter">
               If this sounds familiar, <span className="text-accent">this is for you</span>
             </h2>
             <ul className="space-y-4 mb-8 text-left max-w-2xl mx-auto">
                {[
                  "Stress is high and energy is low across the team",
                  "Posture and “everyday niggles” are becoming normal",
                  "Wellness initiatives get a spike… then fade out",
                  "Gym subsidies get used by the already-fit and ignored by everyone else",
                  "HR doesn’t have time to manage another programme"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-lg text-text-secondary">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-4 mt-2.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
             </ul>
             <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-8 font-medium italic">
               The point isn’t wellness theatre. The point is measurable capacity: energy, consistency, and resilience that shows up at work.
             </p>
             <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
               <Link to="/contact">
                 <Button size="lg" className="px-8 py-4 text-lg shadow-xl">Book a consult</Button>
               </Link>
               <Link to="/assessment">
                 <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-accent text-accent hover:bg-accent hover:text-white">Take the assessment</Button>
               </Link>
             </div>
          </div>
        </section>

        {/* VALUE (What employees get) */}
        <section className="py-24 px-6 bg-primary border-b border-border">
          <div className="max-w-6xl mx-auto">
             <div className="grid md:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="font-display text-5xl md:text-7xl uppercase font-bold text-text-primary mb-8 leading-[0.9] tracking-tighter">
                    What <br/><span className="text-text-secondary">Employees Get.</span>
                  </h2>
                  <p className="text-xl text-text-primary leading-relaxed mb-8">
                    A training system that adapts to real people—different fitness levels, different goals, different constraints.
                  </p>
                  <ul className="space-y-6">
                    {[
                      "A catalogue of training plans and programs so employees can start where they’re at",
                      "Beginner → intermediate on-ramps (no “already fit” barrier)",
                      "Strength / cardio / mobility options depending on what they’re into",
                      "Home-based or gym-based programs",
                      "Time-efficient sessions designed for real schedules",
                      "Nutrition resources to support energy and body composition (tracking optional, not obsessive)"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start group">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-4 mt-2.5 shrink-0"></div>
                        <span className="text-text-secondary text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-lg font-medium italic text-text-primary border-l-4 border-accent pl-6 py-2">
                    Employees pick the focus. The system provides the structure.
                  </p>
                </div>
                <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-border">
                   <img 
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80" 
                    alt="Employee using wellness app" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
             </div>
          </div>
        </section>

        <MidPageBanner 
          image={banner.image}
          tagline={banner.tagline}
          support={banner.support}
        />

        {/* PROOF (Why generic programs don’t stack up) */}
        <section className="py-24 px-6 bg-primary">
            <div className="max-w-6xl mx-auto">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-widest mb-16 text-center">
                    Why Generic Programs <br/>Don’t Stack Up
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-secondary p-8 rounded-[2rem] border border-border">
                        <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-6 text-accent border border-border">
                            <AlertTriangle size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary uppercase mb-4">The “Already Fit” Bias</h3>
                        <p className="text-text-secondary leading-relaxed">
                            Voluntary wellness programs often attract the people already doing fine. We build on-ramps for the people who actually need support.
                        </p>
                    </div>
                    <div className="bg-secondary p-8 rounded-[2rem] border border-border">
                         <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-6 text-accent border border-border">
                            <Briefcase size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary uppercase mb-4">The Gym Subsidy Trap</h3>
                        <p className="text-text-secondary leading-relaxed">
                            Access doesn’t equal execution. A perk without structure usually becomes an unused perk.
                        </p>
                    </div>
                    <div className="bg-secondary p-8 rounded-[2rem] border border-border">
                         <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-6 text-accent border border-border">
                            <Brain size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary uppercase mb-4">Information vs Transformation</h3>
                        <p className="text-text-secondary leading-relaxed">
                            Information rarely changes behaviour. Transformation requires a daily system employees can actually follow.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* PATH (How it works) */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
             <h2 className="text-5xl font-display font-bold mb-16 text-center text-text-primary uppercase tracking-tighter">How It Works</h2>
             <div className="grid md:grid-cols-3 gap-8">
               {[
                 { step: "Step 1", title: "Rollout", desc: "We set up your company space and align the program with your team’s needs and culture." },
                 { step: "Step 2", title: "Employee access", desc: "Employees get app access and choose a plan based on their starting point, goals, preferences, and schedule." },
                 { step: "Step 3", title: "Ongoing engagement", desc: "A private in-app company community helps people stay consistent—without pressure and without HR chasing participation." }
               ].map((item, i) => (
                 <div key={i} className="bg-primary p-10 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-shadow border border-border">
                   <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">{item.step}</span>
                   <h3 className="font-display text-3xl font-bold mb-4 text-text-primary uppercase">{item.title}</h3>
                   <p className="text-text-secondary leading-relaxed text-lg">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* THE WRK MODEL */}
        <section className="py-24 px-6 bg-primary border-b border-border">
            <div className="max-w-5xl mx-auto">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-widest mb-16 text-center">The WRK Model <span className="text-text-secondary text-2xl block mt-2 normal-case tracking-normal">(vs standard wellness)</span></h2>
                <div className="space-y-6">
                    <div className="bg-secondary p-8 rounded-3xl border border-border opacity-60">
                        <div className="flex items-center gap-4 mb-2">
                             <XCircle className="text-text-secondary" size={24} />
                             <h3 className="font-bold text-text-secondary uppercase">Standard Wellness</h3>
                        </div>
                        <p className="text-2xl font-display text-text-secondary mb-2">“Here is a free gym pass.”</p>
                        <p className="text-sm text-text-secondary">Result: Unused. No structure. No follow-through.</p>
                    </div>
                    <div className="bg-secondary p-8 rounded-3xl border border-border opacity-60">
                        <div className="flex items-center gap-4 mb-2">
                             <XCircle className="text-text-secondary" size={24} />
                             <h3 className="font-bold text-text-secondary uppercase">Generic Apps</h3>
                        </div>
                        <p className="text-2xl font-display text-text-secondary mb-2">“Here is a library of workouts.”</p>
                        <p className="text-sm text-text-secondary">Result: High churn. No clarity on what to do next.</p>
                    </div>
                    <div className="bg-secondary p-10 rounded-3xl border border-accent shadow-lg transform scale-105 relative z-10">
                        <div className="flex items-center gap-4 mb-2">
                             <CheckCircle2 className="text-accent" size={24} />
                             <h3 className="font-bold text-accent uppercase tracking-widest">WRK Corporate Wellness</h3>
                        </div>
                        <p className="text-3xl md:text-4xl font-display text-text-primary mb-4 font-bold">“Here is your system: plan + progression + support.”</p>
                        <p className="text-base text-text-secondary">Result: Employees start where they are, choose what they’re into, and follow a structure that fits work-life reality.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* WHAT HR GETS */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-widest mb-8">What HR Gets</h2>
                
                <div className="grid md:grid-cols-5 gap-6">
                    {[
                        { icon: Zap, text: "Zero admin" },
                        { icon: TrendingUp, text: "Simple rollout" },
                        { icon: CheckCircle2, text: "Scalable system" },
                        { icon: Lock, text: "Private space" },
                        { icon: DollarSign, text: "One annual package" }
                    ].map((item, i) => (
                        <div key={i} className="bg-primary p-6 rounded-2xl border border-border flex flex-col items-center justify-center gap-4">
                            <item.icon className="text-accent" size={32} />
                            <span className="font-bold text-text-primary uppercase text-sm">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ANNUAL PACKAGE */}
        <section className="py-24 px-6 bg-primary">
            <div className="max-w-4xl mx-auto bg-secondary rounded-[3rem] p-8 md:p-16 border border-border shadow-2xl text-center">
                <h2 className="font-display text-3xl md:text-5xl font-bold text-text-primary uppercase tracking-widest mb-6">Annual Corporate<br/>Wellness Package</h2>
                <p className="text-xl text-text-secondary mb-12">One package. One system. Company-wide access.</p>
                
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-left max-w-2xl mx-auto mb-12">
                    {[
                        "App access for employees",
                        "Training plans and programs (home + gym options)",
                        "Nutrition resources + optional tracking",
                        "Dedicated private company community",
                        "Ongoing engagement framework (light touch, consistent)"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center text-text-secondary">
                            <CheckCircle2 className="text-accent mr-3 shrink-0" size={20} />
                            {item}
                        </div>
                    ))}
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="px-8 py-4 text-lg shadow-xl">Book a consult</Button>
                  </Link>
                  <Link to="/assessment">
                    <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-accent text-accent hover:bg-accent hover:text-white">Take the assessment</Button>
                  </Link>
                </div>
            </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-secondary border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-text-primary uppercase tracking-widest mb-12 text-center">
              Common Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((item, index) => (
                <div key={index} className="border border-border rounded-2xl overflow-hidden bg-primary">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary transition-colors"
                  >
                    <span className="font-bold text-lg text-text-primary pr-8">{item.question}</span>
                    <span className={`p-2 rounded-full transition-colors ${openFaqIndex === index ? 'bg-accent text-white' : 'bg-secondary text-text-secondary'}`}>
                      {openFaqIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaqIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-border mt-2">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AUDIT + ENQUIRY */}
        <section id="audit" className="py-24 px-6 bg-primary border-t border-border">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-widest mb-4">Ready to give your team a system that actually gets used?</h2>
                    <p className="text-xl text-text-secondary">Book a consult and we’ll map a rollout that fits your workplace—without adding pressure to HR.</p>
                </div>

                <div id="enquiry-form" className="bg-secondary p-8 md:p-12 rounded-[2.5rem] border border-border shadow-xl text-center">
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                      <Link to="/contact">
                        <Button size="lg" className="px-8 py-4 text-lg shadow-xl">Book a consult</Button>
                      </Link>
                      <Link to="/assessment">
                        <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-accent text-accent hover:bg-accent hover:text-white">Take the assessment</Button>
                      </Link>
                    </div>
                </div>
            </div>
        </section>

      </div>
    </>
  );
};
