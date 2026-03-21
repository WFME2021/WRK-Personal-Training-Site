export interface CMSImage {
  url: string;
  alt: string;
  seoDescription: string;
}

export interface PageContent {
  home: {
    heroImage: CMSImage;
    ptImage: CMSImage;
    onlineImage: CMSImage;
    corporateImage: CMSImage;
    lifestyleImages: CMSImage[];
    appImages: CMSImage[];
  };
  personalTraining: {
    heroImage: CMSImage;
    mainImage: CMSImage;
  };
  onlineCoaching: {
    heroImage: CMSImage;
    workoutLogImage: CMSImage;
    videoImage: CMSImage;
    macroImage: CMSImage;
    nutritionLogImage: CMSImage;
    habitsImage: CMSImage;
  };
  challenge42: {
    heroImage: CMSImage;
  };
  contact: {
    heroImage: CMSImage;
  };
  philosophy: {
    heroImage: CMSImage;
  };
  corporateWellness: {
    heroImage: CMSImage;
  };
  services: {
    heroImage: CMSImage;
  };
  blog: {
    heroImage: CMSImage;
  };
  tools: {
    heroImage: CMSImage;
  };
  calorieCalculator: {
    heroImage: CMSImage;
  };
  oneRmEstimator: {
    heroImage: CMSImage;
  };
  layout: {
    logoLight: CMSImage;
    logoDark: CMSImage;
  };
  gallery: {
    jetski: CMSImage;
    surfboard: CMSImage;
    activeMum: CMSImage;
  };
}

export const INITIAL_PAGE_CONTENT: PageContent = {
  home: {
    heroImage: {
      url: '/images-v2/skiing-2.jpg?v=2',
      alt: 'Downhill Skiing - Vitality',
      seoDescription: 'A skier carving down a snowy mountain, representing the vitality and energy gained from WRK Personal Training.'
    },
    ptImage: {
      url: '/images-v2/dad-kid-paddleboard.jpg?v=2',
      alt: 'Dad and kid paddleboarding',
      seoDescription: 'A father and child paddleboarding together, showcasing the active lifestyle enabled by personal training.'
    },
    onlineImage: {
      url: '/images-v2/family-activity.jpg?v=2',
      alt: 'Family activity outdoors',
      seoDescription: 'A family enjoying outdoor activities, highlighting the freedom and capacity built through online coaching.'
    },
    corporateImage: {
      url: '/images-v2/golfing.jpg?v=2',
      alt: 'Corporate team golfing',
      seoDescription: 'Professionals playing golf, illustrating the work-life balance and performance focus of corporate wellness programs.'
    },
    lifestyleImages: [
      {
        url: '/images-v2/dad-kid-paddleboard.jpg?v=2',
        alt: 'Dad heading out surfing',
        seoDescription: 'Active parenting and outdoor adventure.'
      },
      {
        url: '/images-v2/mum-kid-hiking.jpg?v=2',
        alt: 'Mum and kid hiking',
        seoDescription: 'Mother and child hiking in nature, representing strength and family time.'
      },
      {
        url: '/images-v2/guy-surfboard.jpg?v=2',
        alt: 'Man with surfboard',
        seoDescription: 'A man walking with a surfboard, symbolizing the physical capacity to enjoy hobbies.'
      },
      {
        url: '/images-v2/female-jetski.jpg?v=2',
        alt: 'Woman on jetski',
        seoDescription: 'A woman riding a jetski, showing the energy and confidence gained from fitness.'
      },
    ],
    appImages: [
      {
        url: '/images-v2/habit-tracking.png?v=2',
        alt: 'WRK App Habit Tracking',
        seoDescription: 'Screenshot of the WRK app showing habit tracking features.'
      },
      {
        url: '/images-v2/fat-loss-tracking.png?v=2',
        alt: 'WRK App Fat Loss Tracking',
        seoDescription: 'Screenshot of the WRK app displaying fat loss progress.'
      },
      {
        url: '/images-v2/macro-tracking-app.jpg?v=2',
        alt: 'WRK App Macro Tracking',
        seoDescription: 'Screenshot of the WRK app showing macro and nutrition tracking.'
      },
      {
        url: '/images-v2/exercise-videos.png?v=2',
        alt: 'WRK App Exercise Videos',
        seoDescription: 'Screenshot of the WRK app showing instructional exercise videos.'
      },
    ]
  },
  personalTraining: {
    heroImage: {
      url: '/images-v2/dad-carrypack-hiking.jpg?v=2',
      alt: 'Mum and kid hiking',
      seoDescription: 'A mother and child hiking, representing the real-world application of strength training.'
    },
    mainImage: {
      url: '/images-v2/active-mum.jpg?v=2',
      alt: 'Mum and kid hiking',
      seoDescription: 'A mother and child playing, representing the real-world application of strength training.'
    },
  },
  onlineCoaching: {
    heroImage: {
      url: '/images-v2/dad-carrypack-hiking.jpg?v=2',
      alt: 'Family activity outdoors',
      seoDescription: 'A family enjoying outdoor activities, highlighting the freedom and capacity built through online coaching.'
    },
    workoutLogImage: {
      url: '/images-v2/exercise-history.png?v=2',
      alt: 'Workout Log Interface',
      seoDescription: 'Mobile interface showing detailed workout logs.'
    },
    videoImage: {
      url: '/images-v2/exercise-videos.png?v=2',
      alt: 'Video Demonstration Interface',
      seoDescription: 'Mobile interface showing exercise video demonstrations.'
    },
    macroImage: {
      url: '/images-v2/macro-tracking-app.jpg?v=2',
      alt: 'Macro Dashboard Interface',
      seoDescription: 'Mobile interface showing macro nutrient tracking dashboard.'
    },
    nutritionLogImage: {
      url: '/images-v2/recipe-tracking.png?v=2',
      alt: 'Nutrition Log Interface',
      seoDescription: 'Mobile interface showing nutrition and recipe logging.'
    },
    habitsImage: {
      url: '/images-v2/habit-tracking.png?v=2',
      alt: 'Habits Interface',
      seoDescription: 'Mobile interface showing daily habit tracking.'
    },
  },
  challenge42: {
    heroImage: {
      url: '/images-v2/mountain-biking.jpg?v=2',
      alt: 'Mountain Biking',
      seoDescription: 'A mountain biker on a trail, representing the challenge and adventure of the 42 Day Reset.'
    },
  },
  contact: {
    heroImage: {
      url: '/images-v2/dad-carrypack-hiking.jpg?v=2',
      alt: 'Contact Page Hero',
      seoDescription: 'Atmospheric gym background for contact page.'
    }
  },
  philosophy: {
    heroImage: {
      url: '/images-v2/dad-carrypack-hiking.jpg?v=2',
      alt: 'Active Dad carrying kid while hiking',
      seoDescription: 'An active dad hiking with child in carry pack, representing the play harder nature of the philosophy.'
    }
  },
  corporateWellness: {
    heroImage: {
      url: '/images-v2/pexels-pnw-prod-7625047.jpg?v=2',
      alt: 'Corporate team hiking',
      seoDescription: 'Team members having outdor adventures together, illustrating the work-life balance and performance focus of corporate wellness programs.'
    }
  },
  services: {
    heroImage: {
      url: '/images-v2/dad-carrypack-hiking.jpg?v=2',
      alt: 'Outdoor Adventure',
      seoDescription: 'A person hiking in the mountains, representing the freedom and capacity built through fitness.'
    }
  },
  blog: {
    heroImage: {
      url: '/images-v2/dad-carrypack-hiking.jpg?v=2',
      alt: 'Paddleboarding',
      seoDescription: 'A person paddleboarding on a calm lake, representing balance and active recovery.'
    }
  },
  tools: {
    heroImage: {
      url: '/images-v2/pexels-pripicart-591216.jpg?v=2',
      alt: 'Gym equipment',
      seoDescription: 'Gym equipment in a modern facility, representing the tools needed for success.'
    }
  },
  calorieCalculator: {
    heroImage: {
      url: '/images-v2/dad-carrypack-hiking.jpg?v=2',
      alt: 'Healthy food',
      seoDescription: 'Fresh, healthy food ingredients, representing nutrition and calorie management.'
    }
  },
  oneRmEstimator: {
    heroImage: {
      url: '/images-v2/dad-carrypack-hiking.jpg?v=2',
      alt: 'Weightlifting',
      seoDescription: 'A person lifting weights, representing strength training and performance measurement.'
    }
  },
  layout: {
    logoLight: {
      url: '/images-v2/WRK-LOGOS-(Final).png?v=2',
      alt: 'WRK Personal Training Logo (Light)',
      seoDescription: 'White WRK Personal Training logo for dark backgrounds.'
    },
    logoDark: {
      url: '/images-v2/wrk-logo-black-transparent.png?v=2',
      alt: 'WRK Personal Training Logo (Dark)',
      seoDescription: 'Black WRK Personal Training logo for light backgrounds.'
    }
  },
  gallery: {
    jetski: {
      url: '/images-v2/female-jetski.jpg?v=2',
      alt: 'Woman on jetski',
      seoDescription: 'Woman riding a jetski.'
    },
    surfboard: {
      url: '/images-v2/guy-surfboard.jpg?v=2',
      alt: 'Man with surfboard',
      seoDescription: 'Man carrying a surfboard.'
    },
    activeMum: {
      url: '/images-v2/mum-kid-hiking.jpg?v=2',
      alt: 'Active Mum',
      seoDescription: 'An active mother.'
    },
  }
};

export const PAGE_LABELS: Record<string, string> = {
  home: 'Home Page',
  personalTraining: 'Personal Training',
  onlineCoaching: 'Online Coaching',
  challenge42: '42 Day Reset',
  philosophy: 'Philosophy',
  corporateWellness: 'Corporate Wellness',
  services: 'Services Page',
  blog: 'Blog Archive',
  tools: 'Tools Archive',
  calorieCalculator: 'Calorie Calculator',
  oneRmEstimator: '1RM Estimator',
  contact: 'Contact Page',
  layout: 'Global Layout (Header/Footer)'
};

export const FIELD_LABELS: Record<string, string> = {
  heroImage: 'Hero / Header Image',
  logoLight: 'Logo (Light Mode / Dark Backgrounds)',
  logoDark: 'Logo (Dark Mode / Light Backgrounds)',
  ptImage: 'In-Person Training Card Image',
  onlineImage: 'Online Coaching Card Image',
  corporateImage: 'Corporate Wellness Card Image',
  mainImage: 'Main Feature Image',
  workoutLogImage: 'Phone Screen: Session Log',
  videoImage: 'Phone Screen: Video Example',
  macroImage: 'Phone Screen: Macro Dashboard',
  nutritionLogImage: 'Phone Screen: Nutrition Log',
  habitsImage: 'Feature: Habits Image'
};