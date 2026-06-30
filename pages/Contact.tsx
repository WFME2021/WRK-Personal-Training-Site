import React, { useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { Button } from '../components/Button';
import { CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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

  const inputClasses = "w-full bg-navy-light border-[1.5px] border-[#8B95A1]/30 rounded-[4px] px-[16px] py-[14px] font-sans text-[16px] text-white placeholder-grey-mid min-h-[48px] focus:border-orange-burnt focus:outline-none focus:ring-[3px] focus:ring-orange-burnt/15 transition-all";
  const labelClasses = "block font-sans font-medium text-[13px] text-off-white mb-[6px]";

  return (
    <>
      <SeoHead 
        title="Book a Free Consult | WRK Personal Training Christchurch"
        description="Book a free 20-minute consult with Hayden Richards at WRK Personal Training. Christchurch personal trainer for fat loss, strength, and corporate wellness."
      />

      <div className="flex flex-col w-full bg-navy pt-[64px] pb-[64px] md:pt-[96px] md:pb-[96px]">
        
        <div className="max-w-[1200px] mx-auto w-full px-5 md:px-12">
          
          {/* HERO */}
          <div className="mb-[40px] md:mb-[64px] max-w-[800px]">
            <h1 className="font-display text-[44px] md:text-[64px] uppercase text-white mb-6 leading-[1.1]">
              Let's Talk.
            </h1>
            <div className="font-sans text-[18px] md:text-[20px] text-off-white font-medium leading-[1.6] space-y-4">
              <p>Book a consult now. No pitch, no pressure - just an honest conversation about what you're looking for and whether WRK is the right fit.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* CONTACT FORM */}
            <div className="lg:col-span-8 bg-navy-mid border border-navy-light rounded-[8px] p-6 text-left">
              {submitted ? (
                <div className="flex flex-col justify-center text-left py-12">
                  <div className="w-[44px] h-[44px] bg-orange-burnt/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={24} className="text-orange-burnt" />
                  </div>
                  <h2 className="font-display text-[32px] md:text-[40px] uppercase text-white leading-[1.25] mb-4">Message Sent</h2>
                  <p className="font-sans text-[16px] text-off-white leading-[1.65]">
                    Got it. I'll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
                  
                  <div className="flex flex-col md:flex-row gap-[24px]">
                    <div className="flex-1">
                      <label htmlFor="firstName" className={labelClasses}>First Name</label>
                      <input 
                        type="text" 
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={e => setFormData({...formData, firstName: e.target.value})}
                        className={inputClasses}
                        placeholder="John"
                      />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="lastName" className={labelClasses}>Last Name</label>
                      <input 
                        type="text" 
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={e => setFormData({...formData, lastName: e.target.value})}
                        className={inputClasses}
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className={labelClasses}>Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className={inputClasses}
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className={labelClasses}>Phone</label>
                    <input 
                      type="tel" 
                      id="phone"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className={inputClasses}
                      placeholder="021 123 4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className={labelClasses}>Enquiry Type</label>
                    <div className="relative">
                      <select 
                        id="interest"
                        value={formData.interest}
                        onChange={e => setFormData({...formData, interest: e.target.value})}
                        className={`${inputClasses} appearance-none`}
                      >
                        <option value="">Please select...</option>
                        <option value="1:1 Personal Training">1:1 Personal Training</option>
                        <option value="Online Coaching">Online Coaching</option>
                        <option value="Corporate Wellness">Corporate Wellness</option>
                        <option value="General Enquiry">General Enquiry</option>
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
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className={`${inputClasses} resize-none`}
                      placeholder="How can I help?"
                    ></textarea>
                  </div>

                  <Button type="submit" size="md" fullWidth className="mt-2">
                    Submit Enquiry
                  </Button>
                </form>
              )}
            </div>
            
            {/* DIRECT CONTACT */}
            <div className="lg:col-span-4 mt-8 lg:mt-0 lg:pl-12 lg:border-l lg:border-navy-light pt-8 lg:pt-0 border-t border-navy-light lg:border-t-0">
               <span className="block font-sans font-bold text-[12px] uppercase tracking-widest text-orange-burnt mb-[24px]">
                 DIRECT CONTACT
               </span>
               <div className="space-y-6">
                 <div>
                   <span className="block font-sans text-grey-mid text-[13px] mb-1">Phone</span>
                   <a href="tel:+64213931660" className="font-sans text-[16px] text-white hover:text-orange-burnt transition-colors">021 393 160</a>
                 </div>
                 <div>
                   <span className="block font-sans text-grey-mid text-[13px] mb-1">Email</span>
                   <a href="mailto:info@wrkpersonaltraining.co.nz" className="font-sans text-[16px] text-white hover:text-orange-burnt transition-colors break-all">info@wrkpersonaltraining.co.nz</a>
                 </div>
                 <div>
                   <span className="block font-sans text-grey-mid text-[13px] mb-1">Location</span>
                   <p className="font-sans text-[16px] text-white leading-relaxed">
                     Based at Get Me Fitter<br/>
                     Addington, Christchurch<br/>
                     New Zealand
                   </p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
