import { HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  centered?: boolean;
}

export default function Container({
  children,
  size = 'lg',
  padding = 'md',
  centered = true,
  className = '',
  ...props
}: ContainerProps) {
  const sizeStyles = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    full: 'max-w-full',
  };

  const paddingStyles = {
    none: 'px-0',
    sm: 'px-4',
    md: 'px-6 md:px-8',
    lg: 'px-8 md:px-12',
  };

  const centeredStyles = centered ? 'mx-auto' : '';

  const combinedClassName = `w-full ${sizeStyles[size]} ${paddingStyles[padding]} ${centeredStyles} ${className}`;

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
}
