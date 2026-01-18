'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isHomePage = pathname === '/';
  const isSyarikatPage = pathname.startsWith('/syarikat');

  useEffect(() => {
    // Only track scroll on home page
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isDropdownOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/tentang-kami', label: 'Tentang Kami' },
  ];

  const syarikatItems = [
    { href: '/syarikat/smart-quran-malaysia-centre', label: 'Smart Quran Malaysia Centre' },
    { href: '/syarikat/emindtutor', label: 'eMindTutor' },
    { href: '/syarikat/core-hr-centre', label: 'Core HR Centre' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-md bg-white/90' 
        : 'bg-transparent'
    }`}>
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 pt-2">
        <div className="flex justify-between items-center h-12 md:h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            <Image
              src="/images/logo/eq-group-logo.png"
              alt="EQ Group Global Logo"
              width={120}
              height={40}
              className="object-contain w-auto h-10 md:h-12"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 md:flex">
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

            {/* Syarikat Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`relative text-sm font-medium transition-colors flex items-center ${
                  isSyarikatPage
                    ? isScrolled
                      ? 'text-accent'
                      : 'text-secondary'
                    : isScrolled
                    ? 'text-slate-700 hover:text-accent'
                    : 'text-secondary hover:text-accent'
                }`}
              >
                Syarikat
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {/* Animated Underline */}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                    isSyarikatPage 
                      ? isScrolled
                        ? 'bg-accent w-full'
                        : 'bg-secondary w-full'
                      : 'bg-accent w-0 hover:w-full'
                  }`}
                ></span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 top-full z-50 py-2 mt-2 w-64 bg-white rounded-lg border shadow-xl border-slate-200">
                  {syarikatItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          isActive
                            ? 'font-semibold text-accent bg-accent/10'
                            : 'text-slate-700 hover:text-accent hover:bg-slate-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Hubungi Kami */}
            <Link
              href="/hubungi-kami"
              className={`relative text-sm font-medium transition-colors ${
                pathname === '/hubungi-kami'
                  ? isScrolled
                    ? 'text-accent'
                    : 'text-secondary'
                  : isScrolled
                  ? 'text-slate-700 hover:text-accent'
                  : 'text-secondary hover:text-accent'
              }`}
            >
              Hubungi Kami
              {/* Animated Underline */}
              <span 
                className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                  pathname === '/hubungi-kami' 
                    ? isScrolled
                      ? 'bg-accent w-full'
                      : 'bg-secondary w-full'
                    : 'bg-accent w-0 hover:w-full'
                }`}
              ></span>
            </Link>
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
        <div id="mobile-menu" className="hidden pb-3 md:hidden">
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
                        ? 'pl-3 border-l-4 text-accent border-accent'
                        : 'pl-3 border-l-4 text-secondary border-secondary'
                      : isScrolled
                      ? 'pl-3 text-slate-700 hover:text-accent'
                      : 'pl-3 text-secondary hover:text-accent'
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

            {/* Mobile Syarikat Dropdown */}
            <div className="dropdown-container">
              <button
                onClick={() => {
                  const submenu = document.getElementById('mobile-syarikat-submenu');
                  submenu?.classList.toggle('hidden');
                }}
                className={`text-sm font-medium transition-colors flex items-center justify-between w-full ${
                  isSyarikatPage
                    ? isScrolled
                      ? 'pl-3 border-l-4 text-accent border-accent'
                      : 'pl-3 border-l-4 text-secondary border-secondary'
                    : isScrolled
                    ? 'pl-3 text-slate-700 hover:text-accent'
                    : 'pl-3 text-secondary hover:text-accent'
                }`}
              >
                <span>Syarikat</span>
                <svg 
                  className="w-4 h-4"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mobile Submenu */}
              <div id="mobile-syarikat-submenu" className="hidden pl-6 mt-2 space-y-1">
                {syarikatItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block text-sm transition-colors py-2 ${
                        isActive
                          ? 'font-semibold text-accent'
                          : isScrolled
                          ? 'text-slate-600 hover:text-accent'
                          : 'text-slate-300 hover:text-secondary'
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

            {/* Mobile Hubungi Kami */}
            <Link
              href="/hubungi-kami"
              className={`text-sm font-medium transition-colors ${
                pathname === '/hubungi-kami'
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
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

