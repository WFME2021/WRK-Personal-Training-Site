
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
          "image": heroImage,
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
        
        {/* Hero Section */}
        <section className="relative px-4 pt-12 pb-12 md:px-8">
          <div className="max-w-[1800px] mx-auto">
            
            {/* Top Text - Massive Typography */}
            <div className="flex flex-col items-center justify-center pt-8 mb-16 md:mb-20">
              <h3 className="font-display text-xl md:text-3xl font-bold uppercase tracking-widest text-center text-accent mb-4">
                Build Your Capacity
              </h3>
              <h1 className="font-display text-[10vw] leading-[0.9] font-bold uppercase tracking-tighter text-center text-text-primary max-w-6xl">
                Christchurch Personal Trainer
              </h1>
              <div className="mt-12 flex flex-col items-center">
                <p className="text-lg md:text-2xl text-text-primary font-medium max-w-3xl text-center leading-relaxed">
                  Whether you run a boardroom or run a household, people rely on you. <br className="hidden md:block"/>
                  We build strength, fat loss, and body recomposition for busy professionals and parents — without burning you into the ground.
                </p>
                <p className="text-xs md:text-sm text-text-secondary mt-6 max-w-2xl text-center font-medium">
                  Based at Get Me Fitter, 12 Show Place, Addington, Christchurch. Clients from Fendalton, Merivale, Ilam, Sumner, Cashmere, Barrington, Halswell.
                </p>
                <div className="w-12 h-1 bg-accent mt-6"></div>
              </div>
            </div>

            {/* Main Visual Block - Rounded Corners */}
            <div className="relative w-full h-[60vh] md:h-[85vh] rounded-[3rem] md:rounded-[4rem] overflow-hidden group shadow-2xl border border-border">
              <img 
                src={heroImage} 
                alt="Personal training session Christchurch" 
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              
              {/* Overlay Text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center mix-blend-overlay">
                <span className="font-display text-[20vw] font-bold text-white opacity-20 uppercase tracking-tighter leading-none pointer-events-none">
                  Show<br/>Up
                </span>
              </div>
              
              {/* Floating CTA */}
              <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 flex flex-col md:flex-row gap-4">
                <Link to="/assessment">
                  <Button variant="primary" className="px-10 py-5 text-sm md:text-base flex items-center gap-2">
                    Start Diagnostic <ArrowRight size={20} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="backdrop-blur-md bg-white/10 border-white/50 text-white hover:bg-white hover:text-black px-10 py-5 text-sm md:text-base">
                    Apply to Work Together
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-8 text-center flex justify-center items-center gap-4">
               <span className="h-px w-12 bg-border"></span>
               <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-secondary">The Right Work, Done Well.</p>
               <span className="h-px w-12 bg-border"></span>
            </div>
          </div>
        </section>

        {/* Philosophy Section - Secondary BG */}
        <section className="py-24 px-4 md:px-8 bg-secondary border-t border-border">
          <div className="max-w-6xl mx-auto">
             <div className="grid md:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="font-display text-6xl md:text-8xl uppercase font-bold text-text-primary mb-8 leading-[0.9] tracking-tighter">
                    The Anchor <br/><span className="text-text-secondary">Of Your Environment.</span>
                  </h2>
                  <p className="text-xl text-text-primary leading-relaxed mb-8">
                    People rely on you — your team, your family, and your business. Your energy, mood, and decision-making are downstream of your body. We build the physical resilience to carry the load without breaking.
                  </p>
                  <Link to="/philosophy" className="text-accent font-bold uppercase tracking-widest text-sm border-b-2 border-accent pb-1 hover:text-text-primary hover:border-text-primary transition-colors">
                    Read Our Philosophy
                  </Link>
                </div>
                <div className="space-y-6">
                   {[
                     { title: "Performance for the Long Haul", desc: "We are not interested in a 6-week shred. We are interested in the next decade of high performance." },
                     { title: "Manage Energy, Not Just Time", desc: "You can't add hours to the day. But you can double the energy you bring to the hours you have." },
                     { title: "The Right Work, Done Well", desc: "When you have physical capacity, you have options. When you don't, you have constraints." }
                   ].map((item, i) => (
                     <div key={i} className="bg-primary p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300 border border-border hover:border-accent/50">
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

        {/* Who I work best with - Inverse Scheme */}
        <section className="py-32 px-4 md:px-8 bg-text-primary text-primary">
          <div className="max-w-5xl mx-auto">
             <div className="text-center mb-20">
               <h2 className="font-display text-5xl md:text-7xl uppercase font-bold mb-8 tracking-tighter">For Busy Professionals and Parents</h2>
               <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
               <p className="text-2xl text-primary/80 leading-relaxed max-w-3xl mx-auto font-light">
                 Time is your most expensive asset. You don't need a cheerleader — you need a strategist.
               </p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8 text-left">
               <div className="bg-primary/10 p-10 rounded-3xl border border-primary/20 hover:border-accent transition-colors duration-300">
                 <h3 className="font-display text-3xl text-primary mb-4 uppercase">Reliability</h3>
                 <p className="text-primary/60">You need to be harder to break. Training that builds you up, rather than beating you down.</p>
               </div>
               <div className="bg-primary/10 p-10 rounded-3xl border border-primary/20 hover:border-accent transition-colors duration-300">
                 <h3 className="font-display text-3xl text-primary mb-4 uppercase">Efficiency</h3>
                 <p className="text-primary/60">You want the minimum effective dose. High ROI, zero wasted time, maximum output.</p>
               </div>
               <div className="bg-primary/10 p-10 rounded-3xl border border-primary/20 hover:border-accent transition-colors duration-300">
                 <h3 className="font-display text-3xl text-primary mb-4 uppercase">Autonomy</h3>
                 <p className="text-primary/60">You want a system you can rely on, even when life gets chaotic and the schedule breaks.</p>
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
                   <img src={ptImage} alt="Hybrid Personal Training" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-secondary text-text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Christchurch</div>
                   <div className="absolute bottom-8 left-8 bg-secondary/80 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-4xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">Hybrid Personal Training — Christchurch</h3>
                <p className="text-text-secondary font-medium max-w-lg">In-person precision at Get Me Fitter + simple structure between sessions. Built for strength, fat loss and recomposition.</p>
              </Link>

              {/* Service Card 2: Online */}
              <Link to="/online-coaching" className="group block lg:mt-24">
                <div className="h-[500px] rounded-[3rem] overflow-hidden mb-6 relative border border-border">
                   <img src={onlineImage} alt="Online Coaching" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-secondary text-text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">NZ Wide</div>
                   <div className="absolute bottom-8 left-8 bg-secondary/80 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-4xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">Online Coaching — NZ-Wide</h3>
                <p className="text-text-secondary font-medium max-w-lg">Training + nutrition accountability for a chaotic schedule. Anywhere in New Zealand.</p>
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
                <p className="text-text-secondary font-medium max-w-lg">A self-guided execution system to rebuild momentum when you’ve drifted.</p>
              </Link>

              {/* Service Card 4: Corporate Wellness */}
              <Link to="/corporate-wellness" className="group block lg:mt-24">
                <div className="h-[500px] rounded-[3rem] overflow-hidden mb-6 relative border border-border">
                   {corporateImage ? (
                     <img src={corporateImage} alt="Corporate Wellness" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
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
                <p className="text-text-secondary font-medium max-w-lg">High-ROI training and wellbeing strategies for resilient teams and performance culture.</p>
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
