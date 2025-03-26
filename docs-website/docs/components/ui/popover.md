---
sidebar_label: Popover
---

# Popover Component

The Popover component displays rich content in a portal when triggered by a button. It remains open until the user clicks either the trigger button again or anywhere else on the document.

## Import

```tsx
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
```

## Usage

### Basic Usage

```tsx
<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>
    Place content for the popover here.
  </PopoverContent>
</Popover>
```

### With Custom Trigger

```tsx
import { Button } from '@/components/ui/button';

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Settings</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Settings</h4>
        <p className="text-sm text-muted-foreground">
          Configure your preferences here.
        </p>
      </div>
    </div>
  </PopoverContent>
</Popover>
```

### With Form Elements

```tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Dimensions</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="width">Width</Label>
          <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="maxWidth">Max. width</Label>
          <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="height">Height</Label>
          <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="maxHeight">Max. height</Label>
          <Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>
```

### With Controlled State

```tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const MyComponent = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">
          {open ? 'Close' : 'Open'} Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Settings</h4>
            <p className="text-sm text-muted-foreground">
              This is a controlled popover, managed by state.
            </p>
          </div>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
```

## Props

### Popover Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `undefined` | Controls the open state of the popover when using controlled mode |
| `defaultOpen` | `boolean` | `false` | The initial open state when uncontrolled |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Event handler called when the open state changes |
| `modal` | `boolean` | `false` | When true, interaction with outside elements will be disabled and only popover content will be visible to screen readers |

### PopoverTrigger Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asChild` | `boolean` | `false` | When true, the trigger will use the child element as its trigger instead of wrapping it |
| All HTML button attributes | `ButtonHTMLAttributes<HTMLButtonElement>` | - | Supports all HTML button attributes |

### PopoverContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Alignment of the popover relative to the trigger |
| `sideOffset` | `number` | `4` | Distance in pixels from the trigger |
| `alignOffset` | `number` | `0` | Additional offset along the alignment axis |
| `avoidCollisions` | `boolean` | `true` | Whether to move content to avoid collisions with the viewport edges |
| `collisionBoundary` | `Element \| null \| Array<Element \| null>` | `[]` | Element(s) to avoid collisions with |
| `collisionPadding` | `number \| Partial<Record<Side, number>>` | `0` | Space between content and the boundary |
| `arrowPadding` | `number` | `0` | Padding between the arrow and the edges of the content |
| `sticky` | `'partial' \| 'always'` | `'partial'` | Behavior when content hits the boundary edges |
| `hideWhenDetached` | `boolean` | `false` | Whether to hide content when it's trigger is fully obscured |
| `className` | `string` | `undefined` | Additional CSS classes to apply to the content |
| All HTML div attributes | `HTMLAttributes<HTMLDivElement>` | - | Supports all HTML div attributes |

## TypeScript

```tsx
// Popover Component Types
import * as PopoverPrimitive from '@radix-ui/react-popover';
import React from 'react';

// Main Popover
type PopoverProps = React.ComponentProps<typeof PopoverPrimitive.Root>;

// PopoverTrigger
type PopoverTriggerProps = React.ComponentProps<typeof PopoverPrimitive.Trigger>;

// PopoverContent
type PopoverContentProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
  className?: string;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
};
```

## Customization

### Style Overrides

The Popover component can be customized in the following ways:

1. Using the `className` prop on the PopoverContent component to add additional Tailwind classes
2. Modifying the component's base styles in your project's CSS
3. Customizing the Popover through the Tailwind theme in your `tailwind.config.js` file

```tsx
<PopoverContent className="w-96 bg-blue-50 p-6 border-blue-200">
  Custom styled content here
</PopoverContent>
```

### Extending the Component

```tsx
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

export function ColorPickerPopover({ onColorSelect, ...props }) {
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'];
  
  return (
    <Popover {...props}>
      <PopoverTrigger asChild>
        <Button variant="outline">Select Color</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-2">
        <div className="grid grid-cols-5 gap-2">
          {colors.map((color) => (
            <button
              key={color}
              className="h-8 w-8 rounded-md border"
              style={{ backgroundColor: color }}
              onClick={() => onColorSelect(color)}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
```

## Examples

### Integration with React Hook Form

```tsx
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

function FilterForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      price: '',
    }
  });
  
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Filters</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Filters</h4>
            </div>
            <div className="grid gap-2">
              <div className="grid gap-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...register('name')} />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="price">Price</Label>
                <Input id="price" type="number" {...register('price')} />
              </div>
            </div>
            <Button type="submit">Apply Filters</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
```

### Integration with Other Components

```tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';

function DashboardCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Monthly Revenue</CardTitle>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">About this chart</h4>
              <p className="text-sm text-muted-foreground">
                This chart shows the monthly revenue for the current year. 
                The data is updated at the beginning of each month.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </CardHeader>
      <CardContent>
        {/* Chart content */}
      </CardContent>
    </Card>
  );
}
```

### Responsive Behavior

The Popover component responds to different screen sizes in the following ways:

- **Mobile**: On mobile devices, the popover content has a smaller width by default, with the content adjusting to fit available space.
- **Tablet**: Width expands to accommodate the content better, but still maintains constraints.
- **Desktop**: Full width as defined (default: 18rem/w-72), with positioning relative to the trigger.

Responsive customization example:

```tsx
<PopoverContent className="w-[280px] md:w-[350px] lg:w-[450px]">
  {/* Content that adapts to screen size */}
</PopoverContent>
```

## Accessibility

The Popover component follows these accessibility best practices:

- Uses the WAI-ARIA design pattern for popovers and tooltips
- Manages focus correctly, trapping it inside the popover when open
- Supports keyboard navigation with Tab key for internal elements
- Uses proper ARIA attributes for describing relationships and states
- Close the popover when the Escape key is pressed
- Properly announces state changes to screen readers

## Implementation Details

The component:

- Is built on top of Radix UI's Popover primitive component
- Uses React's forwardRef to properly forward refs to the underlying DOM elements
- Implements a Portal to render the popover content outside the DOM hierarchy for proper z-index stacking
- Uses animations for smooth opening and closing transitions
- Adopts Tailwind's animation classes for consistent animation behaviors
- Uses CSS custom properties for positioning through Radix's transform origin

## Common Pitfalls

- **State Management Issues**: When using controlled mode with `open` and `onOpenChange`, ensure you correctly update the state or the popover may behave unexpectedly.
- **Z-index Conflicts**: The popover has a z-index of 50 by default, which may need adjustment if used inside other components with higher z-index values.
- **Overflowing Content**: The popover has a fixed width by default (18rem/w-72). For wider content, specify a custom width className.
- **Modal Behavior**: When using `modal={true}`, be aware that it prevents interaction with the rest of the application, which might not be desired in all cases.
- **Positioning in Scrolling Containers**: If the trigger is inside a scrolling container, the popover may not position correctly. Use portals appropriately.

## Testing

```tsx
// Example test for the Popover component
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';

describe('Popover', () => {
  it('renders the trigger and shows content when clicked', async () => {
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>
    );
    
    expect(screen.getByText('Open Popover')).toBeInTheDocument();
    
    // Content should not be visible initially
    expect(screen.queryByText('Popover Content')).not.toBeInTheDocument();
    
    // Click the trigger
    await userEvent.click(screen.getByText('Open Popover'));
    
    // Content should now be visible
    expect(screen.getByText('Popover Content')).toBeInTheDocument();
    
    // Click outside should close the popover
    await userEvent.click(document.body);
    
    // Content should not be visible again
    expect(screen.queryByText('Popover Content')).not.toBeInTheDocument();
  });

  it('supports controlled mode', async () => {
    const TestComponent = () => {
      const [open, setOpen] = React.useState(false);
      return (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger>Toggle</PopoverTrigger>
          <PopoverContent>Controlled Content</PopoverContent>
        </Popover>
      );
    };
    
    render(<TestComponent />);
    
    // Content should not be visible initially
    expect(screen.queryByText('Controlled Content')).not.toBeInTheDocument();
    
    // Click the trigger
    await userEvent.click(screen.getByText('Toggle'));
    
    // Content should now be visible
    expect(screen.getByText('Controlled Content')).toBeInTheDocument();
  });
});
```

## Related Components

- [Dialog](./dialog.md): Similar to Popover but designed for more complex modal interactions that require user attention.
- [Tooltip](./tooltip.md): Used for simple text hints, with hover/focus activation rather than click.
- [DropdownMenu](./dropdown-menu.md): Used for creating dropdown menus with multiple options.
- [HoverCard](./hover-card.md): Similar to Popover but activated on hover instead of click.