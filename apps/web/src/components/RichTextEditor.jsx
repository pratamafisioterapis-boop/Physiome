
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

// Simplified Rich Text Editor for low-effort implementation
// In a full version, this would use a library like TipTap or Quill
export default function RichTextEditor({ label, value, onChange, placeholder, id }) {
  return (
    <div className="space-y-2">
      {label && <Label htmlFor={id}>{label}</Label>}
      <Textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="min-h-[120px] font-mono text-sm"
      />
    </div>
  );
}
