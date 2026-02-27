
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../components/Button';
import { ContactFormData } from '../types';
import { submitApplication } from '../services/apiService';
import { Check } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { SeoHead } from '../components/SeoHead';

export const Contact: React.FC = () => {
  const { pageContent } = useContent();
  const { heroImage } = pageContent.contact;
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
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center bg-primary transition-colors duration-300">
        <SeoHead 
          title="Contact | WRK Personal Training"
          description="Contact WRK Personal Training in Christchurch. Enquire about 1-on-1 training, online coaching, or corporate wellness."
        />
        <div className="bg-green-500/10 p-6 rounded-full mb-6 border border-green-500/20">
          <Check size={48} className="text-green-500" />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-text-primary">Application Received</h1>
        <p className="text-text-secondary max-w-lg mb-8">
          Thank you for applying. We have received your details and assessment results. We review all applications within 24 hours and will be in touch via email to schedule your consultation.
        </p>
        <a href="/" className="text-sm font-semibold border-b border-text-primary pb-1 hover:opacity-70 text-text-primary">
          Return Home
        </a>
      </div>
    );
  }

  return (
    <>
      <SeoHead 
        title="Contact | WRK Personal Training"
        description="Contact WRK Personal Training in Christchurch. Enquire about 1-on-1 training, online coaching, or corporate wellness."
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "WRK Personal Training",
          "image": heroImage?.url,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Show Place",
            "addressLocality": "Addington",
            "addressRegion": "Christchurch",
            "postalCode": "8024",
            "addressCountry": "NZ"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -43.543,
            "longitude": 172.605
          },
          "url": "https://wrkpersonaltraining.co.nz",
          "telephone": "+64210000000",
          "priceRange": "$$"
        }}
      />
      
      <div className="bg-primary min-h-screen text-text-primary transition-colors duration-300">
        {/* Hero Section - Full Width Banner */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            {heroImage && (
              <img 
                src={heroImage.url} 
                alt={heroImage.alt} 
                className="w-full h-full object-cover grayscale contrast-125"
              />
            )}
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-[1800px] mx-auto px-4 md:px-8 text-center flex flex-col items-center pt-12">
              <h3 className="font-display text-xl md:text-3xl font-bold uppercase tracking-widest text-accent mb-6">
                Start Here
              </h3>
              <h1 className="font-display text-[10vw] leading-[0.9] font-bold uppercase tracking-tighter text-white max-w-6xl mb-8">
                Contact
              </h1>
              <p className="text-lg md:text-2xl text-white/90 font-medium leading-relaxed max-w-2xl">
                Ready to commit to the process? Let's get to work.
              </p>
          </div>
        </section>

        <div className="flex items-center justify-center px-6 py-20">
          <div className="w-full max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-8 bg-secondary p-8 md:p-12 border border-border shadow-sm rounded-2xl -mt-20 relative z-20">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 bg-primary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 bg-primary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-text-secondary">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-primary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary">Your Goals / Current Situation</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 bg-primary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label htmlFor="referralSource" className="block text-sm font-medium text-text-secondary">How did you hear about us?</label>
                  <select
                    id="referralSource"
                    name="referralSource"
                    value={formData.referralSource}
                    onChange={handleChange}
                    className="w-full p-3 bg-primary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none cursor-pointer"
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
                
                <p className="text-xs text-center text-text-secondary mt-4">
                  Your information is private and will strictly be used for coaching application purposes.
                </p>
              </form>
          </div>
        </div>
      </div>
    </>
  );
};
