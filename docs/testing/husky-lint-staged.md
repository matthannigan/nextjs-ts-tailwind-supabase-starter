# Husky and lint-staged Configuration and Usage

This document covers how Husky and lint-staged are configured and used in this project to enforce code quality and standards through Git hooks.

## Overview

- **Husky**: A tool that enables Git hooks in your project
- **lint-staged**: A tool that runs linters on staged Git files
- **Purpose**: Ensures that only linted and properly formatted code gets committed

## Configuration

### Husky Configuration

Husky is configured in the project with the `.husky` directory containing Git hook scripts. If not yet configured, you can set it up with:

```bash
# Initialize Husky
npx husky init
```

This will create a `.husky` directory with a pre-commit hook. The pre-commit hook should be configured to run lint-staged:

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

### lint-staged Configuration

The lint-staged configuration is defined in the `package.json` file:

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

This configuration runs ESLint and Prettier on JavaScript/TypeScript files, and just Prettier on JSON and CSS files.

## How It Works

1. **Pre-commit Hook**: When you run `git commit`, Husky triggers the pre-commit hook
2. **lint-staged**: The pre-commit hook runs lint-staged
3. **Linting and Formatting**: lint-staged runs ESLint and Prettier only on the files that are staged for commit
4. **Commit Result**: If all checks pass, the commit proceeds; if any check fails, the commit is aborted

## Adding Custom Git Hooks

You can add additional Git hooks to enforce different rules:

### Add a Pre-push Hook for Tests

Create a file at `.husky/pre-push` with:

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm test
```

Make it executable:

```bash
chmod +x .husky/pre-push
```

This will run your tests before pushing changes.

### Add a Commit Message Hook

Create a file at `.husky/commit-msg` with:

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no -- commitlint --edit "$1"
```

This requires additional setup with `commitlint` to enforce commit message conventions.

## Customizing lint-staged Configuration

You can customize the lint-staged configuration to perform different actions on different file types:

```json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write",
    "jest --findRelatedTests"
  ],
  "*.md": "prettier --write",
  "*.css": [
    "stylelint --fix",
    "prettier --write"
  ]
}
```

## Bypassing Hooks

In emergency situations, you can bypass hooks with Git's `--no-verify` flag:

```bash
git commit --no-verify -m "Emergency fix"
```

However, this should be used sparingly.

## Troubleshooting

### Hooks Not Running

If hooks are not running:

1. Check if the hooks are executable:
   ```bash
   chmod +x .husky/*
   ```

2. Ensure Husky is installed:
   ```bash
   npm install husky --save-dev
   ```

3. Check if Git hooks path is set correctly:
   ```bash
   git config core.hooksPath
   ```
   It should point to `.husky`.

### ESLint or Prettier Errors

If you're getting ESLint or Prettier errors that prevent commits:

1. Run `npm run lint` and `npm run format` to see the errors
2. Fix the errors manually
3. Stage the changes and try committing again

## Best Practices

1. **Commit Small Changes**: Smaller commits are easier to validate and fix if there are issues
2. **Keep Hooks Fast**: Ensure your hooks run quickly to maintain a good developer experience
3. **Don't Skip Validation**: Avoid using `--no-verify` as it defeats the purpose of the hooks
4. **Run Tests Locally**: Run `npm test` before pushing to ensure all tests pass
5. **Include in CI**: Include the same checks in your CI pipeline to catch issues that bypass hooks

## Updating Hook Scripts

To update existing hook scripts:

1. Edit the files in the `.husky` directory
2. Make sure they remain executable after editing
3. Commit the changes to version control
