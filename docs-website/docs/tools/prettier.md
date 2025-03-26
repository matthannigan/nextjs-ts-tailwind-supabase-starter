---
sidebar_position: 2
---

# Prettier Configuration and Usage

Prettier is an opinionated code formatter that enforces a consistent code style across your entire codebase. This document covers how Prettier is configured and used in this project.

## Overview

- **Version**: 3.x
- **Integration**: Works alongside ESLint with `eslint-config-prettier` to avoid conflicts

## Configuration

The project potentially uses a `.prettierrc.json` file for configuration. If not yet created, you can create one with the following default configuration:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 80,
  "trailingComma": "es5",
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

To customize the Prettier configuration, modify this file or create it if it doesn't exist.

## Default Commands

The following npm scripts are available for formatting:

- **Format all files**: Formats all files in the project
  ```bash
  npm run format
  ```

- **Check formatting**: Checks if files are formatted correctly without modifying them
  ```bash
  npm run format:check
  ```

## Integration with Git Hooks

Prettier is integrated with Git hooks through Husky and lint-staged. When you commit changes, Prettier will automatically format the staged files.

The configuration in `package.json`:

```json
"lint-staged": {
  "*.{js,jsx,ts,tsx,mjs}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,css}": [
    "prettier --write"
  ]
}
```

## Editor Integration

For the best development experience, integrate Prettier with your code editor:

### VS Code

1. Install the Prettier extension
2. Add the following configuration to your VS Code settings:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "prettier.requireConfig": true
}
```

## Ignoring Files

To exclude files from formatting, create a `.prettierignore` file in the project root. Example:

```
node_modules
.next
build
dist
out
coverage
public
```

## Customizing Formatting Rules

While Prettier is opinionated by design, you can customize certain aspects:

1. **Line Width**: Adjust `printWidth` for longer or shorter lines
2. **Quotes**: Toggle `singleQuote` to use double quotes instead
3. **Semicolons**: Set `semi` to false to remove semicolons
4. **Trailing Commas**: Configure `trailingComma` to your preference

## Best Practices

1. **Run format checks in CI**: Include `npm run format:check` in your CI workflow
2. **Format on save**: Configure your editor to format on save
3. **Consistent configuration**: Ensure all team members use the same Prettier configuration
4. **Avoid over-customization**: The power of Prettier is in its consistency with minimal configuration
