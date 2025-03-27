---
---

# Testing

This starter template includes a comprehensive testing setup using Jest 29.x, React Testing Library 14.x, and Playwright 1.40+ for end-to-end testing.

## Testing Structure

Tests are organized in the following structure:

```
nextjs-ts-tailwind-supabase-starter/
├── __tests__/                   # Jest tests
│   ├── components/              # Component tests
│   ├── hooks/                   # Hook tests
│   ├── pages/                   # Page tests
│   └── utils/                   # Utility function tests
├── e2e/                         # End-to-end tests with Playwright
└── tests/
    └── utils/                   # Test utilities and mocks
```

## Unit and Integration Testing with Jest

Jest 29.x is configured for unit and integration testing of components, hooks, pages, and utility functions.

### Component Testing

Components are tested using React Testing Library 14.x, which encourages testing components as users would interact with them:

```tsx
// __tests__/components/ui/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeDisabled();
  });
});
```

### Testing Hooks

Custom hooks are tested using `@testing-library/react-hooks`:

```tsx
// __tests__/hooks/useAuth.test.tsx
import { renderHook, act } from '@testing-library/react-hooks';
import { useAuth } from '@/contexts/AuthContext';
import { AuthProvider } from '@/contexts/AuthContext';

// Mock the Supabase client
jest.mock('@/lib/supabase', () => ({
  supabase: {
    auth: {
      signUp: jest.fn(),
      signInWithPassword: jest.fn(),
      signOut: jest.fn(),
      getSession: jest.fn(() => Promise.resolve({ data: { session: null } })),
    },
  },
}));

describe('useAuth', () => {
  it('provides authentication methods', () => {
    const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
    const { result } = renderHook(() => useAuth(), { wrapper });

    expect(result.current.user).toBeNull();
    expect(result.current.signUp).toBeDefined();
    expect(result.current.signIn).toBeDefined();
    expect(result.current.signOut).toBeDefined();
  });

  // More tests...
});
```

### Testing with Supabase

To test components that interact with Supabase, the template provides mock implementations:

```typescript
// tests/utils/supabaseMock.ts
export const createSupabaseMock = () => ({
  auth: {
    signUp: jest.fn(() => Promise.resolve({ data: { user: { id: 'mock-user-id' } }, error: null })),
    signInWithPassword: jest.fn(() => Promise.resolve({ data: { session: { user: { id: 'mock-user-id' } } }, error: null })),
    signOut: jest.fn(() => Promise.resolve({ error: null })),
    getSession: jest.fn(() => Promise.resolve({ data: { session: null }, error: null })),
    onAuthStateChange: jest.fn(() => ({
      data: { subscription: { unsubscribe: jest.fn() } },
    })),
  },
  from: jest.fn(() => ({
    select: jest.fn(() => ({
      eq: jest.fn(() => ({
        single: jest.fn(() => Promise.resolve({ data: {}, error: null })),
      })),
    })),
    insert: jest.fn(() => ({
      select: jest.fn(() => Promise.resolve({ data: {}, error: null })),
    })),
    update: jest.fn(() => ({
      eq: jest.fn(() => ({
        select: jest.fn(() => Promise.resolve({ data: {}, error: null })),
      })),
    })),
    delete: jest.fn(() => ({
      eq: jest.fn(() => Promise.resolve({ data: {}, error: null })),
    })),
  })),
});
```

## End-to-End Testing with Playwright

The starter template includes Playwright 1.40+ for end-to-end testing of user flows:

```typescript
// e2e/auth.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test('user can register', async ({ page }) => {
    await page.goto('/register');
    
    // Fill out the registration form
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="password"]', 'Password123!');
    await page.fill('input[name="confirmPassword"]', 'Password123!');
    
    // Submit the form
    await page.click('button[type="submit"]');
    
    // Verify redirect to dashboard or confirmation page
    await expect(page).toHaveURL(/dashboard|confirm/);
  });
  
  test('user can login', async ({ page }) => {
    await page.goto('/login');
    
    // Fill out the login form
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="password"]', 'Password123!');
    
    // Submit the form
    await page.click('button[type="submit"]');
    
    // Verify redirect to dashboard
    await expect(page).toHaveURL(/dashboard/);
  });
  
  test('user can logout', async ({ page }) => {
    // First log in
    await page.goto('/login');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="password"]', 'Password123!');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/dashboard/);
    
    // Click logout button
    await page.click('button:has-text("Logout")');
    
    // Verify redirect to home page
    await expect(page).toHaveURL(/\//);
  });
});
```

## Testing Protected Routes

The template includes utilities for testing protected routes:

```typescript
// __tests__/pages/dashboard.test.tsx
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import Dashboard from '@/app/dashboard/page';
import { useAuth } from '@/contexts/AuthContext';

// Mock the auth hook
jest.mock('@/contexts/AuthContext', () => ({
  useAuth: jest.fn(),
}));

// Mock the router
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Dashboard Page', () => {
  it('redirects to login when not authenticated', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
    
    (useAuth as jest.Mock).mockReturnValue({
      user: null,
      isLoading: false,
    });
    
    render(<Dashboard />);
    expect(mockPush).toHaveBeenCalledWith('/login?redirectedFrom=/dashboard');
  });
  
  it('displays dashboard content when authenticated', () => {
    (useAuth as jest.Mock).mockReturnValue({
      user: { id: 'mock-user-id', email: 'test@example.com' },
      isLoading: false,
    });
    
    render(<Dashboard />);
    expect(screen.getByText(/welcome to your dashboard/i)).toBeInTheDocument();
  });
});
```

## Mock Providers

The template includes mock providers for testing components that depend on context:

```typescript
// tests/utils/providers.tsx
import { ReactNode } from 'react';
import { AuthContext } from '@/contexts/AuthContext';

interface MockAuthProviderProps {
  user?: any;
  isLoading?: boolean;
  children: ReactNode;
}

export const MockAuthProvider = ({ 
  user = null, 
  isLoading = false, 
  children 
}: MockAuthProviderProps) => {
  const mockAuthValue = {
    user,
    isLoading,
    session: user ? { user } : null,
    signUp: jest.fn(),
    signIn: jest.fn(),
    signInAnonymously: jest.fn(),
    signOut: jest.fn(),
    updateProfile: jest.fn(),
  };
  
  return (
    <AuthContext.Provider value={mockAuthValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Usage in tests
// render(
//   <MockAuthProvider user={{ id: 'test-id', email: 'test@example.com' }}>
//     <ComponentToTest />
//   </MockAuthProvider>
// );
```

## Running Tests

The starter template includes scripts to run different types of tests:

```json
// package.json (excerpt)
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "e2e": "playwright test",
    "e2e:ui": "playwright test --ui"
  }
}
```

## Test Coverage

Jest is configured to generate code coverage reports. Aim for at least 80% coverage for production code:

```bash
npm run test:coverage
```

This generates a detailed coverage report in the `coverage` directory.

## Testing Best Practices

1. **Test Behavior, Not Implementation** - Focus on what the component does, not how it does it.
2. **Mock External Dependencies** - Use the provided mock utilities for Supabase and other external services.
3. **Test Edge Cases** - Include tests for error handling, loading states, and edge cases.
4. **Group Tests Logically** - Use `describe` to group related tests.
5. **Keep Tests Independent** - Each test should be able to run on its own.
6. **Use Data-Test Attributes** - Use `data-testid` for stable test selectors.

## Next Steps

- Read the [Deployment](./deployment) guide to learn how to deploy the application
- Check the [Contributing](./contributing) documentation for guidelines on contributing to the project