// Button.tsx
import React from 'react';

// Define button type props with TypeScript
interface ButtonProps {
  text: string; // Button label
  onClick?: () => void; // Optional onClick handler
  type?: 'button' | 'submit' | 'reset'; // Button type (default is 'button')
  variant?: 'primary' | 'secondary' | 'tertiary'; // Button style variant
  disabled?: boolean; // Optional disabled state
  className?: string; // Additional custom classes
  size?: string
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = 'button', // Default to 'button'
  variant = 'primary', // Default to 'primary' variant
  disabled = false,
  className = '',
}) => {
  // Button styles based on variant
  const baseStyles = 'px-4 py-2 rounded focus:outline-none focus:ring';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    tertiary: 'bg-transparent text-blue-500 hover:bg-blue-100',
  };

  // Determine the final class for the button
  const buttonClass = `${baseStyles} ${variantStyles[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
    >
      {text}
    </button>
  );
};

export default Button;