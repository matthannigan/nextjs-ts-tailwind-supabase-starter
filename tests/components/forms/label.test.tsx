import { render, screen } from '../../utils/test-utils';
import { Label } from '../../../src/components/forms/label';

describe('Label', () => {
  it('renders correctly with children', () => {
    render(<Label htmlFor="test-input">Test Label</Label>);

    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('has the correct htmlFor attribute', () => {
    render(<Label htmlFor="test-input">Test Label</Label>);

    const label = screen.getByText('Test Label');
    expect(label).toHaveAttribute('for', 'test-input');
  });

  it('applies custom classes', () => {
    render(
      <Label className="custom-label-class" data-testid="test-label">
        Test Label
      </Label>
    );

    const label = screen.getByTestId('test-label');
    expect(label).toHaveClass('custom-label-class');
    expect(label).toHaveClass('text-sm');
    expect(label).toHaveClass('font-medium');
  });

  it('passes through additional props', () => {
    const onClick = jest.fn();
    render(
      <Label data-testid="test-label" onClick={onClick} aria-label="Test Label">
        Test Label
      </Label>
    );

    const label = screen.getByTestId('test-label');
    expect(label).toHaveAttribute('aria-label', 'Test Label');

    label.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
