'use client';

import { useState, useRef, FormEvent, HTMLAttributes } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface SearchInputProps extends HTMLAttributes<HTMLFormElement> {
  onSearch?: (value: string) => void;
  placeholder?: string;
  className?: string;
  buttonText?: string;
  showButton?: boolean;
}

export function SearchInput({
  onSearch,
  placeholder = 'Search...',
  className,
  buttonText = 'Search',
  showButton = true,
  ...props
}: SearchInputProps) {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('relative flex w-full items-center', className)}
      {...props}
    >
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          ref={inputRef}
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={placeholder}
          className={cn('w-full pl-9', showButton && 'rounded-r-none')}
        />
      </div>
      {showButton && (
        <Button type="submit" className={cn('rounded-l-none')}>
          {buttonText}
        </Button>
      )}
    </form>
  );
}
