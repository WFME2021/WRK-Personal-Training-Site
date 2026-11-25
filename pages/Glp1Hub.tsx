import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, ShieldCheck, BookOpen } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ENABLE_SUMMER_MOMENTUM } from '../constants';
import { useContent } from '../context/ContentContext';

interface PillarItem {
  index: string;
  title: string;
  body: string;
}

interface StartingPointCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  ctaLabel: string;
  to: string;
  highlight?: boolean;
}

interface FeaturedArticleCard {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  imageUrl: string;
  imageAlt: string;
}

const GLP1_PILLARS: PillarItem[] = [
  {
    index: '01',
    title: 'Send the Right Signal to Your Body',
    body: 'When you eat less, your body looks for energy wherever it can find it. Two to four sensible strength sessions a week tell your body clearly: keep the muscle, lose the rest.',
  },
  {
    index: '02',
    title: 'Keep Everyday Nutrition Simple',
    body: 'When your appetite is lower, every meal counts a bit more. No macro spreadsheets—just practical ways to anchor meals with protein and stay hydrated without feeling overwhelmed.',
  },
  {
    index: '03',
    title: 'Respect Your Energy & Joints',
    body: "Training shouldn't wipe you out for three days. We focus on joint-friendly resistance work that leaves you feeling better when you finish than when you started.",
  },
];

const STARTING_POINTS: StartingPointCard[] = [
  {
    id: 'assessment',
    tag: 'FREE DIAGNOSTIC · INSTANT SCORE',
    title: 'Free 2-Minute GLP-1 Fitness Assessment',
    description:
      'Answer a few quick questions on your current movement, protein baseline, and recovery to see where your muscle-protection habits stand—plus a simple 7-day focus plan.',
    ctaLabel: 'Start the 2-Min Assessment →',
    to: '/assessment',
    highlight: true,
  },
  {
    id: 'toolkit',
    tag: 'SELF-GUIDED · ONE-OFF ACCESS',
    title: 'The WRK GLP-1 App Toolkit ($29 NZD)',
    description:
      'A practical starter toolkit inside the WRK app with structured strength sessions, video demos, and everyday food guidance—less than the cost of one takeaway lunch.',
    ctaLabel: 'View the $29 App Toolkit →',
    to: '/glp1-toolkit',
  },
  {
    id: 'coaching',
    tag: 'PERSONALISED SUPPORT',
    title: '1:1 Coaching (Addington Studio or Online)',
    description:
      'Want a programme built around your schedule, energy levels, and injury history? Train 1:1 with Hayden in Addington, Christchurch or online through the WRK app.',
    ctaLabel: 'Explore 1:1 Coaching →',
    to: '/coaching',
  },
];

const FEATURED_GUIDE_SLUGS = [
  'glp-1-strength-training',
  'glp1-protein-intake-guide',
  'can-you-lose-weight-drink-alcohol-glp-1',
];

const FEATURED_GUIDE_FALLBACKS: FeaturedArticleCard[] = [
  {
    slug: 'glp-1-strength-training',
    category: 'Training & Exercise',
    title: 'GLP-1 Strength Training: How to Build and Maintain Muscle',
    excerpt:
      'Wondering how you should exercise while taking Ozempic, Wegovy, or Mounjaro? Learn how sensible resistance training protects lean muscle and energy.',
    readTime: '6 min read',
    imageUrl: 'https://i.postimg.cc/WbYZJ20S/Start-Strength-Training-When-You-Feel-Unfit.jpg',
    imageAlt: 'Strength training session focused on protecting lean muscle during GLP-1 weight loss',
  },
  {
    slug: 'glp1-protein-intake-guide',
    category: 'Nutrition & Protein',
    title: 'GLP-1 Protein Guide: How Much Protein Do You Need?',
    excerpt:
      'When appetite drops on a GLP-1, getting enough protein without feeling overly full takes a simpler approach. Here is how to anchor everyday meals.',
    readTime: '5 min read',
    imageUrl: 'https://i.postimg.cc/L66K7vds/Meal-Prep.jpg',
    imageAlt: 'Balanced protein-rich meals prepared for consistent daily habits on GLP-1 medication',
  },
  {
    slug: 'can-you-lose-weight-drink-alcohol-glp-1',
    category: 'Hydration & Recovery',
    title: 'Hydration, Recovery & Social Drinks on a GLP-1',
    excerpt:
      'Practical guidance on balancing hydration, sleep recovery, and social occasions while keeping your energy and progress on track.',
    readTime: '4 min read',
    imageUrl: 'https://i.postimg.cc/yxkPJ8PZ/pexels-olly-821054.jpg',
    imageAlt: 'Balancing social dinners, hydration, and recovery while on a GLP-1 plan',
  },
];

const ArticleCardImage: React.FC<{ src: string; alt: string; title: string }> = ({ src, alt, title }) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-forest/10 via-quiet to-forest/5 flex flex-col items-center justify-center p-6 text-center">
        <BookOpen className="w-7 h-7 text-forest/60 mb-2" />
        <span className="font-serif text-sm text-forest/80 line-clamp-2">{title}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  );
};

export const Glp1Hub: React.FC = () => {
  const { blogPosts } = useContent();
  const [heroImageError, setHeroImageError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateReadTime = (content?: string, fallbackTime = '5 min read') => {
    if (!content) return fallbackTime;
    const words = content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;
    const mins = Math.max(1, Math.ceil(words / 200));
    return `${mins} min read`;
  };

  const featuredGuides: FeaturedArticleCard[] = FEATURED_GUIDE_SLUGS.map((slug, index) => {
    const fallback = FEATURED_GUIDE_FALLBACKS[index];
    const livePost = blogPosts.find(
      (post) => post.slug === slug && (post.status === 'published' || !post.status)
    );

    if (livePost) {
      return {
        slug: livePost.slug,
        category: livePost.category || fallback.category,
        title: livePost.title.replace(/\?\?+$/, '?'),
        excerpt: livePost.excerpt || fallback.excerpt,
        readTime: calculateReadTime(livePost.content, fallback.readTime),
        imageUrl: livePost.image?.url || fallback.imageUrl,
        imageAlt: (livePost.image?.alt || livePost.title || fallback.imageAlt).trim(),
      };
    }

    return fallback;
  });

  return (
    <div className="bg-cream text-forest min-h-screen font-sans selection:bg-forest selection:text-cream">
      <SeoHead
        title="GLP-1 Strength & Lifestyle Support | Christchurch & Online | WRK Personal Training"
        description="Practical strength training, simple protein habits, and joint-friendly coaching for adults on GLP-1 medications in Christchurch and online across New Zealand."
      />

      {/* Section A: Full-Bleed Editorial Hero Banner */}
      <section className="relative bg-forest min-h-[72vh] md:min-h-[82vh] flex items-center overflow-hidden -mt-14 md:-mt-20 pt-20 pb-12 md:pt-28 md:pb-16">
        {!heroImageError && (
          <img
            src="/images/glp1-hub-hero.jpg"
            alt="Adult performing a controlled goblet squat in a calm sunlit coaching studio"
            referrerPolicy="no-referrer"
            onError={() => setHeroImageError(true)}
            className="absolute inset-0 w-full h-full object-cover object-center sm:object-[65%_center] z-0"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest/85 to-forest/65 md:to-forest/40 z-10" />

        <div className="relative z-20 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left">
            <p className="text-cream/85 text-[11px] sm:text-xs font-semibold tracking-wider sm:tracking-[0.18em] uppercase leading-snug mb-3">
              GLP-1 STRENGTH &amp; LIFESTYLE SUPPORT · CHRISTCHURCH &amp; ONLINE
            </p>
            <h1 className="text-cream font-serif text-3xl sm:text-5xl md:text-[3.25rem] tracking-tight leading-[1.12] text-balance mb-4 md:mb-5">
              Losing weight on a <span className="whitespace-nowrap">GLP-1?</span> Let's make sure you keep your strength and energy too.
            </h1>
            <p className="text-cream/90 text-sm sm:text-lg leading-relaxed max-w-xl mb-6 md:mb-8">
              When weight drops quickly, your body can lose muscle alongside fat. Here is how practical strength training and simple everyday protein habits help you feel strong, capable, and in control—working calmly alongside your prescribing doctor.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                to="/assessment"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/20 rounded-xl px-6 py-3.5 text-sm font-semibold tracking-tight transition-all shadow-lg whitespace-nowrap"
              >
                Take the 2-Min GLP-1 Fitness Check →
              </Link>
              <Link
                to="/book"
                className="inline-flex items-center justify-center sm:justify-start text-sm font-semibold text-cream underline underline-offset-4 hover:text-citron transition-colors whitespace-nowrap py-1"
              >
                Or book a free 15-min chat with Hayden →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section B: Conditional Seasonal Intake Banner */}
      {ENABLE_SUMMER_MOMENTUM && (
        <section aria-label="Summer Momentum 6-Week Intake" className="pt-10 pb-10 md:pt-12 md:pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="bg-forest text-cream rounded-2xl border border-forest-deep p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2.5">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-citron">
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span>STARTS MONDAY 30 NOVEMBER · 6-WEEK INTAKE</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-cream tracking-tight text-balance">
                Summer Momentum (30 Nov – 8 Jan) — $149 NZD
              </h2>
              <p className="text-sm sm:text-base text-cream/85 leading-relaxed">
                Heading into Christmas and summer BBQs on a GLP-1? Six weeks of manageable movement, travel workouts, and our Festive Food &amp; Social Coping Guide so you enjoy the holidays without worrying about going backwards.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/summer-momentum"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/20 rounded-xl px-6 py-3.5 text-sm font-semibold tracking-tight transition-all shadow-sm whitespace-nowrap"
              >
                Explore Summer Momentum →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Section C: Plain-English "Why Strength Matters on a GLP-1" */}
      <section className={`bg-quiet py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-y border-forest/10 ${!ENABLE_SUMMER_MOMENTUM ? 'mt-0' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-8 md:mb-10">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-forest/75 mb-2">
              WHY STRENGTH TRAINING MATTERS
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest tracking-tight text-balance">
              The simple reason lifting weights matters right now.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GLP1_PILLARS.map((pillar) => (
              <div
                key={pillar.index}
                className="bg-cream rounded-2xl border border-forest/15 p-6 sm:p-7 shadow-sm flex flex-col justify-start"
              >
                <span className="text-xs font-semibold tracking-widest text-forest/65 tabular-nums mb-3 block">
                  {pillar.index}.
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-forest font-semibold tracking-tight mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-forest/85 leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section D: Choose Your GLP-1 Starting Point */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="max-w-2xl mb-8 md:mb-10">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-forest/75 mb-2">
            WHERE TO BEGIN
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest tracking-tight text-balance">
            Choose Your GLP-1 Starting Point
          </h2>
          <p className="text-sm sm:text-base text-forest/80 mt-2.5 leading-relaxed">
            Whether you want a quick check-in on your current habits, a low-cost app toolkit, or 1:1 coaching with Hayden, start with the option that fits your week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {STARTING_POINTS.map((card) => (
            <div
              key={card.id}
              className="bg-quiet rounded-2xl border border-forest/15 p-6 sm:p-7 shadow-sm flex flex-col justify-between h-full"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-forest/75 mb-3">
                  {card.tag}
                </p>
                <h3 className="font-serif text-2xl text-forest font-semibold tracking-tight mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-forest/85 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-forest/15 mt-auto">
                <Link
                  to={card.to}
                  className={`w-full inline-flex items-center justify-center rounded-xl px-5 py-3.5 text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap ${
                    card.highlight
                      ? 'bg-citron text-forest hover:brightness-95 border border-forest/20 shadow-sm'
                      : 'bg-forest text-cream hover:bg-forest-deep shadow-sm'
                  }`}
                >
                  {card.ctaLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section E: Featured GLP-1 Guides & Articles Preview */}
      <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-forest/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-forest/75 mb-2">
              PLAIN-ENGLISH READING
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-forest tracking-tight text-balance">
              Practical Guides on Training, Protein &amp; Hydration
            </h2>
          </div>

          <Link
            to="/articles"
            className="inline-flex items-center text-sm font-semibold text-forest hover:opacity-75 transition-opacity whitespace-nowrap shrink-0"
          >
            Read All Articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {featuredGuides.map((guide) => (
            <article
              key={guide.slug}
              className="group bg-quiet/70 rounded-2xl border border-forest/15 overflow-hidden shadow-sm flex flex-col justify-between h-full hover:border-forest/30 transition-colors"
            >
              <Link to={`/articles/${guide.slug}`} className="block aspect-[16/10] overflow-hidden bg-quiet relative">
                <ArticleCardImage
                  src={guide.imageUrl}
                  alt={guide.imageAlt}
                  title={guide.title}
                />
              </Link>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-forest/70 mb-2.5">
                    <span>{guide.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{guide.readTime}</span>
                  </div>
                  <Link to={`/articles/${guide.slug}`} className="block">
                    <h3 className="font-serif text-xl text-forest font-semibold tracking-tight mb-2.5 leading-snug group-hover:opacity-80 transition-opacity">
                      {guide.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-forest/80 leading-relaxed mb-5 line-clamp-3">
                    {guide.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-forest/10 mt-auto">
                  <Link
                    to={`/articles/${guide.slug}`}
                    className="inline-flex items-center text-xs sm:text-sm font-semibold text-forest hover:opacity-75 transition-opacity whitespace-nowrap"
                  >
                    <BookOpen className="w-4 h-4 mr-1.5 shrink-0" />
                    Read Guide
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Section F: For GPs, Nurses & Allied Health Referrers */}
      <section className="pb-14 md:pb-20 pt-4 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-quiet rounded-2xl border border-forest/15 p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2.5">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-forest/75">
                HEALTHCARE PROVIDERS &amp; REFERRERS
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl text-forest tracking-tight text-balance">
                Supporting your patients alongside medical care.
              </h2>
              <p className="text-sm sm:text-base text-forest/85 leading-relaxed">
                WRK Personal Training provides practical, non-clinical strength and lifestyle coaching for adults prescribed GLP-1 medications—helping patients preserve lean muscle, physical function, and sustainable habits while remaining strictly within personal training scope.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/for-referrers"
                className="w-full sm:w-auto inline-flex items-center justify-center text-center bg-cream hover:bg-forest hover:text-cream text-forest border border-forest/25 rounded-xl px-5 py-3.5 text-xs sm:text-sm font-semibold tracking-wide transition-colors sm:whitespace-nowrap"
              >
                Visit the Healthcare Referrers Page &amp; DLE Card Info →
              </Link>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-forest/15 flex items-start gap-3 text-xs text-forest/75 leading-relaxed">
            <ShieldCheck className="w-4 h-4 text-forest shrink-0 mt-0.5" />
            <p>
              <strong>Scope clarity:</strong> Hayden Richards is a personal trainer with 20+ years on the gym floor—not a medical clinician, prescriber, physiotherapist, or clinical dietitian. Always follow your prescribing clinician's guidance regarding GLP-1 medication, dosing, and medical care.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
