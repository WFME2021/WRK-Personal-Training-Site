import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Activity, ShieldCheck, Clock, ArrowRight, ArrowUpRight, BarChart3, Brain } from 'lucide-react';
import { Button } from '../components/Button';
import { useContent } from '../context/ContentContext';

export const Home: React.FC = () => {
  const { pageContent } = useContent();
  const { heroImage, ptImage, onlineImage } = pageContent.home;

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* Massive Hero Section */}
      <section className="relative px-4 pt-4 pb-12 md:px-8">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Top Text */}
          <div className="flex flex-col items-center justify-center pt-8 mb-8 md:mb-12">
            <h1 className="font-display text-[14vw] md:text-[12vw] leading-[0.85] font-bold uppercase tracking-tighter text-center text-brand-primary">
              Sustainable <br className="hidden md:block" /> Results
            </h1>
            <p className="mt-6 text-lg md:text-xl text-brand-gray font-medium max-w-2xl text-center">
              Evidence-based personal training for busy professionals in Christchurch.
              <br/>The minimum effective dose to get the results you want.
            </p>
          </div>

          {/* Main Visual Block */}
          <div className="relative w-full h-[60vh] md:h-[75vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden group">
            <img 
              src={heroImage} 
              alt="Athlete focused" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-brand-primary/10 transition-colors duration-500"></div>
            
            {/* Floating CTA - ORANGE */}
            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
              <Link to="/assessment">
                <button className="bg-brand-orange text-brand-black px-8 py-4 rounded-full font-display font-bold uppercase tracking-widest text-sm md:text-base hover:bg-white hover:scale-105 transition-all shadow-lg flex items-center gap-2">
                  Get Free Assessment <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>

          {/* Problem / Solution */}
          <div className="mt-20 grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-6">
               <h2 className="font-display text-5xl md:text-7xl leading-[0.9] uppercase font-bold text-brand-primary mb-6">
                 Stop Wasting <br/><span className="text-brand-gray">Time.</span>
               </h2>
               <p className="text-lg text-brand-gray leading-relaxed mb-6">
                 Most fitness programs fail because they demand too much. Meal plans that require a chef. 6 days a week in the gym. It's not sustainable for a professional with a career and a family.
               </p>
               <p className="text-lg text-brand-primary font-bold">
                 You don't need more discipline. You need a smarter approach.
               </p>
            </div>
            <div className="md:col-span-6 bg-brand-light p-8 md:p-12 rounded-[2rem]">
               <h3 className="font-display text-3xl uppercase font-bold text-brand-primary mb-6">The Minimum Effective Dose</h3>
               <p className="text-brand-gray mb-8">
                 We identify the 20% of training and nutrition that drives 80% of your results. Nothing more, nothing less.
               </p>
               <ul className="space-y-4">
                 <li className="flex items-start">
                   <div className="bg-brand-orange p-1 rounded-full mr-3 mt-1"><Check size={14} className="text-brand-black"/></div>
                   <div>
                     <strong className="block text-brand-primary">2-3 Focused Sessions</strong>
                     <span className="text-sm text-brand-gray">Not 6 random workouts. Structure yields results.</span>
                   </div>
                 </li>
                 <li className="flex items-start">
                   <div className="bg-brand-orange p-1 rounded-full mr-3 mt-1"><Check size={14} className="text-brand-black"/></div>
                   <div>
                     <strong className="block text-brand-primary">Sustainable Nutrition</strong>
                     <span className="text-sm text-brand-gray">Hit protein. Be aware of calories. Eat whole foods. No obsessing.</span>
                   </div>
                 </li>
                 <li className="flex items-start">
                   <div className="bg-brand-orange p-1 rounded-full mr-3 mt-1"><Check size={14} className="text-brand-black"/></div>
                   <div>
                     <strong className="block text-brand-primary">Designed for Real Life</strong>
                     <span className="text-sm text-brand-gray">Your training needs to fit around your career, not the other way around.</span>
                   </div>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Rounded Cards) */}
      <section id="services" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-display text-5xl md:text-7xl uppercase font-bold tracking-tighter leading-none text-brand-primary">
              Choose Your <br/> Path
            </h2>
            <Link to="/contact" className="hidden md:block">
              <Button variant="outline">View All Options</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <Link to="/personal-training" className="group relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden bg-gray-100">
              <img 
                src={ptImage} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                alt="Personal Training"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-display text-4xl md:text-5xl text-white uppercase font-bold mb-2">In-Person</h3>
                    <p className="text-gray-300 font-medium max-w-xs">Hands-on coaching in Christchurch. Expert eyes on your form.</p>
                  </div>
                  <div className="bg-white text-brand-black p-4 rounded-full group-hover:bg-brand-orange transition-colors">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 2 - Background updated to brand-primary */}
            <Link to="/online-coaching" className="group relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden bg-brand-primary">
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                <div className="flex justify-end">
                   <div className="bg-white/10 text-white p-4 rounded-full backdrop-blur-md group-hover:bg-brand-orange group-hover:text-brand-black transition-colors">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
                <div>
                   <h3 className="font-display text-4xl md:text-5xl text-white uppercase font-bold mb-4">Online <br/> Coaching</h3>
                   <div className="space-y-4 border-t border-brand-green/30 pt-6">
                      <div className="flex items-center text-gray-200">
                        <Check size={18} className="text-brand-orange mr-3" />
                        <span className="font-medium">Custom App Programming</span>
                      </div>
                      <div className="flex items-center text-gray-200">
                        <Check size={18} className="text-brand-orange mr-3" />
                        <span className="font-medium">Video Technique Review</span>
                      </div>
                      <div className="flex items-center text-gray-200">
                        <Check size={18} className="text-brand-orange mr-3" />
                        <span className="font-medium">Anywhere in NZ</span>
                      </div>
                   </div>
                </div>
              </div>
              {/* Subtle background texture/image */}
               <img 
                src={onlineImage} 
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
                alt="Texture"
              />
            </Link>

          </div>
          
          {/* Secondary Services Pill Row */}
          <div className="grid md:grid-cols-2 gap-4 mt-6">
             <Link to="/corporate-wellness" className="bg-brand-light border-2 border-transparent rounded-[2rem] p-8 flex items-center justify-between group hover:border-brand-orange transition-colors duration-300">
               <div>
                 <h4 className="font-display text-2xl uppercase font-bold mb-1 text-brand-primary">Corporate Wellness</h4>
                 <p className="text-sm font-bold uppercase tracking-wider opacity-70 text-brand-gray">Scalable & Measurable</p>
               </div>
               <div className="bg-white p-3 rounded-full group-hover:bg-brand-orange transition-colors">
                  <ArrowRight className="transform group-hover:translate-x-1 transition-transform group-hover:text-brand-black" />
               </div>
             </Link>
             <Link to="/42-day-reset" className="bg-brand-orange text-brand-black rounded-[2rem] p-8 flex items-center justify-between group hover:bg-brand-black hover:text-white transition-colors duration-300">
               <div>
                 <h4 className="font-display text-2xl uppercase font-bold mb-1">42 Day Reset</h4>
                 <p className="text-sm font-bold uppercase tracking-wider opacity-70">6 Week Circuit Breaker</p>
               </div>
               <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Updated to BLACK BG for High Contrast with Orange */}
      <section className="py-24 px-4 md:px-8 bg-brand-black text-white rounded-t-[3rem] md:rounded-t-[5rem] mt-[-2rem] relative z-10">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-32">
            <div>
              <span className="text-brand-orange font-bold tracking-widest uppercase mb-4 block">Our Approach</span>
              <h2 className="font-display text-5xl md:text-8xl uppercase font-bold tracking-tighter leading-[0.9] mb-8 text-white">
                Assess. <br/> Address. <br/> Educate.
              </h2>
            </div>
            
            <div className="space-y-8 flex flex-col justify-center">
                <div className="bg-white/5 p-8 rounded-[2rem] hover:bg-white/10 transition-colors border border-white/5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-brand-orange p-2 rounded-full text-brand-black">
                      <BarChart3 size={24} />
                    </div>
                    <h3 className="font-display text-2xl uppercase font-bold">Assess</h3>
                  </div>
                  <p className="text-gray-400">We understand where you are right now—movement quality, strength baseline, and lifestyle constraints. No guessing.</p>
                </div>

                <div className="bg-white/5 p-8 rounded-[2rem] hover:bg-white/10 transition-colors border border-white/5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-brand-orange p-2 rounded-full text-brand-black">
                      <ShieldCheck size={24} />
                    </div>
                    <h3 className="font-display text-2xl uppercase font-bold">Address</h3>
                  </div>
                  <p className="text-gray-400">We give you a program that fits your life and addresses your specific limitations. Not what worked for someone else.</p>
                </div>

                <div className="bg-white/5 p-8 rounded-[2rem] hover:bg-white/10 transition-colors border border-white/5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-brand-orange p-2 rounded-full text-brand-black">
                      <Brain size={24} />
                    </div>
                    <h3 className="font-display text-2xl uppercase font-bold">Educate</h3>
                  </div>
                  <p className="text-gray-400">We teach you how training works so you understand your own body. Our goal isn't to keep you dependent—it's to make you capable.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer-ish area */}
      <section className="bg-brand-light py-32 px-4 md:px-8 text-center">
        <h2 className="font-display text-[10vw] leading-[0.8] uppercase font-bold text-brand-black mb-8 opacity-5">
          Start Now
        </h2>
        <div className="-mt-12 md:-mt-24 relative z-10">
          <p className="text-xl md:text-2xl font-bold mb-8 max-w-xl mx-auto text-brand-black">
            Identify your priorities and receive a recommended roadmap in 2 minutes.
          </p>
          <Link to="/assessment">
            <Button size="lg" className="px-12 py-5 text-lg shadow-xl hover:shadow-2xl">Begin Assessment</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};