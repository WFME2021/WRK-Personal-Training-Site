import React, { createContext, useContext, useState, useEffect } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blogs';
import { PAGE_CONTENT, PageContentConfig } from '../data/pageContent';

type PageContentState = Record<string, PageContentConfig>;

interface ContentContextType {
  blogPosts: BlogPost[];
  pageContent: PageContentState;
  updateBlogPosts: (posts: BlogPost[]) => void;
  updatePageContent: (content: PageContentState) => void;
  importData: (data: any) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const CONTENT_URL = '/content.json';

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
  // Initialize from localStorage to persist changes
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    try {
      const saved = localStorage.getItem('wrk_site_blogs');
      return saved ? JSON.parse(saved) : BLOG_POSTS;
    } catch (e) {
      return BLOG_POSTS;
    }
  });

  const [pageContent, setPageContent] = useState<PageContentState>(() => {
    try {
      const saved = localStorage.getItem('wrk_site_pages_v21'); // Changed key to avoid loading old structure
      return saved ? mergeDeep(PAGE_CONTENT, JSON.parse(saved)) : PAGE_CONTENT;
    } catch (e) {
      return PAGE_CONTENT;
    }
  });

  // Fetch external content on mount
  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Add timestamp to bypass cache
        const response = await fetch(`${CONTENT_URL}?t=${Date.now()}`);
        if (!response.ok) throw new Error('Failed to fetch content');
        
        const data = await response.json();
        
        if (data.blogs && Array.isArray(data.blogs)) {
            setBlogPosts(data.blogs);
        }
        
        if (data.pages) {
            setPageContent(prev => mergeDeep(prev, data.pages));
        }
      } catch (error) {
        console.warn('Could not fetch dynamic content, using local defaults. This is expected during development if content.json is not yet generated or if offline.', error);
      }
    };

    fetchContent();
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('wrk_site_blogs', JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem('wrk_site_pages_v21', JSON.stringify(pageContent));
  }, [pageContent]);

  const updateBlogPosts = (posts: BlogPost[]) => setBlogPosts(posts);
  const updatePageContent = (content: PageContentState) => setPageContent(content);

  const importData = (data: any) => {
    if (data.blogs && Array.isArray(data.blogs)) setBlogPosts(data.blogs);
    // Merge page content carefully
    if (data.pages) {
      setPageContent(prev => mergeDeep(prev, data.pages));
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