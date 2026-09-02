import fs from 'fs';
import path from 'path';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebaseConfig from './firebase-applet-config.json' assert { type: 'json' };

// We need to import the built App and renderToString
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import React from 'react';
import App from './App.tsx';

// Copy the cached blog fetching logic
const getCachedBlogs = async () => {
  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app, firebaseConfig.firestoreDatabaseId || '(default)');
    const querySnapshot = await getDocs(collection(db, 'blogs'));
    let blogPosts: any[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.status !== 'draft' && data.slug) {
        blogPosts.push(data);
      }
    });
    return blogPosts;
  } catch (err) {
    console.error("Error fetching from Firestore:", err);
    return [];
  }
};

const run = async () => {
  const initialBlogs = await getCachedBlogs();
  const initialData = { blogs: initialBlogs };
  
  const templateHtml = fs.readFileSync(path.resolve("dist/index.html"), "utf-8");
  
  // Save a copy of the generic Vite template as the fallback for Vercel
  // This prevents the homepage's canonical tag from bleeding into un-prerendered dynamic routes
  fs.writeFileSync(path.resolve("dist/fallback.html"), templateHtml);
  
  const routes = [
    '/',
    '/programs',
    '/personal-training',
    '/online-coaching',
    '/assessment',
    '/results',
    '/contact',
    '/about',
    '/resources',
    '/tools',
    '/tools/tdee-calculator',
    '/tools/protein-calculator',
    '/tools/hydration-calculator',
    '/blog'
  ];
  
  // Add blog routes
  initialBlogs.forEach(blog => {
    routes.push(`/blog/${blog.slug}`);
  });
  
  for (const url of routes) {
    let title = "GLP-1 Fitness Coach | Strength & Fitness Coaching | WRK Personal Training";
    let desc = "Hire a dedicated GLP-1 Fitness Coach in Christchurch. We provide specialist strength & fitness coaching to preserve muscle and build sustainable habits during medical weight loss.";
    
    if (url === '/programs') {
      title = "GLP-1 Fitness Programs | WRK Personal Training";
      desc = "Explore our 12-week GLP-1 Fitness Programs. Structured training pathways built around your active weight loss, maintenance, or long-term habit building phases.";
    } else if (url === '/services') {
      title = "GLP-1 Fitness Coaching Programs | WRK Personal Training";
      desc = "Compare our GLP-1 Fitness Coaching Programs. Choose between our in-person training in Christchurch or our comprehensive 12-week online coaching pathways.";
    } else if (url === '/online-coaching') {
      title = "Online Fitness Coaching & Support | Personal Trainers for GLP-1 Patients";
      desc = "Expert Online Fitness Coaching tailored for GLP-1 patients. Work with specialist personal trainers to protect your muscle mass from anywhere in New Zealand.";
    } else if (url === '/personal-training') {
      title = "In-Person Personal Training | GLP-1 Exercise Program Christchurch";
      desc = "Join our specialist GLP-1 Exercise Program in Christchurch. Safe, effective 30-minute in-person personal training sessions tailored for medical weight loss support.";
    } else if (url === '/assessment') {
      title = "GLP-1 Fitness Assessment | WRK Personal Training";
      desc = "Take our free GLP-1 Fitness Assessment to evaluate your current routine, identify muscle loss risks, and receive a customized 12-week training recommendation.";
    } else if (url === '/contact') {
      title = "Contact GLP-1 Fitness Coach | WRK Personal Training";
      desc = "Contact a GLP-1 Fitness Coach today to discuss your medical weight loss journey, ask questions about our 12-week pathways, or book an initial consultation.";
    } else if (url === '/about') {
      title = "About WRK | Medical Weight Loss & Muscle Preservation Fitness Coaching";
      desc = "Discover our approach to Medical Weight Loss & Muscle Preservation Fitness Coaching. Learn how WRK bridges the gap between clinical treatments and real-world strength.";
    } else if (url === '/resources') {
      title = "Clinical Evidence & Resources | WRK Personal Training";
      desc = "Review the Clinical Evidence & Resources backing our GLP-1 training methodologies. Explore medical studies on muscle preservation and metabolic support.";
    } else if (url === '/tools') {
      title = "GLP-1 Tools & Calculators | WRK Personal Training";
      desc = "Access our free GLP-1 Tools & Calculators, including hydration, protein, and macro estimators designed specifically for patients on weight loss medication.";
    } else if (url.includes('/tdee-calculator')) {
      title = "GLP-1 Calorie & Macro Calculator | WRK Personal Training";
      desc = "Use our GLP-1 Calorie & Macro Calculator to estimate your daily energy needs and personalize your protein, carbohydrate, and fat targets during weight loss.";
    } else if (url.includes('/protein-calculator')) {
      title = "GLP-1 Protein Calculator | WRK Personal Training";
      desc = "Use our GLP-1 Protein Calculator to find your precise daily protein targets to support muscle retention and strength during your medical weight loss journey.";
    } else if (url.includes('/hydration-calculator')) {
      title = "GLP-1 Hydration Calculator: Estimate Your Daily Fluid Needs | WRK";
      desc = "Use the WRK GLP-1 Hydration Calculator to estimate your daily fluid needs and enhance your medical weight loss results with proper water intake.";
    } else if (url.includes('/results') || url.includes('/assessment/result')) {
      title = "Your Muscular Preservation Report | WRK";
      desc = "Review your GLP-1 Fitness Assessment results. Access your personalized 12-week strength training recommendation to protect muscle during medical weight loss.";
    } else if (url.match(/\/blog\/([^\/]+)/)) {
      const slug = url.match(/\/blog\/([^\/]+)/)[1];
      const post = initialBlogs.find(p => p.slug === slug);
      if (post) {
        title = post.seoTitle || post.title || (slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + " | WRK");
        desc = post.seoDescription || post.excerpt || ("Read our latest insights on " + title + " from WRK Personal Training.");
      } else {
        title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + " | WRK";
        desc = "Read our latest insights on " + title + " from WRK Personal Training.";
      }
    } else if (url === '/blog') {
      title = "GLP-1 Fitness Blog | Training, Nutrition & Weight Loss | WRK";
      desc = "Read the WRK GLP-1 Fitness Blog for evidence-informed guidance on strength training, muscle preservation, nutrition, and sustainable habits after weight loss.";
    }
    
    let html = templateHtml.replace(
      /<title>(.*?)<\/title>/,
      `<title>${title}</title>`
    );
    html = html.replace(
      /<meta name="description" content="(.*?)" \/>/,
      `<meta name="description" content="${desc}" />`
    );
    
    // Open graph tags
    const ogTags = `
      <link rel="canonical" href="https://www.wrkpersonaltraining.co.nz${url === '/' ? '' : url}" />
      <meta property="og:title" content="${title}" />
      <meta property="og:description" content="${desc}" />
      <meta property="og:url" content="https://www.wrkpersonaltraining.co.nz${url}" />
      <meta property="og:image" content="https://www.wrkpersonaltraining.co.nz/images/wrk-social-preview.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${title}" />
      <meta name="twitter:description" content="${desc}" />
    `;
    html = html.replace('</title>', `</title>\n${ogTags}`);
    
    try {
      const appHtml = renderToString(
        React.createElement(
          StaticRouter,
          { location: url },
          React.createElement(App, { initialData })
        )
      );
      
      const finalHtml = html.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div><script>window.__INITIAL_DATA__ = ${JSON.stringify(initialData).replace(/</g, '\\u003c')};</script>`
      );
      
      let filePath;
      if (url === '/') {
        filePath = 'dist/index.html';
      } else {
        const dirPath = path.dirname(`dist${url}`);
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }
        filePath = `dist${url}.html`;
      }
      fs.writeFileSync(filePath, finalHtml);
      console.log(`Pre-rendered: ${url}`);
    } catch (e) {
      console.error(`Error pre-rendering ${url}:`, e);
    }
  }
};

run().then(() => {
  console.log('Prerendering complete!');
  process.exit(0);
});
