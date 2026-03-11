import React from 'react';
import { SeoHead } from '../components/SeoHead';

export const Terms: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="Terms of Service | WRK Personal Training"
        description="Terms of Service for WRK Personal Training. Read about our booking, cancellation, and service policies."
      />

      <div className="bg-primary min-h-screen font-sans selection:bg-accent selection:text-white pb-24 transition-colors duration-300">
        <section className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
            Terms of Service
          </h1>
          <p className="text-text-secondary mb-12">Last updated: 11 March 2026</p>

          <div className="prose prose-lg text-text-secondary space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">1) About these terms</h2>
              <p>These Terms apply to your use of this website and any services provided by WRK Personal Training (“we”, “us”, “our”). By using this site, booking services, or purchasing products, you agree to these Terms.</p>
              <p className="mt-4">If something in these Terms doesn’t sit right, don’t use the site or purchase services.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">2) Services we provide</h2>
              <p>We offer:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>1:1 in-person coaching (Christchurch)</li>
                <li>Online coaching (12-week minimum)</li>
                <li>Corporate wellness (annual programme)</li>
                <li>42-Day Reset (self-guided programme, one-time payment)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">3) Not medical advice</h2>
              <p>We provide fitness coaching, education and general guidance. We are not a doctor, physio, or mental health professional. Any health content is not a substitute for medical advice. See our Health Disclaimer for more detail.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">4) Booking, scheduling, and cancellations (1:1 sessions)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sessions must be booked in advance.</li>
                <li>Cancellations/reschedules require at least 24 hours’ notice.</li>
                <li>If you cancel within 24 hours (or no-show), the session may be charged/forfeited (unless we agree otherwise in exceptional circumstances).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">5) Minimum terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Online coaching: 12-week minimum commitment.</li>
                <li>Corporate programme: annual (12-month) package unless agreed otherwise in writing.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">6) Pricing and payment</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prices are shown in NZD unless stated otherwise.</li>
                <li>We may update pricing from time to time. Any changes will be communicated before they affect you.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">7) Results and expectations</h2>
              <p>Training works—but results vary. Your outcomes depend on consistency, starting point, recovery, stress, nutrition, and a bunch of real-life variables. We don’t guarantee specific results, and we won’t make claims we can’t substantiate.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">8) Your responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>provide accurate information about your health and training history</li>
                <li>train within your limits and follow coaching instructions</li>
                <li>stop if you feel unwell, dizzy, or experience unusual pain, and seek help if needed</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">9) Digital services and third-party platforms</h2>
              <p>Some services may be delivered through third-party platforms (e.g., training app providers, payment processors). Your use of those platforms may be subject to their own terms. For example, the 42-Day Reset purchase and access may involve MyPTHub and/or Stripe.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">10) Intellectual property</h2>
              <p>All content we create (programmes, documents, videos, app programming, website content) is owned by us or licensed to us. You may not copy, share, resell, or distribute it without written permission.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">11) Limitation of liability</h2>
              <p>To the maximum extent permitted by law, we are not liable for indirect or consequential loss. Our liability for any claim is limited to the amount you paid for the relevant service/product, except where law requires otherwise.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">12) Consumer rights (NZ)</h2>
              <p>Nothing in these Terms limits your rights under New Zealand consumer law where those rights apply.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">13) Changes to these terms</h2>
              <p>We may update these Terms from time to time. The latest version will be published on our site.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">14) Contact</h2>
              <p>Questions? Reach out via the Contact page.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
