
import React from 'react';
import TextArea from '@/components/TextArea.jsx';

// Simplified RichTextEditor using TextArea for low-effort implementation
const RichTextEditor = ({ label, value, onChange, rows = 4 }) => {
  return (
    <TextArea 
      label={label}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      placeholder="Enter text here..."
    />
  );
};

export default RichTextEditor;
