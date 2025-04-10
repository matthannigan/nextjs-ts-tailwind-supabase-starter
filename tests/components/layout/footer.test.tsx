import { render, screen } from '../../utils/test-utils';
import Footer from '../../../src/components/layout/footer';

describe('Footer', () => {
  const currentYear = new Date().getFullYear();

  it('renders the footer with copyright information', () => {
    render(<Footer />);

    // Check if copyright text is rendered with current year
    expect(
      screen.getByText(`© ${currentYear} Next.js Starter. All rights reserved.`)
    ).toBeInTheDocument();
  });

  it('has the correct styling', () => {
    const { container } = render(<Footer />);

    // Check if footer has the correct classes
    const footerElement = container.querySelector('footer');
    expect(footerElement).toHaveClass('w-full');
    expect(footerElement).toHaveClass('bg-gray-100');

    // Check if container is present
    expect(container.querySelector('.container')).toBeInTheDocument();

    // Check if text is centered
    const paragraphElement = container.querySelector('p');
    expect(paragraphElement).toHaveClass('text-center');
    expect(paragraphElement).toHaveClass('text-gray-600');
  });
});
