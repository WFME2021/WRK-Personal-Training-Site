import { assessmentData } from '../data/assessmentData.js';

export type Answers = Record<string, string>;

export function calculateArchetype(answers: Answers) {
  const scores: Record<string, number> = {
    time_crunched: 0,
    stress_stacked: 0,
    pain_limited: 0,
    nutrition_drifting: 0,
    motivation_drifting: 0,
    reset_mode: 0
  };

  // 1. Apply scoring rules
  for (const rule of assessmentData.scoring.rules) {
    if (answers[rule.when.qId] === rule.when.optionId) {
      for (const [archId, points] of Object.entries(rule.add)) {
        scores[archId] += points;
      }
    }
  }

  // 2. Apply overrides
  for (const override of assessmentData.scoring.overrides) {
    if (answers[override.when.qId] === override.when.optionId) {
      return assessmentData.archetypes.find(a => a.id === override.forceArchetypeId);
    }
  }

  // 3. Find max score
  let maxScore = -1;
  let topArchetypes: string[] = [];
  
  for (const [archId, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      topArchetypes = [archId];
    } else if (score === maxScore) {
      topArchetypes.push(archId);
    }
  }

  // 4. Apply tiebreakers if needed
  let finalArchId = topArchetypes[0];
  if (topArchetypes.length > 1) {
    for (const tieBreaker of assessmentData.scoring.tieBreakers) {
      if (tieBreaker.type === 'prefer_q4_constraint') {
        const constraintAnswer = answers['q4_constraint'];
        const mappedArch = {
          time: 'time_crunched',
          stress: 'stress_stacked',
          pain: 'pain_limited',
          nutrition: 'nutrition_drifting',
          motivation: 'motivation_drifting'
        }[constraintAnswer];
        if (mappedArch && topArchetypes.includes(mappedArch)) {
          finalArchId = mappedArch;
          break;
        }
      } else if (tieBreaker.type === 'prefer_pain_if_q6_in') {
        if (tieBreaker.optionIds?.includes(answers['q6_flags']) && topArchetypes.includes('pain_limited')) {
          finalArchId = 'pain_limited';
          break;
        }
      } else if (tieBreaker.type === 'prefer_reset_if_q5_is') {
        if (tieBreaker.optionIds?.includes(answers['q5_consistency']) && topArchetypes.includes('reset_mode')) {
          finalArchId = 'reset_mode';
          break;
        }
      }
    }
  }

  return assessmentData.archetypes.find(a => a.id === finalArchId);
}

export function calculateRecommendation(answers: Answers) {
  for (const rule of assessmentData.recommendation.rules) {
    let match = false;

    if (rule.whenAlways) {
      match = true;
    } else if (rule.whenAll) {
      match = rule.whenAll.every(cond => answers[cond.qId] === cond.optionId);
      if (match && rule.whenAny) {
        match = rule.whenAny.some(cond => answers[cond.qId] === cond.optionId);
      }
    } else if (rule.whenAny) {
      match = rule.whenAny.some(cond => answers[cond.qId] === cond.optionId);
    }

    if (match) {
      return {
        recommend: rule.recommend,
        alternate: rule.alternate,
        reason: assessmentData.recommendation.reasons[rule.recommend.serviceId as keyof typeof assessmentData.recommendation.reasons]
      };
    }
  }

  // Fallback
  return {
    recommend: { serviceId: "online", href: "/online-personal-training-nz" },
    alternate: { serviceId: "reset", href: "/fitness-challenge-nz" },
    reason: assessmentData.recommendation.reasons.online
  };
}
