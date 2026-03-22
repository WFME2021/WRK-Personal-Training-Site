import "dotenv/config";
import fs from "fs";

fs.writeFileSync("env_dump.json", JSON.stringify({
  GITHUB_TOKEN: !!process.env.GITHUB_TOKEN,
  GITHUB_OWNER: process.env.GITHUB_OWNER,
  GITHUB_REPO: process.env.GITHUB_REPO,
  VITE_GITHUB_TOKEN: !!process.env.VITE_GITHUB_TOKEN,
  VITE_GITHUB_OWNER: process.env.VITE_GITHUB_OWNER,
  VITE_GITHUB_REPO: process.env.VITE_GITHUB_REPO
}, null, 2));
console.log("Dumped env to env_dump.json");
