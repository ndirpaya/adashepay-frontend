// Input.tsx
import React from 'react';

interface InputProps {
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  type?: string; // You can pass any type of input, e.g., text, password, email, etc.
  placeholder?: string;
  className?: string; // Optional: Allow additional styling if needed
}

const Input: React.FC<InputProps> = ({
  id,
  value,
  onChange,
  required = false,
  type = 'text', // Default to text type
  placeholder = '',
  className = '',
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {placeholder || id.charAt(0).toUpperCase() + id.slice(1)}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
      />
    </div>
  );
};

export default Input;