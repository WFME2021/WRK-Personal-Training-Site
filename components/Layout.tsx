import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BRAND_NAME, NAVIGATION_LINKS, LOCATION } from '../constants';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-black selection:bg-brand-orange selection:text-white">
      <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link to="/" className="block hover:opacity-80 transition-opacity" aria-label="Home">
            {/* WRK Logo - Vector SVG */}
            <svg 
              viewBox="0 0 134 34" 
              className="h-8 md:h-10 w-auto" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-label="WRK Personal Training"
            >
              {/* W */}
              <path d="M2 2H12.5L17.5 26L22.5 2H32L37 26L42 2H52.5L43 32H33L27.5 10L22 32H12L2 2Z" fill="#000000"/>
              {/* R */}
              <path d="M59 2H72C80 2 84 6 84 12C84 16 82 19 78 21L86 32H75L68 22H67V32H59V2Z M67 16H71C74 16 75 15 75 12C75 9 74 8 71 8H67V16Z" fill="#000000"/>
              {/* K */}
              <path d="M92 2H100V15L109 2H120L108 17L121 32H110L100 20V32H92V2Z" fill="#000000"/>
              {/* Dot */}
              <rect x="124" y="22" width="10" height="10" fill="#FF5500"/>
            </svg>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              link.isPrimary ? (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="bg-brand-black text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-orange transition-all duration-300 shadow-lg"
                >
                  {link.label}
                </Link>
              ) : (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="text-xs font-bold uppercase tracking-widest text-brand-black hover:text-brand-orange transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-brand-black hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col space-y-4 shadow-xl h-[calc(100vh-6rem)] overflow-y-auto">
            {NAVIGATION_LINKS.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-3xl font-display uppercase font-bold ${link.isPrimary ? 'text-brand-orange' : 'text-brand-black'}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-8 border-t border-gray-100 mt-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 block">Programs</span>
              <div className="flex flex-col space-y-6">
                <Link to="/personal-training" className="text-2xl font-display uppercase font-bold text-brand-gray hover:text-brand-black">Personal Training</Link>
                <Link to="/online-coaching" className="text-2xl font-display uppercase font-bold text-brand-gray hover:text-brand-black">Online Coaching</Link>
                <Link to="/corporate-wellness" className="text-2xl font-display uppercase font-bold text-brand-gray hover:text-brand-black">Corporate Wellness</Link>
                <Link to="/42-day-reset" className="text-2xl font-display uppercase font-bold text-brand-gray hover:text-brand-black">42 Day Reset</Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer - High Contrast Black */}
      <footer className="bg-brand-black text-white py-24 rounded-t-[3rem] mt-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              {/* Footer Logo - Matching the Header SVG style via Text */}
              <h3 className="text-4xl font-display font-bold uppercase tracking-tighter mb-6">WRK<span className="text-brand-orange">.</span></h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Personal Training for people who show up. No hype. No guilt. Just work.
              </p>
              
              <address className="not-italic text-sm text-gray-400 space-y-2">
                <p className="font-bold text-brand-orange">WRK Personal Training</p>
                <p>Based at Get Me Fitter</p>
                <p>Addington, Christchurch, New Zealand</p>
                <p className="mt-2"><a href="mailto:coach@wrkpersonaltraining.com" className="hover:text-white">coach@wrkpersonaltraining.com</a></p>
              </address>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs text-brand-orange mb-8">Coaching</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-400">
                <li><Link to="/personal-training" className="hover:text-white transition-colors">Personal Training</Link></li>
                <li><Link to="/online-coaching" className="hover:text-white transition-colors">Online Coaching</Link></li>
                <li><Link to="/corporate-wellness" className="hover:text-white transition-colors">Corporate Wellness</Link></li>
                <li><Link to="/42-day-reset" className="hover:text-white transition-colors">42 Day Reset</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs text-brand-orange mb-8">Company</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs text-brand-orange mb-8">Action</h4>
              <p className="text-sm text-gray-400 mb-6">
                Unsure where to begin?
              </p>
              <Link to="/assessment" className="inline-block bg-white text-brand-black px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-brand-orange hover:text-white transition-colors">
                Take Assessment
              </Link>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/10 text-xs text-gray-600 flex flex-col md:flex-row justify-between items-center font-medium uppercase tracking-wider">
            <p>&copy; {new Date().getFullYear()} {BRAND_NAME}</p>
            <div className="flex items-center gap-4 mt-2 md:mt-0">
              <p>The right work, done well.</p>
              <span className="hidden md:inline text-gray-800">|</span>
              <Link to="/admin" className="opacity-50 hover:opacity-100 hover:text-white transition-all">Admin</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};