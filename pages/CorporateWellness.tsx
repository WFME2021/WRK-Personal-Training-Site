import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Briefcase, Users, BatteryCharging, Trophy, Smartphone } from 'lucide-react';
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
        <section className="bg-brand-light py-24 px-6 rounded-b-[3rem]">
          <div className="max-w-5xl mx-auto text-center">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-orange mb-6 block">Precision Wellness</span>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 text-brand-black uppercase tracking-tighter leading-none">
              Wellness for real people <br/>with real workloads.
            </h1>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto leading-relaxed mb-10 font-light">
               This isn’t a generic “health kick.” Precision Wellness is about helping teams feel better, move better, and build sustainable habits.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link to="/contact" state={{ fromCorporate: true }}>
                 <Button className="px-10 py-5">Enquire Now</Button>
              </Link>
              <a href="#options">
                 <Button variant="outline" className="px-10 py-5">See Options</Button>
              </a>
            </div>
          </div>
        </section>

        {/* Why Most Fail */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-brand-black text-center uppercase tracking-tighter">Why most programs fail</h2>
             
             <div className="grid md:grid-cols-4 gap-6 text-center">
               {[
                 { title: "Clear", desc: "Not vague advice. Specific actions." },
                 { title: "Practical", desc: "Fits into a workday, doesn't dominate it." },
                 { title: "Low-friction", desc: "Easy to access, easy to do." },
                 { title: "Useful", desc: "Actually improves how they feel." }
               ].map((item, i) => (
                 <div key={i} className="bg-brand-black p-8 rounded-3xl text-white hover:bg-brand-orange transition-colors duration-300 group">
                   <h3 className="font-display text-2xl font-bold mb-3 uppercase">{item.title}</h3>
                   <p className="text-sm text-gray-400 group-hover:text-white">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* What Precision Wellness Means */}
        <section className="py-24 px-6 bg-brand-light">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase tracking-tighter">Precision Wellness</h2>
              <p className="text-brand-gray text-xl">We focus on what moves the needle.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               {[
                 { icon: Smartphone, title: "Simple Movement Frameworks", text: "Routines people can repeat without a gym." },
                 { icon: BatteryCharging, title: "Strength & Resilience Basics", text: "For bodies that sit, travel, and carry stress." },
                 { icon: Trophy, title: "Recovery & Energy Habits", text: "That don’t require a personality transplant." },
                 { icon: Users, title: "Optional Deeper Support", text: "For the individuals who want to go further." }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm flex gap-6 items-start">
                   <div className="bg-brand-light p-3 rounded-full"><item.icon className="text-brand-orange shrink-0" size={24} /></div>
                   <div>
                     <h3 className="text-xl font-display font-bold uppercase mb-2">{item.title}</h3>
                     <p className="text-brand-gray text-sm">{item.text}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Options */}
        <section id="options" className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center text-brand-black uppercase tracking-tighter">Options</h2>
             <div className="grid md:grid-cols-3 gap-8">
               
               <div className="bg-brand-light p-10 rounded-[2.5rem] border border-gray-100">
                 <h3 className="font-display text-3xl font-bold mb-2 text-brand-black uppercase">Reset</h3>
                 <p className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-8">4–6 Weeks</p>
                 <p className="text-brand-gray text-sm leading-relaxed">A simple challenge-style structure with education and daily actions to build momentum.</p>
               </div>

               <div className="bg-brand-black p-10 rounded-[2.5rem] text-white relative shadow-xl transform md:-translate-y-4">
                 <div className="absolute top-6 right-6 bg-brand-orange text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Popular</div>
                 <h3 className="font-display text-3xl font-bold mb-2 uppercase">Foundations</h3>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Ongoing</p>
                 <p className="text-gray-300 text-sm leading-relaxed">Monthly sessions + resources + accountability prompts. Keeping wellness top of mind.</p>
               </div>

               <div className="bg-brand-light p-10 rounded-[2.5rem] border border-gray-100">
                 <h3 className="font-display text-3xl font-bold mb-2 text-brand-black uppercase">Executive</h3>
                 <p className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-8">Leadership</p>
                 <p className="text-brand-gray text-sm leading-relaxed">For leadership teams: targeted, time-efficient, and practical health management.</p>
               </div>

             </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center bg-brand-black rounded-t-[3rem] text-white">
           <div className="max-w-3xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 uppercase tracking-tighter">Let's build something useful.</h2>
             <p className="text-gray-400 mb-12 text-xl font-light">
               Tell me your team size, goals, and what “better” looks like.
             </p>
             <Link to="/contact" state={{ fromCorporate: true }}>
               <Button size="lg" className="bg-brand-orange hover:bg-white hover:text-brand-black text-white px-12 py-6 text-xl border-none">Enquire Now</Button>
             </Link>
           </div>
        </section>

        <FAQ items={faqs} title="Corporate FAQs" />
      </div>
    </>
  );
};