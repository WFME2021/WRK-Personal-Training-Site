import React, { useState, useEffect, useRef } from 'react';
import { marked } from 'marked';
import { Eye, Edit2, Image as ImageIcon } from 'lucide-react';

interface MarkdownEditorProps {
  value: string;
  onChange: (markdown: string) => void;
  placeholder?: string;
  minHeight?: string;
}

export const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ 
  value, 
  onChange, 
  placeholder = "Paste your GPT Markdown here... (Drag & Drop images supported)",
  minHeight = "400px"
}) => {
  const [isPreview, setIsPreview] = useState(false);
  const [htmlPreview, setHtmlPreview] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isPreview) {
      const html = marked.parse(value || '');
      setHtmlPreview(html as string);
    }
  }, [value, isPreview]);

  // Compress image before converting to base64
  const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
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
          ctx?.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/webp', 0.8));
        };
        img.onerror = (error) => reject(error);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleDrop = async (e: React.DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      await processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      await processFile(e.target.files[0]);
    }
    // Reset input so the same file can be selected again if needed
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const processFile = async (file: File) => {
    if (file.type.startsWith('image/')) {
      try {
        // Insert a placeholder
        const placeholderText = `\n![Uploading ${file.name}...]()\n`;
        const safeValue = value || '';
        const cursorPosition = textareaRef.current?.selectionStart || safeValue.length;
        const textBefore = safeValue.substring(0, cursorPosition);
        const textAfter = safeValue.substring(cursorPosition);
        onChange(textBefore + placeholderText + textAfter);

        // Compress and get base64
        const base64Data = await compressImage(file);

        // Upload to Firebase Storage
        const { uploadImageToStorage } = await import('../firebase');
        const ext = file.name.split('.').pop() || 'webp';
        const filename = `markdown-${Date.now()}.${ext}`;
        const downloadUrl = await uploadImageToStorage(base64Data, `images/${filename}`);

        // Replace placeholder with actual image URL
        const newText = (textBefore + placeholderText + textAfter).replace(
          placeholderText,
          `\n![${file.name}](${downloadUrl})\n`
        );
        onChange(newText);
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to process image.");
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-secondary flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between bg-primary border-b border-border p-2">
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={() => setIsPreview(false)}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-colors ${!isPreview ? 'bg-accent text-white' : 'text-text-secondary hover:bg-secondary'}`}
          >
            <Edit2 size={14} /> Edit Markdown
          </button>
          <button
            type="button"
            onClick={() => setIsPreview(true)}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-colors ${isPreview ? 'bg-accent text-white' : 'text-text-secondary hover:bg-secondary'}`}
          >
            <Eye size={14} /> Live Preview
          </button>
        </div>
        <div className="flex items-center gap-2">
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            ref={fileInputRef}
            onChange={handleFileInput}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-colors text-text-secondary hover:bg-secondary hover:text-accent"
            title="Insert Image"
          >
            <ImageIcon size={14} /> Insert Image
          </button>
          <div className="hidden sm:flex items-center gap-2 text-[10px] text-text-secondary uppercase font-bold tracking-wider px-2 border-l border-border ml-1 pl-3">
            Drag & Drop Supported
          </div>
        </div>
      </div>

      {/* Editor / Preview Area */}
      <div className="relative" style={{ minHeight }}>
        {!isPreview ? (
          <textarea
            ref={textareaRef}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            placeholder={placeholder}
            className={`absolute inset-0 w-full h-full p-4 bg-secondary text-text-primary resize-none outline-none font-mono text-sm custom-scrollbar transition-colors ${isDragging ? 'bg-accent/5 ring-2 ring-inset ring-accent' : ''}`}
          />
        ) : (
          <div 
            className="absolute inset-0 w-full h-full p-6 bg-secondary text-text-primary overflow-y-auto custom-scrollbar prose prose-slate dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlPreview }}
          />
        )}
      </div>
    </div>
  );
};
