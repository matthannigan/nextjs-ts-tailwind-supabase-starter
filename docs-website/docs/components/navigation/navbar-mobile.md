---
sidebar_label: Navbar Mobile
---

# NavbarMobile Component

A fixed-position navigation bar component designed for mobile devices that provides a consistent, accessible navigation interface anchored at the bottom of the screen with icon-based navigation items.

## Import

```tsx
import NavbarMobile from '@/components/navigation/navbar-mobile';
```

## Usage

### Basic Usage

```tsx
// In a layout component
import NavbarMobile from '@/components/navigation/navbar-mobile';

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <NavbarMobile />
    </>
  );
}
```

### With Custom Navigation Items

```tsx
import NavbarMobile from '@/components/navigation/navbar-mobile';
import { Home, Settings, User, ShoppingCart } from 'lucide-react';

// Note: This is for illustration. The component currently doesn't support custom items through props.
// You would need to modify the component source to implement this functionality.
```

## Props

Currently, `NavbarMobile` doesn't accept any props as it has a fixed set of navigation items defined internally. To customize the navigation items, you would need to modify the component source code.

The internal `NavItem` component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | Required | The URL to navigate to when the item is clicked |
| `icon` | `JSX.Element` | Required | The SVG icon element to display for the navigation item |
| `label` | `string` | Required | The text label for the navigation item |

## TypeScript

```tsx
// Component Type Definition
interface NavItemProps {
  href: string;
  icon: JSX.Element;
  label: string;
}

const NavItem: FC<NavItemProps> = ({ href, icon, label }) => {
  // Component implementation
};

const NavbarMobile: FC = () => {
  // Component implementation
};
```

## Customization

### Style Overrides

The component can be customized using the following approaches:

1. Directly modifying the Tailwind classes in the component:
   - For the main container: `className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600"`
   - For the grid container: `className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium"`
   - For individual navigation items: Modify styles in the `NavItem` component

2. Extending the component with additional Tailwind classes:

```tsx
import NavbarMobile from '@/components/navigation/navbar-mobile';

// Create a wrapper component with additional styles
export function CustomNavbarMobile() {
  return (
    <div className="custom-container">
      <NavbarMobile />
    </div>
  );
}
```

### Extending the Component

To extend the component with custom navigation items, you would need to create a new component based on the original:

```tsx
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Settings, Users, CreditCard } from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: JSX.Element;
  label: string;
}

const NavItem: FC<NavItemProps> = ({ href, icon, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
      <div
        className={`w-5 h-5 mb-2 ${isActive ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'}`}
      >
        {icon}
      </div>
      <span
        className={`text-sm ${isActive ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'}`}
      >
        {label}
      </span>
    </Link>
  );
};

// Custom version with different navigation items
const CustomNavbarMobile: FC = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <NavItem
          href="/"
          icon={<Home className="w-full h-full" />}
          label="Home"
        />
        <NavItem
          href="/dashboard"
          icon={<CreditCard className="w-full h-full" />}
          label="Dashboard"
        />
        <NavItem
          href="/team"
          icon={<Users className="w-full h-full" />}
          label="Team"
        />
        <NavItem
          href="/settings"
          icon={<Settings className="w-full h-full" />}
          label="Settings"
        />
      </div>
    </div>
  );
};

export default CustomNavbarMobile;
```

## Examples

### Integration with React Hook Form

The NavbarMobile component is a navigation element and doesn't directly integrate with forms. However, you can use it in a layout that contains forms:

```tsx
import NavbarMobile from '@/components/navigation/navbar-mobile';
import { useForm } from 'react-hook-form';

export default function FormPage() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <>
      <div className="p-4 pb-20"> {/* Add padding at the bottom to prevent form elements from being hidden by the navbar */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('name')} className="w-full p-2 border rounded" />
          <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
            Submit
          </button>
        </form>
      </div>
      <NavbarMobile />
    </>
  );
}
```

### Integration with Other Components

```tsx
import NavbarMobile from '@/components/navigation/navbar-mobile';
import Header from '@/components/layout/header';

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-16"> {/* Add padding bottom to prevent content from being hidden by navbar */}
        {children}
      </main>
      <NavbarMobile />
    </div>
  );
}
```

### Responsive Behavior

The NavbarMobile component is specifically designed for mobile devices and is typically used in a mobile-specific layout. For a fully responsive navigation system, you would need to implement conditional rendering based on screen size:

```tsx
import { useEffect, useState } from 'react';
import NavbarMobile from '@/components/navigation/navbar-mobile';
import DesktopNavbar from '@/components/navigation/desktop-navbar';

export default function ResponsiveLayout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      {!isMobile && <DesktopNavbar />}
      <main className={`flex-1 ${isMobile ? 'pb-16' : ''}`}>
        {children}
      </main>
      {isMobile && <NavbarMobile />}
    </div>
  );
}
```

The component responds to different screen sizes in the following ways:

- **Mobile**: Fixed to the bottom of the screen with a height of 4rem (16px) and full width. Navigation items are displayed in a 4-column grid with icons and text labels.
- **Tablet/Desktop**: The component is not intended for tablet or desktop views. You should conditionally render it based on screen size and provide alternative navigation for larger screens.

## Accessibility

The component follows these accessibility best practices:

- **Clear Visual Indication**: Active navigation items are highlighted with a blue color to provide clear visual feedback.
- **Semantic HTML**: Uses proper HTML elements like `nav` (implied in the parent component) and proper links with the Next.js `Link` component.
- **Hover States**: Provides visual feedback on hover for interactive elements.
- **SVG Icons with aria-hidden**: Icons are properly marked with `aria-hidden="true"` to prevent screen readers from announcing them.

For improved accessibility, consider the following enhancements:

- Add `aria-label="Mobile navigation"` to the main container div to provide context for screen readers.
- Ensure SVG icons have proper `role="img"` and appropriate `aria-label` attributes if they convey meaning.

## Implementation Details

The component:

- Uses Next.js `usePathname()` hook to determine the current active route.
- Implements a nested `NavItem` component to encapsulate the logic for individual navigation items.
- Handles both light and dark mode with appropriate color classes.
- Has fixed positioning to ensure the navigation remains accessible regardless of scroll position.
- Provides visual feedback for active and hover states.

## Common Pitfalls

- **Bottom Padding**: Content may be obscured by the fixed navbar. Always add appropriate bottom padding (pb-16 or 4rem) to your main content container.
- **Conflicting z-index**: The navbar uses `z-50` - ensure other fixed elements don't use conflicting z-index values.
- **Dark Mode Conflicts**: If using a custom dark mode implementation, you may need to adjust the dark mode classes.
- **Navigation State Management**: For more complex applications, you might need to integrate with state management like Redux or Context API for navigation state.

## Testing

```tsx
// Example test for the component
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavbarMobile from '@/components/navigation/navbar-mobile';
import { usePathname } from 'next/navigation';

// Mock the usePathname hook
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('NavbarMobile', () => {
  it('renders all navigation items', () => {
    // Mock the usePathname to return '/' (home)
    (usePathname as jest.Mock).mockReturnValue('/');
    
    render(<NavbarMobile />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Wallet')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });
  
  it('highlights the active navigation item', () => {
    // Mock the usePathname to return '/profile'
    (usePathname as jest.Mock).mockReturnValue('/profile');
    
    render(<NavbarMobile />);
    
    // The Profile link should have the active color class
    const profileLink = screen.getByText('Profile');
    const profileIcon = profileLink.previousSibling;
    
    expect(profileLink).toHaveClass('text-blue-600');
    expect(profileIcon).toHaveClass('text-blue-600');
    
    // Other links should not have the active color class
    const homeLink = screen.getByText('Home');
    expect(homeLink).not.toHaveClass('text-blue-600');
  });
});
```

## Related Components

- [Header](../layout/header.md): Used for top navigation, typically in desktop layouts
- **Sidebar**: Used for vertical navigation, typically in desktop layouts
- **NavLink**: A styled link component that can be used for navigation items
