import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Dumbbell,
  MessageSquareText,
  Route,
  Utensils,
  XCircle,
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import {
  STRIPE_SUMMER_MOMENTUM_URL,
  isCheckoutUrlConfigured,
} from '../constants';

interface FaqItem {
  question: string;
  answer: string;
}

const HERO_HIGHLIGHTS = [
  'Maintain over gains (30 Nov – 8 Jan)',
  'Festive food & BBQ coping strategies',
  'Travel-friendly break routines',
];

const DELIVERABLES = [
  {
    number: '01',
    icon: Dumbbell,
    title: '6 Weeks in the WRK App',
    description:
      '3–4 sensible movement & maintenance sessions/week with video demos.',
  },
  {
    number: '02',
    icon: Route,
    title: 'Fill-In Holiday & Travel Sessions',
    description:
      "Simple, low-equipment workouts for when you're away or gyms are closed.",
  },
  {
    number: '03',
    icon: Utensils,
    title: 'Festive Food & BBQ Coping Guide',
    description:
      'Guilt-free strategies for work dos, Christmas lunch, and summer BBQs.',
  },
  {
    number: '04',
    icon: MessageSquareText,
    title: 'Scheduled Weekly Guidance',
    description:
      'Calm weekly focus notes from Hayden inside the app (distinct from 1:1 coaching).',
  },
];

const GREAT_FIT_ITEMS = [
  'You are on a GLP-1 medication (or managing weight and energy) and want a calm, realistic plan to stay steady from 30 November to 8 January.',
  'You want workouts built around movement and maintenance rather than high-pressure training.',
  'You want practical coping tools for Christmas gatherings and summer travel without strict food rules.',
  'You are happy following a guided cohort plan inside the WRK app with gym or basic home gear.',
];

const LOOK_ELSEWHERE_ITEMS = [
  'You are looking for an intense pre-summer "shred" or aggressive strength-gain block.',
  'You need individualised injury rehabilitation, ACC recovery, or bespoke 1:1 coaching.',
  'You are looking for medical dosing advice or an individual clinical dietetic prescription.',
];

const FAQS: FaqItem[] = [
  {
    question: 'What are the workouts like? Do I need to lift heavy?',
    answer:
      "No. The focus is on sustainable movement, joint-friendly resistance, and maintaining the muscle and energy you've built—capped at 3 to 4 manageable sessions per week, with options for both the gym and at home.",
  },
  {
    question: 'How does the Festive Food & BBQ Coping Guide work?',
    answer:
      'Instead of a rigid diet, you get practical coping strategies for real Kiwi summer events—how to pace meals when appetite is low, prioritise protein comfortably at BBQs and Christmas lunch, and let go of the "all-or-nothing" mindset. (General everyday nutrition guidance only—not an individual clinical prescription.)',
  },
  {
    question: "What if I'm away over Christmas and New Year?",
    answer:
      'We include fill-in holiday break workouts that need minimal or no equipment, so you can keep your movement habit ticking over wherever you are.',
  },
  {
    question: 'Is this personalised 1:1 coaching or medical advice?',
    answer:
      "No—Summer Momentum is a guided 6-week cohort with scheduled weekly notes from Hayden. Always follow your prescribing clinician's advice regarding your GLP-1 medication.",
  },
  {
    question: 'What happens after 8 January?',
    answer:
      "When the 6 weeks wrap up, you'll have the option to step smoothly into one of WRK's self-guided training plans or 1:1 coaching if you want to build further in the new year.",
  },
];

export const SummerMomentum: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showCheckoutNotice, setShowCheckoutNotice] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const heroCtaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const target = heroCtaRef.current;
    if (!target || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky mobile CTA gently once user scrolls past the hero CTA
        setShowStickyBar(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const checkoutReady = isCheckoutUrlConfigured(STRIPE_SUMMER_MOMENTUM_URL);

  const handleCheckoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!checkoutReady) {
      e.preventDefault();
      setShowCheckoutNotice(true);
      const noticeEl = document.getElementById('enrol-notice');
      if (noticeEl) {
        noticeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <div className="bg-cream text-forest min-h-screen font-sans selection:bg-forest selection:text-cream overflow-x-hidden">
      <SeoHead
        title="Summer Momentum | Sustainable Movement & Festive Coping Plan | WRK"
        description="Heading into the holidays on a GLP-1? Summer Momentum (30 Nov – 8 Jan) is a calm 6-week sustainable movement and festive coping plan for $149 NZD."
      />

      {/* Section A: Visual-First Editorial Hero */}
      <section className="pt-3 pb-7 md:pt-12 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[auto_1fr] gap-y-3 lg:gap-y-5 lg:gap-x-12 items-start">
          {/* Intro: Pills + Punchy H1 + Crisp Subheadline */}
          <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1 text-left">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <span className="text-[10px] sm:text-[11px] font-medium px-2.5 py-0.5 sm:py-1 rounded-full bg-quiet border border-forest/15 text-forest tracking-wide whitespace-nowrap">
                SUMMER MOMENTUM
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium px-2.5 py-0.5 sm:py-1 rounded-full bg-quiet border border-forest/15 text-forest tracking-wide whitespace-nowrap">
                6-WEEK INTAKE FOR GLP-1 USERS
              </span>
            </div>

            <h1 className="font-serif text-[28px] sm:text-4xl lg:text-5xl text-forest tracking-tight leading-[1.12] text-balance mb-1.5 sm:mb-3">
              Heading into the holidays on a GLP-1?
            </h1>

            <p className="text-forest/85 text-sm sm:text-lg leading-snug sm:leading-relaxed max-w-xl">
              Stay steady, enjoy the season, and stop worrying about going backwards.
            </p>
          </div>

          {/* Lifestyle Image Card: Sits right below subheadline on mobile, right column on desktop */}
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 lg:self-center">
            <div className="relative rounded-xl lg:rounded-2xl overflow-hidden aspect-[16/10] lg:aspect-[4/3] border border-forest/15 shadow-sm lg:shadow-md bg-quiet">
              <img
                src="/images/wrk-strength-studio.jpg"
                alt="Calm coach-led movement in WRK Personal Training Christchurch studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-2.5 bottom-2.5 sm:inset-x-4 sm:bottom-4 flex justify-start pointer-events-none">
                <span className="inline-flex items-center bg-cream/95 backdrop-blur-sm text-forest text-[11px] sm:text-xs font-medium px-3 py-1.5 rounded-full border border-forest/10 shadow-sm">
                  3–4 manageable sessions/week · At-home &amp; gym options
                </span>
              </div>
            </div>
          </div>

          {/* Bullets + Primary CTA */}
          <div className="lg:col-span-7 lg:col-start-1 lg:row-start-2 space-y-3.5 sm:space-y-5">
            <ul className="space-y-1.5 sm:space-y-2.5">
              {HERO_HIGHLIGHTS.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2.5 text-sm sm:text-base text-forest font-medium leading-snug"
                >
                  <span className="w-5 h-5 rounded-full bg-quiet border border-forest/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-forest" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div ref={heroCtaRef} className="pt-0.5">
              <a
                href={checkoutReady ? STRIPE_SUMMER_MOMENTUM_URL : '#enrol-notice'}
                target={checkoutReady ? '_blank' : undefined}
                rel={checkoutReady ? 'noopener noreferrer' : undefined}
                onClick={handleCheckoutClick}
                className="w-full sm:w-auto inline-flex flex-col items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/25 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl transition-all shadow-sm text-center"
              >
                <span className="inline-flex items-center justify-center text-sm sm:text-base font-semibold tracking-tight">
                  Join Summer Momentum — $149 NZD
                  <ArrowRight className="w-4 h-4 ml-2 shrink-0" />
                </span>
                <span className="text-xs font-normal text-forest/85 mt-0.5">
                  Starts Monday 30 November · Closes 29 Nov
                </span>
              </a>

              {showCheckoutNotice && (
                <div
                  id="enrol-notice"
                  role="status"
                  className="mt-3 bg-quiet border border-forest/20 rounded-xl p-4 text-sm text-forest"
                >
                  <p className="font-medium mb-1">Online checkout link is being finalised.</p>
                  <p className="text-forest/80">
                    Send Hayden a quick message via{' '}
                    <Link to="/book" className="underline font-semibold text-forest hover:opacity-75">
                      our enquiry page
                    </Link>{' '}
                    and we will hold your spot for Monday 30 November.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section B: "Why Now" Empathy Strip (Soft Sand Surface) */}
      <section className="bg-quiet py-10 md:py-16 px-4 sm:px-6 lg:px-8 border-y border-forest/10">
        <div className="max-w-3xl mx-auto">
          <span className="text-[11px] uppercase tracking-widest font-semibold text-forest/75 block mb-2">
            WHY NOW
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest tracking-tight text-balance mb-3.5">
            December isn't the time for willpower battles or chasing PBs.
          </h2>
          <p className="text-forest/85 text-base md:text-lg leading-relaxed">
            When you're using a GLP-1 medication alongside your doctor, six weeks of work dos, Christmas lunches, and summer travel can make staying on track feel overwhelming. Summer Momentum removes the pressure of "going backwards"—giving you simple, repeatable movement and calm festive strategies so you arrive in mid-January feeling steady and in control.
          </p>
        </div>
      </section>

      {/* Section C: Visual 4-Card "What's Included" Grid Paired With App & Kiwi Summer Imagery */}
      <section id="whats-included" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="max-w-2xl mb-7 md:mb-10">
          <span className="text-[11px] uppercase tracking-widest font-semibold text-forest/75 block mb-2">
            WHAT'S INCLUDED
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest tracking-tight text-balance">
            Everything Inside the 6-Week Intake
          </h2>
        </div>

        {/* 4 Concise Deliverable Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 md:mb-8">
          {DELIVERABLES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="bg-quiet rounded-2xl border border-forest/15 p-5 sm:p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3.5">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-forest/65">
                      {item.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-cream border border-forest/15 text-forest flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-forest font-semibold mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-forest/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Showcase Cards: WRK App & NZ Summer BBQ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-quiet rounded-2xl border border-forest/15 overflow-hidden shadow-sm">
            <div className="aspect-[16/10] bg-cream overflow-hidden">
              <img
                src="/images/wrk-app-preview.jpg"
                alt="WRK Training App interface showing sustainable weekly movement sessions and notes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 sm:p-6">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-forest/70 block mb-1">
                IN YOUR POCKET · WRK APP
              </span>
              <h3 className="font-serif text-xl text-forest font-semibold mb-1">
                Steady Weekly Sessions &amp; Video Demos
              </h3>
              <p className="text-sm text-forest/80 leading-relaxed">
                Open your workout, follow clear video cues, and swap smoothly to fill-in travel sessions whenever holiday plans shift.
              </p>
            </div>
          </div>

          <div className="bg-quiet rounded-2xl border border-forest/15 overflow-hidden shadow-sm">
            <div className="aspect-[16/10] bg-cream overflow-hidden">
              <img
                src="/images/nz-christmas-bbq.jpg"
                alt="Relaxed New Zealand summer Christmas BBQ table with balanced seasonal food"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 sm:p-6">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-forest/70 block mb-1">
                FESTIVE FOOD &amp; BBQ COPING GUIDE
              </span>
              <h3 className="font-serif text-xl text-forest font-semibold mb-1">
                Enjoy Summer Gatherings Without Food Anxiety
              </h3>
              <p className="text-sm text-forest/80 leading-relaxed">
                Practical ways to pace meals when appetite shifts, protect protein and hydration, and avoid the "all-or-nothing" holiday spiral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section D: 2-Column Qualification Box ("Great fit if..." vs. "Look elsewhere if...") */}
      <section className="bg-quiet py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-y border-forest/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-7 max-w-2xl">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-forest/75 block mb-2">
              FIT &amp; CLINICAL SCOPE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest tracking-tight text-balance">
              Is Summer Momentum Right For You?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-cream rounded-2xl border border-forest/15 p-6 sm:p-7 shadow-sm">
              <h3 className="font-serif text-xl text-forest font-semibold mb-4">
                Great fit if...
              </h3>
              <ul className="space-y-3">
                {GREAT_FIT_ITEMS.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-forest/85 leading-relaxed">
                    <Check className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-cream rounded-2xl border border-forest/15 p-6 sm:p-7 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl text-forest font-semibold mb-4">
                  Look elsewhere if...
                </h3>
                <ul className="space-y-3">
                  {LOOK_ELSEWHERE_ITEMS.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-forest/80 leading-relaxed">
                      <XCircle className="w-5 h-5 text-forest/55 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-forest/10">
                <Link
                  to="/book"
                  className="inline-flex items-center text-sm font-semibold text-forest hover:opacity-75 transition-opacity group"
                >
                  Need 1:1 support instead? Book a free 15-minute chat
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          <p className="text-xs text-forest/70 mt-5 leading-relaxed max-w-3xl">
            Scope note: Summer Momentum provides sustainable movement programming and everyday nutrition coping strategies—always follow your prescribing clinician’s advice regarding GLP-1 medication, medical conditions, or rehabilitation.
          </p>
        </div>
      </section>

      {/* Section E: 5-Question FAQ Accordion */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-7 md:mb-9">
          <span className="text-[11px] uppercase tracking-widest font-semibold text-forest/75 block mb-2">
            PRACTICAL DETAILS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="bg-quiet rounded-2xl border border-forest/15 p-5 sm:p-6 md:p-8 shadow-sm">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={idx} className="border-b border-forest/15 last:border-0">
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="font-serif text-lg md:text-xl text-forest group-hover:opacity-80 transition-opacity pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-forest transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 pb-4 sm:pb-5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-forest/80 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section F: Final Bottom CTA Block */}
      <section className="bg-forest text-cream py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-forest-deep">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <span className="text-xs uppercase tracking-widest font-semibold text-citron block">
            6 WEEKS (30 NOV – 8 JAN) · $149 NZD ONE-OFF
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-cream tracking-tight text-balance">
            Take the guesswork—and the anxiety—out of the next six weeks.
          </h2>
          <p className="text-cream/85 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Sustainable 3–4 session/week movement in the WRK app plus our Festive Food &amp; BBQ Coping Guide. Enrolments close Sunday 29 November at 8:00 PM.
          </p>

          <div className="pt-2 flex flex-col items-center gap-4">
            <a
              href={checkoutReady ? STRIPE_SUMMER_MOMENTUM_URL : '#enrol-notice-footer'}
              target={checkoutReady ? '_blank' : undefined}
              rel={checkoutReady ? 'noopener noreferrer' : undefined}
              onClick={handleCheckoutClick}
              className="w-full sm:w-auto inline-flex flex-col items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/20 rounded-xl px-8 py-3.5 transition-all shadow-sm"
            >
              <span className="inline-flex items-center justify-center text-sm sm:text-base font-semibold tracking-tight">
                Join Summer Momentum — $149 NZD
                <ArrowRight className="w-4 h-4 ml-2 shrink-0" />
              </span>
              <span className="text-xs font-normal text-forest/85 mt-0.5">
                Starts Monday 30 November · Closes 29 Nov
              </span>
            </a>

            {showCheckoutNotice && (
              <p id="enrol-notice-footer" className="text-xs text-cream/85 max-w-md">
                Online checkout link is being finalised — use the link below to message Hayden directly.
              </p>
            )}

            <Link
              to="/book"
              className="inline-flex items-center text-sm font-medium text-cream/90 hover:text-citron transition-colors pt-1"
            >
              Have a quick question first? Send Hayden a message →
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Mobile Bottom Bar (Appears gently after scrolling past hero CTA) */}
      <div
        role="region"
        aria-label="Quick enrolment action"
        aria-hidden={!showStickyBar}
        className={`fixed bottom-0 inset-x-0 z-40 md:hidden bg-cream/95 backdrop-blur border-t border-forest/15 px-4 py-3 shadow-lg transition-all duration-300 ease-out ${
          showStickyBar
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold text-forest truncate">
              Summer Momentum · $149 NZD
            </p>
            <p className="text-[11px] text-forest/70">Starts 30 Nov</p>
          </div>
          <a
            href={checkoutReady ? STRIPE_SUMMER_MOMENTUM_URL : '#enrol-notice'}
            target={checkoutReady ? '_blank' : undefined}
            rel={checkoutReady ? 'noopener noreferrer' : undefined}
            onClick={handleCheckoutClick}
            className="shrink-0 inline-flex items-center justify-center bg-citron text-forest border border-forest/25 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider whitespace-nowrap shadow-sm"
          >
            Join Now →
          </a>
        </div>
      </div>
    </div>
  );
};
