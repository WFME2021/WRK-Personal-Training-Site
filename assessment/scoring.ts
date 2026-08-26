import { ASSESSMENT_QUESTIONS } from "./questions";
import { getDynamicRecommendations, getDynamicActionPlan } from "./recommendations";
import { AssessmentResult, Domain, DomainScore, Recommendation, ActionItem } from "./types";

const ASSESSMENT_VERSION = "2.0";

const DOMAIN_WEIGHTS: Record<Domain, number> = {
  strength: 0.25,
  nutrition: 0.25,
  hydration: 0.10,
  movement: 0.15,
  recovery: 0.15,
  sustainability: 0.10
};

const DOMAIN_TIE_BREAKER: Domain[] = [
  "strength",
  "nutrition",
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
      } else if (answer && Array.isArray(answer)) {
        // Handle multiple choice if we want to score it. Right now sustainability consistency is multiple choice but has no scores attached in the options.
        // If it has scores, we could average them. Since it doesn't, we can just give a fixed score based on how many they selected.
        if (q.id === "q11_sust_consistency") {
          const numHurdles = answer.length;
          let score = 100;
          if (numHurdles >= 4) score = 25;
          else if (numHurdles >= 2) score = 60;
          else if (numHurdles === 1) score = 85;
          domainScoresMap[dom].push(score);
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

  const dynamicRecommendations = getDynamicRecommendations(answers);
  const dynamicActionPlan = getDynamicActionPlan(answers);

  const recommendations: Recommendation[] = [
    dynamicRecommendations[primaryFocus],
    dynamicRecommendations[secondaryFocus],
    dynamicRecommendations[thirdFocus]
  ];

  const fullPlan = [
    dynamicActionPlan["strength"],
    dynamicActionPlan["nutrition"],
    dynamicActionPlan["movement"],
    dynamicActionPlan["hydration"],
    dynamicActionPlan["recovery"]
  ];

  let goalLabel = "";
  if (answers["q1_goal"] && typeof answers["q1_goal"] === "string") {
    const q = ASSESSMENT_QUESTIONS.find(q => q.id === "q1_goal");
    goalLabel = q?.options.find(o => o.id === answers["q1_goal"])?.label || "";
  }

  let glp1Status = "";
  if (answers["q2_glp1_status"] && typeof answers["q2_glp1_status"] === "string") {
    const q = ASSESSMENT_QUESTIONS.find(q => q.id === "q2_glp1_status");
    glp1Status = q?.options.find(o => o.id === answers["q2_glp1_status"])?.label || "";
  }
  
  let glp1Duration = "";
  if (answers["q3_glp1_duration"] && typeof answers["q3_glp1_duration"] === "string") {
    const q = ASSESSMENT_QUESTIONS.find(q => q.id === "q3_glp1_duration");
    glp1Duration = q?.options.find(o => o.id === answers["q3_glp1_duration"])?.label || "";
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
