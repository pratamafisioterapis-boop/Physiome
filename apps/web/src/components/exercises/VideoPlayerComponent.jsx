
import React from 'react';
import { VideoOff } from 'lucide-react';

const VideoPlayerComponent = ({ videoUrl, thumbnailUrl, title = 'Exercise Video' }) => {
  if (!videoUrl) {
    return (
      <div className="w-full aspect-video bg-muted/50 rounded-xl border border-border flex flex-col items-center justify-center text-muted-foreground shadow-sm">
        <VideoOff className="w-12 h-12 mb-3 opacity-50" />
        <p className="font-medium text-foreground">No demonstration video available</p>
        <p className="text-sm">Please follow the written instructions.</p>
      </div>
    );
  }

  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden border border-border shadow-md bg-black relative">
      <video
        className="w-full h-full object-contain"
        controls
        poster={thumbnailUrl}
        preload="metadata"
        title={title}
      >
        <source src={videoUrl} type="video/mp4" />
        <source src={videoUrl} type="video/webm" />
        <source src={videoUrl} type="video/quicktime" />
        <p>Your browser does not support HTML5 video. Here is a <a href={videoUrl} className="text-primary hover:underline">link to the video</a> instead.</p>
      </video>
    </div>
  );
};

export default VideoPlayerComponent;
