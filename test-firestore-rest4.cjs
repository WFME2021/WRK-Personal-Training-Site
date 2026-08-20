const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf8'));
const url = `https://firestore.googleapis.com/v1/projects/${config.projectId}/databases/(default)/documents/blogs?key=${config.apiKey}`;
console.log(url);
fetch(url).then(r => r.json()).then(data => {
  console.log(JSON.stringify(data).substring(0, 200));
}).catch(e => console.error(e));
