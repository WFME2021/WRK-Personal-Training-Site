import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  { name: 'barcode-scanner.png', url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/barcode-scanner.png' },
  { name: 'celebrating-wins.png', url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/celebrating-wins.png' },
  { name: 'exercise-history.png', url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/exercise-history.png' },
  { name: 'exercise-videos.png', url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/exercise-videos.png' },
  { name: 'fat-loss-tracking.png', url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/fat-loss-tracking.png' },
  { name: 'habit-tracking.png', url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/habit-tracking.png' },
  { name: 'macro-tracking-app.png', url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/macro-tracking-app.png' },
  { name: 'downhill-skiing.jpg', url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/downhill-skiing.jpg' },
  { name: 'female-jetski.jpg', url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/female-jetski.jpg' },
  { name: 'active-mum.jpg', url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/active-mum.jpg' },
  { name: 'dad-kid-paddleboard.jpg', url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/dad-kid-paddleboard.jpg' },
  { name: 'family-activity.jpg', url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/family-activity.jpg' },
  { name: 'golfing.jpg', url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/golfing.jpg' },
  { name: 'guy-surfboard.jpg', url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/guy-surfboard.jpg' },
  { name: 'mountain-biking.jpg', url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/mountain-biking.jpg' },
  { name: 'mum-kid-hiking.jpg', url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/mum-kid-hiking.jpg' },
  { name: 'recipe-tracking.png', url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/recipe-tracking.png' },
  { name: 'macro-tracking.png', url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/refs/heads/main/images/macro-tracking.png' },
  { name: 'wrk-logo-white-transparent.png', url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/main/images/wrk-logo-white-transparent.png' },
  { name: 'wrk-logo-black-transparent.png', url: 'https://raw.githubusercontent.com/WFME2021/WRK-Personal-Training-Site/main/images/wrk-logo-black-transparent.png' }
];

const publicDir = path.join(process.cwd(), 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(filepath);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filepath}`);
          resolve();
        });
      } else {
        console.error(`Failed to download ${url}: Status Code ${res.statusCode}`);
        // Don't reject, just log error so other downloads proceed
        resolve(); 
      }
    }).on('error', (err) => {
      console.error(`Error downloading ${url}: ${err.message}`);
      resolve();
    });
  });
}

async function main() {
  for (const img of images) {
    const filepath = path.join(publicDir, img.name);
    await downloadImage(img.url, filepath);
  }
}

main();
