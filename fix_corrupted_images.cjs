const fs = require('fs');
const path = require('path');

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
        console.log(`Fixed ${path.basename(filepath)}`);
    } catch (e) {
        console.error(`Error downloading ${url}: ${e.message}`);
    }
}

async function main() {
    const files = fs.readdirSync(imagesDir);
    let seedCounter = 0;
    for (const file of files) {
        const filepath = path.join(imagesDir, file);
        if (fs.statSync(filepath).isFile()) {
            const fd = fs.openSync(filepath, 'r');
            const buffer = Buffer.alloc(10);
            fs.readSync(fd, buffer, 0, 10, 0);
            fs.closeSync(fd);
            const hex = buffer.toString('hex');
            if (hex === 'efbfbdefbfbdefbfbdef' || hex.startsWith('efbfbd')) {
                console.log(`${file} is corrupted. Fixing...`);
                const url = `https://picsum.photos/seed/fitness${seedCounter++}/800/600`;
                await downloadImage(url, filepath);
            }
        }
    }
    console.log('Done fixing corrupted images.');
}

main();
