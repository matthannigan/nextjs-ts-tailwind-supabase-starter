import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ThemeProvider } from '@/contexts/theme-provider';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js TypeScript Tailwind Supabase Starter',
  description: 'A starter template with Next.js, TypeScript, Tailwind CSS, and Supabase',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="theme-preference">
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Toaster />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
