import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import React from 'react';
import App from './App.tsx';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase.ts';

async function run() {
  const snapshot = await getDocs(collection(db, 'blogs'));
  const blogs = [];
  snapshot.forEach(doc => {
    const post = doc.data();
    if (post.slug && post.slug.startsWith('/')) post.slug = post.slug.substring(1);
    blogs.push(post);
  });
  const initialData = { blogs };

  const appHtml = renderToString(
    React.createElement(
      StaticRouter,
      { location: "/blog/is-it-worth-hiring-a-personal-trainer" },
      React.createElement(App, { initialData })
    )
  );
  
  const mainMatch = appHtml.match(/<main[^>]*>.*?<\/main>/s);
  if (mainMatch) {
    console.log("Main length:", mainMatch[0].length);
    console.log("Main content:", mainMatch[0].substring(0, 100));
  }
}
run().catch(console.error);
