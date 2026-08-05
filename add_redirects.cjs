const fs = require('fs');
let s = fs.readFileSync('server.ts', 'utf8');

const redirects = `
  app.get('/personal-trainer-christchurch', (req, res) => {
    res.redirect(301, '/personal-training');
  });

  app.get('/online-personal-training-nz', (req, res) => {
    res.redirect(301, '/online-coaching');
  });

  app.get('/personal-training-christchurch-philosophy', (req, res) => {
    res.redirect(301, '/about');
  });

  app.get('/services', (req, res) => {
    res.redirect(301, '/');
  });
`;

s = s.replace(
  "app.get('/corporate-wellness', (req, res) => {",
  redirects + "\n  app.get('/corporate-wellness', (req, res) => {"
);

fs.writeFileSync('server.ts', s);
