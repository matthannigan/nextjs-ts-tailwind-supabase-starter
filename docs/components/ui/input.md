# Input Component

The Input component is a flexible and customizable form control for capturing user input with various states and styles.

## Import

```tsx
import Input from '@/components/ui/input';
```

## Usage

### Basic Input

```tsx
<Input placeholder="Enter your name" />
```

### With Label

```tsx
<Input 
  label="Email" 
  placeholder="example@email.com" 
  id="email-input"
/>
```

### With Helper Text

```tsx
<Input 
  label="Email" 
  placeholder="example@email.com" 
  helperText="We'll never share your email with anyone else." 
  id="email-input"
/>
```

### With Error State

```tsx
<Input 
  label="Password" 
  type="password" 
  error="Password must be at least 8 characters" 
  id="password-input"
/>
```

### Full Width

```tsx
<Input fullWidth placeholder="Full width input" />
```

### Disabled State

```tsx
<Input 
  label="Username" 
  disabled 
  value="johndoe" 
  placeholder="Enter username" 
/>
```

## Sizes

The Input component supports three different sizes:

```tsx
<Input inputSize="sm" placeholder="Small input" />
<Input inputSize="md" placeholder="Medium input" /> {/* Default */}
<Input inputSize="lg" placeholder="Large input" />
```

## Variants

The Input component supports three different visual styles:

```tsx
<Input variant="default" placeholder="Default variant" /> {/* Default */}
<Input variant="outlined" placeholder="Outlined variant" />
<Input variant="filled" placeholder="Filled variant" />
```

## Form Integration

The Input component can be easily integrated with form libraries like React Hook Form:

```tsx
import { useForm } from 'react-hook-form';

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        error={errors.email?.message}
        {...register('email', { required: 'Email is required' })}
      />
      <Input
        label="Password"
        type="password"
        error={errors.password?.message}
        {...register('password', { required: 'Password is required' })}
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `undefined` | Optional label text for the input |
| `helperText` | `string` | `undefined` | Optional helper text displayed below the input |
| `error` | `string` | `undefined` | Error message to display. Also changes the input border to red |
| `fullWidth` | `boolean` | `false` | Whether the input should take up the full width of its container |
| `inputSize` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the input |
| `variant` | `'default' \| 'outlined' \| 'filled'` | `'default'` | Visual style variant of the input |
| `disabled` | `boolean` | `false` | Whether the input is disabled |

The component also accepts all standard HTML input attributes like `type`, `placeholder`, `value`, `onChange`, etc.
