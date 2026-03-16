import fs from 'fs';
import path from 'path';

async function run() {
  try {
    console.log('Fetching latest content.json from live site...');
    const response = await fetch('https://www.wrkpersonaltraining.co.nz/content.json');
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    const localPath = path.join(process.cwd(), 'public', 'content.json');
    
    fs.writeFileSync(localPath, JSON.stringify(data, null, 2), 'utf8');
    console.log('Successfully updated local public/content.json from live site.');
  } catch (error) {
    console.error('Error pulling content:', error);
  }
}

run();
