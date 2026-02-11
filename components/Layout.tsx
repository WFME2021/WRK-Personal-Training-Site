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
    <div className="min-h-screen flex flex-col bg-brand-light text-brand-black selection:bg-brand-orange selection:text-white">
      <header className="fixed w-full top-0 z-50 bg-brand-light/90 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link to="/" className="flex flex-col group">
            {/* Logo */}
            <span className="text-3xl font-display font-bold uppercase tracking-tighter leading-none text-brand-primary group-hover:text-brand-black transition-colors">WRK Training</span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gray">The Right Work</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              link.isPrimary ? (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="bg-brand-orange text-brand-black px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-brand-black hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {link.label}
                </Link>
              ) : (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="text-sm font-bold uppercase tracking-wider text-brand-primary hover:text-brand-orange transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-brand-orange after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-brand-primary hover:bg-gray-200 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 w-full bg-brand-light border-b border-gray-200 p-6 flex flex-col space-y-4 shadow-xl h-[calc(100vh-6rem)] overflow-y-auto">
            {NAVIGATION_LINKS.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-3xl font-display uppercase font-bold ${link.isPrimary ? 'text-brand-orange' : 'text-brand-black'}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-8 border-t border-gray-200 mt-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 block">Programs</span>
              <div className="flex flex-col space-y-6">
                <Link to="/personal-training" className="text-2xl font-display uppercase font-bold text-brand-gray hover:text-brand-primary">Personal Training</Link>
                <Link to="/online-coaching" className="text-2xl font-display uppercase font-bold text-brand-gray hover:text-brand-primary">Online Coaching</Link>
                <Link to="/corporate-wellness" className="text-2xl font-display uppercase font-bold text-brand-gray hover:text-brand-primary">Corporate Wellness</Link>
                <Link to="/42-day-reset" className="text-2xl font-display uppercase font-bold text-brand-gray hover:text-brand-primary">42 Day Reset</Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer - Updated with NAP for Local SEO */}
      <footer className="bg-brand-black text-white py-20 border-t border-brand-black rounded-t-[3rem] mt-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-3xl font-display font-bold uppercase tracking-tighter mb-6">WRK<span className="text-brand-orange">.</span></h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Personal Training for people who show up. Structured, professional coaching for those who demand high ROI.
              </p>
              
              {/* NAP (Name, Address, Phone) for Local SEO */}
              <address className="not-italic text-sm text-gray-400 space-y-2">
                <p className="font-bold text-brand-orange">WRK Personal Training</p>
                <p>Based at Get Me Fitter</p>
                <p>Addington, Christchurch, New Zealand</p>
                <p className="mt-2"><a href="mailto:coach@wrkpersonaltraining.com" className="hover:text-white">coach@wrkpersonaltraining.com</a></p>
              </address>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs text-brand-orange mb-6">Coaching</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-400">
                <li><Link to="/personal-training" className="hover:text-white transition-colors">Personal Training</Link></li>
                <li><Link to="/online-coaching" className="hover:text-white transition-colors">Online Coaching</Link></li>
                <li><Link to="/corporate-wellness" className="hover:text-white transition-colors">Corporate Wellness</Link></li>
                <li><Link to="/42-day-reset" className="hover:text-white transition-colors">42 Day Reset</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs text-brand-orange mb-6">Company</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Journal</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs text-brand-orange mb-6">Action</h4>
              <p className="text-sm text-gray-400 mb-6">
                Unsure where to begin?
              </p>
              <Link to="/assessment" className="inline-block bg-white text-brand-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-brand-orange hover:text-brand-black transition-colors">
                Take Assessment
              </Link>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-gray-800 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center font-medium uppercase tracking-wider">
            <p>&copy; {new Date().getFullYear()} {BRAND_NAME}</p>
            <div className="flex items-center gap-4 mt-2 md:mt-0">
              <p>The right work, done well.</p>
              <span className="hidden md:inline text-gray-700">|</span>
              <Link to="/admin" className="opacity-50 hover:opacity-100 hover:text-white transition-all">Admin</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};