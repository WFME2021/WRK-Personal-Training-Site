const fs = require('fs');
let code = fs.readFileSync('context/ContentContext.tsx', 'utf-8');

code = code.replace(
  /export const ContentProvider: React\.FC<\{ children: React\.ReactNode \}> = \(\{ children \}\) => \{/,
  `export const ContentProvider: React.FC<{ children: React.ReactNode; initialData?: any }> = ({ children, initialData }) => {`
);

code = code.replace(
  /const \[blogPosts, setBlogPosts\] = useState<BlogPost\[\]>\(BLOG_POSTS\);/,
  `const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialData?.blogs || BLOG_POSTS);`
);

code = code.replace(
  /const \[pageContent, setPageContent\] = useState<PageContentState>\(PAGE_CONTENT\);/,
  `const [pageContent, setPageContent] = useState<PageContentState>(initialData?.pages || PAGE_CONTENT);`
);

fs.writeFileSync('context/ContentContext.tsx', code);
console.log('ContentContext patched.');
