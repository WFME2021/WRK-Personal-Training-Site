
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Search } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { useContent } from '../context/ContentContext';

import { Hero } from '../components/Hero';
import { MidPageBanner } from '../components/MidPageBanner';

export const Blog: React.FC = () => {
  const { blogPosts, pageContent } = useContent();
  const { hero, banner, seo } = pageContent.blog;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 6;

  // Extract unique categories from published posts
  const categories = useMemo(() => {
    const publishedPosts = blogPosts.filter(post => post.status !== 'draft');
    const cats = ['All', ...new Set(publishedPosts.map(post => post.category))];
    return cats;
  }, [blogPosts]);

  // Filter posts by Category AND Search Query
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      if (post.status === 'draft') return false;
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, blogPosts]);

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Calculate read time helper
  const getReadTime = (content: string) => {
    const words = content.replace(/<[^>]*>/g, '').split(' ').length;
    return Math.ceil(words / 200);
  };

  // Schema for the Blog Collection
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "headline": "WRK Blog",
    "description": "Articles on strength training, longevity, and high-performance living.",
    "url": "https://www.wrkpersonaltraining.co.nz/blog",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": filteredPosts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://www.wrkpersonaltraining.co.nz/blog/${post.slug}`,
        "name": post.title
      }))
    }
  };

  return (
    <>
      <SeoHead 
        title={seo.title}
        description={seo.description}
        schema={collectionSchema}
      />
      
      <div className="bg-primary min-h-screen text-text-primary transition-colors duration-300">
        {/* Hero Section */}
        <Hero 
          image={hero.image}
          title={hero.h1}
          subtitle={hero.subhead}
          bullets={hero.bullets}
          kicker={hero.kicker}
          secondaryCta={{
            label: "Search Articles",
            onClick: () => document.getElementById('search-bar')?.focus()
          }}
        />

        <div className="max-w-5xl mx-auto px-6 py-24">
          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto mb-12">
            <input 
              id="search-bar"
              type="text" 
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-secondary border border-border text-text-primary placeholder-text-secondary rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:bg-primary transition-all shadow-sm"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-text-secondary" size={20} />
          </div>

          {/* Category Pills */}
          <nav className="flex flex-wrap gap-3 mb-16 border-b border-border pb-8 justify-center" aria-label="Blog categories">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded-full ${
                  selectedCategory === category
                    ? 'bg-text-primary text-primary shadow-lg'
                    : 'bg-secondary text-text-secondary hover:bg-border hover:text-text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </nav>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {paginatedPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer flex flex-col h-full">
                <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
                  <div className="relative overflow-hidden mb-6 aspect-[16/10] bg-secondary rounded-2xl border border-border">
                    <img 
                      src={post.image.url} 
                      alt={post.image.alt}
                      loading="lazy"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute top-4 left-4 bg-secondary/95 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-text-primary shadow-sm rounded-full border border-border">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center text-xs font-bold uppercase tracking-wider text-text-secondary mb-3 space-x-4">
                      <time dateTime={post.isoDate}>{post.date}</time>
                      <span className="w-1 h-1 bg-accent rounded-full"></span>
                      <span className="flex items-center"><Clock size={12} className="mr-1" /> {getReadTime(post.content)} min read</span>
                    </div>
                    
                    <h2 className="text-3xl font-display font-bold group-hover:text-accent transition-colors leading-none mb-4 text-text-primary uppercase">
                      {post.title}
                    </h2>
                    
                    <p className="text-text-secondary line-clamp-3 leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="pt-2 flex items-center text-xs font-bold uppercase tracking-widest border-b-2 border-transparent group-hover:border-text-primary inline-flex self-start transition-all text-text-primary">
                      Read Article <ArrowRight size={14} className="ml-2" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center border border-dashed border-border rounded-3xl bg-secondary">
              <p className="text-text-secondary mb-4 text-lg">No articles found matching "{searchQuery}"</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="text-text-primary font-bold uppercase tracking-widest text-sm underline hover:text-accent transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center space-x-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-colors ${
                  currentPage === 1 
                    ? 'bg-secondary text-text-secondary opacity-50 cursor-not-allowed' 
                    : 'bg-secondary text-text-primary hover:bg-border'
                }`}
              >
                Previous
              </button>
              <span className="text-sm font-bold text-text-secondary">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-colors ${
                  currentPage === totalPages 
                    ? 'bg-secondary text-text-secondary opacity-50 cursor-not-allowed' 
                    : 'bg-secondary text-text-primary hover:bg-border'
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>

        <MidPageBanner 
          image={banner.image}
          tagline={banner.tagline}
          support={banner.support}
        />
      </div>
    </>
  );
};
