const fs = require('fs');

let server = fs.readFileSync('server.ts', 'utf8');

// Replace imports
server = server.replace(/import \{ collection, getDocs \} from 'firebase\/firestore';/, "import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';\nimport { initializeApp } from 'firebase/app';");
server = server.replace(/import \{ db \} from '\.\/firebase\.ts';/, "import firebaseConfig from './firebase-applet-config.json' with { type: 'json' };\nconst app = initializeApp(firebaseConfig);\nconst db = getFirestore(app, firebaseConfig.firestoreDatabaseId || '(default)');");

fs.writeFileSync('server.ts', server);

let sitemap = fs.readFileSync('generate-sitemap.ts', 'utf8');
sitemap = sitemap.replace(/import \{ initializeFirestore, collection, getDocs \} from 'firebase\/firestore';/, "import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';");
sitemap = sitemap.replace(/const db = initializeFirestore\(app, \{[\s\S]*?\}\);/, "const db = getFirestore(app, firebaseConfig.firestoreDatabaseId || '(default)');");
fs.writeFileSync('generate-sitemap.ts', sitemap);
console.log("Patched server.ts and generate-sitemap.ts for lite");
