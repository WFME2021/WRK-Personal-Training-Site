import React, { useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { Copy, Check, Download, ShieldCheck, CheckCircle2, Phone, Mail, Clock, MapPin, Building, ArrowRight } from 'lucide-react';
import { ClinicianInquiryForm } from '../components/ClinicianInquiryForm';

export const ForReferrers: React.FC = () => {
  const [copiedOption, setCopiedOption] = useState<'A' | 'B' | null>(null);

  const snippetOptionA = `Hi [Name], to protect your muscle mass and metabolic rate while on your medication, I recommend pairing treatment with supervised resistance training. You can review the clinical lifestyle support from Hayden at WRK and arrange a consult here: wrkpersonaltraining.co.nz/glp1`;

  const snippetOptionB = `Hi [Name], following up on our consultation regarding muscle preservation and nutrition habits alongside your GLP-1 therapy. Here is the patient guidance resource from WRK: wrkpersonaltraining.co.nz/glp1`;

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

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "WRK Personal Training — Clinician Resource & Healthcare Provider Overview",
    "url": "https://wrkpersonaltraining.co.nz/for-referrers",
    "description": "Supervised Sarcopenia Prevention, Progressive Strength & Metabolic Support for Patients on GLP-1 Therapy. Overview for general practitioners, practice nurses, and specialists.",
    "publisher": {
      "@type": "HealthAndFitnessBusiness",
      "name": "WRK Personal Training",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12 Show Place, Addington",
        "addressLocality": "Christchurch",
        "postalCode": "8024",
        "addressCountry": "NZ"
      }
    }
  };

  return (
    <>
      <SeoHead 
        title="Clinician Resource & Healthcare Provider Overview | WRK Personal Training"
        description="Supervised Sarcopenia Prevention, Progressive Strength & Metabolic Support for Patients on GLP-1 Therapy. Clinical lifestyle collaboration in Christchurch and New Zealand."
        schema={schema}
      />

      <div className="bg-canvas text-charcoal min-h-screen font-sans selection:bg-spruce-800 selection:text-sand-50 pb-24">
        
        {/* Full-Bleed Hero Masthead */}
        <section className="relative min-h-[520px] md:min-h-[580px] flex items-center justify-center -mt-16 md:-mt-20 pt-28 pb-16 px-6 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop"
            alt="Clinical Lifestyle Collaboration and Healthcare Provider Overview"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/60 to-charcoal/40 mix-blend-multiply z-0" />

          {/* Hero Content Layer */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="text-xs uppercase tracking-[0.25em] font-sans text-sand-200 font-semibold mb-4 block">
              CLINICAL LIFESTYLE COLLABORATION
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight leading-tight mb-6">
              WRK Personal Training — Clinician Resource & Healthcare Provider Overview
            </h1>
            <p className="text-sand-100/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Supervised Sarcopenia Prevention, Progressive Strength & Metabolic Support for Patients on GLP-1 Therapy
            </p>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-3xl mx-auto text-sand-50 text-sm sm:text-base leading-relaxed shadow-lg">
              <span className="text-xs uppercase tracking-widest text-sand-200 block mb-2 font-semibold">
                OUR SCOPE & COLLABORATION MODEL
              </span>
              <p className="font-serif italic text-sand-50 text-sm sm:text-base leading-relaxed m-0">
                “You maintain pharmacotherapy, dose titration, and medical oversight. WRK delivers supervised, joint-friendly progressive resistance training, sarcopenia defense, and practical protein habit coaching.”
              </p>
            </div>
          </div>
        </section>

        {/* MAIN BODY SECTIONS */}
        <div className="px-6 max-w-4xl mx-auto space-y-16 pt-12 md:pt-16">
          
          {/* 1. Overview for General Practitioners & Specialists */}
          <section className="bg-white rounded-3xl p-8 sm:p-12 border border-charcoal/5 shadow-sm space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] font-sans text-spruce-800 font-semibold block">
              1. OVERVIEW FOR GENERAL PRACTITIONERS & SPECIALISTS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-bold tracking-tight leading-snug">
              Bridging the Gap Between Medical Weight Management and Functional Musculoskeletal Health.
            </h2>
            <div className="space-y-4 text-charcoal/80 text-base leading-relaxed">
              <p>
                Clinical trial DXA substudies demonstrate that without progressive resistance stimulus and adequate protein, lean tissue loss (skeletal muscle and bone mineral density) can account for <strong>25% to 40% of total mass reduced</strong>.
              </p>
              <p>
                In a standard 15-minute consultation, guiding a patient through multi-joint resistance loading, protein pacing, and hydration mechanics is impractical. WRK Personal Training serves as your reliable lifestyle extension in Christchurch and nationwide online.
              </p>
            </div>

            {/* Scope & Collaboration Model Box */}
            <div className="bg-spruce-800 text-sand-50 rounded-2xl p-6 sm:p-8 shadow-sm">
              <span className="text-xs uppercase tracking-widest text-sand-200 block mb-2 font-semibold">
                OUR SCOPE & COLLABORATION MODEL
              </span>
              <blockquote className="font-serif text-lg sm:text-xl text-sand-50 italic leading-snug m-0">
                “You maintain pharmacotherapy, dose titration, and medical oversight. WRK delivers supervised, joint-friendly progressive resistance training, sarcopenia defense, and practical protein habit coaching.”
              </blockquote>
            </div>
          </section>

          {/* 2. Share WRK With a Patient in Under 5 Seconds */}
          <section className="bg-white rounded-3xl p-8 sm:p-12 border border-charcoal/5 shadow-sm space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-sans text-spruce-800 font-semibold block mb-2">
                2. FAST PATIENT REFERRAL
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-bold tracking-tight leading-snug mb-3">
                Share WRK With a Patient in Under 5 Seconds
              </h2>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                No referral forms, clinician portals, or administrative overhead. Copy either template into Medtech, MyPractice, or Indici outbound messaging:
              </p>
            </div>

            <div className="space-y-6">
              
              {/* Option A */}
              <div className="bg-sand-50/70 border border-charcoal/10 p-6 rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-spruce-800">
                    Option A: Clinician Recommendation (SMS / Patient Portal)
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(snippetOptionA, 'A')}
                    className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-md font-semibold text-xs uppercase tracking-wider transition-all w-full sm:w-auto shadow-xs ${
                      copiedOption === 'A'
                        ? 'bg-spruce-800 text-sand-50'
                        : 'bg-white hover:bg-spruce-800 hover:text-sand-50 text-charcoal border border-charcoal/15'
                    }`}
                  >
                    {copiedOption === 'A' ? (
                      <>
                        <Check size={14} />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy Template</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-white p-4 rounded-xl border border-charcoal/10 text-sm sm:text-base text-charcoal leading-relaxed font-mono">
                  "{snippetOptionA}"
                </div>
              </div>

              {/* Option B */}
              <div className="bg-sand-50/70 border border-charcoal/10 p-6 rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-spruce-800">
                    Option B: Practice Resource Follow-up
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(snippetOptionB, 'B')}
                    className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-md font-semibold text-xs uppercase tracking-wider transition-all w-full sm:w-auto shadow-xs ${
                      copiedOption === 'B'
                        ? 'bg-spruce-800 text-sand-50'
                        : 'bg-white hover:bg-spruce-800 hover:text-sand-50 text-charcoal border border-charcoal/15'
                    }`}
                  >
                    {copiedOption === 'B' ? (
                      <>
                        <Check size={14} />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy Template</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-white p-4 rounded-xl border border-charcoal/10 text-sm sm:text-base text-charcoal leading-relaxed font-mono">
                  "{snippetOptionB}"
                </div>
              </div>

            </div>

            {/* Download 1-Page Practice Summary & Patient Tear-Sheet (PDF) */}
            <div className="bg-sand-100/70 border border-charcoal/10 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-lg font-bold text-charcoal mb-1">
                  1-Page Practice Summary & Patient Tear-Sheet
                </h4>
                <p className="text-xs text-charcoal/70">
                  Concise clinical summary and patient handout ready for practice desks.
                </p>
              </div>
              <a
                href="/docs/WRK-Clinician-Summary.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-spruce-800 hover:bg-spruce-900 text-sand-50 px-6 py-3.5 rounded-md font-semibold uppercase tracking-wider text-xs transition-colors whitespace-nowrap shrink-0 shadow-xs"
              >
                <Download size={15} />
                <span>Download 1-Page Practice Summary & Patient Tear-Sheet (PDF)</span>
              </a>
            </div>

            {/* Direct Enquiries Line */}
            <div className="pt-4 border-t border-charcoal/10 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-charcoal/80">
              <span className="font-semibold text-charcoal">Direct Practice Enquiries:</span>
              <a href="mailto:info@wrkpersonaltraining.co.nz" className="inline-flex items-center gap-1.5 text-spruce-800 hover:underline">
                <Mail size={14} /> info@wrkpersonaltraining.co.nz
              </a>
              <a href="tel:021393160" className="inline-flex items-center gap-1.5 text-spruce-800 hover:underline">
                <Phone size={14} /> 021 393 160
              </a>
            </div>
          </section>

          {/* 3. Clinical Focus Areas: What We Coach */}
          <section className="bg-white rounded-3xl p-8 sm:p-12 border border-charcoal/5 shadow-sm space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] font-sans text-spruce-800 font-semibold block">
              3. CLINICAL FOCUS AREAS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-bold tracking-tight leading-snug">
              Clinical Focus Areas: What We Coach
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-sand-50/70 p-6 rounded-2xl border border-charcoal/5 space-y-2">
                <div className="flex items-center gap-2 text-spruce-800 font-bold text-sm">
                  <CheckCircle2 size={18} className="shrink-0" />
                  <span>Sarcopenia Mitigation & Bone Mineral Defense</span>
                </div>
                <p className="text-sm text-charcoal/80 leading-relaxed pl-6">
                  Minimum effective dose progressive loading (2–3x/week) targeting multi-joint functional patterns to stimulate myofibrillar protein synthesis and preserve functional independence.
                </p>
              </div>

              <div className="bg-sand-50/70 p-6 rounded-2xl border border-charcoal/5 space-y-2">
                <div className="flex items-center gap-2 text-spruce-800 font-bold text-sm">
                  <CheckCircle2 size={18} className="shrink-0" />
                  <span>Appetite-Calibrated Protein Pacing</span>
                </div>
                <p className="text-sm text-charcoal/80 leading-relaxed pl-6">
                  Evidence-informed intake (1.2–1.6 g/kg/day) using nutrient-dense, low-volume whole foods structured to avoid nausea and respect early satiety.
                </p>
              </div>

              <div className="bg-sand-50/70 p-6 rounded-2xl border border-charcoal/5 space-y-2">
                <div className="flex items-center gap-2 text-spruce-800 font-bold text-sm">
                  <CheckCircle2 size={18} className="shrink-0" />
                  <span>Hydration & Delayed Gastric Emptying</span>
                </div>
                <p className="text-sm text-charcoal/80 leading-relaxed pl-6">
                  Fluid and electrolyte protocols designed to counter blunted thirst cues, maintain renal clearance, and prevent obstipation.
                </p>
              </div>

              <div className="bg-sand-50/70 p-6 rounded-2xl border border-charcoal/5 space-y-2">
                <div className="flex items-center gap-2 text-spruce-800 font-bold text-sm">
                  <CheckCircle2 size={18} className="shrink-0" />
                  <span>Joint-Safe & Pain-Aware Regressions</span>
                </div>
                <p className="text-sm text-charcoal/80 leading-relaxed pl-6">
                  Biomechanically sound loading adapted for deconditioned patients, osteoarthritis, and pre-existing musculoskeletal constraints.
                </p>
              </div>
            </div>
          </section>

          {/* 4. 20+ Years of Condition-Aware Coaching Experience */}
          <section className="bg-white rounded-3xl p-8 sm:p-12 border border-charcoal/5 shadow-sm space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] font-sans text-spruce-800 font-semibold block">
              4. CLINICAL PRACTITIONER PEDIGREE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-bold tracking-tight leading-snug">
              20+ Years of Condition-Aware Coaching Experience
            </h2>
            <p className="text-charcoal/80 text-base leading-relaxed">
              Your patients are supported by experienced, accredited coaching—not an unvetted commercial gym floor trainer.
            </p>
            <p className="text-charcoal/80 text-base leading-relaxed">
              Led by <strong>Hayden Richards</strong>, bringing over 20 years of one-on-one coaching experience alongside medical and clinical guidance:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-sand-50/60 rounded-xl border border-charcoal/5 text-sm text-charcoal/80">
                <span className="font-bold text-charcoal block mb-1">Parkinson’s Disease:</span>
                Motor recruitment, balance, and gait stabilization.
              </div>
              <div className="p-4 bg-sand-50/60 rounded-xl border border-charcoal/5 text-sm text-charcoal/80">
                <span className="font-bold text-charcoal block mb-1">Post-Cancer Oncology Recovery:</span>
                Energy pacing, fatigue titration, and lean mass rebuilding.
              </div>
              <div className="p-4 bg-sand-50/60 rounded-xl border border-charcoal/5 text-sm text-charcoal/80">
                <span className="font-bold text-charcoal block mb-1">Pre- & Post-Operative Arthroplasty (Knee/Hip):</span>
                Joint alignment, mobility, and closed-chain strength restoration.
              </div>
              <div className="p-4 bg-sand-50/60 rounded-xl border border-charcoal/5 text-sm text-charcoal/80">
                <span className="font-bold text-charcoal block mb-1">Post-Cardiac Rehabilitation:</span>
                Monitored exertion, hemodynamic awareness, and graded progression.
              </div>
            </div>

            {/* Standards Ribbon */}
            <div className="mt-6 pt-6 border-t border-charcoal/10">
              <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-3 rounded-xl bg-sand-100/70 border border-charcoal/10 text-charcoal text-xs sm:text-sm font-medium">
                <ShieldCheck size={18} className="text-spruce-800 shrink-0" />
                <span className="font-bold text-spruce-900">20+ Years Dedicated Coaching Experience</span>
                <span className="text-charcoal/30 hidden sm:inline">·</span>
                <span>Clean Scope of Practice Adherence</span>
                <span className="text-charcoal/30 hidden sm:inline">·</span>
                <span>PAR-Q+ Medical Clearance Screening</span>
              </div>
            </div>
          </section>

          {/* 5. Low-Intimidation Training Environments */}
          <section className="bg-white rounded-3xl p-8 sm:p-12 border border-charcoal/5 shadow-sm space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] font-sans text-spruce-800 font-semibold block">
              5. TRAINING ENVIRONMENTS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-bold tracking-tight leading-snug">
              Low-Intimidation Training Environments
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-sand-50/70 p-6 rounded-2xl border border-charcoal/5 space-y-3">
                <div className="flex items-center gap-2 text-spruce-900 font-serif text-lg font-bold">
                  <Building size={20} className="text-spruce-800" />
                  <span>Boutique Facility (12 Show Place, Addington)</span>
                </div>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  A calm, low-density space shared with only a handful of members at any time—ideal for patients who feel uncomfortable or overwhelmed in standard commercial gym settings.
                </p>
              </div>

              <div className="bg-sand-50/70 p-6 rounded-2xl border border-charcoal/5 space-y-3">
                <div className="flex items-center gap-2 text-spruce-900 font-serif text-lg font-bold">
                  <MapPin size={20} className="text-spruce-800" />
                  <span>Coach-Led Remote Training (New Zealand Nationwide)</span>
                </div>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  Delivered via the WRK App with video form review, habit tracking, and direct coach communication for regional patients.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Scope of Practice & Closed-Loop Feedback */}
          <section className="bg-white rounded-3xl p-8 sm:p-12 border border-charcoal/5 shadow-sm space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] font-sans text-spruce-800 font-semibold block">
              6. SCOPE OF PRACTICE & CLINICAL DOCUMENTATION
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-bold tracking-tight leading-snug">
              Scope of Practice & Closed-Loop Feedback
            </h2>

            <div className="bg-charcoal text-sand-50 p-6 sm:p-8 rounded-2xl">
              <p className="italic font-serif text-base sm:text-lg text-sand-100 leading-relaxed m-0">
                “We operate strictly within the fitness and lifestyle scope. We never diagnose, manage clinical pathology, or adjust pharmacotherapy. Any medication side effects or medical questions are immediately redirected back to your practice.”
              </p>
            </div>

            <div className="bg-sand-50/80 border border-spruce-800/30 p-6 sm:p-8 rounded-2xl space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={24} className="text-spruce-800 shrink-0" />
                <h4 className="font-serif text-xl font-bold text-charcoal">
                  Closed-Loop Clinical Documentation
                </h4>
              </div>
              <p className="text-sm text-charcoal/80 leading-relaxed">
                With documented patient consent, we provide a concise 2-sentence consult summary to your practice inbox detailing:
              </p>
              <ol className="list-decimal pl-6 text-sm text-charcoal/80 space-y-1 font-medium">
                <li>Baseline functional capacity and resistance schedule initiated.</li>
                <li>Daily protein baseline and hydration strategy established.</li>
              </ol>
              <p className="text-xs text-charcoal/70 pt-1">
                This confirms active lifestyle intervention for your records with zero administrative burden on your clinic.
              </p>
            </div>
          </section>

          {/* 7. Practice Information & Provider Channel */}
          <section className="bg-white rounded-3xl p-8 sm:p-12 border border-charcoal/5 shadow-sm space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] font-sans text-spruce-800 font-semibold block">
              7. PRACTICE INFORMATION & PROVIDER CHANNEL
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-bold tracking-tight leading-snug mb-4">
              Practice Information & Provider Channel
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-charcoal/80">
              <div className="p-4 bg-sand-50/70 rounded-xl border border-charcoal/5">
                <div className="flex items-center gap-2 font-bold text-charcoal mb-1">
                  <MapPin size={16} className="text-spruce-800" />
                  <span>Facility Location</span>
                </div>
                <p>WRK Personal Training</p>
                <p>12 Show Place, Addington</p>
                <p>Christchurch 8024</p>
              </div>

              <div className="p-4 bg-sand-50/70 rounded-xl border border-charcoal/5">
                <div className="flex items-center gap-2 font-bold text-charcoal mb-1">
                  <Phone size={16} className="text-spruce-800" />
                  <span>Direct Clinician Line</span>
                </div>
                <p className="font-semibold text-spruce-900">021 393 160</p>
                <p className="text-xs text-charcoal/60 mt-1">info@wrkpersonaltraining.co.nz</p>
              </div>

              <div className="p-4 bg-sand-50/70 rounded-xl border border-charcoal/5">
                <div className="flex items-center gap-2 font-bold text-charcoal mb-1">
                  <Clock size={16} className="text-spruce-800" />
                  <span>Practice Hours</span>
                </div>
                <p>Monday – Friday</p>
                <p className="font-semibold text-spruce-900">6:00 AM – 2:00 PM</p>
              </div>
            </div>
          </section>

          {/* Clinician & Practice Inquiries Form Component */}
          <div>
            <ClinicianInquiryForm />
          </div>

        </div>
      </div>
    </>
  );
};
