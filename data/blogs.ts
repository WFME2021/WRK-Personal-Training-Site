import { CMSImage } from './pages';

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
  faq?: string; // HTML string for FAQ section
  date: string; // Display date
  isoDate: string; // ISO 8601 for Schema.org
  updatedDate?: string;
  category: string;
  image: CMSImage;
  author: Author;
  seoTitle?: string;
  seoDescription?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string;
  ctaText?: string;
  ctaLink?: string;
  references?: string; // HTML string for references
  relatedPosts?: string[]; // Array of blog post IDs
  localLocation?: string;
  localServiceCategory?: string;
  localServicePage?: string;
  localKeywordNote?: string;
  status?: 'draft' | 'published';
}

const DEFAULT_AUTHOR: Author = {
  name: "Hayden Richards",
  role: "Founder & Head Coach",
  bio: "A movement specialist with 20 years of experience, Hayden delivers precision training for high performers - some run companies, some run households...they all require an approach that doesn't dominate their diary.",
  avatarUrl: "https://i.postimg.cc/MKnbjvN1/dad-carrypack-hiking.jpg"
};

// This acts as our initial "posts.json" data
export const BLOG_POSTS: BlogPost[] = [];
