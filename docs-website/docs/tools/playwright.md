---
sidebar_position: 4
---

# Playwright Configuration and Usage

Playwright is a powerful end-to-end testing framework that enables reliable testing for modern web apps. This document covers how Playwright is configured and used in this project for end-to-end testing.

## Overview

- **Version**: 1.5x
- **Capabilities**: Cross-browser testing, mobile viewport testing, visual testing, and more
- **Browsers**: Chrome, Firefox, WebKit (Safari)

## Configuration

The project should have a Playwright configuration file. If not created yet, you can create a `playwright.config.ts` file at the project root with the following configuration:

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e-tests',
  timeout: 30000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});
```

## Setting Up Playwright

If not already set up, you can initialize Playwright with:

```bash
npx playwright install
```

This installs required browsers and dependencies.

## Directory Structure

Create an `e2e-tests` directory at the project root with the following structure:

```
e2e-tests/
├── fixtures/         # Test data and fixtures
├── helpers/          # Helper functions for tests
├── pages/            # Page object models
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   └── ...
└── specs/            # Test specifications
    ├── auth.spec.ts
    ├── navigation.spec.ts
    └── ...
```

## Writing Tests

### 1. Basic Test

```typescript
// e2e-tests/specs/home.spec.ts
import { test, expect } from '@playwright/test';

test('homepage has title and links', async ({ page }) => {
  await page.goto('/');
  
  // Verify title
  await expect(page).toHaveTitle(/Next.js Starter/);
  
  // Check for navigation links
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
});
```

### 2. Using Page Object Model Pattern

Create page object models to encapsulate page interactions:

```typescript
// e2e-tests/pages/LoginPage.ts
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByLabel('Email');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }
  
  async goto() {
    await this.page.goto('/login');
  }
  
  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

// Use in test
// e2e-tests/specs/auth.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('test@example.com', 'password123');
  
  // Verify successful login
  await expect(page.getByText('Welcome back')).toBeVisible();
});
```

### 3. Testing API and UI Together

```typescript
// e2e-tests/specs/profile.spec.ts
import { test, expect } from '@playwright/test';

test('user can update profile', async ({ page, request }) => {
  // Login via API for speed
  const loginResponse = await request.post('/api/auth/login', {
    data: {
      email: 'test@example.com',
      password: 'password123'
    }
  });
  
  // Extract cookies from response
  const cookies = loginResponse.headers()['set-cookie'];
  if (cookies) {
    await page.context().addCookies(
      cookies.map(c => {
        const [name, value] = c.split('=');
        return { name, value, domain: 'localhost', path: '/' };
      })
    );
  }
  
  // Navigate to profile page
  await page.goto('/profile');
  
  // Update profile
  await page.getByLabel('Display Name').fill('Updated Name');
  await page.getByRole('button', { name: 'Save Changes' }).click();
  
  // Verify success message
  await expect(page.getByText('Profile updated successfully')).toBeVisible();
  
  // Verify data was actually updated
  await page.reload();
  await expect(page.getByLabel('Display Name')).toHaveValue('Updated Name');
});
```

## Running Tests

Add the following scripts to your `package.json`:

```json
"scripts": {
  "test:e2e": "playwright test",
  "test:e2e:ui": "playwright test --ui",
  "test:e2e:debug": "playwright test --debug",
  "test:e2e:report": "playwright show-report"
}
```

Default commands:

- **Run all tests**: Run all Playwright tests headlessly
  ```bash
  npm run test:e2e
  ```

- **Run with UI mode**: Run tests with the UI mode for debugging
  ```bash
  npm run test:e2e:ui
  ```

- **Debug tests**: Run tests in debug mode with browser window
  ```bash
  npm run test:e2e:debug
  ```

- **Show report**: Open the HTML report after tests complete
  ```bash
  npm run test:e2e:report
  ```

## Visual Testing

Playwright supports visual comparison testing:

```typescript
// e2e-tests/specs/visual.spec.ts
import { test, expect } from '@playwright/test';

test('homepage visual regression', async ({ page }) => {
  await page.goto('/');
  
  // Take a screenshot and compare with baseline
  await expect(page).toHaveScreenshot('homepage.png', {
    maxDiffPixelRatio: 0.01
  });
});
```

To update snapshots when UI changes:

```bash
npx playwright test --update-snapshots
```

## Authentication Helpers

Create helpers for common authentication scenarios:

```typescript
// e2e-tests/helpers/auth.ts
import { Page, APIRequestContext } from '@playwright/test';

export async function loginViaApi(request: APIRequestContext, page: Page) {
  const response = await request.post('/api/auth/login', {
    data: {
      email: 'test@example.com',
      password: 'password123'
    }
  });
  
  // Store authentication state
  await page.context().storageState({ path: './e2e-tests/fixtures/auth-state.json' });
  
  return response;
}

// Use in tests
// e2e-tests/specs/protected-page.spec.ts
import { test } from '@playwright/test';
import { loginViaApi } from '../helpers/auth';

test.beforeEach(async ({ page, request }) => {
  await loginViaApi(request, page);
});

test('authenticated user can access protected page', async ({ page }) => {
  await page.goto('/dashboard');
  // Test protected content
});
```

## Best Practices

1. **Use data-testid attributes**: Add `data-testid` attributes to elements for stable selectors
2. **Isolate tests**: Make tests independent of each other
3. **Clean up after tests**: Reset state between tests, especially database state
4. **Use API for setup**: Set up test data via API calls rather than UI interactions when possible
5. **Run in CI**: Include Playwright tests in your CI workflow
6. **Wait for right events**: Use proper waiting mechanisms instead of arbitrary delays
7. **Use the Page Object Model**: Encapsulate page interactions in page objects
8. **Take screenshots for debugging**: Use screenshots to debug test failures
