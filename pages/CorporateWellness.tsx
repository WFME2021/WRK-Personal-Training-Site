import React, { useState } from 'react';
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

export const CorporateWellness: React.FC = () => {
  const { pageContent } = useContent();
  const { heroImage } = pageContent.corporateWellness;
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
      question: "Will HR have to manage this?",
      answer: "No. The system runs inside the app. HR’s job is simple: approve it, announce it, and let employees use it."
    },
    {
      question: "How do we handle different fitness levels?",
      answer: "Programs are scalable. Beginners aren’t thrown into the deep end, and intermediate staff aren’t bored. Employees choose a track that fits."
    },
    {
      question: "Is employee data private?",
      answer: "Yes. Individual health data is private. If you want reporting, it should be aggregated participation trends, not personal data."
    },
    {
      question: "Is this just a gym membership subsidy?",
      answer: "No. This is structure + execution. Employees get a plan, a community, and coach access — not just access to equipment."
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
        title="Wellbeing in the Workplace | Corporate Wellness Programs NZ | WRK"
        description="Remote corporate wellbeing program (NZ-wide). A personal trainer in every employee’s pocket. App-based training, nutrition tools, and private company community. Enquire for annual packages."
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Corporate Wellness Program",
            "provider": {
              "@type": "LocalBusiness",
              "name": "WRK Personal Training",
              "image": heroImage.url
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
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            {heroImage && (
              <img 
                src={heroImage.url} 
                alt={heroImage.alt} 
                className="w-full h-full object-cover grayscale contrast-125"
              />
            )}
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-[1800px] mx-auto px-4 md:px-8 text-center flex flex-col items-center pt-20">
              <h3 className="font-display text-xl md:text-3xl font-bold uppercase tracking-widest text-accent mb-6">
                High-Performance Culture
              </h3>
              <h1 className="font-display text-[8vw] leading-[0.9] font-bold uppercase tracking-tighter text-white max-w-6xl mb-8">
                Corporate wellness that <br/>isn't just a fruit bowl.
              </h1>
              
              <div className="max-w-3xl mx-auto space-y-8">
                <p className="text-lg md:text-2xl text-white/90 font-medium leading-relaxed">
                  Practical workshops and health strategies for high-performing teams. <strong>Less fluff, more utility.</strong>
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
                  <Button variant="primary" onClick={scrollToEnquiry} className="px-10 py-5 text-lg shadow-xl hover:scale-105 transition-transform flex items-center">
                    Enquire about workshops <ArrowRight size={20} className="ml-2" />
                  </Button>
                </div>

                <p className="text-xs md:text-sm text-white/60 mt-8 font-medium">
                  Christchurch-based workshops • Remote options available
                </p>
              </div>
          </div>
        </section>

        {/* MARKET INSIGHTS */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
             <div className="text-center mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-widest mb-6">
                  Burnout is Expensive. <span className="text-accent">Vitality is an Asset.</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-primary p-8 rounded-3xl border border-border">
                            <div className="flex items-center gap-4 mb-4">
                                <stat.icon className="text-accent" size={32} />
                                <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">{stat.label}</span>
                            </div>
                            <h3 className="font-display text-4xl font-bold text-text-primary mb-2">{stat.value}</h3>
                            <p className="text-sm text-text-secondary">{stat.desc}</p>
                        </div>
                    ))}
                </div>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto font-medium">
                    The point isn’t wellness theatre. The point is measurable capacity: energy, consistency, and resilience that shows up in the P&L.
                </p>
             </div>
          </div>
        </section>

        {/* WHY GENERIC PROGRAMS FAIL */}
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
                            Voluntary programs attract the people already doing fine. We build on-ramps for the people who actually need the support.
                        </p>
                    </div>
                    <div className="bg-secondary p-8 rounded-[2rem] border border-border">
                         <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-6 text-accent border border-border">
                            <Briefcase size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary uppercase mb-4">The Gym Subsidy Trap</h3>
                        <p className="text-text-secondary leading-relaxed">
                            Access doesn’t equal execution. We provide the plan, the tracking, and the reason to show up.
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

        {/* THE WRK MODEL */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
            <div className="max-w-5xl mx-auto">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-widest mb-16 text-center">The WRK Model</h2>
                <div className="space-y-6">
                    <div className="bg-primary p-8 rounded-3xl border border-border opacity-60">
                        <div className="flex items-center gap-4 mb-2">
                             <XCircle className="text-text-secondary" size={24} />
                             <h3 className="font-bold text-text-secondary uppercase">Standard Wellness</h3>
                        </div>
                        <p className="text-2xl font-display text-text-secondary mb-2">“Here is a free gym pass.”</p>
                        <p className="text-sm text-text-secondary">Result: Unused. No structure. No data.</p>
                    </div>
                    <div className="bg-primary p-8 rounded-3xl border border-border opacity-60">
                        <div className="flex items-center gap-4 mb-2">
                             <XCircle className="text-text-secondary" size={24} />
                             <h3 className="font-bold text-text-secondary uppercase">Generic Apps</h3>
                        </div>
                        <p className="text-2xl font-display text-text-secondary mb-2">“Here is a workout video library.”</p>
                        <p className="text-sm text-text-secondary">Result: High churn. No accountability.</p>
                    </div>
                    <div className="bg-primary p-10 rounded-3xl border border-accent shadow-lg transform scale-105 relative z-10">
                        <div className="flex items-center gap-4 mb-2">
                             <CheckCircle2 className="text-accent" size={24} />
                             <h3 className="font-bold text-accent uppercase tracking-widest">WRK Corporate Wellness</h3>
                        </div>
                        <p className="text-3xl md:text-4xl font-display text-text-primary mb-4 font-bold">“Here is your coach + your plan.”</p>
                        <p className="text-base text-text-secondary">Result: Structured programs, guided execution, private company community, and consistent support — without adding work to HR.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* WHAT EMPLOYEES GET */}
        <section className="py-24 px-6 bg-primary">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-widest mb-6">What Employees Get</h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        A training system that adapts to real people — different fitness levels, different goals, different constraints.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-12">
                        <div className="flex gap-6">
                            <div className="bg-secondary p-4 rounded-2xl h-fit border border-border shrink-0">
                                <Smartphone className="text-accent" size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-display font-bold text-text-primary uppercase mb-4">Training Plans & Programs</h3>
                                <p className="text-text-secondary mb-4">Employees can choose plans based on:</p>
                                <ul className="space-y-2">
                                    {['Beginner → Intermediate starting points', 'Strength / Cardio / Mobility focus', 'Home-based or gym-based options', 'Time-efficient sessions designed for real schedules'].map((item, i) => (
                                        <li key={i} className="flex items-start text-sm text-text-secondary">
                                            <CheckCircle2 size={16} className="text-accent mr-2 mt-1 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="bg-secondary p-4 rounded-2xl h-fit border border-border shrink-0">
                                <Utensils className="text-accent" size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-display font-bold text-text-primary uppercase mb-4">Nutrition Tools</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start text-sm text-text-secondary">
                                        <CheckCircle2 size={16} className="text-accent mr-2 mt-1 shrink-0" />
                                        Nutritional resources to support fat loss, recomposition, and energy
                                    </li>
                                    <li className="flex items-start text-sm text-text-secondary">
                                        <CheckCircle2 size={16} className="text-accent mr-2 mt-1 shrink-0" />
                                        Ability to track calories and macros inside the app (optional, not obsessive)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-12">
                         <div className="flex gap-6">
                            <div className="bg-secondary p-4 rounded-2xl h-fit border border-border shrink-0">
                                <Users className="text-accent" size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-display font-bold text-text-primary uppercase mb-4">Company Community (Private)</h3>
                                <p className="text-text-secondary mb-4">Every company gets a dedicated in-app community where employees can:</p>
                                <ul className="space-y-2">
                                    {['ask questions', 'connect with others', 'share wins', 'stay engaged without pressure'].map((item, i) => (
                                        <li key={i} className="flex items-start text-sm text-text-secondary">
                                            <CheckCircle2 size={16} className="text-accent mr-2 mt-1 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="bg-secondary p-4 rounded-2xl h-fit border border-border shrink-0">
                                <MessageSquare className="text-accent" size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-display font-bold text-text-primary uppercase mb-4">Fortnightly Coach Access</h3>
                                <p className="text-text-secondary">
                                    I answer questions and provide guidance every fortnight inside the company community — keeping support consistent without constant meetings.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* WHAT HR GETS */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-widest mb-8">What HR Gets</h2>
                <p className="text-xl text-text-primary font-bold mb-4">Zero admin. Clear delivery. Strong engagement.</p>
                <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto">You don’t need to manage schedules, chase participation, or run sessions.</p>
                
                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { icon: Zap, text: "A simple rollout plan" },
                        { icon: TrendingUp, text: "A scalable system" },
                        { icon: Lock, text: "A private space" },
                        { icon: CheckCircle2, text: "One annual package" }
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
                        "Training plans and programs",
                        "Home and gym options",
                        "Nutrition resources + tracking",
                        "Dedicated private community",
                        "Fortnightly coach access"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center text-text-secondary">
                            <CheckCircle2 className="text-accent mr-3 shrink-0" size={20} />
                            {item}
                        </div>
                    ))}
                </div>
                
                <Button size="lg" onClick={scrollToEnquiry}>Send an Enquiry</Button>
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
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-widest mb-4">Audit Your Team’s Potential</h2>
                    <p className="text-xl text-text-secondary">Identify the gap between current performance and potential.</p>
                </div>

                <div id="enquiry-form" className="bg-secondary p-8 md:p-12 rounded-[2.5rem] border border-border shadow-xl">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Name</label>
                                <div className="relative">
                                    <input type="text" className="w-full bg-primary border border-border text-text-primary rounded-lg p-4 pl-4 focus:border-accent focus:outline-none" placeholder="Your Name" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Company</label>
                                <div className="relative">
                                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
                                    <input type="text" className="w-full bg-primary border border-border text-text-primary rounded-lg p-4 pl-12 focus:border-accent focus:outline-none" placeholder="Company Name" />
                                </div>
                            </div>
                        </div>
                        <div>
                             <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Work Email</label>
                             <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
                                <input type="email" className="w-full bg-primary border border-border text-text-primary rounded-lg p-4 pl-12 focus:border-accent focus:outline-none" placeholder="name@company.com" />
                             </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Message</label>
                            <p className="text-xs text-text-secondary mb-2">Include team size, primary goal (energy / strength / stress resilience / fat loss), and whether you want the company community active from day one.</p>
                            <textarea rows={5} className="w-full bg-primary border border-border text-text-primary rounded-lg p-4 focus:border-accent focus:outline-none"></textarea>
                        </div>
                        <Button fullWidth size="lg" variant="primary">Send Enquiry</Button>
                    </form>
                </div>
            </div>
        </section>

      </div>
    </>
  );
};
