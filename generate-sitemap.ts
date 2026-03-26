import fs from 'fs';
import path from 'path';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseConfig from './firebase-applet-config.json' assert { type: 'json' };

const generateSitemap = async () => {
  try {
    let blogPosts: any[] = [];
    
    // Fetch blogs from Firestore using JS SDK
    try {
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.status !== 'draft' && data.slug) {
          blogPosts.push(data);
        }
      });
    } catch (err) {
      console.error("Error fetching from Firestore:", err);
    }

    const baseUrl = 'https://www.wrkpersonaltraining.co.nz';
    const staticPages = [
      '',
      '/personal-trainer-christchurch',
      '/personal-training-christchurch-philosophy',
      '/assessment',
      '/results',
      '/contact',
      '/services',
      '/online-personal-training-nz',
      '/workplace-wellness-program-nz',
      '/fitness-challenge-nz',
      '/blog',
      '/tools',
      '/calorie-calculator',
      '/tools/1rm-estimator'
    ];

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Add static pages
    staticPages.forEach(page => {
      sitemap += `  <url>\n`;
      sitemap += `    <loc>${baseUrl}${page}</loc>\n`;
      sitemap += `    <changefreq>${page === '' || page === '/blog' ? 'weekly' : 'monthly'}</changefreq>\n`;
      sitemap += `    <priority>${page === '' ? '1.0' : '0.8'}</priority>\n`;
      sitemap += `  </url>\n`;
    });

    // Add blog posts
    blogPosts.forEach((post: any) => {
      sitemap += `  <url>\n`;
      sitemap += `    <loc>${baseUrl}/blog/${post.slug}</loc>\n`;
      if (post.date) {
        try {
          sitemap += `    <lastmod>${new Date(post.date).toISOString()}</lastmod>\n`;
        } catch (e) {
          // Ignore invalid dates
        }
      }
      sitemap += `    <changefreq>monthly</changefreq>\n`;
      sitemap += `    <priority>0.7</priority>\n`;
      sitemap += `  </url>\n`;
    });

    sitemap += `</urlset>`;

    // Write to both public (for dev) and dist (for prod)
    if (fs.existsSync(path.resolve('public'))) {
      fs.writeFileSync(path.resolve('public/sitemap.xml'), sitemap);
    }
    if (fs.existsSync(path.resolve('dist'))) {
      fs.writeFileSync(path.resolve('dist/sitemap.xml'), sitemap);
    }
    
    console.log('Sitemap generated successfully.');
    process.exit(0);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    process.exit(1);
  }
};

generateSitemap();
