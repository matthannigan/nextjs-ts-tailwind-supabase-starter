import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Next.js Starter
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-blue-500">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-blue-500">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 