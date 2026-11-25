import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { PageHeroBanner } from '../components/PageHeroBanner';

export const Refunds: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="Refunds & Cancellations | WRK Personal Training"
        description="Refunds, cancellations, and minimum terms policy for WRK Personal Training."
      />

      <div className="bg-cream text-forest min-h-screen font-sans selection:bg-citron selection:text-forest pb-24 transition-colors duration-300">
        <PageHeroBanner
          imageSrc="/images/banner-articles.jpg"
          imageAlt="Sunlit oak study table with notebook and ceramic cup"
          align="center"
          compact
          eyebrow="WRK PERSONAL TRAINING · POLICIES"
          title="Refunds, Cancellations & Minimum Terms"
          subtitle="Last updated: 11 March 2026"
        />

        <section className="pt-12 pb-20 px-6 max-w-3xl mx-auto">

          <div className="prose prose-lg text-forest/85 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-forest mb-4">1) 1:1 in-person coaching (Christchurch)</h2>
              <p>Cancellations/reschedules: minimum 24 hours’ notice.</p>
              <p className="mt-4">If you cancel within 24 hours (or no-show), the session may be charged/forfeited (unless we agree otherwise in exceptional circumstances).</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-forest mb-4">2) Online coaching (12-week minimum)</h2>
              <p>Online coaching has a 12-week minimum because quick fixes are how people end up starting over.</p>
              <p className="mt-4">If you choose to stop within the 12 weeks, you may remain responsible for payment for the minimum term (unless we agree otherwise in writing).</p>
              <p className="mt-4">If you need to pause due to injury/medical reasons or major life disruption, contact us — we’ll aim to be reasonable.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-forest mb-4">3) $29 Self-Directed GLP-1 Tool Kit (one-time payment — NZD $29)</h2>
              <p className="font-bold text-forest mb-2">7-day conditional refund policy:</p>
              <p>You may request a refund within 7 days of purchase if you have not downloaded the digital toolkit materials or accessed the resource files. Due to the immediate delivery of digital goods, downloaded assets are non-refundable.</p>
              <p className="mt-4 text-sm italic">Note: Payment processing and secure download links are handled via Stripe.</p>
              <p className="mt-4">To request a refund, contact us via the Contact page with your purchase email and the date of purchase.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-forest mb-4">4) Consumer rights (NZ)</h2>
              <p>Nothing in this policy limits your rights under New Zealand consumer law where those rights apply.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
