
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Clock, Save } from 'lucide-react';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient.js';
import { useAuth } from '@/contexts/AuthContext.jsx';
import TimerTemplateManager from './TimerTemplateManager.jsx';

const DEFAULT_CONFIG = {
  prepare_time: 10,
  work_time: 30,
  rest_time: 15,
  cycles: 1,
  sets: 3,
  rest_between_sets: 60,
  hold_duration: 0,
  repetitions: 10,
  permission_mode: 'Therapist Controlled',
  min_value: 0,
  max_value: 0
};

const RecoveryTimerConfig = ({ value = DEFAULT_CONFIG, onChange }) => {
  const { currentUser } = useAuth();
  const [showTemplates, setShowTemplates] = useState(false);
  const [templateName, setTemplateName] = useState('');

  const handleChange = (field, val) => {
    onChange({ ...value, [field]: val });
  };

  const handleSaveTemplate = async () => {
    if (!templateName) return toast.error('Enter a template name');
    try {
      await pb.collection('timer_templates').create({
        therapist_id: currentUser.id,
        clinic_id: currentUser.clinic_id,
        template_name: templateName,
        template_config: value,
        category: 'Custom'
      }, { $autoCancel: false });
      toast.success('Template saved successfully');
      setTemplateName('');
    } catch (e) {
      toast.error('Failed to save template');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary" /> Interval & Timer Settings
        </h3>
        <Button variant="outline" size="sm" onClick={() => setShowTemplates(!showTemplates)}>
          {showTemplates ? 'Hide Templates' : 'Manage Templates'}
        </Button>
      </div>

      {showTemplates && (
        <div className="bg-muted/30 p-4 rounded-xl border border-border mb-6">
          <TimerTemplateManager onSelectTemplate={(cfg) => { onChange(cfg); toast.success('Template applied'); }} />
          <div className="mt-4 pt-4 border-t border-border flex gap-3">
            <Input 
              placeholder="New Template Name..." 
              value={templateName} 
              onChange={e => setTemplateName(e.target.value)} 
              className="max-w-xs bg-background"
            />
            <Button onClick={handleSaveTemplate} variant="secondary" className="gap-2">
              <Save className="w-4 h-4" /> Save Current as Template
            </Button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Prepare Time (sec)</label>
          <Input type="number" value={value.prepare_time} onChange={e => handleChange('prepare_time', parseInt(e.target.value))} min={0} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Work Time (sec)</label>
          <Input type="number" value={value.work_time} onChange={e => handleChange('work_time', parseInt(e.target.value))} min={0} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Rest Time (sec)</label>
          <Input type="number" value={value.rest_time} onChange={e => handleChange('rest_time', parseInt(e.target.value))} min={0} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Sets</label>
          <Input type="number" value={value.sets} onChange={e => handleChange('sets', parseInt(e.target.value))} min={1} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Cycles per Set</label>
          <Input type="number" value={value.cycles} onChange={e => handleChange('cycles', parseInt(e.target.value))} min={1} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Rest Between Sets (sec)</label>
          <Input type="number" value={value.rest_between_sets} onChange={e => handleChange('rest_between_sets', parseInt(e.target.value))} min={0} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Repetitions (Target)</label>
          <Input type="number" value={value.repetitions} onChange={e => handleChange('repetitions', parseInt(e.target.value))} min={0} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Hold Duration (sec)</label>
          <Input type="number" value={value.hold_duration} onChange={e => handleChange('hold_duration', parseInt(e.target.value))} min={0} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Patient Permission Mode</label>
          <Select value={value.permission_mode} onValueChange={v => handleChange('permission_mode', v)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Therapist Controlled">Strict (No Changes)</SelectItem>
              <SelectItem value="Patient Adjustable">Flexible (Full Changes)</SelectItem>
              <SelectItem value="Hybrid">Hybrid (Within Limits)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default RecoveryTimerConfig;
