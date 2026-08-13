const fs = require('fs');
let content = fs.readFileSync('pages/Blog.tsx', 'utf8');
const targetStr = `        {/* Common GLP-1 Fitness Questions (AEO Section) */}
        <div className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C3539] mb-10 text-center">
            Common GLP-1 Fitness Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/blog/strength-training" className="bg-white border border-neutral-200 p-6 rounded-2xl hover:border-[#8A9A86] hover:shadow-sm transition-all group flex items-start justify-between">
              <span className="font-serif text-[18px] text-[#2C3539] group-hover:text-[#8A9A86] transition-colors pr-4">Can I strength train while taking a GLP-1?</span>
              <ArrowRight size={20} className="text-neutral-300 group-hover:text-[#8A9A86] shrink-0 mt-0.5" />
            </Link>
            
            <Link to="/blog/protein-needs" className="bg-white border border-neutral-200 p-6 rounded-2xl hover:border-[#8A9A86] hover:shadow-sm transition-all group flex items-start justify-between">
              <span className="font-serif text-[18px] text-[#2C3539] group-hover:text-[#8A9A86] transition-colors pr-4">How much protein do I need on a GLP-1?</span>
              <ArrowRight size={20} className="text-neutral-300 group-hover:text-[#8A9A86] shrink-0 mt-0.5" />
            </Link>
            
            <Link to="/blog/best-exercise" className="bg-white border border-neutral-200 p-6 rounded-2xl hover:border-[#8A9A86] hover:shadow-sm transition-all group flex items-start justify-between">
              <span className="font-serif text-[18px] text-[#2C3539] group-hover:text-[#8A9A86] transition-colors pr-4">What exercise is best while taking a GLP-1?</span>
              <ArrowRight size={20} className="text-neutral-300 group-hover:text-[#8A9A86] shrink-0 mt-0.5" />
            </Link>
            
            <Link to="/blog/preserve-muscle" className="bg-white border border-neutral-200 p-6 rounded-2xl hover:border-[#8A9A86] hover:shadow-sm transition-all group flex items-start justify-between">
              <span className="font-serif text-[18px] text-[#2C3539] group-hover:text-[#8A9A86] transition-colors pr-4">How can I preserve muscle while losing weight?</span>
              <ArrowRight size={20} className="text-neutral-300 group-hover:text-[#8A9A86] shrink-0 mt-0.5" />
            </Link>

            <Link to="/blog/low-appetite-nutrition" className="bg-white border border-neutral-200 p-6 rounded-2xl hover:border-[#8A9A86] hover:shadow-sm transition-all group flex items-start justify-between">
              <span className="font-serif text-[18px] text-[#2C3539] group-hover:text-[#8A9A86] transition-colors pr-4">What should I eat when my appetite is low?</span>
              <ArrowRight size={20} className="text-neutral-300 group-hover:text-[#8A9A86] shrink-0 mt-0.5" />
            </Link>
            
            <Link to="/blog/hydration" className="bg-white border border-neutral-200 p-6 rounded-2xl hover:border-[#8A9A86] hover:shadow-sm transition-all group flex items-start justify-between">
              <span className="font-serif text-[18px] text-[#2C3539] group-hover:text-[#8A9A86] transition-colors pr-4">How much water should I drink on a GLP-1?</span>
              <ArrowRight size={20} className="text-neutral-300 group-hover:text-[#8A9A86] shrink-0 mt-0.5" />
            </Link>

            <Link to="/blog/after-glp1" className="bg-white border border-neutral-200 p-6 rounded-2xl hover:border-[#8A9A86] hover:shadow-sm transition-all group md:col-span-2 flex items-start justify-between">
              <span className="font-serif text-[18px] text-[#2C3539] group-hover:text-[#8A9A86] transition-colors pr-4">What happens to fitness after stopping a GLP-1?</span>
              <ArrowRight size={20} className="text-neutral-300 group-hover:text-[#8A9A86] shrink-0 mt-0.5" />
            </Link>
          </div>
        </div>`;

content = content.replace(targetStr, '');
fs.writeFileSync('pages/Blog.tsx', content);
