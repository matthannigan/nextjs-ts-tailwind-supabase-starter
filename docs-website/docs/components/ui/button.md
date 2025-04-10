---
sidebar_label: Button
---

# Button Component

A versatile button component that supports multiple variants, sizes, and icon integration for triggering actions in forms and user interfaces.

## Import

```tsx
import { Button, buttonVariants } from '@/components/ui/button';
```

## Usage

### Basic Usage

```tsx
<Button>Click me</Button>
```

### Variants

```tsx
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

### Sizes

```tsx
<Button size="default">Default Size</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>
```

### With Icons

```tsx
import { Plus, ArrowRight } from 'lucide-react';

// Icon on the left (default)
<Button icon={Plus}>Add Item</Button>

// Icon on the right
<Button icon={ArrowRight} iconPosition="right">Next</Button>

// Icon-only button
<Button size="icon" icon={Plus} aria-label="Add item" />
```

### As Link

```tsx
import Link from 'next/link';

// Option 1: Using asChild prop
<Button asChild>
  <Link href="/somewhere">Go to Somewhere</Link>
</Button>

// Option 2: Using buttonVariants helper
<Link href="/somewhere" className={buttonVariants({ variant: 'outline' })}>
  Go to Somewhere
</Link>
```

### Disabled State

```tsx
<Button disabled>Cannot Click</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | Controls the visual style of the button |
| `size` | `'default' \| 'sm' \| 'lg' \| 'icon'` | `'default'` | Controls the size of the button |
| `asChild` | `boolean` | `false` | When true, the component will render its child rather than a button element |
| `icon` | `LucideIcon` | `undefined` | Optional Lucide icon component to display |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Controls the position of the icon relative to text |
| `children` | `ReactNode` | - | Content to display inside the button |
| `className` | `string` | `''` | Additional CSS classes to apply |
| `disabled` | `boolean` | `false` | When true, disables button interactions and applies disabled styling |
| `...props` | `ButtonHTMLAttributes<HTMLButtonElement>` | - | All other props are passed to the underlying button element |

## TypeScript

```tsx
import { LucideIcon } from 'lucide-react';
import { VariantProps } from 'class-variance-authority';

// Button variants definition (exported as buttonVariants)
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// Button component props
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}
```

## Customization

### Style Overrides

The Button component can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes:

```tsx
<Button className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
  Custom Style
</Button>
```

2. Extending the buttonVariants with new options:

```tsx
// In your own button customization file
import { buttonVariants } from '@/components/ui/button';
import { cva } from 'class-variance-authority';

export const customButtonVariants = cva(buttonVariants(), {
  variants: {
    variant: {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      success: 'bg-green-600 text-white hover:bg-green-700',
    },
    size: {
      xl: 'h-14 px-10 py-3 text-lg rounded-xl',
    },
  },
});
```

### Extending the Component

```tsx
import { Button, ButtonProps } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean;
  loadingText?: string;
}

export function LoadingButton({ 
  isLoading = false,
  loadingText = "Loading...",
  disabled,
  children,
  ...props 
}: LoadingButtonProps) {
  return (
    <Button 
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Button>
  );
}
```

## Examples

### Integration with Forms

```tsx
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Sign In</Button>
      </form>
    </Form>
  );
}
```

### Integration with Other Components

```tsx
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export function UserCard({ user }) {
  return (
    <Card>
      <CardHeader className="flex flex-row gap-4 items-center">
        <Avatar>
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback>{user.initials}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{user.name}</h3>
          <p className="text-sm text-muted-foreground">{user.role}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p>{user.bio}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">View Profile</Button>
        <Button>Connect</Button>
      </CardFooter>
    </Card>
  );
}
```

### Responsive Behavior

The Button component can be made responsive using Tailwind's responsive modifiers:

```tsx
// Full width on mobile, auto width on larger screens
<Button className="w-full md:w-auto">
  Responsive Button
</Button>

// Different sizes on different breakpoints
<Button className="h-8 px-2 sm:h-9 sm:px-3 md:h-10 md:px-4 lg:h-11 lg:px-8">
  Responsive Size
</Button>
```

## Accessibility

The Button component follows these accessibility best practices:

- Uses native `<button>` element semantics by default
- Supports keyboard navigation and focus states with visible focus rings
- Includes proper disabled states that remove the element from tab order
- Maintains proper color contrast in all variants
- Supports ARIA attributes (aria-label, aria-pressed, etc.)
- When used as icons-only, requires an `aria-label` for screen readers
- Uses Radix UI's Slot primitive for the `asChild` functionality, preserving accessibility

## Implementation Details

The component:

- Is built using Class Variance Authority (CVA) for type-safe variant management
- Supports Lucide icons with consistent styling and positioning
- Handles icons with appropriate sizing and pointer events configuration
- Uses the Radix UI Slot primitive when `asChild` is true to preserve props
- Customizes focus states for keyboard navigation
- Applies appropriate transition effects
- Includes a reusable `buttonVariants` helper function for consistency

## Common Pitfalls

- **Missing type for form submissions**: Remember to add `type="submit"` for buttons that submit forms
- **Icon-only buttons without labels**: Always add an `aria-label` for icon-only buttons to maintain accessibility
- **Nesting interactive elements**: When using `asChild` with an interactive element like `<a>` or `<Link>`, avoid nesting other interactive elements inside
- **Overriding styles**: Be careful when adding custom classes that might conflict with the component's base styles
- **Next.js client components**: The Button component might need to be used within a client component when performing client-side actions

## Testing

```tsx
// Example test for the Button component
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

describe('Button', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });
  
  it('handles clicks properly', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('renders with an icon', () => {
    render(<Button icon={Plus}>Add Item</Button>);
    expect(screen.getByRole('button', { name: /add item/i })).toBeInTheDocument();
    // Check for SVG icon presence
    expect(screen.getByRole('button').querySelector('svg')).toBeInTheDocument();
  });
  
  it('is properly disabled', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
```

## Related Components

- [Form](../forms/form.md): Often used with Button for form submissions
- [Dialog](./dialog.md): Uses Button for trigger and action buttons
- [DropdownMenu](./dropdown-menu.md): Uses Button styling for dropdown triggers
