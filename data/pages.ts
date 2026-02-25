export interface PageContent {
  home: {
    heroImage: string;
    ptImage: string;
    onlineImage: string;
    corporateImage: string;
  };
  personalTraining: {
    mainImage: string;
  };
  onlineCoaching: {
    workoutLogImage: string;
    videoImage: string;
    macroImage: string;
    nutritionLogImage: string;
    habitsImage: string;
  };
  challenge42: {
    heroBackground: string;
  };
  gallery: {
    jetski: string;
    surfboard: string;
    activeMum: string;
  };
}

export const INITIAL_PAGE_CONTENT: PageContent = {
  home: {
    heroImage: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/family-activity.jpg',
    ptImage: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/dad-kid-paddleboard.jpg',
    onlineImage: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/downhill-skiing.jpg',
    corporateImage: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/golfing.jpg',
  },
  personalTraining: {
    mainImage: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/mum-kid-hiking.jpg',
  },
  onlineCoaching: {
    workoutLogImage: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/exercise-history.png',
    videoImage: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/exercise-videos.png',
    macroImage: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/macro-tracking-app.png',
    nutritionLogImage: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/recipe-tracking.png',
    habitsImage: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/habit-tracking.png',
  },
  challenge42: {
    heroBackground: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/mountain-biking.jpg',
  },
  gallery: {
    jetski: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/female-jetski.jpg',
    surfboard: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/guy-surfboard.jpg',
    activeMum: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/active-mum.jpg',
  }
};

export const PAGE_LABELS: Record<string, string> = {
  home: 'Home Page',
  personalTraining: 'Personal Training',
  onlineCoaching: 'Online Coaching',
  challenge42: '42 Day Reset'
};

export const FIELD_LABELS: Record<string, string> = {
  heroImage: 'Hero / Header Image',
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