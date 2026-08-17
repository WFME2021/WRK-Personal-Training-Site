const fs = require('fs');

function replaceInFile(path, replacements) {
    if (!fs.existsSync(path)) return;
    let content = fs.readFileSync(path, 'utf8');
    let changed = false;
    for (const [search, replace] of replacements) {
        if (content.includes(search)) {
            content = content.replace(search, replace);
            changed = true;
        } else {
            console.log(`Warning: Could not find ${search} in ${path}`);
        }
    }
    if (changed) fs.writeFileSync(path, content);
}

// 1. Home
replaceInFile('pages/Home.tsx', [
    ['description="Specialist GLP-1 fitness coaching to help you preserve muscle, build strength, improve fitness and develop sustainable habits while losing weight."', 'description="Expert Personal Trainer in Christchurch providing specialist GLP-1 fitness coaching. Preserve muscle, build strength, and develop sustainable habits."'],
    ['alt="Active couple hiking outdoors, representing a capable and fulfilling life"', 'alt="Personal Trainer in Christchurch helping clients achieve a capable and fulfilling life through GLP-1 fitness coaching"'],
    ['alt="Adventure and lifestyle background"', 'alt="GLP-1 fitness coaching and lifestyle transformation by a Personal Trainer in Christchurch"'],
    ['alt="Hayden, Founder and Coach of WRK Personal Training"', 'alt="Hayden, Personal Trainer in Christchurch and founder of WRK GLP-1 Fitness Coaching"']
]);

// 2. About
replaceInFile('pages/About.tsx', [
    ['description="Discover the philosophy behind WRK. We bridge the gap between medical weight loss interventions and real-world exercise, protecting muscle mass and metabolic health."', 'description="Discover the philosophy behind WRK. As an expert Personal Trainer in Christchurch, we bridge the gap between medical weight loss and real-world exercise."'],
    ['alt="Hayden, Founder and Coach of WRK Personal Training"', 'alt="Hayden, Expert Personal Trainer in Christchurch and Founder of WRK Personal Training"'],
    ['alt="Forest adventure background"', 'alt="Expert personal trainer in Christchurch guiding a GLP-1 fitness coaching philosophy"']
]);

// 3. Services
replaceInFile('pages/Services.tsx', [
    ['description="Choose the right level of support for your GLP-1 weight loss journey. Online coaching, in-person training, and structured fitness toolkits."', 'description="Discover expert Personal Training Services in Christchurch. Choose the right level of support for your GLP-1 journey, including online coaching and in-person training."'],
    ['alt="Personal trainer supporting a client with a kettlebell"', 'alt="Expert providing Personal Training Services in Christchurch supporting a client"'],
    ['alt="Outdoor activity"', 'alt="Outdoor activity representing the outcomes of Personal Training Services in Christchurch"']
]);

// 4. PersonalTraining
replaceInFile('pages/PersonalTraining.tsx', [
    ['description="Premium 1:1 personal training in Addington, Christchurch. Safe, 30-minute resistance training sessions tailored for medical weight loss support."', 'description="Premium Personal Training Services in Christchurch. Safe, 30-minute resistance training sessions in Addington tailored for medical weight loss support."'],
    ['alt="Strength training and active lifestyle"', 'alt="In-person Personal Training Services in Christchurch focusing on strength and active lifestyle"'],
    ['alt="Intense focus training background"', 'alt="Focused Personal Training Services in Christchurch for medical weight loss"']
]);

// 5. OnlineCoaching
replaceInFile('pages/OnlineCoaching.tsx', [
    ['description="Premium online 12-week fitness coaching tailored for GLP-1 patients and prescription GLP-1 support. Protect your muscle mass from anywhere in New Zealand."', 'description="Premium online Personal Training Services and fitness coaching tailored for GLP-1 patients. Protect your muscle mass from anywhere in New Zealand."'],
    ['alt="Online fitness coaching and training outdoors"', 'alt="Premium online Personal Training Services in Christchurch and across New Zealand"'],
    ['alt="Outdoor adventure lifestyle"', 'alt="Enjoy an active outdoor lifestyle with our online personal training services"']
]);

// 6. Programs
replaceInFile('pages/Programs.tsx', [
    ['description="12-week training pathways built around where you are now in your GLP-1 journey. Choose the right program to protect strength and build fitness."', 'description="Join our 12-week GLP-1 Strength Training Program. Pathways built around where you are now in your journey to protect strength and build fitness."'],
    ['alt="Active adult hiking outdoors, demonstrating the outcome of functional training"', 'alt="Active adult enjoying the outdoors after completing our GLP-1 Strength Training Program"'],
    ['alt="Focus and determination"', 'alt="Focus and determination during the GLP-1 Strength Training Program"']
]);

// 7. ToolsIndex
replaceInFile('pages/ToolsIndex.tsx', [
    ['description="Free tools and calculators to help you navigate your GLP-1 journey. Calculate protein needs, hydration requirements, and daily energy expenditure."', 'description="Free tools including our GLP-1 Macro Calculator and GLP-1 Protein Calculator to help you navigate your GLP-1 fitness journey."'],
    ['alt="Person outdoors checking a smartwatch, representing practical fitness tracking"', 'alt="Tracking progress with the GLP-1 Macro Calculator and GLP-1 Protein Calculator"']
]);

// 8. Calculators
replaceInFile('pages/TdeeCalculator.tsx', [
    ['description="Calculate your estimated calorie needs and personalised protein, carbohydrate and fat targets with the WRK GLP-1 Calorie & Macro Calculator."', 'description="Calculate your estimated calorie needs and personalised protein, carbohydrate and fat targets with the WRK GLP-1 Macro Calculator."']
]);
replaceInFile('pages/ProteinTargeter.tsx', [
    ['description="Calculate your daily protein targets to support muscle and strength during your GLP-1 weight loss journey."', 'description="Use our GLP-1 Protein Calculator to find your daily protein targets to support muscle and strength during your weight loss journey."']
]);
replaceInFile('pages/HydrationCalculator.tsx', [
    ['description="Use the WRK GLP-1 Hydration Calculator to estimate your daily fluid needs and understand when exercise, heat or fluid loss may increase your hydration requirements."', 'description="Use the WRK GLP-1 Hydration Calculator to estimate your daily fluid needs. Enhance your GLP-1 Fitness Coaching results with proper hydration."']
]);

