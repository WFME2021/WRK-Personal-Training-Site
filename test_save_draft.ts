import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc, writeBatch } from 'firebase/firestore';
import firebaseConfig from './firebase-applet-config.json';
import { BLOG_POSTS } from './data/blogs';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId || '(default)');

const DEFAULT_AUTHOR = {
  name: "H. Richards",
  role: "Personal Trainer",
  bio: "With over 20 years of experience coaching high performers...",
  avatarUrl: "https://i.postimg.cc/ZYHDT3kr/Screen-Shot-2026-06-23-at-2-27-18-PM.png"
};

const EMPTY_POST = {
  id: Date.now().toString(),
  slug: 'test-draft',
  title: 'Test Draft',
  excerpt: 'Test',
  content: '## Intro',
  faq: '## FAQ',
  date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
  isoDate: new Date().toISOString(),
  updatedDate: '',
  category: 'Training & Exercise',
  image: {
    url: 'https://picsum.photos/800/600',
    alt: 'Default blog post image',
    seoDescription: 'Default blog post image'
  },
  author: DEFAULT_AUTHOR,
  seoTitle: '',
  seoDescription: '',
  primaryKeyword: '',
  secondaryKeywords: '',
  ctaText: '',
  ctaLink: '',
  references: '',
  relatedPosts: [],
  localLocation: '',
  localServiceCategory: '',
  localServicePage: '',
  localKeywordNote: '',
  status: 'draft'
};

async function main() {
  const batch = writeBatch(db);
  const docRef = doc(db, 'blogs', EMPTY_POST.id);
  batch.set(docRef, EMPTY_POST);
  await batch.commit();
  console.log("Draft saved successfully.");
}
main().catch(console.error);
