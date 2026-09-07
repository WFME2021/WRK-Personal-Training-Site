const fs = require('fs');

const content = `import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { ArrowRight, Check, MapPin, Dumbbell, Shield, Activity, Plus, Minus, Calendar } from 'lucide-react';

export const PersonalTraining: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [phaseSelection, setPhaseSelection] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "Where in Addington is the studio located?",
      a: "We train out of 12 Show Place in Addington, Christchurch. It is a quiet business park location with easy parking right outside, just minutes from Moorhouse Ave and the Southern Motorway."
    },
    {
      q: "I'm completely new to lifting weights. Is this suitable for beginners?",
      a: "Absolutely. Most of our clients are not gym veterans. Because the studio is private, you learn the foundations of movement and lifting mechanics in a calm, zero-judgment space at your own pace."
    },
    {
      q: "How does in-person coaching work alongside GLP-1 medication?",
      a: "We monitor your weekly energy, nausea patterns, and appetite changes closely. On days you feel lower energy, we modify training volume to focus on movement quality; on high-energy days, we progressively challenge your strength."
    },
    {
      q: "What happens during the initial consultation?",
      a: "We meet at the Addington studio for a relaxed, 20-minute chat. We discuss your background, health goals, take a quick look at movement mechanics, and decide together if the studio setup is the right fit for you."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndFitnessBusiness",
    "name": "WRK Personal Training",
    "image": "https://www.wrkpersonaltraining.co.nz/logo.png",
    "url": "https://www.wrkpersonaltraining.co.nz/personal-training",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Show Place",
      "addressLocality": "Addington",
      "addressRegion": "Canterbury",
      "postalCode": "8024",
      "addressCountry": "NZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -43.5434,
      "longitude": 172.6053
    },
    "areaServed": [
      "Christchurch",
      "Addington",
      "Riccarton",
      "Spreydon",
      "Halswell",
      "Cashmere"
    ],
    "priceRange": "$$"
  };

  return (
    <>
      <SeoHead 
        title="Personal Trainer Christchurch | Semi-Private Coaching Addington | WRK"
        description="Semi-Private 1-on-1 personal training in Addington, Christchurch. Evidence-based coaching, zero gym crowds, and specialist GLP-1 muscle preservation. Book a consultation."
        schema={schema}
      />
      <div className="flex flex-col w-full overflow-x-hidden bg-[#FAFAF9] pb-24 text-[#2C3539] selection:bg-[#8A9A86] selection:text-white">
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[85svh] w-full flex flex-col justify-center items-center py-32 px-5 text-center">
          <div className="absolute inset-0 z-0 bg-[#FAFAF9]">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-200/50 via-[#FAFAF9] to-[#FAFAF9]"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-[900px] mx-auto mt-16 md:mt-24">
            <span className="inline-flex items-center font-sans font-semibold text-xs uppercase tracking-widest text-[#5C6B56] bg-[#8A9A86]/10 border border-[#8A9A86]/20 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
              <MapPin className="w-3.5 h-3.5 mr-2" /> 12 Show Place, Addington, Christchurch
            </span>
            
            <h1 className="font-serif text-[42px] sm:text-[56px] md:text-[72px] lg:text-[84px] leading-[1.05] tracking-tight mb-8">
              1-on-1 Personal Training<br className="hidden md:block"/>
              <span className="text-[#8A9A86] italic font-light">in Christchurch.</span>
            </h1>
            
            <p className="font-sans text-[18px] md:text-[22px] text-neutral-600 font-medium mx-auto mb-12 leading-relaxed max-w-[700px]">
              Skip the chaotic commercial gyms. Train in a focused, private Addington studio with evidence-based coaching built around your strength, sustainable body composition, and long-term health.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" fullWidth className="group bg-[#2C3539] hover:bg-neutral-800 text-white border-none py-6 px-10 text-lg">
                  Book a Free Consultation <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#location" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" fullWidth className="py-6 px-10 text-lg border-neutral-300 text-[#2C3539] hover:bg-neutral-100">
                  View Location & Studio Details
                </Button>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-neutral-500 font-medium border-t border-neutral-200 pt-10">
              <div className="flex items-center"><Check className="w-4 h-4 text-[#8A9A86] mr-2" /> Semi-Private Studio Setting (No Crowds)</div>
              <div className="flex items-center"><Check className="w-4 h-4 text-[#8A9A86] mr-2" /> Evidence-Based Strength & Muscle Preservation</div>
              <div className="flex items-center"><Check className="w-4 h-4 text-[#8A9A86] mr-2" /> Convenient Addington Location with Dedicated Parking</div>
            </div>
          </div>
        </section>

        {/* 2. THE STUDIO EXPERIENCE */}
        <section className="py-24 px-5 md:px-12 bg-white border-t border-neutral-200">
          <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="md:col-span-5 relative">
               <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl relative border border-neutral-100">
                 <img 
                    src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2000&auto=format&fit=crop" 
                    alt="Private gym studio environment"
                    className="w-full h-full object-cover grayscale opacity-90 mix-blend-luminosity hover:grayscale-0 hover:mix-blend-normal transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-[#8A9A86]/5 mix-blend-multiply"></div>
               </div>
            </div>
            
            <div className="md:col-span-7">
              <span className="block text-sm text-[#8A9A86] font-semibold tracking-widest uppercase mb-4">The Environment</span>
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#2C3539] leading-[1.1] mb-6">
                Expert Hands-On Coaching. Zero Gym Intimidation.
              </h2>
              <div className="prose prose-lg max-w-none text-neutral-600 font-sans leading-relaxed">
                <p>
                  Most commercial gyms in Christchurch are noisy, overcrowded, and intimidating. You spend half your workout waiting for equipment or wondering if your lifting form is actually safe.
                </p>
                <p>
                  At WRK, sessions take place in a dedicated, Semi-private training studio at 12 Show Place, Addington. When you train here:
                </p>
                <ul className="space-y-4 my-8 list-none pl-0">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-[#8A9A86] mt-2.5 mr-4 shrink-0"></span> 
                    <span><strong>A low-key, welcoming space:</strong> No chaotic crowds, mirror flexing, or waiting for machines. You’ll be sharing the floor with just a handful of like-minded people - just a bunch of good sorts getting on with their session while we focus entirely on yours.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-[#8A9A86] mt-2.5 mr-4 shrink-0"></span> 
                    <span><strong>Precision technique feedback:</strong> Every rep, tempo, and movement is calibrated in real-time to protect your joints and maximize results.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-[#8A9A86] mt-2.5 mr-4 shrink-0"></span> 
                    <span><strong>Tailored for your body:</strong> Whether you are new to lifting, managing joint stiffness, or on GLP-1 weight loss medication, your session matches your exact daily energy and recovery.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. COACHING TRACKS */}
        <section className="py-24 px-5 md:px-12 bg-[#FAFAF9] border-t border-neutral-200">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <span className="block text-sm text-[#8A9A86] font-semibold tracking-widest uppercase mb-4">Our Approach</span>
              <h2 className="font-serif text-[36px] md:text-[48px] text-[#2C3539] max-w-[800px] mx-auto leading-tight">
                Tailored Coaching for Your Specific Goals
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="bg-white border border-neutral-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-neutral-50 border border-neutral-100 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-[#5C6B56]" />
                </div>
                <h3 className="font-serif text-2xl text-[#2C3539] mb-4">GLP-1 & Medical Weight Loss Muscle Preservation</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Rapid weight loss often strips away vital lean muscle. We use targeted resistance training to maintain your metabolic rate, protect your strength, and shape your body as the scale drops.
                </p>
              </div>

              <div className="bg-white border border-neutral-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow md:translate-y-8">
                <div className="w-14 h-14 bg-neutral-50 border border-neutral-100 rounded-2xl flex items-center justify-center mb-6">
                  <Dumbbell className="w-7 h-7 text-[#5C6B56]" />
                </div>
                <h3 className="font-serif text-2xl text-[#2C3539] mb-4">Foundational Strength & Body Recomposition</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Build bone density, master compound lifts (squats, hinges, presses), and develop functional strength that makes everyday life feel lighter.
                </p>
              </div>

              <div className="bg-white border border-neutral-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-neutral-50 border border-neutral-100 rounded-2xl flex items-center justify-center mb-6">
                  <Activity className="w-7 h-7 text-[#5C6B56]" />
                </div>
                <h3 className="font-serif text-2xl text-[#2C3539] mb-4">Habit & Nutrition Integration</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Personal training doesn't end when you leave the studio. Receive straightforward protein guidance, daily movement targets, and habit structures that integrate seamlessly into busy Christchurch workdays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PRICING & LOCATION GRID */}
        <section id="location" className="py-24 px-5 md:px-12 bg-white border-y border-neutral-200">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* PRICING CARD */}
              <div>
                <span className="block text-sm text-[#8A9A86] font-semibold tracking-widest uppercase mb-4">Investment</span>
                <h2 className="font-serif text-[32px] md:text-[40px] text-[#2C3539] mb-8">Transparent In-Person Coaching</h2>
                
                <div className="bg-[#2C3539] text-white rounded-[2rem] p-8 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#3A4549] rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
                  <div className="relative z-10">
                    <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 border border-white/20">
                      Complete Studio Experience
                    </span>
                    <h3 className="font-serif text-2xl mb-4">Weekly 1-on-1 In-Person Coaching</h3>
                    
                    <div className="flex items-end gap-2 mb-2">
                      <span className="font-serif text-5xl md:text-6xl">$89</span>
                      <span className="text-neutral-400 text-lg mb-1">NZD / week</span>
                    </div>
                    <div className="flex items-center text-sm text-neutral-400 mb-8 border-b border-neutral-700 pb-8">
                      <MapPin className="w-4 h-4 mr-2 text-[#8A9A86]" /> 12 Show Place, Addington, Christchurch
                    </div>

                    <ul className="space-y-4 mb-10">
                      {[
                        "Weekly 1-on-1 private studio training session",
                        "Full personalized resistance program for your independent days (via coaching app)",
                        "Real-time lifting technique correction and intensity management",
                        "Tailored nutritional guidance and protein/macro targets",
                        "Dedicated GLP-1 muscle preservation protocols (if applicable)",
                        "Full access to our private Addington facility during sessions",
                        "Ongoing direct coach support between sessions"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-5 h-5 text-[#8A9A86] mr-3 shrink-0" />
                          <span className="text-neutral-300">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact" className="block w-full">
                      <Button size="lg" fullWidth className="bg-[#8A9A86] hover:bg-[#768672] text-white py-6 text-[15px] border-none">
                        Book Your Consultation & Studio Walkthrough
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* LOCATION DETAILS */}
              <div className="lg:mt-32">
                 <span className="block text-sm text-[#8A9A86] font-semibold tracking-widest uppercase mb-4">Find Us</span>
                 <h2 className="font-serif text-[32px] md:text-[40px] text-[#2C3539] mb-8">Train in the Heart of Addington</h2>
                 
                 <div className="prose prose-lg text-neutral-600 font-sans mb-8">
                   <p><strong>Address:</strong><br/> 12 Show Place, Addington, Christchurch 8024</p>
                   <p><strong>Accessibility:</strong><br/> Easily accessible from Riccarton, Spreydon, Cashmere, Halswell, and the Christchurch Central City.</p>
                   <p><strong>Parking:</strong><br/> Easy on-site parking directly outside the studio.</p>
                 </div>
                 
                 <div className="w-full aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden border border-neutral-200 shadow-md">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d2892.428489725514!2d172.60281691550182!3d-43.53503257912537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318a0a1a0b678b%3A0xc07a2a0eb9a27e05!2s12%20Show%20Place%2C%20Addington%2C%20Christchurch%208024%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1714400000000!5m2!1sen!2sus" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Studio Location Map"
                    ></iframe>
                 </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* 5. INTERACTIVE INQUIRY */}
        <section className="py-24 px-5 bg-[#FAFAF9]">
          <div className="max-w-[700px] mx-auto text-center">
             <span className="block text-sm text-[#8A9A86] font-semibold tracking-widest uppercase mb-4">Start Where You Are</span>
             <h2 className="font-serif text-[32px] md:text-[40px] text-[#2C3539] mb-6">Have a Question or Not Sure Where to Begin?</h2>
             <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
               Select where you are currently at, and we will tailor our initial chat around your exact situation.
             </p>
             
             <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm text-left">
               <form className="space-y-4" onSubmit={(e) => {
                 e.preventDefault();
                 if (phaseSelection) {
                    window.location.href = \`/contact?phase=\${encodeURIComponent(phaseSelection)}\`;
                 } else {
                    window.location.href = '/contact';
                 }
               }}>
                 {[
                   "I am taking GLP-1 medication and want to protect muscle & build strength",
                   "I am preparing to transition/wean off weight loss medication",
                   "I am looking for private 1-on-1 strength training (General Fitness)",
                   "I have a specific question about the Addington studio"
                 ].map((option, idx) => (
                   <label key={idx} className={\`flex items-start p-4 rounded-xl border cursor-pointer transition-colors \${phaseSelection === option ? 'border-[#8A9A86] bg-[#8A9A86]/5' : 'border-neutral-200 hover:border-neutral-300'}\`}>
                     <div className="mt-0.5">
                       <input 
                         type="radio" 
                         name="phase" 
                         value={option}
                         checked={phaseSelection === option}
                         onChange={() => setPhaseSelection(option)}
                         className="w-4 h-4 text-[#8A9A86] focus:ring-[#8A9A86] border-neutral-300"
                       />
                     </div>
                     <span className="ml-3 text-[#2C3539]">{option}</span>
                   </label>
                 ))}
                 
                 <div className="pt-6">
                   <Button type="submit" size="lg" fullWidth className="bg-[#2C3539] hover:bg-neutral-800 text-white">
                     Continue to Contact Form <ArrowRight className="w-5 h-5 ml-2" />
                   </Button>
                 </div>
               </form>
             </div>
          </div>
        </section>

        {/* 6. FAQ */}
        <section className="py-24 px-5 md:px-12 bg-white border-t border-neutral-200">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-serif text-[32px] md:text-[40px] text-center text-[#2C3539] mb-16">
              Common Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
                  >
                    <span className="font-sans font-medium text-lg text-[#2C3539] pr-4">{faq.q}</span>
                    <span className="text-[#8A9A86] shrink-0">
                      {openFaq === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  <div 
                    className={\`px-6 overflow-hidden transition-all duration-300 ease-in-out \${openFaq === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}\`}
                  >
                    <p className="text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
`
fs.writeFileSync('pages/PersonalTraining.tsx', content);
