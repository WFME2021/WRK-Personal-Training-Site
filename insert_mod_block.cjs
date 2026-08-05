const fs = require('fs');

let content = fs.readFileSync('pages/Results.tsx', 'utf8');

const regex = /\{\/\* 3\. Next 7 Days \(Detailed\) \*\/\}/;
const newModBlock = `
          {/* 2.5 Modification Block */}
          {archetype?.modificationBlock && (
            <div className="bg-secondary p-8 md:p-10 rounded-3xl border border-border">
              <h2 className="text-2xl md:text-3xl font-display uppercase mb-6 text-text-primary">
                {archetype.modificationBlock.title}
              </h2>
              <div className="space-y-4 mb-6">
                {archetype.modificationBlock.paragraphs.map((p: string, i: number) => (
                  <p key={i} className="text-lg text-text-secondary leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              {archetype.modificationBlock.swaps && archetype.modificationBlock.swaps.length > 0 && (
                <div className="bg-primary p-6 rounded-2xl border border-border">
                   <h3 className="font-bold text-lg mb-4">Your Swaps</h3>
                   <ul className="space-y-3">
                     {archetype.modificationBlock.swaps.map((swap: string, i: number) => (
                       <li key={i} className="flex items-start gap-3 text-text-secondary">
                         <span className="text-accent mt-0.5">•</span>
                         <span>{swap}</span>
                       </li>
                     ))}
                   </ul>
                </div>
              )}
            </div>
          )}

          {/* 3. Next 7 Days (Detailed) */}`;

content = content.replace(regex, newModBlock);
fs.writeFileSync('pages/Results.tsx', content);
