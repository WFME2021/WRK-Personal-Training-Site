
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Check, Target, UserCheck, ShieldCheck, MapPin } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';

export const PersonalTraining: React.FC = () => {
  const { pageContent } = useContent();
  const { mainImage } = pageContent.personalTraining;

  const faqs = [
    {
      question: "Do you offer personal training in Addington?",
      answer: "Yes. My base is at Get Me Fitter in Addington, Christchurch. It's a private facility perfect for focused training away from commercial gym crowds."
    },
    {
      question: "What is 'Hybrid' Personal Training?",
      answer: "Hybrid means we combine in-person sessions (for technique and coaching) with a digital app program (for your other workouts). It ensures you have guidance all week, not just for the hour you see me."
    },
    {
      question: "How often should I see a personal trainer?",
      answer: "For Hybrid coaching, most clients see me once a week or once a fortnight to refine technique and check progress, then complete the rest of their sessions using the app plan."
    },
    {
      question: "Can you help if I’ve had injuries or pain?",
      answer: "Absolutely. This is a key focus of my work. We don't just 'work around' injury; we rebuild your capacity and confidence so you can trust your body again."
    },
    {
      question: "What if I'm a beginner?",
      answer: "Then this is the best place to start. Learning proper technique from day one saves you years of frustration and injury risk later on."
    },
    {
      question: "How long are the sessions?",
      answer: "Sessions are 60 minutes, focused entirely on you. No mobile phones (unless filming form), no distractions."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Personal Trainer Christchurch | Hybrid 1:1 Coaching | WRK"
        description="1:1 personal training in Christchurch (Addington). Premium support for high performers who value their time. Hybrid coaching available."
      />

      <div className="bg-primary text-text-primary transition-colors duration-300">
        {/* Hero */}
        <section className="bg-secondary py-24 px-6 border-b border-border">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 text-text-primary uppercase tracking-tighter leading-none break-words">Personal Trainer <br/>Christchurch</h1>
            <div className="inline-block bg-accent text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs mb-8">Hybrid Personal Training</div>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10 font-light">
              Premium support for those who value their time. We combine the technical precision of in-person coaching with the flexibility of a digital plan.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg">Apply for Hybrid</Button>
              </Link>
              <Link to="/assessment">
                <Button variant="outline" size="lg">Take Diagnostic</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Local SEO Block */}
        <section className="py-12 px-6 border-b border-border">
          <div className="max-w-3xl mx-auto text-center bg-primary p-8 rounded-[2rem] border border-border shadow-sm flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base text-text-secondary">
            <div className="bg-secondary p-3 rounded-full border border-border"><MapPin className="text-accent shrink-0" /></div>
            <p>
              Based in <strong>Addington</strong> at Get Me Fitter. Private facility, free parking, no crowds.
            </p>
          </div>
        </section>

        {/* Who this is for */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-display font-bold mb-8 text-text-primary uppercase tracking-tighter">Who This Is For</h2>
              
              <ul className="space-y-6">
                {[
                  "You are the 'Anchor'—people rely on you to be consistent.",
                  "You make decisions all day. Here, you want to outsource the thinking.",
                  "You have a history of 'all or nothing' and need a sustainable middle ground.",
                  "You want training that builds your energy, rather than stealing it."
                ].map((item, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="w-8 h-8 rounded-full border border-accent flex items-center justify-center mr-4 shrink-0 group-hover:bg-accent transition-colors">
                      <Check className="text-accent w-4 h-4 group-hover:text-white" />
                    </div>
                    <span className="text-text-secondary text-lg pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-border">
               <img 
                src={mainImage} 
                alt="Personal Trainer Christchurch technique coaching" 
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-6 bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
             <h2 className="text-5xl font-display font-bold mb-16 text-center text-text-primary uppercase tracking-tighter">How Hybrid Works</h2>
             <div className="grid md:grid-cols-3 gap-8">
               {[
                 { step: "01", title: "Precision", desc: "In-person sessions focus on technique, safety, and learning. We ensure you're doing the right work." },
                 { step: "02", title: "Execution", desc: "You complete the rest of your weekly sessions via the app. On your time, at your gym or home." },
                 { step: "03", title: "Sustainability", desc: "We manage the load. Push when you're capable, pull back when life gets heavy." }
               ].map((item, i) => (
                 <div key={i} className="bg-primary p-10 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-shadow border border-border">
                   <span className="text-6xl font-display font-bold text-secondary mb-6 block text-shadow-sm" style={{textShadow: '0 0 1px var(--border)'}}>{item.step}</span>
                   <h3 className="font-display text-3xl font-bold mb-4 text-text-primary uppercase">{item.title}</h3>
                   <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* My Approach */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-display font-bold mb-8 uppercase tracking-tighter text-text-primary">My Approach</h2>
            <p className="text-2xl text-text-secondary mb-16 font-light max-w-2xl">
              I’m not here to turn the gym into a circus. I’m here to help you build a body that works for the life you actually live.
            </p>
            <div className="space-y-8">
               {[
                 { icon: Target, title: "Minimum Effective Dose", text: "We find the most efficient path to the result. No wasted time." },
                 { icon: UserCheck, title: "Planned Progress", text: "You never have to guess. You walk in, open the plan, and execute." },
                 { icon: ShieldCheck, title: "Recovery Guardrails", text: "We respect your stress load. Training supports your life, not competes with it." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 items-start border-b border-border pb-8 last:border-0">
                   <div className="bg-secondary p-4 rounded-full border border-border"><item.icon className="text-accent" size={24} /></div>
                   <div>
                     <h3 className="font-display text-2xl font-bold mb-2 uppercase text-text-primary">{item.title}</h3>
                     <p className="text-text-secondary">{item.text}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="bg-secondary py-24 px-6 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-display font-bold mb-6 text-text-primary uppercase tracking-tighter">Included</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl mx-auto text-lg text-left mb-16">
               <li className="flex items-center text-text-secondary"><Check size={24} className="mr-4 text-accent" /> 1:1 In-Person Sessions</li>
               <li className="flex items-center text-text-secondary"><Check size={24} className="mr-4 text-accent" /> Full App Programming</li>
               <li className="flex items-center text-text-secondary"><Check size={24} className="mr-4 text-accent" /> Technique Video Library</li>
               <li className="flex items-center text-text-secondary"><Check size={24} className="mr-4 text-accent" /> Support Between Sessions</li>
            </div>

            <div className="bg-primary p-10 rounded-[2.5rem] inline-block w-full max-w-2xl border border-border">
               <p className="text-xl font-bold mb-8 text-text-primary">If you want coaching that’s honest, thoughtful, and tailored to you.</p>
               <div className="flex flex-col md:flex-row justify-center gap-4">
                 <Link to="/contact">
                   <Button size="lg" fullWidth>Apply for Hybrid</Button>
                 </Link>
                 <Link to="/assessment">
                   <Button variant="outline" size="lg" fullWidth>Take Diagnostic</Button>
                 </Link>
               </div>
            </div>
          </div>
        </section>

        <FAQ items={faqs} title="Hybrid Coaching FAQs" />
      </div>
    </>
  );
};
