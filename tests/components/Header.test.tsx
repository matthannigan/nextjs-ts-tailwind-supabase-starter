import { render, screen } from '../utils/test-utils';
import Header from '../../src/components/layout/Header';

describe('Header', () => {
  it('renders the logo and navigation links', () => {
    render(<Header />);

    // Check if the logo/title is rendered
    expect(screen.getByText('Next.js Starter')).toBeInTheDocument();

    // Check if navigation links are rendered
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /dashboard/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument();
  });

  it('has the correct links', () => {
    render(<Header />);

    // Check if links have the correct href attributes
    expect(screen.getByText('Next.js Starter')).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /dashboard/i })).toHaveAttribute('href', '/dashboard');
    expect(screen.getByRole('link', { name: /login/i })).toHaveAttribute('href', '/login');
  });
});
