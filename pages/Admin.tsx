
import React, { useState, useRef, useEffect } from 'react';
import { BlogPost, Author } from '../data/blogs';
import { PAGE_LABELS, FIELD_LABELS, PageContent, CMSImage } from '../data/pages';
import { Button } from '../components/Button';
import { Save, Upload, Download, Plus, Trash2, ArrowLeft, Lock, LogOut, Layout, FileText, Image as ImageIcon, RefreshCw, Copy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MarkdownEditor } from '../components/MarkdownEditor';
import { RichTextEditor } from '../components/RichTextEditor';
import { useContent } from '../context/ContentContext';
import { loginWithGoogle, logout, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

// Default Author for new posts
const DEFAULT_AUTHOR: Author = {
  name: "H. Richards",
  role: "Personal Trainer",
  bio: "With over 20 years of experience coaching high performers, H. Richards delivers precision training frameworks built on evidence and practical application. His approach cuts through the noise to help you achieve sustainable results, backed by consistently excellent 5-star client reviews.",
  avatarUrl: "https://i.postimg.cc/ZYHDT3kr/Screen-Shot-2026-06-23-at-2-27-18-PM.png"
};

const BLOG_CATEGORIES = [
  'Training & Exercise',
  'Muscle & Strength',
  'Nutrition & Protein',
  'Hydration & Recovery',
  'Weight Loss & Maintenance',
  'Life After GLP-1s'
];

const EMPTY_POST: BlogPost = {
  id: '',
  slug: '',
  title: '',
  excerpt: '',
  content: '## Intro\n\n## Quick Answer\n\n## Section 1\n\n## Section 2\n\n## Section 3\n\n## Section 4\n\n## Final Thoughts',
  faq: '## FAQ\n\n**Question 1?**\nAnswer 1.',
  date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
  isoDate: new Date().toISOString(),
  updatedDate: '',
  category: 'Training & Exercise',
  image: {
    url: 'https://picsum.photos/800/600',
    alt: 'Default blog post image',
    seoDescription: 'Default blog post image'
  },
  author: DEFAULT_AUTHOR,
  seoTitle: '',
  seoDescription: '',
  primaryKeyword: '',
  secondaryKeywords: '',
  ctaText: '',
  ctaLink: '',
  references: '',
  relatedPosts: [],
  localLocation: '',
  localServiceCategory: '',
  localServicePage: '',
  localKeywordNote: '',
  status: 'draft'
};

export const Admin: React.FC = () => {
  const { blogPosts, pageContent, updateBlogPosts, updatePageContent, importData } = useContent();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  
  const [view, setView] = useState<'blogs' | 'pages'>('blogs');
  const [editingId, setEditingId] = useState<string | null>(null); // Post ID
  const [selectedPage, setSelectedPage] = useState<keyof PageContent | null>(null); // Page Key
  
  const [postFormData, setPostFormData] = useState<BlogPost>(() => { const saved = localStorage.getItem("wrk_blog_draft"); return saved ? JSON.parse(saved) : EMPTY_POST; });
  useEffect(() => { localStorage.setItem("wrk_blog_draft", JSON.stringify(postFormData)); }, [postFormData]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const [confirmDialog, setConfirmDialog] = useState<{ message: string; onConfirm: () => void } | null>(null);
  const [toastMessage, setToastMessage] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToastMessage({ message, type });
    setTimeout(() => setToastMessage(null), 5000);
  };

  // Check auth on mount
  useEffect(() => {
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
  }, []);

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginWithGoogle();
    } catch (error: any) {
      console.error("Login error:", error);
      showToast(`Failed to sign in: ${error.message || 'Unknown error'}`, 'error');
    }
  };


  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      showToast('Failed to sign out', 'error');
    }
  };

  const [isPublishing, setIsPublishing] = useState(false);

  // --- BLOG LOGIC ---

  // Load selected post into form
  useEffect(() => {
    if (view === 'blogs' && editingId) {
      const post = blogPosts.find(p => p.id === editingId);
      if (post) {
        setPostFormData({
          ...EMPTY_POST,
          ...post,
          image: { ...EMPTY_POST.image, ...(post.image || {}) }
        });
      }
    } else if (view === 'blogs') {
      setPostFormData({ ...EMPTY_POST, id: Date.now().toString() });
    }
  }, [editingId, blogPosts, view]);

  const handlePostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === 'slug') {
       newValue = value.replace(/^\/+/, '').toLowerCase().replace(/\s+/g, '-');
    }
    setPostFormData(prev => ({ ...prev, [name]: newValue }));
  };

  const handleRichTextChange = (field: keyof BlogPost, html: string) => {
    setPostFormData(prev => ({ ...prev, [field]: html }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      showToast('Uploading image...', 'success');
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = async () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 1200;
          const MAX_HEIGHT = 1200;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const webpDataUrl = canvas.toDataURL('image/webp', 0.8);
            
            // Upload to Firebase Storage
            const { uploadImageToStorage } = await import('../firebase');
            const filename = `blog-featured-${Date.now()}.webp`;
            const downloadUrl = await uploadImageToStorage(webpDataUrl, `images/${filename}`);
            
            handleBlogImageChange('url', downloadUrl);
            showToast('Image uploaded successfully!');
          }
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error uploading image:", error);
      showToast('Failed to upload image', 'error');
    }
  };

  const handleContentChange = (html: string) => {
    setPostFormData(prev => ({ ...prev, content: html }));
  };

  const handleBlogImageChange = (field: keyof CMSImage, value: string) => {
    setPostFormData(prev => ({
      ...prev,
      image: {
        ...prev.image,
        [field]: value
      }
    }));
  };

  const handleSavePost = async (e: React.FormEvent) => {
    e.preventDefault();
    let updatedPosts;
    if (editingId) {
      updatedPosts = blogPosts.map(p => p.id === editingId ? postFormData : p);
    } else {
      updatedPosts = [...blogPosts, { ...postFormData, id: Date.now().toString() }];
    }
    try {
      await updateBlogPosts(updatedPosts);
      setEditingId(null);
      setPostFormData({ ...EMPTY_POST, id: Date.now().toString() });
      showToast('Post saved to cloud!');
    } catch (error) {
      showToast('Error saving post', 'error');
    }
  };

  const handleDeletePost = (id: string) => {
    setConfirmDialog({
      message: 'Are you sure you want to delete this post?',
      onConfirm: async () => {
        const updatedPosts = blogPosts.filter(p => p.id !== id);
        try {
          await updateBlogPosts(updatedPosts);
          if (editingId === id) {
            setEditingId(null);
            setPostFormData({ ...EMPTY_POST, id: Date.now().toString() });
          }
          setConfirmDialog(null);
          showToast('Post deleted from cloud.');
        } catch (error) {
          showToast('Error deleting post', 'error');
        }
      }
    });
  };

  // --- PAGE CONTENT LOGIC ---

  const handlePageImageChange = async (key: string, field: keyof CMSImage, value: string, index?: number) => {
    if (!selectedPage) return;
    const currentPage = pageContent[selectedPage];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currentField = (currentPage as any)[key];
    
    let updatedValue;

    if (index !== undefined && Array.isArray(currentField)) {
        // Handle array update
        const newArray = [...currentField];
        newArray[index] = { ...newArray[index], [field]: value };
        updatedValue = newArray;
    } else {
        // Handle single object update
        updatedValue = { ...currentField, [field]: value };
        
        // If updating 'url' on hero or banner, also update 'image'
        if ((key === 'hero' || key === 'banner') && field === 'url') {
            updatedValue.image = value;
        }
    }

    const updatedPage = { ...currentPage, [key]: updatedValue };
    const updatedContent = { ...pageContent, [selectedPage]: updatedPage };
    try {
      await updatePageContent(updatedContent);
      showToast('Page updated in cloud!');
    } catch (error) {
      showToast('Error updating page', 'error');
    }
  };

  // --- GLOBAL IMPORT/EXPORT ---

  const handleDownload = () => {
    const backupData = {
      blogs: blogPosts,
      pages: pageContent
    };
    const dataStr = JSON.stringify(backupData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'backup.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        // Supports old format (array of posts) or new format (object with blogs/pages)
        if (Array.isArray(json)) {
           importData({ blogs: json });
           showToast('Blog posts imported successfully!');
        } else {
           importData(json);
           showToast('Site content imported successfully!');
        }
      } catch (error) {
        showToast('Error parsing JSON file.', 'error');
      }
    };
    reader.readAsText(file);
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center px-4 transition-colors duration-300">
        <div className="bg-secondary p-8 rounded-2xl shadow-xl max-w-md w-full border border-border">
          <div className="text-center mb-8">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-accent border border-border">
              <Lock size={32} />
            </div>
            <h1 className="text-2xl font-display text-text-primary uppercase">Admin Access</h1>
            <p className="text-text-secondary text-sm mt-2">Please sign in with your admin credentials to continue.</p>
          </div>
          {isAuthLoading ? (
            <div className="text-center text-text-secondary py-4">Checking authentication...</div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <Button fullWidth type="submit" className="mt-2 flex justify-center items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Sign in with Google
              </Button>
              <div className="text-xs text-text-secondary mt-4 text-left border border-border p-3 rounded bg-primary/50">
                <p className="font-bold mb-1">Popup not working?</p>
                <p>If you are inside the AI Studio preview, the browser blocks login popups. Click the "Open in new tab" icon (arrow pointing up-right) at the top of the preview window to log in safely.</p>
              </div>
            </form>
          )}
          <div className="mt-6 text-center">
            <Link to="/" className="text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-accent">Return to Site</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary pt-28 pb-12 px-6 transition-colors duration-300">
      {/* Toast Notification */}
      {toastMessage && (
        <div className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-2xl text-white z-50 flex items-center gap-3 animate-in slide-in-from-bottom-5 ${toastMessage.type === 'error' ? 'bg-red-600' : 'bg-green-600'}`}>
          <span className="font-medium">{toastMessage.message}</span>
          <button onClick={() => setToastMessage(null)} className="text-white/80 hover:text-white ml-2">&times;</button>
        </div>
      )}

      {/* Confirm Modal */}
      {confirmDialog && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-secondary rounded-2xl p-6 max-w-md w-full shadow-2xl border border-border">
            <h3 className="text-xl font-bold mb-4 text-text-primary">Confirm Action</h3>
            <p className="mb-6 text-text-secondary leading-relaxed">{confirmDialog.message}</p>
            <div className="flex justify-end gap-3">
              <Button variant="secondary" onClick={() => setConfirmDialog(null)}>Cancel</Button>
              <Button variant="primary" onClick={confirmDialog.onConfirm} className="bg-red-600 hover:bg-red-700 text-white border-transparent">Confirm</Button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-display text-text-primary uppercase mb-2">Content Manager</h1>
            <p className="text-text-secondary text-lg">Manage blogs and page images.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/">
              <Button variant="secondary"><ArrowLeft size={16} className="mr-2" /> Back to Site</Button>
            </Link>
            <Button onClick={handleLogout} variant="secondary">
              <LogOut size={16} className="mr-2" /> Sign Out
            </Button>
          </div>
        </header>

        {/* View Toggle */}
        <div className="flex gap-4 mb-8 border-b border-border pb-4">
          <button 
            onClick={() => setView('blogs')}
            className={`flex items-center gap-2 pb-2 border-b-2 font-bold uppercase tracking-wider transition-colors ${view === 'blogs' ? 'border-accent text-text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
          >
            <FileText size={18} /> Blog Posts
          </button>
          <button 
            onClick={() => setView('pages')}
            className={`flex items-center gap-2 pb-2 border-b-2 font-bold uppercase tracking-wider transition-colors ${view === 'pages' ? 'border-accent text-text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
          >
            <Layout size={18} /> Page Content
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* LEFT SIDEBAR: LIST */}
          <div className="lg:col-span-4 space-y-6">
            {view === 'blogs' ? (
              <>
                <div className="flex justify-between items-center bg-secondary p-4 rounded-xl border border-border">
                  <h2 className="font-bold uppercase tracking-wider text-sm text-text-primary">All Posts ({blogPosts.length})</h2>
                  <Button onClick={() => { setEditingId(null); setPostFormData({ ...EMPTY_POST, id: Date.now().toString() }); }}>
                    <Plus size={16} className="mr-2" /> New Post
                  </Button>
                </div>
                <div className="space-y-3">
                  {blogPosts.map(post => (
                    <div key={post.id} className={`p-4 rounded-xl border transition-all cursor-pointer ${editingId === post.id ? 'border-accent bg-secondary/50' : 'border-border bg-secondary hover:border-text-secondary/30'}`} onClick={() => setEditingId(post.id)}>
                      <h3 className="font-bold text-text-primary mb-1 line-clamp-1">{post.title || 'Untitled Post'}</h3>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-xs text-text-secondary">{post.isoDate || post.date}</span>
                        <div className="flex gap-1">
                          <button type="button" onClick={(e) => { e.stopPropagation(); handleDeletePost(post.id); }} className="text-text-secondary hover:text-red-500 p-1"><Trash2 size={14} /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="bg-secondary p-4 rounded-xl border border-border mb-6">
                  <h2 className="font-bold uppercase tracking-wider text-sm text-text-primary">Site Pages</h2>
                </div>
                <div className="space-y-2">
                  {Object.keys(pageContent).map(pageKey => (
                    <button key={pageKey} onClick={() => setSelectedPage(pageKey as keyof PageContent)} className={`w-full text-left p-4 rounded-xl border transition-all ${selectedPage === pageKey ? 'border-accent bg-secondary/50 text-accent' : 'border-border bg-secondary hover:border-text-secondary/30 text-text-primary'}`}>
                      <span className="font-bold uppercase tracking-wider text-sm">{PAGE_LABELS[pageKey as keyof PageContent] || pageKey}</span>
                    </button>
                  ))}
                </div>
                
                <div className="mt-12 bg-secondary p-6 rounded-2xl border border-border space-y-4">
                  <h3 className="font-bold uppercase tracking-wider text-sm text-text-primary border-b border-border pb-2">Global Data</h3>
                  <p className="text-xs text-text-secondary">Backup your entire site content or upload a previous backup.</p>
                  <div className="flex gap-3 pt-2">
                    <Button variant="secondary" onClick={handleDownload} className="flex-1"><Download size={14} className="mr-2" /> Backup</Button>
                    <div className="flex-1 relative">
                      <input type="file" accept=".json" onChange={handleFileUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                      <Button variant="secondary" className="w-full pointer-events-none"><Upload size={14} className="mr-2" /> Restore</Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* RIGHT SIDE: EDITOR */}
          <div className="lg:col-span-8 bg-secondary p-8 rounded-3xl border border-border">
            {view === 'blogs' ? (
              <form onSubmit={handleSavePost} className="space-y-8">
                <h2 className="font-bold text-2xl mb-8 text-text-primary border-b border-border pb-4">{editingId ? 'Edit Post' : 'Create New Post'}</h2>
                
                {/* 1. BASIC INFO */}
                <div className="bg-primary p-6 rounded-2xl border border-border space-y-6">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-accent border-b border-border pb-2">1. Core Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Title</label>
                      <input type="text" name="title" value={postFormData.title || ''} onChange={handlePostChange} required className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Slug</label>
                      <input type="text" name="slug" value={postFormData.slug || ''} onChange={handlePostChange} required className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Status</label>
                    <select name="status" value={postFormData.status || 'draft'} onChange={handlePostChange} className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all">
                      <option value="draft">Draft (Hidden)</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Excerpt</label>
                    <textarea name="excerpt" value={postFormData.excerpt || ''} onChange={handlePostChange} required rows={3} className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none" />
                  </div>
                </div>

                {/* 2. CONTENT */}
                <div className="bg-primary p-6 rounded-2xl border border-border space-y-6">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-accent border-b border-border pb-2">2. Content</h3>
                  <div>
                     <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Main Blog Body</label>
                     <MarkdownEditor value={postFormData.content || ''} onChange={(md) => handleRichTextChange('content', md)} />
                  </div>
                  <div>
                     <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">FAQ Section</label>
                     <MarkdownEditor value={postFormData.faq || ''} onChange={(md) => handleRichTextChange('faq', md)} />
                  </div>
                </div>

                {/* 3. MEDIA */}
                <div className="bg-primary p-6 rounded-2xl border border-border space-y-6">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-accent border-b border-border pb-2">3. Media</h3>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-full space-y-4">
                       <div>
                         <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1">Upload Image (Auto-converts to WebP)</label>
                         <input type="file" ref={imageInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />
                         <Button type="button" variant="secondary" onClick={() => imageInputRef.current?.click()} className="w-full">
                           <ImageIcon size={16} className="mr-2" /> Select Image
                         </Button>
                       </div>
                       <div>
                         <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1">Image URL (Fallback)</label>
                         <input type="text" value={postFormData.image?.url || ''} onChange={(e) => handleBlogImageChange('url', e.target.value)} className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" />
                       </div>
                       <div>
                         <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1">Image Alt Text</label>
                         <input type="text" value={postFormData.image?.alt || ''} onChange={(e) => handleBlogImageChange('alt', e.target.value)} className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" />
                       </div>
                    </div>
                  </div>
                </div>

                {/* 4. SEO & ADVANCED */}
                <div className="bg-primary p-6 rounded-2xl border border-border space-y-6">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-accent border-b border-border pb-2">4. SEO & Advanced</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Meta Title (SEO)</label>
                      <input type="text" name="seoTitle" value={postFormData.seoTitle || ''} onChange={handlePostChange} className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Primary Keyword</label>
                      <input type="text" name="primaryKeyword" value={postFormData.primaryKeyword || ''} onChange={handlePostChange} className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Meta Description (SEO)</label>
                    <textarea name="seoDescription" value={postFormData.seoDescription || ''} onChange={handlePostChange} rows={2} className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Publish Date</label>
                      <input type="text" name="date" value={postFormData.date || ''} onChange={handlePostChange} placeholder="e.g., October 15, 2026" className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Category</label>
                      <select name="category" value={postFormData.category || ''} onChange={(e) => setPostFormData({ ...postFormData, category: e.target.value })} className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all">
                        {BLOG_CATEGORIES.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Author Name</label>
                    <input type="text" value={postFormData.author?.name || ''} onChange={(e) => setPostFormData(prev => ({ ...prev, author: { ...prev.author, name: e.target.value, role: prev.author?.role || '', bio: prev.author?.bio || '', avatarUrl: prev.author?.avatarUrl || '' } }))} className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" />
                  </div>
                </div>

                {/* 5. CTA & CONNECTED CONTENT */}
                <div className="bg-primary p-6 rounded-2xl border border-border space-y-6">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-accent border-b border-border pb-2">5. Call to Action & Connected Content</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">CTA Text</label>
                      <input type="text" name="ctaText" value={postFormData.ctaText || ''} onChange={handlePostChange} placeholder="e.g., Book your free assessment" className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">CTA Link</label>
                      <input type="text" name="ctaLink" value={postFormData.ctaLink || ''} onChange={handlePostChange} placeholder="e.g., /contact" className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>
                  <div>
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
                  </div>
                </div>
                
                <div className="pt-4 flex justify-end gap-4 border-t border-border mt-8">
                  {editingId && (
                    <Button type="button" variant="secondary" onClick={() => { setEditingId(null); setPostFormData({ ...EMPTY_POST, id: Date.now().toString() }); }}>
                      Cancel
                    </Button>
                  )}
                  <Button type="submit">
                    <Save size={16} className="mr-2" /> {editingId ? 'Update Post' : 'Save Post'}
                  </Button>
                </div>
              </form>
            ) : (
              // PAGE EDITOR
              <div>
                <h2 className="font-bold text-2xl mb-8 text-text-primary border-b border-border pb-4">
                  Edit {selectedPage ? PAGE_LABELS[selectedPage] : 'Page'} Images
                </h2>
                
                {!selectedPage ? (
                   <div className="text-center py-20 text-text-secondary">
                     <p>Select a page from the left to edit its images.</p>
                   </div>
                ) : (
                  <div className="space-y-8">
                    {Object.keys(pageContent[selectedPage])
                      .filter(key => key !== 'seo')
                      .map((fieldKey) => {
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      const value = (pageContent[selectedPage] as any)[fieldKey];
                      const label = FIELD_LABELS[fieldKey] || fieldKey;
                      const isHeroOrBanner = fieldKey === 'hero' || fieldKey === 'banner';
                      const imageUrl = isHeroOrBanner ? (value.url || value.image) : value.url;

                      if (Array.isArray(value)) {
                        return (
                           <div key={fieldKey} className="bg-primary p-6 rounded-2xl border border-border">
                             <h3 className="block text-sm font-bold uppercase tracking-wider text-accent mb-4">{label} (List)</h3>
                             <div className="space-y-6">
                               {value.map((item: CMSImage, index: number) => (
                                 <div key={index} className="p-4 border border-border rounded-xl bg-secondary">
                                   <div className="flex gap-4 items-start mb-4">
                                      <div className="w-20 h-20 rounded-lg overflow-hidden border border-border shrink-0">
                                        <img loading="lazy"  referrerPolicy="no-referrer" src={item.url} alt={item.alt} className="w-full h-full object-cover" />
                                      </div>
                                      <div className="flex-grow space-y-3">
                                        <div>
                                          <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1">Image URL</label>
                                          <input
                                            type="text"
                                            value={item.url || ''}
                                            onChange={(e) => handlePageImageChange(fieldKey, 'url', e.target.value, index)}
                                            className="w-full p-2 bg-primary text-text-primary border border-border rounded-lg text-sm"
                                            placeholder="https://..."
                                          />
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                          <div>
                                            <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1">Alt Text</label>
                                            <input
                                              type="text"
                                              value={item.alt || ''}
                                              onChange={(e) => handlePageImageChange(fieldKey, 'alt', e.target.value, index)}
                                              className="w-full p-2 bg-primary text-text-primary border border-border rounded-lg text-sm"
                                              placeholder="Description..."
                                            />
                                          </div>
                                          <div>
                                            <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1">SEO Desc</label>
                                            <input
                                              type="text"
                                              value={item.seoDescription || ''}
                                              onChange={(e) => handlePageImageChange(fieldKey, 'seoDescription', e.target.value, index)}
                                              className="w-full p-2 bg-primary text-text-primary border border-border rounded-lg text-sm"
                                              placeholder="SEO details..."
                                            />
                                          </div>
                                        </div>
                                      </div>
                                   </div>
                                 </div>
                               ))}
                             </div>
                           </div>
                        );
                      }

                      return (
                        <div key={fieldKey} className="bg-primary p-6 rounded-2xl border border-border">
                           <div className="flex justify-between items-start mb-4">
                             <div>
                               <label className="block text-sm font-bold uppercase tracking-wider text-accent mb-1">
                                 {label}
                               </label>
                               <p className="text-xs text-text-secondary">Update the image displayed in this section.</p>
                             </div>
                             {imageUrl && (
                               <div className="w-24 h-16 rounded-lg overflow-hidden border border-border shadow-sm">
                                 <img loading="lazy"  referrerPolicy="no-referrer" src={imageUrl} alt={value.alt} className="w-full h-full object-cover" />
                               </div>
                             )}
                           </div>
                           
                           <div className="space-y-4">
                             <div>
                               <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1">Image URL</label>
                               <input
                                 type="text"
                                 value={imageUrl || ''}
                                 onChange={(e) => handlePageImageChange(fieldKey, 'url', e.target.value)}
                                 placeholder="https://..."
                                 className="w-full p-3 bg-secondary text-text-primary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                               />
                             </div>
                             <div className="grid grid-cols-2 gap-4">
                               <div>
                                 <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1">Alt Text</label>
                                 <input
                                   type="text"
                                   value={value.alt || ''}
                                   onChange={(e) => handlePageImageChange(fieldKey, 'alt', e.target.value)}
                                   placeholder="Image description..."
                                   className="w-full p-3 bg-secondary text-text-primary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                                 />
                               </div>
                               <div>
                                 <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1">SEO Description</label>
                                 <input
                                   type="text"
                                   value={value.seoDescription || ''}
                                   onChange={(e) => handlePageImageChange(fieldKey, 'seoDescription', e.target.value)}
                                   placeholder="SEO context..."
                                   className="w-full p-3 bg-secondary text-text-primary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                                 />
                               </div>
                             </div>
                           </div>
                        </div>
                      );
                    })}
                    
                    <div className="pt-4 flex justify-end">
                      <p className="text-sm text-text-primary bg-primary px-4 py-2 rounded-lg inline-flex items-center border border-border">
                         <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Changes auto-save locally
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
