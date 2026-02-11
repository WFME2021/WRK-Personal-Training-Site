import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../components/Button';
import { ContactFormData } from '../types';
import { submitApplication } from '../services/apiService';
import { Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const location = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    referralSource: ''
  });

  // If coming from Results, pre-fill text
  useEffect(() => {
    if (location.state?.fromResults) {
      setFormData(prev => ({
        ...prev,
        message: `I completed the assessment regarding ${location.state.goal || 'my goals'} and would like to discuss the recommended strategy.`
      }));
    }
  }, [location.state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitApplication(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="bg-green-50 p-6 rounded-full mb-6">
          <Check size={48} className="text-green-600" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Application Received</h1>
        <p className="text-brand-gray max-w-lg mb-8">
          Thank you for applying. We have received your details and assessment results. We review all applications within 24 hours and will be in touch via email to schedule your consultation.
        </p>
        <a href="/" className="text-sm font-semibold border-b border-brand-black pb-1 hover:opacity-70">
          Return Home
        </a>
      </div>
    );
  }

  return (
    <div className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Application for Coaching</h1>
          <p className="text-brand-gray">
            Please complete the form below. We prioritize clients who are ready to commit to a structured process.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12 border border-gray-200 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-brand-gray">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-brand-black outline-none transition-shadow"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-brand-gray">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-brand-black outline-none transition-shadow"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-brand-gray">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-brand-black outline-none transition-shadow"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-brand-gray">Your Goals / Current Situation</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-brand-black outline-none transition-shadow"
            ></textarea>
          </div>

          <div className="space-y-2">
            <label htmlFor="referralSource" className="block text-sm font-medium text-brand-gray">How did you hear about us?</label>
            <select
              id="referralSource"
              name="referralSource"
              value={formData.referralSource}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-brand-black outline-none bg-white"
            >
              <option value="">Select an option</option>
              <option value="Google Search">Google Search</option>
              <option value="Social Media">Social Media</option>
              <option value="Referral">Friend / Referral</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <Button type="submit" fullWidth disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
          
          <p className="text-xs text-center text-gray-400 mt-4">
            Your information is private and will strictly be used for coaching application purposes.
          </p>
        </form>
      </div>
    </div>
  );
};