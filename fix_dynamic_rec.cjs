const fs = require('fs');

let content = fs.readFileSync('pages/Results.tsx', 'utf8');

const regex = /<div className="flex flex-col items-center gap-2 mb-6">\s*<span className="inline-block px-3 py-1 bg-accent\/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full">\s*A copy has been sent to your inbox\s*<\/span>\s*<span className="inline-block px-3 py-1 bg-accent\/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full">\s*\{assessmentData\.recommendation\.ui\.recommendedTitle\}\s*<\/span>/;

content = content.replace(regex, `<span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full mb-6">\n              {assessmentData.recommendation.ui.recommendedTitle}\n            </span>`);

fs.writeFileSync('pages/Results.tsx', content);
