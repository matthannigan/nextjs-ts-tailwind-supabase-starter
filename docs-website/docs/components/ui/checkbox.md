# Checkbox Component

A control component that allows users to toggle between checked and unchecked states, built using Radix UI's Checkbox primitive with appropriate styling and accessibility features.

## Import

```tsx
import { Checkbox } from '@/components/ui/checkbox';
```

## Usage

### Basic Usage

```tsx
<Checkbox />
```

### With Label

```tsx
import { Label } from "@/components/ui/label";

<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>
```

### Checked State

```tsx
// Controlled component
import { useState } from "react";

function ControlledCheckbox() {
  const [checked, setChecked] = useState(false);
  
  return (
    <Checkbox 
      checked={checked}
      onCheckedChange={setChecked}
    />
  );
}
```

### Disabled State

```tsx
<Checkbox disabled />

<div className="flex items-center space-x-2">
  <Checkbox id="disabled" disabled />
  <Label htmlFor="disabled" className="text-muted-foreground">
    Disabled option
  </Label>
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean \| 'indeterminate'` | `undefined` | The controlled checked state of the checkbox |
| `defaultChecked` | `boolean \| 'indeterminate'` | `undefined` | The default checked state when uncontrolled |
| `onCheckedChange` | `(checked: boolean \| 'indeterminate') => void` | `undefined` | Event handler called when the checked state changes |
| `disabled` | `boolean` | `false` | When true, prevents user interaction and applies disabled styling |
| `required` | `boolean` | `false` | When true, indicates the input must have a value |
| `name` | `string` | `undefined` | The name of the checkbox for form submission |
| `value` | `string` | `undefined` | The value of the checkbox for form submission |
| `id` | `string` | `undefined` | The id of the checkbox, used with a label's htmlFor prop |
| `className` | `string` | `''` | Additional CSS classes to apply |
| `...props` | `React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>` | - | All other props are passed to the underlying Radix UI Checkbox component |

## TypeScript

```tsx
import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

// Component type is inherited from Radix UI's Checkbox
type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

// Usage with TypeScript
const Example: React.FC = () => {
  // Strong typing for checked state
  const [checked, setChecked] = React.useState<boolean | 'indeterminate'>(false);
  
  return (
    <Checkbox 
      checked={checked}
      onCheckedChange={(state) => setChecked(state)} 
    />
  );
};
```

## Customization

### Style Overrides

The Checkbox component can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes:

```tsx
<Checkbox className="h-6 w-6 rounded-full border-green-500 data-[state=checked]:bg-green-500" />
```

2. Creating a custom-styled checkbox:

```tsx
<Checkbox 
  className={cn(
    "border-primary-400 data-[state=checked]:bg-primary-600",
    "h-5 w-5 rounded", 
    "focus-visible:ring-primary-500"
  )} 
/>
```

### Extending the Component

```tsx
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface CustomCheckboxProps extends React.ComponentPropsWithoutRef<typeof Checkbox> {
  label: string;
  labelClassName?: string;
}

export function CustomCheckbox({ 
  label, 
  labelClassName,
  className,
  id,
  ...props 
}: CustomCheckboxProps) {
  const checkboxId = id || React.useId();
  
  return (
    <div className="flex items-center space-x-2">
      <Checkbox 
        id={checkboxId} 
        className={className}
        {...props} 
      />
      <Label 
        htmlFor={checkboxId} 
        className={cn("text-sm font-medium", labelClassName)}
      >
        {label}
      </Label>
    </div>
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
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';

const formSchema = z.object({
  marketing: z.boolean().default(false).optional(),
  terms: z.boolean().refine(value => value === true, {
    message: "You must accept the terms and conditions",
  }),
});

export function CheckboxForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      marketing: false,
      terms: false,
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
          name="marketing"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Marketing emails
                </FormLabel>
                <FormDescription>
                  Receive emails about our products and updates.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Accept terms and conditions
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

### Multiple Checkboxes with React Hook Form

```tsx
import { useForm, Controller } from 'react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

type FormValues = {
  hobbies: string[];
};

const hobbies = [
  { id: "reading", label: "Reading" },
  { id: "sports", label: "Sports" },
  { id: "cooking", label: "Cooking" },
  { id: "gaming", label: "Gaming" },
];

export function MultipleCheckboxes() {
  const { handleSubmit, control, setValue, watch } = useForm<FormValues>({
    defaultValues: {
      hobbies: [],
    },
  });

  const watchedHobbies = watch("hobbies");

  const toggleHobby = (hobby: string, checked: boolean) => {
    const currentHobbies = watchedHobbies || [];
    const updatedHobbies = checked
      ? [...currentHobbies, hobby]
      : currentHobbies.filter(h => h !== hobby);
    
    setValue("hobbies", updatedHobbies);
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Select your hobbies:</h3>
        <div className="grid grid-cols-2 gap-2">
          {hobbies.map((hobby) => (
            <div key={hobby.id} className="flex items-center space-x-2">
              <Controller
                control={control}
                name="hobbies"
                render={({ field }) => (
                  <Checkbox
                    id={hobby.id}
                    checked={watchedHobbies?.includes(hobby.id)}
                    onCheckedChange={(checked) => 
                      toggleHobby(hobby.id, checked as boolean)
                    }
                  />
                )}
              />
              <Label htmlFor={hobby.id}>{hobby.label}</Label>
            </div>
          ))}
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

### Integration with Other Components

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export function PrivacySettingsCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Privacy Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox id="cookies" defaultChecked />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="cookies" className="text-sm font-medium leading-none">
                Essential Cookies
              </Label>
              <p className="text-sm text-muted-foreground">
                Required for the website to function properly.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox id="analytics" />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="analytics" className="text-sm font-medium leading-none">
                Analytics Cookies
              </Label>
              <p className="text-sm text-muted-foreground">
                Help us improve our website by collecting anonymous usage data.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox id="marketing" />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="marketing" className="text-sm font-medium leading-none">
                Marketing Cookies
              </Label>
              <p className="text-sm text-muted-foreground">
                Allow personalized advertisements based on your browsing activity.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Save Preferences</Button>
      </CardFooter>
    </Card>
  );
}
```

### Indeterminate State

```tsx
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export function IndeterminateCheckbox() {
  const [parent, setParent] = useState<boolean | 'indeterminate'>(false);
  const [childChecked, setChildChecked] = useState({
    child1: false,
    child2: false,
    child3: false,
  });
  
  // Update parent state based on children
  const updateParentState = (newChildState: typeof childChecked) => {
    const checkedCount = Object.values(newChildState).filter(Boolean).length;
    
    if (checkedCount === 0) {
      setParent(false);
    } else if (checkedCount === Object.keys(newChildState).length) {
      setParent(true);
    } else {
      setParent('indeterminate');
    }
  };

  // Handle parent checkbox change
  const handleParentChange = (checked: boolean | 'indeterminate') => {
    const isChecked = checked === true;
    setParent(isChecked);
    
    const newChildState = {
      child1: isChecked,
      child2: isChecked,
      child3: isChecked,
    };
    
    setChildChecked(newChildState);
  };

  // Handle child checkbox change
  const handleChildChange = (key: keyof typeof childChecked, checked: boolean) => {
    const newChildState = {
      ...childChecked,
      [key]: checked,
    };
    
    setChildChecked(newChildState);
    updateParentState(newChildState);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="parent" 
          checked={parent} 
          onCheckedChange={handleParentChange}
        />
        <Label htmlFor="parent" className="font-medium">
          Select all items
        </Label>
      </div>
      <div className="space-y-2 ml-6">
        {Object.entries(childChecked).map(([key, checked]) => (
          <div key={key} className="flex items-center space-x-2">
            <Checkbox 
              id={key} 
              checked={checked} 
              onCheckedChange={(state) => 
                handleChildChange(key as keyof typeof childChecked, state as boolean)
              }
            />
            <Label htmlFor={key}>Item {key.replace('child', '')}</Label>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Responsive Behavior

The Checkbox component maintains its functionality across all device sizes. You may want to adjust the tap/click target area on mobile devices:

```tsx
// Larger touch target on mobile
<div className="flex items-center space-x-2 sm:space-x-3">
  <Checkbox id="mobile-friendly" className="h-4 w-4 sm:h-5 sm:w-5" />
  <Label 
    htmlFor="mobile-friendly" 
    className="text-sm sm:text-base"
  >
    Mobile-friendly checkbox
  </Label>
</div>
```

## Accessibility

The Checkbox component follows these accessibility best practices:

- Uses Radix UI's Checkbox primitive which implements the [WAI-ARIA Checkbox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)
- Supports keyboard navigation: can be focused using Tab and toggled with Space
- Implements proper focused states with visible focus rings
- Uses appropriate ARIA attributes (aria-checked, aria-required, aria-disabled)
- When used with Label, associates the label with the checkbox using htmlFor/id
- Supports form states such as validation and disabled states
- Maintains appropriate color contrast between backgrounds and borders

## Implementation Details

The component:

- Is built on top of the Radix UI's Checkbox primitive for accessibility
- Uses Lucide React's Check icon for the checkmark
- Applies appropriate styling for all states: default, checked, disabled, and focus
- Includes hover effects and proper visual feedback
- Works with both controlled and uncontrolled patterns
- Implements proper indeterminate state support
- Uses the utility function `cn` from our project for composing class names

## Common Pitfalls

- **Missing htmlFor/id association**: Remember to associate labels with checkboxes using htmlFor/id pairs for accessibility
- **Forgetting indeterminate state handling**: When implementing "Select All" checkboxes, make sure to handle the indeterminate state
- **Missing onCheckedChange handler in controlled mode**: When using as a controlled component, always provide an onCheckedChange handler
- **Array management with multiple checkboxes**: When implementing multiple checkboxes with a shared value array, be careful with array mutations
- **Form integration complexity**: Use FormField and Controller from react-hook-form for cleaner integration
- **Next.js client components**: The Checkbox component uses client-side state, so make sure to use "use client" directive in components that use it

## Testing

```tsx
// Example test for the Checkbox component
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

describe('Checkbox', () => {
  it('renders correctly with default props', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  
  it('handles check state properly', () => {
    const handleCheckedChange = jest.fn();
    render(
      <Checkbox
        onCheckedChange={handleCheckedChange}
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    
    fireEvent.click(checkbox);
    expect(handleCheckedChange).toHaveBeenCalledWith(true);
  });
  
  it('renders with label correctly', () => {
    render(
      <div className="flex items-center space-x-2">
        <Checkbox id="test-checkbox" />
        <Label htmlFor="test-checkbox">Test Label</Label>
      </div>
    );
    
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });
  
  it('is properly disabled', () => {
    const handleCheckedChange = jest.fn();
    render(<Checkbox disabled onCheckedChange={handleCheckedChange} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    
    fireEvent.click(checkbox);
    expect(handleCheckedChange).not.toHaveBeenCalled();
  });
});
```

## Related Components

- [Form](./form.md): For building forms with validation using react-hook-form
- [Label](./label.md): Used to label the Checkbox for accessibility
- [RadioGroup](./radio-group.md): When users need to select a single option from a list
- [Switch](./switch.md): Alternative to Checkbox for toggle/switch style interactions