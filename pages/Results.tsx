import React, { useEffect } from 'react';
import { useLocation, Navigate, Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';

export const Results: React.FC = () => {
  const location = useLocation();
  const state = location.state as { answers?: Record<string, string>; name?: string; riskProfile?: string };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!state?.name) {
    return <Navigate to="/assessment" replace />;
  }

  const { name, answers, riskProfile = 'Medium' } = state;

  let riskLevel = riskProfile;
  let riskDescription = 'Your variables suggest a moderate pattern. While your general activity pathway may be positive, clinical trends indicate that inconsistent load progression can create vulnerabilities where the body may draw on muscle tissue for adaptive fuel.';
  
  if (riskProfile === 'High') {
    riskDescription = 'Your tracking inputs indicate a behavioral pattern that frequently correlates with potential accelerated lean mass and skeletal density reduction during periods of rapid weight loss. Targeted structural resistance training is highly recommended to support metabolism.';
  } else if (riskProfile === 'Low') {
    riskDescription = 'Your current tracking trends match well with recommended sports science frameworks designed to help keep lean skeletal framework structures protected during metabolic updates. Consistency is key to long-term preservation.';
  }

  return (
    <>
      <SeoHead 
        title="Your Muscular Preservation Report | WRK"
        description="Your diagnostic screening results and actionable movement guide for medical weight loss."
      />
      
      <div className="flex flex-col w-full min-h-screen bg-navy text-white pt-24 pb-12 px-5 md:px-12 items-center relative">
        <div className="max-w-[800px] w-full mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <h1 className="font-display text-[40px] md:text-[56px] uppercase leading-[1.1]">
              Diagnostic Complete
            </h1>
            <p className="font-sans text-[18px] text-off-white/90">
              Thank you, {name}. Here is your customized Muscular Preservation Risk Score and protocol.
            </p>
          </div>

          {/* Risk Score */}
          <div className="bg-navy-mid border border-navy-light rounded-[24px] p-8 shadow-2xl">
            <h2 className="font-display text-[28px] uppercase mb-4 text-orange-burnt">Muscular Preservation Risk Indicator: {riskLevel}</h2>
            <p className="font-sans text-[16px] text-off-white/90 leading-[1.6]">
              {riskDescription}
            </p>
          </div>

          {/* Protein Metrics */}
          <div className="bg-navy-mid border border-navy-light rounded-[24px] p-8 shadow-2xl">
            <h2 className="font-display text-[28px] uppercase mb-4">General Protein Thresholds</h2>
            <p className="font-sans text-[16px] text-off-white/90 leading-[1.6] mb-4">
              During rapid weight loss, baseline protein recommendations may be insufficient. To estimate your general daily requirement:
            </p>
            <ul className="list-disc pl-5 font-sans text-[16px] text-off-white/90 space-y-2">
              <li><strong>Target:</strong> General clinical consensus suggests 1.6g to 2.2g of protein per kilogram of your <em>target</em> body weight.</li>
              <li><strong>Action:</strong> Distributing this across 3-4 meals may help support muscle protein synthesis throughout the day.</li>
              <li><strong>Why:</strong> Medication-induced appetite suppression often leads to severe under-eating, which may force the body to break down muscle for essential amino acids.</li>
            </ul>
          </div>

          {/* 3-Step Guide */}
          <div className="bg-navy-mid border border-navy-light rounded-[24px] p-8 shadow-2xl">
            <h2 className="font-display text-[28px] uppercase mb-6">3-Step Actionable Movement Guide</h2>
            <div className="space-y-6 font-sans text-[16px] text-off-white/90 leading-[1.6]">
              <div>
                <h3 className="font-bold text-white text-[18px]">1. Prioritize Compound Movements</h3>
                <p>Consider shifting focus toward structurally loading exercises like goblet squats, assisted pull-ups, and hinges, which are indicated to stimulate muscle retention more effectively than excessive cardio.</p>
              </div>
              <div>
                <h3 className="font-bold text-white text-[18px]">2. Auto-Regulate Intensity</h3>
                <p>On high-fatigue days, clinical patterns suggest stimulating muscle tissue safely. Leaving a few reps in the tank can retain lean tone without unnecessarily exhausting your central nervous system.</p>
              </div>
              <div>
                <h3 className="font-bold text-white text-[18px]">3. Implement Progressive Overload Safely</h3>
                <p>Gradually aim to increase the weight or reps each week. Since your center of gravity may be changing rapidly, prioritizing form perfection before adding load is critical to help protect your joints.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-navy-light/20 rounded-[24px] p-10 border border-orange-burnt/30 shadow-[0_0_50px_rgba(217,92,20,0.1)]">
            <h2 className="font-display text-[32px] md:text-[40px] uppercase mb-4 text-white">Continue With Support</h2>
            <p className="font-sans text-[16px] text-off-white/80 mb-8 max-w-[600px] mx-auto">
              If you want a structured, evidence-based program that handles the programming, progressive overload, and side-effect management for you—let's work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="w-full sm:w-auto">Explore Coaching Services</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">Get in Touch</Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
