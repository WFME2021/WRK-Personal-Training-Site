const fs = require('fs');

// Patch App.tsx
let appContent = fs.readFileSync('App.tsx', 'utf8');
if (!appContent.includes('import { CouchTo5km }')) {
  appContent = appContent.replace(
    "import { Challenge42 } from './pages/Challenge42';",
    "import { Challenge42 } from './pages/Challenge42';\nimport { CouchTo5km } from './pages/CouchTo5km';"
  );
  appContent = appContent.replace(
    '<Route path="/fitness-challenge-nz" element={<Challenge42 />} />',
    '<Route path="/fitness-challenge-nz" element={<Challenge42 />} />\n            <Route path="/couch-to-5km" element={<CouchTo5km />} />'
  );
  fs.writeFileSync('App.tsx', appContent);
  console.log('App.tsx patched successfully');
}

// Patch server.ts
let serverContent = fs.readFileSync('server.ts', 'utf8');
if (!serverContent.includes("else if (url.includes('/couch-to-5km'))")) {
  serverContent = serverContent.replace(
    "      } else if (url.includes('/fitness-challenge-nz')) {",
    "      } else if (url.includes('/couch-to-5km')) {\n        title = \"Couch to 5km NZ | 8-Week Beginner Running Plan | WRK\";\n        desc = \"An 8-week couch to 5km running plan built for beginners over 35. Run plan, plus strength, stretching, and nutrition guidance in the WRK app. $27, start anytime.\";\n      } else if (url.includes('/fitness-challenge-nz')) {"
  );
  fs.writeFileSync('server.ts', serverContent);
  console.log('server.ts patched successfully');
}
