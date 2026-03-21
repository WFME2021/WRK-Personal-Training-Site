const fs = require('fs');
const path = require('path');

const urls = [
  "https://i.postimg.cc/mkHkTfpx/skiing-2.jpg",
  "https://i.postimg.cc/gJwkKbW6/dad-kid-paddleboard.jpg",
  "https://i.postimg.cc/vBXwJPvy/family-activity.jpg",
  "https://i.postimg.cc/wMp8RCTM/golfing.jpg",
  "https://i.postimg.cc/PrV3gGs8/mum-kid-hiking.jpg",
  "https://i.postimg.cc/Vk6ytB1q/guy-surfboard.jpg",
  "https://i.postimg.cc/zXN8ygVy/female-jetski.jpg",
  "https://i.postimg.cc/XqmjPHVV/habit-tracking.png",
  "https://i.postimg.cc/8CS5D0LN/fat-loss-tracking.png",
  "https://i.postimg.cc/YSrhwFz6/macro-tracking-app.jpg",
  "https://i.postimg.cc/WzHzvp7V/exercise-videos.png",
  "https://i.postimg.cc/gjZFxYP7/active-mum.jpg",
  "https://i.postimg.cc/3w5FjthV/exercise-history.png",
  "https://i.postimg.cc/ZRgR3MtP/recipe-tracking.png",
  "https://i.postimg.cc/XYhPyRQh/mountain-biking.jpg",
  "https://i.postimg.cc/MKnbjvN1/dad-carrypack-hiking.jpg",
  "https://i.postimg.cc/FH4gLX6q/pexels-pnw-prod-7625047.jpg",
  "https://i.postimg.cc/13cs5yGp/WRK-LOGOS-(Final).png",
  "https://i.postimg.cc/59nFgbLv/wrk-logo-black-transparent.png",
  "https://i.postimg.cc/fyFscJdc/pexels-allan-mas-5383718.jpg",
  "https://i.postimg.cc/90S2dr9G/pexels-pixabay-163407.jpg",
  "https://i.postimg.cc/4Nv4P1rF/downhill-skiing.jpg",
  "https://i.postimg.cc/CLcHRbm3/barcode-scanner.png",
  "https://i.postimg.cc/cHT6FBgH/celebrating-wins.png",
  "https://i.postimg.cc/cJpTZjWZ/pexels-uriel-mont-6271691.jpg",
  "https://i.postimg.cc/mkq4Yt9C/pexels-pripicart-591216.jpg"
];

const imagesDir = path.join(__dirname, 'public', 'images');

async function downloadImage(url, filepath) {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error(`Failed to download ${url}: ${res.status}`);
            return;
        }
        const arrayBuffer = await res.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        fs.writeFileSync(filepath, buffer);
        console.log(`Downloaded ${path.basename(filepath)}`);
    } catch (e) {
        console.error(`Error downloading ${url}: ${e.message}`);
    }
}

async function main() {
    for (const url of urls) {
        const filename = path.basename(new URL(url).pathname);
        const filepath = path.join(imagesDir, filename);
        await downloadImage(url, filepath);
    }
    console.log('Done downloading postimg.cc images.');
}

main();
