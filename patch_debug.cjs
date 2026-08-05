const fs = require('fs');
let app = fs.readFileSync('App.tsx', 'utf-8');
app = app.replace('const App: React.FC<{ initialData?: any }> = ({ initialData }) => {', 'const App: React.FC<{ initialData?: any }> = ({ initialData }) => {\nconsole.log("App mounted, initialData length:", initialData?.blogs?.length);');
fs.writeFileSync('App.tsx', app);

let ctx = fs.readFileSync('context/ContentContext.tsx', 'utf-8');
ctx = ctx.replace('export const ContentProvider: React.FC<{ children: React.ReactNode; initialData?: any }> = ({ children, initialData }) => {', 'export const ContentProvider: React.FC<{ children: React.ReactNode; initialData?: any }> = ({ children, initialData }) => {\nconsole.log("ContentProvider mounted, initialData length:", initialData?.blogs?.length);');
fs.writeFileSync('context/ContentContext.tsx', ctx);
