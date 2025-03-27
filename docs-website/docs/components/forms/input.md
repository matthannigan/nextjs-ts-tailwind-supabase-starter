---
sidebar_label: Input
---

# Input Component

A versatile form input component that provides a standardized text field for collecting user input with consistent styling and accessibility features.

## Import

```tsx
import { Input } from '@/components/ui/input';
```

## Usage

### Basic Usage

```tsx
<Input placeholder="Enter your name" />
```

### With Labels and Form Elements

```tsx
<div className="grid w-full max-w-sm gap-1.5">
  <label htmlFor="email" className="text-sm font-medium">Email</label>
  <Input 
    type="email" 
    id="email" 
    placeholder="Enter your email" 
    required 
  />
</div>
```

### Different Input Types

```tsx
<div className="flex flex-col gap-4">
  <Input type="text" placeholder="Text input" />
  <Input type="email" placeholder="Email input" />
  <Input type="password" placeholder="Password input" />
  <Input type="number" placeholder="Number input" />
  <Input type="tel" placeholder="Telephone input" />
  <Input type="url" placeholder="URL input" />
  <Input type="date" />
  <Input type="time" />
  <Input type="search" placeholder="Search..." />
</div>
```

### Disabled State

```tsx
<Input 
  disabled 
  placeholder="This input is disabled" 
  value="Disabled content" 
/>
```

### With Default Value

```tsx
<Input 
  defaultValue="Default text value" 
  onChange={(e) => console.log(e.target.value)}
/>
```

### File Input

```tsx
<Input 
  type="file" 
  accept="image/*" 
  onChange={(e) => console.log(e.target.files)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `'text'` | Specifies the type of input field (text, email, password, etc.) |
| `className` | `string` | `undefined` | Additional CSS classes to apply to the input element |
| `disabled` | `boolean` | `false` | Disables the input when true |
| `required` | `boolean` | `false` | Makes the input field required when true |
| `placeholder` | `string` | `undefined` | Placeholder text to display when input is empty |
| `value` | `string` | `undefined` | Controlled value of the input element |
| `defaultValue` | `string` | `undefined` | Default value for an uncontrolled input |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | `undefined` | Function called when input value changes |
| `onFocus` | `FocusEventHandler<HTMLInputElement>` | `undefined` | Function called when input receives focus |
| `onBlur` | `FocusEventHandler<HTMLInputElement>` | `undefined` | Function called when input loses focus |
| `...props` | `React.ComponentProps<'input'>` | `undefined` | All other props are passed to the underlying input element |

## TypeScript

```tsx
import * as React from 'react';

// Component Type Definition
type InputProps = React.ComponentProps<'input'>;

// Usage with TypeScript
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        className={/* className implementation */}
        ref={ref}
        {...props}
      />
    );
  }
);
```

## Customization

### Style Overrides

The Input component can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes:

```tsx
<Input 
  className="border-blue-500 focus-visible:ring-blue-500 px-4 py-3 text-lg"
  placeholder="Custom styled input" 
/>
```

2. Using the global CSS to target the Input component:

```css
/* In your global.css file */
input {
  font-family: 'Your Custom Font', sans-serif;
}
```

### Extending the Component

```tsx
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';
import { useState } from 'react';

export function SearchInput({ onSearch, className, ...props }) {
  const [value, setValue] = useState('');

  const handleClear = () => {
    setValue('');
    if (props.onChange) {
      const event = { target: { value: '' } } as React.ChangeEvent<HTMLInputElement>;
      props.onChange(event);
    }
    if (onSearch) {
      onSearch('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(value);
    }
    if (props.onKeyDown) {
      props.onKeyDown(e);
    }
  };

  return (
    <div className={`relative ${className || ''}`}>
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input 
        {...props}
        type="search"
        className="pl-8 pr-8"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Clear</span>
        </button>
      )}
    </div>
  );
}
```

## Examples

### Integration with Forms

```tsx
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
                <Input type="email" placeholder="Enter your email" {...field} />
              </FormControl>
              <FormDescription>
                We'll never share your email with anyone else.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update Profile</Button>
      </form>
    </Form>
  );
}
```

### Integration with Other Components

```tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

export function SubscriptionCard() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic
    console.log(`Subscribing: ${email}`);
    setEmail('');
  };
  
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Subscribe to our Newsletter</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Subscribe</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
```

### Responsive Behavior

The Input component includes built-in responsive behavior through its Tailwind classes.

```tsx
<Input 
  className="h-8 px-2 text-sm md:h-10 md:px-3 md:text-base lg:h-12 lg:px-4 lg:text-lg" 
  placeholder="Responsive input" 
/>
```

The responsive behavior includes:

- **Mobile**: The component has a base text size and default height
- **Tablet and Desktop**: By default, the text size is adjusted to be smaller on larger screens (`md:text-sm`)
- **Custom responsiveness**: Additional responsive classes can be added as shown in the example above to modify padding, height, and font size at different breakpoints

## Accessibility

The Input component follows these accessibility best practices:

- Uses semantic HTML with the native `<input>` element
- Supports all standard input attributes (required, disabled, aria-*, etc.)
- Includes proper focus states with visible focus rings that follow keyboard navigation
- Preserves browser-native validation for types like email, number, etc.
- Provides visible disabled states with reduced opacity
- Works with form labels and can be linked with `id` and `for` attributes
- Maintains proper contrast ratios for text against backgrounds
- Supports screen readers with appropriate ARIA attributes
- Is fully keyboard navigable

For best accessibility, always use the Input component with proper labels:

```tsx
<div className="grid w-full gap-1.5">
  <label htmlFor="name" className="text-sm font-medium">Name</label>
  <Input id="name" aria-describedby="name-description" />
  <p id="name-description" className="text-xs text-muted-foreground">
    Enter your full name as it appears on your ID.
  </p>
</div>
```

## Implementation Details

The component:

- Is built using a React.forwardRef to properly forward refs to the underlying input element
- Uses the `cn` utility function to merge default styles with custom className props
- Applies consistent Tailwind CSS styles for various states (focus, disabled, file inputs)
- Accepts all native input attributes through prop spreading
- Has proper display name for better debugging
- Uses responsive text sizing (smaller on larger screens) to maintain UI consistency
- Includes proper ring styling for focus states
- Provides special styling for file input types
- Maintains the same height across various input types for consistent forms

## Common Pitfalls

- **Missing form labels**: Always use proper `<label>` elements with inputs for accessibility
- **Incorrect type**: Ensure you use the appropriate `type` (email, password, etc.) to leverage browser validation
- **Controlled vs. uncontrolled**: Be consistent in using either `value` with `onChange` (controlled) or `defaultValue` (uncontrolled)
- **Spread order**: When extending the component, make sure to spread your custom props last to prevent overrides
- **File inputs**: Be aware that file inputs have special styling and may need additional code for handling files
- **Autofill styling**: Browser autofill styling may not match your theme - use vendor-specific CSS rules if needed
- **Mobile considerations**: On mobile, ensure inputs are large enough for touch targets (at least 44×44px)
- **Form validation**: When using client-side validation like React Hook Form, make sure to display errors appropriately near inputs

## Testing

```tsx
// Example test for the Input component
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '@/components/ui/input';

describe('Input', () => {
  it('renders correctly with placeholder', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });
  
  it('accepts and updates value', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    
    await user.type(input, 'Hello World');
    
    expect(input).toHaveValue('Hello World');
    expect(handleChange).toHaveBeenCalledTimes(11); // Once per character
  });
  
  it('renders as disabled when disabled prop is provided', () => {
    render(<Input disabled placeholder="Disabled input" />);
    expect(screen.getByPlaceholderText('Disabled input')).toBeDisabled();
  });
  
  it('applies custom className correctly', () => {
    render(<Input className="test-class" data-testid="custom-input" />);
    const input = screen.getByTestId('custom-input');
    expect(input).toHaveClass('test-class');
    // Should also have default classes
    expect(input).toHaveClass('rounded-md');
  });
  
  it('forwards ref to the underlying input element', () => {
    const ref = jest.fn();
    render(<Input ref={ref} />);
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLInputElement);
  });
});
```

## Related Components

- [Form](./form.md): Container component for form elements including Input
- [Button](../ui/button.md): Often used alongside Input for form submissions
- [Select](./select.md): For selecting from predefined options instead of free text input
- [Textarea](./textarea.md): For multi-line text input
- [Checkbox](./checkbox.md): For boolean/multiple choice inputs
- [SearchInput](../ui/search-input.md): Specialized input for search functionality
