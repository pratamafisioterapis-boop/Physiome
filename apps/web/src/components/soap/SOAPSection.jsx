
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Edit2, Save, X, Copy, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

export default function SOAPSection({ title, content, isStreaming, onChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [localContent, setLocalContent] = useState(content);
  const [copied, setCopied] = useState(false);

  // Sync with prop when not editing
  useEffect(() => {
    if (!isEditing) {
      setLocalContent(content);
    }
  }, [content, isEditing]);

  const handleSave = () => {
    onChange(title.toLowerCase(), localContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setLocalContent(content);
    setIsEditing(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${title.toUpperCase()}\n${localContent}`);
    setCopied(true);
    toast.success(`${title} section copied`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card/50 rounded-xl border border-border overflow-hidden transition-colors hover:border-primary/30"
    >
      <div className="bg-muted/30 px-4 py-3 border-b border-border flex items-center justify-between">
        <h3 className="font-semibold text-foreground tracking-wide">{title}</h3>
        
        {!isStreaming && (
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity md:opacity-100">
            {!isEditing ? (
              <>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary" onClick={() => setIsEditing(true)}>
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary" onClick={handleCopy}>
                  {copied ? <CheckCircle2 className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10" onClick={handleCancel}>
                  <X className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-success hover:bg-success/10" onClick={handleSave}>
                  <Save className="w-4 h-4" />
                </Button>
              </>
            )}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <AnimatePresence mode="wait">
          {isEditing ? (
            <motion.div
              key="editing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              <Textarea
                value={localContent}
                onChange={(e) => setLocalContent(e.target.value)}
                className="min-h-[120px] bg-background border-primary/50 focus-visible:ring-1 text-foreground"
                autoFocus
              />
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm" onClick={handleCancel}>Cancel</Button>
                <Button size="sm" onClick={handleSave}>Save Changes</Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="viewing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-muted-foreground whitespace-pre-wrap leading-relaxed min-h-[60px]"
            >
              {content || (
                <span className="italic opacity-50">
                  {isStreaming ? (
                    <span className="flex items-center">
                      Generating<span className="w-1.5 h-4 ml-1 bg-primary animate-blink inline-block" />
                    </span>
                  ) : "No content generated yet."}
                </span>
              )}
              {isStreaming && content && (
                <span className="w-1.5 h-4 ml-1 bg-primary animate-blink inline-block align-middle" />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
