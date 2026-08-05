import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase.ts';

const NEW_AVATAR = 'https://i.postimg.cc/ZYHDT3kr/Screen-Shot-2026-06-23-at-2-27-18-PM.png';
const NEW_BIO = 'With over 20 years of experience coaching high performers, H. Richards delivers precision training frameworks built on evidence and practical application. His approach cuts through the noise to help you achieve sustainable results, backed by consistently excellent 5-star client reviews.';
const NEW_ROLE = 'Personal Trainer';
const NEW_NAME = 'H. Richards';

async function updateBlogs() {
  const snapshot = await getDocs(collection(db, 'blogs'));
  console.log(`Found ${snapshot.docs.length} blogs to update.`);
  let updated = 0;
  for (const docSnapshot of snapshot.docs) {
    const data = docSnapshot.data();
    if (data.author) {
      data.author.name = NEW_NAME;
      data.author.role = NEW_ROLE;
      data.author.bio = NEW_BIO;
      data.author.avatarUrl = NEW_AVATAR;
      await setDoc(doc(db, 'blogs', docSnapshot.id), data);
      updated++;
    } else {
        data.author = {
            name: NEW_NAME,
            role: NEW_ROLE,
            bio: NEW_BIO,
            avatarUrl: NEW_AVATAR
        };
        await setDoc(doc(db, 'blogs', docSnapshot.id), data);
        updated++;
    }
  }
  console.log(`Updated ${updated} blogs.`);
  process.exit(0);
}

updateBlogs().catch(console.error);
