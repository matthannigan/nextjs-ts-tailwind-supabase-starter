---
sidebar_label: Select
---

# Select Component

A dropdown menu component that allows users to select from a list of options. The Select component provides a clean interface for user selection with accessible navigation and visual feedback.

## Import

```tsx
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton
} from '@/components/ui/select';
```

## Usage

### Basic Usage

```tsx
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

### With Groups and Labels

```tsx
<Select>
  <SelectTrigger className="w-[220px]">
    <SelectValue placeholder="Select a category" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Vegetables</SelectLabel>
      <SelectItem value="carrot">Carrot</SelectItem>
      <SelectItem value="broccoli">Broccoli</SelectItem>
      <SelectItem value="spinach">Spinach</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

### Disabled State

```tsx
<Select disabled>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Disabled" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

### With Disabled Items

```tsx
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2" disabled>Option 2 (Disabled)</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

## Props

### Select Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultValue` | `string` | — | The default selected value. Use for uncontrolled components. |
| `value` | `string` | — | The controlled selected value. |
| `onValueChange` | `(value: string) => void` | — | Event handler called when the selected value changes. |
| `disabled` | `boolean` | `false` | When true, prevents user interaction with the select. |
| `name` | `string` | — | The name of the select when used in a form. |
| `required` | `boolean` | `false` | Whether the select is required in a form. |
| `open` | `boolean` | — | Controls the open state of the select dropdown. |
| `onOpenChange` | `(open: boolean) => void` | — | Event handler called when the open state changes. |

### SelectTrigger Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Additional CSS classes to apply to the trigger element. |
| `children` | `ReactNode` | Required | Content for the trigger (usually contains SelectValue). |
| `asChild` | `boolean` | `false` | When true, will treat child as the trigger element. |

### SelectContent Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Additional CSS classes to apply to the content element. |
| `children` | `ReactNode` | Required | Content for the dropdown menu. |
| `position` | `'item' \| 'popper'` | `'popper'` | The positioning mode for the dropdown menu. |
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | The preferred side for the dropdown menu. |
| `sideOffset` | `number` | `0` | Distance from the trigger to the dropdown menu. |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Alignment of the dropdown menu relative to the trigger. |
| `alignOffset` | `number` | `0` | Offset from the alignment point. |

### SelectItem Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | Required | The value of this item that will be selected. |
| `className` | `string` | — | Additional CSS classes to apply to the item. |
| `children` | `ReactNode` | Required | Content for the item. |
| `disabled` | `boolean` | `false` | When true, prevents this item from being selected. |
| `textValue` | `string` | — | Text used for typeahead purposes. |

### SelectLabel Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Additional CSS classes to apply to the label. |
| `children` | `ReactNode` | Required | Content for the label. |

### Other Components

Similar props apply to `SelectGroup`, `SelectValue`, `SelectSeparator`, `SelectScrollUpButton` and `SelectScrollDownButton`.

## TypeScript

The component is fully typed based on Radix UI's Select primitive.

```tsx
// Component Type Examples
import { type SelectProps } from '@radix-ui/react-select';

// For the root Select component
type CustomSelectProps = SelectProps & {
  // Additional props
};

// For other subcomponents
type SelectTriggerProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
  // Additional props
};
```

## Customization

### Style Overrides

The component can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes to any part
2. Customizing the theme variables in your global CSS that affect the component:
   - `--select-trigger-height`
   - `--select-content-available-height` 

### Extending the Component

```tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function CustomSelect({ options, ...props }) {
  return (
    <Select {...props}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
```

## Examples

### Integration with React Hook Form

```tsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  role: z.string({
    required_error: "Please select a role.",
  }),
});

export function RoleForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="guest">Guest</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Select the user's role for permissions.
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export function SelectCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="theme">Theme</label>
            <Select>
              <SelectTrigger id="theme">
                <SelectValue placeholder="Select a theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  );
}
```

### Responsive Behavior

The component responds to different screen sizes primarily through width customization:

- **Mobile**: Use `w-full` on the `SelectTrigger` for full width buttons
- **Tablet & Desktop**: Customize width as needed with `w-[180px]`, `w-1/2`, etc.
- **All Screen Sizes**: The dropdown content automatically positions itself optimally based on available space

```tsx
// Example of responsive width
<SelectTrigger className="w-full md:w-[250px] lg:w-[300px]">
  <SelectValue placeholder="Select an option" />
</SelectTrigger>
```

## Accessibility

The component follows these accessibility best practices:

- Keyboard navigation: Tab to focus, Space/Enter to open, arrows to navigate, Enter to select
- Screen reader announcements for open/close and selected items
- ARIA attributes for `aria-expanded`, `aria-controls`, and `aria-selected`
- Focus management when navigating through items and opening/closing the menu
- Typeahead functionality for quick selection by typing
- Support for form validation and error messaging

## Implementation Details

The component:

- Is built on top of the Radix UI `Select` primitive for robust accessibility
- Uses Tailwind CSS for styling with dark mode support
- Contains animated transitions for open/close states
- Handles overflow with scroll buttons when content exceeds available space
- Includes visual indicators for selected items and focused states
- Supports controlled and uncontrolled usage patterns

## Common Pitfalls

- **Form Integration Issues**: When using with React Hook Form, ensure you use the `onValueChange` prop for updating the form value and place the `<Select>` component within a `<FormControl>` component.
  
- **Default Value Not Showing**: For controlled components, make sure to pass both `value` and `onValueChange` props. For uncontrolled, use `defaultValue`.
  
- **Focus Management**: In complex forms, you may need to manage focus explicitly if users need to navigate through multiple selects in sequence.

- **Style Conflicts**: If you have global styles affecting form elements, they might interfere with the Select component. Use more specific selectors in your custom CSS if needed.

- **Z-index Issues**: If the dropdown appears behind other elements, you may need to adjust the z-index of parent containers that use `position: relative`.

## Testing

```tsx
// Example test for the component
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

describe('Select', () => {
  it('renders the trigger correctly', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    );
    
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });
  
  it('opens the dropdown and selects an option', async () => {
    const onValueChangeMock = jest.fn();
    const user = userEvent.setup();
    
    render(
      <Select onValueChange={onValueChangeMock}>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    );
    
    // Click the trigger to open the dropdown
    await user.click(screen.getByText('Select an option'));
    
    // Find and click an option
    const option1 = screen.getByText('Option 1');
    await user.click(option1);
    
    // Check if the callback was called with the correct value
    expect(onValueChangeMock).toHaveBeenCalledWith('option1');
  });
});
```

## Related Components

- [Dropdown Menu](../ui/dropdown-menu.md): Similar to Select but for actions rather than selections
- **Combobox**: Combines a text input with a dropdown for searching and selecting from a list
- [Input](./input.md): Used in forms alongside the Select component
- [Form](./form.md): Container component for building forms that include Select fields