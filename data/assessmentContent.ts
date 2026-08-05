export const goalFrames = {
  fat_loss: {
    protocolCopy: "Fat loss after 35 is not a willpower problem. It's a structure problem. The plan below gives you the structure: strength work to hold muscle while you drop fat, a nutrition anchor you can hit on real weeks, and a way to measure progress that isn't just the scale.",
    progressChecks: [
      "Weekly average bodyweight (weigh daily, average weekly)",
      "Waist measurement at the navel once a week",
      "Protein anchor hit rate",
      "Daily steps"
    ]
  },
  pain_movement: {
    protocolCopy: "Moving well comes before moving hard. The plan below rebuilds the patterns first and loads them second. Progress here isn't measured in kilos on the bar. It's measured in what stops hurting.",
    progressChecks: [
      "Pain score trend (same movement, same scale, week on week)",
      "Sessions completed",
      "One movement benchmark of your choice (for example, depth of a comfortable squat)"
    ]
  },
  energy_routine: {
    protocolCopy: "Low energy usually isn't a training problem, it's a recovery and consistency problem. The plan below is deliberately repeatable. The goal for the next four weeks is to finish every session feeling better than you started it.",
    progressChecks: [
      "Daily energy rating out of 10 (30 seconds, first thing in the morning)",
      "Hours of sleep",
      "Sessions completed"
    ]
  },
  strength_performance: {
    protocolCopy: "Strength is the most measurable goal there is, which makes this simple. Pick the key lifts in the plan below, log them every session, and let the 4-week progression do its job.",
    progressChecks: [
      "Load and reps on your two key lifts",
      "Reps in reserve on top sets",
      "Bodyweight (stable is fine)"
    ]
  },
  need_reset: {
    protocolCopy: "You don't need a complicated plan. You need one you'll actually do for four straight weeks. That's the entire goal. Not intensity, not perfection. Attendance. Momentum first. Optimisation later.",
    progressChecks: [
      "Sessions completed versus planned. For the next four weeks that is the only number that matters."
    ]
  }
};

const areaSwaps = {
  knee: [
    "Deep squats become box squats to a comfortable depth.",
    "Lunges become step-ups to a low box or reverse lunges.",
    "No jumping or plyometrics for now."
  ],
  lower_back: [
    "Deadlifts from the floor become trap bar or elevated pulls, or hip thrusts.",
    "Back squats become goblet or front squats.",
    "Sit-ups become dead bugs and planks."
  ],
  shoulder: [
    "Barbell overhead press becomes a landmine press or neutral-grip dumbbell press.",
    "Dips become push-ups.",
    "Upright rows are out."
  ],
  hip: [
    "Deep squats become box squats. Widen or narrow your stance until the movement is comfortable.",
    "Long lunges become split squats with a shorter stance."
  ],
  somewhere_else: [
    "The 3-out-of-10 rule covers you. Any movement that crosses it gets swapped for one that trains the same pattern without the pain.",
    "If you're unsure what the swap is, that's exactly the kind of thing to bring to a session."
  ]
};

export const modificationBlocks = {
  manageable: (area: keyof typeof areaSwaps) => ({
    title: "Working around your niggles",
    paragraphs: [
      "You flagged a few niggles. That changes how we load, not whether we train. Three rules. One, if a movement takes pain above 3 out of 10, swap it. Your swaps are below. Two, the warm-up is not optional for you. Do the full thing. Three, if a niggle is getting worse week on week, stop loading it and get it assessed. Training through a worsening niggle is how a two-week problem becomes a six-month one."
    ],
    swaps: area ? areaSwaps[area] : []
  }),
  limits: (area: keyof typeof areaSwaps) => ({
    title: "Train around it, not through it",
    paragraphs: [
      "Ongoing pain changes the plan more than anything else you told us. The blueprint below is still yours, with one condition: nothing you do in it should push pain above 3 out of 10, and nothing should leave you worse the next day. If it does, that movement is out until you've been assessed. Get the pain looked at by a physio or your GP. That's not a barrier to training, it runs alongside it. In the meantime the 3-out-of-10 rule and the swaps below keep you moving."
    ],
    swaps: area ? areaSwaps[area] : []
  }),
  menopause: () => ({
    title: "Built for where you're at",
    paragraphs: [
      "You told us you're going through menopause. That matters for how this plan works, so here's what changes. Strength work moves to the top of the list. Muscle and bone density respond to progressive resistance, and that matters more now, not less. Recovery gets a bigger seat at the table. Disrupted sleep is common and it directly affects how much training you can absorb, so we autoregulate: on a rough-sleep week, hold the load steady rather than adding. Protein goes up. Aim for a protein anchor at every meal, not just dinner. And if symptoms are hitting hard, a conversation with your GP about managing them runs alongside training, not instead of it."
    ],
    swaps: []
  }),
  postpartum: () => ({
    title: "Rebuilding from the ground up",
    paragraphs: [
      "First things first: if you haven't been cleared by your GP or midwife to return to exercise, that comes before anything in this plan. Once you're cleared, we rebuild from the ground up. Core and pelvic floor come back before heavy loading does. Start every session with the warm-up and treat the first two weeks as practice, not performance. Watch for warning signs during or after training: leaking, a feeling of heaviness or dragging, or a visible doming along the midline of your stomach. Any of those means back the movement off and see a pelvic health physio. That's normal, common and fixable, and it's worth getting right. Sleep will be broken. On the rough weeks, showing up and moving well counts as a win. Hold the load, keep the habit."
    ],
    swaps: []
  })
};
