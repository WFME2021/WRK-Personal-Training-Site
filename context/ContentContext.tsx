import React, { createContext, useContext, useState, useEffect } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blogs';
import { INITIAL_PAGE_CONTENT, PageContent } from '../data/pages';

interface ContentContextType {
  blogPosts: BlogPost[];
  pageContent: PageContent;
  updateBlogPosts: (posts: BlogPost[]) => void;
  updatePageContent: (content: PageContent) => void;
  importData: (data: any) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const CONTENT_URL = import.meta.env.VITE_CONTENT_URL || '/content.json';

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

  const [pageContent, setPageContent] = useState<PageContent>(() => {
    try {
      const saved = localStorage.getItem('wrk_site_pages');
      return saved ? { ...INITIAL_PAGE_CONTENT, ...JSON.parse(saved) } : INITIAL_PAGE_CONTENT;
    } catch (e) {
      return INITIAL_PAGE_CONTENT;
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
            // Simple update - trust the remote content if it exists
            // We merge with INITIAL_PAGE_CONTENT to ensure new fields are present
            setPageContent(prev => ({
                ...INITIAL_PAGE_CONTENT,
                ...data.pages
            }));
        }
      } catch (error) {
        console.error('Error fetching dynamic content:', error);
      }
    };

    fetchContent();
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('wrk_site_blogs', JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem('wrk_site_pages', JSON.stringify(pageContent));
  }, [pageContent]);

  const updateBlogPosts = (posts: BlogPost[]) => setBlogPosts(posts);
  const updatePageContent = (content: PageContent) => setPageContent(content);

  const importData = (data: any) => {
    if (data.blogs && Array.isArray(data.blogs)) setBlogPosts(data.blogs);
    // Merge page content carefully
    if (data.pages) {
      setPageContent(prev => ({
        ...prev,
        ...data.pages
      }));
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