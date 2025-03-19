import { render, screen } from '../../utils/test-utils';
import { Heading, Text, Lead, Blockquote, InlineCode } from '../../../src/components/ui/Typography';

describe('Typography Components', () => {
  describe('Heading', () => {
    it('renders heading with correct level', () => {
      const { rerender } = render(<Heading as="h1">Heading 1</Heading>);
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

      rerender(<Heading as="h2">Heading 2</Heading>);
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();

      rerender(<Heading as="h3">Heading 3</Heading>);
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    });

    it('applies different sizes correctly', () => {
      const { rerender } = render(<Heading size="h1">Large Heading</Heading>);
      expect(screen.getByText('Large Heading')).toHaveClass('text-4xl');

      rerender(<Heading size="h3">Medium Heading</Heading>);
      expect(screen.getByText('Medium Heading')).toHaveClass('text-2xl');

      rerender(<Heading size="h6">Small Heading</Heading>);
      expect(screen.getByText('Small Heading')).toHaveClass('text-base');
    });

    it('applies different variants correctly', () => {
      const { rerender } = render(<Heading variant="default">Default Heading</Heading>);
      expect(screen.getByText('Default Heading')).toHaveClass('text-foreground');

      rerender(<Heading variant="muted">Muted Heading</Heading>);
      expect(screen.getByText('Muted Heading')).toHaveClass('text-muted-foreground');

      rerender(<Heading variant="primary">Primary Heading</Heading>);
      expect(screen.getByText('Primary Heading')).toHaveClass('text-primary');

      rerender(<Heading variant="secondary">Secondary Heading</Heading>);
      expect(screen.getByText('Secondary Heading')).toHaveClass('text-secondary');
    });

    it('uses heading level as size if no size is provided', () => {
      render(<Heading as="h3">Auto-sized Heading</Heading>);
      expect(screen.getByText('Auto-sized Heading')).toHaveClass('text-2xl');
    });

    it('applies custom classes', () => {
      render(<Heading className="custom-heading-class">Heading with Custom Class</Heading>);
      expect(screen.getByText('Heading with Custom Class')).toHaveClass('custom-heading-class');
    });
  });

  describe('Text', () => {
    it('renders text correctly', () => {
      render(<Text>Sample Text</Text>);
      expect(screen.getByText('Sample Text')).toBeInTheDocument();
    });

    it('applies different sizes correctly', () => {
      const { rerender } = render(<Text size="xs">Extra Small Text</Text>);
      expect(screen.getByText('Extra Small Text')).toHaveClass('text-xs');

      rerender(<Text size="md">Medium Text</Text>);
      expect(screen.getByText('Medium Text')).toHaveClass('text-base');

      rerender(<Text size="xl">Extra Large Text</Text>);
      expect(screen.getByText('Extra Large Text')).toHaveClass('text-xl');
    });

    it('applies different weights correctly', () => {
      const { rerender } = render(<Text weight="light">Light Text</Text>);
      expect(screen.getByText('Light Text')).toHaveClass('font-light');

      rerender(<Text weight="normal">Normal Text</Text>);
      expect(screen.getByText('Normal Text')).toHaveClass('font-normal');

      rerender(<Text weight="bold">Bold Text</Text>);
      expect(screen.getByText('Bold Text')).toHaveClass('font-bold');
    });

    it('applies different variants correctly', () => {
      const { rerender } = render(<Text variant="default">Default Text</Text>);
      expect(screen.getByText('Default Text')).toHaveClass('text-foreground');

      rerender(<Text variant="muted">Muted Text</Text>);
      expect(screen.getByText('Muted Text')).toHaveClass('text-muted-foreground');
    });

    it('applies custom classes', () => {
      render(<Text className="custom-text-class">Text with Custom Class</Text>);
      expect(screen.getByText('Text with Custom Class')).toHaveClass('custom-text-class');
    });
  });

  describe('Lead', () => {
    it('renders lead text correctly', () => {
      render(<Lead>Lead Text</Lead>);
      const lead = screen.getByText('Lead Text');
      expect(lead).toBeInTheDocument();
      expect(lead.tagName).toBe('P');
      expect(lead).toHaveClass('text-xl');
      expect(lead).toHaveClass('text-muted-foreground');
    });

    it('applies custom classes', () => {
      render(<Lead className="custom-lead-class">Lead with Custom Class</Lead>);
      expect(screen.getByText('Lead with Custom Class')).toHaveClass('custom-lead-class');
    });
  });

  describe('Blockquote', () => {
    it('renders blockquote correctly', () => {
      render(<Blockquote>Quote Text</Blockquote>);
      const quote = screen.getByText('Quote Text');
      expect(quote).toBeInTheDocument();
      expect(quote.tagName).toBe('BLOCKQUOTE');
      expect(quote).toHaveClass('border-l-2');
      expect(quote).toHaveClass('border-primary');
      expect(quote).toHaveClass('italic');
    });

    it('applies custom classes', () => {
      render(<Blockquote className="custom-quote-class">Quote with Custom Class</Blockquote>);
      expect(screen.getByText('Quote with Custom Class')).toHaveClass('custom-quote-class');
    });
  });

  describe('InlineCode', () => {
    it('renders inline code correctly', () => {
      render(<InlineCode>code snippet</InlineCode>);
      const code = screen.getByText('code snippet');
      expect(code).toBeInTheDocument();
      expect(code.tagName).toBe('CODE');
      expect(code).toHaveClass('bg-muted');
      expect(code).toHaveClass('font-mono');
    });

    it('applies custom classes', () => {
      render(<InlineCode className="custom-code-class">Code with Custom Class</InlineCode>);
      expect(screen.getByText('Code with Custom Class')).toHaveClass('custom-code-class');
    });
  });
});
