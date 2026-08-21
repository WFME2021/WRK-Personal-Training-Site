import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { useContent } from '../context/ContentContext';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Training & Exercise',
  'Muscle & Strength',
  'Nutrition & Protein',
  'Hydration & Recovery',
  'Weight Loss & Maintenance',
  'Life After GLP-1s'
];

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  'Training & Exercise': 'Practical guidance on strength training, cardio, daily movement and building a fitness routine while using a GLP-1.',
  'Muscle & Strength': 'Learn why strength and muscle matter during weight loss and how resistance training can support your goals.',
  'Nutrition & Protein': 'Practical guidance around protein, food choices, appetite changes and building a sustainable approach to nutrition.',
  'Hydration & Recovery': 'Simple strategies for hydration, recovery, sleep and supporting your body as your routine changes.',
  'Weight Loss & Maintenance': 'Understand the wider weight-loss journey, including progress beyond the scale and building habits that last.',
  'Life After GLP-1s': 'Guidance for the transition beyond active weight loss and building a sustainable long-term approach to fitness.'
};

export const Blog: React.FC = () => {
  const { blogPosts } = useContent();
  const publishedPosts = blogPosts.filter(post => post.status === 'published');
  
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = publishedPosts.filter(post => 
    activeCategory === 'All' || post.category === activeCategory
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-12">
      <SeoHead
        title="GLP-1 Fitness Blog | Training, Nutrition & Weight Loss | WRK"
        description="Read the WRK GLP-1 Fitness Blog for evidence-informed guidance on strength training, muscle preservation, nutrition, and sustainable habits after weight loss."
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Hero Section */}
        <header className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            GLP-1 Fitness <span className="wrk-highlight">Blog</span>
          </h1>
          <h2 className="font-serif text-[24px] md:text-[28px] text-[#2C3539]/80 mb-6">
            Practical guidance for training, nutrition and life on a GLP-1.
          </h2>
          <div className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/80 space-y-6">
            <p>
              GLP-1 medications have changed the way many people approach weight loss.
            </p>
            <p>
              But knowing how to train, eat, recover and stay active alongside them can raise a whole new set of questions.
            </p>
            <p>
              The WRK blog brings together practical, evidence-informed guidance to help you navigate the <strong className="text-[#2C3539] font-medium">fitness side of your GLP-1 journey</strong>.
            </p>
            <p>
              From strength training and muscle preservation to protein, hydration, recovery and life after weight loss — we break the important stuff down into simple, useful information you can actually apply.
            </p>
          </div>
        </header>

        <div className="mb-16 max-w-5xl mx-auto rounded-3xl shadow-sm border border-neutral-200 wrk-photo-container">
          <div className="wrk-photo-overlay"></div>
          <img 
            src="https://i.postimg.cc/BvhHyvM7/pexels-marwen-larafa-2159807713-38241567.jpg" 
            alt="Person enjoying an active lifestyle and reading, representing continuous learning" 
            className="w-full h-auto aspect-[16/9] md:aspect-[2.5/1] wrk-photo"
          />
        </div>

        {/* Article Library & Filters */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C3539] mb-8">
              Explore the GLP-1 Fitness Library
            </h2>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-colors ${
                    activeCategory === category 
                      ? 'bg-[#2C3539] text-white' 
                      : 'bg-white text-[#2C3539]/70 border border-neutral-200 hover:border-[#8A9A86] hover:text-[#2C3539]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Active Category Description */}
            {activeCategory !== 'All' && CATEGORY_DESCRIPTIONS[activeCategory] && (
              <div className="max-w-2xl mx-auto bg-white border border-neutral-200 rounded-2xl p-6 mb-10">
                <p className="text-[16px] text-[#2C3539]/80 leading-relaxed">
                  {CATEGORY_DESCRIPTIONS[activeCategory]}
                </p>
              </div>
            )}
          </div>

          {/* Article Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <Link to={`/blog/${post.slug}`} className="block relative aspect-[4/3] bg-neutral-100 overflow-hidden wrk-photo-container">
                  <div className="wrk-photo-overlay group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                  <img src={post.image?.url || '/api/placeholder/600/400'} alt={post.image?.alt || post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out wrk-photo" />
                  {post.category && (
                    <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[12px] font-bold uppercase tracking-wider text-[#8A9A86] shadow-sm">
                      {post.category}
                    </div>
                  )}
                </Link>
                
                <div className="p-8 flex flex-col flex-grow">
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="font-serif text-[22px] md:text-[24px] text-[#2C3539] mb-4 leading-snug group-hover:text-[#8A9A86] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-[15px] leading-relaxed text-[#2C3539]/70 mb-8 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-neutral-100">
                    <div className="flex items-center text-[13px] text-[#2C3539]/50 font-medium">
                      {post.publishedAt && (
                        <span className="flex items-center mr-4">
                          <Calendar size={14} className="mr-1.5" />
                          {new Date(post.publishedAt).toLocaleDateString('en-NZ', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      )}
                    </div>
                    <Link to={`/blog/${post.slug}`} className="text-[14px] font-medium text-[#8A9A86] hover:text-[#768672] transition-colors flex items-center">
                      Read Article <ArrowRight size={16} className="ml-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {filteredPosts.length === 0 && (
               <div className="col-span-full bg-white border border-neutral-200 rounded-3xl p-16 text-center text-[#2C3539]/70">
                 <BookOpen size={48} className="mx-auto text-neutral-200 mb-4" />
                 <p className="text-[18px]">Articles for this category are currently being written.</p>
                 <p className="mt-2 text-[15px]">Check back soon for practical guidance and resources.</p>
               </div>
            )}
          </div>
        </div>

        {/* Introduction to the Content */}
        <div className="bg-white border border-neutral-200 p-10 md:p-16 rounded-3xl shadow-sm mb-24 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C3539] mb-6 leading-tight">
              Evidence-Informed. Built for Real Life.
            </h2>
            <div className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/80 space-y-4">
              <p>
                There is a lot of information online about GLP-1 medications.
              </p>
              <p>
                Some of it is useful. Some of it is complicated. And some of it is simply not relevant to the person trying to figure out what they should actually do.
              </p>
              <p>
                WRK takes current research and translates it into practical guidance around <strong className="text-[#2C3539] font-medium">training, nutrition, recovery and sustainable habits</strong>.
              </p>
              <p className="text-[14px] italic text-[#2C3539]/60 pt-4">
                Note: Our content is designed to educate and support — not replace advice from your doctor, pharmacist or other qualified healthcare professional.
              </p>
            </div>
          </div>
        </div>



        {/* Final CTA */}
        <div className="bg-[#1A1C1D] text-center rounded-3xl shadow-sm p-10 md:p-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Have a Question About GLP-1 Fitness?
          </h2>
          <div className="text-neutral-400 mb-10 max-w-2xl mx-auto text-[16px] md:text-[18px] leading-relaxed space-y-4">
            <p>You might find the answer in the library.</p>
            <p>
              If you want help applying it to your own training, lifestyle and goals, that's where coaching comes in.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/assessment">
              <button className="bg-[#8A9A86] hover:bg-[#768672] text-white px-8 py-4 rounded-xl font-medium transition-colors text-[16px] w-full sm:w-auto">
                Take the Free GLP-1 Fitness Assessment
              </button>
            </Link>
            <Link to="/services">
              <button className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-4 rounded-xl font-medium transition-colors text-[16px] w-full sm:w-auto">
                Explore GLP-1 Coaching
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
