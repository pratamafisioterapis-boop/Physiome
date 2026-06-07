
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Trash2, Eye, Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';

export default function HistoryItem({ history, onLoad, onDelete }) {
  const dateObj = new Date(history.created);
  const isGenerated = Boolean(history.generated_soap && Object.keys(history.generated_soap).length > 0);

  return (
    <div className="group bg-card rounded-xl border border-border p-4 hover:border-primary/40 hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {format(dateObj, 'MMM d, yyyy')}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {format(dateObj, 'h:mm a')}
          </span>
          {history.patientName && (
            <span className="px-2 py-0.5 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium">
              Patient: {history.patientName}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="ghost" size="sm" onClick={() => onLoad(history)} className="h-8">
            <Eye className="w-4 h-4 mr-2" />
            Load
          </Button>
          <Button variant="ghost" size="icon" onClick={() => onDelete(history.id)} className="h-8 w-8 text-destructive hover:bg-destructive/10">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="flex gap-3">
        <div className="mt-1">
          <div className={`p-2 rounded-lg ${isGenerated ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
            <FileText className="w-5 h-5" />
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-medium text-foreground mb-1">Input Notes:</h4>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {history.input_notes || 'No input provided'}
          </p>
        </div>
      </div>
    </div>
  );
}
