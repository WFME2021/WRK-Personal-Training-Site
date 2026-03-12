
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
    "image": [post.image.url],
    "datePublished": post.isoDate,
    "dateModified": post.isoDate,
    "author": [{
      "@type": "Person",
      "name": post.author.name,
      "url": "https://www.wrkpersonaltraining.co.nz" // Updated to main site since /about isn't explicit yet
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
        imageUrl={post.image.url}
        publishedTime={post.isoDate}
        authorName={post.author.name}
      />

      <article className="bg-primary min-h-screen text-text-primary transition-colors duration-300">
        {/* Post Header */}
        <header className="bg-secondary py-20 px-6 border-b border-border">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-sm font-medium text-text-secondary hover:text-text-primary mb-8 transition-colors group">
              <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" /> Back to Blog
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
              <span className="font-bold bg-primary text-text-primary px-3 py-1 border border-border shadow-sm">{post.category}</span>
              <span className="flex items-center text-text-secondary">
                <Calendar size={14} className="mr-1" /> <time dateTime={post.isoDate}>{post.date}</time>
              </span>
              {post.updatedDate && (
                <span className="flex items-center text-text-secondary italic">
                  (Updated: {post.updatedDate})
                </span>
              )}
              <span className="flex items-center text-text-secondary">
                <Clock size={14} className="mr-1" /> {readTime} min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-[1.15] mb-6 text-text-primary">
              {post.title}
            </h1>
            
            <p className="text-xl text-text-secondary leading-relaxed font-light">
              {post.excerpt}
            </p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Main Image */}
          <figure className="mb-16 -mx-6 md:mx-0">
             <img 
               src={post.image.url} 
               alt={post.image.alt} 
               className="w-full h-auto object-cover md:rounded-sm shadow-sm border border-border"
             />
          </figure>

          {/* Post Content */}
          <div 
            className="prose prose-lg prose-slate dark:prose-invert max-w-none mb-12 prose-headings:font-bold prose-headings:uppercase prose-headings:font-display prose-a:text-accent prose-a:no-underline prose-a:border-b prose-a:border-accent hover:prose-a:opacity-80"
            dangerouslySetInnerHTML={{ __html: marked.parse(post.content || '') as string }}
          />

          {/* FAQ Section */}
          {post.faq && (
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold uppercase font-display mb-6 text-text-primary border-b border-border pb-2">Frequently Asked Questions</h2>
              <div 
                className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-xl prose-a:text-accent prose-a:no-underline prose-a:border-b prose-a:border-accent hover:prose-a:opacity-80"
                dangerouslySetInnerHTML={{ __html: marked.parse(post.faq || '') as string }}
              />
            </div>
          )}

          {/* References Section */}
          {post.references && (
            <div className="mb-16 bg-secondary p-6 rounded-xl border border-border">
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary mb-4">References & Sources</h3>
              <div 
                className="prose prose-sm prose-slate dark:prose-invert max-w-none prose-a:text-accent prose-a:no-underline hover:prose-a:underline text-text-secondary"
                dangerouslySetInnerHTML={{ __html: marked.parse(post.references || '') as string }}
              />
            </div>
          )}

          {/* Author Bio (E-E-A-T) */}
          <section className="bg-secondary p-8 md:p-10 rounded-sm mb-16 flex flex-col md:flex-row items-center md:items-start gap-8 border border-border">
             <img 
               src={post.author.avatarUrl} 
               alt={post.author.name}
               className="w-24 h-24 rounded-full object-cover border-2 border-primary shadow-sm shrink-0"
             />
             <div className="text-center md:text-left">
               <h3 className="text-lg font-bold text-text-primary mb-1">Written by {post.author.name}</h3>
               <p className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-3">{post.author.role}</p>
               <p className="text-text-secondary leading-relaxed text-sm">
                 {post.author.bio}
               </p>
             </div>
          </section>
          
          {/* Related Posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold uppercase font-display mb-6 text-text-primary border-b border-border pb-2">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {post.relatedPosts.map(relatedId => {
                  const relatedPost = blogPosts.find(p => p.id === relatedId);
                  if (!relatedPost) return null;
                  return (
                    <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="group block bg-secondary border border-border rounded-xl overflow-hidden hover:border-accent transition-colors">
                      <div className="h-40 overflow-hidden">
                        <img src={relatedPost.image.url} alt={relatedPost.image.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-lg text-text-primary mb-2 group-hover:text-accent transition-colors">{relatedPost.title}</h3>
                        <p className="text-sm text-text-secondary line-clamp-2">{relatedPost.excerpt}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Conversion Area */}
          <div className="border-t border-border pt-16">
            <div className="bg-text-primary text-primary p-10 md:p-14 text-center rounded-sm shadow-lg">
               <h3 className="text-2xl md:text-3xl font-bold mb-4">
                 {post.ctaText || "Ready to apply this?"}
               </h3>
               {!post.ctaText && (
                 <p className="text-primary/70 mb-8 max-w-lg mx-auto text-lg">
                   Knowledge is potential power. Execution is real power. Start your journey with a structured assessment today.
                 </p>
               )}
               <Link to={post.ctaLink || "/assessment"}>
                 <Button variant="primary" className="bg-primary text-text-primary hover:bg-accent hover:text-white border-0">
                   {post.ctaText ? "Get Started" : "Start Assessment"}
                 </Button>
               </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
