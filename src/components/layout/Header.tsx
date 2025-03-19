'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Home, LayoutDashboard, LogIn, ChevronDown, Palette } from 'lucide-react';

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
              <Link href="/" className="hover:text-blue-500 flex items-center gap-1">
                <Home size={18} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-blue-500 flex items-center gap-1">
                <LayoutDashboard size={18} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="relative" ref={dropdownRef}>
              <button
                className="hover:text-blue-500 flex items-center gap-1"
                onClick={() => setShowDropdown(!showDropdown)}
                type="button"
                aria-expanded={showDropdown}
                aria-haspopup="true"
              >
                <Palette size={18} />
                <span>Showcase</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`}
                />
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
                    <Link
                      href="/showcase/icons"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setShowDropdown(false);
                      }}
                    >
                      Icons
                    </Link>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link href="/login" className="hover:text-blue-500 flex items-center gap-1">
                <LogIn size={18} />
                <span>Login</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
