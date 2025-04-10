import { render, screen } from '../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import { RadioGroup, RadioGroupItem } from '../../../src/components/forms/radio-group';
import { Label } from '../../../src/components/forms/label';

describe('RadioGroup', () => {
  it('renders correctly', () => {
    render(
      <RadioGroup defaultValue="option-1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-1" id="option-1" />
          <Label htmlFor="option-1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-2" id="option-2" />
          <Label htmlFor="option-2">Option 2</Label>
        </div>
      </RadioGroup>
    );

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 1')).toBeChecked();
    expect(screen.getByLabelText('Option 2')).not.toBeChecked();
  });

  it('allows changing the selected value', async () => {
    const user = userEvent.setup();
    const onValueChangeMock = jest.fn();

    render(
      <RadioGroup defaultValue="option-1" onValueChange={onValueChangeMock}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-1" id="option-1" />
          <Label htmlFor="option-1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-2" id="option-2" />
          <Label htmlFor="option-2">Option 2</Label>
        </div>
      </RadioGroup>
    );

    await user.click(screen.getByLabelText('Option 2'));
    expect(onValueChangeMock).toHaveBeenCalledWith('option-2');
  });

  it('respects the disabled state', async () => {
    const user = userEvent.setup();
    const onValueChangeMock = jest.fn();

    render(
      <RadioGroup defaultValue="option-1" onValueChange={onValueChangeMock}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-1" id="option-1" />
          <Label htmlFor="option-1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-2" id="option-2" disabled />
          <Label htmlFor="option-2">Option 2</Label>
        </div>
      </RadioGroup>
    );

    await user.click(screen.getByLabelText('Option 2'));
    expect(onValueChangeMock).not.toHaveBeenCalled();
    expect(screen.getByLabelText('Option 1')).toBeChecked();
    expect(screen.getByLabelText('Option 2')).not.toBeChecked();
  });

  it('applies custom class names', () => {
    render(
      <RadioGroup className="custom-group-class">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-1" id="option-1" className="custom-item-class" />
          <Label htmlFor="option-1">Option 1</Label>
        </div>
      </RadioGroup>
    );

    expect(screen.getByRole('radiogroup')).toHaveClass('custom-group-class');
    expect(screen.getByRole('radio')).toHaveClass('custom-item-class');
  });

  it('works with controlled component pattern', () => {
    const onValueChangeMock = jest.fn();

    const { rerender } = render(
      <RadioGroup value="option-1" onValueChange={onValueChangeMock}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-1" id="option-1" />
          <Label htmlFor="option-1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-2" id="option-2" />
          <Label htmlFor="option-2">Option 2</Label>
        </div>
      </RadioGroup>
    );

    expect(screen.getByLabelText('Option 1')).toBeChecked();

    // Re-render with a different value
    rerender(
      <RadioGroup value="option-2" onValueChange={onValueChangeMock}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-1" id="option-1" />
          <Label htmlFor="option-1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-2" id="option-2" />
          <Label htmlFor="option-2">Option 2</Label>
        </div>
      </RadioGroup>
    );

    expect(screen.getByLabelText('Option 2')).toBeChecked();
  });
});
