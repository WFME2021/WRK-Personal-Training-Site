import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { Shield, Activity, Dna, FileText, CheckCircle2 } from 'lucide-react';

export const Programs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAFAF9] text-[#2C3539] min-h-screen font-sans selection:bg-[#8A9A86] selection:text-white pt-24 pb-32">
      <SeoHead 
        title="Supportive GLP-1 Weight Loss Fitness Programs | WRK"
        description="Explore our evidence-based, 12-week exercise pathways gently tailored to protect your strength and support your GLP-1 weight loss journey."
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Intro Section */}
        <header className="text-center mb-20 max-w-4xl mx-auto">
          <p className="text-[12px] font-bold uppercase tracking-widest text-[#8A9A86] mb-4">
            gentle, encouraging 12-week pathways
          </p>
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.1] text-[#2C3539] mb-6">
            Supportive GLP-1 Weight Loss Fitness Programs to Reconnect with Movement
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-[#2C3539]/70 max-w-3xl mx-auto">
            True health isn't just about the number on the scale changing—it's about building a body that carries you through life with ease. Our evidence-based, 12-week exercise pathways are gently tailored to meet you exactly where you are, protecting your strength today so you can enjoy your tomorrow.
          </p>
        </header>

        {/* The 12-Week Tracks Grid (Bento Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Track 1 */}
          <div className="bg-white border border-neutral-200 p-8 md:p-10 rounded-3xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8 shrink-0">
              <Shield size={28} />
            </div>
            <div className="mb-6 flex-grow">
              <h3 className="font-serif text-[22px] md:text-[26px] text-[#2C3539] leading-tight mb-4">
                Track 1: GLP-1 Muscular Defense (Protecting Your Strength and Vitality)
              </h3>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/70">
                Designed for those currently in the active weight loss phase. This track focuses on gentle, low-stress strength routines (30-minute full-body sessions) that fit naturally into your week. We prioritize shielding your lean muscle tissue and maintaining your daily energy levels while the medication does its work.
              </p>
            </div>
          </div>

          {/* Track 2 */}
          <div className="bg-white border border-neutral-200 p-8 md:p-10 rounded-3xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8 shrink-0">
              <Activity size={28} />
            </div>
            <div className="mb-6 flex-grow">
              <h3 className="font-serif text-[22px] md:text-[26px] text-[#2C3539] leading-tight mb-4">
                Track 2: Metabolic Maintenance Training (Finding Balance and Autonomy)
              </h3>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/70">
                Perfect for anyone adjusting their dosage or preparing to complete their medication protocol. This track focuses on gently resetting your body's baseline, introducing movement patterns that support metabolic health, and building steady confidence in your natural habits.
              </p>
            </div>
          </div>

          {/* Track 3 */}
          <div className="bg-white border border-neutral-200 p-8 md:p-10 rounded-3xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] rounded-full flex items-center justify-center mb-8 shrink-0">
              <Dna size={28} />
            </div>
            <div className="mb-6 flex-grow">
              <h3 className="font-serif text-[22px] md:text-[26px] text-[#2C3539] leading-tight mb-4">
                Track 3: The Forever Strong Routine (Enjoying an Active, Everyday Life)
              </h3>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#2C3539]/70">
                Built for the post-medication chapter. This pathway is all about celebrating your new movement freedom. We design simple, sustainable home or gym routines that safeguard your achievements and make active living a natural, joyful part of your everyday lifestyle.
              </p>
            </div>
          </div>

        </div>

        {/* Program Deliverables Section (Bento Item) */}
        <div className="bg-white border border-[#8A9A86]/30 p-8 md:p-14 rounded-3xl shadow-sm mb-24 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2C3539] mb-6 leading-tight">
                What to Expect in Your Personal GLP-1 Exercise Plan
              </h2>
              <p className="text-[#2C3539]/70 text-[16px] md:text-[18px] leading-relaxed mb-8">
                We believe in making fitness simple and supportive. Every 12-week pathway includes:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#8A9A86] shrink-0 mt-1" size={20} />
                  <span className="text-[15px] md:text-[16px] text-[#2C3539]/80 leading-relaxed">
                    Gentle, 30-minute workout structures using bodyweight, light dumbbells, or bands.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#8A9A86] shrink-0 mt-1" size={20} />
                  <span className="text-[15px] md:text-[16px] text-[#2C3539]/80 leading-relaxed">
                    Helpful weekly check-ins via My PT Hub to listen to your body and adjust as you go.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#8A9A86] shrink-0 mt-1" size={20} />
                  <span className="text-[15px] md:text-[16px] text-[#2C3539]/80 leading-relaxed">
                    Friendly automated text updates and practical, easy-to-digest PDF guide drops.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#8A9A86] shrink-0 mt-1" size={20} />
                  <span className="text-[15px] md:text-[16px] text-[#2C3539]/80 leading-relaxed">
                    Constant encouragement to move at a pace that feels genuinely good for you.
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[#FAFAF9] rounded-2xl p-8 border border-neutral-200 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <FileText className="text-[#8A9A86]/20 w-32 h-32 mx-auto mb-4" />
                <p className="text-[#2C3539]/50 font-medium text-[14px] uppercase tracking-widest">Digital Asset Delivery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call-to-Action Layout */}
        <div className="bg-white border border-neutral-200 p-8 md:p-14 text-center rounded-3xl shadow-sm hover:shadow-md transition-shadow max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C3539] mb-6">
            Ready to Find the Pathway That Fits Your Life?
          </h2>
          <p className="text-[#2C3539]/70 mb-10 max-w-2xl mx-auto text-[16px] md:text-[18px] leading-relaxed">
            You don't have to navigate this transition alone. Let's have a simple, friendly conversation to figure out which track aligns best with your personal goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <button className="bg-[#8A9A86] hover:bg-[#768672] text-white px-8 py-4 rounded-xl font-medium transition-colors text-[16px] w-full sm:w-auto">
                Connect with a Trainer
              </button>
            </Link>
            <Link to="/tools">
              <button className="bg-white border border-neutral-200 hover:border-[#8A9A86] text-[#2C3539] px-8 py-4 rounded-xl font-medium transition-colors text-[16px] w-full sm:w-auto">
                Explore Your Metrics First
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
