import "dotenv/config";
import fs from "fs";

fs.writeFileSync("env_dump3.json", JSON.stringify(process.env, null, 2));
console.log("Dumped env to env_dump3.json");
