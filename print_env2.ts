import "dotenv/config";
import fs from "fs";

const envs = Object.keys(process.env).filter(k => k.toLowerCase().includes("git") || k.toLowerCase().includes("token") || k.toLowerCase().includes("repo") || k.toLowerCase().includes("owner"));
const result = {};
for (const k of envs) {
  result[k] = process.env[k];
}
fs.writeFileSync("env_dump2.json", JSON.stringify(result, null, 2));
console.log("Dumped env to env_dump2.json");
