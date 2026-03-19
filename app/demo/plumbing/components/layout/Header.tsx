"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { shopInfo } from "../../data/shop-info";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Specials", href: "#specials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Demo banner */}
      <div className="bg-[#1B3A5C] text-white text-center text-sm py-2 px-4">
        <span className="opacity-80">This is a demo site.</span>{" "}
        <Link href="/" className="underline font-semibold hover:text-[#E8742A] transition-colors">
          Want one like this for your business?
        </Link>
      </div>

      {/* Top bar with emergency badge */}
      <div className="hidden lg:block bg-[#F8F8F8] border-b border-gray-200 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          <div className="flex items-center gap-6 text-gray-500">
            <span>{shopInfo.address.full}</span>
            <span className="text-gray-300">|</span>
            <span>Mon–Fri 7AM–6PM, Sat 8AM–2PM</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500">{shopInfo.license}</span>
            <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 border border-red-200 rounded-full px-3 py-0.5 text-xs font-semibold">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              24/7 Emergency Line
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/demo/plumbing" className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-[#1B3A5C] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="leading-tight">
                <span
                  className="block text-lg font-extrabold text-[#1B3A5C]"
                  style={{ fontFamily: "var(--font-plumbing-display), sans-serif" }}
                >
                  Granite Plumbing
                </span>
                <span className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  & Home Services
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-gray-500 hover:text-[#1B3A5C] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop right side */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href={shopInfo.phoneHref}
                className="flex items-center gap-2"
              >
                <div className="w-9 h-9 bg-[#E8742A]/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#E8742A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <span className="block text-xs text-gray-400 font-medium">Call Us Today</span>
                  <span className="block text-sm font-bold text-[#1B3A5C]">{shopInfo.phone}</span>
                </div>
              </a>
              <a
                href="#contact"
                className="bg-[#E8742A] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#d4681f] transition-colors shadow-sm"
              >
                Schedule Service
              </a>
            </div>

            {/* Mobile right side */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={shopInfo.phoneHref}
                className="w-10 h-10 bg-[#E8742A]/10 rounded-full flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-[#E8742A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-gray-500"
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
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {/* Emergency badge mobile */}
            <div className="flex items-center gap-2 bg-red-50 text-red-600 rounded-lg px-4 py-2.5 mb-3 text-sm font-semibold">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              24/7 Emergency Service Available
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-semibold text-gray-600 hover:text-[#1B3A5C] transition-colors py-3 border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block bg-[#E8742A] text-white text-center px-5 py-3.5 rounded-lg text-sm font-bold hover:bg-[#d4681f] transition-colors mt-3"
            >
              Schedule Service
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
