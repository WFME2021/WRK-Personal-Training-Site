import { ASSESSMENT_QUESTIONS } from "./questions";
import { RECOMMENDATIONS, ACTION_PLAN_ITEMS } from "./recommendations";
import { AssessmentResult, Domain, DomainScore, Recommendation, ActionItem } from "./types";

const ASSESSMENT_VERSION = "1.0";

const DOMAIN_WEIGHTS: Record<Domain, number> = {
  strength: 0.20,
  nutrition: 0.20,
  hydration: 0.10,
  movement: 0.15,
  recovery: 0.15,
  sustainability: 0.20
};

const DOMAIN_TIE_BREAKER: Domain[] = [
  "nutrition",
  "strength",
  "sustainability",
  "recovery",
  "movement",
  "hydration"
]; // The earlier in the array, the higher priority (if scores are tied)

function getScoreLabel(score: number): string {
  if (score < 40) return "Foundation to Build";
  if (score < 60) return "Opportunity";
  if (score < 80) return "Solid Foundation";
  return "Strong Foundation";
}

function getOverallLabel(score: number): string {
  if (score < 40) return "BUILD YOUR FOUNDATION";
  if (score < 60) return "ROOM TO IMPROVE";
  if (score < 80) return "GOOD FOUNDATION";
  return "STRONG FOUNDATION";
}

export function calculateAssessmentResult(answers: Record<string, string | string[]>): AssessmentResult {
  const domainScoresMap: Record<Domain, number[]> = {
    strength: [],
    nutrition: [],
    hydration: [],
    movement: [],
    recovery: [],
    sustainability: []
  };

  // Map answers to scores
  for (const q of ASSESSMENT_QUESTIONS) {
    if (q.domain && q.domain !== "goal" && q.domain !== "context") {
      const dom = q.domain as Domain;
      const answer = answers[q.id];
      if (answer && typeof answer === "string") {
        const opt = q.options.find(o => o.id === answer);
        if (opt && opt.score !== undefined) {
          domainScoresMap[dom].push(opt.score);
        }
      }
    }
  }

  // Calculate domain averages
  const domainScores: DomainScore[] = [];
  let overallScore = 0;

  for (const dom of Object.keys(domainScoresMap) as Domain[]) {
    const scores = domainScoresMap[dom];
    const avg = scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
    const roundedAvg = Math.round(avg);
    domainScores.push({
      domain: dom,
      score: roundedAvg,
      label: getScoreLabel(roundedAvg)
    });
    overallScore += roundedAvg * DOMAIN_WEIGHTS[dom];
  }
  
  overallScore = Math.round(overallScore);

  // Sort domains to find priorities (lowest score first)
  const sortedDomains = [...domainScores].sort((a, b) => {
    if (a.score !== b.score) {
      return a.score - b.score;
    }
    // Tie breaker
    const idxA = DOMAIN_TIE_BREAKER.indexOf(a.domain);
    const idxB = DOMAIN_TIE_BREAKER.indexOf(b.domain);
    return idxA - idxB;
  });

  const primaryFocus = sortedDomains[0].domain;
  const secondaryFocus = sortedDomains[1].domain;
  const thirdFocus = sortedDomains[2].domain;

  const recommendations: Recommendation[] = [
    RECOMMENDATIONS[primaryFocus],
    RECOMMENDATIONS[secondaryFocus],
    RECOMMENDATIONS[thirdFocus]
  ];

  const sevenDayPlan: ActionItem[] = [
    ACTION_PLAN_ITEMS[primaryFocus],
    ACTION_PLAN_ITEMS[secondaryFocus],
    ACTION_PLAN_ITEMS[thirdFocus],
    // Let's add the remaining domains to the 7-day plan, or just the top priorities?
    // "Automatically assemble a simple action plan from the user's top priorities"
    // But the example showed 5 items. The spec says:
    // "The plan should be short and practical. Do not overwhelm the user with 20 tasks."
    // Let's include the top 3, or maybe all 6 but just the brief action.
    // The example showed: TRAIN, EAT, MOVE, HYDRATE, RECOVER.
  ];

  // We'll assemble a 5-item plan based on standard priorities, just picking from the action plan items.
  const fullPlan = [
    ACTION_PLAN_ITEMS["strength"],
    ACTION_PLAN_ITEMS["nutrition"],
    ACTION_PLAN_ITEMS["movement"],
    ACTION_PLAN_ITEMS["hydration"],
    ACTION_PLAN_ITEMS["recovery"]
  ];

  let goalLabel = "";
  if (answers["q19_goal"] && typeof answers["q19_goal"] === "string") {
    const q19 = ASSESSMENT_QUESTIONS.find(q => q.id === "q19_goal");
    goalLabel = q19?.options.find(o => o.id === answers["q19_goal"])?.label || "";
  }

  let glp1Status = "";
  if (answers["q20_glp1_status"] && typeof answers["q20_glp1_status"] === "string") {
    const q = ASSESSMENT_QUESTIONS.find(q => q.id === "q20_glp1_status");
    glp1Status = q?.options.find(o => o.id === answers["q20_glp1_status"])?.label || "";
  }
  
  let glp1Duration = "";
  if (answers["q21_glp1_duration"] && typeof answers["q21_glp1_duration"] === "string") {
    const q = ASSESSMENT_QUESTIONS.find(q => q.id === "q21_glp1_duration");
    glp1Duration = q?.options.find(o => o.id === answers["q21_glp1_duration"])?.label || "";
  }

  return {
    assessmentVersion: ASSESSMENT_VERSION,
    overallScore,
    overallLabel: getOverallLabel(overallScore),
    domainScores,
    primaryFocus,
    secondaryFocus,
    thirdFocus,
    goal: goalLabel,
    glp1Status,
    glp1Duration,
    recommendations,
    sevenDayPlan: fullPlan
  };
}
