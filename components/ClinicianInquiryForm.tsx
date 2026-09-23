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
    role: 'General Practitioner',
    practiceName: '',
    clinicEmail: '',
    phone: '',
    inquiryType: 'Request physical patient info cards / brochures for consulting rooms',
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
Phone: ${formData.phone || 'Not provided'}

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
    <div id="clinician-inquiry" className="bg-white border border-neutral-200 rounded-3xl p-8 md:p-12 shadow-sm scroll-mt-24">
      <div className="max-w-2xl mb-8">
        <h3 className="font-bold text-[13px] tracking-widest uppercase text-[#8A9A86] mb-3">Direct Provider Channel</h3>
        <h2 className="font-serif text-[28px] md:text-[34px] text-[#2C3539] leading-tight mb-4">
          Clinician & Practice Inquiries
        </h2>
        <p className="text-[16px] text-[#2C3539]/70 leading-relaxed">
          Have questions about patient suitability, scope of practice, or want physical clinic info cards for your consulting rooms? Send a message directly to Hayden.
        </p>
      </div>

      {status === 'success' ? (
        <div className="bg-[#FAFAF9] border border-neutral-200 rounded-2xl p-8 md:p-10 flex flex-col items-start animate-in fade-in duration-300">
          <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 size={30} />
          </div>
          <h3 className="font-serif text-[24px] text-[#2C3539] mb-3">Practice Inquiry Received</h3>
          <p className="text-[16px] text-[#2C3539]/80 leading-relaxed max-w-xl mb-6">
            Thank you for reaching out. Hayden will review your inquiry and follow up directly with your clinic within one business day.
          </p>
          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setFormData({
                name: '',
                role: 'General Practitioner',
                practiceName: '',
                clinicEmail: '',
                phone: '',
                inquiryType: 'Request physical patient info cards / brochures for consulting rooms',
                message: ''
              });
            }}
            className="text-[14px] font-bold text-[#8A9A86] hover:text-[#768672] transition-colors underline"
          >
            Send another practice inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Clinician Name */}
            <div>
              <label htmlFor="clinician-name" className="block text-[13px] font-bold uppercase tracking-wider text-[#2C3539]/80 mb-2">
                Your Name *
              </label>
              <input
                id="clinician-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Dr. Sarah Jenkins"
                className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-4 py-3.5 rounded-xl focus:outline-none focus:border-[#8A9A86] transition-colors text-[15px]"
              />
            </div>

            {/* Role / Professional Title */}
            <div>
              <label htmlFor="clinician-role" className="block text-[13px] font-bold uppercase tracking-wider text-[#2C3539]/80 mb-2">
                Role / Professional Title *
              </label>
              <div className="relative">
                <select
                  id="clinician-role"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-4 py-3.5 rounded-xl appearance-none focus:outline-none focus:border-[#8A9A86] transition-colors text-[15px] cursor-pointer"
                >
                  <option value="General Practitioner">General Practitioner</option>
                  <option value="Practice Nurse">Practice Nurse</option>
                  <option value="Specialist">Specialist</option>
                  <option value="Dietitian">Dietitian</option>
                  <option value="Allied Health">Allied Health</option>
                  <option value="Other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Practice / Medical Centre Name & Suburb */}
            <div>
              <label htmlFor="practice-name" className="block text-[13px] font-bold uppercase tracking-wider text-[#2C3539]/80 mb-2">
                Practice / Medical Centre & Suburb *
              </label>
              <input
                id="practice-name"
                type="text"
                required
                value={formData.practiceName}
                onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                placeholder="e.g. Moorhouse Medical Centre, Christchurch"
                className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-4 py-3.5 rounded-xl focus:outline-none focus:border-[#8A9A86] transition-colors text-[15px]"
              />
            </div>

            {/* Clinic Email */}
            <div>
              <label htmlFor="clinic-email" className="block text-[13px] font-bold uppercase tracking-wider text-[#2C3539]/80 mb-2">
                Clinic / Direct Email *
              </label>
              <input
                id="clinic-email"
                type="email"
                required
                value={formData.clinicEmail}
                onChange={(e) => setFormData({ ...formData, clinicEmail: e.target.value })}
                placeholder="name@practice.co.nz"
                className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-4 py-3.5 rounded-xl focus:outline-none focus:border-[#8A9A86] transition-colors text-[15px]"
              />
            </div>
          </div>

          {/* Phone & Inquiry Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="clinic-phone" className="block text-[13px] font-bold uppercase tracking-wider text-[#2C3539]/80 mb-2">
                Clinic Phone (Optional)
              </label>
              <input
                id="clinic-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 03 3xx xxxx"
                className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-4 py-3.5 rounded-xl focus:outline-none focus:border-[#8A9A86] transition-colors text-[15px]"
              />
            </div>

            <div>
              <label htmlFor="inquiry-type" className="block text-[13px] font-bold uppercase tracking-wider text-[#2C3539]/80 mb-2">
                Inquiry Type *
              </label>
              <div className="relative">
                <select
                  id="inquiry-type"
                  required
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-4 py-3.5 rounded-xl appearance-none focus:outline-none focus:border-[#8A9A86] transition-colors text-[15px] cursor-pointer"
                >
                  <option value="Request physical patient info cards / brochures for consulting rooms">
                    Request physical patient info cards / brochures for consulting rooms
                  </option>
                  <option value="Inquire about suitability for a specific patient presentation">
                    Inquire about suitability for a specific patient presentation
                  </option>
                  <option value="General collaboration / practice inquiry">
                    General collaboration / practice inquiry
                  </option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Message Area */}
          <div>
            <label htmlFor="clinician-message" className="block text-[13px] font-bold uppercase tracking-wider text-[#2C3539]/80 mb-2">
              Message or Specific Clinical Questions (Optional)
            </label>
            <textarea
              id="clinician-message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. Please send 50 cards to our reception, or: I have a patient with knee osteoarthritis starting semaglutide..."
              className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-4 py-3.5 rounded-xl focus:outline-none focus:border-[#8A9A86] transition-colors text-[15px] resize-none"
            />
          </div>

          {errorMessage && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 p-4 rounded-xl text-[14px]">
              <AlertCircle size={18} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-[#2C3539]/60">
              Direct clinician inquiries are handled confidentially and replied to promptly.
            </p>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2C3539] hover:bg-black text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-[13px] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={16} />
              {status === 'submitting' ? 'Submitting...' : 'Submit Practice Inquiry'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
