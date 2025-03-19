import { render, screen } from '../../utils/test-utils';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '../../../src/components/ui/Card';

describe('Card', () => {
  it('renders a basic card with content', () => {
    render(
      <Card data-testid="card">
        <CardContent>Card Content</CardContent>
      </Card>
    );

    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('renders a complete card with all subcomponents', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    );

    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card Description')).toBeInTheDocument();
    expect(screen.getByText('Card Content')).toBeInTheDocument();
    expect(screen.getByText('Card Footer')).toBeInTheDocument();
  });

  it('applies custom classes to Card', () => {
    render(<Card className="custom-card-class" data-testid="card" />);

    const card = screen.getByTestId('card');
    expect(card).toHaveClass('custom-card-class');
    expect(card).toHaveClass('rounded-lg');
    expect(card).toHaveClass('border');
    expect(card).toHaveClass('bg-card');
  });

  it('applies custom classes to CardHeader', () => {
    render(<CardHeader className="custom-header-class" data-testid="card-header" />);

    const header = screen.getByTestId('card-header');
    expect(header).toHaveClass('custom-header-class');
    expect(header).toHaveClass('flex');
    expect(header).toHaveClass('p-6');
  });

  it('applies custom classes to CardTitle', () => {
    render(<CardTitle className="custom-title-class" data-testid="card-title" />);

    const title = screen.getByTestId('card-title');
    expect(title).toHaveClass('custom-title-class');
    expect(title).toHaveClass('text-2xl');
    expect(title).toHaveClass('font-semibold');
  });

  it('applies custom classes to CardDescription', () => {
    render(<CardDescription className="custom-desc-class" data-testid="card-desc" />);

    const desc = screen.getByTestId('card-desc');
    expect(desc).toHaveClass('custom-desc-class');
    expect(desc).toHaveClass('text-sm');
    expect(desc).toHaveClass('text-muted-foreground');
  });

  it('applies custom classes to CardContent', () => {
    render(<CardContent className="custom-content-class" data-testid="card-content" />);

    const content = screen.getByTestId('card-content');
    expect(content).toHaveClass('custom-content-class');
    expect(content).toHaveClass('p-6');
    expect(content).toHaveClass('pt-0');
  });

  it('applies custom classes to CardFooter', () => {
    render(<CardFooter className="custom-footer-class" data-testid="card-footer" />);

    const footer = screen.getByTestId('card-footer');
    expect(footer).toHaveClass('custom-footer-class');
    expect(footer).toHaveClass('flex');
    expect(footer).toHaveClass('p-6');
    expect(footer).toHaveClass('pt-0');
  });

  it('passes additional props to all components', () => {
    const { rerender } = render(<Card data-testid="card" aria-label="Test Card" />);
    expect(screen.getByTestId('card')).toHaveAttribute('aria-label', 'Test Card');

    rerender(<CardHeader data-testid="header" aria-label="Test Header" />);
    expect(screen.getByTestId('header')).toHaveAttribute('aria-label', 'Test Header');

    rerender(<CardTitle data-testid="title" aria-label="Test Title" />);
    expect(screen.getByTestId('title')).toHaveAttribute('aria-label', 'Test Title');

    rerender(<CardDescription data-testid="desc" aria-label="Test Description" />);
    expect(screen.getByTestId('desc')).toHaveAttribute('aria-label', 'Test Description');

    rerender(<CardContent data-testid="content" aria-label="Test Content" />);
    expect(screen.getByTestId('content')).toHaveAttribute('aria-label', 'Test Content');

    rerender(<CardFooter data-testid="footer" aria-label="Test Footer" />);
    expect(screen.getByTestId('footer')).toHaveAttribute('aria-label', 'Test Footer');
  });
});
