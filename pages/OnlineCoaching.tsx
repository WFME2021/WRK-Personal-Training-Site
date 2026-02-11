import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Smartphone, Video, MessageSquare, Check, ScanBarcode, LineChart, Utensils, Globe } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';

export const OnlineCoaching: React.FC = () => {
  const { pageContent } = useContent();
  const { workoutLogImage, videoImage } = pageContent.onlineCoaching;

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
        {/* Hero */}
        <section className="bg-brand-primary text-white py-24 px-6 rounded-b-[3rem]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6">Online Personal Trainer <br/><span className="text-brand-lime">(NZ-Wide)</span></h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-bold uppercase tracking-wider mb-4">
              Structure + Accountability
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              If you’re capable but life gets in the way, online coaching gives you what most people actually need: a good plan, a steady hand on the wheel, and someone who keeps you consistent.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-brand-lime text-brand-primary hover:bg-white">Apply for Online Coaching</Button>
              </Link>
              <Link to="/assessment">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-primary">Take the Diagnostic</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-24 px-6">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className="order-2 lg:order-1 flex justify-center gap-8 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-light rounded-full z-0 blur-3xl opacity-50"></div>
                <div className="relative z-10 w-[280px] md:w-[320px] aspect-[9/19.5] bg-black rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden transform -rotate-3">
                   <img src={workoutLogImage} alt="Online personal training app interface" className="w-full h-full object-cover" />
                </div>
             </div>

             <div className="order-1 lg:order-2">
                <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8 text-brand-primary">
                  Who It's For
                </h2>
                <p className="text-brand-gray text-lg mb-6">Online coaching is a strong fit if:</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                     <Check className="text-brand-orange mr-3 mt-1 shrink-0" />
                     <span className="text-brand-gray">You already train (or you’re ready to) but consistency is patchy.</span>
                  </li>
                  <li className="flex items-start">
                     <Check className="text-brand-orange mr-3 mt-1 shrink-0" />
                     <span className="text-brand-gray">Work, stress, travel, and family make your weeks unpredictable.</span>
                  </li>
                  <li className="flex items-start">
                     <Check className="text-brand-orange mr-3 mt-1 shrink-0" />
                     <span className="text-brand-gray">You want guidance and accountability without in-person sessions.</span>
                  </li>
                  <li className="flex items-start">
                     <Check className="text-brand-orange mr-3 mt-1 shrink-0" />
                     <span className="text-brand-gray">You want to feel confident you’re doing the right things.</span>
                  </li>
                </ul>
             </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-6 bg-brand-light">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-bold mb-12 text-center text-brand-primary">How It Works</h2>
             <div className="grid md:grid-cols-4 gap-6">
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <span className="text-4xl font-display font-bold text-brand-lime mb-4 block">01</span>
                  <h3 className="font-bold text-lg mb-2">You Tell Me</h3>
                  <p className="text-sm text-brand-gray">Your goal, schedule, and constraints. I need to know the reality of your week.</p>
               </div>
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <span className="text-4xl font-display font-bold text-brand-lime mb-4 block">02</span>
                  <h3 className="font-bold text-lg mb-2">I Build</h3>
                  <p className="text-sm text-brand-gray">Your plan in the app. Based on what you can actually do, not a fantasy perfect week.</p>
               </div>
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <span className="text-4xl font-display font-bold text-brand-lime mb-4 block">03</span>
                  <h3 className="font-bold text-lg mb-2">You Execute</h3>
                  <p className="text-sm text-brand-gray">You complete the workouts, track your weights, and check in. I adjust as we go.</p>
               </div>
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <span className="text-4xl font-display font-bold text-brand-lime mb-4 block">04</span>
                  <h3 className="font-bold text-lg mb-2">We Progress</h3>
                  <p className="text-sm text-brand-gray">You keep moving forward, even when the week isn’t perfect. Consistency wins.</p>
               </div>
             </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-brand-primary">What You Get</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
               <div className="flex gap-4">
                 <Smartphone className="text-brand-orange shrink-0" size={24} />
                 <div>
                   <h3 className="font-bold text-lg">App-Based Training Plan</h3>
                   <p className="text-sm text-brand-gray">Gym, home, or travel friendly. Your program lives in your pocket.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <MessageSquare className="text-brand-orange shrink-0" size={24} />
                 <div>
                   <h3 className="font-bold text-lg">Regular Check-Ins</h3>
                   <p className="text-sm text-brand-gray">We review your week, check your form, and update the plan.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <Globe className="text-brand-orange shrink-0" size={24} />
                 <div>
                   <h3 className="font-bold text-lg">Exercise Swaps</h3>
                   <p className="text-sm text-brand-gray">Busy week? Injury flare up? I provide fallback sessions and swaps.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <Utensils className="text-brand-orange shrink-0" size={24} />
                 <div>
                   <h3 className="font-bold text-lg">Supportive Nutrition</h3>
                   <p className="text-sm text-brand-gray">Guidelines you can stick to. Simple, not obsessive.</p>
                 </div>
               </div>
            </div>
            
            <div className="mt-16 p-8 bg-brand-light rounded-3xl inline-block">
               <p className="text-xl font-bold text-brand-black mb-6">If you want consistency without overcomplicating it, this is your lane.</p>
               <div className="flex flex-col md:flex-row justify-center gap-4">
                 <Link to="/contact">
                   <Button>Apply for Online Coaching</Button>
                 </Link>
                 <Link to="/42-day-reset">
                   <Button variant="secondary">Start with the 42-Day Reset ($47)</Button>
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