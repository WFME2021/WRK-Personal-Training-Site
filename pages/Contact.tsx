import React, { useState, useEffect } from 'react';
import { SeoHead } from '../components/SeoHead';
import { CheckCircle2, ChevronDown, ChevronUp, Lock, MapPin, ArrowRight } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialPhase = searchParams.get('phase') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phase: initialPhase,
    goal: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          phone: '',
          interest: formData.goal,
          referralSource: `Phase: ${formData.phase}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitted(true);
      setStatus('success');
    } catch (error: any) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact a GLP-1 Fitness Coach | WRK Personal Training",
    "url": "https://wrkpersonaltraining.co.nz/contact",
    "description": "Secure communication hub for medical weight loss fitness coaching enquiries, GLP-1 patient exercise support, and clinical patient referrals in Christchurch, New Zealand and worldwide.",
    "mainEntity": {
      "@type": "ExerciseAndDietAndNutritionService",
      "name": "WRK Personal Training",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12 Show Place, Addington",
        "addressLocality": "Christchurch",
        "addressRegion": "Canterbury",
        "postalCode": "8024",
        "addressCountry": "NZ"
      },
      "telephone": "+64-21-393-160",
      "url": "https://www.wrkpersonaltraining.co.nz",
      "priceRange": "$$"
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => prev === idx ? null : idx);
  };

  return (
    <div className="bg-canvas text-charcoal min-h-screen font-sans selection:bg-spruce-800 selection:text-sand-50">
      <SeoHead 
        title="Contact a GLP-1 Fitness Coach | Christchurch, New Zealand | WRK"
        description="Contact a GLP-1 Fitness Coach today to discuss your medical weight loss journey, ask questions about our 12-week muscle preservation pathways, or book a consultation in Christchurch."
        schema={schema}
      />
      
      {/* 1. Masthead Header */}
      <section className="bg-canvas pt-14 pb-12 px-6 max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.2em] font-sans text-spruce-800 font-semibold mb-4">
          TAKE THE NEXT STEP WHENEVER YOU ARE READY
        </p>
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight max-w-3xl mx-auto mb-6 leading-tight">
          Contact a GLP-1 Fitness <span className="italic text-spruce-800">Coach.</span>
        </h1>
        
        <p className="text-charcoal/80 max-w-2xl mx-auto text-base sm:text-lg mb-4 leading-relaxed">
          You don't have to navigate this chapter of your health journey alone. Whether you have a quick question about our tools or want to explore 1-on-1 coaching, we're here to listen.
        </p>
      </section>

      {/* 2. 2-Column Consultation Split */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: High-Trust Context & Reassurance (5 cols) */}
          <div className="lg:col-span-5 bg-sand-100/70 rounded-3xl p-8 sm:p-10 border border-charcoal/5 shadow-sm space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-spruce-800 font-semibold block mb-2">
                PERSONAL GUIDANCE
              </span>
              <h2 className="font-serif text-2xl text-charcoal leading-snug">
                A Confidential, Low-Stress Conversation
              </h2>
            </div>

            <div className="space-y-6 text-sm text-charcoal/80">
              <div>
                <span className="font-semibold text-charcoal block mb-1">
                  Prompt Response Within 24–48 Hours
                </span>
                <p className="leading-relaxed">
                  We read every inquiry carefully and will reach out via email for an unhurried, supportive conversation to discuss your routine, assess your timeline, and explore whether our coaching is the right fit.
                </p>
              </div>

              <div>
                <span className="font-semibold text-charcoal block mb-1">
                  No Fitness Prerequisites
                </span>
                <p className="leading-relaxed">
                  You do not need to be in shape to start. Our practice is built around gentle, low-stress movement calibrated to where you are today.
                </p>
              </div>

              <div>
                <span className="font-semibold text-charcoal block mb-1">
                  Local & Global Coaching
                </span>
                <p className="leading-relaxed">
                  In-person private studio sessions available at 12 Show Place in Addington, Christchurch. Comprehensive online coaching delivered worldwide.
                </p>
              </div>
            </div>

            <div className="border-t border-charcoal/10 pt-6 flex items-center gap-3 text-xs text-charcoal/70">
              <Lock size={15} className="text-spruce-800 shrink-0" />
              <span>100% Confidential · Handled with clinical privacy.</span>
            </div>

            {/* Studio location card */}
            <div className="bg-white/80 p-5 rounded-2xl border border-charcoal/5 text-xs text-charcoal/80 space-y-1">
              <span className="font-semibold text-charcoal block">Christchurch Studio Location:</span>
              <p>12 Show Place, Addington, Christchurch 8024</p>
              <p className="text-charcoal/60">Dedicated private facility · Free on-site parking</p>
            </div>
          </div>

          {/* Right Column: The Elevated Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-charcoal/5 shadow-sm">
            <div className="mb-8">
              <h3 className="font-serif text-2xl text-charcoal mb-2 font-bold tracking-tight">
                Let’s Connect & Map Your Routine
              </h3>
              <p className="text-xs text-charcoal/60">
                Fill out the brief fields below to give us context on your current routine.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-spruce-800/10 text-spruce-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-serif text-2xl text-charcoal font-bold">
                  Inquiry Received
                </h3>
                <p className="text-sm text-charcoal/70 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Hayden will review your notes and reply personally to your email within 24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-1">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold text-charcoal/80 mb-2 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full bg-sand-50/50 border border-charcoal/15 rounded-xl px-4 py-3.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-1 focus:ring-spruce-800 focus:border-spruce-800 transition-all mb-6"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold text-charcoal/80 mb-2 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full bg-sand-50/50 border border-charcoal/15 rounded-xl px-4 py-3.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-1 focus:ring-spruce-800 focus:border-spruce-800 transition-all mb-6"
                  />
                </div>

                {/* Current Phase */}
                <div>
                  <label htmlFor="phase" className="text-xs uppercase tracking-wider font-semibold text-charcoal/80 mb-2 block">
                    Current Phase *
                  </label>
                  <div className="relative mb-6">
                    <select
                      id="phase"
                      required
                      value={formData.phase}
                      onChange={e => setFormData({ ...formData, phase: e.target.value })}
                      className="w-full bg-sand-50/50 border border-charcoal/15 rounded-xl px-4 py-3.5 text-sm text-charcoal appearance-none focus:outline-none focus:ring-1 focus:ring-spruce-800 focus:border-spruce-800 transition-all cursor-pointer"
                    >
                      <option value="" disabled>Select your current phase...</option>
                      <option value="I am currently in the active weight loss phase">I am currently in the active weight loss phase</option>
                      <option value="I am preparing to transition/wean off medication">I am preparing to transition/wean off medication</option>
                      <option value="I am post-medication and looking to maintain my habits">I am post-medication and looking to maintain my habits</option>
                      <option value="General personal training enquiry">General personal training enquiry</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-charcoal/40">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                {/* Primary Goal */}
                <div>
                  <label htmlFor="goal" className="text-xs uppercase tracking-wider font-semibold text-charcoal/80 mb-2 block">
                    Primary Goal *
                  </label>
                  <div className="relative mb-6">
                    <select
                      id="goal"
                      required
                      value={formData.goal}
                      onChange={e => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full bg-sand-50/50 border border-charcoal/15 rounded-xl px-4 py-3.5 text-sm text-charcoal appearance-none focus:outline-none focus:ring-1 focus:ring-spruce-800 focus:border-spruce-800 transition-all cursor-pointer"
                    >
                      <option value="" disabled>Select your primary goal...</option>
                      <option value="Protecting my lean muscle and physical strength">Protecting my lean muscle and physical strength</option>
                      <option value="Managing my daily gym energy and hydration habits">Managing my daily gym energy and hydration habits</option>
                      <option value="Building a sustainable, long-term exercise routine">Building a sustainable, long-term exercise routine</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-charcoal/40">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                {/* Journey Message */}
                <div>
                  <label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold text-charcoal/80 mb-2 block">
                    Tell us a little bit about your journey so far (Optional)
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share any thoughts, current medications, past exercise experience, or specific questions..."
                    className="w-full bg-sand-50/50 border border-charcoal/15 rounded-xl px-4 py-3.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-1 focus:ring-spruce-800 focus:border-spruce-800 transition-all mb-6 h-32 resize-none"
                  ></textarea>
                </div>

                {/* Submit Action */}
                {errorMessage && (
                  <p className="text-terracotta text-xs mb-3 font-medium">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bg-spruce-800 text-sand-50 hover:bg-spruce-900 w-full py-4 text-center rounded-md font-semibold text-xs uppercase tracking-widest block transition-colors shadow-xs disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Sending Message...' : 'Send Consultation Inquiry →'}
                </button>

                <p className="text-[11px] text-charcoal/50 text-center mt-4 block">
                  Your health privacy is paramount. Information is never shared.
                </p>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* 3. Quick Questions Accordion */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-charcoal/5 mt-12">
        <h2 className="font-serif text-2xl text-center text-charcoal mb-8 tracking-tight font-bold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          
          {/* FAQ Item 1 */}
          <div className="bg-white rounded-2xl border border-charcoal/10 overflow-hidden shadow-xs">
            <button
              type="button"
              onClick={() => toggleFaq(0)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between font-serif text-lg text-charcoal hover:text-spruce-800 transition-colors"
            >
              <span className="font-medium pr-4">When will I hear back?</span>
              {openFaq === 0 ? <ChevronUp size={18} className="text-spruce-800 shrink-0" /> : <ChevronDown size={18} className="text-charcoal/40 shrink-0" />}
            </button>
            {openFaq === 0 && (
              <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-charcoal/70 leading-relaxed border-t border-charcoal/5">
                We read every inquiry carefully and will reach out via email for an unhurried, supportive conversation to discuss your routine, assess your timeline, and explore whether our coaching is the right fit.
              </div>
            )}
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-white rounded-2xl border border-charcoal/10 overflow-hidden shadow-xs">
            <button
              type="button"
              onClick={() => toggleFaq(1)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between font-serif text-lg text-charcoal hover:text-spruce-800 transition-colors"
            >
              <span className="font-medium pr-4">Do I need to be in great shape to start?</span>
              {openFaq === 1 ? <ChevronUp size={18} className="text-spruce-800 shrink-0" /> : <ChevronDown size={18} className="text-charcoal/40 shrink-0" />}
            </button>
            {openFaq === 1 && (
              <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-charcoal/70 leading-relaxed border-t border-charcoal/5">
                Not at all. Our entire practice is built around gentle, low-stress movement patterns that meet your body exactly where it is today.
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
