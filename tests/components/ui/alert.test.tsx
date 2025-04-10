import { render, screen } from '../../utils/test-utils';
import { Alert, AlertTitle, AlertDescription } from '../../../src/components/ui/alert';

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
    const IconMock = () => <svg data-testid="icon" className="h-4 w-4" />;

    render(
      <Alert>
        <IconMock />
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

  it('applies custom className to AlertTitle', () => {
    render(
      <Alert>
        <AlertTitle className="custom-title-class" data-testid="custom-title">
          Test Title
        </AlertTitle>
      </Alert>
    );

    const title = screen.getByTestId('custom-title');
    expect(title).toHaveClass('custom-title-class');
  });

  it('applies custom className to AlertDescription', () => {
    render(
      <Alert>
        <AlertDescription className="custom-desc-class" data-testid="custom-desc">
          Test Description
        </AlertDescription>
      </Alert>
    );

    const desc = screen.getByTestId('custom-desc');
    expect(desc).toHaveClass('custom-desc-class');
  });

  it('forwards refs correctly', () => {
    const alertRef = jest.fn();
    const titleRef = jest.fn();
    const descRef = jest.fn();

    render(
      <Alert ref={alertRef}>
        <AlertTitle ref={titleRef}>Test Title</AlertTitle>
        <AlertDescription ref={descRef}>Test Description</AlertDescription>
      </Alert>
    );

    expect(alertRef).toHaveBeenCalled();
    expect(titleRef).toHaveBeenCalled();
    expect(descRef).toHaveBeenCalled();
  });
});
