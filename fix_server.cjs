const fs = require('fs');

let server = fs.readFileSync('server.ts', 'utf8');

// Replace the getDocs block in server.ts
server = server.replace(/const snapshot = await getDocs\(collection\(db, 'blogs'\)\);\s+const blogs = \[\];\s+snapshot\.forEach\(doc => \{\s+const post = doc\.data\(\);\s+if \(post\.slug && post\.slug\.startsWith\('\/'\)\) post\.slug = post\.slug\.substring\(1\);\s+blogs\.push\(post\);\s+\}\);/, `
      // Use REST API to avoid Firebase SDK connection issues in Node.js
      const fetch = require('node-fetch') || globalThis.fetch;
      const firebaseConfig = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf8'));
      const dbId = firebaseConfig.firestoreDatabaseId || '(default)';
      const url = \`https://firestore.googleapis.com/v1/projects/\${firebaseConfig.projectId}/databases/\${dbId}/documents/blogs?key=\${firebaseConfig.apiKey}\`;
      
      const res = await fetch(url);
      const data = await res.json();
      const blogs = [];
      if (data.documents) {
        data.documents.forEach(doc => {
          // simple parser for firestore REST format
          const post = {};
          if (doc.fields) {
            for (const [k, v] of Object.entries(doc.fields)) {
              if (v.stringValue !== undefined) post[k] = v.stringValue;
              else if (v.booleanValue !== undefined) post[k] = v.booleanValue;
              else if (v.integerValue !== undefined) post[k] = parseInt(v.integerValue);
              else if (v.mapValue) {
                post[k] = {};
                for (const [mk, mv] of Object.entries(v.mapValue.fields || {})) {
                   post[k][mk] = mv.stringValue !== undefined ? mv.stringValue : mv;
                }
              }
            }
          }
          if (post.slug && post.slug.startsWith('/')) post.slug = post.slug.substring(1);
          blogs.push(post);
        });
      }
`);

fs.writeFileSync('server.ts', server);

let sitemap = fs.readFileSync('generate-sitemap.ts', 'utf8');
sitemap = sitemap.replace(/const querySnapshot = await getDocs\(collection\(db, 'blogs'\)\);\s+querySnapshot\.forEach\(\(doc\) => \{\s+const data = doc\.data\(\);\s+if \(data\.status !== 'draft' && data\.slug\) \{\s+blogPosts\.push\(data\);\s+\}\s+\}\);/, `
      const dbId = firebaseConfig.firestoreDatabaseId || '(default)';
      const url = \`https://firestore.googleapis.com/v1/projects/\${firebaseConfig.projectId}/databases/\${dbId}/documents/blogs?key=\${firebaseConfig.apiKey}\`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.documents) {
        data.documents.forEach((doc: any) => {
          const post: any = {};
          if (doc.fields) {
            for (const [k, v] of Object.entries(doc.fields as Record<string, any>)) {
              if (v.stringValue !== undefined) post[k] = v.stringValue;
            }
          }
          if (post.status !== 'draft' && post.slug) {
            blogPosts.push(post);
          }
        });
      }
`);
fs.writeFileSync('generate-sitemap.ts', sitemap);
console.log("Patched both.");
