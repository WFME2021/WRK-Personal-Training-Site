const fs = require('fs');

let content = fs.readFileSync('pages/Results.tsx', 'utf8');

const targetStr = `{/* 3.5 4-Week Progression Model */}`;
const replacement = `{/* Stress Valve */}
          {archetype?.stressValveTitle && archetype?.stressValveCopy && (
            <div className="bg-secondary p-8 md:p-10 rounded-3xl border border-border mb-8">
              <h2 className="text-2xl md:text-3xl font-display uppercase mb-4">
                {archetype.stressValveTitle}
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                {archetype.stressValveCopy}
              </p>
            </div>
          )}

          {/* 3.5 4-Week Progression Model */}`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replacement);
  fs.writeFileSync('pages/Results.tsx', content);
  console.log('Successfully inserted stressValve');
} else {
  console.log('Target string not found');
}
