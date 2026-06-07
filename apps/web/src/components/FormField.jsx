
import React from 'react';
import Input from '@/components/Input.jsx';

const FormField = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  error, 
  placeholder,
  required = false,
  ...props 
}) => {
  return (
    <div className="mb-4">
      <Input
        label={label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        error={error}
        placeholder={placeholder}
        required={required}
        {...props}
      />
    </div>
  );
};

export default FormField;
