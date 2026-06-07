
import React from 'react';
import Input from '@/components/Input.jsx';
import Select from '@/components/Select.jsx';
import TextArea from '@/components/TextArea.jsx';

const ExerciseConfigForm = ({ config, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...config, [name]: value });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-muted/30 p-3 rounded-xl border border-border mt-2">
      <Input 
        label="Sets" 
        name="sets" 
        type="number" 
        min="1" max="10" 
        value={config.sets || 3} 
        onChange={handleChange} 
        className="h-8 text-sm"
      />
      <Input 
        label="Reps" 
        name="reps" 
        type="number" 
        min="1" max="100" 
        value={config.reps || 10} 
        onChange={handleChange} 
        className="h-8 text-sm"
      />
      <Input 
        label="Hold (sec)" 
        name="hold" 
        type="number" 
        min="0" max="120" 
        value={config.hold || 0} 
        onChange={handleChange} 
        className="h-8 text-sm"
      />
      <Select 
        label="Frequency" 
        name="freq" 
        value={config.freq || '1x daily'} 
        onChange={handleChange} 
        options={[
          { label: '1x daily', value: '1x daily' },
          { label: '2x daily', value: '2x daily' },
          { label: '3x daily', value: '3x daily' },
          { label: 'Every other day', value: 'Every other day' }
        ]}
      />
      <div className="col-span-2 sm:col-span-4">
        <TextArea 
          label="Therapist Notes (Optional)" 
          name="notes" 
          value={config.notes || ''} 
          onChange={handleChange} 
          rows={1}
          placeholder="e.g. Keep back straight"
        />
      </div>
    </div>
  );
};

export default ExerciseConfigForm;
