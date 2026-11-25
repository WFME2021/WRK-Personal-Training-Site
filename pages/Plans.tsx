import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Dumbbell, MessageSquareText, Utensils, ShieldCheck } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import {
  PLAN_CATEGORIES,
  PlanCategory,
  SELF_GUIDED_PLANS,
} from '../src/data/selfGuidedPlans';

export const Plans: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | PlanCategory>('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPlans =
    selectedCategory === 'All'
      ? SELF_GUIDED_PLANS
      : SELF_GUIDED_PLANS.filter((plan) => plan.category === selectedCategory);

  const getTabLabel = (cat: 'All' | PlanCategory) =>
    cat === 'All' ? `All Plans (${SELF_GUIDED_PLANS.length})` : cat;

  return (
    <div className="bg-cream text-forest min-h-screen font-sans selection:bg-forest selection:text-cream overflow-x-hidden">
      <SeoHead
        title="Self-Guided Training Plans | 6–12 Week Programmes | WRK Personal Training"
        description="Structured 6- to 12-week self-guided strength, home, gym, and running programmes delivered in the WRK app. Every plan is capped at 3 to 4 sessions per week."
      />

      {/* 1. Plans Hub Hero */}
      <section className="pt-4 pb-6 md:pt-12 md:pb-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-[0.2em] font-semibold text-forest block mb-2 leading-snug">
            WRK TRAINING APP · SELF-GUIDED CATALOGUE
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-forest tracking-tight leading-tight">
            Self-Guided Training Plans
          </h1>
          <p className="text-forest/85 text-base sm:text-lg leading-relaxed max-w-2xl mt-3 mb-2">
            Structured 6- to 12-week programmes delivered straight to the WRK app. Every plan is capped at 3 to 4 sessions per week—no hidden double days, no guesswork.
          </p>
        </div>
      </section>

      {/* 2. Interactive Category Filter Tabs (Horizontally scrollable on mobile) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-6 md:pb-8">
        <div
          role="tablist"
          aria-label="Filter training plans by category"
          className="flex overflow-x-auto no-scrollbar gap-2 pb-2 md:pb-6 border-b border-forest/15"
        >
          {PLAN_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 whitespace-nowrap px-4 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors border ${
                  isActive
                    ? 'bg-forest text-cream border-forest shadow-sm'
                    : 'bg-quiet/70 text-forest border-forest/15 hover:bg-quiet'
                }`}
              >
                {getTabLabel(category)}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. 8-Product Catalog Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-14 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredPlans.map((plan) => (
            <article
              key={plan.slug}
              className="bg-quiet rounded-2xl border border-forest/15 p-5 sm:p-7 shadow-sm flex flex-col justify-between hover:border-forest/30 transition-colors"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-forest/70">
                    {plan.category}
                  </span>
                  {plan.statusBadge && (
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-forest bg-cream border border-forest/20 px-2.5 py-0.5 rounded">
                      {plan.statusBadge}
                    </span>
                  )}
                </div>

                <h2 className="font-serif text-2xl text-forest font-semibold mb-2">
                  {plan.title}
                </h2>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold text-forest bg-cream border border-forest/15 px-2.5 py-1 rounded">
                    {plan.durationBadge}
                  </span>
                  <span className="text-xs font-medium text-forest/80 bg-cream/70 border border-forest/10 px-2.5 py-1 rounded">
                    {plan.equipmentTag}
                  </span>
                </div>

                <p className="text-sm text-forest/85 leading-relaxed mb-4">
                  {plan.summary}
                </p>

                <p className="text-xs text-forest/75 leading-relaxed bg-cream/65 border border-forest/10 rounded-lg p-3 mb-5">
                  {plan.fitNote}
                </p>
              </div>

              <div className="pt-4 border-t border-forest/10 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-forest/65 block">
                    ONE-OFF ACCESS
                  </span>
                  <span className="font-serif text-lg font-bold text-forest">
                    {plan.priceLabel}
                  </span>
                </div>
                <Link
                  to={`/plans/${plan.slug}`}
                  className="inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/20 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-all shadow-sm whitespace-nowrap"
                >
                  View Plan Details
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. What's Included in Every Plan (3-Column Scope Clarity Block) */}
      <section className="bg-quiet py-12 md:py-20 px-4 sm:px-6 lg:px-8 border-y border-forest/10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-8 md:mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-forest block mb-2">
              SCOPE CLARITY · WHAT YOU GET
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-forest tracking-tight">
              What's Included in Every Self-Guided Plan
            </h2>
            <p className="text-forest/80 text-base mt-3 leading-relaxed">
              Clear templates and structured app delivery—kept deliberately distinct from 1:1 coaching and clinical care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-cream rounded-2xl border border-forest/15 p-6 sm:p-7 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-quiet border border-forest/15 text-forest flex items-center justify-center mb-4">
                <Dumbbell className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-forest font-semibold mb-2.5">
                App-Based Workouts (My PT Hub)
              </h3>
              <p className="text-sm text-forest/80 leading-relaxed">
                Clear sets, reps, rest notes, and video exercise demonstrations inside the WRK app so you know exactly what to do each session.
              </p>
            </div>

            <div className="bg-cream rounded-2xl border border-forest/15 p-6 sm:p-7 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-quiet border border-forest/15 text-forest flex items-center justify-center mb-4">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-forest font-semibold mb-2.5">
                7-Day Example Meal Plan + Swaps
              </h3>
              <p className="text-sm text-forest/80 leading-relaxed">
                A practical, balanced example menu with everyday New Zealand food swaps to illustrate portions—not an individual clinical or dietetic prescription.
              </p>
            </div>

            <div className="bg-cream rounded-2xl border border-forest/15 p-6 sm:p-7 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-quiet border border-forest/15 text-forest flex items-center justify-center mb-4">
                <MessageSquareText className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-forest font-semibold mb-2.5">
                Scheduled Weekly Guidance
              </h3>
              <p className="text-sm text-forest/80 leading-relaxed">
                Automated weekly focus messages sent inside the app to keep you consistent (distinct from 1:1 personal check-ins or bespoke programme edits).
              </p>
            </div>
          </div>

          <div className="mt-6 md:mt-8 bg-cream/80 border border-forest/15 rounded-xl p-4 sm:p-5 flex items-start gap-3 text-xs sm:text-sm text-forest/80">
            <ShieldCheck className="w-5 h-5 text-forest shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Clinical boundary:</strong> Self-guided plans provide general fitness programming and everyday nutrition examples only. Always follow your prescribing clinician’s advice regarding GLP-1 medication, medical conditions, or injury rehabilitation. Need individualised coaching?{' '}
              <Link to="/book" className="underline font-semibold text-forest hover:opacity-75">
                Book a free 15-minute chat →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
