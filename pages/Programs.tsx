import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Globe, Shield, Activity, Flame, Dumbbell, Utensils, Smartphone, Scale, Droplets, CheckCircle2 } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export const Programs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-canvas text-charcoal min-h-screen font-sans selection:bg-spruce-800 selection:text-sand-50">
      <SeoHead
        title="GLP-1 Fitness Programs & 12-Week Coaching | Christchurch | WRK"
        description="Explore our 12-week GLP-1 Fitness Programs in Christchurch and online. Specialist strength coaching and muscle preservation pathways for active weight loss and maintenance."
      />

      {/* 1. Hero Header */}
      <section className="bg-canvas pt-12 pb-14 text-center px-4 max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.2em] font-sans uppercase text-spruce-800 font-semibold mb-3">
          COACHING & PATHWAYS
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight max-w-3xl mx-auto mb-4">
          Targeted Coaching for Every Phase.
        </h1>
        <p className="text-charcoal/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          The goal isn't simply to weigh less. It’s to ensure that when the weight comes off, you maintain your resting metabolic rate, preserve joint stability, and carry everyday physical energy into your life and work.
        </p>
      </section>

      {/* 2. The 3 Phases / Triage Band */}
      <section className="bg-sand-100/60 py-12 px-6 border-y border-charcoal/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl text-charcoal text-center mb-8">
            Choose Your Current Phase
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 border border-charcoal/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 bg-sand-100 px-2 py-0.5 rounded">
                    01 · Active Weight Loss
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                  GLP-1 Strength & Muscle
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Prioritising progressive resistance training and protein anchoring to safeguard lean tissue and preserve metabolic rate during caloric deficits.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                Focus: Muscle preservation & 1.2–1.6g/kg protein
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 border border-charcoal/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 bg-sand-100 px-2 py-0.5 rounded">
                    02 · Transition Phase
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                  Transition & Maintenance
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Shifting focus from scale drop to building cardiovascular stamina, routine, energy, and joint resilience as target body composition nears.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                Focus: Stamina base & energetic stability
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 border border-charcoal/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 bg-sand-100 px-2 py-0.5 rounded">
                    03 · Sustainable Lifestyle
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                  Forever Strong
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Building permanent movement and lifting habits designed to outlast medication weaning—protecting resting metabolic rate, joint resilience, and everyday physical capability.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-charcoal/5 text-xs text-charcoal/60">
                Focus: Habit longevity & total autonomy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Delivery Models (The 2 Core Offers) */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">DELIVERY FORMATS</span>
          <h2 className="font-serif text-3xl text-charcoal tracking-tight">Two Ways to Work Together</h2>
          <p className="text-sm text-charcoal/70 mt-2">Choose hands-on private Christchurch coaching or remote app-based programming worldwide.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card A: In-Person */}
          <div className="bg-white rounded-2xl p-8 border border-charcoal/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 bg-sand-100 px-3 py-1 rounded">
                  IN-PERSON COACHING
                </span>
                <span className="flex items-center text-xs text-charcoal/60 font-medium">
                  <MapPin size={14} className="mr-1 text-spruce-800" />
                  Addington, Christchurch
                </span>
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-2">
                Private Studio Coaching
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed mb-6">
                Hands-on lifting technique, private facility access, and in-person body composition accountability tailored to your weekly energy.
              </p>
              <ul className="space-y-2.5 text-xs text-charcoal/80 mb-8 border-t border-charcoal/5 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-spruce-800 shrink-0" />
                  <span>1-on-1 private training studio (no crowds or waiting)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-spruce-800 shrink-0" />
                  <span>Bio-impedance & circumference muscle tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-spruce-800 shrink-0" />
                  <span>Immediate form feedback on compound resistance lifts</span>
                </li>
              </ul>
            </div>
            <div>
              <Link
                to="/contact"
                className="bg-spruce-800 text-sand-50 hover:bg-spruce-900 px-6 py-3 rounded-md text-xs uppercase tracking-wider font-semibold text-center block w-full transition-colors shadow-sm"
              >
                Book Studio Consult
              </Link>
            </div>
          </div>

          {/* Card B: Online */}
          <div className="bg-white rounded-2xl p-8 border border-charcoal/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-spruce-800 bg-sand-100 px-3 py-1 rounded">
                  REMOTE COACHING
                </span>
                <span className="flex items-center text-xs text-charcoal/60 font-medium">
                  <Globe size={14} className="mr-1 text-spruce-800" />
                  Flexible · Worldwide
                </span>
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-2">
                Online Coaching Worldwide
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed mb-6">
                Custom programming delivered in the WRK app with weekly video check-ins, volume adjustments, and direct coach messaging.
              </p>
              <ul className="space-y-2.5 text-xs text-charcoal/80 mb-8 border-t border-charcoal/5 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-spruce-800 shrink-0" />
                  <span>Delivered via WRK mobile app with video exercise cues</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-spruce-800 shrink-0" />
                  <span>Weekly video feedback and medication titration adjustments</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-spruce-800 shrink-0" />
                  <span>Direct message access for real-time training & meal questions</span>
                </li>
              </ul>
            </div>
            <div>
              <Link
                to="/online-coaching"
                className="border border-spruce-800 text-spruce-800 hover:bg-spruce-800 hover:text-sand-50 px-6 py-3 rounded-md text-xs uppercase tracking-wider font-semibold text-center block w-full transition-colors"
              >
                Apply for Online Coaching
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What Every 12-Week Pathway Delivers */}
      <section className="py-16 px-6 max-w-5xl mx-auto border-t border-charcoal/5">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-2">EVIDENCE-BASED METHOD</span>
          <h2 className="font-serif text-3xl text-charcoal tracking-tight">The 12-Week Standard</h2>
          <p className="text-sm text-charcoal/70 mt-2 max-w-lg mx-auto">
            Regardless of your delivery format, every 12-week training protocol includes our foundational coaching pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-charcoal/5 p-6 shadow-sm">
            <div className="w-8 h-8 rounded-md bg-sand-100 text-spruce-800 flex items-center justify-center mb-3">
              <Dumbbell size={18} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">Progressive Overload</h3>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              Program updates week-over-week ensuring consistent mechanical tension for muscle preservation.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-charcoal/5 p-6 shadow-sm">
            <div className="w-8 h-8 rounded-md bg-sand-100 text-spruce-800 flex items-center justify-center mb-3">
              <Utensils size={18} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">Low-Appetite Fueling</h3>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              Practical protein targets and meal anchors designed to be easily digested without nausea.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-charcoal/5 p-6 shadow-sm">
            <div className="w-8 h-8 rounded-md bg-sand-100 text-spruce-800 flex items-center justify-center mb-3">
              <Smartphone size={18} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">WRK App Ecosystem</h3>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              Workouts, habit tracking, metrics, and high-definition video demonstrations on your phone.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-charcoal/5 p-6 shadow-sm">
            <div className="w-8 h-8 rounded-md bg-sand-100 text-spruce-800 flex items-center justify-center mb-3">
              <Scale size={18} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">Weekly Dose Matching</h3>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              Volume and intensity tuned to medication titration schedules and systemic energy levels.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-charcoal/5 p-6 shadow-sm">
            <div className="w-8 h-8 rounded-md bg-sand-100 text-spruce-800 flex items-center justify-center mb-3">
              <Droplets size={18} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">GI & Fluid Protocols</h3>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              Hydration and electrolyte systems built specifically for delayed gastric emptying.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-charcoal/5 p-6 shadow-sm">
            <div className="w-8 h-8 rounded-md bg-sand-100 text-spruce-800 flex items-center justify-center mb-3">
              <CheckCircle2 size={18} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">Long-Term Autonomy</h3>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              Permanent lifting and lifestyle habits designed to maintain fitness well beyond medication.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Triage / Bottom Callout */}
      <section className="bg-sand-100 py-16 px-6 text-center border-t border-charcoal/5">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal tracking-tight">
            Not sure which pathway or delivery fits your routine?
          </h2>
          <p className="text-charcoal/80 text-sm md:text-base leading-relaxed">
            Take the 2-minute assessment to evaluate your training consistency and protein baseline.
          </p>
          <div className="pt-2">
            <Link
              to="/assessment"
              className="inline-flex items-center justify-center bg-spruce-800 text-sand-50 hover:bg-spruce-900 rounded-md px-8 py-3.5 text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
            >
              Take the Free GLP-1 Fitness Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
