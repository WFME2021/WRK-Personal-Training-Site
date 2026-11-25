import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { PageHeroBanner } from '../components/PageHeroBanner';

export const NotFound: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="Page Not Found | WRK Personal Training" 
        description="The page you are looking for does not exist." 
      />
      <div className="bg-cream text-forest min-h-screen selection:bg-citron selection:text-forest">
        <PageHeroBanner
          imageSrc="/images/banner-coffee-chat.jpg"
          imageAlt="Calm sunlit Christchurch setting"
          align="center"
          compact
          eyebrow="404 · PAGE NOT FOUND"
          title="We couldn't find that page."
          subtitle="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        />
        <div className="py-16 px-6 text-center">
          <Link to="/">
            <Button variant="secondary" className="px-8 py-4 text-lg">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
