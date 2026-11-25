'use client';

import React, { useState } from 'react';
import { trackEvent } from '../../utils/analytics';
import { PageHeroBanner } from '../../components/PageHeroBanner';

const FAQS = [
  {
    q: 'Do I need a commercial gym membership?',
    a: 'Not at all. Your programme is built around whatever equipment you actually have. Whether that is a local gym, a couple of dumbbells in the garage, or just bodyweight at home in the lounge, we make it work cleanly.',
  },
  {
    q: 'What if I am having a flat week or feeling wiped out on a GLP-1?',
    a: 'You just let me know. We build your week with plenty of breathing room—if work goes sideways, sleep is rough, or a medication dose leaves you feeling flat, we dial the session back so you keep your momentum without burning out.',
  },
  {
    q: 'How does online coaching actually work day to day?',
    a: 'Everything lives inside the WRK training app: your workouts, clear exercise demo videos, progress tracking, and our direct message thread. Every week you check in, we review any lifting clips you want looked at, and I adjust the next week around your life.',
  },
  {
    q: 'Is there a long-term lock-in contract?',
    a: 'No endless lock-ins. We work in straightforward 12-week blocks so your body has enough consistent time to build real strength and feel the difference. On our quick intro chat, I will talk you through the simple weekly coaching options before you decide anything.',
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

      const result = await res.json().catch(() => ({}));
      if (!res.ok || result.success !== true) throw new Error('Submission failed');

      trackEvent('online_coaching_application', {
        event_category: 'conversion',
        coaching_type: 'remote_online',
      });

      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="relative min-h-screen bg-cream text-forest antialiased selection:bg-forest selection:text-cream pb-24 md:pb-12">
      {/* 1. HERO SECTION */}
      <PageHeroBanner
        imageSrc="/images/banner-plans.jpg"
        imageAlt="Online personal training setup with dumbbells in a warm sunlit home training space"
        align="center"
        eyebrow="1:1 ONLINE COACHING · NEW ZEALAND & WORLDWIDE"
        title={
          <>
            Real coaching in your pocket, <br className="hidden sm:inline" />
            <span className="text-cream/90">built around your actual week.</span>
          </>
        }
        subtitle="Whether you train at a local gym, in the garage, or in your lounge, we build a straightforward strength and habit programme that fits your energy and schedule—whether you are getting back into routine or protecting muscle on a GLP-1."
      >
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-cream/85 font-medium">
          <span className="flex items-center gap-1.5"><strong className="text-citron font-bold">✓</strong> Tailored to your gear</span>
          <span className="text-cream/35 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5"><strong className="text-citron font-bold">✓</strong> No burnout workouts</span>
          <span className="text-cream/35 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5"><strong className="text-citron font-bold">✓</strong> Weekly check-ins with Hayden</span>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#apply-now"
            className="w-full sm:w-auto px-8 py-3.5 bg-citron hover:brightness-95 text-forest border border-forest/20 font-bold rounded-lg transition-all text-center shadow-lg"
          >
            Chat With Hayden
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-6 py-3.5 bg-forest-deep/65 hover:bg-forest-deep/85 text-cream font-semibold rounded-lg border border-cream/35 transition-colors text-center backdrop-blur-sm"
          >
            See How Online Coaching Works
          </a>
        </div>
      </PageHeroBanner>

      {/* 2. PLAIN-ENGLISH PERSPECTIVE CALLOUT */}
      <section className="px-5 py-12 mx-auto max-w-4xl">
        <div className="p-8 bg-quiet rounded-2xl border border-forest/15 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="shrink-0 md:w-56">
            <span className="text-xs uppercase tracking-widest font-semibold text-forest/70 block mb-1">
              Plain-English Rule
            </span>
            <span className="font-serif text-3xl text-forest tracking-tight block">
              Strength comes first.
            </span>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-forest/15 pt-4 md:pt-0 md:pl-6 text-sm text-forest/85 leading-relaxed">
            <strong className="text-forest block mb-1">Built for Real Energy Levels</strong>
            Most online programmes hand you a generic template written for someone with two hours a day and zero responsibilities. Real life does not look like that. Whether you are balancing work and family—or eating less while on a GLP-1—your body needs a clear, consistent reason to keep strong muscle and usable energy, not gruelling sessions that wipe you out for three days.
          </div>
        </div>
      </section>

      {/* 3. HOW WE TRAIN (3 PILLARS) */}
      <section id="how-it-works" className="px-5 py-12 mx-auto max-w-5xl border-t border-forest/10">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-forest">How We Train</span>
          <h2 className="font-serif text-2xl tracking-tight text-forest sm:text-3xl mt-1">
            Simple, Consistent Coaching—Translated to Real Life
          </h2>
          <p className="text-sm text-forest/75 mt-2 max-w-xl mx-auto">
            No fitness-textbook jargon or rigid spreadsheets. Just three practical pillars shaped around your week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-quiet rounded-xl border border-forest/15 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-forest/65 mb-1">01 · STRENGTH THAT FITS</div>
              <h3 className="text-lg font-bold text-forest mb-2">Keep Your Body Capable</h3>
              <p className="text-sm text-forest/80 leading-relaxed">
                Two or three sensible strength sessions a week using whatever gear you have. We build you up gradually so everyday things—carrying groceries, climbing stairs, walking the hills—feel noticeably easier.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-forest/10 text-xs font-medium text-forest">
              Focus: Gradual strength around your joints
            </div>
          </div>

          <div className="p-6 bg-quiet rounded-xl border border-forest/15 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-forest/65 mb-1">02 · EVERYDAY FOOD</div>
              <h3 className="text-lg font-bold text-forest mb-2">Simple Protein &amp; Daily Habits</h3>
              <p className="text-sm text-forest/80 leading-relaxed">
                Plain-English guidance on hitting enough protein and fibre without cooking separate meals for the household—or forcing down heavy portions if your appetite is lower on a GLP-1.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-forest/10 text-xs font-medium text-forest">
              Focus: Practical meals, zero food guilt
            </div>
          </div>

          <div className="p-6 bg-quiet rounded-xl border border-forest/15 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-forest/65 mb-1">03 · REAL-LIFE PACING</div>
              <h3 className="text-lg font-bold text-forest mb-2">Adjusted When Life Gets Busy</h3>
              <p className="text-sm text-forest/80 leading-relaxed">
                Tired after a big week at work, travelling, or having a flat day after an injection? Message me and we dial the session back so you stay consistent without feeling wrung out.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-forest/10 text-xs font-medium text-forest">
              Focus: Consistency over perfection
            </div>
          </div>
        </div>
      </section>

      {/* 4. COACHING DELIVERABLES */}
      <section className="px-5 py-12 mx-auto max-w-4xl border-t border-forest/10">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-forest">What&apos;s Included</span>
          <h2 className="font-serif text-2xl tracking-tight text-forest sm:text-3xl mt-1">
            Proper Support, Wherever You Live
          </h2>
          <p className="text-sm text-forest/75 mt-2">
            All the calm structure of working together in Addington, delivered cleanly through the WRK app.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 bg-quiet rounded-xl border border-forest/15">
            <h4 className="font-bold text-forest mb-1">The WRK Training App</h4>
            <p className="text-sm text-forest/80">Your personalised sessions, clear video demos, and easy weight tracking all sitting in one tidy place on your phone.</p>
          </div>
          <div className="p-5 bg-quiet rounded-xl border border-forest/15">
            <h4 className="font-bold text-forest mb-1">Video Technique Checks</h4>
            <p className="text-sm text-forest/80">Flick a quick lifting clip into the app anytime and I will send back straightforward pointers so your joints stay happy.</p>
          </div>
          <div className="p-5 bg-quiet rounded-xl border border-forest/15">
            <h4 className="font-bold text-forest mb-1">Weekly Check-Ins</h4>
            <p className="text-sm text-forest/80">A calm weekly look at how your energy, sleep, and sessions actually felt—so we tweak the plan around real life.</p>
          </div>
          <div className="p-5 bg-quiet rounded-xl border border-forest/15">
            <h4 className="font-bold text-forest mb-1">Direct Message Access</h4>
            <p className="text-sm text-forest/80">Got a quick question at the supermarket or need to swap a workout on a busy day? Drop me a note directly in-app.</p>
          </div>
        </div>
      </section>

      {/* 5. HOW COACHING IS SET UP (NO PUBLIC PRICING) */}
      <section id="setup" className="px-5 py-16 mx-auto max-w-3xl border-t border-forest/10">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-forest">How We Work Together</span>
          <h2 className="font-serif text-2xl tracking-tight text-forest sm:text-3xl mt-1">
            Built Around 12-Week Blocks
          </h2>
        </div>

        <div className="bg-forest text-cream border border-forest-deep rounded-2xl p-8 relative shadow-xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-citron mb-2">
            12-Week Guided Coaching
          </div>
          <h3 className="font-serif text-2xl text-cream">1:1 Online Coaching with Hayden</h3>
          <p className="text-sm text-cream/80 mt-2 max-w-xl leading-relaxed">
            Enough consistent runway to build lasting strength habits—without locking you into an endless gym contract.
          </p>

          <ul className="space-y-3 text-sm text-cream/90 my-8 border-t border-cream/15 pt-6">
            <li className="flex items-start gap-2.5">
              <span className="text-citron font-bold">✓</span>
              <span>Personalised home or gym strength programme tailored to your gear and joints</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-citron font-bold">✓</span>
              <span>Practical protein, fibre, and hydration habits that fit real meals</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-citron font-bold">✓</span>
              <span>Weekly check-ins, video form feedback, and pacing adjustments</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-citron font-bold">✓</span>
              <span>Simple weekly options talked through openly on your intro chat—no hard sell</span>
            </li>
          </ul>

          <a
            href="#apply-now"
            className="block w-full py-4 bg-citron hover:brightness-95 text-forest border border-forest/20 font-bold rounded-lg text-center transition-all shadow-sm"
          >
            Line Up a Quick Chat with Hayden
          </a>
        </div>
      </section>

      {/* 6. CONVERSION CAPTURE FORM */}
      <section id="apply-now" className="px-5 py-16 mx-auto max-w-2xl border-t border-forest/10">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl tracking-tight text-forest sm:text-3xl">
            Let&apos;s See If Online Coaching Fits
          </h2>
          <p className="text-sm text-forest/75 mt-2">
            Leave a few details below and I will reply personally within one working day to line up a relaxed chat.
          </p>
        </div>

        {status === 'success' ? (
          <div className="p-6 bg-quiet border border-forest/25 rounded-xl text-center">
            <h3 className="text-lg font-bold text-forest">Got It — Thanks!</h3>
            <p className="text-sm text-forest/85 mt-2">
              Thanks for getting in touch. I will read through your notes and email you back within one working day to sort out a quick chat.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 bg-quiet p-6 sm:p-8 rounded-2xl border border-forest/15">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-cream border border-forest/20 rounded-lg text-forest text-sm placeholder:text-forest/45 focus:outline-none focus:border-forest"
                placeholder="Your full name"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-cream border border-forest/20 rounded-lg text-forest text-sm placeholder:text-forest/45 focus:outline-none focus:border-forest"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1">
                  Phone / Mobile
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-cream border border-forest/20 rounded-lg text-forest text-sm placeholder:text-forest/45 focus:outline-none focus:border-forest"
                  placeholder="+64 21 000 0000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1">
                  What Matters Most Right Now?
                </label>
                <select
                  value={formData.coachingFocus}
                  onChange={(e) => setFormData({ ...formData, coachingFocus: e.target.value })}
                  className="w-full px-4 py-3 bg-cream border border-forest/20 rounded-lg text-forest text-sm focus:outline-none focus:border-forest"
                >
                  <option value="glp1">GLP-1 Muscle &amp; Strength Support</option>
                  <option value="fat-loss">Getting Stronger &amp; Joint-Friendly Fitness</option>
                  <option value="menopause">Midlife Strength, Energy &amp; Confidence</option>
                  <option value="hypertrophy">Coming Back After a Break or Old Injury</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1">
                  Where Will You Train?
                </label>
                <select
                  value={formData.trainingLocation}
                  onChange={(e) => setFormData({ ...formData, trainingLocation: e.target.value })}
                  className="w-full px-4 py-3 bg-cream border border-forest/20 rounded-lg text-forest text-sm focus:outline-none focus:border-forest"
                >
                  <option value="gym">Local Gym Membership</option>
                  <option value="home-dumbbells">At Home (Dumbbells / Bands)</option>
                  <option value="home-barbell">At Home (Rack / Barbell Setup)</option>
                  <option value="bodyweight">Bodyweight Only / Starting Fresh</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1">
                Tell me a bit about where you are at
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 bg-cream border border-forest/20 rounded-lg text-forest text-sm placeholder:text-forest/45 focus:outline-none focus:border-forest"
                placeholder="Any old niggles, how many days a week feel realistic, or if you are currently on a GLP-1..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-citron hover:brightness-95 text-forest border border-forest/20 font-bold rounded-lg transition-all mt-2"
            >
              {status === 'loading' ? 'Sending to Hayden...' : 'Send & Line Up a Chat'}
            </button>
            {status === 'error' && (
              <p className="text-red-700 bg-red-50 border border-red-200 rounded-lg p-3 text-xs text-center mt-2">
                Something did not go through there. Feel free to email info@wrkpersonaltraining.co.nz directly.
              </p>
            )}
          </form>
        )}
      </section>

      {/* 7. INTERACTIVE ACCORDION FAQ */}
      <section className="px-5 py-12 mx-auto max-w-3xl border-t border-forest/10">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-forest">Frequently Asked Questions</span>
          <h2 className="font-serif text-2xl text-forest mt-1">Common Questions</h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="border border-forest/15 bg-quiet rounded-xl overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-5 py-4 text-left font-semibold text-forest flex justify-between items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <span>{faq.q}</span>
                <span className="text-forest/70 font-bold text-lg">
                  {openFaq === idx ? '−' : '+'}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-4 text-sm text-forest/80 leading-relaxed border-t border-forest/10 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 8. MOBILE STICKY CONVERSION BAR (Mobile viewports only) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3.5 bg-forest/95 backdrop-blur-md border-t border-cream/15 md:hidden flex items-center justify-between gap-3 shadow-2xl">
        <div>
          <span className="block text-[11px] font-semibold uppercase tracking-wider text-citron">1:1 Online Coaching</span>
          <span className="text-xs text-cream/85">With Hayden · WRK App</span>
        </div>
        <a
          href="#apply-now"
          className="px-5 py-2.5 bg-citron hover:brightness-95 text-forest border border-forest/20 font-bold rounded-lg text-sm transition-all shadow-md"
        >
          Chat With Hayden
        </a>
      </div>
    </div>
  );
}
