import { render, screen } from '../../utils/test-utils';
import Container from '../../../src/components/ui/container';

describe('Container', () => {
  it('renders children correctly', () => {
    render(
      <Container data-testid="container">
        <p>Test Content</p>
      </Container>
    );

    const container = screen.getByTestId('container');
    expect(container).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies default size, padding, and centered classes', () => {
    render(<Container data-testid="container">Content</Container>);

    const container = screen.getByTestId('container');
    expect(container).toHaveClass('max-w-screen-lg'); // default size: lg
    expect(container).toHaveClass('px-6'); // part of default padding: md
    expect(container).toHaveClass('md:px-8'); // part of default padding: md
    expect(container).toHaveClass('mx-auto'); // default centered: true
  });

  it('applies different sizes correctly', () => {
    const { rerender } = render(
      <Container size="sm" data-testid="container">
        Content
      </Container>
    );
    expect(screen.getByTestId('container')).toHaveClass('max-w-screen-sm');

    rerender(
      <Container size="md" data-testid="container">
        Content
      </Container>
    );
    expect(screen.getByTestId('container')).toHaveClass('max-w-screen-md');

    rerender(
      <Container size="lg" data-testid="container">
        Content
      </Container>
    );
    expect(screen.getByTestId('container')).toHaveClass('max-w-screen-lg');

    rerender(
      <Container size="xl" data-testid="container">
        Content
      </Container>
    );
    expect(screen.getByTestId('container')).toHaveClass('max-w-screen-xl');

    rerender(
      <Container size="full" data-testid="container">
        Content
      </Container>
    );
    expect(screen.getByTestId('container')).toHaveClass('max-w-full');
  });

  it('applies different padding sizes correctly', () => {
    const { rerender } = render(
      <Container padding="none" data-testid="container">
        Content
      </Container>
    );
    expect(screen.getByTestId('container')).toHaveClass('px-0');

    rerender(
      <Container padding="sm" data-testid="container">
        Content
      </Container>
    );
    expect(screen.getByTestId('container')).toHaveClass('px-4');

    rerender(
      <Container padding="md" data-testid="container">
        Content
      </Container>
    );
    expect(screen.getByTestId('container')).toHaveClass('px-6');
    expect(screen.getByTestId('container')).toHaveClass('md:px-8');

    rerender(
      <Container padding="lg" data-testid="container">
        Content
      </Container>
    );
    expect(screen.getByTestId('container')).toHaveClass('px-8');
    expect(screen.getByTestId('container')).toHaveClass('md:px-12');
  });

  it('handles centered prop correctly', () => {
    const { rerender } = render(
      <Container centered={true} data-testid="container">
        Content
      </Container>
    );
    expect(screen.getByTestId('container')).toHaveClass('mx-auto');

    rerender(
      <Container centered={false} data-testid="container">
        Content
      </Container>
    );
    expect(screen.getByTestId('container')).not.toHaveClass('mx-auto');
  });

  it('passes custom className and other props', () => {
    const onClick = jest.fn();
    render(
      <Container
        className="custom-class"
        data-testid="container"
        onClick={onClick}
        aria-label="Test Container"
      >
        Content
      </Container>
    );

    const container = screen.getByTestId('container');
    expect(container).toHaveClass('custom-class');
    expect(container).toHaveAttribute('aria-label', 'Test Container');

    container.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
