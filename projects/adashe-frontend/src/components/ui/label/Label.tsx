// Label.tsx
import React from 'react';

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode; // Label content
  className?: string; // Optional custom class for styling
}

const Label: React.FC<LabelProps> = ({ htmlFor, children, className = '' }) => {
  return (
    <label htmlFor={htmlFor} className={`text-sm font-medium text-gray-700 ${className}`}>
      {children}
    </label>
  );
};

export default Label;