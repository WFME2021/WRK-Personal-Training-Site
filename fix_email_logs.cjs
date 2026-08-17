const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

code = code.replace(/console\.error\("Failed to send email:", emailError\);/g, 
  'if (emailError.message && emailError.message.includes("SMTP Authentication Failed")) { console.warn("Skipping contact email: SMTP Authentication Failed (check Settings)"); } else { console.error("Failed to send email:", emailError); }'
);

code = code.replace(/console\.error\("Failed to send assessment email:", emailError\);/g, 
  'if (emailError.message && emailError.message.includes("SMTP Authentication Failed")) { console.warn("Skipping assessment email: SMTP Authentication Failed (check Settings)"); } else { console.error("Failed to send assessment email:", emailError); }'
);

fs.writeFileSync('server.ts', code);
