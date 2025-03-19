import { render, screen } from '../../utils/test-utils';
import { ReactNode } from 'react';
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
} from '../../../src/components/ui/DropdownMenu';

// Mock Radix UI DropdownMenu
jest.mock('@radix-ui/react-dropdown-menu', () => ({
  Root: ({ children }: { children: ReactNode }) => (
    <div data-testid="dropdown-root">{children}</div>
  ),
  Trigger: ({ children }: { children: ReactNode }) => (
    <button data-testid="dropdown-trigger">{children}</button>
  ),
  Portal: ({ children }: { children: ReactNode }) => (
    <div data-testid="dropdown-portal">{children}</div>
  ),
  Content: ({ children, className }: { children: ReactNode; className?: string }) => (
    <div data-testid="dropdown-content" className={className}>
      {children}
    </div>
  ),
  Item: ({
    children,
    className,
    inset,
  }: {
    children: ReactNode;
    className?: string;
    inset?: boolean;
  }) => {
    const insetClass = inset ? 'pl-8' : '';
    return (
      <div data-testid="dropdown-item" className={`${insetClass} ${className || ''}`}>
        {children}
      </div>
    );
  },
  CheckboxItem: ({
    children,
    className,
    checked,
  }: {
    children: ReactNode;
    className?: string;
    checked?: boolean;
  }) => (
    <div data-testid="dropdown-checkbox-item" className={className} data-checked={checked}>
      <span data-testid="dropdown-item-indicator">{checked ? 'checked' : ''}</span>
      {children}
    </div>
  ),
  RadioItem: ({ children, className }: { children: ReactNode; className?: string }) => (
    <div data-testid="dropdown-radio-item" className={className}>
      <span data-testid="dropdown-radio-indicator"></span>
      {children}
    </div>
  ),
  Label: ({ children, className }: { children: ReactNode; className?: string }) => (
    <div data-testid="dropdown-label" className={className}>
      {children}
    </div>
  ),
  Separator: ({ className }: { className?: string }) => (
    <hr data-testid="dropdown-separator" className={className} />
  ),
  ItemIndicator: ({ children }: { children: ReactNode }) => (
    <span data-testid="item-indicator">{children}</span>
  ),
  Group: ({ children }: { children: ReactNode }) => (
    <div data-testid="dropdown-group">{children}</div>
  ),
  Sub: ({ children }: { children: ReactNode }) => <div data-testid="dropdown-sub">{children}</div>,
  SubTrigger: ({
    children,
    className,
    inset,
  }: {
    children: ReactNode;
    className?: string;
    inset?: boolean;
  }) => {
    const insetClass = inset ? 'pl-8' : '';
    return (
      <div data-testid="dropdown-subtrigger" className={`${insetClass} ${className || ''}`}>
        {children}
      </div>
    );
  },
  SubContent: ({ children, className }: { children: ReactNode; className?: string }) => (
    <div data-testid="dropdown-subcontent" className={className}>
      {children}
    </div>
  ),
  RadioGroup: ({ children }: { children: ReactNode }) => (
    <div data-testid="dropdown-radiogroup">{children}</div>
  ),
}));

// Mock Lucide icons
jest.mock('lucide-react', () => ({
  Check: () => <span data-testid="check-icon">✓</span>,
  ChevronRight: () => <span data-testid="chevron-right-icon">›</span>,
  Circle: () => <span data-testid="circle-icon">●</span>,
}));

describe('DropdownMenu', () => {
  it('renders basic dropdown structure', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByTestId('dropdown-root')).toBeInTheDocument();
    expect(screen.getByTestId('dropdown-trigger')).toHaveTextContent('Open Menu');
    expect(screen.getByTestId('dropdown-content')).toBeInTheDocument();

    const items = screen.getAllByTestId('dropdown-item');
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent('Item 1');
    expect(items[1]).toHaveTextContent('Item 2');
  });

  it('renders checkbox items', () => {
    render(
      <DropdownMenu>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked={true}>Checked Item</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={false}>Unchecked Item</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    const checkboxItems = screen.getAllByTestId('dropdown-checkbox-item');
    expect(checkboxItems).toHaveLength(2);
    expect(checkboxItems[0]).toHaveTextContent('Checked Item');
    expect(checkboxItems[0]).toHaveAttribute('data-checked', 'true');
    expect(checkboxItems[1]).toHaveTextContent('Unchecked Item');
    expect(checkboxItems[1]).toHaveAttribute('data-checked', 'false');
  });

  it('renders radio items', () => {
    render(
      <DropdownMenu>
        <DropdownMenuContent>
          <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    const radioItems = screen.getAllByTestId('dropdown-radio-item');
    expect(radioItems).toHaveLength(2);
    expect(radioItems[0]).toHaveTextContent('Option 1');
    expect(radioItems[1]).toHaveTextContent('Option 2');
  });

  it('renders label and separator', () => {
    render(
      <DropdownMenu>
        <DropdownMenuContent>
          <DropdownMenuLabel>Menu Label</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByTestId('dropdown-label')).toHaveTextContent('Menu Label');
    expect(screen.getByTestId('dropdown-separator')).toBeInTheDocument();
  });

  it('renders shortcut', () => {
    render(
      <DropdownMenu>
        <DropdownMenuContent>
          <DropdownMenuItem>
            Item
            <DropdownMenuShortcut>⌘+S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByText('⌘+S')).toBeInTheDocument();
  });

  it('applies inset class to menu items when specified', () => {
    render(
      <DropdownMenu>
        <DropdownMenuContent>
          <DropdownMenuItem inset={true}>Inset Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByTestId('dropdown-item').className).toContain('pl-8');
  });
});
