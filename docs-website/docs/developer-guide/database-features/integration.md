---
sidebar_position: 2
sidebar_label: Integration
---

# Database Integration

This starter template includes full integration with Supabase Database 2.x, providing a PostgreSQL database with Row Level Security (RLS) policies and TypeScript type safety.

## Database Schema

The core database schema includes the following tables:

### Users Table

The users table extends Supabase Auth's built-in users with additional profile information:

```sql
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Set up Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create secure policies
CREATE POLICY "Users can view their own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- Create a trigger to create a profile when a user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id)
  VALUES (NEW.id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

## TypeScript Integration

The database schema is fully typed using TypeScript 5.4+ to provide type safety:

```typescript
// types/database.types.ts
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          display_name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          display_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          display_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
```

## Database Utilities

The starter template provides utility functions for common database operations:

```typescript
// lib/db/users.ts
import { supabase } from '../supabase';
import type { Database } from '@/types/database.types';

type Profile = Database['public']['Tables']['profiles']['Row'];

export const getUserProfile = async (userId: string): Promise<Profile | null> => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
    
  if (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
  
  return data;
};

export const updateUserProfile = async (
  userId: string,
  updates: Partial<Profile>
): Promise<Profile | null> => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();
    
  if (error) {
    console.error('Error updating user profile:', error);
    return null;
  }
  
  return data;
};
```

## Row Level Security (RLS)

The template uses Supabase's Row Level Security to protect data at the database level. RLS ensures that users can only access data they are authorized to see, even if the application code has a security vulnerability.

Key RLS policies included:

1. Users can only read their own profile data
2. Users can only update their own profile data
3. Anonymous users have limited access to public data

## Using the Database in Components

Example of using the database in a React component:

```tsx
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { getUserProfile } from '@/lib/db/users';
import type { Database } from '@/types/database.types';

type Profile = Database['public']['Tables']['profiles']['Row'];

const ProfilePage = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const profileData = await getUserProfile(user.id);
        setProfile(profileData);
      }
      setLoading(false);
    };
    
    fetchProfile();
  }, [user]);
  
  if (loading) return <div>Loading...</div>;
  if (!profile) return <div>Profile not found</div>;
  
  return (
    <div>
      <h1>Profile</h1>
      <p>Display Name: {profile.display_name || 'Not set'}</p>
      {/* More profile details */}
    </div>
  );
};
```

## Realtime Subscriptions

The starter template supports Supabase Realtime for live data updates:

```typescript
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { Database } from '@/types/database.types';

type Profile = Database['public']['Tables']['profiles']['Row'];

const useRealtimeProfile = (userId: string) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  
  useEffect(() => {
    // Initial fetch
    const fetchProfile = async () => {
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
        
      setProfile(data);
    };
    
    fetchProfile();
    
    // Set up realtime subscription
    const subscription = supabase
      .channel('profile-changes')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'profiles',
          filter: `id=eq.${userId}`,
        },
        (payload) => {
          setProfile(payload.new as Profile);
        }
      )
      .subscribe();
      
    return () => {
      supabase.removeChannel(subscription);
    };
  }, [userId]);
  
  return profile;
};
```

## Next Steps

- Learn about [testing](../development/testing) to understand how to test database operations
- Check the API routes documentation for implementing server-side endpoints