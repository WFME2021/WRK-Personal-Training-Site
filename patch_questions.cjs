const fs = require('fs');
let content = fs.readFileSync('data/assessmentData.ts', 'utf8');

const q6Sub = `
    {
      "id": "q6_sub",
      "type": "single_select",
      "prompt": "Where's it at?",
      "options": [
        { "id": "knee", "label": "Knee" },
        { "id": "lower_back", "label": "Lower back" },
        { "id": "shoulder", "label": "Shoulder" },
        { "id": "hip", "label": "Hip" },
        { "id": "somewhere_else", "label": "Somewhere else" }
      ]
    }`;

// Inject after q6_flags
if (!content.includes('"id": "q6_sub"')) {
  const q6FlagsEnd = content.indexOf(']', content.indexOf('"id": "q6_flags"'));
  const nextBracket = content.indexOf('}', q6FlagsEnd);
  
  content = content.substring(0, nextBracket + 1) + ',' + q6Sub + content.substring(nextBracket + 1);
  fs.writeFileSync('data/assessmentData.ts', content);
  console.log('Injected q6_sub');
} else {
  console.log('q6_sub already exists');
}
