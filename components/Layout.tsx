import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { BRAND_NAME } from '../constants';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  
  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-[#2C3539] transition-colors duration-300 overflow-x-hidden selection:bg-[#8A9A86] selection:text-white">
      
      {/* Utility Bar */}
      <div className="bg-[#1A1C1D] text-neutral-300 py-1.5 px-4 md:px-8 text-center md:text-right text-[12px] font-medium tracking-wide z-[60] relative">
        <div className="max-w-7xl mx-auto flex justify-center md:justify-end">
          <Link to="/for-referrers" className="hover:text-white transition-colors flex items-center">
            Healthcare Providers & Referrals <span className="ml-1">→</span>
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="fixed w-full top-[32px] md:top-[32px] z-50 bg-[#FAFAF9]/90 backdrop-blur-md transition-colors duration-300 border-b border-neutral-200 h-[72px]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          
          {/* Logo / Wordmark */}
          <Link to="/" className="block hover:opacity-80 transition-opacity flex-shrink-0" aria-label="Home">
             <span className="font-serif text-[24px] md:text-3xl tracking-wide text-[#2C3539] uppercase font-bold">WRK</span>
          </Link>

          {/* Desktop Nav */}
                    <nav className="hidden md:flex flex-grow justify-end items-center space-x-6 lg:space-x-8">
            <Link to="/about" className="text-[14px] font-medium text-[#2C3539]/80 hover:text-[#2C3539] transition-colors">About</Link>
            <div className="relative group">
              <button className="flex items-center text-[14px] font-medium text-[#2C3539]/80 hover:text-[#2C3539] transition-colors py-2">
                Services <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white border border-neutral-100 rounded-xl shadow-lg p-2 flex flex-col gap-1">
                  <Link to="/online-coaching" className="text-[14px] font-medium text-[#2C3539]/80 hover:text-[#2C3539] hover:bg-neutral-50 rounded-lg px-3 py-2 transition-colors">Online Coaching</Link>
                  <Link to="/personal-training" className="text-[14px] font-medium text-[#2C3539]/80 hover:text-[#2C3539] hover:bg-neutral-50 rounded-lg px-3 py-2 transition-colors">In-Person PT</Link>
                  <Link to="/toolkit" className="text-[14px] font-medium text-teal-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg px-3 py-2 transition-colors">GLP-1 Toolkit</Link>
                </div>
              </div>
            </div>
            <Link to="/programs" className="text-[14px] font-medium text-[#2C3539]/80 hover:text-[#2C3539] transition-colors">Programs</Link>
            <Link to="/tools" className="text-[14px] font-medium text-[#2C3539]/80 hover:text-[#2C3539] transition-colors">Tools</Link>
            <Link to="/blog" className="text-[14px] font-medium text-[#2C3539]/80 hover:text-[#2C3539] transition-colors">Blog</Link>
            <Link to="/contact" className="text-[14px] font-medium text-[#2C3539]/80 hover:text-[#2C3539] transition-colors">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center h-full ml-4">
            <button 
              className="text-[#2C3539] flex items-center justify-center min-w-[44px] min-h-[44px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <div 
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-[360px] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-[104px] border-l border-neutral-200 shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
         <button 
           className="absolute top-4 right-4 flex items-center justify-center min-w-[44px] min-h-[44px] text-[#2C3539]"
           onClick={() => setIsMenuOpen(false)}
         >
           <X size={24} />
         </button>
         
          <div className="flex flex-col py-6 overflow-y-auto flex-grow">
           <Link onClick={() => setIsMenuOpen(false)} to="/" className="h-[56px] flex items-center px-6 text-[18px] font-serif text-[#2C3539] hover:bg-neutral-50 transition-colors">
             Home
           </Link>
           <Link onClick={() => setIsMenuOpen(false)} to="/about" className="h-[56px] flex items-center px-6 text-[18px] font-serif text-[#2C3539] hover:bg-neutral-50 transition-colors">
             About
           </Link>
           <div className="flex flex-col">
             <button 
               onClick={() => setIsServicesOpen(!isServicesOpen)}
               className="h-[56px] w-full flex items-center justify-between px-6 text-[18px] font-serif text-[#2C3539] hover:bg-neutral-50 transition-colors"
             >
               Services
               <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
             </button>
             {isServicesOpen && (
               <div className="flex flex-col bg-neutral-50/50 pb-2">
                 <Link onClick={() => setIsMenuOpen(false)} to="/online-coaching" className="h-[48px] flex items-center pl-10 pr-6 text-[16px] text-[#2C3539]/80 hover:bg-neutral-100 transition-colors">
                   Online Coaching
                 </Link>
                 <Link onClick={() => setIsMenuOpen(false)} to="/personal-training" className="h-[48px] flex items-center pl-10 pr-6 text-[16px] text-[#2C3539]/80 hover:bg-neutral-100 transition-colors">
                   In-Person PT
                 </Link>
                 <Link onClick={() => setIsMenuOpen(false)} to="/toolkit" className="h-[48px] flex items-center pl-10 pr-6 text-[16px] text-teal-600 hover:bg-neutral-100 transition-colors">
                   GLP-1 Toolkit
                 </Link>
               </div>
             )}
           </div>
           <Link onClick={() => setIsMenuOpen(false)} to="/programs" className="h-[56px] flex items-center px-6 text-[18px] font-serif text-[#2C3539] hover:bg-neutral-50 transition-colors">
             Programs
           </Link>
           <Link onClick={() => setIsMenuOpen(false)} to="/tools" className="h-[56px] flex items-center px-6 text-[18px] font-serif text-[#2C3539] hover:bg-neutral-50 transition-colors">
             Tools
           </Link>
           <Link onClick={() => setIsMenuOpen(false)} to="/blog" className="h-[56px] flex items-center px-6 text-[18px] font-serif text-[#2C3539] hover:bg-neutral-50 transition-colors">
             Blog
           </Link>
         </div>
      </div>

      <main className="flex-grow pt-[104px] bg-[#FAFAF9]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1C1D] text-neutral-300 relative overflow-hidden pt-24 pb-12 border-t border-neutral-800">
        {/* Massive Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28vw] font-serif font-bold text-white/[0.03] pointer-events-none select-none leading-none tracking-tighter">
          WRK
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Contact Portal Section */}
          <div className="md:col-span-7 lg:col-span-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-serif text-white mb-3">Have a Question?</h3>
              <p className="text-[15px] text-neutral-400 mb-8 leading-relaxed">
                Not sure where to start? Let me know what phase you're currently in and we can figure out the best approach together.
              </p>
              
              <form className="space-y-4" onSubmit={(e) => { 
                e.preventDefault(); 
                const phase = new FormData(e.currentTarget as HTMLFormElement).get('phase');
                if (phase) {
                  window.location.href=`/contact?phase=${encodeURIComponent(phase as string)}`;
                } else {
                  window.location.href='/contact';
                }
              }}>
                <div className="relative">
                  <select name="phase" defaultValue="" className="w-full bg-[#1A1C1D] border border-neutral-700 text-white px-5 py-4 rounded-xl appearance-none outline-none focus:border-[#8A9A86] transition-colors cursor-pointer text-[15px]">
                    <option value="" disabled>Select your current phase...</option>
                    <option value="I am currently in the active weight loss phase">I am currently in the active weight loss phase</option>
                    <option value="I am preparing to transition/wean off medication">I am preparing to transition/wean off medication</option>
                    <option value="I am post-medication and looking to maintain my habits">I am post-medication and looking to maintain my habits</option>
                    <option value="General personal training enquiry">General personal training enquiry</option>
                  </select>
                  <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-neutral-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
                <button type="submit" className="w-full bg-[#8A9A86] hover:bg-[#768672] text-white px-6 py-4 rounded-xl font-medium transition-colors text-[15px]">
                  Send a Message
                </button>
              </form>
            </div>
          </div>

          {/* Address & Info */}
          <div className="md:col-span-5 lg:col-span-5 lg:col-start-8 space-y-12 flex flex-col justify-center">
            <div>
              <h4 className="text-white font-serif text-[20px] mb-4">Facility</h4>
              <p className="text-[15px] text-neutral-400 leading-relaxed">
                WRK Personal Training<br />
                Addington, Christchurch<br />
                New Zealand
              </p>
            </div>
            <div>
              <h4 className="text-white font-serif text-[20px] mb-4">Legal & Privacy</h4>
              <div className="flex flex-col space-y-3">
                <Link to="/privacy" className="text-[15px] text-neutral-400 hover:text-white transition-colors">Privacy Policy (Secure Data Handling)</Link>
                <Link to="/terms" className="text-[15px] text-neutral-400 hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/health-disclaimer" className="text-[15px] text-neutral-400 hover:text-white transition-colors">Medical Disclaimer</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-serif text-[20px] mb-4">Professionals</h4>
              <div className="flex flex-col space-y-3">
                <Link to="/for-referrers" className="text-[15px] text-neutral-400 hover:text-white transition-colors">Clinical & GP Referrals</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-24 pt-8 border-t border-neutral-800 text-center relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-neutral-500">
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-[13px] text-neutral-500">
             <span>GLP-1 Specialized</span>
             <span>•</span>
             <span>Evidence-Based</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
