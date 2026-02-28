import React from 'react';
import { OneRepMaxEstimator } from '../components/OneRepMaxEstimator';
import { SeoHead } from '../components/SeoHead';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { Hero } from '../components/Hero';
import { useContent } from '../context/ContentContext';

export const OneRepMaxEstimatorPage: React.FC = () => {
  const { pageContent } = useContent();
  const { heroImage } = pageContent.oneRmEstimator;

  return (
    <>
      <SeoHead 
        title="1RM Estimator | One Rep Max Calculator | WRK"
        description="Calculate your estimated 1 Rep Max (1RM) for strength training. Use this tool to set your training percentages."
      />
      
      <div className="bg-primary min-h-screen transition-colors duration-300">
        <Hero 
          image={heroImage}
          title="1RM Estimator"
          subtitle="Calculate your strength ceiling without testing to failure. Use this to set your training percentages."
          bullets={[
            "Safe Estimation",
            "Training Percentages",
            "Progress Tracking"
          ]}
          secondaryCta={{
            label: "Back to Tools",
            href: "/tools"
          }}
          kicker="Never test a 1RM when you can estimate it."
        />

        <div className="px-6 py-24">
           <OneRepMaxEstimator />
        </div>
      </div>
    </>
  );
};
