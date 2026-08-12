
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { marked } from 'marked';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { useContent } from '../context/ContentContext';

export const BlogPost: React.FC = () => {
  const { blogPosts } = useContent();
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Reading Time Calculation
  const words = post.content.replace(/<[^>]*>/g, '').split(' ').length;
  const readTime = Math.ceil(words / 200);

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
      "name": post.author?.name || 'WRK Personal Training',
      "url": "https://www.wrkpersonaltraining.co.nz"
    }],
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
        authorName={post.author?.name}
      />

      <article className="bg-[#FAFAF9] min-h-screen text-[#2C3539] transition-colors duration-300">
        {/* Micro-trust banner */}
        <div className="w-full bg-[#FAFAF9] border-b border-neutral-200 py-3 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center space-x-6 md:space-x-12 text-[11px] uppercase tracking-[0.15em] text-[#2C3539]/60 font-semibold">
            <span>GLP-1 Specialized</span>
            <span className="hidden md:inline text-[#8A9A86]">&bull;</span>
            <span>Muscle Preservation Focus</span>
            <span className="hidden md:inline text-[#8A9A86]">&bull;</span>
            <span>Data-Driven Tracking</span>
            <span className="hidden md:inline text-[#8A9A86]">&bull;</span>
            <span>GP Referral Network</span>
          </div>
        </div>

        {/* Post Header */}
        <header className="py-16 md:py-20 px-6 border-b border-neutral-200">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-[14px] font-medium text-[#2C3539]/60 hover:text-[#2C3539] mb-8 transition-colors group">
              <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" /> Back to Blog
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-[13px] mb-8 text-[#2C3539]/60">
              <span className="font-bold tracking-wider uppercase text-[#8A9A86] bg-[#8A9A86]/10 px-3 py-1 rounded-sm">{post.category}</span>
              <span className="flex items-center">
                <Calendar size={14} className="mr-1.5" /> <time dateTime={post.isoDate}>{post.date}</time>
              </span>
              {post.updatedDate && (
                <span className="flex items-center italic">
                  (Updated: {post.updatedDate})
                </span>
              )}
              <span className="flex items-center">
                <Clock size={14} className="mr-1.5" /> {readTime} min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-6 text-[#2C3539]">
              {post.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-[#2C3539]/70 leading-relaxed font-light">
              {post.excerpt}
            </p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 md:px-8 py-16">
          {/* Main Image */}
          {post.image?.url && (
            <figure className="mb-16 -mx-4 md:mx-0">
               <div className="md:rounded-2xl shadow-sm border border-neutral-200 wrk-photo-container">
                 <div className="wrk-photo-overlay"></div>
                 <img loading="lazy" referrerPolicy="no-referrer" 
                   src={post.image.url} 
                   alt={post.image.alt || post.title} 
                   className="w-full h-auto object-cover wrk-photo"
                 />
               </div>
            </figure>
          )}

          {/* Post Content */}
          <div 
            className="prose prose-lg max-w-none mb-16 prose-p:text-[#2C3539] prose-p:leading-relaxed prose-p:font-sans prose-headings:text-[#2C3539] prose-h2:font-serif prose-h2:text-[#8A9A86] prose-a:text-[#8A9A86] hover:prose-a:opacity-80 prose-li:text-[#2C3539] prose-strong:text-[#2C3539] prose-strong:font-bold"
            dangerouslySetInnerHTML={{ __html: marked.parse(post.content || '') as string }}
          />

          {/* FAQ Section */}
          {post.faq && (
            <div className="mb-16 border-t border-neutral-200 pt-12">
              <h2 className="text-3xl font-serif mb-8 text-[#8A9A86]">Frequently Asked Questions</h2>
              <div 
                className="prose prose-lg max-w-none prose-p:text-[#2C3539] prose-p:leading-relaxed prose-headings:font-serif prose-headings:text-[#2C3539] prose-a:text-[#8A9A86] hover:prose-a:opacity-80 prose-strong:text-[#2C3539]"
                dangerouslySetInnerHTML={{ __html: marked.parse(post.faq || '') as string }}
              />
            </div>
          )}

          {/* References Section */}
          {post.references && (
            <div className="mb-16 bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#2C3539]/50 mb-4">References & Sources</h3>
              <div 
                className="prose prose-sm max-w-none prose-p:text-[#2C3539]/70 prose-a:text-[#8A9A86] hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: marked.parse(post.references || '') as string }}
              />
            </div>
          )}

          {/* Author Bio (E-E-A-T) */}
          <section className="bg-white p-8 md:p-10 rounded-2xl mb-16 flex flex-col md:flex-row items-center md:items-start gap-8 border border-neutral-200 shadow-sm">
             <img loading="lazy" referrerPolicy="no-referrer" 
               src={post.author.avatarUrl} 
               alt={post.author.name}
               className="w-24 h-24 rounded-full object-cover border border-neutral-200 shrink-0"
             />
             <div className="text-center md:text-left">
               <h3 className="text-lg font-serif font-bold text-[#2C3539] mb-1">Written by {post.author.name}</h3>
               <p className="text-[12px] font-bold text-[#8A9A86] uppercase tracking-wider mb-4">{post.author.role}</p>
               <p className="text-[#2C3539]/70 leading-relaxed text-[15px]">
                 {post.author.bio}
               </p>
             </div>
          </section>
          
          {/* Related Posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mb-16 border-t border-neutral-200 pt-12">
              <h2 className="text-3xl font-serif mb-8 text-[#8A9A86]">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {post.relatedPosts.map(relatedId => {
                  const relatedPost = blogPosts.find(p => p.id === relatedId);
                  if (!relatedPost) return null;
                  return (
                    <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-[#8A9A86]/50 transition-colors shadow-sm">
                      <div className="h-48 overflow-hidden bg-neutral-100">
                        {relatedPost.image?.url && (
                          <img loading="lazy" referrerPolicy="no-referrer" src={relatedPost.image.url} alt={relatedPost.image.alt || relatedPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif font-medium text-xl text-[#2C3539] mb-3 group-hover:text-[#8A9A86] transition-colors leading-snug">{relatedPost.title}</h3>
                        <p className="text-[15px] text-[#2C3539]/70 line-clamp-2 leading-relaxed">{relatedPost.excerpt}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Contextual Call-to-Action (Bento Card) */}
          <div className="bg-white border border-neutral-200 p-8 md:p-12 text-center rounded-3xl shadow-sm hover:shadow-md transition-shadow">
             <h3 className="text-2xl md:text-3xl font-serif text-[#2C3539] mb-4">
               {post.ctaText || "Experiencing these metabolic shifts or medication side effects yourself?"}
             </h3>
             <p className="text-[#2C3539]/70 mb-8 max-w-lg mx-auto text-[16px] leading-relaxed">
               {post.ctaText ? "" : "Take our Free 2-Minute Weight Loss Safety Assessment to check your current baseline safety thresholds today."}
             </p>
             <Link to={post.ctaLink || "/assessment"}>
               <button className="bg-[#8A9A86] hover:bg-[#768672] text-white px-8 py-4 rounded-xl font-medium transition-colors text-[16px] w-full md:w-auto">
                 {post.ctaText ? "Get Started" : "Launch Free Assessment"}
               </button>
             </Link>
          </div>
        </div>
      </article>
    </>
  );
};

