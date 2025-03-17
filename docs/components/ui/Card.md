# Card Component

The Card component is a versatile container for displaying content in a contained, styled box with various appearance options.

## Import

```tsx
import Card from '@/components/ui/Card';
```

## Usage

### Basic Card

```tsx
<Card>
  <h2 className="text-xl font-bold">Card Title</h2>
  <p>This is the content of the card.</p>
</Card>
```

### Variants

The Card component supports three different visual styles:

```tsx
<Card variant="default">
  <p>Default card with a white background</p>
</Card>

<Card variant="bordered">
  <p>Bordered card with a light gray border</p>
</Card>

<Card variant="elevated">
  <p>Elevated card with a shadow effect</p>
</Card>
```

### Padding Options

Control the internal spacing of the card:

```tsx
<Card padding="none">
  <p>Card with no padding</p>
</Card>

<Card padding="sm">
  <p>Card with small padding</p>
</Card>

<Card padding="md">
  <p>Card with medium padding (default)</p>
</Card>

<Card padding="lg">
  <p>Card with large padding</p>
</Card>
```

### Rounded Corner Options

Control the border radius of the card:

```tsx
<Card rounded="none">
  <p>Card with no rounded corners</p>
</Card>

<Card rounded="sm">
  <p>Card with small rounded corners</p>
</Card>

<Card rounded="md">
  <p>Card with medium rounded corners (default)</p>
</Card>

<Card rounded="lg">
  <p>Card with large rounded corners</p>
</Card>
```

### Combining Options

You can combine different options to create the exact card style you need:

```tsx
<Card 
  variant="elevated" 
  padding="lg" 
  rounded="lg"
  className="mt-4 hover:shadow-xl transition-shadow"
>
  <h2 className="text-xl font-bold">Featured Content</h2>
  <p className="mt-2">This card combines multiple styling options and custom classes.</p>
</Card>
```

### Using with Other Components

Cards work well as containers for other UI components:

```tsx
<Card variant="bordered" padding="md">
  <h3 className="text-lg font-medium mb-4">Contact Form</h3>
  <Input 
    label="Name" 
    placeholder="Enter your name" 
    fullWidth 
    className="mb-3"
  />
  <Input 
    label="Email" 
    placeholder="Enter your email" 
    fullWidth 
    className="mb-3"
  />
  <Button variant="primary" className="mt-2">
    Submit
  </Button>
</Card>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'bordered' \| 'elevated'` | `'default'` | Visual style variant of the card |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Amount of internal padding |
| `rounded` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Border radius size |
| `className` | `string` | `''` | Additional CSS classes to apply |
| `children` | `ReactNode` | Required | Content to display inside the card |

The component also accepts all standard HTML div attributes like `onClick`, `id`, etc.
