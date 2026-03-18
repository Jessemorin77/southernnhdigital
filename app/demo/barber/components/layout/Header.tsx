"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { shopInfo } from "../../data/shop-info";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
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
      <div className="bg-[#C8A960] text-[#0A0A0A] text-center text-sm py-2 px-4">
        <span className="opacity-80">This is a demo site.</span>{" "}
        <Link href="/" className="underline font-semibold hover:opacity-70 transition-opacity">
          Want one like this for your business?
        </Link>
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#1E1E1E]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/demo/barber" className="flex items-center gap-2">
              <span
                className="text-xl md:text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-barber-display), serif" }}
              >
                Elm Street
              </span>
              <span
                className="text-xl md:text-2xl font-bold text-[#C8A960]"
                style={{ fontFamily: "var(--font-barber-display), serif" }}
              >
                Barber
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs font-medium uppercase tracking-wider text-[#888] hover:text-[#C8A960] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop right side */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href={shopInfo.phoneHref}
                className="text-sm font-semibold text-[#9A9589] hover:text-[#C8A960] transition-colors"
              >
                {shopInfo.phone}
              </a>
              <a
                href="#contact"
                className="bg-[#C8A960] text-[#0A0A0A] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#d4b76e] transition-colors"
              >
                Book Now
              </a>
            </div>

            {/* Mobile right side */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={shopInfo.phoneHref}
                className="text-sm font-semibold text-[#C8A960]"
              >
                {shopInfo.phone}
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-[#888]"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A0A0A]/98 backdrop-blur-md border-b border-[#1E1E1E]">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-[#9A9589] hover:text-[#C8A960] transition-colors py-3 border-b border-[#1A1A1A]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block bg-[#C8A960] text-[#0A0A0A] text-center px-5 py-3.5 text-sm font-semibold uppercase tracking-wider mt-4"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
