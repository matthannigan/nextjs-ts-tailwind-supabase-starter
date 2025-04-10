import { render, screen, fireEvent } from '../../utils/test-utils';
import { Checkbox } from '../../../src/components/forms/checkbox';
import { Label } from '../../../src/components/forms/label';

describe('Checkbox', () => {
  it('renders correctly with default props', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('handles check state properly', () => {
    const handleCheckedChange = jest.fn();
    render(<Checkbox onCheckedChange={handleCheckedChange} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(handleCheckedChange).toHaveBeenCalledWith(true);
  });

  it('renders with label correctly', () => {
    render(
      <div className="flex items-center space-x-2">
        <Checkbox id="test-checkbox" />
        <Label htmlFor="test-checkbox">Test Label</Label>
      </div>
    );

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('is properly disabled', () => {
    const handleCheckedChange = jest.fn();
    render(<Checkbox disabled onCheckedChange={handleCheckedChange} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();

    fireEvent.click(checkbox);
    expect(handleCheckedChange).not.toHaveBeenCalled();
  });

  it('applies custom class names', () => {
    render(<Checkbox className="custom-class" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('custom-class');
  });

  it('can be controlled with checked prop', () => {
    const { rerender } = render(<Checkbox checked={true} />);
    let checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();

    rerender(<Checkbox checked={false} />);
    checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });
});
