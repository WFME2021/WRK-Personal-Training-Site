const dns = require('dns');

const domain = 'wrkpersonaltraining.co.nz';

dns.resolveMx(domain, (err, addresses) => {
  if (err) console.log('MX Error:', err.message);
  else console.log('MX Records:', addresses);
});

dns.resolve4(domain, (err, addresses) => {
  if (err) console.log('A Record Error:', err.message);
  else console.log('A Records:', addresses);
});
