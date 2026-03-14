import Link from "next/link";
import { shopInfo } from "../../data/shop-info";
import { services } from "../../data/services";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Shop Info */}
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              {shopInfo.name}
            </h3>
            <p className="text-sm text-gray-400 mb-6">{shopInfo.tagline}</p>
            <div className="space-y-3 text-sm">
              <a
                href={shopInfo.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-emerald-400 transition-colors"
              >
                {shopInfo.address.full}
              </a>
              <a
                href={shopInfo.phoneHref}
                className="block hover:text-emerald-400 transition-colors"
              >
                {shopInfo.phone}
              </a>
              <a
                href={`mailto:${shopInfo.email}`}
                className="block hover:text-emerald-400 transition-colors"
              >
                {shopInfo.email}
              </a>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Hours
            </h4>
            <div className="space-y-2 text-sm">
              {shopInfo.hours.map((h) => (
                <div key={h.day} className="flex justify-between">
                  <span>{h.day}</span>
                  <span className={h.hours === "Closed" ? "text-red-400" : ""}>
                    {h.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Quick Links + Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm mb-8">
              {[
                { label: "Home", href: "/demo/auto" },
                { label: "Services", href: "/demo/auto/services" },
                { label: "About Us", href: "/demo/auto/about" },
                { label: "Reviews", href: "/demo/auto/reviews" },
                { label: "Specials", href: "/demo/auto/specials" },
                { label: "Gallery", href: "/demo/auto/gallery" },
                { label: "Contact", href: "/demo/auto/contact" },
                { label: "FAQ", href: "/demo/auto/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/demo/auto/services/${s.slug}`}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Service Area + Certifications */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Service Area
            </h4>
            <p className="text-sm mb-4">
              {shopInfo.serviceArea.join(" · ")}
            </p>

            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 mt-8">
              Certifications
            </h4>
            <ul className="space-y-2 text-sm">
              {shopInfo.certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>

            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 mt-8">
              We Accept
            </h4>
            <p className="text-sm">
              {shopInfo.paymentMethods.join(" · ")}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {shopInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/demo/auto/faq" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-700">·</span>
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              Built by Southern NH Digital
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
