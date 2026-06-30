import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { corporateClients } from '../data/corporateClients';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { Smartphone, ArrowRight, Dumbbell, Target, Apple, MessageSquare, LineChart } from 'lucide-react';

export const CorporateLanding: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();
  
  // If no company ID or company not found, redirect to home or show 404
  if (!companyId || !corporateClients[companyId]) {
    return <Navigate to="/" replace />;
  }

  const client = corporateClients[companyId];

  return (
    <>
      <SeoHead 
        title={`${client.name} Wellness Program | WRK Personal Training`}
        description={`Welcome to the ${client.name} Corporate Wellness Program.`}
      />

      <div className="bg-primary text-text-primary min-h-screen pt-32 pb-24">
        
        {/* HERO SECTION */}
        <section className="px-6 max-w-5xl mx-auto text-center mb-32">
          <div className="mb-8 inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/10 text-xs font-black tracking-widest uppercase text-accent">
            Corporate Wellness Partnership
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-[6vw] uppercase mb-8 leading-[1.25]">
            Welcome, <span className="text-accent">{client.name}</span> Team
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-16 max-w-3xl mx-auto">
            {client.welcomeMessage}
          </p>

          <div className="bg-secondary p-10 md:p-16 rounded-[3rem] border border-border shadow-sm text-center max-w-2xl mx-auto relative overflow-hidden group hover:border-accent transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-accent/10 transition-colors"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-8 border border-border">
                <Smartphone className="w-10 h-10 text-accent" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl uppercase mb-4 text-text-primary">Access Your Program</h2>
              <p className="text-text-secondary text-lg mb-10 max-w-md mx-auto">
                Your training, habits, and nutrition support are all delivered through the WRK Personal Training app. Click below to access your account.
              </p>
              
              <a href={client.appLink} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-12 py-6 text-lg rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-3">
                  Access App <ArrowRight size={20} />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* WHAT EMPLOYEES GET */}
        <section className="px-6 max-w-7xl mx-auto mb-32">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-6xl uppercase mb-6">
              What Employees Get
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto">
              Designed for all levels — from “haven’t trained in years” to “already in the gym”.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Dumbbell className="w-8 h-8 text-accent mb-6" />,
                title: "Training Program Library",
                desc: "Strength, fat loss, beginner, home-based, gym-based — options by readiness and preference."
              },
              {
                icon: <Target className="w-8 h-8 text-accent mb-6" />,
                title: "Habit System",
                desc: "Simple, measurable targets that improve energy and resilience."
              },
              {
                icon: <Apple className="w-8 h-8 text-accent mb-6" />,
                title: "Nutrition Support",
                desc: "Practical guidance employees can actually follow (not restrictive dieting)."
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-accent mb-6" />,
                title: "Regular Check-ins",
                desc: "Built-in accountability to increase follow-through."
              },
              {
                icon: <LineChart className="w-8 h-8 text-accent mb-6" />,
                title: "Progress Tracking",
                desc: "Employees can see improvement — participation becomes measurable, not guesswork."
              }
            ].map((item, i) => (
              <div key={i} className="bg-secondary p-10 rounded-[2rem] border border-border flex flex-col items-start text-left hover:border-accent transition-colors group">
                <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-border group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-display text-2xl uppercase mb-4 text-text-primary">{item.title}</h3>
                <p className="text-text-secondary text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="px-6 max-w-7xl mx-auto mb-32">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-6xl uppercase mb-6">
              How The Program Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                image: "https://i.postimg.cc/tCGRmr4y/IMG-1925.png",
                title: "1. Choose Your Path", 
                desc: "Select a training program that fits your current fitness level, whether you're training at home, in the gym, or just starting out." 
              },
              { 
                image: "https://i.postimg.cc/fyFscJdc/pexels-allan-mas-5383718.jpg",
                title: "2. Build Habits", 
                desc: "Focus on simple, daily targets for movement, hydration, and recovery to build sustainable energy." 
              },
              { 
                image: "https://i.postimg.cc/SNbQtZN3/IMG-1930.png",
                title: "3. Stay Consistent", 
                desc: "Use the app to track your progress, check in with your coach, and maintain momentum all year round." 
              }
            ].map((item, i) => (
              <div key={i} className="group flex flex-col">
                <div className="rounded-[2rem] overflow-hidden mb-8 border border-border bg-primary aspect-[4/5] relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h3 className="font-display text-2xl uppercase mb-4 text-text-primary">{item.title}</h3>
                <p className="text-text-secondary text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ OR ADDITIONAL INFO */}
        <section className="px-6 max-w-3xl mx-auto text-center pt-24">
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">Need Support?</h2>
          <p className="text-text-secondary text-xl mb-12">
            If you have trouble accessing your account or have questions about the program, reach out to your internal HR coordinator or contact us directly.
          </p>
          <a href="/contact">
            <Button variant="outline" size="lg" className="px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm">
              Contact Support
            </Button>
          </a>
        </section>

      </div>
    </>
  );
};
