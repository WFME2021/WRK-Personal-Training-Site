const fs = require('fs');
let content = fs.readFileSync('pages/Assessment.tsx', 'utf8');

if (!content.includes("import { SeoHead } from '../components/SeoHead';")) {
    content = content.replace("import { Link } from 'react-router-dom';", "import { Link } from 'react-router-dom';\nimport { SeoHead } from '../components/SeoHead';");
}

const seoTag = `\n        <SeoHead 
          title="GLP-1 Fitness Assessment | WRK Personal Training"
          description="Take our free assessment to see if your current routine is protecting your muscle mass. Start your Personal Training Consultation in Christchurch today."
        />`;

content = content.replace('<div className="bg-[#F6F5F2] min-h-screen py-16 px-6">', '<div className="bg-[#F6F5F2] min-h-screen py-16 px-6">' + seoTag);
content = content.replace('<div className="bg-[#F6F5F2] min-h-screen flex flex-col">', '<div className="bg-[#F6F5F2] min-h-screen flex flex-col">' + seoTag);

fs.writeFileSync('pages/Assessment.tsx', content);
