import React, { useState, useRef, useEffect } from 'react';
import { BlogPost, Author } from '../data/blogs';
import { PAGE_LABELS, FIELD_LABELS, PageContent } from '../data/pages';
import { Button } from '../components/Button';
import { Save, Upload, Download, Plus, Trash2, ArrowLeft, Lock, LogOut, Layout, FileText, Users, Image as ImageIcon } from 'lucide-react';
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
  imageUrl: 'https://picsum.photos/800/600',
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
  const pageImageInputRef = useRef<HTMLInputElement>(null);
  const [activePageField, setActivePageField] = useState<string | null>(null);

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

  const handlePostImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPostFormData(prev => ({ ...prev, imageUrl: result }));
      };
      reader.readAsDataURL(file);
    }
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

  const handlePageImageChange = (key: string, value: string) => {
    if (!selectedPage) return;
    const updatedPage = { ...pageContent[selectedPage], [key]: value };
    const updatedContent = { ...pageContent, [selectedPage]: updatedPage };
    updatePageContent(updatedContent);
  };

  const handlePageImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activePageField && selectedPage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        handlePageImageChange(activePageField, result);
      };
      reader.readAsDataURL(file);
    }
    setActivePageField(null); // Reset
  };

  const triggerPageImageUpload = (fieldKey: string) => {
    setActivePageField(fieldKey);
    setTimeout(() => pageImageInputRef.current?.click(), 100);
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-gray-100">
          <div className="text-center mb-8">
            <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-primary">
              <Lock size={32} />
            </div>
            <h1 className="text-2xl font-display font-bold text-brand-primary uppercase">Admin Access</h1>
            <p className="text-brand-gray text-sm mt-2">Please enter your credentials to continue.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-gray mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
                autoFocus
              />
            </div>
            <Button fullWidth type="submit">Login</Button>
          </form>
          <div className="mt-6 text-center">
            <Link to="/" className="text-xs font-bold uppercase tracking-wider text-brand-gray hover:text-brand-primary">Return to Site</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Actions */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-100 transition-colors">
              <ArrowLeft size={20} className="text-brand-primary" />
            </Link>
            <div>
               <h1 className="text-3xl font-display font-bold text-brand-primary uppercase">Admin Dashboard</h1>
               <p className="text-xs font-bold uppercase tracking-wider text-brand-gray">Manage your content</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 items-center">
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
            <div className="h-8 w-px bg-gray-300 mx-2 hidden md:block"></div>
            <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 hover:text-red-700 font-bold uppercase text-xs tracking-wider transition-colors">
               <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - Navigation */}
          <div className="lg:col-span-1 space-y-6">
             <div className="bg-white p-6 shadow-sm border border-gray-200 rounded-[2rem]">
               <h3 className="font-bold text-sm uppercase tracking-wider text-brand-primary mb-4">Content Types</h3>
               <nav className="space-y-2">
                 <button 
                   onClick={() => setView('blogs')}
                   className={`w-full flex items-center gap-3 px-4 py-3 font-bold rounded-xl text-sm transition-colors ${view === 'blogs' ? 'bg-brand-light text-brand-primary' : 'text-brand-gray hover:bg-gray-50'}`}
                 >
                   <FileText size={18} /> Blog Posts
                 </button>
                 <button 
                   onClick={() => setView('pages')}
                   className={`w-full flex items-center gap-3 px-4 py-3 font-bold rounded-xl text-sm transition-colors ${view === 'pages' ? 'bg-brand-light text-brand-primary' : 'text-brand-gray hover:bg-gray-50'}`}
                 >
                   <Layout size={18} /> Pages
                 </button>
               </nav>
             </div>

             {/* List Panel */}
             <div className="bg-white p-6 shadow-sm border border-gray-200 rounded-[2rem] h-fit">
               {view === 'blogs' ? (
                 <>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-bold text-sm uppercase tracking-wider text-brand-primary">Posts ({blogPosts.length})</h2>
                    <button 
                      type="button"
                      onClick={() => { setEditingId(null); setPostFormData({ ...EMPTY_POST, id: Date.now().toString() }); }}
                      className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider bg-brand-lime text-brand-primary px-3 py-1.5 rounded-full hover:bg-brand-green transition-colors"
                    >
                      <Plus size={12} /> New
                    </button>
                  </div>
                  <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {blogPosts.map(post => (
                      <div 
                        key={post.id} 
                        className={`p-4 border rounded-xl cursor-pointer transition-all duration-200 group ${editingId === post.id ? 'border-brand-primary bg-brand-light ring-1 ring-brand-primary' : 'border-gray-100 hover:border-brand-lime hover:bg-gray-50'}`}
                        onClick={() => setEditingId(post.id)}
                      >
                        <h3 className="font-bold text-brand-black text-sm truncate mb-1">{post.title}</h3>
                        <div className="flex justify-between items-center text-xs text-brand-gray">
                          <span>{post.date}</span>
                          <button 
                            type="button"
                            onClick={(e) => { e.stopPropagation(); handleDeletePost(post.id); }}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
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
                    <h2 className="font-bold text-sm uppercase tracking-wider text-brand-primary">Select Page</h2>
                   </div>
                   <div className="space-y-3">
                     {Object.keys(pageContent).map((key) => (
                       <div 
                         key={key}
                         className={`p-4 border rounded-xl cursor-pointer transition-all duration-200 ${selectedPage === key ? 'border-brand-primary bg-brand-light ring-1 ring-brand-primary' : 'border-gray-100 hover:border-brand-lime hover:bg-gray-50'}`}
                         onClick={() => setSelectedPage(key as keyof PageContent)}
                       >
                         <h3 className="font-bold text-brand-black text-sm">{PAGE_LABELS[key] || key}</h3>
                       </div>
                     ))}
                   </div>
                 </>
               )}
             </div>
          </div>

          {/* Main: Editor */}
          <div className="lg:col-span-3 bg-white p-8 shadow-sm border border-gray-200 rounded-[2rem]">
            {view === 'blogs' ? (
              // BLOG EDITOR
              <form onSubmit={handleSavePost} className="space-y-6">
                <h2 className="font-bold text-2xl mb-8 text-brand-primary border-b border-gray-100 pb-4">
                  {editingId ? 'Edit Post' : 'Create New Post'}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-gray mb-2">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={postFormData.title}
                      onChange={handlePostChange}
                      required
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-gray mb-2">Slug</label>
                    <input
                      type="text"
                      name="slug"
                      value={postFormData.slug}
                      onChange={handlePostChange}
                      required
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-gray mb-2">Category</label>
                    <input
                      type="text"
                      name="category"
                      value={postFormData.category}
                      onChange={handlePostChange}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-gray mb-2">Date</label>
                    <input
                      type="text"
                      name="date"
                      value={postFormData.date}
                      onChange={handlePostChange}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-gray mb-2">Image</label>
                  <div className="flex gap-4">
                    <div className="flex-grow flex gap-2">
                      <input
                        type="text"
                        name="imageUrl"
                        value={postFormData.imageUrl}
                        onChange={handlePostChange}
                        className="flex-grow p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                      />
                      <input
                        type="file"
                        ref={imageInputRef}
                        onChange={handlePostImageUpload}
                        className="hidden"
                        accept="image/*"
                      />
                      <Button 
                        type="button" 
                        variant="secondary" 
                        onClick={() => imageInputRef.current?.click()}
                        className="shrink-0"
                      >
                        <ImageIcon size={16} className="mr-2" /> Upload
                      </Button>
                    </div>
                    {postFormData.imageUrl && (
                      <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                        <img src={postFormData.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-gray mb-2">Excerpt</label>
                  <textarea
                    name="excerpt"
                    value={postFormData.excerpt}
                    onChange={handlePostChange}
                    rows={2}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <div>
                   <label className="block text-xs font-bold uppercase tracking-wider text-brand-gray mb-2">Content</label>
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
                <h2 className="font-bold text-2xl mb-8 text-brand-primary border-b border-gray-100 pb-4">
                  Edit {selectedPage ? PAGE_LABELS[selectedPage] : 'Page'} Images
                </h2>
                
                {!selectedPage ? (
                   <div className="text-center py-20 text-brand-gray">
                     <p>Select a page from the left to edit its images.</p>
                   </div>
                ) : (
                  <div className="space-y-8">
                    {Object.keys(pageContent[selectedPage]).map((fieldKey) => {
                      const value = (pageContent[selectedPage] as any)[fieldKey];
                      return (
                        <div key={fieldKey} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                           <div className="flex justify-between items-start mb-4">
                             <div>
                               <label className="block text-sm font-bold uppercase tracking-wider text-brand-primary mb-1">
                                 {FIELD_LABELS[fieldKey] || fieldKey}
                               </label>
                               <p className="text-xs text-brand-gray">Update the image displayed in this section.</p>
                             </div>
                             {value && (
                               <div className="w-24 h-16 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                                 <img src={value} alt="Preview" className="w-full h-full object-cover" />
                               </div>
                             )}
                           </div>
                           
                           <div className="flex gap-2">
                             <input
                               type="text"
                               value={value}
                               onChange={(e) => handlePageImageChange(fieldKey, e.target.value)}
                               placeholder="Image URL..."
                               className="flex-grow p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none"
                             />
                             <Button 
                               type="button" 
                               variant="secondary"
                               onClick={() => triggerPageImageUpload(fieldKey)}
                             >
                               <Upload size={16} className="mr-2" /> Upload
                             </Button>
                           </div>
                        </div>
                      );
                    })}
                    
                    {/* Hidden Global Input for Page Images */}
                    <input
                      type="file"
                      ref={pageImageInputRef}
                      onChange={handlePageImageUpload}
                      className="hidden"
                      accept="image/*"
                    />
                    
                    <div className="pt-4 flex justify-end">
                      <p className="text-sm text-brand-primary bg-brand-light px-4 py-2 rounded-lg inline-flex items-center">
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