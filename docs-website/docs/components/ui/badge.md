---
sidebar_label: Badge Component
---

# Badge Component

The Badge component displays a small visual indicator that helps highlight status, categories, or counts with different styling variants that can be applied to text or used as labels.

## Import

```tsx
import { Badge } from '@/components/ui/badge';
```

## Usage

### Basic Usage

```tsx
<Badge>New</Badge>
```

### Variants

#### Default

```tsx
<Badge variant="default">Default</Badge>
```

#### Secondary

```tsx
<Badge variant="secondary">Secondary</Badge>
```

#### Destructive

```tsx
<Badge variant="destructive">Destructive</Badge>
```

#### Outline

```tsx
<Badge variant="outline">Outline</Badge>
```

### Using badgeVariants for Links or Custom Elements

You can use the `badgeVariants` helper to apply badge styling to other elements:

```tsx
import { badgeVariants } from '@/components/ui/badge';
import Link from 'next/link';

<Link href="/categories/new" className={badgeVariants({ variant: 'outline' })}>
  View Category
</Link>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'secondary' \| 'destructive' \| 'outline'` | `'default'` | The visual style variant of the badge |
| `className` | `string` | `undefined` | Additional CSS classes to apply to the badge |
| `children` | `ReactNode` | Required | The content to display inside the badge |

## TypeScript

```tsx
// Component Type Definition
type BadgeProps = {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>; 
```

## Customization

### Style Overrides

The Badge component can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes:

```tsx
<Badge className="px-4 py-1 text-sm">Custom Sized</Badge>
```

2. Extending with custom colors:

```tsx
<Badge className="bg-blue-500 hover:bg-blue-600 text-white">Custom Color</Badge>
```

### Extending the Component

For project-specific badge variants, you can extend the base Badge component:

```tsx
import { Badge, badgeVariants } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const SuccessBadge = ({ children, className, ...props }) => {
  return (
    <Badge 
      {...props} 
      className={cn(
        'bg-green-500 text-white hover:bg-green-600',
        className
      )}
    >
      {children}
    </Badge>
  );
};
```

## Examples

### Integration with Cards

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

<Card>
  <CardHeader>
    <div className="flex items-center justify-between">
      <CardTitle>Project Status</CardTitle>
      <Badge variant="secondary">In Progress</Badge>
    </div>
  </CardHeader>
  <CardContent>
    Project details here...
  </CardContent>
</Card>
```

### Integration with Forms

```tsx
import { useForm } from 'react-hook-form';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/forms/form';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const TaggedFormField = () => {
  const form = useForm();
  
  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-2">
                <FormLabel>Email</FormLabel>
                <Badge variant="outline">Required</Badge>
              </div>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
```

### Integration with Buttons

```tsx
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

<div className="flex items-center gap-2">
  <Button variant="outline">
    Notifications
    <Badge className="ml-2" variant="secondary">5</Badge>
  </Button>
</div>
```

### Responsive Behavior

The Badge component is inherently responsive with its default styling. Here's how it behaves across different screen sizes:

- **Mobile**: Badges maintain their compact size for mobile interfaces
- **Tablet/Desktop**: Badges scale naturally with their container elements without requiring specific responsive adjustments

For custom responsive behaviors:

```tsx
<Badge className="px-2 md:px-3 py-0.5 md:py-1 text-xs md:text-sm">
  Responsive Badge
</Badge>
```

## Accessibility

The Badge component follows these accessibility best practices:

- Uses appropriate color contrast ratios for all variants to ensure readability
- Maintains readable text sizes in the default styling
- When used for status indicators, should be paired with appropriate ARIA attributes for screen readers
- For interactive badges, ensure they receive focus styles and keyboard interaction support

Example with enhanced accessibility:

```tsx
<Badge 
  role="status" 
  aria-label="3 unread notifications"
>
  3
</Badge>
```

## Implementation Details

The Badge component:

- Renders as a `<div>` element by default
- Uses the class-variance-authority (CVA) utility for variant management
- Applies TailwindCSS utility classes for styling
- Supports standard HTML div attributes through React HTMLAttributes spreading
- Uses a rounded-full design by default for the classic badge appearance

## Common Pitfalls

- **Crowding with content**: Avoid placing badges too close to other UI elements without adequate spacing
- **Overusing variants**: Use variants consistently to maintain their meaning throughout the application
- **Inaccessible color combinations**: Be cautious when overriding colors to maintain sufficient contrast

## Testing

```tsx
// Example test for the Badge component
import { render, screen } from '@testing-library/react';
import { Badge } from '@/components/ui/badge';

describe('Badge', () => {
  it('renders with default variant correctly', () => {
    render(<Badge>Test Badge</Badge>);
    const badge = screen.getByText('Test Badge');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('bg-primary'); // Check for default variant class
  });
  
  it('applies custom className', () => {
    render(<Badge className="test-class">Test Badge</Badge>);
    const badge = screen.getByText('Test Badge');
    expect(badge).toHaveClass('test-class');
  });
  
  it('renders with different variants', () => {
    const { rerender } = render(<Badge variant="secondary">Secondary</Badge>);
    expect(screen.getByText('Secondary')).toHaveClass('bg-secondary');
    
    rerender(<Badge variant="destructive">Destructive</Badge>);
    expect(screen.getByText('Destructive')).toHaveClass('bg-destructive');
    
    rerender(<Badge variant="outline">Outline</Badge>);
    expect(screen.getByText('Outline')).toHaveClass('text-foreground');
  });
});
```

## Related Components

- [Button](./button.md): Often used together with badges to show counts or status
- [Card](./card.md): Badges can be used in card headers to indicate status or categories
- [Alert](./alert.md): Similar to badges but for more prominent notifications or messages