export interface CMSImage {
  url: string;
  alt: string;
  seoDescription?: string;
}

export interface PageContentConfig {
  hero: {
    h1: string;
    subhead: string;
    bullets: string[];
    image: string;
    kicker?: string;
    eyebrow?: string;
    url?: string;
    alt?: string;
    seoDescription?: string;
  };
  banner: {
    tagline: string;
    support?: string;
    image: string;
    url?: string;
    alt?: string;
    seoDescription?: string;
  };
  seo: {
    title: string;
    description: string;
  };
  // Legacy image fields
  ptImage?: CMSImage;
  onlineImage?: CMSImage;
  corporateImage?: CMSImage;
  mainImage?: CMSImage;
  workoutLogImage?: CMSImage;
  habitsImage?: CMSImage;
  challengeImage?: CMSImage;
}

const unsplash = (id: string) => `/images/dad-carrypack-hiking.jpg`;

export const PAGE_CONTENT: Record<string, PageContentConfig> = {
  home: {
    seo: {
      title: "Personal Training That Fits Real Life | Christchurch + Online",
      description: "Fat loss, less pain, and consistency for busy adults. Pain-aware training, flexible nutrition, and coaching in Christchurch or online."
    },
    hero: {
      h1: "Train Smarter. <br/><span class='text-accent'>Play Harder.</span>",
      subhead: "I help people lose fat, get stronger, and trust their body outside the gym.",
      bullets: [
        "Progress without punishment",
        "Pain-aware training",
        "Protein-forward nutrition"
      ],
      image: "/images/dad-carrypack-hiking.jpg",
      kicker: "<span class='text-white font-bold'>The gym is a tool — not a lifestyle.</span><br class='hidden md:block' /> The goal is more energy, less pain, and a body that can handle work, family, weekends, and the adventures you keep putting off.",
      eyebrow: "Strength & Conditioning | Christchurch (Addington) + NZ-wide",
      url: "/images/dad-carrypack-hiking.jpg",
      alt: "strong capable dad, carrying child in carry pack while tramping up hill",
      seoDescription: "strong capable dad who has trained hard so that he can play hard by "
    },
    banner: {
      tagline: "Fit enough for the good stuff.",
      support: "Train to live more—work, family, weekends.",
      image: "/images/pexels-pripicart-591216.jpg",
      url: ""
    },
    ptImage: {
      url: "/images/dad-kid-paddleboard.jpg",
      alt: "Dad and kid paddleboarding",
      seoDescription: "A father and child paddleboarding together, showcasing the active lifestyle enabled by personal training."
    },
    onlineImage: {
      url: "/images/family-activity.jpg",
      alt: "Family activity outdoors",
      seoDescription: "A family enjoying outdoor activities, highlighting the freedom and capacity built through online coaching."
    },
    corporateImage: {
      url: "/images/golfing.jpg",
      alt: "Corporate team golfing",
      seoDescription: "Professionals playing golf, illustrating the work-life balance and performance focus of corporate wellness programs."
    },
    challengeImage: {
      url: "/images/guy-surfboard.jpg",
      alt: "Man carrying surfboard",
      seoDescription: "A man carrying a surfboard, representing the 42 Day Reset challenge."
    }
  },
  services: {
    seo: {
      title: "Services | WRK Personal Training",
      description: "Choose the coaching option that fits your life—fat loss, less pain, and consistency without gym dominance or restrictive dieting."
    },
    hero: {
      h1: "PERSONAL TRAINING <span class='text-accent'>SERVICES</span>",
      subhead: "Choose the coaching option that fits your life—fat loss, less pain, and consistency without gym dominance or restrictive dieting.",
      bullets: [
        "1:1 Christchurch Coaching",
        "Online Coaching (12-Week Mini)",
        "Corporate Wellness"
      ],
      image: "/images/pexels-pripicart-591216.jpg",
      kicker: "Options for every schedule and budget."
    },
    banner: {
      tagline: "Choose the coaching that fits your real week.",
      support: "Same goal—more capacity—different paths to get there.",
      image: "/images/pexels-pripicart-591216.jpg"
    }
  },
  personalTraining: {
    seo: {
      title: "1:1 Personal Training in Christchurch | WRK",
      description: "Precision coaching at Get Me Fitter (Addington). We fix movement patterns, build real strength, and help you get leaner and feel better."
    },
    hero: {
      h1: "1:1 Personal Training <span class='text-accent'>in Christchurch</span>",
      subhead: "Precision coaching at Get Me Fitter (Addington). We fix movement patterns, build real strength, and help you get leaner and feel better—without wrecking your schedule or your body.",
      bullets: [
        "Technical mastery (move well, train safely)",
        "Pain-aware programming (posture / postpartum / menopause / niggles)",
        "Accountability that actually works"
      ],
      image: "/images/pexels-pripicart-591216.jpg",
      kicker: "Based at Get Me Fitter, 12 Show Place, Addington, Christchurch.",
      url: "/images/downhill-skiing.jpg",
      alt: "Fit and capable man back country skiing",
      seoDescription: "Fit and capable man back country skiing, reflecting the fitness gained through personal training."
    },
    banner: {
      tagline: "Train smart. Progress without breaking down.",
      support: "We work around niggles and build you up properly.",
      image: "/images/pexels-pripicart-591216.jpg",
      url: "/images/mum-kid-hiking.jpg",
      alt: "Mum and child hiking",
      seoDescription: "A mother carrying a child on a hike,  representing the real-world application of strength gained through personal training."
    },
    mainImage: {
      url: "/images/habit-tracking.png",
      alt: "Habit Tracking App Display",
      seoDescription: "Habit Tracking App, one of the tools used in our personal training approach. "
    }
  },
  onlineCoaching: {
    seo: {
      title: "Online Personal Training | App Coaching (12 Weeks+)",
      description: "Online personal training with custom programming, check-ins and flexible nutrition support. Built for travel, stress and real schedules. 12-week minimum."
    },
    hero: {
      h1: "Online Personal Training (12-Week Minimum)",
      subhead: "Professional programming and support delivered to your phone—so you can train where you want, when you want, and still get results when life gets busy.",
      bullets: [
        "Custom programming built around your schedule",
        "Form checks + feedback (video analysis)",
        "Protein-forward, flexible nutrition support"
      ],
      image: "/images/pexels-pripicart-591216.jpg",
      kicker: "12-week minimum—because quick fixes are how people end up starting over."
    },
    banner: {
      tagline: "A plan that survives travel, stress, and chaos.",
      support: "Consistency beats intensity when life’s busy.",
      image: "/images/pexels-pripicart-591216.jpg"
    },
    workoutLogImage: {
      url: "/images/exercise-history.png",
      alt: "Workout Log Interface",
      seoDescription: "Mobile interface showing detailed workout logs."
    },
    habitsImage: {
      url: "/images/habit-tracking.png",
      alt: "Habits Interface",
      seoDescription: "Mobile interface showing daily habit tracking."
    }
  },
  corporateWellness: {
    seo: {
      title: "Corporate Wellness Program NZ | PT in Every Pocket",
      description: "NZ corporate wellness program: a personal trainer in every employee’s pocket. App-led training plans for all levels, goals and schedules. Low admin."
    },
    hero: {
      h1: "Corporate Wellness Program (NZ)",
      subhead: "A personal trainer in every employee’s pocket. App-led training and nutrition support that improves energy, posture, and consistency—without adding admin load to HR.",
      bullets: [
        "App-based training plans for every level",
        "Programs for different goals + preferences",
        "Zero admin for HR"
      ],
      image: "/images/pexels-pnw-prod-7625047.jpg",
      kicker: "NZ-wide delivery • Simple rollout • Private company community"
    },
    banner: {
      tagline: "Wellness that gets used—because it fits the job.",
      support: "Simple programs that support energy, posture, and routine.",
      image: "/images/pexels-pripicart-591216.jpg"
    }
  },
  challenge42: {
    seo: {
      title: "42 Day Fitness Reset | Self-Guided Program ($47)",
      description: "A 42 day reset to rebuild routine, energy and momentum. App-based training plan + simple nutrition support. One-time payment $47."
    },
    hero: {
      h1: "42 Day Reset",
      subhead: "The system reboot you’ve been waiting for. Clear the fog, rebuild momentum, and get back to operating at full capacity—without diet jail or burnout.",
      bullets: [
        "Self-guided training (app delivered)",
        "Simple nutrition support (flexible, protein-forward)",
        "One-time payment ($47)"
      ],
      image: "/images/mountain-biking.jpg",
      kicker: "One-time payment • 42 days access • No subscription"
    },
    banner: {
      tagline: "Reset the routine. Keep your life.",
      support: "Structure and momentum without diet jail or burnout.",
      image: "/images/pexels-pripicart-591216.jpg"
    }
  },
  blog: {
    seo: {
      title: "Blog | WRK Personal Training",
      description: "Articles on strength training, longevity, and high-performance living."
    },
    hero: {
      h1: "THE REPOSITORY",
      subhead: "Evidence-based insights on training, longevity, and mindset.",
      bullets: [
        "Strength Training",
        "Recovery Protocols",
        "High-Performance Living"
      ],
      image: "/images/mountain-biking.jpg",
      kicker: "No fluff. Just what works."
    },
    banner: {
      tagline: "Less fluff. More progress you can repeat.",
      support: "Practical guidance for fat loss, pain reduction, and consistency.",
      image: "/images/pexels-pripicart-591216.jpg"
    }
  },
  tools: {
    seo: {
      title: "Tools & Resources | WRK Personal Training",
      description: "Free tools to help you execute better. Calorie calculators, checklists, and more."
    },
    hero: {
      h1: "TOOLS",
      subhead: "Free resources to help you execute better.",
      bullets: [
        "Nutrition Engine",
        "1RM Estimator",
        "Recovery Protocols"
      ],
      image: "/images/pexels-pripicart-591216.jpg",
      kicker: "Calculators, checklists, and systems."
    },
    banner: {
      tagline: "Clarity in minutes. Then we keep it simple.",
      support: "Use the numbers as a starting point—not a rulebook.",
      image: "/images/pexels-pripicart-591216.jpg"
    }
  },
  calorieCalculator: {
    seo: {
      title: "Calorie Calculator | Estimate Your Daily Calories (TDEE + Goals)",
      description: "Use this calorie calculator to estimate your daily calorie needs for fat loss, maintenance, or muscle gain. Includes protein targets and a “Party Fund” to account for weekly drinks while staying on track."
    },
    hero: {
      h1: "Calorie Calculator",
      subhead: "Use this calorie calculator to estimate your daily calorie needs based on your body, activity level, and goal (fat loss, maintenance, or muscle gain). It gives you a clear starting target you can actually follow — without crash dieting, over-tracking, or guessing what “healthy” means.",
      bullets: [
        "Daily Calorie Target",
        "Protein Targets",
        "Party Fund"
      ],
      image: "/images/pexels-pripicart-591216.jpg",
      eyebrow: "Nutrition Engine"
    },
    banner: {
      tagline: "Start with a target. Adjust like an adult.",
      support: "A sensible baseline, then refine based on results and recovery.",
      image: "/images/pexels-pripicart-591216.jpg"
    }
  },
  oneRmEstimator: {
    seo: {
      title: "1RM Estimator | WRK Personal Training",
      description: "Estimate your one-rep max safely without testing to failure."
    },
    hero: {
      h1: "1RM ESTIMATOR",
      subhead: "Estimate your one-rep max without testing to failure. Use this to set your training percentages.",
      bullets: [
        "Safety First",
        "Training Percentages",
        "Progress Tracking"
      ],
      image: "/images/pexels-pripicart-591216.jpg",
      kicker: "Train smart, not just heavy."
    },
    banner: {
      tagline: "Train smart—without maxing out every week.",
      support: "Estimate loads so progress is repeatable and joint-friendly.",
      image: "/images/pexels-pripicart-591216.jpg"
    }
  },
  contact: {
    seo: {
      title: "Contact | WRK Personal Training",
      description: "Get in touch to discuss your training goals."
    },
    hero: {
      h1: "CONTACT",
      subhead: "Ready to get started? Let's discuss your goals and find the right plan for you.",
      bullets: [
        "Book a Consult",
        "Ask a Question",
        "Get Started"
      ],
      image: "/images/pexels-pixabay-163407.jpg",
      kicker: "No pressure sales. Just a conversation."
    },
    banner: {
      tagline: "Let’s map the simplest plan that works.",
      support: "Tell me your constraints and I’ll guide the next step.",
      image: "/images/pexels-pripicart-591216.jpg"
    }
  },
  philosophy: {
    seo: {
      title: "Philosophy | Capacity Is Currency | WRK",
      description: "The Right Work, Done Well. A training philosophy for high performers who value longevity as much as results."
    },
    hero: {
      h1: "CAPACITY IS CURRENCY",
      subhead: "When you have capacity, you have options. When you don't, you have constraints.",
      bullets: [
        "Return on Investment",
        "Evidence Based",
        "Resilience"
      ],
      image: "/images/dad-carrypack-hiking.jpg",
      kicker: "The Methodology",
      url: "/images/downhill-skiing.jpg"
    },
    banner: {
      tagline: "We do not train for the sake of being tired.",
      support: "We train to be capable.",
      image: "/images/pexels-pripicart-591216.jpg"
    }
  },
  assessment: {
    seo: {
      title: "Assessment | WRK Personal Training",
      description: "Take the assessment to find the best training plan for you."
    },
    hero: {
      h1: "ASSESSMENT",
      subhead: "Find out exactly where you stand and what you need to do next.",
      bullets: [
        "Quick Analysis",
        "Personalized Plan",
        "Immediate Results"
      ],
      image: "/images/pexels-pripicart-591216.jpg",
      kicker: "Takes less than 2 minutes."
    },
    banner: {
      tagline: "Get clarity fast. Then take the right next step.",
      support: "Six questions. Practical answers. A plan that fits real life.",
      image: "/images/pexels-pripicart-591216.jpg"
    }
  }
};
