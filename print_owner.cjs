const fs = require('fs');
const envVars = {
  GITHUB_OWNER: process.env.GITHUB_OWNER,
  GITHUB_REPO: process.env.GITHUB_REPO,
  VITE_GITHUB_OWNER: process.env.VITE_GITHUB_OWNER,
  VITE_GITHUB_REPO: process.env.VITE_GITHUB_REPO
};
fs.writeFileSync('env_dump_owner.json', JSON.stringify(envVars, null, 2));
console.log('Dumped to env_dump_owner.json');
