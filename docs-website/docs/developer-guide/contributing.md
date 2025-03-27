---
---

# Contributing

This guide outlines the process for contributing to the Next.js TS Tailwind Supabase Starter project. We welcome contributions of all kinds, from bug fixes to feature additions.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.0 or later
- npm or yarn
- Git

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:

```bash
git clone https://github.com/YOUR-USERNAME/nextjs-ts-tailwind-supabase-starter.git
cd nextjs-ts-tailwind-supabase-starter
```

3. Add the original repository as a remote:

```bash
git remote add upstream https://github.com/MGH/nextjs-ts-tailwind-supabase-starter.git
```

4. Install dependencies:

```bash
npm install
```

## Development Workflow

### Creating a Branch

Create a new branch for your changes:

```bash
git checkout -b feature/your-feature-name
```

Use a descriptive branch name that reflects the changes you're making. Prefix the branch name with:

- `feature/` for new features
- `fix/` for bug fixes
- `docs/` for documentation changes
- `chore/` for maintenance tasks

### Making Changes

1. Make your changes to the codebase
2. Ensure your code follows the project's coding standards (ESLint and Prettier are configured)
3. Run tests to ensure your changes don't break existing functionality:

```bash
npm run test
```

4. If you're adding a new feature, make sure to add appropriate tests

### Committing Changes

Follow the [Conventional Commits](https://www.conventionalcommits.org/) format for your commit messages:

```
type(scope): short description

longer description if necessary
```

Where `type` is one of:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Changes that don't affect the code's functionality (formatting, etc.)
- `refactor`: Code changes that neither fix a bug nor add a feature
- `test`: Adding or fixing tests
- `chore`: Changes to the build process, tools, etc.

And `scope` is optional but should indicate what part of the codebase is affected.

Example:

```
feat(auth): add support for magic link authentication
```

### Submitting a Pull Request

1. Push your changes to your fork:

```bash
git push origin feature/your-feature-name
```

2. Go to the original repository on GitHub and click "New Pull Request"
3. Select your branch and fill out the PR template
4. Submit the pull request

### Pull Request Review Process

Pull requests will be reviewed by the maintainers. During the review:

1. Automated tests will run to verify your changes
2. Maintainers will review your code for:
   - Functionality
   - Code quality
   - Test coverage
   - Documentation
3. Feedback may be provided requesting changes
4. Once approved, your PR will be merged

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Ensure strong typing (avoid `any`)
- Follow the existing type structure

### React and Next.js

- Use functional components with hooks
- Follow React 18 best practices
- Use Next.js 14 App Router conventions
- Prefer server components when appropriate

### CSS and Styling

- Use TailwindCSS for styling
- Follow the project's utility-first approach
- Use the shadcn/ui component patterns when applicable

### Testing

- Write tests for all new functionality
- Maintain or improve test coverage
- Follow the testing patterns described in the [Testing documentation](./testing)

## Documentation

When making changes, update the relevant documentation:

- Add or update docstrings for functions and components
- Update markdown documentation in the `/docs-website` directory
- For significant features, add examples

## Versioning

We follow [Semantic Versioning](https://semver.org/):

- MAJOR version for incompatible API changes
- MINOR version for backwards-compatible functionality
- PATCH version for backwards-compatible bug fixes

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:

- Be respectful and inclusive
- Be constructive in feedback
- Focus on the issue, not the person
- Be patient with others, especially newcomers

## Recognition

Contributors will be acknowledged in the project's README.md and CONTRIBUTORS.md files.

## Questions and Support

If you have questions or need support:

- Open an issue for bugs or feature requests
- Use discussions for general questions
- Refer to the documentation first

Thank you for contributing to the Next.js TS Tailwind Supabase Starter project!