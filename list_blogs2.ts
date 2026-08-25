import { initializeApp } from 'firebase/app';
import { initializeFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseConfig from './firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  databaseId: firebaseConfig.firestoreDatabaseId || '(default)'
});

async function main() {
  const snapshot = await getDocs(collection(db, 'blogs'));
  console.log(`Found ${snapshot.docs.length} blogs.`);
  snapshot.docs.forEach(doc => {
    console.log(doc.id, doc.data().title);
  });
  process.exit(0);
}
main().catch(console.error);
