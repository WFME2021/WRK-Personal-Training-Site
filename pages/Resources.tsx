import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';

export const Resources: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <SeoHead 
        title="Clinical Evidence & Resources | WRK Personal Training"
        description="Examine the medical studies and sports science literature backing our muscle preservation and metabolic support coaching strategies."
      />
      
      <div className="flex flex-col w-full min-h-screen bg-navy text-white pt-32 pb-24 px-5 md:px-12 items-center">
        <div className="max-w-[800px] w-full mx-auto space-y-16">
          
          <header className="space-y-6">
            <h1 className="font-display text-[40px] md:text-[56px] uppercase leading-[1.1] text-white">
              Clinical Evidence & Scientific Resources
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] leading-[1.6] text-off-white/90">
              At WRK Personal Training, our frameworks are entirely built on peer-reviewed sports science, clinical nutrition guidelines, and medical weight loss research.
            </p>
            <p className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-off-white/80">
              When navigating rapid weight reduction via GLP-1 receptor agonists (such as semaglutide, tirzepatide, or retatrutide) or GLP-1 therapy, body composition tracking shifts fundamentally. The resources below outline the foundational evidence supporting our specialized 12-week resistance and nutritional strategies.
            </p>
          </header>

          <hr className="border-navy-light" />

          {/* Sarcopenia */}
          <section id="sarcopenia" className="space-y-6 scroll-mt-24">
            <div className="space-y-2">
              <h2 className="font-display text-[28px] md:text-[32px] uppercase text-white">🧬 Muscle Mass & Sarcopenia Vulnerability</h2>
            </div>
            
            <div className="space-y-4 font-sans text-[16px] text-off-white/90 leading-[1.6]">
              <p>
                <strong>The Science:</strong> Rapid weight loss without an explicit resistance training stimulus frequently leads to a substantial loss of lean mass. Studies indicate that up to 40% of the total mass lost can come directly from skeletal muscle and structural bone matrices if left unmanaged.
              </p>
              
              <div className="space-y-3 bg-navy-mid p-6 rounded-[16px] border border-navy-light">
                <h3 className="font-bold text-white text-[18px]">Supporting Literature:</h3>
                <ul className="space-y-4">
                  <li className="pl-4 border-l-2 border-orange-burnt">
                    <em>Incretin-Based Weight Loss Pharmacotherapy: Can Resistance Exercise Interventions Counteract Lean Mass Loss?</em> (2024). Published in <strong>PubMed / Sports Medicine</strong>. This landmark review examines how GLP-1 treatments elicit significant lean mass drops (averaging up to 6kg) and outlines why a structured resistance training program is a mandatory adjunct to optimize body composition.
                  </li>
                  <li className="pl-4 border-l-2 border-orange-burnt">
                    <em>Strategies for Minimizing Muscle Loss During Use of Incretin-Mimetic Drugs for the Treatment of Obesity</em> (2024). Published in <strong>PMC / Obesity Journals</strong>. This clinical paper highlights the essential role of progressive resistance workloads combined with clinical lifestyle interventions to avoid rapid metabolic drop-offs.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Calorie Deficits */}
          <section id="deficit" className="space-y-6 scroll-mt-24">
            <div className="space-y-2">
              <h2 className="font-display text-[28px] md:text-[32px] uppercase text-white">🧪 Severe Calorie Deficits & Energy Homeostasis</h2>
            </div>
            
            <div className="space-y-4 font-sans text-[16px] text-off-white/90 leading-[1.6]">
              <p>
                <strong>The Science:</strong> Deep calorie deficits induced by profound medical appetite suppression alter total energy expenditure (TEE). Basal metabolic rate drops cleanly alongside a reduction in skeletal muscle tissue mass, which can stall long-term weight maintenance.
              </p>
              
              <div className="space-y-3 bg-navy-mid p-6 rounded-[16px] border border-navy-light">
                <h3 className="font-bold text-white text-[18px]">Supporting Literature:</h3>
                <ul className="space-y-4">
                  <li className="pl-4 border-l-2 border-orange-burnt">
                    <em>Can Muscle Avert GLP-1 Receptor Weight Plateau and Regain?</em> (2025). Published in <strong>PMC Metabolism Reviews</strong>. This trial demonstrates that reductions in lean mass explain approximately 60% of the severe decline in daily energy expenditure, validating the need to aggressively preserve skeletal muscle tissue to prevent premature plateaus.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Protein */}
          <section id="protein" className="space-y-6 scroll-mt-24">
            <div className="space-y-2">
              <h2 className="font-display text-[28px] md:text-[32px] uppercase text-white">🍳 Target Protein Thresholds Under Clinical Suppression</h2>
            </div>
            
            <div className="space-y-4 font-sans text-[16px] text-off-white/90 leading-[1.6]">
              <p>
                <strong>The Science:</strong> Inadequate dietary protein intake after GLP-1 therapy or during high-dose GLP-1 treatment puts individuals at higher risk for unfavorable lean mass reduction, low immune function, and severe systemic fatigue. High-quality, fast-absorbing protein supplements (like whey isolates) assist in hitting baseline amino acid synthesis.
              </p>
              
              <div className="space-y-3 bg-navy-mid p-6 rounded-[16px] border border-navy-light">
                <h3 className="font-bold text-white text-[18px]">Supporting Literature:</h3>
                <ul className="space-y-4">
                  <li className="pl-4 border-l-2 border-orange-burnt">
                    <em>The Role of Whey Protein in Maintaining Fat-Free Mass and Improving Body Composition After GLP-1 therapy</em> (2025). Published in <strong>MDPI / Interventional Studies</strong>. A double-blind, placebo-controlled clinical trial illustrating that targeted whey protein supplementation directly mitigates lean mass wasting during rapid physical transformations.
                  </li>
                  <li className="pl-4 border-l-2 border-orange-burnt">
                    <em>Inadequate Protein Intake after GLP-1 therapy: Effects on Body Composition</em> (2018). Published in <strong>Clinical Nutrition</strong>. This nursing review establishes that prescription GLP-1 volumes struggle to exceed 60g of protein from food alone, cementing the requirement for clinical tracking models.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Resistance Training */}
          <section id="resistance" className="space-y-6 scroll-mt-24 relative">
            <div id="progression" className="absolute -top-24 left-0"></div>
            <div className="space-y-2">
              <h2 className="font-display text-[28px] md:text-[32px] uppercase text-white">🏋️ Progressive Resistance Training vs. Cardio</h2>
            </div>
            
            <div className="space-y-4 font-sans text-[16px] text-off-white/90 leading-[1.6]">
              <p>
                <strong>The Science:</strong> While long-duration cardio supports aerobic pathways, it fails to trigger the neurological and physical signals required to preserve muscle tissue during a clinical calorie deficit. Short, high-intensity, low-fatigue strength work safely counteracts lean tissue drop.
              </p>
              
              <div className="space-y-3 bg-navy-mid p-6 rounded-[16px] border border-navy-light">
                <h3 className="font-bold text-white text-[18px]">Supporting Literature:</h3>
                <ul className="space-y-4">
                  <li className="pl-4 border-l-2 border-orange-burnt">
                    <em>Resistance Training Plus Protein Improves Body Composition After GLP-1 therapy</em> (2021). Published via <strong>Examine / Randomized Controlled Trials</strong>. This 12-week trial evaluated GLP-1 patients divided into exercise and nutrition groups. The data concluded that combining structured resistance loops with optimal protein intake generated the most profound defense against losing your metabolic engine.
                  </li>
                  <li className="pl-4 border-l-2 border-orange-burnt">
                    <em>Nutritional and Exercise Interventions in Individuals with Metabolic Decline</em> (2023). Published in <strong>National Institutes of Health (NIH) PMC</strong>. A comprehensive systematic review confirming that a dedicated resistance training program led to significant reductions in body fat percentage, a 2.72% average increase in muscle mass, and marked improvements in relative functional strength.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skeletal Protection */}
          <section id="preservation" className="space-y-6 scroll-mt-24 relative">
            <div id="bone" className="absolute -top-24 left-0"></div>
            <div className="space-y-2">
              <h2 className="font-display text-[28px] md:text-[32px] uppercase text-white">🦴 Skeletal Protection & Bone Mineral Density</h2>
            </div>
            
            <div className="space-y-4 font-sans text-[16px] text-off-white/90 leading-[1.6]">
              <p>
                <strong>The Science:</strong> Rapid physical mass drops radically shift a patient's center of gravity and alter joint load dynamics. Mechanical skeletal loading via strength work is critical to protect bone mineral density from deteriorating alongside fat mass.
              </p>
              
              <div className="space-y-3 bg-navy-mid p-6 rounded-[16px] border border-navy-light">
                <h3 className="font-bold text-white text-[18px]">Supporting Literature:</h3>
                <ul className="space-y-4">
                  <li className="pl-4 border-l-2 border-orange-burnt">
                    <em>The Impact of Exercise on Prevention of Sarcopenia After GLP-1 therapy</em> (2022). Published in <strong>PMC Clinical Practice</strong>. This study highlights the need for patients undergoing rapid weight adjustments to execute multi-joint compound resistance movements at least two days a week to safeguard total skeletal structural integrity.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-navy-light" />

          {/* Medical Disclaimer */}
          <section className="bg-navy-mid border-2 border-red-900/50 p-6 md:p-8 rounded-[16px] mt-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-red-600/50"></div>
            <div className="flex items-start gap-4">
              <div className="hidden sm:block text-3xl">⚠️</div>
              <div className="space-y-2 font-sans text-[14px] md:text-[15px] text-off-white/80 leading-[1.6]">
                <h3 className="font-bold text-white text-[18px] mb-3">Medical Disclaimer</h3>
                <p>
                  The summaries and external references provided on this page are for educational, positioning, and informational purposes only.
                </p>
                <p>
                  WRK Personal Training does not provide medical advice, diagnosis, or clinical prescriptions. Always coordinate your physical training and nutrition habits directly with your general practitioner or specialist medical team.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};
