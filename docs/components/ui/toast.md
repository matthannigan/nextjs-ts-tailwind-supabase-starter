# Toast Component

The Toast component provides a way to display brief, non-disruptive notifications to users that automatically dismiss after a set time. It's designed to be accessible, customizable, and supports various notification types.

## Installation

If you need to add the Toast component to your project, run:

```bash
npx shadcn-ui@latest add toast
```

## Import

```tsx
// Import the specific Toast sub-components as needed
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';

// Import the hooks to trigger toasts
import { useToast } from '@/hooks/use-toast';

// Or import the Toaster component directly for layout integration
import { Toaster } from '@/components/ui/toaster';
```

## Usage

### Setup in Layout

First, add the `Toaster` component to your root layout:

```tsx
// app/layout.tsx
import { Toaster } from '@/components/ui/toaster';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
```

### Basic Usage

```tsx
'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function ToastDemo() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: 'Success',
          description: 'Your action was completed successfully.',
        });
      }}
    >
      Show Toast
    </Button>
  );
}
```

### Destructive Toast

Display a toast with a destructive variant for errors or warnings:

```tsx
'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function DestructiveToastDemo() {
  const { toast } = useToast();

  return (
    <Button
      variant="destructive"
      onClick={() => {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'There was a problem with your request.',
        });
      }}
    >
      Show Error Toast
    </Button>
  );
}
```

### Toast with Action

Add an action button to your toast:

```tsx
'use client';

import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';

export function ActionToastDemo() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: 'Item Archived',
          description: 'The item has been archived.',
          action: (
            <ToastAction altText="Undo archive action" onClick={() => console.log('Undoing archive')}>
              Undo
            </ToastAction>
          ),
        });
      }}
    >
      Archive Item
    </Button>
  );
}
```

## Props

### Toast Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'destructive'` | `'default'` | The variant of the toast, affecting its visual style. |
| `className` | `string` | `undefined` | Optional additional CSS classes to apply to the toast. |
| `children` | `ReactNode` | Required | The content of the toast. |
| `open` | `boolean` | `undefined` | Controls the open state of the toast. |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Callback fired when the open state changes. |
| ...other props | `React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>` | - | All other props are passed to the underlying toast primitive. |

### useToast Hook Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `title` | `ReactNode` | `undefined` | Optional title for the toast. |
| `description` | `ReactNode` | `undefined` | Optional description for the toast. |
| `action` | `ToastActionElement` | `undefined` | Optional action component for the toast. |
| `variant` | `'default' \| 'destructive'` | `'default'` | Variant of the toast to display. |
| `duration` | `number` | `5000` | Duration in milliseconds before the toast auto-dismisses. |

## TypeScript

```tsx
// Toast Component Types
import { ToastActionElement, ToastProps } from '@/components/ui/toast';

// Type for useToast hook return value
interface UseToastReturn {
  toast: (props: {
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: ToastActionElement;
    variant?: 'default' | 'destructive';
    duration?: number;
  }) => {
    id: string;
    dismiss: () => void;
    update: (props: ToasterToast) => void;
  };
  dismiss: (toastId?: string) => void;
  toasts: ToasterToast[];
}

// ToasterToast type (used internally)
type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};
```

## Customization

### Style Overrides

The Toast component can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes:

```tsx
<Toast 
  className="bg-teal-50 border-teal-200 text-teal-900 dark:bg-teal-950 dark:border-teal-800 dark:text-teal-50"
>
  Customized Toast Content
</Toast>
```

2. Modifying the `toast.tsx` file to update the default styles:

```tsx
// In src/components/ui/toast.tsx
const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground',
        destructive:
          'destructive group border-destructive bg-destructive text-destructive-foreground',
        // Add your custom variants here
        success: 'border-green-500 bg-green-50 text-green-900 dark:bg-green-950 dark:text-green-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
```

### Adjusting Toast Duration

You can modify the `TOAST_REMOVE_DELAY` constant in `src/hooks/use-toast.ts` to change the default duration:

```tsx
// src/hooks/use-toast.ts
const TOAST_REMOVE_DELAY = 5000; // Default is 1000000 in our implementation
```

You can also specify a duration for individual toasts:

```tsx
toast({
  title: "Quick notification",
  description: "This will disappear after 2 seconds",
  duration: 2000, // 2 seconds
});
```

### Displaying Multiple Toasts

By default, our implementation limits to 1 toast at a time. To display multiple toasts simultaneously, modify the `TOAST_LIMIT` constant in `src/hooks/use-toast.ts`:

```tsx
// src/hooks/use-toast.ts
const TOAST_LIMIT = 3; // Default is 1 in our implementation
```

## Examples

### Integration with Forms

```tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

export function SubscriptionForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Submit form logic here
    toast({
      title: 'Subscription successful',
      description: `We've sent a confirmation email to ${values.email}`,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </Form>
  );
}
```

### Integration with API Requests

```tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function DataFetchExample() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch('/api/data');
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
      const data = await response.json();
      
      toast({
        title: 'Data fetched successfully',
        description: `Retrieved ${data.items.length} items`,
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error instanceof Error ? error.message : 'An unknown error occurred',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button onClick={fetchData} disabled={loading}>
      {loading ? 'Loading...' : 'Fetch Data'}
    </Button>
  );
}
```

### Responsive Behavior

The Toast component responds to different screen sizes in the following ways:

- **Mobile**: Toasts appear at the top of the screen, full width.
- **Tablet & Desktop**: Toasts appear at the bottom right corner with a maximum width of 420px.

The position is controlled by the `ToastViewport` component:

```tsx
// From src/components/ui/toast.tsx
<ToastPrimitives.Viewport
  ref={ref}
  className={cn(
    'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
    className
  )}
  {...props}
/>
```

## Accessibility

The Toast component follows these accessibility best practices:

- Uses [Radix UI's Toast Primitive](https://www.radix-ui.com/docs/primitives/components/toast) which ensures keyboard navigation and screen reader support
- Toast notifications automatically dismiss after a set time
- Provides the `altText` prop for action buttons to ensure screen reader users understand their purpose
- Supports keyboard interaction for dismissal (Escape key)
- Implements appropriate ARIA attributes automatically
- Toast notifications don't block user interaction with the rest of the page

## Implementation Details

The Toast component:

- Is built on Radix UI's Toast primitive components
- Uses a reducer pattern for state management in the `useToast` hook
- Supports swipe gestures for dismissal on touch devices
- Has animation for entrance and exit using CSS transitions
- Uses a memory state pattern to persist toast notifications across component re-renders
- Automatically cleans up dismissed toasts after a delay

## Common Pitfalls

- **Toaster Component Missing**: The most common issue is forgetting to add the `<Toaster />` component to your layout. Make sure it's included in your root layout.

- **Multiple Toasts Not Showing**: By default, our implementation limits to 1 toast at a time. Modify the `TOAST_LIMIT` in `src/hooks/use-toast.ts` if you need more.

- **Toasts Not Appearing in useEffect**: When trying to show toasts in `useEffect`, make sure to properly handle dependencies to avoid infinite loops:

  ```tsx
  // Correct usage
  useEffect(() => {
    if (shouldShowToast) {
      toast({ title: "Welcome back!" });
    }
  }, [shouldShowToast]); // Don't include toast in dependencies
  ```

- **Toast Durations Too Long**: Our default implementation has a very long duration (`TOAST_REMOVE_DELAY` is set to 1000000ms). Consider changing this to a more reasonable value like 5000ms.

## Testing

Testing toasts requires proper setup to handle the portal nature of toast components:

```tsx
// Example test for a component that uses toast
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToastDemo } from './ToastDemo';
import { Toaster } from '@/components/ui/toaster';

describe('ToastDemo', () => {
  it('shows a toast when the button is clicked', async () => {
    // Render the component with Toaster
    render(
      <>
        <ToastDemo />
        <Toaster />
      </>
    );
    
    // Click the button that should trigger a toast
    const button = screen.getByRole('button', { name: /show toast/i });
    await userEvent.click(button);
    
    // Check if the toast appears with the expected content
    expect(await screen.findByText('Success')).toBeInTheDocument();
    expect(screen.getByText('Your action was completed successfully.')).toBeInTheDocument();
  });
});
```

## Related Components

- [Alert](./alert.md): For more persistent notifications that require user attention
- [AlertDialog](./alert-dialog.md): For critical notifications that interrupt the user and require confirmation
- [Button](./button.md): Used in conjunction with Toast for triggering notifications