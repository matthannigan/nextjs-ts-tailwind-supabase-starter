import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  inputSize?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outlined' | 'filled';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      fullWidth = false,
      inputSize = 'md',
      variant = 'default',
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50';
    
    const sizeStyles = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4',
      lg: 'h-12 px-5 text-lg',
    };
    
    const variantStyles = {
      default: 'border-gray-300 bg-white',
      outlined: 'border-gray-300 bg-transparent',
      filled: 'border-transparent bg-gray-100',
    };
    
    const stateStyles = {
      error: 'border-red-500 focus:ring-red-500',
      disabled: 'cursor-not-allowed opacity-60 bg-gray-100',
    };
    
    const widthStyles = fullWidth ? 'w-full' : '';
    
    const combinedClassName = `
      ${baseStyles} 
      ${sizeStyles[inputSize]} 
      ${variantStyles[variant]} 
      ${error ? stateStyles.error : ''} 
      ${disabled ? stateStyles.disabled : ''} 
      ${widthStyles} 
      ${className}
    `.trim();
    
    return (
      <div className={`${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label 
            className={`block text-sm font-medium text-gray-700 mb-1 ${disabled ? 'opacity-60' : ''}`}
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={combinedClassName}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={props.id ? `${props.id}-helper ${props.id}-error` : undefined}
          {...props}
        />
        {helperText && !error && (
          <p 
            className="mt-1 text-sm text-gray-500" 
            id={props.id ? `${props.id}-helper` : undefined}
          >
            {helperText}
          </p>
        )}
        {error && (
          <p 
            className="mt-1 text-sm text-red-600" 
            id={props.id ? `${props.id}-error` : undefined}
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 