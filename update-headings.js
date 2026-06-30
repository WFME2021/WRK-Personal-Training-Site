const fs = require('fs');
const path = require('path');

function replaceLineHeights(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace specific string patterns globally
  // We only want to target leading values on elements that also have "font-display" or "text-[something-big]" but it's safe to just replace across the board for these specific exact tight values as they are typically only used on headings.
  const map = {
    "leading-[0.85]": "leading-[1.1]",
    "leading-[0.9]": "leading-[1.15]",
    "leading-[1.0]": "leading-[1.15]",
    "leading-[1.05]": "leading-[1.2]",
    "leading-[1.1]": "leading-[1.2]",
    "leading-none": "leading-[1.15]",
    "leading-tight": "leading-[1.2]",
  };

  let original = content;
  
  // A bit safer to only do this for elements with font-display
  // but looking at the codebase, leading-[1.0] etc are uniquely used for headings.
  
  // Instead of simple search/replace which might mess up other things if we're not careful, we can do regex.
  // Match `className="..."` strings that contain `font-display`.
  const regex = /className="[^"]*font-display[^"]*"/g;
  
  content = content.replace(regex, (match) => {
    let replaced = match;
    for (const [tight, loose] of Object.entries(map)) {
      replaced = replaced.replace(new RegExp(`\\b${tight.replace('[', '\\[').replace(']', '\\]')}\\b`, 'g'), loose);
    }
    // Also if there is no leading- class at all, maybe we want to specify it but let's just assume they all have some leading or default is fine, wait no, default might be leading-normal which is 1.5, we only want to loosen the TIGHT ones.
    return replaced;
  });

  if (original !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceLineHeights(fullPath);
    }
  }
}

traverseDir('./src/pages');
traverseDir('./src/components');
console.log('Done!');
