const fs = require('fs');
let code = fs.readFileSync('pages/TdeeCalculator.tsx', 'utf8');

// 1. Add meals state
code = code.replace(
  "const [currentIntake, setCurrentIntake] = useState<string>('');",
  "const [meals, setMeals] = useState<string>('');\n  const [currentIntake, setCurrentIntake] = useState<string>('');"
);

// 2. Update resetCalculator
code = code.replace(
  "setCurrentIntake('');",
  "setCurrentIntake('');\n    setMeals('');"
);

// 3. Update handleNext
code = code.replace(
  "if (step === 6) {",
  "if (step === 6 && (!meals || isNaN(Number(meals)) || Number(meals) < 1 || Number(meals) > 8)) return setError('Please enter a valid number of meals (1-8).');\n    if (step === 7) {"
);
code = code.replace(
  "if (step === 6 ? 'Calculate Results' : 'Continue')",
  "if (step === 7 ? 'Calculate Results' : 'Continue')"
);
// note: wait, the button actually says: `{step === 6 ? 'Calculate Results' : 'Continue'}`
code = code.replace(
  "{step === 6 ? 'Calculate Results' : 'Continue'}",
  "{step === 7 ? 'Calculate Results' : 'Continue'}"
);

// 4. Update step tracker
code = code.replace(
  "Step {step} of 6",
  "Step {step} of 7"
);
code = code.replace(
  "[1, 2, 3, 4, 5, 6].map(i =>",
  "[1, 2, 3, 4, 5, 6, 7].map(i =>"
);

// 5. Update calculateResults
const calculateResultsOld = `    // Protein from TARGET weight
    const proteinGrams = Math.round(PROTEIN_MULTIPLIERS[resistance as keyof typeof PROTEIN_MULTIPLIERS] * tw);
    const proteinCals = proteinGrams * 4;

    const minProteinGrams = Math.round(1.2 * tw);
    const maxProteinGrams = Math.round(1.6 * tw);

    let fatCals = 0;
    let carbCals = 0;

    if (preference === 'balanced') {
      fatCals = targetCaloriesRounded * 0.30;
    } else if (preference === 'higherProtein') {
      fatCals = targetCaloriesRounded * 0.25;
    } else if (preference === 'lowerCarb') {
      carbCals = targetCaloriesRounded * 0.20;
      fatCals = targetCaloriesRounded - proteinCals - carbCals;
    }

    if (preference === 'balanced' || preference === 'higherProtein') {
      carbCals = targetCaloriesRounded - proteinCals - fatCals;
    }

    // Fat minimum enforcement
    const minFatCals = MIN_FAT_G * 9;
    if (fatCals < minFatCals) {
      fatCals = minFatCals;
      carbCals = targetCaloriesRounded - proteinCals - fatCals;
    }

    // Carb floor enforcement
    if (carbCals < 0) {
      carbCals = 0;
      fatCals = targetCaloriesRounded - proteinCals - carbCals;
    }

    const fatGrams = Math.round(fatCals / 9);
    const carbGrams = Math.round(carbCals / 4);

    // Exact reconciliation
    const finalTargetCals = (proteinGrams * 4) + (carbGrams * 4) + (fatGrams * 9);

    setResults({
      tdee: Math.round(tdee / 10) * 10,
      targetCalories: finalTargetCals,
      protein: proteinGrams,
      minProtein: minProteinGrams,
      maxProtein: maxProteinGrams,
      fat: fatGrams,
      carbs: carbGrams,
      deficitPercentage,
    });`;

const calculateResultsNew = `    // Protein from TARGET weight
    let proteinGrams = Math.round(PROTEIN_MULTIPLIERS[resistance as keyof typeof PROTEIN_MULTIPLIERS] * tw);
    const eatingOccasions = Number(meals);
    
    // Per-meal floor check
    if (proteinGrams / eatingOccasions < 25) {
      proteinGrams = 25 * eatingOccasions;
    }
    const proteinCals = proteinGrams * 4;

    const minProteinGrams = Math.round(1.2 * tw);
    const maxProteinGrams = Math.round(1.6 * tw);

    let fatCals = 0;
    if (preference === 'balanced') {
      fatCals = targetCaloriesRounded * 0.30;
    } else if (preference === 'higherProtein') {
      fatCals = targetCaloriesRounded * 0.25;
    } else if (preference === 'lowerCarb') {
      fatCals = targetCaloriesRounded - proteinCals - (targetCaloriesRounded * 0.20);
    }

    // Fat minimum enforcement
    const minFatCals = MIN_FAT_G * 9;
    if (fatCals < minFatCals) {
      fatCals = minFatCals;
    }

    // Carbs are flexible remainder
    let carbCals = targetCaloriesRounded - proteinCals - fatCals;

    // Mathematical impossibility check
    if (carbCals < 0) {
      setError('Your calorie target is too low to support the required protein and minimum fat targets. Please consider a smaller calorie deficit or fewer eating occasions.');
      setShowResults(false);
      return;
    }

    const fatGrams = Math.round(fatCals / 9);
    const carbGrams = Math.round(carbCals / 4);

    // Exact reconciliation
    const finalTargetCals = (proteinGrams * 4) + (carbGrams * 4) + (fatGrams * 9);

    setResults({
      tdee: Math.round(tdee / 10) * 10,
      targetCalories: finalTargetCals,
      protein: proteinGrams,
      minProtein: minProteinGrams,
      maxProtein: maxProteinGrams,
      fat: fatGrams,
      carbs: carbGrams,
      deficitPercentage,
      meals: eatingOccasions,
    });`;

code = code.replace(calculateResultsOld, calculateResultsNew);

// 6. Rename Step 6 to Step 7 and Insert new Step 6
const step6Old = `{/* STEP 6 */}
          {step === 6 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] mb-8">Do you know roughly how many calories you're currently eating each day?</h2>`;

const step6New = `{/* STEP 6 */}
          {step === 6 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] mb-8">How many eating occasions (meals or snacks) do you typically have per day?</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-[14px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-3">Number of meals/snacks</label>
                  <input type="number" value={meals} onChange={e => setMeals(e.target.value)} placeholder="e.g. 3" className="w-full h-14 px-5 bg-[#FAFAF9] border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#8A9A86] outline-none text-[16px] font-medium text-[#2C3539] transition-all" />
                </div>
              </div>
            </div>
          )}

          {/* STEP 7 */}
          {step === 7 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-serif text-[28px] md:text-[32px] text-[#2C3539] mb-8">Do you know roughly how many calories you're currently eating each day?</h2>`;

code = code.replace(step6Old, step6New);

// 7. Change the output UI for Protein Priority
const proteinUioOld = `<p className="text-[15px] text-[#2C3539]/80 leading-relaxed mb-6">
                Protein is prioritised first in your macro calculation because maintaining adequate protein intake is an important consideration during weight loss, particularly when resistance training.
              </p>
              <div className="bg-[#FAFAF9] rounded-2xl p-5 border border-neutral-200">
                <p className="text-[13px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-3">Example distribution:</p>
                <ul className="space-y-2 text-[14px] text-[#2C3539]">
                  <li className="flex justify-between"><span>Breakfast</span> <span className="font-medium">{Math.round(results.protein * 0.22)} g</span></li>
                  <li className="flex justify-between"><span>Lunch</span> <span className="font-medium">{Math.round(results.protein * 0.25)} g</span></li>
                  <li className="flex justify-between"><span>Snack</span> <span className="font-medium">{Math.round(results.protein * 0.20)} g</span></li>
                  <li className="flex justify-between"><span>Dinner</span> <span className="font-medium">{results.protein - Math.round(results.protein * 0.22) - Math.round(results.protein * 0.25) - Math.round(results.protein * 0.20)} g</span></li>
                </ul>
                <p className="text-[13px] text-[#2C3539]/60 mt-4 italic">For example, you could spread your target across 3–4 meals or snacks.</p>
              </div>`;

const proteinUiNew = `<p className="text-[15px] text-[#2C3539]/80 leading-relaxed mb-6">
                Your daily protein target is prioritised to support muscle retention during weight loss. We've also set a practical minimum of 25 g protein per eating occasion so your protein is distributed meaningfully across the day. The remaining calories are allocated between fat and carbohydrates.
              </p>
              <div className="bg-[#FAFAF9] rounded-2xl p-5 border border-neutral-200">
                <p className="text-[13px] font-bold uppercase tracking-wider text-[#2C3539]/70 mb-3">PER-MEAL PROTEIN GUIDE:</p>
                <div className="text-[24px] font-serif text-[#2C3539] mb-1">25 g minimum</div>
                <p className="text-[14px] text-[#2C3539]/70">per eating occasion</p>
              </div>`;
              
code = code.replace(proteinUioOld, proteinUiNew);

fs.writeFileSync('pages/TdeeCalculator.tsx', code);
