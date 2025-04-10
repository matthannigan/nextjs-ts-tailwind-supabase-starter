import { render, screen } from '../../utils/test-utils';
import NavbarMobile from '../../../src/components/navigation/navbar-mobile';
import { usePathname } from 'next/navigation';

// Mock the usePathname hook
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('NavbarMobile', () => {
  it('renders all navigation items', () => {
    // Mock the usePathname to return '/' (home)
    (usePathname as jest.Mock).mockReturnValue('/');

    render(<NavbarMobile />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Wallet')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  it('highlights the active navigation item', () => {
    // Mock the usePathname to return '/profile'
    (usePathname as jest.Mock).mockReturnValue('/profile');

    render(<NavbarMobile />);

    // The Profile link should have the active color class
    const profileText = screen.getByText('Profile');
    expect(profileText).toHaveClass('text-blue-600');

    // Other links should not have the active color class
    const homeText = screen.getByText('Home');
    expect(homeText).not.toHaveClass('text-blue-600');
  });

  it('renders the correct links for all navigation items', () => {
    (usePathname as jest.Mock).mockReturnValue('/');

    render(<NavbarMobile />);

    // Check if all links have the correct href attributes
    const homeLink = screen.getByText('Home').closest('a');
    const walletLink = screen.getByText('Wallet').closest('a');
    const settingsLink = screen.getByText('Settings').closest('a');
    const profileLink = screen.getByText('Profile').closest('a');

    expect(homeLink).toHaveAttribute('href', '/');
    expect(walletLink).toHaveAttribute('href', '/wallet');
    expect(settingsLink).toHaveAttribute('href', '/settings');
    expect(profileLink).toHaveAttribute('href', '/profile');
  });

  it('applies hover styles to navigation items', () => {
    (usePathname as jest.Mock).mockReturnValue('/');

    render(<NavbarMobile />);

    // All links should have the hover classes
    const links = screen.getAllByRole('link');

    links.forEach(link => {
      expect(link).toHaveClass('hover:bg-gray-50');
    });
  });
});
