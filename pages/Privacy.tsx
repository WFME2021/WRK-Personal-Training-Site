import React from 'react';
import { SeoHead } from '../components/SeoHead';

export const Privacy: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="Privacy Policy | WRK Personal Training"
        description="Privacy Policy for WRK Personal Training. Learn how we collect, use, and protect your data."
      />

      <div className="bg-primary min-h-screen font-sans selection:bg-accent selection:text-white pb-24 transition-colors duration-300">
        <section className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
            Privacy Policy
          </h1>
          <p className="text-text-secondary mb-12">Last updated: 11 March 2026</p>

          <div className="prose prose-lg text-text-secondary space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">1) The short version</h2>
              <p>We only collect what we need to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>respond to you</li>
                <li>deliver coaching/services</li>
                <li>improve the website and the experience</li>
              </ul>
              <p className="mt-4">We don’t sell your data.</p>
              <p className="mt-4">New Zealand’s Privacy Act requires us to be transparent about how we collect and use personal information.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">2) What we collect</h2>
              <p>Depending on how you interact with the site, we may collect:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Contact details:</strong> name, email, phone (if you provide it)</li>
                <li><strong>Enquiry details:</strong> goals, schedule constraints, questions you submit</li>
                <li><strong>Assessment responses:</strong> your answers + email address (to send your results/resources)</li>
                <li><strong>Coaching data (if you become a client):</strong> training history, injuries/niggles, progress notes, check-ins, and relevant health context you choose to share</li>
                <li><strong>Technical data:</strong> device/browser info, IP address, pages visited (via analytics/cookies)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">3) Why we collect it</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>reply to enquiries and provide consults</li>
                <li>deliver the assessment results and follow-up resources</li>
                <li>deliver coaching/programming and support</li>
                <li>improve our site, tools and content</li>
                <li>meet legal/accounting obligations when applicable</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">4) Who we share it with</h2>
              <p>We may share information with trusted service providers only when needed to run the business, such as:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>website hosting and analytics providers</li>
                <li>email marketing / newsletter tools</li>
                <li>coaching/app platforms used to deliver programmes</li>
                <li>payment processors (e.g., Stripe) where applicable</li>
              </ul>
              <p className="mt-4">These providers are expected to protect your data.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">5) How we store and protect data</h2>
              <p>We take reasonable steps to keep your information secure (access controls, secure services, sensible retention). No method is perfect, but we aim to keep it tight.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">6) How long we keep data</h2>
              <p>We keep information only as long as needed for:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>the purpose it was collected</li>
                <li>legal/accounting requirements</li>
                <li>reasonable business operations (e.g., client history for programming continuity)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">7) Your rights</h2>
              <p>You can request access to your personal information and ask for corrections.</p>
              <p className="mt-4">To do this, contact us via the Contact page.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">8) Cookies and analytics</h2>
              <p>We may use cookies/analytics to understand how people use the site and to improve it. You can control cookies via your browser settings.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">9) Changes to this policy</h2>
              <p>If we update this policy, we’ll post the latest version on the site.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
