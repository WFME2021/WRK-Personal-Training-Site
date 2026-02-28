import React, { useState } from 'react';
import { Button } from './Button';
import { Dumbbell, RotateCcw } from 'lucide-react';

export const OneRepMaxEstimator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [reps, setReps] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculate1RM = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const r = parseFloat(reps);

    if (w > 0 && r > 0) {
      // Epley Formula: 1RM = w * (1 + r/30)
      const oneRepMax = w * (1 + r / 30);
      setResult(Math.round(oneRepMax));
    }
  };

  const reset = () => {
    setWeight('');
    setReps('');
    setResult(null);
  };

  return (
    <div className="max-w-2xl mx-auto bg-primary border border-border rounded-[2rem] p-8 md:p-12 shadow-xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-secondary p-3 rounded-xl border border-border">
          <Dumbbell className="text-accent" size={24} />
        </div>
        <h2 className="font-display text-2xl font-bold uppercase text-text-primary">Estimate Your Max</h2>
      </div>

      <form onSubmit={calculate1RM} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">
              Weight Lifted (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full bg-secondary border border-border text-text-primary rounded-xl p-4 focus:border-accent focus:outline-none transition-colors"
              placeholder="e.g. 100"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">
              Reps Performed
            </label>
            <input
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              className="w-full bg-secondary border border-border text-text-primary rounded-xl p-4 focus:border-accent focus:outline-none transition-colors"
              placeholder="e.g. 5"
              required
            />
          </div>
        </div>

        <div className="pt-4">
          <Button fullWidth size="lg" type="submit">
            Calculate 1RM
          </Button>
        </div>
      </form>

      {result !== null && (
        <div className="mt-12 pt-12 border-t border-border animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-2">Estimated 1 Rep Max</p>
            <div className="text-6xl md:text-8xl font-display font-bold text-accent mb-4">
              {result}<span className="text-2xl md:text-4xl text-text-secondary ml-2">kg</span>
            </div>
            <p className="text-text-secondary text-sm max-w-md mx-auto mb-8">
              Based on the Epley formula. Use this number to calculate your percentages for programming.
            </p>
            
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto text-center">
              <div className="bg-secondary p-4 rounded-xl border border-border">
                <span className="block text-xs font-bold text-text-secondary uppercase mb-1">90%</span>
                <span className="block text-xl font-bold text-text-primary">{Math.round(result * 0.9)}kg</span>
              </div>
              <div className="bg-secondary p-4 rounded-xl border border-border">
                <span className="block text-xs font-bold text-text-secondary uppercase mb-1">80%</span>
                <span className="block text-xl font-bold text-text-primary">{Math.round(result * 0.8)}kg</span>
              </div>
              <div className="bg-secondary p-4 rounded-xl border border-border">
                <span className="block text-xs font-bold text-text-secondary uppercase mb-1">70%</span>
                <span className="block text-xl font-bold text-text-primary">{Math.round(result * 0.7)}kg</span>
              </div>
            </div>

            <button 
              onClick={reset}
              className="mt-8 flex items-center justify-center mx-auto text-text-secondary hover:text-accent transition-colors text-sm font-bold uppercase tracking-wider"
            >
              <RotateCcw size={16} className="mr-2" /> Reset Calculator
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
