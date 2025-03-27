---
sidebar_position: 1
sidebar_label: ESLint
---

# ESLint Configuration and Usage

ESLint is a static code analysis tool for identifying problematic patterns in JavaScript and TypeScript code. This document covers how ESLint is configured and used in this project.

## Overview

- **Version**: 8.x
- **Primary plugins**: 
  - `@typescript-eslint/eslint-plugin`: TypeScript-specific linting rules
  - `eslint-plugin-react`: React-specific linting rules
  - `eslint-plugin-react-hooks`: Rules for React Hooks
  - `eslint-plugin-jsx-a11y`: Accessibility rules for JSX
  - `eslint-config-prettier`: Turns off ESLint rules that might conflict with Prettier

## Configuration

The project uses the standard Next.js ESLint configuration with additional custom rules. The configuration is managed through package.json and potential future `.eslintrc.js` or `.eslintrc.json` files.

To customize the ESLint configuration, you can create a new file at the project root:

```js
// .eslintrc.js
module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  rules: {
    // Add custom rules here
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};
```

## Default Commands

The following npm scripts are available for linting:

- **Lint check**: Checks for linting errors without fixing them
  ```bash
  npm run lint
  ```

- **Lint with auto-fix**: Automatically fixes linting errors where possible
  ```bash
  npm run lint -- --fix
  ```

## Integration with Git Hooks

ESLint is integrated with Git hooks through Husky and lint-staged. When you commit changes, ESLint will automatically run on the staged files.

The configuration in `package.json`:

```json
"lint-staged": {
  "*.{js,jsx,ts,tsx,mjs}": [
    "eslint --fix",
    "prettier --write"
  ]
}
```

## Editor Integration

For the best development experience, integrate ESLint with your code editor:

### VS Code

1. Install the ESLint extension
2. Add the following configuration to your VS Code settings:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

## Ignoring Files

To exclude files from linting, create a `.eslintignore` file in the project root. Example:

```
node_modules
.next
build
dist
out
coverage
```

## Best Practices

1. **Run lint checks locally**: Always run `npm run lint` before pushing changes
2. **Fix issues early**: Address linting issues as they arise rather than ignoring them
3. **Understand the rules**: Take time to understand why certain patterns are flagged as errors
4. **Create custom rules sparingly**: Only add custom rules when absolutely necessary
