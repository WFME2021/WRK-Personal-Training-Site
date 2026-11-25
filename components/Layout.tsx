import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { BRAND_NAME, ENABLE_SUMMER_MOMENTUM, ENABLE_SELF_GUIDED_PLANS } from '../constants';
import { Footer } from './Footer';

const SUMMER_BANNER_DISMISSED_KEY = 'wrk_summer_momentum_banner_dismissed';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBannerDismissed, setIsBannerDismissed] = useState(false);
  const location = useLocation();
  const isTransparentHero = location.pathname === '/' || location.pathname === '/for-referrers' || location.pathname === '/clinicians';

  // Restore banner dismissal state on client only (safe for SSR/prerender)
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage.getItem(SUMMER_BANNER_DISMISSED_KEY) === 'true') {
        setIsBannerDismissed(true);
      }
    } catch {
      // Ignore storage access errors
    }
  }, []);

  const handleDismissBanner = () => {
    setIsBannerDismissed(true);
    try {
      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem(SUMMER_BANNER_DISMISSED_KEY, 'true');
      }
    } catch {
      // Ignore storage access errors
    }
  };
  
  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Track scroll position for transparent navbar over hero
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
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

  const showSummerBanner = ENABLE_SUMMER_MOMENTUM && !isBannerDismissed;

  return (
    <div className="min-h-screen flex flex-col bg-cream text-forest transition-colors duration-300 overflow-x-clip selection:bg-forest selection:text-cream">
      
      {/* Summer Momentum Announcement Bar */}
      {showSummerBanner && (
        <div
          role="region"
          aria-label="Summer Momentum 6-week intake announcement"
          className="bg-[#1B3B2B] text-[#FAF7F2] py-2 px-3 md:px-8 text-xs font-medium tracking-wide z-[60] relative border-b border-cream/15"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            <p className="flex-1 text-left sm:text-center leading-snug">
              <span className="sm:hidden">
                SUMMER MOMENTUM: 30 Nov – 8 Jan · A sustainable plan for GLP-1 users.{' '}
                <Link
                  to="/summer-momentum"
                  className="font-semibold text-citron underline underline-offset-4 whitespace-nowrap ml-1"
                >
                  Learn more →
                </Link>
              </span>
              <span className="hidden sm:inline">
                Summer Momentum (30 Nov – 8 Jan): A sustainable movement &amp; festive coping plan for GLP-1 users — $149 NZD.{' '}
                <Link
                  to="/summer-momentum"
                  className="inline-flex items-center font-semibold text-citron underline underline-offset-4 whitespace-nowrap ml-1"
                >
                  Learn more →
                </Link>
              </span>
            </p>
            <button
              type="button"
              onClick={handleDismissBanner}
              aria-label="Dismiss Summer Momentum announcement"
              className="shrink-0 p-1 -mr-1 text-[#FAF7F2]/80 hover:text-[#FAF7F2] transition-colors rounded-md"
            >
              <X size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Utility Bar (Desktop only — mobile accesses via drawer & footer) */}
      <div className={`hidden md:block ${isTransparentHero && !isScrolled ? 'bg-forest-deep/90 backdrop-blur-sm' : 'bg-forest-deep'} text-cream/85 py-1.5 px-4 md:px-8 text-right text-[12px] font-medium tracking-wide z-[60] relative transition-colors duration-300 border-b border-cream/10`}>
        <div className="max-w-7xl mx-auto flex justify-end">
          <Link to="/for-referrers" className="hover:text-citron transition-colors flex items-center">
            Healthcare Providers &amp; Referrals <span className="ml-1">→</span>
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 py-3 md:py-0 md:h-[72px] ${isTransparentHero ? '-mb-14 md:-mb-[72px]' : ''} ${headerBgClass}`}>
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
              <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-cream text-forest border border-forest/15 rounded-xl shadow-lg p-2 flex flex-col gap-1">
                  <Link to="/studio" className="text-sm font-medium text-forest/85 hover:text-forest hover:bg-quiet rounded-lg px-3 py-2 transition-colors">1:1 Studio Coaching</Link>
                  <Link to="/online" className="text-sm font-medium text-forest/85 hover:text-forest hover:bg-quiet rounded-lg px-3 py-2 transition-colors">1:1 Online Coaching</Link>
                  <Link to="/toolkit" className="text-sm font-medium text-forest hover:bg-quiet rounded-lg px-3 py-2 transition-colors">GLP-1 Toolkit</Link>
                </div>
              </div>
            </div>
            <Link to="/programs" className={`text-sm font-medium transition-colors whitespace-nowrap ${navLinkClass}`}>Coaching &amp; Plans</Link>
            {ENABLE_SELF_GUIDED_PLANS && (
              <Link to="/plans" className={`text-sm font-medium transition-colors whitespace-nowrap ${navLinkClass}`}>Self-Guided Plans</Link>
            )}
            <Link to="/tools" className={`text-sm font-medium transition-colors whitespace-nowrap ${navLinkClass}`}>Tools</Link>
            <Link to="/blog" className={`text-sm font-medium transition-colors ${navLinkClass}`}>Blog</Link>
            <Link to="/contact" className={`${contactBtnClass} rounded-md px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-colors`}>Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ml-4">
            <button 
              className={`flex items-center justify-center min-w-[44px] min-h-[44px] -my-2 -mr-2 transition-colors ${wordmarkClass}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-forest-deep/50 z-[65] md:hidden backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <div 
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-[360px] bg-cream z-[70] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-16 border-l border-forest/15 shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
         <button 
           className="absolute top-3 right-3 flex items-center justify-center min-w-[44px] min-h-[44px] text-forest"
           onClick={() => setIsMenuOpen(false)}
           aria-label="Close Navigation"
         >
           <X size={24} />
         </button>
         
          <div className="flex flex-col py-4 overflow-y-auto flex-grow">
           <Link onClick={() => setIsMenuOpen(false)} to="/" className="h-[52px] flex items-center px-6 text-lg font-serif text-forest hover:bg-quiet transition-colors">
             Home
           </Link>
           <Link onClick={() => setIsMenuOpen(false)} to="/about" className="h-[52px] flex items-center px-6 text-lg font-serif text-forest hover:bg-quiet transition-colors">
             About
           </Link>
           <div className="flex flex-col">
             <button 
               onClick={() => setIsServicesOpen(!isServicesOpen)}
               className="h-[52px] w-full flex items-center justify-between px-6 text-lg font-serif text-forest hover:bg-quiet transition-colors"
             >
               Services
               <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
             </button>
             {isServicesOpen && (
               <div className="flex flex-col bg-quiet/60 pb-2">
                 <Link onClick={() => setIsMenuOpen(false)} to="/studio" className="h-[44px] flex items-center pl-10 pr-6 text-base text-forest/85 hover:bg-quiet transition-colors">
                   1:1 Studio Coaching
                 </Link>
                 <Link onClick={() => setIsMenuOpen(false)} to="/online" className="h-[44px] flex items-center pl-10 pr-6 text-base text-forest/85 hover:bg-quiet transition-colors">
                   1:1 Online Coaching
                 </Link>
                 <Link onClick={() => setIsMenuOpen(false)} to="/toolkit" className="h-[44px] flex items-center pl-10 pr-6 text-base text-forest font-medium hover:bg-quiet transition-colors">
                   GLP-1 Toolkit
                 </Link>
               </div>
             )}
           </div>
           <Link onClick={() => setIsMenuOpen(false)} to="/programs" className="h-[52px] flex items-center px-6 text-lg font-serif text-forest hover:bg-quiet transition-colors">
             Coaching &amp; Plans
           </Link>
           {ENABLE_SELF_GUIDED_PLANS && (
             <Link onClick={() => setIsMenuOpen(false)} to="/plans" className="h-[52px] flex items-center px-6 text-lg font-serif text-forest hover:bg-quiet transition-colors">
               Self-Guided Plans
             </Link>
           )}
           <Link onClick={() => setIsMenuOpen(false)} to="/tools" className="h-[52px] flex items-center px-6 text-lg font-serif text-forest hover:bg-quiet transition-colors">
             Tools
           </Link>
           <Link onClick={() => setIsMenuOpen(false)} to="/blog" className="h-[52px] flex items-center px-6 text-lg font-serif text-forest hover:bg-quiet transition-colors">
             Blog
           </Link>
           <Link onClick={() => setIsMenuOpen(false)} to="/for-referrers" className="h-[52px] flex items-center px-6 text-base font-medium text-forest/85 hover:bg-quiet transition-colors border-t border-forest/10 mt-2">
             Healthcare Providers &amp; Referrals
           </Link>
           <div className="px-6 pt-4">
             <Link onClick={() => setIsMenuOpen(false)} to="/contact" className="block text-center bg-forest text-cream hover:bg-forest-deep rounded-md px-4 py-3 text-xs uppercase tracking-wider font-semibold transition-colors">
               Contact
             </Link>
           </div>
         </div>
      </div>

      <main className={`flex-grow overflow-x-clip ${isTransparentHero ? 'pt-14 md:pt-20' : 'pt-2 md:pt-8'} bg-cream`}>
        {children}
      </main>

      <Footer />
    </div>
  );
};
