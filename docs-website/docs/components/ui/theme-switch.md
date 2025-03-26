---
sidebar_label: Theme Switch
---

# ThemeSwitch Component

A toggle button component that enables users to switch between light, dark, and system color themes. The component displays sun and moon icons that animate smoothly during transitions.

## Import

```tsx
import { ThemeSwitch } from '@/components/ui/theme-switch';
```

## Usage

### Basic Usage

```tsx
<ThemeSwitch />
```

The component doesn't require any props as it uses the theme context internally.

### Within Layout Components

```tsx
import { ThemeSwitch } from '@/components/ui/theme-switch';

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <Logo />
      <nav className="flex items-center gap-4">
        {/* Other navigation items */}
        <ThemeSwitch />
      </nav>
    </header>
  );
}
```

### With Custom Positioning

```tsx
<div className="fixed bottom-4 right-4 z-50">
  <ThemeSwitch />
</div>
```

## Props

The ThemeSwitch component doesn't accept any props as it's designed to be a self-contained component that works with the ThemeProvider context.

## TypeScript

The component doesn't have a specific props interface since it doesn't accept any props.

```tsx
// The component uses the theme context internally
import { useTheme } from '@/contexts/theme-provider';

// Theme type from the context
type Theme = 'dark' | 'light' | 'system';
```

## Customization

### Style Overrides

Since ThemeSwitch is based on the `Button` component, you can extend it by creating a custom wrapper:

```tsx
import { ThemeSwitch } from '@/components/ui/theme-switch';

export function CustomThemeSwitch() {
  return (
    <div className="p-2 bg-accent rounded-full">
      <ThemeSwitch />
    </div>
  );
}
```

### Extending the Component

If you need to add functionality or change the behavior:

```tsx
import { useTheme } from '@/contexts/theme-provider';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Laptop } from 'lucide-react';

export function ExtendedThemeSwitch() {
  const { theme, setTheme } = useTheme();

  // Added cycling through all three theme options
  const cycleTheme = () => {
    if (theme === 'dark') {
      setTheme('system');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={cycleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <Laptop className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all data-[theme=system]:rotate-0 data-[theme=system]:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
```

## Examples

### Integration with Navbar

```tsx
import { ThemeSwitch } from '@/components/ui/theme-switch';

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 border-b">
      <div className="flex items-center gap-6">
        <Logo />
        <NavLinks />
      </div>
      <div className="flex items-center gap-4">
        <UserDropdown />
        <ThemeSwitch />
      </div>
    </nav>
  );
}
```

### Integration with Settings Form

```tsx
import { ThemeSwitch } from '@/components/ui/theme-switch';
import { useTheme } from '@/contexts/theme-provider';

export function UserSettingsForm() {
  const { theme } = useTheme();
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        {/* Other form fields */}
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium">Theme Preference</h4>
            <p className="text-sm text-muted-foreground">
              Current theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </p>
          </div>
          <ThemeSwitch />
        </div>
        <Button type="submit">Save Settings</Button>
      </div>
    </form>
  );
}
```

### Responsive Behavior

The component is designed to work well across all device sizes without special responsiveness considerations:

- **Mobile**: Works well as a compact icon button
- **Tablet & Desktop**: Same compact appearance, fits well in navigation bars
- **Positioning**: Can be placed in headers, settings panels, or as a floating button

## Accessibility

The ThemeSwitch component follows these accessibility best practices:

- **Screen reader support**: Uses `sr-only` class for descriptive text that is visible to screen readers
- **Keyboard navigation**: Fully operable via keyboard as it's based on the Button component
- **ARIA attributes**: Inherits appropriate button ARIA attributes from the Button component
- **Motion preferences**: Animations respect `prefers-reduced-motion` media query via Tailwind's defaults
- **Color contrast**: Works with the theme system to ensure proper contrast in both light and dark modes

## Implementation Details

The component:

- Uses the `useTheme` hook from the ThemeProvider context to access and update the current theme
- Toggles between 'light' and 'dark' themes (doesn't include 'system' in the toggle cycle)
- Leverages CSS transitions for smooth icon animations when switching themes
- Uses absolute positioning to overlay the sun and moon icons in the same space
- Utilizes the `ghost` button variant for a minimal appearance that works in various UI contexts
- Handles theme persistence through localStorage in the ThemeProvider

## Common Pitfalls

- **Missing ThemeProvider**: The component must be used within a `ThemeProvider` context or it will throw an error
- **Theme Initialization Flicker**: To prevent theme flickering on page load, ensure the ThemeProvider is properly set up with server-side rendering considerations
- **Icon Sizing**: The component uses fixed icon sizes, which may need adjustment if used in contexts with different spacing requirements
- **Dark Mode Class**: Ensure your Tailwind configuration includes the `darkMode: 'class'` setting for the component to work correctly

## Testing

```tsx
// Example test for the ThemeSwitch component
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeSwitch } from '@/components/ui/theme-switch';
import { ThemeProvider } from '@/contexts/theme-provider';

describe('ThemeSwitch', () => {
  it('renders correctly', () => {
    render(
      <ThemeProvider>
        <ThemeSwitch />
      </ThemeProvider>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Toggle theme')).toBeInTheDocument();
  });
  
  it('toggles theme when clicked', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider defaultTheme="light">
        <ThemeSwitch />
      </ThemeProvider>
    );
    
    // Initial state check
    const documentElement = document.documentElement;
    expect(documentElement).toHaveClass('light');
    
    // Click the button
    await user.click(screen.getByRole('button'));
    
    // Check if theme changed
    expect(documentElement).toHaveClass('dark');
  });
});
```

## Related Components

- [Button](./button.md): The base component that ThemeSwitch extends
- [ThemeProvider](../contexts/theme-provider.md): The context provider required for ThemeSwitch to function
- [Dropdown](./dropdown.md): Often used alongside ThemeSwitch in navigation components