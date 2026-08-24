const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.resolve("dist"), { index: ['index.html'], extensions: ['html'], redirect: false }));
app.get('*', (req, res) => res.send('Fallback'));
app.listen(3001, () => console.log('Listening on 3001'));
