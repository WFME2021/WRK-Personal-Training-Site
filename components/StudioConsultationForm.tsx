import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface StudioConsultationFormProps {
  initialFocus?: string;
}

export const StudioConsultationForm: React.FC<StudioConsultationFormProps> = ({ initialFocus }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coachingInterest: initialFocus || 'Semi-Private Coaching',
    notes: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!formData.phone.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your mobile phone number.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success !== true) {
        throw new Error(result.error || 'Failed to submit consultation request. Please try again.');
      }

      trackEvent('consultation_inquiry', {
        event_category: 'conversion',
        coaching_type: 'in_person_addington',
      });

      setSubmittedName(formData.name.trim());
      setStatus('success');
    } catch (err: any) {
      console.error('Consultation submission error:', err);
      setStatus('error');
      setErrorMessage(
        err.message || 'Something went wrong connecting to the studio server. Please try again or email info@wrkpersonaltraining.co.nz.'
      );
    }
  };

  return (
    <section id="book-consult" className="py-16 px-6 max-w-2xl mx-auto scroll-mt-12">
      <div className="bg-quiet rounded-2xl p-8 sm:p-10 border border-forest/15 shadow-sm">
        {/* Container Header */}
        <div className="text-center mb-8">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-forest/75 block mb-2">
            ZERO PRESSURE · 15-MINUTE STUDIO CHAT
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-forest mb-3 tracking-tight font-bold">
            Come Have a Look Around Addington
          </h3>
          <p className="text-forest/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Pop in for a relaxed 15-minute chat at 1/12 Show Place, Addington (Mon–Fri, 6:00 AM – 2:00 PM). We'll talk through what you're working around and see if training together feels like a good fit.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-cream border border-forest/20 rounded-xl p-8 text-center animate-fade-in">
            <div className="w-12 h-12 bg-forest/10 text-forest rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-forest mb-2">
              Got Your Message!
            </h4>
            <p className="text-forest/85 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
              Thanks <strong className="text-forest font-semibold">{submittedName}</strong>! I've got your note and will give you a quick call or email after sessions to line up your visit at 12 Show Place.
            </p>
            <div className="mt-6 pt-6 border-t border-forest/10 text-xs text-forest/65">
              Need to reach me sooner? Flick an email directly to{' '}
              <a href="mailto:info@wrkpersonaltraining.co.nz" className="underline text-forest font-medium">
                info@wrkpersonaltraining.co.nz
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-left" noValidate>
            {status === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div>
              <label htmlFor="consult-name" className="block text-xs font-bold uppercase tracking-wider text-forest mb-1.5">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="consult-name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-lg border border-forest/20 bg-cream text-forest text-sm focus:outline-none focus:ring-2 focus:ring-forest/25 focus:border-forest transition-colors placeholder:text-forest/45"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="consult-email" className="block text-xs font-bold uppercase tracking-wider text-forest mb-1.5">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="consult-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg border border-forest/20 bg-cream text-forest text-sm focus:outline-none focus:ring-2 focus:ring-forest/25 focus:border-forest transition-colors placeholder:text-forest/45"
                />
              </div>

              <div>
                <label htmlFor="consult-phone" className="block text-xs font-bold uppercase tracking-wider text-forest mb-1.5">
                  Mobile Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="consult-phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Mobile number to call / text"
                  className="w-full px-4 py-3 rounded-lg border border-forest/20 bg-cream text-forest text-sm focus:outline-none focus:ring-2 focus:ring-forest/25 focus:border-forest transition-colors placeholder:text-forest/45"
                />
              </div>
            </div>

            <div>
              <label htmlFor="consult-interest" className="block text-xs font-bold uppercase tracking-wider text-forest mb-1.5">
                What Are You Most Interested In?
              </label>
              <select
                id="consult-interest"
                name="coachingInterest"
                value={formData.coachingInterest}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-forest/20 bg-cream text-forest text-sm focus:outline-none focus:ring-2 focus:ring-forest/25 focus:border-forest transition-colors"
              >
                <option value="1:1 Studio Coaching">1:1 Studio Coaching (Addington)</option>
                <option value="Strength & Joint Confidence (40+)">Strength &amp; Joint Confidence (40+)</option>
                <option value="Starting Fresh After a Break">Starting Fresh After a Break</option>
                <option value="Protecting Muscle on a GLP-1">Protecting Muscle on a GLP-1</option>
                <option value="General Inquiry">Just Having a Chat / Looking Around</option>
              </select>
            </div>

            <div>
              <label htmlFor="consult-notes" className="block text-xs font-bold uppercase tracking-wider text-forest mb-1.5">
                Anything Helpful to Know (Optional)
              </label>
              <textarea
                id="consult-notes"
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Old injuries, preferred times between 6:00 AM – 2:00 PM, or anything you want to ask..."
                className="w-full px-4 py-3 rounded-lg border border-forest/20 bg-cream text-forest text-sm focus:outline-none focus:ring-2 focus:ring-forest/25 focus:border-forest transition-colors placeholder:text-forest/45 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-citron hover:brightness-95 text-forest border border-forest/15 py-4 px-6 rounded-lg font-semibold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Line Up a Studio Chat →</span>
                </>
              )}
            </button>

            <p className="text-center text-[11px] text-forest/65 mt-3">
              No pressure or hard sell—we'll just show you around and answer your questions.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
