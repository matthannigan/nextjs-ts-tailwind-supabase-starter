import { render, screen, fireEvent } from '../../utils/test-utils';
import { Input } from '../../../src/components/ui/input';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Enter text" data-testid="test-input" />);

    const input = screen.getByTestId('test-input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Enter text');
  });

  it('handles text input correctly', () => {
    render(<Input data-testid="test-input" />);

    const input = screen.getByTestId('test-input');
    fireEvent.change(input, { target: { value: 'Test Value' } });

    expect(input).toHaveValue('Test Value');
  });

  it('applies custom classes', () => {
    render(<Input className="custom-input-class" data-testid="test-input" />);

    const input = screen.getByTestId('test-input');
    expect(input).toHaveClass('custom-input-class');
    expect(input).toHaveClass('flex');
    expect(input).toHaveClass('rounded-md');
    expect(input).toHaveClass('border-input');
  });

  it('passes through additional props', () => {
    const onFocus = jest.fn();
    render(<Input data-testid="test-input" onFocus={onFocus} aria-label="Test Input" required />);

    const input = screen.getByTestId('test-input');
    expect(input).toHaveAttribute('aria-label', 'Test Input');
    expect(input).toBeRequired();

    fireEvent.focus(input);
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('renders different types of inputs', () => {
    const { rerender } = render(<Input type="text" data-testid="test-input" />);
    expect(screen.getByTestId('test-input')).toHaveAttribute('type', 'text');

    rerender(<Input type="password" data-testid="test-input" />);
    expect(screen.getByTestId('test-input')).toHaveAttribute('type', 'password');

    rerender(<Input type="email" data-testid="test-input" />);
    expect(screen.getByTestId('test-input')).toHaveAttribute('type', 'email');

    rerender(<Input type="number" data-testid="test-input" />);
    expect(screen.getByTestId('test-input')).toHaveAttribute('type', 'number');
  });

  it('renders in disabled state', () => {
    render(<Input disabled data-testid="test-input" />);

    const input = screen.getByTestId('test-input');
    expect(input).toBeDisabled();
    expect(input).toHaveClass('disabled:opacity-50');
  });
});
