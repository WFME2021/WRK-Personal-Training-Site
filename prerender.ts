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
import { ENABLE_SUMMER_MOMENTUM, ENABLE_SELF_GUIDED_PLANS } from './constants.ts';
import { SELF_GUIDED_PLANS } from './src/data/selfGuidedPlans.ts';

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
    '/for-referrers',
    '/glp-1',
    '/coaching',
    '/programs',
    '/studio',
    '/online',
    '/personal-training',
    '/online-coaching',
    '/toolkit',
    '/glp1-toolkit',
    '/assessment',
    '/results',
    '/book',
    '/contact',
    '/about',
    '/resources',
    '/tools',
    '/tools/tdee-calculator',
    '/tools/protein-calculator',
    '/tools/hydration-calculator',
    '/articles',
    '/blog',
    ...(ENABLE_SUMMER_MOMENTUM ? ['/summer-momentum'] : []),
    ...(ENABLE_SELF_GUIDED_PLANS ? ['/plans', ...SELF_GUIDED_PLANS.map(p => `/plans/${p.slug}`)] : [])
  ];
  
  // Add blog routes
  initialBlogs.forEach(blog => {
    routes.push(`/blog/${blog.slug}`);
  });
  
  for (const url of routes) {
    let title = "GLP-1 Fitness Coach | Strength & Fitness Coaching | WRK Personal Training";
    let desc = "Hire a dedicated GLP-1 Fitness Coach in Christchurch. We provide specialist strength & fitness coaching to preserve muscle and build sustainable habits during medical weight loss.";
    
        if (url === '/programs') {
      title = "How We Work Together | Coaching & Self-Guided Plans | WRK Personal Training";
      desc = "Three practical ways to train with WRK Personal Training: 1:1 Studio Coaching in Addington, Christchurch, 1:1 Online Coaching, or structured 6–12 week Self-Guided Training Plans.";
    } else if (url === '/toolkit') {
      title = "GLP-1 Workout & Nutrition Toolkit | WRK Personal Training";
      desc = "Download the comprehensive GLP-1 toolkit: gym and home workout templates, high-protein meal guides, and medication side-effect navigation for $29.";
    } else if (url === '/online-coaching' || url === '/online') {
      title = "Online GLP-1 Fitness Coach | Muscle Preservation & Strength | WRK";
      desc = "Specialized online coaching for GLP-1 patients worldwide. Preserve muscle, overcome fatigue, and build lasting strength. Apply for remote coaching.";
    } else if (url === '/personal-training' || url === '/studio') {
      title = "Personal Trainer Christchurch | Semi-Private Coaching | WRK";
      desc = "Skip crowded Christchurch gyms. Train in our quiet Addington studio with joint-safe, coach-led strength training. Free on-site parking. Book a consult.";
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
    } else if (url === '/glp-1') {
      title = "GLP-1 Strength & Lifestyle Support | Christchurch & Online | WRK Personal Training";
      desc = "Practical strength training, simple protein habits, and joint-friendly coaching for adults on GLP-1 medications in Christchurch and online across New Zealand.";
    } else if (url === '/glp1-toolkit') {
      title = "The WRK GLP-1 App Toolkit ($29 NZD) | WRK Personal Training";
      desc = "A practical starter toolkit inside the WRK app with structured strength sessions, video demos, and everyday food guidance—one-off $29 NZD access.";
    } else if (url === '/coaching') {
      title = "1:1 Coaching | Studio & Online | WRK Personal Training";
      desc = "Hands-on 1:1 coaching in Addington, Christchurch or online through the WRK app—built around your body, your schedule, and real life.";
    } else if (url === '/book') {
      title = "Book a Relaxed 15-Minute Chat | WRK Personal Training Christchurch";
      desc = "Have a quick, zero-pressure 15-minute chat with Hayden about 1:1 studio coaching in Addington, online coaching, or where to start.";
    } else if (url === '/articles') {
      title = "Articles & Guides | Training, Nutrition & Strength | WRK";
      desc = "Read WRK Personal Training articles for plain-English guidance on strength training, muscle preservation, nutrition, and sustainable habits.";
    } else if (url.match(/\/blog\/([^\/]+)/)) {
      const slug = url.match(/\/blog\/([^\/]+)/)[1];
      const post = initialBlogs.find(p => p.slug === slug);
      if (slug === 'glp-1-strength-training') {
        title = "GLP-1 Strength Training: Stop Sarcopenia & Fatigue | WRK";
        desc = "Up to 40% of GLP-1 weight loss comes from muscle. Protect your metabolic rate with sensible compound lifting. Start lifting smarter today.";
      } else if (post) {
        title = post.seoTitle || post.title || (slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + " | WRK");
        desc = post.seoDescription || post.excerpt || ("Read our latest insights on " + title + " from WRK Personal Training.");
      } else {
        title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + " | WRK";
        desc = "Read our latest insights on " + title + " from WRK Personal Training.";
      }
    } else if (url === '/blog') {
      title = "GLP-1 Fitness Blog | Training, Nutrition & Weight Loss | WRK";
      desc = "Read the WRK GLP-1 Fitness Blog for evidence-informed guidance on strength training, muscle preservation, nutrition, and sustainable habits after weight loss.";
    } else if (url === '/summer-momentum') {
      title = "Summer Momentum | Sustainable Movement & Festive Coping Plan | WRK";
      desc = "Heading into the holidays on a GLP-1? Summer Momentum (30 Nov – 8 Jan) is a calm 6-week sustainable movement and festive coping plan for $149 NZD.";
    } else if (url === '/plans') {
      title = "Self-Guided Training Plans | 6–12 Week Programmes | WRK Personal Training";
      desc = "Structured 6- to 12-week self-guided strength, home, gym, and running programmes delivered in the WRK app. Every plan is capped at 3 to 4 sessions per week.";
    } else if (url.startsWith('/plans/')) {
      const planSlug = url.replace('/plans/', '');
      const planMatch = SELF_GUIDED_PLANS.find(p => p.slug === planSlug);
      if (planMatch) {
        title = `${planMatch.title} | Self-Guided Training Plan | WRK Personal Training`;
        desc = `${planMatch.summary} ${planMatch.durationBadge} delivered in the WRK app.`;
      }
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
    let ogTags = `
      <link rel="canonical" href="https://www.wrkpersonaltraining.co.nz${url === '/' ? '' : url}" />
      <meta property="og:title" content="${title}" />
      <meta property="og:description" content="${desc}" />
      <meta property="og:url" content="https://www.wrkpersonaltraining.co.nz${url}" />
      <meta property="og:image" content="https://www.wrkpersonaltraining.co.nz/images/wrk-social-preview.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${title}" />
      <meta name="twitter:description" content="${desc}" />
    `;
    if (url === '/personal-training' || url === '/studio') {
      const localGymSchema = {
        "@context": "https://schema.org",
        "@type": "ExerciseGym",
        "name": "WRK Personal Training",
        "image": "https://wrkpersonaltraining.co.nz/logo.png",
        "url": "https://wrkpersonaltraining.co.nz/personal-training",
        "telephone": "+64-21-393-160",
        "email": "info@wrkpersonaltraining.co.nz",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1/12 Show Place, Addington (located inside Get Me Fitter)",
          "addressLocality": "Christchurch",
          "addressRegion": "Canterbury",
          "postalCode": "8024",
          "addressCountry": "NZ"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -43.5434,
          "longitude": 172.6053
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "06:00",
            "closes": "20:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "07:00",
            "closes": "13:00"
          }
        ],
        "areaServed": [
          {
            "@type": "City",
            "name": "Christchurch"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Addington"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Riccarton"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Spreydon"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Halswell"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Cashmere"
          }
        ]
      };
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where is WRK Personal Training located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our private personal training studio is located in Addington, Christchurch. We offer one-on-one and semi-private coaching away from crowded commercial gyms."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer nutrition coaching alongside training?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every personal training membership includes comprehensive nutrition guidance, macronutrient targets, and habit tracking tailored to your specific body composition goals."
            }
          },
          {
            "@type": "Question",
            "name": "Do you support clients on GLP-1 medications or navigating menopause?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialize in evidence-based resistance training and high-protein nutrition strategies designed to preserve lean muscle tissue, enhance metabolic rate, and improve strength for clients on GLP-1s or managing midlife hormonal shifts."
            }
          },
          {
            "@type": "Question",
            "name": "I'm completely new to lifting weights. Is this suitable for beginners?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Most of our clients are not gym veterans. Because our facility is semi-private, you learn the foundations of movement and lifting mechanics in a calm, zero-judgment space at your own pace."
            }
          },
          {
            "@type": "Question",
            "name": "What happens during the initial consultation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We meet at the Addington facility for a relaxed, 20-minute chat. We discuss your background, health goals, take a quick look at movement mechanics, and decide together if the setup is the right fit for you."
            }
          }
        ]
      };
      ogTags += `\n    <script type="application/ld+json">${JSON.stringify(localGymSchema)}</script>`;
      ogTags += `\n    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`;
    }
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
