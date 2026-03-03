import React, { useState } from 'react';
import { X, Loader2, CheckCircle } from 'lucide-react';
import { Button } from './Button';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: string; // '1:1 Coaching (Christchurch)', 'Online Coaching', 'Corporate Wellness'
}

export const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose, service }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

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
          interest: service,
          referralSource: 'Landing Page Modal'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setStatus('success');
      // Optional: Close after a delay
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);

    } catch (error: any) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-primary border border-border rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-secondary px-6 py-5 md:px-8 md:py-6 border-b border-border flex justify-between items-center shrink-0">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold uppercase text-text-primary">
              {service === 'Corporate Wellness' ? 'Request Proposal' : 'Book Consult'}
            </h3>
            <p className="text-xs text-text-secondary uppercase tracking-widest mt-1">
              {service}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary transition-colors p-2 hover:bg-primary rounded-full touch-manipulation"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto">
          {status === 'success' ? (
            <div className="text-center py-8 md:py-12">
              <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} />
              </div>
              <h4 className="text-2xl font-bold text-text-primary mb-2">Request Received</h4>
              <p className="text-text-secondary">
                Thanks {formData.name.split(' ')[0]}. We'll be in touch shortly to confirm your {service === 'Corporate Wellness' ? 'proposal' : 'consult'}.
              </p>
              <Button 
                className="mt-8 w-full md:w-auto"
                onClick={() => {
                  onClose();
                  setStatus('idle');
                  setFormData({ name: '', email: '', phone: '', message: '' });
                }}
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-base text-text-primary focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-base text-text-primary focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-base text-text-primary focus:outline-none focus:border-accent transition-colors"
                    placeholder="021 123 4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">
                  Anything specific we should know? <span className="text-text-secondary/50 normal-case tracking-normal">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-base text-text-primary focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Goals, injuries, or preferred times..."
                />
              </div>

              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
                  {errorMessage}
                </div>
              )}

              <Button 
                type="submit" 
                size="lg" 
                className="w-full py-4 text-lg shadow-lg touch-manipulation"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </span>
                ) : (
                  service === 'Corporate Wellness' ? 'Request Proposal' : 'Book Free Consult'
                )}
              </Button>
              
              <p className="text-center text-xs text-text-secondary">
                Your details are safe. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
