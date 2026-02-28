
import React from 'react';
import { CalorieCalculator } from '../components/CalorieCalculator';
import { SeoHead } from '../components/SeoHead';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { Hero } from '../components/Hero';
import { useContent } from '../context/ContentContext';

export const CalorieCalculatorPage: React.FC = () => {
  const { pageContent } = useContent();
  const { heroImage } = pageContent.calorieCalculator;

  return (
    <>
      <SeoHead 
        title="Calorie Calculator | WRK"
        description="Calculate your calories and macros for maintenance, muscle gain, or body recomposition."
      />
      
      <div className="bg-primary min-h-screen transition-colors duration-300">
        <Hero 
          image={heroImage}
          title="Calorie Calculator"
          subtitle="Fueling for performance, not starvation. Calculate your daily targets."
          bullets={[
            "Maintenance Targets",
            "Fat Loss Targets",
            "Muscle Gain Targets"
          ]}
          secondaryCta={{
            label: "Back to Tools",
            href: "/tools"
          }}
          kicker="Use this as a starting point, then adjust based on real-world progress."
        />

        <div className="px-6 py-24">
           <CalorieCalculator />
        </div>
      </div>
    </>
  );
};
