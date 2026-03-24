const fs = require('fs');
const https = require('https');

const url = 'https://raw.githubusercontent.com/WRK-Personal-Training/website/main/public/content.json';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    if (res.statusCode === 200) {
      fs.writeFileSync('public/content.json', data);
      console.log('Successfully downloaded content.json from GitHub');
    } else {
      console.error('Failed to download content.json from GitHub, status code:', res.statusCode);
    }
  });
}).on('error', (err) => {
  console.error('Error downloading content.json:', err.message);
});
