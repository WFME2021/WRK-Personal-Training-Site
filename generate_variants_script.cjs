const fs = require('fs');

let content = fs.readFileSync('data/assessmentData.ts', 'utf8');

// The rules for variants:
// 2 days: two full body strength sessions, 45-60 mins, spaced by 2 days. 
// 3 days: keep
// 4+ days: 3 strength + 1 conditioning
// Chaos: 2 anchor sessions that can land anywhere in the week, never fixed days.

// To do this simply, I'll regex replace just the `two_days`, `four_plus`, `chaos` inside next7DaysByDose, weeklyStructureCopyByDose, scheduleByDose.
// Actually, it's safer to just define the objects for all 5 archetypes and replace the entire fields.
