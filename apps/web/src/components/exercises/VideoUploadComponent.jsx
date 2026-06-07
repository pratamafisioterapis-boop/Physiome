
import React, { useState, useRef } from 'react';
import { Upload, X, FileVideo } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

const MAX_SIZE = 100 * 1024 * 1024; // 100MB
const ALLOWED_TYPES = ['video/mp4', 'video/webm', 'video/quicktime'];

const VideoUploadComponent = ({ onFileSelect, isUploading, uploadProgress }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const validateFile = (file) => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      toast.error('Invalid file type. Only MP4, WebM, and MOV are allowed.');
      return false;
    }
    if (file.size > MAX_SIZE) {
      toast.error('File size exceeds 100MB limit.');
      return false;
    }
    return true;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
        onFileSelect(file);
      }
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
        onFileSelect(file);
      }
    }
  };

  const handleRemove = () => {
    setSelectedFile(null);
    onFileSelect(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <div 
        className={`relative border-2 border-dashed rounded-xl p-8 transition-colors flex flex-col items-center justify-center text-center ${
          dragActive ? 'border-primary bg-primary/5' : 'border-border bg-card hover:bg-muted/50'
        } ${selectedFile ? 'hidden' : 'block'}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input 
          type="file" 
          ref={inputRef}
          onChange={handleChange} 
          accept="video/mp4,video/webm,video/quicktime"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
          <Upload className="w-6 h-6" />
        </div>
        <h3 className="font-semibold text-lg text-foreground mb-1">Upload Video</h3>
        <p className="text-sm text-muted-foreground max-w-xs mx-auto mb-4">
          Drag and drop your video here, or click to browse.
        </p>
        <div className="flex flex-col gap-1 text-xs text-muted-foreground opacity-80">
          <span>Supported formats: MP4, WebM, MOV</span>
          <span>Maximum file size: 100MB</span>
        </div>
      </div>

      {selectedFile && (
        <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-4 shadow-sm">
          <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
            <FileVideo className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{selectedFile.name}</p>
            <p className="text-xs text-muted-foreground">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
            
            {isUploading && (
              <div className="mt-2 space-y-1">
                <Progress value={uploadProgress} className="h-1.5" />
                <p className="text-xs text-muted-foreground text-right">{uploadProgress}%</p>
              </div>
            )}
          </div>
          {!isUploading && (
            <Button variant="ghost" size="icon" onClick={handleRemove} className="shrink-0 text-muted-foreground hover:text-destructive transition-colors">
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoUploadComponent;
