const fs = require('fs');
const buf = Buffer.alloc(10);
const fd = fs.openSync('public/images/dad-carrypack-hiking.jpg', 'r');
fs.readSync(fd, buf, 0, 10, 0);
console.log(buf.toString('hex'));
fs.closeSync(fd);
