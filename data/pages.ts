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
  philosophy: {
    heroImage: CMSImage;
  };
  corporateWellness: {
    heroImage: CMSImage;
  };
  contact: {
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
      url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/downhill-skiing.jpg',
      alt: 'Downhill Skiing - Vitality',
      seoDescription: 'A skier carving down a snowy mountain, representing the vitality and energy gained from WRK Personal Training.'
    },
    ptImage: {
      url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/dad-kid-paddleboard.jpg',
      alt: 'Dad and kid paddleboarding',
      seoDescription: 'A father and child paddleboarding together, showcasing the active lifestyle enabled by personal training.'
    },
    onlineImage: {
      url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/family-activity.jpg',
      alt: 'Family activity outdoors',
      seoDescription: 'A family enjoying outdoor activities, highlighting the freedom and capacity built through online coaching.'
    },
    corporateImage: {
      url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/golfing.jpg',
      alt: 'Corporate team golfing',
      seoDescription: 'Professionals playing golf, illustrating the work-life balance and performance focus of corporate wellness programs.'
    },
    lifestyleImages: [
      {
        url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/dad-kid-paddleboard.jpg',
        alt: 'Dad and kid paddleboarding',
        seoDescription: 'Active parenting and outdoor adventure.'
      },
      {
        url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/mum-kid-hiking.jpg',
        alt: 'Mum and kid hiking',
        seoDescription: 'Mother and child hiking in nature, representing strength and family time.'
      },
      {
        url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/guy-surfboard.jpg',
        alt: 'Man with surfboard',
        seoDescription: 'A man walking with a surfboard, symbolizing the physical capacity to enjoy hobbies.'
      },
      {
        url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/female-jetski.jpg',
        alt: 'Woman on jetski',
        seoDescription: 'A woman riding a jetski, showing the energy and confidence gained from fitness.'
      },
    ],
    appImages: [
      {
        url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/habit-tracking.png',
        alt: 'WRK App Habit Tracking',
        seoDescription: 'Screenshot of the WRK app showing habit tracking features.'
      },
      {
        url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/exercise-history.png',
        alt: 'WRK App Exercise History',
        seoDescription: 'Screenshot of the WRK app displaying exercise history and progress.'
      },
      {
        url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/macro-tracking-app.png',
        alt: 'WRK App Macro Tracking',
        seoDescription: 'Screenshot of the WRK app showing macro and nutrition tracking.'
      },
      {
        url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/exercise-videos.png',
        alt: 'WRK App Exercise Videos',
        seoDescription: 'Screenshot of the WRK app showing instructional exercise videos.'
      },
    ]
  },
  personalTraining: {
    heroImage: {
      url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/mum-kid-hiking.jpg',
      alt: 'Mum and kid hiking',
      seoDescription: 'A mother and child hiking, representing the real-world application of strength training.'
    },
    mainImage: {
      url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/mum-kid-hiking.jpg',
      alt: 'Mum and kid hiking',
      seoDescription: 'A mother and child hiking, representing the real-world application of strength training.'
    },
  },
  onlineCoaching: {
    heroImage: {
      url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/family-activity.jpg',
      alt: 'Family activity outdoors',
      seoDescription: 'A family enjoying outdoor activities, highlighting the freedom and capacity built through online coaching.'
    },
    workoutLogImage: {
      url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/exercise-history.png',
      alt: 'Workout Log Interface',
      seoDescription: 'Mobile interface showing detailed workout logs.'
    },
    videoImage: {
      url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/exercise-videos.png',
      alt: 'Video Demonstration Interface',
      seoDescription: 'Mobile interface showing exercise video demonstrations.'
    },
    macroImage: {
      url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/macro-tracking-app.png',
      alt: 'Macro Dashboard Interface',
      seoDescription: 'Mobile interface showing macro nutrient tracking dashboard.'
    },
    nutritionLogImage: {
      url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/recipe-tracking.png',
      alt: 'Nutrition Log Interface',
      seoDescription: 'Mobile interface showing nutrition and recipe logging.'
    },
    habitsImage: {
      url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/habit-tracking.png',
      alt: 'Habits Interface',
      seoDescription: 'Mobile interface showing daily habit tracking.'
    },
  },
  challenge42: {
    heroImage: {
      url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/mountain-biking.jpg',
      alt: 'Mountain Biking',
      seoDescription: 'A mountain biker on a trail, representing the challenge and adventure of the 42 Day Reset.'
    },
  },
  philosophy: {
    heroImage: {
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
      alt: 'Dark gym atmosphere',
      seoDescription: 'A dark, atmospheric gym setting representing the serious, focused nature of the philosophy.'
    }
  },
  corporateWellness: {
    heroImage: {
      url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/golfing.jpg',
      alt: 'Corporate team golfing',
      seoDescription: 'Professionals playing golf, illustrating the work-life balance and performance focus of corporate wellness programs.'
    }
  },
  contact: {
    heroImage: {
      url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
      alt: 'Gym weights',
      seoDescription: 'Weights in a gym, representing the commitment to training.'
    }
  },
  layout: {
    logoLight: {
      url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/main/images/wrk-logo-white-transparent.png',
      alt: 'WRK Personal Training Logo (Light)',
      seoDescription: 'White WRK Personal Training logo for dark backgrounds.'
    },
    logoDark: {
      url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/main/images/wrk-logo-black-transparent.png',
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
      url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/guy-surfboard.jpg',
      alt: 'Man with surfboard',
      seoDescription: 'Man carrying a surfboard.'
    },
    activeMum: {
      url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/active-mum.jpg',
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
  heroBackground: 'Background Image',
  workoutLogImage: 'Phone Screen: Session Log',
  videoImage: 'Phone Screen: Video Example',
  macroImage: 'Phone Screen: Macro Dashboard',
  nutritionLogImage: 'Phone Screen: Nutrition Log',
  habitsImage: 'Feature: Habits Image'
};