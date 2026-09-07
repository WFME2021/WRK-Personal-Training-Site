const fs = require('fs');

const vercel = {
  "cleanUrls": true,
  "trailingSlash": false,
  "redirects": [
    {
      "source": "/personal-trainer-christchurch",
      "destination": "/personal-training",
      "permanent": true
    },
    {
      "source": "/personal-training-christchurch-philosophy",
      "destination": "/about",
      "permanent": true
    },
    {
      "source": "/philosophy",
      "destination": "/about",
      "permanent": true
    },
    {
      "source": "/corporate-wellness",
      "destination": "/",
      "permanent": true
    },
    {
      "source": "/workplace-wellness-program-nz",
      "destination": "/",
      "permanent": true
    },
    {
      "source": "/calorie-calculator",
      "destination": "/tools",
      "permanent": true
    },
    {
      "source": "/fitness-challenge-nz",
      "destination": "/programs",
      "permanent": true
    },
    {
      "source": "/14-day-fat-loss-foundations",
      "destination": "/programs",
      "permanent": true
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/fallback"
    }
  ]
};

fs.writeFileSync('vercel.json', JSON.stringify(vercel, null, 2));
