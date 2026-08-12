import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, User, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-12">
      <SeoHead
        title="GLP-1 Fitness Coaching Programs | WRK Personal Training"
        description="Choose the right level of support for your GLP-1 weight loss journey. Online coaching, in-person training, and structured fitness toolkits."
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Page Header */}
        <header className="text-center mb-20 max-w-4xl mx-auto">
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            GLP-1 Fitness Coaching Programs
          </h1>
          <h2 className="font-serif text-[24px] md:text-[28px] text-[#2C3539]/80 mb-6">
            Choose the level of support that fits your life.
          </h2>
          <div className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/80 space-y-6">
            <p>
              You don't need more information. You need the right level of support.
            </p>
            <p>
              Whether you want personalised coaching and accountability, face-to-face guidance, or a simple programme you can follow independently, WRK has an option to suit how you want to train.
            </p>
            <p>
              All WRK programmes are designed specifically for people using GLP-1 medications, with a focus on <strong className="text-[#2C3539]">strength, muscle preservation, fitness and sustainable habits.</strong>
            </p>
          </div>
        </header>

        <div className="mb-16 max-w-5xl mx-auto rounded-3xl shadow-sm border border-neutral-200 wrk-photo-container">
          <div className="wrk-photo-overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=2940" 
            alt="Personal trainer supporting a client with a kettlebell" 
            className="w-full h-auto aspect-[16/9] md:aspect-[2.5/1] wrk-photo"
          />
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Card 1: Online Guided Coaching */}
          <div className="bg-white border border-neutral-200 p-8 md:p-12 rounded-3xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 relative">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8 shrink-0">
              <Smartphone size={28} />
            </div>
            
            <div className="mb-8 flex-grow">
              <h3 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] leading-tight mb-2">
                Online Guided Coaching
              </h3>
              <p className="font-serif text-[18px] text-[#2C3539]/80 mb-6">Personalised coaching. Wherever you train.</p>
              
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/80 mb-8">
                Our online coaching option gives you the structure and accountability of a personal trainer without needing to train together in person. You'll receive a personalised training programme through the WRK Training App, ongoing coaching support and regular check-ins so your programme can adapt as your needs change.
              </p>
              
              <div className="space-y-3 mb-8">
                <p className="font-medium text-[#2C3539] mb-4">What's included</p>
                <ul className="space-y-3">
                  {[
                    'Personalised 12-week training programme',
                    'Progressive strength and fitness programming',
                    'WRK Training App access',
                    'Regular coaching check-ins',
                    'Ongoing messaging and support',
                    'Training, nutrition and lifestyle guidance',
                    'Programme adjustments as required'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-[15px] text-[#2C3539]/80">
                      <CheckCircle className="text-[#8A9A86] shrink-0 mr-3 mt-0.5" size={18} />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-auto">
              <div className="bg-[#FAFAF9] rounded-2xl p-6 border border-neutral-200 mb-6">
                <p className="text-[13px] font-bold uppercase tracking-widest text-[#8A9A86] mb-1">Investment</p>
                <p className="text-[24px] font-serif text-[#2C3539] mb-3">$49 NZD / week</p>
                <p className="text-[14px] text-[#2C3539]/70 leading-relaxed">
                  <strong className="text-[#2C3539] font-medium">Best for:</strong> People who want personalised coaching and accountability while training independently.
                </p>
              </div>
              <Link 
                to="/contact?interest=online"
                className="inline-flex items-center justify-center w-full bg-[#8A9A86] hover:bg-[#768672] text-white px-6 py-4 rounded-xl font-medium transition-colors text-[16px]"
              >
                Enquire About Online Coaching
              </Link>
            </div>
          </div>

          {/* Card 2: In-Person Guided Coaching */}
          <div className="bg-white border border-neutral-200 p-8 md:p-12 rounded-3xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 relative">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8 shrink-0">
              <User size={28} />
            </div>
            
            <div className="mb-8 flex-grow">
              <h3 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] leading-tight mb-2">
                In-Person Guided Coaching
              </h3>
              <p className="font-serif text-[18px] text-[#2C3539]/80 mb-6">Personal coaching, face to face.</p>
              
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/80 mb-8">
                Prefer having a coach beside you? Our in-person option combines personalised programming and app-based support with face-to-face coaching sessions. You'll learn how to train confidently, build strength safely and understand how to get more from your workouts - while still having the flexibility and support of your online programme.
              </p>
              
              <div className="space-y-3 mb-8">
                <p className="font-medium text-[#2C3539] mb-4">What's included</p>
                <ul className="space-y-3">
                  {[
                    'Everything included in Online Guided Coaching',
                    'Face-to-face personal training sessions',
                    'Hands-on exercise coaching',
                    'Technique and movement guidance',
                    'Personalised programme adjustments',
                    'WRK Training App access',
                    'Ongoing coaching and accountability'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-[15px] text-[#2C3539]/80">
                      <CheckCircle className="text-[#8A9A86] shrink-0 mr-3 mt-0.5" size={18} />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-auto">
              <div className="bg-[#FAFAF9] rounded-2xl p-6 border border-neutral-200 mb-6">
                <p className="text-[13px] font-bold uppercase tracking-widest text-[#8A9A86] mb-1">Investment</p>
                <p className="text-[24px] font-serif text-[#2C3539] mb-3">$89 NZD / week</p>
                <p className="text-[14px] text-[#2C3539]/70 leading-relaxed">
                  <strong className="text-[#2C3539] font-medium">Best for:</strong> People who want the accountability and confidence that comes from having a coach beside them.
                </p>
              </div>
              <Link 
                to="/contact?interest=in-person"
                className="inline-flex items-center justify-center w-full bg-[#8A9A86] hover:bg-[#768672] text-white px-6 py-4 rounded-xl font-medium transition-colors text-[16px]"
              >
                Enquire About In-Person Coaching
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3: GLP-1 Workout & Nutrition Toolkit (Full width) */}
        <div className="bg-white border border-neutral-200 p-8 md:p-12 rounded-3xl flex flex-col lg:flex-row shadow-sm hover:shadow-md transition-shadow duration-300 mb-20 gap-10">
          <div className="flex-1">
            <div className="w-14 h-14 bg-[#FAFAF9] text-[#2C3539]/50 rounded-full flex items-center justify-center mb-8 shrink-0 border border-neutral-200">
              <BookOpen size={28} />
            </div>
            
            <h3 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] leading-tight mb-2">
              GLP-1 Workout & Nutrition Toolkit
            </h3>
            <p className="font-serif text-[18px] text-[#2C3539]/80 mb-6">Want to get started on your own?</p>
            
            <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/80 mb-6">
              Not everyone needs ongoing coaching. If you're ready to take responsibility for your training but want a reliable structure to follow, the WRK GLP-1 Workout & Nutrition Toolkit gives you the foundations to get started.
            </p>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/80 mb-8">
              You'll get simple 30-minute strength sessions for home or the gym, practical nutrition guidance and resources covering key areas such as protein, hydration and recovery.
            </p>

            <div className="space-y-3">
              <p className="font-medium text-[#2C3539] mb-4">What's included</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Structured GLP-1-friendly strength workouts',
                  'Home and gym training options',
                  'Simple 30-minute sessions',
                  'Protein guidance',
                  'Nutrition resources',
                  'Hydration and recovery guidance',
                  'Practical training education'
                ].map((item, i) => (
                  <div key={i} className="flex items-start text-[15px] text-[#2C3539]/80">
                    <CheckCircle className="text-[#8A9A86] shrink-0 mr-3 mt-0.5" size={18} />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-[380px] flex flex-col justify-center shrink-0">
            <div className="bg-[#FAFAF9] rounded-2xl p-8 border border-neutral-200 mb-6">
              <p className="text-[13px] font-bold uppercase tracking-widest text-[#8A9A86] mb-1">Investment</p>
              <p className="text-[24px] font-serif text-[#2C3539] mb-3">$29 NZD <span className="text-[16px] text-[#2C3539]/60 font-sans font-normal ml-1">one-off</span></p>
              <p className="text-[14px] text-[#2C3539]/70 leading-relaxed">
                <strong className="text-[#2C3539] font-medium">Best for:</strong> Self-starters who want structure without ongoing coaching.
              </p>
            </div>
            <Link 
              to="/contact?interest=toolkit"
              className="inline-flex items-center justify-center w-full bg-white hover:bg-[#FAFAF9] text-[#2C3539] border border-neutral-200 hover:border-[#8A9A86] px-6 py-4 rounded-xl font-medium transition-colors text-[16px]"
            >
              Get the GLP-1 Toolkit
            </Link>
          </div>
        </div>

        {/* Which Option Is Right For You? */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C3539]">
              Which Option Is Right For You?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 p-8 rounded-3xl">
              <p className="text-[#8A9A86] font-medium mb-3">I want someone to guide me</p>
              <h3 className="font-serif text-[22px] text-[#2C3539] mb-4">Online Guided Coaching</h3>
              <p className="text-[15px] text-[#2C3539]/80 mb-6">
                Personalised programming, accountability and ongoing support - without needing to train face to face.
              </p>
              <p className="text-[14px] text-[#2C3539] font-medium flex items-start">
                <ArrowRight size={16} className="mr-2 mt-0.5 shrink-0 text-[#8A9A86]" />
                <span>Best for: Independent training with professional guidance.</span>
              </p>
            </div>
            
            <div className="bg-white border border-neutral-200 p-8 rounded-3xl">
              <p className="text-[#8A9A86] font-medium mb-3">I want a coach beside me</p>
              <h3 className="font-serif text-[22px] text-[#2C3539] mb-4">In-Person Guided Coaching</h3>
              <p className="text-[15px] text-[#2C3539]/80 mb-6">
                Face-to-face personal training combined with your personalised online programme and ongoing support.
              </p>
              <p className="text-[14px] text-[#2C3539] font-medium flex items-start">
                <ArrowRight size={16} className="mr-2 mt-0.5 shrink-0 text-[#8A9A86]" />
                <span>Best for: People who value hands-on coaching and accountability.</span>
              </p>
            </div>
            
            <div className="bg-white border border-neutral-200 p-8 rounded-3xl">
              <p className="text-[#8A9A86] font-medium mb-3">I want to do it myself</p>
              <h3 className="font-serif text-[22px] text-[#2C3539] mb-4">GLP-1 Workout & Nutrition Toolkit</h3>
              <p className="text-[15px] text-[#2C3539]/80 mb-6">
                A simple, affordable starting point with structured training and practical education.
              </p>
              <p className="text-[14px] text-[#2C3539] font-medium flex items-start">
                <ArrowRight size={16} className="mr-2 mt-0.5 shrink-0 text-[#8A9A86]" />
                <span>Best for: Self-starters who want a plan to follow.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Built Around Your GLP-1 Journey */}
        <div className="bg-[#2C3539] p-10 md:p-16 rounded-3xl shadow-sm mb-24 flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
              Built Around Your GLP-1 Journey
            </h2>
            <div className="text-white/80 text-[16px] md:text-[18px] leading-relaxed space-y-4">
              <p>GLP-1 weight loss isn't a one-size-fits-all experience.</p>
              <p>Your appetite, energy, training history, goals and lifestyle all influence what the right approach looks like for you.</p>
              <p>That's why WRK doesn't rely on one generic programme. Our coaching focuses on the things that matter throughout your journey:</p>
            </div>
          </div>
          <div className="w-full md:w-auto shrink-0">
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 font-serif text-[22px] md:text-[28px] text-white">
              <p>Strength.</p>
              <p>Muscle.</p>
              <p>Fitness.</p>
              <p>Nutrition.</p>
              <p>Recovery.</p>
              <p>Sustainable habits.</p>
            </div>
          </div>
        </div>

        {/* Bottom Call-to-Action Layout */}
        <div className="bg-white border border-neutral-200 p-10 md:p-16 text-center rounded-3xl shadow-sm max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C3539] mb-6">
            Not Sure Which Option Is Right For You?
          </h2>
          <div className="text-[#2C3539]/80 mb-10 max-w-2xl mx-auto text-[16px] md:text-[18px] leading-relaxed space-y-4">
            <p>You don't need to figure it out alone.</p>
            <p>Tell us a little about where you're at, what you're trying to achieve and how you'd like to train. We'll help you identify the option that makes the most sense for you.</p>
            <p className="text-[14px] italic text-[#2C3539]/60 pt-4">No pressure. No hard sell. Just a conversation about where you're at and what support might help.</p>
          </div>
          <div className="flex justify-center">
            <Link to="/contact">
              <button className="bg-[#8A9A86] hover:bg-[#768672] text-white px-8 py-4 rounded-xl font-medium transition-colors text-[16px] w-full sm:w-auto">
                Start a Conversation
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
