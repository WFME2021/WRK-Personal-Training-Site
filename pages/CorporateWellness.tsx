import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Briefcase, Users, BatteryCharging, Trophy, BarChart, Smartphone } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';

export const CorporateWellness: React.FC = () => {
  const faqs = [
    {
      question: "How is this different from a gym subsidy?",
      answer: "Gym subsidies have low engagement (usually <15%) because they don't solve the core problem: time and direction. Precision Wellness brings the program to your employees, digitally and practically."
    },
    {
      question: "Do you offer on-site workshops?",
      answer: "Yes, for Christchurch-based teams I offer workshops on energy management, stress resilience, and practical movement for desk workers."
    },
    {
      question: "Is this suitable for remote teams?",
      answer: "100%. The core delivery is digital (app-based), meaning your team gets the same quality of support whether they are in Christchurch, Auckland, or working from home."
    },
    {
      question: "What size team is this for?",
      answer: "The program scales well. I work with small leadership teams (5-10) up to larger organizations (100+). The structure adjusts based on your size."
    },
    {
      question: "How do we measure success?",
      answer: "We track engagement, participation, and subjective health scores. You get a quarterly report showing exactly how your team is utilizing the program."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Corporate Wellness Program | Precision Wellness by WRK"
        description="Precision Wellness: corporate wellness programs delivered in NZ and online worldwide. Practical workshops, challenges and habits teams actually use."
      />

      <div className="bg-white">
        {/* Hero */}
        <section className="bg-brand-light py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-gray mb-4 block">Precision Wellness</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand-primary">Wellness for real people with real workloads.</h1>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto leading-relaxed mb-8">
               This isn’t a generic “health kick.” Precision Wellness is about helping teams feel better, move better, and build sustainable habits — in a way that fits modern work and real-life stress.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link to="/contact" state={{ fromCorporate: true }}>
                 <Button>Enquire About Precision Wellness</Button>
              </Link>
              <a href="#options">
                 <Button variant="secondary">See Program Options</Button>
              </a>
            </div>
          </div>
        </section>

        {/* Why Most Fail */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-bold mb-8 text-brand-primary text-center">Why most programs don't stick</h2>
             <p className="text-lg text-brand-gray text-center mb-12 max-w-2xl mx-auto">
               Most corporate wellness fails because it asks too much, too vaguely. People get a burst of motivation, then real life kicks in.
             </p>
             
             <div className="grid md:grid-cols-4 gap-6 text-center">
               <div className="bg-gray-50 p-6 rounded-2xl">
                 <h3 className="font-bold text-lg text-brand-black mb-2">Clear</h3>
                 <p className="text-sm text-brand-gray">Not vague advice. Specific actions.</p>
               </div>
               <div className="bg-gray-50 p-6 rounded-2xl">
                 <h3 className="font-bold text-lg text-brand-black mb-2">Practical</h3>
                 <p className="text-sm text-brand-gray">Fits into a workday, doesn't dominate it.</p>
               </div>
               <div className="bg-gray-50 p-6 rounded-2xl">
                 <h3 className="font-bold text-lg text-brand-black mb-2">Low-friction</h3>
                 <p className="text-sm text-brand-gray">Easy to access, easy to do.</p>
               </div>
               <div className="bg-gray-50 p-6 rounded-2xl">
                 <h3 className="font-bold text-lg text-brand-black mb-2">Useful</h3>
                 <p className="text-sm text-brand-gray">Actually improves how they feel.</p>
               </div>
             </div>
          </div>
        </section>

        {/* What Precision Wellness Means */}
        <section className="py-20 px-6 bg-brand-primary text-white rounded-[3rem] mx-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">What "Precision Wellness" Means</h2>
              <p className="text-gray-300">It means we focus on what moves the needle.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
               <div className="flex gap-4">
                 <Smartphone className="text-brand-lime shrink-0" size={24} />
                 <div>
                   <h3 className="text-lg font-bold">Simple Movement Frameworks</h3>
                   <p className="text-gray-300 text-sm">Routines people can repeat without a gym.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <BatteryCharging className="text-brand-lime shrink-0" size={24} />
                 <div>
                   <h3 className="text-lg font-bold">Strength & Resilience Basics</h3>
                   <p className="text-gray-300 text-sm">For bodies that sit, travel, and carry stress.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <Trophy className="text-brand-lime shrink-0" size={24} />
                 <div>
                   <h3 className="text-lg font-bold">Recovery & Energy Habits</h3>
                   <p className="text-gray-300 text-sm">That don’t require a personality transplant.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <Users className="text-brand-lime shrink-0" size={24} />
                 <div>
                   <h3 className="text-lg font-bold">Optional Deeper Support</h3>
                   <p className="text-gray-300 text-sm">For the individuals who want to go further.</p>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Options */}
        <section id="options" className="py-24 px-6 bg-brand-light">
          <div className="max-w-5xl mx-auto">
             <h2 className="text-3xl font-bold mb-12 text-center text-brand-primary">Program Options</h2>
             <div className="grid md:grid-cols-3 gap-8">
               
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                 <h3 className="font-bold text-xl mb-4 text-brand-black">1. Precision Reset</h3>
                 <p className="text-sm font-bold text-brand-gray uppercase tracking-wider mb-6">4–6 Weeks</p>
                 <p className="text-brand-gray text-sm mb-6">A simple challenge-style structure with education and daily actions to build momentum.</p>
               </div>

               <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-brand-primary relative">
                 <div className="absolute top-0 right-0 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Popular</div>
                 <h3 className="font-bold text-xl mb-4 text-brand-black">2. Precision Foundations</h3>
                 <p className="text-sm font-bold text-brand-gray uppercase tracking-wider mb-6">Ongoing</p>
                 <p className="text-brand-gray text-sm mb-6">Monthly sessions + resources + accountability prompts. Keeping wellness top of mind.</p>
               </div>

               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                 <h3 className="font-bold text-xl mb-4 text-brand-black">3. Executive Support</h3>
                 <p className="text-sm font-bold text-brand-gray uppercase tracking-wider mb-6">Leadership</p>
                 <p className="text-brand-gray text-sm mb-6">For leadership teams: targeted, time-efficient, and practical health management.</p>
               </div>

             </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center">
           <div className="max-w-3xl mx-auto bg-gray-50 rounded-3xl p-12">
             <h2 className="text-2xl font-bold mb-6 text-brand-primary">Let's build something useful.</h2>
             <p className="text-brand-gray mb-8 text-lg">
               Tell me your team size, goals, and what “better” looks like — and I’ll recommend the right setup.
             </p>
             <Link to="/contact" state={{ fromCorporate: true }}>
               <Button size="lg">Enquire About Precision Wellness</Button>
             </Link>
           </div>
        </section>

        <FAQ items={faqs} title="Corporate Wellness FAQs" />
      </div>
    </>
  );
};