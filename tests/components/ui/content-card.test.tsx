import { render, screen } from '../../utils/test-utils';
import { ContentCard } from '../../../src/components/ui/content-card';

// Mocking next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }) => {
    return (
      <div className="next-image-mock" style={{ width: width || 'auto', height: height || 'auto' }}>
        <span>{alt}</span>
        <span>{src}</span>
      </div>
    );
  },
}));

describe('ContentCard', () => {
  const defaultProps = {
    title: 'Test Card Title',
  };

  it('renders with title correctly', () => {
    render(<ContentCard {...defaultProps} />);

    expect(screen.getByText('Test Card Title')).toBeInTheDocument();
  });

  it('renders with description when provided', () => {
    render(<ContentCard {...defaultProps} description="This is a test card description" />);

    expect(screen.getByText('This is a test card description')).toBeInTheDocument();
  });

  it('renders with image when provided', () => {
    render(
      <ContentCard
        {...defaultProps}
        image={{
          src: '/test-image.jpg',
          alt: 'Test image',
        }}
      />
    );

    const imageAlt = screen.getByText('Test image');
    const imageSrc = screen.getByText('/test-image.jpg');
    expect(imageAlt).toBeInTheDocument();
    expect(imageSrc).toBeInTheDocument();
  });

  it('wraps content in a link when href is provided', () => {
    render(<ContentCard {...defaultProps} href="/test-page" />);

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test-page');
  });

  it('renders default "Read more" button when href is provided without custom footer', () => {
    render(<ContentCard {...defaultProps} href="/test-page" />);

    expect(screen.getByText('Read more')).toBeInTheDocument();
  });

  it('renders custom footer when provided', () => {
    render(<ContentCard {...defaultProps} footer={<button>Custom Footer Button</button>} />);

    expect(screen.getByText('Custom Footer Button')).toBeInTheDocument();
    expect(screen.queryByText('Read more')).not.toBeInTheDocument();
  });

  it('applies different image shapes correctly', () => {
    const { rerender } = render(
      <ContentCard
        {...defaultProps}
        image={{ src: '/test-image.jpg', alt: 'Test image' }}
        imageShape="square"
        data-testid="card"
      />
    );

    let imageContainer = screen.getByText('Test image').closest('.aspect-square');
    expect(imageContainer).toBeInTheDocument();

    rerender(
      <ContentCard
        {...defaultProps}
        image={{ src: '/test-image.jpg', alt: 'Test image' }}
        imageShape="video"
        data-testid="card"
      />
    );

    imageContainer = screen.getByText('Test image').closest('.aspect-video');
    expect(imageContainer).toBeInTheDocument();

    rerender(
      <ContentCard
        {...defaultProps}
        image={{ src: '/test-image.jpg', alt: 'Test image' }}
        imageShape="portrait"
        data-testid="card"
      />
    );

    imageContainer = screen.getByText('Test image').closest('.aspect-[3/4]');
    expect(imageContainer).toBeInTheDocument();
  });

  it('applies hover effect classes by default', () => {
    render(<ContentCard {...defaultProps} data-testid="card" />);

    const card = screen.getByText('Test Card Title').closest('.flex.h-full');
    expect(card).toHaveClass('hover:border-primary');
    expect(card).toHaveClass('hover:shadow-md');
  });

  it('does not apply hover effect classes when hoverEffect is false', () => {
    render(<ContentCard {...defaultProps} hoverEffect={false} data-testid="card" />);

    const card = screen.getByText('Test Card Title').closest('.flex.h-full');
    expect(card).not.toHaveClass('hover:border-primary');
    expect(card).not.toHaveClass('hover:shadow-md');
  });

  it('applies custom class names', () => {
    render(<ContentCard {...defaultProps} className="custom-card-class" data-testid="card" />);

    const card = screen.getByText('Test Card Title').closest('.flex.h-full');
    expect(card).toHaveClass('custom-card-class');
  });
});
