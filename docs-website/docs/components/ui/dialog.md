---
sidebar_label: Dialog
---

# Dialog Component

A modal overlay component that displays content on top of the main application window, rendering the underlying content inert until the dialog is dismissed.

## Import

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
```

## Usage

### Basic Usage

```tsx
<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>This is a description of the dialog content.</DialogDescription>
    </DialogHeader>
    <p>Main content goes here.</p>
    <DialogFooter>
      <Button variant="outline" onClick={() => {}}>Cancel</Button>
      <Button onClick={() => {}}>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Custom Trigger

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Custom Trigger Button</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Custom Trigger</DialogTitle>
      <DialogDescription>A dialog triggered by a custom button element.</DialogDescription>
    </DialogHeader>
    <p>You can use any component as a trigger with the asChild prop.</p>
  </DialogContent>
</Dialog>
```

### Custom Close Button

```tsx
<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Custom Close</DialogTitle>
      <DialogDescription>This dialog has a custom close button.</DialogDescription>
    </DialogHeader>
    <div className="py-4">Dialog content here.</div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Close Dialog</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Controlled Dialog

```tsx
'use client';

import { useState } from 'react';

export function ControlledDialog() {
  const [open, setOpen] = useState(false);
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>Open Controlled Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Controlled Dialog</DialogTitle>
          <DialogDescription>This dialog's state is controlled programmatically.</DialogDescription>
        </DialogHeader>
        <p>You can control the open state with your own state management.</p>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

## Props

### Dialog Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `undefined` | Controls the open state when used as a controlled component |
| `defaultOpen` | `boolean` | `false` | The default open state when uncontrolled |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Callback fired when the open state changes |
| `modal` | `boolean` | `true` | Whether to render as a modal dialog |
| `children` | `ReactNode` | Required | The dialog trigger and content components |

### DialogTrigger Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asChild` | `boolean` | `false` | When true, the component will render its child instead of a default button |
| `children` | `ReactNode` | Required | The element that triggers the dialog |

### DialogContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes to apply to the dialog content |
| `children` | `ReactNode` | Required | The content to display inside the dialog |
| `forceMount` | `boolean` | `false` | Force the dialog to mount even when it's not open |
| `onEscapeKeyDown` | `(event: KeyboardEvent) => void` | `undefined` | Event handler called when the escape key is pressed |
| `onPointerDownOutside` | `(event: PointerDownOutsideEvent) => void` | `undefined` | Event handler called when a pointer event occurs outside the dialog |
| `onInteractOutside` | `(event: React.MouseEvent | React.TouchEvent) => void` | `undefined` | Event handler called when an interaction happens outside the dialog |
| `...props` | `React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>` | - | All other props are passed to the underlying Radix UI Dialog Content |

### DialogHeader Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes to apply to the dialog header |
| `children` | `ReactNode` | Required | The content to display inside the dialog header |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | - | All other props are passed to the underlying div element |

### DialogFooter Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes to apply to the dialog footer |
| `children` | `ReactNode` | Required | The content to display inside the dialog footer |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | - | All other props are passed to the underlying div element |

### DialogTitle Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes to apply to the dialog title |
| `children` | `ReactNode` | Required | The content to display as the dialog title |
| `...props` | `React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>` | - | All other props are passed to the underlying Radix UI Dialog Title |

### DialogDescription Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes to apply to the dialog description |
| `children` | `ReactNode` | Required | The content to display as the dialog description |
| `...props` | `React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>` | - | All other props are passed to the underlying Radix UI Dialog Description |

### DialogClose Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asChild` | `boolean` | `false` | When true, the component will render its child instead of a default button |
| `children` | `ReactNode` | `<X />` | The element used to close the dialog |
| `...props` | `React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>` | - | All other props are passed to the underlying Radix UI Dialog Close |

## TypeScript

```tsx
import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

// Dialog Props
type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root>;

// DialogTrigger Props
type DialogTriggerProps = React.ComponentProps<typeof DialogPrimitive.Trigger>;

// DialogContent Props
type DialogContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;

// DialogHeader Props
type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;

// DialogFooter Props
type DialogFooterProps = React.HTMLAttributes<HTMLDivElement>;

// DialogTitle Props
type DialogTitleProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;

// DialogDescription Props
type DialogDescriptionProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;

// DialogClose Props
type DialogCloseProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>;
```

## Customization

### Style Overrides

The Dialog component can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes to each sub-component:

```tsx
<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent className="max-w-md rounded-xl bg-slate-50 dark:bg-slate-900">
    <DialogHeader className="border-b pb-4">
      <DialogTitle className="text-xl text-primary">Custom Title</DialogTitle>
      <DialogDescription className="text-primary/70">
        This dialog has custom styling.
      </DialogDescription>
    </DialogHeader>
    <div className="py-4">Content with custom styling.</div>
    <DialogFooter className="border-t pt-4 gap-2">
      <Button variant="outline" className="flex-1">Cancel</Button>
      <Button className="flex-1">Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

2. Customizing the animation and transition properties:

```tsx
<DialogContent
  className="data-[state=open]:animate-customFadeIn data-[state=closed]:animate-customFadeOut"
  style={{ animationDuration: '400ms' }}
>
  {/* Dialog content */}
</DialogContent>
```

### Extending the Component

```tsx
'use client';

import { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel?: () => void;
  children?: ReactNode;
  variant?: 'default' | 'destructive';
}

export function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
  children,
  variant = 'default'
}: ConfirmDialogProps) {
  const handleCancel = () => {
    onOpenChange(false);
    onCancel?.();
  };

  const handleConfirm = () => {
    onConfirm();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
        <DialogFooter>
          <Button variant="outline" onClick={handleCancel}>
            {cancelLabel}
          </Button>
          <Button 
            variant={variant === 'destructive' ? 'destructive' : 'default'} 
            onClick={handleConfirm}
          >
            {confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

## Examples

### Integration with Forms

```tsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

export function FormDialog() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Form Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={() => form.reset()}>
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
```

### Integration with Other Components

```tsx
'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';

export function ComplexDialog() {
  const [activeTab, setActiveTab] = useState('details');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>View Product Options</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Product Configuration</DialogTitle>
          <DialogDescription>
            Configure product options and save your preferences.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="details" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details">
            <Card>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>Configure basic product information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Product name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">Description</label>
                  <Input id="description" placeholder="Product description" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle>User Preferences</CardTitle>
                <CardDescription>Configure your personal preferences.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="theme" className="text-sm font-medium">Theme</label>
                  <Input id="theme" placeholder="Choose theme" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="language" className="text-sm font-medium">Language</label>
                  <Input id="language" placeholder="Select language" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

### Responsive Behavior

The Dialog component is responsive by default, but you can enhance its behavior across different device sizes:

```tsx
<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent className="w-[90vw] max-w-[90vw] md:w-auto md:max-w-md lg:max-w-lg">
    <DialogHeader className="text-center sm:text-left">
      <DialogTitle className="text-xl sm:text-2xl">Responsive Dialog</DialogTitle>
      <DialogDescription className="text-sm sm:text-base">
        This dialog adjusts its size and layout based on screen size.
      </DialogDescription>
    </DialogHeader>
    <div className="py-4">
      <p className="text-sm sm:text-base">
        Content will reflow and resize based on the viewport.
      </p>
    </div>
    <DialogFooter className="flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
      <Button variant="outline" className="w-full sm:w-auto">Cancel</Button>
      <Button className="w-full sm:w-auto">Continue</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

The responsive behavior includes:

- **Mobile**: Full-width dialog with stacked footer buttons
- **Tablet**: Constrained width with horizontal footer buttons
- **Desktop**: Larger maximum width with standard layout

## Accessibility

The Dialog component follows these accessibility best practices:

- Implements the [WAI-ARIA Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- Uses appropriate ARIA roles (`dialog` and `alertdialog`) based on content
- Traps focus within the dialog when open
- Supports keyboard navigation (Tab, Shift+Tab) for interactive elements
- Closes on Escape key press by default
- Prevents interaction with content behind the dialog when open
- Includes a visible close button with screen reader accessible label
- Has properly associated DialogTitle and DialogDescription elements
- Automatically manages focus restoration when the dialog is closed
- Announces dialog content to screen readers when opened

## Implementation Details

The component:

- Is built on Radix UI's Dialog primitive for robust accessibility and keyboard handling
- Uses a Portal to render outside the normal DOM hierarchy, preventing stacking issues
- Applies smooth animations for opening and closing transitions
- Renders with a semi-transparent backdrop that prevents interaction with content underneath
- Centers content in the viewport with proper positioning
- Includes responsive styling using Tailwind CSS with breakpoint adaptations
- Handles both controlled (with `open` and `onOpenChange`) and uncontrolled usage patterns
- Includes specialized layout components (Header, Footer) for consistent structure
- Implements a close button in the top right corner by default

## Common Pitfalls

- **Z-index conflicts**: The Dialog uses `z-50` by default. If it appears behind other elements, you may need to adjust z-index values.
- **Scrolling behavior**: Long dialog content can cause issues. Use max-height constraints and enable overflow scrolling on the content section where needed.
- **Controlled state management**: When using the controlled pattern, ensure state updates are properly handled to avoid the dialog getting stuck in an open or closed state.
- **Focus management**: Custom implementations should maintain proper focus handling for accessibility.
- **Using within Context Menu or Dropdown Menu**: To activate a Dialog from these components, ensure you wrap the Menu component with the Dialog component as noted in the Shadcn documentation.
- **Server components**: The Dialog component uses client-side features and must be used within client components or with the 'use client' directive.

## Testing

```tsx
// Example test for the Dialog component
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@/components/ui/dialog';

describe('Dialog', () => {
  it('opens when trigger is clicked', async () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogTitle>Test Dialog</DialogTitle>
          <p>Dialog content</p>
        </DialogContent>
      </Dialog>
    );
    
    // Check that dialog is not initially in the document
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    
    // Click the trigger button
    await userEvent.click(screen.getByText('Open Dialog'));
    
    // Check that dialog is now in the document
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText('Test Dialog')).toBeInTheDocument();
      expect(screen.getByText('Dialog content')).toBeInTheDocument();
    });
  });
  
  it('closes when close button is clicked', async () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogTitle>Test Dialog</DialogTitle>
          <p>Dialog content</p>
        </DialogContent>
      </Dialog>
    );
    
    // Open the dialog
    await userEvent.click(screen.getByText('Open Dialog'));
    
    // Check that dialog is open
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    
    // Click the close button (X in the corner)
    const closeButton = screen.getByRole('button', { name: /close/i });
    await userEvent.click(closeButton);
    
    // Check that dialog is closed
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
  
  it('supports controlled open state', async () => {
    const ControlledDialogTest = () => {
      const [open, setOpen] = React.useState(false);
      return (
        <div>
          <button onClick={() => setOpen(true)}>Open Controlled</button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
              <DialogTitle>Controlled Dialog</DialogTitle>
              <button onClick={() => setOpen(false)}>Close</button>
            </DialogContent>
          </Dialog>
        </div>
      );
    };
    
    render(<ControlledDialogTest />);
    
    // Open dialog with external button
    await userEvent.click(screen.getByText('Open Controlled'));
    
    // Check dialog is open
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    
    // Close with internal button
    await userEvent.click(screen.getByText('Close'));
    
    // Check dialog is closed
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
});
```

## Related Components

- [AlertDialog](https://ui.shadcn.com/docs/components/alert-dialog): Similar to Dialog, but for critical confirmations that interrupt the user
- [Sheet](https://ui.shadcn.com/docs/components/sheet): Extends the Dialog component to create a slide-in panel from the edge of the screen
- [Popover](./popover.md): For smaller, non-modal overlays that don't block the main content
- [DropdownMenu](./dropdown-menu.md): For dropdown menus that can trigger dialogs
- [Drawer](https://ui.shadcn.com/docs/components/drawer): Alternative to Dialog for mobile-friendly slide-in panels
