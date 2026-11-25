import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Loader2,
  RotateCcw,
  Smartphone,
} from 'lucide-react';
import {
  ENABLE_SUMMER_MOMENTUM,
  ENABLE_SELF_GUIDED_PLANS,
  MAILERLITE_STARTER_FORM_URL,
  MYPTHUB_FREE_STARTER_URL,
  isCheckoutUrlConfigured,
} from '../../constants';
import { trackEvent } from '../../utils/analytics';

type PriorityId = 'glp1' | 'strength40' | 'restarting' | 'running';
type LocationId = 'addington' | 'gym' | 'home';
type ConsistencyId = 'fresh' | 'hitmiss' | 'consistent';
type SupportId = 'one_on_one' | 'cohort' | 'self_guided' | 'starter';

interface QualifierAnswers {
  priority?: PriorityId;
  location?: LocationId;
  consistency?: ConsistencyId;
  support?: SupportId;
}

interface QuestionOption<T extends string> {
  id: T;
  label: string;
}

interface StepConfig<K extends keyof QualifierAnswers> {
  key: K;
  prompt: string;
  options: QuestionOption<NonNullable<QualifierAnswers[K]>>[];
}

const STEPS: [
  StepConfig<'priority'>,
  StepConfig<'location'>,
  StepConfig<'consistency'>,
  StepConfig<'support'>,
] = [
  {
    key: 'priority',
    prompt: 'What is your main priority right now?',
    options: [
      { id: 'glp1', label: 'Protecting muscle & staying on track on a GLP-1 medication' },
      { id: 'strength40', label: 'Building strength, energy & joint confidence (40+)' },
      { id: 'restarting', label: 'Getting started safely after a break from exercise' },
      { id: 'running', label: 'Improving running fitness or balancing weights + running' },
    ],
  },
  {
    key: 'location',
    prompt: 'Where do you prefer to train?',
    options: [
      { id: 'addington', label: 'In-person in Addington, Christchurch' },
      { id: 'gym', label: 'At my own gym' },
      { id: 'home', label: 'At home (minimal or zero equipment)' },
    ],
  },
  {
    key: 'consistency',
    prompt: 'How consistent is your current routine?',
    options: [
      { id: 'fresh', label: 'Starting fresh (0–1 sessions/week)' },
      { id: 'hitmiss', label: 'A bit hit-and-miss (1–2 sessions/week)' },
      { id: 'consistent', label: 'Fairly consistent (3–4 sessions/week, wanting better structure)' },
    ],
  },
  {
    key: 'support',
    prompt: 'What level of support suits you best?',
    options: [
      { id: 'one_on_one', label: 'Hands-on 1:1 coaching & personal accountability' },
      { id: 'cohort', label: 'A guided 6-week group intake (seasonal support)' },
      { id: 'self_guided', label: 'A self-guided plan inside the WRK app' },
      { id: 'starter', label: 'Try a free 7-day starter experience first' },
    ],
  },
];

interface BlueprintResult {
  weeklyRhythm: string;
  nutritionAnchor: string;
  whyThisFits: string;
  routeType: 'coaching' | 'glp1' | 'plans';
}

function buildBlueprint(answers: QualifierAnswers): BlueprintResult {
  const { priority = 'strength40', location = 'gym', consistency = 'fresh', support = 'self_guided' } = answers;

  const venuePhrase =
    location === 'addington'
      ? 'in our quiet Addington studio with Hayden'
      : location === 'home'
      ? 'at home using minimal gear'
      : 'in your local gym';

  let weeklyRhythm = '';
  if (priority === 'running') {
    weeklyRhythm =
      consistency === 'fresh'
        ? `3 balanced sessions/week ${venuePhrase}—two brisk walk-run builds plus one joint-friendly full-body strength session.`
        : `3–4 structured sessions/week ${venuePhrase} combining progressive aerobic runs with two focused strength sessions.`;
  } else if (priority === 'glp1') {
    weeklyRhythm =
      consistency === 'consistent'
        ? `3–4 sensible strength sessions/week ${venuePhrase} focused on compound movements and consistent daily steps.`
        : `3 sensible sessions/week ${venuePhrase} focused on joint-friendly resistance training and manageable daily movement.`;
  } else if (priority === 'restarting') {
    weeklyRhythm = `3 manageable sessions/week ${venuePhrase} built around foundational strength patterns, mobility, and zero burnout.`;
  } else {
    weeklyRhythm =
      consistency === 'consistent'
        ? `3–4 structured sessions/week ${venuePhrase} focused on progressive strength, posture, and joint confidence.`
        : `3 sensible sessions/week ${venuePhrase} focused on joint-friendly full-body strength and daily movement.`;
  }

  let nutritionAnchor = '';
  if (priority === 'glp1') {
    nutritionAnchor =
      'Prioritise easily digestible protein anchors at each meal alongside consistent hydration, especially on lower-appetite days.';
  } else if (priority === 'running') {
    nutritionAnchor =
      'Build meals around a palm-sized protein source, slow-release carbohydrates around run days, and consistent hydration with electrolytes.';
  } else {
    nutritionAnchor =
      'Build meals around a palm-sized protein source, plenty of fibre, and colourful whole foods you actually enjoy eating.';
  }

  let whyThisFits = '';
  if (consistency === 'fresh' || priority === 'restarting') {
    whyThisFits =
      'Starting back with 5-day gym splits almost always stalls by week three. Keeping your weekly target calm and repeatable lets your joints adapt while momentum compounds naturally.';
  } else if (priority === 'glp1') {
    whyThisFits =
      'While medication handles appetite, deliberate resistance work tells your body to preserve lean muscle and energy. A consistent 3-day rhythm keeps fatigue low even during busier weeks.';
  } else if (priority === 'running') {
    whyThisFits =
      'Pairing smart strength work with controlled running volume builds durable knees, hips, and calves without leaving you wrecked for work or family life. Consistency beats heroic sessions every time.';
  } else {
    whyThisFits =
      'After 40, the right programme respects recovery just as much as effort. Focusing on quality strength work 3 to 4 times a week builds real-world resilience without joint wear and tear.';
  }

  let routeType: BlueprintResult['routeType'] = 'plans';
  if (location === 'addington' || support === 'one_on_one') {
    routeType = 'coaching';
  } else if (priority === 'glp1') {
    routeType = 'glp1';
  } else {
    routeType = 'plans';
  }

  return {
    weeklyRhythm,
    nutritionAnchor,
    whyThisFits,
    routeType,
  };
}

interface FindYourFitProps {
  context?: 'home' | 'programs';
}

export const FindYourFit: React.FC<FindYourFitProps> = ({ context = 'home' }) => {
  const [stepIndex, setStepIndex] = useState<number>(0); // 0..3 = questions, 4 = result
  const [answers, setAnswers] = useState<QualifierAnswers>({});

  // Starter Pass form state
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [passStatus, setPassStatus] = useState<'idle' | 'submitting' | 'unlocked' | 'error'>('idle');
  const [passError, setPassError] = useState('');

  const cardRef = useRef<HTMLDivElement | null>(null);
  const starterBoxRef = useRef<HTMLDivElement | null>(null);

  const isResult = stepIndex === STEPS.length;
  const currentStep = !isResult ? STEPS[stepIndex] : null;
  const progressPercent = isResult ? 100 : Math.round(((stepIndex + 1) / STEPS.length) * 100);

  const scrollCardTopOnMobile = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768 && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectOption = (key: keyof QualifierAnswers, value: string) => {
    const updated = { ...answers, [key]: value } as QualifierAnswers;
    setAnswers(updated);

    if (stepIndex < STEPS.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      setStepIndex(STEPS.length);
      trackEvent('find_your_fit_completed', {
        event_category: 'engagement_lead',
        priority: updated.priority || 'unknown',
        location: updated.location || 'unknown',
      });
      setTimeout(scrollCardTopOnMobile, 60);
    }
  };

  const handleBack = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setStepIndex(0);
    setPassStatus('idle');
    setPassError('');
    setTimeout(scrollCardTopOnMobile, 60);
  };

  const scrollToStarterBox = () => {
    if (starterBoxRef.current) {
      starterBoxRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleStarterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = firstName.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setPassStatus('error');
      setPassError('Please enter your first name and a valid email address.');
      return;
    }

    setPassStatus('submitting');
    setPassError('');

    try {
      const endpoint = isCheckoutUrlConfigured(MAILERLITE_STARTER_FORM_URL)
        ? MAILERLITE_STARTER_FORM_URL
        : '/api/starter-pass';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: cleanName,
          email: cleanEmail,
          priority: answers.priority || '',
          location: answers.location || '',
          consistency: answers.consistency || '',
          support: answers.support || '',
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.success === false) {
        throw new Error(data.error || 'Could not process your starter pass request.');
      }

      setPassStatus('unlocked');
      trackEvent('starter_pass_unlocked', {
        event_category: 'engagement_lead',
        priority: answers.priority || 'unknown',
      });
    } catch (err: any) {
      setPassStatus('error');
      setPassError(
        err?.message || 'Unable to send your starter pass right now. Please try again shortly.'
      );
    }
  };

  const blueprint = isResult ? buildBlueprint(answers) : null;
  const starterBoxIsPrimary =
    blueprint?.routeType === 'plans' &&
    (!ENABLE_SELF_GUIDED_PLANS || answers.support === 'starter');
  const starterUrlConfigured = isCheckoutUrlConfigured(MYPTHUB_FREE_STARTER_URL);

  return (
    <div
      id="find-your-fit"
      ref={cardRef}
      className="scroll-mt-20 bg-quiet border border-forest/15 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm max-w-4xl mx-auto"
    >
      {/* Header & Progress */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-forest/75">
            <span>FIND YOUR FIT</span>
            <span aria-hidden="true">·</span>
            <span>{isResult ? 'YOUR BLUEPRINT' : `STEP ${stepIndex + 1} OF ${STEPS.length}`}</span>
          </div>

          {(stepIndex > 0 || isResult) && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest/75 hover:text-forest transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Start Over
            </button>
          )}
        </div>

        <div
          className="w-full h-1.5 bg-cream rounded-full overflow-hidden border border-forest/10"
          role="progressbar"
          aria-valuenow={progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full bg-forest transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Screen */}
      {!isResult && currentStep && (
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl text-forest tracking-tight leading-snug text-balance mb-5">
            {currentStep.prompt}
          </h2>

          <div className="space-y-3">
            {currentStep.options.map((opt) => {
              const isSelected = answers[currentStep.key] === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectOption(currentStep.key, opt.id)}
                  className={`w-full min-h-[52px] text-left px-4 sm:px-5 py-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-cream border-forest text-forest shadow-sm ring-1 ring-forest'
                      : 'bg-cream/85 hover:bg-cream border-forest/15 hover:border-forest/40 text-forest'
                  }`}
                >
                  <span className="text-sm sm:text-base font-medium leading-snug">
                    {opt.label}
                  </span>
                  <span
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? 'bg-forest border-forest text-cream' : 'border-forest/30 bg-cream'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3" />}
                  </span>
                </button>
              );
            })}
          </div>

          {stepIndex > 0 && (
            <div className="mt-6 pt-4 border-t border-forest/10 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-forest/75 hover:text-forest transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </button>
              <span className="text-xs text-forest/65">No email required to see your blueprint</span>
            </div>
          )}
        </div>
      )}

      {/* Tailored Blueprint Result Screen */}
      {isResult && blueprint && (
        <div className="space-y-6">
          <div>
            <span className="text-[11px] uppercase tracking-widest font-semibold text-forest/75 block mb-1.5">
              TAILORED TO YOUR ANSWERS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-forest tracking-tight text-balance">
              Your WRK Starting Blueprint
            </h2>
          </div>

          {/* 3 Practical Takeaways */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-cream rounded-xl border border-forest/15 p-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-forest/70 block mb-2">
                01 · Recommended Weekly Rhythm
              </span>
              <p className="text-sm text-forest leading-relaxed">
                {blueprint.weeklyRhythm}
              </p>
            </div>

            <div className="bg-cream rounded-xl border border-forest/15 p-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-forest/70 block mb-2">
                02 · Key Nutrition Anchor
              </span>
              <p className="text-sm text-forest leading-relaxed">
                {blueprint.nutritionAnchor}
              </p>
            </div>

            <div className="bg-cream rounded-xl border border-forest/15 p-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-forest/70 block mb-2">
                03 · Why This Fits
              </span>
              <p className="text-sm text-forest leading-relaxed">
                {blueprint.whyThisFits}
              </p>
            </div>
          </div>

          {/* Dynamic Routing CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
            {blueprint.routeType === 'coaching' && (
              <>
                <Link
                  to="/book"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/25 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-tight transition-all shadow-sm"
                >
                  Explore 1:1 Coaching &amp; Book a Free 15-Min Chat →
                </Link>
                <Link
                  to={context === 'programs' ? '/studio' : '/coaching'}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-cream hover:bg-forest hover:text-cream text-forest border border-forest/25 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
                >
                  {context === 'programs'
                    ? 'View Studio Coaching Details →'
                    : 'Compare Studio vs. Online Coaching →'}
                </Link>
              </>
            )}

            {blueprint.routeType === 'glp1' && (
              <>
                {ENABLE_SUMMER_MOMENTUM ? (
                  <>
                    <Link
                      to="/summer-momentum"
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/25 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-tight transition-all shadow-sm"
                    >
                      Explore Summer Momentum (30 Nov – 8 Jan · $149 NZD) →
                    </Link>
                    <Link
                      to="/assessment"
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-cream hover:bg-forest hover:text-cream text-forest border border-forest/25 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
                    >
                      Take the 2-Min GLP-1 Muscle &amp; Protein Score →
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/assessment"
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/25 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-tight transition-all shadow-sm"
                    >
                      Take the 2-Min GLP-1 Muscle &amp; Protein Score →
                    </Link>
                    <Link
                      to="/glp1-toolkit"
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-cream hover:bg-forest hover:text-cream text-forest border border-forest/25 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
                    >
                      Explore the $29 GLP-1 App Toolkit →
                    </Link>
                  </>
                )}
              </>
            )}

            {blueprint.routeType === 'plans' && (
              <>
                {ENABLE_SELF_GUIDED_PLANS && answers.support !== 'starter' ? (
                  <>
                    <Link
                      to="/plans"
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/25 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-tight transition-all shadow-sm"
                    >
                      Browse Self-Guided Plans (3–4 Sessions/Wk) →
                    </Link>
                    <button
                      type="button"
                      onClick={scrollToStarterBox}
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-cream hover:bg-forest hover:text-cream text-forest border border-forest/25 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                    >
                      Or try a free 7-day starter pass in the WRK app below ↓
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={scrollToStarterBox}
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/25 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-tight transition-all shadow-sm cursor-pointer"
                    >
                      Unlock Your Free 7-Day WRK App Pass ↓
                    </button>
                    <Link
                      to="/book"
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-cream hover:bg-forest hover:text-cream text-forest border border-forest/25 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
                    >
                      Or book a free 15-min chat with Hayden →
                    </Link>
                  </>
                )}
              </>
            )}
          </div>

          {/* Embedded Free 7-Day WRK App Pass Unlock */}
          <div
            ref={starterBoxRef}
            className={`rounded-2xl p-5 sm:p-6 border transition-all ${
              starterBoxIsPrimary
                ? 'bg-forest text-cream border-forest-deep shadow-md'
                : 'bg-cream text-forest border-forest/15'
            }`}
          >
            {passStatus !== 'unlocked' ? (
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
                      starterBoxIsPrimary
                        ? 'bg-forest-deep border-cream/20 text-citron'
                        : 'bg-quiet border-forest/15 text-forest'
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <span
                      className={`text-[11px] uppercase tracking-widest font-semibold block mb-0.5 ${
                        starterBoxIsPrimary ? 'text-citron' : 'text-forest/70'
                      }`}
                    >
                      {starterBoxIsPrimary ? 'RECOMMENDED FIRST STEP' : 'OPTIONAL FREE TRIAL'}
                    </span>
                    <p
                      className={`text-sm sm:text-base font-medium leading-relaxed ${
                        starterBoxIsPrimary ? 'text-cream' : 'text-forest'
                      }`}
                    >
                      Want to test-drive how WRK coaching feels first? Unlock a Free 7-Day Starter Experience inside the WRK app (My PT Hub).
                    </p>
                  </div>
                </div>

                <form
                  onSubmit={handleStarterSubmit}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-stretch"
                >
                  <div className="sm:col-span-4">
                    <label htmlFor={`starter-name-${context}`} className="sr-only">
                      First Name
                    </label>
                    <input
                      id={`starter-name-${context}`}
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First name"
                      required
                      maxLength={80}
                      className={`w-full h-full min-h-[44px] px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                        starterBoxIsPrimary
                          ? 'bg-forest-deep border-cream/25 text-cream placeholder:text-cream/55 focus:ring-citron'
                          : 'bg-quiet/60 border-forest/20 text-forest placeholder:text-forest/55 focus:ring-forest'
                      }`}
                    />
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor={`starter-email-${context}`} className="sr-only">
                      Email Address
                    </label>
                    <input
                      id={`starter-email-${context}`}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      required
                      maxLength={254}
                      className={`w-full h-full min-h-[44px] px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                        starterBoxIsPrimary
                          ? 'bg-forest-deep border-cream/25 text-cream placeholder:text-cream/55 focus:ring-citron'
                          : 'bg-quiet/60 border-forest/20 text-forest placeholder:text-forest/55 focus:ring-forest'
                      }`}
                    />
                  </div>
                  <div className="sm:col-span-4">
                    <button
                      type="submit"
                      disabled={passStatus === 'submitting'}
                      className={`w-full h-full min-h-[44px] inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold tracking-tight transition-all cursor-pointer disabled:opacity-60 ${
                        starterBoxIsPrimary
                          ? 'bg-citron text-forest hover:brightness-95 border border-forest/20'
                          : 'bg-forest text-cream hover:bg-forest-deep'
                      }`}
                    >
                      {passStatus === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>Send My Free 7-Day App Pass →</>
                      )}
                    </button>
                  </div>
                </form>

                {passStatus === 'error' && passError && (
                  <p
                    role="alert"
                    className={`mt-3 text-xs font-medium ${
                      starterBoxIsPrimary ? 'text-citron' : 'text-red-800'
                    }`}
                  >
                    {passError}
                  </p>
                )}
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className={`w-6 h-6 shrink-0 mt-0.5 ${
                      starterBoxIsPrimary ? 'text-citron' : 'text-forest'
                    }`}
                  />
                  <div>
                    <h3
                      className={`font-serif text-lg sm:text-xl font-semibold mb-1 ${
                        starterBoxIsPrimary ? 'text-cream' : 'text-forest'
                      }`}
                    >
                      Your 7-Day Starter Pass Is On Its Way, {firstName}.
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        starterBoxIsPrimary ? 'text-cream/85' : 'text-forest/80'
                      }`}
                    >
                      {starterUrlConfigured
                        ? 'Your My PT Hub starter access is unlocked below and we have sent a copy to your inbox.'
                        : 'Your request is confirmed. Check your inbox shortly for your personal My PT Hub starter invite link.'}
                    </p>
                  </div>
                </div>

                {starterUrlConfigured && (
                  <a
                    href={MYPTHUB_FREE_STARTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center bg-citron text-forest hover:brightness-95 border border-forest/20 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap shadow-sm"
                  >
                    Open WRK App Pass
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
