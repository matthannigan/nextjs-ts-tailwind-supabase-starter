import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
/*
Above is not a standard JavaScript comment meant to be ignored by the runtime, 
but rather a special type of comment that provides type information to TypeScript 
and IDE tools like VS Code. It tells TypeScript that the nextConfig variable 
should be of type NextConfig which is imported from the 'next' package
*/
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
// Test comment
// Another test comment
// Final test comment
