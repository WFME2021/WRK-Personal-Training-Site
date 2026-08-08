const fs = require('fs');
const path = require('path');

const writePage = (filename, content) => {
  fs.writeFileSync(path.join(__dirname, 'src', 'pages', filename), content);
  console.log(`Wrote ${filename}`);
};

// ... we will define the components here
