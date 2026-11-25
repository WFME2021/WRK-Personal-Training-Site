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
    serviceType: '1:1 Online Strength & Habit Coaching',
    provider: {
      '@type': 'HealthAndFitnessBusiness',
      name: 'WRK Personal Training',
    },
    description:
      'Personalised 1:1 online strength, movement, and everyday nutrition coaching with Hayden Richards in Christchurch, New Zealand. Built for busy adults, returners, and anyone protecting strength on a GLP-1.',
  };

  return (
    <>
      <SeoHead
        title="1:1 Online Coaching | WRK Personal Training NZ"
        description="Personalised 1:1 online strength and habit coaching built around your real week, equipment, and energy—whether you are getting back into routine or protecting muscle on a GLP-1."
        schema={schema}
      />
      <OnlineCoachingClient />
    </>
  );
};
