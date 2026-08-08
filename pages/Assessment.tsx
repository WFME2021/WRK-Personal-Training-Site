import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Button } from '../components/Button';

export const Assessment: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ path: '', weights: '', protein: '', fatigue: '' });
  const [riskProfile, setRiskProfile] = useState('Medium');
  const [leadData, setLeadData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleAssessmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.weights === 'high-risk' || formData.protein === 'high-risk' || formData.fatigue === 'high-risk') {
      setRiskProfile('High');
    } else if (formData.weights === 'low-risk' && formData.protein === 'low-risk') {
      setRiskProfile('Low');
    } else {
      setRiskProfile('Medium');
    }
    setStep(2);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadData.name || !leadData.email) {
      setError('Please provide both name and email.');
      return;
    }
    
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: leadData.name,
          email: leadData.email,
          answers: formData,
          intervention: formData.path,
          challenge: formData.fatigue,
          riskProfile,
          tag: `GLP1_${riskProfile}_Risk`
        }),
      });

      if (response.ok) {
        navigate('/results', { state: { name: leadData.name, answers: formData, riskProfile } });
      } else {
        throw new Error('Failed to submit assessment');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SeoHead 
        title="Free Metabolic Defense Screener | WRK Personal Training"
        description="Take our rapid, non-diagnostic screening tool to review general indicators of potential lean mass and bone density protection during rapid weight loss."
      />
      
      <div className="flex flex-col w-full min-h-screen bg-navy text-white pt-24 pb-12 px-5 md:px-12 items-center justify-center relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy opacity-90" />
        </div>
        
        <div className="relative z-10 max-w-[800px] w-full mx-auto p-8 bg-navy-mid rounded-[24px] shadow-2xl border border-navy-light my-12">
          {step === 1 ? (
            <form onSubmit={handleAssessmentSubmit} className="space-y-8">
              <div className="text-center mb-8">
                <h1 className="font-display text-[40px] md:text-[56px] uppercase leading-[1.1] mb-4 text-white">Muscle Preservation & Structural Support Screener</h1>
                <p className="font-sans text-[16px] text-off-white/80">
                  Review how your current physical habits align with universal physiological parameters during rapid medical weight loss. This tool is educational and does not constitute medical advice.
                </p>
              </div>

              {/* Q1: Clinical Journey Context */}
              <div className="space-y-3">
                <label className="block font-sans font-bold text-[16px] text-white">1. What is your current medical weight loss pathway?</label>
                <select required className="w-full p-4 bg-navy border border-navy-light rounded-[12px] text-white font-sans text-[16px] focus:outline-none focus:border-orange-burnt transition-colors" value={formData.path} onChange={(e) => setFormData({...formData, path: e.target.value})}>
                  <option value="">Select your current framework...</option>
                  <option value="glp1">I am using a prescribed GLP-1 intervention (e.g., tirzepatide, retatrutide, or variants)</option>
                  <option value="bariatric">I am post-operative or recovering from metabolic/bariatric surgery</option>
                  <option value="general">I am pursuing holistic, standard rapid fat-loss protocols</option>
                </select>
              </div>

              {/* Q2: Resistance Stimulus */}
              <div className="space-y-3">
                <label className="block font-sans font-bold text-[16px] text-white">2. How many times per week do you perform structured resistance or strength training?</label>
                <select required className="w-full p-4 bg-navy border border-navy-light rounded-[12px] text-white font-sans text-[16px] focus:outline-none focus:border-orange-burnt transition-colors" value={formData.weights} onChange={(e) => setFormData({...formData, weights: e.target.value})}>
                  <option value="">Select an option...</option>
                  <option value="low-risk">2 or more sessions weekly using intentional progressive overload</option>
                  <option value="med-risk">1 casual session or baseline bodyweight/mobility protocols</option>
                  <option value="high-risk">Primarily lower-intensity cardio tracking or minimal movement at present</option>
                </select>
              </div>

              {/* Q3: Protein Prioritisation */}
              <div className="space-y-3">
                <label className="block font-sans font-bold text-[16px] text-white">3. On a typical day, how would you describe your nutritional protein focus?</label>
                <select required className="w-full p-4 bg-navy border border-navy-light rounded-[12px] text-white font-sans text-[16px] focus:outline-none focus:border-orange-burnt transition-colors" value={formData.protein} onChange={(e) => setFormData({...formData, protein: e.target.value})}>
                  <option value="">Select an option...</option>
                  <option value="low-risk">High focus: I intentionally track intake targets daily</option>
                  <option value="med-risk">Moderate focus: Appetite suppression makes consuming consistent solid proteins difficult</option>
                  <option value="high-risk">Low focus: Substantial appetite suppression means protein tracking is rare</option>
                </select>
              </div>

              {/* Q4: Physiological Response */}
              <div className="space-y-3">
                <label className="block font-sans font-bold text-[16px] text-white">4. Which indicator best describes your current systemic physical feedback?</label>
                <select required className="w-full p-4 bg-navy border border-navy-light rounded-[12px] text-white font-sans text-[16px] focus:outline-none focus:border-orange-burnt transition-colors" value={formData.fatigue} onChange={(e) => setFormData({...formData, fatigue: e.target.value})}>
                  <option value="">Select an option...</option>
                  <option value="high-risk">Experiencing notable feelings of lingering fatigue, weakness, or physical exhaustion</option>
                  <option value="med-risk">Experiencing occasional bouts of mild nausea, low motivation, or joint stiffness</option>
                  <option value="low-risk">Physical energy feels consistently stable and supported</option>
                </select>
              </div>

              <Button type="submit" size="lg" className="w-full mt-8">
                Review Immediate On-Screen Insights
              </Button>
            </form>
          ) : (
            <div className="space-y-8">
              <div className="p-6 rounded-[16px] border bg-navy border-navy-light">
                <h2 className="font-display text-[28px] uppercase mb-4 text-white">📊 Preliminary Analysis Complete</h2>
                
                {riskProfile === 'High' && (
                  <div className="text-off-white/90 space-y-4 font-sans text-[16px]">
                    <p className="font-bold text-red-400">⚠️ Risk Status Indicators Suggest Potential Lean Tissue Vulnerability</p>
                    <p>
                      Your tracking inputs indicate a behavioral pattern that frequently correlates with accelerated lean mass and skeletal density reduction during periods of rapid weight loss <a href="/resources#sarcopenia" className="text-orange-burnt hover:underline text-sm">[1]</a>. 
                    </p>
                    <p>
                      When caloric variables fall drastically short of foundational metabolic demands without targeted muscular loading, data suggests a possibility of structural fatigue rather than optimal fat metabolism <a href="/resources#deficit" className="text-orange-burnt hover:underline text-sm">[2]</a>.
                    </p>
                  </div>
                )}

                {riskProfile === 'Medium' && (
                  <div className="text-off-white/90 space-y-4 font-sans text-[16px]">
                    <p className="font-bold text-gold-rule">⚡ Risk Status Indicators Suggest An Elevated Stagnation Pattern</p>
                    <p>
                      Your variables suggest your routine may be entering a common plateau window. While your general activity pathway is positive, clinical trends note that inconsistent load progression can create vulnerabilities where the body may draw on muscle tissue for adaptive fuel <a href="/resources#progression" className="text-orange-burnt hover:underline text-sm">[3]</a>.
                    </p>
                  </div>
                )}

                {riskProfile === 'Low' && (
                  <div className="text-off-white/90 space-y-4 font-sans text-[16px]">
                    <p className="font-bold text-green-400">✅ Risk Status Indicators Suggest An Active Muscle Defense Baseline</p>
                    <p>
                      Your current tracking trends match well with recommended sports science frameworks designed to help keep lean skeletal framework structures protected during metabolic updates <a href="/resources#preservation" className="text-orange-burnt hover:underline text-sm">[4]</a>.
                    </p>
                  </div>
                )}
              </div>

              {/* Tier 2: Email Capture Box */}
              <div className="p-8 bg-navy border border-navy-light rounded-[16px] text-center space-y-6">
                <h3 className="font-display text-[28px] uppercase text-white">Unlock Your Complete Position-Specific Support Breakdown</h3>
                <p className="font-sans text-[16px] text-off-white/80 max-w-[500px] mx-auto">
                  Enter your email to receive an expert, position-specific automated email breakdown detailing general protein threshold calculations and a 3-step structured physical loading layout tailored around your risk layer.
                </p>
                
                <form onSubmit={handleLeadSubmit} className="space-y-4 max-w-[400px] mx-auto">
                  <input type="hidden" name="tag" value={`GLP1_${riskProfile}_Risk`} />
                  <input 
                    type="text" 
                    name="name" 
                    value={leadData.name}
                    onChange={(e) => setLeadData({...leadData, name: e.target.value})}
                    placeholder="First Name" 
                    required 
                    className="w-full p-4 bg-navy-mid rounded-[12px] border border-navy-light text-white font-sans text-[16px] placeholder-off-white/50 focus:outline-none focus:border-orange-burnt transition-colors" 
                  />
                  <input 
                    type="email" 
                    name="email" 
                    value={leadData.email}
                    onChange={(e) => setLeadData({...leadData, email: e.target.value})}
                    placeholder="Email Address" 
                    required 
                    className="w-full p-4 bg-navy-mid rounded-[12px] border border-navy-light text-white font-sans text-[16px] placeholder-off-white/50 focus:outline-none focus:border-orange-burnt transition-colors" 
                  />
                  {error && <p className="text-red-400 text-sm font-sans">{error}</p>}
                  <Button type="submit" size="lg" className="w-full mt-4" disabled={isSubmitting}>
                    {isSubmitting ? 'Processing...' : 'Unlock My Complete Breakdown'}
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
