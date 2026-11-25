export type PlanCategory =
  | 'Starting Out & At Home'
  | 'Gym Strength'
  | 'Running & Dual-Engine';

export interface WeeklyRhythmDay {
  day: string;
  label: string;
  type: 'strength' | 'run' | 'conditioning' | 'recovery';
}

export interface PlanFaq {
  question: string;
  answer: string;
}

export interface SelfGuidedPlan {
  slug: string;
  title: string;
  category: PlanCategory;
  durationWeeks: number;
  durationBadge: string;
  equipmentTag: string;
  summary: string;
  fitNote: string;
  priceLabel: string;
  stripeUrl: string;
  statusBadge?: string;
  qaInProgress?: boolean;
  forYouIf: string[];
  lookElsewhereIf: string[];
  weeklyRhythm: WeeklyRhythmDay[];
  rhythmNote: string;
  faqs: PlanFaq[];
}

export const PLAN_CATEGORIES: Array<'All' | PlanCategory> = [
  'All',
  'Starting Out & At Home',
  'Gym Strength',
  'Running & Dual-Engine',
];

export const SELF_GUIDED_PLANS: SelfGuidedPlan[] = [
  {
    slug: 'couch-to-5k',
    title: 'Couch to 5K',
    category: 'Starting Out & At Home',
    durationWeeks: 8,
    durationBadge: '8 Weeks · 3 Runs/Week',
    equipmentTag: 'Outdoors or Treadmill',
    summary:
      "WRK's signature run-walk entry plan to build up to running 5 kilometres comfortably without burning out.",
    fitNote: 'Fit: True beginners or returning runners starting from zero.',
    priceLabel: '$XX NZD',
    stripeUrl: '#stripe-couch-to-5k-placeholder',
    forYouIf: [
      'You are starting from zero or returning after a long break from running.',
      'You want gradual run-walk progressions capped at 3 sessions per week so your joints and lungs adapt steadily.',
      'You prefer clear, structured workouts inside the WRK app rather than guessing how far to push each day.',
    ],
    lookElsewhereIf: [
      'You already run 5 kilometres comfortably without stopping—look at 5K to Half Marathon or Strength & Running instead.',
      'You need individualised injury rehabilitation or ACC-guided return-to-running care—book a 1:1 consult first.',
      'You are looking for a guaranteed race-time outcome or 1:1 weekly coaching feedback.',
    ],
    weeklyRhythm: [
      { day: 'Mon', label: 'Run-Walk 1', type: 'run' },
      { day: 'Tue', label: 'Rest / Easy Walk', type: 'recovery' },
      { day: 'Wed', label: 'Run-Walk 2', type: 'run' },
      { day: 'Thu', label: 'Rest / Mobility', type: 'recovery' },
      { day: 'Fri', label: 'Rest / Easy Walk', type: 'recovery' },
      { day: 'Sat', label: 'Run-Walk 3', type: 'run' },
      { day: 'Sun', label: 'Rest & Recovery', type: 'recovery' },
    ],
    rhythmNote:
      'Three evenly spaced run-walk sessions per week with dedicated recovery days in between to protect calves, knees, and shins.',
    faqs: [
      {
        question: 'Can I complete this plan on a treadmill instead of outdoors?',
        answer:
          'Yes. Every session is structured by effort and run-walk intervals, so you can follow it smoothly on New Zealand footpaths, parks, or an indoor treadmill.',
      },
      {
        question: 'What if I repeat a week before moving on?',
        answer:
          'Repeating a week whenever life gets busy or legs feel heavy is completely fine. You keep full access to the schedule inside My PT Hub so you can progress at a steady pace.',
      },
      {
        question: 'Is there any strength work or nutrition coaching included?',
        answer:
          'This plan focuses on your 3 weekly run-walk sessions plus a general 7-day example meal plan with practical NZ food swaps and automated weekly focus notes—not bespoke 1:1 coaching or dietetic prescribing.',
      },
      {
        question: 'Should I check with my doctor before starting?',
        answer:
          'If you have cardiovascular symptoms, recent joint surgery, or medical considerations (including adjusting to GLP-1 medication), please follow your clinician or GP guidance before beginning any running programme.',
      },
    ],
  },
  {
    slug: 'bodyweight-basics',
    title: 'Bodyweight Basics',
    category: 'Starting Out & At Home',
    durationWeeks: 6,
    durationBadge: '6 Weeks · 3 Sessions/Week',
    equipmentTag: 'Zero Equipment',
    statusBadge: 'Final QA in Progress',
    qaInProgress: true,
    summary:
      'Low-impact, joint-friendly bodyweight foundations designed to build movement confidence and everyday strength at home.',
    fitNote: 'Fit: Beginners wanting a manageable, non-intimidating starting point.',
    priceLabel: '$XX NZD',
    stripeUrl: '#stripe-bodyweight-basics-placeholder',
    forYouIf: [
      'You want to start building strength at home with zero equipment and zero gym intimidation.',
      'You are returning to exercise after time away or prioritising muscle retention alongside medical weight loss.',
      'You want 3 calm, joint-friendly sessions per week with clear video demonstrations.',
    ],
    lookElsewhereIf: [
      'You already train regularly with dumbbells or resistance bands and want heavier progressive overload—look at Home Strength or Gym Strength.',
      'You need bespoke post-injury rehabilitation, ACC support, or direct 1:1 form coaching.',
      'You want personalised clinical nutrition prescribing rather than a general example meal template.',
    ],
    weeklyRhythm: [
      { day: 'Mon', label: 'Foundations A', type: 'strength' },
      { day: 'Tue', label: 'Rest / Light Walk', type: 'recovery' },
      { day: 'Wed', label: 'Foundations B', type: 'strength' },
      { day: 'Thu', label: 'Rest / Mobility', type: 'recovery' },
      { day: 'Fri', label: 'Foundations C', type: 'strength' },
      { day: 'Sat', label: 'Optional Walk', type: 'recovery' },
      { day: 'Sun', label: 'Rest & Recovery', type: 'recovery' },
    ],
    rhythmNote:
      'Three non-consecutive bodyweight strength days per week, leaving four days for gentle walking and unhurried recovery.',
    faqs: [
      {
        question: 'Why does Bodyweight Basics show Final QA in Progress?',
        answer:
          'We are putting the finishing touches on exercise video cues and the accompanying 7-day example meal swaps before opening checkout. You can register your interest now and Hayden will notify you as soon as it goes live.',
      },
      {
        question: 'Do I need dumbbells, bands, or a gym membership?',
        answer:
          'No. Bodyweight Basics uses your own bodyweight, a sturdy chair, and floor space at home.',
      },
      {
        question: 'Is this suitable if I am currently taking a GLP-1 medication?',
        answer:
          'Low-impact strength work is well suited for protecting lean muscle when starting out, alongside following your prescribing doctor or clinician’s medical guidance.',
      },
      {
        question: 'Does this include 1:1 feedback from Hayden?',
        answer:
          'No—self-guided plans include structured app workouts, automated weekly guidance notes, and a general 7-day example meal plan with swaps. Book a 1:1 consult if you want personalised coaching check-ins.',
      },
    ],
  },
  {
    slug: 'home-strength',
    title: 'Home Strength',
    category: 'Starting Out & At Home',
    durationWeeks: 12,
    durationBadge: '12 Weeks · 3 Sessions/Week',
    equipmentTag: 'Resistance Bands + Bodyweight',
    summary:
      'A progressive 12-week home strength block using tempo work, bands, and bodyweight variations.',
    fitNote: 'Fit: Requires prior comfort with standard lunges, push-ups, and basic home workouts.',
    priceLabel: '$XX NZD',
    stripeUrl: '#stripe-home-strength-placeholder',
    forYouIf: [
      'You want a full 12-week progressive strength block from home using resistance bands and bodyweight.',
      'You are already comfortable performing split squats/lunges, incline or floor push-ups, and basic movement patterns.',
      'You want structured tempo, sets, and reps capped at 3 sessions per week inside My PT Hub.',
    ],
    lookElsewhereIf: [
      'You are brand new to lunges or push-ups—wait for Bodyweight Basics or start with 1:1 studio coaching to learn foundations.',
      'You have access to a commercial gym and want barbell, machine, and cable progression—choose Gym Strength instead.',
      'You need bespoke rehab programming or 1:1 coach check-ins.',
    ],
    weeklyRhythm: [
      { day: 'Mon', label: 'Home Strength 1', type: 'strength' },
      { day: 'Tue', label: 'Rest / Daily Steps', type: 'recovery' },
      { day: 'Wed', label: 'Home Strength 2', type: 'strength' },
      { day: 'Thu', label: 'Rest / Mobility', type: 'recovery' },
      { day: 'Fri', label: 'Home Strength 3', type: 'strength' },
      { day: 'Sat', label: 'Active Outdoors', type: 'recovery' },
      { day: 'Sun', label: 'Rest & Recovery', type: 'recovery' },
    ],
    rhythmNote:
      'Three progressive resistance-band and bodyweight strength sessions spaced across the week to support steady recovery.',
    faqs: [
      {
        question: 'What kind of resistance bands do I need?',
        answer:
          'A standard set of looped power bands or tube bands with light, medium, and heavy tension gives you plenty of room to progress across all 12 weeks.',
      },
      {
        question: 'Why are lunges and push-ups listed as prerequisites?',
        answer:
          'Home Strength uses tempo variations and unilateral lower-body work straight from Week 1. Having baseline familiarity keeps your joints comfortable without live coaching present.',
      },
      {
        question: 'Is nutrition included?',
        answer:
          'Every self-guided plan comes with a general 7-day example meal plan and everyday New Zealand food swaps to help illustrate protein and portion structure—not an individual dietetic plan.',
      },
      {
        question: 'What support is included inside the WRK app?',
        answer:
          'You receive clear sets, reps, rest targets, video exercise demos, and automated weekly guidance messages inside My PT Hub.',
      },
    ],
  },
  {
    slug: 'gym-strength',
    title: 'Gym Strength',
    category: 'Gym Strength',
    durationWeeks: 8,
    durationBadge: '8 Weeks · 3 Full-Body + Up to 1 Cardio/Week (Max 4)',
    equipmentTag: 'Standard Gym Floor (Machines, Cables, Dumbbells)',
    summary:
      'Balanced full-body resistance training designed to build muscle and confidence on the gym floor.',
    fitNote:
      'Fit: Great for lifters wanting structured 3-day full-body training with an optional 4th conditioning session.',
    priceLabel: '$XX NZD',
    stripeUrl: '#stripe-gym-strength-placeholder',
    forYouIf: [
      'You have access to a standard commercial gym with machines, cables, and dumbbells.',
      'You want 3 reliable full-body strength sessions per week, plus the option of 1 steady conditioning session (never exceeding 4 total sessions).',
      'You want structured progression and video demos so you walk onto the gym floor with a clear plan.',
    ],
    lookElsewhereIf: [
      'You want 4 dedicated lifting days split into upper and lower sessions—choose Upper/Lower Split instead.',
      'You prefer training exclusively at home without gym machines or dumbbells.',
      'You require individualised injury modifications or 1:1 technique feedback.',
    ],
    weeklyRhythm: [
      { day: 'Mon', label: 'Full-Body A', type: 'strength' },
      { day: 'Tue', label: 'Rest / Walk', type: 'recovery' },
      { day: 'Wed', label: 'Full-Body B', type: 'strength' },
      { day: 'Thu', label: 'Rest / Mobility', type: 'recovery' },
      { day: 'Fri', label: 'Full-Body C', type: 'strength' },
      { day: 'Sat', label: 'Optional Cardio (Max 4)', type: 'conditioning' },
      { day: 'Sun', label: 'Rest & Recovery', type: 'recovery' },
    ],
    rhythmNote:
      'Three full-body gym workouts anchor the week, with an optional fourth conditioning day capped at four total sessions.',
    faqs: [
      {
        question: 'Is the 4th conditioning session mandatory?',
        answer:
          'No. The core programme is 3 full-body strength days. The optional 4th conditioning session is there if your schedule and recovery allow—total load stays capped at 4 sessions per week.',
      },
      {
        question: 'Does this require advanced barbell lifts?',
        answer:
          'The plan centres on accessible machines, cables, and dumbbells so you can load muscles safely and efficiently in any typical NZ gym.',
      },
      {
        question: 'Is this suitable alongside GLP-1 medication?',
        answer:
          'Full-body gym resistance training is well suited for supporting lean muscle retention when paired with your prescribing clinician’s medical oversight and adequate daily protein.',
      },
      {
        question: 'How is this different from 1:1 coaching?',
        answer:
          'Gym Strength is a self-guided template with video demos, automated weekly check-in notes, and a general 7-day example meal plan with NZ swaps. For custom edits and direct form reviews, choose 1:1 coaching.',
      },
    ],
  },
  {
    slug: 'upper-lower-split',
    title: 'Upper/Lower Split',
    category: 'Gym Strength',
    durationWeeks: 8,
    durationBadge: '8 Weeks · 4 Strength Sessions/Week',
    equipmentTag: 'Standard Gym Floor',
    summary:
      'Two upper-body and two lower-body strength sessions per week for focused volume and structured progression.',
    fitNote: 'Fit: Next step after full-body training for people ready to commit to 4 lifting days.',
    priceLabel: '$XX NZD',
    stripeUrl: '#stripe-upper-lower-split-placeholder',
    forYouIf: [
      'You already have a solid base of gym lifting and can consistently commit to 4 strength days per week.',
      'You want higher focused volume split cleanly into two upper-body and two lower-body sessions.',
      'You track your weights inside My PT Hub and enjoy structured, repeatable progression.',
    ],
    lookElsewhereIf: [
      'You can only train 3 days most weeks—Gym Strength fits a 3-day schedule much better.',
      'You are brand new to gym machines and free weights, or need rehab adjustments.',
      'You want 1:1 custom programming tailored around specific injuries.',
    ],
    weeklyRhythm: [
      { day: 'Mon', label: 'Upper Body A', type: 'strength' },
      { day: 'Tue', label: 'Lower Body A', type: 'strength' },
      { day: 'Wed', label: 'Rest & Recovery', type: 'recovery' },
      { day: 'Thu', label: 'Upper Body B', type: 'strength' },
      { day: 'Fri', label: 'Lower Body B', type: 'strength' },
      { day: 'Sat', label: 'Rest / Easy Walk', type: 'recovery' },
      { day: 'Sun', label: 'Rest & Recovery', type: 'recovery' },
    ],
    rhythmNote:
      'Four structured gym sessions split evenly between upper and lower body with mid-week and weekend recovery.',
    faqs: [
      {
        question: 'What if I miss a day and only get 3 sessions in one week?',
        answer:
          'Simply pick up the next session in order inside the WRK app rather than cramming two workouts into one day.',
      },
      {
        question: 'Are exercise substitutions available if a machine is busy?',
        answer:
          'Standard gym floor movements can easily be logged with equivalent cable or dumbbell options shown in the app.',
      },
      {
        question: 'Does this include meal planning?',
        answer:
          'Yes—it includes WRK’s general 7-day example meal plan with practical Kiwi swaps to support protein and training energy, without bespoke clinical prescribing.',
      },
      {
        question: 'Are weekly coaching notes automated?',
        answer:
          'Yes. You receive scheduled weekly focus reminders from Hayden inside My PT Hub, distinct from 1:1 personal check-ins.',
      },
    ],
  },
  {
    slug: '5k-to-half-marathon',
    title: '5K to Half Marathon',
    category: 'Running & Dual-Engine',
    durationWeeks: 12,
    durationBadge: '12 Weeks · 4 Runs/Week (3 in Taper Week)',
    equipmentTag: 'Outdoors or Treadmill',
    summary:
      'Progressive endurance build taking you safely from a comfortable 5K to 21.1 kilometres.',
    fitNote: 'Fit: Prerequisite: You can already run 5 kilometres comfortably without stopping.',
    priceLabel: '$XX NZD',
    stripeUrl: '#stripe-5k-to-half-marathon-placeholder',
    forYouIf: [
      'You can already run 5 kilometres comfortably without stopping and want to build toward 21.1 kilometres.',
      'You want 4 structured runs per week (stepping down to 3 runs in the taper week) balancing easy aerobic work and gradual long runs.',
      'You want sensible volume progression rather than copying an aggressive high-mileage internet plan.',
    ],
    lookElsewhereIf: [
      'You are not yet comfortable running 5 kilometres continuously—start with Couch to 5K first.',
      'You want concurrent heavy gym lifting alongside running—check Strength & Running instead.',
      'You need a guaranteed finish time or personalised 1:1 race-strategy coaching.',
    ],
    weeklyRhythm: [
      { day: 'Mon', label: 'Rest & Recovery', type: 'recovery' },
      { day: 'Tue', label: 'Easy / Quality Run', type: 'run' },
      { day: 'Wed', label: 'Rest / Mobility', type: 'recovery' },
      { day: 'Thu', label: 'Steady Run', type: 'run' },
      { day: 'Fri', label: 'Rest & Recovery', type: 'recovery' },
      { day: 'Sat', label: 'Easy Shakeout Run', type: 'run' },
      { day: 'Sun', label: 'Progressive Long Run', type: 'run' },
    ],
    rhythmNote:
      'Four structured runs per week (reducing to three in Week 12 taper) with deliberate recovery days protecting total load.',
    faqs: [
      {
        question: 'Does this plan promise a specific half-marathon finish time?',
        answer:
          'No. We focus on safe, progressive aerobic preparation so you can build toward 21.1 kilometres smoothly—no arbitrary race-time guarantees.',
      },
      {
        question: 'Why does the schedule drop to 3 runs in the taper week?',
        answer:
          'Reducing weekly run frequency in the final week helps shed fatigue while keeping your legs responsive ahead of 21.1 kilometres.',
      },
      {
        question: 'What if I am feeling niggles as long runs increase?',
        answer:
          'Always listen to persistent joint or tendon pain and consult a qualified physiotherapist or clinician rather than pushing through.',
      },
      {
        question: 'What nutrition guidance comes with the plan?',
        answer:
          'You get WRK’s general 7-day example meal plan and everyday NZ food swaps to illustrate carbohydrate and protein balance—not an individual sports dietitian prescription.',
      },
    ],
  },
  {
    slug: 'strength-and-running',
    title: 'Strength & Running',
    category: 'Running & Dual-Engine',
    durationWeeks: 12,
    durationBadge: '12 Weeks · 2 Strength + 2 Runs/Week',
    equipmentTag: 'Gym + Running',
    summary:
      'Concurrent training for people who want to keep lifting weights while building general running fitness—without overtraining.',
    fitNote:
      'Fit: Requires an established running base; built for general dual-engine fitness (no race-distance promise).',
    priceLabel: '$XX NZD',
    stripeUrl: '#stripe-strength-and-running-placeholder',
    forYouIf: [
      'You already have an established running base and access to standard gym equipment.',
      'You want 2 strength sessions and 2 runs per week balanced thoughtfully so heavy legs do not ruin your runs.',
      'You want general dual-engine strength and cardiovascular fitness without burnout or hidden extra sessions.',
    ],
    lookElsewhereIf: [
      'You are targeting a specific race distance such as a half marathon—choose 5K to Half Marathon instead.',
      'You are starting running from scratch—begin with Couch to 5K before combining lifting and running.',
      'You need bespoke coaching adjustments around injuries or personalised nutrition macros.',
    ],
    weeklyRhythm: [
      { day: 'Mon', label: 'Gym Strength A', type: 'strength' },
      { day: 'Tue', label: 'Aerobic Run 1', type: 'run' },
      { day: 'Wed', label: 'Rest & Recovery', type: 'recovery' },
      { day: 'Thu', label: 'Gym Strength B', type: 'strength' },
      { day: 'Fri', label: 'Rest / Mobility', type: 'recovery' },
      { day: 'Sat', label: 'Run 2 (Steady / Tempo)', type: 'run' },
      { day: 'Sun', label: 'Rest & Recovery', type: 'recovery' },
    ],
    rhythmNote:
      'Two gym strength workouts paired with two purposeful runs per week—four total sessions with clear recovery spacing.',
    faqs: [
      {
        question: 'Is this a marathon or half-marathon preparation plan?',
        answer:
          'No. Strength & Running is designed for general dual-engine capability—maintaining strength while building steady running fitness without promising a specific race distance.',
      },
      {
        question: 'Why only 2 strength sessions and 2 runs per week?',
        answer:
          'Combining resistance training and running creates higher total recovery demand. Capping the week at 4 balanced sessions helps everyday lifters and runners stay consistent without overtraining.',
      },
      {
        question: 'Can I swap the days around to fit work and family?',
        answer:
          'Yes—keep at least one recovery gap where practical between heavy lower-body work and harder running efforts inside My PT Hub.',
      },
      {
        question: 'Does this include 1:1 check-ins?',
        answer:
          'No. Self-guided plans deliver workouts, video demos, a general 7-day example meal plan with swaps, and automated weekly guidance notes.',
      },
    ],
  },
  {
    slug: 'everyday-strength',
    title: 'Everyday Strength',
    category: 'Gym Strength',
    durationWeeks: 8,
    durationBadge: '8 Weeks · 3 Gym Sessions/Week',
    equipmentTag: 'Standard Gym Floor (Dumbbells, TRX, Cables, Treadmill)',
    summary:
      'Capability-led strength, stability, and confidence on the gym floor for independent older adults.',
    fitNote:
      'Fit: For independent adults comfortable navigating a gym floor. Not a clinical rehabilitation or ACC programme.',
    priceLabel: '$XX NZD',
    stripeUrl: '#stripe-everyday-strength-placeholder',
    forYouIf: [
      'You are an independent older adult comfortable moving around a gym floor using dumbbells, TRX straps, cables, and a treadmill.',
      'You want 3 calm, joint-respecting sessions per week focused on posture, balance, carrying strength, and long-term independence.',
      'You prefer steady progression with clear video guidance over loud, rushed group circuits.',
    ],
    lookElsewhereIf: [
      'You need supervised clinical rehabilitation, fall-prevention physiotherapy, or ACC recovery—seek hands-on clinical care or book a 1:1 studio consult first.',
      'You are unfamiliar with gym machines or cables and want live hands-on coaching—consider 1:1 Personal Training in Addington.',
      'You want high-frequency 4-day bodybuilding splits.',
    ],
    weeklyRhythm: [
      { day: 'Mon', label: 'Everyday Strength 1', type: 'strength' },
      { day: 'Tue', label: 'Rest / Easy Walk', type: 'recovery' },
      { day: 'Wed', label: 'Everyday Strength 2', type: 'strength' },
      { day: 'Thu', label: 'Rest / Mobility', type: 'recovery' },
      { day: 'Fri', label: 'Everyday Strength 3', type: 'strength' },
      { day: 'Sat', label: 'Active Leisure', type: 'recovery' },
      { day: 'Sun', label: 'Rest & Recovery', type: 'recovery' },
    ],
    rhythmNote:
      'Three unhurried gym sessions per week built around strength, stability, and steady recovery for real-life capability.',
    faqs: [
      {
        question: 'Is Everyday Strength a medical or ACC rehabilitation programme?',
        answer:
          'No. Everyday Strength is a general fitness programme for independent adults already comfortable navigating a gym floor. Always follow your doctor or physiotherapist’s advice for medical conditions or injury rehab.',
      },
      {
        question: 'What gym equipment does the programme use?',
        answer:
          'Workouts use everyday gym floor tools including dumbbells, TRX suspension straps, cable machines, and gentle treadmill inclines or walks.',
      },
      {
        question: 'What if I prefer hands-on guidance first?',
        answer:
          'If you live in Christchurch and want coach-led eyes on your movement before training independently, book a free 15-minute chat to explore 1:1 studio sessions.',
      },
      {
        question: 'Are meals or 1:1 coaching included?',
        answer:
          'You receive a general 7-day example meal plan with everyday NZ swaps plus automated weekly app notes—distinct from personalised 1:1 coaching or dietetic prescribing.',
      },
    ],
  },
];

export const getPlanBySlug = (slug: string | undefined): SelfGuidedPlan | undefined =>
  SELF_GUIDED_PLANS.find((plan) => plan.slug === slug);
