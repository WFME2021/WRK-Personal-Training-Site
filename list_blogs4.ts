import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseConfig from './firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId || '(default)');

async function main() {
  const snapshot = await getDocs(collection(db, 'blogs'));
  snapshot.docs.forEach(doc => {
    const data = doc.data();
    console.log(`${doc.id} - Status: ${data.status} - Title: ${data.title}`);
  });
  process.exit(0);
}
main().catch(console.error);
