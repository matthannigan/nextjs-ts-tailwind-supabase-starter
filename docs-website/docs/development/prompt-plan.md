---
sidebar_position: 2
---

# Prompt 1: Project Initialization

```
You are an expert software developer tasked with building the foundation of a starter template for a contemporary web-based application. 

For this first step, you need to initialize the project with Next.js 14, TypeScript 5.2+, and TailwindCSS 3.3+.

Requirements:
1. Create a Next.js 14 project with TypeScript 5.2+ using the App Router
2. Configure TailwindCSS 3.3+ with a basic configuration
3. Set up ESLint 8.x and Prettier 3.x with appropriate rules for a Next.js TypeScript project
4. Create a basic folder structure following Next.js 14 App Router conventions
5. Implement a simple Layout component with header and footer using React 18 components
6. Add a basic page that uses the Layout component

Please provide:
1. Commands to initialize the project
2. Configuration files for Next.js 14, TypeScript 5.2+, TailwindCSS 3.3+, ESLint 8.x, and Prettier 3.x
3. Folder structure description
4. Implementation of the Layout component with basic Header and Footer
5. A simple page using the Layout

Ensure the implementation follows best practices for Next.js 14 applications and TypeScript 5.2+, taking advantage of React 18 features where appropriate.
```

# Prompt 2: Set Up Testing Infrastructure

```
You've successfully initialized the starter template with Next.js 14, TypeScript 5.2+, and TailwindCSS 3.3+. Now, you need to set up a robust testing infrastructure.

Your task is to implement a testing setup using Jest 29.x and React Testing Library 14.x.

Requirements:
1. Install and configure Jest 29.x with TypeScript 5.2+ support
2. Set up React Testing Library 14.x
3. Configure test file patterns and test environment
4. Create test utilities for common testing scenarios
5. Write example tests for the existing Layout component
6. Ensure tests can be run with npm commands

Please provide:
1. Commands to install testing dependencies
2. Configuration files for Jest 29.x
3. Test utility files (if needed)
4. Example test for the Layout component
5. Updates to package.json for test scripts

Make sure the testing setup follows best practices for Next.js 14 applications and enables effective testing of both UI components and utility functions.

Also refer to the tasks listed in 1.5 Configure Testing Infrastructure in ./to-do.md. As tasks are completed mark them with [x].
```

# Prompt 3: Supabase Setup and Configuration

```
Now that you have the starter template application set up with Next.js 14, TypeScript 5.2+, TailwindCSS 3.3+, and testing infrastructure, it's time to integrate Supabase 2.x for authentication and database functionality.

Your task is to set up Supabase integration for the application.

Requirements:
1. Install Supabase client library (@supabase/supabase-js v2.x)
2. Create a Supabase client utility
3. Set up environment variables for Supabase connection
4. Create a basic authentication provider using React 18's Context API
5. Implement a useSupabase hook for easy access to Supabase client
6. Ensure the configuration works in both development and production
7. Add appropriate TypeScript 5.2+ types for Supabase

Please provide:
1. Commands to install Supabase dependencies
2. Supabase client utility implementation
3. Environment variable setup (.env.example file)
4. Basic authentication context implementation
5. useSupabase hook implementation
6. Any necessary types for Supabase integration

Make sure to follow best practices for managing environment variables in Next.js 14 and creating reusable React 18 contexts.
```

# Prompt 4: Database Schema Implementation

```
Now that you have set up Supabase 2.x integration for the starter template application, you need to implement the database schema for the core entities.

Your task is to create the SQL scripts and TypeScript 5.2+ interfaces for the database schema.

Requirements:
1. Create SQL scripts for the following tables:
   - users
2. Implement Row Level Security (RLS) policies for these tables in Supabase
3. Define TypeScript 5.2+ interfaces that match the database schema
4. Create a database types file for use throughout the application
5. Implement basic database helper functions for common operations with Supabase 2.x

Please provide:
1. SQL scripts for creating tables in Supabase
2. SQL scripts for setting up RLS policies
3. TypeScript 5.2+ interfaces for database entities
4. Database helper functions for common operations
5. Any necessary type guards or utility types

Ensure the schema follows the specifications from the project requirements and implements proper security practices with RLS in Supabase.
```

# Prompt 5: Authentication Context Implementation

```
With the Supabase 2.x integration and database schema in place for the starter template application, you now need to implement a comprehensive authentication context to manage user sessions.

Your task is to create a full-featured authentication context that handles login, registration, and anonymous sessions using Supabase Auth.

Requirements:
1. Create a comprehensive AuthContext with React 18's Context API
2. Implement a useAuth hook for components to access authentication state
3. Add functions for login, registration, logout, and anonymous sessions using Supabase Auth
4. Implement session persistence with Supabase's session management
5. Add loading and error states for authentication operations
6. Create TypeScript 5.2+ types for authentication state and functions
7. Write tests for the authentication context using Jest 29.x

Please provide:
1. Complete AuthContext implementation
2. useAuth hook implementation
3. Authentication utility functions
4. Session persistence implementation
5. TypeScript 5.2+ types for authentication
6. Tests for the authentication context

Ensure the implementation handles both registered users and anonymous sessions, with appropriate error handling and loading states using Supabase Auth 2.x features.
```

# Prompt 6: Authentication Forms Implementation

```
Now that you have the authentication context set up with Supabase Auth for the starter template application, you need to create the user-facing authentication forms.

Your task is to implement registration, login, and anonymous login forms using the authentication context you've created.

Requirements:
1. Create a Registration form component
2. Implement a Login form component
3. Create an Anonymous Login form component
4. Add form validation for all forms using Zod 3.x
5. Implement error handling and display
6. Create loading states for form submission
7. Make forms fully responsive with TailwindCSS 3.3+
8. Write tests for all form components with React Testing Library 14.x

Please provide:
1. Registration form component implementation
2. Login form component implementation
3. Anonymous Login form component implementation
4. Form validation logic with Zod 3.x
5. Error handling implementation
6. CSS for responsive design using TailwindCSS 3.3+
7. Tests for all form components

Ensure the forms provide a good user experience with appropriate validation, error messages, and loading indicators. Make sure they integrate with the Supabase Auth context you've already built.
```

# Prompt 7: Protected Routes Implementation

```
With authentication forms and context in place for the starter template application, you now need to implement protected routes to ensure that certain pages are only accessible to authenticated users.

Your task is to create a protected route system using Next.js 14 and the Supabase Auth context.

Requirements:
1. Create middleware or route protection for Next.js 14 App Router
2. Implement redirect logic for unauthenticated users
3. Add loading state handling during authentication check
4. Create different levels of protection (any user, registered user only)
5. Implement custom error and unauthorized pages
6. Write tests for the protected route system with Jest 29.x

Please provide:
1. Route protection implementation for Next.js 14 App Router
2. Redirect logic implementation
3. Loading state component
4. Example of using the protection with a protected page
5. Custom error and unauthorized pages
6. Tests for the protected route system

Ensure the implementation correctly integrates with the Next.js 14 App Router and your Supabase Auth context, providing a seamless experience for users.
```

# Prompt 8: Integration and Final Testing

```
You've successfully implemented all the components and functionality for Phase 1 of the starter template application. Now it's time to integrate everything and perform final testing.

Your task is to ensure all parts of the application work together seamlessly and fix any integration issues.

Requirements:
1. Create a comprehensive test plan for Phase 1 functionality
2. Implement end-to-end tests for the complete user flows using Playwright 1.40+
3. Check for any integration issues between components
4. Ensure mobile responsiveness for all screens with TailwindCSS 3.3+
5. Fix any bugs or issues found during testing
6. Create a summary of Phase 1 completion

Please provide:
1. Test plan for Phase 1
2. End-to-end test implementation with Playwright 1.40+
3. Integration check results
4. Mobile responsiveness report
5. Bug fixes (if any)
6. Phase 1 completion summary

Ensure all parts of the application work together correctly and provide a seamless experience for users. Document any issues found and their resolutions.
```

# Prompt 9: Documentation and Developer Onboarding

```
Now that Phase 1 of the starter template application is complete and tested, you need to create documentation for the project and prepare for developer onboarding.

Your task is to create comprehensive documentation for the codebase and set up developer onboarding materials.

Requirements:
1. Update the README with project overview, setup instructions, and usage
2. Create API documentation for all endpoints
3. Document the database schema and relationships in Supabase
4. Write component documentation with usage examples
5. Create developer onboarding guide
6. Prepare a local development environment setup guide
7. Document testing procedures and best practices

Please provide:
1. Updated README.md
2. API documentation
3. Database schema documentation for Supabase
4. Component documentation
5. Developer onboarding guide
6. Local development setup guide
7. Testing documentation

Ensure the documentation is clear, comprehensive, and follows best practices for technical documentation. Make it easy for new developers to understand the codebase and start contributing.
```
