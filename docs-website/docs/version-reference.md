---
sidebar_position: 4
---

# Version Reference

This page provides a comprehensive list of recommended versions for all tools and libraries used in the Next.js TS Tailwind Supabase Starter template.

## Core Framework and Libraries

| Technology | Recommended Version | Notes |
|------------|---------------------|-------|
| Next.js | 14.2.x | Introduces the stable App Router, improved server components, and Turbopack improvements |
| React | 18.3.x | Includes concurrent rendering, automatic batching, and Suspense improvements |
| TypeScript | 5.4.x | Includes decorators, type-only imports, and the satisfies operator |
| TailwindCSS | 3.3.x | JIT compilation by default, arbitrary values, and better dark mode support |

## Development Tools

| Tool | Recommended Version | Notes |
|------|---------------------|-------|
| ESLint | 8.x | Best compatible with modern TypeScript and React |
| Prettier | 3.x | Improved performance and better handling of TypeScript |
| Jest | 29.x | Better TypeScript support and improved performance |
| React Testing Library | 14.x | Compatible with React 18 |
| Playwright | 1.40+ | Reliable end-to-end testing across browsers |

## Backend and Data Management

| Technology | Recommended Version | Notes |
|------------|---------------------|-------|
| Supabase | 2.x | Stable APIs for auth, database, and storage |
| @supabase/supabase-js | 2.x | Client library with TypeScript support |
| PostgreSQL | 15.x | Used by Supabase under the hood |

## Form Management and Validation

| Library | Recommended Version | Notes |
|---------|---------------------|-------|
| Zod | 3.x | TypeScript-first schema validation |
| React Hook Form | 7.x | Performant form management for React |

## UI Components and Styling

| Library | Recommended Version | Notes |
|---------|---------------------|-------|
| shadcn/ui | Latest as of Oct 2024 | Reusable components built on Radix UI |
| Radix UI | 1.x | Accessible component primitives |
| Lucide React | 0.263.x | SVG icon components |

## Data Fetching and State Management

| Library | Recommended Version | Notes |
|---------|---------------------|-------|
| TanStack Query (React Query) | 5.x | Data fetching and caching |
| Zustand | 4.x | Lightweight state management |

## Utility Libraries

| Library | Recommended Version | Notes |
|---------|---------------------|-------|
| date-fns | 2.x | Modern JavaScript date utility library |
| clsx | 2.x | Utility for constructing className strings |
| lodash | 4.x | Utility library for common operations |

## Authentication Features in Supabase

Supabase 2.x offers the following authentication methods:

1. Email/password authentication
2. Magic link authentication
3. OAuth providers (Google, GitHub, etc.)
4. Phone authentication
5. Anonymous sessions
6. Row Level Security (RLS) policies

## Realtime Features in Supabase

Supabase 2.x Realtime includes:

1. Broadcast - Simple pub/sub messaging
2. Presence - Track online users and their states
3. Postgres Changes - Subscribe to database changes

## Special Considerations

1. **Next.js App Router**: The App Router in Next.js 14 uses a different folder structure than the Pages Router. All routes should be placed in the app/ directory.

2. **React Server Components**: Next.js 14 uses React Server Components by default. Client components should be marked with "use client" directive.

3. **TypeScript Configuration**: Configure TypeScript for strict mode to take advantage of all type-checking features.

4. **Supabase Authentication**: Configure proper session handling and refresh mechanisms.

5. **Edge Functions**: Supabase provides Edge Functions for serverless logic if needed.

6. **Shadcn/UI**: These are not installed as a dependency but copied into your project. Follow their documentation for installation.

## Environment Variables

For Next.js 14 and Supabase 2.x, the following environment variables are recommended:

```
# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Optional for email services
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=example_username
EMAIL_SERVER_PASSWORD=example_password
```

## Version Compatibility Matrix

| Next.js | React | TypeScript | TailwindCSS | Supabase Client |
|---------|-------|------------|-------------|----------------|
| 14.0.x  | 18.2.x | 5.2.x-5.3.x | 3.3.x      | 2.x            |
| 13.x    | 18.2.x | 5.1.x-5.2.x | 3.3.x      | 2.x            |
| 12.x    | 18.1.x | 4.9.x-5.0.x | 3.0.x-3.2.x | 2.x            |

## Upgrading Dependencies

When upgrading dependencies, take these steps:

1. Check the changelog of each package for breaking changes
2. Run tests after each major upgrade
3. Update TypeScript types if necessary
4. Test authentication flows after upgrading Supabase
5. Follow the Next.js migration guide when upgrading major versions