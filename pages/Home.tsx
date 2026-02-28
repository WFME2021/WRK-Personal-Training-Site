
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
      question: "Do I need to be fit already?",
      answer: "No. We meet you where you’re at and build from there."
    },
    {
      question: "What if I’ve got injuries or I’m postpartum / in menopause?",
      answer: "That’s common here. We train around it, improve what we can, and progress intelligently."
    },
    {
      question: "Do you do meal plans?",
      answer: "Not restrictive ones. Nutrition is protein-forward and flexible, tailored to your lifestyle and preferences."
    },
    {
      question: "Where are you based?",
      answer: "In-person is at Get Me Fitter Gym, Christchurch. Online and the 42-Day Reset are available worldwide (English-speaking)."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Christchurch Personal Trainer | WRK Personal Training"
        description="Coaching for busy professionals (often parents) who want fat loss, less pain, and consistency—without gym dominance or diet jail."
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
              <h1 className="font-display text-[10vw] leading-[0.9] font-bold uppercase tracking-tighter text-white max-w-6xl mb-8">
                Train Smarter. <br/><span className="text-accent">Play Harder.</span>
              </h1>
              
              <div className="max-w-3xl mx-auto space-y-8">
                <p className="text-lg md:text-2xl text-white/90 font-medium leading-relaxed">
                  Coaching for busy professionals (often parents) who want <strong>fat loss, less pain, and consistency</strong>—without gym dominance or diet jail.
                </p>
                
                <p className="text-base md:text-lg text-white/80 font-light leading-relaxed">
                  You don’t need balls-to-the-wall intensity. You need a plan that fits your life, respects your body, and builds real-world capacity.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
                  <Link to="/contact">
                    <Button variant="primary" className="px-10 py-5 text-lg shadow-xl hover:scale-105 transition-transform flex items-center">
                      Book a consult <ArrowRight size={20} className="ml-2" />
                    </Button>
                  </Link>
                  <Link to="/online-coaching">
                    <Button variant="outline" className="backdrop-blur-md bg-white/10 border-white/50 text-white hover:bg-white hover:text-black px-10 py-5 text-lg">
                      Explore Online Coaching
                    </Button>
                  </Link>
                </div>

                {/* Trust / Quick Proof Bar */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8 text-white/70 text-sm font-medium uppercase tracking-wider">
                  <span className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>Pain-aware training</span>
                  <span className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>Protein-forward nutrition</span>
                  <span className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>Built around time + stress</span>
                </div>
              </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50 hidden md:block">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
          </div>
        </section>

        {/* The Point of Training */}
        <section className="py-24 px-4 md:px-8 bg-secondary border-t border-border">
          <div className="max-w-[1000px] mx-auto text-center">
             <h2 className="font-display text-4xl md:text-6xl uppercase font-bold text-text-primary mb-8 tracking-tighter">
               The gym isn’t the <span className="text-accent">main event.</span>
             </h2>
             <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-8">
               The purpose of training is simple: <strong>get you fitter so you can do more of the things you love</strong>—and show up better for the people who matter.
             </p>
             <p className="text-lg text-text-secondary font-light">
               Whether that’s surfing, hiking, biking, golf, ocean swims, chasing kids, or just having energy after work… <br/>
               <strong>fitness is the tool. life is the outcome.</strong>
             </p>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-24 px-4 md:px-8 bg-primary border-t border-border">
          <div className="max-w-6xl mx-auto">
             <div className="grid md:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="font-display text-5xl md:text-7xl uppercase font-bold text-text-primary mb-8 leading-[0.9] tracking-tighter">
                    Who This <br/><span className="text-text-secondary">Is For.</span>
                  </h2>
                  <p className="text-xl text-text-primary leading-relaxed mb-8">
                    You’re in the right place if you’re:
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Busy, time-poor, and sick of starting over",
                      "Carrying stress and feeling it in your body",
                      "Dealing with aches, pains, or niggles (yes, we’ll ask you that a lot)",
                      "Wanting fat loss + strength without your routine taking over your diary",
                      "Wanting a nutrition approach that works in the real world (friends, dinners, weekends)"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-lg text-text-secondary">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-4 mt-2.5 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg text-text-secondary font-medium italic border-l-4 border-accent pl-6 py-2">
                    If you’re looking for a 6-day “grindset” plan and a tiny food list… not here to shag spiders.
                  </p>
                </div>
                
                {/* Results You Can Keep */}
                <div className="bg-secondary p-10 rounded-[2.5rem] border border-border">
                   <h3 className="font-display text-3xl font-bold uppercase text-text-primary mb-6">Results you can keep</h3>
                   <p className="text-text-secondary mb-8">Most clients come to me for <strong>fat loss</strong>, but stay for the bigger wins:</p>
                   <div className="space-y-6">
                     {[
                       "Less pain, fewer flare-ups",
                       "Consistency without burnout",
                       "More energy and confidence",
                       "Strength and fitness that carries over to real life"
                     ].map((item, i) => (
                       <div key={i} className="flex items-center">
                         <div className="w-8 h-8 rounded-full bg-primary border border-border flex items-center justify-center mr-4 shrink-0 text-accent font-bold">
                           {i + 1}
                         </div>
                         <span className="text-text-primary font-medium">{item}</span>
                       </div>
                     ))}
                   </div>
                   <div className="mt-10 pt-8 border-t border-border">
                     <p className="text-text-secondary text-sm">
                       No benefit in stressing an already jacked-up system. We’ll build you up properly.
                     </p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-4 md:px-8 bg-text-primary text-primary overflow-hidden">
          <div className="max-w-[1600px] mx-auto">
             <div className="text-center mb-16">
               <h2 className="font-display text-5xl md:text-7xl uppercase font-bold mb-6 tracking-tighter text-primary">How It Works</h2>
               <p className="text-2xl text-primary/60 font-light">Assess. Address. Customise.</p>
             </div>

             <div className="grid lg:grid-cols-3 gap-8">
               {[
                 { 
                   step: "Assess", 
                   desc: "We start with where you’re at—time, injuries, stress, capabilities, goals. (“Any aches, pains or niggles?”)" 
                 },
                 { 
                   step: "Address", 
                   desc: "We fix the stuff that’s holding you back: posture patterns, weak links, recovery gaps, pacing." 
                 },
                 { 
                   step: "Customise", 
                   desc: "A plan that fits your week—sessions + homework + nutrition guidance—progressed in a way your body can actually handle." 
                 }
               ].map((item, i) => (
                 <div key={i} className="bg-primary/5 p-10 rounded-[2rem] border border-primary/10 hover:bg-primary/10 transition-colors">
                   <h3 className="font-display text-3xl font-bold uppercase mb-4 text-accent">{item.step}</h3>
                   <p className="text-lg text-primary/80 leading-relaxed">{item.desc}</p>
                 </div>
               ))}
             </div>

             <div className="mt-16 text-center max-w-3xl mx-auto">
               <p className="text-xl text-primary/90 font-medium mb-8">
                 No pain no gain? More accurately: <strong>no appropriate level of discomfort, no progress.</strong> <br/>
                 There’s a difference between productive work and dumb punishment.
               </p>
               <Link to="/contact">
                 <Button variant="primary" className="bg-accent text-white hover:bg-white hover:text-primary border-transparent px-12 py-4 text-lg">
                   Book a consult
                 </Button>
               </Link>
             </div>
          </div>
        </section>

        {/* Ways to Work Together (Services) */}
        <section id="services" className="py-24 px-4 md:px-8 bg-primary">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex justify-between items-end mb-16 border-b border-border pb-8">
              <h2 className="font-display text-6xl md:text-8xl uppercase font-bold tracking-tighter leading-none text-text-primary">
                Ways to <br/><span className="text-accent">Work Together.</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Service Card 1: 1:1 In-Person */}
              <Link to="/personal-training" className="group block">
                <div className="h-[400px] rounded-[3rem] overflow-hidden mb-6 relative border border-border">
                   <img src={ptImage.url} alt={ptImage.alt} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-secondary text-text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Christchurch</div>
                   <div className="absolute bottom-8 left-8 bg-secondary/80 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-3xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">1:1 In-Person Training</h3>
                <p className="text-text-secondary font-medium max-w-lg mb-4">Ongoing coaching at Get Me Fitter Gym—sessions, homework, and nutrition guidance.</p>
                <p className="text-sm text-text-secondary uppercase tracking-wider font-bold">Best for: accountability, injury-aware progress, fastest clarity.</p>
                <span className="inline-block mt-4 text-accent font-bold uppercase text-sm border-b border-accent">Start 1:1 training</span>
              </Link>

              {/* Service Card 2: Online */}
              <Link to="/online-coaching" className="group block lg:mt-24">
                <div className="h-[400px] rounded-[3rem] overflow-hidden mb-6 relative border border-border">
                   <img src={onlineImage.url} alt={onlineImage.alt} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-secondary text-text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">12-Week Min</div>
                   <div className="absolute bottom-8 left-8 bg-secondary/80 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-3xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">Online Personal Training</h3>
                <p className="text-text-secondary font-medium max-w-lg mb-4">App-based programming + check-ins + nutrition guidance.</p>
                <p className="text-sm text-text-secondary uppercase tracking-wider font-bold">Best for: structure, flexibility, and results without being tied to a location.</p>
                <span className="inline-block mt-4 text-accent font-bold uppercase text-sm border-b border-accent">Start online coaching</span>
              </Link>

               {/* Service Card 3: Corporate */}
              <Link to="/corporate-wellness" className="group block">
                <div className="h-[400px] rounded-[3rem] overflow-hidden mb-6 relative border border-border">
                   {corporateImage.url ? (
                     <img src={corporateImage.url} alt={corporateImage.alt} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                   ) : (
                     <div className="w-full h-full bg-secondary"></div>
                   )}
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-8 right-8 bg-secondary text-text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">12 Months</div>
                   <div className="absolute bottom-8 left-8 bg-secondary/80 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-3xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">Corporate Wellness</h3>
                <p className="text-text-secondary font-medium max-w-lg mb-4">A personal trainer in every employee’s pocket. App-led programs that support fitness, posture, stress, and consistency.</p>
                <span className="inline-block mt-4 text-accent font-bold uppercase text-sm border-b border-accent">Corporate enquiry</span>
              </Link>

              {/* Service Card 4: 42 Day Reset */}
              <Link to="/42-day-reset" className="group block lg:mt-24">
                <div className="h-[400px] rounded-[3rem] overflow-hidden mb-6 relative bg-secondary flex items-center justify-center border border-border">
                   <h4 className="font-display text-[12rem] font-bold text-text-primary opacity-5 leading-none">42</h4>
                   <div className="absolute top-8 right-8 bg-accent text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Self-Led</div>
                   <div className="absolute bottom-8 left-8 bg-primary/10 backdrop-blur-md p-4 rounded-full border border-border group-hover:bg-accent group-hover:border-accent transition-colors">
                     <ArrowUpRight className="text-text-primary group-hover:text-white" size={32} />
                   </div>
                </div>
                <h3 className="font-display text-3xl uppercase font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">42-Day Reset</h3>
                <p className="text-text-secondary font-medium max-w-lg mb-4">A simple, structured reset with training + protein-forward nutrition guidance + automated support in the app.</p>
                <p className="text-sm text-text-secondary uppercase tracking-wider font-bold">Best for: momentum and a clean restart without overthinking.</p>
                <span className="inline-block mt-4 text-accent font-bold uppercase text-sm border-b border-accent">Start the 42-Day Reset</span>
              </Link>

            </div>
          </div>
        </section>

        {/* Why this approach works */}
        <section className="py-24 px-4 md:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto">
             <h2 className="font-display text-5xl font-bold text-text-primary mb-8 text-center uppercase tracking-tighter">Why this approach works</h2>
             <p className="text-center text-xl text-text-secondary mb-16">Because it’s built for real people with real lives:</p>
             
             <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-[2rem] overflow-hidden">
               {[
                 "Time-efficient training",
                 "Pain-aware progressions",
                 "Flexible nutrition structure",
                 "Systems that survive stress"
               ].map((item, i) => (
                 <div key={i} className="bg-primary p-12 hover:bg-secondary transition-colors flex items-center justify-center text-center">
                    <h3 className="font-display text-2xl font-bold uppercase text-text-primary">{item}</h3>
                 </div>
               ))}
             </div>
             <div className="mt-12 text-center">
               <p className="text-lg text-text-secondary font-medium">
                 You don’t need motivation. You need a plan that still works when life gets messy.
               </p>
             </div>
          </div>
        </section>

        {/* Testimonials Section - Keeping existing as per instructions */}
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

        {/* Final CTA */}
        <section className="bg-primary py-32 px-4 md:px-8 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full opacity-5 blur-3xl pointer-events-none"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="font-display text-6xl md:text-8xl uppercase font-bold text-text-primary mb-8 tracking-tighter">
              Ready to train <br/>for real life?
            </h2>
            <p className="text-xl font-medium text-text-secondary mb-12">
              Book a consult and we’ll map out a plan that fits your week—and gets you moving toward the good stuff.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="px-12 py-6 text-xl shadow-2xl">Book a consult</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
