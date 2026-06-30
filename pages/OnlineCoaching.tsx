import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Dumbbell, Utensils, Target, MessageSquare, BookOpen } from 'lucide-react';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { AppScreenshots } from '../components/AppScreenshots';
import { FAQ } from '../components/FAQ';

export const OnlineCoaching: React.FC = () => {
  const faqItems = [
    {
      question: "What happens in the initial consult?",
      answer: "A free 20–30 minute call covering your goals, training history, injuries, physical considerations, and your available equipment and environment. Everything discussed becomes the foundation of your programme. Nothing is assumed. Nothing is generic."
    },
    {
      question: "What do I get for the $99 programme design fee?",
      answer: "A fully customised 16-week training and nutrition programme built specifically around you — your goals, your schedule, your starting point, your equipment, and your body. If you train in a gym, your programme is built for a gym. If you train at home, it's built around the kit you actually have. If you have injuries or physical considerations, they're factored into every session from day one. This is not a template with your name on it."
    },
    {
      question: "Do I need a gym membership?",
      answer: "No. During your consult we establish where and how you train. Your programme is then designed specifically around that environment. Gym members get gym-based programming. Home trainers get a programme built around their available equipment. If your situation changes during the 16 weeks, your programme adapts with it."
    },
    {
      question: "I have an injury or a physical consideration. Can I still do this?",
      answer: "Yes. Injuries and physical considerations are captured during the consult and built into your programme design from the start. You won't be handed a generic plan and told to modify exercises yourself. Your programme is written with your specific limitations and history already accounted for."
    },
    {
      question: "Why $14.95 per week? What does that actually cover?",
      answer: "Everything. A fully customised training programme, nutrition framework, bi-weekly check-ins with Hayden, direct messaging access throughout the 16 weeks, exercise video library, macro and habit tracking, and the Busy Professional Survival Guide. Over 16 weeks that's $338.20 total — less than the cost of four single PT sessions with someone who doesn't know your history."
    },
    {
      question: "How does the bi-weekly check-in work?",
      answer: "Every two weeks Hayden reviews your progress and sends direct feedback — adjustments to training, nutrition targets, or approach based on how you're actually tracking. It's not a form response or a bot. It's a coach who built your programme reviewing your real data and telling you what needs to change."
    },
    {
      question: "I travel a lot. Will this still work?",
      answer: "Yes — it's built for it. During your consult we talk through your travel patterns and schedule. Travel strategies are built into weeks 5–8, and travel-specific workout templates are part of your weeks 13–16 lifestyle phase. The Busy Professional Survival Guide covers exactly this scenario in detail."
    },
    {
      question: "I've tried online programmes before and not finished them. Why is this different?",
      answer: "Most online programmes send you a generic plan and leave you to figure it out. This programme was built specifically for you based on a detailed consult — so it already fits your life, your environment, and your physical situation before you start week one. Add bi-weekly check-ins and direct messaging access throughout, and you have a coach actively keeping you on track — not a PDF collecting dust."
    },
    {
      question: "Can I cancel once I've started?",
      answer: "The programme runs on a direct debit of $14.95 per week. You can cancel before the programme begins. Once underway, the 16-week commitment stands — because results require consistency, and a programme this customised deserves the full runway to deliver them."
    },
    {
      question: "What happens after the 16 weeks?",
      answer: "By week 13 you'll be transitioning to long-term maintenance — with a maintenance calorie calculation, travel templates, and a habit integration plan built into your programme. The goal is that by week 16 you have a system that works and the knowledge to keep it going independently. If you want to continue with structured coaching, we can discuss what that looks like."
    },
    {
      question: "Is this suitable if I'm over 50?",
      answer: "Yes. The programme is specifically designed for adults 35–60 — accounting for the physiology of a body that's changed, the demands of a life that's full, and the training approach that actually delivers fat loss and strength at this stage of life. Everything from your training load to your nutrition targets is calibrated for where you are right now — not where a 25-year-old with unlimited time would be."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Online Fitness Coach New Zealand | 16-Week Coaching | WRK"
        description="Hayden Richards - WRK Personal Training. Structured fat loss and strength coaching for adults 35+ across New Zealand. Expert programming, practical nutrition, and an online personal trainer who actually keeps you accountable."
      />

      <div className="flex flex-col w-full overflow-x-hidden bg-primary pb-24">
        
        {/* SECTION 1 — HERO */}
        <section className="relative min-h-[80svh] md:min-h-[90svh] w-full flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
             <img 
               referrerPolicy="no-referrer" 
               loading="eager" 
               src="https://i.postimg.cc/1t9HjpcR/508833357-30407543532163264-7406991278294427854-n.jpg" 
               alt="ONLINE FITNESS COACH | NEW ZEALAND" 
               className="w-full h-full object-cover object-top" 
             />
             <div 
               className="absolute inset-0"
               style={{
                 background: 'linear-gradient(to bottom, rgba(13, 17, 23, 0) 0%, rgba(13, 17, 23, 0.6) 60%, rgba(13, 17, 23, 0.88) 100%)'
               }}
             />
          </div>
          <div className="relative z-10 w-full px-5 pt-32 pb-12 md:pb-24 max-w-[1200px] mx-auto md:px-12 text-left">
            <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-orange-burnt mb-4">
              ONLINE FITNESS COACH · 16-WEEK PROGRAMME · WORLDWIDE
            </span>
            <h1 className="font-display text-[44px] sm:text-[56px] md:text-[80px] lg:text-[88px] break-words leading-[1.1] sm:leading-[1.1] text-white mb-6 uppercase max-w-[1000px]">
              Online Fitness Coaching for Busy Professionals 35–60
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] text-off-white font-medium max-w-[640px] mb-8 leading-[1.6]">
              Twenty years of coaching distilled into one structured 16-week fat loss and strength programme. Built around your schedule, your goals, and a body that's ready to perform — not just survive the week.
            </p>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-8 py-5 text-[15px] sm:text-[16px] flex items-center justify-center gap-3">
                  Apply for Online Coaching <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2 — THE PROMISE */}
        <section className="py-24 px-6 lg:px-12 bg-black text-white text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
             <h2 className="font-display text-4xl md:text-6xl uppercase leading-[1.25] mb-10">
               Your programme. Your own coach. Your results.
             </h2>
             <div className="text-xl text-gray-400 font-medium leading-relaxed space-y-6">
                <p>Most online programmes send you a plan and leave you to figure it out. WRK is different.</p>
                <p>You get a bespoke 16-week programme built around your goals, your schedule, and your body — with nutrition guidance that works in the real world, and direct access to Hayden throughout.</p>
                <p className="text-white font-bold tracking-widest uppercase text-sm mt-8">Same standard as in-person. No matter where you are.</p>
             </div>
          </div>
        </section>

        {/* SECTION 3 — THE 16-WEEK ROADMAP */}
        <section className="py-24 px-6 lg:px-12 bg-primary">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-accent mb-4">
                YOUR ONLINE FAT LOSS PROGRAMME
              </span>
              <h2 className="font-display text-4xl md:text-5xl uppercase text-text-primary leading-[1.25]">
                The 16-Week Roadmap
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               <div className="bg-secondary p-10 rounded-[2rem] border border-border shadow-sm flex flex-col items-start gap-6">
                 <div className="text-accent font-bold uppercase tracking-widest text-xs">WEEKS 1–4</div>
                 <h3 className="font-display text-3xl uppercase text-text-primary">Reset</h3>
                 <p className="text-text-secondary leading-relaxed font-medium">Establish your baseline. Stabilise energy. Initiate fat loss. Custom training plan, protein and calorie targets, sleep and hydration protocols.</p>
               </div>
               <div className="bg-secondary p-10 rounded-[2rem] border border-border shadow-sm flex flex-col items-start gap-6">
                 <div className="text-accent font-bold uppercase tracking-widest text-xs">WEEKS 5–8</div>
                 <h3 className="font-display text-3xl uppercase text-text-primary">Momentum</h3>
                 <p className="text-text-secondary leading-relaxed font-medium">Accelerate fat loss and build strength. Progressive overload. Social event and travel strategies. Mid-programme check-in.</p>
               </div>
               <div className="bg-secondary p-10 rounded-[2rem] border border-border shadow-sm flex flex-col items-start gap-6">
                 <div className="text-accent font-bold uppercase tracking-widest text-xs">WEEKS 9–12</div>
                 <h3 className="font-display text-3xl uppercase text-text-primary">Refinement</h3>
                 <p className="text-text-secondary leading-relaxed font-medium">Overcome plateaus. Optimise body composition. Training intensity and nutrition adjusted based on your data.</p>
               </div>
               <div className="bg-secondary p-10 rounded-[2rem] border border-border shadow-sm flex flex-col items-start gap-6">
                 <div className="text-accent font-bold uppercase tracking-widest text-xs">WEEKS 13–16</div>
                 <h3 className="font-display text-3xl uppercase text-text-primary">Lifestyle</h3>
                 <p className="text-text-secondary leading-relaxed font-medium">Lock in your results. Transition to long-term maintenance. Travel templates, habit integration, maintenance calorie calculation.</p>
               </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHAT YOU GET */}
        <section className="py-24 px-6 lg:px-12 bg-secondary border-y border-border">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-12">
              <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-accent mb-4">
                EVERYTHING INSIDE YOUR 16-WEEK PROGRAMME
              </span>
              <h2 className="font-display text-4xl md:text-5xl uppercase text-text-primary leading-[1.25]">
                What's Included
              </h2>
            </div>
            
            <div className="space-y-6 mt-12 bg-primary p-8 md:p-12 rounded-[2rem] border border-border text-lg font-medium shadow-sm">
               <div className="flex items-start">
                 <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-4 mt-1 shrink-0">
                   <Dumbbell size={18} className="text-accent" />
                 </div>
                 <p className="text-text-primary"><strong>Your 16-Week Bespoke Training Programme</strong> — Delivered through the WRK app. Gym or home. Progressive, structured, and adjusted as you go.</p>
               </div>
               <div className="flex items-start">
                 <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-4 mt-1 shrink-0">
                   <Utensils size={18} className="text-accent" />
                 </div>
                 <p className="text-text-primary"><strong>Nutrition Framework</strong> — Protein targets, calorie approach, and practical strategies for eating out, travelling, and navigating busy weeks — without tracking everything.</p>
               </div>
               <div className="flex items-start">
                 <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-4 mt-1 shrink-0">
                   <Target size={18} className="text-accent" />
                 </div>
                 <p className="text-text-primary"><strong>Bi-Weekly Check-Ins</strong> — Direct feedback and programme adjustments from Hayden every fortnight. Not a bot. Not a template response.</p>
               </div>
               <div className="flex items-start">
                 <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-4 mt-1 shrink-0">
                   <MessageSquare size={18} className="text-accent" />
                 </div>
                 <p className="text-text-primary"><strong>Direct Messaging Access</strong> — Quick questions, form checks, and accountability when you need it — throughout the full 16 weeks.</p>
               </div>
               <div className="flex items-start">
                 <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-4 mt-1 shrink-0">
                   <CheckCircle2 size={18} className="text-accent" />
                 </div>
                 <p className="text-text-primary"><strong>Exercise Video Library and History Tracking</strong> — Every movement demonstrated. Every session logged. Progress visible.</p>
               </div>
               <div className="flex items-start">
                 <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-4 mt-1 shrink-0">
                   <CheckCircle2 size={18} className="text-accent" />
                 </div>
                 <p className="text-text-primary"><strong>Macro and Habit Tracking</strong> — Built into the app. Simple, not obsessive.</p>
               </div>
               <div className="flex items-start">
                 <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-4 mt-1 shrink-0">
                   <BookOpen size={18} className="text-accent" />
                 </div>
                 <p className="text-text-primary"><strong>The Busy Professional Survival Guide</strong> — How to stay on track through work stress, social events, and the weeks that don't go to plan.</p>
               </div>
            </div>
            
            <div className="mt-16">
              <AppScreenshots limit={4} />
            </div>
          </div>
        </section>

        {/* SECTION 4.5 — INVESTMENT */}
        <section className="py-24 px-6 lg:px-12 bg-secondary border-t border-border">
          <div className="max-w-[1000px] mx-auto flex flex-col items-center">
            <div className="text-center mb-16">
              <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-accent mb-4">
                TRANSPARENT PRICING
              </span>
              <h2 className="font-display text-4xl md:text-5xl uppercase text-text-primary leading-[1.25]">
                What It Costs
              </h2>
            </div>
            
            <div className="w-full space-y-6">
               <div className="bg-primary p-8 md:p-12 rounded-[2rem] border border-border shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="flex-1">
                     <h3 className="font-bold text-lg text-text-primary uppercase tracking-widest mb-2">Initial Consult</h3>
                     <p className="text-accent font-medium mb-4">Free</p>
                     <p className="text-text-secondary font-medium leading-relaxed">A 20–30 minute discovery call to talk through your goals, your history, and whether WRK online coaching is the right fit.</p>
                  </div>
               </div>
               
               <div className="bg-primary p-8 md:p-12 rounded-[2rem] border border-border shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="flex-1">
                     <h3 className="font-bold text-lg text-text-primary uppercase tracking-widest mb-2">Programme Design</h3>
                     <p className="text-accent font-medium mb-4">$99 one-off</p>
                     <p className="text-text-secondary font-medium leading-relaxed">Your fully customised 16-week training and nutrition programme built from your consult findings. Delivered through the WRK app before week one begins.</p>
                  </div>
               </div>
               
               <div className="bg-primary p-8 md:p-12 rounded-[2rem] border border-border shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="flex-1">
                     <h3 className="font-bold text-lg text-text-primary uppercase tracking-widest mb-2">16-Week Coaching</h3>
                     <p className="text-accent font-medium mb-4">$14.95 per week</p>
                     <p className="text-text-secondary font-medium leading-relaxed">Bespoke programming, bi-weekly check-ins, direct messaging access, nutrition framework, and the full WRK coaching system — for the duration of your programme. Direct debit. Cancel anytime before the programme begins.</p>
                  </div>
               </div>
            </div>
            
            <div className="text-center mt-12">
               <p className="text-lg text-text-secondary font-medium">Total programme investment: $338.20 over 16 weeks. Less than the cost of four sessions with a PT who doesn't know your name.</p>
            </div>
          </div>
        </section>

        {/* SECTION 5 — WHO IT'S FOR */}
        <section className="py-24 px-6 lg:px-12 bg-primary border-t border-border">
          <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
            <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-accent mb-4">
              WHO THIS WORKS FOR
            </span>
            <h2 className="font-display text-4xl md:text-5xl uppercase text-text-primary mb-12 leading-[1.25]">
              Who This Works For
            </h2>
            <div className="text-xl text-text-secondary leading-relaxed font-medium space-y-6 text-left w-full max-w-3xl">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="mr-4 text-text-primary font-black opacity-30 mt-1">•</span>
                  <p className="text-text-primary font-medium">This works if you're 35–60 and want to lose body fat without extreme dieting.</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-text-primary font-black opacity-30 mt-1">•</span>
                  <p className="text-text-primary font-medium">If you've tried programmes before and struggled with consistency.</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-text-primary font-black opacity-30 mt-1">•</span>
                  <p className="text-text-primary font-medium">If you travel, eat out, work long hours, and need something that bends without breaking.</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-text-primary font-black opacity-30 mt-1">•</span>
                  <p className="text-text-primary font-medium">If you want a coach — not a content library and a chatbot.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 5.5 — FAQ */}
        <FAQ items={faqItems} title="Frequently Asked Questions" eyebrow="COMMON QUESTIONS" />

        {/* SECTION 6 — PROGRAMME CALLOUT */}
        <section className="py-20 md:py-24 px-5 lg:px-12 bg-orange-burnt text-white text-center">
           <div className="max-w-[800px] mx-auto flex flex-col items-center">
              <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-white/70 mb-4">
                NOT READY TO COMMIT TO 16 WEEKS?
              </span>
              <h2 className="font-display text-[36px] md:text-[48px] uppercase mb-6 leading-[1.1] text-white">
                 Start Here Instead.
              </h2>
              <p className="font-sans text-[18px] leading-[1.6] mb-10 font-medium max-w-[700px] text-white/90">
                The 14 Day Fat Loss Foundations programme gives you a real taste of how WRK programmes are built — and a practical starting point regardless of what comes next.
              </p>
              <Link to="/14-day-fat-loss-foundations" className="w-full sm:w-auto">
                 <Button size="lg" variant="secondary" className="w-full sm:w-auto px-8 py-5 text-[15px] sm:text-[16px] flex items-center justify-center gap-3 border-none">
                   Get the 14-Day Programme <ArrowRight size={20} />
                 </Button>
              </Link>
           </div>
        </section>

        {/* SECTION 7 — CTA */}
        <section className="bg-secondary py-20 md:py-32 px-5 lg:px-12 text-center relative overflow-hidden border-t border-border">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-[800px] mx-auto relative z-10 flex flex-col items-center">
            <h2 className="font-display text-[44px] md:text-[64px] uppercase text-text-primary mb-6 leading-[1.1]">
              Let's Talk About What 16 Weeks Could Do.
            </h2>
            <p className="text-[18px] md:text-[20px] font-medium text-text-secondary mb-10 leading-[1.6]">
              Apply for online coaching. If it's the right fit, we'll build your programme and get started.
            </p>
            <div className="flex flex-col gap-6 w-full max-w-sm mx-auto items-center">
              <Link to="/contact" className="w-full">
                <Button size="lg" className="w-full px-8 py-5 text-[15px] sm:text-[16px] flex items-center justify-center gap-3">
                  Apply Now <ArrowRight size={20} />
                </Button>
              </Link>
              <p className="text-text-secondary text-sm font-medium mt-2">Built around your life. Backed by 20 years of experience.</p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
