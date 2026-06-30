import React, { useState } from 'react';

export const CorporatePricingCalculator: React.FC = () => {
  const [employees, setEmployees] = useState<number>(50);
  
  const setupFee = 500;
  const costPerEmployeePerWeek = 2; // $2 per week
  const weeksInYear = 52;
  const annualRuntimeCost = employees * costPerEmployeePerWeek * weeksInYear;
  const totalFirstYearInvestment = setupFee + annualRuntimeCost;
  
  // ROI Calculation Example (Conservative estimate)
  // Assume average absenteeism cost per employee is ~$1,000/year.
  // Assume a wellness program reduces this by at least 15%.
  const estimatedAbsenteeismCost = employees * 1000;
  const estimatedSavings = estimatedAbsenteeismCost * 0.15;
  const netValue = estimatedSavings - totalFirstYearInvestment;
  
  return (
    <div className="bg-secondary border border-border shadow-2xl rounded-3xl p-8 md:p-12 w-full max-w-4xl mx-auto text-left relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor">
          <path d="M0 0 L100 0 L100 100 Z" />
        </svg>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 relative z-10">
        
        {/* Left Side: Inputs */}
        <div className="flex-1">
          <h3 className="font-display text-3xl uppercase text-text-primary mb-2">Estimate your annual impact</h3>
          <p className="text-text-secondary text-base font-medium mb-8">Based on conservative reductions in absenteeism and improved workforce consistency.</p>
          
          <div className="mb-8 relative">
            <label className="block text-sm font-bold uppercase tracking-widest text-text-primary mb-4 flex justify-between">
              <span>Team Size</span>
              <span className="text-accent">{employees} Employees</span>
            </label>
            <input
              type="range"
              min="10"
              max="200"
              step="5"
              value={employees}
              onChange={(e) => setEmployees(parseInt(e.target.value))}
              className="w-full h-2 bg-primary rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between text-xs text-text-muted mt-2 font-mono">
              <span>10</span>
              <span>200+</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="text-text-secondary font-medium">One-off setup fee</span>
              <span className="font-mono text-lg">${setupFee}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="text-text-secondary font-medium">Per employee / week</span>
              <span className="font-mono text-lg">${costPerEmployeePerWeek}</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-text-secondary font-medium">Annual runtime cost</span>
              <span className="font-mono text-lg">${annualRuntimeCost.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Outputs */}
        <div className="flex-1 bg-primary rounded-2xl p-8 border border-border flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-1">Estimated programme investment</p>
              <p className="font-display text-4xl text-text-primary">${totalFirstYearInvestment.toLocaleString()}</p>
              <p className="text-xs text-text-muted mt-2">Annual cost based on per-employee pricing and onboarding fee.</p>
            </div>
            
            <div className="p-5 bg-accent/5 rounded-xl border border-accent/20 mb-6">
              <div className="flex justify-between items-end mb-1">
                <span className="text-sm font-bold text-accent uppercase tracking-wide">Projected absenteeism savings</span>
                <span className="font-mono text-green-400 font-bold text-lg">${estimatedSavings.toLocaleString()}</span>
              </div>
              <p className="text-[11px] text-text-secondary mt-1 leading-relaxed mb-4 text-left">Based on conservative reduction assumptions across structured wellbeing engagement.</p>
              
              <div className="flex justify-between items-end pt-4 border-t border-accent/20 mt-2">
                <span className="text-sm font-bold text-text-primary uppercase tracking-wide">Net annual impact</span>
                <span className="font-mono text-xl text-green-400 font-bold">+${netValue.toLocaleString()}</span>
              </div>
              <p className="text-[11px] text-text-secondary mt-1 text-left">Estimated return after programme cost.</p>
            </div>
            
            <p className="text-[11px] text-text-muted leading-relaxed mb-6">
              *All projections are conservative estimates based on average absenteeism cost benchmarks per employee per year. Actual results vary depending on engagement and implementation.
            </p>
          </div>
          
          <div className="border-t border-border pt-6">
            <p className="text-xs font-bold uppercase tracking-wide text-text-primary text-center">Book a Discovery Call to build a tailored projection for your team.</p>
          </div>
        </div>

      </div>
    </div>
  );
};
