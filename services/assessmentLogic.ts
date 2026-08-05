import { assessmentData } from '../data/assessmentData.ts';
import { goalFrames, modificationBlocks } from '../data/assessmentContent.ts';

export type Answers = Record<string, string>;

export function calculateArchetype(answers: Answers) {
  const q4Map: Record<string, string> = {
    time: 'time_crunched',
    stress: 'stress_stacked',
    pain: 'pain_limited',
    nutrition: 'nutrition_drifting',
    motivation: 'motivation_drifting'
  };

  const archId = q4Map[answers['q4_constraint']];
  const archetype = assessmentData.archetypes.find(a => a.id === archId);

  if (!archetype) {
    // Fallback if somehow not found
    return assessmentData.archetypes[0];
  }

  // Clone to avoid mutating original data
  const result = JSON.parse(JSON.stringify(archetype));
  
  // Apply goal frame
  const goalFrame = goalFrames[answers['q2_goal'] as keyof typeof goalFrames];
  if (goalFrame && result.postGate) {
    result.postGate.protocolCopy = goalFrame.protocolCopy;
    result.postGate.progressChecks = goalFrame.progressChecks;
  }

  // Apply modification block if any
  if (answers['q6_flags'] && answers['q6_flags'] !== 'none') {
    let subAnswer = answers['q6_sub'];
    
    let block;
    if (answers['q6_flags'] === 'manageable') {
      block = modificationBlocks.manageable(subAnswer as any);
    } else if (answers['q6_flags'] === 'limits') {
      block = modificationBlocks.limits(subAnswer as any);
    } else if (answers['q6_flags'] === 'menopause') {
      block = modificationBlocks.menopause();
    } else if (answers['q6_flags'] === 'postpartum') {
      block = modificationBlocks.postpartum();
    }

    if (block) {
      result.modificationBlock = block;
    }
  }

  return result;
}

export function calculateRecommendation(answers: Answers) {
  // New routing logic table from brief 4.6
  
  // Location
  const loc = answers['q1_location']; // chch, nz_other, international
  const q6 = answers['q6_flags']; // none, manageable, limits, postpartum, menopause
  const q4 = answers['q4_constraint']; // time, stress, pain, nutrition, motivation
  
  let recommendId = 'online';
  let alternateId = 'reset';
  let reason = '';
  
  if (loc === 'chch') {
    if (q6 === 'limits') {
      recommendId = 'inPerson';
      alternateId = 'online';
      reason = "If pain or injury is involved, precision is the highest-return move.";
    } else if (q6 === 'manageable' || q6 === 'menopause' || q6 === 'postpartum') {
      recommendId = 'inPerson';
      alternateId = 'online';
      reason = "Given what your body needs right now, in-person precision gets you there faster and safer.";
    } else if (q6 === 'none') {
      if (q4 === 'time' || q4 === 'stress') {
        recommendId = 'online';
        alternateId = 'inPerson';
        reason = "Since time and stress are the limiters, a flexible online structure wins over fixed gym times.";
      } else {
        recommendId = 'inPerson';
        alternateId = 'online';
        reason = "With your schedule clear, in-person coaching is the fastest way to build momentum.";
      }
    }
  } else if (loc === 'nz_other' || loc === 'international') {
    recommendId = 'online';
    alternateId = 'reset';
    reason = "Online coaching gives you the structure and accountability you need, wherever you are.";
  }
  
  const hrefs = {
    inPerson: "/personal-training",
    online: "/online-coaching",
    reset: "/14-day-fat-loss-foundations",
    corporate: "/workplace-wellness-program-nz"
  };
  
  return {
    recommend: { serviceId: recommendId, href: hrefs[recommendId as keyof typeof hrefs] },
    alternate: { serviceId: alternateId, href: hrefs[alternateId as keyof typeof hrefs] },
    reason: reason
  };
}
