import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Calendar, CheckCircle2, Trophy, AlertTriangle, ArrowRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';

export const Challenge42: React.FC = () => {
  const { pageContent } = useContent();
  const { heroBackground } = pageContent.challenge42;

  const faqs = [
    {
      question: "Is this a recurring subscription?",
      answer: "No. It is a one-time payment of $47 NZD for 42 days of access. No hidden fees, no auto-renewal."
    },
    {
      question: "Do I need gym equipment?",
      answer: "I provide two tracks: Full Gym and Home Dumbbell/Bodyweight. You can switch between them if needed."
    },
    {
      question: "Is this suitable for beginners?",
      answer: "Yes. The program is built on fundamental movement patterns with video demonstrations for every exercise. It's designed to build you up, not break you."
    },
    {
      question: "How long are the workouts?",
      answer: "Workouts are designed to be completed in 45-60 minutes. There are also 'busy day' options that take 30 minutes."
    },
    {
      question: "What happens after the 42 days?",
      answer: "You'll have built solid momentum. You can choose to continue on your own, apply for Online Coaching, or join the Hybrid program if you're in Christchurch."
    }
  ];

  return (
    <>
      <SeoHead 
        title="42 Day Reset Challenge ($47 NZD) | WRK Personal Training"
        description="A simple 42-day reset to rebuild momentum. App-based training, built-in progressions, and supportive nutrition guidelines. $47 NZD instant access."
      />

      <div className="bg-white">
        {/* Hero */}
        <section className="relative h-[80vh] flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-brand-primary z-0">
             <img 
              src={heroBackground} 
              alt="42 day fitness challenge background" 
              className="w-full h-full object-cover opacity-30 mix-blend-overlay grayscale"
             />
          </div>
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-bold mb-6 font-display uppercase tracking-tighter">42-Day Reset</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl mx-auto font-medium leading-relaxed">
              A simple, self-guided plan in the app to help you rebuild momentum, get stronger, and feel better in your body again.
            </p>
            <p className="text-brand-lime font-bold uppercase tracking-widest text-sm mb-8">
              No dramatic “before and after” promises. Just a clear structure you can follow.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-brand-lime text-brand-primary hover:bg-white px-10 py-4">Start the 42-Day Reset ($47)</Button>
              </Link>
              <Link to="/assessment">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-primary">Take the Diagnostic</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl font-bold mb-12 text-brand-primary">Who This Is For</h2>
             <p className="text-lg text-brand-gray mb-10">This is a great fit if:</p>
             
             <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
                <div className="flex items-start p-6 bg-gray-50 rounded-2xl">
                  <CheckCircle2 className="text-brand-orange mr-4 shrink-0" />
                  <p className="text-brand-gray font-medium">You want to get back into training without overthinking it.</p>
                </div>
                <div className="flex items-start p-6 bg-gray-50 rounded-2xl">
                  <CheckCircle2 className="text-brand-orange mr-4 shrink-0" />
                  <p className="text-brand-gray font-medium">You like having a plan you can open and follow.</p>
                </div>
                <div className="flex items-start p-6 bg-gray-50 rounded-2xl">
                  <CheckCircle2 className="text-brand-orange mr-4 shrink-0" />
                  <p className="text-brand-gray font-medium">You want something affordable to start with.</p>
                </div>
                <div className="flex items-start p-6 bg-gray-50 rounded-2xl">
                  <CheckCircle2 className="text-brand-orange mr-4 shrink-0" />
                  <p className="text-brand-gray font-medium">You want to feel better, move more, and build consistency again.</p>
                </div>
             </div>
          </div>
        </section>

        {/* What's Inside */}
        <section className="py-24 px-6 bg-brand-light">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-brand-primary">What's Inside</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start gap-4">
                 <div className="bg-brand-black text-white p-2 rounded-lg shrink-0 mt-1"><Calendar size={20} /></div>
                 <div>
                   <h3 className="font-bold text-lg text-brand-black">Step-by-step training plan</h3>
                   <p className="text-brand-gray">Delivered via a professional coaching app. Video demos, set/rep tracking, and built-in timers.</p>
                 </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start gap-4">
                 <div className="bg-brand-black text-white p-2 rounded-lg shrink-0 mt-1"><Trophy size={20} /></div>
                 <div>
                   <h3 className="font-bold text-lg text-brand-black">Progression built in</h3>
                   <p className="text-brand-gray">So you’re not guessing. The volume and intensity ramp up intelligently over the 6 weeks.</p>
                 </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start gap-4">
                 <div className="bg-brand-black text-white p-2 rounded-lg shrink-0 mt-1"><AlertTriangle size={20} /></div>
                 <div>
                   <h3 className="font-bold text-lg text-brand-black">Options for busy weeks</h3>
                   <p className="text-brand-gray">Travel? Sick kids? Work crisis? Use the fallback sessions to stay on track.</p>
                 </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start gap-4">
                 <div className="bg-brand-black text-white p-2 rounded-lg shrink-0 mt-1"><CheckCircle2 size={20} /></div>
                 <div>
                   <h3 className="font-bold text-lg text-brand-black">Simple nutrition support</h3>
                   <p className="text-brand-gray">Guidelines you can actually stick to. No restrictive diets, just operating principles for energy.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why it works */}
        <section className="py-24 px-6 text-center">
           <div className="max-w-3xl mx-auto">
             <h2 className="text-3xl font-bold mb-6 text-brand-primary">Why It Works</h2>
             <p className="text-2xl font-medium text-brand-black mb-6">Because it’s realistic.</p>
             <p className="text-lg text-brand-gray mb-12 leading-relaxed">
               And realistic is what makes people consistent. You don’t need to do everything. You just need to do the right things, often enough.
             </p>
             
             <div className="bg-brand-primary text-white p-10 rounded-3xl">
               <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
               <p className="text-gray-300 mb-8">If you’re ready to start — start.</p>
               <Link to="/contact">
                 <Button size="lg" className="bg-brand-lime text-brand-primary hover:bg-white w-full md:w-auto">Start the 42-Day Reset ($47)</Button>
               </Link>
             </div>
           </div>
        </section>

        <FAQ items={faqs} title="42-Day Reset FAQs" />
      </div>
    </>
  );
};