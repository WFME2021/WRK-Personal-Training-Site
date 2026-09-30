import React, { useEffect } from 'react';
import { SeoHead } from '../components/SeoHead';
import OnlineCoachingClient from '../app/online-coaching/OnlineCoachingClient';

export const OnlineCoaching: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Online GLP-1 Fitness Coaching',
    provider: {
      '@type': 'HealthAndFitnessBusiness',
      name: 'WRK Personal Training',
    },
    description:
      'Specialist online fitness and nutrition coaching for GLP-1 patients in New Zealand and worldwide. Preserve lean muscle, simplify protein intake, and build lasting strength habits.',
  };

  return (
    <>
      <SeoHead
        title="Online GLP-1 Fitness Coach | Protect Muscle & Build Strength | WRK"
        description="Specialist online fitness and nutrition coaching for GLP-1 patients in New Zealand and worldwide. Preserve lean muscle, simplify protein intake, and build lasting strength habits."
        schema={schema}
      />
      <OnlineCoachingClient />
    </>
  );
};
