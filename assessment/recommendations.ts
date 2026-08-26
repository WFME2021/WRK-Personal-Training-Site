import { Recommendation, ActionItem, Domain } from "./types";

export function getDynamicRecommendations(answers: Record<string, string | string[]>): Record<Domain, Recommendation> {
  const strengthFreq = answers["q4_strength_freq"] as string;
  const strengthProg = answers["q5_strength_prog"] as string;
  const nutrAppetite = answers["q6_nutr_appetite"] as string;
  
  // Strength Recommendation Logic
  let strengthRec: Recommendation;
  if (strengthFreq === "0_days" || strengthFreq === "1_day") {
    strengthRec = {
      domain: "strength",
      headline: "START PROTECTING YOUR MUSCLE",
      explanation: "On a GLP-1, weight loss without strength training often means losing valuable muscle mass. Your priority right now isn't spending hours in a gym, it's just sending a signal to your body to keep your muscle.",
      actions: [
        "Start with two 15-minute bodyweight or light dumbbell circuits per week.",
        "Focus on consistency over intensity.",
        "Don't worry about complex gym routines yet.",
        "A structured, bespoke program can help you progress safely when you're ready."
      ],
      firstStep: "Complete two 15-minute resistance sessions this week (at home is perfectly fine)."
    };
  } else {
    strengthRec = {
      domain: "strength",
      headline: "TRAIN SMARTER, NOT HARDER",
      explanation: "You have the habit of training, which is the hardest part. However, going by feel or sweating isn't enough to protect muscle on a GLP-1. You need progressive overload.",
      actions: [
        "Start tracking your sets, reps, and weights.",
        "Focus on getting slightly stronger over time.",
        "Ensure you are following a structured program rather than random workouts.",
        "Consider professional coaching to ensure your programming matches your GLP-1 reality."
      ],
      firstStep: "Track your main lifts in your next two workouts."
    };
  }

  // Nutrition Recommendation Logic
  let nutrRec: Recommendation;
  if (nutrAppetite === "skip" || nutrAppetite === "struggle") {
    nutrRec = {
      domain: "nutrition",
      headline: "DEFEND AGAINST UNDEREATING",
      explanation: "Skipping meals due to low appetite on a GLP-1 puts you at high risk for muscle catabolism and fatigue. We need to find ways to get nutrients in when eating feels difficult.",
      actions: [
        "Use liquid calories (shakes/smoothies) when solid food is unappealing.",
        "Eat your protein source first during meals.",
        "Eat smaller, more frequent meals if large meals cause discomfort.",
        "A customised nutrition strategy can help you hit your targets without feeling overly full."
      ],
      firstStep: "Introduce one protein shake or smoothie on days you struggle to eat."
    };
  } else {
    nutrRec = {
      domain: "nutrition",
      headline: "MAKE PROTEIN THE PRIORITY",
      explanation: "Even if you are eating regular meals, hitting an optimal protein threshold is crucial for preserving muscle mass and metabolic rate during medical weight loss.",
      actions: [
        "Build every meal around a quality protein source.",
        "Aim for a minimum of 20-30g of protein per meal.",
        "Keep high-protein snacks accessible.",
        "Custom coaching can help you refine your macros for your specific body and goals."
      ],
      firstStep: "Ensure your next three meals have a clear, dominant protein source."
    };
  }

  // Movement Recommendation
  const moveRec: Recommendation = {
    domain: "movement",
    headline: "INCREASE DAILY ACTIVITY",
    explanation: "Structured workouts alone aren't always enough. Increasing your daily 'background' movement (NEAT) is one of the most effective ways to support fat loss and maintain energy.",
    actions: [
      "Establish a realistic daily step target.",
      "Break up long periods of sitting.",
      "Take a 10-minute walk after meals.",
      "Look for ways to add activity into your existing routine."
    ],
    firstStep: "Add one 10-minute walk to your daily routine."
  };

  // Hydration Recommendation
  const hydrRec: Recommendation = {
    domain: "hydration",
    headline: "BUILD A HYDRATION ROUTINE",
    explanation: "Waiting until you feel thirsty often means you're already dehydrated, which can worsen GLP-1 side effects like fatigue and digestive issues.",
    actions: [
      "Start the day with a large glass of water.",
      "Keep a water bottle visible at your desk.",
      "Drink a glass of water with every meal.",
      "Create habits rather than relying on memory."
    ],
    firstStep: "Drink 500ml of water within 30 minutes of waking up."
  };

  // Recovery Recommendation
  const recRec: Recommendation = {
    domain: "recovery",
    headline: "PRIORITISE DEEP RECOVERY",
    explanation: "Your body doesn't change during the workout; it changes while you recover. Managing sleep and daily energy is vital when your body is adapting to a calorie deficit.",
    actions: [
      "Establish a consistent sleep schedule.",
      "Wind down without screens 30 minutes before bed.",
      "Don't add more intense workouts if your energy is already low.",
      "Expert coaching can help balance your training volume with your recovery capacity."
    ],
    firstStep: "Commit to a consistent bedtime for the next three nights."
  };

  // Sustainability Recommendation
  const sustRec: Recommendation = {
    domain: "sustainability",
    headline: "FOCUS ON CONSISTENCY OVER PERFECTION",
    explanation: "The best plan isn't the one you can do perfectly for a week. It's the one you can maintain when life gets messy, motivation drops, and you're busy.",
    actions: [
      "Build a minimum-viable routine for bad weeks.",
      "Drop the all-or-nothing mindset.",
      "Focus on showing up, even if it's a 10-minute session.",
      "A bespoke coaching plan adapts to your life, rather than forcing you to adapt to it."
    ],
    firstStep: "Define your 'bare minimum' workout for days when you have zero time."
  };

  return {
    strength: strengthRec,
    nutrition: nutrRec,
    movement: moveRec,
    hydration: hydrRec,
    recovery: recRec,
    sustainability: sustRec
  };
}

export function getDynamicActionPlan(answers: Record<string, string | string[]>): Record<Domain, ActionItem> {
  const recommendations = getDynamicRecommendations(answers);
  
  return {
    strength: { domain: "strength", label: "TRAIN", action: recommendations.strength.firstStep },
    nutrition: { domain: "nutrition", label: "EAT", action: recommendations.nutrition.firstStep },
    movement: { domain: "movement", label: "MOVE", action: recommendations.movement.firstStep },
    hydration: { domain: "hydration", label: "HYDRATE", action: recommendations.hydration.firstStep },
    recovery: { domain: "recovery", label: "RECOVER", action: recommendations.recovery.firstStep },
    sustainability: { domain: "sustainability", label: "SUSTAIN", action: recommendations.sustainability.firstStep }
  };
}
