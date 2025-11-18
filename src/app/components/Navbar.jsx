'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/tentang-kami', label: 'Tentang Kami' },
    { href: '/syarikat', label: 'Syarikat' },
    { href: '/hubungi-kami', label: 'Hubungi Kami' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo/eq-group-logo.jpeg"
              alt="EQ Group Global Logo"
              width={150}
              height={50}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive
                      ? isScrolled
                        ? 'text-accent'
                        : 'text-secondary'
                      : isScrolled
                      ? 'text-slate-700 hover:text-accent'
                      : 'text-secondary hover:text-accent'
                  }`}
                >
                  {item.label}
                  {/* Animated Underline */}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                      isActive 
                        ? isScrolled
                          ? 'bg-accent w-full'
                          : 'bg-secondary w-full'
                        : 'bg-accent w-0 hover:w-full'
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled 
                ? 'text-slate-700 hover:text-accent' 
                : 'text-secondary hover:text-accent'
            } focus:outline-none`}
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
        <div id="mobile-menu" className="hidden md:hidden pb-3">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? isScrolled
                        ? 'text-accent border-l-4 border-accent pl-3'
                        : 'text-secondary border-l-4 border-secondary pl-3'
                      : isScrolled
                      ? 'text-slate-700 hover:text-accent pl-3'
                      : 'text-secondary hover:text-accent pl-3'
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

