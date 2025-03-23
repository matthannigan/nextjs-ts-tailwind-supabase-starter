'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Home, LayoutDashboard, LogIn, ChevronDown, Palette } from 'lucide-react';
import { ThemeSwitch } from '@/components/ui/theme-switch';
import { cn } from '@/lib/utils';

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
    <header className="w-full py-4 px-6 bg-background border-b border-border">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Next.js Starter
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/" className="hover:text-primary flex items-center gap-1">
                <Home size={18} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-primary flex items-center gap-1">
                <LayoutDashboard size={18} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="relative" ref={dropdownRef}>
              <button
                className="hover:text-primary flex items-center gap-1"
                onClick={() => setShowDropdown(!showDropdown)}
                type="button"
                aria-expanded={showDropdown}
                aria-haspopup="true"
              >
                <Palette size={18} />
                <span>Showcase</span>
                <ChevronDown
                  size={16}
                  className={cn('transition-transform', showDropdown && 'rotate-180')}
                />
              </button>
              {showDropdown && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-popover border border-border z-10">
                  <div className="py-1">
                    <Link
                      href="/showcase/ui"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                      onClick={() => {
                        setShowDropdown(false);
                      }}
                    >
                      UI Components
                    </Link>
                    <Link
                      href="/showcase/icons"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                      onClick={() => {
                        setShowDropdown(false);
                      }}
                    >
                      Icons
                    </Link>
                    <Link
                      href="/showcase/mobile"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                      onClick={() => {
                        setShowDropdown(false);
                      }}
                    >
                      Mobile Version
                    </Link>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link href="/login" className="hover:text-primary flex items-center gap-1">
                <LogIn size={18} />
                <span>Login</span>
              </Link>
            </li>
            <li>
              <ThemeSwitch />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
