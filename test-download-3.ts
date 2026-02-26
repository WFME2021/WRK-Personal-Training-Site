import fs from 'fs';
import path from 'path';

const imageUrl = 'https://github.com/WFME2021/WRK-Personal-Training-Site/blob/main/images/family-activity.jpg?raw=true';
const outputPath = path.join(process.cwd(), 'public', 'family-activity.jpg');

async function download() {
  try {
    const res = await fetch(imageUrl);
    if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(outputPath, Buffer.from(buffer));
    console.log('Downloaded family-activity.jpg');
  } catch (err) {
    console.error(err);
  }
}

download();
