import React, { useState } from 'react';
import { CheckCircle2, Send, AlertCircle, Loader2 } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface ClinicianFormData {
  clinicianName: string;
  medicalCentre: string;
  clinicEmail: string;
  requestType: string;
  clinicalNote: string;
}

export const ClinicianInquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<ClinicianFormData>({
    clinicianName: '',
    medicalCentre: '',
    clinicEmail: '',
    requestType: 'Post 25 Free Patient Info Cards (DLE)',
    clinicalNote: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedClinician, setSubmittedClinician] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.clinicianName.trim()) {
      setStatus('error');
      setErrorMessage('Please enter clinician name.');
      return;
    }

    if (!formData.medicalCentre.trim()) {
      setStatus('error');
      setErrorMessage('Please enter medical centre and suburb.');
      return;
    }

    if (!formData.clinicEmail.trim() || !formData.clinicEmail.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid clinic email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.clinicianName.trim(),
          email: formData.clinicEmail.trim(),
          phone: '',
          interest: `Healthcare Provider: ${formData.requestType}`,
          referralSource: `Medical Centre: ${formData.medicalCentre.trim()}`,
          message: `Clinician Name: ${formData.clinicianName.trim()}
Medical Centre & Suburb: ${formData.medicalCentre.trim()}
Clinic Email: ${formData.clinicEmail.trim()}
Request Type: ${formData.requestType}

Delivery Address / Clinical Note:
${formData.clinicalNote.trim() || '(No additional note provided)'}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to send enquiry. Please try again or email info@wrkpersonaltraining.co.nz directly.');
      }

      // Trigger GA4 conversion event
      trackEvent('referrer_inquiry', {
        event_category: 'b2b_referral',
        request_type: formData.requestType,
      });

      setSubmittedClinician(formData.clinicianName.trim());
      setStatus('success');
    } catch (err: any) {
      console.error('Clinician inquiry submission error:', err);
      setStatus('error');
      setErrorMessage(
        err.message || 'Something went wrong. Please reach out via info@wrkpersonaltraining.co.nz or 021 393 160.'
      );
    }
  };

  return (
    <div id="clinician-inquiry" className="bg-white border border-charcoal/10 rounded-3xl p-8 sm:p-12 shadow-sm scroll-mt-24">
      <div className="max-w-2xl mb-8">
        <span className="text-xs uppercase tracking-[0.2em] font-sans text-spruce-800 font-semibold block mb-2">
          DIRECT PROVIDER CHANNEL
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-charcoal leading-tight mb-3 font-bold">
          Healthcare Provider Enquiries & Material Requests
        </h3>
        <p className="text-sm text-charcoal/70 leading-relaxed">
          Request a complimentary pack of 25 Patient Information Cards (DLE) for your consulting rooms, discuss patient presentation suitability, or establish shared-care communication.
        </p>
      </div>

      {status === 'success' ? (
        <div className="bg-sand-50/80 border border-spruce-800/20 rounded-2xl p-8 sm:p-10 flex flex-col items-start animate-fade-in">
          <div className="w-14 h-14 bg-spruce-800/10 text-spruce-800 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 size={30} />
          </div>
          <h4 className="font-serif text-2xl text-charcoal mb-2 font-bold">Practice Request Received</h4>
          <p className="text-sm text-charcoal/80 leading-relaxed max-w-xl mb-6">
            Thank you, <strong className="font-semibold text-charcoal">{submittedClinician}</strong>. Hayden will review your request and dispatch materials or respond directly to your practice within one business day.
          </p>
          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setFormData({
                clinicianName: '',
                medicalCentre: '',
                clinicEmail: '',
                requestType: 'Post 25 Free Patient Info Cards (DLE)',
                clinicalNote: '',
              });
            }}
            className="text-xs uppercase tracking-wider font-semibold text-spruce-800 hover:text-spruce-900 transition-colors underline underline-offset-4 cursor-pointer"
          >
            Submit another practice request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {errorMessage && (
            <div className="flex items-center gap-2.5 text-red-800 bg-red-50 p-4 rounded-xl text-xs font-medium border border-red-200">
              <AlertCircle size={16} className="shrink-0 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Clinician Name */}
            <div>
              <label htmlFor="clinician-name" className="block text-xs uppercase tracking-wider font-semibold text-charcoal/80 mb-2">
                Clinician Name <span className="text-red-600">*</span>
              </label>
              <input
                id="clinician-name"
                type="text"
                required
                value={formData.clinicianName}
                onChange={(e) => setFormData({ ...formData, clinicianName: e.target.value })}
                placeholder="e.g. Dr. Sarah Jenkins"
                className="w-full bg-sand-50/50 border border-charcoal/15 text-charcoal px-4 py-3.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-spruce-800 focus:border-spruce-800 transition-all text-sm placeholder:text-charcoal/40"
              />
            </div>

            {/* Medical Centre & Suburb */}
            <div>
              <label htmlFor="medical-centre" className="block text-xs uppercase tracking-wider font-semibold text-charcoal/80 mb-2">
                Medical Centre & Suburb <span className="text-red-600">*</span>
              </label>
              <input
                id="medical-centre"
                type="text"
                required
                value={formData.medicalCentre}
                onChange={(e) => setFormData({ ...formData, medicalCentre: e.target.value })}
                placeholder="e.g. Moorhouse Medical Centre, Christchurch"
                className="w-full bg-sand-50/50 border border-charcoal/15 text-charcoal px-4 py-3.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-spruce-800 focus:border-spruce-800 transition-all text-sm placeholder:text-charcoal/40"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Clinic Email */}
            <div>
              <label htmlFor="clinic-email" className="block text-xs uppercase tracking-wider font-semibold text-charcoal/80 mb-2">
                Clinic Email <span className="text-red-600">*</span>
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

            {/* Request Type */}
            <div>
              <label htmlFor="request-type" className="block text-xs uppercase tracking-wider font-semibold text-charcoal/80 mb-2">
                Request Type <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <select
                  id="request-type"
                  required
                  value={formData.requestType}
                  onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
                  className="w-full bg-sand-50/50 border border-charcoal/15 text-charcoal px-4 py-3.5 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-spruce-800 focus:border-spruce-800 transition-all text-sm cursor-pointer"
                >
                  <option value="Post 25 Free Patient Info Cards (DLE)">
                    Post 25 Free Patient Info Cards (DLE)
                  </option>
                  <option value="Discuss Patient Presentation Suitability">
                    Discuss Patient Presentation Suitability
                  </option>
                  <option value="General Collaboration">
                    General Collaboration
                  </option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-charcoal/40">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Address / Clinical Note */}
          <div>
            <label htmlFor="clinical-note" className="block text-xs uppercase tracking-wider font-semibold text-charcoal/80 mb-2">
              Delivery Address / Clinical Note
            </label>
            <textarea
              id="clinical-note"
              rows={4}
              value={formData.clinicalNote}
              onChange={(e) => setFormData({ ...formData, clinicalNote: e.target.value })}
              placeholder="If requesting DLE card packs, please enter clinic postal address. If discussing patient suitability, feel free to outline their presentation or goals..."
              className="w-full bg-sand-50/50 border border-charcoal/15 text-charcoal px-4 py-3.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-spruce-800 focus:border-spruce-800 transition-all text-sm placeholder:text-charcoal/40 resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-charcoal/60">
              Direct clinician inquiries are treated confidentially and replied to promptly.
            </p>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-spruce-800 hover:bg-spruce-900 text-sand-50 px-8 py-3.5 rounded-md font-semibold uppercase tracking-widest text-xs transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-xs cursor-pointer"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send size={14} />
                  <span>Submit Practice Request</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
