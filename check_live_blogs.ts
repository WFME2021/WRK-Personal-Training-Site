import fs from "fs";

async function run() {
  const res = await fetch("https://www.wrkpersonaltraining.co.nz/content.json");
  const data = await res.json();
  console.log("Live site blog count:", data.blogs?.length);
  if (data.blogs) {
    data.blogs.forEach(b => console.log("-", b.title));
  }
}
run();
