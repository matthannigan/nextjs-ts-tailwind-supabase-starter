import { render, screen, fireEvent } from '../../utils/test-utils';
import { SearchInput } from '../../../src/components/ui/search-input';

describe('SearchInput', () => {
  it('renders correctly with default props', () => {
    render(<SearchInput />);

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('allows typing in the input', () => {
    render(<SearchInput />);

    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'test query' } });

    expect(input).toHaveValue('test query');
  });

  it('calls onSearch when form is submitted', () => {
    const handleSearch = jest.fn();
    render(<SearchInput onSearch={handleSearch} />);

    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'test query' } });

    const form = input.closest('form');
    fireEvent.submit(form as HTMLFormElement);

    expect(handleSearch).toHaveBeenCalledWith('test query');
  });

  it('uses custom placeholder', () => {
    render(<SearchInput placeholder="Find something..." />);

    expect(screen.getByPlaceholderText('Find something...')).toBeInTheDocument();
  });

  it('uses custom button text', () => {
    render(<SearchInput buttonText="Go" />);

    expect(screen.getByRole('button', { name: 'Go' })).toBeInTheDocument();
  });

  it('hides button when showButton is false', () => {
    render(<SearchInput showButton={false} />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('applies custom classes', () => {
    render(<SearchInput className="custom-search-class" data-testid="search-form" />);

    const form = screen.getByTestId('search-form');
    expect(form).toHaveClass('custom-search-class');
  });

  it('submits form when clicking the button', () => {
    const handleSearch = jest.fn();
    render(<SearchInput onSearch={handleSearch} />);

    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'test query' } });

    const button = screen.getByRole('button', { name: 'Search' });
    fireEvent.click(button);

    expect(handleSearch).toHaveBeenCalledWith('test query');
  });
});
