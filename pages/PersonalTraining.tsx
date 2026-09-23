import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { MapPin, Shield, Dumbbell, Activity, Check, ChevronDown, ArrowRight, Car, Compass, Clock } from 'lucide-react';

export const PersonalTraining: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [phaseSelection, setPhaseSelection] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "Where in Addington is the studio located?",
      a: "We train out of 12 Show Place in Addington, Christchurch. It is a quiet business park location with easy parking right outside, just minutes from Moorhouse Ave, Riccarton, and the Southern Motorway."
    },
    {
      q: "I'm completely new to lifting weights. Is this suitable for beginners?",
      a: "Absolutely. Most of our clients are not gym veterans. Because the studio is semi-private, you learn the foundations of movement and lifting mechanics in a calm, zero-judgment space at your own pace."
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

  const schema = [
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "In-Person Personal Training",
      "provider": {
        "@type": "HealthAndFitnessBusiness",
        "name": "WRK Personal Training"
      },
      "areaServed": {
        "@type": "City",
        "name": "Christchurch"
      },
      "description": "Semi-Private 1-on-1 personal training in Addington, Christchurch. Evidence-based coaching, zero gym crowds, and specialist GLP-1 muscle preservation."
    }
  ];

  const handleTriageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phaseSelection) {
      navigate(`/contact?phase=${encodeURIComponent(phaseSelection)}`);
    } else {
      navigate('/contact');
    }
  };

  return (
    <>
      <SeoHead 
        title="Personal Trainer Christchurch | Semi-Private Coaching Addington | WRK"
        description="Semi-Private 1-on-1 personal training in Addington, Christchurch. Evidence-based coaching, zero gym crowds, and specialist GLP-1 muscle preservation. Book a consultation."
        schema={schema}
      />
      <div className="bg-canvas text-charcoal min-h-screen font-sans selection:bg-spruce-800 selection:text-sand-50">
        
        {/* 1. Hero Section */}
        <section className="bg-canvas pt-14 pb-16 px-6 max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-sans text-spruce-800 font-semibold mb-4">
            12 SHOW PLACE · ADDINGTON, CHRISTCHURCH
          </p>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight max-w-3xl mx-auto mb-6">
            1-on-1 Personal Training <span className="block sm:inline italic text-spruce-800">in Christchurch.</span>
          </h1>
          
          <p className="text-charcoal/80 max-w-2xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
            Skip the chaotic commercial gyms. Train in a focused, semi-private Addington studio with evidence-based coaching built around strength, muscle preservation, and long-term health.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-spruce-800 text-sand-50 hover:bg-spruce-900 px-6 py-3.5 rounded-md text-xs uppercase tracking-widest font-semibold inline-block transition-colors shadow-sm"
            >
              Book a Free Consultation
            </Link>
            <a
              href="#location"
              className="border border-charcoal/20 text-charcoal hover:bg-sand-100 px-6 py-3.5 rounded-md text-xs uppercase tracking-widest font-semibold inline-block transition-colors"
            >
              View Studio & Location
            </a>
          </div>
          
          {/* Trust Pills */}
          <div className="flex flex-row justify-center flex-wrap gap-4 sm:gap-6 mt-8 text-xs text-charcoal/70">
            <span className="flex items-center">✓ Semi-private studio (no crowds)</span>
            <span className="hidden sm:inline text-charcoal/30">•</span>
            <span className="flex items-center">✓ Evidence-based muscle defense</span>
            <span className="hidden sm:inline text-charcoal/30">•</span>
            <span className="flex items-center">✓ Dedicated on-site parking</span>
          </div>
        </section>

        {/* 2. The Environment Split Band */}
        <section className="bg-sand-100/70 py-16 px-6 border-y border-charcoal/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">
                THE STUDIO EXPERIENCE
              </span>
              <h2 className="font-serif text-3xl text-charcoal">
                Expert Hands-On Coaching. Zero Intimidation.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-xl p-8 border border-charcoal/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-sand-100 text-spruce-800 flex items-center justify-center mb-4">
                    <Shield size={20} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                    A Low-Key, Welcoming Space
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    No crowded machine lines, loud music, or mirror flexing. Just a handful of good sorts getting on with their session while we focus entirely on yours.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                  Semi-private facility · Addington
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-8 border border-charcoal/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-sand-100 text-spruce-800 flex items-center justify-center mb-4">
                    <Dumbbell size={20} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                    Precision Real-Time Feedback
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    Every rep, tempo, and movement is calibrated face-to-face to safeguard joint longevity and ensure proper execution.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                  Technique mastery & safety
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl p-8 border border-charcoal/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-sand-100 text-spruce-800 flex items-center justify-center mb-4">
                    <Activity size={20} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                    Calibrated to Your Recovery
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    Whether managing joint stiffness or GLP-1 fatigue, your training volume matches your exact daily energy levels.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                  Adaptive energy & biofeedback
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Focus Areas */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">
              OUR SPECIALTY
            </span>
            <h2 className="font-serif text-3xl text-center text-charcoal tracking-tight">
              Targeted In-Person Coaching
            </h2>
            <p className="text-sm text-charcoal/70 mt-2">
              Three pillars designed to preserve strength and establish lifelong physical autonomy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-charcoal/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 bg-sand-100 px-2 py-0.5 rounded inline-block mb-3">
                  PILLAR 01
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  GLP-1 Muscle Defense
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Target resistance sessions specifically structured to preserve metabolic rate and lean mass during rapid weight loss.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                Safeguarding metabolic capacity
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-charcoal/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 bg-sand-100 px-2 py-0.5 rounded inline-block mb-3">
                  PILLAR 02
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  Foundational Strength
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Build bone density and master compound mechanics (squats, hinges, presses) for everyday capability and joint health.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                Compound movement patterns
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-charcoal/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 bg-sand-100 px-2 py-0.5 rounded inline-block mb-3">
                  PILLAR 03
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  Real-Life Nutrition & Habits
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Simple protein targets and daily habit systems that integrate seamlessly into busy Christchurch workdays.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                Digestible protein & daily structure
              </div>
            </div>
          </div>
        </section>

        {/* 4. Studio Investment Card */}
        <section className="py-16 px-6 max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-spruce-800 font-semibold mb-2 block">
            TRANSPARENT IN-PERSON COACHING
          </span>
          <h2 className="font-serif text-3xl text-charcoal mb-8 tracking-tight">
            Complete Studio Experience
          </h2>

          <div className="bg-spruce-800 text-sand-50 rounded-2xl p-8 sm:p-10 shadow-lg text-left relative overflow-hidden">
            <span className="text-xs uppercase tracking-wider text-sand-200/90 mb-4 block font-medium">
              📍 12 Show Place, Addington, Christchurch
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-sand-50 mb-4">
              Weekly 1-on-1 Studio Coaching
            </h3>

            <div className="flex flex-wrap items-baseline gap-2 mb-2">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-sand-50">$89 NZD</span>
              <span className="text-sand-200/80 text-sm">/ week</span>
            </div>
            <p className="text-xs text-sand-200/70 border-b border-sand-200/10 pb-6 mb-6">
              Includes full weekly studio access, custom home programming, and nutrition support.
            </p>

            <ul className="space-y-3.5 my-8 text-sand-100 text-sm">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-sand-200 shrink-0" />
                <span>Weekly 1-on-1 private studio training session</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-sand-200 shrink-0" />
                <span>Real-time technique correction and intensity management</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-sand-200 shrink-0" />
                <span>Full independent workout programming via the WRK App</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-sand-200 shrink-0" />
                <span>Tailored nutrition guidance and protein targets</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-sand-200 shrink-0" />
                <span>Dedicated GLP-1 muscle preservation protocols</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-sand-200 shrink-0" />
                <span>Full access to the private Addington facility during sessions</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to="/contact"
                className="bg-sand-100 text-spruce-900 hover:bg-white w-full py-4 text-center rounded-md font-semibold text-xs uppercase tracking-widest block transition-colors shadow-sm"
              >
                Book Your Consultation & Studio Walkthrough
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Location & Accessibility Band */}
        <section id="location" className="bg-sand-50 py-16 px-6 border-y border-charcoal/5">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">
              LOCATION
            </span>
            <h2 className="font-serif text-3xl text-charcoal mb-8 tracking-tight">
              Train in the Heart of Addington
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-8">
              <div className="bg-white rounded-xl p-6 border border-charcoal/5 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-spruce-800">
                  <MapPin size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">Address</span>
                </div>
                <p className="text-sm font-semibold text-charcoal">
                  12 Show Place, Addington
                </p>
                <p className="text-xs text-charcoal/70 mt-1">
                  Christchurch 8024
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-charcoal/5 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-spruce-800">
                  <Compass size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">Accessibility</span>
                </div>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  Minutes from Riccarton, Spreydon, Cashmere, Halswell, and Christchurch Central City.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-charcoal/5 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-spruce-800">
                  <Car size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">Parking</span>
                </div>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  Easy on-site parking directly outside the studio doors.
                </p>
              </div>
            </div>

            <div className="w-full aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden border border-charcoal/10 shadow-sm mt-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185185.91070085767!2d172.59900144999997!3d-43.51214245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x26634d156304cd93%3A0x9e3eee8e863806bb!2sWRK%20Personal%20Training!5e0!3m2!1sen!2snz!4v1788775159827!5m2!1sen!2snz" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title="Studio Location Map"
              ></iframe>
            </div>
          </div>
        </section>

        {/* 6. Starting Triage / Questionnaire Pre-Select */}
        <section className="py-16 px-6 max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4 tracking-tight">
            Have a Question or Not Sure Where to Begin?
          </h2>
          <p className="text-charcoal/80 text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Select your situation and we will tailor our initial consult chat around your goals.
          </p>

          <form onSubmit={handleTriageSubmit} className="space-y-3 text-left mb-8">
            {[
              "I am taking GLP-1 medication and want to protect muscle & build strength",
              "I am preparing to transition/wean off weight loss medication",
              "I am looking for private 1-on-1 strength training (General Fitness)",
              "I have a specific question about the Addington studio"
            ].map((option, idx) => {
              const isSelected = phaseSelection === option;
              return (
                <label
                  key={idx}
                  className={`flex items-start p-4 rounded-lg border cursor-pointer transition-colors ${
                    isSelected
                      ? 'border-spruce-800 bg-sand-100/60 shadow-sm'
                      : 'border-charcoal/10 bg-white hover:bg-sand-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="phase"
                    value={option}
                    checked={isSelected}
                    onChange={() => setPhaseSelection(option)}
                    className="mt-1 w-4 h-4 text-spruce-800 focus:ring-spruce-800 border-charcoal/20"
                  />
                  <span className="ml-3 text-sm font-medium text-charcoal leading-snug">
                    {option}
                  </span>
                </label>
              );
            })}

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-spruce-800 text-sand-50 hover:bg-spruce-900 rounded-md px-8 py-3.5 text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
              >
                Continue to Contact Form <ArrowRight size={15} className="ml-2" />
              </button>
            </div>
          </form>
        </section>

        {/* 7. Interactive FAQ Accordion */}
        <section className="py-20 px-6 max-w-3xl mx-auto border-t border-charcoal/5">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-3xl text-charcoal tracking-tight">
              Common Questions
            </h2>
          </div>

          <div className="bg-white rounded-xl border border-charcoal/5 p-6 md:p-8 shadow-sm">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border-b border-charcoal/10 last:border-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg text-charcoal group-hover:text-spruce-800 transition-colors pr-6">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`shrink-0 text-spruce-800 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      size={20}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-charcoal/80 text-sm md:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </>
  );
};
