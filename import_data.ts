import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, writeBatch } from 'firebase/firestore';
import fs from 'fs';
import path from 'path';

// Import the Firebase configuration
import firebaseConfig from './firebase-applet-config.json' assert { type: 'json' };

// Initialize Firebase SDK
const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

async function importData() {
  try {
    const dataPath = path.resolve('./fetched_content.json');
    const fileContent = fs.readFileSync(dataPath, 'utf-8');
    const data = JSON.parse(fileContent);

    const batch = writeBatch(db);

    if (data.blogs && Array.isArray(data.blogs)) {
      data.blogs.forEach((post) => {
        const docRef = doc(db, 'blogs', post.id);
        batch.set(docRef, post);
      });
      console.log(`Prepared ${data.blogs.length} blogs for import.`);
    }

    if (data.pages) {
      Object.entries(data.pages).forEach(([pageId, pageData]) => {
        const docRef = doc(db, 'pages', pageId);
        batch.set(docRef, pageData);
      });
      console.log(`Prepared ${Object.keys(data.pages).length} pages for import.`);
    }

    await batch.commit();
    console.log('Successfully imported data to Firestore!');
    process.exit(0);
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
}

importData();
