import { AssessmentQuestion } from "./types";

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  // STRENGTH
  {
    id: "q1_strength_freq",
    domain: "strength",
    type: "single",
    question: "How often are you currently doing resistance or strength training?",
    options: [
      { id: "never", label: "Never", score: 0 },
      { id: "less_than_1", label: "Less than once per week", score: 33 },
      { id: "1_to_2", label: "1–2 times per week", score: 66 },
      { id: "3_plus", label: "3+ times per week", score: 100 },
    ],
  },
  {
    id: "q2_strength_conf",
    domain: "strength",
    type: "single",
    question: "How confident are you that your current training is helping you maintain or build strength?",
    options: [
      { id: "not_confident", label: "Not confident", score: 0 },
      { id: "little", label: "A little confident", score: 33 },
      { id: "fairly", label: "Fairly confident", score: 66 },
      { id: "very", label: "Very confident", score: 100 },
    ],
  },
  {
    id: "q3_strength_struct",
    domain: "strength",
    type: "single",
    question: "Do you currently follow a structured training programme?",
    options: [
      { id: "no", label: "No", score: 0 },
      { id: "sometimes", label: "Sometimes", score: 33 },
      { id: "yes_inconsistent", label: "Yes, but inconsistently", score: 66 },
      { id: "yes_consistent", label: "Yes, consistently", score: 100 },
    ],
  },

  // NUTRITION
  {
    id: "q4_nutr_conf",
    domain: "nutrition",
    type: "single",
    question: "How confident are you that you're eating enough protein each day?",
    options: [
      { id: "not_at_all", label: "Not at all confident", score: 0 },
      { id: "not_very", label: "Not very confident", score: 33 },
      { id: "fairly", label: "Fairly confident", score: 66 },
      { id: "very", label: "Very confident", score: 100 },
    ],
  },
  {
    id: "q5_nutr_appetite",
    domain: "nutrition",
    type: "single",
    question: "When your appetite is low, what tends to happen?",
    options: [
      { id: "struggle", label: "I struggle to eat enough overall", score: 0 },
      { id: "skip", label: "I sometimes skip meals", score: 25 },
      { id: "varies", label: "It varies significantly", score: 50 },
      { id: "smaller", label: "I eat smaller meals", score: 75 },
      { id: "regular", label: "I still eat regular balanced meals", score: 100 },
    ],
  },
  {
    id: "q6_nutr_protein",
    domain: "nutrition",
    type: "single",
    question: "How often does a meal contain a meaningful protein source?",
    options: [
      { id: "rarely", label: "Rarely", score: 0 },
      { id: "sometimes", label: "Sometimes", score: 33 },
      { id: "most", label: "Most meals", score: 66 },
      { id: "almost_every", label: "Almost every meal", score: 100 },
    ],
  },

  // HYDRATION
  {
    id: "q7_hydr_cons",
    domain: "hydration",
    type: "single",
    question: "How consistent is your fluid intake throughout the day?",
    options: [
      { id: "very_inconsistent", label: "Very inconsistent", score: 0 },
      { id: "somewhat", label: "Somewhat inconsistent", score: 33 },
      { id: "mostly", label: "Mostly consistent", score: 66 },
      { id: "very", label: "Very consistent", score: 100 },
    ],
  },
  {
    id: "q8_hydr_thirst",
    domain: "hydration",
    type: "single",
    question: "Do you usually wait until you feel thirsty before drinking?",
    options: [
      { id: "almost_always", label: "Almost always", score: 0 },
      { id: "often", label: "Often", score: 33 },
      { id: "sometimes", label: "Sometimes", score: 66 },
      { id: "rarely", label: "Rarely", score: 100 },
    ],
  },
  {
    id: "q9_hydr_routine",
    domain: "hydration",
    type: "single",
    question: "How would you describe your hydration routine?",
    options: [
      { id: "none", label: "I don't really have one", score: 0 },
      { id: "remember", label: "I drink when I remember", score: 33 },
      { id: "some", label: "I have some regular habits", score: 66 },
      { id: "consistent", label: "I have a consistent routine", score: 100 },
    ],
  },

  // MOVEMENT
  {
    id: "q10_move_active",
    domain: "movement",
    type: "single",
    question: "Outside of structured workouts, how active are you on a typical day?",
    options: [
      { id: "sedentary", label: "Mostly sedentary", score: 0 },
      { id: "lightly", label: "Lightly active", score: 33 },
      { id: "moderately", label: "Moderately active", score: 66 },
      { id: "very", label: "Very active", score: 100 },
    ],
  },
  {
    id: "q11_move_cons",
    domain: "movement",
    type: "single",
    question: "How consistent is your daily movement?",
    options: [
      { id: "very_inconsistent", label: "Very inconsistent", score: 0 },
      { id: "somewhat", label: "Somewhat inconsistent", score: 33 },
      { id: "mostly", label: "Mostly consistent", score: 66 },
      { id: "very", label: "Very consistent", score: 100 },
    ],
  },
  {
    id: "q12_move_target",
    domain: "movement",
    type: "single",
    question: "Do you currently have a daily movement target?",
    options: [
      { id: "no", label: "No", score: 0 },
      { id: "sometimes", label: "Sometimes", score: 33 },
      { id: "yes_miss", label: "Yes, but I don't consistently hit it", score: 66 },
      { id: "yes_hit", label: "Yes, and I generally hit it", score: 100 },
    ],
  },

  // RECOVERY
  {
    id: "q13_rec_sleep",
    domain: "recovery",
    type: "single",
    question: "How would you rate your sleep?",
    options: [
      { id: "poor", label: "Poor", score: 0 },
      { id: "below_avg", label: "Below average", score: 33 },
      { id: "good", label: "Good", score: 66 },
      { id: "very_good", label: "Very good", score: 100 },
    ],
  },
  {
    id: "q14_rec_workout",
    domain: "recovery",
    type: "single",
    question: "How often do you feel recovered before your next workout?",
    options: [
      { id: "rarely", label: "Rarely", score: 0 },
      { id: "sometimes", label: "Sometimes", score: 33 },
      { id: "usually", label: "Usually", score: 66 },
      { id: "almost_always", label: "Almost always", score: 100 },
    ],
  },
  {
    id: "q15_rec_energy",
    domain: "recovery",
    type: "single",
    question: "How would you rate your current energy?",
    options: [
      { id: "very_low", label: "Very low", score: 0 },
      { id: "low", label: "Low", score: 33 },
      { id: "moderate", label: "Moderate", score: 66 },
      { id: "good", label: "Good", score: 85 },
      { id: "very_good", label: "Very good", score: 100 },
    ],
  },

  // SUSTAINABILITY
  {
    id: "q16_sust_conf",
    domain: "sustainability",
    type: "single",
    question: "How confident are you that you could maintain your current routine for the next six months?",
    options: [
      { id: "not", label: "Not confident", score: 0 },
      { id: "slightly", label: "Slightly confident", score: 33 },
      { id: "fairly", label: "Fairly confident", score: 66 },
      { id: "very", label: "Very confident", score: 100 },
    ],
  },
  {
    id: "q17_sust_fit",
    domain: "sustainability",
    type: "single",
    question: "How well does your current approach fit your real life?",
    options: [
      { id: "not_at_all", label: "Not at all", score: 0 },
      { id: "not_very", label: "Not very well", score: 33 },
      { id: "pretty", label: "Pretty well", score: 66 },
      { id: "very", label: "Very well", score: 100 },
    ],
  },
  {
    id: "q18_sust_hurdles",
    domain: "sustainability",
    type: "multiple",
    question: "What usually gets in the way? (Select all that apply)",
    options: [
      { id: "work", label: "Work" },
      { id: "family", label: "Family" },
      { id: "travel", label: "Travel" },
      { id: "time", label: "Time" },
      { id: "motivation", label: "Motivation" },
      { id: "appetite", label: "Appetite" },
      { id: "energy", label: "Energy" },
      { id: "social", label: "Social events" },
      { id: "structure", label: "Lack of structure" },
      { id: "knowledge", label: "Not knowing what to do" },
      { id: "other", label: "Other" }
    ],
  },

  // GOAL
  {
    id: "q19_goal",
    domain: "goal",
    type: "single",
    question: "What is your biggest goal right now?",
    options: [
      { id: "lose_fat", label: "Lose body fat" },
      { id: "maintain_muscle", label: "Maintain strength and muscle" },
      { id: "improve_fitness", label: "Improve fitness" },
      { id: "improve_energy", label: "Improve energy" },
      { id: "build_habits", label: "Build better habits" },
      { id: "feel_confident", label: "Feel more confident" },
      { id: "maintain_results", label: "Maintain results long-term" },
      { id: "combination", label: "A combination of these" }
    ],
  },

  // CONTEXT
  {
    id: "q20_glp1_status",
    domain: "context",
    type: "single",
    question: "Are you currently taking a GLP-1 medication?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no", label: "No" },
      { id: "considering", label: "Considering starting one" },
      { id: "prefer_not", label: "Prefer not to say" }
    ],
  },
  {
    id: "q21_glp1_duration",
    domain: "context",
    type: "single",
    question: "How long have you been using it?",
    options: [
      { id: "less_1m", label: "Less than 1 month" },
      { id: "1_3m", label: "1–3 months" },
      { id: "3_6m", label: "3–6 months" },
      { id: "6_12m", label: "6–12 months" },
      { id: "more_12m", label: "More than 12 months" },
      { id: "prefer_not", label: "Prefer not to say" },
      { id: "na", label: "Not applicable" }
    ],
  }
];
