export interface Author {
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML string
  date: string; // Display date
  isoDate: string; // ISO 8601 for Schema.org
  category: string;
  imageUrl: string;
  author: Author;
  seoTitle?: string;
  seoDescription?: string;
}

const DEFAULT_AUTHOR: Author = {
  name: "Hayden Richards",
  role: "Founder & Head Coach",
  bio: "A movement specialist with 20 years of experience, Hayden delivers precision training for high performers - some run companies, some run households...they all require an approach that doesn't dominate their diary.",
  avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop"
};

// This acts as our initial "posts.json" data
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "how-to-optimize-sleep",
    title: "How to Optimize Sleep for Recovery",
    excerpt: "Sleep is the foundation of performance. Learn the 3 key protocols to improve your deep sleep scores tonight.",
    content: "<p>Sleep is not a passive state; it is an active recovery process. Without adequate sleep, your training efforts are largely wasted.</p><h2>The 3-2-1 Rule</h2><p>To optimize sleep, try the <strong>3-2-1 rule</strong>:</p><ul><li>3 hours before bed: No food</li><li>2 hours before bed: No work</li><li>1 hour before bed: No screens</li></ul><p>For more details, check out this <a href='https://hubermanlab.com/toolkit-for-sleep/' target='_blank'>comprehensive guide</a> by Dr. Huberman.</p>",
    date: "October 15, 2023",
    isoDate: "2023-10-15T08:00:00+13:00",
    category: "Recovery",
    imageUrl: "https://images.unsplash.com/photo-1541781777631-fa182f3a4b3c?q=80&w=800&auto=format&fit=crop",
    author: DEFAULT_AUTHOR,
    seoTitle: "Sleep Optimization Guide | WRK Personal Training",
    seoDescription: "Maximize your recovery with these evidence-based sleep protocols. The 3-2-1 rule explained."
  },
  {
    id: "2",
    slug: "strength-training-101",
    title: "Strength Training 101: The Big Four",
    excerpt: "You don't need a complex routine. You need to master the Squat, Bench, Deadlift, and Overhead Press.",
    content: "<p>Complexity is the enemy of execution. When starting out, your focus should be entirely on the compound lifts.</p><h2>1. The Squat</h2><p>The king of all exercises. It trains the entire posterior chain and core.</p><img src='https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop' alt='Athlete performing a back squat' /><p>Ensure your depth hits parallel and your chest stays up.</p><h2>2. The Deadlift</h2><p>The purest test of strength. Pick it up, put it down safely.</p>",
    date: "November 02, 2023",
    isoDate: "2023-11-02T10:00:00+13:00",
    category: "Training",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    author: DEFAULT_AUTHOR,
    seoTitle: "Beginner Strength Training Guide | WRK Personal Training",
    seoDescription: "Master the big four compound lifts to build strength and longevity. A simple guide for beginners."
  },
  {
    id: "3",
    slug: "nutrition-for-busy-pros",
    title: "Nutrition Strategies for Corporate Athletes",
    excerpt: "Meal prep taking too long? Here is how to hit your macros without spending your entire Sunday in the kitchen.",
    content: "<p>Time is your most valuable asset. Your nutrition strategy needs to reflect that.</p><h2>Batch Cooking vs. Ingredient Prep</h2><p>Don't cook full meals. Cook <strong>ingredients</strong>. Roast a tray of chicken, boil a pot of rice, and chop veggies. Combine them differently throughout the week with different sauces.</p><p>This takes 1 hour and saves you 10.</p>",
    date: "December 10, 2023",
    isoDate: "2023-12-10T09:00:00+13:00",
    category: "Nutrition",
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
    author: DEFAULT_AUTHOR,
    seoTitle: "Nutrition Hacks for Busy Professionals | WRK",
    seoDescription: "Stop wasting time meal prepping. Learn the ingredient prep method for sustainable nutrition."
  }
];