import React from 'react';
import { SeoHead } from '../components/SeoHead';

export const HealthDisclaimer: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="Health & Exercise Disclaimer | WRK Personal Training"
        description="Health and exercise disclaimer for WRK Personal Training. Please read before starting any training programme."
      />

      <div className="bg-primary min-h-screen font-sans selection:bg-accent selection:text-white pb-24 transition-colors duration-300">
        <section className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
            Health & Exercise Disclaimer
          </h1>
          <p className="text-text-secondary mb-12">Last updated: 11 March 2026</p>

          <div className="prose prose-lg text-text-secondary space-y-8">
            <div>
              <p className="font-bold text-text-primary text-xl mb-6">Please read this before training</p>
              <p>Exercise carries risk. By using this website, following our content, or participating in any programme, you acknowledge:</p>
              
              <ul className="list-disc pl-6 mt-6 space-y-4">
                <li>We provide fitness coaching and education — not medical advice</li>
                <li>You should consult a medical professional before starting a new exercise programme, especially if you have a medical condition, are pregnant/postpartum, or are returning after injury</li>
                <li>You are responsible for exercising within your limits and using good judgement</li>
                <li>Stop immediately if you feel unwell, dizzy, faint, or experience unusual pain, and seek professional advice if needed</li>
              </ul>

              <p className="mt-8 font-medium text-text-primary">We aim to coach smart and responsibly, but you’re the one in the body — you’re in charge of what you do.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
