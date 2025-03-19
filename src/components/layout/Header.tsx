'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            <li className="relative" ref={dropdownRef}>
              <button
                className="hover:text-blue-500 flex items-center"
                onClick={() => setShowDropdown(!showDropdown)}
                type="button"
                aria-expanded={showDropdown}
                aria-haspopup="true"
              >
                Showcase
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {showDropdown && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1">
                    <Link
                      href="/showcase/ui"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setShowDropdown(false);
                      }}
                    >
                      UI Components
                    </Link>
                  </div>
                </div>
              )}
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
