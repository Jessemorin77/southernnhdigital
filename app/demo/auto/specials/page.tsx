import Link from "next/link";
import { specials } from "../data/specials";
import CtaBanner from "../components/sections/CtaBanner";

export default function SpecialsPage() {
  const regularSpecials = specials.filter((s) => s.badge !== "First Visit");
  const firstVisit = specials.find((s) => s.badge === "First Visit");

  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Current Specials
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Save on the services you need. Mention these offers when you schedule or just show this page when you arrive.
          </p>
        </div>
      </section>

      {/* Active Specials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regularSpecials.map((special) => (
              <div
                key={special.title}
                className="relative border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                {special.badge && (
                  <span className="absolute -top-3 left-6 bg-emerald-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {special.badge}
                  </span>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mt-2">
                  {special.title}
                </h3>
                <p className="mt-2 text-gray-600">{special.description}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-emerald-700">
                    {special.price}
                  </span>
                  {special.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      {special.originalPrice}
                    </span>
                  )}
                </div>
                <ul className="mt-6 space-y-2">
                  {special.details.map((detail) => (
                    <li key={detail} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-emerald-600 mt-0.5">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/demo/auto/contact"
                  className="block mt-8 text-center bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors"
                >
                  {special.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First-Time Customer Offer */}
      {firstVisit && (
        <section className="py-20 bg-emerald-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border-2 border-emerald-300 rounded-2xl p-8 md:p-12 text-center">
              <span className="inline-block bg-emerald-700 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                {firstVisit.badge}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
                {firstVisit.title}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {firstVisit.description}
              </p>
              <div className="mt-6 text-4xl font-bold text-emerald-700">
                {firstVisit.price}
              </div>
              <ul className="mt-6 inline-flex flex-col items-start gap-2">
                {firstVisit.details.map((detail) => (
                  <li key={detail} className="text-gray-600 flex items-center gap-2">
                    <span className="text-emerald-600">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/demo/auto/contact"
                  className="inline-flex items-center justify-center bg-emerald-700 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-emerald-800 transition-colors"
                >
                  {firstVisit.cta}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
