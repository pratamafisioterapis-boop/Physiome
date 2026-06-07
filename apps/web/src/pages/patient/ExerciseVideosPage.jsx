
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Search, Filter, PlayCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const mockVideos = [
  { id: 1, title: 'Heel Slides', category: 'Knee', duration: '2:15', thumb: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80' },
  { id: 2, title: 'Quad Sets', category: 'Knee', duration: '1:45', thumb: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&q=80' },
  { id: 3, title: 'Straight Leg Raises', category: 'Knee', duration: '3:20', thumb: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80' },
  { id: 4, title: 'Cervical Retraction', category: 'Neck', duration: '1:30', thumb: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80' },
];

const ExerciseVideosPage = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <Helmet><title>Video Library | Physiome</title></Helmet>
      
      <header>
        <h1 className="text-3xl font-bold text-foreground tracking-tight">Exercise Videos</h1>
        <p className="text-muted-foreground mt-1">Browse your prescribed exercise demonstrations.</p>
      </header>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search exercises..." 
            className="pl-9 bg-card border-border rounded-xl h-11"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button variant="outline" className="rounded-xl h-11 shrink-0">
          <Filter className="w-4 h-4 mr-2" /> Filters
        </Button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {['All', 'Knee', 'Neck', 'Shoulder', 'Back', 'Hip'].map(cat => (
          <Badge key={cat} variant={cat === 'All' ? 'default' : 'secondary'} className="px-4 py-1.5 rounded-full cursor-pointer whitespace-nowrap">
            {cat}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockVideos.filter(v => v.title.toLowerCase().includes(search.toLowerCase())).map(video => (
          <Card key={video.id} className="border-0 shadow-soft overflow-hidden group cursor-pointer">
            <div className="relative h-48 bg-muted overflow-hidden">
              <img src={video.thumb} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <PlayCircle className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md font-medium">
                {video.duration}
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg text-foreground mb-1">{video.title}</h3>
              <p className="text-sm text-muted-foreground">{video.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideosPage;
