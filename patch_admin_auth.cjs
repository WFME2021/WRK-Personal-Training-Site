const fs = require('fs');
let adminCode = fs.readFileSync('pages/Admin.tsx', 'utf8');

adminCode = adminCode.replace(
`  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isAuthLoading, setIsAuthLoading] = useState(false);`,
`  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);`
);

adminCode = adminCode.replace(
`  useEffect(() => {
    // Auth check bypassed
  }, []);`,
`  useEffect(() => {
    import('firebase/auth').then(({ onAuthStateChanged }) => {
      import('../firebase').then(({ auth }) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
          setIsAuthLoading(false);
        });
        return () => unsubscribe();
      });
    });
  }, []);`
);

fs.writeFileSync('pages/Admin.tsx', adminCode);
console.log("Patched Admin.tsx");
