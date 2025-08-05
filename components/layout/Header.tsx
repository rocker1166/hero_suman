'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  className?: string;
}

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/product-overview', label: 'Product Overview' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

const RESOURCE_LINKS = [
  { href: '/blog', label: 'Blog' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/guides', label: 'Guides' },
  { href: '/api-docs', label: 'API Documentation' },
];

export default function Header({ className = '' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close Resources dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click was on the hamburger button (to prevent immediate close)
      const target = event.target as Node;
      const hamburgerButton = document.querySelector('button[aria-label="Toggle mobile menu"]');
      const isHamburgerClick = hamburgerButton?.contains(target);

      if (mobileMenuRef.current && 
          !mobileMenuRef.current.contains(target) && 
          !isHamburgerClick && 
          isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`w-full max-w-7xl mx-auto h-16 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm px-4 sm:px-6 lg:px-8 ${className}`}>
      {/* Logo */}
      <Image
        className="w-24 sm:w-32 h-6 sm:h-8 absolute left-4 sm:left-[67.55px] top-1/2 -translate-y-1/2"
        src="/logo.png"
        alt="TheySaid Logo"
        width={130}
        height={30}
      />

      {/* Hamburger Menu */}
      <button
        className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 z-50 rounded-md"
        aria-label="Toggle mobile menu"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-4 lg:gap-8">
        {NAV_LINKS.slice(0, 2).map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap"
          >
            {label}
          </Link>
        ))}

        {/* Resources Dropdown */}
        <div className="relative cursor-pointer" ref={resourcesRef}>
          <div
            className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap"
            onClick={() => setIsResourcesOpen((prev) => !prev)}
          >
            <span>Resources</span>
            <svg className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {isResourcesOpen && (
            <div className="absolute top-full left-0 mt-1 backdrop-blur-md shadow-lg rounded-md py-2 w-48 z-50">
              {RESOURCE_LINKS.map(({ href, label }) => (
                <Link key={href} href={href} className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {NAV_LINKS.slice(2).map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap"
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 items-center gap-2 lg:gap-3">
        <Link
          href="/login"
          className="w-16 lg:w-20 h-8 lg:h-10 bg-white outline-gray-200 rounded-md flex items-center justify-center text-xs lg:text-sm font-medium text-zinc-900"
        >
          Login
        </Link>
        <Link
          href="/get-started"
          className="w-28 lg:w-40 h-8 lg:h-10 rounded-md outline outline-1 outline-offset-[-1px] bg-white outline-gray-200 flex items-center justify-center text-xs lg:text-sm font-medium text-zinc-900"
        >
          <span className="hidden sm:inline">Get Started - Free</span>
          <span className="sm:hidden">Get Started</span>
        </Link>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden fixed top-16 left-0 right-0 bottom-0 z-50 bg-white shadow-lg transition-all duration-300 ease-in-out">
          <nav className="flex flex-col p-6 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto bg-white">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                {label}
              </Link>
            ))}

            {/* Mobile Resources Dropdown */}
            <div className="text-sm font-medium text-gray-900">
              <button
                className="flex items-center justify-between w-full"
                onClick={() => setIsMobileResourcesOpen((prev) => !prev)}
              >
                <span>Resources</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isMobileResourcesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isMobileResourcesOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l border-gray-200 bg-white">
                  {RESOURCE_LINKS.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1 text-sm text-gray-800 hover:text-gray-900"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Auth */}
            <div className="flex flex-col space-y-3 pt-6 mt-2 border-t border-gray-200">
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors flex items-center justify-center py-2.5 border border-gray-200 rounded-lg"
              >
                Login
              </Link>
              <Link
                href="/get-started"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gray-900 text-white text-center text-sm font-medium px-5 py-3 rounded-lg hover:bg-black transition-colors flex items-center justify-center"
              >
                Get Started - Free
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
