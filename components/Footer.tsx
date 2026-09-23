import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME } from '../constants';

export const Footer: React.FC = () => {
  return (
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
              WRK Personal Training · Located at Get Me Fitter, 12 Show Place, Addington, Christchurch 8024
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
  );
};
