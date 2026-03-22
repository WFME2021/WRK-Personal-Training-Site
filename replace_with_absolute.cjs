const fs = require('fs');
const path = require('path');

const urlMap = {
  "skiing-2.jpg": "https://i.postimg.cc/mkHkTfpx/skiing-2.jpg",
  "dad-kid-paddleboard.jpg": "https://i.postimg.cc/gJwkKbW6/dad-kid-paddleboard.jpg",
  "family-activity.jpg": "https://i.postimg.cc/vBXwJPvy/family-activity.jpg",
  "golfing.jpg": "https://i.postimg.cc/wMp8RCTM/golfing.jpg",
  "mum-kid-hiking.jpg": "https://i.postimg.cc/PrV3gGs8/mum-kid-hiking.jpg",
  "guy-surfboard.jpg": "https://i.postimg.cc/Vk6ytB1q/guy-surfboard.jpg",
  "female-jetski.jpg": "https://i.postimg.cc/zXN8ygVy/female-jetski.jpg",
  "macro-tracking-app.jpg": "https://i.postimg.cc/YSrhwFz6/macro-tracking-app.jpg",
  "active-mum.jpg": "https://i.postimg.cc/gjZFxYP7/active-mum.jpg",
  "mountain-biking.jpg": "https://i.postimg.cc/XYhPyRQh/mountain-biking.jpg",
  "dad-carrypack-hiking.jpg": "https://i.postimg.cc/MKnbjvN1/dad-carrypack-hiking.jpg",
  "pexels-pnw-prod-7625047.jpg": "https://i.postimg.cc/FH4gLX6q/pexels-pnw-prod-7625047.jpg",
  "pexels-allan-mas-5383718.jpg": "https://i.postimg.cc/fyFscJdc/pexels-allan-mas-5383718.jpg",
  "pexels-pixabay-163407.jpg": "https://i.postimg.cc/90S2dr9G/pexels-pixabay-163407.jpg",
  "downhill-skiing.jpg": "https://i.postimg.cc/4Nv4P1rF/downhill-skiing.jpg",
  "pexels-uriel-mont-6271691.jpg": "https://i.postimg.cc/cJpTZjWZ/pexels-uriel-mont-6271691.jpg",
  "pexels-pripicart-591216.jpg": "https://i.postimg.cc/mkq4Yt9C/pexels-pripicart-591216.jpg",
  "habit-tracking.png": "https://i.postimg.cc/XqmjPHVV/habit-tracking.png",
  "fat-loss-tracking.png": "https://i.postimg.cc/8CS5D0LN/fat-loss-tracking.png",
  "exercise-videos.png": "https://i.postimg.cc/WzHzvp7V/exercise-videos.png",
  "exercise-history.png": "https://i.postimg.cc/3w5FjthV/exercise-history.png",
  "recipe-tracking.png": "https://i.postimg.cc/ZRgR3MtP/recipe-tracking.png",
  "WRK-LOGOS-(Final).png": "https://i.postimg.cc/13cs5yGp/WRK-LOGOS-(Final).png",
  "wrk-logo-black-transparent.png": "https://i.postimg.cc/59nFgbLv/wrk-logo-black-transparent.png",
  "barcode-scanner.png": "https://i.postimg.cc/CLcHRbm3/barcode-scanner.png",
  "celebrating-wins.png": "https://i.postimg.cc/cHT6FBgH/celebrating-wins.png",
  "Meal-Prep.jpg": "https://i.postimg.cc/8CS5D0LN/fat-loss-tracking.png", // Fallback for Meal-Prep
};

function replaceInFile(filepath) {
    if (!fs.existsSync(filepath)) return;
    let content = fs.readFileSync(filepath, 'utf8');
    let newContent = content;

    // Replace all matching URLs
    for (const [filename, url] of Object.entries(urlMap)) {
        // Match /images-v2/filename.ext?v=2 or /images-v2/filename.ext or /images/filename.ext
        const regex1 = new RegExp(`\\/images-v2\\/${filename.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}(\\?v=\\d+)?`, 'g');
        const regex2 = new RegExp(`\\/images\\/${filename.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}(\\?v=\\d+)?`, 'g');
        newContent = newContent.replace(regex1, url);
        newContent = newContent.replace(regex2, url);
    }

    // For any remaining unsplash/pexels/picsum images in /images-v2/ that aren't in the map,
    // let's replace them with a reliable fallback (e.g. dad-carrypack-hiking) so they aren't broken.
    const fallbackUrl = "https://i.postimg.cc/MKnbjvN1/dad-carrypack-hiking.jpg";
    newContent = newContent.replace(/\/images-v2\/unsplash_[^"']+/g, fallbackUrl);
    newContent = newContent.replace(/\/images-v2\/pexels-[^"']+/g, fallbackUrl);
    newContent = newContent.replace(/\/images-v2\/picsum_[^"']+/g, fallbackUrl);
    newContent = newContent.replace(/\/images\/unsplash_[^"']+/g, fallbackUrl);
    newContent = newContent.replace(/\/images\/pexels-[^"']+/g, fallbackUrl);
    newContent = newContent.replace(/\/images\/picsum_[^"']+/g, fallbackUrl);

    if (content !== newContent) {
        fs.writeFileSync(filepath, newContent, 'utf8');
        console.log(`Updated ${filepath}`);
    }
}

// Update content.json
replaceInFile(path.join(__dirname, 'public', 'content.json'));

// Update data/*.ts
const dataDir = path.join(__dirname, 'data');
if (fs.existsSync(dataDir)) {
    const files = fs.readdirSync(dataDir);
    for (const file of files) {
        if (file.endsWith('.ts')) {
            replaceInFile(path.join(dataDir, file));
        }
    }
}
