---
sidebar_label: Table
---

# Table Component

The Table component is a responsive and composable data display system that provides a structured way to present tabular information with support for headers, body, rows, cells, captions, and footers.

## Import

```tsx
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableFooter, 
  TableHead, 
  TableRow, 
  TableCell, 
  TableCaption 
} from '@/components/ui/table';
```

## Usage

### Basic Usage

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>Active</TableCell>
      <TableCell>Developer</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Jane Smith</TableCell>
      <TableCell>Inactive</TableCell>
      <TableCell>Designer</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### With Caption and Footer

```tsx
<Table>
  <TableCaption>Employee list with roles and status</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[200px]">Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">John Doe</TableCell>
      <TableCell>Active</TableCell>
      <TableCell className="text-right">Developer</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">Jane Smith</TableCell>
      <TableCell>Inactive</TableCell>
      <TableCell className="text-right">Designer</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell className="text-right">2 Employees</TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

### Customized Table with Selection

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[50px]">
        <input type="checkbox" aria-label="Select all" />
      </TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Role</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow data-state="selected">
      <TableCell>
        <input type="checkbox" aria-label="Select row" checked />
      </TableCell>
      <TableCell className="font-medium">John Doe</TableCell>
      <TableCell>Active</TableCell>
      <TableCell>Developer</TableCell>
      <TableCell className="text-right">
        <button className="text-blue-500 hover:underline">Edit</button>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <input type="checkbox" aria-label="Select row" />
      </TableCell>
      <TableCell className="font-medium">Jane Smith</TableCell>
      <TableCell>Inactive</TableCell>
      <TableCell>Designer</TableCell>
      <TableCell className="text-right">
        <button className="text-blue-500 hover:underline">Edit</button>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Props

### Table

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional classes to apply to the table |
| `...rest` | `React.HTMLAttributes<HTMLTableElement>` | - | All other props are passed to the underlying table element |

### TableHeader

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional classes to apply to the table header |
| `...rest` | `React.HTMLAttributes<HTMLTableSectionElement>` | - | All other props are passed to the underlying thead element |

### TableBody

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional classes to apply to the table body |
| `...rest` | `React.HTMLAttributes<HTMLTableSectionElement>` | - | All other props are passed to the underlying tbody element |

### TableFooter

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional classes to apply to the table footer |
| `...rest` | `React.HTMLAttributes<HTMLTableSectionElement>` | - | All other props are passed to the underlying tfoot element |

### TableRow

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional classes to apply to the table row |
| `...rest` | `React.HTMLAttributes<HTMLTableRowElement>` | - | All other props are passed to the underlying tr element |

### TableHead

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional classes to apply to the table head cell |
| `...rest` | `React.ThHTMLAttributes<HTMLTableCellElement>` | - | All other props are passed to the underlying th element |

### TableCell

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional classes to apply to the table cell |
| `...rest` | `React.TdHTMLAttributes<HTMLTableCellElement>` | - | All other props are passed to the underlying td element |

### TableCaption

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional classes to apply to the table caption |
| `...rest` | `React.HTMLAttributes<HTMLTableCaptionElement>` | - | All other props are passed to the underlying caption element |

## TypeScript

```tsx
// Component Type Definitions
interface TableProps extends React.HTMLAttributes<HTMLTableElement> {}

interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {}

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

interface TableCaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {}
```

## Customization

### Style Overrides

The table components can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes to any component
2. Extending the component with custom styles
3. Applying data attributes like `data-state="selected"` to TableRow for specific styling

```tsx
// Example of custom styling
<Table className="min-w-[800px] rounded-md border">
  <TableHeader className="bg-gray-100">
    <TableRow>
      <TableHead className="w-[100px] font-bold text-gray-700">ID</TableHead>
      <TableHead className="font-bold text-gray-700">Name</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="hover:bg-blue-50">
      <TableCell className="font-medium">1</TableCell>
      <TableCell>John Doe</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Extending the Component

```tsx
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

export function SortableTable({ data, columns, sortColumn, sortDirection, onSort, ...props }) {
  return (
    <Table {...props}>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead 
              key={column.key}
              className={`cursor-pointer ${sortColumn === column.key ? 'text-primary' : ''}`}
              onClick={() => onSort(column.key)}
            >
              {column.label}
              {sortColumn === column.key && (
                <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
              )}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((column) => (
              <TableCell key={column.key}>{row[column.key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

## Examples

### Integration with React Hook Form

```tsx
import { useForm } from 'react-hook-form';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

export function EditableTable({ initialData }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      rows: initialData
    }
  });

  const onSubmit = (data) => {
    console.log('Form data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {initialData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <input
                  className="w-full p-2 border rounded"
                  {...register(`rows.${index}.name`, { required: 'Name is required' })}
                />
                {errors.rows?.[index]?.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.rows[index].name.message}</p>
                )}
              </TableCell>
              <TableCell>
                <input
                  className="w-full p-2 border rounded"
                  type="email"
                  {...register(`rows.${index}.email`, { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.rows?.[index]?.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.rows[index].email.message}</p>
                )}
              </TableCell>
              <TableCell>
                <select
                  className="w-full p-2 border rounded"
                  {...register(`rows.${index}.role`, { required: 'Role is required' })}
                >
                  <option value="">Select role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                  <option value="editor">Editor</option>
                </select>
                {errors.rows?.[index]?.role && (
                  <p className="text-red-500 text-xs mt-1">{errors.rows[index].role.message}</p>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4">
        <Button type="submit">Save Changes</Button>
      </div>
    </form>
  );
}
```

### Integration with TanStack Table (React Table)

```tsx
import { useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export function DataTable({ columns, data }) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className={header.column.getCanSort() ? 'cursor-pointer select-none' : ''}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {{
                    asc: ' ↑',
                    desc: ' ↓',
                  }[header.column.getIsSorted() as string] ?? null}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() ? 'selected' : undefined}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
```

### Responsive Behavior

The component responds to different screen sizes in the following ways:

- **Mobile**: The table becomes horizontally scrollable within its container to accommodate all columns
- **Tablet**: Still horizontally scrollable but with more visible columns
- **Desktop**: Full table is visible with optimum spacing

For improved mobile responsiveness, consider these approaches:

```tsx
// Responsive table with stacked layout on mobile
function ResponsiveTable({ data }) {
  return (
    <div>
      {/* Desktop and tablet view */}
      <div className="hidden sm:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Mobile view - Cards instead of table */}
      <div className="grid grid-cols-1 gap-4 sm:hidden">
        {data.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <div className="font-medium">{item.name}</div>
            <div className="text-sm text-gray-500">{item.email}</div>
            <div className="mt-2 text-sm">{item.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Accessibility

The Table component follows these accessibility best practices:

- Semantic HTML structure using proper `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, and `<td>` elements
- Appropriate captions via the `<TableCaption>` component for screen readers
- Support for row selection with proper `data-state="selected"` attributes
- Proper alignment of text for readability
- Support for column headers with proper scope
- Support for keyboard navigation through table cells

For improved accessibility:

```tsx
<Table aria-label="User data table">
  <TableCaption>List of users and their roles in the system</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead scope="col">Name</TableHead>
      <TableHead scope="col">Email</TableHead>
      <TableHead scope="col">Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.id}>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.role}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

## Implementation Details

The Table component:

- Uses React.forwardRef to allow ref forwarding to the underlying HTML elements
- Wraps the table in a responsive container with overflow handling
- Uses Tailwind's utility classes for styling and responsive design
- Applies hover states to rows for better user interaction
- Supports selection states through data attributes
- Maintains border styling consistently between rows and on the table boundaries
- Properly aligns checkboxes and form elements within cells
- Uses appropriate text colors for header, body, and footer elements

## Common Pitfalls

- **Responsive overflow issues**: By default, tables can overflow on smaller screens. The component addresses this by wrapping the table in a container with `overflow-auto`, but for complex tables, consider a responsive redesign approach.
- **Row selection management**: When implementing row selection, ensure you're properly tracking selected states and applying the `data-state="selected"` attribute.
- **Column width management**: For tables with many columns, explicitly set widths using classes like `w-[200px]` on TableHead components to control layout.
- **Form integration conflicts**: When embedding form elements in table cells, ensure proper event propagation and styling compatibility.
- **TypeScript prop spreading**: When extending the components, ensure proper type spreading to maintain type safety.

## Testing

```tsx
// Example test for the Table component
import { render, screen } from '@testing-library/react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

describe('Table', () => {
  it('renders a basic table correctly', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>Developer</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
  });
  
  it('applies custom className to table elements', () => {
    render(
      <Table className="test-table">
        <TableHeader className="test-header">
          <TableRow className="test-row">
            <TableHead className="test-head">Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="test-body">
          <TableRow className="test-row">
            <TableCell className="test-cell">John Doe</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    
    expect(document.querySelector('.test-table')).toBeInTheDocument();
    expect(document.querySelector('.test-header')).toBeInTheDocument();
    expect(document.querySelector('.test-body')).toBeInTheDocument();
    expect(document.querySelectorAll('.test-row')).toHaveLength(2);
    expect(document.querySelector('.test-head')).toBeInTheDocument();
    expect(document.querySelector('.test-cell')).toBeInTheDocument();
  });
});
```

## Related Components

- [DataTable](https://ui.shadcn.com/docs/components/data-table): Extension of the Table component that adds sorting, filtering, and pagination using TanStack Table.
- [Form](../forms/form.md): Can be used together with Table to create editable data tables.
- [Card](./card.md): Alternative to tables for displaying data in a more mobile-friendly format.
- [Select](../forms/select.md): Often used within table cells for data selection operations.