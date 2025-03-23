# Layout System

The Layout system in our Next.js TypeScript Tailwind Supabase starter provides a flexible structure for creating consistent page layouts throughout the application. It consists of a RootLayout component combined with Header and Footer components, plus utility layout components (Flex and Grid) for precise content arrangement.

## Import

For the main application layout (automatically applied to all pages):
```tsx
// This is handled by Next.js App Router
// No import needed as it's applied automatically
```

For layout utility components:
```tsx
import { Flex, Grid } from '@/components/ui/layout';
```

For direct access to layout parts (rarely needed):
```tsx
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
```

## Usage

### Basic Page Content

Content placed in any page component is automatically wrapped in the RootLayout:

```tsx
// app/example-page/page.tsx
export default function ExamplePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-4">Page Title</h1>
      <p>Your page content goes here...</p>
    </div>
  );
}
```

### Using Flex for Row Layout

```tsx
import { Flex } from '@/components/ui/layout';

export default function FlexExample() {
  return (
    <Flex gap="md" align="center" justify="between">
      <div className="bg-blue-100 p-4">Item 1</div>
      <div className="bg-blue-100 p-4">Item 2</div>
      <div className="bg-blue-100 p-4">Item 3</div>
    </Flex>
  );
}
```

### Using Flex for Column Layout

```tsx
import { Flex } from '@/components/ui/layout';

export default function ColumnExample() {
  return (
    <Flex direction="column" gap="lg">
      <div className="bg-blue-100 p-4">Section 1</div>
      <div className="bg-blue-100 p-4">Section 2</div>
      <div className="bg-blue-100 p-4">Section 3</div>
    </Flex>
  );
}
```

### Using Grid for Multi-Column Layout

```tsx
import { Grid } from '@/components/ui/layout';

export default function GridExample() {
  return (
    <Grid cols={3} gap="md">
      <div className="bg-blue-100 p-4">Card 1</div>
      <div className="bg-blue-100 p-4">Card 2</div>
      <div className="bg-blue-100 p-4">Card 3</div>
      <div className="bg-blue-100 p-4">Card 4</div>
      <div className="bg-blue-100 p-4">Card 5</div>
      <div className="bg-blue-100 p-4">Card 6</div>
    </Grid>
  );
}
```

## Props

### Flex Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `'row' \| 'column' \| 'row-reverse' \| 'column-reverse'` | `'row'` | Sets the direction of the flex container |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch' \| 'baseline'` | `'start'` | Controls alignment of items on the cross axis |
| `justify` | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'` | `'start'` | Controls alignment of items on the main axis |
| `wrap` | `'nowrap' \| 'wrap' \| 'wrap-reverse'` | `'nowrap'` | Controls whether items wrap to new lines |
| `gap` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'none'` | Sets spacing between flex items |
| `className` | `string` | `undefined` | Additional CSS classes to apply |
| `data-testid` | `string` | `undefined` | Test ID for automated testing |
| `children` | `ReactNode` | Required | Content to be displayed within the flex container |

### Grid Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cols` | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 12` | `1` | Number of columns in the grid |
| `gap` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Sets spacing between grid items |
| `className` | `string` | `undefined` | Additional CSS classes to apply |
| `data-testid` | `string` | `undefined` | Test ID for automated testing |
| `children` | `ReactNode` | Required | Content to be displayed within the grid |

## TypeScript

```tsx
// Flex Component Type Definition
type FlexProps = {
  children: ReactNode;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  'data-testid'?: string;
};

// Grid Component Type Definition
type GridProps = {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  'data-testid'?: string;
};
```

## Customization

### Style Overrides

The layout components can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes
2. Creating wrapper components with preset configurations
3. For the RootLayout, modifying the `app/layout.tsx` file directly

### Extending the Flex Component

```tsx
import { Flex } from '@/components/ui/layout';

export function CardContainer({ children, className, ...props }) {
  return (
    <Flex 
      direction="column" 
      gap="md" 
      className={`rounded-lg border border-border p-4 ${className || ''}`}
      {...props}
    >
      {children}
    </Flex>
  );
}
```

### Extending the Grid Component

```tsx
import { Grid } from '@/components/ui/layout';

export function ResponsiveCardGrid({ children, className, ...props }) {
  return (
    <Grid 
      cols={1} 
      gap="md" 
      className={`sm:grid-cols-2 lg:grid-cols-3 ${className || ''}`}
      {...props}
    >
      {children}
    </Grid>
  );
}
```

## Examples

### Integration with Forms

```tsx
import { Flex } from '@/components/ui/layout';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ContactForm() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="md">
        <Input {...register('name')} placeholder="Your name" />
        <Input {...register('email')} type="email" placeholder="Your email" />
        <textarea 
          {...register('message')} 
          className="p-2 border rounded" 
          placeholder="Your message"
          rows={4}
        />
        <Button type="submit">Send Message</Button>
      </Flex>
    </form>
  );
}
```

### Integration with Other Components

```tsx
import { Flex, Grid } from '@/components/ui/layout';
import { Card } from '@/components/ui/card';

export default function DashboardPage() {
  return (
    <Flex direction="column" gap="xl">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      <Grid cols={3} gap="lg" className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card title="Analytics" content="Your analytics data..." />
        <Card title="Recent Orders" content="Order information..." />
        <Card title="User Statistics" content="User data..." />
        <Card title="Revenue" content="Revenue information..." />
      </Grid>
      
      <Flex gap="md" className="border-t pt-4 mt-6">
        <Button variant="outline">Export Data</Button>
        <Button>Refresh</Button>
      </Flex>
    </Flex>
  );
}
```

### Responsive Behavior

The layout components respond to different screen sizes in the following ways:

- **Flex**: By default, Flex maintains its configured behavior across all screen sizes. For responsive behavior, use the `className` prop with Tailwind responsive classes.
  
  ```tsx
  <Flex 
    direction="column" 
    className="md:flex-row lg:justify-between"
    gap="md"
  >
    {/* Content */}
  </Flex>
  ```

- **Grid**: The `cols` prop sets a fixed number of columns. For responsive grids, use the `className` prop with Tailwind's responsive grid classes.

  ```tsx
  <Grid 
    cols={1}
    gap="md" 
    className="sm:grid-cols-2 lg:grid-cols-4"
  >
    {/* Content */}
  </Grid>
  ```

- **RootLayout**: Provides a responsive container that adjusts to screen size, with the Header and Footer adapting accordingly.

## Accessibility

The layout components follow these accessibility best practices:

- Semantic HTML elements used throughout the layout structure
- Responsive design ensures content is accessible on various screen sizes
- Header includes proper navigation landmarks for screen readers
- Keyboard navigation is supported in the Header dropdown menu
- Focus management for dropdown menu interaction
- Color contrast meets WCAG AA standards

## Implementation Details

The layout system:

- Uses Next.js 14's App Router for overall page structure
- Employs the `cn()` utility for conditional class merging
- Converts semantic props (like `gap="md"`) to Tailwind classes
- Spread props to allow HTML attributes to pass through
- Supports data-testid for testing components
- Uses client-side components for interactive elements (Header) and server components for static parts
- Implements theme switching via ThemeProvider context

## Common Pitfalls

- **Incorrect gap values**: The `gap` prop only accepts predefined values ('none', 'xs', 'sm', 'md', 'lg', 'xl'). For custom gaps, use the `className` prop with Tailwind gap utilities.
  
  ```tsx
  // ❌ This won't work
  <Flex gap="2xl">...</Flex>
  
  // ✅ Do this instead
  <Flex className="gap-10">...</Flex>
  ```

- **Limited grid columns**: The `cols` prop is limited to specific values (1-6, 12). For other values, use direct Tailwind classes.
  
  ```tsx
  // ❌ This won't work
  <Grid cols={7}>...</Grid>
  
  // ✅ Do this instead
  <Grid className="grid-cols-7">...</Grid>
  ```

- **Missing RootLayout CSS**: The RootLayout depends on global styles from `@/styles/globals.css`. Make sure this import is present in `app/layout.tsx`.

- **Theme compatibility**: When using dark mode, ensure components inside Flex/Grid containers use theme-compatible color classes (bg-background, text-foreground, etc.) rather than fixed colors.

## Testing

```tsx
// Example test for the Flex component
import { render, screen } from '@testing-library/react';
import { Flex } from '@/components/ui/layout';

describe('Flex', () => {
  it('renders children correctly', () => {
    render(
      <Flex data-testid="flex-container">
        <div>Item 1</div>
        <div>Item 2</div>
      </Flex>
    );
    
    const container = screen.getByTestId('flex-container');
    expect(container).toHaveClass('flex');
    expect(container).toHaveClass('flex-row');
    expect(container.children.length).toBe(2);
  });
  
  it('applies custom gap class correctly', () => {
    render(
      <Flex gap="lg" data-testid="flex-container">
        <div>Content</div>
      </Flex>
    );
    
    const container = screen.getByTestId('flex-container');
    expect(container).toHaveClass('gap-6');
  });
  
  it('applies custom className prop', () => {
    render(
      <Flex className="custom-class" data-testid="flex-container">
        <div>Content</div>
      </Flex>
    );
    
    const container = screen.getByTestId('flex-container');
    expect(container).toHaveClass('custom-class');
  });
});
```

## Related Components

- [Header](./header.md): The top navigation bar used in the RootLayout
- [Footer](./footer.md): The footer component used in the RootLayout
- [Card](./card.md): Often used within Flex or Grid to display content blocks
- [Container](./container.md): Can be used with Flex or Grid for additional padding/margin constraints