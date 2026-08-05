const fs = require('fs');

let content = fs.readFileSync('pages/Results.tsx', 'utf8');

const oldHeaderRegex = /<div className="flex flex-col items-center gap-2 mb-6">[\s\S]*?<h1 className="font-display text-4xl md:text-6xl uppercase mb-6">/;

const newHeader = `<div className="flex flex-col items-center gap-2 mb-6">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full">
              A copy has been sent to your inbox
            </span>
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full">
              {assessmentData.uiCopy.postGate.headline}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl uppercase mb-6">`;

content = content.replace(oldHeaderRegex, newHeader);
fs.writeFileSync('pages/Results.tsx', content);
