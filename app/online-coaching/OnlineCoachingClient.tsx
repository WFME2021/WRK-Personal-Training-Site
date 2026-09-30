'use client';

import React, { useState } from 'react';
import { trackEvent } from '../../utils/analytics';

const FAQS = [
  {
    q: 'Do I need a commercial gym membership?',
    a: 'No. Every programme is built entirely around your available equipment. Whether you train in a fully equipped commercial gym, a basic garage setup, or at home with a pair of adjustable dumbbells and resistance bands, we select mechanical loading patterns that fit your environment.',
  },
  {
    q: 'What if I feel exhausted or nauseous on injection days?',
    a: 'We design your training schedule directly around your pharmacokinetics. Our adaptive pacing protocol accounts for peak medication levels, programming lighter active recovery or deload sessions on post-injection days so you maintain consistency without burning out.',
  },
  {
    q: 'How does online coaching work internationally?',
    a: 'All workouts, exercise video demos, progress tracking, and communication live inside the WRK training app. Weekly check-ins and form reviews are conducted asynchronously, meaning time-zone differences between New Zealand, Australia, the US, or the UK never delay your feedback.',
  },
  {
    q: 'Is there a long-term contract?',
    a: 'We operate in structured 12-week training blocks billed weekly at $49 NZD. We believe coaching should prove its value while giving your neuromuscular system enough structured time to see tangible body composition and strength adaptations. No ongoing lock-in beyond your cycle.',
  },
];

export default function OnlineCoachingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coachingFocus: 'glp1',
    trainingLocation: 'gym',
    notes: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/online-coaching-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Submission failed');

      trackEvent('online_coaching_application', {
        event_category: 'conversion',
        coaching_type: 'remote_online',
        offer_price: 49,
      });

      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100 antialiased selection:bg-amber-400 selection:text-neutral-950 pb-24 md:pb-12">
      {/* 1. HERO SECTION */}
      <section className="relative px-5 pt-12 pb-16 mx-auto max-w-4xl text-center md:pt-20">
        <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase bg-amber-400/10 text-amber-400 rounded-full border border-amber-400/20 mb-4">
          Online Coaching · New Zealand & Worldwide
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white leading-tight">
          The Weight Is Dropping. <br />
          <span className="text-amber-400">Let’s Protect Your Strength.</span>
        </h1>
        <p className="mt-5 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Personalised online fitness, joint-safe mechanical loading, and low-friction nutrition coaching. Built specifically for individuals taking GLP-1 medications and high-demand professionals seeking sustainable body recomposition.
        </p>

        {/* Proof / Trust Strip */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-neutral-400 font-medium">
          <span className="flex items-center gap-1.5"><strong className="text-amber-400 font-bold">✓</strong> Tailored to your equipment</span>
          <span className="text-neutral-700 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5"><strong className="text-amber-400 font-bold">✓</strong> No burnout workouts</span>
          <span className="text-neutral-700 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5"><strong className="text-amber-400 font-bold">✓</strong> Evidence-based muscle defence</span>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#apply-now"
            className="w-full sm:w-auto px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-lg transition-colors text-center shadow-lg shadow-amber-400/10"
          >
            Apply for Coaching
          </a>
          <a
            href="#pricing"
            className="w-full sm:w-auto px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 font-semibold rounded-lg border border-neutral-800 transition-colors text-center"
          >
            View Pricing ($49 NZD/wk)
          </a>
        </div>
      </section>

      {/* 2. CLINICAL PERSPECTIVE / METRIC CALLOUT */}
      <section className="px-5 py-12 mx-auto max-w-4xl">
        <div className="p-8 bg-neutral-900/60 rounded-2xl border border-neutral-800 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="shrink-0">
            <span className="text-5xl font-black text-amber-400 tracking-tight">Up to 40%</span>
            <span className="block text-xs uppercase tracking-wider text-neutral-400 mt-1">Lean mass loss risk</span>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-neutral-800 pt-4 md:pt-0 md:pl-6 text-sm text-neutral-300 leading-relaxed">
            <strong className="text-white block mb-1">A Different Approach to Training</strong>
            Up to 40% of rapid weight loss can come from active skeletal muscle tissue. Traditional fitness assumes high energy and endless gym hours. We design around your reality: lower appetite, fluctuating injection days, and the absolute priority of defending metabolic rate while the scale drops.
          </div>
        </div>
      </section>

      {/* 3. METHODOLOGY (THE 3 PROTOCOLS) */}
      <section className="px-5 py-12 mx-auto max-w-5xl border-t border-neutral-900">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Our Methodology</span>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mt-1">
            How We Protect Your Body
          </h2>
          <p className="text-sm text-neutral-400 mt-2">
            A structured protocol calibrated to your weekly routine and medication cycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-neutral-900/50 rounded-xl border border-neutral-850 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-neutral-500 mb-1">01 · RESISTANCE TRAINING</div>
              <h3 className="text-lg font-bold text-white mb-2">Muscle-Preserving Strength</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Targeted 2–3 day programmes signalling your body to hold onto lean muscle while bodyweight drops. Tailored specifically for gym or home setup.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800/80 text-xs font-medium text-amber-400">
              Focus: Progressive overload & mechanical tension
            </div>
          </div>

          <div className="p-6 bg-neutral-900/50 rounded-xl border border-neutral-850 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-neutral-500 mb-1">02 · NUTRITION STRATEGY</div>
              <h3 className="text-lg font-bold text-white mb-2">Low-Friction Fuelling</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Digestible protein anchoring and hydration protocols designed to meet your targets without triggering nausea or gastrointestinal stress.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800/80 text-xs font-medium text-amber-400">
              Focus: Simple protein anchors & GI tolerance
            </div>
          </div>

          <div className="p-6 bg-neutral-900/50 rounded-xl border border-neutral-850 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-neutral-500 mb-1">03 · ADAPTIVE PACING</div>
              <h3 className="text-lg font-bold text-white mb-2">Biofeedback & Dose Syncing</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Weekly adjustments based on your dose titration, fatigue, and recovery so consistency never leads to exhaustion or plateaus.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800/80 text-xs font-medium text-amber-400">
              Focus: Dose-matched volume & recovery
            </div>
          </div>
        </div>
      </section>

      {/* 4. COACHING DELIVERABLES */}
      <section className="px-5 py-12 mx-auto max-w-4xl border-t border-neutral-900">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Coaching Deliverables</span>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mt-1">
            High-Touch Guidance, Anywhere
          </h2>
          <p className="text-sm text-neutral-400 mt-2">All the accountability of in-person training with mobile flexibility.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 bg-neutral-900/40 rounded-xl border border-neutral-850">
            <h4 className="font-bold text-white mb-1">WRK Training App</h4>
            <p className="text-sm text-neutral-400">Personalised workouts, exercise video demos, and automated progress logging direct on your phone.</p>
          </div>
          <div className="p-5 bg-neutral-900/40 rounded-xl border border-neutral-850">
            <h4 className="font-bold text-white mb-1">Video Form Feedback</h4>
            <p className="text-sm text-neutral-400">Upload lifting clips directly in-app for ongoing coaching on joint alignment, posture, and mechanics.</p>
          </div>
          <div className="p-5 bg-neutral-900/40 rounded-xl border border-neutral-850">
            <h4 className="font-bold text-white mb-1">Weekly Analysis</h4>
            <p className="text-sm text-neutral-400">Comprehensive check-ins to review biofeedback, habit compliance, and adjust your routine.</p>
          </div>
          <div className="p-5 bg-neutral-900/40 rounded-xl border border-neutral-850">
            <h4 className="font-bold text-white mb-1">Direct Coach Access</h4>
            <p className="text-sm text-neutral-400">In-app messaging for grocery questions, low-energy days, and dose-day modifications.</p>
          </div>
        </div>
      </section>

      {/* 5. PRICING ANCHOR */}
      <section id="pricing" className="px-5 py-16 mx-auto max-w-3xl border-t border-neutral-900">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Investment</span>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mt-1">
            Transparent Coaching Investment
          </h2>
        </div>

        <div className="bg-neutral-900 border-2 border-amber-400 rounded-2xl p-8 relative shadow-2xl">
          <div className="absolute -top-3.5 right-6 bg-amber-400 text-neutral-950 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
            12-Week Guided Programme
          </div>
          <h3 className="text-xl font-bold text-white">Full 1-on-1 Online Coaching</h3>
          <p className="text-sm text-neutral-400 mt-1">Comprehensive resistance training, nutrition, and weekly audits.</p>

          <div className="my-6">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-white">$49</span>
              <span className="text-neutral-300 text-base font-medium">NZD / week</span>
            </div>
            <p className="text-xs text-neutral-400 mt-1">
              Billed weekly · Approx. $29 USD / £24 GBP / $45 AUD
            </p>
          </div>

          <ul className="space-y-3 text-sm text-neutral-300 mb-8 border-t border-neutral-800 pt-6">
            <li className="flex items-center gap-2.5">
              <span className="text-amber-400 font-bold">✓</span> Bespoke home or gym resistance programme
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-amber-400 font-bold">✓</span> Low-appetite protein and nutrition strategies
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-amber-400 font-bold">✓</span> Weekly video analysis & check-in adjustments
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-amber-400 font-bold">✓</span> Direct in-app messaging and technique analysis
            </li>
          </ul>

          <a
            href="#apply-now"
            className="block w-full py-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-lg text-center transition-colors shadow-lg shadow-amber-400/10"
          >
            Apply for Online Coaching
          </a>
        </div>
      </section>

      {/* 6. CONVERSION CAPTURE FORM */}
      <section id="apply-now" className="px-5 py-16 mx-auto max-w-2xl border-t border-neutral-900">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Apply for Coaching</h2>
          <p className="text-sm text-neutral-400 mt-2">
            Fill out your details below to schedule your onboarding call and reserve your roster spot.
          </p>
        </div>

        {status === 'success' ? (
          <div className="p-6 bg-amber-400/10 border border-amber-400/30 rounded-xl text-center">
            <h3 className="text-lg font-bold text-amber-400">Application Received</h3>
            <p className="text-sm text-neutral-300 mt-2">
              Thanks for submitting. We will review your goals and reach out within 24 hours to organise your intro review.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 bg-neutral-900/50 p-6 sm:p-8 rounded-2xl border border-neutral-850">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white text-sm focus:outline-none focus:border-amber-400"
                placeholder="e.g. Sarah Jenkins"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white text-sm focus:outline-none focus:border-amber-400"
                  placeholder="sarah@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  Phone / Mobile
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white text-sm focus:outline-none focus:border-amber-400"
                  placeholder="+64 21 000 0000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  Primary Focus
                </label>
                <select
                  value={formData.coachingFocus}
                  onChange={(e) => setFormData({ ...formData, coachingFocus: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white text-sm focus:outline-none focus:border-amber-400"
                >
                  <option value="glp1">GLP-1 Medication Muscle Defense</option>
                  <option value="fat-loss">Fat Loss & Joint-Safe Strength</option>
                  <option value="menopause">Midlife & Menopause Resistance</option>
                  <option value="hypertrophy">Muscle Hypertrophy / Recomposition</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  Training Setup
                </label>
                <select
                  value={formData.trainingLocation}
                  onChange={(e) => setFormData({ ...formData, trainingLocation: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white text-sm focus:outline-none focus:border-amber-400"
                >
                  <option value="gym">Commercial Gym Membership</option>
                  <option value="home-dumbbells">Home (Dumbbells / Bands)</option>
                  <option value="home-barbell">Home (Full Rack / Barbell)</option>
                  <option value="bodyweight">Bodyweight Only / Starting Out</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                Tell us about your current situation & goals
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white text-sm focus:outline-none focus:border-amber-400"
                placeholder="Current dosage/medication (if applicable), injury history, or specific challenges..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-lg transition-colors mt-2"
            >
              {status === 'loading' ? 'Submitting Application...' : 'Apply for Coaching'}
            </button>
            {status === 'error' && (
              <p className="text-red-400 text-xs text-center mt-2">
                There was an issue sending your details. Please email info@wrkpersonaltraining.co.nz directly.
              </p>
            )}
          </form>
        )}
      </section>

      {/* 7. INTERACTIVE ACCORDION FAQ */}
      <section className="px-5 py-12 mx-auto max-w-3xl border-t border-neutral-900">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Frequently Asked Questions</span>
          <h2 className="text-2xl font-bold text-white mt-1">Common Questions</h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="border border-neutral-850 bg-neutral-900/40 rounded-xl overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-5 py-4 text-left font-semibold text-white flex justify-between items-center gap-4 hover:text-amber-400 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-neutral-500 font-bold text-lg">
                  {openFaq === idx ? '−' : '+'}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-4 text-sm text-neutral-400 leading-relaxed border-t border-neutral-850/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 8. MOBILE STICKY CONVERSION BAR (Mobile viewports only) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3.5 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 md:hidden flex items-center justify-between gap-3 shadow-2xl">
        <div>
          <span className="block text-[11px] font-medium text-neutral-400">12-Wk Remote Coaching</span>
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-extrabold text-amber-400">$49</span>
            <span className="text-xs text-neutral-400">NZD/wk</span>
          </div>
        </div>
        <a
          href="#apply-now"
          className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-lg text-sm transition-colors shadow-md"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
