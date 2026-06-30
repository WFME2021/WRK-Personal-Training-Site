const fs = require('fs');
const path = require('path');

const pageImages = {
  'PersonalTraining.tsx': 'https://i.postimg.cc/k47r1x3p/IMG-1926.png',
  'OnlineCoaching.tsx': 'https://i.postimg.cc/qvhP6XQ3/IMG-1928.png', 
  'CorporateWellness.tsx': 'https://i.postimg.cc/Xqcbg7C3/IMG-2157.jpg',
  'About.tsx': 'https://i.postimg.cc/8PgknyPK/IMG-1931.png',
  'Free14Day.tsx': 'https://i.postimg.cc/1zj3fV8M/IMG-8463.jpg',
  'Challenge42.tsx': 'https://i.postimg.cc/xTbx6w9V/IMG-7278.png'
};

const pageEyebrows = {
  'PersonalTraining.tsx': '1:1 PERSONAL TRAINING',
  'OnlineCoaching.tsx': 'ONLINE COACHING',
  'CorporateWellness.tsx': 'CORPORATE WELLNESS',
  'About.tsx': 'ABOUT WRK',
  'Free14Day.tsx': '14-DAY FAT LOSS FOUNDATIONS',
  'Challenge42.tsx': 'THE 42-DAY CHALLENGE'
}

for (const [filename, imageSrc] of Object.entries(pageImages)) {
  const filePath = path.join('./src/pages', filename);
  if (!fs.existsSync(filePath)) {
    const rootPath = path.join('./pages', filename);
    if (!fs.existsSync(rootPath)) continue;
    processFile(rootPath, imageSrc, pageEyebrows[filename]);
  } else {
    processFile(filePath, imageSrc, pageEyebrows[filename]);
  }
}

function processFile(filePath, imageSrc, eyebrow) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Remove pt-24 from the main wrapper
  content = content.replace(/className="flex flex-col w-full overflow-x-hidden bg-primary pt-24 pb-24 border-t border-border"/g, 
    'className="flex flex-col w-full overflow-x-hidden bg-primary pb-24"');
  
  content = content.replace(/className="flex flex-col w-full overflow-x-hidden bg-navy pt-24 pb-24 border-t border-border"/g, 
    'className="flex flex-col w-full overflow-x-hidden bg-navy pb-24"');

  content = content.replace(/className="flex flex-col w-full overflow-x-hidden bg-primary pt-24 bg-pattern"/g, 
    'className="flex flex-col w-full overflow-x-hidden bg-primary bg-pattern"');
  
  content = content.replace(/className="flex flex-col w-full overflow-x-hidden pt-24 bg-white text-black"/g, 
    'className="flex flex-col w-full overflow-x-hidden bg-white text-black"');

  // 2. Find the SECTION 1 hero block and extract its content
  // Most follow a pattern:
  // {/* SECTION 1 — HERO */}
  // <section ...>
  //   <h1 ...>TITLE</h1>
  //   <p ...>SUBTITLE</p>
  //   <Link ...><Button ...>CTA</Button></Link>
  // </section>

  const sectionRegex = /(?:\{\/\*\s*SECTION 1.*?HERO\s*\*\/\}\s*)?<section[^>]*>[\s\S]*?<h1[^>]*>([\s\S]*?)<\/h1>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>([\s\S]*?)<\/section>/i;
  
  const match = content.match(sectionRegex);
  if (match) {
    const h1Content = match[1].trim();
    const pContent = match[2].trim();
    // The CTA block might be just a Link or a div wrapping buttons. We'll grab the whole remaining inside after <p>...
    const ctaContentRaw = match[3].trim();
    
    // Make sure we only use CTA if it has links/buttons, else leave empty
    let ctaContent = ctaContentRaw.replace(/className="([^"]+?w-full sm:w-auto[^"]+)"/, 'className="$1"'); 

    // We can just format the CTA similarly to home page if they used standard buttons
    // Actually let's just insert the existing ctaContent but update its wrapper
    
    const newHero = `
        {/* SECTION 1 — HERO */}
        <section className="relative h-[80svh] md:h-[90svh] w-full flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
             <img 
               referrerPolicy="no-referrer" 
               loading="eager" 
               src="${imageSrc}" 
               alt="${eyebrow}" 
               className="w-full h-full object-cover object-top" 
             />
             <div 
               className="absolute inset-0"
               style={{
                 background: 'linear-gradient(to bottom, rgba(13, 17, 23, 0) 0%, rgba(13, 17, 23, 0.6) 60%, rgba(13, 17, 23, 0.88) 100%)'
               }}
             />
          </div>
          <div className="relative z-10 w-full px-5 pb-12 md:pb-24 max-w-[1200px] mx-auto md:px-12 text-left">
            <span className="block font-sans font-medium text-[11px] uppercase tracking-[0.12em] text-orange-burnt mb-4">
              ${eyebrow}
            </span>
            <h1 className="font-display text-[56px] md:text-[88px] lg:text-[96px] leading-[1.25] text-white mb-6 uppercase">
              ${h1Content}
            </h1>
            <p className="font-sans text-[17px] md:text-[18px] text-off-white font-normal max-w-[560px] mb-8 leading-[1.65]">
              ${pContent}
            </p>
            <div className="flex flex-col md:flex-row items-start gap-4">
              ${ctaContent}
            </div>
          </div>
        </section>
`;
    content = content.replace(match[0], newHero.trim());
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  } else {
    console.log(`Could not find hero section in ${filePath}`);
  }
}
