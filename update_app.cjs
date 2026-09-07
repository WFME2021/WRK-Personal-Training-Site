const fs = require('fs');
let content = fs.readFileSync('App.tsx', 'utf-8');

// Add import Toolkit
content = content.replace("import { Contact } from './pages/Contact';", "import { Contact } from './pages/Contact';\nimport { Toolkit } from './pages/Toolkit';");

// Replace <Navigate> for personal training and online coaching
content = content.replace('<Route path="/personal-training" element={<Navigate to="/services" replace />} />', '<Route path="/personal-training" element={<PersonalTraining />} />');
content = content.replace('<Route path="/online-coaching" element={<Navigate to="/services" replace />} />', '<Route path="/online-coaching" element={<OnlineCoaching />} />');

// Add Toolkit route
content = content.replace('<Route path="/services" element={<Services />} />', '<Route path="/services" element={<Services />} />\n            <Route path="/toolkit" element={<Toolkit />} />');

fs.writeFileSync('App.tsx', content);
