'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/tentang-kami', label: 'Tentang Kami' },
    { href: '/syarikat', label: 'Syarikat' },
    { href: '/hubungi-kami', label: 'Hubungi Kami' },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
            EQ GROUP GLOBAL
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700 hover:text-blue-600 focus:outline-none"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              menu?.classList.toggle('hidden');
            }}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 border-l-4 border-blue-600 pl-3'
                      : 'text-slate-700 hover:text-blue-600 pl-3'
                  }`}
                  onClick={() => {
                    const menu = document.getElementById('mobile-menu');
                    menu?.classList.add('hidden');
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

