
import React, { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';

const GIFUpload = ({ value, onChange }) => {
  const [preview, setPreview] = useState(value || null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }
      const url = URL.createObjectURL(file);
      setPreview(url);
      onChange(file);
    }
  };

  return (
    <div 
      className="relative border-2 border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-muted/50 transition-colors min-h-[150px]"
      onClick={() => fileInputRef.current?.click()}
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        accept="image/gif" 
        onChange={handleFileChange} 
      />
      
      {preview ? (
        <div className="relative w-full h-full min-h-[120px]">
          <img src={preview} alt="GIF Preview" className="w-full h-full object-contain rounded-lg" />
          <button 
            onClick={(e) => { e.stopPropagation(); setPreview(null); onChange(null); }}
            className="absolute top-2 right-2 p-1 bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <>
          <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mb-2">
            <Upload className="w-5 h-5 text-muted-foreground" />
          </div>
          <p className="text-sm font-medium text-foreground">Upload GIF</p>
          <p className="text-xs text-muted-foreground mt-1">Max 10MB</p>
        </>
      )}
    </div>
  );
};

export default GIFUpload;
