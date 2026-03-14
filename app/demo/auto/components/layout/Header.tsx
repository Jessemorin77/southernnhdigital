"use client";

import { useState } from "react";
import Link from "next/link";
import { shopInfo } from "../../data/shop-info";

const navLinks = [
  { label: "Services", href: "/demo/auto/services" },
  { label: "About", href: "/demo/auto/about" },
  { label: "Reviews", href: "/demo/auto/reviews" },
  { label: "Specials", href: "/demo/auto/specials" },
  { label: "Gallery", href: "/demo/auto/gallery" },
  { label: "Contact", href: "/demo/auto/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Demo banner */}
      <div className="bg-emerald-700 text-white text-center text-sm py-2 px-4">
        <span className="opacity-80">This is a demo site.</span>{" "}
        <Link href="/" className="underline font-semibold hover:text-emerald-200">
          Want one like this for your business?
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/demo/auto" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-display font-bold text-gray-900">
              Granite State
            </span>
            <span className="text-xl md:text-2xl font-display font-bold text-emerald-700">
              Auto
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={shopInfo.phoneHref}
              className="text-sm font-semibold text-gray-900 hover:text-emerald-700 transition-colors"
            >
              {shopInfo.phone}
            </a>
            <Link
              href="/demo/auto/contact"
              className="bg-emerald-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-800 transition-colors"
            >
              Schedule Service
            </Link>
          </div>

          {/* Mobile right side */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={shopInfo.phoneHref}
              className="text-sm font-semibold text-emerald-700"
            >
              {shopInfo.phone}
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-600"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-gray-700 hover:text-emerald-700 transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/demo/auto/contact"
              onClick={() => setMobileOpen(false)}
              className="block bg-emerald-700 text-white text-center px-5 py-3 rounded-lg text-sm font-semibold hover:bg-emerald-800 transition-colors mt-4"
            >
              Schedule Service
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
