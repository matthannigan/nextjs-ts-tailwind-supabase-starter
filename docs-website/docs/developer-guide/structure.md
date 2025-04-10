---
---

# Project Structure

This starter template follows a structured organization to keep the codebase maintainable and scalable.

## Directory Structure

```
nextjs-ts-tailwind-supabase-starter/
├── app/                    # Next.js 14 App Router
│   ├── api/                # API routes
│   ├── (auth)/             # Authentication-related pages
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/             # React components
│   ├── auth/               # Authentication components
│   ├── layout/             # Layout components (Header, Footer)
│   └── ui/                 # Reusable UI components
├── contexts/               # React contexts
│   └── AuthContext.tsx     # Authentication context
├── lib/                    # Library code and utilities
│   ├── db/                 # Database utilities
│   └── supabase.ts         # Supabase client
├── hooks/                  # Custom React hooks
├── utils/                  # Utility functions
├── types/                  # TypeScript type definitions
├── styles/                 # Global styles and Tailwind config
└── tests/                  # Test files
```

## Key Files

- `app/layout.tsx`: The main layout wrapper for the application.
- `app/page.tsx`: The homepage of the application.
- `components/layout/Layout.tsx`: The main layout component.
- `contexts/AuthContext.tsx`: Provides authentication state and methods.
- `lib/supabase.ts`: Configures and exports the Supabase client.
- `types/database.types.ts`: TypeScript interfaces for the database schema.

## Component Architecture

This starter uses a component-based architecture with reusable UI components and composition patterns. Components are organized by feature and responsibility:

### Layout Components

Located in `components/layout/`, these components form the structural elements of the application:

- `Layout.tsx`: The main wrapper component
- `Header.tsx`: The site header with navigation
- `Footer.tsx`: The site footer

### UI Components

Located in `components/ui/`, these are reusable UI elements:

- `Button.tsx`: Customized button component
- `Input.tsx`: Form input component
- `Card.tsx`: Container component for content

### Authentication Components

Located in `components/auth/`, these handle user authentication:

- `LoginForm.tsx`: Email/password login form
- `RegisterForm.tsx`: User registration form
- `AnonymousLoginForm.tsx`: Anonymous session creation

## App Router Structure

This template uses Next.js 14's App Router for routing. The main directories include:

- `app/`: Contains routes and layouts
- `app/api/`: Server-side API routes
- `app/(auth)/`: Authentication-related pages (grouped)

## Next Steps

- Read the [Authentication](./database-features/authentication) guide to understand how user authentication works
- Check the Database documentation for database schema and operations
- Explore the [Testing](./testing) guide for writing tests