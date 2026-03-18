import Link from "next/link";
import { shopInfo } from "../../data/shop-info";

export default function Footer() {
  return (
    <footer className="bg-[#060606] text-[#9A9589] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Shop Info */}
          <div>
            <h3
              className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-barber-display), serif" }}
            >
              {shopInfo.name}
            </h3>
            <p className="text-sm text-[#6A6560] mb-6">{shopInfo.tagline}</p>
            <div className="space-y-3 text-sm">
              <a
                href={shopInfo.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#C8A960] transition-colors"
              >
                {shopInfo.address.full}
              </a>
              <a
                href={shopInfo.phoneHref}
                className="block hover:text-[#C8A960] transition-colors"
              >
                {shopInfo.phone}
              </a>
              <a
                href={`mailto:${shopInfo.email}`}
                className="block hover:text-[#C8A960] transition-colors"
              >
                {shopInfo.email}
              </a>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-5">
              Hours
            </h4>
            <div className="space-y-2.5 text-sm">
              {shopInfo.hours.map((h) => (
                <div key={h.day} className="flex justify-between">
                  <span>{h.day}</span>
                  <span className={h.hours === "Closed" ? "text-red-400/70" : ""}>
                    {h.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-5">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {shopInfo.services.map((s) => (
                <li key={s.name} className="flex justify-between">
                  <span>{s.name}</span>
                  <span className="text-[#C8A960]">{s.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Services", href: "#services" },
                { label: "About Marcus", href: "#about" },
                { label: "Our Team", href: "#team" },
                { label: "Gallery", href: "#gallery" },
                { label: "Reviews", href: "#reviews" },
                { label: "Book Appointment", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#C8A960] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-4 mt-8">
              We Accept
            </h4>
            <p className="text-sm">
              Cash · Visa · Mastercard · Apple Pay · Venmo
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#4A4540]">
          <p>&copy; {new Date().getFullYear()} {shopInfo.name} All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#6A6560] transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-[#2A2520]">&middot;</span>
            <Link href="/" className="hover:text-[#C8A960] transition-colors">
              Built by Southern NH Digital
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
