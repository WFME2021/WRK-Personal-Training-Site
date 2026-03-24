import fs from 'fs';

async function fetchContent() {
  try {
    const res = await fetch('https://www.wrkpersonaltraining.co.nz/content.json');
    const data = await res.text();
    fs.writeFileSync('fetched_content.json', data);
    console.log('Fetched successfully');
  } catch (e) {
    console.error(e);
  }
}

fetchContent();
