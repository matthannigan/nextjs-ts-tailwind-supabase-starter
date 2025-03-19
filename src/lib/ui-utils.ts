import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names and tailwind classes and merges them
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Creates a responsive padding based on screen size
 */
export function createResponsivePadding(
  basePadding: string = 'p-4',
  mdPadding: string = 'md:p-6',
  lgPadding: string = 'lg:p-8'
): string {
  return `${basePadding} ${mdPadding} ${lgPadding}`;
}

/**
 * Truncates text with ellipsis based on max lines
 */
export function truncateText(maxLines: number = 2): string {
  return `overflow-hidden text-ellipsis ${maxLines === 1 ? 'whitespace-nowrap' : `line-clamp-${maxLines}`}`;
}

/**
 * Creates a responsive font size based on screen size
 */
export function responsiveFontSize(
  baseSize: string = 'text-sm',
  mdSize: string = 'md:text-base',
  lgSize: string = 'lg:text-lg'
): string {
  return `${baseSize} ${mdSize} ${lgSize}`;
}

/**
 * Creates a consistent aspect ratio container
 */
export function aspectRatio(ratio: 'square' | 'video' | 'portrait' | 'landscape'): string {
  const ratioMap = {
    square: 'aspect-square', // 1:1
    video: 'aspect-video', // 16:9
    portrait: 'aspect-[3/4]', // 3:4
    landscape: 'aspect-[4/3]', // 4:3
  };

  return ratioMap[ratio] || ratioMap.square;
}

/**
 * Creates a standard box shadow
 */
export function boxShadow(size: 'sm' | 'md' | 'lg' | 'xl' | 'none' = 'md'): string {
  const shadowMap = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  return shadowMap[size];
}

/**
 * Returns appropriate color class based on status
 */
export function statusColor(
  status: 'success' | 'warning' | 'error' | 'info' | 'default',
  type: 'bg' | 'text' | 'border' = 'bg'
): string {
  const colorMap = {
    success: {
      bg: 'bg-green-100 dark:bg-green-900',
      text: 'text-green-700 dark:text-green-100',
      border: 'border-green-500',
    },
    warning: {
      bg: 'bg-yellow-100 dark:bg-yellow-900',
      text: 'text-yellow-700 dark:text-yellow-100',
      border: 'border-yellow-500',
    },
    error: {
      bg: 'bg-red-100 dark:bg-red-900',
      text: 'text-red-700 dark:text-red-100',
      border: 'border-red-500',
    },
    info: {
      bg: 'bg-blue-100 dark:bg-blue-900',
      text: 'text-blue-700 dark:text-blue-100',
      border: 'border-blue-500',
    },
    default: {
      bg: 'bg-gray-100 dark:bg-gray-800',
      text: 'text-gray-700 dark:text-gray-100',
      border: 'border-gray-500',
    },
  };

  return colorMap[status][type];
}
