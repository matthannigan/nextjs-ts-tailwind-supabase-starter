---
sidebar_label: Tabs
---

# Tabs Component

A set of layered sections of content—known as tab panels—that are displayed one at a time, providing an intuitive way to organize and navigate through related content within a limited space.

## Import

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
```

## Usage

### Basic Usage

```tsx
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p>Account tab content</p>
  </TabsContent>
  <TabsContent value="password">
    <p>Password tab content</p>
  </TabsContent>
</Tabs>
```

### Controlled Tabs

```tsx
import { useState } from 'react';

function ControlledTabs() {
  const [activeTab, setActiveTab] = useState('account');
  
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p>Account tab content</p>
      </TabsContent>
      <TabsContent value="password">
        <p>Password tab content</p>
      </TabsContent>
    </Tabs>
  );
}
```

### Disabled Tabs

```tsx
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="settings" disabled>Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p>Account tab content</p>
  </TabsContent>
  <TabsContent value="password">
    <p>Password tab content</p>
  </TabsContent>
  <TabsContent value="settings">
    <p>Settings tab content</p>
  </TabsContent>
</Tabs>
```

## Props

### Tabs

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | The controlled value of the tab to activate. Used when controlling the component. |
| `defaultValue` | `string` | - | The value of the tab that should be active when initially rendered. Use when not controlling the component. |
| `onValueChange` | `(value: string) => void` | - | Callback invoked when a tab is selected. |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the component. |
| `dir` | `'ltr' \| 'rtl'` | `'ltr'` | The reading direction of the tabs. |
| `activationMode` | `'automatic' \| 'manual'` | `'automatic'` | Whether tabs are activated automatically on click or manually through arrow keys. |

### TabsList

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `loop` | `boolean` | `true` | When `true`, keyboard navigation will loop from the last tab to the first and vice versa. |
| `className` | `string` | - | Additional class names for custom styling. |

### TabsTrigger

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | Required | A unique value that associates the trigger with a content panel. |
| `disabled` | `boolean` | `false` | When `true`, prevents the user from interacting with the tab. |
| `className` | `string` | - | Additional class names for custom styling. |

### TabsContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | Required | A unique value that associates the content with a trigger. |
| `forceMount` | `boolean` | `false` | Force mounting content when `true`. Useful when controlling animations with React animation libraries. |
| `className` | `string` | - | Additional class names for custom styling. |

## TypeScript

```tsx
// Component Type Definitions from Radix UI
import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

// Usage example with TypeScript
interface TabData {
  value: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

function TypedTabs({ tabs }: { tabs: TabData[] }) {
  return (
    <Tabs defaultValue={tabs[0]?.value}>
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger 
            key={tab.value} 
            value={tab.value}
            disabled={tab.disabled}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
```

## Customization

### Style Overrides

The component can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes to any component
2. Modifying the component styles directly in the source file
3. Using CSS variables for theming

```tsx
// Custom styled tabs
<Tabs defaultValue="account">
  <TabsList className="grid w-full grid-cols-2 bg-gray-100 rounded-xl p-1">
    <TabsTrigger 
      value="account" 
      className="data-[state=active]:bg-white data-[state=active]:text-primary rounded-lg"
    >
      Account
    </TabsTrigger>
    <TabsTrigger 
      value="password"
      className="data-[state=active]:bg-white data-[state=active]:text-primary rounded-lg"
    >
      Password
    </TabsTrigger>
  </TabsList>
  <TabsContent value="account" className="mt-6 p-4 bg-white rounded-lg">
    <p>Account tab content</p>
  </TabsContent>
  <TabsContent value="password" className="mt-6 p-4 bg-white rounded-lg">
    <p>Password tab content</p>
  </TabsContent>
</Tabs>
```

### Extending the Component

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export function IconTabs() {
  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="profile" className="flex items-center gap-2">
          <UserIcon className="h-4 w-4" />
          <span>Profile</span>
        </TabsTrigger>
        <TabsTrigger value="dashboard" className="flex items-center gap-2">
          <LayoutDashboardIcon className="h-4 w-4" />
          <span>Dashboard</span>
        </TabsTrigger>
        <TabsTrigger value="settings" className="flex items-center gap-2">
          <SettingsIcon className="h-4 w-4" />
          <span>Settings</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile">Profile content</TabsContent>
      <TabsContent value="dashboard">Dashboard content</TabsContent>
      <TabsContent value="settings">Settings content</TabsContent>
    </Tabs>
  );
}
```

## Examples

### Integration with Forms

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const userFormSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8)
});

type UserFormValues = z.infer<typeof userFormSchema>;

export function UserSettingsForm() {
  const form = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  });
  
  function onSubmit(data: UserFormValues) {
    console.log(data);
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="space-y-4 pt-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter username" {...field} />
                  </FormControl>
                  <FormMessage />
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
                    <Input placeholder="Enter email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TabsContent>
          <TabsContent value="password" className="space-y-4 pt-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TabsContent>
        </Tabs>
        <Button type="submit">Save changes</Button>
      </form>
    </Form>
  );
}
```

### Integration with Other Components

```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function DashboardTabs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
        <CardDescription>View and manage your account details.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="pt-4">
            Overview content goes here...
          </TabsContent>
          <TabsContent value="analytics" className="pt-4">
            Analytics content goes here...
          </TabsContent>
          <TabsContent value="reports" className="pt-4">
            Reports content goes here...
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
```

### Responsive Behavior

The component responds to different screen sizes in the following ways:

- **Mobile**: On small screens, tabs can stack vertically by adding responsive classes:

```tsx
<TabsList className="flex-col sm:flex-row">
  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
</TabsList>
```

- **Tablet**: On medium screens, tabs can adjust their padding and sizing:

```tsx
<TabsList className="px-1 sm:px-2">
  <TabsTrigger className="px-2 py-1 sm:px-4 sm:py-2" value="tab1">
    Tab 1
  </TabsTrigger>
  <TabsTrigger className="px-2 py-1 sm:px-4 sm:py-2" value="tab2">
    Tab 2
  </TabsTrigger>
</TabsList>
```

- **Desktop**: On larger screens, tabs can expand to fill available space:

```tsx
<TabsList className="w-full md:w-auto">
  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
</TabsList>
```

For very long lists of tabs that might not fit on smaller screens, consider using overflow with horizontal scrolling:

```tsx
<TabsList className="w-full overflow-x-auto flex-nowrap">
  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  <TabsTrigger value="tab4">Tab 4</TabsTrigger>
  <TabsTrigger value="tab5">Tab 5</TabsTrigger>
</TabsList>
```

## Accessibility

The Tabs component follows the WAI-ARIA Tabs design pattern and includes the following accessibility features:

- **Proper ARIA Roles**: The component uses appropriate ARIA roles (`tablist`, `tab`, `tabpanel`) automatically.
- **Keyboard Navigation**:
  - `Tab` to focus on the active tab
  - `Arrow Left/Right` to navigate between tabs horizontally
  - `Arrow Up/Down` to navigate between tabs vertically (when using vertical orientation)
  - `Home/End` to navigate to the first/last tab
  - `Space/Enter` to activate the focused tab
- **Focus Management**: Focus is properly managed when switching tabs.
- **Screen Reader Announcements**: Tab selection changes are properly announced to screen readers.
- **State Management**: Active and disabled states are visually indicated and communicated to assistive technologies.

## Implementation Details

The component:

- Is built on top of Radix UI's accessible Tabs primitive
- Uses CSS transitions for smooth tab switching effects
- Leverages Tailwind CSS for styling with proper focus and hover states
- Supports both controlled and uncontrolled usage patterns
- Can be integrated with form libraries like react-hook-form
- Maintains content in the DOM even when not visible (hidden with CSS), which helps preserve state
- Can conditionally render tab content using the `forceMount` prop when needed for animations

## Common Pitfalls

- **Missing Values**: Ensure each `TabsTrigger` and `TabsContent` has a matching `value` prop, or tabs won't work correctly.
- **Controlled Component Issues**: When using controlled mode with `value` and `onValueChange`, make sure the state is correctly managed to avoid unexpected behavior.
- **Accessibility for Dynamic Tabs**: When generating tabs dynamically, ensure proper labeling and id references are maintained.
- **CSS Display Properties**: Avoid overriding the `display` property on tab components as it may break the layout and interactions.
- **Next.js Client Components**: Remember that Tabs uses client-side interactivity, so ensure you add the `'use client'` directive at the top of any file using the Tabs component.

## Testing

```tsx
// Example test for the Tabs component
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

describe('Tabs', () => {
  it('renders correctly with the default tab selected', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Tab 1 content</TabsContent>
        <TabsContent value="tab2">Tab 2 content</TabsContent>
      </Tabs>
    );
    
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Tab 1 content')).toBeInTheDocument();
    expect(screen.queryByText('Tab 2 content')).toBeInTheDocument();
  });
  
  it('switches tab when clicked', async () => {
    const user = userEvent.setup();
    
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Tab 1 content</TabsContent>
        <TabsContent value="tab2">Tab 2 content</TabsContent>
      </Tabs>
    );
    
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    await user.click(tab2);
    
    expect(tab2).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Tab 2 content')).toBeVisible();
  });
  
  it('respects the disabled state', async () => {
    const user = userEvent.setup();
    
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2" disabled>Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Tab 1 content</TabsContent>
        <TabsContent value="tab2">Tab 2 content</TabsContent>
      </Tabs>
    );
    
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    expect(tab2).toBeDisabled();
    
    await user.click(tab2);
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('aria-selected', 'true');
  });
});
```

## Related Components

- [Card](./card.md): Often used to contain tab components for a more structured UI
- [Form](../forms/form.md): Can be integrated with tabs for multi-step forms
- [Dialog](./dialog.md): Can contain tabs for organizing content in modal dialogs