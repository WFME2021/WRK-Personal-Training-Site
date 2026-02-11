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
        description="1:1 personal training in Christchurch (Addington). In-person coaching plus app homework so training fits real life. Honest coaching, smart progress."
      />

      <div className="bg-white">
        {/* Hero */}
        <section className="bg-brand-light py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 text-brand-black uppercase tracking-tighter leading-none">Personal Trainer <br/>in Christchurch</h1>
            <div className="inline-block bg-brand-orange text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs mb-8">Hybrid Personal Training</div>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto leading-relaxed mb-10 font-light">
              In-person sessions for coaching and precision, plus app-based homework so your training doesn’t fall apart when life gets busy.
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
        <section className="py-12 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base text-brand-gray">
            <div className="bg-brand-light p-3 rounded-full"><MapPin className="text-brand-orange shrink-0" /></div>
            <p>
              Based in <strong>Addington</strong> at Get Me Fitter. Supporting clients across Merivale, Fendalton, Ilam, Riccarton, Cashmere, Somerfield, Sumner, and Halswell.
            </p>
          </div>
        </section>

        {/* Who this is for */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-display font-bold mb-8 text-brand-black uppercase tracking-tighter">Who This Is For</h2>
              
              <ul className="space-y-6">
                {[
                  "You’ve got a bit of history (pain, injuries, stop-start training).",
                  "You want confidence in your technique and your plan.",
                  "You want training that fits around work, family, and travel.",
                  "You like straight-up coaching and a clear direction."
                ].map((item, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="w-8 h-8 rounded-full border border-brand-orange flex items-center justify-center mr-4 shrink-0 group-hover:bg-brand-orange transition-colors">
                      <Check className="text-brand-orange w-4 h-4 group-hover:text-white" />
                    </div>
                    <span className="text-brand-gray text-lg pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
               <img 
                src={mainImage} 
                alt="Personal Trainer Christchurch technique coaching" 
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-6 bg-brand-light">
          <div className="max-w-6xl mx-auto">
             <h2 className="text-5xl font-display font-bold mb-16 text-center text-brand-black uppercase tracking-tighter">How Hybrid Works</h2>
             <div className="grid md:grid-cols-3 gap-8">
               {[
                 { step: "01", title: "In-Person", desc: "Coaching, technique, smart loading, and real-time adjustments. We make every rep count." },
                 { step: "02", title: "In-App", desc: "Short, clear sessions that support what we’re doing — not random extras. You follow the plan." },
                 { step: "03", title: "Sustainable", desc: "We’ll push when it makes sense, and pull back when your recovery needs it." }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-shadow">
                   <span className="text-6xl font-display font-bold text-brand-light mb-6 block">{item.step}</span>
                   <h3 className="font-display text-3xl font-bold mb-4 text-brand-black uppercase">{item.title}</h3>
                   <p className="text-brand-gray leading-relaxed">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* My Approach */}
        <section className="py-24 px-6 bg-brand-black text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-display font-bold mb-8 uppercase tracking-tighter">My Approach</h2>
            <p className="text-2xl text-gray-400 mb-16 font-light max-w-2xl">
              I’m not here to turn the gym into a circus. I’m here to help you build a body that works.
            </p>
            <div className="space-y-8">
               {[
                 { icon: Target, title: "Minimum Effective Dose", text: "So you can stay consistent without living in the gym." },
                 { icon: UserCheck, title: "Planned Progress", text: "So you’re not guessing. Every week builds on the last." },
                 { icon: ShieldCheck, title: "Recovery Guardrails", text: "So training supports your life, not competes with it." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 items-start border-b border-white/10 pb-8 last:border-0">
                   <div className="bg-white/10 p-4 rounded-full"><item.icon className="text-brand-orange" size={24} /></div>
                   <div>
                     <h3 className="font-display text-2xl font-bold mb-2 uppercase">{item.title}</h3>
                     <p className="text-gray-400">{item.text}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-display font-bold mb-6 text-brand-black uppercase tracking-tighter">Included</h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl mx-auto text-lg text-left mb-16">
               <li className="flex items-center"><Check size={24} className="mr-4 text-brand-orange" /> 1:1 In-Person Sessions</li>
               <li className="flex items-center"><Check size={24} className="mr-4 text-brand-orange" /> Full App Programming</li>
               <li className="flex items-center"><Check size={24} className="mr-4 text-brand-orange" /> Technique Video Library</li>
               <li className="flex items-center"><Check size={24} className="mr-4 text-brand-orange" /> Support Between Sessions</li>
            </div>

            <div className="bg-brand-light p-10 rounded-[2.5rem] inline-block w-full max-w-2xl">
               <p className="text-xl font-bold mb-8">If you want coaching that’s honest, thoughtful, and tailored to you.</p>
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