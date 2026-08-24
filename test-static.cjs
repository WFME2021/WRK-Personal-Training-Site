const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
app.use((req, res, next) => {
  if (!path.extname(req.path) && req.path !== '/') {
    const htmlPath = path.resolve("dist", req.path.slice(1) + ".html");
    if (fs.existsSync(htmlPath)) {
      req.url = req.url + '.html';
    }
  }
  next();
});
app.use(express.static(path.resolve("dist"), { index: ['index.html'], redirect: false }));
app.get('*all', (req, res) => res.send('Fallback'));
app.listen(3001, () => console.log('Listening on 3001'));
