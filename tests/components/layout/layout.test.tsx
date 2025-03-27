import { render, screen } from '../../utils/test-utils';
import { Flex, Grid } from '../../../src/components/layout/layout';

describe('Layout Components', () => {
  describe('Flex', () => {
    it('renders children correctly', () => {
      render(
        <Flex data-testid="flex-container">
          <div>Child 1</div>
          <div>Child 2</div>
        </Flex>
      );

      const container = screen.getByTestId('flex-container');
      expect(container).toBeInTheDocument();
      expect(screen.getByText('Child 1')).toBeInTheDocument();
      expect(screen.getByText('Child 2')).toBeInTheDocument();
    });

    it('applies default classes', () => {
      render(<Flex data-testid="flex-container">Content</Flex>);

      const container = screen.getByTestId('flex-container');
      expect(container).toHaveClass('flex');
      expect(container).toHaveClass('flex-row');
      expect(container).toHaveClass('items-start');
      expect(container).toHaveClass('justify-start');
      expect(container).toHaveClass('flex-nowrap');
    });

    it('applies different directions correctly', () => {
      const { rerender } = render(
        <Flex direction="row" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).toHaveClass('flex-row');

      rerender(
        <Flex direction="column" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).toHaveClass('flex-column');

      rerender(
        <Flex direction="row-reverse" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).toHaveClass('flex-row-reverse');

      rerender(
        <Flex direction="column-reverse" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).toHaveClass('flex-column-reverse');
    });

    it('applies different alignments correctly', () => {
      const { rerender } = render(
        <Flex align="start" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).toHaveClass('items-start');

      rerender(
        <Flex align="center" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).toHaveClass('items-center');

      rerender(
        <Flex align="end" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).toHaveClass('items-end');

      rerender(
        <Flex align="stretch" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).toHaveClass('items-stretch');

      rerender(
        <Flex align="baseline" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).toHaveClass('items-baseline');
    });

    it('applies different justification correctly', () => {
      const { rerender } = render(
        <Flex justify="start" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).toHaveClass('justify-start');

      rerender(
        <Flex justify="center" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).toHaveClass('justify-center');

      rerender(
        <Flex justify="end" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).toHaveClass('justify-end');

      rerender(
        <Flex justify="between" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).toHaveClass('justify-between');

      rerender(
        <Flex justify="around" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).toHaveClass('justify-around');

      rerender(
        <Flex justify="evenly" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).toHaveClass('justify-evenly');
    });

    it('applies different gap sizes correctly', () => {
      const { rerender } = render(
        <Flex gap="none" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).not.toHaveClass('gap-1');
      expect(screen.getByTestId('flex-container')).not.toHaveClass('gap-2');

      rerender(
        <Flex gap="xs" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).toHaveClass('gap-1');

      rerender(
        <Flex gap="sm" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).toHaveClass('gap-2');

      rerender(
        <Flex gap="md" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).toHaveClass('gap-4');

      rerender(
        <Flex gap="lg" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).toHaveClass('gap-6');

      rerender(
        <Flex gap="xl" data-testid="flex-container">
          Content
        </Flex>
      );
      expect(screen.getByTestId('flex-container')).toHaveClass('gap-8');
    });

    it('applies custom classes', () => {
      render(
        <Flex className="custom-flex-class" data-testid="flex-container">
          Content
        </Flex>
      );

      expect(screen.getByTestId('flex-container')).toHaveClass('custom-flex-class');
    });
  });

  describe('Grid', () => {
    it('renders children correctly', () => {
      render(
        <Grid data-testid="grid-container">
          <div>Grid Item 1</div>
          <div>Grid Item 2</div>
        </Grid>
      );

      const container = screen.getByTestId('grid-container');
      expect(container).toBeInTheDocument();
      expect(screen.getByText('Grid Item 1')).toBeInTheDocument();
      expect(screen.getByText('Grid Item 2')).toBeInTheDocument();
    });

    it('applies default classes', () => {
      render(<Grid data-testid="grid-container">Content</Grid>);

      const container = screen.getByTestId('grid-container');
      expect(container).toHaveClass('grid');
      expect(container).toHaveClass('grid-cols-1');
      expect(container).toHaveClass('gap-4');
    });

    it('applies different column counts correctly', () => {
      const { rerender } = render(
        <Grid cols={1} data-testid="grid-container">
          Content
        </Grid>
      );
      expect(screen.getByTestId('grid-container')).toHaveClass('grid-cols-1');

      rerender(
        <Grid cols={3} data-testid="grid-container">
          Content
        </Grid>
      );
      expect(screen.getByTestId('grid-container')).toHaveClass('grid-cols-3');

      rerender(
        <Grid cols={6} data-testid="grid-container">
          Content
        </Grid>
      );
      expect(screen.getByTestId('grid-container')).toHaveClass('grid-cols-6');

      rerender(
        <Grid cols={12} data-testid="grid-container">
          Content
        </Grid>
      );
      expect(screen.getByTestId('grid-container')).toHaveClass('grid-cols-12');
    });

    it('applies different gap sizes correctly', () => {
      const { rerender } = render(
        <Grid gap="none" data-testid="grid-container">
          Content
        </Grid>
      );
      expect(screen.getByTestId('grid-container')).not.toHaveClass('gap-1');
      expect(screen.getByTestId('grid-container')).not.toHaveClass('gap-2');

      rerender(
        <Grid gap="xs" data-testid="grid-container">
          Content
        </Grid>
      );
      expect(screen.getByTestId('grid-container')).toHaveClass('gap-1');

      rerender(
        <Grid gap="sm" data-testid="grid-container">
          Content
        </Grid>
      );
      expect(screen.getByTestId('grid-container')).toHaveClass('gap-2');

      rerender(
        <Grid gap="md" data-testid="grid-container">
          Content
        </Grid>
      );
      expect(screen.getByTestId('grid-container')).toHaveClass('gap-4');

      rerender(
        <Grid gap="lg" data-testid="grid-container">
          Content
        </Grid>
      );
      expect(screen.getByTestId('grid-container')).toHaveClass('gap-6');

      rerender(
        <Grid gap="xl" data-testid="grid-container">
          Content
        </Grid>
      );
      expect(screen.getByTestId('grid-container')).toHaveClass('gap-8');
    });

    it('applies custom classes', () => {
      render(
        <Grid className="custom-grid-class" data-testid="grid-container">
          Content
        </Grid>
      );

      expect(screen.getByTestId('grid-container')).toHaveClass('custom-grid-class');
    });
  });
});
