import React, { useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { CheckCircle, Activity, ShieldCheck, MapPin, Mail, Phone, FileText, ChevronDown, ArrowRight } from 'lucide-react';
import { BRAND_NAME } from '../constants';
import { Link } from 'react-router-dom';

export const ForReferrers: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Scope of Practice & Coach Background",
      answer: "Hayden Richards is an experienced personal trainer and evidence-based strength & nutrition coach with a focus on medical weight loss support and sarcopenia. We operate strictly within the fitness and lifestyle scope—we do not diagnose, treat disease, or alter medical prescriptions."
    },
    {
      question: "Dietary Scope",
      answer: "We provide practical nutrition and habit coaching focused on protein pacing, hydration, and adherence. We do not prescribe clinical diets for acute medical disease. For complex dietetic needs, we collaborate with and refer out to Registered Dietitians."
    },
    {
      question: "Cost & Commitments",
      answer: "Our pricing is transparent with no long-term lock-in contracts. In-person semi-private training in our Addington studio starts from $89/wk. Online coach-led programs start from $49/wk. We always offer a free, no-obligation discovery session for new patients."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Medical Referrers & Healthcare Providers Portal | WRK Personal Training"
        description="Clinical referrer portal for WRK Personal Training. We support patients on GLP-1 therapy and those needing sarcopenia rehabilitation with evidence-based resistance training."
      />

      <div className="flex flex-col w-full overflow-x-hidden bg-[#FAFAF9] text-[#2C3539] selection:bg-[#8A9A86] selection:text-white pb-24">
        
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="mb-6 flex justify-center">
            <span className="bg-[#2C3539] text-white px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-widest inline-flex items-center gap-2">
              <Activity size={14} />
              Clinical Referrer & Healthcare Provider Portal
            </span>
          </div>
          <h1 className="font-serif text-[38px] sm:text-[48px] md:text-[64px] lg:text-[72px] leading-[1.05] tracking-tight mb-6 max-w-4xl text-[#2C3539]">
            Bridging the Gap Between Medical Weight Management and Sustainable Physical Function.
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/70 max-w-3xl mb-10">
            Evidence-based, supervised resistance training and practical nutrition habit coaching tailored for patients undergoing GLP-1 receptor agonist therapy, metabolic care, and joint-aware rehabilitation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-2xl mx-auto">
            <a href="#referral-form" className="w-full sm:w-auto bg-[#8A9A86] hover:bg-[#768672] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-[14px] transition-colors flex items-center justify-center">
              Direct Patient Referral
            </a>
            <a href="#referral-form" className="w-full sm:w-auto bg-white border border-neutral-300 hover:border-[#2C3539] text-[#2C3539] px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-[14px] transition-all flex items-center justify-center gap-2">
              <FileText size={16} /> 1-Page Tear-Sheet
            </a>
            <a href="mailto:info@wrkpersonaltraining.co.nz?subject=Clinical Intro Call" className="w-full sm:w-auto bg-white border border-neutral-300 hover:border-[#2C3539] text-[#2C3539] px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-[14px] transition-all flex items-center justify-center">
              Book Intro Call
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 text-[13px] font-medium text-[#2C3539]/60 uppercase tracking-wider">
            <span className="flex items-center gap-2"><MapPin size={16} /> Semi-Private Studio in Addington</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2"><ShieldCheck size={16} /> NZ-Wide Coach-Led Remote Care</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2"><Activity size={16} /> Evidence-Based Muscle Preservation</span>
          </div>
        </section>

        {/* EXECUTIVE SUMMARY */}
        <section className="py-20 bg-white px-4 md:px-8 border-y border-neutral-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-[32px] md:text-[40px] text-[#2C3539] mb-8 text-center">
              The Clinical Challenge & Rationale
            </h2>
            <div className="prose prose-lg prose-neutral max-w-none text-[#2C3539]/80">
              <p className="text-[18px] leading-relaxed mb-6">
                Rapid fat loss on GLP-1 receptor agonist therapy carries a high risk of lean body mass loss (often 25%–40% of total weight lost), accelerated sarcopenia, and metabolic slowdown if progressive resistance training and adequate protein intake are absent.
              </p>
              <p className="text-[18px] leading-relaxed">
                During brief 15-minute consultations, prescribing the medication is achievable, but overseeing the complex behavioural, nutritional, and physical interventions required for long-term success is a challenge. <strong>WRK Personal Training serves as a reliable lifestyle partner</strong> to reinforce your treatment plan, providing the supervised physical loading and nutritional habit coaching your patients need to preserve muscle, improve bone density, and build sustainable physical function.
              </p>
            </div>
          </div>
        </section>

        {/* CLINICAL COLLABORATION MATRIX */}
        <section className="py-20 bg-[#FAFAF9] px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-[32px] md:text-[40px] text-[#2C3539] mb-12 text-center">
              Clinical Collaboration Matrix
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "SKELETAL MUSCLE & BONE RETENTION",
                  issue: "Loss of lean mass during rapid deficit.",
                  protocol: "Minimum effective dose progressive resistance loading (2-3 sessions/week) targeting major multi-joint patterns."
                },
                {
                  title: "PROTEIN INTAKE & GI TOLERANCE",
                  issue: "Early satiety, nausea, blunted appetite.",
                  protocol: "Gradually increasing to 1.2–1.6g/kg/day via small, nutrient-dense meals and whole-food pacing."
                },
                {
                  title: "HYDRATION & ELECTROLYTES",
                  issue: "Blunted thirst cues, constipation, orthostatic fatigue.",
                  protocol: "Daily hydration logs, electrolyte tracking, and gentle dietary fiber modulation."
                },
                {
                  title: "JOINT-FRIENDLY & PAIN-AWARE",
                  issue: "Low movement confidence, osteoarthritis, back pain.",
                  protocol: "Pain-aware regressions, mobility evaluation, and closed-chain stability in a low-intimidation setting."
                }
              ].map((card, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col">
                  <div className="text-[13px] font-bold tracking-widest text-[#8A9A86] uppercase mb-4">
                    {card.title}
                  </div>
                  <div className="mb-4">
                    <span className="font-bold text-[#2C3539]">Challenge:</span> <span className="text-[#2C3539]/70">{card.issue}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#2C3539]">WRK Protocol:</span> <span className="text-[#2C3539]/70">{card.protocol}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCOPE OF PRACTICE */}
        <section className="py-20 bg-[#2C3539] text-white px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-[32px] md:text-[40px] text-white mb-4">Strict Scope of Practice & Safety</h2>
              <p className="text-white/60 text-[18px] max-w-2xl mx-auto">We prioritize patient safety and adhere strictly to our professional boundaries, acting as an extension of your care.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Medication Governance",
                  desc: "Zero prescribing, dosage altering, or medical advice. Dosing remains 100% with the medical prescriber."
                },
                {
                  title: "Pre-Exercise Screening",
                  desc: "PAR-Q+ health screening. Red flags require explicit written medical clearance prior to training."
                },
                {
                  title: "Symptom Escalation",
                  desc: "Immediate GP escalation for persistent nausea, severe fatigue, orthostatic dizziness, or unusual pain."
                },
                {
                  title: "Closed Communication Loop",
                  desc: "Optional initial intake summary and attendance/adherence confirmation provided back to the clinic."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <ShieldCheck className="text-[#8A9A86] mb-4" size={24} />
                  <h3 className="font-bold text-[16px] mb-3">{item.title}</h3>
                  <p className="text-white/70 text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CARE PATHWAYS */}
        <section className="py-20 bg-white px-4 md:px-8 border-b border-neutral-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-[32px] md:text-[40px] text-[#2C3539] mb-12 text-center">
              Care Pathways / Delivery Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#FAFAF9] p-8 rounded-3xl border border-neutral-200">
                <div className="text-[#8A9A86] font-bold tracking-widest text-[12px] uppercase mb-4">Option 1</div>
                <h3 className="font-serif text-[22px] text-[#2C3539] mb-4">1:1 In-Person Studio</h3>
                <p className="text-[#2C3539]/70 text-[15px] leading-relaxed">
                  Low-intimidation, uncrowded, private appointments located at 12 Show Place, Addington, Christchurch. Ideal for patients needing direct supervision and mobility support.
                </p>
              </div>
              <div className="bg-[#FAFAF9] p-8 rounded-3xl border border-neutral-200">
                <div className="text-[#8A9A86] font-bold tracking-widest text-[12px] uppercase mb-4">Option 2</div>
                <h3 className="font-serif text-[22px] text-[#2C3539] mb-4">Coach-Led Online</h3>
                <p className="text-[#2C3539]/70 text-[15px] leading-relaxed">
                  Delivered NZ-wide via My PT Hub with structured exercise demos, form checks, and habit tracking. Ideal for independent patients who need structure and accountability.
                </p>
              </div>
              <div className="bg-[#FAFAF9] p-8 rounded-3xl border border-neutral-200">
                <div className="text-[#8A9A86] font-bold tracking-widest text-[12px] uppercase mb-4">Option 3</div>
                <h3 className="font-serif text-[22px] text-[#2C3539] mb-4">GLP-1 App Toolkit</h3>
                <p className="text-[#2C3539]/70 text-[15px] leading-relaxed">
                  A 28-day digital habit and movement starter blueprint. Perfect for patients seeking an entry-level, self-guided foundation before committing to direct coaching.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW & FORM */}
        <section id="referral-form" className="py-20 bg-[#FAFAF9] px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-[32px] md:text-[40px] text-[#2C3539] mb-8 text-center">
              Clinician Referral Workflow
            </h2>
            
            {/* Workflow Diagram */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
              <div className="bg-white border border-neutral-200 p-6 rounded-2xl text-center w-full md:w-1/3 shadow-sm">
                <div className="bg-[#8A9A86] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mx-auto mb-3">1</div>
                <h4 className="font-bold text-[15px] mb-2">Send Referral</h4>
                <p className="text-[13px] text-[#2C3539]/60">Submit via the secure form below or hand the patient our tear-sheet.</p>
              </div>
              <ArrowRight className="hidden md:block text-[#2C3539]/30" size={24} />
              <div className="bg-white border border-neutral-200 p-6 rounded-2xl text-center w-full md:w-1/3 shadow-sm">
                <div className="bg-[#8A9A86] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mx-auto mb-3">2</div>
                <h4 className="font-bold text-[15px] mb-2">Assessment</h4>
                <p className="text-[13px] text-[#2C3539]/60">Comprehensive movement screening and habit evaluation.</p>
              </div>
              <ArrowRight className="hidden md:block text-[#2C3539]/30" size={24} />
              <div className="bg-white border border-neutral-200 p-6 rounded-2xl text-center w-full md:w-1/3 shadow-sm">
                <div className="bg-[#8A9A86] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mx-auto mb-3">3</div>
                <h4 className="font-bold text-[15px] mb-2">Progression</h4>
                <p className="text-[13px] text-[#2C3539]/60">Supervised progression & optional adherence feedback to your clinic.</p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl border border-neutral-200 shadow-sm">
              <h3 className="font-serif text-[24px] text-[#2C3539] mb-6 border-b border-neutral-100 pb-4">Secure Patient Referral Form</h3>
              
              <form 
                action="https://formspree.io/f/xbjnrvnq" 
                method="POST" 
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-bold text-[#2C3539]/70 uppercase tracking-wider mb-2">Referring Clinician Name *</label>
                    <input required type="text" name="clinicianName" className="w-full bg-[#FAFAF9] border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8A9A86] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#2C3539]/70 uppercase tracking-wider mb-2">Practice / Clinic Name *</label>
                    <input required type="text" name="practiceName" className="w-full bg-[#FAFAF9] border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8A9A86] transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-bold text-[#2C3539]/70 uppercase tracking-wider mb-2">Clinic Email *</label>
                    <input required type="email" name="clinicEmail" className="w-full bg-[#FAFAF9] border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8A9A86] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#2C3539]/70 uppercase tracking-wider mb-2">Clinic Phone</label>
                    <input type="tel" name="clinicPhone" className="w-full bg-[#FAFAF9] border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8A9A86] transition-colors" />
                  </div>
                </div>

                <div className="border-t border-neutral-100 pt-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-[13px] font-bold text-[#2C3539]/70 uppercase tracking-wider mb-2">Patient Full Name *</label>
                      <input required type="text" name="patientName" className="w-full bg-[#FAFAF9] border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8A9A86] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-[#2C3539]/70 uppercase tracking-wider mb-2">Patient Contact (Phone or Email) *</label>
                      <input required type="text" name="patientContact" className="w-full bg-[#FAFAF9] border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8A9A86] transition-colors" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#2C3539]/70 uppercase tracking-wider mb-3">Referral Focus (Select all that apply)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["GLP-1 Muscle Retention", "Over-40s Sarcopenia/Strength", "Injury Rehab & Posture", "General Metabolic Health"].map((focus) => (
                      <label key={focus} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" name="referralFocus" value={focus} className="w-4 h-4 text-[#8A9A86] focus:ring-[#8A9A86] border-neutral-300 rounded" />
                        <span className="text-[15px] text-[#2C3539]/80">{focus}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#2C3539]/70 uppercase tracking-wider mb-2">Relevant Clinical Notes / Orthopaedic Restrictions</label>
                  <textarea name="clinicalNotes" rows={4} className="w-full bg-[#FAFAF9] border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8A9A86] transition-colors resize-none"></textarea>
                </div>

                <div className="bg-[#FAFAF9] p-4 rounded-xl border border-neutral-200">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input required type="checkbox" name="patientConsent" className="w-5 h-5 mt-0.5 text-[#8A9A86] focus:ring-[#8A9A86] border-neutral-300 rounded" />
                    <span className="text-[14px] text-[#2C3539]/80 leading-snug">Patient has been informed and consents to referral contact from WRK Personal Training.</span>
                  </label>
                </div>

                <input type="hidden" name="_next" value="https://www.wrkpersonaltraining.co.nz/for-referrers" />
                <input type="hidden" name="_subject" value="New Patient Referral - WRK PT" />
                
                <button type="submit" className="w-full bg-[#2C3539] hover:bg-black text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-[14px] transition-colors">
                  Submit Secure Referral
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white px-4 md:px-8 border-t border-neutral-200">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#2C3539]">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-neutral-200 rounded-2xl overflow-hidden bg-[#FAFAF9] transition-all duration-300 hover:border-[#8A9A86]/50">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                  >
                    <span className="font-bold text-[16px] md:text-[18px] text-[#2C3539] pr-8 leading-snug">{faq.question}</span>
                    <ChevronDown className={`shrink-0 text-[#8A9A86] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} size={24} />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="p-6 md:p-8 pt-0 text-[15px] md:text-[16px] text-[#2C3539]/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLINIC CONTACT DETAILS */}
        <section className="py-20 bg-[#FAFAF9] px-4 md:px-8 border-t border-neutral-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-[28px] md:text-[36px] text-[#2C3539] mb-10">Contact Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <MapPin className="text-[#8A9A86] mb-4" size={32} />
                <h3 className="font-bold text-[16px] mb-2">Location</h3>
                <p className="text-[#2C3539]/70 text-[15px]">12 Show Place, Addington<br />Christchurch 8024</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="text-[#8A9A86] mb-4" size={32} />
                <h3 className="font-bold text-[16px] mb-2">Phone</h3>
                <p className="text-[#2C3539]/70 text-[15px]">021 393 160</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="text-[#8A9A86] mb-4" size={32} />
                <h3 className="font-bold text-[16px] mb-2">Email</h3>
                <p className="text-[#2C3539]/70 text-[15px]">info@wrkpersonaltraining.co.nz</p>
              </div>
            </div>
            <div className="mt-12 inline-block bg-white border border-neutral-200 px-8 py-4 rounded-full text-[14px] font-bold text-[#2C3539]/80 uppercase tracking-widest shadow-sm">
              Facility Hours: Mon – Fri, 6:00 AM – 2:00 PM
            </div>
          </div>
        </section>

      </div>
    </>
  );
};
