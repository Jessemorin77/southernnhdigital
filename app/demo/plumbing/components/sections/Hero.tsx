"use client";

import { shopInfo } from "../../data/shop-info";
import FadeIn from "../ui/FadeIn";

export default function Hero() {
  return (
    <section className="relative bg-[#F8FAFB] overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #1B3A5C 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 lg:pt-52 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <FadeIn delay={100}>
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-7 shadow-sm">
                <span className="text-[#E8742A] text-sm">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span className="text-sm font-semibold text-gray-600">
                  {shopInfo.stats.rating} Stars &middot; {shopInfo.stats.reviewCount}+ Reviews
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={250}>
              <h1
                className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#1B3A5C] leading-[1.1] mb-6"
                style={{ fontFamily: "var(--font-plumbing-display), sans-serif" }}
              >
                Home Services You Can{" "}
                <span className="text-[#E8742A]">Actually Trust</span>
              </h1>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-lg text-gray-500 leading-relaxed max-w-lg mb-8">
                Licensed plumbing, HVAC, and home repair from a family-owned company
                that&apos;s been serving Southern New Hampshire for {shopInfo.stats.yearsInBusiness} years.
                Upfront pricing. No surprises. Guaranteed.
              </p>
            </FadeIn>

            <FadeIn delay={550}>
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-[#E8742A] text-white px-8 py-4 rounded-lg text-sm font-bold hover:bg-[#d4681f] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#E8742A]/20"
                >
                  Schedule Service
                </a>
                <a
                  href={shopInfo.phoneHref}
                  className="inline-flex items-center justify-center bg-white text-[#1B3A5C] border-2 border-[#1B3A5C]/15 px-8 py-4 rounded-lg text-sm font-bold hover:border-[#1B3A5C]/30 transition-all duration-300"
                >
                  <svg className="w-4 h-4 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  24/7 Emergency: {shopInfo.phone}
                </a>
              </div>
            </FadeIn>

            {/* Trust signals */}
            <FadeIn delay={700}>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  "Licensed & Insured",
                  "18+ Years Experience",
                  "Upfront Pricing",
                  "Satisfaction Guaranteed",
                ].map((signal) => (
                  <span key={signal} className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-[#E8742A] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {signal}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right image */}
          <FadeIn delay={400} direction="left">
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                  alt="Professional plumber at work"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-[#E8742A]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#E8742A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm font-bold text-[#1B3A5C]">60-Min Response</span>
                  <span className="block text-xs text-gray-400">On emergency calls</span>
                </div>
              </div>
              {/* Floating badge top right */}
              <div className="absolute -top-4 -right-4 bg-[#1B3A5C] text-white rounded-xl shadow-lg p-4 text-center">
                <span className="block text-2xl font-extrabold">{shopInfo.stats.yearsInBusiness}+</span>
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-gray-300">Years Serving NH</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
