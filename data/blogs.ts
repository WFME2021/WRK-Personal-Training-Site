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
  status?: 'draft' | 'published';
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
}

const DEFAULT_AUTHOR: Author = {
  name: "H. Richards",
  role: "Personal Trainer",
  bio: "With over 20 years of experience coaching high performers, H. Richards delivers precision training frameworks built on evidence and practical application. His approach cuts through the noise to help you achieve sustainable results, backed by consistently excellent 5-star client reviews.",
  avatarUrl: "https://i.postimg.cc/ZYHDT3kr/Screen-Shot-2026-06-23-at-2-27-18-PM.png"
};

// This acts as our initial "posts.json" data
export const BLOG_POSTS: BlogPost[] = [];
