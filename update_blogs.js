import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where, updateDoc, doc } from 'firebase/firestore/lite';
import fs from 'fs';
const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf-8'));
const app = initializeApp(config);
const db = getFirestore(app, config.firestoreDatabaseId || '(default)');

async function run() {
  const q = query(collection(db, 'blogs'), where('slug', 'in', ['glp-1-strength-training', 'glp1-protein-intake-guide', 'can-you-lose-weight-drink-alcohol-glp-1']));
  const snapshot = await getDocs(q);
  
  for (const docSnap of snapshot.docs) {
    let content = docSnap.data().content;
    
    // Look for anything that links to /services or /personal-training or /contact that is a CTA
    // E.g. [Start Coaching](/services) -> [Start Coaching](/online-coaching)
    // E.g. [Start the 12-Week Programme](/services) -> [Start the 12-Week Programme](/online-coaching)
    
    // Just find any link to /services or /personal-training inside a blockquote or standard CTA
    let updated = content.replace(/\]\(\/services\)/g, '](/online-coaching)');
    updated = updated.replace(/\]\(\/personal-training\)/g, '](/online-coaching)');
    
    if (updated !== content) {
       console.log(`Updating ${docSnap.data().slug}...`);
       await updateDoc(docSnap.ref, { content: updated });
    } else {
       console.log(`No changes for ${docSnap.data().slug}.`);
    }
  }
}
run();
