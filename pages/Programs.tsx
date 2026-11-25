import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Globe, Smartphone } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { PageHeroBanner } from '../components/PageHeroBanner';
import { FindYourFit } from '../src/components/FindYourFit';

interface CoachingPathway {
  id: string;
  tag: string;
  title: string;
  description: string;
  details: string;
  ctaLabel: string;
  to: string;
  icon: React.ComponentType<{ className?: string }>;
}

const COACHING_PATHWAYS: CoachingPathway[] = [
  {
    id: 'studio',
    tag: 'IN-PERSON · GET ME FITTER, ADDINGTON',
    title: '1:1 Studio Coaching (Addington, Christchurch)',
    description:
      'Train 1:1 with Hayden in a calm, welcoming studio space (1/12 Show Place, Addington). Ideal if you want real-time technique guidance, joint-friendly modifications, and face-to-face accountability.',
    details:
      'Available Mon–Fri, 6:00 AM – 2:00 PM · Active bookings managed via the WRK app.',
    ctaLabel: 'Explore Studio Coaching →',
    to: '/studio',
    icon: MapPin,
  },
  {
    id: 'online',
    tag: 'PERSONALISED · ANYWHERE IN NZ',
    title: '1:1 Online Coaching',
    description:
      'Custom training programming delivered inside the WRK app, practical everyday nutrition habits, and direct weekly check-ins with Hayden—wherever you train.',
    details:
      'Built for people who want an individualised plan and ongoing coach feedback without coming into the studio.',
    ctaLabel: 'Explore Online Coaching →',
    to: '/online',
    icon: Globe,
  },
];

export const Programs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-cream text-forest min-h-screen font-sans selection:bg-forest selection:text-cream">
      <SeoHead
        title="1:1 Coaching | Studio & Online | WRK Personal Training"
        description="Hands-on 1:1 coaching in Addington, Christchurch or online through the WRK app—built around your body, your schedule, and real life."
      />

      <PageHeroBanner
        imageSrc="/images/banner-coaching.jpg"
        imageAlt="Coach guiding a strength training client inside a calm sunlit Christchurch studio"
        eyebrow="1:1 PERSONAL COACHING · CHRISTCHURCH & ONLINE"
        title="Hands-on coaching built around your body, your schedule, and real life."
        subtitle="Whether we train together in our private Addington studio or work together online through the WRK app, 1:1 coaching means your programme, pace, and adjustments are built specifically around you."
      />

      {/* Section B: Two Primary 1:1 Pathways */}
      <section className="pt-10 pb-10 md:pt-12 md:pb-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {COACHING_PATHWAYS.map((pathway) => {
            const Icon = pathway.icon;
            return (
              <div
                key={pathway.id}
                className="bg-quiet rounded-2xl border border-forest/15 p-6 sm:p-8 shadow-sm flex flex-col justify-between h-full"
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

                  <h2 className="font-serif text-2xl sm:text-[1.7rem] text-forest font-semibold tracking-tight mb-3 leading-snug">
                    {pathway.title}
                  </h2>

                  <p className="text-sm sm:text-base text-forest/85 leading-relaxed mb-5">
                    {pathway.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <p className="text-xs sm:text-sm text-forest/80 leading-relaxed pt-4 border-t border-forest/15 mb-5">
                    {pathway.details}
                  </p>
                  <Link
                    to={pathway.to}
                    className="w-full inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/20 rounded-xl px-5 py-3.5 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm"
                  >
                    {pathway.ctaLabel}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cross-Link Strip: Prefer to Train Independently? */}
        <div className="mt-6 md:mt-8 bg-quiet rounded-2xl border border-forest/15 p-5 sm:p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-forest/75">
              <Smartphone className="w-3.5 h-3.5" />
              PREFER TO TRAIN INDEPENDENTLY?
            </span>
            <p className="text-sm sm:text-base text-forest leading-relaxed">
              Looking for a ready-to-follow 6- to 12-week programme without weekly 1:1 check-ins?
            </p>
          </div>

          <Link
            to="/plans"
            className="shrink-0 inline-flex items-center justify-center bg-cream hover:bg-forest hover:text-cream text-forest border border-forest/25 rounded-xl px-5 py-3 text-xs sm:text-sm font-semibold tracking-wide transition-colors whitespace-nowrap"
          >
            Browse Self-Guided Plans →
          </Link>
        </div>

        {/* Interactive Find Your Fit Qualifier */}
        <div className="mt-10 md:mt-14">
          <FindYourFit context="programs" />
        </div>
      </section>

      {/* Section C: Relaxed 15-Minute Chat CTA Strip */}
      <section className="bg-forest text-cream py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-forest-deep">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-cream/15">
            <div className="max-w-xl space-y-2.5">
              <h2 className="font-serif text-2xl sm:text-3xl text-cream tracking-tight">
                Let's have a 15-minute chat
              </h2>
              <p className="text-cream/85 text-sm sm:text-base leading-relaxed">
                Think of it like grabbing a quick coffee—no hard sell. Tell me what you're working around, and I'll help you figure out whether 1:1 Studio Coaching, 1:1 Online Coaching, or a self-guided plan makes the most sense.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/20 rounded-xl px-6 py-3.5 text-sm font-semibold tracking-tight transition-all shadow-sm whitespace-nowrap"
              >
                Book a Free 15-Min Chat
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>

          <p className="text-xs text-cream/70 pt-5 leading-relaxed max-w-3xl">
            Personal trainer with 20+ years on the gym floor—not a medical clinic, physiotherapist, or dietitian. Always follow your clinician's advice regarding medical conditions, medications, or injury rehabilitation.
          </p>
        </div>
      </section>
    </div>
  );
};
