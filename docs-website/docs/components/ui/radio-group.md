# RadioGroup Component

A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time. The RadioGroup component provides an accessible way to create a group of mutually exclusive options.

## Import

```tsx
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
```

## Usage

### Basic Usage

```tsx
<RadioGroup defaultValue="option-1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-1" id="option-1" />
    <Label htmlFor="option-1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-2" id="option-2" />
    <Label htmlFor="option-2">Option 2</Label>
  </div>
</RadioGroup>
```

### With Default Selection

```tsx
<RadioGroup defaultValue="option-2">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-1" id="option-1" />
    <Label htmlFor="option-1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-2" id="option-2" />
    <Label htmlFor="option-2">Option 2</Label>
  </div>
</RadioGroup>
```

### Disabled Options

```tsx
<RadioGroup defaultValue="option-1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-1" id="option-1" />
    <Label htmlFor="option-1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-2" id="option-2" disabled />
    <Label htmlFor="option-2" className="text-muted-foreground">
      Option 2 (Disabled)
    </Label>
  </div>
</RadioGroup>
```

## Props

### RadioGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `undefined` | The controlled value of the radio item to check. Must be used with `onValueChange`. |
| `defaultValue` | `string` | `undefined` | The value of the radio item that should be checked by default. |
| `onValueChange` | `(value: string) => void` | `undefined` | Event handler called when the value changes. |
| `disabled` | `boolean` | `false` | When `true`, prevents user interaction with all radio items in the group. |
| `name` | `string` | `undefined` | The name of the group. Submitted with its owning form as part of a name/value pair. |
| `required` | `boolean` | `false` | When `true`, indicates that the user must check a radio item before the owning form can be submitted. |
| `orientation` | `"horizontal" \| "vertical"` | `"vertical"` | The orientation of the component. |
| `dir` | `"ltr" \| "rtl"` | `undefined` | The reading direction of the radio group. If not specified, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode. |
| `loop` | `boolean` | `true` | When `true`, keyboard navigation will loop from last item to first, and vice versa. |
| `className` | `string` | `undefined` | Additional CSS classes to add to the radio group. |

### RadioGroupItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | Required | The value of the radio item. Must be unique within the group. |
| `disabled` | `boolean` | `false` | When `true`, prevents user interaction with this radio item. |
| `required` | `boolean` | `false` | When `true`, indicates that the user must check this radio item before the owning form can be submitted. |
| `className` | `string` | `undefined` | Additional CSS classes to add to the radio item. |
| `id` | `string` | `undefined` | The unique ID for the radio item. This should be used to associate the radio with a label. |

## TypeScript

```tsx
// RadioGroup Component Types
import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

type RadioGroupProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>;
type RadioGroupItemProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
```

## Customization

### Style Overrides

The RadioGroup and RadioGroupItem components can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes:

```tsx
<RadioGroup className="flex flex-col space-y-4">
  {/* ... */}
</RadioGroup>

<RadioGroupItem className="h-5 w-5 border-blue-500" />
```

2. Using the `cn` utility for conditional styling:

```tsx
import { cn } from '@/lib/utils';

<RadioGroupItem 
  className={cn(
    'custom-base-styles',
    isSpecialCase && 'special-case-styles'
  )} 
/>
```

### Customizing the Indicator

The indicator (the dot inside the radio button) is implemented using the `Circle` component from `lucide-react`. You can customize its appearance by wrapping the RadioGroupItem:

```tsx
<div className="custom-radio-wrapper">
  <RadioGroupItem value="custom" id="custom" />
  {/* Custom styling around the radio */}
</div>
```

## Examples

### Integration with React Hook Form

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

// Define your form schema
const formSchema = z.object({
  plan: z.enum(['free', 'pro', 'enterprise'], {
    required_error: 'Please select a plan.',
  }),
});

// Create your form component
function PlanForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="plan"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Subscription Plan</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="free" id="free" />
                    </FormControl>
                    <FormLabel htmlFor="free" className="font-normal">
                      Free
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="pro" id="pro" />
                    </FormControl>
                    <FormLabel htmlFor="pro" className="font-normal">
                      Pro
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="enterprise" id="enterprise" />
                    </FormControl>
                    <FormLabel htmlFor="enterprise" className="font-normal">
                      Enterprise
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </Form>
  );
}
```

### Card-Based Radio Options

```tsx
import { Card } from '@/components/ui/card';

function CardRadioGroup() {
  const [selectedValue, setSelectedValue] = React.useState('option-1');
  
  return (
    <RadioGroup 
      defaultValue="option-1" 
      onValueChange={setSelectedValue}
      className="grid grid-cols-3 gap-4"
    >
      {['option-1', 'option-2', 'option-3'].map((option) => (
        <label
          key={option}
          htmlFor={option}
          className="cursor-pointer"
        >
          <Card 
            className={`p-4 transition-all hover:border-primary ${
              selectedValue === option ? 'border-primary bg-primary/5' : ''
            }`}
          >
            <div className="flex items-start space-x-4">
              <RadioGroupItem 
                value={option} 
                id={option} 
                className="mt-1"
              />
              <div>
                <h3 className="font-medium">Option {option.split('-')[1]}</h3>
                <p className="text-sm text-muted-foreground">
                  Description for option {option.split('-')[1]}
                </p>
              </div>
            </div>
          </Card>
        </label>
      ))}
    </RadioGroup>
  );
}
```

### Responsive Behavior

The RadioGroup responds to different screen sizes in the following ways:

- **Mobile**: By default, RadioGroup renders with a vertical layout (stacked). For a horizontal layout on mobile, use flexbox with wrapping:
  ```tsx
  <RadioGroup className="flex flex-wrap gap-4">
    {/* Radio items */}
  </RadioGroup>
  ```

- **Tablet and Desktop**: For a horizontal layout on larger screens, you can use utility classes for responsive behavior:
  ```tsx
  <RadioGroup className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
    {/* Radio items */}
  </RadioGroup>
  ```

## Accessibility

The RadioGroup component follows these accessibility best practices:

- Implements the [WAI-ARIA Radio Group pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)
- Uses the roving tabindex pattern for keyboard navigation within the group
- Includes support for the following keyboard interactions:
  - `Tab`: Moves focus to the checked radio button or the first radio button in the group
  - `Space`: Selects the radio button that currently has focus
  - `Arrow Up/Left`: Moves focus to and selects the previous radio button
  - `Arrow Down/Right`: Moves focus to and selects the next radio button
- Supports proper labeling through standard HTML label elements
- When used with the FormLabel component, ensures association between labels and controls
- Enables the use of `required` and `disabled` states that are properly communicated to screen readers

## Implementation Details

The component:

- Is built on top of Radix UI's RadioGroup primitive, which ensures accessibility
- Uses standard SVG circles from the Lucide icon library for the radio indicator
- Applies default styles that are easily customizable using Tailwind CSS
- Includes focus states for keyboard navigation with visible focus rings
- Supports directional awareness for both LTR and RTL layouts
- Uses a forward ref pattern to maintain proper ref behavior when used within forms

## Common Pitfalls

- **Missing Value Attribute**: Each RadioGroupItem must have a unique `value` prop, or the component won't work correctly.
- **Incorrect Form Integration**: When using with React Hook Form, make sure to use the `onValueChange` handler for RadioGroup (not `onChange`) and set the `defaultValue` properly.
- **Missing ID/htmlFor Connection**: Each RadioGroupItem should have an `id` that matches the `htmlFor` attribute of its corresponding Label.
- **Styling Indicator State**: The checked state is handled by the component; don't try to handle it manually with pseudo-classes like `:checked`.
- **Next.js App Router**: When using with Next.js App Router, ensure the component is properly client-side rendered with 'use client' directive at the top of your component file.

## Testing

```tsx
// Example test for the RadioGroup component
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

describe('RadioGroup', () => {
  it('renders correctly', () => {
    render(
      <RadioGroup defaultValue="option-1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-1" id="option-1" />
          <Label htmlFor="option-1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-2" id="option-2" />
          <Label htmlFor="option-2">Option 2</Label>
        </div>
      </RadioGroup>
    );
    
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 1')).toBeChecked();
    expect(screen.getByLabelText('Option 2')).not.toBeChecked();
  });
  
  it('allows changing the selected value', async () => {
    const user = userEvent.setup();
    const onValueChangeMock = jest.fn();
    
    render(
      <RadioGroup defaultValue="option-1" onValueChange={onValueChangeMock}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-1" id="option-1" />
          <Label htmlFor="option-1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-2" id="option-2" />
          <Label htmlFor="option-2">Option 2</Label>
        </div>
      </RadioGroup>
    );
    
    await user.click(screen.getByLabelText('Option 2'));
    expect(onValueChangeMock).toHaveBeenCalledWith('option-2');
    expect(screen.getByLabelText('Option 2')).toBeChecked();
  });
  
  it('respects the disabled state', async () => {
    const user = userEvent.setup();
    const onValueChangeMock = jest.fn();
    
    render(
      <RadioGroup defaultValue="option-1" onValueChange={onValueChangeMock}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-1" id="option-1" />
          <Label htmlFor="option-1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-2" id="option-2" disabled />
          <Label htmlFor="option-2">Option 2</Label>
        </div>
      </RadioGroup>
    );
    
    await user.click(screen.getByLabelText('Option 2'));
    expect(onValueChangeMock).not.toHaveBeenCalled();
    expect(screen.getByLabelText('Option 1')).toBeChecked();
    expect(screen.getByLabelText('Option 2')).not.toBeChecked();
  });
});
```

## Related Components

- [Form](../ui/form.md): Used together with RadioGroup for form validation and submission
- [Label](../ui/label.md): Used to create accessible labels for RadioGroupItems
- [Checkbox](../ui/checkbox.md): Used for multiple selection where users can select multiple options
- [Select](../ui/select.md): Used for selecting a single option from a dropdown menu

## Installation

This component requires the following dependencies:

```bash
# For the RadioGroup component
npm install @radix-ui/react-radio-group lucide-react
```

These dependencies are already included in the starter project, so no additional installation is needed unless starting a new project.
