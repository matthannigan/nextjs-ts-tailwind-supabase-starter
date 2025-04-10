---
sidebar_label: Search Input
---

# SearchInput Component

A compound component that combines an input field with a search icon and an optional search button for performing search operations in a form-like interface.

## Import

```tsx
import { SearchInput } from '@/components/ui/search-input';
```

## Usage

### Basic Usage

```tsx
<SearchInput onSearch={(value) => console.log(`Searching for: ${value}`)} />
```

### Without Button

```tsx
<SearchInput 
  onSearch={(value) => console.log(`Searching for: ${value}`)} 
  showButton={false} 
/>
```

### Custom Placeholder and Button Text

```tsx
<SearchInput 
  placeholder="Find products..." 
  buttonText="Find"
  onSearch={(value) => console.log(`Finding products: ${value}`)} 
/>
```

### With Custom Styling

```tsx
<SearchInput 
  className="max-w-md bg-slate-50 p-2 rounded-lg"
  onSearch={(value) => console.log(`Searching for: ${value}`)} 
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onSearch` | `(value: string) => void` | `undefined` | Function called when the search form is submitted |
| `placeholder` | `string` | `'Search...'` | Placeholder text for the search input |
| `className` | `string` | `undefined` | Additional CSS classes to apply to the form container |
| `buttonText` | `string` | `'Search'` | Text to display on the search button |
| `showButton` | `boolean` | `true` | Whether to show the search button |

Additionally, the component accepts all standard form HTML attributes since it extends `HTMLAttributes<HTMLFormElement>`.

## TypeScript

```tsx
interface SearchInputProps extends HTMLAttributes<HTMLFormElement> {
  onSearch?: (value: string) => void;
  placeholder?: string;
  className?: string;
  buttonText?: string;
  showButton?: boolean;
}
```

## Customization

### Style Overrides

The component can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes to the form container
2. Customizing the appearance of the button by modifying the `button.tsx` component
3. Customizing the appearance of the input by modifying the `input.tsx` component

### Extending the Component

```tsx
import { SearchInput } from '@/components/ui/search-input';

export function CustomSearchInput({ withIcon = true, ...props }) {
  return (
    <div className="my-custom-container">
      <h4 className="text-sm font-medium mb-2">Search</h4>
      <SearchInput 
        {...props} 
        className={`bg-gray-50 ${props.className || ''}`}
      />
      {withIcon && (
        <div className="mt-2 text-xs text-gray-500">
          Click the search button or press Enter to search
        </div>
      )}
    </div>
  );
}
```

## Examples

### Integration with React Hook Form

```tsx
import { useForm } from 'react-hook-form';
import { SearchInput } from '@/components/ui/search-input';

export function SearchForm() {
  const { handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="searchField" className="text-sm font-medium">
          Search Products
        </label>
        <SearchInput 
          id="searchField"
          onSearch={(value) => console.log(`Searching for: ${value}`)}
          showButton={false}
        />
      </div>
      <button type="submit" className="w-full">Submit Form</button>
    </form>
  );
}
```

### Integration with Other Components

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { SearchInput } from '@/components/ui/search-input';

export function SearchCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Search</CardTitle>
      </CardHeader>
      <CardContent>
        <SearchInput 
          onSearch={(value) => console.log(`Searching for: ${value}`)}
          placeholder="Find products by name..."
        />
      </CardContent>
    </Card>
  );
}
```

### Responsive Behavior

The SearchInput component automatically adapts to different screen sizes:

- **Mobile**: The input field takes up the full width, and the button (if shown) is attached to the right side.
- **Tablet/Desktop**: Maintains the same layout but benefits from larger screen space.

The component uses responsive text size with `text-base` on mobile and `text-sm` on medium screens and above, as inherited from the Input component.

## Accessibility

The component follows these accessibility best practices:

- Uses semantic HTML with proper form elements
- Input has a proper placeholder
- Button has a descriptive label
- Focus states are visible via the input's focus styles
- Form submission can be triggered by pressing Enter
- Search icon provides visual indication of the input's purpose

## Implementation Details

The component:

- Uses the Lucide `Search` icon for visual indication
- Maintains internal state for the input value
- Combines shadcn/ui's `Input` and `Button` components
- Provides a form element that handles the submission event
- Uses a ref to potentially focus the input (though this functionality is not currently used in the implementation)
- Properly handles form submission to prevent page reload

## Common Pitfalls

- **Not Handling the onSearch Callback**: Make sure to implement the `onSearch` prop to process the search value when the form is submitted.
- **CSS Conflicts with Parent Containers**: The component uses `w-full` for the input, so ensure parent containers appropriately constrain the width if needed.
- **Button Style Conflicts**: If you're customizing button styles globally, be aware this might affect the search button's appearance.
- **Using with Form Libraries**: When using inside react-hook-form, you may need to handle the form submission differently, as the component manages its own input state.

## Testing

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchInput } from '@/components/ui/search-input';

describe('SearchInput', () => {
  it('renders correctly with default props', () => {
    render(<SearchInput />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });
  
  it('calls onSearch when the form is submitted', async () => {
    const handleSearch = jest.fn();
    render(<SearchInput onSearch={handleSearch} />);
    
    const input = screen.getByPlaceholderText('Search...');
    await userEvent.type(input, 'test query');
    
    const button = screen.getByRole('button', { name: 'Search' });
    await userEvent.click(button);
    
    expect(handleSearch).toHaveBeenCalledWith('test query');
  });
  
  it('renders without button when showButton is false', () => {
    render(<SearchInput showButton={false} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
  
  it('uses custom placeholder and button text', () => {
    render(<SearchInput placeholder="Find items..." buttonText="Find" />);
    expect(screen.getByPlaceholderText('Find items...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Find' })).toBeInTheDocument();
  });
  
  it('submits on pressing Enter', async () => {
    const handleSearch = jest.fn();
    render(<SearchInput onSearch={handleSearch} />);
    
    const input = screen.getByPlaceholderText('Search...');
    await userEvent.type(input, 'test query{enter}');
    
    expect(handleSearch).toHaveBeenCalledWith('test query');
  });
});
```

## Related Components

- [Input](../forms/input.md): The base input component used within SearchInput.
- [Button](./button.md): The button component used for the search action.
- [Form](../forms/form.md): For more complex form handling that might incorporate the SearchInput.