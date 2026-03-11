const assessmentData = {
  "assessmentId": "wrk_capacity_blueprint",
  "version": "1.1.0",
  "routes": {
    "home": "/",
    "contact": "/contact",
    "assessment": "/assessment",
    "services": {
      "inPerson": "/personal-trainer-christchurch",
      "online": "/online-personal-training-nz",
      "corporate": "/workplace-wellness-program-nz",
      "reset": "/fitness-challenge-nz",
      "philosophy": "/personal-training-christchurch-philosophy"
    }
  },
  "ctaPolicy": {
    "globalButtons": [
      {
        "id": "book_consult",
        "label": "Book a consult",
        "href": "/contact"
      },
      {
        "id": "take_assessment",
        "label": "Take the assessment",
        "href": "/assessment"
      }
    ],
    "assessmentButtons": {
      "preGate": [
        {
          "id": "unlock",
          "label": "Unlock my blueprint",
          "href": "__EMAIL_SUBMIT__"
        }
      ],
      "postGate": [
        {
          "id": "book_consult",
          "label": "Book a consult",
          "href": "/contact"
        },
        {
          "id": "view_recommended",
          "label": "View recommended service",
          "href": "__DYNAMIC_RECOMMENDATION__"
        }
      ],
      "allowedTextLinks": [
        {
          "id": "alt_service",
          "label": "__DYNAMIC_ALT_SERVICE_LABEL__",
          "href": "__DYNAMIC_ALT_SERVICE__"
        },
        {
          "id": "philosophy",
          "label": "Read the WRK philosophy",
          "href": "/personal-training-christchurch-philosophy"
        }
      ]
    }
  },
  "uiCopy": {
    "interstitial": {
      "title": "Building your Capacity Blueprint…",
      "durationMs": 2500,
      "rotatingLines": [
        "Checking schedule + stress load…",
        "Identifying your primary bottleneck…",
        "Setting your minimum effective dose…",
        "Generating your next 7 days…"
      ]
    },
    "preGate": {
      "headline": "Diagnostic Complete",
      "unlockTitleTemplate": "Unlock {blueprintName}",
      "unlockSubtitle": "Enter your name and email to instantly unlock the 4-Week Progression Model, Warm-up Protocols, and your specific blueprint.",
      "emailFieldLabel": "Send my blueprint to:",
      "nameFieldLabel": "Name",
      "buttonLabel": "Unlock my blueprint",
      "reassuranceLine": "No spam. Useful info only. Unsubscribe anytime."
    },
    "postGate": {
      "headline": "Blueprint Unlocked",
      "pageTitle": "Your Performance Blueprint",
      "subhead": "Here’s your plan, your guardrails, and the simplest next step.",
      "resultsFooterNote": "Results vary. Consistency always wins."
    }
  },
  "questions": [
    {
      "id": "q1_location",
      "type": "single_select",
      "prompt": "Where are you based?",
      "options": [
        {
          "id": "chch",
          "label": "Christchurch / nearby"
        },
        {
          "id": "nz_other",
          "label": "Elsewhere in New Zealand"
        },
        {
          "id": "international",
          "label": "Outside New Zealand"
        }
      ]
    },
    {
      "id": "q2_goal",
      "type": "single_select",
      "prompt": "What are you most trying to change right now?",
      "options": [
        {
          "id": "fat_loss",
          "label": "Fat loss / body composition"
        },
        {
          "id": "pain_movement",
          "label": "Less pain + better movement (aches, posture, niggles)"
        },
        {
          "id": "energy_routine",
          "label": "More energy + better routine"
        },
        {
          "id": "strength_performance",
          "label": "Strength + performance (feel capable)"
        },
        {
          "id": "need_reset",
          "label": "I’ve drifted — I need a reset"
        }
      ]
    },
    {
      "id": "q3_time",
      "type": "single_select",
      "prompt": "How much time can you realistically train most weeks?",
      "options": [
        {
          "id": "two_days",
          "label": "2 days/week"
        },
        {
          "id": "three_days",
          "label": "3 days/week"
        },
        {
          "id": "four_plus",
          "label": "4+ days/week"
        },
        {
          "id": "chaos",
          "label": "My schedule is chaos — it changes every week"
        }
      ]
    },
    {
      "id": "q4_constraint",
      "type": "single_select",
      "prompt": "What’s the main thing getting in your way right now?",
      "options": [
        {
          "id": "time",
          "label": "Time / unpredictable weeks"
        },
        {
          "id": "stress",
          "label": "Stress / poor sleep / burnout"
        },
        {
          "id": "pain",
          "label": "Aches, pains or niggles (or fear of injury)"
        },
        {
          "id": "nutrition",
          "label": "Nutrition consistency (snacking, takeaways, weekends, “can’t stick to it”)"
        },
        {
          "id": "motivation",
          "label": "Motivation / I start strong then drift"
        }
      ]
    },
    {
      "id": "q5_consistency",
      "type": "single_select",
      "prompt": "In the last 14 days, how consistent have you been?",
      "options": [
        {
          "id": "0_1",
          "label": "0–1 sessions"
        },
        {
          "id": "2_3",
          "label": "2–3 sessions total"
        },
        {
          "id": "4_6",
          "label": "4–6 sessions total"
        },
        {
          "id": "7_plus",
          "label": "7+ sessions total (I’ve been solid)"
        }
      ]
    },
    {
      "id": "q6_flags",
      "type": "single_select",
      "prompt": "Any aches, pains, or niggles affecting training right now?",
      "options": [
        {
          "id": "none",
          "label": "None — good to go"
        },
        {
          "id": "manageable",
          "label": "A few niggles, but manageable"
        },
        {
          "id": "limits",
          "label": "Yes — it regularly limits what I can do"
        },
        {
          "id": "postpartum",
          "label": "Postpartum / returning after baby"
        },
        {
          "id": "menopause",
          "label": "Menopause/peri-menopause changes are impacting recovery/energy"
        }
      ]
    }
  ],
  "derived": {
    "goalLabels": {
      "fat_loss": "Fat loss / body composition",
      "pain_movement": "Less pain + better movement",
      "energy_routine": "More energy + better routine",
      "strength_performance": "Strength + performance",
      "need_reset": "Reset + momentum"
    },
    "constraintLabels": {
      "time": "Time / unpredictable weeks",
      "stress": "Stress load / sleep",
      "pain": "Aches, pains, niggles",
      "nutrition": "Nutrition consistency",
      "motivation": "Motivation / drifting"
    },
    "dose": {
      "two_days": {
        "trainingDays": 2,
        "label": "2-Day"
      },
      "three_days": {
        "trainingDays": 3,
        "label": "3-Day"
      },
      "four_plus": {
        "trainingDays": 4,
        "label": "4+ Day"
      },
      "chaos": {
        "trainingDays": 2,
        "label": "Chaos Mode (fallback built in)"
      }
    }
  },
  "archetypes": [
    {
      "id": "time_crunched",
      "label": "Time-Crunched",
      "primaryBottleneck": "Your plan is too big for your week.",
      "microRevealLine": "Right now your plan needs to shrink — not your goals.",
      "strategyName": "The Minimum Effective Dose",
      "strategyBlurb": "You don’t need more workouts. You need fewer sessions that actually move the needle.",
      "focusTemplate": "Based on your goal of {goalLabel} and your constraint of Time / unpredictable weeks, we optimise for Density + Repeatability.",
      "stressValveTitle": "The Stress Valve: Minimum Session Rule",
      "stressValveCopy": "If the week blows up → you don’t “skip”. You switch to the minimum session and keep momentum.",
      "weeklyStructureTitle": "Weekly Structure",
      "weeklyStructureCopyByDose": {
        "two_days": {
          "title": "2-Day Full Body (High Return)",
          "bullets": [
            "2 strength sessions (full body)",
            "Daily steps (baseline + small bump)",
            "Optional 1 low-intensity movement day if time allows"
          ]
        },
        "three_days": {
          "title": "3-Day Full Body (High Return)",
          "bullets": [
            "3 strength sessions (most bang-for-buck)",
            "1–2 low-intensity movement days",
            "Daily steps baseline"
          ]
        },
        "four_plus": {
          "title": "3 + 1 (Still Repeatable)",
          "bullets": [
            "3 strength sessions (full body or upper/lower split)",
            "1 conditioning day (low impact)",
            "Steps baseline + small bump"
          ]
        },
        "chaos": {
          "title": "Chaos Mode: Minimum Effective Dose",
          "bullets": [
            "2 strength sessions max",
            "Fallback session option when time blows up",
            "Steps become the non-negotiable"
          ]
        }
      },
      "guardrailsTitle": "Guardrails",
      "guardrails": [
        "Time cap: 35–45 minutes. Out on time.",
        "Intensity rule: stop sets with 1–2 reps in reserve. No grinding.",
        "Busy-week rule: if you miss a day, don’t make it up — continue the plan."
      ],
      "nutritionTitle": "Nutrition: Simple + Protein-Forward",
      "nutritionRules": [
        "Protein anchor: 30–40g per meal, 3 meals/day.",
        "One planned snack (no grazing).",
        "Keep weekends flexible — don’t blow up Monday."
      ],
      "next7DaysTitle": "Your Next 7 Days",
      "next7DaysByDose": {
        "two_days": {
          "title": "2-Day Full Body",
          "days": [
            {
              "label": "Day 1: Full Body A",
              "items": [
                "Squat pattern (goblet/back squat)",
                "Horizontal press (DB bench)",
                "Horizontal pull (row)",
                "Carry or finisher"
              ]
            },
            {
              "label": "Day 2: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 3: Rest",
              "items": [
                "Focus on protein anchors",
                "Hydration"
              ]
            },
            {
              "label": "Day 4: Full Body B",
              "items": [
                "Hinge pattern (RDL/trap bar)",
                "Vertical press (landmine/DB overhead)",
                "Vertical pull (lat pulldown/pull-up assist)",
                "Core (dead bug)"
              ]
            },
            {
              "label": "Day 5: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        },
        "three_days": {
          "title": "3-Day Full Body",
          "days": [
            {
              "label": "Day 1: Full Body A",
              "items": [
                "Squat pattern",
                "Horizontal press",
                "Horizontal pull",
                "Carry/finisher"
              ]
            },
            {
              "label": "Day 2: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 3: Full Body B",
              "items": [
                "Hinge pattern",
                "Vertical press",
                "Vertical pull",
                "Core"
              ]
            },
            {
              "label": "Day 4: Rest",
              "items": [
                "Focus on protein anchors",
                "Hydration"
              ]
            },
            {
              "label": "Day 5: Full Body C",
              "items": [
                "Single leg (split squat)",
                "Incline press",
                "Row variation",
                "Conditioning (10 min easy/moderate)"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        },
        "four_plus": {
          "title": "3 + 1 Week",
          "days": [
            {
              "label": "Day 1: Strength A",
              "items": [
                "Full body focus (A template)"
              ]
            },
            {
              "label": "Day 2: Strength B",
              "items": [
                "Full body focus (B template)"
              ]
            },
            {
              "label": "Day 3: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 4: Strength C",
              "items": [
                "Full body focus (C template)"
              ]
            },
            {
              "label": "Day 5: Low Intensity",
              "items": [
                "Walk/bike/swim 20–30 min"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        },
        "chaos": {
          "title": "Chaos Mode Week",
          "days": [
            {
              "label": "Day 1: Full Body A",
              "items": [
                "Use the A template (30–40 min)"
              ]
            },
            {
              "label": "Day 2: Steps & Protein",
              "items": [
                "Hit protein targets",
                "Daily steps minimum"
              ]
            },
            {
              "label": "Day 3: Steps & Protein",
              "items": [
                "Hit protein targets",
                "Daily steps minimum"
              ]
            },
            {
              "label": "Day 4: Minimum Session",
              "items": [
                "20 min circuit + steps"
              ]
            },
            {
              "label": "Day 5: Steps & Protein",
              "items": [
                "Hit protein targets",
                "Daily steps minimum"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        }
      },
      "postGate": {
        "blueprintName": "The Capacity Blueprint",
        "scheduleTitle": "The Schedule",
        "scheduleByDose": {
          "two_days": {
            "title": "2-Day Full Body",
            "lines": [
              "Tue: Full Body A",
              "Fri: Full Body B"
            ]
          },
          "three_days": {
            "title": "3-Day Full Body",
            "lines": [
              "Mon: Full Body A",
              "Wed: Full Body B",
              "Fri: Full Body C"
            ]
          },
          "four_plus": {
            "title": "3 + 1",
            "lines": [
              "Mon: Strength",
              "Wed: Strength",
              "Fri: Strength",
              "Sat: Low intensity"
            ]
          },
          "chaos": {
            "title": "Chaos Mode (2-Day)",
            "lines": [
              "Pick 2 days you can commit to",
              "Use Minimum Session if the week blows up"
            ]
          }
        },
        "protocolTitle": "The Protocol",
        "protocolCopy": "Density + progression. Progress by adding 1–2 reps first, then a small load increase, then (only if recovery is good) an extra set.",
        "keyRuleTitle": "Key Rule",
        "keyRuleCopy": "Stop sets with 1–2 reps in reserve. No grinding reps this block.",
        "warmupTitle": "Warm-up Protocol (6–8 min)",
        "warmupSteps": [
          "2 min easy movement (bike/row/walk)",
          "2 mobility moves (hips + t-spine)",
          "2 ramp sets for the first lift"
        ],
        "autoregulationTitle": "Autoregulation Management",
        "autoregulationRules": [
          "Poor sleep 2 nights in a row → reduce volume (fewer sets), keep technique.",
          "High stress day → keep the plan, reduce sets by ~20–30%.",
          "Great day → progress normally."
        ],
        "progressChecksTitle": "Progress Checks (weekly)",
        "progressChecks": [
          "Sessions completed (score out of your weekly target)",
          "Average steps for the week",
          "One strength marker (last set reps on a main lift)"
        ]
      }
    },
    {
      "id": "stress_stacked",
      "label": "Stress-Stacked",
      "primaryBottleneck": "You’re stacking stress, and your body is pushing back.",
      "microRevealLine": "Your next win is recovery, not more intensity.",
      "strategyName": "The Stress-Smart Build",
      "strategyBlurb": "Right now, training should give energy — not take it.",
      "focusTemplate": "Based on your goal of {goalLabel} and your constraint of Stress load / sleep, we optimise for Consistency + Recovery Capacity.",
      "stressValveTitle": "The Stress Valve: Autoregulation",
      "stressValveCopy": "High stress days = lower volume, higher focus. You still train — you just don’t cook yourself.",
      "weeklyStructureTitle": "Weekly Structure",
      "weeklyStructureCopyByDose": {
        "two_days": {
          "title": "2 + 2 (Repeatable)",
          "bullets": [
            "2 strength sessions",
            "2 low-intensity movement days",
            "Steps baseline daily"
          ]
        },
        "three_days": {
          "title": "2 Strength + 1 Low Intensity",
          "bullets": [
            "2 strength sessions",
            "1 low-intensity movement day",
            "Steps baseline daily"
          ]
        },
        "four_plus": {
          "title": "3 Total Training Days (Still Recovery-Friendly)",
          "bullets": [
            "2 strength sessions",
            "1 low-intensity movement day",
            "Optional 1 mobility/primer day"
          ]
        },
        "chaos": {
          "title": "Chaos Mode: Keep the rhythm",
          "bullets": [
            "2 sessions max",
            "Low intensity beats skipping",
            "Steps minimum daily"
          ]
        }
      },
      "guardrailsTitle": "Guardrails",
      "guardrails": [
        "RPE cap: on high-stress days, leave 2–3 reps in the tank.",
        "No failure rule: no grinding reps this block.",
        "Sleep rule: poor sleep 2 nights → drop 1 set per lift."
      ],
      "nutritionTitle": "Nutrition: Performance Fueling",
      "nutritionRules": [
        "Carbs before training = energy.",
        "Protein after training = recovery.",
        "Hydration target daily = stable energy."
      ],
      "next7DaysTitle": "Your Next 7 Days",
      "next7DaysByDose": {
        "two_days": {
          "title": "2 Strength + 2 Low Intensity",
          "days": [
            {
              "label": "Day 1: Full Body A (moderate)",
              "items": [
                "Full body session (leave 2 reps in the tank)"
              ]
            },
            {
              "label": "Day 2: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 3: Rest",
              "items": [
                "Focus on protein anchors",
                "Hydration"
              ]
            },
            {
              "label": "Day 4: Low intensity",
              "items": [
                "Walk/bike/swim 20–30 min"
              ]
            },
            {
              "label": "Day 5: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        },
        "three_days": {
          "title": "2 Strength + 1 Low Intensity",
          "days": [
            {
              "label": "Day 1: Full Body A (moderate)",
              "items": [
                "Strength session"
              ]
            },
            {
              "label": "Day 2: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 3: Low intensity",
              "items": [
                "Walk/bike/swim 20–30 min"
              ]
            },
            {
              "label": "Day 4: Rest",
              "items": [
                "Focus on protein anchors",
                "Hydration"
              ]
            },
            {
              "label": "Day 5: Full Body B (moderate)",
              "items": [
                "Strength session"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        },
        "four_plus": {
          "title": "3-Day Recovery-Friendly Week",
          "days": [
            {
              "label": "Day 1: Strength",
              "items": [
                "Moderate effort session"
              ]
            },
            {
              "label": "Day 2: Low intensity",
              "items": [
                "20–30 min easy"
              ]
            },
            {
              "label": "Day 3: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 4: Strength",
              "items": [
                "Moderate effort session"
              ]
            },
            {
              "label": "Day 5: Optional: Primer",
              "items": [
                "8–12 min mobility/primer"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        },
        "chaos": {
          "title": "Chaos Mode Week",
          "days": [
            {
              "label": "Day 1: Strength (short)",
              "items": [
                "30 min full body"
              ]
            },
            {
              "label": "Day 2: Steps & Protein",
              "items": [
                "Hit protein targets",
                "Daily steps minimum"
              ]
            },
            {
              "label": "Day 3: Steps & Protein",
              "items": [
                "Hit protein targets",
                "Daily steps minimum"
              ]
            },
            {
              "label": "Day 4: Low intensity",
              "items": [
                "20 min walk + steps"
              ]
            },
            {
              "label": "Day 5: Steps & Protein",
              "items": [
                "Hit protein targets",
                "Daily steps minimum"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        }
      },
      "postGate": {
        "blueprintName": "The Stress-Smart Blueprint",
        "scheduleTitle": "The Schedule",
        "scheduleByDose": {
          "two_days": {
            "title": "2 Strength + 2 Low",
            "lines": [
              "Mon: Strength",
              "Tue: Low",
              "Thu: Strength",
              "Sat: Low"
            ]
          },
          "three_days": {
            "title": "2 Strength + 1 Low",
            "lines": [
              "Mon: Strength",
              "Wed: Low",
              "Fri: Strength"
            ]
          },
          "four_plus": {
            "title": "3 Total",
            "lines": [
              "Mon: Strength",
              "Wed: Low",
              "Fri: Strength",
              "Optional: Primer"
            ]
          },
          "chaos": {
            "title": "Chaos Mode",
            "lines": [
              "2 sessions max",
              "Keep low intensity + steps"
            ]
          }
        },
        "protocolTitle": "The Protocol",
        "protocolCopy": "Repeatable effort. Most sessions should feel like you could do one more set. The win is consistency.",
        "keyRuleTitle": "Key Rule",
        "keyRuleCopy": "On bad sleep days, cap effort at RPE 7 (leave 3 reps in the tank).",
        "warmupTitle": "Warm-up Protocol (8 min)",
        "warmupSteps": [
          "2 min easy movement",
          "60–90 sec breathing reset",
          "2 ramp sets for the first lift"
        ],
        "autoregulationTitle": "Autoregulation Management",
        "autoregulationRules": [
          "Sleep poor → cut volume first (fewer sets).",
          "Stress high → keep movement, reduce intensity.",
          "Great day → progress normally."
        ],
        "progressChecksTitle": "Progress Checks (weekly)",
        "progressChecks": [
          "Sleep quality trend (simple score)",
          "Sessions completed",
          "Energy levels (1–5)"
        ]
      }
    },
    {
      "id": "pain_limited",
      "label": "Pain-Limited",
      "primaryBottleneck": "You’re trying to progress without addressing the limiter.",
      "microRevealLine": "Progress is still possible — we just train around the limiter.",
      "strategyName": "The Build-Around-It Plan",
      "strategyBlurb": "You can still make progress. We just remove the dumb inputs that flare things up.",
      "focusTemplate": "Based on your goal of {goalLabel} and your constraint of Aches/pains/niggles, we optimise for Strength Foundations + Joint-Friendly Progress.",
      "stressValveTitle": "The Stress Valve: Symptom-Led Modifications",
      "stressValveCopy": "Pain changes the plan, not the outcome. Modify, keep moving, keep momentum.",
      "weeklyStructureTitle": "Weekly Structure",
      "weeklyStructureCopyByDose": {
        "two_days": {
          "title": "2 Strength + Primer",
          "bullets": [
            "2 strength sessions (modified)",
            "Daily 8–12 min primer",
            "Low-impact conditioning as tolerated"
          ]
        },
        "three_days": {
          "title": "2–3 Strength + Primer",
          "bullets": [
            "2–3 strength sessions (modified)",
            "Primer most days",
            "Low-impact conditioning as tolerated"
          ]
        },
        "four_plus": {
          "title": "3 Strength + 1 Low Impact",
          "bullets": [
            "3 strength sessions (modified)",
            "1 low impact conditioning day",
            "Primer most days"
          ]
        },
        "chaos": {
          "title": "Chaos Mode: Primer + 2 sessions",
          "bullets": [
            "2 sessions max",
            "Primer becomes the non-negotiable",
            "Steps/low impact movement"
          ]
        }
      },
      "guardrailsTitle": "Guardrails",
      "guardrails": [
        "No flare-up rule: if symptoms spike, regress immediately.",
        "Range rule: train in pain-free ranges.",
        "Effort rule: leave 2 reps in reserve — no maxing."
      ],
      "nutritionTitle": "Nutrition: Support recovery",
      "nutritionRules": [
        "Protein anchor: 30–40g per meal.",
        "Consistent meals (avoid under-eat then binge).",
        "Creatine (optional): 5g daily if appropriate."
      ],
      "next7DaysTitle": "Your Next 7 Days",
      "next7DaysByDose": {
        "two_days": {
          "title": "2 Strength + Primer",
          "days": [
            {
              "label": "Day 1: Modified Full Body A",
              "items": [
                "Squat/hinge variation (pain-free range)",
                "Press",
                "Pull",
                "Core"
              ]
            },
            {
              "label": "Day 2: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 3: Rest",
              "items": [
                "Focus on protein anchors",
                "Hydration"
              ]
            },
            {
              "label": "Day 4: Primer + walk",
              "items": [
                "8–12 min primer",
                "20–30 min walk"
              ]
            },
            {
              "label": "Day 5: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        },
        "three_days": {
          "title": "2–3 Strength + Primer",
          "days": [
            {
              "label": "Day 1: Strength (modified)",
              "items": [
                "Full body template A"
              ]
            },
            {
              "label": "Day 2: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 3: Primer + low impact",
              "items": [
                "Primer",
                "20–30 min easy movement"
              ]
            },
            {
              "label": "Day 4: Rest",
              "items": [
                "Focus on protein anchors",
                "Hydration"
              ]
            },
            {
              "label": "Day 5: Strength (modified)",
              "items": [
                "Full body template B"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        },
        "four_plus": {
          "title": "3 + 1 Week",
          "days": [
            {
              "label": "Day 1: Strength",
              "items": [
                "Modified template"
              ]
            },
            {
              "label": "Day 2: Strength",
              "items": [
                "Modified template"
              ]
            },
            {
              "label": "Day 3: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 4: Strength",
              "items": [
                "Modified template"
              ]
            },
            {
              "label": "Day 5: Low impact",
              "items": [
                "20–30 min easy"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        },
        "chaos": {
          "title": "Chaos Mode Week",
          "days": [
            {
              "label": "Day 1: Modified Strength (short)",
              "items": [
                "30 min template"
              ]
            },
            {
              "label": "Day 2: Steps & Protein",
              "items": [
                "Hit protein targets",
                "Daily steps minimum"
              ]
            },
            {
              "label": "Day 3: Steps & Protein",
              "items": [
                "Hit protein targets",
                "Daily steps minimum"
              ]
            },
            {
              "label": "Day 4: Primer + steps",
              "items": [
                "Primer + daily steps"
              ]
            },
            {
              "label": "Day 5: Steps & Protein",
              "items": [
                "Hit protein targets",
                "Daily steps minimum"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        }
      },
      "postGate": {
        "blueprintName": "The Pain-Smart Blueprint",
        "scheduleTitle": "The Schedule",
        "scheduleByDose": {
          "two_days": {
            "title": "2 Strength + Primer",
            "lines": [
              "Tue: Strength",
              "Thu/Fri: Strength",
              "Primer most days"
            ]
          },
          "three_days": {
            "title": "2–3 Strength + Primer",
            "lines": [
              "Mon: Strength",
              "Wed: Primer + low impact",
              "Fri: Strength",
              "Optional: Strength light"
            ]
          },
          "four_plus": {
            "title": "3 + 1",
            "lines": [
              "3 modified strength days",
              "1 low impact day",
              "Primer most days"
            ]
          },
          "chaos": {
            "title": "Chaos Mode",
            "lines": [
              "2 sessions max",
              "Primer becomes the non-negotiable"
            ]
          }
        },
        "protocolTitle": "The Protocol",
        "protocolCopy": "Train hard enough to progress, smart enough to recover. Pain is data — we adjust and keep moving.",
        "keyRuleTitle": "Key Rule",
        "keyRuleCopy": "If symptoms spike, regress immediately. No hero reps.",
        "warmupTitle": "Warm-up / Primer Protocol",
        "warmupSteps": [
          "8–12 min joint-specific primer",
          "2 ramp sets for the first lift"
        ],
        "autoregulationTitle": "Autoregulation Management",
        "autoregulationRules": [
          "Pain spike → cut volume and stick to primer + steps for 48–72h.",
          "High stress/low sleep → keep effort moderate.",
          "Great day → progress cautiously."
        ],
        "progressChecksTitle": "Progress Checks (weekly)",
        "progressChecks": [
          "Pain trend (simple 1–5)",
          "Sessions completed",
          "One movement quality win"
        ]
      }
    },
    {
      "id": "nutrition_drifting",
      "label": "Nutrition-Drifting",
      "primaryBottleneck": "Your nutrition is inconsistent, not “bad.”",
      "microRevealLine": "Your nutrition doesn’t need perfection — it needs structure.",
      "strategyName": "Protein + Structure",
      "strategyBlurb": "You’re not bad at nutrition. Your structure isn’t strong enough for real life.",
      "focusTemplate": "Based on your goal of {goalLabel} and your constraint of Nutrition consistency, we optimise for Anchors + Flexibility.",
      "stressValveTitle": "The Stress Valve: Minimum Nutrition Win",
      "stressValveCopy": "If the day goes sideways → hit protein + steps and call it a win.",
      "weeklyStructureTitle": "Weekly Structure",
      "weeklyStructureCopyByDose": {
        "two_days": {
          "title": "2 Strength + Daily Anchors",
          "bullets": [
            "2 strength sessions",
            "Steps baseline + bump",
            "Nutrition anchors daily"
          ]
        },
        "three_days": {
          "title": "3 Strength + Daily Anchors",
          "bullets": [
            "3 training sessions",
            "Steps baseline",
            "Anchors daily"
          ]
        },
        "four_plus": {
          "title": "3 + 1 + Anchors",
          "bullets": [
            "3 strength sessions",
            "1 conditioning day",
            "Nutrition anchors daily"
          ]
        },
        "chaos": {
          "title": "Chaos Mode: Anchors win",
          "bullets": [
            "Protein + steps = win",
            "2 sessions max",
            "Keep it simple"
          ]
        }
      },
      "guardrailsTitle": "Guardrails",
      "guardrails": [
        "3 meals rule (avoid accidental under-eating).",
        "One planned snack (no grazing).",
        "2 flexible meals/week (social life stays intact)."
      ],
      "nutritionTitle": "Nutrition: Performance Fueling",
      "nutritionRules": [
        "Protein per meal (30–40g).",
        "Carbs around training = energy.",
        "Hydration target daily."
      ],
      "next7DaysTitle": "Your Next 7 Days",
      "next7DaysByDose": {
        "two_days": {
          "title": "Anchors + 2 Sessions",
          "days": [
            {
              "label": "Day 1: Strength",
              "items": [
                "Full body session"
              ]
            },
            {
              "label": "Day 2: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 3: Rest",
              "items": [
                "Focus on protein anchors",
                "Hydration"
              ]
            },
            {
              "label": "Day 4: Steps + protein anchors",
              "items": [
                "3 protein meals",
                "Steps baseline + bump"
              ]
            },
            {
              "label": "Day 5: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        },
        "three_days": {
          "title": "Anchors + 3 Sessions",
          "days": [
            {
              "label": "Day 1: Strength",
              "items": [
                "Session A"
              ]
            },
            {
              "label": "Day 2: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 3: Strength",
              "items": [
                "Session B"
              ]
            },
            {
              "label": "Day 4: Rest",
              "items": [
                "Focus on protein anchors",
                "Hydration"
              ]
            },
            {
              "label": "Day 5: Strength",
              "items": [
                "Session C"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        },
        "four_plus": {
          "title": "3 + 1 Week",
          "days": [
            {
              "label": "Day 1: Strength",
              "items": [
                "Session"
              ]
            },
            {
              "label": "Day 2: Strength",
              "items": [
                "Session"
              ]
            },
            {
              "label": "Day 3: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 4: Strength",
              "items": [
                "Session"
              ]
            },
            {
              "label": "Day 5: Conditioning",
              "items": [
                "Low intensity 20–30 min"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        },
        "chaos": {
          "title": "Chaos Mode Week",
          "days": [
            {
              "label": "Day 1: Protein + steps",
              "items": [
                "3 protein meals",
                "Steps minimum"
              ]
            },
            {
              "label": "Day 2: Steps & Protein",
              "items": [
                "Hit protein targets",
                "Daily steps minimum"
              ]
            },
            {
              "label": "Day 3: Steps & Protein",
              "items": [
                "Hit protein targets",
                "Daily steps minimum"
              ]
            },
            {
              "label": "Day 4: One short session",
              "items": [
                "20–30 min full body"
              ]
            },
            {
              "label": "Day 5: Steps & Protein",
              "items": [
                "Hit protein targets",
                "Daily steps minimum"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        }
      },
      "postGate": {
        "blueprintName": "The Nutrition Blueprint",
        "scheduleTitle": "The Schedule",
        "scheduleByDose": {
          "two_days": {
            "title": "2 Sessions + Anchors",
            "lines": [
              "2 strength days",
              "Protein anchors daily",
              "Steps daily"
            ]
          },
          "three_days": {
            "title": "3 Sessions + Anchors",
            "lines": [
              "3 strength days",
              "Protein anchors daily",
              "Steps daily"
            ]
          },
          "four_plus": {
            "title": "3 + 1 + Anchors",
            "lines": [
              "3 strength days",
              "1 low intensity day",
              "Anchors daily"
            ]
          },
          "chaos": {
            "title": "Chaos Mode",
            "lines": [
              "Protein + steps win",
              "2 sessions max"
            ]
          }
        },
        "protocolTitle": "The Protocol",
        "protocolCopy": "Anchor protein and keep the rest flexible enough to live. You’re not chasing perfection — you’re building consistency.",
        "keyRuleTitle": "Key Rule",
        "keyRuleCopy": "If the day goes sideways: protein + steps and call it a win.",
        "warmupTitle": "Quick Plate Builder (60 seconds)",
        "warmupSteps": [
          "Protein first",
          "Add colour (fruit/veg)",
          "Add carbs around training",
          "Keep fats sensible"
        ],
        "autoregulationTitle": "Autoregulation Management",
        "autoregulationRules": [
          "High stress week → keep anchors, reduce complexity.",
          "Social events → plan flexibility, don’t swing to extremes."
        ],
        "progressChecksTitle": "Progress Checks (weekly)",
        "progressChecks": [
          "Protein anchors hit (days/7)",
          "Steps average",
          "One habit win"
        ]
      }
    },
    {
      "id": "motivation_drifting",
      "label": "Motivation-Drifting",
      "primaryBottleneck": "You’re relying on motivation instead of a system.",
      "microRevealLine": "You don’t need hype — you need a system.",
      "strategyName": "Remove Decisions",
      "strategyBlurb": "Motivation isn’t missing. Your plan has too much friction.",
      "focusTemplate": "Based on your goal of {goalLabel} and your constraint of Motivation / drifting, we optimise for Repeatable Templates.",
      "stressValveTitle": "The Stress Valve: Minimum Session",
      "stressValveCopy": "15 minutes still counts. Minimum keeps momentum.",
      "weeklyStructureTitle": "Weekly Structure",
      "weeklyStructureCopyByDose": {
        "two_days": {
          "title": "2 Templates + Steps",
          "bullets": [
            "2 template sessions",
            "Steps minimum daily",
            "Optional short mobility"
          ]
        },
        "three_days": {
          "title": "A/B/A Template Week",
          "bullets": [
            "3 template sessions (repeatable)",
            "Steps minimum daily",
            "Optional low intensity"
          ]
        },
        "four_plus": {
          "title": "3 + 1",
          "bullets": [
            "3 template sessions",
            "1 low intensity day",
            "Steps minimum daily"
          ]
        },
        "chaos": {
          "title": "Chaos Mode: Minimums",
          "bullets": [
            "Minimum session option",
            "Steps minimum daily",
            "No make-up workouts"
          ]
        }
      },
      "guardrailsTitle": "Guardrails",
      "guardrails": [
        "Same workouts (repeat) — remove decisions.",
        "Book sessions like meetings.",
        "No make-up workouts — continue the plan."
      ],
      "nutritionTitle": "Nutrition: Keep it simple",
      "nutritionRules": [
        "Protein anchor: 3 meals/day.",
        "Water target daily.",
        "One planned snack (no grazing)."
      ],
      "next7DaysTitle": "Your Next 7 Days",
      "next7DaysByDose": {
        "two_days": {
          "title": "2-Day Templates",
          "days": [
            {
              "label": "Day 1: Template A",
              "items": [
                "Full body A"
              ]
            },
            {
              "label": "Day 2: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 3: Rest",
              "items": [
                "Focus on protein anchors",
                "Hydration"
              ]
            },
            {
              "label": "Day 4: Template B",
              "items": [
                "Full body B"
              ]
            },
            {
              "label": "Day 5: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        },
        "three_days": {
          "title": "A/B/A Week",
          "days": [
            {
              "label": "Day 1: Template A",
              "items": [
                "Full body A"
              ]
            },
            {
              "label": "Day 2: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 3: Template B",
              "items": [
                "Full body B"
              ]
            },
            {
              "label": "Day 4: Rest",
              "items": [
                "Focus on protein anchors",
                "Hydration"
              ]
            },
            {
              "label": "Day 5: Template A",
              "items": [
                "Repeat A (progress reps)"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        },
        "four_plus": {
          "title": "3 + 1 Week",
          "days": [
            {
              "label": "Day 1: A",
              "items": [
                "Template A"
              ]
            },
            {
              "label": "Day 2: B",
              "items": [
                "Template B"
              ]
            },
            {
              "label": "Day 3: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 4: A",
              "items": [
                "Template A"
              ]
            },
            {
              "label": "Day 5: Low intensity",
              "items": [
                "20–30 min walk/bike"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        },
        "chaos": {
          "title": "Chaos Mode Week",
          "days": [
            {
              "label": "Day 1: Minimum session",
              "items": [
                "15–20 min full body"
              ]
            },
            {
              "label": "Day 2: Steps & Protein",
              "items": [
                "Hit protein targets",
                "Daily steps minimum"
              ]
            },
            {
              "label": "Day 3: Steps & Protein",
              "items": [
                "Hit protein targets",
                "Daily steps minimum"
              ]
            },
            {
              "label": "Day 4: Steps minimum",
              "items": [
                "Keep the routine alive"
              ]
            },
            {
              "label": "Day 5: Steps & Protein",
              "items": [
                "Hit protein targets",
                "Daily steps minimum"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        }
      },
      "postGate": {
        "blueprintName": "The System Blueprint",
        "scheduleTitle": "The Schedule",
        "scheduleByDose": {
          "two_days": {
            "title": "2 Templates",
            "lines": [
              "2 sessions",
              "Steps minimum daily"
            ]
          },
          "three_days": {
            "title": "A/B/A",
            "lines": [
              "Mon: A",
              "Wed: B",
              "Fri: A"
            ]
          },
          "four_plus": {
            "title": "3 + 1",
            "lines": [
              "3 templates + 1 low intensity"
            ]
          },
          "chaos": {
            "title": "Chaos Mode",
            "lines": [
              "Minimum session + steps"
            ]
          }
        },
        "protocolTitle": "The Protocol",
        "protocolCopy": "Reduce friction. Remove decisions. Make it hard to fail.",
        "keyRuleTitle": "Key Rule",
        "keyRuleCopy": "Minimum session still counts. Keep momentum.",
        "warmupTitle": "Warm-up Protocol (5 min)",
        "warmupSteps": [
          "2 min easy movement",
          "2 ramp sets for first lift",
          "Start"
        ],
        "autoregulationTitle": "Autoregulation Management",
        "autoregulationRules": [
          "Busy week → minimum session",
          "Great week → progress reps then load"
        ],
        "progressChecksTitle": "Progress Checks (weekly)",
        "progressChecks": [
          "Sessions completed",
          "Steps average",
          "One win you repeated"
        ]
      }
    },
    {
      "id": "reset_mode",
      "label": "Reset Mode",
      "primaryBottleneck": "You’ve drifted — you need momentum before optimisation.",
      "microRevealLine": "Momentum first. Optimisation later.",
      "strategyName": "Momentum Reset",
      "strategyBlurb": "You don’t need optimisation yet. You need rhythm.",
      "focusTemplate": "Based on your goal of Reset + momentum and your recent consistency, we optimise for Structure + Small Wins.",
      "stressValveTitle": "The Stress Valve: Busy Week Fallback",
      "stressValveCopy": "When life gets messy, you don’t stop — you switch to the fallback and keep moving.",
      "weeklyStructureTitle": "Weekly Structure",
      "weeklyStructureCopyByDose": {
        "two_days": {
          "title": "2 Sessions + Steps + Protein",
          "bullets": [
            "2 simple sessions",
            "Steps baseline + bump",
            "Protein anchors daily"
          ]
        },
        "three_days": {
          "title": "3 Sessions (Rhythm first)",
          "bullets": [
            "3 sessions/week (repeatable)",
            "Steps daily",
            "Protein anchors daily"
          ]
        },
        "four_plus": {
          "title": "3 + 1",
          "bullets": [
            "3 sessions",
            "1 low intensity",
            "Steps + anchors"
          ]
        },
        "chaos": {
          "title": "Chaos Mode: keep it alive",
          "bullets": [
            "Minimum session",
            "Steps minimum daily",
            "Protein anchors"
          ]
        }
      },
      "guardrailsTitle": "Guardrails",
      "guardrails": [
        "No hero weeks. Repeatable effort wins.",
        "If you miss a day, continue — don’t restart.",
        "Keep sessions short enough to finish."
      ],
      "nutritionTitle": "Nutrition: Keep it realistic",
      "nutritionRules": [
        "Protein anchor: 3 meals/day.",
        "One simple swap per day (upgrade one meal).",
        "Hydration daily."
      ],
      "next7DaysTitle": "Your Next 7 Days",
      "next7DaysByDose": {
        "two_days": {
          "title": "2-Day Reset Week",
          "days": [
            {
              "label": "Day 1: Full Body",
              "items": [
                "Simple full body session"
              ]
            },
            {
              "label": "Day 2: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 3: Rest",
              "items": [
                "Focus on protein anchors",
                "Hydration"
              ]
            },
            {
              "label": "Day 4: Steps + anchors",
              "items": [
                "Protein anchors + steps"
              ]
            },
            {
              "label": "Day 5: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        },
        "three_days": {
          "title": "3-Day Reset Week",
          "days": [
            {
              "label": "Day 1: Session A",
              "items": [
                "Simple session"
              ]
            },
            {
              "label": "Day 2: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 3: Session B",
              "items": [
                "Simple session"
              ]
            },
            {
              "label": "Day 4: Rest",
              "items": [
                "Focus on protein anchors",
                "Hydration"
              ]
            },
            {
              "label": "Day 5: Session C",
              "items": [
                "Simple session"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        },
        "four_plus": {
          "title": "3 + 1 Week",
          "days": [
            {
              "label": "Day 1: Session",
              "items": [
                "Simple session"
              ]
            },
            {
              "label": "Day 2: Session",
              "items": [
                "Simple session"
              ]
            },
            {
              "label": "Day 3: Active Recovery",
              "items": [
                "Daily steps baseline",
                "Light movement (walk/bike)"
              ]
            },
            {
              "label": "Day 4: Session",
              "items": [
                "Simple session"
              ]
            },
            {
              "label": "Day 5: Low intensity",
              "items": [
                "20–30 min easy"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        },
        "chaos": {
          "title": "Chaos Mode Week",
          "days": [
            {
              "label": "Day 1: Minimum session",
              "items": [
                "15–20 min full body"
              ]
            },
            {
              "label": "Day 2: Steps & Protein",
              "items": [
                "Hit protein targets",
                "Daily steps minimum"
              ]
            },
            {
              "label": "Day 3: Steps & Protein",
              "items": [
                "Hit protein targets",
                "Daily steps minimum"
              ]
            },
            {
              "label": "Day 4: Protein + steps",
              "items": [
                "Anchors win"
              ]
            },
            {
              "label": "Day 5: Steps & Protein",
              "items": [
                "Hit protein targets",
                "Daily steps minimum"
              ]
            },
            {
              "label": "Day 6: Weekend Flexibility",
              "items": [
                "1 planned social meal",
                "Stay active"
              ]
            },
            {
              "label": "Day 7: Rest & Prep",
              "items": [
                "Grocery shop / meal prep",
                "Review upcoming week"
              ]
            }
          ]
        }
      },
      "postGate": {
        "blueprintName": "The Reset Blueprint",
        "scheduleTitle": "The Schedule",
        "scheduleByDose": {
          "two_days": {
            "title": "2-Day Reset",
            "lines": [
              "2 sessions",
              "Steps daily",
              "Protein anchors"
            ]
          },
          "three_days": {
            "title": "3-Day Reset",
            "lines": [
              "3 sessions",
              "Steps daily",
              "Protein anchors"
            ]
          },
          "four_plus": {
            "title": "3 + 1",
            "lines": [
              "3 sessions + 1 low intensity",
              "Steps daily"
            ]
          },
          "chaos": {
            "title": "Chaos Mode",
            "lines": [
              "Minimum session + steps + anchors"
            ]
          }
        },
        "protocolTitle": "The Protocol",
        "protocolCopy": "Momentum first. Optimisation later. Your job is to complete the week, not crush it.",
        "keyRuleTitle": "Key Rule",
        "keyRuleCopy": "If life is messy: fallback session + steps. Keep the chain alive.",
        "warmupTitle": "Warm-up Protocol (5–8 min)",
        "warmupSteps": [
          "2 min easy movement",
          "2 mobility moves",
          "2 ramp sets",
          "Start"
        ],
        "autoregulationTitle": "Autoregulation Management",
        "autoregulationRules": [
          "Busy week → fallback sessions",
          "Good week → add reps then load"
        ],
        "progressChecksTitle": "Progress Checks (weekly)",
        "progressChecks": [
          "Sessions completed",
          "Steps average",
          "Energy trend"
        ]
      }
    }
  ],
  "scoring": {
    "rules": [
      {
        "when": {
          "qId": "q4_constraint",
          "optionId": "time"
        },
        "add": {
          "time_crunched": 3
        }
      },
      {
        "when": {
          "qId": "q4_constraint",
          "optionId": "stress"
        },
        "add": {
          "stress_stacked": 3
        }
      },
      {
        "when": {
          "qId": "q4_constraint",
          "optionId": "pain"
        },
        "add": {
          "pain_limited": 3
        }
      },
      {
        "when": {
          "qId": "q4_constraint",
          "optionId": "nutrition"
        },
        "add": {
          "nutrition_drifting": 3
        }
      },
      {
        "when": {
          "qId": "q4_constraint",
          "optionId": "motivation"
        },
        "add": {
          "motivation_drifting": 3
        }
      },
      {
        "when": {
          "qId": "q5_consistency",
          "optionId": "0_1"
        },
        "add": {
          "reset_mode": 3
        }
      },
      {
        "when": {
          "qId": "q5_consistency",
          "optionId": "2_3"
        },
        "add": {
          "reset_mode": 1
        }
      },
      {
        "when": {
          "qId": "q2_goal",
          "optionId": "need_reset"
        },
        "add": {
          "reset_mode": 2
        }
      },
      {
        "when": {
          "qId": "q2_goal",
          "optionId": "pain_movement"
        },
        "add": {
          "pain_limited": 1
        }
      },
      {
        "when": {
          "qId": "q3_time",
          "optionId": "chaos"
        },
        "add": {
          "time_crunched": 1,
          "stress_stacked": 1
        }
      },
      {
        "when": {
          "qId": "q6_flags",
          "optionId": "limits"
        },
        "add": {
          "pain_limited": 3
        }
      },
      {
        "when": {
          "qId": "q6_flags",
          "optionId": "postpartum"
        },
        "add": {
          "pain_limited": 3
        }
      },
      {
        "when": {
          "qId": "q6_flags",
          "optionId": "menopause"
        },
        "add": {
          "stress_stacked": 2,
          "pain_limited": 1
        }
      }
    ],
    "overrides": [
      {
        "when": {
          "qId": "q6_flags",
          "optionId": "limits"
        },
        "forceArchetypeId": "pain_limited"
      },
      {
        "when": {
          "qId": "q6_flags",
          "optionId": "postpartum"
        },
        "forceArchetypeId": "pain_limited"
      }
    ],
    "tieBreakers": [
      {
        "type": "prefer_q4_constraint"
      },
      {
        "type": "prefer_pain_if_q6_in",
        "optionIds": [
          "limits",
          "postpartum",
          "menopause"
        ]
      },
      {
        "type": "prefer_reset_if_q5_is",
        "optionIds": [
          "0_1"
        ]
      }
    ]
  },
  "recommendation": {
    "serviceNames": {
      "inPerson": "1:1 Coaching (Christchurch)",
      "online": "Online Coaching (12-week minimum)",
      "reset": "42-Day Reset",
      "corporate": "Corporate Wellness"
    },
    "rules": [
      {
        "name": "reset_if_goal_reset_or_very_low_consistency",
        "whenAny": [
          {
            "qId": "q2_goal",
            "optionId": "need_reset"
          },
          {
            "qId": "q5_consistency",
            "optionId": "0_1"
          }
        ],
        "recommend": {
          "serviceId": "reset",
          "href": "/fitness-challenge-nz"
        },
        "alternate": {
          "serviceId": "online",
          "href": "/online-personal-training-nz"
        }
      },
      {
        "name": "pain_or_high_support_in_chch",
        "whenAll": [
          {
            "qId": "q1_location",
            "optionId": "chch"
          }
        ],
        "whenAny": [
          {
            "qId": "q4_constraint",
            "optionId": "pain"
          },
          {
            "qId": "q4_constraint",
            "optionId": "stress"
          },
          {
            "qId": "q4_constraint",
            "optionId": "motivation"
          },
          {
            "qId": "q6_flags",
            "optionId": "limits"
          },
          {
            "qId": "q6_flags",
            "optionId": "postpartum"
          },
          {
            "qId": "q6_flags",
            "optionId": "menopause"
          }
        ],
        "recommend": {
          "serviceId": "inPerson",
          "href": "/personal-trainer-christchurch"
        },
        "alternate": {
          "serviceId": "online",
          "href": "/online-personal-training-nz"
        }
      },
      {
        "name": "default_online",
        "whenAlways": true,
        "recommend": {
          "serviceId": "online",
          "href": "/online-personal-training-nz"
        },
        "alternate": {
          "serviceId": "reset",
          "href": "/fitness-challenge-nz"
        }
      }
    ],
    "ui": {
      "recommendedTitle": "Recommended Next Step",
      "recommendedSubtitleTemplate": "Your highest-return next step: {serviceName}.",
      "whyTemplate": "Why: {reason}",
      "alternateTitle": "Or start simpler",
      "alternateSubtitleTemplate": "{alternateServiceName}"
    },
    "reasons": {
      "reset": "You need momentum and structure before optimisation.",
      "online": "You need structure and accountability that survives real weeks.",
      "inPerson": "If pain or confidence is in the mix, precision is the highest-return move."
    }
  },
  "renderingRules": {
    "preGate": {
      "sectionsOrder": [
        "strategy",
        "game_plan",
        "stress_valve",
        "weekly_structure",
        "guardrails",
        "nutrition",
        "next_7_days",
        "unlock"
      ]
    },
    "postGate": {
      "sectionsOrder": [
        "schedule",
        "protocol",
        "key_rule",
        "warmup",
        "autoregulation",
        "progress_checks",
        "recommended_next_step"
      ]
    },
    "dynamicText": {
      "replaceTokens": [
        "{goalLabel}",
        "{serviceName}",
        "{alternateServiceName}",
        "{reason}"
      ]
    }
  },
  "implementationNotes": {
    "howToCompute": [
      "1) Collect answers for q1..q6.",
      "2) Score archetypes using scoring.rules. Apply scoring.overrides if matched.",
      "3) If tie, apply scoring.tieBreakers in order.",
      "4) Determine doseKey = q3_time optionId.",
      "5) Build preGate content by pulling archetype fields and selecting weeklyStructureCopyByDose[doseKey] and next7DaysByDose[doseKey].",
      "6) After email unlock, show postGate content from archetype.postGate scheduleByDose[doseKey] and other fields.",
      "7) Determine recommendation using recommendation.rules in order. Fill recommended/alternate service labels and reasons."
    ],
    "safetyNotes": [
      "Avoid medical claims. Use supportive language.",
      "If q6_flags is postpartum or menopause, display a small reassurance note: 'Train smart, build capacity steadily, prioritise recovery.'",
      "If q6_flags is limits/postpartum, recommendation should not push hard intensity; prefer in-person (if Chch) or online."
    ],
    "contentTone": "Calm professional + Kiwi plain-English. Practical. No hype."
  }
};

export default assessmentData;
