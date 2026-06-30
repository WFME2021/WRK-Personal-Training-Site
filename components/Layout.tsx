
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BRAND_NAME, NAVIGATION_LINKS, SERVICE_LINKS, EMAIL_CONTACT } from '../constants';
import { Button } from './Button';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-navy text-white transition-colors duration-300 overflow-x-hidden selection:bg-orange-burnt selection:text-white">
      
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-navy/96 backdrop-blur-md transition-colors duration-300 border-b border-navy-light h-[60px] md:h-[72px]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12 h-full flex items-center justify-between">
          
          {/* Logo / Wordmark */}
          <Link to="/" className="block hover:opacity-80 transition-opacity flex-shrink-0" aria-label="Home">
             <span className="font-display text-[22px] md:text-3xl tracking-wide text-white uppercase">WRK</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-grow justify-center items-center space-x-5 lg:space-x-8">
            <div className="relative group py-4">
               <span className="text-[14px] font-medium text-off-white group-hover:text-white transition-colors cursor-pointer flex items-center gap-1.5">
                 Services
                 <svg className="w-3.5 h-3.5 text-off-white/70 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
               </span>
               <div className="absolute top-full left-1/2 -translate-x-1/2 w-[220px] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 bg-navy/95 backdrop-blur-md border border-navy-light rounded-xl shadow-2xl py-2 z-50">
                 {SERVICE_LINKS.map(link => (
                   <Link key={link.path} to={link.path} className="block px-5 py-3 text-[14px] font-medium text-off-white hover:text-white hover:bg-navy-light/50 transition-colors">
                     {link.label}
                   </Link>
                 ))}
               </div>
            </div>
            {NAVIGATION_LINKS.map((link: any) => {
              if (link.isPrimary || link.isHighlight) return null; // Rendered elsewhere
              return (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="text-[14px] font-medium text-off-white hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop Right Side CTA */}
          <div className="hidden md:flex flex-shrink-0">
             {NAVIGATION_LINKS.filter((l:any) => l.isPrimary).map((link: any) => (
                <Link key={link.path} to={link.path}>
                   <Button style={{height: '40px'}} size="sm" className="px-8 text-sm">
                     {link.label}
                   </Button>
                </Link>
             ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center h-full">
            <button 
              className="text-white flex items-center justify-center min-w-[44px] min-h-[44px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      {/* Backdrop overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <div 
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-[360px] bg-navy-mid z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-[60px] border-l border-navy-light shadow-2xl shadow-black/50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
         <button 
           className="absolute top-0 right-5 flex items-center justify-center min-w-[44px] min-h-[60px] text-white"
           onClick={() => setIsMenuOpen(false)}
         >
           <X size={24} />
         </button>
         
         <div className="flex flex-col py-6 overflow-y-auto flex-grow">
           <Link onClick={() => setIsMenuOpen(false)} to="/" className="h-[56px] flex items-center px-6 text-[20px] font-semibold text-white hover:bg-navy transition-colors border-l-3 border-transparent hover:border-orange-burnt">
             Home
           </Link>
           {SERVICE_LINKS.map(link => (
             <Link onClick={() => setIsMenuOpen(false)} key={link.path} to={link.path} className="h-[56px] flex items-center px-6 text-[20px] font-semibold text-white hover:bg-navy transition-colors border-l-3 border-transparent hover:border-orange-burnt">
               {link.label}
             </Link>
           ))}
           {NAVIGATION_LINKS.filter((l:any) => !l.isPrimary && !l.isHighlight).map((link: any) => (
             <Link 
               key={link.path} 
               to={link.path}
               onClick={() => setIsMenuOpen(false)}
               className="h-[56px] flex items-center px-6 text-[20px] font-semibold text-white hover:bg-navy transition-colors border-l-3 border-transparent hover:border-orange-burnt"
             >
               {link.label}
             </Link>
           ))}
         </div>
         
         <div className="p-6 border-t border-navy-light mt-auto">
            {NAVIGATION_LINKS.filter((l:any) => l.isPrimary).map((link: any) => (
              <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)}>
                 <Button fullWidth size="lg" className="w-full">
                    {link.label}
                 </Button>
              </Link>
            ))}
         </div>
      </div>

      <main className="flex-grow pt-[60px] md:pt-[72px]">
        {children}
      </main>

      {/* Footer */}
      <footer className="footer-bg relative mt-16 pt-[48px] pb-[32px] px-5 sm:px-12">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gold-rule opacity-40"></div>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
            
            {/* Col 1 */}
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="block mb-4 hover:opacity-80 transition-opacity">
                 <span className="font-display text-[40px] md:text-5xl tracking-wide text-white uppercase leading-[1.25]">WRK</span>
              </Link>
              <p className="text-white text-[15px] leading-relaxed">
                The right work, done well.
              </p>
            </div>
            
            {/* Col 2 */}
            <div>
              <h4 className="font-sans font-medium text-[11px] uppercase tracking-[0.12em] text-orange-burnt mb-6">Company</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-[15px] text-grey-mid hover:text-white transition-colors">About</Link></li>
                <li><Link to="/blog" className="text-[15px] text-grey-mid hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/tools" className="text-[15px] text-grey-mid hover:text-white transition-colors">Tools</Link></li>
                <li><Link to="/contact" className="text-[15px] text-grey-mid hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="font-sans font-medium text-[11px] uppercase tracking-[0.12em] text-orange-burnt mb-6">Services</h4>
              <ul className="space-y-4">
                <li><Link to="/assessment" className="text-[15px] font-semibold text-white hover:text-orange-burnt transition-colors">Free Custom Diagnostic</Link></li>
                <li><Link to="/personal-training" className="text-[15px] text-grey-mid hover:text-white transition-colors">1:1 Personal Training</Link></li>
                <li><Link to="/online-coaching" className="text-[15px] text-grey-mid hover:text-white transition-colors">Online Coaching</Link></li>
                <li><Link to="/corporate-wellness" className="text-[15px] text-grey-mid hover:text-white transition-colors">Corporate Wellness</Link></li>
                <li><Link to="/14-day-fat-loss-foundations" className="text-[15px] text-grey-mid hover:text-white transition-colors">14-Day Programme</Link></li>
              </ul>
            </div>
            
            {/* Col 4 */}
            <div>
              <h4 className="font-sans font-medium text-[11px] uppercase tracking-[0.12em] text-orange-burnt mb-6">Contact</h4>
              <address className="not-italic space-y-4 text-[15px] text-grey-mid">
                <p>Based at Get Me Fitter</p>
                <p>Addington, Christchurch</p>
                <p><a href={`mailto:${EMAIL_CONTACT}`} className="hover:text-white transition-colors">{EMAIL_CONTACT}</a></p>
                <p><a href="tel:+6421393160" className="hover:text-white transition-colors">021 393 160</a></p>
              </address>
            </div>
            
          </div>
          
          <div className="pt-8 border-t border-navy-light flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-[12px] text-grey-mid">&copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
             <div className="flex flex-wrap justify-center gap-6">
                <Link to="/terms" className="text-[12px] text-grey-mid hover:text-white transition-colors">Terms</Link>
                <Link to="/privacy" className="text-[12px] text-grey-mid hover:text-white transition-colors">Privacy</Link>
                <Link to="/health-disclaimer" className="text-[12px] text-grey-mid hover:text-white transition-colors">Health Disclaimer</Link>
             </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
};
