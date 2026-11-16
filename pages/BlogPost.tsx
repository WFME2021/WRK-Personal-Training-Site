import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ArrowRight, BookOpen, Share2 } from 'lucide-react';
import { marked } from 'marked';
import { SeoHead } from '../components/SeoHead';
import { useContent } from '../context/ContentContext';
import type { BlogPost as BlogPostData } from '../data/blogs';

// Preserve the existing published guide when the live CMS omits its record.
const recoveredGuide: BlogPostData = {
  "id": "1773709253574",
  "slug": "how-to-start-strength-training",
  "title": "How to Start Strength Training When You Feel Unfit",
  "excerpt": "Starting strength training can feel intimidating when you feel out of shape, stiff, or unsure where to begin. This guide breaks it down into a simple, realistic starting point you can actually follow.",
  "content": "# How to Start Strength Training When You Feel Unfit\n\nFeeling unfit is one of the biggest reasons people delay strength training.\n\nThey assume they need to lose weight first, get fitter first, or build confidence first. In reality, strength training is often one of the best places to begin. You do not need to be in good shape to start. You need a sensible entry point, a bit of structure, and permission to keep it simple.\n\nThis guide will show you how to start strength training when you feel rusty, deconditioned, heavier than you would like, or just unsure where to begin. You will learn what to focus on first, what to avoid, and how to build early momentum without wrecking yourself in week one.\n\n## Quick Answer\n\nIf you feel unfit, the best way to start strength training is to begin with two short full-body sessions per week, use simple movements you can control, keep the effort moderate, and progress slowly.\n\nFor most adults, that means starting with basics like squats to a chair, hip hinges, rows, push-up variations, and core work. You do not need fancy programming, hard workouts, or perfect motivation. You need consistency, good form, and a plan you can repeat.\n\n## Why strength training is a good place to start\n\nA lot of people think cardio is the obvious first step when they feel out of shape.\n\nCardio can absolutely help, but strength training gives beginners something many other forms of exercise do not: clear structure, clear progress, and practical benefits you notice in daily life. Getting stronger can make stairs easier, improve balance, support joint health, and help you feel more capable in your own body.\n\nIt also works well for people who do not feel ready for long workouts. A short, well-planned strength session can still be productive. That matters when you are busy, low on confidence, or coming back after a long break.\n\nJust as important, strength training gives you an early win: you can scale almost everything. A squat can start as sitting down and standing up from a chair. A push-up can start against a wall. A row can start with a band or a cable machine. You meet the movement where you are, instead of forcing yourself into a version you are not ready for yet.\n\n## What most beginners get wrong\n\nThe biggest mistake is doing too much, too soon.\n\nThat usually looks like copying advanced workouts, chasing soreness, training hard every day, or picking exercises that feel impressive rather than doable. None of that helps if it leaves you overly sore, discouraged, or injured.\n\nThe better approach is to think in layers.\n\nYour first layer is learning the main movement patterns well enough to feel stable and in control. Your second layer is repeating them often enough to build confidence. Only then do you worry about making things heavier, harder, or more intense.\n\nAnother common mistake is assuming discomfort means you are failing. Early training can feel awkward. You may get mildly sore. Your fitness may not match your ambition yet. That is normal. Sharp pain, joint pain, or symptoms that feel wrong are a different story and should not be pushed through.\n\n## Start with these movement patterns, not random exercises\n\nYou do not need dozens of exercises. You need a handful that cover the basics.\n\nA good beginner plan is built around these patterns:\n\n## 1. Squat\n\nThis teaches you to sit down and stand up well. Start with a chair squat or sit-to-stand if needed.\n\n## 2. Hinge\n\nThis is the pattern you use to bend and pick things up safely. Glute bridges or light Romanian deadlift patterns are a good starting point.\n\n## 3. Push\n\nThis covers pressing strength for the chest, shoulders, and arms. Wall push-ups or incline push-ups usually make more sense than floor push-ups at first.\n\n## 4. Pull\n\nRows are a great place to start. They help with posture and upper-body strength.\n\n## 5. Lunge or split stance work\n\nSingle-leg work improves balance and control, but it can come later if needed. Supported split squats or assisted reverse lunges are often more beginner-friendly than full lunges.\n\n## 6. Core stability\n\nThink planks, dead bugs, or simple bracing drills rather than endless sit-ups.\n\nThese movement patterns matter because they carry over into daily life. They help you build strength in ways that feel useful, not just exhausting.\n\n## A simple beginner strength training plan\n\nIf you feel unfit, start smaller than you think you need.\n\nTwo full-body sessions per week is enough to begin. That gives you enough recovery time between sessions and makes the habit easier to stick to.\n\nHere is a simple starting template:\n\n## Workout A\n\nChair squat or bodyweight squat \u2013 1 to 2 sets of 8 to 12 reps  \nWall or incline push-up \u2013 1 to 2 sets of 8 to 12 reps  \nRow variation \u2013 1 to 2 sets of 8 to 12 reps  \nGlute bridge \u2013 1 to 2 sets of 10 to 15 reps  \nPlank or dead bug \u2013 2 short sets\n\n## Workout B\n\nSupported split squat or step-up \u2013 1 to 2 sets of 6 to 10 reps each side  \nHip hinge pattern \u2013 1 to 2 sets of 8 to 12 reps  \nOverhead press or another push variation \u2013 1 to 2 sets of 8 to 12 reps  \nRow or pulldown \u2013 1 to 2 sets of 8 to 12 reps  \nCarry or core drill \u2013 2 short sets\n\nA few things matter more than the exact exercise list:\n\nUse a weight or variation you can control.  \nLeave a couple of reps in the tank.  \nRest as needed.  \nFinish feeling like you could have done a bit more.\n\nThat is a much better place to stop than crawling out of the gym and dreading the next session.\n\n## How hard should it feel?\n\nFor beginners, moderate effort is enough.\n\nYou should feel like you are working, but not panicking. A useful rule of thumb is this: your last few reps should feel challenging, but your form should still look tidy.\n\nIf you can easily do far more reps than planned, the exercise is probably too easy. If you cannot control the movement, it is too hard.\n\nYou also do not need marathon sessions. Short sessions done consistently beat occasional heroic efforts. Even small amounts of strength work can be worthwhile when you are building the habit and learning the movements.\n\n## How to progress without overdoing it\n\nProgress should be boring in the best possible way.\n\nYou do a little more over time, not everything at once.\n\nThat could mean:\n\n- using a slightly harder variation\n- adding a small amount of weight\n- doing one or two more reps\n- adding one extra set\n- moving with better control and range\n\nOne simple rule: if your sessions are leaving you flattened for days, you are probably doing too much. Mild soreness is normal. Losing the ability to sit on the toilet comfortably for three days is not a badge of honour.\n\n## What to do if you feel intimidated or embarrassed\n\nThis part matters more than people admit.\n\nA lot of beginners do not struggle with information. They struggle with feeling exposed, behind, or judged. That is why the best starting plan is often the one that reduces friction.\n\nThat might mean:\n\n- training at quieter times\n- starting at home for a few weeks\n- using machines instead of the free weights area\n- having a written plan before you arrive\n- working with a coach for a short block to learn the basics\n\nYou do not need to \u201cbe confident\u201d before you begin. Confidence usually comes after a few successful sessions, not before them.\n\nTreat your first month as practice, not a test. You are not proving you are fit. You are learning how to train.\n\n## A few safety rules worth taking seriously\n\nWarm up first. Five to ten minutes of easy movement and a few dynamic drills are enough for most people.\n\nBreathe normally. Do not hold your breath through every rep.\n\nMove with control. Using momentum usually hides weak positions rather than fixing them.\n\nGive yourself recovery time. Training the same muscle groups hard every day is rarely useful for beginners.\n\nAnd be sensible about your starting point. If you have chest pain, dizziness, unexplained shortness of breath, major joint pain, or a significant medical history, get individual guidance before pushing on.\n\n## What results should you expect first?\n\nIn the first few weeks, the biggest changes are often not visual.\n\nYou may notice:\n\n- better energy\n- less stiffness\n- better balance and coordination\n- more confidence with movement\n- improved recovery from day-to-day tasks\n- more reps or better control with the same exercise\n\nThat counts as progress.\n\nFor many beginners, early success is about feeling more capable before looking dramatically different. The scale may not tell the full story, especially if you are getting stronger, moving more, and building lean tissue over time.\n\n## Final Thoughts\n\nIf you feel unfit, strength training is not something you need to earn your way into.\n\nIt is one of the ways you start changing things.\n\nKeep it simple. Train twice a week. Learn the basic patterns. Start with exercises you can actually do well. Progress slowly. Let consistency do the heavy lifting.\n\nAnd if you are also trying to work out how much training you really need, read **How Often Should You Actually Train**. If this is a restart after a long gap, **How to Come Back After Months Off** will help you avoid the usual mistakes. If you are still unsure what kind of approach suits you best, **How to Know What Kind of Training You Actually Need** is the next step.\n",
  "faq": "## FAQs\n\n### Do I need to get fitter before I start strength training?\n\nNo. Strength training can be one of the best starting points when you feel unfit because it can be scaled to your current level. You can begin with supported, bodyweight, or machine-based exercises and build from there.\n\n### How many days a week should a beginner strength train?\n\nFor most beginners, two full-body sessions per week is a strong starting point. That is enough to build consistency, practise the main movements, and recover properly.\n\n### Is it normal to feel sore after your first few workouts?\n\nA bit of soreness can be normal, especially if you are new or returning after time off. Sharp, localised, or worsening pain is different and should not be ignored.\n\n### Should I start at home or in a gym?\n\nEither can work. Home is often a good option if the gym feels overwhelming. A gym can work well if you prefer structure, equipment, or coaching support. The best option is the one you are most likely to stick with.\n\n### What if I have an injury or a medical condition?\n\nGet individual advice before starting if you have a significant injury, persistent pain, or a medical condition that could affect exercise tolerance.",
  "date": "March 17, 2026",
  "isoDate": "2026-03-17T00:29:31.192Z",
  "updatedDate": "",
  "category": "Training",
  "image": {
    "url": "https://i.postimg.cc/MKnbjvN1/dad-carrypack-hiking.jpg",
    "alt": "Adult beginner starting strength training with simple supported exercises",
    "seoDescription": "A real-life gym or home training scene showing an adult beginner doing a supported seated leg press with a coach nearby, in a calm and non-intimidating environment."
  },
  "author": {
    "name": "H. Richards",
    "role": "Personal Trainer",
    "bio": "With over 20 years of experience coaching high performers, H. Richards delivers precision training frameworks built on evidence and practical application. His approach cuts through the noise to help you achieve sustainable results, backed by consistently excellent 5-star client reviews.",
    "avatarUrl": "https://i.postimg.cc/ZYHDT3kr/Screen-Shot-2026-06-23-at-2-27-18-PM.png"
  },
  "seoTitle": "How to Start Strength Training When You Feel Unfit",
  "seoDescription": "Learn how to start strength training safely when you feel unfit, with a simple plan, beginner exercises, and realistic advice that actually helps.",
  "primaryKeyword": "How to Start Strength Training",
  "secondaryKeywords": "beginner strength training, starting strength training when out of shape, strength training for beginners, how to get back into strength training, first strength workout for beginners",
  "ctaText": "If you feel unsure where to start, book an assessment and we can help you build a realistic strength plan that matches your current fitness, confidence, and goals.",
  "ctaLink": "https://www.wrkpersonaltraining.co.nz/personal-training",
  "references": "\u2022 U.S. Department of Health and Human Services. Physical Activity Guidelines for Americans, 2nd edition.\n\u2022 CDC. Adult Activity: An Overview.\n\u2022 CDC. Benefits of Physical Activity for Adults.\n\u2022 NHS. Physical activity guidelines for adults aged 19 to 64.\n\u2022 NHS. Strength exercises.",
  "relatedPosts": [
    "1773693530641"
  ],
  "localLocation": "Christchurch",
  "localServiceCategory": "Personal Training",
  "localServicePage": "https://www.wrkpersonaltraining.co.nz/personal-training",
  "localKeywordNote": "",
  "status": "published"
};

// Helper to demote H1s to H2s in markdown content to prevent SEO multiple-h1 issues
const parseMarkdownNoH1 = (content: string) => {
  if (!content) return '';
  const parsed = marked.parse(content) as string;
  return parsed.replace(/<h1/g, '<h2').replace(/<\/h1>/g, '</h2>');
};

export const BlogPost: React.FC = () => {
  const { blogPosts } = useContent();
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug) || (slug === recoveredGuide.slug ? recoveredGuide : undefined);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    if (typeof window === 'undefined') return null;
    return <Navigate to="/blog" replace />;
  }

  // Reading Time Calculation
  const words = (post.content || '').replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(1, Math.ceil(words / 200));

  // Related posts resolution: either explicitly configured IDs or posts in same category / newest
  const relatedList = (post.relatedPosts && post.relatedPosts.length > 0)
    ? post.relatedPosts.map(id => blogPosts.find(p => p.id === id)).filter((p): p is typeof post => Boolean(p))
    : blogPosts
        .filter(p => p.id !== post.id && (p.category === post.category || !post.category))
        .slice(0, 3);

  // Generate Schema.org JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [post.image?.url || ''],
    "datePublished": post.isoDate,
    "dateModified": post.isoDate,
    "author": [{
      "@type": "Person",
      "name": post.author?.name || 'Hayden Richards',
      "jobTitle": "Founder & Head Coach",
      "url": "https://www.wrkpersonaltraining.co.nz/about"
    }],
    "publisher": {
      "@type": "HealthAndFitnessBusiness",
      "name": "WRK Personal Training",
      "url": "https://www.wrkpersonaltraining.co.nz"
    },
    "description": post.seoDescription || post.excerpt
  };

  return (
    <>
      <SeoHead 
        title={post.seoTitle || `${post.title} | WRK Personal Training`}
        description={post.seoDescription || post.excerpt}
        schema={schemaData}
        type="article"
        imageUrl={post.image?.url}
        publishedTime={post.isoDate}
        authorName={post.author?.name || 'Hayden Richards'}
      />

      <article className="bg-canvas text-charcoal min-h-screen font-sans selection:bg-spruce-800 selection:text-sand-50">
        
        {/* 1. Article Header & Masthead */}
        <header className="bg-canvas pt-12 pb-8 px-6 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-charcoal/60 hover:text-spruce-800 transition-colors group"
            >
              <ArrowLeft size={14} className="mr-1.5 transition-transform group-hover:-translate-x-1" />
              Back to Library
            </Link>

            {post.category && (
              <span className="bg-sand-100 text-spruce-800 text-[11px] font-semibold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full inline-block">
                {post.category}
              </span>
            )}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight leading-[1.18] mb-6 font-bold">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-charcoal/60 uppercase tracking-wider font-medium">
            <span>By {post.author?.name || 'Hayden Richards'}</span>
            <span>·</span>
            <span>{post.date || 'Guide'}</span>
            <span>·</span>
            <span>{readTime} min read</span>
          </div>

          {post.excerpt && (
            <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed mt-6 max-w-2xl mx-auto italic font-serif">
              "{post.excerpt}"
            </p>
          )}
        </header>

        {/* 2. Featured Lead Image */}
        {post.image?.url && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
            <div className="aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-charcoal/5 shadow-sm relative bg-sand-100">
              <img
                src={post.image.url}
                alt={post.image.alt || post.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        )}

        {/* 3. Editorial Reading Body */}
        <main className="max-w-3xl mx-auto px-6">
          <div 
            className="prose prose-lg max-w-none text-charcoal/90 prose-p:font-sans prose-p:text-base sm:prose-p:text-lg prose-p:leading-relaxed sm:prose-p:leading-[1.8] prose-p:mb-6 prose-headings:font-serif prose-headings:text-charcoal prose-headings:tracking-tight prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:text-spruce-900 prose-h2:border-b prose-h2:border-charcoal/5 prose-h2:pb-2 prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:text-charcoal prose-h3:mt-8 prose-h3:mb-3 prose-blockquote:bg-sand-100/70 prose-blockquote:border-l-4 prose-blockquote:border-spruce-800 prose-blockquote:rounded-r-xl prose-blockquote:p-6 prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:font-serif prose-blockquote:text-lg prose-blockquote:text-spruce-900 prose-blockquote:leading-snug prose-blockquote:not-italic prose-ul:my-6 prose-li:my-2 prose-li:text-charcoal/90 prose-a:text-spruce-800 prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-spruce-900 prose-strong:text-charcoal prose-strong:font-bold"
            dangerouslySetInnerHTML={{ __html: parseMarkdownNoH1(post.content || '') }}
          />

          {/* FAQ Section if defined */}
          {post.faq && (
            <div className="mt-14 pt-10 border-t border-charcoal/10">
              <span className="text-xs uppercase tracking-widest text-spruce-800 font-semibold mb-2 block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-6">
                Common Inquiries on this Topic
              </h2>
              <div 
                className="prose prose-base max-w-none text-charcoal/80 prose-headings:font-serif prose-headings:text-charcoal prose-a:text-spruce-800"
                dangerouslySetInnerHTML={{ __html: parseMarkdownNoH1(post.faq) }}
              />
            </div>
          )}

          {/* References Section */}
          {post.references && (
            <div className="mt-12 bg-sand-50 p-6 sm:p-8 rounded-2xl border border-charcoal/5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal/60 mb-3">
                References & Clinical Sources
              </h3>
              <div 
                className="prose prose-sm max-w-none text-charcoal/70 prose-a:text-spruce-800 prose-a:underline"
                dangerouslySetInnerHTML={{ __html: parseMarkdownNoH1(post.references) }}
              />
            </div>
          )}

          {/* 4. Author Sign-off & Bio Box */}
          <section className="mt-16 pt-10 border-t border-charcoal/10">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-charcoal/5 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <img
                src={post.author?.avatarUrl || "https://i.postimg.cc/ZYHDT3kr/Screen-Shot-2026-06-23-at-2-27-18-PM.png"}
                alt={post.author?.name || "Hayden Richards"}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shrink-0 border border-charcoal/10"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop";
                }}
              />
              <div className="text-center sm:text-left flex-1">
                <span className="text-[10px] tracking-widest uppercase font-semibold text-spruce-800 block mb-1">
                  ABOUT THE AUTHOR
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-0.5">
                  {post.author?.name || 'Hayden Richards'}
                </h3>
                <span className="text-xs text-charcoal/60 mb-3 block font-medium">
                  {post.author?.role || 'Founder & Head Coach · Strength & Sarcopenia Specialist'}
                </span>
                <p className="text-charcoal/80 text-sm leading-relaxed mb-4">
                  {post.author?.bio || 'Hayden has spent 20 years helping adults build sustainable physical strength and resilience. At WRK, he provides evidence-informed coaching specifically tailored to the physiological realities of GLP-1 weight loss.'}
                </p>
                <Link
                  to="/programs"
                  className="text-xs font-semibold text-spruce-800 hover:text-spruce-900 uppercase tracking-wider inline-flex items-center gap-1 group"
                >
                  Explore Coaching Programs <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </section>

          {/* 5. In-Article Conversion Banner */}
          <div className="my-12">
            <div className="bg-spruce-800 text-sand-50 rounded-2xl p-8 sm:p-10 shadow-md text-center">
              <h3 className="font-serif text-2xl sm:text-3xl text-sand-50 mb-3 tracking-tight">
                {post.ctaText || "Protect Your Muscle While the Weight Drops"}
              </h3>
              <p className="text-sand-100/80 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                Take our 2-minute assessment to evaluate your current protein intake and training consistency.
              </p>
              <Link
                to={post.ctaLink || "/assessment"}
                className="bg-sand-100 text-spruce-900 hover:bg-white px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wider inline-block transition-colors shadow-sm"
              >
                Take the Free Assessment
              </Link>
            </div>
          </div>

        </main>

        {/* 6. Related Articles Grid */}
        {relatedList.length > 0 && (
          <section className="bg-sand-50 py-16 px-6 border-t border-charcoal/5 mt-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">
                  FURTHER READING
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-charcoal tracking-tight">
                  Related Guides & Protocols
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedList.map((relPost) => (
                  <article
                    key={relPost.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-charcoal/5 shadow-sm hover:shadow-md transition-all flex flex-col"
                  >
                    <div className="aspect-[16/10] overflow-hidden relative bg-sand-100">
                      <Link to={`/blog/${relPost.slug}`} className="block h-full w-full">
                        <img
                          src={relPost.image?.url || 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop'}
                          alt={relPost.image?.alt || relPost.title}
                          className="group-hover:scale-105 transition-transform duration-500 object-cover w-full h-full"
                        />
                      </Link>
                      {relPost.category && (
                        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-charcoal text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                          {relPost.category}
                        </span>
                      )}
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <span className="text-[11px] text-charcoal/50 uppercase tracking-wider mb-2 font-medium block">
                          {relPost.date || 'Guide'}
                        </span>
                        <Link to={`/blog/${relPost.slug}`}>
                          <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-spruce-800 transition-colors leading-snug mb-2 line-clamp-2">
                            {relPost.title}
                          </h3>
                        </Link>
                        <p className="text-charcoal/70 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">
                          {relPost.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-charcoal/5 flex items-center justify-between mt-auto">
                        <span className="text-[11px] text-charcoal/50">
                          By {relPost.author?.name || 'Hayden Richards'}
                        </span>
                        <Link
                          to={`/blog/${relPost.slug}`}
                          className="text-xs font-semibold uppercase tracking-wider text-spruce-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                        >
                          Read <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

      </article>
    </>
  );
};
