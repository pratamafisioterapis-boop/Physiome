
import React, { useState, useEffect } from 'react';
import HistoryItem from './HistoryItem';
import { Input } from '@/components/ui/input';
import { Search, Loader2 } from 'lucide-react';
import pb from '@/lib/pocketbaseClient.js';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { toast } from 'sonner';

export default function GenerationHistory({ onLoadHistory }) {
  const { currentUser } = useAuth();
  const [historyList, setHistoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchHistory = async () => {
    if (!currentUser) return;
    setIsLoading(true);
    try {
      // Assuming SOAPHistory collection maps patient_id to actual names if expanded, 
      // but if not, we display basic info.
      const records = await pb.collection('SOAPHistory').getList(1, 50, {
        filter: `therapist_id = "${currentUser.id}" && deleted = false`,
        sort: '-created',
        $autoCancel: false
      });
      setHistoryList(records.items);
    } catch (err) {
      console.error("Error fetching SOAP history:", err);
      // Fallback silently
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [currentUser]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this history record?")) return;
    try {
      await pb.collection('SOAPHistory').update(id, { deleted: true }, { $autoCancel: false });
      setHistoryList(prev => prev.filter(item => item.id !== id));
      toast.success("Record deleted");
    } catch (err) {
      toast.error("Failed to delete record");
    }
  };

  const filteredHistory = historyList.filter(item => 
    item.input_notes?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
      <div className="p-4 border-b border-border bg-muted/20">
        <h2 className="text-lg font-semibold text-foreground mb-3">Generation History</h2>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search past notes..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 bg-background border-border"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
        {isLoading ? (
          <div className="flex justify-center p-8">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        ) : filteredHistory.length === 0 ? (
          <div className="text-center p-8 text-muted-foreground">
            {searchTerm ? "No results found." : "No generation history yet."}
          </div>
        ) : (
          filteredHistory.map(item => (
            <HistoryItem 
              key={item.id} 
              history={item} 
              onLoad={onLoadHistory}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}
