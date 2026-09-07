import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where, updateDoc } from 'firebase/firestore/lite';
import fs from 'fs';
const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf-8'));
const app = initializeApp(config);
const db = getFirestore(app, config.firestoreDatabaseId || '(default)');

async function run() {
  const q = query(collection(db, 'blogs'), where('slug', 'in', ['glp-1-strength-training', 'glp1-protein-intake-guide', 'can-you-lose-weight-drink-alcohol-glp-1']));
  const snapshot = await getDocs(q);
  
  for (const docSnap of snapshot.docs) {
    let content = docSnap.data().content;
    
    // Replace old services link
    content = content.replace(/\]\(https:\/\/www\.wrkpersonaltraining\.co\.nz\/services\)/g, '](/online-coaching)');
    content = content.replace(/\]\(https:\/\/www\.wrkpersonaltraining\.co\.nz\/assessment\)/g, '](/online-coaching)');
    
    // Check if it already has a CTA banner for online coaching
    if (!content.includes('](/online-coaching)')) {
      // Add a standard CTA block right before the References or Medical Disclaimer
      const ctaBlock = "\n\n> **Need help preserving your muscle?**\n> [Apply for Online Coaching →](/online-coaching)\n\n";
      if (content.includes('## References')) {
         content = content.replace('## References', ctaBlock + '## References');
      } else if (content.includes('> **Medical Disclaimer')) {
         content = content.replace('> **Medical Disclaimer', ctaBlock + '> **Medical Disclaimer');
      } else {
         content += ctaBlock;
      }
    } else {
      // Ensure the text of the assessment CTA is updated if it was an assessment CTA
      content = content.replace(/\[Take the Free GLP-1 Assessment →\]/g, '[Apply for Online Coaching →]');
    }

    console.log(`Updating ${docSnap.data().slug}...`);
    await updateDoc(docSnap.ref, { content });
  }
}
run();
