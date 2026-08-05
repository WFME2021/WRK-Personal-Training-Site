const fs = require('fs');
let code = fs.readFileSync('data/assessmentData.ts', 'utf8');

const regex = /"interstitial": \{[\s\S]*?\}/;
const newInterstitial = `"interstitial": {
      "title": "Building your blueprint...",
      "durationMs": 1500,
      "rotatingLines": [
        ""
      ]
    }`;

code = code.replace(regex, newInterstitial);
fs.writeFileSync('data/assessmentData.ts', code);
