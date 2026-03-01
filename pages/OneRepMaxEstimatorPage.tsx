import React from 'react';
import { OneRepMaxEstimator } from '../components/OneRepMaxEstimator';
import { SeoHead } from '../components/SeoHead';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { Hero } from '../components/Hero';
import { MidPageBanner } from '../components/MidPageBanner';
import { useContent } from '../context/ContentContext';

export const OneRepMaxEstimatorPage: React.FC = () => {
  const { pageContent } = useContent();
  const { hero, banner, seo } = pageContent.oneRmEstimator;

  return (
    <>
      <SeoHead 
        title={seo.title}
        description={seo.description}
      />
      
      <div className="bg-primary min-h-screen transition-colors duration-300">
        <Hero 
          image={hero.image}
          title={hero.h1}
          subtitle={hero.subhead}
          bullets={hero.bullets}
          kicker={hero.kicker}
          secondaryCta={{
            label: "Back to Tools",
            href: "/tools"
          }}
        />

        <div className="px-6 py-24">
           <OneRepMaxEstimator />
        </div>

        <MidPageBanner 
          image={banner.image}
          tagline={banner.tagline}
          support={banner.support}
        />
      </div>
    </>
  );
};
