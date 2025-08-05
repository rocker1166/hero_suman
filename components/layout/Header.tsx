'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  // Close Resources dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  // Close mobile menu when resizing to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) { // md breakpoint in Tailwind
        setIsMenuOpen(false);
      }
    }
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`w-full max-w-7xl mx-auto h-16 relative bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8 ${className}`}>
      {/* Logo */}
      <Image 
        className="w-24 sm:w-32 h-6 sm:h-8 absolute left-4 sm:left-[67.55px] top-1/2 transform -translate-y-1/2" 
        src="/logo.png" 
        alt="TheySaid Logo"
        width={130}
        height={30}
      />
      
      {/* Hamburger Menu Button for Small Screens */}
      <button 
        className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 p-2 z-50 bg-white rounded-md"
        aria-label="Toggle mobile menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      
      {/* Navigation Menu - Hidden on mobile, visible on md+ */}
      <nav className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-4 lg:gap-8">
        {/* Home */}
        <Link href="/" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap">
          Home
        </Link>
        
        {/* Product Overview */}
        <Link href="/product-overview" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap">
          Product Overview
        </Link>
        
        {/* Resources with Dropdown */}
        <div className="relative cursor-pointer" ref={resourcesRef}>
          <div 
            className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap"
            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
          >
            <span>Resources</span>
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          {/* Resources Dropdown Menu */}
          {isResourcesOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 w-48 z-50">
              <Link href="/blog" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                Blog
              </Link>
              <Link href="/case-studies" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                Case Studies
              </Link>
              <Link href="/guides" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                Guides
              </Link>
              <Link href="/api-docs" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                API Documentation
              </Link>
            </div>
          )}
        </div>
        
        {/* Pricing */}
        <Link href="/pricing" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap">
          Pricing
        </Link>
        
        {/* Contact */}
        <Link href="/contact" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap">
          Contact
        </Link>
      </nav>
      
      {/* Auth Buttons - Responsive */}
      <div className="hidden md:flex absolute right-4 lg:right-6 top-1/2 transform -translate-y-1/2 items-center gap-2 lg:gap-3">
        {/* Login Button */}
        <Link href="/login" className="w-16 lg:w-20 h-8 lg:h-10 relative bg-white rounded-md flex items-center justify-center text-xs lg:text-sm font-medium text-zinc-900">
          Login
        </Link>
        
        {/* Get Started Button */}
        <Link href="/get-started" className="w-28 lg:w-40 h-8 lg:h-10 relative bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200 flex items-center justify-center text-xs lg:text-sm font-medium text-zinc-900">
          <span className="hidden sm:inline">Get Started - Free</span>
          <span className="sm:hidden">Get Started</span>
        </Link>
      </div>
      
      {/* Mobile Menu - Hidden by default, can be toggled */}
      <div className={`md:hidden fixed top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <nav className="flex flex-col p-6 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <Link href="/" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/product-overview" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Product Overview
          </Link>
          
          {/* Mobile Resources Dropdown */}
          <div className="text-sm font-medium text-gray-900">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
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
            </div>
            
            {isMobileResourcesOpen && (
              <div className="pl-4 mt-2 space-y-2 border-l border-gray-200">
                <Link href="/blog" className="block py-1 text-sm text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                  Blog
                </Link>
                <Link href="/case-studies" className="block py-1 text-sm text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                  Case Studies
                </Link>
                <Link href="/guides" className="block py-1 text-sm text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                  Guides
                </Link>
                <Link href="/api-docs" className="block py-1 text-sm text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                  API Documentation
                </Link>
              </div>
            )}
          </div>
          
          <Link href="/pricing" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Pricing
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
            <Link href="/login" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
            <Link 
              href="/get-started" 
              className="bg-gradient-to-r from-rose-400 to-indigo-400 text-white text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started - Free
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
