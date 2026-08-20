const dns = require('dns');
dns.resolveTxt('wrkpersonaltraining.co.nz', (err, addresses) => {
  if (err) console.log('TXT Error:', err.message);
  else console.log('TXT Records:', addresses);
});
