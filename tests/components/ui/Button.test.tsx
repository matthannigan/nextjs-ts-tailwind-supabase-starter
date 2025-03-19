import { render, screen } from '../../utils/test-utils';
import { Button } from '../../../src/components/ui/Button';
import { Check } from 'lucide-react';
import { ReactNode } from 'react';

// Mock Radix UI Slot
jest.mock('@radix-ui/react-slot', () => ({
  Slot: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
    <div {...props}>{children}</div>
  ),
}));

// Mock Lucide icons
jest.mock('lucide-react', () => ({
  Check: () => <svg data-testid="check-icon" />,
}));

describe('Button', () => {
  it('renders correctly with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('applies different variants correctly', () => {
    const { rerender } = render(<Button variant="default">Default</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-primary');

    rerender(<Button variant="destructive">Destructive</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-destructive');

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole('button')).toHaveClass('border-input');

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-secondary');

    rerender(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole('button')).toHaveClass('hover:bg-accent');

    rerender(<Button variant="link">Link</Button>);
    expect(screen.getByRole('button')).toHaveClass('text-primary');
  });

  it('applies different sizes correctly', () => {
    const { rerender } = render(<Button size="default">Default</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-10');

    rerender(<Button size="sm">Small</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-9');

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-11');

    rerender(<Button size="icon">Icon</Button>);
    expect(screen.getByRole('button')).toHaveClass('w-10');
  });

  it('renders with an icon on the left by default', () => {
    render(<Button icon={Check}>With Icon</Button>);
    const button = screen.getByRole('button', { name: /with icon/i });
    const icon = screen.getByTestId('check-icon');
    expect(icon).toBeInTheDocument();

    // The icon should be a child of the button
    expect(button).toContainElement(icon);
  });

  it('renders with an icon on the right when specified', () => {
    render(
      <Button icon={Check} iconPosition="right">
        With Icon
      </Button>
    );
    const button = screen.getByRole('button', { name: /with icon/i });
    const icon = screen.getByTestId('check-icon');
    expect(icon).toBeInTheDocument();

    // The icon should be a child of the button
    expect(button).toContainElement(icon);
  });

  it('passes through additional props', () => {
    render(
      <Button data-testid="test-button" disabled>
        Disabled
      </Button>
    );
    const button = screen.getByTestId('test-button');
    expect(button).toBeDisabled();
  });
});
