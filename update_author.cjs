const fs = require('fs');

const FILE_PATH = './public/content.json';
const NEW_AVATAR = 'https://i.postimg.cc/ZYHDT3kr/Screen-Shot-2026-06-23-at-2-27-18-PM.png';
const NEW_BIO = 'With over 20 years of experience coaching high performers, H. Richards delivers precision training frameworks built on evidence and practical application. His approach cuts through the noise to help you achieve sustainable results, backed by consistently excellent 5-star client reviews.';
const NEW_ROLE = 'Personal Trainer';
const NEW_NAME = 'H. Richards';

try {
  const data = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
  
  if (data.blogs) {
    let updated = 0;
    data.blogs = data.blogs.map(blog => {
      if (blog.author) {
        blog.author.name = NEW_NAME;
        blog.author.role = NEW_ROLE;
        blog.author.bio = NEW_BIO;
        blog.author.avatarUrl = NEW_AVATAR;
        updated++;
      }
      return blog;
    });
    console.log(`Updated ${updated} blogs in content.json`);
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
  }
} catch (e) {
  console.error('Error updating content.json', e);
}
