import React, { useState } from 'react';
import { X } from 'lucide-react';

const TagInput = ({ label, value = [], onChange, placeholder = "Add tag..." }) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      e.preventDefault();
      if (!value.includes(input.trim())) {
        onChange([...value, input.trim()]);
      }
      setInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    onChange(value.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>}
      <div className="flex flex-wrap gap-2 p-2 border border-input rounded-lg bg-background min-h-[42px] focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-0">
        {value.map(tag => (
          <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
            {tag}
            <button type="button" onClick={() => removeTag(tag)} className="hover:text-destructive"><X className="w-3 h-3" /></button>
          </span>
        ))}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={value.length === 0 ? placeholder : ''}
          className="flex-1 min-w-[120px] bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
        />
      </div>
    </div>
  );
};

export default TagInput;