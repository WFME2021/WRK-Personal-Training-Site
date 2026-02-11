import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Smartphone, Video, MessageSquare, Check, Utensils, Globe, ArrowRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';

export const OnlineCoaching: React.FC = () => {
  const { pageContent } = useContent();
  const { workoutLogImage } = pageContent.onlineCoaching;

  const faqs = [
    {
      question: "Can you build a plan around a busy schedule or travel?",
      answer: "Yes. That is the primary problem I solve. I build plans that fit your available days, and I create specific 'hotel/travel' workouts so you don't lose momentum when you're away."
    },
    {
      question: "Do I need a gym membership?",
      answer: "No. I build the plan based on the equipment you have. If you have a home gym or just a pair of dumbbells, we can make it work."
    },
    {
      question: "How do form checks work?",
      answer: "You film your key lifts (I'll show you how) and upload them to the app. I review them and send you a video or voice note with specific cues to fix your technique."
    },
    {
      question: "Is there a minimum commitment?",
      answer: "I generally recommend 3 months minimum. It takes time to build strength and see real physiological adaptation. Quick fixes don't exist here."
    },
    {
      question: "What's the difference between Hybrid and Online?",
      answer: "Hybrid includes in-person sessions with me in Christchurch. Online is 100% remote, meaning you train on your own time, but with my programming and accountability."
    },
    {
      question: "Do you work with beginners online?",
      answer: "Yes, provided you are willing to learn. I will be heavy on video review initially to ensure you are safe and moving well."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Online Personal Trainer NZ | Coaching + Check-Ins | WRK"
        description="Online coaching across NZ. App-based training plan, regular check-ins, and adjustments around work, stress and travel. Apply for online coaching."
      />

      <div className="bg-white">
        {/* Hero - Black Background */}
        <section className="bg-brand-black text-white py-24 px-6 rounded-b-[3rem]">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-6 leading-none">
              Online Personal Trainer <br/><span className="text-brand-orange">NZ-Wide</span>
            </h1>
            <p className="font-bold uppercase tracking-[0.2em] mb-8 text-sm text-gray-400">
              Structure + Accountability
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
              If you’re capable but life gets in the way, online coaching gives you what most people actually need: a good plan, a steady hand on the wheel, and someone who keeps you consistent.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link to="/contact">
                <Button className="bg-white text-brand-black hover:bg-brand-orange hover:text-white px-10 py-5">Apply for Online</Button>
              </Link>
              <Link to="/assessment">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-black px-10 py-5">Take Diagnostic</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className="order-2 lg:order-1 flex justify-center relative">
                <div className="relative z-10 w-[300px] md:w-[350px] bg-brand-light rounded-[3rem] p-4 shadow-2xl transform -rotate-2">
                   <div className="overflow-hidden rounded-[2.5rem] border-4 border-white">
                      <img src={workoutLogImage} alt="Online personal training app interface" className="w-full h-full object-cover" />
                   </div>
                </div>
             </div>

             <div className="order-1 lg:order-2">
                <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-10 text-brand-black">
                  Who It's For
                </h2>
                <div className="space-y-6">
                  {[
                    "You already train (or you’re ready to) but consistency is patchy.",
                    "Work, stress, travel, and family make your weeks unpredictable.",
                    "You want guidance and accountability without in-person sessions.",
                    "You want to feel confident you’re doing the right things."
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                       <Check className="text-brand-orange mr-4 mt-1 shrink-0" size={24} />
                       <span className="text-brand-gray text-lg">{item}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-6 bg-brand-light">
          <div className="max-w-6xl mx-auto">
             <h2 className="text-5xl font-display font-bold mb-16 text-center text-brand-black uppercase tracking-tighter">How It Works</h2>
             <div className="grid md:grid-cols-4 gap-6">
               {[
                 { step: "01", title: "You Tell Me", desc: "Your goal, schedule, and constraints. I need to know the reality of your week." },
                 { step: "02", title: "I Build", desc: "Your plan in the app. Based on what you can actually do, not a fantasy." },
                 { step: "03", title: "You Execute", desc: "You complete the workouts, track your weights, and check in. I adjust as we go." },
                 { step: "04", title: "We Progress", desc: "You keep moving forward, even when the week isn’t perfect. Consistency wins." }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <span className="text-4xl font-display font-bold text-brand-orange mb-6 block">{item.step}</span>
                    <h3 className="font-display text-2xl font-bold mb-3 uppercase">{item.title}</h3>
                    <p className="text-sm text-brand-gray leading-relaxed">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-display font-bold mb-12 text-brand-black uppercase tracking-tighter">What You Get</h2>
            <div className="grid md:grid-cols-2 gap-10 text-left max-w-4xl mx-auto">
               {[
                 { icon: Smartphone, title: "App-Based Plan", text: "Gym, home, or travel friendly." },
                 { icon: MessageSquare, title: "Regular Check-Ins", text: "We review, check form, and update." },
                 { icon: Globe, title: "Exercise Swaps", text: "Fallback sessions for busy weeks." },
                 { icon: Utensils, title: "Nutrition Support", text: "Guidelines you can stick to." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 p-6 border border-gray-100 rounded-2xl hover:border-brand-black transition-colors">
                   <item.icon className="text-brand-orange shrink-0" size={32} />
                   <div>
                     <h3 className="font-display text-xl font-bold uppercase mb-1">{item.title}</h3>
                     <p className="text-brand-gray">{item.text}</p>
                   </div>
                 </div>
               ))}
            </div>
            
            <div className="mt-20">
               <div className="flex flex-col md:flex-row justify-center gap-6">
                 <Link to="/contact">
                   <Button size="lg" className="px-12">Apply for Online</Button>
                 </Link>
                 <Link to="/42-day-reset">
                   <Button variant="outline" size="lg">Start 42-Day Reset ($47)</Button>
                 </Link>
               </div>
            </div>
          </div>
        </section>

        <FAQ items={faqs} title="Online Coaching FAQs" />
      </div>
    </>
  );
};