const fs = require('fs');
const content = `import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { Activity, Dumbbell, MapPin, Calendar, Check, ArrowRight } from 'lucide-react';

export const PersonalTraining: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndFitnessBusiness",
    "name": "WRK Personal Training",
    "image": "https://www.wrkpersonaltraining.co.nz/images/wrk-logo-black-transparent.png",
    "url": "https://www.wrkpersonaltraining.co.nz/personal-training",
    "telephone": "+64 21 393 160",
    "email": "info@wrkpersonaltraining.co.nz",
    "priceRange": "$$",
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
      "latitude": "-43.5413",
      "longitude": "172.6074"
    },
    "areaServed": "Christchurch, New Zealand",
    "founder": {
      "@type": "Person",
      "name": "Hayden Richards"
    }
  };

  return (
    <>
      <SeoHead 
        title="Personal Trainer Christchurch | 1-on-1 Fitness Coaching | WRK"
        description="Private 1-on-1 personal training in Addington, Christchurch. Evidence-based coaching tailored for strength, weight loss, and GLP-1 support. Book a session."
        schema={schema}
      />
      <div className="flex flex-col w-full overflow-x-hidden bg-neutral-900 pb-24 text-neutral-100">
        
        {/* HERO */}
        <section className="relative min-h-[80svh] md:min-h-[90svh] w-full flex flex-col justify-end">
          <div className="absolute inset-0 z-0 bg-neutral-900">
             <div className="absolute inset-0 wrk-photo-container">
               <div className="wrk-photo-overlay"></div>
               <img loading="lazy"
                  referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop"
                  alt="In-person Personal Training in Christchurch"
                  className="w-full h-full object-cover object-top opacity-50 wrk-photo"
                />
             </div>
          </div>
          <div className="relative z-10 w-full px-5 pt-32 pb-12 md:pb-24 max-w-[1200px] mx-auto md:px-12 text-center md:text-left">
            <span className="block font-sans font-medium text-xs uppercase tracking-widest text-teal-400 mb-4 flex items-center justify-center md:justify-start">
              <MapPin className="w-4 h-4 mr-2" /> ADDINGTON, CHRISTCHURCH
            </span>
            <h1 className="flex flex-col mb-6">
              <span className="font-serif text-[40px] sm:text-[56px] md:text-[80px] lg:text-[88px] break-words leading-tight text-neutral-100">
                1-on-1 Personal <span className="wrk-highlight-dark">Training</span><br/> in Christchurch
              </span>
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] text-neutral-300 font-medium max-w-[650px] mx-auto md:mx-0 mb-8 leading-relaxed">
              Private, evidence-based fitness coaching tailored for strength, sustainable weight loss, and dedicated GLP-1 support in a premium studio environment.
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-6">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" fullWidth className="w-full sm:w-auto">
                  Book a Consultation &rarr;
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* DETAILS */}
        <section className="py-24 md:py-32 px-5 md:px-12 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative border border-neutral-800">
                <img 
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2670&auto=format&fit=crop" 
                  alt="Private gym studio environment"
                  className="w-full h-full object-cover grayscale opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-neutral-900 border border-neutral-700 p-6 rounded-2xl shadow-xl max-w-[250px]">
                <div className="flex gap-4 items-center mb-2">
                  <div className="bg-teal-900/50 p-3 rounded-full">
                    <MapPin className="text-teal-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-neutral-400 text-sm">12 Show Place, Addington</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-[32px] md:text-[48px] text-neutral-100 leading-[1.1] mb-6">
                Expert Coaching. <br/> Private Studio.
              </h2>
              <p className="font-sans text-[18px] text-neutral-300 leading-relaxed mb-8">
                Skip the crowded commercial gyms. Train in a private, focused environment located in Addington. We provide hands-on coaching to ensure your form is perfect, your intensity is correct, and your progress is guaranteed.
              </p>
              
              <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8 shadow-xl mb-8">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-6 mb-6">
                  <div>
                    <h3 className="font-serif text-2xl text-white">In-Person PT</h3>
                    <p className="text-teal-400 text-sm tracking-wider uppercase font-semibold mt-1">Weekly Plan</p>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-4xl text-white">$89</span>
                    <span className="text-neutral-400 text-sm"> / wk</span>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Weekly 1-on-1 private training sessions",
                    "Complete resistance programming",
                    "Addington private gym studio access during sessions",
                    "Nutritional guidance and macro targets",
                    "Form correction and intensity management",
                    "GLP-1 specific muscle preservation protocols"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-teal-400 mr-3 shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact">
                <Button size="lg" className="w-full flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" /> Schedule Your First Session
                </Button>
              </Link>
            </div>
            
          </div>
        </section>
      </div>
    </>
  );
};
`
fs.writeFileSync('pages/PersonalTraining.tsx', content);
