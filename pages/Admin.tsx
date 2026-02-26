
import React, { useState, useRef, useEffect } from 'react';
import { BlogPost, Author } from '../data/blogs';
import { PAGE_LABELS, FIELD_LABELS, PageContent, CMSImage } from '../data/pages';
import { Button } from '../components/Button';
import { Save, Upload, Download, Plus, Trash2, ArrowLeft, Lock, LogOut, Layout, FileText, Image as ImageIcon, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RichTextEditor } from '../components/RichTextEditor';
import { useContent } from '../context/ContentContext';

// Default Author for new posts
const DEFAULT_AUTHOR: Author = {
  name: "Admin",
  role: "Editor",
  bio: "",
  avatarUrl: "https://picsum.photos/100"
};

const EMPTY_POST: BlogPost = {
  id: '',
  slug: '',
  title: '',
  excerpt: '',
  content: '',
  date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
  isoDate: new Date().toISOString(),
  category: 'General',
  image: {
    url: 'https://picsum.photos/800/600',
    alt: 'Default blog post image',
    seoDescription: 'Default blog post image'
  },
  author: DEFAULT_AUTHOR,
  seoTitle: '',
  seoDescription: ''
};

export const Admin: React.FC = () => {
  const { blogPosts, pageContent, updateBlogPosts, updatePageContent, importData } = useContent();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  const [view, setView] = useState<'blogs' | 'pages'>('blogs');
  const [editingId, setEditingId] = useState<string | null>(null); // Post ID
  const [selectedPage, setSelectedPage] = useState<keyof PageContent | null>(null); // Page Key
  
  const [postFormData, setPostFormData] = useState<BlogPost>(EMPTY_POST);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  // Check auth on mount
  useEffect(() => {
    const auth = sessionStorage.getItem('wrk_admin_auth');
    if (auth === 'true') setIsAuthenticated(true);
  }, []);

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'wrk') { // Default Password
      setIsAuthenticated(true);
      sessionStorage.setItem('wrk_admin_auth', 'true');
    } else {
      alert('Incorrect password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('wrk_admin_auth');
    setPassword('');
  };

  const handleSaveAndPublish = () => {
    // Force a reload to ensure all components pick up the latest data from localStorage
    if (window.confirm('This will refresh the site to apply all changes. Continue?')) {
        window.location.reload();
    }
  };

  // --- BLOG LOGIC ---

  // Load selected post into form
  useEffect(() => {
    if (view === 'blogs' && editingId) {
      const post = blogPosts.find(p => p.id === editingId);
      if (post) setPostFormData(post);
    } else if (view === 'blogs') {
      setPostFormData({ ...EMPTY_POST, id: Date.now().toString() });
    }
  }, [editingId, blogPosts, view]);

  const handlePostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPostFormData(prev => ({ ...prev, [name]: value }));
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

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    let updatedPosts;
    if (editingId) {
      updatedPosts = blogPosts.map(p => p.id === editingId ? postFormData : p);
    } else {
      updatedPosts = [...blogPosts, { ...postFormData, id: Date.now().toString() }];
    }
    updateBlogPosts(updatedPosts);
    setEditingId(null);
    setPostFormData({ ...EMPTY_POST, id: Date.now().toString() });
    alert('Post saved! It is now live on the site.');
  };

  const handleDeletePost = (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const updatedPosts = blogPosts.filter(p => p.id !== id);
      updateBlogPosts(updatedPosts);
      if (editingId === id) {
        setEditingId(null);
        setPostFormData({ ...EMPTY_POST, id: Date.now().toString() });
      }
    }
  };

  // --- PAGE CONTENT LOGIC ---

  const handlePageImageChange = (key: string, field: keyof CMSImage, value: string, index?: number) => {
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
    }

    const updatedPage = { ...currentPage, [key]: updatedValue };
    const updatedContent = { ...pageContent, [selectedPage]: updatedPage };
    updatePageContent(updatedContent);
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
           alert('Blog posts imported successfully!');
        } else {
           importData(json);
           alert('Site content imported successfully!');
        }
      } catch (error) {
        alert('Error parsing JSON file.');
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
            <p className="text-text-secondary text-sm mt-2">Please enter your credentials to continue.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 bg-primary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder-text-secondary/50"
                placeholder="••••••••"
                autoFocus
              />
            </div>
            <Button fullWidth type="submit">Login</Button>
          </form>
          <div className="mt-6 text-center">
            <Link to="/" className="text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-accent">Return to Site</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary pt-28 pb-12 px-6 transition-colors duration-300">
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
            <Button variant="primary" type="button" onClick={handleSaveAndPublish} className="bg-green-600 hover:bg-green-700 text-white border-transparent">
               <RefreshCw size={16} className="mr-2" /> Save & Publish
            </Button>
            <div className="h-8 w-px bg-border mx-2 hidden md:block"></div>
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden" 
              accept=".json"
            />
            <Button variant="secondary" type="button" onClick={() => fileInputRef.current?.click()}>
              <Upload size={16} className="mr-2" /> Import Backup
            </Button>
            <Button variant="secondary" type="button" onClick={handleDownload}>
              <Download size={16} className="mr-2" /> Export Backup
            </Button>
            <div className="h-8 w-px bg-border mx-2 hidden md:block"></div>
            <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 hover:text-red-600 font-bold uppercase text-xs tracking-wider transition-colors">
               <LogOut size={16} /> Logout
            </button>
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
                        <h3 className="font-bold text-text-primary text-sm truncate mb-1">{post.title}</h3>
                        <div className="flex justify-between items-center text-xs text-text-secondary">
                          <span>{post.date}</span>
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
                    ))}
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
              <form onSubmit={handleSavePost} className="space-y-6">
                <h2 className="font-bold text-2xl mb-8 text-text-primary border-b border-border pb-4">
                  {editingId ? 'Edit Post' : 'Create New Post'}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={postFormData.title}
                      onChange={handlePostChange}
                      required
                      className="w-full p-3 bg-primary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Slug</label>
                    <input
                      type="text"
                      name="slug"
                      value={postFormData.slug}
                      onChange={handlePostChange}
                      required
                      className="w-full p-3 bg-primary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Category</label>
                    <input
                      type="text"
                      name="category"
                      value={postFormData.category}
                      onChange={handlePostChange}
                      className="w-full p-3 bg-primary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Date</label>
                    <input
                      type="text"
                      name="date"
                      value={postFormData.date}
                      onChange={handlePostChange}
                      className="w-full p-3 bg-primary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Image</label>
                  <div className="bg-primary p-6 rounded-2xl border border-border">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-full">
                         <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1">Image URL</label>
                         <input
                           type="text"
                           value={postFormData.image.url}
                           onChange={(e) => handleBlogImageChange('url', e.target.value)}
                           className="w-full p-3 bg-secondary text-text-primary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                           placeholder="https://..."
                         />
                      </div>
                      {postFormData.image.url && (
                        <div className="w-24 h-16 rounded-lg overflow-hidden border border-border shadow-sm ml-4 shrink-0">
                          <img src={postFormData.image.url} alt={postFormData.image.alt} className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1">Alt Text</label>
                        <input
                          type="text"
                          value={postFormData.image.alt}
                          onChange={(e) => handleBlogImageChange('alt', e.target.value)}
                          className="w-full p-3 bg-secondary text-text-primary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                          placeholder="Image description..."
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1">SEO Description</label>
                        <input
                          type="text"
                          value={postFormData.image.seoDescription}
                          onChange={(e) => handleBlogImageChange('seoDescription', e.target.value)}
                          className="w-full p-3 bg-secondary text-text-primary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                          placeholder="SEO context..."
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Excerpt</label>
                  <textarea
                    name="excerpt"
                    value={postFormData.excerpt}
                    onChange={handlePostChange}
                    rows={2}
                    className="w-full p-3 bg-primary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <div>
                   <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Content</label>
                   <RichTextEditor 
                      value={postFormData.content} 
                      onChange={handleContentChange} 
                   />
                </div>
                
                <div className="pt-4 flex justify-end gap-4">
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
                    {Object.keys(pageContent[selectedPage]).map((fieldKey) => {
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      const value = (pageContent[selectedPage] as any)[fieldKey];
                      const label = FIELD_LABELS[fieldKey] || fieldKey;

                      if (Array.isArray(value)) {
                        return (
                           <div key={fieldKey} className="bg-primary p-6 rounded-2xl border border-border">
                             <h3 className="block text-sm font-bold uppercase tracking-wider text-accent mb-4">{label} (List)</h3>
                             <div className="space-y-6">
                               {value.map((item: CMSImage, index: number) => (
                                 <div key={index} className="p-4 border border-border rounded-xl bg-secondary">
                                   <div className="flex gap-4 items-start mb-4">
                                      <div className="w-20 h-20 rounded-lg overflow-hidden border border-border shrink-0">
                                        <img src={item.url} alt={item.alt} className="w-full h-full object-cover" />
                                      </div>
                                      <div className="flex-grow space-y-3">
                                        <div>
                                          <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1">Image URL</label>
                                          <input
                                            type="text"
                                            value={item.url}
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
                                              value={item.alt}
                                              onChange={(e) => handlePageImageChange(fieldKey, 'alt', e.target.value, index)}
                                              className="w-full p-2 bg-primary text-text-primary border border-border rounded-lg text-sm"
                                              placeholder="Description..."
                                            />
                                          </div>
                                          <div>
                                            <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1">SEO Desc</label>
                                            <input
                                              type="text"
                                              value={item.seoDescription}
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
                             {value.url && (
                               <div className="w-24 h-16 rounded-lg overflow-hidden border border-border shadow-sm">
                                 <img src={value.url} alt={value.alt} className="w-full h-full object-cover" />
                               </div>
                             )}
                           </div>
                           
                           <div className="space-y-4">
                             <div>
                               <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1">Image URL</label>
                               <input
                                 type="text"
                                 value={value.url}
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
                                   value={value.alt}
                                   onChange={(e) => handlePageImageChange(fieldKey, 'alt', e.target.value)}
                                   placeholder="Image description..."
                                   className="w-full p-3 bg-secondary text-text-primary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                                 />
                               </div>
                               <div>
                                 <label className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-1">SEO Description</label>
                                 <input
                                   type="text"
                                   value={value.seoDescription}
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
