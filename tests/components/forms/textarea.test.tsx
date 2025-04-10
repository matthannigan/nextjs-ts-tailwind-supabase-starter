import { render, screen } from '../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import { Textarea } from '../../../src/components/forms/textarea';

describe('Textarea', () => {
  it('renders correctly', () => {
    render(<Textarea placeholder="Test placeholder" />);
    expect(screen.getByPlaceholderText('Test placeholder')).toBeInTheDocument();
  });

  it('handles user input', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Textarea onChange={handleChange} />);
    const textarea = screen.getByRole('textbox');

    await user.type(textarea, 'Hello, world!');
    expect(handleChange).toHaveBeenCalled();
    expect(textarea).toHaveValue('Hello, world!');
  });

  it('respects disabled state', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Textarea disabled onChange={handleChange} />);
    const textarea = screen.getByRole('textbox');

    expect(textarea).toBeDisabled();
    await user.type(textarea, 'Test');
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('applies custom class names', () => {
    render(<Textarea className="custom-textarea-class" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('custom-textarea-class');
  });

  it('forwards ref to the underlying textarea element', () => {
    const ref = jest.fn();
    render(<Textarea ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('accepts default value', () => {
    render(<Textarea defaultValue="Default content" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('Default content');
  });

  it('respects controlled value', () => {
    const { rerender } = render(<Textarea value="Initial value" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('Initial value');

    rerender(<Textarea value="Updated value" />);
    expect(textarea).toHaveValue('Updated value');
  });

  it('renders with the correct default attributes', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox');

    expect(textarea).toHaveClass('min-h-[80px]');
    expect(textarea).toHaveClass('w-full');
    expect(textarea).toHaveClass('rounded-md');
    expect(textarea).toHaveClass('border');
  });
});
