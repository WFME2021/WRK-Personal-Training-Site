const fs = require('fs');
let code = fs.readFileSync('App.tsx', 'utf8');

// Ensure correct imports
if(!code.includes('import { Services }')) {
    code = code.replace("import { Programs } from './pages/Programs';", "import { Programs } from './pages/Programs';\nimport { Services } from './pages/Services';");
}

code = code.replace(/<Route path="\/services" element=\{<Programs \/>} \/>/g, '<Route path="/services" element={<Services />} />');

fs.writeFileSync('App.tsx', code);
