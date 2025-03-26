---
sidebar_label: Switch
---

# Switch Component

A Switch is an interactive control that allows users to toggle between an enabled and disabled state, providing a visual representation of a binary setting.

## Import

```tsx
import { Switch } from '@/components/ui/switch';
```

## Usage

### Basic Usage

```tsx
<Switch />
```

### Controlled Component

```tsx
import { useState } from 'react';
import { Switch } from '@/components/ui/switch';

export function ControlledSwitch() {
  const [checked, setChecked] = useState(false);
  
  return (
    <Switch 
      checked={checked} 
      onCheckedChange={setChecked} 
    />
  );
}
```

### With Label

```tsx
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export function SwitchWithLabel() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
```

### Disabled State

```tsx
<Switch disabled />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `undefined` | The controlled checked state of the switch |
| `defaultChecked` | `boolean` | `undefined` | The default checked state when uncontrolled |
| `onCheckedChange` | `(checked: boolean) => void` | `undefined` | Event handler called when the checked state changes |
| `disabled` | `boolean` | `false` | When `true`, prevents the user from interacting with the switch |
| `required` | `boolean` | `false` | When `true`, indicates that the user must check the switch before the form can be submitted |
| `name` | `string` | `undefined` | The name of the switch when used in a form |
| `value` | `string` | `undefined` | The value of the switch when used in a form |
| `id` | `string` | `undefined` | The ID for the switch, used for accessibility and connecting to a label |
| `className` | `string` | `undefined` | Additional CSS classes to add to the switch |

## TypeScript

```tsx
import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

// Component Type Definition
type SwitchProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>;
```

## Customization

### Style Overrides

The Switch component can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes

```tsx
<Switch className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300" />
```

2. Customizing size through TailwindCSS

```tsx
<Switch className="h-4 w-8" />
```

### Extending the Component

You can extend the Switch component to add custom functionality or styling:

```tsx
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

type ColorSwitchProps = React.ComponentProps<typeof Switch> & {
  colorScheme?: 'red' | 'green' | 'blue';
};

export function ColorSwitch({ colorScheme = 'blue', className, ...props }: ColorSwitchProps) {
  const colorClasses = {
    red: 'data-[state=checked]:bg-red-500',
    green: 'data-[state=checked]:bg-green-500',
    blue: 'data-[state=checked]:bg-blue-500',
  };

  return (
    <Switch 
      className={cn(colorClasses[colorScheme], className)} 
      {...props} 
    />
  );
}
```

## Examples

### Integration with React Hook Form

```tsx
import { useForm, Controller } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define form schema
const FormSchema = z.object({
  notifications: z.boolean().default(false),
});

export function SwitchForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      notifications: false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="notifications"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Notifications</FormLabel>
                <FormDescription>
                  Receive notifications about new updates.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Save preferences</Button>
      </form>
    </Form>
  );
}
```

### Integration with Other Components

```tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export function SettingsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>Manage your account preferences.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="marketing-emails">Marketing emails</Label>
          <Switch id="marketing-emails" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="security-alerts">Security alerts</Label>
          <Switch id="security-alerts" defaultChecked />
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          You can change these settings at any time.
        </p>
      </CardFooter>
    </Card>
  );
}
```

### Responsive Behavior

The Switch component has minimal built-in responsive behavior, as its size remains constant across device sizes. If you want different sizes based on screen size, use Tailwind's responsive modifiers:

```tsx
<Switch className="h-4 w-8 md:h-5 md:w-10 lg:h-6 lg:w-11" />
```

## Accessibility

The Switch component follows these accessibility best practices:

- Built on Radix UI's Switch primitive which provides robust accessibility features
- Uses the appropriate ARIA role (`switch`) for semantic HTML
- Supports keyboard navigation (can be toggled with Space or Enter)
- Provides visual feedback for different states (checked/unchecked, focused, disabled)
- Supports connecting to a `<Label>` component through the `id` prop for proper labeling
- Can be screen reader friendly when used with proper labels
- When focused, shows a visible focus ring through the `focus-visible:ring` utility classes

## Implementation Details

The Switch component:

- Is built on top of [Radix UI's Switch Primitive](https://www.radix-ui.com/primitives/docs/components/switch)
- Uses React's `forwardRef` to allow ref forwarding, making it compatible with form libraries like React Hook Form
- Implements accessible keyboard navigation and focus management
- Uses Tailwind CSS for styling with a consistent design language
- Supports both controlled and uncontrolled usage patterns
- Uses CSS transitions for smooth state changes
- Provides visual feedback for different states through data attributes

## Common Pitfalls

- **Missing Label**: Always provide a label for the Switch for accessibility. Use the `<Label>` component and connect it with the `id` prop.
  
  ```tsx
  <div className="flex items-center space-x-2">
    <Switch id="mode" />
    <Label htmlFor="mode">Dark Mode</Label>
  </div>
  ```

- **Controlled vs Uncontrolled**: Decide whether to use the Switch as a controlled or uncontrolled component and be consistent. Don't mix `checked` with `defaultChecked`.

- **Form Integration**: When using in forms, remember to use the appropriate form state management. With React Hook Form, use the `Controller` component or the `FormField` abstraction from the project's form components.

- **Server Components**: The Switch component uses client-side functionality and can't be used directly in React Server Components. Always use it in client components (with 'use client' directive).

## Testing

```tsx
// Example test for the Switch component
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from '@/components/ui/switch';

describe('Switch', () => {
  it('renders correctly', () => {
    render(<Switch />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });
  
  it('toggles when clicked', async () => {
    const onCheckedChange = jest.fn();
    render(<Switch onCheckedChange={onCheckedChange} />);
    
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('aria-checked', 'false');
    
    await userEvent.click(switchElement);
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });
  
  it('can be controlled', () => {
    const { rerender } = render(<Switch checked={false} />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
    
    rerender(<Switch checked={true} />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });
  
  it('respects disabled state', async () => {
    const onCheckedChange = jest.fn();
    render(<Switch disabled onCheckedChange={onCheckedChange} />);
    
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeDisabled();
    
    await userEvent.click(switchElement);
    expect(onCheckedChange).not.toHaveBeenCalled();
  });
});
```

## Related Components

- [Checkbox](./checkbox.md): Another form control for boolean values, but using a checkbox visual metaphor
- [ToggleGroup](./toggle-group.md): A set of two-state buttons that can be toggled on or off
- [ThemeSwitch](./theme-switch.md): A specialized component that uses the Button component to toggle between light and dark themes
- [Form](./form.md): Used to create accessible forms that can include Switch components