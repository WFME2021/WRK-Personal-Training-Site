const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

code = code.replace(
  /import express from "express";/,
  `import express from "express";\nimport { collection, getDocs } from 'firebase/firestore';\nimport { db } from './firebase.ts';`
);

code = code.replace(
  /console.error\('Error fetching blogs for SSR:', e\);\n\s*return \[\{ slug: 'error', title: e.message \}\];/,
  `console.error('Error fetching blogs for SSR:', e);\n      return [];`
);

fs.writeFileSync('server.ts', code);
