import { render, screen } from '../../utils/test-utils';
import { Avatar, AvatarImage, AvatarFallback } from '../../../src/components/ui/avatar';
import Image from 'next/image';
import { ReactNode } from 'react';

// Mock the Avatar components from Radix UI
jest.mock('@radix-ui/react-avatar', () => ({
  Root: ({ children, className }: { children: ReactNode; className?: string }) => (
    <span data-testid="avatar-root" className={className}>
      {children}
    </span>
  ),
  Image: ({ src, alt, className }: { src: string; alt?: string; className?: string }) => (
    <Image
      data-testid="avatar-image"
      src={src}
      alt={alt || ''}
      width={40}
      height={40}
      className={className}
    />
  ),
  Fallback: ({ children, className }: { children: ReactNode; className?: string }) => (
    <span data-testid="avatar-fallback" className={className}>
      {children}
    </span>
  ),
}));

describe('Avatar', () => {
  it('renders with an image', () => {
    render(
      <Avatar>
        <AvatarImage src="/test-image.jpg" alt="Test User" />
      </Avatar>
    );

    const image = screen.getByTestId('avatar-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.jpg');
    expect(image).toHaveAttribute('alt', 'Test User');
  });

  it('renders fallback when image is not available', () => {
    render(
      <Avatar>
        <AvatarFallback>TU</AvatarFallback>
      </Avatar>
    );

    const fallback = screen.getByTestId('avatar-fallback');
    expect(fallback).toBeInTheDocument();
    expect(fallback).toHaveTextContent('TU');
  });

  it('applies custom classes to Avatar', () => {
    render(
      <Avatar className="custom-class">
        <AvatarFallback>TU</AvatarFallback>
      </Avatar>
    );

    // Get the root element
    const avatar = screen.getByTestId('avatar-root');
    expect(avatar).toHaveClass('custom-class');
  });

  it('applies custom classes to AvatarImage', () => {
    render(
      <Avatar>
        <AvatarImage src="/test-image.jpg" alt="Test User" className="custom-image-class" />
      </Avatar>
    );

    const image = screen.getByTestId('avatar-image');
    expect(image).toHaveClass('custom-image-class');
  });

  it('applies custom classes to AvatarFallback', () => {
    render(
      <Avatar>
        <AvatarFallback className="custom-fallback-class">TU</AvatarFallback>
      </Avatar>
    );

    const fallback = screen.getByTestId('avatar-fallback');
    expect(fallback).toHaveClass('custom-fallback-class');
  });
});
