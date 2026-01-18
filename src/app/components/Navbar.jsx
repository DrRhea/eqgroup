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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'bg-white border-[#0a0a0a]' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="container px-6 mx-auto sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16 md:h-20">
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
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-base uppercase tracking-wide transition-colors ${
                    isActive
                      ? 'text-[#0675ad] font-black'
                      : isScrolled
                      ? 'text-[#0a0a0a] hover:text-[#0675ad] font-bold'
                      : 'text-white hover:text-[#0675ad] font-bold'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 bg-[#0675ad] w-full"></span>
                  )}
                </Link>
              );
            })}

            {/* Syarikat Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`relative text-base uppercase tracking-wide transition-colors flex items-center ${
                  isSyarikatPage
                    ? 'text-[#0675ad] font-black'
                    : isScrolled
                    ? 'text-[#0a0a0a] hover:text-[#0675ad] font-bold'
                    : 'text-white hover:text-[#0675ad] font-bold'
                }`}
              >
                Syarikat
                <svg 
                  className={`w-4 h-4 ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M19 9l-7 7-7-7" />
                </svg>
                {isSyarikatPage && (
                  <span className="absolute bottom-0 left-0 h-0.5 bg-[#0675ad] w-full"></span>
                )}
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 top-full z-50 w-80 bg-white border border-[#0a0a0a]">
                  {syarikatItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsDropdownOpen(false)}
                        className={`block px-6 py-3 text-sm uppercase tracking-wide transition-colors border-b border-[#0a0a0a]/10 last:border-b-0 ${
                          isActive
                            ? 'text-[#0675ad] bg-[#0a0a0a]/5 font-black'
                            : 'text-[#0a0a0a] hover:text-[#0675ad] hover:bg-[#0a0a0a]/5 font-bold'
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
              className={`relative text-base uppercase tracking-wide transition-colors ${
                pathname === '/hubungi-kami'
                  ? 'text-[#0675ad] font-black'
                  : isScrolled
                  ? 'text-[#0a0a0a] hover:text-[#0675ad] font-bold'
                  : 'text-white hover:text-[#0675ad] font-bold'
              }`}
            >
              Hubungi Kami
              {pathname === '/hubungi-kami' && (
                <span className="absolute bottom-0 left-0 h-0.5 bg-[#0675ad] w-full"></span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled 
                ? 'text-[#0a0a0a]' 
                : 'text-white'
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
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="square" strokeLinejoin="miter" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div id="mobile-menu" className="hidden pb-4 md:hidden border-t border-[#0a0a0a]/10">
          <div className="flex flex-col space-y-0 pt-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base uppercase tracking-wide py-3 transition-colors border-b border-[#0a0a0a]/10 ${
                    isActive
                      ? 'text-[#0675ad] font-black'
                      : isScrolled
                      ? 'text-[#0a0a0a] hover:text-[#0675ad] font-bold'
                      : 'text-white hover:text-[#0675ad] font-bold'
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
                className={`text-base uppercase tracking-wide flex items-center justify-between w-full py-3 transition-colors border-b border-[#0a0a0a]/10 ${
                  isSyarikatPage
                    ? 'text-[#0675ad] font-black'
                    : isScrolled
                    ? 'text-[#0a0a0a] hover:text-[#0675ad] font-bold'
                    : 'text-white hover:text-[#0675ad] font-bold'
                }`}
              >
                <span>Syarikat</span>
                <svg 
                  className="w-4 h-4"
                  fill="none" 
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mobile Submenu */}
              <div id="mobile-syarikat-submenu" className="hidden bg-[#0a0a0a]/5">
                {syarikatItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block text-sm uppercase tracking-wide py-3 px-6 transition-colors border-b border-[#0a0a0a]/10 ${
                        isActive
                          ? 'text-[#0675ad] font-black'
                          : isScrolled
                          ? 'text-[#0a0a0a] hover:text-[#0675ad] font-bold'
                          : 'text-white hover:text-[#0675ad] font-bold'
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
              className={`text-base font-bold uppercase tracking-wide py-3 transition-colors border-b border-[#0a0a0a]/10 ${
                pathname === '/hubungi-kami'
                  ? 'text-[#0675ad]'
                  : isScrolled
                  ? 'text-[#0a0a0a] hover:text-[#0675ad]'
                  : 'text-white hover:text-[#0675ad]'
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
