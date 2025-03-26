# DropdownMenu Component

A flexible dropdown menu component that displays a list of options, actions, or functions triggered by a button, with support for nested submenus, checkboxes, radio groups, and keyboard navigation.

## Import

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup
} from '@/components/ui/dropdown-menu';
```

## Usage

### Basic Usage

```tsx
<DropdownMenu>
  <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### With Icons and Shortcuts

```tsx
import { UserIcon, SettingsIcon, LogOutIcon } from 'lucide-react';

<DropdownMenu>
  <DropdownMenuTrigger>Options</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <UserIcon className="mr-2 h-4 w-4" />
      Profile
      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <SettingsIcon className="mr-2 h-4 w-4" />
      Settings
      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <LogOutIcon className="mr-2 h-4 w-4" />
      Logout
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### With Checkbox Items

```tsx
import { useState } from 'react';

export function CheckboxDropdown() {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>View Options</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### With Radio Items

```tsx
import { useState } from 'react';

export function RadioDropdown() {
  const [position, setPosition] = useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Panel Position</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="left">Left</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### With Nested Submenus

```tsx
<DropdownMenu>
  <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuItem>Direct Action</DropdownMenuItem>
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>Sub Item 1</DropdownMenuItem>
        <DropdownMenuItem>Sub Item 2</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>More Nested Options</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Deep Nested Item 1</DropdownMenuItem>
            <DropdownMenuItem>Deep Nested Item 2</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>
```

## Props

### DropdownMenu Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultOpen` | `boolean` | `false` | Default open state when uncontrolled |
| `open` | `boolean` | `undefined` | Open state when controlled |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Callback when open state changes |
| `modal` | `boolean` | `true` | Whether the dropdown is modal (blocks interaction outside) |
| `children` | `ReactNode` | Required | The content of the dropdown menu (trigger and content) |

### DropdownMenuTrigger Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asChild` | `boolean` | `false` | When true, will use child as trigger instead of a button |
| `className` | `string` | `undefined` | Additional CSS classes |
| `children` | `ReactNode` | Required | The content of the trigger element |

### DropdownMenuContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes |
| `sideOffset` | `number` | `4` | Offset from the trigger in pixels |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Preferred alignment of the content |
| `children` | `ReactNode` | Required | The content of the dropdown menu |
| `...props` | `DropdownMenuContentProps` | | All other properties passed to the Radix UI content component |

### DropdownMenuItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes |
| `inset` | `boolean` | `false` | Indents the item to align with checkbox/radio items |
| `disabled` | `boolean` | `false` | Whether the item is disabled |
| `onSelect` | `(event: Event) => void` | `undefined` | Callback when the item is selected |
| `children` | `ReactNode` | Required | The content of the menu item |
| `...props` | `DropdownMenuItemProps` | | All other properties passed to the Radix UI item component |

### DropdownMenuCheckboxItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes |
| `checked` | `boolean` | `false` | Whether the checkbox is checked |
| `onCheckedChange` | `(checked: boolean) => void` | `undefined` | Callback when checked state changes |
| `disabled` | `boolean` | `false` | Whether the item is disabled |
| `children` | `ReactNode` | Required | The content of the checkbox item |
| `...props` | `DropdownMenuCheckboxItemProps` | | All other properties passed to the Radix UI checkbox item component |

### DropdownMenuRadioItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes |
| `value` | `string` | Required | Value of this radio item |
| `disabled` | `boolean` | `false` | Whether the item is disabled |
| `children` | `ReactNode` | Required | The content of the radio item |
| `...props` | `DropdownMenuRadioItemProps` | | All other properties passed to the Radix UI radio item component |

### DropdownMenuRadioGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `undefined` | Current value of the radio group |
| `onValueChange` | `(value: string) => void` | `undefined` | Callback when value changes |
| `children` | `ReactNode` | Required | The radio items |

### DropdownMenuLabel Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes |
| `inset` | `boolean` | `false` | Indents the label to align with checkbox/radio items |
| `children` | `ReactNode` | Required | The content of the label |
| `...props` | `DropdownMenuLabelProps` | | All other properties passed to the Radix UI label component |

### DropdownMenuSeparator Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes |
| `...props` | `DropdownMenuSeparatorProps` | | All other properties passed to the Radix UI separator component |

### DropdownMenuShortcut Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes |
| `children` | `ReactNode` | Required | The shortcut text (e.g., "⌘S") |
| `...props` | `HTMLAttributes<HTMLSpanElement>` | | All other properties passed to the underlying span element |

## TypeScript

```tsx
import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

// Basic DropdownMenu props
type DropdownMenuProps = React.ComponentProps<typeof DropdownMenuPrimitive.Root>;

// DropdownMenuTrigger props
type DropdownMenuTriggerProps = React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>;

// DropdownMenuContent props
type DropdownMenuContentProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>;

// DropdownMenuItem props with optional inset property
type DropdownMenuItemProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
};

// DropdownMenuCheckboxItem props
type DropdownMenuCheckboxItemProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>;

// DropdownMenuRadioItem props
type DropdownMenuRadioItemProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>;

// DropdownMenuRadioGroup props
type DropdownMenuRadioGroupProps = React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>;

// DropdownMenuLabel props with optional inset property
type DropdownMenuLabelProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
};

// DropdownMenuSeparator props
type DropdownMenuSeparatorProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;

// DropdownMenuShortcut props (custom component)
type DropdownMenuShortcutProps = React.HTMLAttributes<HTMLSpanElement>;

// DropdownMenuSubTrigger props with optional inset property
type DropdownMenuSubTriggerProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
};

// DropdownMenuSubContent props
type DropdownMenuSubContentProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>;
```

## Customization

### Style Overrides

The DropdownMenu component can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes to each sub-component:

```tsx
<DropdownMenu>
  <DropdownMenuTrigger className="font-medium bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md">
    Custom Trigger
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-64 bg-zinc-50 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700">
    <DropdownMenuItem className="hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer">
      Custom Styled Item
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

2. Customizing the position and alignment:

```tsx
<DropdownMenu>
  <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
  <DropdownMenuContent align="end" sideOffset={8} alignOffset={8}>
    {/* Content aligned to the end with custom offsets */}
    <DropdownMenuItem>Aligned to End</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Extending the Component

```tsx
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

interface UserDropdownProps {
  username: string;
  userRole: string;
  avatarUrl?: string;
  onProfileClick: () => void;
  onSettingsClick: () => void;
  onLogoutClick: () => void;
}

export function UserDropdown({
  username,
  userRole,
  avatarUrl,
  onProfileClick,
  onSettingsClick,
  onLogoutClick
}: UserDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          {avatarUrl ? (
            <img src={avatarUrl} alt={username} className="h-8 w-8 rounded-full" />
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
              {username.charAt(0).toUpperCase()}
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <div className="flex flex-col space-y-1 p-2">
          <p className="text-sm font-medium">{username}</p>
          <p className="text-xs text-muted-foreground">{userRole}</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onProfileClick}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onSettingsClick}>
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          className="text-red-500 focus:bg-red-50 dark:focus:bg-red-950/50"
          onClick={onLogoutClick}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

## Examples

### Integration with Forms

```tsx
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/Form';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const formSchema = z.object({
  theme: z.enum(['light', 'dark', 'system'], {
    required_error: "Please select a theme",
  }),
});

export function ThemeSelector() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      theme: 'system',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Apply theme logic
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="theme"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Theme</FormLabel>
              <FormControl>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      {field.value.charAt(0).toUpperCase() + field.value.slice(1)}
                      <span className="sr-only">Toggle theme menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full min-w-[200px]">
                    <DropdownMenuRadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save preferences</Button>
      </form>
    </Form>
  );
}
```

### Integration with Other Components

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';

export function ProjectCard({ project }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {project.name}
        </CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => window.location.href = `/projects/${project.id}`}>
              View
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => window.location.href = `/projects/${project.id}/edit`}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className="text-red-500 focus:bg-red-50 dark:focus:bg-red-950/50"
              onClick={() => alert(`Delete ${project.name}`)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">{project.description}</p>
        <div className="mt-4 text-2xl font-bold">{project.stats.value}</div>
        <p className="text-xs text-muted-foreground">{project.stats.label}</p>
      </CardContent>
    </Card>
  );
}
```

### Responsive Behavior

The DropdownMenu component adapts to different screen sizes automatically, but you can enhance its behavior on specific devices:

```tsx
<DropdownMenu>
  <DropdownMenuTrigger className="hidden md:flex">
    Desktop Menu
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-40 md:w-56 lg:w-64">
    <DropdownMenuItem className="hidden md:flex">
      Desktop-only Option
    </DropdownMenuItem>
    <DropdownMenuItem>
      Responsive Option
    </DropdownMenuItem>
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
      <DropdownMenuSubContent className="w-32 md:w-48">
        <DropdownMenuItem className="text-xs md:text-sm">
          Responsive submenu option
        </DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>
```

The responsive behavior includes:

- **Mobile**: Smaller width dropdown with appropriate text and spacing
- **Tablet**: Medium width dropdown with standard text size
- **Desktop**: Full-featured dropdown with all options visible

## Accessibility

The DropdownMenu component follows these accessibility best practices:

- Uses the [WAI-ARIA menu pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) for proper accessibility
- Implements keyboard navigation for all menu items and submenus
- Supports arrow key navigation (up/down to navigate, right to enter a submenu, left to close a submenu)
- Allows escape key to close menus and submenus
- Manages focus properly when opening and closing menus
- Provides proper ARIA roles, states, and properties
- Includes proper contrast ratios for all elements and states
- Uses Radix UI's primitives which prioritize accessibility
- Supports screen readers with proper labeling
- Handles disabled states appropriately for menu items
- Manages menu positioning based on available viewport space

## Implementation Details

The component:

- Is built on Radix UI's DropdownMenu primitive for robust accessibility
- Uses portals to render menu content outside the DOM hierarchy to avoid clipping
- Applies consistent styling with Tailwind CSS
- Handles animations for opening/closing with proper transitions
- Supports submenus with proper nesting and transitions
- Includes specialized item types (checkbox, radio) with correct indicators
- Supports controlled and uncontrolled usage patterns
- Uses the `inset` prop to align items with different indentation needs
- Adds keyboard shortcut display support via the DropdownMenuShortcut component
- Is configured for appropriate z-index layering to work well with other overlay components

## Common Pitfalls

- **Event propagation**: Use `onSelect={(e) => e.preventDefault()}` when you need to prevent menu closing on item click
- **Form integration**: When using within forms, ensure proper state management to avoid form submission on menu item selection
- **Controlled state**: When using controlled open state, ensure you handle state updates properly to avoid the dropdown being stuck
- **Portal conflicts**: If using multiple dropdown menus or other portaled components close to each other, z-index conflicts might occur
- **Responsive design**: Be cautious with very wide dropdown content on mobile screens, as it might extend beyond the viewport
- **Nesting depth**: Avoid deeply nested submenus as they can create poor user experience, especially on mobile
- **Animation performance**: Complex animations in dropdown menus can cause performance issues on lower-end devices
- **Server components**: The DropdownMenu component uses client-side features and must be used within client components (note the 'use client' directive)

## Testing

```tsx
// Example test for the DropdownMenu component
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';

describe('DropdownMenu', () => {
  it('opens the dropdown when trigger is clicked', async () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    
    // Trigger is visible and menu is not initially
    expect(screen.getByText('Open Menu')).toBeInTheDocument();
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
    
    // Click trigger to open menu
    await userEvent.click(screen.getByText('Open Menu'));
    
    // Menu items should now be visible
    await waitFor(() => {
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });
  });
  
  it('calls onSelect when menu item is clicked', async () => {
    const handleSelect = jest.fn();
    
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={handleSelect}>
            Clickable Item
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    
    // Open the menu
    await userEvent.click(screen.getByText('Open Menu'));
    
    // Click the menu item
    await waitFor(() => {
      expect(screen.getByText('Clickable Item')).toBeInTheDocument();
    });
    await userEvent.click(screen.getByText('Clickable Item'));
    
    // Check if handler was called
    expect(handleSelect).toHaveBeenCalledTimes(1);
  });
  
  it('supports checkbox items with checked states', async () => {
    const handleCheckedChange = jest.fn();
    
    function TestComponent() {
      const [checked, setChecked] = React.useState(false);
      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem
              checked={checked}
              onCheckedChange={(value) => {
                setChecked(value);
                handleCheckedChange(value);
              }}
            >
              Toggle Option
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    
    render(<TestComponent />);
    
    // Open the menu
    await userEvent.click(screen.getByText('Open Menu'));
    
    // Click the checkbox item
    await waitFor(() => {
      expect(screen.getByText('Toggle Option')).toBeInTheDocument();
    });
    await userEvent.click(screen.getByText('Toggle Option'));
    
    // Check if handler was called with true
    expect(handleCheckedChange).toHaveBeenCalledWith(true);
  });
});
```

## Related Components

- [NavigationMenu](./navigation-menu.md): For main navigation with link-based navigation patterns
- [Select](./select.md): For selecting a single value from a list of options
- [Dialog](./dialog.md): For displaying content that requires user interaction in a modal
- [Popover](./popover.md): For displaying floating content that doesn't close when interacting with other parts of the page
- [ContextMenu](./context-menu.md): Similar to DropdownMenu but triggered by right-click instead of a button
