import { render, screen } from '../../utils/test-utils';
import { Badge, badgeVariants } from '../../../src/components/ui/badge';

describe('Badge', () => {
  it('renders with default variant correctly', () => {
    render(<Badge>Test Badge</Badge>);
    const badge = screen.getByText('Test Badge');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('bg-primary'); // Check for default variant class
  });

  it('applies custom className', () => {
    render(<Badge className="test-class">Test Badge</Badge>);
    const badge = screen.getByText('Test Badge');
    expect(badge).toHaveClass('test-class');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Badge variant="secondary">Secondary</Badge>);
    expect(screen.getByText('Secondary')).toHaveClass('bg-secondary');

    rerender(<Badge variant="destructive">Destructive</Badge>);
    expect(screen.getByText('Destructive')).toHaveClass('bg-destructive');

    rerender(<Badge variant="outline">Outline</Badge>);
    expect(screen.getByText('Outline')).toHaveClass('text-foreground');
  });

  it('passes additional HTML props to the element', () => {
    render(
      <Badge data-testid="badge-test" id="test-id" title="Badge Title">
        Test Badge
      </Badge>
    );

    const badge = screen.getByTestId('badge-test');
    expect(badge).toHaveAttribute('id', 'test-id');
    expect(badge).toHaveAttribute('title', 'Badge Title');
  });

  it('exports badgeVariants for use with other elements', () => {
    expect(typeof badgeVariants).toBe('function');

    // Verify that badgeVariants returns a string
    const badgeClass = badgeVariants({ variant: 'default' });
    expect(typeof badgeClass).toBe('string');
    expect(badgeClass).toContain('bg-primary');
  });

  it('renders with children correctly', () => {
    render(
      <Badge>
        <span>Child</span> Element
      </Badge>
    );

    expect(screen.getByText('Child')).toBeInTheDocument();
    expect(screen.getByText('Element')).toBeInTheDocument();
  });
});
