const fs = require('fs');
let s = fs.readFileSync('pages/Admin.tsx', 'utf8');

const target = `                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Connected Posts (Comma-separated Slugs)</label>
                    <input type="text" value={postFormData.relatedPosts?.join(', ') || ''} onChange={(e) => setPostFormData(prev => ({ ...prev, relatedPosts: e.target.value.split(',').map(s => s.trim()).filter(Boolean) }))} placeholder="e.g., strength-training-myths, protein-guide" className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" />
                  </div>`;

const replacement = `                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Connected Posts</label>
                    <div className="space-y-2 max-h-48 overflow-y-auto p-4 bg-secondary border border-border rounded-lg">
                      {blogPosts.filter(p => p.id !== editingId).map(post => (
                        <label key={post.id} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={postFormData.relatedPosts?.includes(post.slug) || false}
                            onChange={(e) => {
                              const checked = e.target.checked;
                              setPostFormData(prev => {
                                const current = prev.relatedPosts || [];
                                if (checked) {
                                  return { ...prev, relatedPosts: [...current, post.slug] };
                                } else {
                                  return { ...prev, relatedPosts: current.filter(s => s !== post.slug) };
                                }
                              });
                            }}
                            className="form-checkbox h-4 w-4 text-accent border-border rounded bg-primary focus:ring-accent"
                          />
                          <span className="text-sm text-text-primary">{post.title}</span>
                        </label>
                      ))}
                      {blogPosts.filter(p => p.id !== editingId).length === 0 && (
                        <p className="text-xs text-text-secondary">No other posts available.</p>
                      )}
                    </div>
                  </div>`;

if (s.includes(target)) {
  s = s.replace(target, replacement);
  fs.writeFileSync('pages/Admin.tsx', s);
  console.log('Fixed');
} else {
  console.log('Target not found');
}
