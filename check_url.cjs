const https = require('https');
https.get('https://i.postimg.cc/MKnbjvN1/dad-carrypack-hiking.jpg', (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers);
}).on('error', (e) => {
  console.error(e);
});