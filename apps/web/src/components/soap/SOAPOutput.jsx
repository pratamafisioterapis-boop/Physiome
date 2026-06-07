
import React, { useEffect, useState } from 'react';
import SOAPSection from './SOAPSection';
import ExportPDFButton from './ExportPDFButton';
import { Button } from '@/components/ui/button';
import { Save, RefreshCw, Copy, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

export default function SOAPOutput({ 
  streamingText, 
  isStreaming, 
  isCompleted,
  onSave, 
  onRegenerate,
  patientInfo 
}) {
  const [soapData, setSoapData] = useState({
    subjective: '',
    objective: '',
    assessment: '',
    plan: ''
  });
  
  const [copiedAll, setCopiedAll] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Parse streaming text into sections
  useEffect(() => {
    if (!streamingText) {
      if (!isCompleted) {
        setSoapData({ subjective: '', objective: '', assessment: '', plan: '' });
      }
      return;
    }

    const extractSection = (regex) => {
      const match = streamingText.match(regex);
      return match ? match[1].trim() : '';
    };

    setSoapData({
      subjective: extractSection(/\[SUBJECTIVE\]([\s\S]*?)(?:\[OBJECTIVE\]|\[ASSESSMENT\]|\[PLAN\]|$)/i),
      objective: extractSection(/\[OBJECTIVE\]([\s\S]*?)(?:\[ASSESSMENT\]|\[PLAN\]|$)/i),
      assessment: extractSection(/\[ASSESSMENT\]([\s\S]*?)(?:\[PLAN\]|$)/i),
      plan: extractSection(/\[PLAN\]([\s\S]*?)$/i)
    });
  }, [streamingText, isCompleted]);

  const handleSectionChange = (section, newContent) => {
    setSoapData(prev => ({ ...prev, [section]: newContent }));
  };

  const handleCopyAll = () => {
    const fullText = `SUBJECTIVE\n${soapData.subjective}\n\nOBJECTIVE\n${soapData.objective}\n\nASSESSMENT\n${soapData.assessment}\n\nPLAN\n${soapData.plan}`;
    navigator.clipboard.writeText(fullText);
    setCopiedAll(true);
    toast.success("Full SOAP note copied to clipboard");
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const handleSave = async () => {
    setIsSaving(true);
    await onSave(soapData);
    setIsSaving(false);
  };

  const hasContent = Object.values(soapData).some(val => val.length > 0) || isStreaming;

  return (
    <div className="flex flex-col h-full bg-card rounded-2xl border border-border shadow-lg overflow-hidden relative">
      <div className="p-4 border-b border-border bg-muted/20 flex justify-between items-center sticky top-0 z-10">
        <div>
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            Generated SOAP Note
            {isStreaming && (
              <span className="flex h-2 w-2 relative ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            )}
          </h2>
        </div>
        
        {hasContent && !isStreaming && (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={handleCopyAll} className="h-8">
              {copiedAll ? <CheckCircle2 className="w-4 h-4 mr-2 text-success" /> : <Copy className="w-4 h-4 mr-2" />}
              Copy All
            </Button>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth custom-scrollbar">
        <AnimatePresence mode="wait">
          {!hasContent ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex flex-col items-center justify-center text-center p-8 opacity-60"
            >
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <RefreshCw className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">Awaiting Clinical Notes</h3>
              <p className="text-muted-foreground max-w-sm">
                Enter your observations in the input panel and click Generate. The AI will structure them into a professional SOAP note here.
              </p>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6 pb-8"
            >
              <SOAPSection 
                title="Subjective" 
                content={soapData.subjective} 
                isStreaming={isStreaming} 
                onChange={handleSectionChange}
              />
              <SOAPSection 
                title="Objective" 
                content={soapData.objective} 
                isStreaming={isStreaming} 
                onChange={handleSectionChange}
              />
              <SOAPSection 
                title="Assessment" 
                content={soapData.assessment} 
                isStreaming={isStreaming} 
                onChange={handleSectionChange}
              />
              <SOAPSection 
                title="Plan" 
                content={soapData.plan} 
                isStreaming={isStreaming} 
                onChange={handleSectionChange}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {hasContent && !isStreaming && (
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="p-4 border-t border-border bg-muted/20 flex items-center justify-between"
        >
          <Button variant="ghost" onClick={onRegenerate} className="text-muted-foreground hover:text-foreground">
            <RefreshCw className="w-4 h-4 mr-2" />
            Regenerate
          </Button>
          <div className="flex gap-3">
            <ExportPDFButton 
              soapData={soapData} 
              patientName={patientInfo?.name} 
              patientId={patientInfo?.id}
              therapistName={patientInfo?.therapistName}
            />
            <Button 
              onClick={handleSave} 
              disabled={isSaving}
              className="bg-success hover:bg-success/90 text-success-foreground shadow-md shadow-success/20"
            >
              {isSaving ? (
                <>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Note
                </>
              )}
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
