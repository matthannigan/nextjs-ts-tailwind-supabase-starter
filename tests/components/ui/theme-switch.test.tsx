import { render, screen, fireEvent } from '../../utils/test-utils';
import { ThemeSwitch } from '../../../src/components/ui/theme-switch';
import { useTheme } from '../../../src/contexts/theme-provider';

// Mock the theme context
jest.mock('../../../src/contexts/theme-provider', () => ({
  useTheme: jest.fn(),
}));

// Mock Lucide icons
jest.mock('lucide-react', () => ({
  Sun: () => <div data-testid="sun-icon" className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />,
  Moon: () => <div data-testid="moon-icon" className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0" />,
}));

describe('ThemeSwitch', () => {
  beforeEach(() => {
    // Clear mock calls between tests
    jest.clearAllMocks();
  });

  it('renders the toggle button with light/dark icons', () => {
    // Mock the theme context with light theme
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      setTheme: jest.fn(),
    });

    render(<ThemeSwitch />);

    // Check if the toggle button exists
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    // Check if both sun and moon icons are present
    const sunIcon = screen.getByTestId('sun-icon');
    const moonIcon = screen.getByTestId('moon-icon');
    expect(sunIcon).toBeInTheDocument();
    expect(moonIcon).toBeInTheDocument();

    // Check if there's a screen reader text
    expect(screen.getByText('Toggle theme')).toBeInTheDocument();
  });

  it('toggles from light to dark theme when clicked', () => {
    const mockSetTheme = jest.fn();

    // Mock the theme context with light theme
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
    });

    render(<ThemeSwitch />);

    // Click the theme toggle
    fireEvent.click(screen.getByRole('button'));

    // Check if setTheme was called with 'dark'
    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });

  it('toggles from dark to light theme when clicked', () => {
    const mockSetTheme = jest.fn();

    // Mock the theme context with dark theme
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'dark',
      setTheme: mockSetTheme,
    });

    render(<ThemeSwitch />);

    // Click the theme toggle
    fireEvent.click(screen.getByRole('button'));

    // Check if setTheme was called with 'light'
    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });
});
