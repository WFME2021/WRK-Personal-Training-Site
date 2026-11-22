import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { BRAND_NAME } from '../constants';
import { Footer } from './Footer';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isTransparentHero = location.pathname === '/' || location.pathname === '/for-referrers' || location.pathname === '/clinicians';
  
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

  const headerBgClass = isTransparentHero && !isScrolled
    ? 'bg-transparent border-b border-cream/15 text-cream'
    : 'bg-cream/95 backdrop-blur-md border-b border-forest/10 text-forest';

  const wordmarkClass = isTransparentHero && !isScrolled
    ? 'text-cream'
    : 'text-forest';

  const navLinkClass = isTransparentHero && !isScrolled
    ? 'text-cream/90 hover:text-cream'
    : 'text-forest/80 hover:text-forest';

  const contactBtnClass = isTransparentHero && !isScrolled
    ? 'bg-forest/85 text-cream hover:bg-forest border border-cream/30'
    : 'bg-forest text-cream hover:bg-forest-deep border border-forest/20';

  return (
    <div className="min-h-screen flex flex-col bg-cream text-forest transition-colors duration-300 overflow-x-hidden selection:bg-forest selection:text-cream">
      
      {/* Utility Bar */}
      <div className={`${isTransparentHero && !isScrolled ? 'bg-forest-deep/90 backdrop-blur-sm' : 'bg-forest-deep'} text-cream/85 py-1.5 px-4 md:px-8 text-center md:text-right text-[12px] font-medium tracking-wide z-[60] relative transition-colors duration-300 border-b border-cream/10`}>
        <div className="max-w-7xl mx-auto flex justify-center md:justify-end">
          <Link to="/for-referrers" className="hover:text-citron transition-colors flex items-center">
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
                <div className="bg-cream text-forest border border-forest/15 rounded-xl shadow-lg p-2 flex flex-col gap-1">
                  <Link to="/online-coaching" className="text-sm font-medium text-forest/85 hover:text-forest hover:bg-quiet rounded-lg px-3 py-2 transition-colors">Online Coaching</Link>
                  <Link to="/personal-training" className="text-sm font-medium text-forest/85 hover:text-forest hover:bg-quiet rounded-lg px-3 py-2 transition-colors">In-Person PT</Link>
                  <Link to="/toolkit" className="text-sm font-medium text-forest hover:bg-quiet rounded-lg px-3 py-2 transition-colors">GLP-1 Toolkit</Link>
                </div>
              </div>
            </div>
            <Link to="/programs" className={`text-sm font-medium transition-colors ${navLinkClass}`}>Programmes</Link>
            <Link to="/tools" className={`text-sm font-medium transition-colors ${navLinkClass}`}>Tools</Link>
            <Link to="/blog" className={`text-sm font-medium transition-colors ${navLinkClass}`}>Blog</Link>
            <Link to="/contact" className={`${contactBtnClass} rounded-md px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-colors`}>Contact</Link>
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
          className="fixed inset-0 bg-forest-deep/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <div 
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-[360px] bg-cream z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-[104px] border-l border-forest/15 shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
         <button 
           className="absolute top-4 right-4 flex items-center justify-center min-w-[44px] min-h-[44px] text-forest"
           onClick={() => setIsMenuOpen(false)}
           aria-label="Close Navigation"
         >
           <X size={24} />
         </button>
         
          <div className="flex flex-col py-6 overflow-y-auto flex-grow">
           <Link onClick={() => setIsMenuOpen(false)} to="/" className="h-[56px] flex items-center px-6 text-lg font-serif text-forest hover:bg-quiet transition-colors">
             Home
           </Link>
           <Link onClick={() => setIsMenuOpen(false)} to="/about" className="h-[56px] flex items-center px-6 text-lg font-serif text-forest hover:bg-quiet transition-colors">
             About
           </Link>
           <div className="flex flex-col">
             <button 
               onClick={() => setIsServicesOpen(!isServicesOpen)}
               className="h-[56px] w-full flex items-center justify-between px-6 text-lg font-serif text-forest hover:bg-quiet transition-colors"
             >
               Services
               <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
             </button>
             {isServicesOpen && (
               <div className="flex flex-col bg-quiet/60 pb-2">
                 <Link onClick={() => setIsMenuOpen(false)} to="/online-coaching" className="h-[48px] flex items-center pl-10 pr-6 text-base text-forest/85 hover:bg-quiet transition-colors">
                   Online Coaching
                 </Link>
                 <Link onClick={() => setIsMenuOpen(false)} to="/personal-training" className="h-[48px] flex items-center pl-10 pr-6 text-base text-forest/85 hover:bg-quiet transition-colors">
                   In-Person PT
                 </Link>
                 <Link onClick={() => setIsMenuOpen(false)} to="/toolkit" className="h-[48px] flex items-center pl-10 pr-6 text-base text-forest font-medium hover:bg-quiet transition-colors">
                   GLP-1 Toolkit
                 </Link>
               </div>
             )}
           </div>
           <Link onClick={() => setIsMenuOpen(false)} to="/programs" className="h-[56px] flex items-center px-6 text-lg font-serif text-forest hover:bg-quiet transition-colors">
             Programmes
           </Link>
           <Link onClick={() => setIsMenuOpen(false)} to="/tools" className="h-[56px] flex items-center px-6 text-lg font-serif text-forest hover:bg-quiet transition-colors">
             Tools
           </Link>
           <Link onClick={() => setIsMenuOpen(false)} to="/blog" className="h-[56px] flex items-center px-6 text-lg font-serif text-forest hover:bg-quiet transition-colors">
             Blog
           </Link>
           <div className="px-6 pt-4">
             <Link onClick={() => setIsMenuOpen(false)} to="/contact" className="block text-center bg-forest text-cream hover:bg-forest-deep rounded-md px-4 py-3 text-xs uppercase tracking-wider font-semibold transition-colors">
               Contact
             </Link>
           </div>
         </div>
      </div>

      <main className={`flex-grow ${isTransparentHero ? 'pt-16 md:pt-20' : 'pt-[104px]'} bg-cream`}>
        {children}
      </main>

      <Footer />
    </div>
  );
};
