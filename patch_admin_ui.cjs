const fs = require('fs');
let adminCode = fs.readFileSync('pages/Admin.tsx', 'utf8');

adminCode = adminCode.replace(
`Sign in with Google
              </Button>
            </form>`,
`Sign in with Google
              </Button>
              <div className="text-xs text-text-secondary mt-4 text-left border border-border p-3 rounded bg-primary/50">
                <p className="font-bold mb-1">Popup not working?</p>
                <p>If you are inside the AI Studio preview, the browser blocks login popups. Click the "Open in new tab" icon (arrow pointing up-right) at the top of the preview window to log in safely.</p>
              </div>
            </form>`
);

fs.writeFileSync('pages/Admin.tsx', adminCode);
console.log("Patched Admin UI");
