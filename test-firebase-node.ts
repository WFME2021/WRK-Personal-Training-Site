import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase.ts';
async function test() {
  const snapshot = await getDocs(collection(db, 'blogs'));
  console.log("Blogs count:", snapshot.docs.length);
}
test().catch(console.error);
