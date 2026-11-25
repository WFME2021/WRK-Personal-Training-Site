import React, { useState, useEffect } from 'react';
import { SeoHead } from '../components/SeoHead';
import { PageHeroBanner } from '../components/PageHeroBanner';
import { CheckCircle2, ChevronDown, ChevronUp, Lock, MapPin, ArrowRight } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialPhase = searchParams.get('phase') || '';
  const initialPlan = searchParams.get('plan') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phase: initialPhase || (initialPlan ? 'General personal training enquiry' : ''),
    goal: initialPlan ? 'Building a sustainable, long-term exercise routine' : '',
    message: initialPlan
      ? `Hi Hayden, I'd like to be notified when ${initialPlan} completes final QA.`
      : ''
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
        throw new Error('Your enquiry could not be emailed. Please email info@wrkpersonaltraining.co.nz directly.');
      }

      trackEvent('contact_inquiry', {
        event_category: 'inquiry',
      });

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
    "name": "Book a Relaxed 15-Minute Chat | WRK Personal Training",
    "url": "https://wrkpersonaltraining.co.nz/contact",
    "description": "Have a relaxed 15-minute chat with Hayden Richards at WRK Personal Training in Addington, Christchurch or online across New Zealand.",
    "mainEntity": {
      "@type": "HealthAndFitnessBusiness",
      "name": "WRK Personal Training",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1/12 Show Place, Addington",
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
    <div className="bg-cream text-forest min-h-screen font-sans selection:bg-forest selection:text-cream">
      <SeoHead 
        title="Book a Relaxed 15-Minute Chat | WRK Personal Training Christchurch"
        description="Have a quick, zero-pressure 15-minute chat with Hayden about 1:1 studio coaching in Addington, online coaching, or where to start."
        schema={schema}
      />
      
      {/* 1. Masthead Header */}
      <PageHeroBanner
        imageSrc="/images/banner-coffee-chat.jpg"
        imageAlt="Warm relaxed coffee chat table inside a sunlit Christchurch setting"
        align="center"
        eyebrow="ADDINGTON STUDIO & ONLINE · ZERO SALES PITCH"
        title="Let's have a relaxed 15-minute chat."
        subtitle="Think of this like grabbing a quick coffee—no sales pitch, no pressure, and no awkwardness. Tell me what you're working around, what you've tried before, and what you'd love to feel capable of doing, and I'll give you an honest steer on the smartest place to start."
      />

      {/* 2. 2-Column Consultation Split */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Warm Context & Reassurance (5 cols) */}
          <div className="lg:col-span-5 bg-quiet rounded-3xl p-8 sm:p-10 border border-forest/15 shadow-sm space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-forest/75 font-semibold block mb-2">
                WHAT TO EXPECT
              </span>
              <h2 className="font-serif text-2xl text-forest leading-snug">
                Just a normal conversation, straight to Hayden.
              </h2>
            </div>

            <div className="space-y-6 text-sm text-forest/85">
              <div>
                <span className="font-semibold text-forest block mb-1">
                  Replies Within 24–48 Hours
                </span>
                <p className="leading-relaxed">
                  I coach on the gym floor Monday to Friday from 6:00 AM to 2:00 PM (so I'm wrapped up in time for the 3:00 PM school pickup), and I read every message personally after sessions.
                </p>
              </div>

              <div>
                <span className="font-semibold text-forest block mb-1">
                  You Don't Need to “Get Fit First”
                </span>
                <p className="leading-relaxed">
                  Whether you haven't stepped into a gym in ten years, are looking after sore knees, or are using a GLP-1 medication and want to hang onto your muscle—we start right where you are today.
                </p>
              </div>

              <div>
                <span className="font-semibold text-forest block mb-1">
                  Quiet Addington Space &amp; Online Across NZ
                </span>
                <p className="leading-relaxed">
                  In-person sessions happen inside Get Me Fitter (1/12 Show Place, Addington) with free parking right outside. Online coaching runs wherever you train via the WRK app.
                </p>
              </div>
            </div>

            <div className="border-t border-forest/15 pt-6 flex items-center gap-3 text-xs text-forest/75">
              <Lock size={15} className="text-forest shrink-0" />
              <span>Private &amp; personal—your details go straight to Hayden and nowhere else.</span>
            </div>

            {/* Facility location card */}
            <div className="bg-cream p-5 rounded-2xl border border-forest/15 text-xs text-forest/85 space-y-1">
              <span className="font-semibold text-forest block">Addington Studio Location:</span>
              <p>1/12 Show Place, Addington (inside Get Me Fitter), Christchurch 8024. Easy on-site parking outside the door.</p>
            </div>

            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-forest/15 shadow-sm mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185185.91070085767!2d172.59900144999997!3d-43.51214245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x26634d156304cd93%3A0x9e3eee8e863806bb!2sWRK%20Personal%20Training!5e0!3m2!1sen!2snz!4v1790190757608!5m2!1sen!2snz"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="WRK Personal Training Studio Location"
              />
            </div>
          </div>

          {/* Right Column: The Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-quiet rounded-3xl p-8 sm:p-12 border border-forest/15 shadow-sm">
            <div className="mb-8">
              <h3 className="font-serif text-2xl text-forest mb-2 font-bold tracking-tight">
                Tell Me Briefly Where You're At
              </h3>
              <p className="text-xs sm:text-sm text-forest/75">
                Drop your details below and I'll email you back to line up a quick, no-pressure 15-minute chat.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 px-6 text-center space-y-4 bg-cream rounded-2xl border border-forest/15">
                <div className="w-16 h-16 bg-quiet text-forest rounded-full flex items-center justify-center mx-auto mb-4 border border-forest/15">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-serif text-2xl text-forest font-bold">
                  Message Sent — Thanks!
                </h3>
                <p className="text-sm text-forest/80 max-w-md mx-auto leading-relaxed">
                  Got it, thank you. I'll look over your notes after my sessions and reply to your email within 24–48 hours so we can find a time for a quick chat.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-1">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold text-forest/80 mb-2 block">
                    First &amp; Last Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-cream border border-forest/15 rounded-xl px-4 py-3.5 text-sm text-forest placeholder:text-forest/45 focus:outline-none focus:ring-1 focus:ring-forest focus:border-forest transition-all mb-6"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold text-forest/80 mb-2 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.co.nz"
                    className="w-full bg-cream border border-forest/15 rounded-xl px-4 py-3.5 text-sm text-forest placeholder:text-forest/45 focus:outline-none focus:ring-1 focus:ring-forest focus:border-forest transition-all mb-6"
                  />
                </div>

                {/* What Best Describes You */}
                <div>
                  <label htmlFor="phase" className="text-xs uppercase tracking-wider font-semibold text-forest/80 mb-2 block">
                    What Best Describes Right Now? *
                  </label>
                  <div className="relative mb-6">
                    <select
                      id="phase"
                      required
                      value={formData.phase}
                      onChange={e => setFormData({ ...formData, phase: e.target.value })}
                      className="w-full bg-cream border border-forest/15 rounded-xl px-4 py-3.5 text-sm text-forest appearance-none focus:outline-none focus:ring-1 focus:ring-forest focus:border-forest transition-all cursor-pointer"
                    >
                      <option value="" disabled>Pick the closest option...</option>
                      <option value="Looking to build strength & confidence in my 40s/50s+">Looking to build strength &amp; confidence in my 40s/50s+</option>
                      <option value="Getting started again after a break or injury">Getting started again after a break or injury</option>
                      <option value="Currently on a GLP-1 medication and wanting to protect muscle">Currently on a GLP-1 medication and wanting to protect muscle</option>
                      <option value="Stepping off GLP-1 medication and wanting consistent habits">Stepping off GLP-1 medication and wanting consistent habits</option>
                      <option value="Interested in 1:1 Studio Coaching (Addington) or Online Coaching">Interested in 1:1 Studio Coaching (Addington) or Online Coaching</option>
                      <option value="General personal training enquiry">Just a quick question about coaching or plans</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-forest/50">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                {/* Primary Goal */}
                <div>
                  <label htmlFor="goal" className="text-xs uppercase tracking-wider font-semibold text-forest/80 mb-2 block">
                    What Would You Most Like Help With? *
                  </label>
                  <div className="relative mb-6">
                    <select
                      id="goal"
                      required
                      value={formData.goal}
                      onChange={e => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full bg-cream border border-forest/15 rounded-xl px-4 py-3.5 text-sm text-forest appearance-none focus:outline-none focus:ring-1 focus:ring-forest focus:border-forest transition-all cursor-pointer"
                    >
                      <option value="" disabled>Pick your main focus...</option>
                      <option value="Building a sustainable, long-term exercise routine">Building a consistent 3–4 day/week routine I can actually stick with</option>
                      <option value="Joint-friendly strength & feeling better in everyday life">Joint-friendly strength &amp; feeling better in everyday life</option>
                      <option value="Protecting my lean muscle and physical strength">Protecting my muscle, strength, and everyday energy</option>
                      <option value="Simple everyday protein and hydration habits">Simple everyday protein and eating habits (without strict diets)</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-forest/50">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold text-forest/80 mb-2 block">
                    Anything You'd Like Me to Know Before We Chat (Optional)
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Old injuries you're working around, times of day that suit you, what you've tried before, or any questions..."
                    className="w-full bg-cream border border-forest/15 rounded-xl px-4 py-3.5 text-sm text-forest placeholder:text-forest/45 focus:outline-none focus:ring-1 focus:ring-forest focus:border-forest transition-all mb-6 h-32 resize-none"
                  ></textarea>
                </div>

                {/* Submit Action */}
                {errorMessage && (
                  <p className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl text-xs mb-4 font-medium">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bg-citron text-forest hover:brightness-95 border border-forest/20 w-full py-4 text-center rounded-md font-semibold text-xs uppercase tracking-widest block transition-all shadow-xs disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Sending to Hayden...' : 'Send Message & Line Up a Chat →'}
                </button>

                <p className="text-[11px] text-forest/65 text-center mt-4 block">
                  No mailing list spam and zero obligation—just a direct reply from Hayden.
                </p>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* 3. Quick Questions Accordion */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-forest/10 mt-12">
        <h2 className="font-serif text-2xl text-center text-forest mb-8 tracking-tight font-bold">
          Quick Questions Before Messaging
        </h2>

        <div className="space-y-4">
          
          {/* FAQ Item 1 */}
          <div className="bg-quiet rounded-2xl border border-forest/15 overflow-hidden shadow-xs">
            <button
              type="button"
              onClick={() => toggleFaq(0)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between font-serif text-lg text-forest hover:text-forest/80 transition-colors"
            >
              <span className="font-medium pr-4">What happens during the 15-minute chat?</span>
              {openFaq === 0 ? <ChevronUp size={18} className="text-forest shrink-0" /> : <ChevronDown size={18} className="text-forest/50 shrink-0" />}
            </button>
            {openFaq === 0 && (
              <div className="px-5 sm:px-6 pb-6 pt-3 text-sm text-forest/80 leading-relaxed border-t border-forest/10">
                Honestly, it's just like having a quick coffee. You tell me what you're working around and what you'd like to feel capable of doing, I answer any questions about how studio coaching, online coaching, or app plans work, and you decide in your own time whether it feels right.
              </div>
            )}
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-quiet rounded-2xl border border-forest/15 overflow-hidden shadow-xs">
            <button
              type="button"
              onClick={() => toggleFaq(1)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between font-serif text-lg text-forest hover:text-forest/80 transition-colors"
            >
              <span className="font-medium pr-4">Do I need to be in good shape before getting in touch?</span>
              {openFaq === 1 ? <ChevronUp size={18} className="text-forest shrink-0" /> : <ChevronDown size={18} className="text-forest/50 shrink-0" />}
            </button>
            {openFaq === 1 && (
              <div className="px-5 sm:px-6 pb-6 pt-3 text-sm text-forest/80 leading-relaxed border-t border-forest/10">
                Not at all. Most people who reach out haven't trained consistently in years or are feeling stiff and worn down. Everything we do is scaled calmly to where your body is today.
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
