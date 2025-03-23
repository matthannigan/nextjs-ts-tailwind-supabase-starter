# Toaster Component

The Toaster component is a container for displaying toast notifications in your application. It renders all active toast notifications managed by the `useToast` hook and handles their positioning and animation.

## Import

```tsx
import { Toaster } from '@/components/ui/toaster';
```

## Usage

### Basic Setup in Layout

The Toaster component should be added to your root layout to ensure toast notifications can be displayed anywhere in your application:

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

## Props

The Toaster component doesn't accept any props as it automatically subscribes to the toast state from the `useToast` hook. All configuration for toast notifications is done through the toast hook itself.

## TypeScript

```tsx
// The Toaster component doesn't have specific props
// It uses the ToasterToast type internally:

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};
```

## Customization

### Modifying the Toaster Layout

If you need to customize the layout of toasts, you can modify the `Toaster` component directly:

```tsx
// src/components/ui/custom-toaster.tsx
'use client';

import { useToast } from '@/hooks/use-toast';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';

export function CustomToaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1 py-1">
              {title && <ToastTitle className="text-lg font-bold">{title}</ToastTitle>}
              {description && (
                <ToastDescription className="text-sm">{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
```

### Customizing the Toast Viewport

To change the position or appearance of the toast viewport (the container for all toasts), modify the `ToastViewport` component in `src/components/ui/toast.tsx`:

```tsx
// Modify this component to change position or styling of all toasts
const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      // Change position or styling here:
      'fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 md:max-w-[420px]',
      className
    )}
    {...props}
  />
));
```

## Examples

### Integration with Theme Provider

```tsx
// app/layout.tsx
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/contexts/theme-provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="system" storageKey="theme-preference">
          <div className="flex min-h-screen flex-col">
            {children}
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### Creating Toasts from Various Components

```tsx
'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function ProfileUpdateForm() {
  const { toast } = useToast();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Update profile logic here
      
      toast({
        title: 'Profile updated',
        description: 'Your profile has been successfully updated.',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Failed to update profile',
        description: 'Please try again later.',
      });
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <Button type="submit">Update Profile</Button>
    </form>
  );
}
```

## Responsive Behavior

The Toaster component provides responsive behavior out of the box:

- **Mobile**: Toasts appear in a full-width container at the top of the screen.
- **Tablet and Desktop**: Toasts appear in a 420px wide container at the bottom right corner of the screen.

These responsive behaviors are defined in the `ToastViewport` component in `src/components/ui/toast.tsx`.

## Accessibility

The Toaster component follows these accessibility best practices:

- Uses [Radix UI's Toast primitive](https://www.radix-ui.com/docs/primitives/components/toast) for robust accessibility support
- Manages focus appropriately so that toasts don't disrupt the user's current task
- Ensures toasts are announced to screen readers without requiring focus
- Maintains appropriate z-index to ensure toasts appear above other content
- Automatically removes dismissed toasts from the DOM

## Implementation Details

The Toaster component:

- Acts as a container for all toast notifications
- Subscribes to the toast state managed by the `useToast` hook
- Renders each toast with its associated props (title, description, action, etc.)
- Places toasts in a viewport that positions them according to screen size
- Handles automatic removal of dismissed toasts

## Common Pitfalls

- **Toaster Not Included in Layout**: The most common issue is forgetting to add the `<Toaster />` component to your application layout. Ensure it's included in your root layout.

- **Multiple Toaster Components**: Including multiple `<Toaster />` components in your application can lead to duplicate toasts. Only include one `<Toaster />` component, typically in your root layout.

- **Style Conflicts**: If you have z-index conflicts causing toasts to appear behind other elements, check the z-index in the `ToastViewport` component and adjust if necessary.

## Testing

When testing components that use toast notifications, ensure you include the `<Toaster />` component in your test render:

```tsx
// Example test for a component that uses toast
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProfileUpdateForm } from './ProfileUpdateForm';
import { Toaster } from '@/components/ui/toaster';

describe('ProfileUpdateForm', () => {
  it('shows a success toast when form is submitted', async () => {
    // Mock API call
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      })
    );
    
    // Render component with Toaster
    render(
      <>
        <ProfileUpdateForm />
        <Toaster />
      </>
    );
    
    // Submit the form
    const submitButton = screen.getByRole('button', { name: /update profile/i });
    await userEvent.click(submitButton);
    
    // Check if success toast appears
    expect(await screen.findByText('Profile updated')).toBeInTheDocument();
  });
});
```

## Related Components

- [Toast](./toast.md): The individual toast notification component used by Toaster
- [useToast](./use-toast.md): The hook used to create and manage toast notifications
- [AlertDialog](./alert-dialog.md): For critical notifications that require user attention and confirmation