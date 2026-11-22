import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { MapPin, Shield, Dumbbell, Activity, Check, ChevronDown, ArrowRight, Car, Compass, Clock } from 'lucide-react';
import { Testimonials } from '../components/Testimonials';
import { StudioConsultationForm } from '../components/StudioConsultationForm';

export const PersonalTraining: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [phaseSelection, setPhaseSelection] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "Where is WRK Personal Training located?",
      a: "Our private personal training studio is located in Addington, Christchurch. We offer one-on-one and semi-private coaching away from crowded commercial gyms."
    },
    {
      q: "Do you offer nutrition coaching alongside training?",
      a: "Yes. Every personal training membership includes comprehensive nutrition guidance, macronutrient targets, and habit tracking tailored to your specific body composition goals."
    },
    {
      q: "Do you support clients on GLP-1 medications or navigating menopause?",
      a: "Yes. We specialize in evidence-based resistance training and high-protein nutrition strategies designed to preserve lean muscle tissue, enhance metabolic rate, and improve strength for clients on GLP-1s or managing midlife hormonal shifts."
    },
    {
      q: "I'm completely new to lifting weights. Is this suitable for beginners?",
      a: "Absolutely. Most of our clients are not gym veterans. Because our facility is semi-private, you learn the foundations of movement and lifting mechanics in a calm, zero-judgment space at your own pace."
    },
    {
      q: "What happens during the initial consultation?",
      a: "We meet at the Addington facility for a relaxed, 20-minute chat. We discuss your background, health goals, take a quick look at movement mechanics, and decide together if the setup is the right fit for you."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ExerciseGym",
      "name": "WRK Personal Training",
      "image": "https://www.wrkpersonaltraining.co.nz/logo.png",
      "url": "https://www.wrkpersonaltraining.co.nz/personal-training",
      "telephone": "+64-21-393-160",
      "email": "info@wrkpersonaltraining.co.nz",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1/12 Show Place, Addington (located inside Get Me Fitter)",
        "addressLocality": "Christchurch",
        "addressRegion": "Canterbury",
        "postalCode": "8024",
        "addressCountry": "NZ"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -43.5434,
        "longitude": 172.6053
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "06:00",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "07:00",
          "closes": "13:00"
        }
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Christchurch"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Addington"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Riccarton"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Spreydon"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Halswell"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Cashmere"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "In-Person Personal Training",
      "provider": {
        "@type": "ExerciseGym",
        "name": "WRK Personal Training"
      },
      "areaServed": {
        "@type": "City",
        "name": "Christchurch"
      },
      "description": "Semi-Private 1-on-1 personal training in Addington, Christchurch. Evidence-based coaching, zero gym crowds, and specialist GLP-1 muscle preservation."
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is WRK Personal Training located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our private personal training studio is located in Addington, Christchurch. We offer one-on-one and semi-private coaching away from crowded commercial gyms."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer nutrition coaching alongside training?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every personal training membership includes comprehensive nutrition guidance, macronutrient targets, and habit tracking tailored to your specific body composition goals."
          }
        },
        {
          "@type": "Question",
          "name": "Do you support clients on GLP-1 medications or navigating menopause?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We specialize in evidence-based resistance training and high-protein nutrition strategies designed to preserve lean muscle tissue, enhance metabolic rate, and improve strength for clients on GLP-1s or managing midlife hormonal shifts."
          }
        },
        {
          "@type": "Question",
          "name": "I'm completely new to lifting weights. Is this suitable for beginners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Most of our clients are not gym veterans. Because our facility is semi-private, you learn the foundations of movement and lifting mechanics in a calm, zero-judgment space at your own pace."
          }
        },
        {
          "@type": "Question",
          "name": "What happens during the initial consultation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We meet at the Addington facility for a relaxed, 20-minute chat. We discuss your background, health goals, take a quick look at movement mechanics, and decide together if the setup is the right fit for you."
          }
        }
      ]
    }
  ];

  const handleTriageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const consultSection = document.getElementById('book-consult');
    if (consultSection) {
      consultSection.scrollIntoView({ behavior: 'smooth' });
    } else if (phaseSelection) {
      navigate(`/contact?phase=${encodeURIComponent(phaseSelection)}`);
    } else {
      navigate('/contact');
    }
  };

  return (
    <>
      <SeoHead 
        title="Personal Trainer Christchurch | Semi-Private Coaching | WRK"
        description="Skip crowded Christchurch gyms. Train in our quiet Addington studio with joint-safe, coach-led strength training. Free on-site parking. Book a consult."
        schema={schema}
      />
      <div className="bg-cream text-forest min-h-screen font-sans selection:bg-forest selection:text-cream">
        
        {/* 1. Hero Section */}
        <section className="bg-cream pt-14 pb-16 px-6 max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-sans text-forest font-semibold mb-4">
            1/12 SHOW PLACE · ADDINGTON, CHRISTCHURCH
          </p>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest tracking-tight max-w-3xl mx-auto mb-6">
            Personal Trainer Christchurch <span className="block sm:inline italic text-forest/90">· Semi-Private Coaching</span>
          </h1>
          
          <p className="text-forest/80 max-w-2xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
            Skip crowded Christchurch gyms. Train in our quiet Addington studio with joint-safe, coach-led strength training. Free on-site parking. Book a consult.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#book-consult"
              className="bg-citron text-forest hover:brightness-95 border border-forest/20 px-6 py-3.5 rounded-md text-xs uppercase tracking-widest font-semibold inline-block transition-all shadow-sm"
            >
              Book a Free Consultation
            </a>
            <a
              href="#location"
              className="bg-cream border border-forest/25 text-forest hover:bg-quiet px-6 py-3.5 rounded-md text-xs uppercase tracking-widest font-semibold inline-block transition-colors"
            >
              View Facility & Location
            </a>
          </div>
          
          {/* Trust Pills */}
          <div className="flex flex-row justify-center flex-wrap gap-4 sm:gap-6 mt-8 text-xs text-forest/75">
            <span className="flex items-center">✓ Semi-private boutique facility (no crowds)</span>
            <span className="hidden sm:inline text-forest/30">•</span>
            <span className="flex items-center">✓ Evidence-based muscle defence</span>
            <span className="hidden sm:inline text-forest/30">•</span>
            <span className="flex items-center">✓ Dedicated on-site parking</span>
          </div>
        </section>

        {/* Feature Lifestyle Banner */}
        <div className="mb-14 max-w-5xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden shadow-sm border border-forest/15 aspect-[16/9] md:aspect-[21/9] relative bg-forest">
            <img 
              src="https://i.postimg.cc/kMshn8rN/Screen-Shot-2026-06-23-at-2-10-37-PM.png" 
              alt="Personal training client coaching in quiet Addington studio" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-cream">
              <span className="text-xs uppercase tracking-widest font-semibold text-citron block mb-1">
                ADDINGTON FACILITY · CHRISTCHURCH
              </span>
              <p className="font-serif text-lg sm:text-xl text-cream max-w-xl">
                A calm, private environment designed for focused movement and sustainable progress.
              </p>
            </div>
          </div>
        </div>

        {/* 2. The Environment Split Band */}
        <section className="bg-quiet py-16 px-6 border-y border-forest/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest font-semibold text-forest block mb-2">
                THE BOUTIQUE EXPERIENCE
              </span>
              <h2 className="font-serif text-3xl text-forest">
                Expert Hands-On Coaching. Zero Intimidation.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-cream rounded-xl p-8 border border-forest/15 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-quiet border border-forest/10 text-forest flex items-center justify-center mb-4">
                    <Shield size={20} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-forest mb-3">
                    A Low-Key, Welcoming Space
                  </h3>
                  <p className="text-sm text-forest/80 leading-relaxed">
                    You will share the floor with only a handful of adults focused on their own routines—no crowds, no posturing, and no waiting for equipment while we focus entirely on your session.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-forest/65">
                  Semi-private facility · Addington
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-cream rounded-xl p-8 border border-forest/15 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-quiet border border-forest/10 text-forest flex items-center justify-center mb-4">
                    <Dumbbell size={20} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-forest mb-3">
                    Precision Real-Time Feedback
                  </h3>
                  <p className="text-sm text-forest/80 leading-relaxed">
                    Every rep, tempo, and movement is calibrated face-to-face to safeguard joint longevity and ensure proper execution.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-forest/65">
                  Technique mastery & safety
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-cream rounded-xl p-8 border border-forest/15 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-quiet border border-forest/10 text-forest flex items-center justify-center mb-4">
                    <Activity size={20} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-forest mb-3">
                    Calibrated to Your Recovery
                  </h3>
                  <p className="text-sm text-forest/80 leading-relaxed">
                    Whether managing joint stiffness or GLP-1 fatigue, your training volume matches your exact daily energy levels.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-forest/65">
                  Adaptive energy & biofeedback
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* 3. Core Focus Areas */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-forest block mb-2">
              OUR SPECIALTY
            </span>
            <h2 className="font-serif text-3xl text-center text-forest tracking-tight">
              Targeted In-Person Coaching
            </h2>
            <p className="text-sm text-forest/75 mt-2">
              Three pillars designed to preserve strength and establish lifelong physical autonomy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-quiet rounded-xl p-8 border border-forest/15 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-forest bg-cream border border-forest/15 px-2.5 py-0.5 rounded inline-block mb-3">
                  PILLAR 01
                </span>
                <h3 className="font-serif text-xl font-bold text-forest mb-3">
                  GLP-1 Muscle Defence
                </h3>
                <p className="text-sm text-forest/80 leading-relaxed">
                  Target resistance sessions specifically structured to preserve metabolic rate and lean mass during rapid weight loss.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-forest/65">
                Safeguarding metabolic capacity
              </div>
            </div>

            <div className="bg-quiet rounded-xl p-8 border border-forest/15 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-forest bg-cream border border-forest/15 px-2.5 py-0.5 rounded inline-block mb-3">
                  PILLAR 02
                </span>
                <h3 className="font-serif text-xl font-bold text-forest mb-3">
                  Foundational Strength
                </h3>
                <p className="text-sm text-forest/80 leading-relaxed">
                  Build bone density and master compound mechanics (squats, hinges, presses) for everyday capability and joint health.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-forest/65">
                Compound movement patterns
              </div>
            </div>

            <div className="bg-quiet rounded-xl p-8 border border-forest/15 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-forest bg-cream border border-forest/15 px-2.5 py-0.5 rounded inline-block mb-3">
                  PILLAR 03
                </span>
                <h3 className="font-serif text-xl font-bold text-forest mb-3">
                  Real-Life Nutrition & Habits
                </h3>
                <p className="text-sm text-forest/80 leading-relaxed">
                  Simple protein targets and daily habit systems that integrate seamlessly into busy Christchurch workdays.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-forest/65">
                Digestible protein & daily structure
              </div>
            </div>
          </div>
        </section>

        {/* 4. Studio Investment Card */}
        <section className="py-16 px-6 max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-forest font-semibold mb-2 block">
            TRANSPARENT IN-PERSON COACHING
          </span>
          <h2 className="font-serif text-3xl text-forest mb-8 tracking-tight">
            Complete Coaching Experience
          </h2>

          <div className="bg-forest text-cream rounded-2xl p-8 sm:p-10 shadow-lg text-left relative overflow-hidden border border-forest-deep">
            <span className="text-xs uppercase tracking-wider text-cream/90 mb-4 block font-medium">
              📍 1/12 Show Place, Addington, Christchurch (inside Get Me Fitter)
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-cream mb-4">
              Weekly 1-on-1 In-Person Coaching & Muscle Defence System
            </h3>

            <div className="flex flex-wrap items-baseline gap-2 mb-2">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-cream">$89 NZD</span>
              <span className="text-cream/80 text-sm">/ week</span>
            </div>
            <p className="text-xs text-cream/75 border-b border-cream/15 pb-6 mb-6">
              Includes weekly facility coaching, custom home programming, and nutrition support.
            </p>

            <ul className="space-y-3.5 my-8 text-cream/90 text-sm">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-citron shrink-0 mt-0.5" />
                <span><strong>Weekly 1-on-1 In-Person Coaching Session:</strong> Hands-on joint alignment, loading mechanics, and real-time intensity calibration at our quiet Addington studio.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-citron shrink-0 mt-0.5" />
                <span><strong>Full Independent WRK App Programming:</strong> Exactly what to do on your non-coaching days so you never guess sets, reps, or weights.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-citron shrink-0 mt-0.5" />
                <span><strong>Digestible Protein & GI Fuelling Protocol:</strong> Practical daily targets built around nausea, early fullness, and appetite drops.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-citron shrink-0 mt-0.5" />
                <span><strong>Boutique Studio Access:</strong> Calm, uncrowded space—no waiting for gear, free parking right outside the door.</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#book-consult"
                className="bg-citron text-forest hover:brightness-95 border border-forest/20 w-full py-4 text-center rounded-md font-semibold text-xs uppercase tracking-widest block transition-all shadow-sm"
              >
                Check Studio Availability & Book a 20-Min Consult →
              </a>
            </div>
          </div>
        </section>

        {/* Studio Consultation Booking Form */}
        <StudioConsultationForm />

        {/* 5. Location & Accessibility Band */}
        <section id="location" className="bg-quiet py-16 px-6 border-y border-forest/10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs uppercase tracking-widest font-semibold text-forest block mb-2">
              LOCATION
            </span>
            <h2 className="font-serif text-3xl text-forest mb-4 tracking-tight">
              Train in the Heart of Addington
            </h2>
            <p className="text-forest/80 max-w-2xl mx-auto text-base mb-8 leading-relaxed">
              Sessions are delivered in a calm, boutique setting at 12 Show Place, Addington (located inside Get Me Fitter) — an uncrowded space with dedicated on-site parking and zero commercial gym posturing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-8">
              <div className="bg-cream rounded-xl p-6 border border-forest/15 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-forest">
                  <MapPin size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">Address</span>
                </div>
                <p className="text-sm font-semibold text-forest">
                  1/12 Show Place, Addington
                </p>
                <p className="text-xs text-forest/75 mt-1">
                  (Inside Get Me Fitter) · Christchurch 8024
                </p>
              </div>

              <div className="bg-cream rounded-xl p-6 border border-forest/15 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-forest">
                  <Compass size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">Accessibility</span>
                </div>
                <p className="text-sm text-forest/80 leading-relaxed">
                  Minutes from Riccarton, Spreydon, Cashmere, Halswell, and Christchurch Central City.
                </p>
              </div>

              <div className="bg-cream rounded-xl p-6 border border-forest/15 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-forest">
                  <Car size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">Parking</span>
                </div>
                <p className="text-sm text-forest/80 leading-relaxed">
                  Easy on-site parking directly outside the facility doors.
                </p>
              </div>
            </div>

            <div className="w-full aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden border border-forest/15 shadow-sm mt-8 bg-cream">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185185.91070085767!2d172.59900144999997!3d-43.51214245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x26634d156304cd93%3A0x9e3eee8e863806bb!2sWRK%20Personal%20Training!5e0!3m2!1sen!2snz!4v1788775159827!5m2!1sen!2snz" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title="Facility Location Map"
              ></iframe>
            </div>
          </div>
        </section>

        {/* 6. Starting Triage / Questionnaire Pre-Select */}
        <section className="py-16 px-6 max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-forest mb-4 tracking-tight">
            Have a Question or Not Sure Where to Begin?
          </h2>
          <p className="text-forest/80 text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Select your situation and we will tailor our initial consult chat around your goals.
          </p>

          <form onSubmit={handleTriageSubmit} className="space-y-3 text-left mb-8">
            {[
              "I am taking GLP-1 medication and want to protect muscle & build strength",
              "I am preparing to transition/wean off weight loss medication",
              "I am looking for boutique 1-on-1 strength training (General Fitness)",
              "I have a specific question about the Addington facility"
            ].map((option, idx) => {
              const isSelected = phaseSelection === option;
              return (
                <label
                  key={idx}
                  className={`flex items-start p-4 rounded-lg border cursor-pointer transition-colors ${
                    isSelected
                      ? 'border-forest bg-quiet ring-1 ring-forest shadow-sm'
                      : 'border-forest/15 bg-quiet/70 hover:bg-quiet'
                  }`}
                >
                  <input
                    type="radio"
                    name="phase"
                    value={option}
                    checked={isSelected}
                    onChange={() => setPhaseSelection(option)}
                    className="mt-1 w-4 h-4 accent-forest border-forest/25"
                  />
                  <span className="ml-3 text-sm font-medium text-forest leading-snug">
                    {option}
                  </span>
                </label>
              );
            })}

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/20 rounded-md px-8 py-3.5 text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
              >
                Match My Programme & Book Consult → <ArrowRight size={15} className="ml-2" />
              </button>
            </div>
          </form>
        </section>

        {/* 7. Interactive FAQ Accordion */}
        <section className="py-20 px-6 max-w-3xl mx-auto border-t border-forest/10">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-forest block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-3xl text-forest tracking-tight">
              Common Questions
            </h2>
          </div>

          <div className="bg-quiet rounded-xl border border-forest/15 p-6 md:p-8 shadow-sm">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border-b border-forest/10 last:border-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg text-forest group-hover:opacity-80 transition-opacity pr-6">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`shrink-0 text-forest transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      size={20}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-forest/80 text-sm md:text-base leading-relaxed">
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
