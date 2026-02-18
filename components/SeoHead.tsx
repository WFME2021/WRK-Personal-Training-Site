
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SeoHeadProps {
  title: string;
  description: string;
  schema?: object;
  type?: 'website' | 'article';
  imageUrl?: string;
  publishedTime?: string;
  authorName?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ 
  title, 
  description, 
  schema, 
  type = 'website',
  imageUrl,
  publishedTime,
  authorName
}) => {
  const location = useLocation();
  const canonicalUrl = `https://www.wrkpersonaltraining.co.nz${location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // 3. Update OG Tags (Basic implementation)
    const updateMeta = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('og:title', title);
    updateMeta('og:description', description);
    updateMeta('og:url', canonicalUrl);
    updateMeta('og:type', type);
    if (imageUrl) updateMeta('og:image', imageUrl);

    // 4. Inject JSON-LD Schema
    if (schema) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }

    // Cleanup function
    return () => {
      // Optional: Reset title or meta tags if needed on unmount
    };
  }, [title, description, schema, canonicalUrl, type, imageUrl]);

  return null; // This component does not render UI
};
