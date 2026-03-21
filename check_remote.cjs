const https = require('https');
https.get('https://i.postimg.cc/MKnbjvN1/dad-carrypack-hiking.jpg', (res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', res.headers);
  let data = Buffer.alloc(0);
  res.on('data', chunk => data = Buffer.concat([data, chunk]));
  res.on('end', () => console.log('First 10 bytes:', data.slice(0, 10).toString('hex')));
});
