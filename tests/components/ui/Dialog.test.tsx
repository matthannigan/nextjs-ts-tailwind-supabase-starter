import { render, screen } from '../../utils/test-utils';
import { ReactNode } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../../../src/components/ui/Dialog';

// Mock Radix UI Dialog
jest.mock('@radix-ui/react-dialog', () => ({
  Root: ({ children }: { children: ReactNode }) => <div data-testid="dialog-root">{children}</div>,
  Trigger: ({ children }: { children: ReactNode }) => (
    <button data-testid="dialog-trigger">{children}</button>
  ),
  Portal: ({ children }: { children: ReactNode }) => (
    <div data-testid="dialog-portal">{children}</div>
  ),
  Overlay: ({ className }: { className?: string }) => (
    <div data-testid="dialog-overlay" className={className} />
  ),
  Content: ({ children, className }: { children: ReactNode; className?: string }) => (
    <div data-testid="dialog-content" className={className}>
      {children}
    </div>
  ),
  Close: ({ children, className }: { children?: ReactNode; className?: string }) => (
    <button data-testid="dialog-close" className={className}>
      {children}
    </button>
  ),
  Title: ({ children, className }: { children: ReactNode; className?: string }) => (
    <h2 data-testid="dialog-title" className={className}>
      {children}
    </h2>
  ),
  Description: ({ children, className }: { children: ReactNode; className?: string }) => (
    <p data-testid="dialog-description" className={className}>
      {children}
    </p>
  ),
}));

// Mock Lucide icons
jest.mock('lucide-react', () => ({
  X: () => <span data-testid="x-icon">X</span>,
}));

describe('Dialog', () => {
  it('renders dialog trigger button', () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
      </Dialog>
    );

    const trigger = screen.getByTestId('dialog-trigger');
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveTextContent('Open Dialog');
  });

  it('renders dialog content with all parts', () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Test Dialog Title</DialogTitle>
            <DialogDescription>Test Dialog Description</DialogDescription>
          </DialogHeader>
          <div>Dialog Body Content</div>
          <DialogFooter>
            <button>Cancel</button>
            <button>Confirm</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

    // Dialog structure
    expect(screen.getByTestId('dialog-root')).toBeInTheDocument();
    expect(screen.getByTestId('dialog-trigger')).toBeInTheDocument();
    expect(screen.getByTestId('dialog-content')).toBeInTheDocument();

    // Dialog content
    expect(screen.getByTestId('dialog-title')).toHaveTextContent('Test Dialog Title');
    expect(screen.getByTestId('dialog-description')).toHaveTextContent('Test Dialog Description');
    expect(screen.getByText('Dialog Body Content')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Confirm')).toBeInTheDocument();

    // Close button
    expect(screen.getByTestId('dialog-close')).toBeInTheDocument();
    expect(screen.getByTestId('x-icon')).toBeInTheDocument();
  });

  it('applies custom class names', () => {
    render(
      <Dialog>
        <DialogContent className="custom-content-class">
          <DialogHeader className="custom-header-class">
            <DialogTitle className="custom-title-class">Title</DialogTitle>
            <DialogDescription className="custom-desc-class">Description</DialogDescription>
          </DialogHeader>
          <DialogFooter className="custom-footer-class">Footer</DialogFooter>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByTestId('dialog-content')).toHaveClass('custom-content-class');
    expect(screen.getByText('Title').parentElement).toHaveClass('custom-header-class');
    expect(screen.getByTestId('dialog-title')).toHaveClass('custom-title-class');
    expect(screen.getByTestId('dialog-description')).toHaveClass('custom-desc-class');
    expect(screen.getByText('Footer')).toHaveClass('custom-footer-class');
  });
});
