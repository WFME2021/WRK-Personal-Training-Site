import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Globe, Shield, Activity, Flame, Dumbbell, Utensils, Smartphone, Scale, Droplets, CheckCircle2 } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export const Programs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-cream text-forest min-h-screen font-sans selection:bg-forest selection:text-cream">
      <SeoHead
        title="GLP-1 Fitness Programs & 12-Week Coaching | Christchurch | WRK"
        description="Explore our 12-week GLP-1 Fitness Programs in Christchurch and online. Specialist strength coaching and muscle preservation pathways for active weight loss and maintenance."
      />

      {/* 1. Hero Header */}
      <section className="bg-cream pt-12 pb-10 text-center px-4 max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.2em] font-sans uppercase text-forest font-semibold mb-3">
          COACHING & PATHWAYS
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest tracking-tight max-w-3xl mx-auto mb-4">
          Targeted Coaching for Every Phase.
        </h1>
        <p className="text-forest/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          The goal isn't simply to weigh less. It’s to ensure that when the weight comes off, you maintain your resting metabolic rate, preserve joint stability, and carry everyday physical energy into your life and work.
        </p>
      </section>

      {/* Hero Lifestyle Feature Banner */}
      <div className="mb-14 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl overflow-hidden shadow-sm border border-forest/15 aspect-[16/9] md:aspect-[21/9] relative bg-quiet">
          <img 
            src="https://i.postimg.cc/J4Wmf5y2/pexels-truckrun-19373190.jpg" 
            alt="Active lifestyle and vitality on GLP-1 therapy" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest/25 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-cream">
            <span className="text-xs uppercase tracking-widest font-semibold text-citron block mb-1">
              THE WRK PHILOSOPHY
            </span>
            <p className="font-serif text-lg sm:text-xl text-cream max-w-xl">
              Protect your muscle, maintain your energy, and enjoy everyday capability.
            </p>
          </div>
        </div>
      </div>

      {/* 2. The 3 Phases / Triage Band */}
      <section className="bg-quiet py-12 px-6 border-y border-forest/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl text-forest text-center mb-8">
            Choose Your Current Phase
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-cream rounded-xl p-6 border border-forest/15 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-forest bg-quiet border border-forest/10 px-2.5 py-0.5 rounded">
                    01 · Active Weight Loss
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-forest mb-2">
                  GLP-1 Strength & Muscle
                </h3>
                <p className="text-sm text-forest/80 leading-relaxed">
                  Prioritising progressive resistance training and protein anchoring to safeguard lean tissue and preserve metabolic rate during caloric deficits.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-forest/65">
                Focus: Muscle preservation & 1.2–1.6g/kg protein
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-cream rounded-xl p-6 border border-forest/15 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-forest bg-quiet border border-forest/10 px-2.5 py-0.5 rounded">
                    02 · Transition Phase
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-forest mb-2">
                  Transition & Maintenance
                </h3>
                <p className="text-sm text-forest/80 leading-relaxed">
                  Shifting focus from scale drop to building cardiovascular stamina, routine, energy, and joint resilience as target body composition nears.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-forest/65">
                Focus: Stamina base & energetic stability
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-cream rounded-xl p-6 border border-forest/15 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-forest bg-quiet border border-forest/10 px-2.5 py-0.5 rounded">
                    03 · Sustainable Lifestyle
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-forest mb-2">
                  Forever Strong
                </h3>
                <p className="text-sm text-forest/80 leading-relaxed">
                  Building permanent movement and lifting habits designed to outlast medication weaning—protecting resting metabolic rate, joint resilience, and everyday physical capability.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-forest/65">
                Focus: Habit longevity & total autonomy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Delivery Models (The 2 Core Offers) */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-forest block mb-2">DELIVERY FORMATS</span>
          <h2 className="font-serif text-3xl text-forest tracking-tight">Two Ways to Work Together</h2>
          <p className="text-sm text-forest/75 mt-2">Choose hands-on private Christchurch coaching or remote app-based programming worldwide.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card A: In-Person */}
          <div className="bg-quiet rounded-2xl p-8 border border-forest/15 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4 gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-forest bg-cream border border-forest/15 px-3 py-1 rounded">
                  IN-PERSON COACHING
                </span>
                <span className="flex items-center text-xs text-forest/70 font-medium">
                  <MapPin size={14} className="mr-1 text-forest shrink-0" />
                  Semi-private coaching sessions at 12 Show Place, Addington
                </span>
              </div>
              <h3 className="font-serif text-2xl text-forest mb-2">
                In-Person Personal Training
              </h3>
              <p className="text-sm text-forest/80 leading-relaxed mb-6">
                Hands-on lifting technique, boutique facility access, and in-person body composition accountability tailored to your weekly energy.
              </p>
              <ul className="space-y-2.5 text-xs text-forest/85 mb-8 border-t border-forest/10 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-forest shrink-0" />
                  <span>1-on-1 boutique facility coaching (no crowds or waiting)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-forest shrink-0" />
                  <span>Bio-impedance & circumference muscle tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-forest shrink-0" />
                  <span>Immediate form feedback on compound resistance lifts</span>
                </li>
              </ul>
            </div>
            <div>
              <Link
                to="/contact"
                className="bg-forest text-cream hover:bg-forest-deep px-6 py-3 rounded-md text-xs uppercase tracking-wider font-semibold text-center block w-full transition-colors shadow-sm"
              >
                Book In-Person Consult
              </Link>
            </div>
          </div>

          {/* Card B: Online */}
          <div className="bg-quiet rounded-2xl p-8 border border-forest/15 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-forest bg-cream border border-forest/15 px-3 py-1 rounded">
                  REMOTE COACHING
                </span>
                <span className="flex items-center text-xs text-forest/70 font-medium">
                  <Globe size={14} className="mr-1 text-forest" />
                  Flexible · Worldwide
                </span>
              </div>
              <h3 className="font-serif text-2xl text-forest mb-2">
                Online Coaching Worldwide
              </h3>
              <p className="text-sm text-forest/80 leading-relaxed mb-6">
                Custom programming delivered in the WRK app with weekly video check-ins, volume adjustments, and direct coach messaging.
              </p>
              <ul className="space-y-2.5 text-xs text-forest/85 mb-8 border-t border-forest/10 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-forest shrink-0" />
                  <span>Delivered via WRK mobile app with video exercise cues</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-forest shrink-0" />
                  <span>Weekly video feedback and medication titration adjustments</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-forest shrink-0" />
                  <span>Direct message access for real-time training & meal questions</span>
                </li>
              </ul>
            </div>
            <div>
              <Link
                to="/online-coaching"
                className="bg-cream border border-forest/30 text-forest hover:bg-forest hover:text-cream px-6 py-3 rounded-md text-xs uppercase tracking-wider font-semibold text-center block w-full transition-colors"
              >
                Apply for Online Coaching
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What Every 12-Week Pathway Delivers */}
      <section className="py-16 px-6 max-w-5xl mx-auto border-t border-forest/10">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-forest block mb-2">EVIDENCE-BASED METHOD</span>
          <h2 className="font-serif text-3xl text-forest tracking-tight">The 12-Week Standard</h2>
          <p className="text-sm text-forest/75 mt-2 max-w-lg mx-auto">
            Regardless of your delivery format, every 12-week training protocol includes our foundational coaching pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-quiet rounded-xl border border-forest/15 p-6 shadow-sm">
            <div className="w-8 h-8 rounded-md bg-cream border border-forest/10 text-forest flex items-center justify-center mb-3">
              <Dumbbell size={18} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-forest mb-2">Progressive Overload</h3>
            <p className="text-sm text-forest/75 leading-relaxed">
              Programme updates week-over-week ensuring consistent mechanical tension for muscle preservation.
            </p>
          </div>

          <div className="bg-quiet rounded-xl border border-forest/15 p-6 shadow-sm">
            <div className="w-8 h-8 rounded-md bg-cream border border-forest/10 text-forest flex items-center justify-center mb-3">
              <Utensils size={18} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-forest mb-2">Low-Appetite Fuelling</h3>
            <p className="text-sm text-forest/75 leading-relaxed">
              Practical protein targets and meal anchors designed to be easily digested without nausea.
            </p>
          </div>

          <div className="bg-quiet rounded-xl border border-forest/15 p-6 shadow-sm">
            <div className="w-8 h-8 rounded-md bg-cream border border-forest/10 text-forest flex items-center justify-center mb-3">
              <Smartphone size={18} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-forest mb-2">WRK App Ecosystem</h3>
            <p className="text-sm text-forest/75 leading-relaxed">
              Workouts, habit tracking, metrics, and high-definition video demonstrations on your phone.
            </p>
          </div>

          <div className="bg-quiet rounded-xl border border-forest/15 p-6 shadow-sm">
            <div className="w-8 h-8 rounded-md bg-cream border border-forest/10 text-forest flex items-center justify-center mb-3">
              <Scale size={18} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-forest mb-2">Weekly Dose Matching</h3>
            <p className="text-sm text-forest/75 leading-relaxed">
              Volume and intensity tuned to medication titration schedules and systemic energy levels.
            </p>
          </div>

          <div className="bg-quiet rounded-xl border border-forest/15 p-6 shadow-sm">
            <div className="w-8 h-8 rounded-md bg-cream border border-forest/10 text-forest flex items-center justify-center mb-3">
              <Droplets size={18} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-forest mb-2">GI & Fluid Protocols</h3>
            <p className="text-sm text-forest/75 leading-relaxed">
              Hydration and electrolyte systems built specifically for delayed gastric emptying.
            </p>
          </div>

          <div className="bg-quiet rounded-xl border border-forest/15 p-6 shadow-sm">
            <div className="w-8 h-8 rounded-md bg-cream border border-forest/10 text-forest flex items-center justify-center mb-3">
              <CheckCircle2 size={18} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-forest mb-2">Long-Term Autonomy</h3>
            <p className="text-sm text-forest/75 leading-relaxed">
              Permanent lifting and lifestyle habits designed to maintain fitness well beyond medication.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Triage / Bottom Callout */}
      <section className="bg-forest text-cream py-16 px-6 text-center border-t border-forest-deep">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="font-serif text-2xl md:text-3xl text-cream tracking-tight">
            Not sure which pathway or delivery fits your routine?
          </h2>
          <p className="text-cream/85 text-sm md:text-base leading-relaxed">
            Take the 2-minute assessment to evaluate your training consistency and protein baseline.
          </p>
          <div className="pt-2">
            <Link
              to="/assessment"
              className="inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/20 rounded-md px-8 py-3.5 text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
            >
              Take the Free GLP-1 Fitness Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
