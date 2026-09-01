import { initializeApp } from 'firebase/app';
import { getFirestore, doc, updateDoc } from 'firebase/firestore/lite';
import firebaseConfig from './firebase-applet-config.json' assert { type: 'json' };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId || '(default)');
async function run() {
  await updateDoc(doc(db, 'blogs', 'is-a-personal-trainer-worth-it-glp-1`'), {
    slug: 'is-a-personal-trainer-worth-it-glp-1'
  });
  console.log('Fixed slug');
}
run();
