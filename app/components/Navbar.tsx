'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/results', label: 'Results' },
    { href: '/support-protection', label: 'Support & Protection' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0A1628]/95 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center">
            <span className="text-[#0A1628] font-semibold text-2xl tracking-[-1.5px]">OR</span>
          </div>
          <span className="font-semibold text-2xl tracking-[-1px]">OverRide</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9 text-sm font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="hover:text-[#60A5FA] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/book-consultation"
            className="px-6 py-2.5 rounded-full bg-white text-[#0A1628] font-semibold text-sm hover:bg-[#E0E7FF] transition-all active:scale-[0.985]"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6h12v12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0A1628]">
          <div className="px-6 py-8 flex flex-col gap-6 text-lg">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="hover:text-[#60A5FA] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/book-consultation"
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full text-center px-6 py-3.5 rounded-full bg-white text-[#0A1628] font-semibold"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
