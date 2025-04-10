import { render, screen } from '../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import { Switch } from '../../../src/components/forms/switch';

describe('Switch', () => {
  it('renders correctly', () => {
    render(<Switch />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('toggles when clicked', async () => {
    const onCheckedChange = jest.fn();
    const user = userEvent.setup();
    render(<Switch onCheckedChange={onCheckedChange} />);

    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('aria-checked', 'false');

    await user.click(switchElement);
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('can be controlled', () => {
    const { rerender } = render(<Switch checked={false} />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');

    rerender(<Switch checked={true} />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });

  it('respects disabled state', async () => {
    const onCheckedChange = jest.fn();
    const user = userEvent.setup();
    render(<Switch disabled onCheckedChange={onCheckedChange} />);

    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeDisabled();

    await user.click(switchElement);
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it('renders with default checked state', () => {
    render(<Switch defaultChecked />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });

  it('applies custom class names', () => {
    render(<Switch className="custom-switch-class" />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass('custom-switch-class');
  });
});
