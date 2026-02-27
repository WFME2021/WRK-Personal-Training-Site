
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '../components/Button';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';
import { FAQ } from '../components/FAQ';

export const Home: React.FC = () => {
  const { pageContent } = useContent();
  const { heroImage, ptImage, onlineImage, corporateImage } = pageContent.home;

  const faqs = [
    {
      question: "How often do I need to train?",
      answer: "Most clients get strong results on 2–4 sessions per week, depending on your schedule, stress, and goals. We choose the minimum effective dose, then earn the right to add more."
    },
    {
      question: "Do you provide meal plans?",
      answer: "Not generic PDFs. You’ll get a system: targets, structure, and simple rules that work in the real world — especially for parents, busy professionals, and people who travel."
    },
    {
      question: "Can you help with injuries?",
      answer: "Yes — if you’re cleared to train, we build around limitations and progress safely. If something is outside scope, I’ll point you to the right physio/specialist and we coordinate."
    },
    {
      question: "What if I travel frequently?",
      answer: "That’s normal. Your plan is built to survive disruption — and if you’re away a lot, we shift you into a hybrid/online structure without losing momentum."
    },
    {
      question: "What is the 2-minute diagnostic?",
      answer: "It’s a quick filter to find the best next step based on your schedule, training history, and goals — so you don’t waste weeks guessing."
    },
    {
      question: "Do you offer online coaching?",
      answer: "Yes. If you’re not in Christchurch, our Online Coaching service covers all of NZ with the same level of programming and accountability."
    },
    {
      question: "Where are you located?",
      answer: "We are based at Get Me Fitter, 12 Show Place, Addington. It’s a private facility with free parking."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Christchurch Personal Trainer | WRK Personal Training (Addington)"
        description="1-on-1 personal training in Addington, Christchurch at Get Me Fitter. Strength, fat loss and body recomposition for busy professionals and parents. Start with a diagnostic or assessment."
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "WRK Personal Training",
          "image": heroImage.url,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Show Place",
            "addressLocality": "Addington",
            "addressRegion": "Christchurch",
            "postalCode": "8024",
            "addressCountry": "NZ"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -43.543,
            "longitude": 172.605
          },
          "url": "https://wrkpersonaltraining.co.nz",
          "telephone": "+64210000000",
          "priceRange": "$$"
        }}
      />

      <div className="flex flex-col w-full overflow-x-hidden bg-primary transition-colors duration-300">
        
        {/* Hero Section - Full Width Banner */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage.url} 
              alt={heroImage.alt} 
              className="w-full h-full object-cover grayscale contrast-125"
            />
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-[1800px] mx-auto px-4 md:px-8 text-center flex flex-col items-center pt-20">
              <h3 className="font-display text-xl md:text-3xl font-bold uppercase tracking-widest text-accent mb-6">
                Train Smarter. Play Harder.
              </h3>
              <h1 className="font-display text-[10vw] leading-[0.9] font-bold uppercase tracking-tighter text-white max-w-6xl mb-8">
                Christchurch Personal Trainer
              </h1>
              
              <div className="max-w-3xl mx-auto space-y-8">
                <p className="text-lg md:text-2xl text-white/90 font-medium leading-relaxed">
                  Whether you run a boardroom or run a household, people rely on you. <br className="hidden md:block"/>
                  We build the physical capacity to dominate the work week and own the weekend.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
                  <Link to="/assessment">
                    <Button variant="primary" className="px-10 py-5 text-lg shadow-xl hover:scale-105 transition-transform flex items-center">
                      Start Diagnostic <ArrowRight size={20} className="ml-2" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="backdrop-blur-md bg-white/10 border-white/50 text-white hover:bg-white hover:text-black px-10 py-5 text-lg">
                      Apply to Work Together
                    </Button>
                  </Link>
                </div>

                <p className="text-xs md:text-sm text-white/60 mt-8 font-medium">
                  Based at Get Me Fitter, 12 Show Place, Addington, Christchurch.
                </p>
              </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50 hidden md:block">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
          </div>
        </section>

        {/* THE WHY - Lifestyle Grid */}
        <section className="py-24 px-4 md:px-8 bg-secondary border-t border-border">
          <div className="max-w-[1600px] mx-auto">
             <div className="text-center mb-16">
               <h2 className="font-display text-4xl md:text-6xl uppercase font-bold text-text-primary mb-6 tracking-tighter">
                 From The Boardroom <br/><span className="text-accent">To The Weekend.</span>
               </h2>
               <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                 This isn't about looking good in a mirror (though that happens). It's about having the engine to say "yes" to the adventure.
               </p>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {pageContent.home.lifestyleImages?.map((img, i) => (
                 <div key={i} className="aspect-[3/4] rounded-3xl overflow-hidden relative group">
                   <img src={img.url} alt={img.alt} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* Philosophy Section - Secondary BG */}
        <section className="py-24 px-4 md:px-8 bg-primary border-t border-border">
          <div className="max-w-6xl mx-auto">
             <div className="grid md:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="font-display text-6xl md:text-8xl uppercase font-bold text-text-primary mb-8 leading-[0.9] tracking-tighter">
                    Fuel The <br/><span className="text-text-secondary">Climb.</span>
                  </h2>
                  <p className="text-xl text-text-primary leading-relaxed mb-8">
                    Your fitness is the battery that powers everything else. The same focus that closes the deal fuels the climb. We build the resilience to carry the load of your career and still have the energy to chase the horizon.
                  </p>
                  <Link to="/philosophy" className="text-accent font-bold uppercase tracking-widest text-sm border-b-2 border-accent pb-1 hover:text-text-primary hover:border-text-primary transition-colors">
                    Read Our Philosophy
                  </Link>
                </div>
                <div className="space-y-6">
                   {[
                     { title: "Capacity is Currency", desc: "You can't add hours to the day, but you can double the energy you bring to them. Earn the right to play harder." },
                     { title: "Resilience for the Long Haul", desc: "We don't train for a 6-week shred. We train for a lifetime of high performance—in the boardroom and on the mountain." },
                     { title: "The Right Work, Done Well", desc: "Precision in the gym grants you freedom outside of it. When you are capable, the world opens up." }
                   ].map((item, i) => (
                     <div key={i} className="bg-secondary p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300 border border-border hover:border-accent/50">
                       <h3 className="font-bold text-xl text-text-primary mb-2 flex items-center">
                         <span className="w-2 h-2 bg-accent rounded-full mr-4"></span> 
                         {item.title}
                       </h3>
                       <p className="text-text-secondary ml-6">{item.desc}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* THE HOW - App Showcase */}
        <section className="py-24 px-4 md:px-8 bg-text-primary text-primary overflow-hidden">
          <div className="max-w-[1600px] mx-auto">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div>
                 <h2 className="font-display text-5xl md:text-7xl uppercase font-bold mb-8 tracking-tighter text-primary">The System</h2>
                 <div className="w-24 h-1 bg-accent mb-8"></div>
                 <p className="text-2xl text-primary/80 leading-relaxed max-w-xl font-light mb-12">
                   We don't guess. We track. Every rep, every macro, every win is captured in the WRK app. This is professional-grade accountability in your pocket.
                 </p>
                 <ul className="space-y-6 mb-12">
                   {[
                     "Structured Training Programs",
                     "Video Demonstrations",
                     "Nutrition & Macro Tracking",
                     "Progress History & PRs"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center text-lg text-primary/70">
                       <div className="w-2 h-2 bg-accent rounded-full mr-4"></div>
                       {item}
                     </li>
                   ))}
                 </ul>
                 <Link to="/online-coaching">
                   <Button variant="primary" className="bg-accent text-white hover:bg-white hover:text-primary border-transparent">
                     See How It Works
                   </Button>
                 </Link>
               </div>
               
               {/* App Screenshots Grid */}
               <div className="grid grid-cols-2 gap-4 rotate-3 hover:rotate-0 transition-transform duration-500">
                 {pageContent.home.appImages?.map((img, i) => (
                   <div key={i} className={`rounded-3xl overflow-hidden border-4 border-primary/10 shadow-2xl ${i % 2 === 0 ? 'translate-y-8' : '-translate-y-8'}`}>
                     <img src={img.url} alt={img.alt} className="w-full h-auto" />
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-4 md:px-8 bg-primary">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex justify-between items-end mb-16 border-b border-border pb-8">
              <h2 className="font-display text-6xl md:text-9xl uppercase font-bold tracking-tighter leading-none text-text-primary">
                Training — <br/><span className="text-accent">Choose Your Path.</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Service Card 1: Hybrid */}
              <Link to="/personal-training" className="group block">
                <div className="h-[500px] rounded-[3rem] overflow-hidden mb-6 relative border border-border">
                   <img src={ptImage.url} alt={ptImage.alt} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-secondary text-text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Christchurch</div>
                   <div className="absolute bottom-8 left-8 bg-secondary/80 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-4xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">Hybrid Personal Training — Christchurch</h3>
                <p className="text-text-secondary font-medium max-w-lg">In-person precision to build the engine. App-based structure to keep it running. The ultimate setup for the Christchurch professional.</p>
              </Link>

              {/* Service Card 2: Online */}
              <Link to="/online-coaching" className="group block lg:mt-24">
                <div className="h-[500px] rounded-[3rem] overflow-hidden mb-6 relative border border-border">
                   <img src={onlineImage.url} alt={onlineImage.alt} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-secondary text-text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">NZ Wide</div>
                   <div className="absolute bottom-8 left-8 bg-secondary/80 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-4xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">Online Coaching — NZ-Wide</h3>
                <p className="text-text-secondary font-medium max-w-lg">Reliability anywhere. Whether you're in a hotel room or a home gym, your training adapts to your life.</p>
              </Link>

               {/* Service Card 3: 42 Day Reset */}
              <Link to="/42-day-reset" className="group block">
                <div className="h-[500px] rounded-[3rem] overflow-hidden mb-6 relative bg-secondary flex items-center justify-center border border-border">
                   <h4 className="font-display text-[12rem] font-bold text-text-primary opacity-5 leading-none">42</h4>
                   <div className="absolute top-8 right-8 bg-accent text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">NZ Wide</div>
                   <div className="absolute bottom-8 left-8 bg-primary/10 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-4xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">42-Day Reset Challenge — NZ-Wide</h3>
                <p className="text-text-secondary font-medium max-w-lg">The circuit breaker. A self-guided system to clear the fog, rebuild momentum, and reclaim your energy.</p>
              </Link>

              {/* Service Card 4: Corporate Wellness */}
              <Link to="/corporate-wellness" className="group block lg:mt-24">
                <div className="h-[500px] rounded-[3rem] overflow-hidden mb-6 relative border border-border">
                   {corporateImage.url ? (
                     <img src={corporateImage.url} alt={corporateImage.alt} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   ) : (
                     <div className="w-full h-full bg-secondary"></div>
                   )}
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-secondary text-text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">NZ Wide</div>
                   <div className="absolute bottom-8 left-8 bg-secondary/80 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-4xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">Corporate Wellness — NZ-Wide</h3>
                <p className="text-text-secondary font-medium max-w-lg">High-performance culture. Build a team that has the physical capacity to execute at the highest level.</p>
              </Link>

            </div>
          </div>
        </section>

        {/* Expectation Grid */}
        <section className="py-24 px-4 md:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto">
             <h2 className="font-display text-5xl font-bold text-text-primary mb-16 text-center uppercase tracking-tighter">What To Expect</h2>
             <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-[2rem] overflow-hidden">
               {[
                 { title: "Respect for Reality", desc: "Training that fits your schedule, not a fantasy one." },
                 { title: "Calm Clarity", desc: "A plan that removes decision fatigue. You execute; we handle the rest." },
                 { title: "Tangible Progress", desc: "Strength numbers up, energy stable, recovery improving." },
                 { title: "Feel Better", desc: "You leave sessions capable, not cooked." }
               ].map((item, i) => (
                 <div key={i} className="bg-primary p-12 hover:bg-secondary transition-colors">
                    <h3 className="font-display text-2xl font-bold uppercase mb-4 text-text-primary">{item.title}</h3>
                    <p className="text-text-secondary">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* Location Block */}
        <section className="py-24 px-4 md:px-8 bg-primary border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-5xl font-bold text-text-primary mb-8 uppercase tracking-tighter">
              Christchurch Personal Training Location
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              WRK Personal Training operates from <strong>Get Me Fitter</strong> — 12 Show Place, Addington, Christchurch.
            </p>
            <p className="text-text-secondary mb-12">
              Most clients travel from Addington, Fendalton, Merivale, Ilam, Sumner, Cashmere, Barrington and Halswell.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg">Book / Enquire</Button>
            </Link>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-4 md:px-8 bg-primary border-t border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-5xl font-bold text-text-primary mb-16 text-center uppercase tracking-tighter">
              Client Feedback
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Finally a program that fits my 60-hour work week. Efficient, effective, and no fluff.",
                  author: "James T.",
                  role: "CEO"
                },
                {
                  quote: "I lost 10kg without giving up family dinners. Sustainable results that actually stick.",
                  author: "Sarah L.",
                  role: "Director"
                },
                {
                  quote: "Hayden understands the demands of a high-pressure job. The training supports my life, it doesn't compete with it.",
                  author: "Mark R.",
                  role: "Entrepreneur"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-secondary p-10 rounded-[2rem] border border-border hover:border-accent transition-colors duration-300">
                  <div className="text-accent mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="inline-block text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-lg text-text-primary mb-8 font-medium leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-text-primary uppercase tracking-wider text-sm">{testimonial.author}</p>
                    <p className="text-text-secondary text-xs uppercase tracking-widest mt-1">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQ items={faqs} title="Common Questions" />

        {/* CTA */}
        <section className="bg-primary py-32 px-4 md:px-8 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full opacity-5 blur-3xl pointer-events-none"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="font-display text-6xl md:text-8xl uppercase font-bold text-text-primary mb-8 tracking-tighter">
              Start Now
            </h2>
            <p className="text-xl font-medium text-text-secondary mb-12">
              Take the diagnostic and I’ll point you to the best next step — based on reality, not hype.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link to="/assessment">
                <Button size="lg" className="px-12 py-6 text-xl shadow-2xl">Take Diagnostic</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="px-12 py-6 text-xl">Apply to Work Together</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
