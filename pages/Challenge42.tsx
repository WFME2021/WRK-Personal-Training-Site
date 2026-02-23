
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Calendar, CheckCircle2, Trophy, AlertTriangle, ArrowRight, Timer } from 'lucide-react';
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

      <div className="bg-primary text-text-primary transition-colors duration-300">
        {/* Hero - Explicitly Dark Mode always for style */}
        <section className="relative h-[85vh] flex items-center justify-center text-white bg-black overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
              src={heroBackground} 
              alt="42 day fitness challenge background" 
              className="w-full h-full object-cover opacity-60 grayscale contrast-125"
             />
             {/* Matching gradient overlay from other pages */}
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-[12rem] md:text-[18rem] font-display font-bold leading-none text-white opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">42</h1>
            
            <span className="bg-accent text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs mb-8 inline-block relative">The Circuit Breaker</span>
            
            <h2 className="text-6xl md:text-9xl font-display font-bold mb-6 uppercase tracking-tighter relative">42-Day Reset</h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-xl mx-auto font-light leading-relaxed relative">
              A simple, self-guided plan in the app to help you rebuild momentum, get stronger, and feel better in your body again.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 relative">
              <a href="https://wrkpersonaltraining.mypthub.net/p/225904" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" className="px-12">Start Now ($47)</Button>
              </a>
              <Link to="/assessment">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">Diagnostic</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-24 px-6 bg-primary">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-5xl font-display font-bold mb-16 text-text-primary text-center uppercase tracking-tighter">Who This Is For</h2>
             
             <div className="grid md:grid-cols-2 gap-6 text-left">
                {[
                  "You want to get back into training without overthinking it.",
                  "You like having a plan you can open and follow.",
                  "You want something affordable to start with.",
                  "You want to feel better, move more, and build consistency again."
                ].map((item, i) => (
                  <div key={i} className="flex items-start p-8 bg-secondary border border-border rounded-[2rem] hover:border-accent transition-colors duration-300 group">
                    <CheckCircle2 className="text-accent mr-6 shrink-0 mt-1" size={24} />
                    <p className="font-medium text-lg text-text-primary">{item}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* What's Inside */}
        <section className="py-24 px-6 bg-secondary text-text-primary border-y border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-display font-bold mb-16 text-center text-text-primary uppercase tracking-tighter">What's Inside</h2>
            
            <div className="space-y-8">
              {[
                { icon: Calendar, title: "Step-by-step training plan", desc: "Delivered via a professional coaching app. Video demos, set/rep tracking." },
                { icon: Trophy, title: "Progression built in", desc: "So you’re not guessing. Volume and intensity ramp up intelligently." },
                { icon: Timer, title: "Options for busy weeks", desc: "Travel? Work crisis? Use the fallback sessions to stay on track." },
                { icon: CheckCircle2, title: "Simple nutrition support", desc: "Guidelines you can actually stick to. No restrictive diets." }
              ].map((item, i) => (
                <div key={i} className="bg-primary border border-border p-10 rounded-[2.5rem] flex flex-col md:flex-row items-start gap-8 hover:border-accent transition-colors">
                   <div className="bg-accent p-4 rounded-full text-white shrink-0"><item.icon size={24} /></div>
                   <div>
                     <h3 className="font-display text-2xl font-bold uppercase mb-2 text-text-primary">{item.title}</h3>
                     <p className="text-text-secondary text-lg">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why it works */}
        <section className="py-24 px-6 text-center bg-primary">
           <div className="max-w-3xl mx-auto">
             <h2 className="text-5xl font-display font-bold mb-8 text-text-primary uppercase tracking-tighter">Why It Works</h2>
             <p className="text-3xl font-bold text-accent mb-8 uppercase tracking-widest">Because it’s realistic.</p>
             <p className="text-xl text-text-secondary mb-16 leading-relaxed">
               You don’t need to do everything. You just need to do the right things, often enough.
             </p>
             
             <div className="bg-secondary p-16 rounded-[3rem] border border-border shadow-xl">
               <h3 className="text-3xl font-display font-bold mb-6 uppercase text-text-primary">Ready to start?</h3>
               <p className="text-text-secondary mb-10 text-lg">If you’re ready to start — start.</p>
               <a href="https://wrkpersonaltraining.mypthub.net/p/225904" target="_blank" rel="noopener noreferrer">
                 <Button variant="primary" size="lg" className="w-full md:w-auto px-16 py-6 text-xl">Start ($47)</Button>
               </a>
             </div>
           </div>
        </section>

        <FAQ items={faqs} title="Reset FAQs" />
      </div>
    </>
  );
};
