import React, { useState, useEffect } from 'react';
import { SeoHead } from '../components/SeoHead';
import { CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    target: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Submit logic
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact WRK Personal Training",
    "url": "https://wrkpersonaltraining.co.nz",
    "description": "Secure communication hub for medical weight loss fitness coaching enquiries, GLP-1 patient exercise support, and clinical patient referrals.",
    "mainEntity": {
      "@type": "ExerciseAndDietAndNutritionService",
      "name": "WRK Personal Training",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Christchurch",
        "addressRegion": "Canterbury",
        "postalCode": "8011",
        "addressCountry": "NZ"
      },
      "telephone": "+64-21-393-160",
      "url": "https://www.wrkpersonaltraining.co.nz",
      "priceRange": "$$"
    }
  };

  return (
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-32">
      <SeoHead 
        title="Contact WRK | GLP-1 Fitness Support Christchurch"
        description="Connect with WRK Personal Training. Submit a secure clinical referral or medical weight loss coaching enquiry for GLP-1 and muscle preservation support."
        schema={schema}
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Page Header */}
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            Connect with WRK
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/70">
            Whether you are a medical professional submitting a patient referral, an active lifter looking to defend your metabolism, or a beginner seeking side-effect support—we are here to help.
          </p>
        </header>

        {/* Two-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* CARD 1 (Enquiry Form) */}
          <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-3xl p-8 md:p-12 shadow-sm relative">
            <h2 className="font-serif text-[28px] text-[#2C3539] mb-8">
              Submit a Secure Coaching or Clinical Referral Enquiry
            </h2>
            
            {submitted ? (
              <div className="flex flex-col justify-center text-left py-12 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-[#8A9A86]/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-[#8A9A86]" />
                </div>
                <h2 className="font-serif text-[32px] text-[#2C3539] mb-4">Inquiry Received</h2>
                <p className="text-[16px] text-[#2C3539]/80 leading-relaxed max-w-md">
                  Your message has been received securely. Our team will review your details and respond shortly to discuss next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[14px] font-medium text-[#2C3539]/70 mb-2">Full Name</label>
                  <input 
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 py-4 rounded-xl focus:outline-none focus:border-[#8A9A86] transition-colors"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[14px] font-medium text-[#2C3539]/70 mb-2">Email Address</label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      placeholder="you@example.com"
                      className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 py-4 rounded-xl focus:outline-none focus:border-[#8A9A86] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-medium text-[#2C3539]/70 mb-2">Phone Number</label>
                    <input 
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      placeholder="Your contact number"
                      className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 py-4 rounded-xl focus:outline-none focus:border-[#8A9A86] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-[#2C3539]/70 mb-2">Your Prescribed GLP-1 Medication Track</label>
                  <div className="relative">
                    <select 
                      required
                      value={formData.interest}
                      onChange={e => setFormData({...formData, interest: e.target.value})}
                      className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 py-4 rounded-xl appearance-none focus:outline-none focus:border-[#8A9A86] transition-colors cursor-pointer"
                    >
                      <option value="" disabled>Select your medication track...</option>
                      <option value="Semaglutide (Ozempic/Wegovy) Support Track">Semaglutide (Ozempic/Wegovy) Support Track</option>
                      <option value="Tirzepatide (Mounjaro) Support Track">Tirzepatide (Mounjaro) Support Track</option>
                      <option value="Liraglutide (Saxenda) Support Track">Liraglutide (Saxenda) Support Track</option>
                      <option value="Exploring GLP-1 Prescription Options">Exploring GLP-1 Prescription Options</option>
                      <option value="Medical Professional / GP Patient Referral">Medical Professional / GP Patient Referral</option>
                      <option value="General Personal Training Inquiry (Non-Medicated)">General Personal Training Inquiry (Non-Medicated)</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-neutral-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-[#2C3539]/70 mb-2">Your Primary Coaching Target</label>
                  <div className="relative">
                    <select 
                      required
                      value={formData.target}
                      onChange={e => setFormData({...formData, target: e.target.value})}
                      className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 py-4 rounded-xl appearance-none focus:outline-none focus:border-[#8A9A86] transition-colors cursor-pointer"
                    >
                      <option value="" disabled>Select your goal...</option>
                      <option value="Beginner Habit Building & Side-Effect Support (Track 2)">Beginner Habit Building & Side-Effect Support (Track 2)</option>
                      <option value="Advanced Muscle Defense for Active Lifters (Track 3)">Advanced Muscle Defense for Active Lifters (Track 3)</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-neutral-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-[#2C3539]/70 mb-2">Message</label>
                  <textarea 
                    required
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    placeholder="Please provide details about your enquiry..."
                    className="w-full bg-[#FAFAF9] border border-neutral-200 text-[#2C3539] px-5 py-4 rounded-xl focus:outline-none focus:border-[#8A9A86] transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-6">
                  <p className="text-[12px] text-[#2C3539]/50 leading-relaxed flex-1">
                    Your health privacy is paramount. All information submitted through this secure portal is handled with absolute clinical confidentiality.
                  </p>
                  <button 
                    type="submit"
                    className="w-full md:w-auto bg-[#2C3539] hover:bg-[#1A1F22] text-white px-8 py-4 rounded-xl font-medium transition-colors text-[15px] whitespace-nowrap"
                  >
                    Submit Secure Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* CARD 2 (Location details) */}
          <div className="lg:col-span-5 flex flex-col gap-8 h-full">
            <div className="bg-white border border-neutral-200 rounded-3xl p-8 flex-grow flex flex-col shadow-sm">
              <h2 className="font-serif text-[24px] text-[#2C3539] mb-6">
                Our Physical Personal Training Facility Location
              </h2>
              
              <div className="space-y-4 mb-8">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#2C3539]/40 mb-1">Address</span>
                  <p className="text-[15px] text-[#2C3539]/80 leading-relaxed">
                    WRK Personal Training<br/>
                    Addington, Christchurch 8011<br/>
                    New Zealand
                  </p>
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#2C3539]/40 mb-1">Direct Contact</span>
                  <p className="text-[15px] text-[#2C3539]/80 leading-relaxed">
                    021 393 160<br/>
                    info@wrkpersonaltraining.co.nz
                  </p>
                </div>
              </div>
              
              <div className="w-full bg-[#FAFAF9] rounded-2xl border border-neutral-200 flex-grow min-h-[250px] relative overflow-hidden group">
                {/* Embed Google Map Location - Christchurch, NZ */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185185.91070085767!2d172.59900134999998!3d-43.51214245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x26634d156304cd93%3A0x9e3eee8e863806bb!2sWRK%20Personal%20Training!5e0!3m2!1sen!2snz!4v1786227431486!5m2!1sen!2snz" 
                  className="absolute inset-0 w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="WRK Personal Training Google Maps Location"
                ></iframe>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
