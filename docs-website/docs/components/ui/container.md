---
sidebar_label: Container
---

# Container Component

The Container component provides a responsive wrapper with consistent padding and width constraints for your content.

## Import

```tsx
import Container from '@/components/ui/container';
```

## Usage

### Basic Container

```tsx
<Container>
  <h1>Your Content Here</h1>
  <p>This content will be centered with responsive padding and a max-width.</p>
</Container>
```

### Size Options

Control the maximum width of the container:

```tsx
<Container size="sm">
  <p>Small container (max-width: 640px)</p>
</Container>

<Container size="md">
  <p>Medium container (max-width: 768px)</p>
</Container>

<Container size="lg">
  <p>Large container (max-width: 1024px) - Default</p>
</Container>

<Container size="xl">
  <p>Extra large container (max-width: 1280px)</p>
</Container>

<Container size="full">
  <p>Full width container (max-width: 100%)</p>
</Container>
```

### Padding Options

Control the horizontal padding of the container:

```tsx
<Container padding="none">
  <p>Container with no padding</p>
</Container>

<Container padding="sm">
  <p>Container with small padding (1rem)</p>
</Container>

<Container padding="md">
  <p>Container with medium padding (1.5rem on mobile, 2rem on larger screens) - Default</p>
</Container>

<Container padding="lg">
  <p>Container with large padding (2rem on mobile, 3rem on larger screens)</p>
</Container>
```

### Alignment

By default, containers are horizontally centered. You can disable this:

```tsx
<Container centered={false}>
  <p>This container is not centered and will align to the left</p>
</Container>
```

### Combining with Other Components

Containers work well as layout wrappers for other components:

```tsx
<Container size="md" padding="lg">
  <Card variant="elevated">
    <h2 className="text-2xl font-bold mb-4">Welcome</h2>
    <p className="mb-6">This card is inside a responsive container.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input label="First Name" fullWidth />
      <Input label="Last Name" fullWidth />
    </div>
    <Button variant="primary" className="mt-4">Submit</Button>
  </Card>
</Container>
```

### Page Layout Example

```tsx
export default function Page() {
  return (
    <>
      {/* Hero section with full width */}
      <div className="bg-blue-600 text-white py-12">
        <Container>
          <h1 className="text-4xl font-bold">Welcome to Our Site</h1>
          <p className="mt-4 text-xl">Discover amazing features and content.</p>
        </Container>
      </div>
      
      {/* Main content with narrower width */}
      <Container size="md" className="py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>Content 1</Card>
          <Card>Content 2</Card>
        </div>
      </Container>
    </>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'lg'` | Maximum width constraint |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Horizontal padding amount |
| `centered` | `boolean` | `true` | Whether to center the container horizontally |
| `className` | `string` | `''` | Additional CSS classes to apply |
| `children` | `ReactNode` | Required | Content to display inside the container |

The component also accepts all standard HTML div attributes like `id`, `data-*`, etc. 