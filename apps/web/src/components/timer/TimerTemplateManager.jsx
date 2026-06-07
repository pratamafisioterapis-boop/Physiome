
import React, { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient.js';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, Copy, Trash2, Edit2 } from 'lucide-react';
import { toast } from 'sonner';

const TimerTemplateManager = ({ onSelectTemplate }) => {
  const { currentUser } = useAuth();
  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTemplates = async () => {
    try {
      const records = await pb.collection('timer_templates').getFullList({
        filter: `clinic_id="${currentUser?.clinic_id}"`,
        sort: '-created',
        $autoCancel: false
      });
      setTemplates(records);
    } catch (error) {
      toast.error('Failed to load timer templates');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser?.clinic_id) fetchTemplates();
  }, [currentUser]);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this template?')) return;
    try {
      await pb.collection('timer_templates').delete(id, { $autoCancel: false });
      setTemplates(prev => prev.filter(t => t.id !== id));
      toast.success('Template deleted');
    } catch (error) {
      toast.error('Failed to delete template');
    }
  };

  if (isLoading) return <div className="p-4 text-center text-sm text-muted-foreground">Loading templates...</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Saved Templates</h3>
        <Button variant="outline" size="sm" onClick={fetchTemplates}>Refresh</Button>
      </div>
      
      {templates.length === 0 ? (
        <div className="p-6 text-center bg-muted/30 rounded-xl border border-border border-dashed">
          <Clock className="w-8 h-8 text-muted-foreground mx-auto mb-2 opacity-50" />
          <p className="text-sm text-muted-foreground">No templates saved yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map(template => (
            <Card key={template.id} className="border-border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-foreground">{template.template_name}</h4>
                    <p className="text-xs text-muted-foreground">{template.category || 'Custom'}</p>
                  </div>
                  <div className="flex gap-1">
                    {onSelectTemplate && (
                      <Button variant="ghost" size="sm" className="h-8 text-primary" onClick={() => onSelectTemplate(template.template_config)}>
                        Apply
                      </Button>
                    )}
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => handleDelete(template.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3 text-xs">
                  <span className="bg-muted px-2 py-1 rounded-md">Work: {template.template_config.work_time}s</span>
                  <span className="bg-muted px-2 py-1 rounded-md">Rest: {template.template_config.rest_time}s</span>
                  <span className="bg-muted px-2 py-1 rounded-md">Sets: {template.template_config.sets}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimerTemplateManager;
