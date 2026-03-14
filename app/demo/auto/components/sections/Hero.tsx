import Link from "next/link";
import { shopInfo } from "../../data/shop-info";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/75" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        {/* Google rating badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="text-yellow-400 text-lg">★★★★★</span>
          <span className="text-sm font-medium">
            {shopInfo.stats.rating} Stars · {shopInfo.stats.reviewCount}+ Google Reviews
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl leading-tight">
          Manchester&apos;s Most Trusted Auto Repair Shop
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          {shopInfo.tagline} Family-owned for {shopInfo.stats.yearsInBusiness}+ years, serving Southern New Hampshire
          with ASE-certified expertise and a 24-month warranty on every repair.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/demo/auto/contact"
            className="inline-flex items-center justify-center bg-emerald-700 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-emerald-800 transition-colors"
          >
            Schedule Service
          </Link>
          <a
            href={shopInfo.phoneHref}
            className="inline-flex items-center justify-center bg-transparent text-white border border-white/30 px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/10 transition-colors"
          >
            Call {shopInfo.phone}
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-400">
          <span>✓ ASE Certified Technicians</span>
          <span>✓ 24-Month / 24K Warranty</span>
          <span>✓ Free Estimates</span>
          <span>✓ Same-Day Service Available</span>
        </div>
      </div>
    </section>
  );
}
