const fs = require('fs');
let serverCode = fs.readFileSync('server.ts', 'utf8');

serverCode = serverCode.replace(
  `    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }`,
  `    if (!name || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }`
);

fs.writeFileSync('server.ts', serverCode);
console.log("Patched message validation");
