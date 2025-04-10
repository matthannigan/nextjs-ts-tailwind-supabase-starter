import { render, screen } from '../../utils/test-utils';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '../../../src/components/ui/table';

describe('Table components', () => {
  it('renders a basic table correctly', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>Developer</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
  });

  it('applies custom className to table elements', () => {
    render(
      <Table className="test-table">
        <TableHeader className="test-header">
          <TableRow className="test-row">
            <TableHead className="test-head">Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="test-body">
          <TableRow className="test-row">
            <TableCell className="test-cell">John Doe</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(document.querySelector('.test-table')).toBeInTheDocument();
    expect(document.querySelector('.test-header')).toBeInTheDocument();
    expect(document.querySelector('.test-body')).toBeInTheDocument();
    expect(document.querySelectorAll('.test-row')).toHaveLength(2);
    expect(document.querySelector('.test-head')).toBeInTheDocument();
    expect(document.querySelector('.test-cell')).toBeInTheDocument();
  });

  it('renders table with caption and footer', () => {
    render(
      <Table>
        <TableCaption>Employee list</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>Developer</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total: 1 employee</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );

    expect(screen.getByText('Employee list')).toBeInTheDocument();
    expect(screen.getByText('Total: 1 employee')).toBeInTheDocument();
  });

  it('forwards refs to underlying elements', () => {
    const tableRef = jest.fn();
    const headerRef = jest.fn();
    const bodyRef = jest.fn();
    const footerRef = jest.fn();
    const rowRef = jest.fn();
    const headRef = jest.fn();
    const cellRef = jest.fn();
    const captionRef = jest.fn();

    render(
      <Table ref={tableRef}>
        <TableCaption ref={captionRef}>Table caption</TableCaption>
        <TableHeader ref={headerRef}>
          <TableRow ref={rowRef}>
            <TableHead ref={headRef}>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody ref={bodyRef}>
          <TableRow>
            <TableCell ref={cellRef}>Cell</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter ref={footerRef}>
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );

    expect(tableRef).toHaveBeenCalled();
    expect(headerRef).toHaveBeenCalled();
    expect(bodyRef).toHaveBeenCalled();
    expect(footerRef).toHaveBeenCalled();
    expect(rowRef).toHaveBeenCalled();
    expect(headRef).toHaveBeenCalled();
    expect(cellRef).toHaveBeenCalled();
    expect(captionRef).toHaveBeenCalled();
  });

  it('wraps the table in a responsive container', () => {
    render(<Table data-testid="test-table">Table content</Table>);

    const table = screen.getByTestId('test-table');
    const container = table.parentElement;

    expect(container).toHaveClass('relative', 'w-full', 'overflow-auto');
  });

  it('displays the correct displayNames', () => {
    expect(Table.displayName).toBe('Table');
    expect(TableHeader.displayName).toBe('TableHeader');
    expect(TableBody.displayName).toBe('TableBody');
    expect(TableFooter.displayName).toBe('TableFooter');
    expect(TableRow.displayName).toBe('TableRow');
    expect(TableHead.displayName).toBe('TableHead');
    expect(TableCell.displayName).toBe('TableCell');
    expect(TableCaption.displayName).toBe('TableCaption');
  });
});
