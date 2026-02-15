import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Search } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { useContent } from '../context/ContentContext';

export const Blog: React.FC = () => {
  const { blogPosts } = useContent();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(blogPosts.map(post => post.category))];
    return cats;
  }, [blogPosts]);

  // Filter posts by Category AND Search Query
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, blogPosts]);

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
    "url": "https://wrkpersonaltraining.com/blog",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": filteredPosts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://wrkpersonaltraining.com/blog/${post.slug}`,
        "name": post.title
      }))
    }
  };

  return (
    <>
      <SeoHead 
        title="Blog | WRK Personal Training"
        description="Articles on strength training, longevity, corporate wellness, and mindset from the coaches at WRK Personal Training Christchurch."
        schema={collectionSchema}
      />
      
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-24 px-6">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
              alt="Gym background" 
              className="w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-brand-black/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto w-full text-center pt-12">
            <span className="inline-block py-1 px-3 border border-brand-orange text-brand-orange text-xs font-bold uppercase tracking-[0.3em] mb-6">
              The Repository
            </span>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-6 uppercase tracking-tighter leading-none">
              Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Evidence-based insights on training, longevity, and mindset.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-lg mx-auto">
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white/20 transition-all"
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-24">
          {/* Category Pills */}
          <nav className="flex flex-wrap gap-3 mb-16 border-b border-gray-100 pb-8 justify-center" aria-label="Blog categories">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded-full ${
                  selectedCategory === category
                    ? 'bg-brand-black text-white shadow-lg'
                    : 'bg-gray-100 text-brand-gray hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </nav>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer flex flex-col h-full">
                <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
                  <div className="relative overflow-hidden mb-6 aspect-[16/10] bg-gray-100 rounded-2xl">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      loading="lazy"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-black shadow-sm rounded-full">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center text-xs font-bold uppercase tracking-wider text-brand-gray mb-3 space-x-4">
                      <time dateTime={post.isoDate}>{post.date}</time>
                      <span className="w-1 h-1 bg-brand-orange rounded-full"></span>
                      <span className="flex items-center"><Clock size={12} className="mr-1" /> {getReadTime(post.content)} min read</span>
                    </div>
                    
                    <h2 className="text-3xl font-display font-bold group-hover:text-brand-orange transition-colors leading-none mb-4 text-brand-black uppercase">
                      {post.title}
                    </h2>
                    
                    <p className="text-brand-gray line-clamp-3 leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="pt-2 flex items-center text-xs font-bold uppercase tracking-widest border-b-2 border-transparent group-hover:border-brand-black inline-flex self-start transition-all">
                      Read Article <ArrowRight size={14} className="ml-2" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center border border-dashed border-gray-300 rounded-3xl">
              <p className="text-brand-gray mb-4 text-lg">No articles found matching "{searchQuery}"</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="text-brand-black font-bold uppercase tracking-widest text-sm underline hover:text-brand-orange transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};