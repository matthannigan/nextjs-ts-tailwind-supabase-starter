import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type FlexProps = {
  children: ReactNode;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  'data-testid'?: string;
};

export function Flex({
  children,
  direction = 'row',
  align = 'start',
  justify = 'start',
  wrap = 'nowrap',
  gap = 'none',
  className,
  'data-testid': dataTestId,
  ...rest
}: FlexProps) {
  const gapMap = {
    none: '',
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  return (
    <div
      className={cn(
        'flex',
        `flex-${direction}`,
        `items-${align}`,
        `justify-${justify}`,
        `flex-${wrap}`,
        gapMap[gap],
        className
      )}
      data-testid={dataTestId}
      {...rest}
    >
      {children}
    </div>
  );
}

type GridProps = {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  'data-testid'?: string;
};

export function Grid({
  children,
  cols = 1,
  gap = 'md',
  className,
  'data-testid': dataTestId,
  ...rest
}: GridProps) {
  const gapMap = {
    none: '',
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  return (
    <div
      className={cn('grid', `grid-cols-${cols}`, gapMap[gap], className)}
      data-testid={dataTestId}
      {...rest}
    >
      {children}
    </div>
  );
}
