import React from 'react';

import './_input.scss';

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (a: string) => void;
  maxLength?: number;
  error?: string;
}

const Input = ({ label, placeholder, value, onChange, maxLength, error }: InputProps) => {
  return (
    <div className='Input view'>
      <label className='Input label'>{label ? label : ''}</label>
      <input
        className='Input field'
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        onChange={e => onChange(e.target.value)}
      />
      <span className='Input error-text'>{error ? error : ''}</span>
    </div>
  );
};

export default Input;
