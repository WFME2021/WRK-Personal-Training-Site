const http = require('http');

http.get('http://localhost:3000/images/unsplash_1773887746731_349.jpg', (res) => {
  console.log('Status:', res.statusCode);
}).on('error', (e) => {
  console.error(e);
});
