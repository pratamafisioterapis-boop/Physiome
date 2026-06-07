
import React from 'react';
import Input from '@/components/Input.jsx';
import { Video } from 'lucide-react';

const VideoUpload = ({ value, onChange }) => {
  return (
    <div className="space-y-2">
      <Input 
        label="Video URL (YouTube/Vimeo)" 
        value={value || ''} 
        onChange={(e) => onChange(e.target.value)} 
        placeholder="https://youtube.com/watch?v=..."
      />
      {value && (
        <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border border-border overflow-hidden">
          {value.includes('youtube.com') || value.includes('youtu.be') ? (
            <iframe 
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${value.split('v=')[1]?.split('&')[0] || value.split('youtu.be/')[1]}`} 
              allowFullScreen 
            />
          ) : (
            <div className="flex flex-col items-center text-muted-foreground">
              <Video className="w-8 h-8 mb-2" />
              <span className="text-sm">Video Preview</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
