# Label Component

The Label component renders an accessible label element that can be associated with form controls, providing proper labeling for improved user experience and accessibility.

## Import

```tsx
import { Label } from '@/components/ui/label';
```

## Usage

### Basic Usage

```tsx
<Label htmlFor="email">Email address</Label>
<Input id="email" type="email" />
```

### With Form Controls

```tsx
<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="username">Username</Label>
  <Input id="username" placeholder="Enter your username" />
</div>
```

### With Required Fields

```tsx
<Label htmlFor="password" className="flex items-center gap-1">
  Password <span className="text-destructive">*</span>
</Label>
<Input id="password" type="password" required />
```

### Disabled State

```tsx
<Label htmlFor="disabled-input" className="cursor-not-allowed opacity-70">
  Disabled Field
</Label>
<Input id="disabled-input" disabled />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `htmlFor` | `string` | - | The ID of the form element the label is associated with |
| `className` | `string` | - | Additional CSS classes to apply |
| `children` | `ReactNode` | - | Content to display inside the label |
| `...props` | `React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>` | - | All other props are passed to the underlying Radix UI Label component |

## TypeScript

```tsx
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName
```

## Customization

### Style Overrides

The Label component can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes:

```tsx
<Label htmlFor="custom" className="text-primary text-base font-bold">
  Custom Label
</Label>
```

2. Using peer modifiers for connected form elements:

```tsx
<div className="grid gap-1.5">
  <Label 
    htmlFor="input-with-error" 
    className="peer-invalid:text-destructive" // Applies when the peer (input) is invalid
  >
    Full Name
  </Label>
  <Input id="input-with-error" required />
</div>
```

### Extending the Component

```tsx
import { Label } from '@/components/ui/label';

export function RequiredFieldLabel({ children, ...props }) {
  return (
    <Label 
      {...props} 
      className={`flex items-center gap-1 ${props.className || ''}`}
    >
      {children}
      <span className="text-destructive text-sm">*</span>
    </Label>
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
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  email: z.string().email(),
});

export function SubscribeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="example@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </Form>
  );
}
```

### Integration with react-hook-form using Regular Label

If you prefer using the Label component directly with react-hook-form:

```tsx
import { useForm } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function SimpleForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label 
          htmlFor="name" 
          className={errors.name ? "text-destructive" : ""}
        >
          Name
        </Label>
        <Input 
          id="name"
          {...register("name", { required: "Name is required" })} 
        />
        {errors.name && (
          <p className="text-sm text-destructive">
            {errors.name.message}
          </p>
        )}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

### Integration with Other Components

```tsx
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';

export function FormControls() {
  return (
    <div className="space-y-6">
      {/* With Checkbox */}
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      
      {/* With RadioGroup */}
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
      </RadioGroup>
      
      {/* With Switch */}
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </div>
  );
}
```

### Responsive Behavior

The Label component is designed to work responsively with different form controls:

```tsx
<div className="grid gap-2 sm:gap-4">
  <Label 
    htmlFor="responsive-input" 
    className="text-xs sm:text-sm md:text-base"
  >
    Responsive Label
  </Label>
  <Input id="responsive-input" className="h-8 sm:h-10 md:h-12" />
</div>
```

## Accessibility

The Label component follows these accessibility best practices:

- Uses the native HTML `<label>` element through Radix UI's Label primitive
- Properly associates labels with form controls using the `htmlFor` attribute
- Maintains proper styling for disabled states
- Supports keyboard navigation through the associated form element
- Uses appropriate font size and weight for readability
- Enables screen readers to announce the label when the associated control receives focus
- The `peer-disabled` class automatically styles the label when associated input is disabled

## Implementation Details

The component:

- Is built using Radix UI's Label primitive for proper accessibility
- Uses Class Variance Authority (CVA) for maintaining consistent styling
- Applies appropriate text sizing and font weight for legibility
- Includes styling support for disabled states through the peer modifier
- Forwards refs to the underlying Radix UI component
- Preserves all native label attributes and event handlers

## Common Pitfalls

- **Missing `htmlFor` attribute**: Always include the `htmlFor` attribute that matches the `id` of the associated form control
- **Inconsistent label-control pairing**: Ensure that every interactive form element has an associated label
- **Hidden labels**: Avoid hiding labels, as this reduces accessibility. If space is a concern, use appropriate visually-hidden techniques that maintain screen reader access
- **Unclear labeling**: Labels should be concise but descriptive of what information is required
- **Missing required field indicators**: Use visual indicators for required fields, but don't rely solely on color (use an asterisk or "Required" text)

## Testing

```tsx
// Example test for the Label component
import { render, screen } from '@testing-library/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

describe('Label', () => {
  it('renders correctly with the provided text', () => {
    render(<Label htmlFor="test">Test Label</Label>);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });
  
  it('associates with the correct form control', () => {
    render(
      <>
        <Label htmlFor="test-input">Email Address</Label>
        <Input id="test-input" placeholder="Enter email" />
      </>
    );
    
    const label = screen.getByText('Email Address');
    expect(label).toHaveAttribute('for', 'test-input');
  });
  
  it('applies custom class names', () => {
    render(
      <Label htmlFor="test" className="custom-class">
        Custom Label
      </Label>
    );
    
    const label = screen.getByText('Custom Label');
    expect(label).toHaveClass('custom-class');
  });
  
  it('applies proper styling for disabled state', () => {
    render(
      <div>
        <Label htmlFor="disabled-input">Disabled Input</Label>
        <Input id="disabled-input" disabled />
      </div>
    );
    
    // Note: Testing peer classes might require additional assertions based on your styling implementation
    const label = screen.getByText('Disabled Input');
    expect(label).toBeInTheDocument();
  });
});
```

## Related Components

- [Input](./input.md): Text input field that works with Label
- [Checkbox](./checkbox.md): Checkbox input that works with Label
- [RadioGroup](./radio-group.md): Radio inputs that work with Label
- [Select](./select.md): Select input that works with Label
- [Form](./form.md): Form components that use Label internally with FormLabel