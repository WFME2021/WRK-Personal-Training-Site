import { AssessmentQuestion } from "./types";

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  // CONTEXT
  {
    id: "q1_goal",
    domain: "goal",
    type: "single",
    question: "What is your biggest goal right now?",
    options: [
      { id: "lose_fat", label: "Lose body fat" },
      { id: "maintain_muscle", label: "Maintain strength and muscle" },
      { id: "improve_fitness", label: "Improve fitness" },
      { id: "improve_energy", label: "Improve energy" },
      { id: "build_habits", label: "Build better habits" }
    ],
  },
  {
    id: "q2_glp1_status",
    domain: "context",
    type: "single",
    question: "Are you currently taking a GLP-1 medication?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no", label: "No" },
      { id: "considering", label: "Considering starting one" }
    ],
  },
  {
    id: "q3_glp1_duration",
    domain: "context",
    type: "single",
    question: "How long have you been using it?",
    options: [
      { id: "less_1m", label: "Less than 1 month" },
      { id: "1_3m", label: "1–3 months" },
      { id: "3_6m", label: "3–6 months" },
      { id: "6_12m", label: "6–12 months" },
      { id: "more_12m", label: "More than 12 months" },
      { id: "na", label: "Not applicable" }
    ],
  },
  // STRENGTH
  {
    id: "q4_strength_freq",
    domain: "strength",
    type: "single",
    question: "How many days a week do you currently strength train?",
    options: [
      { id: "0_days", label: "0 days", score: 0 },
      { id: "1_day", label: "1 day", score: 33 },
      { id: "2_3_days", label: "2–3 days", score: 100 },
      { id: "4_plus_days", label: "4+ days", score: 100 },
    ],
  },
  {
    id: "q5_strength_prog",
    domain: "strength",
    type: "single",
    question: "When you strength train, how do you know you're doing enough to build muscle?",
    options: [
      { id: "dont_track", label: "I don't really track or follow a program", score: 0 },
      { id: "feel", label: "I go by feel (sweat/soreness)", score: 33 },
      { id: "track_reps", label: "I track my reps and weight occasionally", score: 66 },
      { id: "program", label: "I follow a progressive training program", score: 100 },
    ],
  },
  // NUTRITION
  {
    id: "q6_nutr_appetite",
    domain: "nutrition",
    type: "single",
    question: "When your appetite is low, what tends to happen?",
    options: [
      { id: "struggle", label: "I struggle to eat enough overall", score: 0 },
      { id: "skip", label: "I often skip meals entirely", score: 25 },
      { id: "liquids", label: "I rely on liquids or shakes", score: 66 },
      { id: "smaller", label: "I eat smaller, protein-focused meals", score: 100 },
    ],
  },
  {
    id: "q7_nutr_protein",
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
    id: "q8_hydr_routine",
    domain: "hydration",
    type: "single",
    question: "How would you describe your daily hydration routine?",
    options: [
      { id: "none", label: "I just drink when I feel thirsty", score: 0 },
      { id: "remember", label: "I try to drink when I remember", score: 33 },
      { id: "some", label: "I have some regular hydration habits", score: 66 },
      { id: "consistent", label: "I have a highly consistent routine", score: 100 },
    ],
  },
  // MOVEMENT
  {
    id: "q9_move_active",
    domain: "movement",
    type: "single",
    question: "Outside of structured workouts, how active are you on a typical day?",
    options: [
      { id: "sedentary", label: "Mostly sedentary (desk job, low steps)", score: 0 },
      { id: "lightly", label: "Lightly active", score: 33 },
      { id: "moderately", label: "Moderately active", score: 66 },
      { id: "very", label: "Very active (physical job, high steps)", score: 100 },
    ],
  },
  // RECOVERY
  {
    id: "q10_rec_energy",
    domain: "recovery",
    type: "single",
    question: "How would you rate your sleep and daily energy levels?",
    options: [
      { id: "poor", label: "Poor / Chronically tired", score: 0 },
      { id: "varies", label: "It varies significantly day-to-day", score: 33 },
      { id: "good", label: "Good / I wake up fairly rested", score: 75 },
      { id: "excellent", label: "Excellent / High energy consistently", score: 100 },
    ],
  },
  // SUSTAINABILITY
  {
    id: "q11_sust_consistency",
    domain: "sustainability",
    type: "multiple",
    question: "What usually gets in the way of your consistency? (Select all that apply)",
    options: [
      { id: "work", label: "Work demands" },
      { id: "family", label: "Family commitments" },
      { id: "time", label: "Lack of time" },
      { id: "motivation", label: "Low motivation / discipline" },
      { id: "knowledge", label: "Not knowing exactly what to do" },
      { id: "all_or_nothing", label: "All-or-nothing mindset" },
      { id: "fatigue", label: "Fatigue / Lack of energy" }
    ],
  },
];
