"use client";

import { shopInfo } from "../../data/shop-info";
import FadeIn from "../ui/FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 md:pt-44 md:pb-32">
        {/* Rating badge */}
        <FadeIn delay={200}>
          <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 mb-8">
            <span className="text-[#C8A960] text-base">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span className="text-sm font-medium text-[#E8E4DF]">
              {shopInfo.stats.rating} Stars &middot; {shopInfo.stats.reviewCount}+ Reviews
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white max-w-4xl leading-[1.05]"
            style={{ fontFamily: "var(--font-barber-display), serif" }}
          >
            Where Craft
            <br />
            Meets <span className="text-[#C8A960]">Character</span>
          </h1>
        </FadeIn>

        <FadeIn delay={600}>
          <p className="mt-7 text-lg md:text-xl text-[#9A9589] max-w-xl leading-relaxed">
            Premium cuts, straight razor shaves, and an atmosphere that makes you want to stay.
            {" "}{shopInfo.stats.yearsInBusiness} years on Elm Street, Manchester.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={800}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#C8A960] text-[#0A0A0A] px-9 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#d4b76e] transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Your Cut
            </a>
            <a
              href={shopInfo.phoneHref}
              className="inline-flex items-center justify-center bg-transparent text-[#C8A960] border border-[#C8A960]/30 px-9 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#C8A960]/5 transition-all duration-300"
            >
              Call {shopInfo.phone}
            </a>
          </div>
        </FadeIn>

        {/* Trust signals */}
        <FadeIn delay={1000}>
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#6A6560]">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#C8A960] rounded-full" />
              Walk-ins Welcome
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#C8A960] rounded-full" />
              Online Booking
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#C8A960] rounded-full" />
              Complimentary Drinks
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#C8A960] rounded-full" />
              Free Parking
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
