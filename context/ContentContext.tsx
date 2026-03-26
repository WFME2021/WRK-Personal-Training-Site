import React, { createContext, useContext, useState, useEffect } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blogs';
import { PAGE_CONTENT, PageContentConfig } from '../data/pageContent';
import { db, auth } from '../firebase';
import { collection, doc, onSnapshot, setDoc, getDocs, writeBatch } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string;
    email?: string | null;
    emailVerified?: boolean;
    isAnonymous?: boolean;
    tenantId?: string | null;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

type PageContentState = Record<string, PageContentConfig>;

interface ContentContextType {
  blogPosts: BlogPost[];
  pageContent: PageContentState;
  updateBlogPosts: (posts: BlogPost[]) => Promise<void>;
  updatePageContent: (content: PageContentState) => Promise<void>;
  importData: (data: any) => Promise<void>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

// Helper function for deep merging objects
const isObject = (item: any) => {
  return (item && typeof item === 'object' && !Array.isArray(item));
};

const mergeDeep = (target: any, source: any) => {
  let output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target))
          Object.assign(output, { [key]: source[key] });
        else
          output[key] = mergeDeep(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
};

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [pageContent, setPageContent] = useState<PageContentState>(PAGE_CONTENT);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!isAuthReady) return;

    // Listen to blogs
    const unsubscribeBlogs = onSnapshot(collection(db, 'blogs'), (snapshot) => {
      if (!snapshot.empty) {
        const posts: BlogPost[] = [];
        snapshot.forEach((doc) => {
          posts.push(doc.data() as BlogPost);
        });
        // Sort by date descending
        posts.sort((a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime());
        setBlogPosts(posts);
      } else {
        // If empty, we could initialize it, but let's just use default for now
        setBlogPosts(BLOG_POSTS);
      }
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'blogs');
    });

    // Listen to pages
    const unsubscribePages = onSnapshot(collection(db, 'pages'), (snapshot) => {
      if (!snapshot.empty) {
        const pages: PageContentState = {};
        snapshot.forEach((doc) => {
          pages[doc.id] = doc.data() as PageContentConfig;
        });
        setPageContent(mergeDeep(PAGE_CONTENT, pages));
      } else {
        setPageContent(PAGE_CONTENT);
      }
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'pages');
    });

    return () => {
      unsubscribeBlogs();
      unsubscribePages();
    };
  }, [isAuthReady]);

  const updateBlogPosts = async (posts: BlogPost[]) => {
    try {
      const batch = writeBatch(db);
      
      // Get current blogs to find deletions
      const snapshot = await getDocs(collection(db, 'blogs'));
      const existingIds = new Set(snapshot.docs.map(doc => doc.id));
      
      posts.forEach(post => {
        const docRef = doc(db, 'blogs', post.id);
        batch.set(docRef, post);
        existingIds.delete(post.id);
      });
      
      // Delete removed posts
      existingIds.forEach(id => {
        const docRef = doc(db, 'blogs', id);
        batch.delete(docRef);
      });
      
      await batch.commit();
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'blogs');
    }
  };

  const updatePageContent = async (content: PageContentState) => {
    try {
      const batch = writeBatch(db);
      Object.entries(content).forEach(([pageId, pageData]) => {
        const docRef = doc(db, 'pages', pageId);
        batch.set(docRef, pageData);
      });
      await batch.commit();
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'pages');
    }
  };

  const importData = async (data: any) => {
    try {
      const batch = writeBatch(db);
      if (data.blogs && Array.isArray(data.blogs)) {
        data.blogs.forEach((post: BlogPost) => {
          const docRef = doc(db, 'blogs', post.id);
          batch.set(docRef, post);
        });
      }
      if (data.pages) {
        Object.entries(data.pages).forEach(([pageId, pageData]) => {
          const docRef = doc(db, 'pages', pageId);
          batch.set(docRef, pageData);
        });
      }
      await batch.commit();
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'import');
    }
  };

  return (
    <ContentContext.Provider value={{ blogPosts, pageContent, updateBlogPosts, updatePageContent, importData }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within a ContentProvider');
  return context;
};