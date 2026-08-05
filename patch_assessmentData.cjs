const fs = require('fs');
const content = fs.readFileSync('data/assessmentData.ts', 'utf-8');

const movementPatternsSection = `  "movementPatternsSection": {
    "title": "HOW TO FILL YOUR SESSIONS",
    "intro": "Every session should be built around movement patterns. There are seven important ones to include:",
    "patterns": [
      "Hinge (deadlift variation, kettlebell swing, good morning)",
      "Squat (goblet, box squat, front squat)",
      "Single leg (split squat, step-up, reverse lunge)",
      "Push (press variation - horizontal or vertical)",
      "Pull (row or pull variation - horizontal or vertical)",
      "Carry (farmer carry, suitcase carry, trap bar carry)",
      "Core / anti-rotation (dead bug, plank, Pallof press, rotational med ball)"
    ],
    "outroParagraphs": [
      "Aim to hit 4–5 patterns, at ecah session. Rotate which patterns lead across your workouts so everything gets covered across the week. Fill the remaining time with auxiliary work - isolation or accessory movements like curls, lateral raises, or calf raises.",
      "The right exercise within each pattern depends on your movement history, any niggles, and what you have available. That's the conversation we have in a movement screen - this gives you the framework to train intelligently until we have a chance to catch up."
    ]
  },`;

const newContent = content.replace(
  '"version": "1.1.0",',
  '"version": "1.1.0",\n' + movementPatternsSection
);

fs.writeFileSync('data/assessmentData.ts', newContent);
console.log('Done!');
