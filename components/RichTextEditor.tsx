
import React, { useEffect, useRef, useState } from 'react';
import { 
  Bold, Italic, List, Link as LinkIcon, Image as ImageIcon, 
  Heading1, Heading2, Quote, Undo, Redo, Code, X 
} from 'lucide-react';
import { Button } from './Button';

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [showHtml, setShowHtml] = useState(false);

  // Sync value to editor content (only if different to prevent cursor jumping)
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value && !showHtml) {
      editorRef.current.innerHTML = value;
    }
  }, [value, showHtml]);

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const exec = (command: string, value: string | null = null) => {
    document.execCommand(command, false, value ?? undefined);
    if (editorRef.current) {
      editorRef.current.focus();
      onChange(editorRef.current.innerHTML);
    }
  };

  const addLink = () => {
    const url = window.prompt('Enter the URL:');
    if (url) exec('createLink', url);
  };

  const addImage = () => {
    const url = window.prompt('Enter the Image URL:');
    if (url) exec('insertImage', url);
  };

  // HTML Mode Handler
  const handleHtmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const ToolbarButton = ({ onClick, icon: Icon, title, active = false }: any) => (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`p-2 rounded hover:bg-primary transition-colors ${active ? 'bg-primary text-accent' : 'text-text-secondary hover:text-text-primary'}`}
    >
      <Icon size={18} />
    </button>
  );

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-secondary shadow-sm flex flex-col h-[500px]">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-border bg-secondary">
        <ToolbarButton onClick={() => exec('bold')} icon={Bold} title="Bold" />
        <ToolbarButton onClick={() => exec('italic')} icon={Italic} title="Italic" />
        <div className="w-px h-5 bg-border mx-2" />
        <ToolbarButton onClick={() => exec('formatBlock', 'H2')} icon={Heading1} title="Heading 2" />
        <ToolbarButton onClick={() => exec('formatBlock', 'H3')} icon={Heading2} title="Heading 3" />
        <ToolbarButton onClick={() => exec('formatBlock', 'blockquote')} icon={Quote} title="Quote" />
        <div className="w-px h-5 bg-border mx-2" />
        <ToolbarButton onClick={() => exec('insertUnorderedList')} icon={List} title="Bullet List" />
        <ToolbarButton onClick={addLink} icon={LinkIcon} title="Insert Link" />
        <ToolbarButton onClick={addImage} icon={ImageIcon} title="Insert Image" />
        
        <div className="flex-grow" />
        
        <button 
          type="button"
          onClick={() => setShowHtml(!showHtml)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors ${showHtml ? 'bg-text-primary text-primary' : 'bg-primary text-text-secondary hover:bg-border'}`}
        >
          <Code size={14} /> {showHtml ? 'Visual' : 'HTML'}
        </button>
      </div>

      {/* Editor Area */}
      <div className="flex-grow overflow-hidden relative">
        {showHtml ? (
          <textarea
            value={value}
            onChange={handleHtmlChange}
            className="w-full h-full p-4 font-mono text-sm resize-none focus:outline-none bg-primary text-text-primary"
            placeholder="Edit HTML directly..."
          />
        ) : (
          <div
            ref={editorRef}
            contentEditable
            onInput={handleInput}
            className="w-full h-full p-6 overflow-y-auto focus:outline-none prose max-w-none"
            style={{
              fontFamily: 'Inter, sans-serif'
            }}
          />
        )}
      </div>
      
      {/* Footer Info */}
      <div className="px-4 py-2 bg-secondary border-t border-border text-[10px] text-text-secondary uppercase tracking-wider font-bold flex justify-between">
        <span>{showHtml ? 'Editing Source Code' : 'Visual Editor Mode'}</span>
        <span>{value.length} Characters</span>
      </div>

      <style>{`
        /* Custom Styles for ContentEditable to match Blog Frontend but adapt to Theme */
        [contenteditable] { color: var(--text-primary); }
        [contenteditable] h2 { font-size: 1.5rem; font-weight: 700; margin-top: 1.5em; margin-bottom: 0.5em; text-transform: uppercase; color: var(--text-primary); font-family: 'Oswald', sans-serif; }
        [contenteditable] h3 { font-size: 1.25rem; font-weight: 600; margin-top: 1.2em; margin-bottom: 0.5em; color: var(--text-primary); font-family: 'Oswald', sans-serif; }
        [contenteditable] p { margin-bottom: 1em; line-height: 1.6; color: var(--text-secondary); }
        [contenteditable] ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1em; color: var(--text-secondary); }
        [contenteditable] li { margin-bottom: 0.5em; }
        [contenteditable] blockquote { border-left: 4px solid var(--accent); padding-left: 1em; font-style: italic; color: var(--text-secondary); margin-bottom: 1em; }
        [contenteditable] img { max-width: 100%; height: auto; border-radius: 0.5rem; margin: 1em 0; }
        [contenteditable] a { color: var(--accent); text-decoration: underline; font-weight: 500; }
      `}</style>
    </div>
  );
};
