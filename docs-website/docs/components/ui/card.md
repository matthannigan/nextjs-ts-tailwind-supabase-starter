---
sidebar_label: Card
---

# Card Component

A versatile container component that provides a structured layout for displaying related content, with dedicated sections for header, content, and footer.

## Import

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card';
```

## Usage

### Basic Usage

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
```

### Simple Content Card

```tsx
<Card>
  <CardContent className="pt-6">
    <p>A simple card with just content and no header or footer.</p>
  </CardContent>
</Card>
```

### Card with Custom Styling

```tsx
<Card className="border-primary/50 bg-primary/5">
  <CardHeader className="pb-3">
    <CardTitle className="text-primary">Highlighted Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>This card has custom styling to make it stand out.</p>
  </CardContent>
</Card>
```

### Interactive Card

```tsx
<Card className="transition-all hover:shadow-md hover:border-primary cursor-pointer">
  <CardHeader>
    <CardTitle>Interactive Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>This card has hover effects to indicate interactivity.</p>
  </CardContent>
  <CardFooter className="text-sm text-muted-foreground">
    Click to learn more
  </CardFooter>
</Card>
```

## Props

### Card Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes to apply to the card |
| `children` | `ReactNode` | Required | Content to display inside the card |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | - | All other props are passed to the underlying div element |

### CardHeader Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes to apply to the card header |
| `children` | `ReactNode` | Required | Content to display inside the card header |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | - | All other props are passed to the underlying div element |

### CardTitle Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes to apply to the card title |
| `children` | `ReactNode` | Required | Content to display as the card title |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | - | All other props are passed to the underlying div element |

### CardDescription Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes to apply to the card description |
| `children` | `ReactNode` | Required | Content to display as the card description |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | - | All other props are passed to the underlying div element |

### CardContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes to apply to the card content |
| `children` | `ReactNode` | Required | Content to display inside the card content area |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | - | All other props are passed to the underlying div element |

### CardFooter Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes to apply to the card footer |
| `children` | `ReactNode` | Required | Content to display inside the card footer |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | - | All other props are passed to the underlying div element |

## TypeScript

```tsx
// Card Component Types
import * as React from 'react';

// Card Props
type CardProps = React.HTMLAttributes<HTMLDivElement>;

// CardHeader Props
type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

// CardTitle Props
type CardTitleProps = React.HTMLAttributes<HTMLDivElement>;

// CardDescription Props
type CardDescriptionProps = React.HTMLAttributes<HTMLDivElement>;

// CardContent Props
type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

// CardFooter Props
type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;
```

## Customization

### Style Overrides

The Card component and its sub-components can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes to each component:

```tsx
<Card className="max-w-md mx-auto bg-gradient-to-br from-card to-background">
  <CardHeader className="bg-card/50 backdrop-blur-sm">
    <CardTitle className="text-blue-500 dark:text-blue-400">Custom Title</CardTitle>
    <CardDescription className="text-blue-700/70 dark:text-blue-300/70">Custom Description</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    {/* Content */}
  </CardContent>
  <CardFooter className="justify-end border-t border-border/50 bg-muted/20">
    {/* Footer content */}
  </CardFooter>
</Card>
```

2. Customizing the spacing and padding within the card:

```tsx
<Card>
  <CardHeader className="p-4">
    <CardTitle>Compact Header</CardTitle>
  </CardHeader>
  <CardContent className="p-4 pt-0">
    {/* Content with custom padding */}
  </CardContent>
  <CardFooter className="p-4 pt-2">
    {/* Footer with custom padding */}
  </CardFooter>
</Card>
```

### Extending the Component

```tsx
import { Card, CardProps, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ActionCardProps extends CardProps {
  title: string;
  description?: string;
  actionLabel: string;
  onAction: () => void;
}

export function ActionCard({ 
  title,
  description,
  actionLabel,
  onAction,
  children,
  className,
  ...props 
}: ActionCardProps) {
  return (
    <Card 
      className={`hover:shadow-lg transition-shadow ${className || ''}`}
      {...props}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={onAction}>{actionLabel}</Button>
      </CardFooter>
    </Card>
  );
}
```

## Examples

### Integration with Forms

```tsx
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values);
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
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
                    <Input placeholder="Your email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
```

### Integration with Other Components

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export function UserProfileCard({ user }) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback>{user.initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle className="text-xl">{user.name}</CardTitle>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline">{user.role}</Badge>
            {user.isVerified && (
              <Badge variant="secondary">Verified</Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-sm">
          <span className="font-medium text-muted-foreground">Email:</span> {user.email}
        </div>
        {user.bio && (
          <p className="text-sm text-muted-foreground">{user.bio}</p>
        )}
      </CardContent>
    </Card>
  );
}
```

### Responsive Behavior

The Card component can be made responsive using Tailwind's responsive modifiers:

```tsx
<Card className="w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
  <CardHeader className="p-4 sm:p-6">
    <CardTitle className="text-lg sm:text-xl md:text-2xl">Responsive Card</CardTitle>
    <CardDescription className="text-xs sm:text-sm">
      This card adjusts its size and spacing based on screen size
    </CardDescription>
  </CardHeader>
  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0 text-sm sm:text-base">
    <p>The content inside adapts to different screen sizes.</p>
  </CardContent>
  <CardFooter className="p-4 sm:p-6 pt-0 sm:pt-0 flex-col sm:flex-row justify-start sm:justify-end gap-2">
    <Button size="sm" variant="outline" className="w-full sm:w-auto">Cancel</Button>
    <Button size="sm" className="w-full sm:w-auto">Continue</Button>
  </CardFooter>
</Card>
```

The responsive behavior includes:

- **Mobile**: Full width with smaller padding and text sizes
- **Tablet**: Constrained width with medium padding and text sizes
- **Desktop**: Larger maximum width with standard padding and text sizes

## Accessibility

The Card component follows these accessibility best practices:

- Uses semantic HTML structures to organize content
- Maintains proper color contrast for text against background colors
- CardTitle and CardDescription components are div elements, allowing you to use appropriate heading levels for proper document outline
- Supports keyboard focus when used as interactive elements
- Preserves parent-child relationships for screen readers
- Allows for custom ARIA attributes to be passed through props where needed

## Implementation Details

The component:

- Is built using a composition pattern with multiple sub-components for flexible layouts
- Uses Tailwind CSS for styling with the ability to override via className
- Applies subtle shadows and borders for visual clarity and separation from background
- Maintains proper spacing between elements with a consistent padding system
- Uses the `cn` utility to merge default and custom classNames
- Forwards refs to the underlying div elements for all sub-components

## Common Pitfalls

- **Missing semantic structure**: When CardTitle and CardDescription are used, consider wrapping them with appropriate semantic HTML (like `<h2>` or `<h3>`) for proper document outline
- **Overflow issues**: Content that is too wide for the card may cause layout issues; use proper text wrapping and overflow handling
- **Inconsistent padding**: When customizing padding on CardContent, remember that it has `pt-0` by default to align with CardHeader, so you may need to adjust both
- **Interactive cards**: When making the entire card clickable, ensure proper keyboard accessibility and focus indicators
- **Nested cards**: Be careful when nesting cards, as the visual hierarchy can become confusing; consider using different variants or styling

## Testing

```tsx
// Example test for the Card component
import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

describe('Card', () => {
  it('renders correctly with basic content', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
        </CardHeader>
        <CardContent>Card content</CardContent>
      </Card>
    );
    
    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });
  
  it('applies custom className to Card component', () => {
    const { container } = render(
      <Card className="custom-class">
        <CardContent>Content</CardContent>
      </Card>
    );
    
    const cardElement = container.firstChild;
    expect(cardElement).toHaveClass('custom-class');
    expect(cardElement).toHaveClass('rounded-lg'); // Default class
  });
  
  it('forwards additional props to the underlying div', () => {
    render(
      <Card data-testid="card-test" aria-label="Card example">
        <CardContent>Content</CardContent>
      </Card>
    );
    
    const card = screen.getByTestId('card-test');
    expect(card).toHaveAttribute('aria-label', 'Card example');
  });
});
```

## Related Components

- [Container](./container.md): Can be used to wrap cards in a consistent layout
- [Typography](./typography.md): For consistent text styling within cards
- [Button](./button.md): Commonly used in card footers for actions
- [HoverCard](./hover-card.md): For displaying rich previews in a card-like popup
- [ContentCard](./content-card.md): A more specialized card implementation with predefined content structure
