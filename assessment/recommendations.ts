import { Recommendation, ActionItem, Domain } from "./types";

export const RECOMMENDATIONS: Record<Domain, Recommendation> = {
  strength: {
    domain: "strength",
    headline: "BUILD A STRONGER TRAINING FOUNDATION",
    explanation: "Strength training is one of the most useful tools in your GLP-1 fitness toolkit. The goal isn't to train harder for the sake of it — it's to consistently give your body a reason to maintain and improve strength.",
    actions: [
      "Aim for 2–3 resistance-training sessions per week where appropriate.",
      "Prioritise major movement patterns.",
      "Focus on progressive improvement.",
      "Allow adequate recovery."
    ],
    firstStep: "Complete 2–3 structured resistance sessions this week."
  },
  nutrition: {
    domain: "nutrition",
    headline: "MAKE PROTEIN A PRIORITY",
    explanation: "When appetite is reduced, it can become easier to unintentionally eat less than you need. Building meals around protein and nutrient-dense foods can help you make better use of the food you are eating.",
    actions: [
      "Include a quality protein source at meals.",
      "Prioritise protein when appetite is limited.",
      "Use smaller, nutrient-dense meals where appropriate.",
      "Track intake if useful, but don't make obsessive tracking mandatory."
    ],
    firstStep: "Build each meal around a quality protein source."
  },
  hydration: {
    domain: "hydration",
    headline: "BUILD A HYDRATION ROUTINE",
    explanation: "Instead of relying entirely on thirst, create regular opportunities to drink throughout the day.",
    actions: [
      "Start the day with fluids.",
      "Keep water accessible.",
      "Drink around regular daily routines.",
      "Pay attention to hydration around exercise and hot conditions."
    ],
    firstStep: "Create regular drinking opportunities."
  },
  movement: {
    domain: "movement",
    headline: "MOVE MORE CONSISTENTLY",
    explanation: "Your workouts matter, but so does everything you do between them. Building consistent daily movement can support your overall activity level without requiring more hard training.",
    actions: [
      "Establish a realistic movement target.",
      "Break up long periods of sitting.",
      "Walk after meals where practical.",
      "Increase activity progressively."
    ],
    firstStep: "Maintain consistent daily movement."
  },
  recovery: {
    domain: "recovery",
    headline: "RECOVER AS DELIBERATELY AS YOU TRAIN",
    explanation: "Progress isn't just about the work you do. Your body also needs time and resources to recover.",
    actions: [
      "Prioritise consistent sleep.",
      "Avoid unnecessary training volume.",
      "Include easier days.",
      "Monitor how you feel across the week."
    ],
    firstStep: "Prioritise consistent sleep and allow appropriate recovery between training sessions."
  },
  sustainability: {
    domain: "sustainability",
    headline: "BUILD SOMETHING YOU CAN ACTUALLY LIVE WITH",
    explanation: "The best plan isn't the one that works perfectly for two weeks. It's the one you can keep doing when work gets busy, life gets messy and motivation disappears.",
    actions: [
      "Build around your real schedule.",
      "Plan for weekends and social events.",
      "Use minimum-viable workouts when time is limited.",
      "Focus on consistency rather than perfection."
    ],
    firstStep: "Build around your real schedule and focus on consistency."
  }
};

export const ACTION_PLAN_ITEMS: Record<Domain, ActionItem> = {
  strength: { domain: "strength", label: "TRAIN", action: "2–3 resistance sessions." },
  nutrition: { domain: "nutrition", label: "EAT", action: "Prioritise protein at meals." },
  hydration: { domain: "hydration", label: "HYDRATE", action: "Create regular drinking opportunities." },
  movement: { domain: "movement", label: "MOVE", action: "Maintain consistent daily movement." },
  recovery: { domain: "recovery", label: "RECOVER", action: "Prioritise sleep and recovery." },
  sustainability: { domain: "sustainability", label: "SUSTAIN", action: "Focus on minimum-viable consistency." }
};
