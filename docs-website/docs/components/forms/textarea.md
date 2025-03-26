---
sidebar_label: Textarea
---

# Textarea Component

A customizable textarea input field for multiline text entry with full support for form integration. The component extends the native HTML textarea with consistent styling that matches the design system.

## Import

```tsx
import { Textarea } from '@/components/ui/textarea';
```

## Usage

### Basic Usage

```tsx
<Textarea placeholder="Type your message here." />
```

### Disabled State

```tsx
<Textarea
  disabled
  placeholder="This textarea is disabled"
/>
```

### With Label

```tsx
import { Label } from '@/components/ui/label';

<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea placeholder="Type your message here." id="message" />
</div>
```

### With Helper Text

```tsx
import { Label } from '@/components/ui/label';

<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea placeholder="Type your message here." id="message" />
  <p className="text-sm text-muted-foreground">
    Your message will be copied to the support team.
  </p>
</div>
```

### With Button

```tsx
import { Button } from '@/components/ui/button';

<div className="grid w-full gap-2">
  <Textarea placeholder="Type your message here." />
  <Button>Send message</Button>
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes to apply to the textarea |
| `placeholder` | `string` | `undefined` | Placeholder text displayed when textarea is empty |
| `disabled` | `boolean` | `false` | When true, prevents the user from interacting with the textarea |
| `rows` | `number` | `undefined` | Specifies the visible number of lines |
| `value` | `string` | `undefined` | The value of the textarea |
| `defaultValue` | `string` | `undefined` | The default value of the textarea |
| `onChange` | `function` | `undefined` | Function called when the value changes |
| `name` | `string` | `undefined` | The name attribute for the textarea |
| `id` | `string` | `undefined` | The id attribute for the textarea |
| `required` | `boolean` | `false` | Specifies that the textarea field must be filled out |
| `readOnly` | `boolean` | `false` | When true, makes the textarea not editable |

All standard HTML textarea attributes are also supported.

## TypeScript

```tsx
import { Textarea } from '@/components/ui/textarea';

// The Textarea component is typed using React.ComponentProps<'textarea'>
// which includes all standard HTML textarea attributes
```

## Customization

### Style Overrides

The component can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes
2. Modifying the base styles in the component implementation

The default styles for the Textarea component include:

```tsx
'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
```

### Extending the Component

```tsx
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

export function AutoResizeTextarea({ className, ...props }) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  
  React.useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const adjustHeight = () => {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      };
      
      textarea.addEventListener('input', adjustHeight);
      adjustHeight(); // Initial adjustment
      
      return () => textarea.removeEventListener('input', adjustHeight);
    }
  }, []);
  
  return (
    <Textarea 
      ref={textareaRef}
      {...props} 
      className={cn('overflow-hidden', className)}
    />
  );
}
```

## Examples

### Integration with React Hook Form

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Textarea } from '@/components/ui/textarea';
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

const formSchema = z.object({
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export function MessageForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message here..." {...field} />
              </FormControl>
              <FormDescription>
                Please provide a detailed message.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

### Integration with Other Components

```tsx
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export function FeedbackCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Provide Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full gap-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="feedback" className="text-right">
              Feedback
            </Label>
            <Textarea
              id="feedback"
              placeholder="Tell us what you think..."
              className="col-span-3"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
}
```

### Responsive Behavior

The component responds to different screen sizes in the following ways:

- **Mobile**: Uses text-base font size with standard padding for touch targets
- **Tablet/Desktop**: Uses text-sm font size (applied with the md: breakpoint) while maintaining the same padding and layout
- **All Devices**: Maintains full width and consistent padding to ensure usability across devices

## Accessibility

The component follows these accessibility best practices:

- Supports proper labeling when used with the `Label` component
- Maintains proper contrast ratios for text and borders
- Uses `disabled` attribute for disabled state which is correctly announced by screen readers
- Provides visual focus styles for keyboard navigation
- Supports aria attributes through spread props

## Implementation Details

The component:

- Uses React's `forwardRef` to properly forward refs to the underlying textarea element
- Leverages the `cn` utility for className merging with Tailwind
- Extends the native HTML textarea attributes through React.ComponentProps
- Provides a responsive design with different text sizes for mobile and desktop
- Applies consistent focus styles that match other form components in the library

## Common Pitfalls

- **Missing Labels**: Always associate a `Label` component with your Textarea for accessibility
- **Fixed Height Issues**: The default minimum height might cause layout issues in some contexts; use the `className` prop to override if needed
- **Form Integration**: When using with React Hook Form, ensure you spread the entire `field` object to properly connect validation and state
- **Overflowing Content**: For very large text inputs, consider using `overflow-auto` or implementing the AutoResizeTextarea example

## Testing

```tsx
// Example test for the Textarea component
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from '@/components/ui/textarea';

describe('Textarea', () => {
  it('renders correctly', () => {
    render(<Textarea placeholder="Test placeholder" />);
    expect(screen.getByPlaceholderText('Test placeholder')).toBeInTheDocument();
  });
  
  it('handles user input', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    
    render(<Textarea onChange={handleChange} />);
    const textarea = screen.getByRole('textbox');
    
    await user.type(textarea, 'Hello, world!');
    expect(handleChange).toHaveBeenCalled();
    expect(textarea).toHaveValue('Hello, world!');
  });

  it('respects disabled state', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    
    render(<Textarea disabled onChange={handleChange} />);
    const textarea = screen.getByRole('textbox');
    
    expect(textarea).toBeDisabled();
    await user.type(textarea, 'Test');
    expect(handleChange).not.toHaveBeenCalled();
  });
});
```

## Related Components

- [Input](./input.md): For single-line text input fields
- [Form](./form.md): For creating cohesive forms with validation
- [Label](./label.md): For labeling form elements including textarea