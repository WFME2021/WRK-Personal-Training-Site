const fs = require('fs');
let content = fs.readFileSync('firebase.ts', 'utf-8');
content = content.replace(
  /export const db = initializeFirestore\(app, \{\s*experimentalAutoDetectLongPolling: true,\s*databaseId: firebaseConfig\.firestoreDatabaseId \|\| '\(default\)'\s*\}\);/,
  "export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId || '(default)');"
);
fs.writeFileSync('firebase.ts', content);
