import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { readFileSync } from 'fs';
import { PAGE_CONTENT } from './data/pageContent';

const firebaseConfig = JSON.parse(readFileSync('./firebase-applet-config.json', 'utf-8'));
const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

async function sync() {
  for (const [pageId, pageData] of Object.entries(PAGE_CONTENT)) {
    await setDoc(doc(db, 'pages', pageId), pageData);
    console.log(`Synced ${pageId}`);
  }
  console.log("Done");
  process.exit(0);
}

sync().catch(console.error);
