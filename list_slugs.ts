import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebaseConfig from './firebase-applet-config.json' assert { type: 'json' };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId || '(default)');
async function run() {
  const querySnapshot = await getDocs(collection(db, 'blogs'));
  querySnapshot.forEach((doc) => {
    console.log(doc.data().slug);
  });
}
run();
