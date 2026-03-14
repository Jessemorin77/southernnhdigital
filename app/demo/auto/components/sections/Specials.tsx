import Link from "next/link";
import { specials } from "../../data/specials";
import SectionHeader from "../ui/SectionHeader";

export default function Specials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Current Specials"
          subtitle="Take advantage of these limited-time offers. Print or mention when scheduling."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specials.map((special) => (
            <div
              key={special.title}
              className="relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              {special.badge && (
                <span className="absolute -top-3 left-4 bg-emerald-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {special.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold text-gray-900 mt-2">
                {special.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{special.description}</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-emerald-700">
                  {special.price}
                </span>
                {special.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {special.originalPrice}
                  </span>
                )}
              </div>
              <ul className="mt-4 space-y-1.5">
                {special.details.map((detail) => (
                  <li key={detail} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-emerald-600 mt-0.5">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <Link
                href="/demo/auto/contact"
                className="block mt-6 text-center bg-emerald-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-800 transition-colors"
              >
                {special.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
