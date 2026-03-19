import Link from "next/link";
import { shopInfo } from "../../data/shop-info";

export default function Footer() {
  return (
    <footer className="bg-[#1B3A5C] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-[#E8742A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="leading-tight">
                <span
                  className="block text-base font-bold text-white"
                  style={{ fontFamily: "var(--font-plumbing-display), sans-serif" }}
                >
                  Granite Plumbing
                </span>
                <span className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  & Home Services
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6">{shopInfo.tagline}</p>
            <div className="space-y-3 text-sm">
              <a
                href={shopInfo.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#E8742A] transition-colors"
              >
                {shopInfo.address.full}
              </a>
              <a href={shopInfo.phoneHref} className="block hover:text-[#E8742A] transition-colors">
                {shopInfo.phone}
              </a>
              <a href={`mailto:${shopInfo.email}`} className="block hover:text-[#E8742A] transition-colors">
                {shopInfo.email}
              </a>
              <p className="text-gray-500">{shopInfo.license}</p>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Hours
            </h4>
            <div className="space-y-2.5 text-sm">
              {shopInfo.hours.map((h) => (
                <div key={h.day} className="flex justify-between">
                  <span>{h.day}</span>
                  <span className={h.hours === "Emergency Only" ? "text-[#E8742A]" : ""}>
                    {h.hours}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-[#E8742A] font-semibold">
              <span className="w-2 h-2 bg-[#E8742A] rounded-full" />
              24/7 Emergency Service
            </div>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {shopInfo.services.map((s) => (
                <li key={s.name}>
                  <a href="#services" className="hover:text-[#E8742A] transition-colors">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Service Areas & Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Service Areas
            </h4>
            <p className="text-sm text-gray-400 mb-6">
              {shopInfo.serviceAreas.join(" · ")}
            </p>

            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Services", href: "#services" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "About Us", href: "#about" },
                { label: "Reviews", href: "#reviews" },
                { label: "Special Offers", href: "#specials" },
                { label: "Contact", href: "#contact" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#E8742A] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {shopInfo.name}. All rights reserved. Licensed, Bonded & Insured.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-gray-300 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-gray-600">&middot;</span>
            <Link href="/" className="hover:text-[#E8742A] transition-colors">
              Built by Southern NH Digital
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
