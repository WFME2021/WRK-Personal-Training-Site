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
    "headline": "The WRK Journal",
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
        title="Journal | WRK Personal Training"
        description="Articles on strength training, longevity, corporate wellness, and mindset from the coaches at WRK Personal Training Christchurch."
        schema={collectionSchema}
      />
      
      <div className="bg-white min-h-screen">
        <div className="pt-24 pb-12 px-6 bg-brand-light border-b border-gray-200">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">The Journal</h1>
            <p className="text-xl text-brand-gray max-w-2xl mb-8">
              Evidence-based insights on training, longevity, and mindset.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-lg">
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-black transition-shadow"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-12">
          {/* Category Pills */}
          <nav className="flex flex-wrap gap-3 mb-12 border-b border-gray-100 pb-8" aria-label="Blog categories">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                  selectedCategory === category
                    ? 'bg-brand-black text-white shadow-md'
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
                  <div className="relative overflow-hidden mb-6 aspect-[16/10] bg-gray-100">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      loading="lazy"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-black shadow-sm">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-brand-gray mb-3 space-x-4">
                      <time dateTime={post.isoDate}>{post.date}</time>
                      <span className="flex items-center"><Clock size={12} className="mr-1" /> {getReadTime(post.content)} min read</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold group-hover:text-brand-gray transition-colors leading-tight mb-3">
                      {post.title}
                    </h2>
                    
                    <p className="text-brand-gray line-clamp-3 leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="pt-2 flex items-center text-sm font-bold border-b-2 border-transparent group-hover:border-brand-black inline-flex self-start transition-all">
                      Read Article <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center border border-dashed border-gray-300 rounded-lg">
              <p className="text-brand-gray mb-2">No articles found matching "{searchQuery}"</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="text-brand-black font-semibold underline hover:text-brand-gray"
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