import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Activity, Target, CheckCircle, ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export const Programs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-12">
      <SeoHead
        title="GLP-1 Fitness Programs | WRK Personal Training"
        description="12-week training pathways built around where you are now in your GLP-1 journey. Choose the right program to protect strength and build fitness."
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Page Header */}
        <header className="text-center mb-20 max-w-4xl mx-auto">
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            GLP-1 Fitness Programs
          </h1>
          <h2 className="font-serif text-[24px] md:text-[28px] text-[#2C3539]/80 mb-6">
            12-week training pathways built around where you are now.
          </h2>
          <div className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/80 space-y-6">
            <p>
              Your training needs can change as your GLP-1 journey changes.
            </p>
            <p>
              Whether you're actively losing weight, moving towards maintenance, or looking to build a sustainable fitness routine for the long term, WRK gives you a clear 12-week pathway to follow.
            </p>
            <p>
              Each programme focuses on the same foundations:
            </p>
            <p className="font-serif text-[22px] md:text-[26px] text-[#2C3539] py-4">
              Strength. Muscle. Fitness. Movement. Sustainable habits.
            </p>
            <p>
              Choose the pathway that best matches where you are today.
            </p>
          </div>

          <div className="mt-16 mb-8 w-full max-w-5xl mx-auto rounded-3xl shadow-sm border border-neutral-200 wrk-photo-container">
            <div className="wrk-photo-overlay"></div>
            <img 
              src="https://i.postimg.cc/cJpTZjWZ/pexels-uriel-mont-6271691.jpg" 
              alt="Active adult hiking outdoors, demonstrating the outcome of functional training" 
              className="w-full h-auto aspect-[16/9] md:aspect-[2.5/1] wrk-photo"
            />
          </div>
        </header>

        {/* Tracks Vertical Layout */}
        <div className="space-y-12 mb-24">
          
          {/* Track 1 */}
          <div className="bg-white border border-neutral-200 p-8 md:p-14 rounded-3xl shadow-sm flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3 flex flex-col">
              <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8 shrink-0">
                <Shield size={28} />
              </div>
              <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] leading-tight mb-2">
                Track 1 —<br/>GLP-1 Strength & Muscle
              </h2>
              <p className="font-serif text-[18px] text-[#2C3539]/80 mb-6">
                Protect your strength while you lose weight.
              </p>
            </div>
            
            <div className="md:w-2/3 flex flex-col">
              <div className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/80 space-y-4 mb-8">
                <p>Designed for people currently in the active weight-loss phase.</p>
                <p>
                  When bodyweight is changing, maintaining strength and muscle should be a priority. This 12-week pathway builds a consistent resistance-training routine around your current ability, lifestyle and recovery.
                </p>
                <p>
                  The goal isn't to train harder for the sake of it.
                </p>
                <p>
                  It's to <strong className="text-[#2C3539] font-medium">train consistently, build strength and give your body a reason to hold onto muscle while you lose weight.</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-10">
                <div className="col-span-full">
                  <p className="font-medium text-[#2C3539] mb-4">You'll focus on:</p>
                </div>
                {[
                  'Progressive full-body strength training',
                  '30-minute workouts designed around a busy schedule',
                  'Building and maintaining strength',
                  'Practical protein and nutrition habits',
                  'Daily movement and fitness',
                  'Recovery and training consistency',
                  'Building confidence in the gym or at home'
                ].map((item, i) => (
                  <div key={i} className="flex items-start text-[15px] text-[#2C3539]/80">
                    <CheckCircle className="text-[#8A9A86] shrink-0 mr-3 mt-0.5" size={18} />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#FAFAF9] rounded-2xl p-6 border border-neutral-200 mb-8">
                <p className="text-[13px] font-bold uppercase tracking-widest text-[#8A9A86] mb-2">Best Suited To:</p>
                <p className="text-[15px] text-[#2C3539]/90 font-medium leading-relaxed">
                  People currently using a GLP-1 and actively working towards weight loss who want to prioritise strength and muscle.
                </p>
              </div>

              <Link 
                to="/services"
                className="inline-flex items-center text-[#2C3539] font-medium hover:text-[#8A9A86] transition-colors"
              >
                Explore Track 1 Options <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Track 2 */}
          <div className="bg-white border border-neutral-200 p-8 md:p-14 rounded-3xl shadow-sm flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3 flex flex-col">
              <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8 shrink-0">
                <Activity size={28} />
              </div>
              <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] leading-tight mb-2">
                Track 2 —<br/>GLP-1 Transition & Maintenance
              </h2>
              <p className="font-serif text-[18px] text-[#2C3539]/80 mb-6">
                Build the habits that take you beyond weight loss.
              </p>
            </div>
            
            <div className="md:w-2/3 flex flex-col">
              <div className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/80 space-y-4 mb-8">
                <p>Weight loss is one phase of the journey.</p>
                <p>
                  This pathway is designed for people who are approaching their target, moving into maintenance, or wanting to shift their focus from <strong className="text-[#2C3539] font-medium">losing weight to building fitness.</strong>
                </p>
                <p>
                  Rather than chasing another number on the scale, the focus moves towards strength, fitness, routine and long-term consistency.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-10">
                <div className="col-span-full">
                  <p className="font-medium text-[#2C3539] mb-4">You'll focus on:</p>
                </div>
                {[
                  'Progressive strength training',
                  'Building cardiovascular fitness',
                  'Increasing daily movement',
                  'Establishing sustainable training habits',
                  'Nutrition habits that support maintenance',
                  'Understanding and tracking progress beyond bodyweight',
                  'Building confidence and independence'
                ].map((item, i) => (
                  <div key={i} className="flex items-start text-[15px] text-[#2C3539]/80">
                    <CheckCircle className="text-[#8A9A86] shrink-0 mr-3 mt-0.5" size={18} />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#FAFAF9] rounded-2xl p-6 border border-neutral-200 mb-8">
                <p className="text-[13px] font-bold uppercase tracking-widest text-[#8A9A86] mb-2">Best Suited To:</p>
                <p className="text-[15px] text-[#2C3539]/90 font-medium leading-relaxed">
                  People approaching or entering weight maintenance who are ready to make fitness and sustainable habits the priority.
                </p>
              </div>

              <Link 
                to="/services"
                className="inline-flex items-center text-[#2C3539] font-medium hover:text-[#8A9A86] transition-colors"
              >
                Explore Track 2 Options <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Track 3 */}
          <div className="bg-white border border-neutral-200 p-8 md:p-14 rounded-3xl shadow-sm flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3 flex flex-col">
              <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8 shrink-0">
                <Target size={28} />
              </div>
              <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] leading-tight mb-2">
                Track 3 —<br/>Forever Strong
              </h2>
              <p className="font-serif text-[18px] text-[#2C3539]/80 mb-6">
                Build a fitness routine you can actually keep.
              </p>
            </div>
            
            <div className="md:w-2/3 flex flex-col">
              <div className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/80 space-y-4 mb-8">
                <p>The long-term goal isn't to spend your life following a weight-loss programme.</p>
                <p>
                  It's to build a body that is strong, capable and fit — and a routine that fits naturally into your life.
                </p>
                <p>
                  Forever Strong is designed for people who have completed their initial weight-loss phase and want to keep building from there.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-10">
                <div className="col-span-full">
                  <p className="font-medium text-[#2C3539] mb-4">You'll focus on:</p>
                </div>
                {[
                  'Sustainable strength training',
                  'Maintaining and progressing fitness',
                  'Training around your lifestyle',
                  'Home or gym-based options',
                  'Building physical capacity',
                  'Staying active without extremes',
                  'Creating a routine you can maintain for years'
                ].map((item, i) => (
                  <div key={i} className="flex items-start text-[15px] text-[#2C3539]/80">
                    <CheckCircle className="text-[#8A9A86] shrink-0 mr-3 mt-0.5" size={18} />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#FAFAF9] rounded-2xl p-6 border border-neutral-200 mb-8">
                <p className="text-[13px] font-bold uppercase tracking-widest text-[#8A9A86] mb-2">Best Suited To:</p>
                <p className="text-[15px] text-[#2C3539]/90 font-medium leading-relaxed">
                  People who want to make strength and fitness a permanent part of their lifestyle.
                </p>
              </div>

              <Link 
                to="/services"
                className="inline-flex items-center text-[#2C3539] font-medium hover:text-[#8A9A86] transition-colors"
              >
                Explore Track 3 Options <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* What Every 12-Week Programme Includes */}
        <div className="mb-24">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C3539] mb-6">
              What Every 12-Week Programme Includes
            </h2>
            <p className="text-[#2C3539]/80 text-[16px] md:text-[18px] leading-relaxed">
              Whichever pathway you choose, you won't be handed a generic workout PDF and left to figure it out. Every WRK programme includes:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200 p-8 rounded-2xl">
              <h3 className="font-serif text-[20px] text-[#2C3539] mb-3">Personalised Training</h3>
              <p className="text-[15px] text-[#2C3539]/70 leading-relaxed">
                Structured workouts designed around your current ability, goals, training environment and lifestyle.
              </p>
            </div>
            
            <div className="bg-white border border-neutral-200 p-8 rounded-2xl">
              <h3 className="font-serif text-[20px] text-[#2C3539] mb-3">Progressive Programming</h3>
              <p className="text-[15px] text-[#2C3539]/70 leading-relaxed">
                Your programme develops across the 12 weeks rather than simply repeating the same workouts.
              </p>
            </div>

            <div className="bg-white border border-neutral-200 p-8 rounded-2xl">
              <h3 className="font-serif text-[20px] text-[#2C3539] mb-3">WRK Training App</h3>
              <p className="text-[15px] text-[#2C3539]/70 leading-relaxed">
                Your workouts, progress tracking, resources and programme information in one place.
              </p>
            </div>

            <div className="bg-white border border-neutral-200 p-8 rounded-2xl">
              <h3 className="font-serif text-[20px] text-[#2C3539] mb-3">Coaching & Check-Ins</h3>
              <p className="text-[15px] text-[#2C3539]/70 leading-relaxed">
                Regular check-ins help you stay accountable and make adjustments as your circumstances change.
              </p>
            </div>

            <div className="bg-white border border-neutral-200 p-8 rounded-2xl">
              <h3 className="font-serif text-[20px] text-[#2C3539] mb-3">Nutrition & Lifestyle Support</h3>
              <p className="text-[15px] text-[#2C3539]/70 leading-relaxed">
                Practical education around protein, nutrition, hydration, recovery and the everyday habits that support your training.
              </p>
            </div>

            <div className="bg-white border border-neutral-200 p-8 rounded-2xl">
              <h3 className="font-serif text-[20px] text-[#2C3539] mb-3">Flexible Training</h3>
              <p className="text-[15px] text-[#2C3539]/70 leading-relaxed">
                Home or gym options, with workouts designed to fit into real life rather than requiring hours in the gym.
              </p>
            </div>
          </div>
        </div>

        {/* Which Pathway Is Right For You? */}
        <div className="bg-[#FAFAF9] border border-neutral-200 rounded-3xl p-8 md:p-14 mb-24">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C3539] mb-12 text-center">
            Which Pathway Is Right For You?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <p className="text-[18px] font-serif text-[#2C3539] mb-2">I'm actively losing weight</p>
              <div className="flex items-center text-[#8A9A86] font-medium mb-3">
                <ArrowRight size={18} className="mr-2 shrink-0" />
                <span>Track 1: GLP-1 Strength & Muscle</span>
              </div>
              <p className="text-[15px] text-[#2C3539]/70 leading-relaxed">
                Prioritise strength, muscle and consistent training while your bodyweight is changing.
              </p>
            </div>

            <div>
              <p className="text-[18px] font-serif text-[#2C3539] mb-2">I'm approaching my goal</p>
              <div className="flex items-center text-[#8A9A86] font-medium mb-3">
                <ArrowRight size={18} className="mr-2 shrink-0" />
                <span>Track 2: GLP-1 Transition & Maintenance</span>
              </div>
              <p className="text-[15px] text-[#2C3539]/70 leading-relaxed">
                Shift your focus from weight loss towards fitness, habits and long-term maintenance.
              </p>
            </div>

            <div>
              <p className="text-[18px] font-serif text-[#2C3539] mb-2">I've finished losing weight</p>
              <div className="flex items-center text-[#8A9A86] font-medium mb-3">
                <ArrowRight size={18} className="mr-2 shrink-0" />
                <span>Track 3: Forever Strong</span>
              </div>
              <p className="text-[15px] text-[#2C3539]/70 leading-relaxed">
                Build a sustainable training routine and keep developing your strength and fitness for the long term.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center border-t border-neutral-200 pt-12 max-w-2xl mx-auto">
            <h3 className="font-serif text-[22px] text-[#2C3539] mb-4">Not sure?</h3>
            <p className="text-[16px] text-[#2C3539]/80 mb-8 leading-relaxed">
              That's okay. Your pathway should reflect where <strong className="text-[#2C3539] font-medium">you</strong> are right now.
            </p>
            <Link to="/assessment">
              <button className="bg-white border border-neutral-200 hover:border-[#8A9A86] text-[#2C3539] px-8 py-4 rounded-xl font-medium transition-colors text-[16px] w-full sm:w-auto">
                Take the Free GLP-1 Fitness Assessment
              </button>
            </Link>
          </div>
        </div>

        {/* The Goal Isn't Just To Lose Weight */}
        <div className="bg-[#1A1C1D] p-10 md:p-16 lg:p-20 rounded-3xl shadow-sm text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
              The Goal Isn't Just To Lose Weight
            </h2>
            <div className="text-neutral-400 text-[16px] md:text-[18px] leading-relaxed space-y-6 mb-12">
              <p>GLP-1 medication can be a powerful tool for weight management.</p>
              <p>But what you build alongside that weight loss matters.</p>
              
              <div className="py-4 space-y-2">
                <p className="text-white font-medium text-[18px] md:text-[20px]">The strength you develop.</p>
                <p className="text-white font-medium text-[18px] md:text-[20px]">The fitness you build.</p>
                <p className="text-white font-medium text-[18px] md:text-[20px]">The habits you create.</p>
                <p className="text-white font-medium text-[18px] md:text-[20px]">The confidence you gain.</p>
              </div>
              
              <p>That's what WRK is here to help you build.</p>
              
              <p className="text-white font-serif text-[22px] md:text-[26px] leading-tight pt-4">
                Lose the weight. Keep your strength. Build the fitness to keep it off.
              </p>
            </div>
            
            <Link to="/services">
              <button className="bg-[#8A9A86] hover:bg-[#768672] text-white px-8 py-4 rounded-xl font-medium transition-colors text-[16px] w-full sm:w-auto">
                Start Your 12-Week Journey
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
