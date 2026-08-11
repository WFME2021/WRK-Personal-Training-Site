
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { useContent } from '../context/ContentContext';

export const Blog: React.FC = () => {
  const { blogPosts } = useContent();
  const publishedPosts = blogPosts.filter(post => post.status === 'published');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-32">
      <SeoHead
        title="GLP-1 Weight Loss Fitness Blog | WRK"
        description="Practical, evidence-based guidance on how to manage energy, nutrition, and muscle preservation during your GLP-1 weight loss journey."
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Intro Section */}
        <header className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-[12px] font-bold uppercase tracking-widest text-[#8A9A86] mb-4">
            friendly advice, simple research, and tips
          </p>
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            The GLP-1 Weight Loss Fitness Blog & Wellbeing Library
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/70 max-w-2xl mx-auto">
            Welcome to your space for practical, evidence-based guidance. We cut through the noise to bring you gentle, clear advice on how to look after your body, nourish your muscle, and maintain your energy while using GLP-1 weight loss medications.
          </p>
        </header>

        {/* Featured Article Grid (Bento Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {publishedPosts.map((post) => (
            <div key={post.id} className="bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="aspect-[4/3] bg-neutral-100 flex items-center justify-center relative overflow-hidden">
                <img src={post.image?.url} alt={post.image?.alt || post.title} className="absolute inset-0 w-full h-full object-cover z-0" />
                <div className="absolute inset-0 bg-[#8A9A86]/10 group-hover:bg-[#8A9A86]/20 transition-colors duration-500 z-10"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#8A9A86] mb-3">
                  {post.category || 'General'}
                </div>
                <h3 className="font-serif text-[22px] text-[#2C3539] mb-4 leading-snug group-hover:text-[#8A9A86] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#2C3539]/70 mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.slug}`} className="text-[14px] font-medium text-[#8A9A86] hover:text-[#768672] transition-colors flex items-center">
                  Read Article <span className="ml-2">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
          
          {publishedPosts.length === 0 && (
             <div className="col-span-full text-center py-20 text-[#2C3539]/70">
               <p>New articles are being written. Check back soon for more evidence-based guidance.</p>
             </div>
          )}
        </div>

        {/* The Resource Promise (Bento Item) */}
        <div className="bg-white border border-[#8A9A86]/30 p-8 md:p-14 rounded-3xl shadow-sm mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C3539] mb-6">
            Grounded in Science, Built for Real Life
          </h2>
          <p className="text-[#2C3539]/70 text-[16px] md:text-[18px] leading-relaxed max-w-3xl mx-auto">
            Every article in our library is carefully written to ensure your peace of mind. We look at current medical fat loss fitness research and translate it into simple, friendly steps you can actually use in your everyday routine. No stress, no complexity—just honest support.
          </p>
        </div>

        {/* Bottom Call-to-Action Layout */}
        <div className="bg-white border border-neutral-200 p-8 md:p-14 text-center rounded-3xl shadow-sm hover:shadow-md transition-shadow max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C3539] mb-6">
            Looking for a Tailored Strategy Built Just For You?
          </h2>
          <p className="text-[#2C3539]/70 mb-10 max-w-2xl mx-auto text-[16px] md:text-[18px] leading-relaxed">
            Reading the research is a great start, but if you would like someone to help you apply these steps to your unique daily schedule, our lines are always open for a friendly chat.
          </p>
          <div className="flex justify-center">
            <Link to="/contact">
              <button className="bg-[#8A9A86] hover:bg-[#768672] text-white px-8 py-4 rounded-xl font-medium transition-colors text-[16px] w-full sm:w-auto">
                Start a Friendly Conversation
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
