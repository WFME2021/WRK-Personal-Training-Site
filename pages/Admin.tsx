
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
  bio: "",
  avatarUrl: "https://picsum.photos/100"
};

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
  category: 'General',
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
  
  const [postFormData, setPostFormData] = useState<BlogPost>(EMPTY_POST);
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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setIsAuthLoading(false);
    });
    return () => unsubscribe();
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
    setPostFormData(prev => ({ ...prev, [name]: value }));
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
            <h1 className="text-2xl font-display font-bold text-text-primary uppercase">Admin Access</h1>
            <p className="text-text-secondary text-sm mt-2">Please sign in with your authorized Google account to continue.</p>
          </div>
          {isAuthLoading ? (
            <div className="text-center text-text-secondary py-4">Checking authentication...</div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <Button fullWidth type="submit">Sign in with Google</Button>
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
        
        {/* Header Actions */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-border pb-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 bg-secondary border border-border rounded-full hover:bg-primary transition-colors text-text-primary">
              <ArrowLeft size={20} />
            </Link>
            <div>
               <h1 className="text-3xl font-display font-bold text-text-primary uppercase">Admin Dashboard</h1>
               <p className="text-xs font-bold uppercase tracking-wider text-text-secondary">Manage your content</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 items-center">
            <div className="hidden md:block bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2 text-[10px] text-green-600 max-w-xs leading-tight">
              <strong>Cloud Sync Active:</strong> Changes are saved instantly to your secure database.
            </div>

            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden" 
              accept=".json"
            />
            <Button variant="secondary" type="button" onClick={() => fileInputRef.current?.click()}>
              <Upload size={16} className="mr-2" /> Import
            </Button>
            <Button variant="primary" type="button" onClick={handleDownload} className="shadow-lg">
              <Download size={16} className="mr-2" /> Download Config
            </Button>
            <div className="h-8 w-px bg-border mx-2 hidden md:block"></div>
            <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 hover:text-red-600 font-bold uppercase text-xs tracking-wider transition-colors">
               <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 mb-8 flex gap-4 items-start">
           <div className="bg-accent/10 p-2 rounded-full text-accent shrink-0 mt-1">
             <Layout size={20} />
           </div>
           <div>
             <h3 className="font-bold text-text-primary text-lg mb-2">Cloud Sync is Active</h3>
             <p className="text-text-secondary text-sm leading-relaxed mb-4">
               Your site is now connected to a secure cloud database. All changes you make here are saved instantly and permanently. You no longer need to click "Save & Publish".
             </p>
             <ol className="list-decimal list-inside text-sm text-text-secondary space-y-2 mb-4">
               <li>Make your edits below (Images, Text, Blogs).</li>
               <li>Click "Save Post" or edit a page field.</li>
               <li>Changes are instantly live on your website.</li>
             </ol>
             <p className="text-xs font-bold text-accent uppercase tracking-wider">
               Important: Image URLs must be public links (e.g. from Unsplash or a website), not files on your computer.
             </p>
           </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - Navigation */}
          <div className="lg:col-span-1 space-y-6">
             <div className="bg-secondary p-6 shadow-sm border border-border rounded-[2rem]">
               <h3 className="font-bold text-sm uppercase tracking-wider text-accent mb-4">Content Types</h3>
               <nav className="space-y-2">
                 <button 
                   onClick={() => setView('blogs')}
                   className={`w-full flex items-center gap-3 px-4 py-3 font-bold rounded-xl text-sm transition-colors ${view === 'blogs' ? 'bg-primary text-text-primary border border-border' : 'text-text-secondary hover:bg-primary/50 hover:text-text-primary'}`}
                 >
                   <FileText size={18} /> Blog Posts
                 </button>
                 <button 
                   onClick={() => setView('pages')}
                   className={`w-full flex items-center gap-3 px-4 py-3 font-bold rounded-xl text-sm transition-colors ${view === 'pages' ? 'bg-primary text-text-primary border border-border' : 'text-text-secondary hover:bg-primary/50 hover:text-text-primary'}`}
                 >
                   <Layout size={18} /> Pages
                 </button>
               </nav>
             </div>

             {/* List Panel */}
             <div className="bg-secondary p-6 shadow-sm border border-border rounded-[2rem] h-fit">
               {view === 'blogs' ? (
                 <>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-bold text-sm uppercase tracking-wider text-text-primary">Posts ({blogPosts.length})</h2>
                    <button 
                      type="button"
                      onClick={() => { setEditingId(null); setPostFormData({ ...EMPTY_POST, id: Date.now().toString() }); }}
                      className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider bg-accent text-white px-3 py-1.5 rounded-full hover:opacity-90 transition-colors"
                    >
                      <Plus size={12} /> New
                    </button>
                  </div>
                  <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {blogPosts.map(post => (
                      <div 
                        key={post.id} 
                        className={`p-4 border rounded-xl cursor-pointer transition-all duration-200 group ${editingId === post.id ? 'border-accent bg-primary ring-1 ring-accent' : 'border-border hover:border-accent hover:bg-primary'}`}
                        onClick={() => setEditingId(post.id)}
                      >
                        <h3 className="font-bold text-text-primary text-sm truncate mb-1">
                          {post.title}
                          {post.status === 'draft' && (
                            <span className="ml-2 inline-block bg-yellow-500/10 text-yellow-600 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">Draft</span>
                          )}
                        </h3>
                        <div className="flex justify-between items-center text-xs text-text-secondary">
                          <span>{post.date}</span>
                          <div className="flex gap-1">
                            <button 
                              type="button"
                              onClick={(e) => { 
                                e.stopPropagation(); 
                                const newPost = { ...post, id: Date.now().toString(), title: `${post.title} (Copy)`, slug: `${post.slug}-copy` };
                                updateBlogPosts([...blogPosts, newPost]);
                              }}
                              className="text-text-secondary hover:text-accent transition-colors p-1"
                              title="Duplicate Post"
                            >
                              <Copy size={14} />
                            </button>
                            <button 
                              type="button"
                              onClick={(e) => { e.stopPropagation(); handleDeletePost(post.id); }}
                              className="text-text-secondary hover:text-red-500 transition-colors p-1"
                              title="Delete Post"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pre-Publish Checklist */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="font-bold text-sm uppercase tracking-wider text-accent mb-4">Pre-Publish Checklist</h3>
                    <ul className="space-y-2 text-xs text-text-secondary">
                      <li className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${postFormData.title ? 'bg-green-500' : 'bg-red-500'}`}></span> Title
                      </li>
                      <li className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${postFormData.slug ? 'bg-green-500' : 'bg-red-500'}`}></span> Slug
                      </li>
                      <li className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${postFormData.seoTitle ? 'bg-green-500' : 'bg-red-500'}`}></span> Meta Title
                      </li>
                      <li className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${postFormData.seoDescription ? 'bg-green-500' : 'bg-red-500'}`}></span> Meta Description
                      </li>
                      <li className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${postFormData.excerpt ? 'bg-green-500' : 'bg-red-500'}`}></span> Excerpt
                      </li>
                      <li className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${postFormData.image.url && postFormData.image.url !== 'https://picsum.photos/800/600' ? 'bg-green-500' : 'bg-red-500'}`}></span> Featured Image
                      </li>
                      <li className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${postFormData.image.alt && postFormData.image.alt !== 'Default blog post image' ? 'bg-green-500' : 'bg-red-500'}`}></span> Image Alt Text
                      </li>
                      <li className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${postFormData.content && postFormData.content.length > 50 ? 'bg-green-500' : 'bg-red-500'}`}></span> Body Content
                      </li>
                      <li className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${postFormData.content && (postFormData.content.includes('##') || postFormData.content.includes('###')) ? 'bg-green-500' : 'bg-yellow-500'}`}></span> Headings Present
                      </li>
                      <li className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${postFormData.ctaText ? 'bg-green-500' : 'bg-yellow-500'}`}></span> CTA Added
                      </li>
                    </ul>
                    
                    <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-2 text-xs text-text-secondary">
                      <div>
                        <span className="block font-bold text-text-primary">Words</span>
                        {postFormData.content ? postFormData.content.replace(/<[^>]*>/g, '').split(/\s+/).filter(w => w.length > 0).length : 0}
                      </div>
                      <div>
                        <span className="block font-bold text-text-primary">Read Time</span>
                        {postFormData.content ? Math.ceil(postFormData.content.replace(/<[^>]*>/g, '').split(/\s+/).filter(w => w.length > 0).length / 200) : 0} min
                      </div>
                    </div>
                  </div>

                  {/* SEO Preview */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="font-bold text-sm uppercase tracking-wider text-accent mb-4">SEO Preview</h3>
                    <div className="bg-primary p-4 rounded-xl border border-border">
                      <div className="text-[12px] text-text-secondary mb-1 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-[10px]">W</span>
                        <span className="truncate">wrkpersonaltraining.co.nz › blog › {postFormData.slug || 'your-slug'}</span>
                      </div>
                      <h4 className="text-[18px] text-blue-600 dark:text-blue-400 hover:underline cursor-pointer truncate mb-1 leading-tight">
                        {postFormData.seoTitle || postFormData.title || 'Your Meta Title'}
                      </h4>
                      <p className="text-[13px] text-text-secondary line-clamp-2 leading-snug">
                        {postFormData.seoDescription || postFormData.excerpt || 'Your meta description will appear here. Keep it under 160 characters for best results.'}
                      </p>
                    </div>
                  </div>
                 </>
               ) : (
                 <>
                   <div className="mb-6">
                    <h2 className="font-bold text-sm uppercase tracking-wider text-text-primary">Select Page</h2>
                   </div>
                   <div className="space-y-3">
                     {Object.keys(pageContent).map((key) => (
                       <div 
                         key={key}
                         className={`p-4 border rounded-xl cursor-pointer transition-all duration-200 ${selectedPage === key ? 'border-accent bg-primary ring-1 ring-accent' : 'border-border hover:border-accent hover:bg-primary'}`}
                         onClick={() => setSelectedPage(key as keyof PageContent)}
                       >
                         <h3 className="font-bold text-text-primary text-sm">{PAGE_LABELS[key] || key}</h3>
                       </div>
                     ))}
                   </div>
                 </>
               )}
             </div>
          </div>

          {/* Main: Editor */}
          <div className="lg:col-span-3 bg-secondary p-8 shadow-sm border border-border rounded-[2rem]">
            {view === 'blogs' ? (
              // BLOG EDITOR
              <form onSubmit={handleSavePost} className="space-y-8">
                <div className="flex justify-between items-center border-b border-border pb-4">
                  <h2 className="font-bold text-2xl text-text-primary">
                    {editingId ? 'Edit Post' : 'Create New Post'}
                  </h2>
                  <div className="flex gap-4">
                    {editingId && (
                      <Button type="button" variant="secondary" onClick={() => { setEditingId(null); setPostFormData({ ...EMPTY_POST, id: Date.now().toString() }); }}>
                        Cancel
                      </Button>
                    )}
                    <Button type="submit">
                      <Save size={16} className="mr-2" /> {editingId ? 'Update Post' : 'Save Post'}
                    </Button>
                  </div>
                </div>

                {/* BASIC INFO */}
                <div className="bg-primary p-6 rounded-2xl border border-border space-y-6">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-accent border-b border-border pb-2">1. Basic Info</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Title</label>
                      <input
                        type="text"
                        name="title"
                        value={postFormData.title || ''}
                        onChange={handlePostChange}
                        required
                        className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Slug / URL</label>
                      <input
                        type="text"
                        name="slug"
                        value={postFormData.slug || ''}
                        onChange={handlePostChange}
                        required
                        className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Category</label>
                      <input
                        type="text"
                        name="category"
                        value={postFormData.category || ''}
                        onChange={handlePostChange}
                        className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Status</label>
                      <select
                        name="status"
                        value={postFormData.status || 'draft'}
                        onChange={handlePostChange}
                        className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Publish Date</label>
                      <input
                        type="text"
                        name="date"
                        value={postFormData.date || ''}
                        onChange={handlePostChange}
                        className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Updated Date</label>
                      <input
                        type="text"
                        name="updatedDate"
                        value={postFormData.updatedDate || ''}
                        onChange={handlePostChange}
                        className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* SEO & METADATA */}
                <div className="bg-primary p-6 rounded-2xl border border-border space-y-6">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-accent border-b border-border pb-2">2. SEO & Metadata</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Meta Title</label>
                      <input
                        type="text"
                        name="seoTitle"
                        value={postFormData.seoTitle || ''}
                        onChange={handlePostChange}
                        className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Meta Description</label>
                      <input
                        type="text"
                        name="seoDescription"
                        value={postFormData.seoDescription || ''}
                        onChange={handlePostChange}
                        className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Primary Keyword</label>
                      <input
                        type="text"
                        name="primaryKeyword"
                        value={postFormData.primaryKeyword || ''}
                        onChange={handlePostChange}
                        className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Secondary Keywords</label>
                      <input
                        type="text"
                        name="secondaryKeywords"
                        value={postFormData.secondaryKeywords || ''}
                        onChange={handlePostChange}
                        className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Local Location</label>
                      <input
                        type="text"
                        name="localLocation"
                        value={postFormData.localLocation || ''}
                        onChange={handlePostChange}
                        placeholder="e.g., Christchurch"
                        className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Local Service Category</label>
                      <input
                        type="text"
                        name="localServiceCategory"
                        value={postFormData.localServiceCategory || ''}
                        onChange={handlePostChange}
                        placeholder="e.g., Personal Training"
                        className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Local Service Page URL</label>
                      <input
                        type="text"
                        name="localServicePage"
                        value={postFormData.localServicePage || ''}
                        onChange={handlePostChange}
                        placeholder="/services/personal-training"
                        className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Local Keyword Note</label>
                      <input
                        type="text"
                        name="localKeywordNote"
                        value={postFormData.localKeywordNote || ''}
                        onChange={handlePostChange}
                        placeholder="Internal notes for local SEO"
                        className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* MEDIA */}
                <div className="bg-primary p-6 rounded-2xl border border-border space-y-6">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-accent border-b border-border pb-2">3. Media</h3>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-full space-y-4">
                       <div>
                         <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1">Upload Image (Auto-converts to WebP)</label>
                         <input
                           type="file"
                           accept="image/*"
                           onChange={handleImageUpload}
                           className="w-full p-2 bg-secondary text-text-primary border border-border rounded-lg text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-accent file:text-white hover:file:bg-accent/90"
                         />
                       </div>
                       <div>
                         <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1">Or enter Image URL</label>
                         <input
                           type="text"
                           value={postFormData.image?.url || ''}
                           onChange={(e) => handleBlogImageChange('url', e.target.value)}
                           className="w-full p-3 bg-secondary text-text-primary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                           placeholder="https://..."
                         />
                       </div>
                    </div>
                    {postFormData.image.url && (
                      <div className="w-32 h-24 rounded-lg overflow-hidden border border-border shadow-sm ml-4 shrink-0">
                        <img referrerPolicy="no-referrer" src={postFormData.image.url} alt={postFormData.image.alt} className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1">Featured Image Alt Text</label>
                      <input
                        type="text"
                        value={postFormData.image.alt || ''}
                        onChange={(e) => handleBlogImageChange('alt', e.target.value)}
                        className="w-full p-3 bg-secondary text-text-primary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                        placeholder="Image description..."
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1">Image SEO Description</label>
                      <input
                        type="text"
                        value={postFormData.image.seoDescription || ''}
                        onChange={(e) => handleBlogImageChange('seoDescription', e.target.value)}
                        className="w-full p-3 bg-secondary text-text-primary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                        placeholder="SEO context..."
                      />
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="bg-primary p-6 rounded-2xl border border-border space-y-6">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-accent border-b border-border pb-2">4. Content</h3>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Excerpt / Summary</label>
                    <textarea
                      name="excerpt"
                      value={postFormData.excerpt || ''}
                      onChange={handlePostChange}
                      rows={2}
                      className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>

                  <div>
                     <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Main Blog Body</label>
                     <MarkdownEditor 
                        value={postFormData.content || ''} 
                        onChange={(md) => handleRichTextChange('content', md)} 
                     />
                  </div>

                  <div>
                     <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">FAQ Section</label>
                     <MarkdownEditor 
                        value={postFormData.faq || ''} 
                        onChange={(md) => handleRichTextChange('faq', md)} 
                     />
                  </div>
                </div>

                {/* CTA & REFERENCES */}
                <div className="bg-primary p-6 rounded-2xl border border-border space-y-6">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-accent border-b border-border pb-2">5. CTA & References</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">CTA Text</label>
                      <input
                        type="text"
                        name="ctaText"
                        value={postFormData.ctaText || ''}
                        onChange={handlePostChange}
                        className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">CTA Link</label>
                      <input
                        type="text"
                        name="ctaLink"
                        value={postFormData.ctaLink || ''}
                        onChange={handlePostChange}
                        className="w-full p-3 bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                     <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">References</label>
                     <MarkdownEditor 
                        value={postFormData.references || ''} 
                        onChange={(md) => handleRichTextChange('references', md)} 
                        minHeight="200px"
                     />
                  </div>

                  <div>
                     <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2">Related Posts</label>
                     <div className="flex flex-col gap-2">
                       {blogPosts.filter(p => p.id !== postFormData.id).map(p => (
                         <label key={p.id} className="flex items-center gap-2 text-sm text-text-primary">
                           <input 
                             type="checkbox" 
                             checked={postFormData.relatedPosts?.includes(p.id) || false}
                             onChange={(e) => {
                               const checked = e.target.checked;
                               setPostFormData(prev => {
                                 const related = prev.relatedPosts || [];
                                 if (checked) {
                                   return { ...prev, relatedPosts: [...related, p.id] };
                                 } else {
                                   return { ...prev, relatedPosts: related.filter(id => id !== p.id) };
                                 }
                               });
                             }}
                             className="rounded border-border text-accent focus:ring-accent"
                           />
                           {p.title}
                         </label>
                       ))}
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
                                        <img referrerPolicy="no-referrer" src={item.url} alt={item.alt} className="w-full h-full object-cover" />
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
                                 <img referrerPolicy="no-referrer" src={imageUrl} alt={value.alt} className="w-full h-full object-cover" />
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
