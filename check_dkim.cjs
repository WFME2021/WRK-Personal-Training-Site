const dns = require('dns');
dns.resolveCname('ml._domainkey.wrkpersonaltraining.co.nz', (err, addresses) => {
  if (err) console.log('CNAME Error:', err.message);
  else console.log('DKIM CNAME:', addresses);
});
dns.resolveTxt('ml._domainkey.wrkpersonaltraining.co.nz', (err, addresses) => {
  if (err) console.log('TXT Error:', err.message);
  else console.log('DKIM TXT:', addresses);
});
