
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Brain, CheckCircle2, AlertTriangle, Edit2, Save, Send, RotateCcw, Info, Activity } from 'lucide-react';
import { useAnimatedText } from '@/hooks/use-animated-text.jsx';

const AIResponseCard = ({ 
  data, 
  rawText,
  isStreaming, 
  onAccept, 
  onModify, 
  onRegenerate, 
  onSaveDraft, 
  onAssign 
}) => {
  const animatedRawText = useAnimatedText(isStreaming ? rawText : '');

  const getConfidenceColor = (score) => {
    if (score >= 80) return 'bg-green-100 text-green-800 border-green-200';
    if (score >= 60) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    if (score >= 40) return 'bg-orange-100 text-orange-800 border-orange-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  if (isStreaming || !data) {
    return (
      <Card className="h-full flex flex-col border-primary/20 shadow-md">
        <CardHeader className="border-b bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary animate-pulse" />
            </div>
            <div>
              <CardTitle className="text-lg">Generating Program...</CardTitle>
              <p className="text-sm text-muted-foreground">Analyzing clinical presentation and selecting exercises</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-1 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-4 w-3/4 bg-muted animate-pulse rounded"></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-4 w-1/2 bg-muted animate-pulse rounded"></div>
            </div>
            <div className="h-32 bg-muted animate-pulse rounded-xl mt-6"></div>
            
            {/* Show streaming raw JSON text as a fallback visual */}
            <div className="mt-6 p-4 bg-muted/30 rounded-xl font-mono text-xs text-muted-foreground whitespace-pre-wrap overflow-hidden border border-border">
              {animatedRawText}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col border-primary/20 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
        
        <CardHeader className="border-b bg-muted/20 pb-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl">AI-Generated Program</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">Ready for clinical review</p>
              </div>
            </div>
            <Badge variant="outline" className={`px-3 py-1 text-sm font-medium ${getConfidenceColor(data.confidence_score)}`}>
              {data.confidence_score}% Confidence
            </Badge>
          </div>
        </CardHeader>

        <ScrollArea className="flex-1">
          <CardContent className="p-6 space-y-8">
            
            <section>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Program Goal
              </h3>
              <p className="text-foreground text-lg font-medium leading-relaxed bg-primary/5 p-4 rounded-xl border border-primary/10">
                {data.program_goal}
              </p>
            </section>

            <section>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" /> Recommended Exercises
              </h3>
              <div className="space-y-3">
                {data.exercises?.map((ex, idx) => (
                  <div key={idx} className="bg-card border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-lg text-primary">{ex.name}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                      <div className="bg-muted/50 rounded-lg p-2 text-center">
                        <p className="text-xs text-muted-foreground">Sets & Reps</p>
                        <p className="font-semibold">{ex.sets} × {ex.reps}</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-2 text-center">
                        <p className="text-xs text-muted-foreground">Hold / Rest</p>
                        <p className="font-semibold">{ex.hold_duration} / {ex.rest_duration}</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-2 text-center">
                        <p className="text-xs text-muted-foreground">Frequency</p>
                        <p className="font-semibold">{ex.frequency}</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-2 text-center">
                        <p className="text-xs text-muted-foreground">Duration</p>
                        <p className="font-semibold">{ex.duration}</p>
                      </div>
                    </div>
                    {ex.progression_tips && (
                      <p className="text-sm text-muted-foreground mt-3 pt-3 border-t border-border border-dashed">
                        <span className="font-medium text-foreground">Progression:</span> {ex.progression_tips}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" /> Clinical Rationale
                </h3>
                <p className="text-sm text-foreground bg-muted/40 p-4 rounded-xl border border-border h-full">
                  {data.clinical_rationale}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning" /> Precautions
                </h3>
                <p className="text-sm text-foreground bg-warning/10 p-4 rounded-xl border border-warning/20 h-full">
                  {data.precautions}
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Expected Outcomes
              </h3>
              <p className="text-sm text-foreground">
                {data.expected_outcomes}
              </p>
            </section>

          </CardContent>
        </ScrollArea>

        <CardFooter className="border-t bg-muted/10 p-4 grid grid-cols-1 md:grid-cols-5 gap-3 shrink-0">
          <div className="col-span-1 md:col-span-2 flex gap-2">
            <Button variant="outline" className="w-full gap-2" onClick={onRegenerate}>
              <RotateCcw className="w-4 h-4" /> Regenerate
            </Button>
            <Button variant="outline" className="w-full gap-2" onClick={onModify}>
              <Edit2 className="w-4 h-4" /> Modify
            </Button>
          </div>
          <div className="col-span-1 md:col-span-3 flex gap-2">
            <Button variant="secondary" className="w-full gap-2" onClick={onSaveDraft}>
              <Save className="w-4 h-4" /> Save Draft
            </Button>
            <Button className="w-full gap-2" onClick={onAccept}>
              <CheckCircle2 className="w-4 h-4" /> Accept
            </Button>
            <Button variant="default" className="w-full gap-2 bg-slate-900 text-white hover:bg-slate-800" onClick={onAssign}>
              <Send className="w-4 h-4" /> Assign
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default AIResponseCard;
