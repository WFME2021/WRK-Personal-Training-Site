
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { 
  TrendingUp, Users, DollarSign, Activity, 
  ArrowRight, Unlock, CheckCircle2, 
  Plus, Minus, Building2, Mail, BarChart3, 
  Zap, Shield, XCircle, AlertTriangle, Briefcase, Brain
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export const CorporateWellness: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [auditStep, setAuditStep] = useState(1);
  const [auditData, setAuditData] = useState({
    companyName: '',
    teamSize: '',
    hurdle: '',
    email: ''
  });
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleAuditChange = (field: string, value: string) => {
    setAuditData(prev => ({ ...prev, [field]: value }));
  };

  const handleAuditNext = () => {
    setAuditStep(prev => prev + 1);
  };

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUnlocked(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const stats = [
    { 
      value: "$46B", 
      label: "Lost Annually", 
      desc: "NZ employers lose billions to presenteeism—employees working while unwell lose 6+ productive days/month.",
      icon: DollarSign
    },
    { 
      value: "68+", 
      label: "Days Lost", 
      desc: "High mental health risk leads to over two months of productivity lost per year per employee.",
      icon: Activity
    },
    { 
      value: "+7.42%", 
      label: "Performance", 
      desc: "Active employees exhibit higher median job performance and a 56% reduction in sick leave.",
      icon: TrendingUp
    },
    { 
      value: "1 : 4.70", 
      label: "ROI", 
      desc: "Financial ROI: Up to a $4.70 return for every $1 invested in early-intervention wellness in NZ.",
      icon: BarChart3
    }
  ];

  const faqs = [
    {
      question: "Will HR have to manage this?",
      answer: "No. We handle onboarding and programming directly with employees via their personal access link. Your team gets a dashboard; you get the results without the admin."
    },
    {
      question: "How do we handle different fitness levels?",
      answer: "A marathon runner and a beginner use the same system but follow entirely different paths suited to their readiness. The 'Choice Engine' ensures relevance for every employee."
    },
    {
      question: "Is employee data private?",
      answer: "Yes. You receive aggregate reports on engagement trends and team health scores, but individual health data remains private between the coach and employee."
    },
    {
      question: "Is this just a gym membership subsidy?",
      answer: "No. Subsidies have low engagement (<15%) because they don't solve the problem of direction. We provide the plan, the coaching, and the accountability."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Corporate Performance & Wellness | WRK"
        description="Precision wellness for high-performance teams. Reduce presenteeism and improve ROI with data-driven corporate health strategies."
      />

      <div className="bg-brand-black min-h-screen text-gray-300 selection:bg-brand-orange selection:text-white font-sans">
        
        {/* SECTION 1: THE DATA HOOK */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-black to-brand-primary opacity-90 z-0"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <span className="inline-block py-1 px-3 border border-brand-orange text-brand-orange text-xs font-bold uppercase tracking-[0.3em] mb-8">
                Market Insights
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-widest text-white leading-none mb-8">
                The Cost of Inactivity <br/><span className="text-brand-orange">Is Measurable.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
                Generic wellness is a perk. Precision wellness is a strategy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/5 p-8 border border-white/10 hover:border-brand-orange/50 transition-colors duration-300 group rounded-3xl">
                  <div className="flex justify-between items-start mb-6">
                    <stat.icon className="text-brand-orange group-hover:scale-110 transition-transform duration-300" size={32} />
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{stat.label}</span>
                  </div>
                  <h3 className="font-display text-4xl font-bold text-white mb-4">{stat.value}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed border-t border-white/10 pt-4 group-hover:border-brand-orange/30 transition-colors">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 1.5: THE WELLNESS PARADOX */}
        <section className="py-24 px-6 bg-brand-primary border-t border-white/10">
          <div className="max-w-6xl mx-auto">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-widest mb-6 leading-tight">
                     Why Generic Programs <span className="text-brand-orange">Fail to Stack Up.</span>
                   </h2>
                   <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                     Most corporate wellness offerings rely on passive perks—gym discounts, fruit bowls, or one-off seminars. The data shows that these initiatives consistently fail the employees who need them most.
                   </p>
                   
                   <div className="space-y-8">
                      <div className="flex gap-4">
                         <div className="bg-brand-black p-3 h-fit rounded-lg border border-white/10 shrink-0 text-brand-orange">
                           <AlertTriangle size={24} />
                         </div>
                         <div>
                            <h3 className="text-xl font-bold text-white uppercase mb-2">The "Already Fit" Bias</h3>
                            <p className="text-sm text-gray-400">
                              Voluntary programs typically see <span className="text-white font-bold">12-18% engagement</span>. The participants are almost exclusively employees who are already healthy. The high-risk staff disengage due to intimidation or lack of clear direction.
                            </p>
                         </div>
                      </div>

                      <div className="flex gap-4">
                         <div className="bg-brand-black p-3 h-fit rounded-lg border border-white/10 shrink-0 text-brand-orange">
                           <Briefcase size={24} />
                         </div>
                         <div>
                            <h3 className="text-xl font-bold text-white uppercase mb-2">The Gym Subsidy Trap</h3>
                            <p className="text-sm text-gray-400">
                              Paying for a gym membership doesn't ensure usage. It is a <span className="text-white font-bold">passive asset</span>. Without a structured plan (what to do when they get there) and accountability, the subsidy becomes wasted budget.
                            </p>
                         </div>
                      </div>

                      <div className="flex gap-4">
                         <div className="bg-brand-black p-3 h-fit rounded-lg border border-white/10 shrink-0 text-brand-orange">
                           <Brain size={24} />
                         </div>
                         <div>
                            <h3 className="text-xl font-bold text-white uppercase mb-2">Information vs. Transformation</h3>
                            <p className="text-sm text-gray-400">
                              "Lunch & Learns" provide information, but information rarely changes behavior. Transformation requires <span className="text-white font-bold">application</span>. Employees need a daily system, not a quarterly presentation.
                            </p>
                         </div>
                      </div>
                   </div>
                </div>

                {/* VISUAL COMPARISON CARD */}
                <div className="bg-brand-black p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative">
                   <div className="absolute top-0 right-0 bg-brand-primary text-xs font-bold uppercase tracking-widest text-gray-500 px-4 py-2 rounded-bl-xl border-l border-b border-white/10">The Reality Check</div>
                   
                   <div className="space-y-6 mt-4">
                      <div className="border-b border-white/10 pb-6">
                         <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-gray-500 uppercase text-sm">Standard Wellness</span>
                            <XCircle className="text-gray-600" size={20} />
                         </div>
                         <p className="text-2xl font-display text-gray-600 line-through decoration-brand-orange/50">"Here is a free gym pass."</p>
                         <p className="text-xs text-gray-500 mt-2">Result: Unused. Zero data. No ROI.</p>
                      </div>

                      <div className="border-b border-white/10 pb-6">
                         <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-gray-500 uppercase text-sm">Generic Apps</span>
                            <XCircle className="text-gray-600" size={20} />
                         </div>
                         <p className="text-2xl font-display text-gray-600 line-through decoration-brand-orange/50">"Here is a generic workout video."</p>
                         <p className="text-xs text-gray-500 mt-2">Result: No accountability. High churn.</p>
                      </div>

                      <div className="bg-brand-orange/10 -mx-4 -mb-4 p-6 rounded-b-[2rem] border-t border-brand-orange/20">
                         <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-brand-orange uppercase text-sm tracking-widest">The WRK Model</span>
                            <CheckCircle2 className="text-brand-orange" size={20} />
                         </div>
                         <p className="text-3xl font-display text-white font-bold">"Here is your coach."</p>
                         <p className="text-sm text-gray-300 mt-2">
                           Result: <strong>We build the plan. We track the data. We ensure they show up.</strong>
                         </p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* SECTION 2: THE PERFORMANCE AUDIT */}
        <section className="py-24 px-6 bg-brand-black border-t border-white/10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-widest mb-4">
                Audit Your Team's Potential
              </h2>
              <p className="text-gray-400">Identify the gap between current performance and potential.</p>
            </div>

            <div className="bg-brand-primary rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
              {!isUnlocked ? (
                <form onSubmit={handleAuditSubmit} className="space-y-8 relative z-10">
                  {/* Progress Bar */}
                  <div className="w-full bg-black/40 h-1 rounded-full mb-8">
                    <div 
                      className="bg-brand-orange h-1 rounded-full transition-all duration-500" 
                      style={{ width: `${(auditStep / 3) * 100}%` }}
                    ></div>
                  </div>

                  {auditStep === 1 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-300">
                      <h3 className="text-2xl font-display font-bold text-white uppercase">Step 1: The Basics</h3>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Company Name</label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                          <input 
                            type="text" 
                            required
                            value={auditData.companyName}
                            onChange={(e) => handleAuditChange('companyName', e.target.value)}
                            className="w-full bg-brand-black border border-white/10 text-white rounded-lg py-4 pl-12 pr-4 focus:outline-none focus:border-brand-orange transition-colors"
                            placeholder="e.g. Acme Corp"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Estimated Team Size</label>
                        <div className="relative">
                          <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                          <select 
                            required
                            value={auditData.teamSize}
                            onChange={(e) => handleAuditChange('teamSize', e.target.value)}
                            className="w-full bg-brand-black border border-white/10 text-white rounded-lg py-4 pl-12 pr-4 focus:outline-none focus:border-brand-orange transition-colors appearance-none cursor-pointer"
                          >
                            <option value="">Select size...</option>
                            <option value="1-10">1-10 Employees</option>
                            <option value="11-50">11-50 Employees</option>
                            <option value="51-200">51-200 Employees</option>
                            <option value="201+">201+ Employees</option>
                          </select>
                        </div>
                      </div>
                      <Button 
                        type="button" 
                        fullWidth 
                        onClick={handleAuditNext}
                        disabled={!auditData.companyName || !auditData.teamSize}
                        className="bg-brand-orange hover:bg-white hover:text-brand-orange text-white border-none mt-4"
                      >
                        Next Step <ArrowRight size={18} className="ml-2" />
                      </Button>
                    </div>
                  )}

                  {auditStep === 2 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-300">
                      <h3 className="text-2xl font-display font-bold text-white uppercase">Step 2: Primary Hurdle</h3>
                      <p className="text-gray-400 text-sm">What is the biggest barrier to your team's performance right now?</p>
                      
                      <div className="grid gap-3">
                        {['Burnout / High Stress', 'Absenteeism / Sickness', 'Physical Health / Posture'].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => { handleAuditChange('hurdle', opt); handleAuditNext(); }}
                            className="text-left p-4 bg-brand-black border border-white/10 rounded-lg hover:border-brand-orange transition-all group"
                          >
                            <span className="font-bold text-white group-hover:text-brand-orange transition-colors">{opt}</span>
                          </button>
                        ))}
                      </div>
                      <button 
                        type="button" 
                        onClick={() => setAuditStep(1)}
                        className="text-gray-500 text-sm hover:text-white transition-colors"
                      >
                        Back
                      </button>
                    </div>
                  )}

                  {auditStep === 3 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-300">
                      <h3 className="text-2xl font-display font-bold text-white uppercase">Step 3: Finalise</h3>
                      <p className="text-gray-400 text-sm">Where should we send the deployment roadmap?</p>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Work Email</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                          <input 
                            type="email" 
                            required
                            value={auditData.email}
                            onChange={(e) => handleAuditChange('email', e.target.value)}
                            className="w-full bg-brand-black border border-white/10 text-white rounded-lg py-4 pl-12 pr-4 focus:outline-none focus:border-brand-orange transition-colors"
                            placeholder="name@company.com"
                          />
                        </div>
                      </div>
                      <Button 
                        type="submit" 
                        fullWidth 
                        disabled={!auditData.email}
                        className="bg-brand-orange hover:bg-white hover:text-brand-orange text-white border-none mt-4 py-5 text-lg"
                      >
                        Unlock Deployment Roadmap <Unlock size={18} className="ml-2" />
                      </Button>
                      <button 
                        type="button" 
                        onClick={() => setAuditStep(2)}
                        className="text-gray-500 text-sm hover:text-white transition-colors text-center w-full block mt-4"
                      >
                        Back
                      </button>
                    </div>
                  )}
                </form>
              ) : (
                <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-orange">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white uppercase mb-4">Audit Complete</h3>
                  <p className="text-gray-400 mb-8">
                    The precision wellness model has been unlocked below.
                  </p>
                  <a href="#reveal" className="text-brand-orange font-bold uppercase tracking-widest text-sm border-b border-brand-orange pb-1">
                    View Strategy
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 3: THE REVEAL */}
        {isUnlocked && (
          <div id="reveal" className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <section className="py-24 px-6 bg-brand-primary">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-widest mb-6">
                    Individual Support <br/><span className="text-brand-orange">At Scale.</span>
                  </h2>
                  <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    One size fits no one. We provide three distinct pathways so every employee finds their entry point.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                  {/* Pathway 1 */}
                  <div className="bg-brand-black p-8 border-t-4 border-white/20 hover:border-brand-orange transition-colors duration-300 rounded-b-2xl">
                    <h3 className="text-2xl font-display font-bold text-white uppercase mb-2">Foundations</h3>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Reclaim</p>
                    <p className="text-gray-400 leading-relaxed mb-6 min-h-[80px]">
                      For desk-bound staff needing to reclaim their bodies. Simple, effective protocols to reduce pain and increase energy.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-sm text-gray-300"><CheckCircle2 size={14} className="mr-2 text-gray-500"/> Posture Correction</li>
                      <li className="flex items-center text-sm text-gray-300"><CheckCircle2 size={14} className="mr-2 text-gray-500"/> Mobility Routines</li>
                      <li className="flex items-center text-sm text-gray-300"><CheckCircle2 size={14} className="mr-2 text-gray-500"/> Fundamental Strength</li>
                    </ul>
                  </div>

                  {/* Pathway 2 */}
                  <div className="bg-brand-black p-8 border-t-4 border-brand-orange transform md:-translate-y-4 shadow-2xl relative rounded-b-2xl">
                    <div className="absolute top-0 right-0 bg-brand-orange text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest rounded-bl-lg">Core</div>
                    <h3 className="text-2xl font-display font-bold text-white uppercase mb-2">Performance</h3>
                    <p className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-6">Excel</p>
                    <p className="text-gray-400 leading-relaxed mb-6 min-h-[80px]">
                      For the corporate athlete. Advanced programming for those who want to push limits and maximize physical output.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-sm text-gray-300"><CheckCircle2 size={14} className="mr-2 text-brand-orange"/> Advanced Strength</li>
                      <li className="flex items-center text-sm text-gray-300"><CheckCircle2 size={14} className="mr-2 text-brand-orange"/> Conditioning</li>
                      <li className="flex items-center text-sm text-gray-300"><CheckCircle2 size={14} className="mr-2 text-brand-orange"/> Hypertrophy</li>
                    </ul>
                  </div>

                  {/* Pathway 3 */}
                  <div className="bg-brand-black p-8 border-t-4 border-white/20 hover:border-brand-orange transition-colors duration-300 rounded-b-2xl">
                    <h3 className="text-2xl font-display font-bold text-white uppercase mb-2">Restoration</h3>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Recover</p>
                    <p className="text-gray-400 leading-relaxed mb-6 min-h-[80px]">
                      For high-stress periods. Protocols to down-regulate the nervous system, improve sleep, and manage load.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-sm text-gray-300"><CheckCircle2 size={14} className="mr-2 text-gray-500"/> Recovery Protocols</li>
                      <li className="flex items-center text-sm text-gray-300"><CheckCircle2 size={14} className="mr-2 text-gray-500"/> Sleep Hygiene</li>
                      <li className="flex items-center text-sm text-gray-300"><CheckCircle2 size={14} className="mr-2 text-gray-500"/> Stress Management</li>
                    </ul>
                  </div>
                </div>

                {/* The WRK Pillars Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: Users, title: "Self-Directed", desc: "Employees choose their own pathway based on interest and readiness." },
                    { icon: Zap, title: "Coach-Backed", desc: "Automated guidance + human oversight ensures progress and safety." },
                    { icon: CheckCircle2, title: "Zero Admin", desc: "We handle onboarding and support. HR stays hands-off." },
                    { icon: Shield, title: "Privacy First", desc: "You get engagement data; employees get private coaching." }
                  ].map((pillar, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-brand-black rounded-xl border border-white/10">
                      <pillar.icon className="text-brand-orange shrink-0" size={24} />
                      <div>
                        <h4 className="font-bold text-white uppercase text-sm mb-1">{pillar.title}</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* SECTION 4: THE FAQ */}
        <section className="py-24 px-6 bg-brand-black">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-white uppercase tracking-widest mb-12 text-center">
              Common Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((item, index) => (
                <div key={index} className="border border-white/10 rounded-2xl overflow-hidden bg-brand-primary">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-bold text-lg text-white pr-8">{item.question}</span>
                    <span className={`p-2 rounded-full transition-colors ${openFaqIndex === index ? 'bg-brand-orange text-white' : 'bg-brand-black text-gray-400'}`}>
                      {openFaqIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaqIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: THE FINAL CALL */}
        <section className="py-24 px-6 bg-brand-primary border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white uppercase tracking-widest mb-8 leading-none">
              Ready to put a Personal Trainer <br/><span className="text-brand-orange">in every pocket?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 font-light">
              Precision wellness. Zero admin. Start the conversation today.
            </p>
            
            <div className="max-w-xl mx-auto bg-brand-black p-8 rounded-[2.5rem] border border-white/10 shadow-xl text-left">
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Name</label>
                  <input type="text" className="w-full bg-brand-primary border border-white/10 text-white rounded-lg p-3 focus:border-brand-orange focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Company</label>
                  <input type="text" className="w-full bg-brand-primary border border-white/10 text-white rounded-lg p-3 focus:border-brand-orange focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-brand-primary border border-white/10 text-white rounded-lg p-3 focus:border-brand-orange focus:outline-none"></textarea>
                </div>
                <Button fullWidth className="bg-brand-orange hover:bg-white hover:text-brand-orange text-white border-none py-4">
                  Send Enquiry
                </Button>
              </form>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
