import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore/lite';
import fs from 'fs';
const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf-8'));
const app = initializeApp(config);
const db = getFirestore(app, config.firestoreDatabaseId || '(default)');

async function run() {
  const q = query(collection(db, 'blogs'), where('slug', 'in', ['glp-1-strength-training', 'glp1-protein-intake-guide', 'can-you-lose-weight-drink-alcohol-glp-1']));
  const snapshot = await getDocs(q);
  snapshot.forEach(docSnap => {
    let content = docSnap.data().content;
    const matches = content.match(/\[.*?\]\(.*?\)/g);
    console.log(docSnap.data().slug, matches);
  });
}
run();
