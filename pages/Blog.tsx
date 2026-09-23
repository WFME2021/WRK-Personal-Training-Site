import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { useContent } from '../context/ContentContext';
import { ArrowRight, BookOpen, Clock, Calendar, CheckCircle2 } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Training & Exercise',
  'Muscle & Strength',
  'Nutrition & Protein',
  'Hydration & Recovery',
  'Weight Loss & Maintenance',
  'Life After GLP-1s'
];

export const Blog: React.FC = () => {
  const { blogPosts } = useContent();
  const publishedPosts = blogPosts.filter(post => post.status === 'published' || !post.status);
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const filteredPosts = publishedPosts
    .filter(post => activeCategory === 'All' || post.category === activeCategory)
    .sort((a, b) => new Date(b.isoDate || b.date || 0).getTime() - new Date(a.isoDate || a.date || 0).getTime());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateReadTime = (content?: string) => {
    if (!content) return '4 min read';
    const words = content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;
    const mins = Math.max(1, Math.ceil(words / 200));
    return `${mins} min read`;
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
    }
  };

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const remainingPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "WRK GLP-1 Fitness Library",
    "url": "https://www.wrkpersonaltraining.co.nz/blog",
    "description": "Evidence-informed guides and essays on strength training, lean muscle preservation, protein fueling, and sustainable habits alongside medical weight loss.",
    "publisher": {
      "@type": "HealthAndFitnessBusiness",
      "name": "WRK Personal Training"
    }
  };

  return (
    <>
      <SeoHead
        title="GLP-1 Fitness Library | Training, Nutrition & Weight Loss | WRK"
        description="Read the WRK GLP-1 Fitness Library for evidence-informed guidance on strength training, muscle preservation, nutrition, and sustainable habits after weight loss."
        schema={schema}
      />
      <div className="bg-canvas text-charcoal min-h-screen font-sans selection:bg-spruce-800 selection:text-sand-50">
        
        {/* 1. Masthead Header */}
        <section className="bg-canvas pt-14 pb-12 px-6 max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-sans text-spruce-800 font-semibold mb-4">
            EVIDENCE-BASED GUIDES & ESSAYS
          </p>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight max-w-3xl mx-auto mb-4 leading-tight">
            The GLP-1 Fitness <span className="italic text-spruce-800">Library.</span>
          </h1>
          
          <p className="text-charcoal/80 max-w-xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
            Practical guidance for training, low-appetite fueling, and long-term capability alongside medical weight loss.
          </p>
        </section>

        {/* 2. Horizontal Category Filter Bar */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map(category => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-spruce-800 text-sand-50 shadow-sm'
                      : 'bg-white hover:bg-sand-100 text-charcoal/80 border border-charcoal/10'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Featured Story Card (First Post) */}
        {featuredPost && (
          <section className="max-w-6xl mx-auto px-6 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white rounded-2xl overflow-hidden border border-charcoal/5 shadow-sm hover:shadow-md transition-shadow group">
              
              {/* Image Column (7 cols) */}
              <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto h-full overflow-hidden relative bg-sand-100 min-h-[280px]">
                <Link to={`/blog/${featuredPost.slug}`} className="block h-full w-full">
                  <img
                    src={featuredPost.image?.url || 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop'}
                    alt={featuredPost.image?.alt || featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                {featuredPost.category && (
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-charcoal text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    {featuredPost.category}
                  </span>
                )}
              </div>

              {/* Content Column (5 cols) */}
              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-spruce-800 font-semibold uppercase tracking-wider mb-3">
                    <span>Featured Essay</span>
                    <span>•</span>
                    <span className="text-charcoal/50 font-normal">{calculateReadTime(featuredPost.content)}</span>
                  </div>

                  <Link to={`/blog/${featuredPost.slug}`}>
                    <h2 className="font-serif text-2xl sm:text-3xl text-charcoal hover:text-spruce-800 transition-colors mb-3 leading-snug">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="text-charcoal/70 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-charcoal/5 flex items-center justify-between">
                  <span className="text-xs text-charcoal/60 font-medium">
                    By {featuredPost.author?.name || 'Hayden Richards'}
                  </span>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="text-xs font-semibold uppercase tracking-wider text-spruce-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    Read Guide <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* 4. Editorial Article Grid (Remaining Posts) */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden border border-charcoal/5 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                {/* Image Container */}
                <div className="aspect-[16/10] overflow-hidden relative bg-sand-100">
                  <Link to={`/blog/${post.slug}`} className="block h-full w-full">
                    <img
                      src={post.image?.url || 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop'}
                      alt={post.image?.alt || post.title}
                      className="group-hover:scale-105 transition-transform duration-500 object-cover w-full h-full"
                    />
                  </Link>
                  {post.category && (
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-charcoal text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                      {post.category}
                    </span>
                  )}
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-charcoal/50 uppercase tracking-wider mb-2 font-medium">
                      <span>{post.date || 'Guide'}</span>
                      <span>•</span>
                      <span>{calculateReadTime(post.content)}</span>
                    </div>

                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="font-serif text-xl font-bold text-charcoal group-hover:text-spruce-800 transition-colors leading-snug mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-charcoal/70 text-sm leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-charcoal/5 flex items-center justify-between mt-auto">
                    <span className="text-[11px] text-charcoal/50">
                      By {post.author?.name || 'Hayden Richards'}
                    </span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-xs font-semibold uppercase tracking-wider text-spruce-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      Read Guide <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}

            {filteredPosts.length === 0 && (
              <div className="col-span-full bg-white border border-charcoal/5 rounded-2xl p-16 text-center text-charcoal/70">
                <BookOpen size={40} className="mx-auto text-spruce-800/40 mb-4" />
                <h3 className="font-serif text-xl text-charcoal mb-2">No guides found in this category yet.</h3>
                <p className="text-sm text-charcoal/60">Select another category above or check back shortly for new publications.</p>
              </div>
            )}
          </div>
        </section>

        {/* 5. Newsletter / Reader Subscription Band */}
        <section className="bg-sand-100/70 py-16 px-6 border-t border-charcoal/5 text-center">
          <div className="max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-spruce-800 font-semibold mb-2 block">
              THE WRK DISPATCH
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-3 tracking-tight">
              Intelligent Guidance Delivered Weekly
            </h2>
            <p className="text-charcoal/70 text-sm max-w-md mx-auto mb-6 leading-relaxed">
              Join adults receiving evidence-based protocols on GLP-1 fitness, protein anchoring, and habit preservation.
            </p>

            {newsletterSubmitted ? (
              <div className="inline-flex items-center gap-2 bg-spruce-800 text-sand-50 px-6 py-3 rounded-lg text-xs font-medium">
                <CheckCircle2 size={16} />
                <span>Thank you. You’re on the list for next week's edition.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-white border border-charcoal/15 rounded-md px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-1 focus:ring-spruce-800"
                />
                <button
                  type="submit"
                  className="bg-spruce-800 text-sand-50 hover:bg-spruce-900 px-6 py-3 rounded-md text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </section>

      </div>
    </>
  );
};
