import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Dumbbell,
  MessageSquareText,
  ShieldCheck,
  Utensils,
  XCircle,
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { isCheckoutUrlConfigured } from '../constants';
import { getPlanBySlug } from '../src/data/selfGuidedPlans';

export const PlanDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const plan = getPlanBySlug(slug);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showCheckoutNotice, setShowCheckoutNotice] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowCheckoutNotice(false);
    setOpenFaqIndex(0);
  }, [slug]);

  if (!plan) {
    return (
      <div className="bg-cream text-forest min-h-[70vh] flex items-center justify-center px-4 py-16">
        <SeoHead
          title="Plan Not Found | WRK Personal Training"
          description="Browse WRK Personal Training's structured 6- to 12-week self-guided training plans."
        />
        <div className="max-w-lg text-center space-y-5 bg-quiet border border-forest/15 rounded-2xl p-6 sm:p-10 shadow-sm">
          <h1 className="font-serif text-3xl text-forest">Plan Not Found</h1>
          <p className="text-sm sm:text-base text-forest/80 leading-relaxed">
            We couldn't find the self-guided programme you were looking for. Browse all 8 plans below.
          </p>
          <Link
            to="/plans"
            className="inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/20 px-6 py-3 text-xs font-semibold uppercase tracking-widest rounded-md transition-all"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Self-Guided Plans
          </Link>
        </div>
      </div>
    );
  }

  const checkoutReady = !plan.qaInProgress && isCheckoutUrlConfigured(plan.stripeUrl);

  const handlePurchaseClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!checkoutReady) {
      e.preventDefault();
      setShowCheckoutNotice(true);
      const noticeEl = document.getElementById('plan-checkout-notice');
      if (noticeEl) {
        noticeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <div className="bg-cream text-forest min-h-screen font-sans selection:bg-forest selection:text-cream overflow-x-hidden">
      <SeoHead
        title={`${plan.title} | Self-Guided Training Plan | WRK Personal Training`}
        description={`${plan.summary} ${plan.durationBadge} delivered in the WRK app.`}
      />

      {/* Back Link */}
      <div className="pt-4 md:pt-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <Link
          to="/plans"
          className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-forest/75 hover:text-forest transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
          All Self-Guided Plans
        </Link>
      </div>

      {/* 1. Plan Header & Primary CTA */}
      <section className="pt-4 pb-10 md:pt-6 md:pb-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-[0.2em] font-semibold text-forest">
                {plan.category}
              </span>
              {plan.statusBadge && (
                <span className="text-[11px] font-semibold uppercase tracking-wider text-forest bg-quiet border border-forest/20 px-2.5 py-0.5 rounded">
                  {plan.statusBadge}
                </span>
              )}
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest tracking-tight leading-tight">
              {plan.title}
            </h1>

            <p className="text-base sm:text-lg text-forest/85 leading-relaxed">
              {plan.summary}
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-semibold text-forest bg-quiet border border-forest/15 px-3 py-1.5 rounded-md">
                {plan.durationBadge}
              </span>
              <span className="text-xs font-medium text-forest bg-quiet border border-forest/15 px-3 py-1.5 rounded-md">
                {plan.equipmentTag}
              </span>
            </div>

            <div className="bg-quiet/70 border border-forest/15 rounded-xl p-4 text-sm text-forest/85">
              {plan.fitNote}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-quiet border border-forest/15 rounded-2xl p-5 sm:p-7 shadow-sm space-y-5">
              <div className="flex items-baseline justify-between gap-4 border-b border-forest/10 pb-4">
                <div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-forest/70 block">
                    SELF-GUIDED ACCESS
                  </span>
                  <span className="font-serif text-3xl font-bold text-forest">
                    {plan.qaInProgress ? 'QA in Progress' : plan.priceLabel}
                  </span>
                </div>
                <span className="text-xs font-medium text-forest/75 text-right">
                  {plan.durationWeeks} weeks · WRK App
                </span>
              </div>

              <ul className="space-y-2.5 text-sm text-forest/85">
                <li className="flex items-start gap-2.5">
                  <Dumbbell className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <span>My PT Hub workouts with sets, reps, rest notes, and video demos</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Utensils className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <span>General 7-day example meal plan with everyday NZ swaps</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MessageSquareText className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <span>Automated weekly guidance prompts (not 1:1 check-ins)</span>
                </li>
              </ul>

              {plan.qaInProgress ? (
                <div className="space-y-3 pt-1">
                  <Link
                    to={`/contact?plan=${encodeURIComponent(plan.title)}`}
                    className="w-full inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/25 px-6 py-3.5 text-base sm:text-xs font-semibold sm:uppercase sm:tracking-widest rounded-md transition-all shadow-sm"
                  >
                    Join Waitlist / Notify Me
                    <ArrowRight className="w-4 h-4 ml-2 shrink-0" />
                  </Link>
                  <p className="text-xs text-forest/75 leading-relaxed text-center">
                    Final workout and nutrition QA is underway. Leave your email and Hayden will let you know as soon as checkout opens.
                  </p>
                </div>
              ) : (
                <div className="space-y-3 pt-1">
                  <a
                    href={checkoutReady ? plan.stripeUrl : '#plan-checkout-notice'}
                    target={checkoutReady ? '_blank' : undefined}
                    rel={checkoutReady ? 'noopener noreferrer' : undefined}
                    onClick={handlePurchaseClick}
                    className="w-full inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/25 px-6 py-3.5 text-base sm:text-xs font-semibold sm:uppercase sm:tracking-widest rounded-md transition-all shadow-sm"
                  >
                    Purchase Plan — {plan.priceLabel}
                    <ArrowRight className="w-4 h-4 ml-2 shrink-0" />
                  </a>

                  {showCheckoutNotice && (
                    <div
                      id="plan-checkout-notice"
                      role="status"
                      className="bg-cream border border-forest/20 rounded-xl p-3.5 text-xs text-forest leading-relaxed"
                    >
                      <p className="font-semibold mb-1">Stripe checkout is not yet live for this plan.</p>
                      <p className="text-forest/80">
                        You can{' '}
                        <Link
                          to={`/contact?plan=${encodeURIComponent(plan.title)}`}
                          className="underline font-semibold text-forest"
                        >
                          register early interest with Hayden
                        </Link>{' '}
                        while final QA and pricing are confirmed.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Qualification Box */}
      <section className="bg-quiet py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-y border-forest/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 md:mb-8">
            <span className="text-xs uppercase tracking-widest font-semibold text-forest block mb-2">
              FIT &amp; PREREQUISITES
            </span>
            <h2 className="font-serif text-3xl text-forest tracking-tight">
              Is {plan.title} the Right Fit?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-cream rounded-2xl border border-forest/15 p-6 sm:p-7 shadow-sm">
              <h3 className="font-serif text-xl text-forest font-semibold mb-4">
                For you if...
              </h3>
              <ul className="space-y-3.5">
                {plan.forYouIf.map((item, idx) => (
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
                <ul className="space-y-3.5">
                  {plan.lookElsewhereIf.map((item, idx) => (
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
                  Want 1:1 coaching instead? Book a free 15-minute chat
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visual 7-Day Weekly Rhythm */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-6 md:mb-8 max-w-2xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-forest block mb-2">
            TYPICAL WEEK · 3 TO 4 SESSIONS MAX
          </span>
          <h2 className="font-serif text-3xl text-forest tracking-tight">
            Visual 7-Day Weekly Rhythm
          </h2>
          <p className="text-sm sm:text-base text-forest/80 mt-2 leading-relaxed">
            {plan.rhythmNote}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {plan.weeklyRhythm.map((slot) => {
            const isActiveDay = slot.type !== 'recovery';
            return (
              <div
                key={slot.day}
                className={`rounded-xl p-4 border flex flex-col justify-between min-h-[96px] sm:min-h-[104px] ${
                  isActiveDay
                    ? 'bg-forest text-cream border-forest-deep shadow-sm'
                    : 'bg-quiet text-forest border-forest/15'
                }`}
              >
                <span
                  className={`text-[11px] uppercase tracking-widest font-semibold ${
                    isActiveDay ? 'text-citron' : 'text-forest/65'
                  }`}
                >
                  {slot.day}
                </span>
                <span className="font-serif text-sm font-semibold leading-snug mt-3">
                  {slot.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Scope FAQ Accordion */}
      <section className="bg-quiet py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-forest/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-xs uppercase tracking-widest font-semibold text-forest block mb-2">
              PLAN DETAILS &amp; SCOPE
            </span>
            <h2 className="font-serif text-3xl text-forest tracking-tight">
              Scope &amp; Practical Questions
            </h2>
          </div>

          <div className="bg-cream rounded-2xl border border-forest/15 p-5 sm:p-6 md:p-8 shadow-sm">
            {plan.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border-b border-forest/15 last:border-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="font-serif text-lg text-forest group-hover:opacity-80 transition-opacity pr-4">
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

          <div className="mt-6 md:mt-8 bg-cream/85 border border-forest/15 rounded-xl p-4 sm:p-5 flex items-start gap-3 text-xs sm:text-sm text-forest/80">
            <ShieldCheck className="w-5 h-5 text-forest shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              General fitness and everyday nutrition guidance only—always follow your prescribing clinician’s advice regarding GLP-1 medication, medical conditions, or rehabilitation.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Mobile Bottom Bar */}
      <div
        role="region"
        aria-label="Quick plan action"
        className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-cream/95 backdrop-blur border-t border-forest/15 px-4 py-3 shadow-lg"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold text-forest truncate">
              {plan.title} · {plan.qaInProgress ? 'QA in Progress' : plan.priceLabel}
            </p>
            <p className="text-[11px] text-forest/70">
              {plan.durationWeeks} weeks · WRK App
            </p>
          </div>
          {plan.qaInProgress ? (
            <Link
              to={`/contact?plan=${encodeURIComponent(plan.title)}`}
              className="shrink-0 inline-flex items-center justify-center bg-citron text-forest border border-forest/25 px-4 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider whitespace-nowrap shadow-sm"
            >
              Join Waitlist →
            </Link>
          ) : (
            <a
              href={checkoutReady ? plan.stripeUrl : '#plan-checkout-notice'}
              target={checkoutReady ? '_blank' : undefined}
              rel={checkoutReady ? 'noopener noreferrer' : undefined}
              onClick={handlePurchaseClick}
              className="shrink-0 inline-flex items-center justify-center bg-citron text-forest border border-forest/25 px-4 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider whitespace-nowrap shadow-sm"
            >
              Join Now →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
