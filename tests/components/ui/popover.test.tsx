import * as React from 'react';
import { render, screen } from '../../utils/test-utils';
import { Popover, PopoverTrigger, PopoverContent } from '../../../src/components/ui/popover';

// Mock the @radix-ui/react-popover module
jest.mock('@radix-ui/react-popover', () => {
  const Root = ({
    children,
    _open,
    _onOpenChange,
    ...props
  }: {
    children?: React.ReactNode;
    _open?: unknown;
    _onOpenChange?: unknown;
    [key: string]: unknown;
  }) => (
    <div data-testid="popover-root" {...props}>
      {children}
    </div>
  );
  Root.displayName = 'Root';

  const Trigger = React.forwardRef(
    (
      {
        children,
        asChild,
        ...props
      }: {
        children?: React.ReactNode;
        asChild?: boolean;
        onClick?: () => void;
        [key: string]: unknown;
      },
      ref: React.Ref<HTMLButtonElement>
    ) => (
      <button
        data-testid="popover-trigger"
        onClick={() => props.onClick && (props.onClick as () => void)()}
        ref={ref}
        {...props}
      >
        {asChild ? children : 'Trigger'}
      </button>
    )
  );
  Trigger.displayName = 'Trigger';

  const Content = Object.assign(
    React.forwardRef(
      (
        {
          children,
          className,
          align,
          sideOffset,
          ...props
        }: {
          children?: React.ReactNode;
          className?: string;
          align?: string;
          sideOffset?: string | number;
          [key: string]: unknown;
        },
        ref: React.Ref<HTMLDivElement>
      ) => (
        <div
          data-testid="popover-content"
          className={className}
          data-state="open"
          data-align={align}
          data-side-offset={sideOffset}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      )
    ),
    { displayName: 'Content' }
  );

  const Portal = ({ children }: { children?: React.ReactNode }) => (
    <div data-testid="popover-portal">{children}</div>
  );
  Portal.displayName = 'Portal';

  return {
    Root,
    Trigger,
    Content,
    Portal,
  };
});

describe('Popover', () => {
  it('renders the popover components', () => {
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>
    );

    expect(screen.getByTestId('popover-root')).toBeInTheDocument();
    expect(screen.getByTestId('popover-trigger')).toBeInTheDocument();
    expect(screen.getByText('Trigger')).toBeInTheDocument();

    // The content should be rendered within the Portal
    expect(screen.getByTestId('popover-portal')).toBeInTheDocument();
    expect(screen.getByTestId('popover-content')).toBeInTheDocument();
    expect(screen.getByText('Popover Content')).toBeInTheDocument();
  });

  it('applies custom className to PopoverContent', () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent className="custom-content-class">Content</PopoverContent>
      </Popover>
    );

    const content = screen.getByTestId('popover-content');
    expect(content).toHaveClass('custom-content-class');
  });

  it('passes default props to PopoverContent', () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );

    const content = screen.getByTestId('popover-content');
    expect(content).toHaveAttribute('data-align', 'center');
    expect(content).toHaveAttribute('data-side-offset', '4');
  });

  it('passes custom align and sideOffset to PopoverContent', () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent align="start" sideOffset={10}>
          Content
        </PopoverContent>
      </Popover>
    );

    const content = screen.getByTestId('popover-content');
    expect(content).toHaveAttribute('data-align', 'start');
    expect(content).toHaveAttribute('data-side-offset', '10');
  });

  it('renders an asChild trigger correctly', () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <span>Custom Trigger</span>
        </PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );

    expect(screen.getByText('Custom Trigger')).toBeInTheDocument();
  });

  it('renders the correct displayName', () => {
    expect(PopoverContent.displayName).toBe('Content');
  });
});
