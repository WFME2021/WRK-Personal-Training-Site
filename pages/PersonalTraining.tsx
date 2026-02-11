import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Check, Target, UserCheck, BarChart3, Clock, Brain } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const PersonalTraining: React.FC = () => {
  const { pageContent } = useContent();
  const { mainImage } = pageContent.personalTraining;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-brand-light py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand-primary">In-Person Coaching</h1>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Hands-on coaching. Expert programming. Real accountability. For busy professionals in Christchurch who want results without the guesswork.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <Button>Book Free Consultation</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-brand-primary">Precision over guesswork.</h2>
            <p className="text-brand-gray text-lg mb-6 leading-relaxed">
              This isn't group fitness where you're one of 20 people getting zero attention. This is 1-on-1 coaching where every session is designed specifically for you.
            </p>
            <p className="text-brand-gray text-lg mb-8 leading-relaxed">
              Before we load you with weight, we assess how you move. Got tight hips from sitting at a desk? Old shoulder injury? We address it properly before it becomes a bigger problem.
            </p>
            
            <div className="grid gap-6">
              {[
                { icon: Target, title: "Custom Program Design", text: "Built around your goals, schedule, and limitations. Not a template." },
                { icon: UserCheck, title: "Real-Time Feedback", text: "We correct your form instantly. No wondering if you're doing it right." },
                { icon: Clock, title: "Accountability That Works", text: "Sessions are scheduled. You show up or you waste money. Simple." },
                { icon: BarChart3, title: "Progressive Programming", text: "We adjust every 4 weeks. No doing the same workout for months." }
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="bg-brand-lime p-3 rounded-full mr-4">
                    <item.icon size={20} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brand-primary">{item.title}</h3>
                    <p className="text-sm text-brand-gray">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[600px] bg-gray-100 rounded-[2rem] overflow-hidden">
             <img 
              src={mainImage} 
              alt="Trainer adjusting weights" 
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-6 bg-brand-light">
        <div className="max-w-5xl mx-auto">
           <h2 className="text-3xl font-bold mb-12 text-center text-brand-primary">Is This Right For You?</h2>
           <div className="grid md:grid-cols-2 gap-12">
             <div className="bg-white p-8 rounded-[2rem] shadow-sm">
               <h3 className="font-bold text-xl mb-6 text-brand-primary flex items-center">
                 <Check className="mr-2 text-brand-green" /> This IS for you if:
               </h3>
               <ul className="space-y-4 text-brand-gray">
                 <li className="flex items-start"><span className="mr-3 text-brand-green">✓</span>You used to be fit but fell out of shape due to career/family.</li>
                 <li className="flex items-start"><span className="mr-3 text-brand-green">✓</span>You want an evidence-based approach, not fitness industry BS.</li>
                 <li className="flex items-start"><span className="mr-3 text-brand-green">✓</span>You have 2-3 hours per week to commit (not 10).</li>
                 <li className="flex items-start"><span className="mr-3 text-brand-green">✓</span>You want expert eyes on your form to prevent injury.</li>
               </ul>
             </div>

             <div className="bg-brand-primary text-white p-8 rounded-[2rem] shadow-sm">
               <h3 className="font-bold text-xl mb-6 flex items-center">
                 <span className="mr-2 text-brand-lime">✗</span> This is NOT for you if:
               </h3>
               <ul className="space-y-4 text-gray-300">
                 <li className="flex items-start"><span className="mr-3 text-brand-lime">•</span>You want a quick fix or a 30-day transformation.</li>
                 <li className="flex items-start"><span className="mr-3 text-brand-lime">•</span>You are looking for the cheapest option.</li>
                 <li className="flex items-start"><span className="mr-3 text-brand-lime">•</span>You need someone to scream at you to get motivated.</li>
                 <li className="flex items-start"><span className="mr-3 text-brand-lime">•</span>You prefer complete independence (try Online Coaching).</li>
               </ul>
             </div>
           </div>
        </div>
      </section>

      {/* Pricing / Options - Background updated to brand-primary */}
      <section className="bg-brand-primary text-white py-20 px-6 rounded-t-[3rem] mt-[-2rem] relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Investment & Commitment</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            We operate on a monthly membership basis. No contracts, but we recommend committing to at least 12 weeks to see significant progress.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="border border-brand-green/30 p-8 hover:border-brand-lime transition-colors rounded-2xl">
              <h3 className="text-xl font-bold mb-2">Weekly Coaching</h3>
              <p className="text-gray-300 text-sm mb-6">Perfect for building a foundation.</p>
              <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                <li className="flex items-center"><Check size={16} className="mr-3 text-brand-lime" /> 1 x 60min Session per week</li>
                <li className="flex items-center"><Check size={16} className="mr-3 text-brand-lime" /> Full App Programming (3-4 days)</li>
                <li className="flex items-center"><Check size={16} className="mr-3 text-brand-lime" /> Nutritional Guidelines</li>
                <li className="flex items-center"><Check size={16} className="mr-3 text-brand-lime" /> Quarterly Review</li>
              </ul>
              <Link to="/contact">
                <Button variant="secondary" fullWidth>Enquire Now</Button>
              </Link>
            </div>

            <div className="border border-brand-light bg-brand-primary/50 p-8 rounded-2xl relative">
              <div className="absolute top-0 right-0 bg-brand-lime text-brand-primary text-xs font-bold px-3 py-1 uppercase tracking-wider transform translate-x-2 -translate-y-2 rounded-bl-lg">Most Popular</div>
              <h3 className="text-xl font-bold mb-2">Hybrid Coaching</h3>
              <p className="text-gray-300 text-sm mb-6">Accelerated results and higher accountability.</p>
              <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                <li className="flex items-center"><Check size={16} className="mr-3 text-brand-lime" /> 2 x 60min Sessions per week</li>
                <li className="flex items-center"><Check size={16} className="mr-3 text-brand-lime" /> Full App Programming</li>
                <li className="flex items-center"><Check size={16} className="mr-3 text-brand-lime" /> Advanced Nutrition Coaching</li>
                <li className="flex items-center"><Check size={16} className="mr-3 text-brand-lime" /> 24/7 Support Access</li>
              </ul>
              <Link to="/contact">
                <Button variant="primary" className="bg-brand-lime text-brand-primary hover:bg-white" fullWidth>Enquire Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};