import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { readFileSync } from 'fs';

const firebaseConfig = JSON.parse(readFileSync('./firebase-applet-config.json', 'utf-8'));
const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

async function check() {
  const querySnapshot = await getDocs(collection(db, 'pages'));
  const pages: any = {};
  querySnapshot.forEach((doc) => {
    pages[doc.id] = doc.data();
  });
  console.log(JSON.stringify(pages.tools, null, 2));
  process.exit(0);
}
check();
