import Link from "next/link";
import { shopInfo } from "../../data/shop-info";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-emerald-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Ready to Experience the Difference?
        </h2>
        <p className="mt-4 text-lg text-emerald-100 max-w-2xl mx-auto">
          Schedule your service today or give us a call. No pressure, no upselling — just honest auto repair from people who care.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/demo/auto/contact"
            className="inline-flex items-center justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Service
          </Link>
          <a
            href={shopInfo.phoneHref}
            className="inline-flex items-center justify-center bg-transparent text-white border border-white/40 px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/10 transition-colors"
          >
            Call {shopInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
