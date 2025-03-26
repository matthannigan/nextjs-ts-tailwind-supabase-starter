---
sidebar_label: Form
---

# Form Component

A comprehensive, accessible form handling component that wraps react-hook-form and provides a structured approach to building and validating forms in your application.

## Import

```tsx
import { 
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage 
} from '@/components/ui/form';
```

## Usage

The Form component works with react-hook-form to manage form state and validation. It integrates well with validation libraries like Zod.

### Basic Usage

```tsx
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

### Using with Multiple Fields and Different Input Types

```tsx
const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  bio: z.string().max(160).optional(),
  notifications: z.boolean().default(false),
})

export function SettingsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      bio: "",
      notifications: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
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
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us about yourself" {...field} />
              </FormControl>
              <FormDescription>
                Max 160 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="notifications"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Enable notifications</FormLabel>
                <FormDescription>
                  Receive email notifications for important updates.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        
        <Button type="submit">Save changes</Button>
      </form>
    </Form>
  )
}
```

## Components

The Form component is a collection of several sub-components that work together:

### Form

The root component that wraps around react-hook-form's `FormProvider`.

### FormField

A wrapper around react-hook-form's `Controller` that provides context for form fields.

### FormItem

A container for individual form fields that provides proper spacing and layout.

### FormLabel

A label component that's automatically associated with its corresponding form control.

### FormControl

A component that provides the proper accessibility attributes to form inputs.

### FormDescription

A description component for providing additional information about a form field.

### FormMessage

A component for displaying validation error messages.

## Props

### Form

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `...props` | `UseFormReturn<TFieldValues, TContext>` | - | The return value from the `useForm` hook |

### FormField

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `control` | `Control<TFieldValues>` | Required | The form control from react-hook-form |
| `name` | `FieldPath<TFieldValues>` | Required | The name of the form field |
| `render` | `({ field, fieldState, formState }) => React.ReactElement` | Required | A render function that provides access to the field props |

### FormItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Optional additional CSS classes |
| `...props` | `HTMLAttributes<HTMLDivElement>` | - | HTML div attributes |

### FormLabel

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Optional additional CSS classes |
| `...props` | `ComponentPropsWithoutRef<typeof LabelPrimitive.Root>` | - | Radix UI Label props |

### FormControl

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `...props` | `ComponentPropsWithoutRef<typeof Slot>` | - | Radix UI Slot props |

### FormDescription

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Optional additional CSS classes |
| `...props` | `HTMLAttributes<HTMLParagraphElement>` | - | HTML paragraph attributes |

### FormMessage

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Optional additional CSS classes |
| `children` | `ReactNode` | - | Optional content to display when there's no error |
| `...props` | `HTMLAttributes<HTMLParagraphElement>` | - | HTML paragraph attributes |

## TypeScript

```tsx
// Form Field Context Type
type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

// Form Item Context Type
type FormItemContextValue = {
  id: string
}

// useFormField Return Type
type FormFieldInfo = {
  id: string;
  name: string;
  formItemId: string;
  formDescriptionId: string;
  formMessageId: string;
  error?: FieldError;
  isDirty: boolean;
  isTouched: boolean;
}
```

## Customization

### Style Overrides

All form components accept a `className` prop that allows you to add additional Tailwind CSS classes:

```tsx
<FormItem className="grid grid-cols-4 items-start gap-4">
  <FormLabel className="mt-2 text-right">Username</FormLabel>
  <div className="col-span-3">
    <FormControl>
      <Input {...field} />
    </FormControl>
    <FormDescription className="text-xs">
      Your public display name.
    </FormDescription>
    <FormMessage className="text-xs font-bold" />
  </div>
</FormItem>
```

### Creating Custom Form Controls

You can easily create custom form controls by wrapping them with `FormControl`:

```tsx
<FormField
  control={form.control}
  name="amount"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Amount</FormLabel>
      <FormControl>
        <div className="relative">
          <span className="absolute left-2 top-2">$</span>
          <Input 
            className="pl-6" 
            type="number" 
            {...field} 
            onChange={(e) => field.onChange(parseFloat(e.target.value))}
          />
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
```

## Examples

### Integration with Select Component

```tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

<FormField
  control={form.control}
  name="country"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Country</FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  )}
/>
```

### Using with Supabase

```tsx
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export function LoginForm() {
  const router = useRouter()
  const supabase = createClientComponentClient()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      })
      
      if (error) {
        form.setError("root", { message: error.message })
        return
      }
      
      router.push("/dashboard")
      router.refresh()
    } catch (error) {
      console.error(error)
      form.setError("root", { message: "An unexpected error occurred" })
    }
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
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
        {form.formState.errors.root && (
          <p className="text-sm font-medium text-destructive">
            {form.formState.errors.root.message}
          </p>
        )}
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Logging in..." : "Log in"}
        </Button>
      </form>
    </Form>
  )
}
```

### Responsive Behavior

The Form components are designed to be responsive by default and can be customized with Tailwind's responsive classes:

```tsx
<FormItem className="sm:grid sm:grid-cols-4 sm:items-start sm:gap-4">
  <FormLabel className="sm:text-right sm:mt-1">Name</FormLabel>
  <div className="sm:col-span-3 sm:mt-0 mt-1">
    <FormControl>
      <Input {...field} />
    </FormControl>
    <FormMessage />
  </div>
</FormItem>
```

## Accessibility

The Form components follow these accessibility best practices:

- FormLabel is properly associated with its corresponding form control using the `htmlFor` attribute
- FormControl adds appropriate ARIA attributes to form inputs (aria-describedby, aria-invalid)
- Error messages are properly linked to inputs using IDs
- Form descriptions are properly associated with inputs using IDs
- Error states are properly indicated visually with color changes and programmatically with aria-invalid

## Implementation Details

The Form component:

- Uses React Context to provide communication between nested form components
- Leverages react-hook-form for state management and validation
- Uses Radix UI's Slot component to enable passing props to arbitrary components
- Generates unique IDs automatically using React's useId hook
- Handles error states and messages automatically

## Common Pitfalls

- **Missing Control Prop**: Always make sure to pass the form.control to FormField, otherwise the form will not be properly controlled.
- **Using Without Field Render Function**: The render function is required for FormField to work properly.
- **Forgetting FormControl**: Always wrap your input components with FormControl to ensure proper accessibility.
- **Not Providing Default Values**: Since FormField uses a controlled component approach, you should provide default values for all fields in your form.
- **Validation Errors Not Showing**: Make sure you've included the FormMessage component in your FormItem.

## Testing

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  username: z.string().min(2),
});

function TestForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} data-testid="username-input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

describe('Form', () => {
  it('renders form elements correctly', () => {
    render(<TestForm />);
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByTestId('username-input')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });
  
  it('shows validation error for too short username', async () => {
    render(<TestForm />);
    const user = userEvent.setup();
    
    await user.type(screen.getByTestId('username-input'), 'a');
    await user.click(screen.getByRole('button', { name: /submit/i }));
    
    // Wait for the validation error to appear
    expect(await screen.findByText(/must be at least 2/i)).toBeInTheDocument();
  });
});
```

## Related Components

- [Input](./input.md): Text input component that works with FormControl
- [Select](./select.md): Selection input component that works with FormControl
- [Checkbox](./checkbox.md): Toggle input component that works with FormControl
- [RadioGroup](./radio-group.md): Radio button group component that works with FormControl
- [Textarea](./textarea.md): Multi-line text input component that works with FormControl
- [Button](./button.md): Button component typically used for form submission