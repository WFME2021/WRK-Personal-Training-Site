import React, { useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { Copy, Check, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ClinicianInquiryForm } from '../components/ClinicianInquiryForm';

export const ForReferrers: React.FC = () => {
  const [copiedOption, setCopiedOption] = useState<'A' | 'B' | null>(null);

  const snippetOptionA = `Hi [Name], your doctor recommends pairing your GLP-1 medication with supervised strength training to protect muscle mass. Read more and book a free discovery chat with Hayden at WRK here: wrkpersonaltraining.co.nz/glp1`;

  const snippetOptionB = `Hi [Name], here is the strength and nutrition support resource we discussed to help protect muscle mass alongside your treatment: wrkpersonaltraining.co.nz/glp1`;

  const handleCopy = (text: string, option: 'A' | 'B') => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
      document.body.removeChild(textArea);
    }
    setCopiedOption(option);
    setTimeout(() => {
      setCopiedOption((prev) => (prev === option ? null : prev));
    }, 2500);
  };

  return (
    <>
      <SeoHead 
        title="Clinician Resource & Healthcare Provider Overview | WRK Personal Training"
        description="Supporting Your Patients on GLP-1 Therapy & Metabolic Care with Supervised Strength & Sarcopenia Prevention."
      />

      <div className="flex flex-col w-full overflow-x-hidden bg-[#FAFAF9] text-[#2C3539] selection:bg-[#8A9A86] selection:text-white pb-24">
        
        {/* HERO HEADER */}
        <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 px-4 md:px-8 max-w-4xl mx-auto flex flex-col">
          <h1 className="font-serif text-[40px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            WRK Personal Training — Clinician Resource & Healthcare Provider Overview
          </h1>
          <p className="text-[18px] md:text-[22px] text-[#2C3539]/80 font-bold max-w-3xl leading-snug">
            Supporting Your Patients on GLP-1 Therapy & Metabolic Care with Supervised Strength & Sarcopenia Prevention
          </p>
          <div className="w-16 h-[2px] bg-[#8A9A86] mt-10"></div>
        </section>

        {/* CONTENT SECTIONS */}
        <section className="px-4 md:px-8 max-w-4xl mx-auto space-y-16">
          
          {/* SECTION 1 */}
          <div>
            <h3 className="font-bold text-[13px] tracking-widest uppercase text-[#8A9A86] mb-4">1. Overview for General Practitioners & Specialists</h3>
            <h2 className="font-serif text-[28px] md:text-[32px] mb-6 text-[#2C3539]">
              Bridging the Gap Between Medical Weight Management and Sustainable Physical Function.
            </h2>
            <div className="prose prose-lg text-[#2C3539]/80 max-w-none">
              <p>
                While GLP-1 receptor agonists (e.g., semaglutide, tirzepatide) deliver unprecedented glycemic and weight-loss outcomes, clinical literature demonstrates that <strong>up to 25%–40% of total mass lost can come from lean tissue (skeletal muscle and bone mineral density)</strong> if progressive loading and adequate protein are absent.
              </p>
              <p>
                In a standard 15-minute consultation, guiding a patient through progressive overload, protein distribution, and hydration mechanics is impractical. WRK Personal Training serves as your reliable lifestyle extension in Christchurch and nationwide online.
              </p>
              <div className="bg-[#2C3539] text-white p-8 rounded-2xl mt-8">
                <p className="font-bold mb-2">Our Collaboration Model:</p>
                <p className="italic text-white/90 m-0">
                  "You manage the prescription, titration, and medical oversight. WRK provides the supervised, joint-friendly progressive resistance training and protein habit coaching."
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 2 */}
          <div>
            <h3 className="font-bold text-[13px] tracking-widest uppercase text-[#8A9A86] mb-4">2. Share WRK With a Patient in Under 5 Seconds</h3>
            <div className="prose prose-lg text-[#2C3539]/80 max-w-none">
              <p className="italic mb-6">
                No referral forms, logins, or paperwork required. Choose either option below to paste into your Medtech, MyPractice, or Indici outbound messaging tool:
              </p>
              
              {/* Stacked SMS Options with 1-Click Copy */}
              <div className="space-y-6 mb-8">
                
                {/* Option A */}
                <div className="bg-white border border-neutral-200 p-6 md:p-8 rounded-2xl shadow-sm transition-all hover:border-[#8A9A86]/50">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <span className="font-bold text-[12px] tracking-widest uppercase text-[#8A9A86]">
                      Option A: Direct Recommendation
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(snippetOptionA, 'A')}
                      className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg font-bold text-[12px] uppercase tracking-wider transition-all w-full sm:w-auto ${
                        copiedOption === 'A'
                          ? 'bg-[#8A9A86] text-white'
                          : 'bg-neutral-100 hover:bg-[#2C3539] hover:text-white text-[#2C3539]'
                      }`}
                    >
                      {copiedOption === 'A' ? (
                        <>
                          <Check size={14} />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Copy Snippet</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="italic text-[#2C3539] text-[16px] md:text-[18px] m-0 leading-relaxed font-sans bg-[#FAFAF9] p-4 rounded-xl border border-neutral-100">
                    "{snippetOptionA}"
                  </p>
                </div>

                {/* Option B */}
                <div className="bg-white border border-neutral-200 p-6 md:p-8 rounded-2xl shadow-sm transition-all hover:border-[#8A9A86]/50">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <span className="font-bold text-[12px] tracking-widest uppercase text-[#8A9A86]">
                      Option B: Collaborative / Resource Sharing
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(snippetOptionB, 'B')}
                      className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg font-bold text-[12px] uppercase tracking-wider transition-all w-full sm:w-auto ${
                        copiedOption === 'B'
                          ? 'bg-[#8A9A86] text-white'
                          : 'bg-neutral-100 hover:bg-[#2C3539] hover:text-white text-[#2C3539]'
                      }`}
                    >
                      {copiedOption === 'B' ? (
                        <>
                          <Check size={14} />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Copy Snippet</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="italic text-[#2C3539] text-[16px] md:text-[18px] m-0 leading-relaxed font-sans bg-[#FAFAF9] p-4 rounded-xl border border-neutral-100">
                    "{snippetOptionB}"
                  </p>
                </div>

              </div>

              {/* Downloadable 1-Page Summary Button */}
              <div className="bg-[#FAFAF9] border border-neutral-200 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h4 className="font-bold text-[15px] text-[#2C3539] mb-1">
                    Printable Handouts for Your Practice
                  </h4>
                  <p className="text-[14px] text-[#2C3539]/70 m-0">
                    One-page clinical summary and patient tear-sheet for consulting desks.
                  </p>
                </div>
                <a
                  href="/docs/WRK-Clinician-Summary.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#2C3539] hover:bg-black text-white px-5 py-3 rounded-xl font-bold uppercase tracking-wider text-[12px] transition-colors whitespace-nowrap shrink-0"
                >
                  <Download size={15} />
                  <span>Download 1-Page Practice Summary & Patient Handout (PDF)</span>
                </a>
              </div>

              <ul className="list-disc pl-6 space-y-2 font-medium">
                <li>Direct Patient Information Page: <strong>wrkpersonaltraining.co.nz/glp1</strong></li>
                <li>Direct Practice Inquiries: <strong>info@wrkpersonaltraining.co.nz</strong> | <strong>021 393 160</strong> (<a href="#clinician-inquiry" className="text-[#8A9A86] hover:underline">or send direct message below</a>)</li>
              </ul>
            </div>
          </div>

          {/* SECTION 3 */}
          <div>
            <h3 className="font-bold text-[13px] tracking-widest uppercase text-[#8A9A86] mb-4">3. Clinical Rationale: What We Coach</h3>
            <div className="prose prose-lg text-[#2C3539]/80 max-w-none">
              <ul className="space-y-4">
                <li><strong>Skeletal Muscle & Bone Preservation:</strong> Minimum effective dose progressive resistance training (2–3x/week) targeting multi-joint functional patterns to stimulate myofibrillar protein synthesis.</li>
                <li><strong>Protein Pacing & Appetite Adaptation:</strong> Practical whole-food strategies targeting 1.2–1.6 g/kg/day, structured in small, nutrient-dense portions that respect GLP-1 early satiety and nausea.</li>
                <li><strong>Hydration & GI Regularity:</strong> Daily hydration tracking and electrolyte awareness to counter blunted thirst cues and maintain bowel regularity.</li>
                <li><strong>Joint-Safe & Pain-Aware Regressions:</strong> Tailored loading designed for deconditioned adults, joint stiffness, and pre-existing musculoskeletal discomfort.</li>
              </ul>
            </div>
          </div>

          {/* SECTION 4 */}
          <div>
            <h3 className="font-bold text-[13px] tracking-widest uppercase text-[#8A9A86] mb-4">4. 20+ Years of Condition-Aware Coaching Experience</h3>
            <div className="prose prose-lg text-[#2C3539]/80 max-w-none">
              <p>Your patients are not being handed off to an inexperienced gym floor trainer.</p>
              <p>
                WRK is led by <strong>Hayden Richards</strong>, bringing over <strong>20 years of dedicated one-on-one coaching experience</strong> working alongside clinical and medical guidance. His background includes working closely with:
              </p>
              <ul className="space-y-2">
                <li>Clients managing <strong>Parkinson’s disease</strong> (focusing on gait, balance, and motor recruitment).</li>
                <li>Individuals in <strong>post-cancer treatment recovery</strong> (managing fatigue titration and lean mass rebuilding).</li>
                <li>Pre- and post-operative <strong>total knee and hip replacements</strong> (joint alignment, closed-chain strength, and mobility restoration).</li>
                <li>Clients in <strong>post-cardiac bypass rehabilitation</strong> (carefully monitored exertion and hemodynamic awareness).</li>
              </ul>
              <p>
                This clinical familiarity ensures that deconditioned, hesitant, or co-morbid patients receive safe, patient, and biomechanically sound support.
              </p>

              {/* Professional Credentials Sub-Bar */}
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-3 rounded-xl bg-white border border-neutral-200 text-[#2C3539] text-[13px] md:text-[14px] font-medium shadow-sm">
                  <ShieldCheck size={18} className="text-[#8A9A86] shrink-0" />
                  <span className="font-semibold">REPs Registered Exercise Professional</span>
                  <span className="text-neutral-300 hidden sm:inline">|</span>
                  <span>Evidence-Based Functional Sarcopenia & Resistance Training</span>
                  <span className="text-neutral-300 hidden sm:inline">|</span>
                  <span>Clean Scope of Practice Adherence</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 5 */}
          <div>
            <h3 className="font-bold text-[13px] tracking-widest uppercase text-[#8A9A86] mb-4">5. Low-Intimidation Training Environments</h3>
            <div className="prose prose-lg text-[#2C3539]/80 max-w-none">
              <ul className="space-y-4">
                <li><strong>Semi-Private Studio (12 Show Place, Addington):</strong> A quiet, uncrowded facility shared with only a limited number of members at any time—ideal for patients who feel uncomfortable in standard commercial gyms.</li>
                <li><strong>Coach-Led Remote Training (New Zealand Nationwide):</strong> Delivered via My PT Hub with video movement tutorials, habit tracking, and direct coach communication for home-based or regional patients.</li>
              </ul>
            </div>
          </div>

          {/* SECTION 6 */}
          <div>
            <h3 className="font-bold text-[13px] tracking-widest uppercase text-[#8A9A86] mb-4">6. Scope of Practice & Patient Safety Protocols</h3>
            <div className="prose prose-lg text-[#2C3539]/80 max-w-none">
              <div className="bg-[#2C3539] text-white p-8 rounded-2xl mb-8">
                <p className="italic text-white/90 m-0">
                  "Hayden Richards is an experienced personal trainer and evidence-based strength & nutrition coach with a focus on medical weight loss support and sarcopenia. We operate strictly within the fitness and lifestyle scope—we do not diagnose, treat disease, or alter medical prescriptions."
                </p>
              </div>
              <ul className="space-y-4">
                <li><strong>Zero Medical Alteration:</strong> We never advise on, adjust, or interfere with pharmacotherapy or dosages.</li>
                <li><strong>Pre-Exercise Screening:</strong> All clients complete a PAR-Q+ health screening. Any acute contraindications are redirected to you for clearance.</li>
              </ul>

              {/* Styled Callout Card for Closed-Loop Feedback */}
              <div className="mt-8 bg-white border-2 border-[#8A9A86]/40 p-6 md:p-8 rounded-2xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#8A9A86]/10 text-[#8A9A86] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <h4 className="font-serif text-[20px] md:text-[22px] text-[#2C3539] mb-2 leading-snug">
                      Zero-Admin Closed-Loop Feedback for Your Notes
                    </h4>
                    <p className="text-[15px] md:text-[16px] text-[#2C3539]/80 leading-relaxed m-0">
                      When your patient attends their complimentary Discovery Assessment (with consent), we send a brief 2-sentence summary email to your clinic inbox. This ensures your patient records show lifestyle intervention and sarcopenia mitigation have commenced—requiring zero administrative follow-up from your team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 7 */}
          <div>
            <h3 className="font-bold text-[13px] tracking-widest uppercase text-[#8A9A86] mb-4">7. Practice Information & Contact</h3>
            <div className="bg-white border border-neutral-200 p-8 rounded-2xl shadow-sm">
              <ul className="space-y-3 text-[16px] md:text-[18px] text-[#2C3539]">
                <li><strong>Facility:</strong> WRK Personal Training, 12 Show Place, Addington, Christchurch 8024</li>
                <li><strong>Coach:</strong> Hayden Richards</li>
                <li><strong>Phone:</strong> 021 393 160</li>
                <li><strong>Email:</strong> info@wrkpersonaltraining.co.nz</li>
                <li><strong>Hours:</strong> Monday – Friday, 6:00 AM – 2:00 PM</li>
              </ul>
            </div>
          </div>

          {/* SECTION 8: ISOLATED CLINICIAN & PRACTICE INQUIRY FORM */}
          <div>
            <ClinicianInquiryForm />
          </div>

        </section>
      </div>
    </>
  );
};
