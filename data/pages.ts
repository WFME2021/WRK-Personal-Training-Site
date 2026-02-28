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
      url: 'https://i.postimg.cc/mkHkTfpx/skiing-2.jpg',
      alt: 'Downhill Skiing - Vitality',
      seoDescription: 'A skier carving down a snowy mountain, representing the vitality and energy gained from WRK Personal Training.'
    },
    ptImage: {
      url: 'https://i.postimg.cc/gJwkKbW6/dad-kid-paddleboard.jpg',
      alt: 'Dad and kid paddleboarding',
      seoDescription: 'A father and child paddleboarding together, showcasing the active lifestyle enabled by personal training.'
    },
    onlineImage: {
      url: 'https://i.postimg.cc/vBXwJPvy/family-activity.jpg',
      alt: 'Family activity outdoors',
      seoDescription: 'A family enjoying outdoor activities, highlighting the freedom and capacity built through online coaching.'
    },
    corporateImage: {
      url: 'https://i.postimg.cc/wMp8RCTM/golfing.jpg',
      alt: 'Corporate team golfing',
      seoDescription: 'Professionals playing golf, illustrating the work-life balance and performance focus of corporate wellness programs.'
    },
    lifestyleImages: [
      {
        url: 'https://i.postimg.cc/gJwkKbW6/dad-kid-paddleboard.jpg',
        alt: 'Dad heading out surfing',
        seoDescription: 'Active parenting and outdoor adventure.'
      },
      {
        url: 'https://i.postimg.cc/PrV3gGs8/mum-kid-hiking.jpg',
        alt: 'Mum and kid hiking',
        seoDescription: 'Mother and child hiking in nature, representing strength and family time.'
      },
      {
        url: 'https://i.postimg.cc/Vk6ytB1q/guy-surfboard.jpg',
        alt: 'Man with surfboard',
        seoDescription: 'A man walking with a surfboard, symbolizing the physical capacity to enjoy hobbies.'
      },
      {
        url: 'https://i.postimg.cc/zXN8ygVy/female-jetski.jpg',
        alt: 'Woman on jetski',
        seoDescription: 'A woman riding a jetski, showing the energy and confidence gained from fitness.'
      },
    ],
    appImages: [
      {
        url: 'https://i.postimg.cc/XqmjPHVV/habit-tracking.png',
        alt: 'WRK App Habit Tracking',
        seoDescription: 'Screenshot of the WRK app showing habit tracking features.'
      },
      {
        url: 'https://i.postimg.cc/8CS5D0LN/fat-loss-tracking.png',
        alt: 'WRK App Fat Loss Tracking',
        seoDescription: 'Screenshot of the WRK app displaying fat loss progress.'
      },
      {
        url: 'https://i.postimg.cc/YSrhwFz6/macro-tracking-app.jpg',
        alt: 'WRK App Macro Tracking',
        seoDescription: 'Screenshot of the WRK app showing macro and nutrition tracking.'
      },
      {
        url: 'https://i.postimg.cc/WzHzvp7V/exercise-videos.png',
        alt: 'WRK App Exercise Videos',
        seoDescription: 'Screenshot of the WRK app showing instructional exercise videos.'
      },
    ]
  },
  personalTraining: {
    heroImage: {
      url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
      alt: 'Mum and kid hiking',
      seoDescription: 'A mother and child hiking, representing the real-world application of strength training.'
    },
    mainImage: {
      url: 'https://i.postimg.cc/gjZFxYP7/active-mum.jpg',
      alt: 'Mum and kid hiking',
      seoDescription: 'A mother and child playing, representing the real-world application of strength training.'
    },
  },
  onlineCoaching: {
    heroImage: {
      url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
      alt: 'Family activity outdoors',
      seoDescription: 'A family enjoying outdoor activities, highlighting the freedom and capacity built through online coaching.'
    },
    workoutLogImage: {
      url: 'https://i.postimg.cc/3w5FjthV/exercise-history.png',
      alt: 'Workout Log Interface',
      seoDescription: 'Mobile interface showing detailed workout logs.'
    },
    videoImage: {
      url: 'https://i.postimg.cc/WzHzvp7V/exercise-videos.png',
      alt: 'Video Demonstration Interface',
      seoDescription: 'Mobile interface showing exercise video demonstrations.'
    },
    macroImage: {
      url: 'https://i.postimg.cc/YSrhwFz6/macro-tracking-app.jpg',
      alt: 'Macro Dashboard Interface',
      seoDescription: 'Mobile interface showing macro nutrient tracking dashboard.'
    },
    nutritionLogImage: {
      url: 'https://i.postimg.cc/ZRgR3MtP/recipe-tracking.png',
      alt: 'Nutrition Log Interface',
      seoDescription: 'Mobile interface showing nutrition and recipe logging.'
    },
    habitsImage: {
      url: 'https://i.postimg.cc/XqmjPHVV/habit-tracking.png',
      alt: 'Habits Interface',
      seoDescription: 'Mobile interface showing daily habit tracking.'
    },
  },
  challenge42: {
    heroImage: {
      url: 'https://i.postimg.cc/XYhPyRQh/mountain-biking.jpg',
      alt: 'Mountain Biking',
      seoDescription: 'A mountain biker on a trail, representing the challenge and adventure of the 42 Day Reset.'
    },
  },
  contact: {
    heroImage: {
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
      alt: 'Contact Page Hero',
      seoDescription: 'Atmospheric gym background for contact page.'
    }
  },
  philosophy: {
    heroImage: {
      url: 'https://i.postimg.cc/MKnbjvN1/dad-carrypack-hiking.jpg',
      alt: 'Active Dad carrying kid while hiking',
      seoDescription: 'An active dad hiking with child in carry pack, representing the play harder nature of the philosophy.'
    }
  },
  corporateWellness: {
    heroImage: {
      url: 'https://i.postimg.cc/FH4gLX6q/pexels-pnw-prod-7625047.jpg',
      alt: 'Corporate team hiking',
      seoDescription: 'Team members having outdor adventures together, illustrating the work-life balance and performance focus of corporate wellness programs.'
    }
  },
  layout: {
    logoLight: {
      url: 'https://i.postimg.cc/13cs5yGp/WRK-LOGOS-(Final).png',
      alt: 'WRK Personal Training Logo (Light)',
      seoDescription: 'White WRK Personal Training logo for dark backgrounds.'
    },
    logoDark: {
      url: 'https://i.postimg.cc/59nFgbLv/wrk-logo-black-transparent.png',
      alt: 'WRK Personal Training Logo (Dark)',
      seoDescription: 'Black WRK Personal Training logo for light backgrounds.'
    }
  },
  gallery: {
    jetski: {
      url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/female-jetski.jpg',
      alt: 'Woman on jetski',
      seoDescription: 'Woman riding a jetski.'
    },
    surfboard: {
      url: 'https://i.postimg.cc/Vk6ytB1q/guy-surfboard.jpg',
      alt: 'Man with surfboard',
      seoDescription: 'Man carrying a surfboard.'
    },
    activeMum: {
      url: 'https://i.postimg.cc/PrV3gGs8/mum-kid-hiking.jpg',
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