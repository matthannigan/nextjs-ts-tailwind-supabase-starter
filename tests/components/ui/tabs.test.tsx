import * as React from 'react';
import { render, screen } from '../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../src/components/ui/tabs';

// Mock the @radix-ui/react-tabs module
jest.mock('@radix-ui/react-tabs', () => {
  const Root = ({
    children,
    defaultValue,
    value,
    onValueChange,
    ...props
  }: {
    children?: React.ReactNode;
    defaultValue?: string;
    value?: string;
    onValueChange?: (val: string) => void;
    [key: string]: unknown;
  }) => {
    const [selectedValue, setSelectedValue] = React.useState(value || defaultValue);

    const handleSelect = (newValue: string) => {
      setSelectedValue(newValue);
      if (onValueChange) onValueChange(newValue);
    };

    return (
      <div data-testid="tabs-root" {...props}>
        {React.Children.map(children, child => {
          if (!React.isValidElement(child)) return child;

          return React.cloneElement(child, {
            selectedValue,
            onSelect: handleSelect,
          });
        })}
      </div>
    );
  };
  Root.displayName = 'TabsRoot';

  const List = Object.assign(
    React.forwardRef(
      (
        {
          children,
          className,
          selectedValue,
          onSelect,
          ...props
        }: {
          children?: React.ReactNode;
          className?: string;
          selectedValue?: string;
          onSelect?: (val: string) => void;
          [key: string]: unknown;
        },
        ref: React.Ref<HTMLDivElement>
      ) => (
        <div data-testid="tabs-list" role="tablist" className={className} ref={ref} {...props}>
          {React.Children.map(children, child => {
            if (!React.isValidElement(child)) return child;
            return React.cloneElement(child, { selectedValue, onSelect });
          })}
        </div>
      )
    ),
    { displayName: 'TabsList' }
  );
  List.displayName = 'TabsList';

  const Trigger = Object.assign(
    React.forwardRef(
      (
        {
          children,
          value,
          className,
          disabled,
          selectedValue,
          onSelect,
          ...props
        }: {
          children?: React.ReactNode;
          value?: string;
          className?: string;
          disabled?: boolean;
          selectedValue?: string;
          onSelect?: (val: string) => void;
          [key: string]: unknown;
        },
        ref: React.Ref<HTMLButtonElement>
      ) => (
        <button
          data-testid={`tab-trigger-${value}`}
          role="tab"
          aria-selected={selectedValue === value ? 'true' : 'false'}
          data-state={selectedValue === value ? 'active' : 'inactive'}
          disabled={disabled}
          className={className}
          onClick={() => !disabled && onSelect && value && onSelect(value)}
          ref={ref}
          {...props}
        >
          {children}
        </button>
      )
    ),
    { displayName: 'TabsTrigger' }
  );
  Trigger.displayName = 'TabsTrigger';

  const Content = Object.assign(
    React.forwardRef(
      (
        {
          children,
          value,
          className,
          selectedValue,
          ...props
        }: {
          children?: React.ReactNode;
          value?: string;
          className?: string;
          selectedValue?: string;
          [key: string]: unknown;
        },
        ref: React.Ref<HTMLDivElement>
      ) => (
        <div
          data-testid={`tab-content-${value}`}
          role="tabpanel"
          hidden={selectedValue !== value}
          className={className}
          data-state={selectedValue === value ? 'active' : 'inactive'}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      )
    ),
    { displayName: 'TabsContent' }
  );
  Content.displayName = 'TabsContent';

  return {
    Root,
    List,
    Trigger,
    Content,
  };
});

describe('Tabs', () => {
  it('renders correctly with the default tab selected', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Tab 1 content</TabsContent>
        <TabsContent value="tab2">Tab 2 content</TabsContent>
      </Tabs>
    );

    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveAttribute('aria-selected', 'false');

    // Content should be visible for the active tab only
    const panel1 = screen.getByTestId('tab-content-tab1');
    const panel2 = screen.getByTestId('tab-content-tab2');

    expect(panel1).not.toHaveAttribute('hidden');
    expect(panel1).toHaveAttribute('data-state', 'active');
    expect(panel2).toHaveAttribute('hidden');
    expect(panel2).toHaveAttribute('data-state', 'inactive');
  });

  it('switches tab when clicked', async () => {
    const user = userEvent.setup();

    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Tab 1 content</TabsContent>
        <TabsContent value="tab2">Tab 2 content</TabsContent>
      </Tabs>
    );

    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    await user.click(tab2);

    expect(tab2).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('aria-selected', 'false');

    const panel1 = screen.getByTestId('tab-content-tab1');
    const panel2 = screen.getByTestId('tab-content-tab2');

    expect(panel1).toHaveAttribute('hidden');
    expect(panel1).toHaveAttribute('data-state', 'inactive');
    expect(panel2).not.toHaveAttribute('hidden');
    expect(panel2).toHaveAttribute('data-state', 'active');
  });

  it('respects the disabled state', async () => {
    const user = userEvent.setup();

    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2" disabled>
            Tab 2
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Tab 1 content</TabsContent>
        <TabsContent value="tab2">Tab 2 content</TabsContent>
      </Tabs>
    );

    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    expect(tab2).toBeDisabled();

    await user.click(tab2);
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('aria-selected', 'true');
    expect(tab2).toHaveAttribute('aria-selected', 'false');
  });

  it('uses controlled value when provided', () => {
    render(
      <Tabs value="tab2">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Tab 1 content</TabsContent>
        <TabsContent value="tab2">Tab 2 content</TabsContent>
      </Tabs>
    );

    expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByTestId('tab-content-tab2')).not.toHaveAttribute('hidden');
  });

  it('calls onValueChange when tab is changed', async () => {
    const user = userEvent.setup();
    const onValueChangeMock = jest.fn();

    render(
      <Tabs defaultValue="tab1" onValueChange={onValueChangeMock}>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Tab 1 content</TabsContent>
        <TabsContent value="tab2">Tab 2 content</TabsContent>
      </Tabs>
    );

    await user.click(screen.getByRole('tab', { name: 'Tab 2' }));
    expect(onValueChangeMock).toHaveBeenCalledWith('tab2');
  });

  it('applies custom classes to components', () => {
    render(
      <Tabs defaultValue="tab1" className="custom-tabs">
        <TabsList className="custom-list">
          <TabsTrigger value="tab1" className="custom-trigger">
            Tab 1
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" className="custom-content">
          Tab 1 content
        </TabsContent>
      </Tabs>
    );

    expect(screen.getByTestId('tabs-root')).toHaveClass('custom-tabs');
    expect(screen.getByTestId('tabs-list')).toHaveClass('custom-list');
    expect(screen.getByTestId('tab-trigger-tab1')).toHaveClass('custom-trigger');
    expect(screen.getByTestId('tab-content-tab1')).toHaveClass('custom-content');
  });

  it('forwards refs correctly', () => {
    const listRef = jest.fn();
    const triggerRef = jest.fn();
    const contentRef = jest.fn();

    render(
      <Tabs defaultValue="tab1">
        <TabsList ref={listRef}>
          <TabsTrigger value="tab1" ref={triggerRef}>
            Tab 1
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" ref={contentRef}>
          Tab 1 content
        </TabsContent>
      </Tabs>
    );

    expect(listRef).toHaveBeenCalled();
    expect(triggerRef).toHaveBeenCalled();
    expect(contentRef).toHaveBeenCalled();
  });

  it('has correct display names', () => {
    expect(TabsList.displayName).toBe('TabsList');
    expect(TabsTrigger.displayName).toBe('TabsTrigger');
    expect(TabsContent.displayName).toBe('TabsContent');
  });
});
