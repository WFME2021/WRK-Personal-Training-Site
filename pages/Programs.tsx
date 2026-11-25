import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Smartphone, Globe, Calendar } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ENABLE_SUMMER_MOMENTUM, ENABLE_SELF_GUIDED_PLANS } from '../constants';
import { FindYourFit } from '../src/components/FindYourFit';

interface TriagePathway {
  id: string;
  tag: string;
  title: string;
  summary: string;
  bestFor: string;
  ctaLabel: string;
  to: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PATHWAYS: TriagePathway[] = [
  {
    id: 'studio',
    tag: 'IN-PERSON · ADDINGTON, CHRISTCHURCH',
    title: '1:1 Studio Coaching (Addington)',
    summary:
      'Train face-to-face with me inside Get Me Fitter (1/12 Show Place, Addington)—a quiet, uncrowded space with easy parking outside. I coach Mon–Fri from 6:00 AM to 2:00 PM.',
    bestFor:
      'Best if you want hands-on coaching right beside you, simple tweaks around sore joints, and someone in your corner each week.',
    ctaLabel: 'See Studio Coaching →',
    to: '/studio',
    icon: MapPin,
  },
  {
    id: 'online',
    tag: '1:1 ONLINE · ANYWHERE IN NZ',
    title: '1:1 Online Coaching',
    summary:
      'A personal plan built around your home gear or local gym inside the WRK app, paired with straightforward food habits and regular check-ins with me.',
    bestFor:
      'Best if you like having a plan made specifically for your week and a coach checking in—without needing to drive to Addington.',
    ctaLabel: 'See Online Coaching →',
    to: '/online',
    icon: Globe,
  },
  {
    id: 'plans',
    tag: 'SELF-GUIDED · 3–4 SESSIONS/WEEK',
    title: 'Self-Guided Plans (6–12 Weeks)',
    summary:
      'Ready-to-follow programmes inside the WRK app—complete with short exercise videos, simple meal ideas with swaps, and weekly notes from me.',
    bestFor:
      'Best if you are happy training on your own schedule and just want a sensible 3- to 4-day/week plan so you don’t have to guess.',
    ctaLabel: 'Browse Self-Guided Plans →',
    to: '/plans',
    icon: Smartphone,
  },
];

export const Programs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-cream text-forest min-h-screen font-sans selection:bg-forest selection:text-cream">
      <SeoHead
        title="How We Work Together | Coaching & Plans | WRK Personal Training"
        description="Three calm ways to work with Hayden at WRK Personal Training: 1:1 Studio Coaching in Addington, 1:1 Online Coaching, or structured 6–12 week Self-Guided Plans."
      />

      {/* Section A: Compact Hero (Fits Cleanly Above the Fold on Mobile) */}
      <section className="pt-5 pb-7 md:pt-12 md:pb-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-[11px] sm:text-xs tracking-wider sm:tracking-[0.2em] font-sans uppercase text-forest/75 font-semibold mb-2">
            HOW WE WORK TOGETHER · CHRISTCHURCH &amp; ONLINE
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest tracking-tight leading-[1.12] text-balance mb-3">
            Pick the level of support that actually suits your week.
          </h1>
          <p className="text-forest/85 text-sm sm:text-lg leading-relaxed max-w-2xl">
            Think of these three options like a quick chat over coffee about how much hands-on help you want right now. Some people want me standing right beside them in Addington; others just want a clear plan in their pocket.
          </p>
        </div>
      </section>

      {/* Section B: The 3-Pathway Triage Grid */}
      <section className="pb-10 md:pb-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PATHWAYS.map((pathway) => {
            const Icon = pathway.icon;
            return (
              <div
                key={pathway.id}
                className="bg-quiet rounded-2xl border border-forest/15 p-6 sm:p-7 shadow-sm flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-forest/75">
                      {pathway.tag}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-cream border border-forest/15 text-forest flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h2 className="font-serif text-2xl text-forest font-semibold tracking-tight mb-3 leading-snug">
                    {pathway.title}
                  </h2>

                  <p className="text-sm sm:text-base text-forest/85 leading-relaxed mb-5">
                    {pathway.summary}
                  </p>
                </div>

                <div className="mt-auto">
                  <p className="text-xs sm:text-sm text-forest/80 leading-relaxed pt-4 border-t border-forest/15 mb-5">
                    {pathway.bestFor}
                  </p>
                  {pathway.id === 'plans' && !ENABLE_SELF_GUIDED_PLANS ? (
                    <a
                      href="#find-your-fit"
                      className="w-full inline-flex items-center justify-center bg-forest text-cream hover:bg-forest-deep rounded-xl px-5 py-3 text-xs sm:text-sm font-semibold tracking-wide transition-colors shadow-sm"
                    >
                      Try a Free 7-Day App Pass ↓
                    </a>
                  ) : (
                    <Link
                      to={pathway.to}
                      className="w-full inline-flex items-center justify-center bg-forest text-cream hover:bg-forest-deep rounded-xl px-5 py-3 text-xs sm:text-sm font-semibold tracking-wide transition-colors shadow-sm"
                    >
                      {pathway.ctaLabel}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Section C: Optional Seasonal Highlight Strip */}
        {ENABLE_SUMMER_MOMENTUM && (
          <div className="mt-6 md:mt-8 bg-quiet rounded-2xl border border-forest/20 p-5 sm:p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-forest">
                <Calendar className="w-3.5 h-3.5" />
                STARTS MONDAY 30 NOVEMBER · 6-WEEK INTAKE
              </span>
              <p className="text-sm sm:text-base text-forest leading-relaxed">
                Heading into Christmas on a GLP-1? Join Summer Momentum (30 Nov – 8 Jan) for 3–4 realistic sessions a week and practical BBQ &amp; festive food coping strategies — $149 NZD.
              </p>
            </div>

            <Link
              to="/summer-momentum"
              className="shrink-0 inline-flex items-center justify-center bg-cream hover:bg-forest hover:text-cream text-forest border border-forest/25 rounded-xl px-5 py-3 text-xs sm:text-sm font-semibold tracking-wide transition-colors whitespace-nowrap"
            >
              View Summer Momentum →
            </Link>
          </div>
        )}
        {/* Find Your Fit Interactive Qualifier (Below 3 Cards, Above Decision Strip) */}
        <div className="mt-10 md:mt-14">
          <FindYourFit context="programs" />
        </div>
      </section>

      {/* Section D: "Not Sure Which Option Fits?" Decision Strip */}
      <section className="bg-forest text-cream py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-forest-deep">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-cream/15">
            <div className="max-w-xl space-y-2.5">
              <h2 className="font-serif text-2xl sm:text-3xl text-cream tracking-tight">
                Still not sure which one makes sense?
              </h2>
              <p className="text-cream/85 text-sm sm:text-base leading-relaxed">
                Let's have a relaxed 15-minute chat—like grabbing a quick coffee. Tell me what you're working around, and I'll give you an honest steer on where to start.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/20 rounded-xl px-6 py-3.5 text-sm font-semibold tracking-tight transition-all shadow-sm whitespace-nowrap"
              >
                Grab a Free 15-Min Chat →
              </Link>
            </div>
          </div>

          <p className="text-xs text-cream/70 pt-5 leading-relaxed max-w-3xl">
            All client session bookings and diaries run through the WRK app (My PT Hub). Practical personal training and everyday food guidance only—always follow your doctor's advice on medical conditions or prescriptions.
          </p>
        </div>
      </section>
    </div>
  );
};
