---
sidebar_position: 3
sidebar_label: Jest
---

# Jest Configuration and Usage

Jest is a delightful JavaScript testing framework with a focus on simplicity. This document covers how Jest is configured and used in this project for unit and integration testing.

## Overview

- **Version**: 29.x
- **Environment**: jsdom (for simulating browser environment)
- **Extensions**:
  - `ts-jest`: TypeScript support for Jest
  - `@testing-library/react`: React component testing
  - `@testing-library/jest-dom`: Custom Jest matchers for DOM testing
  - `@testing-library/user-event`: Simulating user events

## Configuration

The project should have a Jest configuration file at the project root. If not created yet, you can create a `jest.config.js` file with the following configuration:

```js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Handle module aliases
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    // Use ts-jest to handle TypeScript files
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/coverage/',
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config
module.exports = createJestConfig(customJestConfig);
```

Additionally, create a `jest.setup.js` file that imports the testing library extensions:

```js
// jest.setup.js
import '@testing-library/jest-dom';
```

## Default Commands

The following npm scripts are available for testing:

- **Run all tests**: Runs all test files
  ```bash
  npm test
  ```

- **Watch mode**: Runs tests in watch mode, which will rerun tests when files change
  ```bash
  npm run test:watch
  ```

- **Coverage report**: Generates a test coverage report
  ```bash
  npm run test:coverage
  ```

## Writing Tests

### 1. Unit Tests for Utility Functions

Place test files alongside the files they are testing with a `.test.ts` or `.test.tsx` extension.

```tsx
// utils/formatDate.test.ts
import { formatDate } from './formatDate';

describe('formatDate', () => {
  it('formats date correctly', () => {
    const date = new Date('2023-01-01');
    expect(formatDate(date)).toBe('01/01/2023');
  });

  it('handles invalid dates', () => {
    expect(formatDate(null)).toBe('');
  });
});
```

### 2. Component Testing with React Testing Library

```tsx
// components/button.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### 3. Testing Hooks

```tsx
// hooks/useCounter.test.ts
import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

describe('useCounter', () => {
  it('increments counter', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });
});
```

## Test Directory Structure

The recommended directory structure for tests:

```
project/
├── components/
│   ├── Button.tsx
│   └── Button.test.tsx
├── lib/
│   ├── utils.ts
│   └── utils.test.ts
├── app/
│   └── __tests__/
│       └── page.test.tsx
└── __tests__/
    └── integration/
        └── form-submission.test.tsx
```

## Mocking

### Mocking Modules

```typescript
// Mocking a module
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/',
    query: {},
  }),
}));
```

### Mocking API Calls

```typescript
// Mocking fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: 'mocked data' }),
    ok: true,
  })
) as jest.Mock;
```

## Testing Asynchronous Code

```typescript
// Testing promises
it('fetches data asynchronously', async () => {
  const data = await fetchData();
  expect(data).toEqual({ success: true });
});

// Testing with waitFor
it('updates after async operation', async () => {
  render(<AsyncComponent />);
  
  await waitFor(() => {
    expect(screen.getByText('Loaded')).toBeInTheDocument();
  });
});
```

## Best Practices

1. **Use Testing Library queries appropriately**: Prefer queries that reflect how users interact with your application (getByRole, getByLabelText) over implementation details (getByTestId)
2. **Keep tests simple**: Each test should verify one specific behavior
3. **Avoid testing implementation details**: Focus on testing behavior, not implementation
4. **Use the right assertions**: Be specific about what you're testing
5. **Organize tests with describe blocks**: Group related tests together
6. **Follow the AAA pattern**: Arrange, Act, Assert
7. **Run tests in CI**: Include tests in your continuous integration workflow
