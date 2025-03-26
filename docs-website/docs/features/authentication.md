---
sidebar_position: 1
---

# Authentication

This starter template includes a complete authentication system built with Supabase Auth 2.x, featuring email/password authentication, anonymous sessions, and protected routes.

## Authentication Context

The authentication system is built around the `AuthContext` (located in `contexts/AuthContext.tsx`), which provides authentication state and methods to all components via React's Context API.

```tsx
import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { User, Session } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signInAnonymously: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

## Authentication Methods

### Registration (Sign Up)

The starter template provides a complete registration flow using Supabase Auth:

```tsx
const signUp = async (email: string, password: string) => {
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });
  
  if (error) {
    throw error;
  }
};
```

Registration is handled in the `RegisterForm.tsx` component with form validation using Zod.

### Login (Sign In)

Login functionality is provided through Supabase Auth:

```tsx
const signIn = async (email: string, password: string) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) {
    throw error;
  }
};
```

The login form is implemented in the `LoginForm.tsx` component.

### Anonymous Sessions

The starter template supports anonymous sessions for users who want to use the application without creating an account:

```tsx
const signInAnonymously = async () => {
  const { error } = await supabase.auth.signInAnonymously();
  
  if (error) {
    throw error;
  }
};
```

Anonymous users can later convert to registered users if desired.

### Sign Out

Users can sign out using the provided method:

```tsx
const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    throw error;
  }
};
```

## Protected Routes

The template includes a system for protecting routes that require authentication using Next.js 14 middleware:

```tsx
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
    const redirectUrl = new URL('/login', req.url);
    redirectUrl.searchParams.set('redirectedFrom', req.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }
  
  return res;
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
```

## Session Management

The starter template handles session persistence automatically using Supabase Auth:

```tsx
// In AuthContext.tsx
useEffect(() => {
  const { data: { subscription } } = supabase.auth.onAuthStateChange(
    (event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    }
  );

  return () => {
    subscription.unsubscribe();
  };
}, []);
```

This ensures that users remain authenticated across page refreshes and browser sessions if they choose to remain logged in.

## Authentication Components

The template includes pre-built authentication components:

- `RegisterForm.tsx` - User registration form with validation
- `LoginForm.tsx` - Login form with "Remember me" option
- `AnonymousLoginForm.tsx` - One-click anonymous session creation
- `UserMenu.tsx` - User profile and logout menu

## Custom Hooks

The `useAuth` hook provides an easy way to access authentication functionality:

```tsx
// Example usage in a component
import { useAuth } from '@/contexts/AuthContext';

const ProfilePage = () => {
  const { user, signOut } = useAuth();
  
  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {user?.email}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};
```

## Next Steps

- Learn about [database operations](./database) to understand how user data is stored
- Check the protected routes documentation for more advanced security scenarios