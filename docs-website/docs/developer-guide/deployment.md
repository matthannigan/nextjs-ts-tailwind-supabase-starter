---
---

# Deployment

This guide covers deploying your Next.js TS Tailwind Supabase Starter application to production environments.

## Deployment Options

The starter template supports various deployment options:

1. **Vercel** (recommended for Next.js applications)
2. **Netlify**
3. **AWS Amplify**
4. **Docker + Self-hosted**

## Environment Setup

Before deploying, ensure you have set up the following environment variables in your deployment environment:

```
# Next.js
NEXT_PUBLIC_APP_URL=https://your-app-domain.com

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## Deploying to Vercel

Vercel is the platform created by the team behind Next.js and offers the most seamless deployment experience.

### Steps:

1. **Push your code to a Git repository** (GitHub, GitLab, BitBucket)

2. **Connect your repository to Vercel**:
   - Create a Vercel account at [vercel.com](https://vercel.com)
   - Click "New Project" and import your repository
   - Select "Next.js" as the framework preset

3. **Configure environment variables**:
   - Add the environment variables mentioned above
   - You can set different values for production, preview, and development environments

4. **Deploy**:
   - Click "Deploy" to trigger the initial deployment
   - Vercel will automatically build and deploy your application

5. **Set up automatic deployments**:
   - By default, Vercel deploys automatically on every push to the main branch
   - You can customize this behavior in the project settings

## Deploying to Netlify

Netlify is another popular option for deploying Next.js applications.

### Steps:

1. **Push your code to a Git repository**

2. **Connect your repository to Netlify**:
   - Create a Netlify account at [netlify.com](https://netlify.com)
   - Click "New site from Git" and import your repository

3. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Configure environment variables**:
   - Add the environment variables in the site settings

5. **Deploy**:
   - Click "Deploy site" to trigger the initial deployment

6. **Add the Netlify Next.js plugin**:
   - Install the plugin with `npm install -D @netlify/plugin-nextjs`
   - Add a `netlify.toml` file to your project root:

```toml
[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## Deploying with Docker

For self-hosted deployments, you can use Docker.

### Creating a Dockerfile

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Configuring Next.js for Docker

Update your `next.config.js` to enable standalone mode:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // ... other config
};

module.exports = nextConfig;
```

### Docker Compose (Optional)

For local development with Docker:

```yaml
# docker-compose.yml
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
      - NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Supabase Configuration for Production

When deploying to production, ensure your Supabase project is properly configured:

1. **Update authentication settings**:
   - Set the Site URL to your production domain
   - Configure redirect URLs for authentication
   - Set up email templates for authentication emails

2. **Update Row Level Security policies**:
   - Review and test RLS policies before deploying to production
   - Ensure all tables have appropriate RLS policies

3. **Database backups**:
   - Set up regular database backups
   - Consider implementing point-in-time recovery

## CI/CD Pipeline

The starter template can be integrated with popular CI/CD tools:

### GitHub Actions Example

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

## Post-Deployment Checks

After deploying, perform these checks:

1. **Test authentication flows** in the production environment
2. **Verify database connections** are working correctly
3. **Check for any CORS issues** with Supabase
4. **Test protected routes** to ensure they're properly secured
5. **Verify environment variables** are correctly set

## Performance Optimization

For production deployments, consider these optimizations:

1. **Enable Edge Runtime** for API routes where possible
2. **Implement ISR** (Incremental Static Regeneration) for frequently accessed pages
3. **Configure caching headers** for static assets
4. **Optimize images** using Next.js Image optimization
5. **Configure Content Security Policy** headers

## Monitoring and Analytics

Consider adding:

1. **Error tracking** (Sentry, LogRocket)
2. **Analytics** (Google Analytics, Plausible, Fathom)
3. **Performance monitoring** (Vercel Analytics)
4. **Uptime monitoring** (UptimeRobot, Pingdom)

## Next Steps

- Check out the [Version Reference](./version-reference.md) for recommended versions of all dependencies
- Read the [Contributing](./contributing.md) guide for information on contributing to the project