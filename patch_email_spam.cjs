const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

// For contact form
code = code.replace(
  `replyTo: email,`,
  `// replyTo: email, // Temporarily disabled to prevent Namecheap Jellyfish spoofing flags`
);

// For assessment form
code = code.replace(
  `replyTo: email,`,
  `// replyTo: email, // Temporarily disabled`
);

fs.writeFileSync('server.ts', code);
console.log("Patched email to reduce spam score");
