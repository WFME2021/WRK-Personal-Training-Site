import config from "./firebase-applet-config.json" with { type: "json" };
const url = `https://firestore.googleapis.com/v1/projects/${config.projectId}/databases/${config.firestoreDatabaseId || '(default)'}/documents/blogs`;
console.log(url);
const res = await fetch(url);
const data = await res.json();
console.log(JSON.stringify(data).substring(0, 200));
