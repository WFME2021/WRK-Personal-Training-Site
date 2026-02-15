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
}

export const INITIAL_PAGE_CONTENT: PageContent = {
  home: {
    heroImage: 'https://picsum.photos/seed/fitness_hero/1920/1080?grayscale',
    ptImage: 'https://picsum.photos/seed/pt/800/1000?grayscale',
    onlineImage: 'https://picsum.photos/seed/online/800/1000?grayscale',
    corporateImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop&grayscale',
  },
  personalTraining: {
    mainImage: 'https://picsum.photos/id/49/800/1000?grayscale',
  },
  onlineCoaching: {
    // Converted Google Drive View Link to Direct Image Link
    workoutLogImage: 'https://drive.google.com/uc?export=view&id=17qM7_h-PQ_Yppg47zloqx7OKsSHmaPjL',
    videoImage: 'https://placehold.co/1170x2532/1c1c1c/FFF?text=Exercise+Video',
    macroImage: 'https://placehold.co/1170x2532/1c1c1c/FFF?text=Macro+Dashboard',
    nutritionLogImage: 'https://placehold.co/1170x2532/1c1c1c/FFF?text=Nutrition+Log',
    habitsImage: 'https://drive.google.com/uc?export=view&id=17qM7_h-PQ_Yppg47zloqx7OKsSHmaPjL',
  },
  challenge42: {
    heroBackground: 'https://picsum.photos/id/73/1920/1080?grayscale&blur=2',
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