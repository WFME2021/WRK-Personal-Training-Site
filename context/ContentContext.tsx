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