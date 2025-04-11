# Next.js TS Tailwind Supabase Starter

A modern, full-featured starter template for building web applications with Next.js 14, TypeScript 5.4+, TailwindCSS 3.3+, and Supabase 2.x.

## Features

- **Next.js 14** with App Router for efficient page routing and server components
- **TypeScript 5.4+** for type safety and enhanced developer experience
- **TailwindCSS 3.3+** for utility-first styling
- **Supabase 2.x** for authentication and database management
- **Jest 29.x** and **React Testing Library 14.x** for testing
- **ESLint 8.x** and **Prettier 3.x** for code quality and formatting
- Complete authentication system with email/password and anonymous sessions
- Protected routes with role-based access control
- Responsive UI components built with TailwindCSS

## Quick Start

### Prerequisites

- Node.js 18.0 or later
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/matthannigan/nextjs-ts-tailwind-supabase-starter.git
cd nextjs-ts-tailwind-supabase-starter
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` to add your Supabase URL and anon key.

4. Start the development server:

```bash
npm run dev
```

Your application will be available at http://localhost:3000.

## Documentation Sections

### Developer Guide

- [Project Structure](https://matthannigan.github.io/nextjs-ts-tailwind-supabase-starter/developer-guide/structure) - Learn about the project organization
- [Database Integration](https://matthannigan.github.io/nextjs-ts-tailwind-supabase-starter/developer-guide/database-features/integration) - Database schema and operations
- [Authentication](https://matthannigan.github.io/nextjs-ts-tailwind-supabase-starter/developer-guide/database-features/authentication) - Understand the authentication system
- [Testing](https://matthannigan.github.io/nextjs-ts-tailwind-supabase-starter/developer-guide/testing) - How to test the application
- [Deployment](https://matthannigan.github.io/nextjs-ts-tailwind-supabase-starter/developer-guide/deployment) - Deployment instructions
- [Tools](https://matthannigan.github.io/nextjs-ts-tailwind-supabase-starter/developer-guide/tools/) -  Pre-installed developer aids
- [Contributing](https://matthannigan.github.io/nextjs-ts-tailwind-supabase-starter/developer-guide/contributing) - Process for contributing bug fixes and feature additions
- [Version Reference](https://matthannigan.github.io/nextjs-ts-tailwind-supabase-starter/developer-guide/version-reference) - List of recommended versions for all tools and libraries

### React Components

- [Layout](https://matthannigan.github.io/nextjs-ts-tailwind-supabase-starter/components/layout) - Components for displaying app pages
- [Navigation](https://matthannigan.github.io/nextjs-ts-tailwind-supabase-starter/components/navigation) - Components for moving between app pages
- [Basic UI](https://matthannigan.github.io/nextjs-ts-tailwind-supabase-starter/components/ui) - shadcn UI components already included in project
- [Forms](https://matthannigan.github.io/nextjs-ts-tailwind-supabase-starter/components/forms) - shadcn Form and Input components already included in project 
- **Style** - [Typography](https://matthannigan.github.io/nextjs-ts-tailwind-supabase-starter/components/style/typography) and [Light/Dark Theme Switcher](https://matthannigan.github.io/nextjs-ts-tailwind-supabase-starter/components/style/theme-switch)

### Development Journey

- [Blog](https://matthannigan.github.io/nextjs-ts-tailwind-supabase-starter/blog) - **in development** journal about approach, misteps, and successes building the template

## Version History

### v0.3 - 2025-04-10
- Installed shadcn@2.3.0 and essential components
- Add UI components showcase page
- Added component documentation
- Added React unit tests for all components
- Added jest-html-reporters for generating test reports
- Refactored documentation to use Docusaurus

### v0.2.x - 2025-03-17

- Configured testing infrastructure
- Created pre-commit hooks for linting and formatting
- Added Playwright for end-to-end testing
- Added documentation for testing and linting tools

### v0.1 - 2025-03-16 - Initial Release

- Initialized Next.js project
- Configured styling and linting
- Set-up project structure
- Implemented basic layout components
