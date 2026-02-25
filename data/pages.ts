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
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop',
    ptImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    onlineImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop',
    corporateImage: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2070&auto=format&fit=crop',
  },
  personalTraining: {
    mainImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
  },
  onlineCoaching: {
    // Converted Google Drive View Link to Direct Image Link
    workoutLogImage: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&auto=format&fit=crop',
    videoImage: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=600&auto=format&fit=crop',
    macroImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop',
    nutritionLogImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop',
    habitsImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop',
  },
  challenge42: {
    heroBackground: 'https://images.unsplash.com/photo-1552674605-469523f54050?q=80&w=1920&auto=format&fit=crop',
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