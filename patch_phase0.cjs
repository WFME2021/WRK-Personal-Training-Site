const fs = require('fs');
let code = fs.readFileSync('pages/Home.tsx', 'utf-8');

// 1. Hero paragraph
code = code.replace(
  /<p className="font-sans text-\[18px\] md:text-\[20px\] text-off-white font-medium max-w-\[560px\] mb-8 leading-\[1\.65\]">\s*WRK is Christchurch personal trainer Hayden Richards. Twenty years coaching busy professionals aged 35 to 60 — and fat loss is most of what I do. Not crash diets, not bootcamps. Strength coaching and smart nutrition built around your schedule, your old injuries, and the body you've actually got. In Christchurch and online across New Zealand.\s*<\/p>/,
  `{/* Desktop Hero Paragraph */}
            <p className="hidden md:block font-sans text-[18px] md:text-[20px] text-off-white font-medium max-w-[560px] mb-8 leading-[1.65]">
              Twenty years coaching this exact demographic. Not crash diets, not bootcamps — strength training and smart nutrition built around your schedule, your old injuries, and the body you've actually got. Christchurch and online, NZ-wide.
            </p>
            {/* Mobile Hero Paragraph */}
            <p className="block md:hidden font-sans text-[18px] text-off-white font-medium max-w-[560px] mb-8 leading-[1.65]">
              Twenty years coaching this exact demographic. Christchurch and online, NZ-wide.
            </p>`
);

// 2. Hero CTAs - mobile
code = code.replace(
  /<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">\s*<Link to="\/assessment" className="w-full sm:w-auto">\s*<Button size="lg" fullWidth className="w-full sm:w-auto text-\[15px\]">\s*Take the Free Custom Diagnostic &rarr;\s*<\/Button>\s*<\/Link>\s*<Link to="\/contact" className="w-full sm:w-auto text-center sm:text-left">\s*<Button variant="outline" size="lg" fullWidth className="w-full sm:w-auto text-\[15px\] border-orange-burnt\/30 text-off-white hover:text-white hover:bg-navy-mid">\s*Or talk to Hayden first\s*<\/Button>\s*<\/Link>\s*<\/div>/,
  `<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              <Link to="/assessment" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-[15px]">
                  Take the Free Custom Diagnostic &rarr;
                </Button>
              </Link>
              {/* Desktop Button */}
              <Link to="/contact" className="hidden sm:block">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-[15px] border-orange-burnt/30 text-off-white hover:text-white hover:bg-navy-mid">
                  Or talk to Hayden first
                </Button>
              </Link>
              {/* Mobile Text Link */}
              <Link to="/contact" className="block sm:hidden text-orange-burnt underline hover:text-orange-burnt/80 font-medium text-[15px]">
                Or talk to Hayden first
              </Link>
            </div>`
);

// 3. The Real Problem
const realProblemRegex = /<p className="font-sans text-\[18px\] text-off-white\/90 leading-\[1\.6\] text-left">\s*You're not starting from zero\. You know what good eating looks like, and you've got more discipline than people give you credit for\. The problem isn't knowledge\. It's time, structure, and someone keeping you honest\.\s*<\/p>\s*<p className="font-sans text-\[18px\] text-off-white\/90 leading-\[1\.6\] text-left">\s*Twenty years coaching in Christchurch taught me the people who get results aren't the ones with the most time\. They're the ones with the right plan\. WRK is built for busy professionals aged 35 to 60, managing careers, families, and the odd dodgy knee, who want fat loss that fits real life\. No bootcamp\. No guilt\. Just coaching that earns its place in your week\.\s*<\/p>/;

code = code.replace(realProblemRegex, `<div className="font-sans text-[18px] text-off-white/90 leading-[1.6] text-left space-y-4">
              <p>
                You're not starting from zero. You already know what good eating looks like, and you've got more discipline than people give you credit for. The problem isn't knowledge — it's time, structure, and someone keeping you honest. Twenty years coaching in Christchurch taught me the people who get results aren't the ones with the most time. They're the ones with the right plan, built around a career, a family, and the odd dodgy knee.
              </p>
              <p className="block md:hidden">
                Not crash diets, not bootcamps — strength training and smart nutrition built around your schedule, your old injuries, and the body you've actually got.
              </p>
            </div>`);

// 4. Coach Bio
const coachBioRegex = /<p>I'm Hayden Richards\. Twenty years coaching, 200\+ clients, based at Get Me Fitter in Addington\.<\/p>\s*<p>My job is to cut through the noise of the fitness industry and find the minimum effective dose for you\. Not the most punishing plan\. The smallest one that actually works\. Different bodies and different circumstances need different tools, and knowing which tool to reach for is what 20 years gives you\.<\/p>\s*<p>That's the difference between me and a plan off the internet\. Getting a busy 50-year-old with a rebuilt knee to train consistently, safely, and actually enjoy it is the job, and I've spent two decades learning how to do it\.<\/p>\s*<p>You won't get handed to a team\. You work with me\. Every programme I write, I write\.<\/p>/;

code = code.replace(coachBioRegex, `<p>I'm Hayden Richards. Twenty years coaching, 200+ clients, based at Get Me Fitter in Addington.</p>
                    <p>My job is finding the minimum effective dose for you — not the most punishing plan, the smallest one that works. Different bodies need different tools, and knowing which tool to reach for is what 20 years gives you. It's the difference between me and a plan off the internet: getting a busy 50-year-old with a rebuilt knee training consistently, safely, and actually enjoying it.</p>
                    <p>You won't get handed to a team. You work with me. Every programme I write, I write.</p>`);

// 5. Service cards
const serviceCardRegex = /<h3 className="text-white font-display text-\[24px\] uppercase tracking-wide">1:1 Personal Training<\/h3>\s*<p className="font-sans text-\[16px\] text-off-white\/80 leading-\[1\.6\] flex-1">\s*In-person in Christchurch\. Your own coach, your own programme, built around your goals and your schedule\. Not a team\. Me\.\s*<\/p>/;

code = code.replace(serviceCardRegex, `<h3 className="text-white font-display text-[24px] uppercase tracking-wide">1:1 Personal Training</h3>
                 <p className="font-sans text-[16px] text-off-white/80 leading-[1.6] flex-1">
                   Your programme. Your schedule. Just us — no team hand-off.
                 </p>`);

fs.writeFileSync('pages/Home.tsx', code);
console.log('Phase 0 copy changes applied to Home.tsx');
