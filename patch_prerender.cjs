const fs = require('fs');
let content = fs.readFileSync('prerender.ts', 'utf-8');

const routesArray = `    const routes = [
    '/',
    '/programs',
    '/personal-training',
    '/online-coaching',
    '/toolkit',
    '/assessment',
    '/results',
    '/contact',
    '/about',
    '/resources',
    '/tools',
    '/tools/tdee-calculator',
    '/tools/protein-calculator',
    '/tools/hydration-calculator',
    '/blog'
  ];`;

content = content.replace(/const routes = \[[\s\S]*?\];/, routesArray);

const newMetaLogic = `    if (url === '/programs') {
      title = "GLP-1 Fitness Programs | WRK Personal Training";
      desc = "Explore our 12-week GLP-1 Fitness Programs. Structured training pathways built around your active weight loss, maintenance, or long-term habit building phases.";
    } else if (url === '/toolkit') {
      title = "GLP-1 Workout & Nutrition Toolkit | WRK Personal Training";
      desc = "Download the comprehensive GLP-1 toolkit: gym and home workout templates, high-protein meal guides, and medication side-effect navigation for $29.";
    } else if (url === '/online-coaching') {
      title = "Online GLP-1 Fitness Coach | Muscle Preservation & Strength | WRK";
      desc = "Specialized online coaching for GLP-1 patients worldwide. Preserve muscle, overcome fatigue, and build lasting strength. Apply for remote coaching.";
    } else if (url === '/personal-training') {
      title = "Personal Trainer Christchurch | 1-on-1 Fitness Coaching | WRK";
      desc = "Private 1-on-1 personal training in Addington, Christchurch. Evidence-based coaching tailored for strength, weight loss, and GLP-1 support. Book a session.";
    } else if (url === '/assessment') {`;

content = content.replace(/if \(url === '\/programs'\) \{[\s\S]*?\} else if \(url === '\/assessment'\) \{/, newMetaLogic);

fs.writeFileSync('prerender.ts', content);
