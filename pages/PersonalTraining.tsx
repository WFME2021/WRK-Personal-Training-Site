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
        <section className="bg-brand-light py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand-primary">Personal Trainer in Christchurch</h1>
            <p className="text-xl font-bold text-brand-black mb-2 uppercase tracking-wider">Hybrid Personal Training</p>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto leading-relaxed mb-8">
              In-person sessions for coaching and precision, plus app-based homework so your training doesn’t fall apart when life gets busy. This is for people who want to do things properly — without making training their second job.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button>Apply for Hybrid Coaching</Button>
              </Link>
              <Link to="/assessment">
                <Button variant="secondary">Take the Diagnostic</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Local SEO Block */}
        <section className="py-12 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center bg-gray-50 p-6 rounded-2xl flex items-center justify-center gap-3 text-sm md:text-base text-brand-gray">
            <MapPin className="text-brand-orange shrink-0" />
            <p>
              I’m based in <strong>Addington</strong> and coach out of Get Me Fitter. I work with clients across nearby suburbs including Merivale, Fendalton, Ilam, Riccarton, Cashmere, Somerfield, Sumner, and Halswell.
            </p>
          </div>
        </section>

        {/* Who this is for */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-primary">Who This Is For</h2>
              <p className="text-lg text-brand-gray mb-6">Hybrid tends to be the best fit if:</p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-brand-orange mr-3 mt-1 shrink-0" />
                  <span className="text-brand-gray">You’ve got a bit of history (pain, injuries, stop-start training).</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-brand-orange mr-3 mt-1 shrink-0" />
                  <span className="text-brand-gray">You want confidence in your technique and your plan.</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-brand-orange mr-3 mt-1 shrink-0" />
                  <span className="text-brand-gray">You want training that fits around work, family, travel — whatever season you’re in.</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-brand-orange mr-3 mt-1 shrink-0" />
                  <span className="text-brand-gray">You like straight-up coaching and a clear direction.</span>
                </li>
              </ul>
            </div>
            
            <div className="relative h-[500px] bg-gray-100 rounded-[2rem] overflow-hidden">
               <img 
                src={mainImage} 
                alt="Personal Trainer Christchurch technique coaching" 
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 bg-brand-light">
          <div className="max-w-5xl mx-auto">
             <h2 className="text-3xl font-bold mb-12 text-center text-brand-primary">How Hybrid Personal Training Works</h2>
             <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-white p-8 rounded-2xl shadow-sm">
                 <div className="bg-brand-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4">1</div>
                 <h3 className="font-bold text-xl mb-3 text-brand-black">We train together in person</h3>
                 <p className="text-sm text-brand-gray">Coaching, technique, smart loading, and real-time adjustments. We make every rep count.</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm">
                 <div className="bg-brand-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4">2</div>
                 <h3 className="font-bold text-xl mb-3 text-brand-black">You’ve got homework in the app</h3>
                 <p className="text-sm text-brand-gray">Short, clear sessions that support what we’re doing — not random extras. You follow the plan.</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm">
                 <div className="bg-brand-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4">3</div>
                 <h3 className="font-bold text-xl mb-3 text-brand-black">We keep it sustainable</h3>
                 <p className="text-sm text-brand-gray">We’ll push when it makes sense, and pull back when your recovery needs it. Longevity is the goal.</p>
               </div>
             </div>
          </div>
        </section>

        {/* My Approach */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-primary">My Coaching Approach</h2>
            <p className="text-xl text-brand-gray mb-12 font-medium">
              I’m not here to turn the gym into a circus. I’m here to help you build a body that works.
            </p>
            <div className="space-y-6">
               <div className="flex gap-4">
                 <Target className="text-brand-orange shrink-0" size={24} />
                 <div>
                   <h3 className="font-bold text-lg mb-1">Minimum Effective Dose</h3>
                   <p className="text-brand-gray">So you can stay consistent without living in the gym.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <UserCheck className="text-brand-orange shrink-0" size={24} />
                 <div>
                   <h3 className="font-bold text-lg mb-1">Planned Progress</h3>
                   <p className="text-brand-gray">So you’re not guessing. Every week builds on the last.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <ShieldCheck className="text-brand-orange shrink-0" size={24} />
                 <div>
                   <h3 className="font-bold text-lg mb-1">Recovery Guardrails</h3>
                   <p className="text-brand-gray">So training supports your life, not competes with it.</p>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="bg-brand-primary text-white py-20 px-6 rounded-t-[3rem] mt-[-2rem] relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What's Included</h2>
              <p className="text-gray-300">A complete system for results.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl mx-auto text-lg">
               <li className="flex items-center"><Check size={20} className="mr-4 text-brand-lime" /> 1:1 in-person sessions (Weekly/Fortnightly)</li>
               <li className="flex items-center"><Check size={20} className="mr-4 text-brand-lime" /> App programming + exercise demos</li>
               <li className="flex items-center"><Check size={20} className="mr-4 text-brand-lime" /> Training progressions + substitutions</li>
               <li className="flex items-center"><Check size={20} className="mr-4 text-brand-lime" /> Support between sessions</li>
            </div>

            <div className="mt-16 text-center">
               <p className="text-xl font-medium mb-8">If you want coaching that’s honest, thoughtful, and tailored to you — apply below.</p>
               <div className="flex flex-col md:flex-row justify-center gap-4">
                 <Link to="/contact">
                   <Button variant="primary" className="bg-brand-lime text-brand-primary hover:bg-white">Apply for Hybrid Coaching</Button>
                 </Link>
                 <Link to="/assessment">
                   <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-primary">Take the Diagnostic</Button>
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