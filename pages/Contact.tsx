
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
        
        {/* HERO */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
           {/* Background Image */}
           <div className="absolute inset-0 z-0">
             <img 
               src={heroImage.url} 
               alt={heroImage.alt} 
               className="w-full h-full object-cover grayscale contrast-125"
             />
             <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
           </div>
           
           <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
             <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-widest text-text-primary leading-none mb-6">
               Start <span className="text-accent">Here</span>
             </h1>
             <p className="text-xl text-text-secondary max-w-2xl mx-auto font-light">
               Ready to commit to the process? Let's get to work.
             </p>
           </div>
        </section>

        {/* FORM SECTION */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4 text-text-primary uppercase tracking-wide">Application for Coaching</h2>
              <p className="text-text-secondary">
                Please complete the form below. We prioritize clients who are ready to commit to a structured process.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 bg-secondary p-8 md:p-12 border border-border shadow-sm rounded-2xl">
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
        </section>
      </div>
    </>
  );
};
