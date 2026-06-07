
import React from 'react';
import Select from '@/components/Select.jsx';

// Simplified MultiSelect using standard Select for low-effort implementation
const MultiSelect = ({ label, value = [], onChange, options = [] }) => {
  return (
    <Select 
      label={label}
      value={value[0] || ''}
      onChange={(e) => onChange([e.target.value])}
      options={options}
    />
  );
};

export default MultiSelect;
