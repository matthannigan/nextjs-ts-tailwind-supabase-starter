import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'bordered' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  variant = 'default',
  padding = 'md',
  rounded = 'md',
  className = '',
  ...props
}: CardProps) {
  const baseStyles = 'bg-white';
  
  const variantStyles = {
    default: 'bg-white',
    bordered: 'border border-gray-200',
    elevated: 'shadow-md',
  };
  
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  };
  
  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${roundedStyles[rounded]} ${className}`;
  
  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
} 