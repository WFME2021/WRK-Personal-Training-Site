import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { BRAND_NAME } from '../constants';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Track scroll position for transparent navbar over hero
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBgClass = isHome && !isScrolled
    ? 'bg-transparent border-b border-white/10 text-white'
    : 'bg-canvas/90 backdrop-blur-md border-b border-charcoal/5 text-charcoal';

  const wordmarkClass = isHome && !isScrolled
    ? 'text-white'
    : 'text-charcoal';

  const navLinkClass = isHome && !isScrolled
    ? 'text-sand-100 hover:text-white'
    : 'text-charcoal/80 hover:text-spruce-800';

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-charcoal transition-colors duration-300 overflow-x-hidden selection:bg-spruce-800 selection:text-sand-50">
      
      {/* Utility Bar */}
      <div className={`${isHome && !isScrolled ? 'bg-charcoal/80 backdrop-blur-sm' : 'bg-spruce-900'} text-sand-200/80 py-1.5 px-4 md:px-8 text-center md:text-right text-[12px] font-medium tracking-wide z-[60] relative transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto flex justify-center md:justify-end">
          <Link to="/for-referrers" className="hover:text-sand-50 transition-colors flex items-center">
            Healthcare Providers & Referrals <span className="ml-1">→</span>
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className={`fixed w-full top-[32px] md:top-[32px] z-50 transition-all duration-300 h-[72px] ${headerBgClass}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          
          {/* Logo / Wordmark */}
          <Link to="/" className="block hover:opacity-80 transition-opacity flex-shrink-0" aria-label="Home">
             <span className={`font-serif text-xl sm:text-2xl font-bold tracking-tight uppercase transition-colors ${wordmarkClass}`}>WRK</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-grow justify-end items-center space-x-6 lg:space-x-8">
            <Link to="/about" className={`text-sm font-medium transition-colors ${navLinkClass}`}>About</Link>
            <div className="relative group">
              <button className={`flex items-center text-sm font-medium transition-colors py-2 ${navLinkClass}`}>
                Services <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-canvas text-charcoal border border-charcoal/10 rounded-xl shadow-lg p-2 flex flex-col gap-1">
                  <Link to="/online-coaching" className="text-sm font-medium text-charcoal/80 hover:text-spruce-800 hover:bg-sand-100/50 rounded-lg px-3 py-2 transition-colors">Online Coaching</Link>
                  <Link to="/personal-training" className="text-sm font-medium text-charcoal/80 hover:text-spruce-800 hover:bg-sand-100/50 rounded-lg px-3 py-2 transition-colors">In-Person PT</Link>
                  <Link to="/toolkit" className="text-sm font-medium text-spruce-800 hover:text-spruce-900 hover:bg-sand-100/50 rounded-lg px-3 py-2 transition-colors">GLP-1 Toolkit</Link>
                </div>
              </div>
            </div>
            <Link to="/programs" className={`text-sm font-medium transition-colors ${navLinkClass}`}>Programs</Link>
            <Link to="/tools" className={`text-sm font-medium transition-colors ${navLinkClass}`}>Tools</Link>
            <Link to="/blog" className={`text-sm font-medium transition-colors ${navLinkClass}`}>Blog</Link>
            <Link to="/contact" className="bg-spruce-800 text-sand-50 hover:bg-spruce-900 border border-sand-200/20 rounded-md px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-colors">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center h-full ml-4">
            <button 
              className={`flex items-center justify-center min-w-[44px] min-h-[44px] transition-colors ${wordmarkClass}`}
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
          className="fixed inset-0 bg-charcoal/40 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <div 
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-[360px] bg-canvas z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-[104px] border-l border-charcoal/10 shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
         <button 
           className="absolute top-4 right-4 flex items-center justify-center min-w-[44px] min-h-[44px] text-charcoal"
           onClick={() => setIsMenuOpen(false)}
         >
           <X size={24} />
         </button>
         
          <div className="flex flex-col py-6 overflow-y-auto flex-grow">
           <Link onClick={() => setIsMenuOpen(false)} to="/" className="h-[56px] flex items-center px-6 text-lg font-serif text-charcoal hover:bg-sand-100/50 transition-colors">
             Home
           </Link>
           <Link onClick={() => setIsMenuOpen(false)} to="/about" className="h-[56px] flex items-center px-6 text-lg font-serif text-charcoal hover:bg-sand-100/50 transition-colors">
             About
           </Link>
           <div className="flex flex-col">
             <button 
               onClick={() => setIsServicesOpen(!isServicesOpen)}
               className="h-[56px] w-full flex items-center justify-between px-6 text-lg font-serif text-charcoal hover:bg-sand-100/50 transition-colors"
             >
               Services
               <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
             </button>
             {isServicesOpen && (
               <div className="flex flex-col bg-sand-50/50 pb-2">
                 <Link onClick={() => setIsMenuOpen(false)} to="/online-coaching" className="h-[48px] flex items-center pl-10 pr-6 text-base text-charcoal/80 hover:bg-sand-100/60 transition-colors">
                   Online Coaching
                 </Link>
                 <Link onClick={() => setIsMenuOpen(false)} to="/personal-training" className="h-[48px] flex items-center pl-10 pr-6 text-base text-charcoal/80 hover:bg-sand-100/60 transition-colors">
                   In-Person PT
                 </Link>
                 <Link onClick={() => setIsMenuOpen(false)} to="/toolkit" className="h-[48px] flex items-center pl-10 pr-6 text-base text-spruce-800 font-medium hover:bg-sand-100/60 transition-colors">
                   GLP-1 Toolkit
                 </Link>
               </div>
             )}
           </div>
           <Link onClick={() => setIsMenuOpen(false)} to="/programs" className="h-[56px] flex items-center px-6 text-lg font-serif text-charcoal hover:bg-sand-100/50 transition-colors">
             Programs
           </Link>
           <Link onClick={() => setIsMenuOpen(false)} to="/tools" className="h-[56px] flex items-center px-6 text-lg font-serif text-charcoal hover:bg-sand-100/50 transition-colors">
             Tools
           </Link>
           <Link onClick={() => setIsMenuOpen(false)} to="/blog" className="h-[56px] flex items-center px-6 text-lg font-serif text-charcoal hover:bg-sand-100/50 transition-colors">
             Blog
           </Link>
           <div className="px-6 pt-4">
             <Link onClick={() => setIsMenuOpen(false)} to="/contact" className="block text-center bg-spruce-800 text-sand-50 hover:bg-spruce-900 rounded-md px-4 py-3 text-xs uppercase tracking-wider font-semibold transition-colors">
               Contact
             </Link>
           </div>
         </div>
      </div>

      <main className={`flex-grow ${isHome ? 'pt-16 md:pt-20' : 'pt-[104px]'} bg-canvas`}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-spruce-800 text-sand-50 relative overflow-hidden pt-20 pb-12 border-t border-spruce-900">
        {/* Massive Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28vw] font-serif font-bold text-white/[0.02] pointer-events-none select-none leading-none tracking-tighter">
          WRK
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Contact / Phase Inquiries Portal */}
          <div className="md:col-span-7 lg:col-span-6">
            <div className="bg-spruce-900/40 border border-sand-200/15 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="font-serif text-lg text-sand-100 font-semibold mb-3">Have a Question?</h3>
              <p className="text-sm text-sand-200/80 mb-6 leading-relaxed">
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
                  <select name="phase" defaultValue="" className="w-full bg-spruce-900/60 border border-sand-200/20 text-sand-50 placeholder:text-sand-200/40 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-sand-200/50 appearance-none cursor-pointer">
                    <option value="" disabled className="bg-spruce-900 text-sand-200">Select your current phase...</option>
                    <option value="I am currently in the active weight loss phase" className="bg-spruce-900 text-sand-50">I am currently in the active weight loss phase</option>
                    <option value="I am preparing to transition/wean off medication" className="bg-spruce-900 text-sand-50">I am preparing to transition/wean off medication</option>
                    <option value="I am post-medication and looking to maintain my habits" className="bg-spruce-900 text-sand-50">I am post-medication and looking to maintain my habits</option>
                    <option value="General personal training enquiry" className="bg-spruce-900 text-sand-50">General personal training enquiry</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-sand-200/60">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
                <button type="submit" className="w-full bg-sand-100 text-spruce-900 hover:bg-white font-medium text-xs uppercase tracking-wider rounded-md px-4 py-2.5 transition-colors">
                  Send a Message
                </button>
              </form>
            </div>
          </div>

          {/* Address & Info */}
          <div className="md:col-span-5 lg:col-span-5 lg:col-start-8 space-y-8 flex flex-col justify-center">
            <div>
              <h4 className="font-serif text-lg text-sand-100 font-semibold mb-3">Facility</h4>
              <p className="text-sm text-sand-200/80 leading-relaxed">
                WRK Personal Training<br />
                Addington, Christchurch<br />
                New Zealand
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg text-sand-100 font-semibold mb-3">Legal & Privacy</h4>
              <div className="flex flex-col space-y-2">
                <Link to="/privacy" className="text-sm text-sand-200/80 hover:text-sand-50 transition-colors">Privacy Policy (Secure Data Handling)</Link>
                <Link to="/terms" className="text-sm text-sand-200/80 hover:text-sand-50 transition-colors">Terms of Service</Link>
                <Link to="/health-disclaimer" className="text-sm text-sand-200/80 hover:text-sand-50 transition-colors">Medical Disclaimer</Link>
              </div>
            </div>
            <div>
              <h4 className="font-serif text-lg text-sand-100 font-semibold mb-3">Professionals</h4>
              <div className="flex flex-col space-y-2">
                <Link to="/for-referrers" className="text-sm text-sand-200/80 hover:text-sand-50 transition-colors">Clinical & GP Referrals</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 text-xs text-sand-200/50 border-t border-sand-200/10 pt-6 mt-12 text-center relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
             <span>GLP-1 Specialized</span>
             <span>•</span>
             <span>Evidence-Based</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
