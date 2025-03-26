---
sidebar_label: Avatar
---

# Avatar Component

A versatile avatar component that displays a user image with fallback support when the image fails to load or is unavailable.

## Import

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
```

## Usage

### Basic Usage

```tsx
<Avatar>
  <AvatarImage src="https://example.com/user-avatar.jpg" alt="User Name" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
```

### With Fallback Text

```tsx
<Avatar>
  <AvatarImage src="https://example.com/user-avatar.jpg" alt="John Doe" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

### With Fallback Icon

```tsx
<Avatar>
  <AvatarImage src="https://example.com/user-avatar.jpg" alt="User Profile" />
  <AvatarFallback>
    <UserIcon className="h-4 w-4" />
  </AvatarFallback>
</Avatar>
```

### Custom Size

```tsx
<Avatar className="h-14 w-14">
  <AvatarImage src="https://example.com/user-avatar.jpg" alt="User Name" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
```

## Props

### Avatar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes to apply to the avatar container |
| `...props` | `React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>` | - | All other props are passed to the underlying Radix UI Avatar component |

### AvatarImage Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | Required | The source URL of the avatar image |
| `alt` | `string` | Required | Alt text for the avatar image for accessibility |
| `className` | `string` | `undefined` | Additional CSS classes to apply to the avatar image |
| `...props` | `React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>` | - | All other props are passed to the underlying Radix UI Avatar Image component |

### AvatarFallback Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `delayMs` | `number` | `undefined` | Delay in milliseconds before showing the fallback to avoid flashes during loading |
| `className` | `string` | `undefined` | Additional CSS classes to apply to the avatar fallback |
| `children` | `React.ReactNode` | Required | Content to display when the image fails to load (typically initials or an icon) |
| `...props` | `React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>` | - | All other props are passed to the underlying Radix UI Avatar Fallback component |

## TypeScript

```tsx
// Avatar Component Types
import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

// Avatar Props
type AvatarProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;

// AvatarImage Props
type AvatarImageProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;

// AvatarFallback Props
type AvatarFallbackProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;
```

## Customization

### Style Overrides

The Avatar component can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes to each subcomponent
2. Overriding the default styles using CSS variables or direct class overrides
3. Extending the component with custom sizes or colors

Default styling:
- Avatar: `h-10 w-10 rounded-full overflow-hidden`
- AvatarImage: `aspect-square h-full w-full`
- AvatarFallback: `flex h-full w-full items-center justify-center rounded-full bg-muted`

### Extending the Component

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export function UserAvatar({ username, imageSrc, size = 'default', ...props }) {
  // Generate initials from username
  const initials = username
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
  
  // Size classes
  const sizeClasses = {
    small: 'h-8 w-8',
    default: 'h-10 w-10',
    large: 'h-14 w-14',
  };
  
  return (
    <Avatar 
      {...props} 
      className={`${sizeClasses[size]} ${props.className || ''}`}
    >
      <AvatarImage src={imageSrc} alt={username} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}
```

## Examples

### Integration with User Profile

```tsx
<div className="flex items-center gap-3">
  <Avatar>
    <AvatarImage src={user.profileImage} alt={user.name} />
    <AvatarFallback>{user.initials}</AvatarFallback>
  </Avatar>
  <div>
    <p className="font-medium">{user.name}</p>
    <p className="text-sm text-muted-foreground">{user.email}</p>
  </div>
</div>
```

### Integration with Cards

```tsx
<Card>
  <CardHeader>
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src={author.avatar} alt={author.name} />
        <AvatarFallback>{author.initials}</AvatarFallback>
      </Avatar>
      <div>
        <CardTitle>{author.name}</CardTitle>
        <CardDescription>{author.role}</CardDescription>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    {/* Card content */}
  </CardContent>
</Card>
```

### Responsive Behavior

The Avatar component is responsive by default, but you can further customize its behavior:

- **Mobile**: Use smaller avatar sizes with `h-8 w-8` class
- **Tablet**: Use default avatar size `h-10 w-10`
- **Desktop**: Use larger avatar sizes with `h-12 w-12` or `h-14 w-14` for more prominence

```tsx
<Avatar className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12">
  <AvatarImage src="/avatar.png" alt="User" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
```

## Accessibility

The Avatar component follows these accessibility best practices:

- Requires `alt` text on AvatarImage for screen readers
- Provides visible text alternatives through AvatarFallback when images aren't available
- Uses Radix UI's Avatar primitive which has proper ARIA attributes
- Maintains proper contrast ratios for fallback text against the background
- Preserves aspect ratio and readability at different sizes

## Implementation Details

The component:

- Is built on Radix UI's Avatar primitive for accessibility and consistent behavior
- Automatically displays the fallback when the image fails to load
- Handles image loading states to prevent layout shifts
- Uses Tailwind CSS for styling with the ability to override via className
- Is server-component friendly with the 'use client' directive properly applied

## Common Pitfalls

- **Missing fallback content**: Always provide fallback content (initials or icon) to handle cases when images don't load
- **Non-square images**: The component expects square images; non-square images will be cropped
- **Accessibility**: Remember to include descriptive `alt` text for AvatarImage
- **Size customization**: When changing the size, adjust both width and height properties to maintain the circular shape
- **Hydration errors**: When using Avatar inside other components like Button, wrap with a client component to avoid hydration issues

## Testing

```tsx
// Example test for the Avatar component
import { render, screen } from '@testing-library/react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

describe('Avatar', () => {
  it('renders the image when src is provided', () => {
    render(
      <Avatar>
        <AvatarImage src="/test-avatar.png" alt="Test User" data-testid="avatar-img" />
        <AvatarFallback>TU</AvatarFallback>
      </Avatar>
    );
    
    expect(screen.getByTestId('avatar-img')).toBeInTheDocument();
  });
  
  it('displays fallback when image fails to load', () => {
    render(
      <Avatar>
        <AvatarImage src="/non-existent.png" alt="Test User" />
        <AvatarFallback>TU</AvatarFallback>
      </Avatar>
    );
    
    // Trigger onError event on the image
    const image = screen.getByAltText('Test User');
    fireEvent.error(image);
    
    expect(screen.getByText('TU')).toBeInTheDocument();
  });
});
```

## Related Components

- [Card](./card.md): Often used together with Avatar in user profile displays
- [Badge](./badge.md): Can be combined with Avatar to indicate user status
- [Button](./button.md): Avatars can be used within buttons for user-related actions
