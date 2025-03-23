import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Flex, Grid } from '@/components/ui/layout';

export default function Home() {
  return (
    <Flex
      className="min-h-[calc(100vh-136px)] py-12"
      direction="column"
      align="center"
      justify="center"
    >
      <div className="container px-4 md:px-6">
        <Flex direction="column" align="center" gap="lg" className="text-center">
          <Flex direction="column" gap="sm">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Next.js TypeScript Tailwind Supabase Starter
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              A modern full-stack starter template with Next.js, TypeScript, Tailwind CSS, and
              Supabase.
            </p>
          </Flex>

          <Flex gap="sm" className="min-[400px]:flex-row" direction="column">
            <Link href="/dashboard">
              <Button variant="default" size="lg">
                Dashboard
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg">
                Login
              </Button>
            </Link>
          </Flex>

          <Grid cols={1} className="mt-8 md:grid-cols-3" gap="lg">
            {/* Feature Card 1 */}
            <Flex direction="column" align="center" gap="sm" className="rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-blue-100 p-3">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold">Fast Development</h2>
              <p className="text-center text-gray-500">
                Build quickly with Next.js App Router and TypeScript.
              </p>
            </Flex>

            {/* Feature Card 2 */}
            <Flex direction="column" align="center" gap="sm" className="rounded-lg border p-6 shadow-sm">
              {/* ... existing SVG and content for second card ... */}
            </Flex>

            {/* Feature Card 3 */}
            <Flex direction="column" align="center" gap="sm" className="rounded-lg border p-6 shadow-sm">
              {/* ... existing SVG and content for third card ... */}
            </Flex>
          </Grid>
        </Flex>
      </div>
    </Flex>
  );
}