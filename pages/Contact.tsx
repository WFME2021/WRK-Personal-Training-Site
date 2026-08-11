import React, { useState, useEffect } from 'react';
import { SeoHead } from '../components/SeoHead';
import { CheckCircle2, MapPin } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export const Contact = () => {
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
    "name": "Contact WRK Personal Training",
    "url": "https://wrkpersonaltraining.co.nz",
    "description": "Secure communication hub for medical weight loss fitness coaching enquiries, GLP-1 patient exercise support, and clinical patient referrals.",
    "mainEntity": {
      "@type": "ExerciseAndDietAndNutritionService",
      "name": "WRK Personal Training",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Christchurch",
        "addressRegion": "Canterbury",
        "postalCode": "8011",
        "addressCountry": "NZ"
      },
      "telephone": "+64-21-393-160",
      "url": "https://www.wrkpersonaltraining.co.nz",
      "priceRange": "$$"
    }
  };

  return (
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-32">
      <SeoHead 
        title="Contact GLP-1 Fitness Coach | WRK Personal Training"
        description="Hire a medical weight loss personal trainer. We specialize in GLP-1 fitness coaching, muscle preservation, and post-GLP-1 weight maintenance programs in New Zealand."
        schema={schema}
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Intro Section */}
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[12px] font-bold uppercase tracking-widest text-[#8A9A86] mb-4">
            take the next step whenever you are ready
          </p>
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            Contact a GLP-1 Fitness Coach Based in New Zealand
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/70">
            You don't have to navigate this chapter of your health journey alone. Whether you have a quick question about our tools, want to learn more about our 1-on-1 support, or simply want to chat about your routine, we are always here to listen and help.
          </p>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Dynamic Inquiry Form (Bento Item) */}
          <div id="on-page-enquiry-form" className="lg:col-span-7 bg-white border border-neutral-200 rounded-3xl p-8 md:p-12 shadow-sm relative scroll-mt-24">
            <h2 className="font-serif text-[26px] md:text-[28px] text-[#2C3539] mb-4">
              Schedule Your Consultation with a Medical Weight Loss Personal Trainer
            </h2>
            <p className="text-[15px] leading-relaxed text-[#2C3539]/70 mb-8">
              Fill out this brief, private form below. It helps us understand where you are on your timeline so we can have a truly supportive conversation.
            </p>
            
            {submitted ? (
              <div className="flex flex-col justify-center text-left py-12 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-[#8A9A86]/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-[#8A9A86]" />
                </div>
                <h2 className="font-serif text-[32px] text-[#2C3539] mb-4">Inquiry Received</h2>
                <p className="text-[16px] text-[#2C3539]/80 leading-relaxed max-w-md">
                  Your message has been received securely. Our team will review your details and respond shortly to discuss next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[14px] font-medium text-[#2C3539]/70 mb-2">Full Name</label>
                    <input 
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your full name"
                      className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 py-4 rounded-xl focus:outline-none focus:border-[#8A9A86] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[14px] font-medium text-[#2C3539]/70 mb-2">Email Address</label>
                    <input 
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      placeholder="you@example.com"
                      className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 py-4 rounded-xl focus:outline-none focus:border-[#8A9A86] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phase" className="block text-[14px] font-medium text-[#2C3539]/70 mb-2">Current Phase</label>
                  <div className="relative">
                    <select 
                      id="phase"
                      required
                      value={formData.phase}
                      onChange={e => setFormData({...formData, phase: e.target.value})}
                      className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 py-4 rounded-xl appearance-none focus:outline-none focus:border-[#8A9A86] transition-colors cursor-pointer"
                    >
                      <option value="" disabled>Select your current phase...</option>
                      <option value="I am currently in the active weight loss phase">I am currently in the active weight loss phase</option>
                      <option value="I am preparing to transition/wean off medication">I am preparing to transition/wean off medication</option>
                      <option value="I am post-medication and looking to maintain my habits">I am post-medication and looking to maintain my habits</option>
                      <option value="General personal training enquiry">General personal training enquiry</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-neutral-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="goal" className="block text-[14px] font-medium text-[#2C3539]/70 mb-2">Primary Goal</label>
                  <div className="relative">
                    <select 
                      id="goal"
                      required
                      value={formData.goal}
                      onChange={e => setFormData({...formData, goal: e.target.value})}
                      className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 py-4 rounded-xl appearance-none focus:outline-none focus:border-[#8A9A86] transition-colors cursor-pointer"
                    >
                      <option value="" disabled>Select your primary goal...</option>
                      <option value="Protecting my lean muscle and physical strength">Protecting my lean muscle and physical strength</option>
                      <option value="Managing my daily gym energy and hydration habits">Managing my daily gym energy and hydration habits</option>
                      <option value="Building a sustainable, long-term exercise routine">Building a sustainable, long-term exercise routine</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-neutral-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[14px] font-medium text-[#2C3539]/70 mb-2">Tell us a little bit about your journey so far (Optional)</label>
                  <textarea 
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    placeholder="Share any thoughts or questions..."
                    className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 py-4 rounded-xl focus:outline-none focus:border-[#8A9A86] transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-6">
                  <p className="text-[12px] text-[#2C3539]/50 leading-relaxed flex-1">
                    Your health privacy is paramount. All information submitted through this secure portal is handled with absolute clinical confidentiality.
                  </p>
                  <div className="w-full md:w-auto flex flex-col items-center">
                    {errorMessage && <p className="text-red-500 text-sm mb-2">{errorMessage}</p>}
                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-[#8A9A86] hover:bg-[#768672] text-white px-8 py-4 rounded-xl font-medium transition-colors text-[15px] whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send a Friendly Message'}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8 h-full">
            {/* Location & Map Section (Bento Item) */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-8 flex flex-col shadow-sm">
              <h2 className="font-serif text-[24px] text-[#2C3539] mb-4">
                Proudly Supporting the New Zealand Community
              </h2>
              <p className="text-[15px] leading-relaxed text-[#2C3539]/70 mb-8">
                While our coaching is fully online and accessible from the comfort of your home, we are proudly grounded in New Zealand.
              </p>
              
              <a 
                href="https://maps.app.goo.gl/mZfqYCH4642BSMsD6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#FAFAF9] rounded-2xl border border-neutral-200 flex-grow min-h-[200px] relative overflow-hidden group block"
              >
                {/* Embed Google Map Location - Christchurch, NZ */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185185.91070085767!2d172.59900134999998!3d-43.51214245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x26634d156304cd93%3A0x9e3eee8e863806bb!2sWRK%20Personal%20Training!5e0!3m2!1sen!2snz!4v1786227431486!5m2!1sen!2snz" 
                  className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="WRK Personal Training Google Maps Location"
                ></iframe>
                <div className="absolute inset-0 bg-[#2C3539]/0 group-hover:bg-[#2C3539]/5 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm text-[#2C3539] px-4 py-2 rounded-lg font-medium text-[13px] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    <MapPin size={16} />
                    View on Google Maps
                  </div>
                </div>
              </a>
            </div>

            {/* Reassurance & Support FAQ (Bento Item) */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-8 flex flex-col shadow-sm flex-grow">
              <h2 className="font-serif text-[24px] text-[#2C3539] mb-6">
                Have Questions About Training While on Weight Loss Medications? Reach Out Below.
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-[15px] font-bold text-[#2C3539] mb-2">When will I hear back?</h3>
                  <p className="text-[15px] leading-relaxed text-[#2C3539]/70">
                    We read every single message carefully and will reach out to you via email for a friendly, no-pressure chat within 24–48 hours.
                  </p>
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#2C3539] mb-2">Do I need to be in great shape to start?</h3>
                  <p className="text-[15px] leading-relaxed text-[#2C3539]/70">
                    Not at all. Our entire practice is built around gentle, low-stress movement patterns that meet your body exactly where it is today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

