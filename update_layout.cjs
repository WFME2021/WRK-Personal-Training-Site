const fs = require('fs');
let content = fs.readFileSync('components/Layout.tsx', 'utf-8');

// The new nav items
const desktopNav = `          <nav className="hidden md:flex flex-grow justify-end items-center space-x-6 lg:space-x-8">
            <Link to="/about" className="text-[14px] font-medium text-[#2C3539]/80 hover:text-[#2C3539] transition-colors">About</Link>
            <Link to="/online-coaching" className="text-[14px] font-medium text-[#2C3539]/80 hover:text-[#2C3539] transition-colors">Online Coaching</Link>
            <Link to="/personal-training" className="text-[14px] font-medium text-[#2C3539]/80 hover:text-[#2C3539] transition-colors">In-Person PT</Link>
            <Link to="/programs" className="text-[14px] font-medium text-[#2C3539]/80 hover:text-[#2C3539] transition-colors">Programs</Link>
            <Link to="/toolkit" className="text-[14px] font-medium text-teal-600 hover:text-teal-700 transition-colors">Toolkit</Link>
            <Link to="/tools" className="text-[14px] font-medium text-[#2C3539]/80 hover:text-[#2C3539] transition-colors">Tools</Link>
            <Link to="/blog" className="text-[14px] font-medium text-[#2C3539]/80 hover:text-[#2C3539] transition-colors">Blog</Link>
            <Link to="/contact" className="text-[14px] font-medium text-[#2C3539]/80 hover:text-[#2C3539] transition-colors">Contact</Link>
          </nav>`;

const desktopNavRegex = /<nav className="hidden md:flex flex-grow justify-end items-center space-x-8">[\s\S]*?<\/nav>/;
content = content.replace(desktopNavRegex, desktopNav);

const mobileNav = `<nav className="flex flex-col px-8 py-8 space-y-6 flex-grow">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-[#2C3539] border-b border-neutral-100 pb-2">Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-[#2C3539] border-b border-neutral-100 pb-2">About</Link>
          <Link to="/online-coaching" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-[#2C3539] border-b border-neutral-100 pb-2">Online Coaching</Link>
          <Link to="/personal-training" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-[#2C3539] border-b border-neutral-100 pb-2">In-Person PT</Link>
          <Link to="/programs" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-[#2C3539] border-b border-neutral-100 pb-2">Programs</Link>
          <Link to="/toolkit" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-teal-600 border-b border-neutral-100 pb-2">Toolkit</Link>
          <Link to="/tools" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-[#2C3539] border-b border-neutral-100 pb-2">Tools</Link>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-[#2C3539] border-b border-neutral-100 pb-2">Blog</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-[#2C3539] border-b border-neutral-100 pb-2">Contact</Link>
        </nav>`;

const mobileNavRegex = /<nav className="flex flex-col px-8 py-8 space-y-6 flex-grow">[\s\S]*?<\/nav>/;
content = content.replace(mobileNavRegex, mobileNav);

// Update footer navigation
const footerNav = `<div className="flex flex-col space-y-4">
              <h4 className="font-serif text-[24px] text-white">Services</h4>
              <Link to="/online-coaching" className="text-[#A1A1AA] hover:text-white transition-colors">Online Coaching</Link>
              <Link to="/personal-training" className="text-[#A1A1AA] hover:text-white transition-colors">In-Person PT</Link>
              <Link to="/programs" className="text-[#A1A1AA] hover:text-white transition-colors">Programs</Link>
              <Link to="/toolkit" className="text-teal-400 hover:text-teal-300 transition-colors">GLP-1 Toolkit</Link>
              <Link to="/tools" className="text-[#A1A1AA] hover:text-white transition-colors">Free Tools</Link>
            </div>
            
            <div className="flex flex-col space-y-4">
              <h4 className="font-serif text-[24px] text-white">Company</h4>
              <Link to="/about" className="text-[#A1A1AA] hover:text-white transition-colors">About</Link>
              <Link to="/blog" className="text-[#A1A1AA] hover:text-white transition-colors">Articles</Link>
              <Link to="/contact" className="text-[#A1A1AA] hover:text-white transition-colors">Contact</Link>
            </div>`;

const footerRegex = /<div className="flex flex-col space-y-4">\s*<h4 className="font-serif text-\[24px\] text-white">Services<\/h4>[\s\S]*?<Link to="\/contact" className="text-\[#A1A1AA\] hover:text-white transition-colors">Contact<\/Link>\s*<\/div>/;
content = content.replace(footerRegex, footerNav);

fs.writeFileSync('components/Layout.tsx', content);
