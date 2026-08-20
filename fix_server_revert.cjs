const fs = require('fs');

let server = fs.readFileSync('server.ts', 'utf8');

server = server.replace(/\/\/ Use REST API to avoid Firebase SDK connection issues in Node\.js[\s\S]*?blogs\.push\(post\);\s+\}\);\s+\}/, `const snapshot = await getDocs(collection(db, 'blogs'));
      const blogs = [];
      snapshot.forEach(doc => {
        const post = doc.data();
        if (post.slug && post.slug.startsWith('/')) post.slug = post.slug.substring(1);
        blogs.push(post);
      });`);
fs.writeFileSync('server.ts', server);

let sitemap = fs.readFileSync('generate-sitemap.ts', 'utf8');
sitemap = sitemap.replace(/const dbId = firebaseConfig\.firestoreDatabaseId[\s\S]*?blogPosts\.push\(post\);\s+\}\s+\}\);\s+\}/, `const querySnapshot = await getDocs(collection(db, 'blogs'));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.status !== 'draft' && data.slug) {
          blogPosts.push(data);
        }
      });`);
fs.writeFileSync('generate-sitemap.ts', sitemap);
console.log("Reverted both.");
