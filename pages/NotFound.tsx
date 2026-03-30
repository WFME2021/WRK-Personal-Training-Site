import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';

export const NotFound: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="Page Not Found | WRK Personal Training" 
        description="The page you are looking for does not exist." 
      />
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center bg-primary pt-32 pb-24">
        <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-4 text-text-primary">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary uppercase tracking-tight">
          Page Not Found
        </h2>
        <p className="text-lg text-text-secondary mb-10 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button variant="primary" className="px-8 py-4 text-lg">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </>
  );
};
