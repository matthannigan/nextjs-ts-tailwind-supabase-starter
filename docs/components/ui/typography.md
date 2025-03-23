# Typography Components

A collection of type-safe, accessible typography components for consistent text styling across the application, including headings, paragraphs, blockquotes, and code snippets.

## Import

```tsx
import { 
  Heading, 
  Text, 
  Lead, 
  Blockquote, 
  InlineCode 
} from '@/components/ui/typography';
```

## Usage

### Heading Component

Use the `Heading` component for all heading levels (h1-h6) with consistent styling.

```tsx
<Heading>Default H1 Heading</Heading>
<Heading as="h2">H2 Heading</Heading>
<Heading as="h3" size="h3" variant="primary">H3 Primary Heading</Heading>
```

### Text Component

Use the `Text` component for paragraphs with various size, weight, and color options.

```tsx
<Text>Default paragraph text</Text>
<Text size="lg" weight="medium">Larger medium-weight text</Text>
<Text variant="muted" size="sm">Small muted text</Text>
```

### Lead Component

Use the `Lead` component for introductory or emphasized paragraphs.

```tsx
<Lead>This text stands out as an introduction to a section.</Lead>
```

### Blockquote Component

Use the `Blockquote` component for quotations.

```tsx
<Blockquote>
  "Typography is the art and technique of arranging type to make written language legible, readable, and appealing."
</Blockquote>
```

### InlineCode Component

Use the `InlineCode` component for code references within text.

```tsx
<Text>Install using <InlineCode>npm install @package/name</InlineCode></Text>
```

## Props

### Heading Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h1'` | HTML heading element to render |
| `size` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | Same as `as` prop | Controls the text size, independent of the semantic level |
| `variant` | `'default' \| 'muted' \| 'primary' \| 'secondary'` | `'default'` | Color variant of the heading |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | Required | Content to be rendered within the heading |

### Text Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Font size of the text |
| `weight` | `'light' \| 'normal' \| 'medium' \| 'semibold' \| 'bold'` | `'normal'` | Font weight of the text |
| `variant` | `'default' \| 'muted' \| 'primary' \| 'secondary'` | `'default'` | Color variant of the text |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | Required | Content to be rendered within the paragraph |

### Lead, Blockquote, and InlineCode Props

| Component | Props |
|-----------|-------|
| `Lead` | Accepts standard HTML paragraph attributes plus `className` |
| `Blockquote` | Accepts standard HTML blockquote attributes plus `className` |
| `InlineCode` | Accepts standard HTML code attributes plus `className` |

## TypeScript

```tsx
// Heading Component
export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
}

// Text Component
export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>,
    VariantProps<typeof textVariants> {
  children: ReactNode;
}

// Lead, Blockquote, and InlineCode use standard HTML element props
// with React.HTMLAttributes for their respective elements
```

## Customization

### Style Overrides

All typography components accept a `className` prop for additional Tailwind classes:

```tsx
<Heading className="my-8 text-blue-600 underline">Custom Styled Heading</Heading>
<Text className="italic first-letter:text-3xl first-letter:font-bold">
  Custom styled paragraph with drop cap effect.
</Text>
```

### Extending Components

```tsx
import { Heading, Text } from '@/components/ui/typography';

export function SectionTitle({ className, children, ...props }) {
  return (
    <Heading 
      as="h2"
      variant="primary"
      className={`border-b pb-2 ${className || ''}`}
      {...props}
    >
      {children}
    </Heading>
  );
}

export function ErrorText({ children, ...props }) {
  return (
    <Text 
      size="sm"
      variant="primary"
      className="text-red-600"
      {...props}
    >
      {children}
    </Text>
  );
}
```

## Examples

### Integration with Forms

```tsx
import { useForm } from 'react-hook-form';
import { Heading, Text } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h2" size="h3">Login to Your Account</Heading>
      <Text variant="muted" className="mb-6">Enter your credentials below</Text>
      
      <div className="space-y-4">
        <div>
          <Text as="label" htmlFor="email" size="sm" weight="medium">Email</Text>
          <Input id="email" {...register('email', { required: true })} />
          {errors.email && <Text size="xs" className="text-red-500">Email is required</Text>}
        </div>
        
        <div>
          <Text as="label" htmlFor="password" size="sm" weight="medium">Password</Text>
          <Input id="password" type="password" {...register('password', { required: true })} />
          {errors.password && <Text size="xs" className="text-red-500">Password is required</Text>}
        </div>
        
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
}
```

### Integration with Other Components

```tsx
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Heading, Text, Blockquote } from '@/components/ui/typography';

export function TestimonialCard({ quote, author, role }) {
  return (
    <Card>
      <CardHeader>
        <Heading as="h3" size="h5">Customer Testimonial</Heading>
      </CardHeader>
      <CardContent>
        <Blockquote>{quote}</Blockquote>
      </CardContent>
      <CardFooter>
        <Text weight="semibold">{author}</Text>
        <Text size="sm" variant="muted">{role}</Text>
      </CardFooter>
    </Card>
  );
}
```

### Responsive Behavior

The typography components have built-in responsive behavior:

- **Heading**: Font sizes automatically adjust for different screen sizes:
  ```tsx
  // In the component definition:
  // h1: 'text-4xl md:text-5xl lg:text-6xl',
  // h2: 'text-3xl md:text-4xl lg:text-5xl',
  // ...etc
  ```

- **Mobile**: Headings start with smaller base sizes (`text-4xl` for h1, etc.)
- **Tablet**: Medium-sized screens use the `md:` breakpoint sizes
- **Desktop**: Large screens use the `lg:` breakpoint sizes

Other typography components like `Text`, `Lead`, etc. can be made responsive using the `className` prop:

```tsx
<Text className="text-sm md:text-base lg:text-lg">
  This text grows larger on bigger screens.
</Text>
```

## Accessibility

The typography components follow these accessibility best practices:

- **Semantic HTML**: Uses appropriate HTML elements (`h1`-`h6`, `p`, `blockquote`, `code`) for proper document structure
- **Color Contrast**: The default theme colors meet WCAG AA standards for color contrast
- **Heading Hierarchy**: The `as` prop allows for proper heading hierarchy while maintaining consistent styling
- **Font Sizing**: All sizes are relative using Tailwind's rem-based sizing, supporting browser font size settings
- **Focus States**: Inherits the application's focus states for interactive elements

## Implementation Details

The Typography components:

- Use CSS Utility Classes: Built with Tailwind CSS utility classes for consistent styling
- Leverage Class Variance Authority (CVA): Uses CVA for variant management 
- Support Type Safety: Fully typed with TypeScript for developer experience
- Maintain Component Composability: Can be easily extended and combined with other components
- Follow HTML Semantics: Each component renders the appropriate HTML element

## Common Pitfalls

- **Inconsistent Heading Levels**: Be sure to maintain proper heading hierarchy (h1 → h2 → h3) for accessibility. The `as` prop allows you to separate visual styling from semantic structure.
  
- **Overriding Core Styles**: When adding custom styles via `className`, be careful not to accidentally override important core styles. Use Tailwind's modifier syntax like `first:`, `hover:`, etc. to add behavior without changing the base styles.

- **Text Color in Dark Mode**: Remember that the color variants (`default`, `muted`, `primary`, `secondary`) are designed to work with the application's theme. If implementing custom colors, ensure they have appropriate dark mode alternatives.

## Testing

```tsx
// Example test for the Heading component
import { render, screen } from '@testing-library/react';
import { Heading } from '@/components/ui/typography';

describe('Heading', () => {
  it('renders with default props as h1', () => {
    render(<Heading>Test Heading</Heading>);
    const heading = screen.getByText('Test Heading');
    expect(heading.tagName).toBe('H1');
  });
  
  it('renders with specified heading level', () => {
    render(<Heading as="h3">Test H3</Heading>);
    const heading = screen.getByText('Test H3');
    expect(heading.tagName).toBe('H3');
  });
  
  it('applies correct styles based on variants', () => {
    render(<Heading variant="primary">Primary Heading</Heading>);
    const heading = screen.getByText('Primary Heading');
    expect(heading).toHaveClass('text-primary');
  });
});
```

## Related Components

- [Card](./card.md): Often used together with Typography components for content organization
- [Button](./button.md): Can be combined with Text components for consistent button styling
- [Alert](./alert.md): Uses typography components for alert titles and descriptions