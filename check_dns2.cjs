const dns = require('dns');

dns.resolve4('wrkpersonaltraining.co.nz', (err, addresses) => {
  console.log('Root A Records:', err ? err.message : addresses);
});

dns.resolveCname('www.wrkpersonaltraining.co.nz', (err, addresses) => {
  console.log('WWW CNAME:', err ? err.message : addresses);
});

dns.resolve4('www.wrkpersonaltraining.co.nz', (err, addresses) => {
  console.log('WWW A Records:', err ? err.message : addresses);
});
