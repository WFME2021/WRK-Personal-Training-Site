import React, { useState } from 'react';
import { CheckCircle2, Send, AlertCircle } from 'lucide-react';

interface ClinicianFormData {
  name: string;
  role: string;
  practiceName: string;
  clinicEmail: string;
  phone: string;
  inquiryType: string;
  message: string;
}

export const ClinicianInquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<ClinicianFormData>({
    name: '',
    role: 'GP',
    practiceName: '',
    clinicEmail: '',
    phone: '',
    inquiryType: 'Request physical patient info cards for rooms',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
          name: formData.name,
          email: formData.clinicEmail,
          phone: formData.phone,
          interest: `Clinician Inquiry: ${formData.inquiryType}`,
          referralSource: `${formData.role} at ${formData.practiceName}`,
          message: `Clinician Role: ${formData.role}
Practice / Clinic & Suburb: ${formData.practiceName}
Inquiry Type: ${formData.inquiryType}
Direct Clinic Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message || '(No additional message provided)'}`
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to send inquiry. Please try again or email us directly.');
      }

      setStatus('success');
    } catch (err: any) {
      console.error('Clinician inquiry submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please reach out via info@wrkpersonaltraining.co.nz or 021 393 160.');
    }
  };

  return (
    <div id="clinician-inquiry" className="bg-white border border-charcoal/10 rounded-3xl p-8 sm:p-12 shadow-sm scroll-mt-24">
      <div className="max-w-2xl mb-8">
        <span className="text-xs uppercase tracking-[0.2em] font-sans text-spruce-800 font-semibold block mb-2">
          DIRECT PROVIDER CHANNEL
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-charcoal leading-tight mb-3 font-bold">
          Clinician & Practice Inquiries
        </h3>
        <p className="text-sm text-charcoal/70 leading-relaxed">
          Have questions about patient presentation suitability, scope of practice, or want physical clinic info cards for your consulting rooms? Send a message directly to Hayden.
        </p>
      </div>

      {status === 'success' ? (
        <div className="bg-sand-50/70 border border-charcoal/10 rounded-2xl p-8 sm:p-10 flex flex-col items-start animate-in fade-in duration-300">
          <div className="w-14 h-14 bg-spruce-800/10 text-spruce-800 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 size={30} />
          </div>
          <h4 className="font-serif text-2xl text-charcoal mb-2 font-bold">Practice Inquiry Received</h4>
          <p className="text-sm text-charcoal/80 leading-relaxed max-w-xl mb-6">
            Thank you for reaching out. Hayden will review your inquiry and follow up directly with your practice within one business day.
          </p>
          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setFormData({
                name: '',
                role: 'GP',
                practiceName: '',
                clinicEmail: '',
                phone: '',
                inquiryType: 'Request physical patient info cards for rooms',
                message: ''
              });
            }}
            className="text-xs uppercase tracking-wider font-semibold text-spruce-800 hover:text-spruce-900 transition-colors underline underline-offset-4"
          >
            Send another practice inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Clinician Name */}
            <div>
              <label htmlFor="clinician-name" className="block text-xs uppercase tracking-wider font-semibold text-charcoal/80 mb-2">
                Name *
              </label>
              <input
                id="clinician-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Dr. Sarah Jenkins"
                className="w-full bg-sand-50/50 border border-charcoal/15 text-charcoal px-4 py-3.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-spruce-800 focus:border-spruce-800 transition-all text-sm placeholder:text-charcoal/40"
              />
            </div>

            {/* Role / Professional Title */}
            <div>
              <label htmlFor="clinician-role" className="block text-xs uppercase tracking-wider font-semibold text-charcoal/80 mb-2">
                Role / Professional Title *
              </label>
              <div className="relative">
                <select
                  id="clinician-role"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full bg-sand-50/50 border border-charcoal/15 text-charcoal px-4 py-3.5 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-spruce-800 focus:border-spruce-800 transition-all text-sm cursor-pointer"
                >
                  <option value="GP">GP</option>
                  <option value="Practice Nurse">Practice Nurse</option>
                  <option value="Specialist">Specialist</option>
                  <option value="Dietitian">Dietitian</option>
                  <option value="Allied Health">Allied Health</option>
                  <option value="Other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-charcoal/40">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Practice / Medical Centre Name & Suburb */}
            <div>
              <label htmlFor="practice-name" className="block text-xs uppercase tracking-wider font-semibold text-charcoal/80 mb-2">
                Practice / Medical Centre & Suburb *
              </label>
              <input
                id="practice-name"
                type="text"
                required
                value={formData.practiceName}
                onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                placeholder="e.g. Moorhouse Medical Centre, Christchurch"
                className="w-full bg-sand-50/50 border border-charcoal/15 text-charcoal px-4 py-3.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-spruce-800 focus:border-spruce-800 transition-all text-sm placeholder:text-charcoal/40"
              />
            </div>

            {/* Direct Clinic Email */}
            <div>
              <label htmlFor="clinic-email" className="block text-xs uppercase tracking-wider font-semibold text-charcoal/80 mb-2">
                Direct Clinic Email *
              </label>
              <input
                id="clinic-email"
                type="email"
                required
                value={formData.clinicEmail}
                onChange={(e) => setFormData({ ...formData, clinicEmail: e.target.value })}
                placeholder="name@practice.co.nz"
                className="w-full bg-sand-50/50 border border-charcoal/15 text-charcoal px-4 py-3.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-spruce-800 focus:border-spruce-800 transition-all text-sm placeholder:text-charcoal/40"
              />
            </div>
          </div>

          {/* Phone & Inquiry Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="clinic-phone" className="block text-xs uppercase tracking-wider font-semibold text-charcoal/80 mb-2">
                Clinic Phone (Optional)
              </label>
              <input
                id="clinic-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 03 3xx xxxx"
                className="w-full bg-sand-50/50 border border-charcoal/15 text-charcoal px-4 py-3.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-spruce-800 focus:border-spruce-800 transition-all text-sm placeholder:text-charcoal/40"
              />
            </div>

            <div>
              <label htmlFor="inquiry-type" className="block text-xs uppercase tracking-wider font-semibold text-charcoal/80 mb-2">
                Inquiry Type *
              </label>
              <div className="relative">
                <select
                  id="inquiry-type"
                  required
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full bg-sand-50/50 border border-charcoal/15 text-charcoal px-4 py-3.5 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-spruce-800 focus:border-spruce-800 transition-all text-sm cursor-pointer"
                >
                  <option value="Request physical patient info cards for rooms">
                    Request physical patient info cards for rooms
                  </option>
                  <option value="Inquire about patient presentation suitability">
                    Inquire about patient presentation suitability
                  </option>
                  <option value="General collaboration">
                    General collaboration
                  </option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-charcoal/40">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Message Area */}
          <div>
            <label htmlFor="clinician-message" className="block text-xs uppercase tracking-wider font-semibold text-charcoal/80 mb-2">
              Message (Optional)
            </label>
            <textarea
              id="clinician-message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Share any questions regarding patient presentation suitability, practice cards, or collaboration..."
              className="w-full bg-sand-50/50 border border-charcoal/15 text-charcoal px-4 py-3.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-spruce-800 focus:border-spruce-800 transition-all text-sm placeholder:text-charcoal/40 resize-none"
            />
          </div>

          {errorMessage && (
            <div className="flex items-center gap-2 text-terracotta bg-sand-100 p-4 rounded-xl text-xs font-medium border border-terracotta/20">
              <AlertCircle size={16} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-charcoal/60">
              Direct clinician inquiries are handled confidentially and replied to promptly.
            </p>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-spruce-800 hover:bg-spruce-900 text-sand-50 px-8 py-3.5 rounded-md font-semibold uppercase tracking-widest text-xs transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-xs"
            >
              <Send size={14} />
              {status === 'submitting' ? 'Submitting...' : 'Submit Practice Inquiry'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
