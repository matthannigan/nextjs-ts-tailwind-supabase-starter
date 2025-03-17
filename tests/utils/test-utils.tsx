import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Add any providers that components need here
function AllTheProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Add any providers here, for example:
      <ThemeProvider>
        <SomeOtherProvider>
          {children}
        </SomeOtherProvider>
      </ThemeProvider>
      */}
      {children}
    </>
  );
}

// Custom render function that includes providers
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  return {
    ...render(ui, { wrapper: AllTheProviders, ...options }),
    // Return user event setup
    user: userEvent.setup(),
  };
};

// Re-export everything from testing-library
export * from '@testing-library/react';

// Override render method
export { customRender as render };
