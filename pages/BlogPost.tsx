import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
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
    "image": [post.imageUrl],
    "datePublished": post.isoDate,
    "dateModified": post.isoDate,
    "author": [{
      "@type": "Person",
      "name": post.author.name,
      "url": "https://wrkpersonaltraining.com/about" // Assuming an about page or similar
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
        imageUrl={post.imageUrl}
        publishedTime={post.isoDate}
        authorName={post.author.name}
      />

      <article className="bg-white min-h-screen">
        {/* Post Header */}
        <header className="bg-brand-light py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-sm font-medium text-brand-gray hover:text-brand-black mb-8 transition-colors group">
              <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" /> Back to Blog
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
              <span className="font-bold bg-white px-3 py-1 border border-gray-200 shadow-sm">{post.category}</span>
              <span className="flex items-center text-brand-gray">
                <Calendar size={14} className="mr-1" /> <time dateTime={post.isoDate}>{post.date}</time>
              </span>
              <span className="flex items-center text-brand-gray">
                <Clock size={14} className="mr-1" /> {readTime} min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-[1.15] mb-6 text-brand-black">
              {post.title}
            </h1>
            
            <p className="text-xl text-brand-gray leading-relaxed font-light">
              {post.excerpt}
            </p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Main Image */}
          <figure className="mb-16 -mx-6 md:mx-0">
             <img 
               src={post.imageUrl} 
               alt={post.title} 
               className="w-full h-auto object-cover md:rounded-sm shadow-sm"
             />
          </figure>

          {/* Post Content */}
          <div 
            className="prose prose-lg prose-gray max-w-none mb-20 prose-headings:font-bold prose-headings:text-brand-black prose-p:text-gray-600 prose-a:text-brand-black prose-a:no-underline prose-a:border-b prose-a:border-brand-black hover:prose-a:text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio (E-E-A-T) */}
          <section className="bg-brand-light p-8 md:p-10 rounded-sm mb-16 flex flex-col md:flex-row items-center md:items-start gap-8 border border-gray-100">
             <img 
               src={post.author.avatarUrl} 
               alt={post.author.name}
               className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
             />
             <div className="text-center md:text-left">
               <h3 className="text-lg font-bold text-brand-black mb-1">Written by {post.author.name}</h3>
               <p className="text-sm font-medium text-brand-gray uppercase tracking-wider mb-3">{post.author.role}</p>
               <p className="text-gray-600 leading-relaxed text-sm">
                 {post.author.bio}
               </p>
             </div>
          </section>
          
          {/* Conversion Area */}
          <div className="border-t border-gray-200 pt-16">
            <div className="bg-brand-black text-white p-10 md:p-14 text-center rounded-sm shadow-lg">
               <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to apply this?</h3>
               <p className="text-gray-300 mb-8 max-w-lg mx-auto text-lg">
                 Knowledge is potential power. Execution is real power. Start your journey with a structured assessment today.
               </p>
               <Link to="/assessment">
                 <Button variant="primary" className="bg-white text-black hover:bg-gray-200 border-0">Start Assessment</Button>
               </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};