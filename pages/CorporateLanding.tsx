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
        <section className="px-6 max-w-4xl mx-auto text-center mb-24">
          <div className="mb-8 inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm font-bold tracking-widest uppercase text-text-secondary">
            Corporate Wellness Partnership
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
            Welcome, <span className="text-accent">{client.name}</span> Team
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-12 max-w-3xl mx-auto">
            {client.welcomeMessage}
          </p>

          <div className="bg-secondary p-8 md:p-12 rounded-[2rem] border border-border shadow-sm text-left max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10 text-center">
              <Smartphone className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="font-display text-3xl font-bold uppercase mb-4">Access Your Program</h2>
              <p className="text-text-secondary mb-8">
                Your training, habits, and nutrition support are all delivered through the WRK Personal Training app. Click below to access your account.
              </p>
              
              <a href={client.appLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button size="lg" className="w-full py-6 text-xl shadow-xl flex items-center justify-center gap-3">
                  Access My Training App <ArrowRight size={20} />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* WHAT EMPLOYEES GET */}
        <section className="px-6 max-w-6xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
              What Employees Get
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Designed for all levels — from “haven’t trained in years” to “already in the gym”.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Dumbbell className="w-8 h-8 text-accent mb-4" />,
                title: "Training Program Library",
                desc: "Strength, fat loss, beginner, home-based, gym-based — options by readiness and preference."
              },
              {
                icon: <Target className="w-8 h-8 text-accent mb-4" />,
                title: "Habit System",
                desc: "Simple, measurable targets that improve energy and resilience."
              },
              {
                icon: <Apple className="w-8 h-8 text-accent mb-4" />,
                title: "Nutrition Support",
                desc: "Practical guidance employees can actually follow (not restrictive dieting)."
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-accent mb-4" />,
                title: "Regular Check-ins",
                desc: "Built-in accountability to increase follow-through."
              },
              {
                icon: <LineChart className="w-8 h-8 text-accent mb-4" />,
                title: "Progress Tracking",
                desc: "Employees can see improvement — participation becomes measurable, not guesswork."
              }
            ].map((item, i) => (
              <div key={i} className="bg-secondary p-8 rounded-2xl border border-border flex flex-col items-start text-left">
                {item.icon}
                <h3 className="font-bold text-xl mb-3 text-text-primary">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="px-6 max-w-5xl mx-auto mb-24">
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-12 text-center">
            How The Program Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                image: "https://i.postimg.cc/WzHzvp7V/exercise-videos.png",
                title: "1. Choose Your Path", 
                desc: "Select a training program that fits your current fitness level, whether you're training at home, in the gym, or just starting out." 
              },
              { 
                image: "https://i.postimg.cc/fyFscJdc/pexels-allan-mas-5383718.jpg",
                title: "2. Build Habits", 
                desc: "Focus on simple, daily targets for movement, hydration, and recovery to build sustainable energy." 
              },
              { 
                image: "https://i.postimg.cc/ZRgR3MtP/recipe-tracking.png",
                title: "3. Stay Consistent", 
                desc: "Use the app to track your progress, check in with your coach, and maintain momentum all year round." 
              }
            ].map((item, i) => (
              <div key={i} className="bg-secondary p-6 md:p-8 rounded-2xl border border-border flex flex-col">
                <div className="rounded-xl overflow-hidden mb-6 border border-border shadow-md bg-primary aspect-[4/5] relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-xl mb-3 text-text-primary">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ OR ADDITIONAL INFO */}
        <section className="px-6 max-w-3xl mx-auto text-center border-t border-border pt-24">
          <h2 className="font-display text-3xl font-bold uppercase mb-6">Need Support?</h2>
          <p className="text-text-secondary mb-8">
            If you have trouble accessing your account or have questions about the program, reach out to your internal HR coordinator or contact us directly.
          </p>
          <a href="/contact">
            <Button variant="outline" size="lg" className="px-12">
              Contact Support
            </Button>
          </a>
        </section>

      </div>
    </>
  );
};
