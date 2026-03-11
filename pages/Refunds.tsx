import React from 'react';
import { SeoHead } from '../components/SeoHead';

export const Refunds: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="Refunds & Cancellations | WRK Personal Training"
        description="Refunds, cancellations, and minimum terms policy for WRK Personal Training."
      />

      <div className="bg-primary min-h-screen font-sans selection:bg-accent selection:text-white pb-24 transition-colors duration-300">
        <section className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
            Refunds, Cancellations & Minimum Terms
          </h1>
          <p className="text-text-secondary mb-12">Last updated: 11 March 2026</p>

          <div className="prose prose-lg text-text-secondary space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">1) 1:1 in-person coaching (Christchurch)</h2>
              <p>Cancellations/reschedules: minimum 24 hours’ notice.</p>
              <p className="mt-4">If you cancel within 24 hours (or no-show), the session may be charged/forfeited (unless we agree otherwise in exceptional circumstances).</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">2) Online coaching (12-week minimum)</h2>
              <p>Online coaching has a 12-week minimum because quick fixes are how people end up starting over.</p>
              <p className="mt-4">If you choose to stop within the 12 weeks, you may remain responsible for payment for the minimum term (unless we agree otherwise in writing).</p>
              <p className="mt-4">If you need to pause due to injury/medical reasons or major life disruption, contact us — we’ll aim to be reasonable.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">3) Corporate wellness (annual programme)</h2>
              <p>Corporate programmes are typically sold as an annual (12-month) package.</p>
              <p className="mt-4">Invoicing and renewal terms will be confirmed in writing with the business.</p>
              <p className="mt-4">If a company needs to end early, we’ll handle it case-by-case, aligned with the written agreement.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">4) 42-Day Reset (one-time payment — NZD $47)</h2>
              <p className="font-bold text-text-primary mb-2">7-day conditional refund policy:</p>
              <p>You may request a refund within 7 days of purchase if:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>you have not accessed or started the programme content inside the platform, and</li>
                <li>you have not downloaded/used any gated programme materials (where applicable).</li>
              </ul>
              <p className="mt-4">If you’ve accessed/started the programme, refunds are generally not offered (digital delivery).</p>
              <p className="mt-4 text-sm italic">Note: Payment processing and access may involve third-party platforms (e.g., MyPTHub/Stripe).</p>
              <p className="mt-4">To request a refund, contact us via the Contact page with your purchase email and the date of purchase.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">5) Consumer rights (NZ)</h2>
              <p>Nothing in this policy limits your rights under New Zealand consumer law where those rights apply.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
