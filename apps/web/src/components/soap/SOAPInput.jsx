
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SOAPInput({ onGenerate, isGenerating }) {
  const [input, setInput] = useState('');

  const handleGenerate = () => {
    if (input.trim().length > 10) {
      onGenerate(input);
    }
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear your notes?")) {
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
      <div className="p-4 border-b border-border bg-muted/20 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            Clinical Observations
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Enter your raw notes, shorthand, or observations here.
          </p>
        </div>
      </div>
      
      <div className="flex-1 p-4">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., Pt presents with R shoulder pain x 3 wks. Insidious onset. Pain 6/10 overhead reaching. AROM Flex 120deg, Abd 100deg. +Hawkins-Kennedy. Weakness ER 4-/5. Needs postural edu and RC strengthening..."
          className="w-full h-full min-h-[300px] resize-none bg-background/50 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground text-base p-0 placeholder:text-muted-foreground/60"
          disabled={isGenerating}
        />
      </div>

      <div className="p-4 border-t border-border bg-muted/20 flex items-center justify-between">
        <span className="text-xs text-muted-foreground font-medium">
          {input.length} characters
        </span>
        <div className="flex gap-3">
          <Button 
            variant="ghost" 
            onClick={handleClear}
            disabled={!input || isGenerating}
            className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Clear
          </Button>
          <Button 
            onClick={handleGenerate}
            disabled={input.length < 10 || isGenerating}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 shadow-md shadow-primary/20 transition-all hover:shadow-primary/40"
          >
            {isGenerating ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center"
              >
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                Generating...
              </motion.div>
            ) : (
              <span className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                Generate SOAP
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
