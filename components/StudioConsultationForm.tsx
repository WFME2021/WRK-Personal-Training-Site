import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';

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

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit consultation request. Please try again.');
      }

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
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-charcoal/10 shadow-sm">
        {/* Container Header */}
        <div className="text-center mb-8">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-spruce-800 bg-sand-100 px-3 py-1 rounded-full inline-block mb-3">
            ZERO PRESSURE · 20-MINUTE STUDIO WALKTHROUGH
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-charcoal mb-3 tracking-tight font-bold">
            Book Your Free Studio Consultation
          </h3>
          <p className="text-charcoal/70 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Come visit the studio at 12 Show Place, Addington. We'll discuss your goals, review your training history, and determine if our coaching setup suits you.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-sand-50 border border-spruce-800/20 rounded-xl p-8 text-center animate-fade-in">
            <div className="w-12 h-12 bg-spruce-800/10 text-spruce-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-2">
              Request Received
            </h4>
            <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
              Thanks <strong className="text-charcoal font-semibold">{submittedName}</strong>! We've received your consultation request. Hayden will be in touch via phone or email shortly to confirm your studio walkthrough at 12 Show Place.
            </p>
            <div className="mt-6 pt-6 border-t border-charcoal/10 text-xs text-charcoal/60">
              Need immediate assistance? You can also email us directly at{' '}
              <a href="mailto:info@wrkpersonaltraining.co.nz" className="underline text-spruce-800 font-medium">
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
              <label htmlFor="consult-name" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
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
                className="w-full px-4 py-3 rounded-lg border border-charcoal/20 bg-canvas text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-spruce-800/20 focus:border-spruce-800 transition-colors placeholder:text-charcoal/40"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="consult-email" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
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
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/20 bg-canvas text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-spruce-800/20 focus:border-spruce-800 transition-colors placeholder:text-charcoal/40"
                />
              </div>

              <div>
                <label htmlFor="consult-phone" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
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
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/20 bg-canvas text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-spruce-800/20 focus:border-spruce-800 transition-colors placeholder:text-charcoal/40"
                />
              </div>
            </div>

            <div>
              <label htmlFor="consult-interest" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                Coaching Focus Area
              </label>
              <select
                id="consult-interest"
                name="coachingInterest"
                value={formData.coachingInterest}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-charcoal/20 bg-canvas text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-spruce-800/20 focus:border-spruce-800 transition-colors"
              >
                <option value="Semi-Private Coaching">Semi-Private Coaching</option>
                <option value="1-on-1 Personal Training">1-on-1 Personal Training</option>
                <option value="GLP-1 Muscle Preservation">GLP-1 Muscle Preservation</option>
                <option value="Menopause / Midlife Strength">Menopause / Midlife Strength</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="consult-notes" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                Notes & Goals (Optional)
              </label>
              <textarea
                id="consult-notes"
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any specific goals, injuries, or preferred training times?"
                className="w-full px-4 py-3 rounded-lg border border-charcoal/20 bg-canvas text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-spruce-800/20 focus:border-spruce-800 transition-colors placeholder:text-charcoal/40 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-spruce-800 hover:bg-spruce-900 text-sand-50 py-4 px-6 rounded-lg font-semibold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Request Free Studio Consultation →</span>
                </>
              )}
            </button>

            <p className="text-center text-[11px] text-charcoal/50 mt-3">
              No pressure or hard sales. We'll simply show you around and answer your questions.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
