const fs = require('fs');
let code = fs.readFileSync('App.tsx', 'utf-8');

code = code.replace(
  /const App: React\.FC = \(\) => {/,
  `const App: React.FC<{ initialData?: any }> = ({ initialData }) => {`
);

code = code.replace(
  /<ContentProvider>/,
  `<ContentProvider initialData={initialData}>`
);

fs.writeFileSync('App.tsx', code);
console.log('App patched.');
