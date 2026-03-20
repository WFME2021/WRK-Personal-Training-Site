const fs = require('fs');
const https = require('https');
const path = require('path');

const contentPath = path.join(__dirname, 'public', 'content.json');
const imagesDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

let content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));

function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        if (!url || !url.startsWith('http')) return resolve(url);
        
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                const file = fs.createWriteStream(filepath);
                res.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve(`/images/${path.basename(filepath)}`);
                });
            } else if (res.statusCode === 301 || res.statusCode === 302) {
                downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
            } else {
                console.error(`Failed to download ${url}: ${res.statusCode}`);
                resolve(url);
            }
        }).on('error', (err) => {
            console.error(`Error downloading ${url}: ${err.message}`);
            resolve(url);
        });
    });
}

async function processObject(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            await processObject(obj[key]);
        } else if (typeof obj[key] === 'string' && obj[key].startsWith('http') && (obj[key].includes('postimg.cc') || obj[key].includes('unsplash.com') || obj[key].includes('picsum.photos') || obj[key].includes('githubusercontent.com'))) {
            const url = obj[key];
            try {
                let filename = path.basename(new URL(url).pathname);
                if (!filename || filename === '' || !filename.includes('.')) {
                    filename = `image_${Date.now()}.jpg`;
                }
                if (url.includes('unsplash.com')) {
                    filename = `unsplash_${Date.now()}_${Math.floor(Math.random()*1000)}.jpg`;
                }
                if (url.includes('picsum.photos')) {
                    filename = `picsum_${Date.now()}_${Math.floor(Math.random()*1000)}.jpg`;
                }
                
                const filepath = path.join(imagesDir, filename);
                console.log(`Downloading ${url} to ${filepath}...`);
                const newUrl = await downloadImage(url, filepath);
                obj[key] = newUrl;
            } catch (e) {
                console.error(`Error processing ${url}:`, e);
            }
        }
    }
}

async function main() {
    console.log('Starting image download...');
    await processObject(content);
    fs.writeFileSync(contentPath, JSON.stringify(content, null, 2), 'utf8');
    console.log('Finished updating content.json');
}

main();
