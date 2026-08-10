const fs = require('fs');

let layout = fs.readFileSync('components/Layout.tsx', 'utf8');

const navRegex = /<nav className="hidden md:flex flex-grow justify-center items-center space-x-5 lg:space-x-8">[\s\S]*?<\/nav>/;
const newNav = `<nav className="hidden md:flex flex-grow justify-center items-center space-x-5 lg:space-x-8">
            <Link 
              to="/services"
              className="text-[14px] font-medium text-off-white hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/programs"
              className="text-[14px] font-medium text-off-white hover:text-white transition-colors"
            >
              Programs
            </Link>
            <Link 
              to="/tools"
              className="text-[14px] font-medium text-off-white hover:text-white transition-colors"
            >
              Tools
            </Link>
            <Link 
              to="/blog"
              className="text-[14px] font-medium text-off-white hover:text-white transition-colors"
            >
              Blog
            </Link>
          </nav>`;

layout = layout.replace(navRegex, newNav);

// Update mobile nav
const mobileNavRegex = /{?\/\* Mobile Services Accordion \*\/}?[\s\S]*?(?=<Link onClick=\{\(\) => setIsMenuOpen\(false\)\} to="\/programs")/m;

const newMobileNav = `<Link onClick={() => setIsMenuOpen(false)} to="/services" className="h-[56px] flex items-center px-6 text-[20px] font-semibold text-white hover:bg-navy transition-colors border-l-3 border-transparent hover:border-orange-burnt">
             Services
           </Link>
           `;

layout = layout.replace(mobileNavRegex, newMobileNav);

fs.writeFileSync('components/Layout.tsx', layout);
