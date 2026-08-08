import React, { useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { Button } from '../components/Button';
import { CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Submit logic
  };

  const inputClasses = "w-full bg-navy border border-navy-light rounded-[4px] px-[16px] py-[14px] font-sans text-[16px] text-white placeholder-grey-mid min-h-[48px] focus:border-orange-burnt focus:outline-none focus:ring-[1px] focus:ring-orange-burnt transition-all";
  const labelClasses = "block font-sans font-medium text-[13px] text-off-white mb-[6px]";

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact WRK Personal Training",
    "url": "https://wrkpersonaltraining.co.nz",
    "description": "Secure communication hub for medical weight loss fitness coaching enquiries, GLP-1 patient exercise support, and bariatric clinical referrals.",
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
    <>
      <SeoHead 
        title="Contact WRK | GLP-1 & Bariatric Fitness Support Christchurch"
        description="Connect with WRK Personal Training. Submit a secure clinical referral or medical weight loss coaching enquiry for GLP-1 and bariatric support."
        schema={schema}
      />
      <div className="flex flex-col w-full bg-navy pt-[64px] pb-[64px] md:pt-[96px] md:pb-[96px]">
        
        <div className="max-w-[1200px] mx-auto w-full px-5 md:px-12">
          
          {/* HERO */}
          <div className="mb-[40px] md:mb-[64px] max-w-[800px]">
            <h1 className="font-display text-[44px] md:text-[64px] uppercase text-white mb-6 leading-[1.1]">
              Connect with WRK
            </h1>
          </div>

          {/* BENTO GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* CARD 1 (Enquiry Form) */}
            <div className="lg:col-span-8 bg-navy-mid border border-navy-light rounded-[12px] p-6 md:p-8 text-left h-full">
              <h2 className="font-serif text-[24px] md:text-[32px] text-white mb-8 border-b border-navy-light pb-4">
                Submit a Secure Coaching or Clinical Referral Enquiry
              </h2>
              {submitted ? (
                <div className="flex flex-col justify-center text-left py-12">
                  <div className="w-[44px] h-[44px] bg-orange-burnt/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={24} className="text-orange-burnt" />
                  </div>
                  <h2 className="font-display text-[32px] md:text-[40px] uppercase text-white leading-[1.25] mb-4">Message Sent</h2>
                  <p className="font-sans text-[16px] text-off-white leading-[1.65]">
                    Your enquiry has been received securely. We will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
                  
                  <div>
                    <label htmlFor="name" className={labelClasses}>Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className={inputClasses}
                      placeholder="Your Full Name"
                    />
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-[24px]">
                    <div className="flex-1">
                      <label htmlFor="email" className={labelClasses}>Email</label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className={inputClasses}
                        placeholder="you@example.com"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <label htmlFor="phone" className={labelClasses}>Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className={inputClasses}
                        placeholder="021 123 4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className={labelClasses}>Reason for Enquiry</label>
                    <div className="relative">
                      <select 
                        id="interest"
                        required
                        value={formData.interest}
                        onChange={e => setFormData({...formData, interest: e.target.value})}
                        className={`${inputClasses} appearance-none`}
                      >
                        <option value="">Select an option...</option>
                        <option value="Seeking exercise support alongside GLP-1 therapy">Seeking exercise support alongside GLP-1 therapy</option>
                        <option value="Post-surgical bariatric movement coaching">Post-surgical bariatric movement coaching</option>
                        <option value="Medical professional / Clinic referral enquiry">Medical professional / Clinic referral enquiry</option>
                        <option value="General coaching enquiry">General coaching enquiry</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 pt-1">
                        <svg className="fill-current h-4 w-4 text-grey-mid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClasses}>Message</label>
                    <textarea 
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className={`${inputClasses} resize-none py-4`}
                      placeholder="Please provide details about your enquiry..."
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" fullWidth className="mt-2">
                    Submit Enquiry
                  </Button>
                  
                  <p className="text-[12px] text-grey-mid text-center mt-2 leading-relaxed">
                    Your privacy is paramount. All submitted health information is handled securely and treated with absolute confidentiality.
                  </p>
                </form>
              )}
            </div>
            
            {/* CARD 2 (Location details) */}
            <div className="lg:col-span-4 flex flex-col gap-8 h-full">
               <div className="bg-navy-mid border border-navy-light rounded-[12px] p-6 md:p-8 flex-grow flex flex-col">
                 <h2 className="font-serif text-[20px] md:text-[24px] text-white mb-6">
                   Our Physical Personal Training Facility Location
                 </h2>
                 
                 <div className="w-full bg-navy rounded-[8px] border border-navy-light flex-grow min-h-[250px] relative overflow-hidden group">
                   <iframe 
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185185.91070085767!2d172.59900134999998!3d-43.51214245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x26634d156304cd93%3A0x9e3eee8e863806bb!2sWRK%20Personal%20Training!5e0!3m2!1sen!2snz!4v1786227431486!5m2!1sen!2snz" 
                     className="absolute inset-0 w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
                     style={{ border: 0 }} 
                     allowFullScreen={true} 
                     loading="lazy" 
                     referrerPolicy="strict-origin-when-cross-origin"
                     title="WRK Personal Training Google Maps Location"
                   ></iframe>
                 </div>
                 
                 <div className="mt-8 space-y-4 pt-6 border-t border-navy-light">
                   <div>
                     <span className="block font-sans text-grey-mid text-[12px] uppercase tracking-wider mb-1">Location</span>
                     <p className="font-sans text-[15px] text-white leading-relaxed">
                       Based at Get Me Fitter<br/>
                       Addington, Christchurch<br/>
                       New Zealand
                     </p>
                   </div>
                   <div>
                     <span className="block font-sans text-grey-mid text-[12px] uppercase tracking-wider mb-1">Direct Contact</span>
                     <p className="font-sans text-[15px] text-white leading-relaxed">
                       <a href="tel:+6421393160" className="hover:text-orange-burnt transition-colors">021 393 160</a><br/>
                       <a href="mailto:info@wrkpersonaltraining.co.nz" className="hover:text-orange-burnt transition-colors">info@wrkpersonaltraining.co.nz</a>
                     </p>
                   </div>
                 </div>
               </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
