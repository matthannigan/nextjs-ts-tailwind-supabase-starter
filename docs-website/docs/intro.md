---
sidebar_position: 1
---

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
git clone https://github.com/MGH/nextjs-ts-tailwind-supabase-starter.git
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

- [Project Structure](./structure) - Learn about the project organization
- [Authentication](./features/authentication) - Understand the authentication system
- [Database](./features/database) - Database schema and operations
- [Testing](./development/testing) - How to test the application
- [Deployment](./development/deployment) - Deployment instructions