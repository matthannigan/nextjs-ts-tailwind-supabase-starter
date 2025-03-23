# [Component Name] Component

[Brief 1-2 sentence description of what the component does and its primary purpose]

## Import

```tsx
import [ComponentName] from '@/components/[path]/[component-name]';
```

## Usage

### Basic Usage

```tsx
<[ComponentName]>[Content or props if applicable]</[ComponentName]>
```

### [Example Variant/Use Case 1]

```tsx
<[ComponentName] [prop1]="[value]" [prop2]="[value]">
  [Example content if applicable]
</[ComponentName]>
```

### [Example Variant/Use Case 2]

```tsx
<[ComponentName] [prop1]="[value]" [prop2]="[value]">
  [Example content if applicable]
</[ComponentName]>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `[propName]` | `[propType]` | `[defaultValue]` | [Description of what the prop does] |
| `[propName]` | `[propType]` | `[defaultValue]` | [Description of what the prop does] |
| `[propName]` | `[propType]` | `[defaultValue]` | [Description of what the prop does] |
| `children` | `ReactNode` | Required/Optional | [Description of expected children] |

## TypeScript

```tsx
// Component Type Definition
type [ComponentName]Props = {
  [propName]: [type];
  [propName]?: [type]; // Optional prop
  children?: React.ReactNode;
} & [ExtendedTypes]; // Any extended types like HTML attributes
```

## Customization

### Style Overrides

The component can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes
2. [Other customization methods if applicable]

### Extending the Component

```tsx
import [ComponentName] from '@/components/[path]/[component-name]';

export function Custom[ComponentName]({ [customProps], ...props }) {
  return (
    <[ComponentName] 
      {...props} 
      className={`custom-styles ${props.className || ''}`}
    >
      [Custom implementation]
    </[ComponentName]>
  );
}
```

## Examples

### Integration with Forms

```tsx
<form onSubmit={handleSubmit}>
  <[ComponentName] [props]>[content]</[ComponentName]>
  {/* Additional form elements */}
</form>
```

### Integration with Other Components

```tsx
<Container>
  <[ComponentName] [props]>
    [Content]
  </[ComponentName]>
</Container>
```

### Responsive Behavior

The component responds to different screen sizes in the following ways:

- **Mobile**: [Description of mobile behavior]
- **Tablet**: [Description of tablet behavior]
- **Desktop**: [Description of desktop behavior]

## Accessibility

The component follows these accessibility best practices:

- [Accessibility feature 1]
- [Accessibility feature 2]
- [ARIA attributes used]
- [Keyboard navigation support]

## Implementation Details

The component:

- [Technical detail 1]
- [Technical detail 2]
- [Technical detail 3]
- [Rendering optimization details if applicable]

## Common Pitfalls

- **[Pitfall 1]**: [How to avoid or solve]
- **[Pitfall 2]**: [How to avoid or solve]

## Testing

```tsx
// Example test for the component
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import [ComponentName] from '@/components/[path]/[component-name]';

describe('[ComponentName]', () => {
  it('renders correctly', () => {
    render(<[ComponentName]>[Test content]</[ComponentName]>);
    expect(screen.getByText('[Test content]')).toBeInTheDocument();
  });
  
  it('[describes behavior]', async () => {
    // Test implementation
  });
});
```

## Related Components

- [[RelatedComponent1]](./[RelatedComponent1].md): [Brief description of relation]
- [[RelatedComponent2]](./[RelatedComponent2].md): [Brief description of relation]
