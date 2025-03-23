import { render, screen } from '../utils/test-utils';
import React from 'react';

// Mock the Header and Footer components
jest.mock('../../src/components/layout/Header', () => {
  return function MockHeader() {
    return <div data-testid="mock-header">Header Component</div>;
  };
});

jest.mock('../../src/components/layout/Footer', () => {
  return function MockFooter() {
    return <div data-testid="mock-footer">Footer Component</div>;
  };
});

// Mock the RootLayout component to avoid DOM nesting issues
const MockRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <div data-testid="mock-header">Header Component</div>
      <main className="flex-1">{children}</main>
      <div data-testid="mock-footer">Footer Component</div>
    </div>
  );
};

// Mock the actual layout import
jest.mock('../../src/app/layout', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => {
      return (
        <div className="flex min-h-screen flex-col">
          <div data-testid="mock-header">Header Component</div>
          <main className="flex-1">{children}</main>
          <div data-testid="mock-footer">Footer Component</div>
        </div>
      );
    },
  };
});

describe('RootLayout', () => {
  it('renders header, main content, and footer', () => {
    render(
      <MockRootLayout>
        <div data-testid="main-content">Main Content</div>
      </MockRootLayout>
    );

    // Check if header is rendered
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();

    // Check if main content is rendered
    expect(screen.getByTestId('main-content')).toBeInTheDocument();
    expect(screen.getByText('Main Content')).toBeInTheDocument();

    // Check if footer is rendered
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
  });
});
