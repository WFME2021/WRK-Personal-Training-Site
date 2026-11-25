import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Smartphone, Globe, Calendar } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ENABLE_SUMMER_MOMENTUM } from '../constants';

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
    tag: 'IN-PERSON · CHRISTCHURCH',
    title: '1:1 Studio Coaching (Addington, Christchurch)',
    summary:
      'Hands-on, individualised strength and conditioning inside Get Me Fitter (1/12 Show Place, Addington). Built around your injury history, confidence, and real-world schedule.',
    bestFor:
      'Best if you want direct technique coaching, joint-friendly modifications, and in-person accountability.',
    ctaLabel: 'Explore Studio Coaching →',
    to: '/studio',
    icon: MapPin,
  },
  {
    id: 'online',
    tag: 'PERSONALISED · ANYWHERE',
    title: '1:1 Online Coaching',
    summary:
      'Custom training programming delivered via the WRK app, practical nutrition habits, and direct weekly check-ins with Hayden—wherever you train.',
    bestFor:
      'Best if you want a programme tailored specifically to you, ongoing adjustments, and personal accountability without coming into the studio.',
    ctaLabel: 'Explore Online Coaching →',
    to: '/online',
    icon: Globe,
  },
  {
    id: 'plans',
    tag: 'INDEPENDENT · 3–4 SESSIONS/WEEK',
    title: 'Self-Guided Training Plans (6–12 Weeks)',
    summary:
      'Structured, ready-to-follow programmes inside the WRK app—complete with video demos, a 7-day example meal plan with swaps, and scheduled weekly guidance notes.',
    bestFor:
      'Best if you are happy training independently on a sensible 3- to 4-day/week structure.',
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
        title="How We Work Together | Coaching & Self-Guided Plans | WRK Personal Training"
        description="Three practical ways to train with WRK Personal Training: 1:1 Studio Coaching in Addington, Christchurch, 1:1 Online Coaching, or structured 6–12 week Self-Guided Training Plans."
      />

      {/* Section A: Compact Hero (Fits Cleanly Above the Fold on Mobile) */}
      <section className="pt-5 pb-7 md:pt-12 md:pb-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-[11px] sm:text-xs tracking-wider sm:tracking-[0.2em] font-sans uppercase text-forest/75 font-semibold mb-2">
            HOW WE WORK TOGETHER · CHRISTCHURCH &amp; ONLINE
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest tracking-tight leading-[1.12] text-balance mb-3">
            Three practical ways to train with WRK.
          </h1>
          <p className="text-forest/85 text-sm sm:text-lg leading-relaxed max-w-2xl">
            Whether you want hands-on 1:1 coaching in Addington, personalised online support, or a structured self-guided plan to follow on your own schedule—start with the level of support that fits your life.
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
                    <span className="inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cream border border-forest/15 text-forest">
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
                  <Link
                    to={pathway.to}
                    className="w-full inline-flex items-center justify-center bg-forest text-cream hover:bg-forest-deep rounded-xl px-5 py-3 text-xs sm:text-sm font-semibold tracking-wide transition-colors shadow-sm"
                  >
                    {pathway.ctaLabel}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section C: Optional Seasonal Highlight Strip */}
        {ENABLE_SUMMER_MOMENTUM && (
          <div className="mt-6 md:mt-8 bg-quiet rounded-2xl border border-forest/20 p-5 sm:p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-citron text-forest border border-forest/15">
                <Calendar className="w-3.5 h-3.5" />
                STARTS MONDAY 30 NOVEMBER
              </span>
              <p className="text-sm sm:text-base text-forest leading-relaxed">
                Heading into the holidays on a GLP-1? Join our 6-week Summer Momentum intake (30 Nov – 8 Jan) for sustainable movement and festive coping strategies — $149 NZD.
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
      </section>

      {/* Section D: "Not Sure Which Option Fits?" Decision Strip */}
      <section className="bg-forest text-cream py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-forest-deep">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-cream/15">
            <div className="max-w-xl space-y-2.5">
              <h2 className="font-serif text-2xl sm:text-3xl text-cream tracking-tight">
                Not sure where to start?
              </h2>
              <p className="text-cream/85 text-sm sm:text-base leading-relaxed">
                Book a free, no-pressure 15-minute chat with Hayden. Tell me what you're working around, and I'll point you straight to the best fit—even if that's a self-guided plan.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/20 rounded-xl px-6 py-3.5 text-sm font-semibold tracking-tight transition-all shadow-sm whitespace-nowrap"
              >
                Book a Free 15-Min Chat →
              </Link>
            </div>
          </div>

          <p className="text-xs text-cream/70 pt-5 leading-relaxed max-w-3xl">
            All client session bookings and diaries run through the WRK app (My PT Hub). General fitness and nutrition guidance only—always follow your prescribing clinician's advice regarding medical conditions or medications.
          </p>
        </div>
      </section>
    </div>
  );
};
