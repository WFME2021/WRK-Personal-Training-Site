import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { PageHeroBanner } from '../components/PageHeroBanner';
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
      q: "Where in Christchurch do you coach?",
      a: "Our quiet space is at 1/12 Show Place in Addington (inside Get Me Fitter), with free on-site parking right outside the door. It's calm, friendly, and completely free of crowded commercial-gym energy."
    },
    {
      q: "What hours are you open for 1:1 sessions?",
      a: "I coach Monday to Friday from 6:00 AM to 2:00 PM so I'm wrapped up in time for the 3:00 PM school pickup. That works great for early risers, shift workers, parents after drop-off, and people popping in around work."
    },
    {
      q: "Do you help with food and everyday habits too?",
      a: "Yes. We keep food practical—helping you hit simple protein, fibre, and hydration targets that suit your appetite and busy weekdays without rigid meal plans or calorie obsession."
    },
    {
      q: "Do you coach clients on GLP-1 medications or in their 40s and 50s?",
      a: "Yes—both make up a big part of who I work with. We focus on joint-friendly resistance training so you keep hold of strength, muscle, and consistent energy while staying within a safe personal training lane alongside your doctor."
    },
    {
      q: "I haven't lifted weights in years. Will I feel out of place?",
      a: "Not for a second. Almost nobody I coach is a gym veteran. Because the space is quiet and private, we learn movements at your pace with zero judgement."
    },
    {
      q: "What happens if I come in for a quick studio chat first?",
      a: "Think of it like grabbing a quick coffee at 12 Show Place. You have a look around, tell me what you're working around, we check how a couple of basic movements feel, and you go away with zero pressure to sign anything on the spot."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ExerciseGym",
      "name": "WRK Personal Training",
      "image": "https://www.wrkpersonaltraining.co.nz/logo.png",
      "url": "https://www.wrkpersonaltraining.co.nz/studio",
      "telephone": "+64-21-393-160",
      "email": "info@wrkpersonaltraining.co.nz",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1/12 Show Place, Addington (inside Get Me Fitter)",
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
          "closes": "14:00"
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
      "description": "1:1 Personal Training in a quiet Addington, Christchurch studio. Calm, joint-friendly strength coaching with zero gym crowds."
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
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
        <PageHeroBanner
          imageSrc="/images/wrk-strength-studio.jpg"
          fallbackImageSrc="/images/banner-coaching.jpg"
          imageAlt="WRK Personal Training quiet strength coaching studio in Addington, Christchurch"
          align="center"
          eyebrow="1/12 SHOW PLACE · ADDINGTON, CHRISTCHURCH"
          title={
            <>
              1:1 Studio Coaching <span className="block sm:inline italic text-cream/95">in Addington.</span>
            </>
          }
          subtitle="Skip the noisy commercial gyms. Train face-to-face with Hayden in a quiet Addington space—Mon–Fri, 6:00 AM to 2:00 PM—with free parking right outside the door."
        >
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#book-consult"
              className="w-full sm:w-auto bg-citron text-forest hover:brightness-95 border border-forest/20 px-6 py-3.5 rounded-md text-xs uppercase tracking-widest font-semibold inline-block transition-all shadow-lg"
            >
              Come Have a Look Around →
            </a>
            <a
              href="#location"
              className="w-full sm:w-auto bg-forest-deep/65 hover:bg-forest-deep/85 text-cream border border-cream/35 px-6 py-3.5 rounded-md text-xs uppercase tracking-widest font-semibold inline-block transition-colors backdrop-blur-sm"
            >
              See Addington Location
            </a>
          </div>

          {/* Clean Trust Strip */}
          <div className="flex flex-row justify-center flex-wrap gap-4 sm:gap-6 mt-7 text-xs text-cream/85">
            <span>✓ Quiet space (no crowds or mirrors)</span>
            <span className="hidden sm:inline text-cream/35">·</span>
            <span>✓ Joint-friendly coaching with Hayden</span>
            <span className="hidden sm:inline text-cream/35">·</span>
            <span>✓ Easy parking outside the door</span>
          </div>
        </PageHeroBanner>

        {/* Feature Lifestyle Banner */}
        <div className="pt-12 mb-14 max-w-5xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden shadow-sm border border-forest/15 aspect-[16/9] md:aspect-[21/9] relative bg-forest">
            <img 
              src="https://i.postimg.cc/kMshn8rN/Screen-Shot-2026-06-23-at-2-10-37-PM.png" 
              alt="Personal training client coaching in quiet Addington studio" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-cream">
              <span className="text-xs uppercase tracking-widest font-semibold text-citron block mb-1">
                ADDINGTON STUDIO · CHRISTCHURCH
              </span>
              <p className="font-serif text-lg sm:text-xl text-cream max-w-xl">
                A calm, friendly room where nobody is staring at you and you never wait for equipment.
              </p>
            </div>
          </div>
        </div>

        {/* 2. The Environment Split Band */}
        <section className="bg-quiet py-16 px-6 border-y border-forest/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest font-semibold text-forest/75 block mb-2">
                WHAT IT FEELS LIKE HERE
              </span>
              <h2 className="font-serif text-3xl text-forest">
                Hands-On Coaching. Zero Intimidation.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-cream rounded-xl p-8 border border-forest/15 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-quiet border border-forest/10 text-forest flex items-center justify-center mb-4">
                    <Shield size={20} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-forest mb-3">
                    A Low-Key, Friendly Room
                  </h3>
                  <p className="text-sm text-forest/85 leading-relaxed">
                    Just normal adults getting on with their week—no blaring music, no gym posturing, and no waiting around for gear while we focus on your session.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-forest/65">
                  Inside Get Me Fitter · Addington
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-cream rounded-xl p-8 border border-forest/15 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-quiet border border-forest/10 text-forest flex items-center justify-center mb-4">
                    <Dumbbell size={20} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-forest mb-3">
                    Tweaks Right When You Need Them
                  </h3>
                  <p className="text-sm text-forest/85 leading-relaxed">
                    A shoulder feels pinch-y? A knee is stiff from gardening? We adjust grip, stance, or weight on the spot so exercises actually feel good on your joints.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-forest/65">
                  Technique tailored to your body
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-cream rounded-xl p-8 border border-forest/15 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-quiet border border-forest/10 text-forest flex items-center justify-center mb-4">
                    <Activity size={20} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-forest mb-3">
                    Paced to How You're Feeling
                  </h3>
                  <p className="text-sm text-forest/85 leading-relaxed">
                    Whether you're managing low appetite on a GLP-1 or coming off a tiring work week, we scale the session so you walk out feeling energised—not flattened.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-forest/65">
                  No burnout workouts
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
            <span className="text-xs uppercase tracking-widest font-semibold text-forest/75 block mb-2">
              WHAT WE WORK ON TOGETHER
            </span>
            <h2 className="font-serif text-3xl text-center text-forest tracking-tight">
              Three Things Every Studio Client Gets
            </h2>
            <p className="text-sm text-forest/80 mt-2">
              Plain-English training that fits around your week outside the studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-quiet rounded-xl p-8 border border-forest/15 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-forest/70 block mb-3">
                  01 · STRENGTH &amp; LONGEVITY
                </span>
                <h3 className="font-serif text-xl font-bold text-forest mb-3">
                  Everyday Capability
                </h3>
                <p className="text-sm text-forest/85 leading-relaxed">
                  Building solid leg, back, and core strength so carrying bags, climbing stairs, and staying active past 40 feel effortless rather than fragile.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-forest/65">
                Practical compound patterns
              </div>
            </div>

            <div className="bg-quiet rounded-xl p-8 border border-forest/15 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-forest/70 block mb-3">
                  02 · MUSCLE PROTECTION
                </span>
                <h3 className="font-serif text-xl font-bold text-forest mb-3">
                  Support Alongside GLP-1s
                </h3>
                <p className="text-sm text-forest/85 leading-relaxed">
                  When weight drops quickly, deliberate lifting gives your body a clear reason to keep hold of lean muscle while your doctor handles your care.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-forest/65">
                Keep the strength as the scale moves
              </div>
            </div>

            <div className="bg-quiet rounded-xl p-8 border border-forest/15 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-forest/70 block mb-3">
                  03 · REAL-LIFE HABITS
                </span>
                <h3 className="font-serif text-xl font-bold text-forest mb-3">
                  Simple Food &amp; App Support
                </h3>
                <p className="text-sm text-forest/85 leading-relaxed">
                  Easy protein and water anchors for busy Christchurch weekdays, plus clear solo workouts inside the WRK app for your other days.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-forest/65">
                Simple habits that stick
              </div>
            </div>
          </div>
        </section>

        {/* 4. Studio Experience Overview (No Public Per-Session Pricing) */}
        <section className="py-16 px-6 max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-forest/75 font-semibold mb-2 block">
            WHAT WEEKLY COACHING COVERS
          </span>
          <h2 className="font-serif text-3xl text-forest mb-8 tracking-tight">
            Inside Your Addington Coaching Setup
          </h2>

          <div className="bg-forest text-cream rounded-2xl p-8 sm:p-10 shadow-lg text-left relative overflow-hidden border border-forest-deep">
            <span className="text-xs uppercase tracking-wider text-cream/85 mb-3 block font-medium">
              📍 1/12 Show Place, Addington (inside Get Me Fitter) · Mon–Fri, 6:00 AM – 2:00 PM
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-cream mb-4">
              1:1 Studio Coaching &amp; WRK App Plan
            </h3>

            <p className="text-sm text-cream/85 border-b border-cream/15 pb-6 mb-6 leading-relaxed">
              Every setup starts with a relaxed 15-minute studio chat so we can figure out how many face-to-face sessions a week make sense for your schedule and budget.
            </p>

            <ul className="space-y-3.5 my-6 text-cream/90 text-sm">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-citron shrink-0 mt-0.5" />
                <span><strong>Hands-On 1:1 Studio Coaching:</strong> Calm, joint-friendly technique coaching right beside you in Addington.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-citron shrink-0 mt-0.5" />
                <span><strong>WRK App Workouts for Your Other Days:</strong> Clear plans for home or your own gym so you know exactly what to do between studio sessions.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-citron shrink-0 mt-0.5" />
                <span><strong>Practical Everyday Food Anchors:</strong> Realistic protein, fibre, and hydration habits built around your appetite and family meals.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-citron shrink-0 mt-0.5" />
                <span><strong>Easy Access &amp; Free Parking:</strong> Dedicated spaces right outside the door—zero CBD parking hassle.</span>
              </li>
            </ul>

            <div className="pt-4">
              <a
                href="#book-consult"
                className="bg-citron text-forest hover:brightness-95 border border-forest/20 w-full py-4 text-center rounded-md font-semibold text-xs uppercase tracking-widest block transition-all shadow-sm"
              >
                Check Studio Availability &amp; Line Up a Chat →
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
              Easy to Get to in Addington
            </h2>
            <p className="text-forest/80 max-w-2xl mx-auto text-base mb-8 leading-relaxed">
              We train out of a calm, quiet space at 1/12 Show Place in Addington (inside Get Me Fitter). There is parking right outside the door, no loud gym music blaring, and nobody hovering over the equipment.
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
                  <span className="text-xs font-bold uppercase tracking-wider">Getting Here</span>
                </div>
                <p className="text-sm text-forest/80 leading-relaxed">
                  Minutes from Riccarton, Spreydon, Cashmere, Halswell, and central Christchurch—handy for a morning or early afternoon session.
                </p>
              </div>

              <div className="bg-cream rounded-xl p-6 border border-forest/15 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-forest">
                  <Car size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">Parking</span>
                </div>
                <p className="text-sm text-forest/80 leading-relaxed">
                  Free on-site parking directly outside the front door, so you are not circling the block before your session.
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
            Not Quite Sure Where to Start?
          </h2>
          <p className="text-forest/80 text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Pick whichever sounds closest to where you are at right now, and we will use that as the starting point for our chat.
          </p>

          <form onSubmit={handleTriageSubmit} className="space-y-3 text-left mb-8">
            {[
              "I am on a GLP-1 medication and want to protect my strength and muscle",
              "I am coming off weight loss medication and want consistent habits to keep my strength",
              "I just want calm, consistent 1:1 strength coaching (general fitness or getting back into it)",
              "I have a quick question about the Addington studio or session times"
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
                Line Up a Chat with Hayden <ArrowRight size={15} className="ml-2" />
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
