import { marked } from 'marked';
marked.use({
  renderer: {
    heading(headerObject: any) {
      const depth = headerObject.depth === 1 ? 2 : headerObject.depth;
      return `<h${depth}>${headerObject.text}</h${depth}>`;
    }
  }
});
console.log(marked.parse('# Hello World'));
