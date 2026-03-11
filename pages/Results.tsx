import React, { useEffect } from 'react';
import { useLocation, Navigate, Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SeoHead } from '../components/SeoHead';
import { CheckCircle2, ArrowRight, Calendar, Activity, ShieldCheck, Zap } from 'lucide-react';
import { assessmentData } from '../data/assessmentData';
import { calculateArchetype, calculateRecommendation, Answers } from '../services/assessmentLogic';

export const Results: React.FC = () => {
  const location = useLocation();
  const state = location.state as { answers?: Answers; email?: string; name?: string };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!state?.answers || !state?.email) {
    return <Navigate to="/assessment" replace />;
  }

  const { answers, name } = state;
  const archetype = calculateArchetype(answers);
  const recommendation = calculateRecommendation(answers);
  const doseKey = answers['q3_time'] || 'three_days';
  
  const postGate = archetype?.postGate;
  const schedule = postGate ? postGate.scheduleByDose[doseKey as keyof typeof postGate.scheduleByDose] : undefined;
  const next7Days = archetype ? archetype.next7DaysByDose[doseKey as keyof typeof archetype.next7DaysByDose] : undefined;

  return (
    <>
      <SeoHead 
        title={`${postGate?.blueprintName || 'Your Blueprint'} | WRK Personal Training`} 
        description="Your personalised training blueprint."
      />

      <div className="bg-primary min-h-screen font-sans selection:bg-accent selection:text-white pb-24 transition-colors duration-300">
        
        {/* Header */}
        <section className="pt-32 pb-12 px-6 max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full mb-6">
            {assessmentData.uiCopy.postGate.headline}
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
            Hey {name || 'there'}, here is your <span className="text-accent">Blueprint.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {assessmentData.uiCopy.postGate.subhead}
          </p>
        </section>

        <div className="max-w-4xl mx-auto px-6 space-y-12">
          
          {/* 1. The Schedule */}
          <div className="bg-secondary p-8 md:p-10 rounded-3xl border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter">
                {postGate?.scheduleTitle}
              </h2>
            </div>
            <div className="bg-primary p-6 rounded-2xl border border-border">
              <h3 className="font-bold text-lg mb-4">{schedule?.title}</h3>
              <ul className="space-y-3">
                {schedule?.lines.map((line, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. The Protocol & Key Rule */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary p-8 rounded-3xl border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <Activity className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-xl font-display font-bold uppercase tracking-tighter">
                  {postGate?.protocolTitle}
                </h2>
              </div>
              <p className="text-text-secondary leading-relaxed">
                {postGate?.protocolCopy}
              </p>
            </div>

            <div className="bg-accent text-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-display font-bold uppercase tracking-tighter">
                  {postGate?.keyRuleTitle}
                </h2>
              </div>
              <p className="font-medium text-lg leading-relaxed">
                {postGate?.keyRuleCopy}
              </p>
            </div>
          </div>

          {/* 3. Next 7 Days (Detailed) */}
          <div className="bg-secondary p-8 md:p-10 rounded-3xl border border-border">
            <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-8">
              {archetype?.next7DaysTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {next7Days?.days.map((day, i) => (
                <div key={i} className={`bg-primary p-6 rounded-2xl border border-border ${i === 6 ? 'sm:col-span-2' : ''}`}>
                  <h4 className="font-bold text-text-primary mb-3">{day.label}</h4>
                  <ul className="space-y-2">
                    {day.items.map((item, j) => (
                      <li key={j} className="text-sm text-text-secondary flex items-start gap-2">
                        <span className="text-accent mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 3.5 4-Week Progression Model */}
          {postGate?.progressionModel4Weeks && (
            <div className="bg-secondary p-8 md:p-10 rounded-3xl border border-border">
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-8">
                {postGate.progressionModel4Weeks.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {postGate.progressionModel4Weeks.weeks.map((week: any, i: number) => (
                  <div key={i} className="bg-primary p-6 rounded-2xl border border-border flex flex-col h-full">
                    <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                      {week.week}
                    </div>
                    <h4 className="font-bold text-lg text-text-primary mb-3">{week.title}</h4>
                    <p className="text-sm text-text-secondary mt-auto">{week.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-primary p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-4">{postGate.progressionModel4Weeks.guardrailsTitle}</h3>
                <ul className="space-y-3">
                  {postGate.progressionModel4Weeks.guardrails.map((guardrail: string, i: number) => (
                    <li key={i} className="text-sm text-text-secondary flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{guardrail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 4. Warm-up & Autoregulation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary p-8 rounded-3xl border border-border">
              <h3 className="text-xl font-bold mb-6">{postGate?.warmupTitle}</h3>
              <ul className="space-y-4">
                {postGate?.warmupSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary">
                    <div className="w-6 h-6 rounded-full bg-primary border border-border flex items-center justify-center shrink-0 text-xs font-bold">
                      {i + 1}
                    </div>
                    <span className="mt-0.5">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary p-8 rounded-3xl border border-border">
              <h3 className="text-xl font-bold mb-6">{postGate?.autoregulationTitle}</h3>
              <ul className="space-y-4">
                {postGate?.autoregulationRules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary">
                    <Zap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 5. Progress Checks */}
          <div className="bg-secondary p-8 rounded-3xl border border-border">
            <h3 className="text-xl font-bold mb-6">{postGate?.progressChecksTitle}</h3>
            <div className="flex flex-wrap gap-4">
              {postGate?.progressChecks.map((check, i) => (
                <div key={i} className="bg-primary px-4 py-3 rounded-xl border border-border text-sm font-medium text-text-primary">
                  {check}
                </div>
              ))}
            </div>
          </div>

          {/* 6. Dynamic Recommendation */}
          <div className="mt-16 bg-secondary p-8 md:p-12 rounded-3xl shadow-xl border border-border text-center">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full mb-6">
              {assessmentData.recommendation.ui.recommendedTitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter text-text-primary mb-4">
              {assessmentData.recommendation.ui.recommendedSubtitleTemplate.replace('{serviceName}', assessmentData.recommendation.serviceNames[recommendation.recommend.serviceId as keyof typeof assessmentData.recommendation.serviceNames])}
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              {assessmentData.recommendation.ui.whyTemplate.replace('{reason}', recommendation.reason)}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={recommendation.recommend.href} className="w-full sm:w-auto">
                <Button variant="primary" className="w-full py-4 px-8 text-lg flex items-center justify-center gap-2">
                  View Service Details <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-sm text-text-secondary mb-4">
                {assessmentData.recommendation.ui.alternateTitle}
              </p>
              <Link 
                to={recommendation.alternate.href}
                className="text-accent font-bold hover:underline"
              >
                {assessmentData.recommendation.ui.alternateSubtitleTemplate.replace('{alternateServiceName}', assessmentData.recommendation.serviceNames[recommendation.alternate.serviceId as keyof typeof assessmentData.recommendation.serviceNames])}
              </Link>
            </div>
          </div>

          <p className="text-center text-sm text-text-secondary italic mt-8">
            {assessmentData.uiCopy.postGate.resultsFooterNote}
          </p>

        </div>
      </div>
    </>
  );
};
