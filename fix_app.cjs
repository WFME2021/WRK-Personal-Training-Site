const fs = require('fs');
let s = fs.readFileSync('App.tsx', 'utf8');

const target1 = '<Route path="/workplace-wellness-program-nz" element={<CorporateWellness />} />';
const replacement1 = '<Route path="/corporate-wellness" element={<CorporateWellness />} />';

const target2 = '<Route path="/corporate-wellness" element={<Navigate to="/workplace-wellness-program-nz" replace />} />';
const replacement2 = '<Route path="/workplace-wellness-program-nz" element={<Navigate to="/corporate-wellness" replace />} />';

if (s.includes(target1) && s.includes(target2)) {
  s = s.replace(target1, replacement1);
  s = s.replace(target2, replacement2);
  fs.writeFileSync('App.tsx', s);
  console.log('App.tsx updated');
} else {
  console.log('Targets not found');
}
