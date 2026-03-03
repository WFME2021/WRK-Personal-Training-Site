import { GoalType, ConstraintType, FrequencyType } from '../../types';

export const GOAL_PROTOCOLS: Record<GoalType, { title: string; description: string; bullet: string }> = {
  [GoalType.STRENGTH]: {
    title: "The 'Progressive Overload' Protocol",
    description: "Strength isn't built by sweating; it's built by resting and lifting heavier. Your priority is intensity, not fatigue.",
    bullet: "Track every lift. If you aren't adding weight or reps every week, you aren't training—you're just exercising."
  },
  [GoalType.PHYSIQUE]: {
    title: "Hypertrophy & Volume",
    description: "Muscle is expensive tissue. To build it, you need sufficient volume and a surplus of building blocks (protein).",
    bullet: "Focus on 'Time Under Tension'. Slow down your eccentrics (lowering phase) to 3 seconds for every rep."
  },
  [GoalType.FAT_LOSS]: {
    title: "Caloric Deficit & Protein Leverage",
    description: "You cannot out-train a bad diet. We use training to preserve muscle while the diet handles the fat loss.",
    bullet: "The 30/30 Rule: Eat 30g of protein within 30 minutes of waking to stabilize blood sugar for the day."
  },
  [GoalType.PAIN_FREE]: {
    title: "Structural Balance & Tempo",
    description: "Pain often comes from asking a joint to do what a muscle should be doing. We fix this by slowing down.",
    bullet: "Use a 3-1-1-0 Tempo. 3s down, 1s pause, 1s up. This forces the muscle to take the load, not the joint."
  },
  [GoalType.RESTARTING]: {
    title: "The Consistency > Intensity Rule",
    description: "The biggest mistake is trying to train like you used to. Your body needs to re-learn the movement patterns first.",
    bullet: "The 'Show Up' Goal: Commit to the schedule, not the weight. A bad workout is better than a missed one."
  }
};

export const CONSTRAINT_FIXES: Record<ConstraintType, { title: string; description: string; actionable: string }> = {
  [ConstraintType.TIME]: {
    title: "Density Training (EMOMs)",
    description: "When time is short, we trade rest for density. You don't need 60 minutes; you need 20 minutes of relentless work.",
    actionable: "Use 'Antagonistic Supersets'. Pair an Upper Body Push with an Upper Body Pull. Rest 0s between them."
  },
  [ConstraintType.STRESS]: {
    title: "Autoregulation Management",
    description: "High stress + High intensity training = Burnout/Injury. We need to wave your intensity based on your recovery.",
    actionable: "The RPE Cap: On high-stress days, leave 3 reps in the tank (RPE 7). Do not train to failure."
  },
  [ConstraintType.TRAVEL]: {
    title: "The 'Anywhere' Maintenance",
    description: "Travel kills momentum because we wait for the 'perfect' gym. The goal shifts from 'Progress' to 'Maintenance'.",
    actionable: "The Floor Routine: 100 Pushups, 100 Squats, 100 Lunges. Break it up however you want. Done in 15 mins."
  },
  [ConstraintType.PAIN]: {
    title: "The Warm-Up Non-Negotiable",
    description: "Most pain comes from cold tissue. You can no longer 'jump' into a set. Your warm-up is now part of the work.",
    actionable: "Do 5 minutes of specific joint mobility before touching a weight. If it hurts, regress the movement immediately."
  },
  [ConstraintType.OVERWHELM]: {
    title: "The 'Binary' Decision Matrix",
    description: "Analysis paralysis leads to doing nothing. We remove the choice. You have a set plan, and you just execute.",
    actionable: "Pack your bag the night before. The decision to train is made when you're fresh, not when you're tired."
  }
};

export const FREQUENCY_SPLITS: Record<FrequencyType, { title: string; split: string[] }> = {
  [FrequencyType.TWO]: {
    title: "Full Body Efficiency",
    split: ["Mon: Full Body A", "Thu: Full Body B"]
  },
  [FrequencyType.THREE]: {
    title: "Modified Push/Pull/Legs",
    split: ["Mon: Lower Body", "Wed: Upper Push", "Fri: Upper Pull"]
  },
  [FrequencyType.FOUR]: {
    title: "Upper/Lower Split",
    split: ["Mon: Lower A", "Tue: Upper A", "Thu: Lower B", "Fri: Upper B"]
  },
  [FrequencyType.FIVE_PLUS]: {
    title: "Body Part Split (PPL)",
    split: ["Mon: Legs", "Tue: Push", "Wed: Pull", "Fri: Legs", "Sat: Upper"]
  },
  [FrequencyType.VARIES]: {
    title: "The Priority List",
    split: ["Session 1: Full Body Strength", "Session 2: Conditioning/Accessory", "Session 3: Mobility/Recovery"]
  }
};
