const http = require('http');

http.get('http://localhost:3000/images/dad-carrypack-hiking.jpg', (res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', res.headers);
}).on('error', (e) => {
  console.error(e);
});
