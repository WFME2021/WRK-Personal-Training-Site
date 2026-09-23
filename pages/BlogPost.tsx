import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ArrowRight, BookOpen, Share2 } from 'lucide-react';
import { marked } from 'marked';
import { SeoHead } from '../components/SeoHead';
import { useContent } from '../context/ContentContext';

// Helper to demote H1s to H2s in markdown content to prevent SEO multiple-h1 issues
const parseMarkdownNoH1 = (content: string) => {
  if (!content) return '';
  const parsed = marked.parse(content) as string;
  return parsed.replace(/<h1/g, '<h2').replace(/<\/h1>/g, '</h2>');
};

export const BlogPost: React.FC = () => {
  const { blogPosts } = useContent();
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

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
