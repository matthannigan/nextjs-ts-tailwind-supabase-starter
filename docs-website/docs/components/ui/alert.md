# Alert Component

A versatile notification component used to display important information, warnings, or error messages with customizable styles and content structure.

## Import

```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
```

## Usage

### Basic Usage

```tsx
<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the CLI.
  </AlertDescription>
</Alert>
```

### Default Variant

```tsx
<Alert variant="default">
  <AlertTitle>Note</AlertTitle>
  <AlertDescription>
    This is a default alert to provide information to the user.
  </AlertDescription>
</Alert>
```

### Destructive Variant

```tsx
<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again to continue.
  </AlertDescription>
</Alert>
```

### With Icon

```tsx
import { AlertCircle } from 'lucide-react';

<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Important Update</AlertTitle>
  <AlertDescription>
    A new version of the application is available. Please refresh the page.
  </AlertDescription>
</Alert>
```

## Props

### Alert Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'destructive'` | `'default'` | Controls the visual style of the alert |
| `className` | `string` | `undefined` | Additional CSS classes to apply to the alert |
| `children` | `ReactNode` | Required | Content to display inside the alert |
| `...props` | `HTMLAttributes<HTMLDivElement>` | - | All other props are passed to the underlying div element |

### AlertTitle Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes to apply to the title |
| `children` | `ReactNode` | Required | Content to display as the alert title |
| `...props` | `HTMLAttributes<HTMLHeadingElement>` | - | All other props are passed to the underlying h5 element |

### AlertDescription Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes to apply to the description |
| `children` | `ReactNode` | Required | Content to display as the alert description |
| `...props` | `HTMLAttributes<HTMLParagraphElement>` | - | All other props are passed to the underlying div element |

## TypeScript

```tsx
import { VariantProps } from 'class-variance-authority';
import * as React from 'react';

// Alert Variants
const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Alert Component Props
type AlertProps = React.HTMLAttributes<HTMLDivElement> & 
  VariantProps<typeof alertVariants>;

// AlertTitle Component Props
type AlertTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

// AlertDescription Component Props
type AlertDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
```

## Customization

### Style Overrides

The Alert component can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes:

```tsx
<Alert className="border-blue-500 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
  <AlertTitle className="text-blue-800 dark:text-blue-300">Information</AlertTitle>
  <AlertDescription className="text-blue-600 dark:text-blue-400">
    This alert has custom colors using Tailwind CSS classes.
  </AlertDescription>
</Alert>
```

2. Using custom icons with proper positioning:

```tsx
import { Info, AlertTriangle, CheckCircle } from 'lucide-react';

<Alert>
  <Info className="h-4 w-4 text-blue-500" />
  <AlertTitle>Information Alert</AlertTitle>
  <AlertDescription>With a blue info icon.</AlertDescription>
</Alert>
```

### Extending the Component

```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, AlertTriangle, Info, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type StatusAlertProps = React.ComponentProps<typeof Alert> & {
  status: 'success' | 'warning' | 'info' | 'error';
  title?: string;
};

export function StatusAlert({ 
  status, 
  title, 
  children, 
  className, 
  ...props 
}: StatusAlertProps) {
  const icons = {
    success: CheckCircle,
    warning: AlertTriangle,
    info: Info,
    error: AlertCircle
  };

  const variants = {
    success: "border-green-500/50 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950/50 dark:text-green-300",
    warning: "border-yellow-500/50 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950/50 dark:text-yellow-300",
    info: "border-blue-500/50 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300",
    error: "border-red-500/50 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950/50 dark:text-red-300"
  };

  const IconComponent = icons[status];

  return (
    <Alert 
      className={cn(variants[status], className)} 
      {...props}
    >
      <IconComponent className="h-4 w-4" />
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export function LoginForm() {
  const [formError, setFormError] = useState<string | null>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Form submission logic
      console.log(values);
    } catch (error) {
      setFormError("Login failed. Please check your credentials and try again.");
    }
  }

  return (
    <Form {...form}>
      {formError && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{formError}</AlertDescription>
        </Alert>
      )}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
}
```

### Integration with Other Components

```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

export function SettingsCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <Settings className="h-4 w-4" />
          <AlertTitle>Privacy Notice</AlertTitle>
          <AlertDescription>
            We've updated our privacy policy. Please review the changes before continuing.
          </AlertDescription>
        </Alert>
        
        {/* Settings form fields would go here */}
        
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  );
}
```

### Responsive Behavior

The Alert component is responsive by default and adapts to the container's width. You can enhance its behavior on different screen sizes using Tailwind's responsive modifiers:

```tsx
<Alert className="p-3 md:p-4 lg:p-6">
  <AlertTitle className="text-sm md:text-base lg:text-lg">
    Responsive Alert
  </AlertTitle>
  <AlertDescription className="text-xs md:text-sm lg:text-base">
    This alert adjusts its padding and text size based on the screen size.
  </AlertDescription>
</Alert>
```

The responsive behavior includes:

- **Mobile**: Compact padding and smaller text for space efficiency
- **Tablet**: Standard padding and medium text size
- **Desktop**: More generous padding and larger text for better readability

## Accessibility

The Alert component follows these accessibility best practices:

- Uses the appropriate `role="alert"` attribute for screen reader announcements
- Provides a semantic structure with title and description
- Maintains proper color contrast ratios in both light and dark modes
- Supports icons with appropriate sizing and positioning
- Uses semantic HTML for title (h5) and description elements
- Ensures text remains readable when customized with different colors
- Has proper spacing for readability and scannability
- Can be dismissed or interacted with using keyboard navigation when combined with interactive elements

## Implementation Details

The component:

- Is built using a React.forwardRef to properly forward refs to the underlying div element
- Uses class-variance-authority (cva) to manage component variants
- Applies Tailwind CSS for styling with consistent design tokens
- Has special CSS selectors to handle icon positioning and spacing
- Supports both light and dark modes through the Tailwind CSS theme
- Uses the `cn` utility function to merge default variant styles with custom className props
- Includes proper display names for better debugging
- Implements a semantic structure with AlertTitle and AlertDescription sub-components
- Handles icon positioning automatically when an icon is provided as a child

## Common Pitfalls

- **Missing role attribute**: The component includes `role="alert"` by default, but if implementing a custom alert component, ensure this attribute is preserved for accessibility.
- **Contrast issues**: When customizing colors, especially for the destructive variant, ensure sufficient contrast between text and background.
- **Icon positioning**: When using icons, they should be placed as direct children of the Alert component, not within AlertTitle or AlertDescription, to leverage the automatic positioning styles.
- **Overriding styles**: Be cautious when applying custom background colors that may affect the visibility of text or icons.
- **Alert fatigue**: Avoid overusing alerts, especially the destructive variant, to prevent alert fatigue. Use them only for important information.
- **Mobile considerations**: On small screens, ensure alerts don't take up too much vertical space and remain readable.

## Testing

```tsx
// Example test for the Alert component
import { render, screen } from '@testing-library/react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

describe('Alert', () => {
  it('renders correctly with title and description', () => {
    render(
      <Alert>
        <AlertTitle>Test Title</AlertTitle>
        <AlertDescription>Test Description</AlertDescription>
      </Alert>
    );
    
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });
  
  it('applies the correct variant class', () => {
    const { rerender } = render(
      <Alert data-testid="alert">
        <AlertDescription>Default variant</AlertDescription>
      </Alert>
    );
    
    expect(screen.getByTestId('alert')).toHaveClass('bg-background');
    
    rerender(
      <Alert variant="destructive" data-testid="alert">
        <AlertDescription>Destructive variant</AlertDescription>
      </Alert>
    );
    
    expect(screen.getByTestId('alert')).toHaveClass('border-destructive/50');
  });
  
  it('renders with an icon and positions it correctly', () => {
    render(
      <Alert>
        <AlertCircle data-testid="icon" className="h-4 w-4" />
        <AlertTitle>With Icon</AlertTitle>
        <AlertDescription>Description with icon</AlertDescription>
      </Alert>
    );
    
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
    
    // Check that icon positioning styles are applied to the container
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('[&>svg]:absolute');
  });
  
  it('applies custom className correctly', () => {
    render(
      <Alert className="test-class" data-testid="custom-alert">
        <AlertDescription>Custom class alert</AlertDescription>
      </Alert>
    );
    
    const alert = screen.getByTestId('custom-alert');
    expect(alert).toHaveClass('test-class');
  });
});
```

## Related Components

- [Toast](./toast.md): For temporary notifications that appear and disappear automatically
- [AlertDialog](./alert-dialog.md): For confirmation dialogs that interrupt the user
- [Card](./card.md): For containing related information, can be used with Alert for status updates
- [Banner](./banner.md): For site-wide messaging positioned at the top or bottom of the screen
