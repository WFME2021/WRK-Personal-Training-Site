import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Calendar, CheckCircle2, Trophy, AlertTriangle } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const Challenge42: React.FC = () => {
  const { pageContent } = useContent();
  const { heroBackground } = pageContent.challenge42;

  return (
    <div className="bg-white">
      {/* High impact header */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        {/* Background Overlay updated to brand-primary */}
        <div className="absolute inset-0 bg-brand-primary z-0">
           <img 
            src={heroBackground} 
            alt="Training background" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
           />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <span className="text-brand-lime uppercase tracking-[0.2em] text-sm font-bold mb-4 block">The Circuit Breaker</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">42 Day Reset</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-xl mx-auto">
            Transform Your Fitness in 6 Weeks. A structured group program with accountability, community, and expert coaching.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-brand-lime text-brand-primary hover:bg-white px-10 py-4">Secure Your Spot</Button>
          </Link>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl font-bold mb-12 text-brand-primary">Why Most Fitness Attempts Fail</h2>
           <div className="grid md:grid-cols-3 gap-8 text-left">
             <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
               <h3 className="font-bold text-lg mb-2">No Accountability</h3>
               <p className="text-brand-gray text-sm">You're doing it alone. There's no one to notice if you skip a workout.</p>
             </div>
             <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
               <h3 className="font-bold text-lg mb-2">No Structure</h3>
               <p className="text-brand-gray text-sm">You're left guessing what to do. Paralysis by analysis leads to quitting.</p>
             </div>
             <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
               <h3 className="font-bold text-lg mb-2">No Expert Guidance</h3>
               <p className="text-brand-gray text-sm">Form questions? Nutrition confusion? Doubts creep in and you stop.</p>
             </div>
           </div>
        </div>
      </section>

      {/* The Solution / Phases */}
      <section className="py-24 px-6 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-primary">The Program Breakdown</h2>
            <p className="text-brand-gray">Six weeks of structure designed to build momentum.</p>
          </div>

          <div className="space-y-8">
             <div className="bg-white p-8 shadow-sm rounded-2xl flex flex-col md:flex-row gap-6 items-start">
               <div className="bg-brand-primary text-white font-bold p-4 rounded-xl shrink-0">Weeks 1-2</div>
               <div>
                 <h3 className="font-bold text-lg mb-2 text-brand-primary">Foundation</h3>
                 <p className="text-sm text-brand-gray mb-2">Focus: Learn the basics, establish baseline, build consistency.</p>
                 <ul className="text-sm text-brand-gray list-disc ml-4 space-y-1">
                   <li>Movement quality assessment</li>
                   <li>Basic strength patterns</li>
                   <li>Nutrition setup (protein/calorie targets)</li>
                 </ul>
               </div>
             </div>

             <div className="bg-white p-8 shadow-sm rounded-2xl flex flex-col md:flex-row gap-6 items-start">
               <div className="bg-brand-primary text-white font-bold p-4 rounded-xl shrink-0">Weeks 3-4</div>
               <div>
                 <h3 className="font-bold text-lg mb-2 text-brand-primary">Progression</h3>
                 <p className="text-sm text-brand-gray mb-2">Focus: Increase intensity, add volume, refine technique.</p>
                 <ul className="text-sm text-brand-gray list-disc ml-4 space-y-1">
                   <li>Add weight/reps</li>
                   <li>Nutrition dialed in consistently</li>
                   <li>Community challenges</li>
                 </ul>
               </div>
             </div>

             <div className="bg-white p-8 shadow-sm rounded-2xl flex flex-col md:flex-row gap-6 items-start">
               <div className="bg-brand-primary text-white font-bold p-4 rounded-xl shrink-0">Weeks 5-6</div>
               <div>
                 <h3 className="font-bold text-lg mb-2 text-brand-primary">Acceleration</h3>
                 <p className="text-sm text-brand-gray mb-2">Focus: Peak intensity, maximum results, finish strong.</p>
                 <ul className="text-sm text-brand-gray list-disc ml-4 space-y-1">
                   <li>Hardest workouts of the program</li>
                   <li>Final push challenges</li>
                   <li>Plan for post-challenge continuation</li>
                 </ul>
               </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
         <h2 className="text-3xl font-bold mb-8 text-brand-primary">Limited to 30 Participants</h2>
         <p className="text-brand-gray max-w-2xl mx-auto mb-8">
           We cap these intakes to ensure quality coaching. This is not a bootcamp where you get lost in the crowd.
         </p>
         <Link to="/contact">
           <Button variant="outline">Join Waitlist / Apply</Button>
         </Link>
      </section>
    </div>
  );
};