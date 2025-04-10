---
sidebar_label: Toast
---

# Sonner Toast Component

A customizable, animated toast notification system that provides feedback to users through temporary pop-up messages. The Sonner toast component offers various types of notifications including success, error, and informational alerts.

## Import

```tsx
// Import the Toaster component for rendering toasts
import { Toaster } from "@/components/ui/sonner";

// Import the toast function for triggering toasts
import { toast } from "sonner";
```

## Usage

### Basic Setup

Add the `<Toaster />` component to your root layout, which serves as the container for all toast notifications:

```tsx
// In app/layout.tsx or your root layout
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
```

### Basic Usage

The simplest way to trigger a toast notification:

```tsx
import { toast } from "sonner";

export function ToastDemo() {
  return (
    <Button onClick={() => toast("Your message has been sent")}>
      Show Toast
    </Button>
  );
}
```

### Toast Types

The component provides various toast types for different situations:

```tsx
// Default toast
toast("This is a default toast");

// Success toast with checkmark icon
toast.success("Your account has been created");

// Error toast for alerts
toast.error("There was a problem with your request");

// Info toast for general information
toast.info("New features are available");

// Warning toast for cautionary messages
toast.warning("Your subscription will expire soon");
```

### With Description

Add more detailed information with a description:

```tsx
toast("Event created", {
  description: "Your event has been scheduled for March 15, 2025",
});
```

### With Action Button

Include an action button for user interaction:

```tsx
toast("Email sent", {
  description: "Your message has been delivered",
  action: {
    label: "Undo",
    onClick: () => console.log("Undo sending email"),
  },
});
```

### Promise Toast

Show loading state while waiting for a promise to resolve:

```tsx
const saveData = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000));
  return { success: true };
};

function PromiseToastExample() {
  return (
    <Button
      onClick={() => {
        toast.promise(saveData, {
          loading: "Saving changes...",
          success: "Changes saved successfully",
          error: "Failed to save changes",
        });
      }}
    >
      Save Changes
    </Button>
  );
}
```

## Props

### Toaster Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `'top-left' \| 'top-center' \| 'top-right' \| 'bottom-left' \| 'bottom-center' \| 'bottom-right'` | `'bottom-right'` | Position of the toast on the screen |
| `expand` | `boolean` | `false` | Whether to expand toasts to fill the width of the container |
| `visibleToasts` | `number` | `3` | Maximum number of toasts visible at one time |
| `hotkey` | `string[]` | `['altKey', 'KeyT']` | Keyboard shortcut to focus last toast |
| `richColors` | `boolean` | `false` | Whether to use enhanced colors for different toast types |
| `closeButton` | `boolean` | `false` | Whether to show a close button on each toast |
| `offset` | `string \| number` | `32` | Distance in pixels from the edge of the viewport |
| `duration` | `number` | `4000` | Default duration in milliseconds for which a toast is shown |
| `theme` | `'light' \| 'dark' \| 'system'` | `'system'` | Color theme of the toasts |
| `className` | `string` | `''` | Additional CSS classes to add to the toaster container |

### Toast Function Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `duration` | `number` | `4000` | Duration in milliseconds for which the toast is shown |
| `description` | `React.ReactNode` | — | Additional descriptive text for the toast |
| `icon` | `React.ReactNode` | — | Custom icon displayed before the toast message |
| `action` | `{ label: string; onClick: () => void }` | — | Action button with label and click handler |
| `cancel` | `{ label: string; onClick: () => void }` | — | Cancel button with label and click handler |
| `dismissible` | `boolean` | `true` | Whether the toast can be dismissed by clicking |
| `id` | `string` | — | Custom ID for the toast, useful for programmatic control |
| `important` | `boolean` | `false` | Whether the toast should not be automatically dismissed |
| `className` | `string` | — | Additional CSS classes for the toast element |
| `style` | `React.CSSProperties` | — | Inline styles for the toast element |

## TypeScript

```tsx
// Toaster component props type
import type { ToasterProps } from "sonner";

// Toast function and its options
import { toast } from "sonner";
type ToastOptions = {
  duration?: number;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
  cancel?: {
    label: string;
    onClick: () => void;
  };
  dismissible?: boolean;
  id?: string;
  important?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

// Usage with TypeScript
const showToast = (message: string, options?: ToastOptions) => {
  return toast(message, options);
};
```

## Customization

### Style Overrides

The component can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes to the Toaster component:

```tsx
<Toaster 
  className="font-sans"
  toastOptions={{
    className: "rounded-sm border-accent",
  }}
/>
```

2. Customizing individual toasts with the className option:

```tsx
toast("Custom styled toast", {
  className: "bg-primary text-primary-foreground border-primary",
});
```

### Extending the Component

You can create a customized Toaster component with your project's default settings:

```tsx
import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      richColors
      closeButton
      toastOptions={{
        duration: 5000,
        className: "border-border rounded-md",
      }}
    />
  );
}
```

## Examples

### Integration with Forms

```tsx
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function ContactForm() {
  const { register, handleSubmit, formState } = useForm();
  
  const onSubmit = async (data) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Message sent!", {
        description: "We'll get back to you as soon as possible.",
      });
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: true })} />
      <button type="submit" disabled={formState.isSubmitting}>
        {formState.isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
```

### Integration with Other Components

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function FeatureCard({ title, description, actionLabel }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
        <Button 
          onClick={() => toast.info(`Activated: ${title}`)}
          className="mt-4"
        >
          {actionLabel}
        </Button>
      </CardContent>
    </Card>
  );
}
```

### Responsive Behavior

The Sonner toast component is responsive by default, but you can enhance the behavior:

```tsx
import { useMediaQuery } from "@/hooks/use-media-query";
import { Toaster } from "@/components/ui/sonner";

export function ResponsiveToaster() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  
  return (
    <Toaster
      position={isMobile ? "bottom-center" : "top-right"}
      expand={isMobile}
      visibleToasts={isMobile ? 1 : 3}
      closeButton={!isMobile}
      className={isMobile ? "w-full max-w-full" : ""}
    />
  );
}
```

The component responds to different screen sizes in the following ways:

- **Mobile**: On small screens, toasts can be configured to appear at the bottom-center and expand to full width for better visibility
- **Tablet**: Maintains standard toast size but can be positioned differently for optimal viewing
- **Desktop**: Can display multiple toasts simultaneously and offers more interaction options like close buttons and actions

## Accessibility

The component follows these accessibility best practices:

- Focus management: Pressing the hotkey (Alt+T by default) focuses the newest toast for keyboard navigation
- Toast notifications can be dismissed via keyboard using the Escape key
- Visual feedback is accompanied by role="status" for screen readers
- Elements maintain proper contrast ratios for readability
- Interactive elements within toasts are properly focusable and have appropriate ARIA attributes
- Toasts automatically disappear, preventing screen reader users from being interrupted by persistent notices

## Implementation Details

The component:

- Uses CSS animations for smooth entrance and exit transitions
- Leverages a centralized state management system for toast management
- Properly handles the creation, updating, and dismissal of multiple toasts
- Uses a queue system to manage multiple toast notifications
- Integrates with React context for global access throughout the application

## Common Pitfalls

- **Toast Not Appearing**: Ensure the `<Toaster />` component is included in your root layout or application wrapper
- **Toast Disappearing Too Quickly**: Adjust the duration property (in milliseconds) to increase display time
- **Z-index Issues with Dialogs**: If toasts appear behind other elements, ensure proper z-index layering or set a higher z-index using the className prop
- **Mobile Usability**: Consider using expand={true} on mobile for better visibility and touch targets
- **Dark Mode Inconsistency**: Use the theme="system" prop to respect user preferences or sync with your app's theme

## Testing

```tsx
// Example test for the toast component
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { ToastDemo } from "./ToastDemo";

describe('Toast Component', () => {
  beforeEach(() => {
    // Setup a fresh Toaster for each test
    render(<Toaster />);
  });
  
  it('displays a toast when triggered', async () => {
    render(<ToastDemo />);
    const button = screen.getByRole('button', { name: /show toast/i });
    
    await userEvent.click(button);
    
    expect(await screen.findByText('Your message has been sent')).toBeInTheDocument();
  });
  
  it('dismisses a toast after clicking the close button', async () => {
    render(
      <>
        <Toaster closeButton />
        <button onClick={() => toast('Test toast')}>Show Toast</button>
      </>
    );
    
    await userEvent.click(screen.getByRole('button'));
    const toastMessage = await screen.findByText('Test toast');
    const closeButton = screen.getByRole('button', { name: /close/i });
    
    await userEvent.click(closeButton);
    
    await waitFor(() => {
      expect(toastMessage).not.toBeInTheDocument();
    });
  });
});
```

## Related Components

- [Alert](./alert.md): Used for persistent notifications within the page content
- [Dialog](./dialog.md): For more interactive notifications requiring user confirmation or input
- [Popover](./popover.md): For contextual information attached to specific UI elements
