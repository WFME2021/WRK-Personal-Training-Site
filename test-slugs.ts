import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase.ts';
async function test() {
  const snapshot = await getDocs(collection(db, 'blogs'));
  snapshot.forEach(doc => console.log(doc.data().slug));
}
test().catch(console.error);
