# NavigationMenu Component

A collection of accessible, customizable links for navigating websites with nested content support and smooth animations.

## Import

```tsx
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationMenuIndicator,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
```

## Usage

### Basic Usage

```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

### With Next.js Link Components

```tsx
import Link from 'next/link';

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <Link href="/docs" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Documentation
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

### With Content Grid

```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
          <li>
            <NavigationMenuLink asChild>
              <a href="/introduction" className="block p-2 rounded-md hover:bg-accent">
                Introduction
              </a>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink asChild>
              <a href="/installation" className="block p-2 rounded-md hover:bg-accent">
                Installation
              </a>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

## Component Structure

- `NavigationMenu`: The root component that wraps the entire navigation menu structure
- `NavigationMenuList`: Contains the list of navigation items
- `NavigationMenuItem`: An individual navigation item
- `NavigationMenuTrigger`: Trigger button for dropdown content
- `NavigationMenuContent`: Content that appears when trigger is activated
- `NavigationMenuLink`: Navigation link that can be used directly or with asChild
- `NavigationMenuViewport`: Viewport container for displaying menu content
- `NavigationMenuIndicator`: Visual indicator for the active menu item

## Props

### NavigationMenu

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `undefined` | The controlled value of the menu item to activate |
| `defaultValue` | `string` | `undefined` | The value of the menu item that should be active when initially rendered |
| `onValueChange` | `(value: string) => void` | `undefined` | Event handler called when the value changes |
| `delayDuration` | `number` | `200` | The duration from when a menu item is hovered until the content is shown |
| `skipDelayDuration` | `number` | `300` | The duration from when an item is no longer hovered until the content begins hiding |
| `dir` | `"ltr" | "rtl"` | `"ltr"` | The reading direction of the menu |
| `orientation` | `"horizontal" | "vertical"` | `"horizontal"` | The orientation of the menu |

### NavigationMenuContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `forceMount` | `boolean` | `false` | Force mounting of the content when true |
| `className` | `string` | `undefined` | Additional CSS classes to apply |

### NavigationMenuLink

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asChild` | `boolean` | `false` | When true, component will render as its children instead of a default element |
| `active` | `boolean` | `false` | Whether the link is currently active |
| `className` | `string` | `undefined` | Additional CSS classes to apply |

### NavigationMenuTrigger

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes to apply |
| `children` | `ReactNode` | Required | Content for the trigger button |

## TypeScript

```tsx
// Component interface from Radix UI
interface NavigationMenuProps extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  delayDuration?: number;
  skipDelayDuration?: number;
  dir?: "ltr" | "rtl";
  orientation?: "horizontal" | "vertical";
}

// Link props
interface NavigationMenuLinkProps extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link> {
  asChild?: boolean;
  active?: boolean;
}

// Content props
interface NavigationMenuContentProps extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content> {
  forceMount?: boolean;
}
```

## Customization

### Style Overrides

The component can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes:

```tsx
<NavigationMenu className="bg-slate-100 dark:bg-slate-900 rounded-md">
  {/* Navigation menu content */}
</NavigationMenu>
```

2. Using the `navigationMenuTriggerStyle` function for custom trigger styles:

```tsx
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

<NavigationMenuLink 
  className={cn(
    navigationMenuTriggerStyle(),
    "font-bold text-green-600 dark:text-green-400"
  )}
>
  Custom Styled Link
</NavigationMenuLink>
```

3. Applying styles to child elements using CSS selector patterns:

```tsx
<NavigationMenuContent className="p-4 [&>ul]:grid [&>ul]:grid-cols-2 [&>ul]:gap-4">
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</NavigationMenuContent>
```

### Creating a Custom Navigation List Item

```tsx
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
```

## Examples

### Integration with Header Component

```tsx
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full py-4 px-6 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Your Logo
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/products/software" className="block p-3 rounded-md hover:bg-accent">
                        <div className="font-medium mb-1">Software</div>
                        <p className="text-sm text-muted-foreground">Our software solutions</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/products/hardware" className="block p-3 rounded-md hover:bg-accent">
                        <div className="font-medium mb-1">Hardware</div>
                        <p className="text-sm text-muted-foreground">Our hardware products</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
```

### Mobile-Responsive Navigation Menu

```tsx
'use client';

import { useState } from 'react';
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function ResponsiveNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full relative">
      {/* Mobile menu button */}
      <div className="md:hidden flex justify-end p-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>
      
      {/* Navigation for desktop and mobile */}
      <div className={cn(
        "md:block",
        isOpen ? "block" : "hidden"
      )}>
        <NavigationMenu className="w-full max-w-full justify-start md:justify-center">
          <NavigationMenuList className="flex-col md:flex-row">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] md:w-[400px] gap-3 p-4 md:grid-cols-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#feature-1" className="block p-2 rounded-md hover:bg-accent">
                        Feature 1
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#feature-2" className="block p-2 rounded-md hover:bg-accent">
                        Feature 2
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
```

### Responsive Behavior

The component responds to different screen sizes in the following ways:

- **Mobile**: 
  - By default, the component is horizontally oriented and can overflow on small screens
  - Customizations are needed (as shown in example above) to make it fully responsive
  - Content appears as a dropdown below the trigger

- **Tablet and Desktop**: 
  - Full horizontal layout with space between items
  - Content has more sophisticated positioning with `md:w-auto` and `md:absolute` classes
  - Viewport has improved animations and styling with shadow effects

## Accessibility

The NavigationMenu component follows these accessibility best practices:

- Adheres to the navigation role requirements from WAI-ARIA
- Provides keyboard navigation with Tab, Enter, Space, Arrow keys
- Supports screen readers with proper ARIA attributes
- Uses `aria-hidden="true"` for decorative icons
- Includes proper focus management and visible focus styles
- Content elements have proper ARIA roles and attributes from Radix UI

## Implementation Details

The component:

- Is built on top of Radix UI's Navigation Menu primitive
- Uses CSS variables for animation effects (via `data-[state]` and `data-[motion]` attributes)
- Implements responsive styles using Tailwind's mobile-first approach
- Supports a viewport system for displaying content in a consistent, accessible way
- Uses animated transitions for enhanced user experience

## Common Pitfalls

- **Missing `use client` directive**: If you're creating a custom component with NavigationMenu, remember to add the `'use client'` directive at the top of your file when using Next.js App Router.

- **Incorrect usage with Next.js Links**: When using with Next.js Link component, make sure to use `legacyBehavior` and `passHref` props to properly pass the href to the NavigationMenuLink.

- **Nested Navigation Menus**: Avoid nesting NavigationMenu components directly. Instead, create a single top-level NavigationMenu and use composition for complex navigation structures.

- **Styling inconsistencies**: When applying custom styles, remember that some properties come from Radix UI primitives and might need specific selectors or data attributes to override.

- **Missing Viewport component**: The NavigationMenuViewport is crucial for proper rendering of content. It's included by default in the NavigationMenu component, but if you're customizing, make sure it's included.

## Testing

```tsx
// Example test for the NavigationMenu component
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

describe('NavigationMenu', () => {
  it('renders correctly', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Test Trigger</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Test Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    
    expect(screen.getByText('Test Trigger')).toBeInTheDocument();
  });
  
  it('shows content when trigger is clicked', async () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Test Trigger</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Test Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    
    const trigger = screen.getByText('Test Trigger');
    await userEvent.click(trigger);
    
    // Content should now be visible
    expect(screen.getByText('Test Link')).toBeVisible();
  });
});
```

## Related Components

- [DropdownMenu](./dropdown-menu.md): Similar in functionality but designed for application commands rather than navigation links
- [Tabs](./tabs.md): Another way to organize content into sections, but with a different interaction model
