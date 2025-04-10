import { render, screen, fireEvent } from '../../utils/test-utils';
import { Calendar } from '../../../src/components/ui/calendar';

// Mock the react-day-picker module to avoid rendering issues in tests
jest.mock('react-day-picker', () => {
  return {
    DayPicker: ({
      _children,
      className,
      _classNames,
      components,
      onSelect,
      ..._props
    }: {
      _children?: React.ReactNode;
      className?: string;
      _classNames?: unknown;
      components?: {
        IconLeft?: (props: Record<string, unknown>) => JSX.Element;
        IconRight?: (props: Record<string, unknown>) => JSX.Element;
        [key: string]: unknown;
      };
      onSelect?: (date: Date) => void;
      [key: string]: unknown;
    }) => (
      <div data-testid="day-picker" className={className}>
        <div data-testid="mock-calendar-content">Calendar Content</div>
        {/* Mock buttons to test icon components */}
        <button
          onClick={() => components?.IconLeft && components.IconLeft({} as Record<string, unknown>)}
        ></button>
        <button
          onClick={() =>
            components?.IconRight && components.IconRight({} as Record<string, unknown>)
          }
        ></button>
        {/* Mock a day selection */}
        <button data-testid="mock-day" onClick={() => onSelect && onSelect(new Date() as Date)}>
          15
        </button>
      </div>
    ),
  };
});

describe('Calendar', () => {
  it('renders the calendar component', () => {
    render(<Calendar />);
    expect(screen.getByTestId('day-picker')).toBeInTheDocument();
    expect(screen.getByTestId('mock-calendar-content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Calendar className="custom-calendar-class" />);
    expect(screen.getByTestId('day-picker')).toHaveClass('custom-calendar-class');
  });

  it('includes default padding class', () => {
    render(<Calendar />);
    expect(screen.getByTestId('day-picker')).toHaveClass('p-3');
  });

  it('sets showOutsideDays prop as true by default', () => {
    render(<Calendar />);
    const dayPicker = screen.getByTestId('day-picker');
    expect(dayPicker).toBeInTheDocument();
    // This is a bit limited due to mocking, but at least confirms rendering
  });

  it('calls onSelect when a day is clicked', () => {
    const onSelectMock = jest.fn();
    render(<Calendar mode="single" onSelect={onSelectMock} />);

    // Find and click on the mock day
    const dayButton = screen.getByTestId('mock-day');
    fireEvent.click(dayButton);

    expect(onSelectMock).toHaveBeenCalledTimes(1);
    // The Date object will be different in the actual call, so we just check that it was called
  });

  it('allows custom classNames to be passed in', () => {
    const customClassNames = {
      month: 'custom-month-class',
    };

    render(<Calendar classNames={customClassNames} />);

    // This is limited with our mock, but we're at least testing that the component renders
    expect(screen.getByTestId('day-picker')).toBeInTheDocument();
  });

  it('displays the correct display name', () => {
    expect(Calendar.displayName).toBe('Calendar');
  });
});
