import { render, screen } from '../../utils/test-utils';
import { ReactNode } from 'react';
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '../../../src/components/ui/form';
import { useForm } from 'react-hook-form';

// Mock react-hook-form
jest.mock('react-hook-form', () => ({
  useForm: jest.fn(() => ({
    handleSubmit: jest.fn(),
    register: jest.fn(),
    control: { register: jest.fn() },
    formState: { errors: {} },
    getFieldState: jest.fn(() => ({ error: null })),
  })),
  useFormContext: jest.fn(() => ({
    getFieldState: jest.fn(() => ({ error: null })),
    formState: { errors: {} },
  })),
  FormProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Controller: ({
    render,
  }: {
    render: (props: { field: { value: string; onChange: () => void } }) => ReactNode;
  }) => render({ field: { value: '', onChange: jest.fn() } }),
}));

// Mock Radix UI components
jest.mock('@radix-ui/react-label', () => ({
  Root: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
    <label {...props}>{children}</label>
  ),
}));

jest.mock('@radix-ui/react-slot', () => ({
  Slot: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
    <div {...props}>{children}</div>
  ),
}));

// Basic test form component for testing
const TestForm = () => {
  const form = useForm();

  return (
    <Form {...form}>
      <form>
        <FormItem>
          <FormLabel>Test Label</FormLabel>
          <FormControl>
            <input type="text" />
          </FormControl>
          <FormDescription>Test description</FormDescription>
          <FormMessage>Test error message</FormMessage>
        </FormItem>
      </form>
    </Form>
  );
};

describe('Form components', () => {
  it('renders a complete form with all subcomponents', () => {
    render(<TestForm />);

    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });
});
